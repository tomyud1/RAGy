# RAG System - Quick Setup Guide

## 📦 What's Included

This is a **complete, standalone RAG system** with:
- ✅ 3 embedding models (all-MiniLM-L6-v2, BGE-base-en-v1.5, all-mpnet-base-v2)
- ✅ Pre-generated vector databases (~126MB)
- ✅ Parsed Godot documentation (8,425 chunks)
- ✅ Multi-model comparison UI
- ✅ REST API for queries
- ✅ CLI testing tools

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies

```bash
cd rag-system-export
npm install
```

### 2. Start the Server

```bash
npm run server
```

### 3. Open the RAG Tester

Go to: **http://localhost:3001/rag-tester.html**

You should see:
- All 3 models loaded
- "Compare 3 Models" button (or 2 if MPNet wasn't generated yet)

### 4. Try a Query!

Click an example query or type your own, then click **"🔍 Compare X Models"**

---

## 📂 Folder Structure

```
rag-system-export/
├── server.js                      # Express server (minimal)
├── package.json                   # Dependencies & scripts
├── README.md                      # File list & overview
├── SETUP.md                       # This file
├── IMPLEMENTATION_SUMMARY.md      # Technical details
│
├── server/
│   ├── services/ai/
│   │   ├── vector-db.service.js              # Single-model service
│   │   ├── multi-model-vector-db.service.js  # Multi-model service ⭐
│   │   ├── rag.service.js                    # RAG orchestration
│   │   └── rst-parser.service.js             # Document parser
│   │
│   ├── scripts/
│   │   ├── setup-rag.js                      # Setup default model
│   │   ├── generate-embeddings-bge.js        # BGE generator
│   │   ├── generate-embeddings-gte.js        # MPNet generator
│   │   ├── test-rag.js                       # CLI tester
│   │   └── ... (9 scripts total)
│   │
│   └── routes/
│       └── rag.routes.js                     # API endpoints ⭐
│
├── public/
│   └── rag-tester.html                       # Comparison UI ⭐
│
├── data/
│   ├── godot_docs_cache.json                 # Parsed docs (15MB)
│   ├── vector_db/                            # Model 1: all-MiniLM-L6-v2
│   ├── vector_db_bge/                        # Model 2: BGE-base-en-v1.5
│   └── vector_db_mpnet/                      # Model 3: all-mpnet-base-v2
│
└── docs/
    ├── rag-embedding-comparison.md
    └── rag-tester-dynamic-features.md
```

⭐ = Most important files for integration

---

## 🔌 Integration Guide

### For Your New App

#### 1. Copy the Core Files

Essential files for LLM integration:
- `server/services/ai/multi-model-vector-db.service.js`
- `server/routes/rag.routes.js`
- `data/*` (all vector databases)

#### 2. Import the Service

```javascript
import multiModelVectorDB from './server/services/ai/multi-model-vector-db.service.js';

// Initialize all models
await multiModelVectorDB.initializeAll();

// Query for relevant context
const results = await multiModelVectorDB.search(
  "How do I make a character jump?",
  "all-MiniLM-L6-v2",  // or any loaded model
  { limit: 5, minSimilarity: 0.55 }
);

// Use results.documents as context for your LLM
const context = results.documents.map(doc => doc.text).join('\n\n');
```

#### 3. Add to LLM Prompt

```javascript
const systemPrompt = `You are a Godot game development assistant.

Use the following documentation as context:

${context}

Answer the user's question based on this documentation.`;

// Send to GPT-5, Claude, Kimi-K2, etc.
const response = await llm.chat({
  model: 'gpt-5',
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userQuery }
  ]
});
```

#### 4. Use the API Endpoint

Or just use the existing REST API:

```javascript
// Query the RAG system
const response = await fetch('http://localhost:3001/api/rag/query', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: "How do I make a character jump?",
    limit: 5,
    minSimilarity: 0.55,
    model: 'bge-base-en-v1.5'  // or compareAll: true
  })
});

const { documents } = await response.json();
// Use documents as context for LLM
```

---

## 🛠️ Available Scripts

```bash
npm run server              # Start the server
npm run rag:test           # Interactive CLI testing
npm run rag:monitor        # View system stats
npm run rag:sample         # View random chunk samples

# Embedding generation (if you want to add more models)
npm run rag:embed:bge      # Generate BGE embeddings
npm run rag:embed:mpnet    # Generate MPNet embeddings
```

---

## 📊 API Endpoints

### GET /api/rag/stats
Get statistics for all models
```json
{
  "models": [
    {
      "modelKey": "all-MiniLM-L6-v2",
      "totalDocuments": 8425,
      "initialized": true
    }
  ],
  "availableModels": ["all-MiniLM-L6-v2", "bge-base-en-v1.5"]
}
```

### POST /api/rag/query
Query a single model
```json
{
  "query": "How do I make a character jump?",
  "limit": 5,
  "minSimilarity": 0.55,
  "model": "bge-base-en-v1.5"
}
```

Or compare all models:
```json
{
  "query": "How do I make a character jump?",
  "limit": 5,
  "minSimilarity": 0.55,
  "compareAll": true
}
```

---

## 🎯 Next Steps for Your App

### Phase 1: Basic Integration
1. ✅ Copy `multi-model-vector-db.service.js` to your project
2. ✅ Initialize it in your server
3. ✅ Query before sending to LLM
4. ✅ Add retrieved docs as context

### Phase 2: UI Integration
1. Copy `rag-tester.html` as a starting point
2. Customize styling to match your app
3. Add chat interface
4. Connect to your LLM APIs (GPT-5, Claude, Kimi-K2)

### Phase 3: Advanced Features
1. Model selection in chat UI
2. Show retrieved sources to users
3. Track which docs were most useful
4. Fine-tune similarity thresholds per query type

### Phase 4: Custom Models
1. Add more embedding models to compare
2. Generate embeddings for your own documentation
3. A/B test which model works best for your use case

---

## 💡 Pro Tips

### Token Optimization
- Use **limit: 3-5** for most queries (saves tokens)
- Increase to **8-10** for complex questions
- Set **minSimilarity: 0.50-0.60** for balanced results

### Model Selection
- **all-MiniLM-L6-v2**: Fastest, good for simple queries
- **bge-base-en-v1.5**: Best balance of speed and quality
- **all-mpnet-base-v2**: Highest quality, slower but more accurate

### Best Practices
1. **Always show sources**: Let users see which docs were used
2. **Log queries**: Track what works and what doesn't
3. **Cache results**: Same query = same context (save API calls)
4. **Test thresholds**: Different question types need different similarity levels

---

## 🐛 Troubleshooting

### "No models available"
- Check that `data/vector_db*/` folders exist
- Run `npm run rag:monitor` to see what's loaded
- Restart the server

### "Model X not found"
- That model wasn't generated yet
- Run the corresponding `rag:embed:*` script
- Restart the server

### Slow queries
- This is normal for first query (model loading)
- Subsequent queries are fast (~20-50ms)
- Use GPU/Neural Engine for faster embeddings

---

## 📚 Learn More

- `README.md` - Complete file list
- `IMPLEMENTATION_SUMMARY.md` - Technical deep dive
- `docs/rag-embedding-comparison.md` - Model comparison guide
- `docs/rag-tester-dynamic-features.md` - UI features

---

## 🎉 You're Ready!

This is a **production-ready RAG system**. All the hard work (parsing, chunking, embedding) is done. You can focus on:
- Building your chat UI
- Integrating with LLMs
- Creating an amazing user experience

**Good luck with your app!** 🚀
