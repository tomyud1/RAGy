import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';
import { ProjectService } from '../services/project.service.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    // Get projectId from query parameter
    const projectId = req.query.projectId;
    if (!projectId) {
      return cb(new Error('Project ID is required'));
    }
    
    try {
      const uploadPath = ProjectService.getRawFilesPath(projectId);
      // Ensure directory exists
      await fs.mkdir(uploadPath, { recursive: true });
      cb(null, uploadPath);
    } catch (error) {
      console.error('Failed to create upload directory:', error);
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    // Keep original filename
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept all Docling-supported document formats
    const allowedExtensions = [
      // Documents
      '.pdf', '.docx', '.doc', 
      // Spreadsheets
      '.xlsx', '.xls', 
      // Presentations
      '.pptx', '.ppt', 
      // Text files
      '.txt', '.md', '.rst',
      // Images (for OCR)
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif',
      // HTML
      '.html', '.htm'
    ];
    const ext = path.extname(file.originalname).toLowerCase();
    
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error(`File type ${ext} not supported. Supported formats: ${allowedExtensions.join(', ')}`));
    }
  },
});

// Upload files
router.post('/', (req, res) => {
  upload.array('files', 50)(req, res, (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({ 
        success: false,
        error: err.message || 'Upload failed' 
      });
    }
    
    try {
      // Get projectId from query parameter
      const projectId = req.query.projectId;
      
      if (!projectId) {
        return res.status(400).json({ 
          success: false,
          error: 'Project ID is required' 
        });
      }
      
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ 
          success: false,
          error: 'No files uploaded' 
        });
      }
      
      const files = req.files.map(file => ({
        id: file.filename,
        name: file.originalname,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      }));
      
      console.log(`Successfully uploaded ${files.length} file(s) to project ${projectId}`);
      res.json({ success: true, files });
    } catch (error) {
      console.error('Upload processing failed:', error);
      res.status(500).json({ 
        success: false,
        error: error.message || 'Upload failed' 
      });
    }
  });
});

// Delete file
router.delete('/:fileId', async (req, res) => {
  try {
    const { fileId } = req.params;
    const { projectId } = req.query;
    
    if (!projectId) {
      return res.status(400).json({ 
        success: false,
        error: 'Project ID is required' 
      });
    }
    
    // Get the file path
    const filePath = path.join(ProjectService.getRawFilesPath(projectId), fileId);
    
    // Delete the file
    await fs.unlink(filePath);
    
    console.log(`Deleted file ${fileId} from project ${projectId}`);
    res.json({ success: true });
  } catch (error) {
    console.error('Delete failed:', error);
    res.status(500).json({ 
      success: false,
      error: error.message || 'Delete failed' 
    });
  }
});

export default router;

