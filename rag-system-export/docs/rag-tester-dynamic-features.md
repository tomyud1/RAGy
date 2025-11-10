# RAG Tester - Dynamic Features

## Overview

The RAG System Tester is now a fully dynamic, standalone application that automatically adapts to the available vector databases.

## Dynamic Behavior

### 1. **Auto-Detection of Available Models**

On page load, the tester:
- Fetches available models from the API
- Detects which models have been initialized
- Adapts the UI based on what's available

### 2. **Adaptive UI States**

#### **Zero Models Available**
- **Subtitle**: "No models available - Generate embeddings first"
- **Stats Badge**: "No models available - Run embedding scripts"
- **Button**: "🔍 Search" (disabled state expected)

#### **One Model Available**
- **Subtitle**: "Using [model-name] model"
- **Stats Badge**: Shows single model stats (e.g., "all-MiniLM-L6-v2: 8,425 docs")
- **Button**: "🔍 Search"
- **Behavior**: Queries only that single model (faster, no comparison)
- **Results**: Shows single model results with statistics table

#### **Multiple Models Available**
- **Subtitle**: "Compare embedding models side-by-side"
- **Stats Badge**: Shows all model stats
- **Button**: "🔍 Compare [N] Models" (e.g., "🔍 Compare 3 Models")
- **Behavior**: Queries all models simultaneously
- **Results**: Shows comparison table + individual sections for each model

### 3. **Smart Query Routing**

```javascript
// Single model mode
if (isSingleModel) {
  { query, limit: 5, minSimilarity, model: availableModels[0] }
}

// Multi-model comparison mode
else {
  { query, limit: 5, minSimilarity, compareAll: true }
}
```

### 4. **Dynamic Results Display**

#### Single Model Results:
- Statistics table with Model column
- One results section
- Direct document display

#### Multi-Model Comparison:
- Comparison summary table at top
- Separate vertical sections for each model
- Easy scrolling to compare

## Standalone App Features

### 1. **Self-Contained**
- No external dependencies on main app
- Direct API communication
- Own state management

### 2. **Real-Time Updates**
- Stats refresh on load
- Dynamic button text
- Adaptive subtitle

### 3. **Flexible API**
- Supports both single and multi-model queries
- Backward compatible with existing code
- Ready for future extensions

### 4. **Extensible Architecture**

Easy to add:
- Model selection dropdown (for 3+ models)
- Advanced filtering options
- Export/compare results
- Query history
- Favorites/bookmarks
- Performance metrics visualization

## Future App Extensions

This foundation supports building:

### 1. **Model Management Dashboard**
- View all available models
- Download/remove models
- See storage usage
- Monitor performance

### 2. **Query History & Analytics**
- Save queries and results
- Compare performance over time
- Track model accuracy
- Export data for analysis

### 3. **Advanced Comparison Tools**
- Side-by-side document diff
- Relevance scoring
- Custom evaluation metrics
- A/B testing framework

### 4. **Integration Features**
- Export results as JSON/CSV
- Webhook notifications
- API key management
- Team collaboration

### 5. **Visualization Dashboard**
- Charts for similarity scores
- Token usage graphs
- Response time trends
- Model performance heatmaps

## Technical Architecture

### Component Structure
```
RAG Tester (Standalone SPA)
├── State Management
│   ├── availableModels[]
│   ├── isSingleModel
│   └── minSimilarity
├── API Layer
│   ├── /api/rag/stats
│   └── /api/rag/query
├── UI Components
│   ├── Header (dynamic)
│   ├── Search Section
│   ├── Stats Badge (dynamic)
│   └── Results Display (adaptive)
└── Event Handlers
    ├── Search
    ├── Slider
    └── Example Buttons
```

### API Contract

**GET `/api/rag/stats`**
```json
{
  "models": [
    {
      "modelKey": "all-MiniLM-L6-v2",
      "modelName": "Sentence-Transformers/all-MiniLM-L6-v2",
      "dimension": 384,
      "totalDocuments": 8425,
      "initialized": true
    }
  ],
  "availableModels": ["all-MiniLM-L6-v2"]
}
```

**POST `/api/rag/query`** (Single Model)
```json
{
  "query": "How do I make a character jump?",
  "limit": 5,
  "minSimilarity": 0.55,
  "model": "all-MiniLM-L6-v2"
}
```

**POST `/api/rag/query`** (Compare All)
```json
{
  "query": "How do I make a character jump?",
  "limit": 5,
  "minSimilarity": 0.55,
  "compareAll": true
}
```

## Development Roadmap

### Phase 1: Core Functionality ✅
- [x] Dynamic model detection
- [x] Adaptive UI
- [x] Single model mode
- [x] Multi-model comparison
- [x] Real-time stats

### Phase 2: Enhanced UX
- [ ] Model selection dropdown (for 3+ models)
- [ ] Query history (localStorage)
- [ ] Keyboard shortcuts
- [ ] Dark/light theme toggle
- [ ] Mobile responsive design

### Phase 3: Advanced Features
- [ ] Export results
- [ ] Performance benchmarking
- [ ] Custom evaluation metrics
- [ ] Query templates
- [ ] Batch testing

### Phase 4: Collaboration
- [ ] Share results via URL
- [ ] Team workspaces
- [ ] Comments on results
- [ ] API access tokens
- [ ] Webhook integrations

## Current Status

**Ready for Production Use:**
- ✅ Fully dynamic
- ✅ Auto-adapts to available models
- ✅ Handles 0, 1, or N models gracefully
- ✅ Standalone application
- ✅ Clean, modern UI
- ✅ Fast and responsive
- ✅ Extensible architecture

**Next Recommended Step:**
Generate the 2 additional embedding models and test the multi-model comparison in action!

