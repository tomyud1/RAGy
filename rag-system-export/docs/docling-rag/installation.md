# Installation - Docling

## Overview

To get started with Docling, install the package via pip:

```bash
pip install docling
```

The package supports macOS, Linux, and Windows on both x86_64 and arm64 architectures.

## PyTorch Installation Considerations

Docling depends on PyTorch. Different systems may require specific PyTorch distributions. Visit [PyTorch's website](https://pytorch.org/) for installation options.

### CPU-only Linux Installation

For Linux systems without GPU support:

```bash
pip install docling --extra-index-url https://download.pytorch.org/whl/cpu
```

### macOS Intel (x86_64) Setup

Newer PyTorch versions (2.6.0+) don't provide wheels for Intel Macs. Use PyTorch 2.2.2 with Python 3.12 or lower:

**For uv:**
```bash
uv add torch==2.2.2 torchvision==0.17.2 docling
```

**For pip:**
```bash
pip install "docling[mac_intel]"
```

## Available Extras

Optional features require additional packages. Install with:

```bash
pip install "docling[NAME1,NAME2]"
```

| Extra | Purpose |
|-------|---------|
| `asr` | ASR pipeline dependencies |
| `vlm` | VLM pipeline dependencies |
| `easyocr` | EasyOCR engine |
| `tesserocr` | Tesseract OCR binding |
| `ocrmac` | OcrMac engine |
| `rapidocr` | RapidOCR with onnxruntime |

## OCR Engines

Supported engines include:
- EasyOCR
- Tesseract
- Tesseract CLI
- OcrMac
- RapidOCR
- OnnxTR (via plugin system)

### Tesseract Installation

**macOS (Homebrew):**
```bash
brew install tesseract leptonica pkg-config
TESSDATA_PREFIX=/opt/homebrew/share/tessdata/
```

**Debian-based:**
```bash
apt-get install tesseract-ocr tesseract-ocr-eng libtesseract-dev libleptonica-dev pkg-config
```

**RHEL:**
```bash
dnf install tesseract tesseract-devel tesseract-langpack-eng tesseract-osd leptonica-devel
TESSDATA_PREFIX=/usr/share/tesseract/tessdata/
```

## Development Setup

To contribute to Docling:

```bash
uv sync --all-extras
```
