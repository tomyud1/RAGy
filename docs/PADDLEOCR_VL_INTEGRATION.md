# PaddleOCR-VL Integration for RAGy

## Overview

PaddleOCR-VL is a 0.9B vision-language model for document parsing that has been integrated into RAGy as an alternative chunking method alongside Docling. It excels at extracting page images and handling documents on Windows systems with NVIDIA GPUs.

## Key Features

- **Page-based chunking**: 1 chunk = 1 page (vs Docling's semantic chunking)
- **Image extraction**: Automatically extracts page images for source referencing
- **GPU acceleration**: 5-10x speedup on NVIDIA GPUs
- **Batch processing**: Processes pages in batches to manage RAM
- **Hardware detection**: Auto-detects and optimizes for available hardware

## When to Use PaddleOCR-VL

**Use PaddleOCR-VL when:**
- You have a Windows PC with NVIDIA GPU (RTX series recommended)
- You want page images as sources in RAG retrieval
- You prefer full-page retrieval instead of semantic chunks
- Docling struggles with certain PDFs

**Use Docling when:**
- You're on a Mac (Apple Silicon has GPU support in Docling)
- You want semantic chunking for better context
- You need to process many file types (DOCX, XLSX, PPTX, HTML, etc.)
- You want faster processing on CPU-only systems

## Hardware Requirements

### Supported Hardware

| Hardware | Support | Speed | Notes |
|----------|---------|-------|-------|
| NVIDIA GPU (CUDA) | ✅ Full | Fast (5-10x speedup) | **Recommended**. RTX 2000 series or newer |
| CPU (Windows/Linux) | ✅ Full | Slow (~30s/page) | Works but not recommended for large docs |
| Apple Silicon (M1/M2/M3) | ❌ No GPU support | Very slow (CPU-only) | **Not recommended**. Use Docling instead |
| AMD GPU (ROCm) | ❌ Limited | Slow | Limited support, falls back to CPU |

### RAM Requirements

- **Minimum**: 8GB RAM
- **Recommended**: 16GB+ RAM
- **Note**: Batch processing prevents RAM overflow

## Installation

### Prerequisites

```bash
# Python 3.9+ required
python3 --version

# Check if pip is installed
pip3 --version
```

### Install PaddlePaddle

**For Windows/Linux with NVIDIA GPU (CUDA 11.8+):**
```bash
pip3 install paddlepaddle-gpu
```

**For CPU-only systems:**
```bash
pip3 install paddlepaddle
```

**Verify installation:**
```bash
python3 -c "import paddle; print(paddle.__version__)"
python3 -c "import paddle; print('CUDA available:', paddle.device.is_compiled_with_cuda())"
```

### Install PaddleOCR-VL

```bash
pip3 install paddleocr
pip3 install pymupdf  # For PDF processing
```

### Test Installation

```bash
cd /path/to/RAGy/paddleocr-vl-windows-test
python3 -c "from paddleocr import PaddleOCRVL; print('PaddleOCR-VL installed successfully')"
```

## Usage in RAGy

### 1. Upload Your Documents

- Go to **RAG System → Create Project**
- Upload PDF files or images (JPG, PNG, etc.)
- **Note**: PaddleOCR-VL **only** supports PDFs and images

### 2. Select Chunking Method

- In the "Choose Chunking Method" step, select **PaddleOCR-VL**
- The UI will show hardware compatibility warnings if applicable

### 3. Configure Options

**Batch Size** (default: 5 pages)
- Number of pages to process before clearing GPU memory
- Lower = less RAM usage, slightly slower
- Higher = more RAM usage, slightly faster
- **Recommended**: 5-10 pages

### 4. Start Processing

- Click "Start Chunking"
- Monitor hardware detection in the progress display
- Page images will be saved to `conversions/paddleocr/{document}/pages/`

### 5. Use in RAG Retrieval

When chunks are retrieved:
- Each chunk represents one full page
- `metadata.page_image` contains the path to the page image
- The AI chat can reference and display page images as sources

## File Type Compatibility

| File Type | Supported | Notes |
|-----------|-----------|-------|
| PDF | ✅ Yes | Primary use case |
| JPG/JPEG | ✅ Yes | Single image = 1 page |
| PNG | ✅ Yes | Single image = 1 page |
| GIF | ✅ Yes | Single image = 1 page |
| BMP | ✅ Yes | Single image = 1 page |
| TIFF/TIF | ✅ Yes | Single image = 1 page |
| DOCX | ❌ No | Use Docling instead |
| XLSX | ❌ No | Use Docling instead |
| PPTX | ❌ No | Use Docling instead |
| HTML | ❌ No | Use Docling instead |
| TXT | ❌ No | Use Docling instead |

**If you upload incompatible files**, the system will:
1. Display a warning listing incompatible files
2. Process only the compatible files
3. Skip incompatible files

## Output Structure

```
conversions/
├── docling/                      # Docling outputs (if using Docling)
│   └── {document_name}/
│       ├── full_document.md
│       ├── chunks.json
│       └── images/
│
└── paddleocr/                    # PaddleOCR-VL outputs
    └── {document_name}/
        ├── pages/                # ⭐ Page images (for RAG retrieval)
        │   ├── page_1.png
        │   ├── page_2.png
        │   └── ...
        ├── page_1/               # Detailed results per page
        │   ├── result.md         # Page markdown
        │   ├── page_1_res.json   # Detection results
        │   └── imgs/             # Extracted images from page
        │       └── img_*.jpg
        ├── page_2/
        │   └── ...
        ├── chunks.json           # Page-based chunks for vector DB
        └── document.md           # Combined markdown from all pages
```

**See:** [Conversion Folder Structure](./CONVERSION_FOLDER_STRUCTURE.md) for detailed documentation on how outputs are organized.

## Chunk Structure

Each chunk from PaddleOCR-VL contains:

```json
{
  "text": "Page content extracted by PaddleOCR-VL...",
  "metadata": {
    "source": "document.pdf",
    "page": 1,
    "total_pages": 100,
    "processor": "paddleocr-vl",
    "page_image": "paddleocr/document/pages/page_1.png",
    "extracted_images": [
      {
        "path": "paddleocr/document/page_1/imgs/img_1.jpg",
        "bbox": [100, 200, 300, 400]
      }
    ]
  },
  "tokens": 523
}
```

## Performance Benchmarks

### RTX 4070 (Windows):
- **Speed**: ~27-30s per page (consistent across all pages)
- **RAM**: Stable at 6-8GB with batch processing
- **Quality**: Good, handles equations and diagrams well

### M3 MacBook Pro (CPU-only):
- **Speed**: ~10+ minutes per page ❌
- **RAM**: Stable but very slow
- **Recommendation**: **Use Docling instead!**

### CPU-only (Windows/Linux):
- **Speed**: ~30-60s per page (depends on CPU)
- **RAM**: Manageable with batch processing
- **Use case**: Small documents only

## Troubleshooting

### "PaddlePaddle not installed"

```bash
# Install PaddlePaddle
pip3 install paddlepaddle-gpu  # For GPU
# OR
pip3 install paddlepaddle      # For CPU
```

### "CUDA not detected" (on Windows with NVIDIA GPU)

1. Install CUDA Toolkit 11.8 or 12.x from NVIDIA
2. Reinstall PaddlePaddle GPU version:
```bash
pip3 uninstall paddlepaddle paddlepaddle-gpu
pip3 install paddlepaddle-gpu
```
3. Verify:
```bash
python3 -c "import paddle; print(paddle.device.is_compiled_with_cuda())"
```

### "Process very slow on Mac"

This is expected! PaddleOCR-VL doesn't support Apple Silicon GPU.
- **Solution**: Use Docling instead (has Apple Metal support)

### "RAM usage increasing"

Check batch size setting:
- Reduce batch size to 3-5 pages
- Close other applications
- Monitor in Task Manager/Activity Monitor

### "Incompatible file warning"

PaddleOCR-VL only supports PDFs and images.
- Remove non-PDF/image files from upload
- OR use Docling for those files

## Comparison: Docling vs PaddleOCR-VL

| Feature | Docling | PaddleOCR-VL |
|---------|---------|--------------|
| **Chunking** | Semantic (smart) | Page-based (1 page = 1 chunk) |
| **File types** | PDF, DOCX, XLSX, PPTX, Images, HTML, Text | PDF, Images only |
| **Mac GPU** | ✅ Apple Metal | ❌ CPU-only |
| **Windows GPU** | ✅ CUDA | ✅ CUDA (faster) |
| **Speed (GPU)** | Fast | Fast |
| **Speed (CPU)** | Moderate | Slow |
| **Page images** | Optional | Always extracted |
| **Image extraction** | Yes (with descriptions) | Yes (no descriptions) |
| **RAM usage** | Moderate | Moderate (with batching) |
| **Best for** | Most use cases, Macs | Windows+NVIDIA, page-based retrieval |

## Advanced Configuration

### Batch Size Tuning

Adjust based on your system:

```javascript
// In ChunkingMethodStep.jsx config
batchSize: 5  // Default

// For high RAM (32GB+):
batchSize: 10

// For low RAM (8GB):
batchSize: 3
```

### Custom Output Folder

```javascript
conversionOutputFolder: 'my_conversions/'
```

## Known Limitations

1. **No Apple Silicon GPU support**: Falls back to CPU (very slow)
2. **No AMD GPU support**: Limited ROCm support, uses CPU
3. **File types**: PDFs and images only (no DOCX, XLSX, etc.)
4. **No image descriptions**: Unlike Docling, doesn't generate AI descriptions for extracted images
5. **Page-based only**: Cannot do semantic chunking like Docling

## Future Improvements

Potential enhancements:
- [ ] Image description using PaddleOCR-VL's vision model
- [ ] AMD GPU support (when PaddlePaddle adds better ROCm support)
- [ ] Multi-column detection tuning
- [ ] Table extraction as markdown tables
- [ ] Chart data extraction

## Support

For issues or questions:
1. Check this documentation first
2. Verify installation: `python3 -c "from paddleocr import PaddleOCRVL; print('OK')"`
3. Check hardware: Windows/NVIDIA recommended, avoid Mac
4. Try Docling as alternative for better cross-platform support

## Related Documentation

- [Docling Integration Guide](./DOCLING_INTEGRATION.md) (if exists)
- [RAGy Chunking Overview](./CHUNKING.md) (if exists)
- [PaddleOCR Official Docs](https://github.com/PaddlePaddle/PaddleOCR)
- [PaddlePaddle Installation Guide](https://www.paddlepaddle.org.cn/en/install/quick)
