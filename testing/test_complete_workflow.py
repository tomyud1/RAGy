#!/usr/bin/env python3
"""
COMPLETE WORKFLOW: Docling → Gemini → Semantic Chunks
Shows the full process step-by-step with file outputs at each stage
"""

import os
import json
import base64
from pathlib import Path
from openai import OpenAI
from datetime import datetime

def complete_workflow():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions
    from docling_core.types.doc import PictureItem
    from docling.chunking import HybridChunker

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = Path(f"/Users/tomeryud/projects/RAGy/testing/outputs/complete_workflow_{timestamp}")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 80)
    print("COMPLETE DOCLING → GEMINI → CHUNKING WORKFLOW")
    print("=" * 80)
    print(f"\n📁 Output: {output_dir}\n")

    # Initialize Gemini
    api_key = os.getenv('GEMINI_API_KEY', '')
    if not api_key:
        print("❌ GEMINI_API_KEY not set")
        return

    gemini = OpenAI(
        api_key=api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
    )

    test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")

    # ========================================================================
    # STEP 1: DOCLING CONVERSION
    # ========================================================================
    print("STEP 1: Docling PDF Conversion")
    print("-" * 80)

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

    print(f"✅ Doc object created (in RAM)")
    print(f"   Type: {type(doc).__name__}")
    print(f"   Pages: {len(doc.pages)}")

    # Output 1: Save initial markdown
    markdown_without_descriptions = doc.export_to_markdown()
    file1 = output_dir / "step1_docling_output_no_descriptions.md"
    file1.write_text(markdown_without_descriptions)
    print(f"   📄 Saved: {file1.name}")

    # ========================================================================
    # STEP 2: EXTRACT IMAGES & CALL GEMINI
    # ========================================================================
    print("\n\nSTEP 2: Extract Images & Call Gemini API")
    print("-" * 80)

    # Collect all picture items from doc object
    picture_data = []
    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            picture_data.append(element)

    print(f"Found {len(picture_data)} images in doc object")

    # Dictionary to store image ref → description mapping
    image_descriptions = {}

    for idx, pic_item in enumerate(picture_data, 1):
        print(f"\n  📷 Picture {idx} ({pic_item.self_ref})")

        if hasattr(pic_item, 'image') and pic_item.image:
            # Extract FULL base64 data
            uri = str(pic_item.image.uri)
            if 'base64,' in uri:
                b64_data = uri.split('base64,')[1]

                # Save image to disk
                img_bytes = base64.b64decode(b64_data)
                img_file = output_dir / f"step2_image_{idx}.png"
                with open(img_file, 'wb') as f:
                    f.write(img_bytes)
                print(f"     💾 Saved: {img_file.name}")

                # Call Gemini with FULL image
                print(f"     📡 Calling Gemini API...")
                try:
                    response = gemini.chat.completions.create(
                        model="gemini-2.0-flash",
                        messages=[
                            {
                                "role": "user",
                                "content": [
                                    {
                                        "type": "text",
                                        "text": "Describe this technical image/diagram/figure in detail. Include all visible elements, labels, text, data, and context. Be specific and technical."
                                    },
                                    {
                                        "type": "image_url",
                                        "image_url": {
                                            "url": f"data:image/png;base64,{b64_data}"
                                        }
                                    }
                                ]
                            }
                        ],
                        max_tokens=400
                    )

                    description = response.choices[0].message.content
                    image_descriptions[str(pic_item.self_ref)] = description

                    print(f"     ✅ Description: {description[:80]}...")

                except Exception as e:
                    error_msg = f"[Gemini API Error: {str(e)[:100]}]"
                    image_descriptions[str(pic_item.self_ref)] = error_msg
                    print(f"     ❌ Failed: {error_msg}")

    # Output 2: Save descriptions
    file2 = output_dir / "step2_gemini_descriptions.json"
    with open(file2, 'w') as f:
        json.dump(image_descriptions, f, indent=2)
    print(f"\n   📄 Saved: {file2.name}")

    # ========================================================================
    # STEP 3: CREATE ENRICHED MARKDOWN
    # ========================================================================
    print("\n\nSTEP 3: Create Enriched Markdown (with descriptions)")
    print("-" * 80)

    # We can't modify the doc object, so we enrich the markdown instead
    enriched_markdown = markdown_without_descriptions

    for pic_ref, description in image_descriptions.items():
        # Replace <!-- image --> placeholders with descriptions
        enriched_markdown = enriched_markdown.replace(
            "<!-- image -->",
            f"<!-- image -->\n\n**[AI-Generated Image Description]:** {description}\n",
            1  # Replace one at a time
        )

    # Output 3: Save enriched markdown
    file3 = output_dir / "step3_enriched_markdown_with_descriptions.md"
    file3.write_text(enriched_markdown)
    print(f"✅ Saved: {file3.name}")
    print(f"   Added {len(image_descriptions)} descriptions to markdown")

    # ========================================================================
    # STEP 4: SEMANTIC CHUNKING (on original doc object)
    # ========================================================================
    print("\n\nSTEP 4: Semantic Chunking (on original doc object)")
    print("-" * 80)

    chunker = HybridChunker(tokenizer="bert-base-uncased", max_tokens=512)
    chunks = list(chunker.chunk(doc))

    print(f"✅ Created {len(chunks)} semantic chunks from doc object")

    # Output 4a: Save original chunks (without descriptions)
    chunks_data_original = [
        {"chunk_num": i, "text": chunk.text}
        for i, chunk in enumerate(chunks, 1)
    ]

    file4a = output_dir / "step4a_chunks_without_descriptions.json"
    with open(file4a, 'w') as f:
        json.dump(chunks_data_original, f, indent=2)
    print(f"   📄 Saved: {file4a.name}")

    # ========================================================================
    # STEP 5: ENRICH CHUNKS WITH DESCRIPTIONS
    # ========================================================================
    print("\n\nSTEP 5: Enrich Chunks (add descriptions where images appear)")
    print("-" * 80)

    # Post-process chunks: if a chunk likely contains an image reference,
    # append the corresponding description
    enriched_chunks = []
    for i, chunk in enumerate(chunks, 1):
        chunk_text = chunk.text
        chunk_enriched = chunk_text

        # Check if this chunk might contain an image
        # (heuristic: check for common figure/image indicators)
        if any(keyword in chunk_text.lower() for keyword in ['figure', 'fig', 'image', 'diagram']):
            # Try to match with descriptions
            for pic_ref, description in image_descriptions.items():
                # Simple heuristic - in a real implementation, you'd match properly
                chunk_enriched += f"\n\n[Associated Image Description from {pic_ref}]: {description}"
                break  # Add one description per chunk for now

        enriched_chunks.append({
            "chunk_num": i,
            "original_text": chunk_text,
            "enriched_text": chunk_enriched,
            "was_enriched": chunk_enriched != chunk_text
        })

    enriched_count = sum(1 for c in enriched_chunks if c['was_enriched'])

    # Output 5: Save enriched chunks
    file5 = output_dir / "step5_chunks_enriched_with_descriptions.json"
    with open(file5, 'w') as f:
        json.dump(enriched_chunks, f, indent=2)
    print(f"✅ Saved: {file5.name}")
    print(f"   Enriched {enriched_count}/{len(chunks)} chunks with descriptions")

    # ========================================================================
    # FINAL SUMMARY
    # ========================================================================
    print("\n\n" + "=" * 80)
    print("WORKFLOW COMPLETE - FILE OUTPUT SUMMARY")
    print("=" * 80)

    print(f"\n📁 All files saved to: {output_dir}\n")

    print("Files created (in order):")
    print("  1. step1_docling_output_no_descriptions.md")
    print("     └─ Markdown from Docling (no image descriptions)")
    print("")
    print("  2. step2_image_*.png")
    print("     └─ Extracted images from PDF")
    print("")
    print("  3. step2_gemini_descriptions.json")
    print("     └─ Gemini-generated image descriptions")
    print("")
    print("  4. step3_enriched_markdown_with_descriptions.md")
    print("     └─ Markdown with AI descriptions inserted")
    print("")
    print("  5. step4a_chunks_without_descriptions.json")
    print("     └─ Semantic chunks from original doc object")
    print("")
    print("  6. step5_chunks_enriched_with_descriptions.json")
    print("     └─ Chunks enriched with image descriptions")

    print(f"\n📊 Statistics:")
    print(f"  • Images found: {len(picture_data)}")
    print(f"  • Gemini descriptions: {len(image_descriptions)}")
    print(f"  • Total chunks: {len(chunks)}")
    print(f"  • Chunks enriched: {enriched_count}")

    print("\n" + "=" * 80)

if __name__ == "__main__":
    complete_workflow()
