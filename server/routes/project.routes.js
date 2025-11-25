import express from 'express';
import { exec } from 'child_process';
import path from 'path';
import multer from 'multer';
import fs from 'fs/promises';
import { ProjectService } from '../services/project.service.js';

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB limit
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.json({ projects });
  } catch (error) {
    console.error('Failed to get projects:', error);
    res.status(500).json({ error: 'Failed to get projects' });
  }
});

// Get single project
router.get('/:projectId', async (req, res) => {
  try {
    const project = await ProjectService.getProject(req.params.projectId);
    res.json(project);
  } catch (error) {
    console.error('Failed to get project:', error);
    res.status(404).json({ error: 'Project not found' });
  }
});

// Create project
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Project name is required' });
    }
    
    const project = await ProjectService.createProject(name.trim());
    res.json({ project });
  } catch (error) {
    console.error('Failed to create project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// Get project chunks
router.get('/:projectId/chunks', async (req, res) => {
  try {
    const chunks = await ProjectService.getProjectChunks(req.params.projectId);
    
    if (!chunks) {
      return res.status(404).json({ error: 'No chunks found' });
    }
    
    res.json(chunks);
  } catch (error) {
    console.error('Failed to get chunks:', error);
    res.status(500).json({ error: 'Failed to get chunks' });
  }
});

// Get project vector databases
router.get('/:projectId/vector-dbs', async (req, res) => {
  try {
    const vectorDbs = await ProjectService.getProjectVectorDbs(req.params.projectId);
    res.json({ vectorDbs });
  } catch (error) {
    console.error('Failed to get vector databases:', error);
    res.status(500).json({ error: 'Failed to get vector databases' });
  }
});

// Delete vector database
router.delete('/:projectId/vector-dbs/:vectorDbId', async (req, res) => {
  try {
    const { projectId, vectorDbId } = req.params;
    await ProjectService.deleteVectorDb(projectId, vectorDbId);
    res.json({ success: true, message: 'Vector database deleted successfully' });
  } catch (error) {
    console.error('Failed to delete vector database:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to delete vector database'
    });
  }
});

// Upload vector database from disk
router.post('/upload-vector-db', upload.single('vectorDb'), async (req, res) => {
  try {
    const { projectId } = req.body;
    const file = req.file;

    if (!projectId || !file) {
      return res.status(400).json({ error: 'Project ID and file are required' });
    }

    // TODO: Implement actual vector database import logic
    // For now, we'll just return an error message
    res.status(501).json({
      error: 'Vector database upload from disk is not yet implemented. Please use the RAG System to create vector databases.',
    });
  } catch (error) {
    console.error('Failed to upload vector database:', error);
    res.status(500).json({ error: 'Failed to upload vector database' });
  }
});

// Delete project
router.delete('/:projectId', async (req, res) => {
  try {
    await ProjectService.deleteProject(req.params.projectId);
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to delete project:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

// Open chunks file in file system
router.get('/:projectId/open-chunks-file', async (req, res) => {
  try {
    const { projectId } = req.params;
    const chunksPath = path.join(ProjectService.getChunkedDataPath(projectId), 'chunks.json');

    // Open file in default application based on OS
    const platform = process.platform;
    let command;

    if (platform === 'darwin') {
      // macOS - reveal in Finder
      command = `open -R "${chunksPath}"`;
    } else if (platform === 'win32') {
      // Windows - open Explorer and select file
      command = `explorer /select,"${chunksPath}"`;
    } else {
      // Linux - open containing folder
      const dirPath = path.dirname(chunksPath);
      command = `xdg-open "${dirPath}"`;
    }

    exec(command, (error) => {
      if (error) {
        console.error('Failed to open file:', error);
        return res.status(500).json({
          success: false,
          error: 'Failed to open file in file system'
        });
      }
      res.json({ success: true, message: 'File opened in file system' });
    });
  } catch (error) {
    console.error('Failed to open chunks file:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to open chunks file'
    });
  }
});

// Open chunks folder in file system
router.get('/:projectId/open-chunks-folder', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Get the project to find conversion folder and method
    const project = await ProjectService.getProject(projectId);
    const conversionOutputFolder = project.conversionOutputFolder || 'conversions/';

    // Get the last chunking job to determine which method was used
    const chunkingJob = await ProjectService.getChunkingJob(projectId);
    const method = chunkingJob?.method || 'docling-hybrid';

    // Determine the method-specific subfolder
    let folderToOpen;
    if (method === 'docling-hybrid') {
      folderToOpen = path.join(conversionOutputFolder, 'docling');
    } else if (method === 'paddleocr-vl') {
      folderToOpen = path.join(conversionOutputFolder, 'paddleocr');
    } else {
      // Fallback to base conversion folder
      folderToOpen = conversionOutputFolder;
    }

    // Check if folder exists, fallback to conversion folder if not
    try {
      await fs.access(folderToOpen);
    } catch {
      // Method folder doesn't exist, open base conversion folder
      folderToOpen = conversionOutputFolder;
    }

    // Open folder based on OS
    const platform = process.platform;
    let command;

    if (platform === 'darwin') {
      // macOS - open in Finder
      command = `open "${folderToOpen}"`;
    } else if (platform === 'win32') {
      // Windows - open in Explorer
      command = `explorer "${folderToOpen}"`;
    } else {
      // Linux - open with default file manager
      command = `xdg-open "${folderToOpen}"`;
    }

    exec(command, (error) => {
      if (error) {
        console.error('Failed to open folder:', error);
        return res.status(500).json({
          success: false,
          error: 'Failed to open folder in file system'
        });
      }
      res.json({ success: true, message: 'Folder opened in file system', path: folderToOpen });
    });
  } catch (error) {
    console.error('Failed to open chunks folder:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to open chunks folder'
    });
  }
});

export default router;

