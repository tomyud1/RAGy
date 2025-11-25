# PaddleOCR-VL Windows Test Package

**Fully self-contained** test package for PaddleOCR-VL on Windows with NVIDIA RTX 4070.

## Quick Start

1. **Copy this entire folder to your Windows PC**

2. **Optional - Configure cache drive:**
   - Default: Models saved to E: drive (saves space on C:)
   - To change: Open `test_paddleocr_vl.py` in Notepad, change line 10: `CACHE_DRIVE = "E:"`
   - Can use any drive: `"D:"`, `"F:"`, or `None` for C: drive

3. **Run the script:**
   - Double-click: `run.bat`
   - Or command: `python test_paddleocr_vl.py`

   **First run only:** Creates virtual environment (1-2 minutes)

4. **The script automatically:**
   - Creates isolated Python environment in `venv/` folder (all packages installed here)
   - Shows real-time output on screen AND saves to `console_log.txt`
   - Auto-detects your GPU (RTX 4070)
   - Downloads AI models (~2GB) to E: drive
   - Processes the test PDF
   - Saves results to `output/` folder

## What Makes This Self-Contained

**Everything is in this folder:**
```
paddleocr-vl-windows-test/
├── venv/                # Virtual environment (created on first run)
│   └── Lib/site-packages/  # All Python packages here (~1.5GB)
├── output/              # Results
├── console_log.txt      # Complete log
└── test_paddleocr_vl.py # Main script
```

**On E: drive (or configured drive):**
```
E:\PaddleOCR_Cache\
└── huggingface/         # AI models (~2GB)
```

**No system-wide installation!** Everything is isolated and portable.

## What It Does

The script automatically:
- Detects NVIDIA GPU (falls back to CPU if not found)
- Installs PaddlePaddle GPU version for CUDA 12.6
- Installs PaddleOCR with doc-parser
- Installs PyMuPDF for PDF handling
- Upgrades safetensors to 0.7.0
- Processes `test_document.pdf` (10 pages)
- Saves results to `output/` folder

## Hardware Requirements

**Recommended:**
- NVIDIA RTX 4070 (or any CUDA-compatible GPU)
- 16GB RAM
- Windows 10/11
- Python 3.8+

**Minimum (CPU only):**
- 16GB RAM
- Python 3.8+
- Expect 30-120 seconds per page

## Expected Performance

**With RTX 4070 GPU:**
- Initialization: ~30-60 seconds (first run downloads ~2GB models)
- Per page: 2-5 seconds
- Total (10 pages): ~1-2 minutes

**With CPU only:**
- Initialization: ~30-60 seconds
- Per page: 30-120 seconds
- Total (10 pages): 10-20 minutes

## Output Files

After completion, you'll find:

```
paddleocr-vl-windows-test/
├── console_log.txt          # Complete log of everything
├── output/
│   ├── document.md          # Combined markdown from all pages
│   ├── summary.json         # Processing statistics
│   ├── page_1/
│   │   ├── result.md        # Page 1 markdown
│   │   └── result.json      # Page 1 JSON
│   ├── page_2/
│   │   └── ...
│   └── ...
```

## First Run

The first run will:
1. Download ~2GB of AI models (one-time)
2. Install Python packages
3. Take longer due to downloads

Subsequent runs will be much faster.

## Storage Breakdown

**In script folder (stays with the project):**
- `venv/` folder: ~1.5GB (all Python packages)
- `output/` folder: varies (your results)
- Total in script folder: ~1.5-2GB

**On E: drive (or configured drive):**
- `E:\PaddleOCR_Cache\huggingface\`: ~2GB (AI models)

**Total disk usage: ~3.5-4GB**

**To change model cache drive:**
1. Open `test_paddleocr_vl.py` in Notepad
2. Line 10: Change `CACHE_DRIVE = "E:"` to `"D:"` or any drive
3. Set to `None` to use default C: drive locations

**To start fresh:**
- Delete `venv/` folder (Python packages)
- Delete `E:\PaddleOCR_Cache\` folder (AI models)
- Next run will reinstall everything

## Troubleshooting

### Script exits immediately with empty log
1. **First**, run `test_python.bat` to verify Python is installed
2. If Python is not found:
   - Install Python 3.8+: https://www.python.org/downloads/
   - During installation, check "Add Python to PATH"
   - Restart Command Prompt after installation
3. If Python is found but script still fails:
   - Check if `test_document.pdf` exists in the same folder
   - Try running directly: `python test_paddleocr_vl.py`
   - Check the error messages that appear

### No output folder created
- The `output/` folder is created in the same directory as the script
- If it doesn't exist, the script didn't run successfully
- Check `console_log.txt` for error messages
- Run `test_python.bat` to diagnose the issue

### GPU not detected
- Install NVIDIA drivers: https://www.nvidia.com/download/index.aspx
- Install CUDA Toolkit 12.6: https://developer.nvidia.com/cuda-downloads
- Restart Windows after installation

### Python not found
- Install Python 3.8+: https://www.python.org/downloads/
- During installation, check "Add Python to PATH"
- Restart Command Prompt after installation

### Out of memory
- Close other applications
- Script will automatically fall back to CPU if GPU runs out of memory

### Slow performance on CPU
- This is normal - CPU processing takes 30-120 seconds per page
- For faster processing, ensure GPU is detected

### Drive not found or permission errors
- If E: drive doesn't exist on your PC, change `CACHE_DRIVE` in the script
- Open `test_paddleocr_vl.py`, change line 10: `CACHE_DRIVE = "E:"` to `"C:"` or `"D:"`
- Or set to `None` to use default Windows locations
- Make sure you have write permissions to the drive

## Input File

Replace `test_document.pdf` with your own PDF to test different documents.
The script will process all pages in the PDF.

## Technical Details

**Models Used:**
- PaddleOCR-VL (0.9B vision-language model)
- Document orientation classifier
- Document unwarping
- Layout detection
- Chart recognition

**GPU Acceleration:**
- Uses CUDA 12.6
- FP16 precision for faster inference
- Automatic memory management

**Output Format:**
- Markdown (readable text)
- JSON (structured data with layout info)
- Preserves document structure, tables, formulas

## Support

For issues or questions, see:
- PaddleOCR docs: https://github.com/PaddlePaddle/PaddleOCR
- CUDA installation: https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/
