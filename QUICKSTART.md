# RAGy Quick Start

Get up and running in 5 minutes!

## One-Line Install

```bash
npm run setup && npm run dev:all
```

Then open: http://localhost:5173

## What Just Happened?

1. ✅ Installed Node.js dependencies (React, Express, transformers)
2. ✅ Installed Python dependencies (Docling)
3. ✅ Started frontend dev server (port 5173)
4. ✅ Started backend API server (port 3001)

## Your First RAG Project (2 minutes)

### 1. Create Project (10 seconds)
- Click "Create New Project"
- Name it anything (e.g., "My First RAG")

### 2. Upload Document (20 seconds)
- Drag and drop any PDF, DOCX, or TXT file
- Or create a test file:
  ```bash
  echo "RAG systems are powerful tools for AI applications" > test.txt
  ```
- Upload `test.txt`
- Click "Continue to Chunking"

### 3. Chunk Document (30 seconds)
- Keep default "Docling Hybrid" method
- Click "Start Chunking"
- Wait for processing
- Click "Approve & Continue"

### 4. Generate Embeddings (60 seconds)
- Select "all-MiniLM-L6-v2" (fastest)
- Click "Start Embedding"
- Watch the progress bar (uses your GPU!)
- Automatically continues when done

### 5. Test RAG System (10 seconds)
- Enter query: "What are RAG systems?"
- Click "Search"
- See results with similarity scores!

## Next Steps

### Try Different Models
1. Go back to "Embedding Model" step
2. Choose "BGE-Base-v1.5" (higher quality)
3. Generate new vector DB
4. Compare results in testing phase

### Upload More Documents
- PDFs (research papers, textbooks)
- DOCX (essays, reports)
- XLSX (data tables)
- PPTX (presentations)

### Advanced Features
- **Random Sampling**: Test chunk quality randomly
- **Multiple Vector DBs**: Compare embedding models
- **Pre-chunked Upload**: Skip chunking for simple text

## Common Issues

### "Port already in use"
```bash
lsof -ti:3001 | xargs kill -9
npm run server
```

### "Python command not found"
```bash
# macOS
brew install python@3.11

# Linux
sudo apt install python3.11
```

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

## Architecture Overview

```
Your Files → Upload → Docling Chunking → Preview → 
Embedding (GPU) → Vector DB → RAG Query → Results!
```

## What Can You Build?

### Student Study Assistant
- Upload textbooks, notes, homework
- Ask questions, get relevant context
- Study more efficiently

### Developer Documentation Search
- Upload API docs, tutorials, examples
- Search across all documentation
- Find code snippets instantly

### Research Paper Analyzer
- Upload multiple papers (PDFs)
- Find related concepts
- Cross-reference citations

### Business Knowledge Base
- Upload company documents
- Team can query information
- Reduce time searching for info

## Pro Tips

💡 **Start small**: Test with 1-2 documents first  
💡 **Use MiniLM**: Fastest for experimentation  
💡 **Check chunks**: Always preview before embedding  
💡 **Compare models**: Create multiple vector DBs  
💡 **GPU matters**: M1/M2/M3 Macs are fastest  

## File Size Limits

- **Single file**: 100MB (configurable)
- **Total project**: Unlimited
- **Chunk size**: 512 tokens (default)
- **Vector DB**: Depends on RAM (typically 100K+ chunks)

## Performance Expectations

For a typical 100-page textbook PDF:

- **Upload**: < 1 second
- **Chunking**: 30-60 seconds (first time slower)
- **Embedding**: 2-5 minutes (depends on GPU)
- **Query**: < 500ms

## Keyboard Shortcuts

- `Enter` in search box → Query
- `Enter` in project name → Create project
- `Esc` → Close modals

## What's Next? (Phase 2 Coming Soon)

- 🤖 **AI Chat Integration** - Talk to your documents with GPT-4/Claude
- 📊 **Analytics** - Track usage and performance
- ☁️ **Cloud Sync** - Sync projects across devices
- 🔍 **Advanced Search** - Filters, metadata, date ranges
- 📦 **Export/Import** - Share vector databases
- 🎨 **Custom Themes** - Personalize the UI

## Get Help

- Check `README.md` for full documentation
- See `SETUP_GUIDE.md` for detailed setup
- Review code comments for implementation details

---

**Ready to go?** Create your first project and start querying! 🚀

