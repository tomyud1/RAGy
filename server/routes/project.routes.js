import express from 'express';
import { ProjectService } from '../services/project.service.js';

const router = express.Router();

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

export default router;

