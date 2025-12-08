import fs from 'fs/promises';
import path from 'path';
import { ProjectService } from './project.service.js';

const EMBEDDING_MODELS = {
  'all-MiniLM-L6-v2': 'Xenova/all-MiniLM-L6-v2',
  'bge-base-en-v1.5': 'Xenova/bge-base-en-v1.5',
  'all-mpnet-base-v2': 'Xenova/all-mpnet-base-v2',
};

// Lazy load hnswlib to handle cross-platform native module issues
let hnswlib = null;
async function getHnswlib() {
  if (!hnswlib) {
    try {
      const module = await import('hnswlib-node');
      hnswlib = module.default || module;
    } catch (error) {
      console.error('[RAG] Failed to load hnswlib-node:', error.message);
      throw new Error('Vector database library not available for RAG queries.');
    }
  }
  return hnswlib;
}

// Lazy load transformers to avoid sharp loading issues on Windows
let transformersPipeline = null;
async function getPipeline() {
  if (!transformersPipeline) {
    try {
      const transformers = await import('@xenova/transformers');
      transformersPipeline = transformers.pipeline;
    } catch (error) {
      console.error('[RAG] Failed to load transformers:', error.message);
      throw new Error('Transformers library not available for RAG queries.');
    }
  }
  return transformersPipeline;
}

export class RAGService {
  static vectorDbCache = new Map();
  
  static async queryVectorDbs(projectId, vectorDbIds, query, topK = 5, minSimilarity = 0.55, minTokens = 0) {
    const results = [];
    
    for (const vectorDbId of vectorDbIds) {
      try {
        const result = await this.querySingleVectorDb(projectId, vectorDbId, query, topK, minSimilarity, minTokens);
        results.push(result);
      } catch (error) {
        console.error(`Failed to query vector DB ${vectorDbId}:`, error);
        results.push({
          vectorDbId,
          error: error.message,
          documents: [],
        });
      }
    }
    
    return { results };
  }
  
  static async querySingleVectorDb(projectId, vectorDbId, query, topK, minSimilarity = 0.55, minTokens = 0) {
    const startTime = Date.now();
    
    // Load vector DB config
    const vectorDbDir = path.join(ProjectService.getVectorDbsPath(projectId), vectorDbId);
    const configPath = path.join(vectorDbDir, 'config.json');
    const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
    
    // Get or create embedding pipeline
    const cacheKey = config.modelId;
    let extractor = this.vectorDbCache.get(cacheKey);
    
    if (!extractor) {
      const modelName = EMBEDDING_MODELS[config.modelId];
      if (!modelName) {
        throw new Error(`Unknown model: ${config.modelId}`);
      }
      const pipelineFn = await getPipeline();
      extractor = await pipelineFn('feature-extraction', modelName);
      this.vectorDbCache.set(cacheKey, extractor);
    }
    
    // Generate query embedding
    const queryEmbedding = await extractor(query, { pooling: 'mean', normalize: true });
    const queryVector = Array.from(queryEmbedding.data);
    
    // Load index
    const hnsw = await getHnswlib();
    const index = new hnsw.HierarchicalNSW('cosine', config.dimensions);
    index.readIndexSync(path.join(vectorDbDir, 'index.hnsw'));
    
    // Search - fetch more results initially to ensure we get enough after filtering
    const searchResults = index.searchKnn(queryVector, topK * 2);
    
    // Load metadata
    const metadata = JSON.parse(await fs.readFile(path.join(vectorDbDir, 'metadata.json'), 'utf-8'));
    
    // Build results and filter by minimum similarity and tokens
    const allDocuments = searchResults.neighbors.map((idx, i) => {
      const meta = metadata[idx];
      return {
        text: meta.text,
        metadata: meta.metadata,
        similarity: 1 - searchResults.distances[i], // Convert distance to similarity
        tokens: meta.tokens,
      };
    });
    
    // Filter by minimum similarity and minimum tokens, then limit to topK
    const documents = allDocuments
      .filter(doc => {
        const meetsSimThreshold = doc.similarity >= minSimilarity;
        const meetsTokenThreshold = minTokens === 0 || (doc.tokens && doc.tokens >= minTokens);
        return meetsSimThreshold && meetsTokenThreshold;
      })
      .slice(0, topK);
    
    const avgSimilarity = documents.length > 0 
      ? documents.reduce((sum, doc) => sum + doc.similarity, 0) / documents.length 
      : 0;
    const queryTime = Date.now() - startTime;
    
    return {
      vectorDbId,
      modelName: config.modelName,
      modelId: config.modelId,
      dimensions: config.dimensions,
      documents,
      avgSimilarity,
      queryTime,
    };
  }
  
  static async importVectorDb(projectId, vectorDbData) {
    // Import external vector database
    // This would handle importing from other formats
    // For now, just a placeholder
    throw new Error('Import not yet implemented');
  }
}

