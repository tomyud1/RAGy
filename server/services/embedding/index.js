/**
 * Embedding Service - Main Entry Point
 * 
 * This module orchestrates embedding generation, vector storage, and job management.
 */

import { v4 as uuidv4 } from 'uuid';
import { pipeline } from '@xenova/transformers';
import path from 'path';

import { detectHardware, getAvailableDevices } from './hardware-detector.js';
import { generateEmbeddingsStreaming, generateEmbeddingsPython } from './python-bridge.js';
import { activeJobs, activePythonProcesses, createJob, getExistingJobForProject, cancelJob, cleanupJob } from './job-manager.js';
import { createIndex, addPoint, saveVectorDb } from './hnsw-manager.js';
import { EMBEDDING_MODELS, getModelConfig } from './models.js';
import { ProjectService } from '../project.service.js';

export class EmbeddingService {
  // Expose static references for backward compatibility
  static activeJobs = activeJobs;
  static activePythonProcesses = activePythonProcesses;

  /**
   * Get available GPU devices
   */
  static async getAvailableDevices() {
    return getAvailableDevices();
  }

  /**
   * Detect hardware capabilities
   */
  static detectHardware() {
    return detectHardware();
  }

  /**
   * Generate embeddings using Python
   */
  static async generateEmbeddingsPython(texts, modelId, devicePreference = 'auto', batchSize = 32, jobId = null) {
    return generateEmbeddingsPython(texts, modelId, devicePreference, batchSize, jobId, activePythonProcesses);
  }

  /**
   * Generate embeddings with streaming
   */
  static async generateEmbeddingsStreaming(chunks, modelId, devicePreference = 'auto', batchSize = 32, jobId, onProgress) {
    return generateEmbeddingsStreaming(chunks, modelId, devicePreference, batchSize, jobId, onProgress, activePythonProcesses, activeJobs);
  }

  /**
   * Start an embedding job
   */
  static async startEmbedding(projectId, modelId, devicePreference = 'auto', broadcastFn) {
    const jobId = uuidv4();

    // Check for existing job
    const existingJob = getExistingJobForProject(projectId);
    if (existingJob) {
      console.log(`[Embedding] Job already running for project ${projectId}`);
      return { jobId: existingJob.jobId };
    }

    const jobControl = createJob(jobId, projectId);

    // Start job in background
    this.runEmbeddingJob(projectId, modelId, devicePreference, jobId, broadcastFn, jobControl)
      .catch(error => {
        console.error('Embedding job failed:', error);
        broadcastFn(jobId, {
          type: 'error',
          error: error.message,
        });
      })
      .finally(() => {
        cleanupJob(jobId);
      });

    return { jobId };
  }

  /**
   * Cancel an embedding job
   */
  static cancelJob(jobId) {
    return cancelJob(jobId);
  }

