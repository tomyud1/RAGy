"""
Vision Processing Module
Handles image extraction and AI-based description generation
"""

from .processor import process_document_with_images
from .description_injector import (
    insert_image_descriptions_in_markdown,
    inject_image_descriptions_into_chunks
)
from .backends import detect_vision_backend
from .extractors import extract_images_pymupdf, extract_figures_from_docling, render_pdf_region
from .smolvlm import describe_images_transformers, describe_images_mlx
from .gemini import describe_images_gemini_native, validate_gemini_api_key_native

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

