import hnswlib from 'hnswlib-node';
import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';
import path from 'path';

const { HierarchicalNSW } = hnswlib;

/**
 * Lightweight vector database service using hnswlib
 * No server required - everything runs locally
 */
class VectorDBService {
  constructor() {
    this.index = null;
    this.embedder = null;
    this.documents = []; // Store documents in memory/file
    this.initialized = false;
    this.dimension = 384; // all-MiniLM-L6-v2 dimension
    this.embeddingModel = 'Xenova/all-MiniLM-L6-v2';
    this.indexPath = path.join(process.cwd(), 'data/godot_vector.index');
    this.docsPath = path.join(process.cwd(), 'data/godot_docs_metadata.json');
    this.batchEmbeddingCache = []; // Cache for batch processing
  }

  /**
   * Initialize the vector database
   */
  async initialize() {
    if (this.initialized) {
      console.log('✓ Vector DB already initialized');
      return;
    }

    try {
      console.log('🔧 Initializing Vector Database...');

      // Load embedding model with GPU acceleration
      console.log('  Loading embedding model with GPU acceleration...');
      this.embedder = await pipeline('feature-extraction', this.embeddingModel, {
        device: 'auto', // Automatically use GPU/Neural Engine if available
        dtype: 'fp32', // Better for M3 Neural Engine
      });
      console.log('  ✓ Embedding model loaded (GPU/Neural Engine enabled)');

      // Try to load existing index
      const indexExists = await this.fileExists(this.indexPath);
      const docsExist = await this.fileExists(this.docsPath);

      if (indexExists && docsExist) {
        console.log('  Loading existing vector index...');
        await this.loadIndex();
        console.log(`  ✓ Loaded index with ${this.documents.length} documents`);
      } else {
        console.log('  Creating new vector index...');
        this.index = new HierarchicalNSW('cosine', this.dimension);
        this.index.initIndex(100000); // Max 100k documents
        console.log('  ✓ New index created');
      }

      this.initialized = true;
      console.log('✅ Vector Database initialization complete\n');
    } catch (error) {
      console.error('❌ Failed to initialize Vector DB:', error);
      throw error;
    }
  }

  /**
   * Generate embedding for text
   */
  async generateEmbedding(text) {
    if (!this.embedder) {
      await this.initialize();
    }

    try {
      const output = await this.embedder(text, { pooling: 'mean', normalize: true });
      const embedding = Array.from(output.data);
      
      // Ensure correct dimension
      if (embedding.length !== this.dimension) {
        throw new Error(`Embedding dimension mismatch: ${embedding.length} vs ${this.dimension}`);
      }

      return embedding;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw error;
    }
  }

  /**
   * Generate embeddings for multiple texts in a single batch (faster!)
   */
  async generateEmbeddingsBatch(texts) {
    if (!this.embedder) {
      await this.initialize();
    }

    try {
      // Process all texts in one GPU call (much faster!)
      const output = await this.embedder(texts, { pooling: 'mean', normalize: true });
      
      // Extract embeddings for each text
      const embeddings = [];
      const dataArray = Array.from(output.data);
      
      for (let i = 0; i < texts.length; i++) {
        const start = i * this.dimension;
        const end = start + this.dimension;
        embeddings.push(dataArray.slice(start, end));
      }

      return embeddings;
    } catch (error) {
      console.error('Error generating batch embeddings:', error);
      throw error;
    }
  }

