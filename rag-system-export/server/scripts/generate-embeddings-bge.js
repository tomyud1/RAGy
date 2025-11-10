import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';
import path from 'path';
import hnswlib from 'hnswlib-node';

const MODEL_NAME = 'Xenova/bge-base-en-v1.5';
const BATCH_SIZE = 20;
const VECTOR_DB_DIR = path.join(process.cwd(), 'data/vector_db_bge');
const CACHE_FILE = path.join(process.cwd(), 'data/godot_docs_cache.json');

class BGEEmbeddingGenerator {
  constructor() {
    this.embedder = null;
    this.index = null;
    this.documents = [];
    this.dimension = 768; // bge-base-en-v1.5 dimension (from HuggingFace docs)
  }

  async initialize() {
    console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
    console.log('║                                                                   ║');
    console.log('║         🤖  BGE-BASE-EN-V1.5 EMBEDDING GENERATOR  🤖             ║');
    console.log('║                                                                   ║');
    console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

    // Create directory if it doesn't exist
    await fs.mkdir(VECTOR_DB_DIR, { recursive: true });

    console.log('📦 Loading embedding model...');
    console.log(`   Model: ${MODEL_NAME}`);
    console.log(`   Device: GPU (M3 Neural Engine)\n`);

    this.embedder = await pipeline('feature-extraction', MODEL_NAME, {
      device: 'auto',
      dtype: 'fp32'
    });

    console.log('✅ Model loaded successfully!\n');
  }

  async loadDocuments() {
    console.log('📚 Loading parsed documentation...');
    const data = await fs.readFile(CACHE_FILE, 'utf-8');
    this.documents = JSON.parse(data);
    console.log(`   ✅ Loaded ${this.documents.length.toLocaleString()} chunks\n`);
  }

  async generateEmbedding(text) {
    const output = await this.embedder(text, {
      pooling: 'mean',
      normalize: true
    });
    return Array.from(output.data);
  }

  async generateAllEmbeddings() {
    console.log('🔄 Generating embeddings...\n');
    console.log('═'.repeat(80));

    const totalBatches = Math.ceil(this.documents.length / BATCH_SIZE);
    const allEmbeddings = [];
    
    const startTime = Date.now();

    for (let i = 0; i < this.documents.length; i += BATCH_SIZE) {
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      const batch = this.documents.slice(i, i + BATCH_SIZE);
      const batchStartTime = Date.now();

      // Generate embeddings for batch
      const batchEmbeddings = [];
      for (const doc of batch) {
        const embedding = await this.generateEmbedding(doc.text);
        batchEmbeddings.push(embedding);
      }

      allEmbeddings.push(...batchEmbeddings);

      const batchDuration = Date.now() - batchStartTime;
      const totalDuration = Date.now() - startTime;
      const docsProcessed = i + batch.length;
      const progress = ((docsProcessed / this.documents.length) * 100).toFixed(1);
      const avgTimePerDoc = totalDuration / docsProcessed;
      const estimatedRemaining = Math.round((this.documents.length - docsProcessed) * avgTimePerDoc / 1000);

      console.log(`📊 Batch ${batchNum}/${totalBatches}`);
      console.log(`   Documents: ${docsProcessed}/${this.documents.length} (${progress}%)`);
      console.log(`   Batch time: ${(batchDuration / 1000).toFixed(2)}s`);
      console.log(`   Avg per doc: ${avgTimePerDoc.toFixed(0)}ms`);
      console.log(`   Est. remaining: ${estimatedRemaining}s`);
      console.log('─'.repeat(80));

      // Trigger garbage collection if available
      if (global.gc && batchNum % 10 === 0) {
        global.gc();
      }
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log('═'.repeat(80));
    console.log(`\n✅ Embedding generation complete!`);
    console.log(`   Total time: ${totalTime}s`);
    console.log(`   Total documents: ${this.documents.length.toLocaleString()}\n`);

    return allEmbeddings;
  }

  async buildIndex(embeddings) {
    console.log('🏗️  Building HNSW index...\n');

    this.index = new hnswlib.HierarchicalNSW('cosine', this.dimension);
    this.index.initIndex(this.documents.length);

    console.log(`   Index type: HNSW (Hierarchical Navigable Small World)`);
    console.log(`   Distance metric: Cosine similarity`);
    console.log(`   Dimensions: ${this.dimension}`);
    console.log(`   Total vectors: ${embeddings.length.toLocaleString()}\n`);

    console.log('📥 Adding vectors to index...');
    
    for (let i = 0; i < embeddings.length; i++) {
      this.index.addPoint(embeddings[i], i);
      
      if ((i + 1) % 1000 === 0 || i === embeddings.length - 1) {
        const progress = (((i + 1) / embeddings.length) * 100).toFixed(1);
        console.log(`   Progress: ${i + 1}/${embeddings.length} (${progress}%)`);
      }
    }

    console.log('\n✅ Index built successfully!\n');
  }

  async saveToFile() {
    console.log('💾 Saving to disk...\n');

    const indexPath = path.join(VECTOR_DB_DIR, 'index.hnsw');
    const metadataPath = path.join(VECTOR_DB_DIR, 'metadata.json');
    const configPath = path.join(VECTOR_DB_DIR, 'config.json');

    // Save HNSW index
    this.index.writeIndex(indexPath);
    console.log(`   ✅ Index saved: ${indexPath}`);

    // Save document metadata
    await fs.writeFile(metadataPath, JSON.stringify(this.documents, null, 2));
    console.log(`   ✅ Metadata saved: ${metadataPath}`);

    // Save configuration
    const config = {
      model: MODEL_NAME,
      dimension: this.dimension,
      totalDocuments: this.documents.length,
      createdAt: new Date().toISOString(),
      distanceMetric: 'cosine'
    };
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
    console.log(`   ✅ Config saved: ${configPath}\n`);
  }

  async run() {
    try {
      await this.initialize();
      await this.loadDocuments();
      const embeddings = await this.generateAllEmbeddings();
      await this.buildIndex(embeddings);
      await this.saveToFile();

      console.log('═'.repeat(80));
      console.log('🎉 BGE-BASE-EN-V1.5 EMBEDDING GENERATION COMPLETE!\n');
      console.log('Next steps:');
      console.log('  1. Run: npm run rag:embed:gte');
      console.log('  2. Test: npm run server (then open http://localhost:3001/rag-tester.html)');
      console.log('═'.repeat(80) + '\n');

    } catch (error) {
      console.error('\n❌ Error:', error.message);
      console.error(error.stack);
      process.exit(1);
    }
  }
}

const generator = new BGEEmbeddingGenerator();
generator.run();

