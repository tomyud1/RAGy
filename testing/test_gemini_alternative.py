#!/usr/bin/env python3
"""
Test alternative way to configure Gemini with Docling
"""

import os
import logging
from pathlib import Path

logging.basicConfig(level=logging.INFO)

def test_with_custom_headers():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import (
        PdfPipelineOptions,
        PictureDescriptionApiOptions,
    )
    from docling_core.types.doc import PictureItem

    api_key = os.getenv('GEMINI_API_KEY', '')
    if not api_key:
        print("❌ GEMINI_API_KEY not set")
        return

    test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")

    print(f"\n🧪 Testing alternative Gemini configuration...")

    # Try configuration matching watsonx pattern
    pipeline_options = PdfPipelineOptions(
        enable_remote_services=True
    )
    pipeline_options.do_picture_description = True

    # Alternative configuration using OpenAI format
    picture_opts = PictureDescriptionApiOptions(
        url="https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        params={
            "model": "gemini-2.0-flash",
            "max_tokens": 300,
        },
        prompt="Describe this technical diagram or figure in detail.",
        timeout=120,
    )

    pipeline_options.picture_description_options = picture_opts
    pipeline_options.images_scale = 2.0
    pipeline_options.generate_picture_images = True

    print(f"   Configured with:")
    print(f"   - URL: {picture_opts.url}")
    print(f"   - Model: gemini-2.0-flash")
    print(f"   - Timeout: 120s")

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pipeline_options,
            )
        }
    )

    print(f"\n📄 Converting PDF...")
    result = converter.convert(test_pdf)
    doc = result.document

    print(f"\n✅ Conversion done!")

    # Check results
    picture_count = 0
    described_count = 0

    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            picture_count += 1
            has_image = hasattr(element, 'image') and element.image is not None

            # Check for descriptions in metadata
            meta = element.meta if hasattr(element, 'meta') else None

            print(f"\n📷 Picture #{picture_count}:")
            print(f"   Has image data: {has_image}")
            print(f"   Meta: {meta}")

            if meta and meta:
                described_count += 1
                print(f"   ✅ Has metadata!")

    print(f"\n📊 Results:")
    print(f"   Pictures found: {picture_count}")
    print(f"   With descriptions: {described_count}")

    if described_count > 0:
        print("\n🎉 SUCCESS! Gemini API is working!")
    else:
        print("\n❌ Still no descriptions generated")
        print("   This suggests Docling may not be calling the API at all")

if __name__ == "__main__":
    test_with_custom_headers()
