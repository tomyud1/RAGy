import { pipeline, env } from '@xenova/transformers';
import hnswlib from 'hnswlib-node';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';
import { ProjectService } from './project.service.js';

const EMBEDDING_MODELS = {
  'all-MiniLM-L6-v2': {
    name: 'Xenova/all-MiniLM-L6-v2',
    dimensions: 384,
  },
  'bge-base-en-v1.5': {
    name: 'Xenova/bge-base-en-v1.5',
    dimensions: 768,
  },
  'all-mpnet-base-v2': {
    name: 'Xenova/all-mpnet-base-v2',
    dimensions: 768,
  },
};

export class EmbeddingService {
  static activeJobs = new Map();
  
  static detectHardware() {
    const platform = os.platform();
    const cpuInfo = os.cpus()[0]?.model || 'Unknown CPU';
    
    // Detect Apple Silicon (M-series)
    if (platform === 'darwin' && cpuInfo.includes('Apple')) {
      const match = cpuInfo.match(/Apple (M\d+\s?\w*)/);
      const chipName = match ? match[1] : 'Apple Silicon';
      return {
        type: 'mps',
        name: chipName,
        description: `Leveraging your ${chipName} Neural Engine for fast embedding generation`
      };
    }
    
    // Detect NVIDIA GPU (would need CUDA drivers)
    // Note: This is a best-effort detection
    if (env.backends?.cuda) {
      return {
        type: 'cuda',
        name: 'NVIDIA GPU',
        description: 'Leveraging your NVIDIA GPU with CUDA acceleration'
      };
    }
    
    // Detect AMD GPU (would need ROCm)
    if (env.backends?.rocm) {
      return {
        type: 'rocm',
        name: 'AMD GPU',
        description: 'Leveraging your AMD GPU with ROCm acceleration'
      };
    }
    
    // Fallback to CPU with WASM/SIMD
    return {
      type: 'cpu',
      name: cpuInfo,
      description: `Using CPU acceleration with WebAssembly (${os.cpus().length} cores)`
    };
  }
  
  static async startEmbedding(projectId, modelId, broadcastFn) {
    const jobId = uuidv4();
    
    // Check if there's already a job for this project
    const existingJob = Array.from(this.activeJobs.values()).find(j => j.projectId === projectId);
    if (existingJob) {
      console.log(`[Embedding] Job already running for project ${projectId}, returning existing jobId`);
      return { jobId: existingJob.jobId };
    }
    
    // Track this job
    const jobControl = {
      jobId,
      projectId,
      cancelled: false,
      cancel: () => {
        jobControl.cancelled = true;
        console.log(`[Embedding] Job ${jobId} cancelled`);
      }
    };
    this.activeJobs.set(jobId, jobControl);
    
    // Start the job in background
    this.runEmbeddingJob(projectId, modelId, jobId, broadcastFn, jobControl)
      .catch(error => {
        console.error('Embedding job failed:', error);
        broadcastFn(jobId, {
          type: 'error',
          error: error.message,
        });
      })
      .finally(() => {
        this.activeJobs.delete(jobId);
      });
    
    return { jobId };
  }
  
  static cancelJob(jobId) {
    const job = this.activeJobs.get(jobId);
    if (job) {
      job.cancel();
      return true;
    }
    return false;
  }
  
