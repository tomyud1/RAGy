# RAGy Setup Guide

Complete guide to setting up and running RAGy for the first time.

## Prerequisites Check

Before starting, verify you have:

### Required

- ✅ Node.js 18 or higher
- ✅ Python 3.9 or higher
- ✅ npm or yarn package manager
- ✅ 4GB+ free disk space
- ✅ 8GB+ RAM

### Check Versions

```bash
node --version    # Should be v18.x.x or higher
python3 --version # Should be 3.9.x or higher
npm --version     # Should be 9.x.x or higher
```

## Step-by-Step Installation

### 1. Clone or Download Project

```bash
cd ~/projects
# If using git:
git clone <repository-url> RAGy
cd RAGy
```

### 2. Install All Dependencies

**Easy way** (recommended):

```bash
npm run setup
```

This single command will:
- Install all Node.js dependencies
- Install Python dependencies (Docling, transformers, torch)
- Verify installation

**Manual way** (if above fails):

```bash
# Install Node dependencies
npm install

# Install Python dependencies
cd server/python
pip3 install -r requirements.txt
cd ../..
```

### 3. Verify Installation

Test that everything is installed correctly:

```bash
# Test Node dependencies
node -e "console.log('Node OK')"

# Test Python dependencies
python3 -c "import docling; print('Docling OK')"
```

### 4. Create Data Directory

```bash
mkdir -p data/projects
```

### 5. Start the Application

**Option A: Start everything at once**

```bash
npm run dev:all
```

This starts both frontend (Vite) and backend (Express) servers.

**Option B: Start separately** (for debugging)

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

### 6. Open Application

Open your browser and navigate to:

```
http://localhost:5173
```

You should see the RAGy welcome screen!

## First Project

### Create Your First Project

1. Click **"Create New Project"**
2. Enter name: `Test Project`
3. Click **"Create"**

### Upload Test Document

1. Create a simple test file:

```bash
echo "This is a test document about artificial intelligence.
AI is transforming how we process information.
Machine learning enables computers to learn from data." > test.txt
```

2. Drag and drop `test.txt` into the upload area
3. Click **"Continue to Chunking"**

### Process Documents

1. Keep default **"Docling Hybrid"** method
2. Click **"Start Chunking"**
3. Wait for processing (should be quick for test file)

### Preview Chunks

1. Review the generated chunks
2. Click **"Approve & Continue"**

### Generate Embeddings

1. Select **"all-MiniLM-L6-v2"** (fastest)
2. Click **"Start Embedding"**
3. Watch the progress bar

### Test RAG System

1. Enter query: `"What is AI?"`
2. Click **"Search"**
3. Review results!

## Troubleshooting

### "Python not found"

```bash
# On macOS with Homebrew:
brew install python@3.11

# On Ubuntu/Debian:
sudo apt update
sudo apt install python3.11 python3-pip

# Verify:
which python3
```

### "Module not found: docling"

```bash
cd server/python
pip3 install --upgrade pip
pip3 install -r requirements.txt
```

### "Port 3001 already in use"

```bash
# Find and kill the process
lsof -ti:3001 | xargs kill -9

# Or change port in server/server.js:
const PORT = process.env.PORT || 3002;
```

### "Cannot connect to WebSocket"

1. Ensure backend is running: `npm run server`
2. Check backend logs for errors
3. Verify WebSocket URL in browser console

### "Chunking takes too long"

For large documents:
1. First time is slower (downloads Docling models)
2. Subsequent runs use cached models
3. Models stored in: `~/.cache/huggingface/`

### "Out of memory during embedding"

Reduce batch size in `server/services/embedding.service.js`:

```javascript
const batchSize = 16; // Reduce from 32 to 16
```

## Performance Tips

### Speed Up Embeddings

1. **Use smaller model**: all-MiniLM-L6-v2 (384D) is fastest
2. **GPU Acceleration**: Automatically used on M1/M2/M3 Macs
3. **Close other apps**: Free up RAM during processing

### Optimize Chunking

1. **Pre-chunk if possible**: Skip Docling for simple text files
2. **Adjust max_tokens**: Smaller chunks = faster processing
3. **Disable merge_peers**: Faster but less context preservation

### Disk Space

Monitor disk usage:

```bash
du -sh data/
```

Clean old projects:

```bash
rm -rf data/projects/<old-project-id>
```

## Development Mode

### Enable Hot Reload

Frontend automatically reloads. Backend needs restart on changes.

Use `nodemon` for backend auto-restart:

```bash
npm install -g nodemon
nodemon server/server.js
```

### Debug Mode

Enable verbose logging in `server/server.js`:

```javascript
const DEBUG = true;

if (DEBUG) {
  console.log('Debug info:', data);
}
```

### Test Python Script Directly

```bash
cd server/python
python3 docling_chunker.py \
  ../../data/projects/test/raw-files \
  ../../data/projects/test/chunked-data/test.json \
  512 \
  true
```

## Production Deployment

### Build Frontend

```bash
npm run build
```

This creates optimized static files in `dist/`.

### Serve Production Build

```bash
npm run preview
```

Or use with your backend:

```javascript
app.use(express.static('dist'));
```

### Environment Variables

Create `.env` file:

```bash
PORT=3001
NODE_ENV=production
DATA_DIR=./data
```

### Run with PM2

```bash
npm install -g pm2
pm2 start server/server.js --name ragy
pm2 logs ragy
```

## Next Steps

✅ Installation complete!

Now try:
1. Upload your own documents (PDFs, DOCX)
2. Test different embedding models
3. Compare chunking strategies
4. Query your data

For more details, see [README.md](./README.md)

---

Need help? Check the troubleshooting section or create an issue.