  /**
   * Run the embedding job
   */
  static async runEmbeddingJob(projectId, modelId, devicePreference, jobId, broadcastFn, jobControl) {
    const modelConfig = getModelConfig(modelId);

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

    const useGPU = devicePreference !== 'cpu' && 
                   (devicePreference === 'metal' || devicePreference === 'cuda' || devicePreference === 'auto');

    const hardware = detectHardware();
    console.log(`[Embedding] Device preference: ${devicePreference}, Using GPU: ${useGPU}`);

    const uiBatchSize = 5;
    const totalBatches = Math.ceil(totalChunks / uiBatchSize);

    // Initialize
    broadcastFn(jobId, {
      type: 'progress',
      progress: 0,
      status: 'Initializing model...',
      processedChunks: 0,
      totalChunks,
      totalBatches,
      hardware: {
        ...hardware,
        devicePreference,
        usingGPU: useGPU
      },
    });

    if (jobControl.cancelled) {
      return;
    }

    // Create HNSW index
    const dimensions = modelConfig.dimensions;
    const maxElements = totalChunks + 1000;
    const index = createIndex(dimensions, maxElements);

    const startTime = Date.now();
    const allMetadata = [];

    if (useGPU) {
      try {
        let totalProcessed = 0;

        if (jobControl.cancelled) {
          return;
        }

        await generateEmbeddingsStreaming(
          chunks,
          modelId,
          devicePreference,
          32,
          jobId,
          (chunkIndex, embedding) => {
            if (jobControl.cancelled) return;

            addPoint(index, embedding, chunkIndex);

            allMetadata.push({
              id: chunkIndex,
              text: chunks[chunkIndex].text,
              metadata: chunks[chunkIndex].metadata || {},
              tokens: chunks[chunkIndex].tokens,
            });

            totalProcessed++;

            const progress = (totalProcessed / totalChunks) * 100;
            const elapsed = (Date.now() - startTime) / 1000;
            const speed = totalProcessed / elapsed;
            const eta = (totalChunks - totalProcessed) / speed;

            broadcastFn(jobId, {
              type: 'progress',
              progress,
              processedChunks: totalProcessed,
              totalChunks,
              currentBatch: Math.floor(totalProcessed / 5) + 1,
              totalBatches,
              speed,
              avgTimePerChunk: (elapsed * 1000) / totalProcessed,
              eta,
              hardware: { ...hardware, devicePreference, usingGPU: useGPU },
            });

            if (global.gc && totalProcessed % 100 === 0) {
              global.gc();
            }
          },
          activePythonProcesses,
          activeJobs
        );

      } catch (error) {
        if (jobControl.cancelled) {
          allMetadata.length = 0;
          if (global.gc) global.gc();
          return;
        }
        throw error;
      }
    } else {
      // CPU path
      const extractor = await pipeline('feature-extraction', modelConfig.name);
      let processedChunks = 0;
      const processingBatchSize = 5;

      for (let i = 0; i < totalChunks; i += processingBatchSize) {
        if (jobControl.cancelled) {
          broadcastFn(jobId, { type: 'cancelled', message: 'Job cancelled by user' });
          return;
        }

        const batch = chunks.slice(i, Math.min(i + processingBatchSize, totalChunks));
        const batchTexts = batch.map(c => c.text);

        const batchStartTime = Date.now();
        const embeddings = await extractor(batchTexts, { pooling: 'mean', normalize: true });

        for (let j = 0; j < batch.length; j++) {
          const embedding = Array.from(embeddings[j].data);
          addPoint(index, embedding, processedChunks + j);

          allMetadata.push({
            id: processedChunks + j,
            text: batch[j].text,
            metadata: batch[j].metadata || {},
            tokens: batch[j].tokens,
          });
        }

        processedChunks += batch.length;
        const progress = (processedChunks / totalChunks) * 100;
        const elapsed = (Date.now() - startTime) / 1000;
        const batchTime = Date.now() - batchStartTime;
        const speed = processedChunks / elapsed;
        const eta = (totalChunks - processedChunks) / speed;

        broadcastFn(jobId, {
          type: 'progress',
          progress,
          processedChunks,
          totalChunks,
          currentBatch: Math.floor(i / processingBatchSize) + 1,
          totalBatches: Math.ceil(totalChunks / processingBatchSize),
          speed,
          avgTimePerChunk: batchTime / batch.length,
          eta,
          hardware: { ...hardware, devicePreference, usingGPU: useGPU },
        });
      }
    }

    // Save vector database
    const vectorDbId = `${modelId}-${Date.now()}`;
    const vectorDbDir = path.join(ProjectService.getVectorDbsPath(projectId), vectorDbId);

    const totalElapsed = (Date.now() - startTime) / 1000;

    const config = {
      modelId,
      modelName: modelConfig.name,
      dimensions,
      chunkCount: totalChunks,
      createdAt: new Date().toISOString(),
      elapsedTimeSeconds: totalElapsed,
      avgTimePerChunk: (totalElapsed * 1000) / totalChunks,
      device: devicePreference,
      gpuAcceleration: useGPU,
    };

    await saveVectorDb(index, allMetadata, config, vectorDbDir);

    broadcastFn(jobId, {
      type: 'complete',
      vectorDb: {
        id: vectorDbId,
        ...config,
      },
    });
  }
}

