"""
Main entry point for vision processing
"""

import os
import sys
import json
from pathlib import Path
from typing import List, Dict, Tuple

from .backends import detect_vision_backend
from .extractors import extract_images_pymupdf, extract_figures_from_docling
from .smolvlm import describe_images_transformers, describe_images_mlx
from .gemini import describe_images_gemini_native, validate_gemini_api_key_native


def process_document_with_images(
    pdf_path: str,
    conversion_output_folder: str,
    doc=None,
    enable_description: bool = False,
    max_tokens: int = 800,
    vision_backend: str = 'auto',
    vision_model: str = 'smolvlm'
) -> Tuple[List[Dict], Dict[str, str]]:
    """
    Extract and optionally describe images and figures from a PDF

    Args:
        pdf_path: Path to PDF file
        conversion_output_folder: Base folder for conversions
        doc: Docling document object (optional, for extracting figures from metadata)
        enable_description: Whether to generate descriptions
        max_tokens: Maximum tokens per description
        vision_backend: 'auto', 'transformers', or 'mlx' (for SmolVLM)
        vision_model: 'smolvlm' or 'gemini-2.0-flash'

    Returns:
        (extracted_images, descriptions)
    """
    pdf_path = Path(pdf_path)
    doc_name = pdf_path.stem

    # Create output structure
    output_base = Path(conversion_output_folder) / doc_name
    images_dir = output_base / "images"
    images_dir.mkdir(parents=True, exist_ok=True)

    print(json.dumps({"info": f"Extracting images and figures from {pdf_path.name}..."}),
          file=sys.stderr, flush=True)

    extracted_images = []

    if doc is not None:
        extracted_images = extract_figures_from_docling(doc, str(pdf_path), images_dir)
        print(json.dumps({
            "info": f"✓ Extracted {len(extracted_images)} figures from docling metadata"
        }), file=sys.stderr, flush=True)
    else:
        print(json.dumps({
            "warning": "No docling document provided - falling back to PyMuPDF"
        }), file=sys.stderr, flush=True)
        extracted_images = extract_images_pymupdf(str(pdf_path), images_dir)
        print(json.dumps({"info": f"Extracted {len(extracted_images)} embedded images"}),
              file=sys.stderr, flush=True)

    descriptions = {}

    if enable_description and extracted_images:
        if vision_model == 'gemini-2.0-flash':
            api_key = os.getenv('GEMINI_API_KEY', '')

            if not api_key or api_key.strip() == '':
                error_msg = (
                    "❌ Gemini API key not found!\n\n"
                    "To use Gemini for image descriptions:\n"
                    "1. Get a free API key from: https://aistudio.google.com/app/apikey\n"
                    "2. Add it in Settings → AI Providers → Gemini API Key\n\n"
                    "Alternatively, switch to SmolVLM (runs locally, no API key needed)"
                )
                print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
                raise ValueError(error_msg)

            gemini_model_name = 'gemini-2.0-flash'
            print(json.dumps({"info": f"Using Gemini {gemini_model_name} for image descriptions..."}),
                  file=sys.stderr, flush=True)

            try:
                validate_gemini_api_key_native(api_key, model_name=gemini_model_name)
            except Exception as e:
                print(json.dumps({
                    "warning": f"API key validation skipped: {e}"
                }), file=sys.stderr, flush=True)

            descriptions = describe_images_gemini_native(
                extracted_images,
                api_key,
                max_tokens=max_tokens,
                model_name=gemini_model_name
            )
        else:
            backend = detect_vision_backend(vision_backend)
            print(json.dumps({"info": f"Using SmolVLM with backend: {backend}"}),
                  file=sys.stderr, flush=True)

            if backend == 'mlx':
                descriptions = describe_images_mlx(extracted_images, max_tokens)
            else:
                descriptions = describe_images_transformers(extracted_images, max_tokens)

    return extracted_images, descriptions

