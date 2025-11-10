# RAG System - Complete File List

## 📁 Core Services (server/services/ai/)
- `vector-db.service.js` - Original single-model vector database service
- `multi-model-vector-db.service.js` - Multi-model vector database with comparison support
- `rag.service.js` - Main RAG orchestration service
- `rst-parser.service.js` - ReStructuredText parser with semantic chunking

## 📁 Scripts (server/scripts/)
- `setup-rag.js` - Initial RAG setup with default model
- `migrate-vector-db.js` - Migration from old to new format
- `generate-embeddings-bge.js` - BGE-base-en-v1.5 embedding generator
- `generate-embeddings-gte.js` - all-mpnet-base-v2 embedding generator
- `test-rag.js` - CLI testing interface
- `monitor-rag.js` - System monitoring
- `test-parser.js` - Parser testing utility
- `test-semantic-chunking.js` - Chunking validation
- `sample-chunks.js` - Random chunk sampler

## 📁 API Routes (server/routes/)
- `rag.routes.js` - REST API endpoints for RAG queries and stats

## 📁 Frontend (public/)
- `rag-tester.html` - Dynamic multi-model comparison UI

## 📁 Data Files (data/)
- `godot_docs_cache.json` - Parsed and chunked documentation (15MB)
- `vector_db/` - all-MiniLM-L6-v2 model database
  - `index.hnsw` - Vector index (14MB)
  - `metadata.json` - Document metadata (15MB)
  - `config.json` - Model configuration
- `vector_db_bge/` - bge-base-en-v1.5 model database
  - `index.hnsw` - Vector index (26MB)
  - `metadata.json` - Document metadata (15MB)
  - `config.json` - Model configuration
- `vector_db_mpnet/` - all-mpnet-base-v2 model database (if generated)
  - `index.hnsw` - Vector index
  - `metadata.json` - Document metadata
  - `config.json` - Model configuration

## 📁 Documentation (docs/)
- `rag-embedding-comparison.md` - Embedding model comparison guide
- `rag-tester-dynamic-features.md` - RAG tester features documentation
- `IMPLEMENTATION_SUMMARY.md` - Complete implementation summary

## 📦 Dependencies (from package.json)
```json
{
  "dependencies": {
    "@xenova/transformers": "^2.17.2",
    "hnswlib-node": "^3.0.0",
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

## 🛠️ NPM Scripts (package.json)
```json
{
  "rag:setup": "node --expose-gc server/scripts/setup-rag.js",
  "rag:setup:clear": "node --expose-gc server/scripts/setup-rag.js --clear",
  "rag:migrate": "node server/scripts/migrate-vector-db.js",
  "rag:embed:bge": "node --expose-gc server/scripts/generate-embeddings-bge.js",
  "rag:embed:mpnet": "node --expose-gc server/scripts/generate-embeddings-gte.js",
  "rag:monitor": "node server/scripts/monitor-rag.js",
  "rag:test": "node server/scripts/test-rag.js",
  "rag:test:suite": "node server/scripts/test-rag.js --tests",
  "rag:test:parser": "node server/scripts/test-parser.js",
  "rag:test:chunking": "node server/scripts/test-semantic-chunking.js",
  "rag:sample": "node server/scripts/sample-chunks.js"
}
```

## 📊 Total Size Estimate
- Code files: ~50KB
- Documentation: ~100KB
- Data files (with all 3 models): ~150MB
- **Total: ~150MB**

## 🚀 What This Enables
1. ✅ Multi-model embedding generation
2. ✅ Vector database management
3. ✅ Document parsing (RST format)
4. ✅ Semantic chunking
5. ✅ Real-time comparison UI
6. ✅ REST API for queries
7. ✅ CLI testing tools
8. ✅ System monitoring

## 🔌 Integration Points for New App
- **Express API**: Import rag.routes.js
- **Frontend**: Embed or extend rag-tester.html
- **LLM Integration**: Use multi-model-vector-db.service.js for retrieval
- **Custom Models**: Add to multi-model-vector-db.service.js constructor
