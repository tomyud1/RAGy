# Docling FAQ

## Python Version Support

**Is Python 3.14 supported?**
Python 3.14 is supported beginning with Docling version 2.59.0.

**Is Python 3.13 supported?**
Python 3.13 is supported from Docling 2.18.0 onward.

**Install conflicts with numpy (Python 3.13)**
When using `docling-ibm-models>=2.0.7` and `deepsearch-glm>=0.26.2`, numpy compatibility issues should be resolved. Docling supports numpy versions `>=1.24.4,<3.0.0`.

For older versions experiencing Poetry resolution errors, consider:
- Restricting Python versions: `python = ">=3.10,<3.13"`
- Using version selectors for numpy based on Python version

## Platform Support

**Is macOS x86_64 supported?**
Yes, though dependency compatibility requires attention. Since PyTorch dropped macOS x86_64 support after version 2.2.2, install with: `pip install docling "numpy<2.0.0"`

## Dependency Issues

**ImportError: libGL.so.1**
This occurs from conflicting OpenCV distributions. Solutions include:
- Install headless OpenCV: `pip install --no-cache-dir opencv-python-headless`
- Install system dependencies: `apt-get install libgl1` (Debian) or `dnf install mesa-libGL` (RHEL)

## Features & Capabilities

**Text style support (bold, underline, etc.)**
Text styles are supported in DoclingDocument format. Currently only declarative backends (docx, pptx, markdown, html) properly handle text styles; PDF support is not yet available.

**Offline operation**
Docling runs completely offline without remote services. Point the runtime to local model artifacts via `artifacts_path` in pipeline options.

**Model weights requirement**
AI model weights are required only for PDF processing, sourced from Hugging Face. Other formats (docx, pptx) have no such requirement. Some OCR engines also require model artifacts.

## Technical Troubleshooting

**SSL errors downloading models**
Update certifi or set certificate paths:
```
CERT_PATH=$(python -m certifi)
export SSL_CERT_FILE=${CERT_PATH}
export REQUESTS_CA_BUNDLE=${CERT_PATH}
```

**OCR language support**
Docling supports multiple OCR engines (EasyOCR, Tesseract, RapidOCR, Mac OCR), each with different language capabilities. Configure via `pipeline_options.ocr_options.lang`.

**Missing images in Word/PowerPoint**
WMF image processing is Windows-only. These images are ignored on other operating systems.

**HybridChunker token length warning**
The warning about token sequence length exceeding model limits is typically a false alarm during tokenization counting, not actual model processing.

**Flash Attention usage**
Enable Flash Attention2 on CUDA devices via environment variable:
```
DOCLING_CUDA_USE_FLASH_ATTENTION2=1
```
Or programmatically with `AcceleratorOptions(cuda_use_flash_attention2=True)`. Requires the `flash-attn` package.
