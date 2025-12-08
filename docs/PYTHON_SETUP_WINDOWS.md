# Python Setup for Windows Build

## Overview

The bundled Python environment (`build-resources/python-win/`) needs to have all required packages installed before building the Windows installer.

## ✅ Automatic Setup (Recommended)

**Just run the build script - it handles everything automatically!**

```batch
update-and-build.bat
```

The script automatically:
1. Checks if Python packages are installed (looks for `.setup-complete` marker)
2. If not found, runs the setup script automatically
3. Installs all required packages (one-time, 5-10 minutes)
4. Creates `.setup-complete` marker
5. Proceeds with the build

**First run:** Python setup runs automatically (takes 5-10 minutes)
**Subsequent runs:** Setup is skipped (builds immediately)

## Manual Setup (Optional)

If you want to run the setup manually or force a re-setup:

### Step 1: Install Python Packages

```powershell
cd build-resources\python-win
.\setup-python.ps1
```

This installs all requirements from `server/python/requirements.txt`:
- docling (document processing)
- transformers (ML models)
- torch (PyTorch)
- sentence-transformers (embeddings)
- **paddleocr** (OCR engine)
- **paddlepaddle** (PaddleOCR backend)
- **pymupdf** (PDF processing)

**Installation time:** 5-10 minutes (downloads ~500MB of dependencies)

### Step 2: Verify Installation

```powershell
.\python.exe -c "import paddleocr; print('PaddleOCR OK')"
```

Should output: `PaddleOCR OK`

## When to Re-run Setup

Re-run the setup when:
- You add new Python dependencies to `server/python/requirements.txt`
- You update Python package versions
- The bundled Python is corrupted or incomplete

### Force Re-setup

To force the setup to run again:

```batch
del build-resources\python-win\.setup-complete
update-and-build.bat
```

The script will detect the missing marker and run setup automatically.

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
