import express from 'express';
import { RAGService } from '../services/rag.service.js';

const router = express.Router();

// Query vector databases
router.post('/query', async (req, res) => {
  try {
    const { projectId, vectorDbIds, query, topK, minSimilarity, minTokens } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }
    
    if (!vectorDbIds || !Array.isArray(vectorDbIds) || vectorDbIds.length === 0) {
      return res.status(400).json({ error: 'At least one vector DB ID is required' });
    }
    
    if (!query || !query.trim()) {
      return res.status(400).json({ error: 'Query is required' });
    }
    
    const result = await RAGService.queryVectorDbs(
      projectId,
      vectorDbIds,
      query.trim(),
      topK || 5,
      minSimilarity !== undefined ? minSimilarity : 0.55,
      minTokens || 0
    );
    
    res.json(result);
  } catch (error) {
    console.error('Query failed:', error);
    res.status(500).json({ error: error.message || 'Query failed' });
  }
});

// Import vector database
router.post('/vector-db/import', async (req, res) => {
  try {
    const { projectId } = req.body;
    
    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }
    
    // TODO: Implement import functionality
    res.status(501).json({ 
      success: false, 
      error: 'Import functionality not yet implemented' 
    });
  } catch (error) {
    console.error('Import failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Import failed' 
    });
  }
});

export default router;

