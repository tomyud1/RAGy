# Testing Directory

This directory contains all testing scripts, outputs, and documentation for the RAGy project.

## Directory Structure

### `/mcp` - MCP Integration Tests
Tests for Model Context Protocol integration:
- `test-mcp-basic.js` - Basic MCP functionality tests
- `test-mcp-integration.js` - Full MCP integration tests

### `/paddleocr` - PaddleOCR Tests
Tests for PaddleOCR document processing:
- `test-paddleocr.py` - Basic PaddleOCR functionality
- `test-paddleocr-simple.py` - Simplified PaddleOCR tests
- `test-paddleocr-optimized.py` - Optimized PaddleOCR with memory management

### `/gemini` - Gemini AI Tests
Tests and utilities for Google Gemini integration:
- `test_gemini_api_fix.py` - Gemini API integration tests
- `check_gemini_models.py` - List and verify available Gemini models
- `run_gemini_test.js` - Node.js Gemini test runner
- `get_gemini_key.js` - Gemini API key retrieval utility
- `test_gemini_integration.py` - Gemini integration tests
- `test_gemini_response_format.py` - Response format validation
- `test_gemini_docling_vision.py` - Gemini vision model with Docling
- `test_direct_gemini_image.py` - Direct image processing tests
- `test_gemini_alternative.py` - Alternative Gemini implementations
- `test_gemini_debug.py` - Debugging utilities
- `test_gemini_full_output.py` - Full output tests
- `test_gemini_latest.py` - Latest Gemini model tests
- `test_gemini_latest_debug.py` - Debug for latest models
- `test_rate_limit_sequential.py` - Rate limiting tests
- `test_new_gemini_implementation.py` - New implementation tests
- `compare_vision_models.py` - Compare different vision models

### `/docling` - Docling Document Processing Tests
Tests for Docling document processing and figure extraction:
- `test_docling_pictures.py` - Picture extraction from documents
- `test_figure_extraction.py` - Figure extraction functionality
- `test_caption_matching.py` - Caption matching algorithms
- `test_caption_matching_v2.py` - Improved caption matching
- `test_caption_exact_match.py` - Exact match caption tests
- `test_end_to_end_figures.py` - End-to-end figure processing
- `test_markdown_structure.py` - Markdown structure validation

### `/performance` - Performance Tests
Performance benchmarking and optimization tests:
- `test-performance.js` - JavaScript performance tests
- `test_chunks_tracking.py` - Chunk processing performance

### `/scripts` - Testing Utilities
Utility scripts for PDF processing, image extraction, and vision models:
- `extract_images_pymupdf.py` - Extract images from PDFs using PyMuPDF
- `extract_images_from_pdf.py` - Extract images using Docling
- `test_smolvlm_direct.py` - Test SmolVLM vision model on images
- `test_smoldocling.py` - Alternative SmolVLM test script
- `diagnose_pdf_structure.py` - Debug Docling PDF parsing
- `inspect_picture_object.py` - Inspect Docling picture objects
- `test_vision_setup.py` - Verify vision model configuration

### `/utils` - Utility Scripts
General utility scripts:
- `verify_image_descriptions.sh` - Verify image description quality
- `run_vision_comparison.sh` - Run vision model comparison

### `/outputs` - Test Output Files
Test outputs, extracted images, and results:
- `extracted_images_test/` - Sample images extracted from PDFs
- `docling_full_export/` - Full Docling document exports
- `paddleocr/` - PaddleOCR test outputs
- `smolvlm_test_results.md` - Vision model test results

### `/docs` - Testing Documentation
Research and documentation:
- `CLOUD_IMAGE_DESCRIPTION_RESEARCH.md` - Cloud AI provider research
- `VISION_MODELS_COMPARISON.md` - Model comparison guide
- `IMPLEMENTATION_GUIDE_CLOUD_VISION.md` - Integration guide
- `README_VISION_RESEARCH.md` - Executive summary
- `QUICK_START_VISION.md` - Quick start guide
- `INDEX_VISION_RESEARCH.md` - Navigation hub

## Quick Start

### Run MCP Tests
```bash
node testing/mcp/test-mcp-basic.js
node testing/mcp/test-mcp-integration.js
```

### Run PaddleOCR Tests
```bash
python3 testing/paddleocr/test-paddleocr-simple.py
```

### Run Gemini Tests
```bash
python3 testing/gemini/test_gemini_integration.py
```

### Run Docling Tests
```bash
python3 testing/docling/test_figure_extraction.py
```

### Extract Images from PDF
```bash
python3 testing/scripts/extract_images_pymupdf.py input.pdf --output-dir testing/outputs/images --max-pages 50
```

### Test Vision Models
```bash
python3 testing/scripts/test_smolvlm_direct.py testing/outputs/images --output testing/outputs/results.md
```

## Running All Tests

For comprehensive testing across all components, run tests from each category in sequence.

## Adding New Tests

When adding new tests, please:
1. Place them in the appropriate category directory
2. Use descriptive filenames starting with `test_`
3. Include a brief comment at the top of the file explaining what it tests
4. Update this README if adding a new test category
