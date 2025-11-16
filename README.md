# RAGy - Modern RAG System

A powerful, user-friendly RAG (Retrieval-Augmented Generation) system that allows you to create, manage, and test multiple vector databases with different embedding models.

## 🎯 Features

- **Multi-Project Support**: Create and manage multiple RAG projects
- **Flexible Document Processing**: Upload PDFs, DOCX, XLSX, TXT, MD, and more
- **Advanced Chunking**: Uses Docling for intelligent document chunking
- **Multiple Embedding Models**: Choose from MiniLM, BGE, and MPNet models
- **Real-time Progress**: WebSocket-based progress tracking
- **Vector DB Comparison**: Test and compare different embedding models
- **Modern UI**: Beautiful, grey-themed React interface
- **GPU Acceleration**: Leverages M3 Neural Engine for fast embeddings

## 🏗️ Architecture

```
┌─────────────────────┐
│   React Frontend    │  ← Vite + React + Modern UI
│   (Port 5173)       │
└─────────┬───────────┘
          │ HTTP/WebSocket
┌─────────▼───────────────────────────────────┐
│   Node.js/Express Backend (Port 3001)       │
│   - Project management                      │
│   - File upload (multer)                    │
│   - Chunking orchestration                  │
│   - Embedding generation (@xenova)          │
│   - Vector DB (hnswlib)                     │
│   - RAG queries                             │
└─────────┬──────────┬────────────────────────┘
          │          │
          │    ┌─────▼──────────┐
          │    │ Python Service │  ← Docling chunking
          │    │  (subprocess)  │
          │    └────────────────┘
          │
    ┌─────▼──────┐
    │ Vector DBs │  ← HNSW indices
    └────────────┘
```

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- macOS (for M3 Neural Engine) or Linux

### Setup

1. **Install Node dependencies:**

```bash
npm run setup
```

This will:
- Install Node.js dependencies
- Install Python dependencies (Docling, transformers, torch)

2. **Alternative manual setup:**

```bash
# Install Node packages
npm install

# Install Python packages
cd server/python
pip3 install -r requirements.txt
```

## 🚀 Usage

### Start Development Server

Run both frontend and backend:

```bash
npm run dev:all
```

Or run separately:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

### Workflow

1. **Create a Project**
   - Click "Create New Project"
   - Enter a descriptive name (e.g., "Heat Transfer Textbook")

2. **Upload Documents**
   - Drag and drop your files
   - Supports: PDF, DOCX, XLSX, PPTX, TXT, MD, etc.
   - Files are stored in `data/projects/{project-id}/raw-files/`

3. **Choose Chunking Method**
   - Default: Docling Hybrid (recommended)
   - Or upload pre-chunked JSON files
   - Chunks preview available after processing

4. **Preview Chunks**
   - Review generated chunks
   - Check if context is preserved correctly
   - Use random sampling to inspect different sections
   - Approve when satisfied

5. **Select Embedding Model**
   - **MiniLM-L6-v2**: Fast, 384D (recommended for most)
   - **BGE-Base-v1.5**: High quality, 768D
   - **MPNet-Base-v2**: Balanced, 768D

6. **Generate Embeddings**
   - Real-time progress with WebSocket
   - Shows batch progress, speed, and ETA
   - GPU accelerated on M3 Macs
   - Creates vector database automatically

7. **Test RAG System**
   - Query your vector databases
   - Compare multiple models side-by-side
   - View similarity scores and results
   - Import external vector databases (coming soon)

## 📁 Project Structure

```
RAGy/
├── src/                          # React frontend
│   ├── components/               # UI components
│   │   ├── steps/                # Wizard step components
│   │   │   ├── FileUploadStep.jsx
│   │   │   ├── ChunkingMethodStep.jsx
│   │   │   ├── ChunkPreviewStep.jsx
│   │   │   ├── EmbeddingModelStep.jsx
│   │   │   ├── EmbeddingProgressStep.jsx
│   │   │   └── RAGTestingStep.jsx
│   │   ├── Header.jsx
│   │   ├── ProjectSelector.jsx
│   │   ├── ProjectWorkspace.jsx
│   │   └── StepIndicator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/                       # Backend
│   ├── services/                 # Business logic
│   │   ├── project.service.js
│   │   ├── chunking.service.js
│   │   ├── embedding.service.js
│   │   └── rag.service.js
│   ├── routes/                   # API routes
│   │   ├── project.routes.js
│   │   ├── upload.routes.js
│   │   ├── chunking.routes.js
│   │   ├── embedding.routes.js
│   │   └── rag.routes.js
│   ├── python/                   # Python services
│   │   ├── docling_chunker.py
│   │   └── requirements.txt
│   └── server.js                 # Main server
├── data/                         # Project data
│   └── projects/                 # User projects
│       └── {project-id}/
│           ├── raw-files/        # Uploaded documents
│           ├── chunked-data/     # Generated chunks
│           ├── vector-dbs/       # Vector databases
│           └── project-config.json
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuration

### Chunking Configuration

Modify in `ChunkingMethodStep.jsx`:

```javascript
config: {
  maxTokens: 512,      // Maximum tokens per chunk
  mergePeers: true     // Merge consecutive chunks with same headers
}
```

### Embedding Models

Add new models in `server/services/embedding.service.js`:

```javascript
const EMBEDDING_MODELS = {
  'model-id': {
    name: 'Xenova/model-name',
    dimensions: 384,
  },
};
```

## 🐛 Troubleshooting

### Python Docling Issues

If chunking fails:

```bash
# Verify Python installation
python3 --version

# Reinstall Docling
cd server/python
pip3 install --upgrade -r requirements.txt

# Test manually
python3 docling_chunker.py <input_dir> <output_file>
```

### WebSocket Connection Issues

If progress updates don't show:

1. Check that backend is running on port 3001
2. Verify WebSocket endpoint: `ws://localhost:3001/ws`
3. Check browser console for errors

### File Upload Issues

Ensure you have write permissions:

```bash
chmod -R 755 data/
```

## 🎓 Example Use Cases

### 1. Student Learning Assistant

A student studying heat transfer can:
- Upload textbook PDFs, lecture notes, homework
- Create vector database with all materials
- Query specific concepts and get relevant context
- Compare different chunking strategies

### 2. Technical Documentation Search

Developer creating a searchable knowledge base:
- Upload API docs, tutorials, code examples
- Test different embedding models
- Find best model for their content type
- Export vector DB for production use

### 3. Research Paper Analysis

Researcher analyzing multiple papers:
- Upload collection of PDFs
- Chunk by sections/paragraphs
- Query across all papers
- Find related concepts and citations

## 🚧 Roadmap (Phase 2)

- [ ] AI Chat Integration (GPT-4, Claude)
- [ ] Custom chunking strategies
- [ ] Vector DB export/import
- [ ] User authentication & cloud sync
- [ ] Batch processing for large datasets
- [ ] Advanced filtering and metadata search
- [ ] Analytics and usage statistics

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! This is a powerful tool for students, researchers, and developers working with document-based AI applications.

---

Built with ❤️ for the RAG community






