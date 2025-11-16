#!/usr/bin/env python3
"""
Debug test to see why Gemini API isn't being called during Docling conversion
"""

import os
import logging
from pathlib import Path

# Enable debug logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

def test_with_debug():
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

    print(f"\n🔍 Testing with DEBUG logging enabled...")
    print(f"   PDF: {test_pdf}")
    print(f"   API Key present: {'Yes' if api_key else 'No'}")

    # Configure pipeline
    pipeline_options = PdfPipelineOptions(
        enable_remote_services=True
    )
    pipeline_options.do_picture_description = True

    # Gemini API configuration
    picture_opts = PictureDescriptionApiOptions(
        url="https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        headers={"Authorization": f"Bearer {api_key}"},
        params=dict(
            model="gemini-2.0-flash",
            max_completion_tokens=300,
        ),
        prompt="Describe this image briefly.",
        timeout=90,
    )

    pipeline_options.picture_description_options = picture_opts

    # Enable image generation
    pipeline_options.images_scale = 2.0
    pipeline_options.generate_picture_images = True

    print(f"\n⚙️  Pipeline Options:")
    print(f"   enable_remote_services: {pipeline_options.enable_remote_services}")
    print(f"   do_picture_description: {pipeline_options.do_picture_description}")
    print(f"   generate_picture_images: {pipeline_options.generate_picture_images}")
    print(f"   API URL: {picture_opts.url}")
    print(f"   Model: {picture_opts.params['model']}")

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pipeline_options,
            )
        }
    )

    print(f"\n📄 Starting conversion...")
    result = converter.convert(test_pdf)
    doc = result.document

    print(f"\n✅ Conversion complete!")

    # Check pictures and images
    picture_count = 0
    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            picture_count += 1
            print(f"\n📷 Picture #{picture_count}:")
            print(f"   Reference: {element.self_ref}")

            # Check if image data exists
            if hasattr(element, 'image'):
                print(f"   Has image data: {element.image is not None}")
                if element.image:
                    print(f"   Image type: {type(element.image)}")

            # Check provenance
            if hasattr(element, 'prov'):
                print(f"   Prov data: {element.prov}")

            # Check for description in various places
            if hasattr(element, 'description'):
                print(f"   Description attr: {element.description}")

            if hasattr(element, 'text'):
                print(f"   Text: {element.text}")

            # Check metadata
            meta_attrs = ['meta', 'annotations', 'data']
            for attr in meta_attrs:
                if hasattr(element, attr):
                    val = getattr(element, attr)
                    if val:
                        print(f"   {attr}: {val}")

    print(f"\n📊 Total pictures found: {picture_count}")

    # Also check if result has image data
    print(f"\n🖼️  Checking result.document.pictures...")
    if hasattr(doc, 'pictures'):
        print(f"   Pictures in doc: {len(doc.pictures)}")
        for idx, pic in enumerate(doc.pictures[:2]):
            print(f"   Picture {idx}: {pic}")

if __name__ == "__main__":
    test_with_debug()