  /**
   * Add documents to the vector database (GPU-optimized)
   */
  async addDocuments(documents) {
    if (!this.initialized) {
      await this.initialize();
    }

    console.log(`\n📥 Adding ${documents.length} documents to vector database...`);
    console.log(`⚡ Using GPU-accelerated batch processing\n`);
    
    const batchSize = 50; // Larger batches for GPU (can handle it!)
    let totalAdded = 0;
    const startTime = Date.now();

    for (let i = 0; i < documents.length; i += batchSize) {
      const batch = documents.slice(i, i + batchSize);
      const batchNum = Math.floor(i / batchSize) + 1;
      const totalBatches = Math.ceil(documents.length / batchSize);
      
      const batchStartTime = Date.now();

      try {
        // Extract texts
        const texts = batch.map(doc => doc.text);

        // Generate ALL embeddings in one GPU call (MUCH FASTER!)
        const embeddings = await this.generateEmbeddingsBatch(texts);

        // Add to index
        for (let j = 0; j < batch.length; j++) {
          const docIndex = this.documents.length;
          this.index.addPoint(embeddings[j], docIndex);
          this.documents.push({
            text: batch[j].text,
            metadata: batch[j].metadata
          });
        }

        totalAdded += batch.length;
        
        const batchTime = ((Date.now() - batchStartTime) / 1000).toFixed(1);
        const avgTime = ((Date.now() - startTime) / totalAdded * batchSize / 1000).toFixed(1);
        const eta = ((documents.length - totalAdded) / batchSize * avgTime / 60).toFixed(1);
        
        console.log(`  ✓ Batch ${batchNum}/${totalBatches} | ${batch.length} docs | ${batchTime}s | ETA: ${eta} min | Total: ${totalAdded}/${documents.length}`);

        // Save progress periodically (every 20 batches)
        if (batchNum % 20 === 0) {
          console.log(`\n  💾 Saving progress checkpoint...`);
          await this.saveIndex();
          
          // Force garbage collection if available
          if (global.gc) {
            global.gc();
          }
        }

      } catch (error) {
        console.error(`    ✗ Error adding batch ${batchNum}:`, error.message);
      }
    }

    // Save final index and documents
    console.log('\n💾 Saving final index to disk...');
    await this.saveIndex();

    const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n✅ Successfully added ${totalAdded} documents in ${totalTime} minutes`);
    return totalAdded;
  }

  /**
   * Query the vector database
   */
  async query(queryText, options = {}) {
    if (!this.initialized) {
      await this.initialize();
    }

    const {
      limit = 5,
      minSimilarity = 0.7,
      category = null,
      docType = null
    } = options;

    try {
      // Generate query embedding
      const queryEmbedding = await this.generateEmbedding(queryText);

      // Search index
      const numResults = Math.min(limit * 3, this.documents.length); // Get more for filtering
      const result = this.index.searchKnn(queryEmbedding, numResults);

      // Format results
      const documents = [];
      for (let i = 0; i < result.neighbors.length; i++) {
        const docIndex = result.neighbors[i];
        const distance = result.distances[i];
        const similarity = 1 - distance; // Convert cosine distance to similarity

        if (similarity < minSimilarity) continue;

        const doc = this.documents[docIndex];
        if (!doc) continue;

        // Apply filters
        if (category && doc.metadata.category !== category) continue;
        if (docType && doc.metadata.docType !== docType) continue;

        documents.push({
          text: doc.text,
          metadata: doc.metadata,
          similarity,
          distance
        });

        if (documents.length >= limit) break;
      }

      return documents;
    } catch (error) {
      console.error('Error querying vector database:', error);
      return [];
    }
  }

  /**
   * Get database statistics
   */
  async getStats() {
    if (!this.initialized) {
      await this.initialize();
    }

    return {
      totalDocuments: this.documents.length,
      dimension: this.dimension,
      model: this.embeddingModel,
      indexPath: this.indexPath
    };
  }

  /**
   * Save index and documents to disk
   */
  async saveIndex() {
    try {
      const dataDir = path.dirname(this.indexPath);
      await fs.mkdir(dataDir, { recursive: true });

      // Save HNSW index
      this.index.writeIndexSync(this.indexPath);

      // Save documents metadata
      await fs.writeFile(this.docsPath, JSON.stringify(this.documents, null, 2));

      console.log(`✓ Index saved to ${this.indexPath}`);
      console.log(`✓ Documents saved to ${this.docsPath}`);
    } catch (error) {
      console.error('Error saving index:', error);
      throw error;
    }
  }

  /**
   * Load index and documents from disk
   */
  async loadIndex() {
    try {
      // Load HNSW index
      this.index = new HierarchicalNSW('cosine', this.dimension);
      this.index.readIndexSync(this.indexPath);

      // Load documents metadata
      const data = await fs.readFile(this.docsPath, 'utf-8');
      this.documents = JSON.parse(data);
    } catch (error) {
      console.error('Error loading index:', error);
      throw error;
    }
  }

  /**
   * Clear all data
   */
  async clearAll() {
    console.log('🗑️  Clearing vector database...');

    // Clear in-memory data
    this.documents = [];
    this.index = new HierarchicalNSW('cosine', this.dimension);
    this.index.initIndex(100000);

    // Delete files
    try {
      await fs.unlink(this.indexPath);
      await fs.unlink(this.docsPath);
      console.log('✓ Database files deleted');
    } catch (error) {
      // Files don't exist, that's fine
    }

    console.log('✅ Vector database cleared');
  }

  /**
   * Check if file exists
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Estimate token count
   */
  estimateTokens(text) {
    if (typeof text === 'string') {
      return Math.ceil(text.length / 4);
    }

    if (Array.isArray(text)) {
      const totalChars = text.reduce((sum, item) => {
        const itemText = typeof item === 'string' ? item : item.text;
        return sum + (itemText?.length || 0);
      }, 0);
      return Math.ceil(totalChars / 4);
    }

    return 0;
  }
}

export default new VectorDBService();

