#!/usr/bin/env python3
"""
Full test with comprehensive output saved to folder
"""

import os
import json
from pathlib import Path
from datetime import datetime

def test_with_full_output():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import (
        PdfPipelineOptions,
        PictureDescriptionApiOptions,
    )
    from docling_core.types.doc import PictureItem

    # Create output directory
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = Path(f"/Users/tomeryud/projects/RAGy/testing/outputs/gemini_test_{timestamp}")
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"\n📁 Output directory: {output_dir}")

    # Create log file
    log_file = output_dir / "test_log.txt"

    def log(msg):
        print(msg)
        with open(log_file, 'a') as f:
            f.write(msg + '\n')

    api_key = os.getenv('GEMINI_API_KEY', '')
    if not api_key:
        log("❌ GEMINI_API_KEY not set")
        return

    test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")

    log("=" * 60)
    log("GEMINI + DOCLING TEST - FULL OUTPUT")
    log("=" * 60)
    log(f"Test PDF: {test_pdf.name}")
    log(f"Output folder: {output_dir}")
    log("")

    # Configure pipeline
    log("Configuring Docling pipeline...")
    pipeline_options = PdfPipelineOptions(
        enable_remote_services=True
    )
    pipeline_options.do_picture_description = True
    pipeline_options.picture_description_options = PictureDescriptionApiOptions(
        url="https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        headers={"Authorization": f"Bearer {api_key}"},
        params=dict(
            model="gemini-2.0-flash",
            max_completion_tokens=300,
        ),
        prompt="Describe this image in detail for a technical document. Focus on key elements, data, and context.",
        timeout=90,
    )
    pipeline_options.images_scale = 2.0
    pipeline_options.generate_picture_images = True

    log("Pipeline configuration:")
    log(f"  - enable_remote_services: {pipeline_options.enable_remote_services}")
    log(f"  - do_picture_description: {pipeline_options.do_picture_description}")
    log(f"  - generate_picture_images: {pipeline_options.generate_picture_images}")
    log(f"  - API URL: https://generativelanguage.googleapis.com/v1beta/openai/chat/completions")
    log(f"  - Model: gemini-2.0-flash")
    log("")

    # Convert
    log("Starting conversion...")
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pipeline_options,
            )
        }
    )

    result = converter.convert(test_pdf)
    doc = result.document

    log("✅ Conversion complete!")
    log(f"  Pages: {len(doc.pages) if hasattr(doc, 'pages') else 'N/A'}")
    log("")

    # Save markdown
    log("Saving markdown export...")
    markdown = doc.export_to_markdown()
    markdown_file = output_dir / "document.md"
    markdown_file.write_text(markdown)
    log(f"  ✅ Saved to: {markdown_file.name}")
    log("")

    # Save JSON
    log("Saving JSON export...")
    try:
        from docling.document_converter import DocumentConverter
        json_output = doc.export_to_dict()
        json_file = output_dir / "document.json"
        with open(json_file, 'w') as f:
            json.dump(json_output, f, indent=2, default=str)
        log(f"  ✅ Saved to: {json_file.name}")
    except Exception as e:
        log(f"  ⚠️  JSON export failed: {e}")
    log("")

    # Extract and save images
    log("Extracting images...")
    picture_count = 0
    image_info = []

    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            picture_count += 1

            info = {
                "picture_num": picture_count,
                "reference": str(element.self_ref),
                "has_image": hasattr(element, 'image') and element.image is not None,
                "caption": element.caption_text(doc=doc) if hasattr(element, 'caption_text') else None,
                "meta": str(element.meta) if hasattr(element, 'meta') and element.meta else None,
                "annotations": str(element.annotations) if hasattr(element, 'annotations') and element.annotations else None,
            }

            # Save image if available
            if hasattr(element, 'image') and element.image:
                try:
                    import base64
                    from io import BytesIO
                    from PIL import Image

                    # Extract base64 data
                    uri = str(element.image.uri)
                    if 'base64,' in uri:
                        b64_data = uri.split('base64,')[1]
                        img_data = base64.b64decode(b64_data)

                        # Save image
                        img_file = output_dir / f"picture_{picture_count}.png"
                        with open(img_file, 'wb') as f:
                            f.write(img_data)

                        info["image_file"] = img_file.name
                        info["image_size"] = f"{element.image.size.width}x{element.image.size.height}" if hasattr(element.image, 'size') else None

                        log(f"  Picture {picture_count}:")
                        log(f"    ✅ Saved image: {img_file.name}")
                        log(f"    Size: {info['image_size']}")
                        log(f"    Caption: {info['caption'] or '(none)'}")
                        log(f"    Meta: {info['meta'] or '(none)'}")
                        log(f"    Annotations: {info['annotations'] or '(none)'}")
                except Exception as e:
                    log(f"    ⚠️  Failed to save image: {e}")
                    info["error"] = str(e)

            image_info.append(info)

    log("")
    log(f"Total pictures found: {picture_count}")
    log("")

    # Save image info
    info_file = output_dir / "images_info.json"
    with open(info_file, 'w') as f:
        json.dump(image_info, f, indent=2)
    log(f"✅ Image info saved to: {info_file.name}")
    log("")

    # Summary
    log("=" * 60)
    log("SUMMARY")
    log("=" * 60)
    log(f"Output folder: {output_dir}")
    log(f"Files created:")
    for file in sorted(output_dir.iterdir()):
        size = file.stat().st_size
        log(f"  - {file.name} ({size:,} bytes)")
    log("")
    log(f"Pictures extracted: {picture_count}")
    described = sum(1 for info in image_info if info.get('meta') or info.get('annotations'))
    log(f"Pictures with descriptions: {described}")
    log("")

    if described == 0:
        log("⚠️  WARNING: No image descriptions were generated!")
        log("   Gemini API was not called by Docling")

    log("=" * 60)

    print(f"\n✅ All output saved to: {output_dir}")
    print(f"   Review the files in this folder")

if __name__ == "__main__":
    test_with_full_output()
