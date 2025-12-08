import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import paths from '../config/paths.js';

const DATA_DIR = paths.projects();

// File write queue to prevent race conditions
const writeQueues = new Map();

async function queuedWrite(filePath, data) {
  // Get or create queue for this file
  if (!writeQueues.has(filePath)) {
    writeQueues.set(filePath, Promise.resolve());
  }
  
  const queue = writeQueues.get(filePath);
  
  // Chain this write to the end of the queue
  const writePromise = queue.then(async () => {
    try {
      // Atomic write: write to temp file first, then rename
      const tempPath = `${filePath}.tmp`;
      await fs.writeFile(tempPath, data, 'utf-8');
      await fs.rename(tempPath, filePath);
    } catch (error) {
      console.error(`Failed to write ${filePath}:`, error);
      throw error;
    }
  });
  
  writeQueues.set(filePath, writePromise);
  
  return writePromise;
}

export class ProjectService {
  static async getAllProjects() {
    try {
      const dirs = await fs.readdir(DATA_DIR);
      const projects = [];
      
      for (const dir of dirs) {
        const configPath = path.join(DATA_DIR, dir, 'project-config.json');
        try {
          const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
          
          // Get project stats
          const stats = await this.getProjectStats(dir);
          
          projects.push({
            ...config,
            stats,
          });
        } catch (error) {
          console.error(`Failed to load project ${dir}:`, error);
        }
      }
      
      return projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
      console.error('Failed to get projects:', error);
      return [];
    }
  }

