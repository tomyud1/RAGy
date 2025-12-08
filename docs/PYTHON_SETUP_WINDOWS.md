# Python Setup for Windows Build

## Overview

The bundled Python environment (`build-resources/python-win/`) needs to have all required packages installed before building the Windows installer.

## One-Time Setup (Windows Build Machine)

### Step 1: Install Python Packages

Navigate to the python-win folder and run the setup script:

```powershell
cd build-resources\python-win
.\setup-python.ps1
```

This script will:
1. Install pip
2. Install all requirements from `server/python/requirements.txt`:
   - docling (document processing)
   - transformers (ML models)
   - torch (PyTorch)
   - sentence-transformers (embeddings)
   - **paddleocr** (OCR engine)
   - **paddlepaddle** (PaddleOCR backend)
   - **pymupdf** (PDF processing)

**Installation time:** 5-10 minutes (downloads ~2GB of dependencies)

### Step 2: Verify Installation

Check that PaddleOCR was installed:

```powershell
.\python.exe -c "import paddleocr; print('PaddleOCR version:', paddleocr.__version__)"
```

Should output: `PaddleOCR version: 2.x.x`

### Step 3: Commit the Updated Python Bundle

After installing packages, the `python-win` folder will have grown significantly. **Do NOT commit this to the main RAGy repository.**

The `python-win` folder is:
- Tracked by Git LFS in the `RAGy-Windows-Build` repository
- Excluded from the main `RAGy` repository (too large)

The setup script creates a `.setup-complete` marker file to indicate setup is done.

## When to Re-run Setup

Re-run the setup script when:
- You add new Python dependencies to `server/python/requirements.txt`
- You update Python package versions
- The bundled Python is corrupted or incomplete

## Current Requirements

As of v0.1.0-dev.33:

```
docling>=1.0.0
transformers>=4.30.0
torch>=2.0.0
sentence-transformers>=2.2.0
paddleocr>=2.7.0
paddlepaddle>=2.6.0
pymupdf>=1.23.0
```

## Troubleshooting

### "No module named 'paddleocr'"

The bundled Python doesn't have PaddleOCR installed. Run the setup script.

### "Setup failed: pip install error"

Check your internet connection and retry. Some packages (torch, paddlepaddle) are very large.

### "Python path not found"

Make sure you're in the `build-resources/python-win/` directory when running the script.

## Build Process

After running setup once:

1. `update-and-build.bat` pulls latest code
2. `npm run electron:build:win` builds the installer
3. Electron Builder copies `build-resources/python-win/` to the installer as `resources/python/`
4. The packaged app uses the bundled Python with all dependencies

## File Locations

**Development:**
- Requirements: `server/python/requirements.txt`
- Setup script: `build-resources/python-win/setup-python.ps1`
- Bundled Python: `build-resources/python-win/`

**Packaged App:**
- Bundled Python: `E:\program files\RAGy\resources\python\`
- Python scripts: `E:\program files\RAGy\resources\app\server\python\`
