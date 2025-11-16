import { pipeline, env } from '@xenova/transformers';
import hnswlib from 'hnswlib-node';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ProjectService } from './project.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  static activePythonProcesses = new Map(); // Track Python processes for cleanup (jobId -> Set of processes)
  
  /**
   * Get available GPU devices using Python backend
   */
  static async getAvailableDevices() {
    try {
      const pythonScript = path.join(__dirname, '../python/embedding_service.py');
      const result = await this.runPythonCommand(pythonScript, ['devices']);

      if (result.success) {
        return result.devices;
      }

      // Fallback if Python service fails
      console.warn('[Embedding] Failed to get devices from Python service, using fallback');
      return this.getFallbackDevices();
    } catch (error) {
      console.error('[Embedding] Error getting available devices:', error);
      return this.getFallbackDevices();
    }
  }

  /**
   * Fallback device detection when Python service is unavailable
   */
  static getFallbackDevices() {
    const platform = os.platform();
    const cpuInfo = os.cpus()[0]?.model || 'Unknown CPU';

    const devices = {
      auto: {
        available: true,
        name: 'Auto-detect',
        description: 'Automatically select the best available device'
      },
      cpu: {
        available: true,
        name: 'CPU',
        description: `CPU processing with WebAssembly (${os.cpus().length} cores)`
      }
    };

    // Detect Apple Silicon
    if (platform === 'darwin' && cpuInfo.includes('Apple')) {
      const match = cpuInfo.match(/Apple (M\d+\s?\w*)/);
      const chipName = match ? match[1] : 'Apple Silicon';
      devices.metal = {
        available: true,
        name: chipName,
        description: 'Apple GPU acceleration (2-4x faster) - requires Python backend'
      };
    } else {
      devices.metal = {
        available: false,
        name: 'Apple Silicon (Metal)',
        description: 'Not available on this system'
      };
    }

    devices.cuda = {
      available: false,
      name: 'NVIDIA GPU (CUDA)',
      description: 'Not detected - requires Python backend with CUDA support'
    };

    return devices;
  }

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

  /**
   * Run Python embedding service command
   */
  static runPythonCommand(scriptPath, args = []) {
    return new Promise((resolve, reject) => {
      const python = spawn('python3', [scriptPath, ...args]);
      let stdout = '';
      let stderr = '';

      python.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      python.stderr.on('data', (data) => {
        stderr += data.toString();
        // Log Python service messages
        try {
          const lines = stderr.split('\n').filter(l => l.trim());
          lines.forEach(line => {
            try {
              const msg = JSON.parse(line);
              if (msg.level === 'info') {
                console.log('[Python Embedding]', msg);
              } else if (msg.level === 'warning') {
                console.warn('[Python Embedding]', msg);
              } else if (msg.level === 'error') {
                console.error('[Python Embedding]', msg);
              }
            } catch (e) {
              // Not JSON, regular log
              console.log('[Python Embedding]', line);
            }
          });
        } catch (e) {
          // Ignore parsing errors
        }
      });

      python.on('close', (code) => {
        if (code === 0) {
          try {
            const result = JSON.parse(stdout);
            resolve(result);
          } catch (error) {
            reject(new Error(`Failed to parse Python output: ${stdout}`));
          }
        } else {
          reject(new Error(`Python process exited with code ${code}: ${stderr}`));
        }
      });

      python.on('error', (error) => {
        reject(new Error(`Failed to start Python process: ${error.message}`));
      });
    });
  }

  /**
   * Generate embeddings using persistent Python process with streaming
   * This loads the model once and streams embeddings back in real-time
   */
  static async generateEmbeddingsStreaming(chunks, modelId, devicePreference = 'auto', batchSize = 32, jobId, onProgress) {
    return new Promise((resolve, reject) => {
      const pythonScript = path.join(__dirname, '../python/embedding_service.py');
      const args = [
        'stream',
        '--model', modelId,
        '--device', devicePreference,
        '--batch-size', batchSize.toString()
      ];

      const python = spawn('python3', [pythonScript, ...args]);
      let ready = false;
      let processedEmbeddings = [];
      let stdoutBuffer = '';
      let totalChunks = chunks.length;
      let receivedCount = 0;

      // Track this process
      if (jobId) {
        if (!this.activePythonProcesses.has(jobId)) {
          this.activePythonProcesses.set(jobId, new Set());
        }
        this.activePythonProcesses.get(jobId).add(python);
        console.log(`[Embedding] Streaming Python process started (PID: ${python.pid})`);
      }

      const cleanup = () => {
        if (jobId) {
          const processes = this.activePythonProcesses.get(jobId);
          if (processes) {
            processes.delete(python);
            if (processes.size === 0) {
              this.activePythonProcesses.delete(jobId);
            }
          }
        }
      };

      // Handle stdout - process line by line
      python.stdout.on('data', (data) => {
        stdoutBuffer += data.toString();
        const lines = stdoutBuffer.split('\n');

        // Keep the last incomplete line in the buffer
        stdoutBuffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            const message = JSON.parse(line);

            if (message.type === 'ready') {
              ready = true;
              console.log(`[Embedding] Python process ready, device: ${message.device}`);

              // Start sending chunks
              const textsToProcess = chunks.map(c => c.text);
              const payload = JSON.stringify({
                type: 'process',
                texts: textsToProcess
              }) + '\n';

              python.stdin.write(payload);
            } else if (message.type === 'embedding') {
              processedEmbeddings.push({
                index: message.index,
                embedding: message.embedding
              });

              receivedCount++;

              // Call progress callback for each embedding
              if (onProgress) {
                onProgress(message.index, message.embedding);
              }

              // When all embeddings received, send shutdown signal
              if (receivedCount === totalChunks) {
                console.log(`[Embedding] All ${totalChunks} embeddings received, sending shutdown`);
                python.stdin.write(JSON.stringify({ type: 'shutdown' }) + '\n');
                python.stdin.end();
              }
            } else if (message.type === 'error') {
              console.error('[Embedding] Python error:', message.error);
              reject(new Error(message.error));
            }
          } catch (e) {
            console.warn('[Embedding] Failed to parse stdout line:', line);
          }
        }
      });

      python.stderr.on('data', (data) => {
        const stderr = data.toString();
        try {
          const lines = stderr.split('\n').filter(l => l.trim());
          lines.forEach(line => {
            try {
              const msg = JSON.parse(line);
              if (msg.level === 'info') {
                console.log('[Python Embedding]', msg);
              } else if (msg.level === 'warning') {
                console.warn('[Python Embedding]', msg);
              } else if (msg.level === 'error') {
                console.error('[Python Embedding]', msg);
              }
            } catch (e) {
              console.log('[Python Embedding]', line);
            }
          });
        } catch (e) {
          // Ignore
        }
      });

      python.on('close', (code) => {
        cleanup();

        if (code === 0 || code === null) {
          // Sort embeddings by index to ensure correct order
          processedEmbeddings.sort((a, b) => a.index - b.index);
          const embeddings = processedEmbeddings.map(e => e.embedding);
          resolve(embeddings);
        } else {
          reject(new Error(`Python process exited with code ${code}`));
        }
      });

      python.on('error', (error) => {
        cleanup();
        reject(new Error(`Failed to start Python process: ${error.message}`));
      });

      // Handle process termination
      const handleShutdown = () => {
        if (!python.killed) {
          python.stdin.write(JSON.stringify({ type: 'shutdown' }) + '\n');
          python.stdin.end();
        }
      };

      // Auto-shutdown on job cancellation
      const checkInterval = setInterval(() => {
        if (jobId) {
          const job = this.activeJobs.get(jobId);
          if (job && job.cancelled) {
            clearInterval(checkInterval);
            handleShutdown();
            reject(new Error('Job cancelled'));
          }
        }
      }, 500);

      python.on('close', () => {
        clearInterval(checkInterval);
      });
    });
  }

  /**
   * Generate embeddings using Python GPU-accelerated service
   */
  static async generateEmbeddingsPython(texts, modelId, devicePreference = 'auto', batchSize = 32, jobId = null) {
    const pythonScript = path.join(__dirname, '../python/embedding_service.py');

    const args = [
      'embed',
      '--model', modelId,
      '--device', devicePreference,
      '--batch-size', batchSize.toString()
    ];

    // Create a temporary process with stdin
    return new Promise((resolve, reject) => {
      const python = spawn('python3', [pythonScript, ...args]);
      let stdout = '';
      let stderr = '';

      // Track this process if we have a jobId (add to set of processes)
      if (jobId) {
        if (!this.activePythonProcesses.has(jobId)) {
          this.activePythonProcesses.set(jobId, new Set());
        }
        this.activePythonProcesses.get(jobId).add(python);
        console.log(`\n${'='.repeat(80)}`);
        console.log(`[Embedding] Python embedding process STARTED`);
        console.log(`[Embedding] Job ID: ${jobId}`);
        console.log(`[Embedding] Process PID: ${python.pid}`);
        console.log(`[Embedding] To find in Activity Monitor: Search for "python3" or PID ${python.pid}`);
        console.log(`${'='.repeat(80)}\n`);
      }

      const cleanup = () => {
        if (jobId) {
          const processes = this.activePythonProcesses.get(jobId);
          if (processes) {
            processes.delete(python);
            console.log(`[Embedding] Cleaned up Python process PID ${python.pid} for job ${jobId} (${processes.size} remaining)`);
            if (processes.size === 0) {
              this.activePythonProcesses.delete(jobId);
              console.log(`[Embedding] All Python processes cleaned up for job ${jobId}`);
            }
          }
        }
      };

      python.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      python.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      python.on('close', (code) => {
        cleanup();

        if (code === 0) {
          try {
            const result = JSON.parse(stdout);
            if (result.success) {
              resolve(result.embeddings);
            } else {
              reject(new Error(result.error || 'Unknown error from Python service'));
            }
          } catch (error) {
            reject(new Error(`Failed to parse Python output: ${stdout}`));
          }
        } else if (code === null) {
          // Process was killed
          reject(new Error('Process was terminated'));
        } else {
          reject(new Error(`Python process exited with code ${code}: ${stderr}`));
        }
      });

      python.on('error', (error) => {
        cleanup();
        reject(new Error(`Failed to start Python process: ${error.message}`));
      });

      // Write input data to stdin
      python.stdin.write(JSON.stringify({ texts }));
      python.stdin.end();
    });
  }
  
  static async startEmbedding(projectId, modelId, devicePreference = 'auto', broadcastFn) {
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
    this.runEmbeddingJob(projectId, modelId, devicePreference, jobId, broadcastFn, jobControl)
      .catch(error => {
        console.error('Embedding job failed:', error);
        broadcastFn(jobId, {
          type: 'error',
          error: error.message,
        });
      })
      .finally(() => {
        this.activeJobs.delete(jobId);

        // Ensure all Python processes are killed (safety cleanup)
        const pythonProcesses = this.activePythonProcesses.get(jobId);
        if (pythonProcesses && pythonProcesses.size > 0) {
          console.log(`[Embedding] Final cleanup: killing ${pythonProcesses.size} remaining Python process(es)`);
          pythonProcesses.forEach((proc) => {
            try {
              if (!proc.killed) {
                proc.kill('SIGKILL');
              }
            } catch (e) {
              // Ignore errors during cleanup
            }
          });
          this.activePythonProcesses.delete(jobId);
        }

        // Suggest garbage collection if available
        if (global.gc) {
          console.log('[Embedding] Triggering garbage collection after job cleanup');
          global.gc();
        }
      });

    return { jobId };
  }
  
  static cancelJob(jobId) {
    const job = this.activeJobs.get(jobId);
    if (job) {
      console.log(`\n${'='.repeat(80)}`);
      console.log(`[Embedding] CANCELLING job ${jobId}`);
      console.log(`${'='.repeat(80)}\n`);
      job.cancel();

      // Kill ALL associated Python processes for this job
      const pythonProcesses = this.activePythonProcesses.get(jobId);
      if (pythonProcesses && pythonProcesses.size > 0) {
        console.log(`[Embedding] Killing ${pythonProcesses.size} Python process(es) for job ${jobId}`);

        pythonProcesses.forEach((pythonProcess) => {
          try {
            const pid = pythonProcess.pid;
            console.log(`[Embedding] Sending SIGTERM to Python process PID: ${pid}`);

            // First try graceful shutdown
            if (!pythonProcess.killed) {
              pythonProcess.kill('SIGTERM');
            }

            // Fallback to SIGKILL immediately (reduced from 2 seconds for faster cleanup)
            setTimeout(() => {
              if (!pythonProcess.killed) {
                console.log(`[Embedding] Force killing Python process ${pid} with SIGKILL`);
                try {
                  pythonProcess.kill('SIGKILL');
                  console.log(`[Embedding] Process ${pid} killed successfully`);
                } catch (e) {
                  console.log(`[Embedding] Process ${pid} already terminated`);
                }
              } else {
                console.log(`[Embedding] Process ${pid} terminated gracefully`);
              }
            }, 500); // Reduced timeout for faster cleanup
          } catch (error) {
            console.error(`[Embedding] Error killing Python process:`, error);
          }
        });

        // Clear the processes map immediately
        this.activePythonProcesses.delete(jobId);
        console.log(`[Embedding] Python process tracking cleared for job ${jobId}`);
      } else {
        console.log(`[Embedding] No Python processes found for job ${jobId}`);
      }

      // Force garbage collection to free memory
      if (global.gc) {
        console.log('[Embedding] Triggering garbage collection after cancellation');
        global.gc();
      }

      console.log(`[Embedding] Job ${jobId} cancellation complete\n`);
      return true;
    }
    console.warn(`[Embedding] Job ${jobId} not found`);
    return false;
  }
  
  static async runEmbeddingJob(projectId, modelId, devicePreference, jobId, broadcastFn, jobControl) {
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

    // Determine if we should use GPU acceleration
    const useGPU = devicePreference !== 'cpu' && (devicePreference === 'metal' || devicePreference === 'cuda' || devicePreference === 'auto');

    // Detect hardware
    const hardware = this.detectHardware();
    console.log(`[Embedding] Device preference: ${devicePreference}, Using GPU: ${useGPU}`);
    console.log(`[Embedding] Detected hardware: ${hardware.type} - ${hardware.name}`);

    // For GPU: process all chunks at once (model loading is expensive)
    // For CPU: smaller batches for progress updates
    const processingBatchSize = useGPU ? totalChunks : 5;
    const uiBatchSize = 5; // Update UI every 5 chunks for frequent progress updates
    const totalBatches = Math.ceil(totalChunks / uiBatchSize);

    // Initialize embedding pipeline
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

    // Check if cancelled
    if (jobControl.cancelled) {
      console.log(`[Embedding] Job ${jobId} cancelled during initialization`);
      return;
    }

    // Create HNSW index
    const dimensions = modelConfig.dimensions;
    const maxElements = totalChunks + 1000; // Extra space
    const index = new hnswlib.HierarchicalNSW('cosine', dimensions);
    index.initIndex(maxElements, totalChunks);

    const startTime = Date.now();
    const allMetadata = [];
    let allEmbeddings;

    // GPU path: Use streaming with persistent Python process
    if (useGPU) {
      try {
        console.log(`[Embedding] Processing ${totalChunks} chunks with GPU streaming (persistent process)`);

        let totalProcessed = 0;

        // Check if cancelled before starting
        if (jobControl.cancelled) {
          console.log('[Embedding] Job was cancelled before GPU processing');
          return;
        }

        // Use streaming approach - single Python process, real-time updates
        await this.generateEmbeddingsStreaming(
          chunks,
          modelId,
          devicePreference,
          32, // Internal batch size for GPU processing
          jobId,
          // Progress callback - called for each chunk as it's processed
          (chunkIndex, embedding) => {
            // Check if cancelled
            if (jobControl.cancelled) {
              console.log('[Embedding] Job cancelled during streaming');
              return;
            }

            // Add to index immediately
            const embeddingArray = Array.isArray(embedding) ? embedding : Array.from(embedding);
            index.addPoint(embeddingArray, chunkIndex);

            // Add metadata
            allMetadata.push({
              id: chunkIndex,
              text: chunks[chunkIndex].text,
              metadata: chunks[chunkIndex].metadata || {},
              tokens: chunks[chunkIndex].tokens,
            });

            totalProcessed++;

            // Broadcast progress after EVERY chunk for real-time updates
            const progress = (totalProcessed / totalChunks) * 100;
            const elapsed = (Date.now() - startTime) / 1000;
            const speed = totalProcessed / elapsed;
            const remaining = totalChunks - totalProcessed;
            const eta = remaining / speed;

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
              hardware: {
                ...hardware,
                devicePreference,
                usingGPU: useGPU
              },
            });

            // Periodic garbage collection
            if (global.gc && totalProcessed % 100 === 0) {
              global.gc();
            }
          }
        );

        console.log(`[Embedding] GPU streaming complete, ${totalProcessed} embeddings added to index`);
      } catch (error) {
        // Check if job was cancelled
        if (jobControl.cancelled) {
          console.log('[Embedding] Job was cancelled, stopping');
          allMetadata.length = 0;
          if (global.gc) {
            console.log('[Embedding] Running garbage collection');
            global.gc();
          }
          return;
        }

        console.error('[Embedding] GPU embedding failed:', error);
        allMetadata.length = 0;
        if (global.gc) {
          global.gc();
        }
        throw error;
      }
    } else {
      // CPU path: Process in small batches with JS extractor
      const extractor = await pipeline('feature-extraction', modelConfig.name);
      let processedChunks = 0;

      for (let i = 0; i < totalChunks; i += processingBatchSize) {
        // Check if cancelled
        if (jobControl.cancelled) {
          console.log(`[Embedding] Job ${jobId} cancelled at chunk ${processedChunks}`);
          broadcastFn(jobId, {
            type: 'cancelled',
            message: 'Job cancelled by user'
          });
          return;
        }

        const batch = chunks.slice(i, Math.min(i + processingBatchSize, totalChunks));
        const batchTexts = batch.map(c => c.text);

        const batchStartTime = Date.now();
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
        const progress = (processedChunks / totalChunks) * 100;
        const elapsed = (Date.now() - startTime) / 1000;
        const batchTime = (Date.now() - batchStartTime);
        const avgTimePerChunk = batchTime / batch.length;
        const speed = processedChunks / elapsed;
        const remaining = totalChunks - processedChunks;
        const eta = remaining / speed;

        broadcastFn(jobId, {
          type: 'progress',
          progress,
          processedChunks,
          totalChunks,
          currentBatch: Math.floor(i / processingBatchSize) + 1,
          totalBatches: Math.ceil(totalChunks / processingBatchSize),
          speed,
          avgTimePerChunk,
          eta,
          hardware: {
            ...hardware,
            devicePreference,
            usingGPU: useGPU
          },
        });
      }
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
    
    // Calculate total elapsed time
    const totalElapsed = (Date.now() - startTime) / 1000;

    // Save config
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
    
    await fs.writeFile(
      path.join(vectorDbDir, 'config.json'),
      JSON.stringify(config, null, 2)
    );
    
    // Clean up Python process reference (should already be cleaned up, but just in case)
    this.activePythonProcesses.delete(jobId);

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

