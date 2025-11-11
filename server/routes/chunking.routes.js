import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs/promises';
import { ChunkingService } from '../services/chunking.service.js';
import { ProjectService } from '../services/project.service.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Export function to set broadcast capability
export function setBroadcastFunction(fn) {
  ChunkingService.setBroadcastFunction(fn);
}

// Check for existing chunking job
router.get('/status/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    
    const job = await ProjectService.getChunkingJob(projectId);
    
    res.json({ 
      success: true, 
      job 
    });
  } catch (error) {
    console.error('Failed to check job status:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Start chunking process
router.post('/start', async (req, res) => {
  try {
    const { projectId, method, config, resume } = req.body;

    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    if (!method) {
      return res.status(400).json({ error: 'Chunking method is required' });
    }

    // Check if there's already an active job
    const existingJob = await ProjectService.getChunkingJob(projectId);
    if (existingJob && existingJob.status === 'in-progress') {
      return res.json({
        success: true,
        jobId: existingJob.jobId,
        message: 'Chunking already in progress'
      });
    }

    // Generate a job ID for WebSocket progress tracking
    const jobId = uuidv4();

    // Save job to project metadata
    await ProjectService.saveChunkingJob(projectId, {
      jobId,
      status: 'in-progress',
      method,
      config,
      progress: null,
      resumed: resume || false
    });

    // Send immediate response with jobId
    res.json({ success: true, jobId, resumed: resume || false });

    // Start chunking in background
    ChunkingService.chunkDocuments(projectId, method, config || {}, jobId, resume || false)
      .then(async result => {
        console.log(`Broadcasting completion for job ${jobId}`);
        
        // Update job status to completed
        await ProjectService.updateChunkingJob(projectId, {
          status: 'completed',
          completedAt: new Date().toISOString(),
        });
        
        // Broadcast completion
        if (ChunkingService.broadcastFunction) {
          ChunkingService.broadcastFunction(jobId, {
            type: 'chunking-complete',
            data: result
          });
          console.log(`Completion broadcast sent for job ${jobId}`);
        } else {
          console.warn('No broadcast function available');
        }
        
        // Clear job after 30 seconds (in case user needs to see completion status)
        setTimeout(async () => {
          await ProjectService.clearChunkingJob(projectId);
        }, 30000);
      })
      .catch(async error => {
        console.error('Chunking failed:', error);
        
        // Update job status to failed
        await ProjectService.updateChunkingJob(projectId, {
          status: 'failed',
          error: error.message || 'Chunking failed',
          failedAt: new Date().toISOString(),
        });
        
        // Broadcast error
        if (ChunkingService.broadcastFunction) {
          ChunkingService.broadcastFunction(jobId, {
            type: 'chunking-error',
            data: { error: error.message || 'Chunking failed' }
          });
        }
      });
  } catch (error) {
    console.error('Chunking failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Chunking failed' 
    });
  }
});

// Stop chunking process
router.post('/stop/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    const result = await ChunkingService.stopChunking(projectId);

    if (result.success) {
      // Update job status
      await ProjectService.updateChunkingJob(projectId, {
        status: 'stopped',
        stoppedAt: new Date().toISOString()
      });
      res.json(result);
    } else {
      // No running process found - check if there's a stale job in the database
      const existingJob = await ProjectService.getChunkingJob(projectId);

      if (existingJob && existingJob.status === 'in-progress') {
        // Stale job detected - clear it
        console.log(`[Chunking] Clearing stale job for project ${projectId}`);
        await ProjectService.clearChunkingJob(projectId);

        res.json({
          success: true,
          message: 'Cleared stale chunking job state',
          wasStale: true
        });
      } else {
        // No running process and no stale job
        res.json(result);
      }
    }
  } catch (error) {
    console.error('Stop failed:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Stop failed'
    });
  }
});

// Check if there's resumable progress
router.get('/check-resumable/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    // Check for existing progress file
    const outputDir = ProjectService.getChunkedDataPath(projectId);
    const outputFile = path.join(outputDir, 'chunks.json');
    const progressFile = path.join(outputDir, `.progress_chunks.json`);

    try {
      const progressData = JSON.parse(await fs.readFile(progressFile, 'utf-8'));

      // Check age
      const ageHours = (Date.now() - progressData.timestamp) / 3600000;

      res.json({
        success: true,
        resumable: ageHours < 168, // 7 days
        completedParts: progressData.completed_chunks ? progressData.completed_chunks.length : 0,
        ageHours: Math.round(ageHours),
        config: progressData.config
      });
    } catch (error) {
      res.json({
        success: true,
        resumable: false
      });
    }
  } catch (error) {
    console.error('Check resumable failed:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Upload pre-chunked file
router.post('/upload', upload.single('chunkedFile'), async (req, res) => {
  try {
    const { projectId } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const chunksData = JSON.parse(req.file.buffer.toString('utf-8'));
    
    const result = await ChunkingService.uploadPreChunked(projectId, chunksData);
    
    res.json(result);
  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Upload failed' 
    });
  }
});

// Delete chunked data
router.delete('/delete/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }
    
    await ChunkingService.deleteChunks(projectId);
    
    res.json({ 
      success: true, 
      message: 'Chunked data deleted successfully' 
    });
  } catch (error) {
    console.error('Delete failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Delete failed' 
    });
  }
});

export default router;

