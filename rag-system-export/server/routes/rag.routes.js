import express from 'express';
import ragService from '../services/ai/rag.service.js';
import vectorDBService from '../services/ai/vector-db.service.js';
import multiModelVectorDB from '../services/ai/multi-model-vector-db.service.js';

const router = express.Router();

/**
 * Test RAG retrieval with a query (supports multi-model comparison)
 * POST /api/rag/query
 */
router.post('/query', async (req, res) => {
  try {
    const { query, limit = 5, minSimilarity = 0.55, model, compareAll = false } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    // If compareAll is true, query all models
    if (compareAll) {
      await multiModelVectorDB.initializeAll();
      const results = await multiModelVectorDB.compareAll(query, { limit, minSimilarity });

      // Format response for each model
      const formattedResults = {};
      for (const [modelKey, result] of Object.entries(results)) {
        if (result.error) {
          formattedResults[modelKey] = {
            error: result.error,
            model: result.model
          };
          continue;
        }

        const totalTokens = result.documents.reduce(
          (sum, doc) => sum + multiModelVectorDB.estimateTokens(doc.text),
          0
        );
        const avgSimilarity = result.documents.length > 0
          ? result.documents.reduce((sum, d) => sum + d.similarity, 0) / result.documents.length
          : 0;

        formattedResults[modelKey] = {
          model: result.model,
          status: result.selectedCount > 0 ? 'success' : 'no_results',
          totalRetrieved: result.retrievedCount,
          totalSelected: result.selectedCount,
          tokenCount: totalTokens,
          duration: result.duration,
          avgSimilarity: Math.round(avgSimilarity * 100),
          documents: result.documents.map(doc => ({
            title: doc.metadata.title,
            section: doc.metadata.section || 'N/A',
            category: doc.metadata.category,
            docType: doc.metadata.docType,
            similarity: Math.round(doc.similarity * 100),
            tokens: multiModelVectorDB.estimateTokens(doc.text),
            preview: doc.text.substring(0, 200).replace(/\n/g, ' '),
            fullText: doc.text
          }))
        };
      }

      res.json({
        query,
        compareMode: true,
        results: formattedResults
      });
      return;
    }

    // Single model query (backward compatible with old behavior)
    const modelKey = model || 'all-MiniLM-L6-v2';
    
    await multiModelVectorDB.initializeModel(modelKey);
    const startTime = Date.now();
    const result = await multiModelVectorDB.search(query, modelKey, { limit, minSimilarity });
    const duration = Date.now() - startTime;

    const totalTokens = result.documents.reduce(
      (sum, doc) => sum + multiModelVectorDB.estimateTokens(doc.text),
      0
    );
    const avgSimilarity = result.documents.length > 0
      ? result.documents.reduce((sum, d) => sum + d.similarity, 0) / result.documents.length
      : 0;

    const response = {
      query,
      model: modelKey,
      status: result.selectedCount > 0 ? 'success' : 'no_results',
      totalRetrieved: result.retrievedCount,
      totalSelected: result.selectedCount,
      tokenCount: totalTokens,
      duration,
      avgSimilarity: Math.round(avgSimilarity * 100),
      documents: result.documents.map(doc => ({
        title: doc.metadata.title,
        section: doc.metadata.section || 'N/A',
        category: doc.metadata.category,
        docType: doc.metadata.docType,
        similarity: Math.round(doc.similarity * 100),
        tokens: multiModelVectorDB.estimateTokens(doc.text),
        preview: doc.text.substring(0, 200).replace(/\n/g, ' '),
        fullText: doc.text
      }))
    };

    res.json(response);

  } catch (error) {
    console.error('RAG query error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

/**
 * Get RAG system statistics (all models)
 * GET /api/rag/stats
 */
router.get('/stats', async (req, res) => {
  try {
    const availableModels = await multiModelVectorDB.initializeAll();
    const stats = multiModelVectorDB.getAllStats();
    res.json({
      models: stats,
      availableModels
    });
  } catch (error) {
    console.error('RAG stats error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

export default router;

