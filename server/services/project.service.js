import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../data/projects');

// Ensure data directory exists
await fs.mkdir(DATA_DIR, { recursive: true });

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
    const chunksPath = path.join(DATA_DIR, projectId, 'chunked-data', 'chunks.json');
    
    try {
      const chunks = JSON.parse(await fs.readFile(chunksPath, 'utf-8'));
      return chunks;
    } catch (error) {
      return null;
    }
  }

  static async saveProjectChunks(projectId, chunks, method) {
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
    };
    
    await fs.writeFile(chunksPath, JSON.stringify(chunkData, null, 2));
    
    return chunkData;
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
}

