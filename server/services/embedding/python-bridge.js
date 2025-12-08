/**
 * Python Bridge for Embedding Service
 * Handles communication with Python embedding processes
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pythonPath } from '../../config/python-path.js';
import { paths } from '../../config/paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generate embeddings using Python GPU-accelerated service
 * @param {Array} texts - Texts to embed
 * @param {string} modelId - Model ID
 * @param {string} devicePreference - Device preference
 * @param {number} batchSize - Batch size
 * @param {string} jobId - Job ID for tracking
 * @param {Map} activePythonProcesses - Process tracking map
 * @returns {Promise<Array>} Embeddings
 */
export async function generateEmbeddingsPython(texts, modelId, devicePreference = 'auto',
                                                batchSize = 32, jobId = null, activePythonProcesses = null) {
  const pythonScript = path.join(paths.pythonScripts(), 'embedding_service.py');

  const args = [
    'embed',
    '--model', modelId,
    '--device', devicePreference,
    '--batch-size', batchSize.toString()
  ];

  return new Promise((resolve, reject) => {
    const python = spawn(pythonPath, [pythonScript, ...args]);
    let stdout = '';
    let stderr = '';

    // Track this process if we have a jobId
    if (jobId && activePythonProcesses) {
      if (!activePythonProcesses.has(jobId)) {
        activePythonProcesses.set(jobId, new Set());
      }
      activePythonProcesses.get(jobId).add(python);
      console.log(`[Embedding] Python embedding process STARTED (PID: ${python.pid})`);
    }

    const cleanup = () => {
      if (jobId && activePythonProcesses) {
        const processes = activePythonProcesses.get(jobId);
        if (processes) {
          processes.delete(python);
          if (processes.size === 0) {
            activePythonProcesses.delete(jobId);
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

/**
 * Generate embeddings using streaming Python process
 * @param {Array} chunks - Chunks to embed
 * @param {string} modelId - Model ID
 * @param {string} devicePreference - Device preference
 * @param {number} batchSize - Batch size
 * @param {string} jobId - Job ID
 * @param {Function} onProgress - Progress callback
 * @param {Map} activePythonProcesses - Process tracking map
 * @param {Map} activeJobs - Active jobs map
 * @returns {Promise<Array>} Embeddings
 */
export async function generateEmbeddingsStreaming(chunks, modelId, devicePreference = 'auto',
                                                   batchSize = 32, jobId, onProgress,
                                                   activePythonProcesses, activeJobs) {
  return new Promise((resolve, reject) => {
    const pythonScript = path.join(paths.pythonScripts(), 'embedding_service.py');
    const args = [
      'stream',
      '--model', modelId,
      '--device', devicePreference,
      '--batch-size', batchSize.toString()
    ];

    const python = spawn(pythonPath, [pythonScript, ...args]);
    let ready = false;
    let processedEmbeddings = [];
    let stdoutBuffer = '';
    let totalChunks = chunks.length;
    let receivedCount = 0;

    // Track this process
    if (jobId && activePythonProcesses) {
      if (!activePythonProcesses.has(jobId)) {
        activePythonProcesses.set(jobId, new Set());
      }
      activePythonProcesses.get(jobId).add(python);
      console.log(`[Embedding] Streaming Python process started (PID: ${python.pid})`);
    }

    const cleanup = () => {
      if (jobId && activePythonProcesses) {
        const processes = activePythonProcesses.get(jobId);
        if (processes) {
          processes.delete(python);
          if (processes.size === 0) {
            activePythonProcesses.delete(jobId);
          }
        }
      }
    };

    python.stdout.on('data', (data) => {
      stdoutBuffer += data.toString();
      const lines = stdoutBuffer.split('\n');
      stdoutBuffer = lines.pop() || '';

      for (const line of lines) {
        if (!line.trim()) continue;

        try {
          const message = JSON.parse(line);

          if (message.type === 'ready') {
            ready = true;
            console.log(`[Embedding] Python process ready, device: ${message.device}`);

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

            if (onProgress) {
              onProgress(message.index, message.embedding);
            }

            if (receivedCount === totalChunks) {
              console.log(`[Embedding] All ${totalChunks} embeddings received`);
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
      console.log('[Python Embedding]', stderr);
    });

    python.on('close', (code) => {
      cleanup();

      if (code === 0 || code === null) {
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

    // Check for job cancellation
    const checkInterval = setInterval(() => {
      if (jobId && activeJobs) {
        const job = activeJobs.get(jobId);
        if (job && job.cancelled) {
          clearInterval(checkInterval);
          if (!python.killed) {
            python.stdin.write(JSON.stringify({ type: 'shutdown' }) + '\n');
            python.stdin.end();
          }
          reject(new Error('Job cancelled'));
        }
      }
    }, 500);

    python.on('close', () => {
      clearInterval(checkInterval);
    });
  });
}

