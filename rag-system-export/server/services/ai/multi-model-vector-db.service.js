import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';
import path from 'path';
import hnswlib from 'hnswlib-node';

/**
 * Multi-Model Vector Database Service
 * Supports multiple embedding models for comparison
 */
class MultiModelVectorDBService {
  constructor() {
    this.models = {
      'all-MiniLM-L6-v2': {
        name: 'Xenova/all-MiniLM-L6-v2',
        dimension: 384,
        dir: 'data/vector_db',
        embedder: null,
        index: null,
        documents: null
      },
      'bge-base-en-v1.5': {
        name: 'Xenova/bge-base-en-v1.5',
        dimension: 768,
        dir: 'data/vector_db_bge',
        embedder: null,
        index: null,
        documents: null
      },
      'all-mpnet-base-v2': {
        name: 'Xenova/all-mpnet-base-v2',
        dimension: 768,
        dir: 'data/vector_db_mpnet',
        embedder: null,
        index: null,
        documents: null
      }
    };
  }

  /**
   * Initialize a specific model
   */
  async initializeModel(modelKey) {
    const model = this.models[modelKey];
    if (!model) {
      throw new Error(`Unknown model: ${modelKey}`);
    }

    if (model.index && model.documents && model.embedder) {
      return; // Already initialized
    }

    console.log(`🔄 Initializing ${modelKey}...`);

    const indexPath = path.join(process.cwd(), model.dir, 'index.hnsw');
    const metadataPath = path.join(process.cwd(), model.dir, 'metadata.json');
    const configPath = path.join(process.cwd(), model.dir, 'config.json');

    // Check if files exist
    try {
      await fs.access(indexPath);
      await fs.access(metadataPath);
    } catch (error) {
      throw new Error(
        `Vector database not found for ${modelKey}. Please run the embedding generation script first.`
      );
    }

    // Load embedder
    if (!model.embedder) {
      console.log(`   Loading ${model.name}...`);
      model.embedder = await pipeline('feature-extraction', model.name, {
        device: 'auto',
        dtype: 'fp32'
      });
    }

    // Load index
    model.index = new hnswlib.HierarchicalNSW('cosine', model.dimension);
    model.index.readIndex(indexPath);

    // Load documents
    const metadataContent = await fs.readFile(metadataPath, 'utf-8');
    model.documents = JSON.parse(metadataContent);

    console.log(`   ✅ ${modelKey} loaded (${model.documents.length} docs)`);
  }

  /**
   * Initialize all available models
   */
  async initializeAll() {
    console.log('🚀 Initializing all vector databases...\n');
    
    const availableModels = [];
    for (const modelKey of Object.keys(this.models)) {
      try {
        await this.initializeModel(modelKey);
        availableModels.push(modelKey);
      } catch (error) {
        console.log(`   ⚠️  ${modelKey}: ${error.message}`);
      }
    }

    console.log();
    return availableModels;
  }

  /**
   * Generate embedding for a query using a specific model
   */
  async generateEmbedding(text, modelKey) {
    const model = this.models[modelKey];
    if (!model || !model.embedder) {
      throw new Error(`Model ${modelKey} not initialized`);
    }

    const output = await model.embedder(text, {
      pooling: 'mean',
      normalize: true
    });
    return Array.from(output.data);
  }

  /**
   * Search for similar documents using a specific model
   */
  async search(query, modelKey, options = {}) {
    const { limit = 10, minSimilarity = 0.45 } = options;

    const model = this.models[modelKey];
    if (!model || !model.index || !model.documents) {
      throw new Error(`Model ${modelKey} not initialized`);
    }

    // Generate query embedding
    const queryEmbedding = await this.generateEmbedding(query, modelKey);

    // Search index
    const results = model.index.searchKnn(queryEmbedding, limit * 2);

    // Format and filter results
    const documents = [];
    for (let i = 0; i < results.neighbors.length; i++) {
      const docIndex = results.neighbors[i];
      const distance = results.distances[i];
      const similarity = 1 - distance; // Convert distance to similarity

      if (similarity >= minSimilarity) {
        const doc = model.documents[docIndex];
        documents.push({
          ...doc,
          similarity: similarity,
          distance: distance
        });
      }
    }

    // Sort by similarity (descending) and limit
    documents.sort((a, b) => b.similarity - a.similarity);
    const limitedDocs = documents.slice(0, limit);

    return {
      documents: limitedDocs,
      retrievedCount: results.neighbors.length,
      selectedCount: limitedDocs.length
    };
  }

  /**
   * Compare results across all models for the same query
   */
  async compareAll(query, options = {}) {
    const results = {};
    
    for (const modelKey of Object.keys(this.models)) {
      const model = this.models[modelKey];
      
      // Skip if not initialized
      if (!model.index || !model.documents || !model.embedder) {
        continue;
      }

      try {
        const startTime = Date.now();
        const result = await this.search(query, modelKey, options);
        const duration = Date.now() - startTime;

        results[modelKey] = {
          ...result,
          duration,
          model: model.name
        };
      } catch (error) {
        console.error(`Error querying ${modelKey}:`, error.message);
        results[modelKey] = {
          error: error.message,
          model: model.name
        };
      }
    }

    return results;
  }

  /**
   * Get statistics for a specific model
   */
  getStats(modelKey) {
    const model = this.models[modelKey];
    if (!model) {
      return null;
    }

    return {
      modelKey,
      modelName: model.name,
      dimension: model.dimension,
      totalDocuments: model.documents ? model.documents.length : 0,
      initialized: !!(model.index && model.documents && model.embedder)
    };
  }

  /**
   * Get statistics for all models
   */
  getAllStats() {
    return Object.keys(this.models).map(key => this.getStats(key));
  }

  /**
   * Estimate token count for text
   */
  estimateTokens(text) {
    // Rough estimate: ~4 characters per token
    return Math.ceil(text.length / 4);
  }
}

export default new MultiModelVectorDBService();

