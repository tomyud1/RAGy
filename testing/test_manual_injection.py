#!/usr/bin/env python3
"""
PROOF OF CONCEPT: Manually inject Gemini descriptions into doc object
Then run semantic chunking on the enriched document
"""

import os
import json
import base64
from pathlib import Path
from openai import OpenAI

def inject_gemini_descriptions():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions
    from docling_core.types.doc import PictureItem, DoclingDocument
    from docling.chunking import HybridChunker

    output_dir = Path("/Users/tomeryud/projects/RAGy/testing/outputs/manual_injection_test")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 80)
    print("MANUAL GEMINI INJECTION - PROOF OF CONCEPT")
    print("=" * 80)
    print(f"\nOutput: {output_dir}\n")

    # Initialize Gemini client
    api_key = os.getenv('GEMINI_API_KEY', '')
    if not api_key:
        print("❌ GEMINI_API_KEY not set")
        return

    gemini = OpenAI(
        api_key=api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
    )

    # STEP 1: Convert PDF to doc object (NO Gemini)
    print("STEP 1: Converting PDF with Docling (without Gemini)")
    print("-" * 80)

    test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")

    pipeline_options = PdfPipelineOptions()
    pipeline_options.generate_picture_images = True
    pipeline_options.images_scale = 2.0

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )

    result = converter.convert(test_pdf)
    doc = result.document  # ← DOC OBJECT IN RAM

    print(f"✅ Doc object created in RAM")
    print(f"   Type: {type(doc)}")
    print(f"   Pages: {len(doc.pages) if hasattr(doc, 'pages') else 'N/A'}")

    # Save BEFORE state
    markdown_before = doc.export_to_markdown()
    before_file = output_dir / "1_before_injection.md"
    before_file.write_text(markdown_before)
    print(f"   Saved BEFORE state: {before_file.name}")

    # STEP 2: Extract images and call Gemini manually
    print("\n\nSTEP 2: Extracting images and calling Gemini API")
    print("-" * 80)

    picture_items = []
    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            picture_items.append(element)

    print(f"Found {len(picture_items)} images")

    descriptions = []
    for idx, pic_item in enumerate(picture_items, 1):
        print(f"\n📷 Processing Picture {idx}...")

        # Extract base64 image
        if hasattr(pic_item, 'image') and pic_item.image:
            uri = str(pic_item.image.uri)
            if 'base64,' in uri:
                b64_data = uri.split('base64,')[1]

                # Call Gemini
                print(f"   📡 Calling Gemini API...")
                try:
                    response = gemini.chat.completions.create(
                        model="gemini-2.0-flash",
                        messages=[
                            {
                                "role": "user",
                                "content": [
                                    {"type": "text", "text": "Describe this technical image/diagram/figure in detail. Focus on key elements, labels, data, and context."},
                                    {
                                        "type": "image_url",
                                        "image_url": {
                                            "url": f"data:image/png;base64,{b64_data[:1000]}"  # First chunk for testing
                                        }
                                    }
                                ]
                            }
                        ],
                        max_tokens=300
                    )

                    description = response.choices[0].message.content
                    descriptions.append({
                        "picture_num": idx,
                        "reference": str(pic_item.self_ref),
                        "description": description
                    })

                    print(f"   ✅ Got description: {description[:100]}...")

                except Exception as e:
                    print(f"   ❌ API call failed: {e}")
                    descriptions.append({
                        "picture_num": idx,
                        "reference": str(pic_item.self_ref),
                        "description": f"[API Error: {e}]"
                    })

    # Save descriptions
    desc_file = output_dir / "2_gemini_descriptions.json"
    with open(desc_file, 'w') as f:
        json.dump(descriptions, f, indent=2)
    print(f"\n   💾 Saved descriptions: {desc_file.name}")

    # STEP 3: Try to inject descriptions into doc object
    print("\n\nSTEP 3: Attempting to inject descriptions into doc object")
    print("-" * 80)

    # Method 1: Try setting text attribute
    print("Attempting to inject via text attribute...")
    for idx, pic_item in enumerate(picture_items):
        desc = descriptions[idx]['description']

        # Try different injection methods
        print(f"\n   Picture {idx + 1}:")
        print(f"   - Current text: {pic_item.text if hasattr(pic_item, 'text') else 'N/A'}")

        # Attempt injection
        try:
            # Try setting text (this might work)
            if hasattr(pic_item, 'text'):
                original_text = pic_item.text
                pic_item.text = f"[Image Description: {desc}]"
                print(f"   ✅ Set text attribute")
            else:
                print(f"   ⚠️  No text attribute")
        except Exception as e:
            print(f"   ❌ Failed to set text: {e}")

    # STEP 4: Export AFTER injection
    print("\n\nSTEP 4: Exporting document AFTER injection")
    print("-" * 80)

    markdown_after = doc.export_to_markdown()
    after_file = output_dir / "3_after_injection.md"
    after_file.write_text(markdown_after)
    print(f"✅ Saved AFTER state: {after_file.name}")

    # Compare
    if markdown_before == markdown_after:
        print("⚠️  WARNING: Markdown is identical - injection may not have worked")
    else:
        print("✅ Markdown changed - injection may have worked!")

    # STEP 5: Run semantic chunking on modified doc
    print("\n\nSTEP 5: Running semantic chunking on (possibly) modified doc")
    print("-" * 80)

    chunker = HybridChunker(tokenizer="bert-base-uncased", max_tokens=512)
    chunks = list(chunker.chunk(doc))

    print(f"✅ Created {len(chunks)} chunks")

    # Save chunks
    chunks_data = []
    for i, chunk in enumerate(chunks, 1):
        chunks_data.append({
            "chunk_num": i,
            "text": chunk.text,
            "contains_description": any(d['description'][:50] in chunk.text for d in descriptions if d['description'])
        })

    chunks_file = output_dir / "4_semantic_chunks_after_injection.json"
    with open(chunks_file, 'w') as f:
        json.dump(chunks_data, f, indent=2)
    print(f"💾 Saved chunks: {chunks_file.name}")

    # STEP 6: Summary
    print("\n\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)

    print(f"\n📁 All outputs saved to: {output_dir}")
    print("\nFiles created:")
    for file in sorted(output_dir.iterdir()):
        print(f"  - {file.name}")

    print(f"\n📊 Results:")
    print(f"  - Images found: {len(picture_items)}")
    print(f"  - Gemini descriptions: {len(descriptions)}")
    print(f"  - Semantic chunks: {len(chunks)}")
    print(f"  - Chunks with descriptions: {sum(c['contains_description'] for c in chunks_data)}")

    print("\n💡 Next: Compare the BEFORE and AFTER markdown files")
    print("   to see if injection worked!")
    print("=" * 80)

if __name__ == "__main__":
    inject_gemini_descriptions()
