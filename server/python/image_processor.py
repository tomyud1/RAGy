#!/usr/bin/env python3
"""
Image Processing Module for Docling
This is a backward-compatible wrapper that imports from the modular vision package

For new code, prefer importing directly from the vision package:
    from vision import process_document_with_images
"""

# Re-export everything from the modular package for backward compatibility
from vision import (
    process_document_with_images,
    insert_image_descriptions_in_markdown,
    inject_image_descriptions_into_chunks,
    detect_vision_backend,
    extract_images_pymupdf,
    extract_figures_from_docling,
    render_pdf_region,
    describe_images_transformers,
    describe_images_mlx,
    describe_images_gemini_native,
    validate_gemini_api_key_native,
)

# Re-export all for star imports
__all__ = [
    'process_document_with_images',
    'insert_image_descriptions_in_markdown',
    'inject_image_descriptions_into_chunks',
    'detect_vision_backend',
    'extract_images_pymupdf',
    'extract_figures_from_docling',
    'render_pdf_region',
    'describe_images_transformers',
    'describe_images_mlx',
    'describe_images_gemini_native',
    'validate_gemini_api_key_native',
]