  static async getProject(projectId) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    
    try {
      const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
      
      // Load additional data
      const files = await this.getProjectFiles(projectId);
      const chunks = await this.getProjectChunks(projectId);
      const vectorDbs = await this.getProjectVectorDbs(projectId);
      
      return {
        ...config,
        files,
        chunks,
        vectorDbs,
      };
    } catch (error) {
      throw new Error(`Project not found: ${projectId}`);
    }
  }

  static async createProject(name) {
    const projectId = uuidv4();
    const projectDir = path.join(DATA_DIR, projectId);
    
    // Create project directory structure
    await fs.mkdir(projectDir, { recursive: true });
    await fs.mkdir(path.join(projectDir, 'raw-files'), { recursive: true });
    await fs.mkdir(path.join(projectDir, 'chunked-data'), { recursive: true });
    await fs.mkdir(path.join(projectDir, 'vector-dbs'), { recursive: true });
    
    // Create project config
    const config = {
      id: projectId,
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    await fs.writeFile(
      path.join(projectDir, 'project-config.json'),
      JSON.stringify(config, null, 2)
    );
    
    return config;
  }

  static async updateProject(projectId, updates) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
    
    const updatedConfig = {
      ...config,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    await queuedWrite(configPath, JSON.stringify(updatedConfig, null, 2));
    
    return updatedConfig;
  }

  static async getProjectFiles(projectId) {
    const filesDir = path.join(DATA_DIR, projectId, 'raw-files');
    
    try {
      const files = await fs.readdir(filesDir);
      const fileDetails = [];
      
      for (const file of files) {
        const filePath = path.join(filesDir, file);
        const stats = await fs.stat(filePath);
        
        fileDetails.push({
          id: file,
          name: file,
          size: stats.size,
          uploadedAt: stats.birthtime.toISOString(),
        });
      }
      
      return fileDetails;
    } catch (error) {
      return [];
    }
  }

  static async getProjectChunks(projectId) {
    // First, try to load from the new conversions folder structure
    try {
      const config = JSON.parse(await fs.readFile(path.join(DATA_DIR, projectId, 'project-config.json'), 'utf-8'));
      const conversionOutputFolder = config.conversionOutputFolder;

      if (conversionOutputFolder) {
        // Convert to absolute path if relative
        const absoluteConversionPath = path.isAbsolute(conversionOutputFolder)
          ? conversionOutputFolder
          : path.join(process.cwd(), conversionOutputFolder);

        // Check if the conversions folder exists
        try {
          await fs.access(absoluteConversionPath);

          // Aggregate chunks from all chunk folders
          const allChunks = [];
          const entries = await fs.readdir(absoluteConversionPath, { withFileTypes: true });

          // Filter for chunk folders (e.g., file8973_chunk001_p1-10)
          const chunkFolders = entries
            .filter(entry => entry.isDirectory() && entry.name.match(/chunk\d+/))
            .sort((a, b) => {
              // Extract chunk number for sorting
              const aMatch = a.name.match(/chunk(\d+)/);
              const bMatch = b.name.match(/chunk(\d+)/);
              const aNum = aMatch ? parseInt(aMatch[1]) : 0;
              const bNum = bMatch ? parseInt(bMatch[1]) : 0;
              return aNum - bNum;
            });

          if (chunkFolders.length > 0) {
            console.log(`[ProjectService] Found ${chunkFolders.length} chunk folders in ${absoluteConversionPath}`);

            // Load chunks from each folder
            for (const folder of chunkFolders) {
              const chunksJsonPath = path.join(absoluteConversionPath, folder.name, 'chunks.json');

              try {
                const chunkData = JSON.parse(await fs.readFile(chunksJsonPath, 'utf-8'));

                // Extract chunks array from the file
                if (chunkData.chunks && Array.isArray(chunkData.chunks)) {
                  allChunks.push(...chunkData.chunks);
                }
              } catch (error) {
                console.warn(`[ProjectService] Failed to load chunks from ${folder.name}:`, error.message);
              }
            }

            if (allChunks.length > 0) {
              console.log(`[ProjectService] Loaded ${allChunks.length} total chunks from conversions folder`);

              // Return in the same format as the old structure
              return {
                method: 'docling-hybrid',
                chunks: allChunks,
                stats: {
                  totalChunks: allChunks.length,
                  avgTokens: Math.round(allChunks.reduce((sum, c) => sum + (c.tokens || 0), 0) / allChunks.length),
                  sourceFiles: new Set(allChunks.map(c => c.metadata?.source).filter(Boolean)).size,
                },
              };
            }
          }
        } catch (error) {
          console.log(`[ProjectService] Conversions folder not found or inaccessible, falling back to old location`);
        }
      }
    } catch (error) {
      console.log(`[ProjectService] Could not check for conversions folder, falling back to old location`);
    }

    // Fall back to the old location for backwards compatibility
    const chunksPath = path.join(DATA_DIR, projectId, 'chunked-data', 'chunks.json');

    try {
      const chunks = JSON.parse(await fs.readFile(chunksPath, 'utf-8'));
      return chunks;
    } catch (error) {
      return null;
    }
  }

  static async saveProjectChunks(projectId, chunks, method, additionalMetadata = {}) {
    const chunksDir = path.join(DATA_DIR, projectId, 'chunked-data');
    await fs.mkdir(chunksDir, { recursive: true });

    const chunksPath = path.join(chunksDir, 'chunks.json');

    const chunkData = {
      method,
      createdAt: new Date().toISOString(),
      chunks,
      stats: {
        totalChunks: chunks.length,
        avgTokens: Math.round(chunks.reduce((sum, c) => sum + (c.tokens || Math.ceil(c.text.length / 4)), 0) / chunks.length),
        sourceFiles: new Set(chunks.map(c => c.metadata?.source).filter(Boolean)).size,
      },
      ...additionalMetadata, // Preserve any additional metadata like processing_summary
    };

    await fs.writeFile(chunksPath, JSON.stringify(chunkData, null, 2));

    // Save processing summary to project config for persistence
    if (additionalMetadata.processing_summary) {
      await this.saveLastChunkingSummary(projectId, additionalMetadata.processing_summary);
    }

    return chunkData;
  }

  static async saveLastChunkingSummary(projectId, summary) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');

    try {
      const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
      config.lastChunkingSummary = summary;
      await queuedWrite(configPath, JSON.stringify(config, null, 2));
      console.log(`[Project] Saved lastChunkingSummary for project ${projectId}`);
    } catch (error) {
      console.error(`[Project] Failed to save last chunking summary for project ${projectId}:`, error);
      throw error; // Re-throw to propagate error
    }
  }

  static async getProjectVectorDbs(projectId) {
    const vectorDbsDir = path.join(DATA_DIR, projectId, 'vector-dbs');

    try {
      const dirs = await fs.readdir(vectorDbsDir);
      const vectorDbs = [];

      for (const dir of dirs) {
        const configPath = path.join(vectorDbsDir, dir, 'config.json');
        try {
          const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
          vectorDbs.push({
            id: dir,
            ...config,
          });
        } catch (error) {
          console.error(`Failed to load vector DB ${dir}:`, error);
        }
      }

      return vectorDbs;
    } catch (error) {
      return [];
    }
  }

  static async deleteVectorDb(projectId, vectorDbId) {
    const vectorDbDir = path.join(DATA_DIR, projectId, 'vector-dbs', vectorDbId);

    try {
      // Check if directory exists
      await fs.access(vectorDbDir);

      // Delete the entire vector database directory
      await fs.rm(vectorDbDir, { recursive: true, force: true });

      console.log(`[ProjectService] Deleted vector database: ${vectorDbId}`);
      return true;
    } catch (error) {
      console.error(`Failed to delete vector DB ${vectorDbId}:`, error);
      throw new Error(`Failed to delete vector database: ${error.message}`);
    }
  }

  static async getProjectStats(projectId) {
    const files = await this.getProjectFiles(projectId);
    const vectorDbs = await this.getProjectVectorDbs(projectId);
    
    return {
      fileCount: files.length,
      vectorDbCount: vectorDbs.length,
    };
  }

  static getProjectPath(projectId) {
    return path.join(DATA_DIR, projectId);
  }

  static getRawFilesPath(projectId) {
    return path.join(DATA_DIR, projectId, 'raw-files');
  }

  static getChunkedDataPath(projectId) {
    return path.join(DATA_DIR, projectId, 'chunked-data');
  }

  static getVectorDbsPath(projectId) {
    return path.join(DATA_DIR, projectId, 'vector-dbs');
  }

  static async deleteProject(projectId) {
    const projectDir = path.join(DATA_DIR, projectId);
    
    try {
      // Check if project exists
      await fs.access(projectDir);
      
      // Delete the entire project directory
      await fs.rm(projectDir, { recursive: true, force: true });
      
      return { success: true };
    } catch (error) {
      throw new Error(`Failed to delete project: ${error.message}`);
    }
  }

  // Chunking Job Management
  static async saveChunkingJob(projectId, jobData) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
    
    const updatedConfig = {
      ...config,
      chunkingJob: {
        ...jobData,
        startTime: new Date().toISOString(),
      },
      updatedAt: new Date().toISOString(),
    };
    
    await queuedWrite(configPath, JSON.stringify(updatedConfig, null, 2));
    
    return updatedConfig.chunkingJob;
  }

  static async updateChunkingJob(projectId, updates) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    
    try {
      const configData = await fs.readFile(configPath, 'utf-8');
      const config = JSON.parse(configData);
      
      if (!config.chunkingJob) {
        throw new Error('No active chunking job found');
      }
      
      const updatedConfig = {
        ...config,
        chunkingJob: {
          ...config.chunkingJob,
          ...updates,
          lastUpdate: new Date().toISOString(),
        },
        updatedAt: new Date().toISOString(),
      };
      
      await queuedWrite(configPath, JSON.stringify(updatedConfig, null, 2));
      return updatedConfig.chunkingJob;
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error(`[Project] Corrupted config file for project ${projectId}, attempting recovery...`);
        // Try to repair by loading base config without chunking job
        const project = await this.getProject(projectId);
        if (project) {
          const repairedConfig = {
            ...project,
            chunkingJob: {
              ...updates,
              lastUpdate: new Date().toISOString(),
            },
            updatedAt: new Date().toISOString(),
          };
          await queuedWrite(configPath, JSON.stringify(repairedConfig, null, 2));
          console.log(`[Project] Config file repaired for project ${projectId}`);
          return repairedConfig.chunkingJob;
        }
      }
      throw error;
    }
  }

  static async getChunkingJob(projectId) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    
    try {
      const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
      return config.chunkingJob || null;
    } catch (error) {
      return null;
    }
  }

  static async clearChunkingJob(projectId) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');
    const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));

    const updatedConfig = {
      ...config,
      chunkingJob: undefined,
      updatedAt: new Date().toISOString(),
    };

    delete updatedConfig.chunkingJob;

    await queuedWrite(configPath, JSON.stringify(updatedConfig, null, 2));

    return { success: true };
  }

  static async clearLastChunkingSummary(projectId) {
    const configPath = path.join(DATA_DIR, projectId, 'project-config.json');

    try {
      const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));

      const updatedConfig = {
        ...config,
        lastChunkingSummary: undefined,
        updatedAt: new Date().toISOString(),
      };

      delete updatedConfig.lastChunkingSummary;

      await queuedWrite(configPath, JSON.stringify(updatedConfig, null, 2));
      console.log(`[Project] Cleared lastChunkingSummary for project ${projectId}`);

      return { success: true };
    } catch (error) {
      console.error(`[Project] Failed to clear last chunking summary for project ${projectId}:`, error);
      throw error;
    }
  }
}

