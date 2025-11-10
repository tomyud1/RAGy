import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import { ProjectService } from './project.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PYTHON_SCRIPT = path.join(__dirname, '../python/docling_chunker.py');

export class ChunkingService {
  static broadcastFunction = null;

  static setBroadcastFunction(fn) {
    this.broadcastFunction = fn;
  }

  static async chunkDocuments(projectId, method, config, jobId = null) {
    if (method === 'docling-hybrid') {
      return this.chunkWithDocling(projectId, config, jobId);
    } else {
      throw new Error(`Unsupported chunking method: ${method}`);
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

  static async chunkWithDocling(projectId, config, jobId = null) {
    const inputDir = ProjectService.getRawFilesPath(projectId);
    const outputDir = ProjectService.getChunkedDataPath(projectId);
    const outputFile = path.join(outputDir, 'chunks.json');
    
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    
    return new Promise((resolve, reject) => {
      const maxTokens = config.maxTokens || 512;
      const mergePeers = config.mergePeers !== undefined ? config.mergePeers : true;
      
      // Enrichment options (new!)
      const enableFormula = config.enableFormula !== undefined ? config.enableFormula : true; // Default to true
      const enablePictureClassification = config.enablePictureClassification || false;
      const enablePictureDescription = config.enablePictureDescription || false;
      const enableCodeEnrichment = config.enableCodeEnrichment || false;
      const enableOcr = config.enableOcr !== undefined ? config.enableOcr : true; // Default to true
      const enableTableStructure = config.enableTableStructure !== undefined ? config.enableTableStructure : true; // Default to true
      
      console.log('[Chunking] Enrichment settings:', {
        formulas: enableFormula,
        pictureClassification: enablePictureClassification,
        pictureDescription: enablePictureDescription,
        codeEnrichment: enableCodeEnrichment,
        ocr: enableOcr,
        tableStructure: enableTableStructure
      });
      
      const pythonProcess = spawn('python3', [
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
        enableTableStructure.toString()
      ], {
        env: { ...process.env, PYTHONUNBUFFERED: '1' }
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
        if (code !== 0) {
          console.error('Python stderr:', errorOutput);
          reject(new Error(`Chunking process exited with code ${code}`));
          return;
        }
        
        try {
          const result = JSON.parse(output);
          
          if (!result.success) {
            reject(new Error(result.error || 'Chunking failed'));
            return;
          }
          
          // Load the generated chunks
          const chunksData = JSON.parse(await fs.readFile(outputFile, 'utf-8'));
          
          // Save to project
          await ProjectService.saveProjectChunks(projectId, chunksData.chunks, 'docling-hybrid');
          
          console.log(`Chunking complete: ${chunksData.chunks.length} chunks generated`);
          
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
}

