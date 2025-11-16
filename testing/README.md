# Testing Directory

This directory contains all testing scripts, outputs, and documentation.

## Structure

### `/scripts`
Testing scripts for PDF processing, image extraction, and vision models:
- `extract_images_pymupdf.py` - Extract images from PDFs using PyMuPDF
- `extract_images_from_pdf.py` - Extract images using Docling
- `test_smolvlm_direct.py` - Test SmolVLM vision model on images
- `test_smoldocling.py` - Alternative SmolVLM test script
- `diagnose_pdf_structure.py` - Debug Docling PDF parsing
- `inspect_picture_object.py` - Inspect Docling picture objects
- `test_vision_setup.py` - Verify vision model configuration

### `/outputs`
Test outputs, extracted images, and results:
- `extracted_images_test/` - Sample images extracted from PDFs
- `docling_full_export/` - Full Docling document exports
- `smolvlm_test_results.md` - Vision model test results

### `/docs`
Research and documentation:
- `CLOUD_IMAGE_DESCRIPTION_RESEARCH.md` - Cloud AI provider research
- `VISION_MODELS_COMPARISON.md` - Model comparison guide
- `IMPLEMENTATION_GUIDE_CLOUD_VISION.md` - Integration guide
- `README_VISION_RESEARCH.md` - Executive summary
- `QUICK_START_VISION.md` - Quick start guide
- `INDEX_VISION_RESEARCH.md` - Navigation hub

## Quick Start

Extract images from a PDF:
```bash
python3 testing/scripts/extract_images_pymupdf.py input.pdf --output-dir testing/outputs/images --max-pages 50
```

Test vision model on images:
```bash
python3 testing/scripts/test_smolvlm_direct.py testing/outputs/images --output testing/outputs/results.md
```