  static async runEmbeddingJob(projectId, modelId, jobId, broadcastFn, jobControl) {
    const modelConfig = EMBEDDING_MODELS[modelId];
    
    if (!modelConfig) {
      throw new Error(`Unknown model: ${modelId}`);
    }
    
    // Load chunks
    const chunksData = await ProjectService.getProjectChunks(projectId);
    
    if (!chunksData || !chunksData.chunks) {
      throw new Error('No chunks found for project');
    }
    
    const chunks = chunksData.chunks;
    const totalChunks = chunks.length;
    
    // Detect hardware
    const hardware = this.detectHardware();
    console.log(`[Embedding] Detected hardware: ${hardware.type} - ${hardware.name}`);
    
    // Process in batches - smaller batches = more frequent progress updates
    const batchSize = 5; // Update progress every 5 chunks for snappier UI
    const totalBatches = Math.ceil(totalChunks / batchSize);
    
    // Initialize embedding pipeline
    broadcastFn(jobId, {
      type: 'progress',
      progress: 0,
      status: 'Initializing model...',
      processedChunks: 0,
      totalChunks,
      totalBatches,
      hardware,
    });
    
    // Check if cancelled
    if (jobControl.cancelled) {
      console.log(`[Embedding] Job ${jobId} cancelled during initialization`);
      return;
    }
    
    const extractor = await pipeline('feature-extraction', modelConfig.name);
    
    // Create HNSW index
    const dimensions = modelConfig.dimensions;
    const maxElements = totalChunks + 1000; // Extra space
    const index = new hnswlib.HierarchicalNSW('cosine', dimensions);
    index.initIndex(maxElements, totalChunks);
    
    const startTime = Date.now();
    
    const allMetadata = [];
    let processedChunks = 0;
    
    for (let i = 0; i < totalChunks; i += batchSize) {
      // Check if cancelled
      if (jobControl.cancelled) {
        console.log(`[Embedding] Job ${jobId} cancelled at chunk ${processedChunks}`);
        broadcastFn(jobId, {
          type: 'cancelled',
          message: 'Job cancelled by user'
        });
        return;
      }
      
      const batch = chunks.slice(i, Math.min(i + batchSize, totalChunks));
      const batchTexts = batch.map(c => c.text);
      
      const batchStartTime = Date.now();
      
      // Generate embeddings for batch
      const embeddings = await extractor(batchTexts, { pooling: 'mean', normalize: true });
      
      // Add to index
      for (let j = 0; j < batch.length; j++) {
        const embedding = Array.from(embeddings[j].data);
        index.addPoint(embedding, processedChunks + j);
        
        allMetadata.push({
          id: processedChunks + j,
          text: batch[j].text,
          metadata: batch[j].metadata || {},
          tokens: batch[j].tokens,
        });
      }
      
      processedChunks += batch.length;
      const currentBatch = Math.floor(i / batchSize) + 1;
      const progress = (processedChunks / totalChunks) * 100;
      
      // Calculate detailed stats
      const elapsed = (Date.now() - startTime) / 1000;
      const batchTime = (Date.now() - batchStartTime);
      const avgTimePerChunk = batchTime / batch.length;
      const speed = processedChunks / elapsed;
      const remaining = totalChunks - processedChunks;
      const eta = remaining / speed;
      
      // Broadcast progress
      broadcastFn(jobId, {
        type: 'progress',
        progress,
        processedChunks,
        totalChunks,
        currentBatch,
        totalBatches,
        speed,
        avgTimePerChunk,
        eta,
        hardware,
      });
    }
    
    // Save vector database
    const vectorDbId = `${modelId}-${Date.now()}`;
    const vectorDbDir = path.join(ProjectService.getVectorDbsPath(projectId), vectorDbId);
    await fs.mkdir(vectorDbDir, { recursive: true });
    
    // Save index
    index.writeIndexSync(path.join(vectorDbDir, 'index.hnsw'));
    
    // Save metadata
    await fs.writeFile(
      path.join(vectorDbDir, 'metadata.json'),
      JSON.stringify(allMetadata, null, 2)
    );
    
    // Save config
    const config = {
      modelId,
      modelName: modelConfig.name,
      dimensions,
      chunkCount: totalChunks,
      createdAt: new Date().toISOString(),
    };
    
    await fs.writeFile(
      path.join(vectorDbDir, 'config.json'),
      JSON.stringify(config, null, 2)
    );
    
    // Broadcast completion
    broadcastFn(jobId, {
      type: 'complete',
      vectorDb: {
        id: vectorDbId,
        ...config,
      },
    });
  }
}

