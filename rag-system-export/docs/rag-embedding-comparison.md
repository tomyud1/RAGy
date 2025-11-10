# RAG Embedding Model Comparison Guide

## Overview

This system allows you to compare different embedding models side-by-side to determine which provides the best retrieval quality for Godot documentation.

## Available Models

1. **all-MiniLM-L6-v2** (Sentence-Transformers)
   - Dimension: 384
   - Speed: ⚡⚡⚡ Fast
   - Size: 80MB
   - Best for: General-purpose, fast retrieval

2. **bge-base-en-v1.5** (BAAI)
   - Dimension: 768
   - Speed: ⚡⚡ Medium
   - Size: 220MB
   - Best for: High-quality English text retrieval

3. **gte-small** (Alibaba-NLP)
   - Dimension: 384
   - Speed: ⚡⚡⚡ Fast
   - Size: 60MB
   - Best for: Balanced speed and accuracy

## Setup Instructions

### Step 1: Generate Embeddings

Generate embeddings for each model you want to compare:

```bash
# Already done (existing default model)
npm run rag:setup:clear

# Generate BGE embeddings (run this first)
npm run rag:embed:bge

# Generate GTE embeddings (run this after BGE completes)
npm run rag:embed:gte
```

**Important:** 
- Run these scripts **one at a time** to avoid overheating your MacBook M3
- Each script will take 15-30 minutes depending on your M3 Neural Engine performance
- Progress will be displayed in real-time in the console

### Step 2: Start the Server

```bash
npm run server
```

### Step 3: Open the RAG Tester

Navigate to: `http://localhost:3001/rag-tester.html`

## How to Compare Models

### Visual Comparison Interface

The RAG tester now provides:

1. **Summary Table**: At the top, showing key metrics for all models:
   - Model name
   - Status (success/fail)
   - Number of documents retrieved
   - Total tokens
   - Query time
   - Average similarity score

2. **Individual Model Results**: Stacked vertically below the summary:
   - Each model gets its own section
   - Shows top retrieved documents
   - Click any document to expand and view full content
   - Easy to scroll and compare document quality

### What to Look For

When comparing models, evaluate:

1. **Retrieval Quality**
   - Are the returned documents relevant to the query?
   - Do they contain the information needed to answer the question?

2. **Similarity Scores**
   - Higher average similarity = better semantic matching
   - But check actual content relevance, not just scores

3. **Speed**
   - Which model retrieves fastest?
   - Does the speed difference matter for your use case?

4. **Token Efficiency**
   - Do models retrieve similar documents?
   - Which uses fewer tokens for equivalent quality?

## Example Queries

Try these queries to test different aspects:

- **Technical API**: "What is Transform2D?"
- **How-To**: "How do I make a character jump?"
- **Conceptual**: "What is a signal in GDScript?"
- **Setup/Configuration**: "How do I load a scene?"
- **Input Handling**: "How do I get player input?"

## File Structure

```
data/
├── godot_docs_cache.json          # Parsed & chunked docs (shared by all models)
├── vector_db/                     # all-MiniLM-L6-v2 (default)
│   ├── index.hnsw
│   ├── metadata.json
│   └── config.json
├── vector_db_bge/                 # bge-base-en-v1.5
│   ├── index.hnsw
│   ├── metadata.json
│   └── config.json
└── vector_db_gte/                 # gte-small
    ├── index.hnsw
    ├── metadata.json
    └── config.json
```

## Technical Details

### Embedding Generation

- **Technology**: `@xenova/transformers` (runs on M3 Neural Engine)
- **Batch Size**: 20 documents per batch
- **Index**: HNSW (Hierarchical Navigable Small World)
- **Distance Metric**: Cosine similarity
- **Progress Tracking**: Real-time console output with ETA

### Query Process

1. User enters query in web interface
2. Backend loads all initialized models
3. Query is embedded using each model's embedder
4. HNSW index performs fast approximate nearest neighbor search
5. Results filtered by similarity threshold
6. Formatted and returned to frontend
7. Frontend displays results side-by-side

## Performance Tips

- **M3 MacBook**: GPU acceleration enabled automatically
- **Memory**: Each model uses ~200-500MB RAM when loaded
- **Disk Space**: ~500MB per model (index + metadata)
- **Query Time**: 20-50ms per model (depends on complexity)

## Next Steps

After comparing models:

1. **Choose the best model** based on your evaluation
2. **Update `server/services/ai/rag.service.js`** to use the selected model by default
3. **Integrate into the main chat** to provide context-aware responses
4. **Fine-tune similarity threshold** based on your accuracy requirements

## Troubleshooting

### Model Not Found Error

If you see "Vector database not found for [model]":
- Ensure you ran the embedding generation script for that model
- Check that files exist in `data/vector_db_[model]/`

### Slow Embedding Generation

- **Normal**: 15-30 minutes per model
- **If stuck**: Check console for errors
- **Reduce batch size**: Edit script, change `BATCH_SIZE` from 20 to 10

### Different Results Between Models

- **Expected**: Each model has different strengths
- **Evaluate content quality**, not just similarity scores
- **Try multiple queries** to get a comprehensive view

## Reference

- [Sentence Transformers Documentation](https://www.sbert.net/)
- [BGE Models (BAAI)](https://huggingface.co/BAAI/bge-base-en-v1.5)
- [GTE Models (Alibaba)](https://huggingface.co/Alibaba-NLP/gte-small)
- [Xenova Transformers](https://github.com/xenova/transformers.js)

