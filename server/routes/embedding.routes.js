import express from 'express';
import { EmbeddingService } from '../services/embedding.service.js';

const router = express.Router();

// Store broadcast function (will be set by server)
let broadcastFn = null;

export function setBroadcastFunction(fn) {
  broadcastFn = fn;
}

// Start embedding generation
router.post('/start', async (req, res) => {
  try {
    const { projectId, modelId } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }
    
    if (!modelId) {
      return res.status(400).json({ error: 'Model ID is required' });
    }
    
    if (!broadcastFn) {
      return res.status(500).json({ error: 'WebSocket not initialized' });
    }
    
    const result = await EmbeddingService.startEmbedding(projectId, modelId, broadcastFn);
    
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Failed to start embedding:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to start embedding' 
    });
  }
});

// Cancel embedding job
router.post('/cancel/:jobId', async (req, res) => {
  try {
    const { jobId } = req.params;
    
    const cancelled = EmbeddingService.cancelJob(jobId);
    
    if (cancelled) {
      res.json({ success: true, message: 'Job cancelled' });
    } else {
      res.status(404).json({ success: false, error: 'Job not found' });
    }
  } catch (error) {
    console.error('Failed to cancel job:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to cancel job' 
    });
  }
});

export default router;

