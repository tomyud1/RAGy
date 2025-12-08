import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { ProjectService } from './project.service.js';
import settingsService from './settings.service.js';
import { pythonPath } from '../config/python-path.js';
import { paths } from '../config/paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PYTHON_SCRIPT = path.join(paths.pythonScripts(), 'docling_chunker.py');
const PADDLEOCR_SCRIPT = path.join(paths.pythonScripts(), 'paddleocr_chunker.py');

export class ChunkingService {
  static broadcastFunction = null;
  static runningProcesses = new Map(); // Track running processes by projectId

  static setBroadcastFunction(fn) {
    this.broadcastFunction = fn;
  }

  static async chunkDocuments(projectId, method, config, jobId = null, resume = false) {
    if (method === 'docling-hybrid') {
      return this.chunkWithDocling(projectId, config, jobId, resume);
    } else if (method === 'paddleocr-vl') {
      return this.chunkWithPaddleOCR(projectId, config, jobId);
    } else {
      throw new Error(`Unsupported chunking method: ${method}`);
    }
  }

  static async stopChunking(projectId) {
    const processInfo = this.runningProcesses.get(projectId);
    if (!processInfo) {
      return { success: false, error: 'No running process found' };
    }

    try {
      // Forcefully kill the process and all its children immediately
      // Use negative PID to kill the entire process group (parent + all children)
      try {
        process.kill(-processInfo.process.pid, 'SIGKILL');
        console.log(`[Chunking] Killed process group ${processInfo.process.pid}`);
      } catch (groupKillError) {
        // If process group kill fails, kill the main process
        processInfo.process.kill('SIGKILL');
        console.log(`[Chunking] Killed main process ${processInfo.process.pid}`);
      }

      // Clean up process tracking
      this.runningProcesses.delete(projectId);

      return { success: true, message: 'Process terminated immediately. Previous completed parts have been saved.' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static async saveProgress(projectId, progress) {
    try {
      await ProjectService.updateChunkingJob(projectId, { progress });
    } catch (error) {
      // Don't fail the whole process if progress update fails
      console.warn('Failed to save progress:', error.message);
    }
  }

  static async chunkWithDocling(projectId, config, jobId = null, resume = false) {
    const inputDir = ProjectService.getRawFilesPath(projectId);
    const outputDir = ProjectService.getChunkedDataPath(projectId);
    const outputFile = path.join(outputDir, 'chunks.json');

    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Get Gemini API key from settings service (same as chat)
    const geminiApiKey = await settingsService.getApiKey('gemini');

    console.log('[Chunking] Gemini API key loaded:', geminiApiKey ? `${geminiApiKey.substring(0, 10)}...` : 'NOT FOUND');

    return new Promise((resolve, reject) => {
      const maxTokens = config.maxTokens || 512;
      const mergePeers = config.mergePeers !== undefined ? config.mergePeers : true;

      // Enrichment options (new!)
      const enableFormula = config.enableFormula !== undefined ? config.enableFormula : true; // Default to true
      const enablePictureClassification = config.enablePictureClassification || false;
      const enablePictureDescription = config.enablePictureDescription || false;
      const pictureDescriptionMaxTokens = config.pictureDescriptionMaxTokens || 100; // Default 100 tokens per image
      const visionModel = config.visionModel || 'smolvlm'; // 'smolvlm' or 'gemini-2.0-flash'
      const visionBackend = config.visionBackend || 'auto'; // 'auto', 'transformers', 'mlx' (for SmolVLM only)
      const conversionOutputFolder = config.conversionOutputFolder || 'conversions/'; // Default folder
      const enableCodeEnrichment = config.enableCodeEnrichment || false;
      const enableOcr = config.enableOcr !== undefined ? config.enableOcr : true; // Default to true
      const enableTableStructure = config.enableTableStructure !== undefined ? config.enableTableStructure : true; // Default to true

      // Batch size options (performance tuning)
      const visionBatchSize = config.visionBatchSize || 4; // Default 4 for vision model
      const processingBatchSize = config.processingBatchSize || 4; // Default 4 for OCR/layout/table

      console.log('[Chunking] Enrichment settings:', {
        formulas: enableFormula,
        pictureClassification: enablePictureClassification,
        pictureDescription: enablePictureDescription,
        pictureDescriptionMaxTokens: pictureDescriptionMaxTokens,
        visionModel: visionModel,
        visionBackend: visionBackend,
        conversionOutputFolder: conversionOutputFolder,
        codeEnrichment: enableCodeEnrichment,
        ocr: enableOcr,
        tableStructure: enableTableStructure,
        visionBatchSize: visionBatchSize,
        processingBatchSize: processingBatchSize,
        resume: resume
      });
      
      const pythonProcess = spawn(pythonPath, [
        '-u',  // Unbuffered output
        PYTHON_SCRIPT,
        inputDir,
        outputFile,
        maxTokens.toString(),
        mergePeers.toString(),
        enableFormula.toString(),
        enablePictureClassification.toString(),
        enablePictureDescription.toString(),
        enableCodeEnrichment.toString(),
        enableOcr.toString(),
        enableTableStructure.toString(),
        pictureDescriptionMaxTokens.toString(),
        resume.toString(), // Resume parameter
        visionBatchSize.toString(), // Vision model batch size
        processingBatchSize.toString(), // OCR/layout/table batch size
        visionBackend, // Vision backend: 'auto', 'transformers', 'mlx' (for SmolVLM)
        conversionOutputFolder, // Output folder for conversions
        visionModel // Vision model: 'smolvlm' or 'gemini-2.0-flash'
      ], {
        env: { 
          ...process.env, 
          PYTHONUNBUFFERED: '1',
          GEMINI_API_KEY: geminiApiKey // Pass Gemini API key as environment variable
        },
        detached: true // Create process group so we can kill all children at once
      });

      // Track running process
      this.runningProcesses.set(projectId, {
        process: pythonProcess,
        jobId: jobId,
        startTime: Date.now()
      });
      
      let output = '';
      let errorOutput = '';
      
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      pythonProcess.stderr.on('data', (data) => {
        const lines = data.toString().split('\n');
        
        for (const line of lines) {
          if (!line.trim()) continue;
          
          try {
            // Try to parse as JSON progress update
            const progress = JSON.parse(line);
            console.log('[Chunking] Progress update from Python:', progress);
            if (progress.type === 'progress') {
              // Only save important milestones (not heartbeat updates) to avoid file corruption
              // Heartbeat updates are for real-time UI only, don't persist them
              const isImportantMilestone = progress.status === 'chunked' || 
                                          progress.status === 'completed' || 
                                          progress.status === 'finalizing' ||
                                          progress.status === 'saving' ||
                                          progress.status === 'error';
              
              if (isImportantMilestone) {
                try {
                  this.saveProgress(projectId, progress);
                } catch (err) {
                  console.error('Failed to save progress (non-fatal):', err.message);
                  // Don't crash on save errors - progress is already shown via WebSocket
                }
              }
              
              // Broadcast via WebSocket if available
              if (jobId && this.broadcastFunction) {
                console.log(`[Chunking] Broadcasting progress for job ${jobId}`);
                this.broadcastFunction(jobId, {
                  type: 'chunking-progress',
                  data: progress
                });
              } else {
                console.warn(`[Chunking] Cannot broadcast - jobId: ${jobId}, broadcastFunction: ${!!this.broadcastFunction}`);
              }
            }
          } catch (e) {
            // Not JSON, regular log message
            errorOutput += line + '\n';
            console.log('[Python]:', line);
          }
        }
      });
      
      pythonProcess.on('close', async (code) => {
        // Clean up process tracking
        this.runningProcesses.delete(projectId);

        if (code !== 0) {
          console.error('Python stderr:', errorOutput);
          reject(new Error(`Chunking process exited with code ${code}`));
          return;
        }

        try {
          const result = JSON.parse(output);

          if (!result.success) {
            // Check if resumable
            if (result.resumable) {
              reject(new Error(result.error || 'Chunking stopped'));
            } else {
              reject(new Error(result.error || 'Chunking failed'));
            }
            return;
          }

          // Load the generated chunks
          const chunksData = JSON.parse(await fs.readFile(outputFile, 'utf-8'));

          // Save to project - preserve processing_summary if present
          const { chunks, processing_summary, ...otherMetadata } = chunksData;

          // Save conversion output folder first to avoid race condition
          await ProjectService.updateProject(projectId, {
            conversionOutputFolder: conversionOutputFolder
          });

          // Then save chunks and summary (this will preserve conversionOutputFolder)
          await ProjectService.saveProjectChunks(
            projectId,
            chunks,
            'docling-hybrid',
            { processing_summary, ...otherMetadata }
          );

          console.log(`Chunking complete: ${chunks.length} chunks generated`);
          console.log(`Conversion output folder: ${conversionOutputFolder}`);

          resolve({
            success: true,
            chunks: chunksData,
          });
        } catch (error) {
          reject(new Error(`Failed to parse chunking result: ${error.message}`));
        }
      });
      
      pythonProcess.on('error', (error) => {
        reject(new Error(`Failed to start Python process: ${error.message}`));
      });
    });
  }

  static async chunkWithPaddleOCR(projectId, config, jobId = null) {
    const inputDir = ProjectService.getRawFilesPath(projectId);
    const outputDir = ProjectService.getChunkedDataPath(projectId);
    const outputFile = path.join(outputDir, 'chunks.json');

    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    const conversionOutputFolder = config.conversionOutputFolder || 'conversions/';
    const batchSize = config.batchSize || 5; // Default 5 pages per batch

    console.log('[Chunking] PaddleOCR-VL settings:', {
      batchSize: batchSize,
      conversionOutputFolder: conversionOutputFolder
    });

    return new Promise((resolve, reject) => {
      const pythonProcess = spawn(pythonPath, [
        '-u',  // Unbuffered output
        PADDLEOCR_SCRIPT,
        inputDir,
        outputFile,
        batchSize.toString(),
        conversionOutputFolder
      ], {
        env: {
          ...process.env,
          PYTHONUNBUFFERED: '1'
        },
        detached: true
      });

      // Track running process
      this.runningProcesses.set(projectId, {
        process: pythonProcess,
        jobId: jobId,
        startTime: Date.now()
      });

      let output = '';
      let errorOutput = '';

      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        const lines = data.toString().split('\n');

        for (const line of lines) {
          if (!line.trim()) continue;

          try {
            // Try to parse as JSON progress update
            const progress = JSON.parse(line);
            console.log('[Chunking] Progress update from PaddleOCR-VL:', progress);

            // Broadcast all updates (progress, hardware_info, file_validation)
            if (jobId && this.broadcastFunction) {
              this.broadcastFunction(jobId, {
                type: 'chunking-progress',
                data: progress
              });
            }

            // Save important progress milestones
            if (progress.type === 'progress') {
              const isImportantMilestone = progress.status === 'completed' ||
                                          progress.status === 'error';

              if (isImportantMilestone) {
                try {
                  this.saveProgress(projectId, progress);
                } catch (err) {
                  console.error('Failed to save progress (non-fatal):', err.message);
                }
              }
            }
          } catch (e) {
            // Not JSON, regular log message
            errorOutput += line + '\n';
            console.log('[PaddleOCR-VL]:', line);
          }
        }
      });

      pythonProcess.on('close', async (code) => {
        // Clean up process tracking
        this.runningProcesses.delete(projectId);

        if (code !== 0) {
          console.error('PaddleOCR-VL stderr:', errorOutput);
          reject(new Error(`PaddleOCR-VL process exited with code ${code}`));
          return;
        }

        try {
          const result = JSON.parse(output);

          if (!result.success) {
            reject(new Error(result.error || 'PaddleOCR-VL chunking failed'));
            return;
          }

          // Load the generated chunks
          const chunksData = JSON.parse(await fs.readFile(outputFile, 'utf-8'));

          // Save to project - preserve processing_summary if present
          const { chunks, processing_summary, ...otherMetadata } = chunksData;

          // Save conversion output folder first to avoid race condition
          await ProjectService.updateProject(projectId, {
            conversionOutputFolder: result.conversion_output_folder
          });

          // Then save chunks and summary
          await ProjectService.saveProjectChunks(
            projectId,
            chunks,
            'paddleocr-vl',
            { processing_summary, ...otherMetadata }
          );

          console.log(`PaddleOCR-VL chunking complete: ${chunks.length} chunks generated`);
          console.log(`Conversion output folder: ${result.conversion_output_folder}`);

          resolve({
            success: true,
            chunks: chunksData,
          });
        } catch (error) {
          reject(new Error(`Failed to parse PaddleOCR-VL result: ${error.message}`));
        }
      });

      pythonProcess.on('error', (error) => {
        reject(new Error(`Failed to start PaddleOCR-VL process: ${error.message}`));
      });
    });
  }

  static async uploadPreChunked(projectId, chunksData) {
    try {
      // Validate chunks format
      if (!Array.isArray(chunksData)) {
        throw new Error('Chunks must be an array');
      }
      
      // Ensure each chunk has required fields
      const validatedChunks = chunksData.map((chunk, index) => {
        if (!chunk.text) {
          throw new Error(`Chunk ${index} missing 'text' field`);
        }
        
        return {
          text: chunk.text,
          metadata: chunk.metadata || {},
          tokens: chunk.tokens || Math.ceil(chunk.text.length / 4),
        };
      });
      
      // Save chunks
      await ProjectService.saveProjectChunks(projectId, validatedChunks, 'pre-chunked');
      
      return {
        success: true,
        chunks: {
          method: 'pre-chunked',
          chunks: validatedChunks,
          stats: {
            totalChunks: validatedChunks.length,
            avgTokens: Math.round(validatedChunks.reduce((sum, c) => sum + c.tokens, 0) / validatedChunks.length),
            sourceFiles: new Set(validatedChunks.map(c => c.metadata?.source).filter(Boolean)).size,
          },
        },
      };
    } catch (error) {
      throw new Error(`Invalid chunk format: ${error.message}`);
    }
  }

  static async deleteChunks(projectId) {
    try {
      const chunkedDataPath = ProjectService.getChunkedDataPath(projectId);

      // Delete the entire chunked-data directory
      await fs.rm(chunkedDataPath, { recursive: true, force: true });

      // Clear chunking job from project metadata
      await ProjectService.clearChunkingJob(projectId);

      console.log(`Deleted chunked data for project ${projectId}`);

      return {
        success: true,
      };
    } catch (error) {
      throw new Error(`Failed to delete chunks: ${error.message}`);
    }
  }

  static async clearMethodResults(projectId, method) {
    try {
      // Get the project's conversion output folder
      const project = await ProjectService.getProject(projectId);
      const conversionOutputFolder = project.conversionOutputFolder || 'conversions/';

      // Determine method-specific subfolder
      let methodFolder;
      if (method === 'docling-hybrid') {
        methodFolder = path.join(conversionOutputFolder, 'docling');
      } else if (method === 'paddleocr-vl') {
        methodFolder = path.join(conversionOutputFolder, 'paddleocr');
      } else {
        throw new Error(`Unsupported method: ${method}`);
      }

      // Check if folder exists and delete it
      try {
        await fs.access(methodFolder);
        await fs.rm(methodFolder, { recursive: true, force: true });
        console.log(`Deleted method-specific folder: ${methodFolder}`);
      } catch (error) {
        // Folder doesn't exist, that's okay
        console.log(`Method folder doesn't exist (skipping): ${methodFolder}`);
      }

      // Also clear the main chunks.json file
      const chunkedDataPath = ProjectService.getChunkedDataPath(projectId);
      const chunksFile = path.join(chunkedDataPath, 'chunks.json');
      try {
        await fs.unlink(chunksFile);
        console.log(`Deleted chunks file: ${chunksFile}`);
      } catch (error) {
        // File doesn't exist, that's okay
        console.log(`Chunks file doesn't exist (skipping): ${chunksFile}`);
      }

      return {
        success: true,
        deletedFolder: methodFolder
      };
    } catch (error) {
      throw new Error(`Failed to clear method results: ${error.message}`);
    }
  }
}

