#!/usr/bin/env python3
"""
Test Docling + Gemini (gemini-flash-latest) Image Description Enrichment
Complete workflow: Convert → Extract → Describe → Chunk → Match → Enrich
"""

import os
import json
import base64
from pathlib import Path
from openai import OpenAI
from datetime import datetime

def test_gemini_latest():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions
    from docling_core.types.doc import PictureItem
    from docling.chunking import HybridChunker

    # Create output directory with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = Path(f"/Users/tomeryud/projects/RAGy/testing/outputs/gemini_latest_test_{timestamp}")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 80)
    print("DOCLING + GEMINI-FLASH-LATEST IMAGE ENRICHMENT TEST")
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
    # STEP 1: Convert PDF and extract images with provenance
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
    doc = result.document

    print(f"✅ Converted {test_pdf.name}")

    # Collect images with full provenance data
    images_with_context = []

    for element, _level in doc.iterate_items():
        if isinstance(element, PictureItem):
            prov = element.prov[0] if hasattr(element, 'prov') and element.prov else None

            image_info = {
                "ref": str(element.self_ref),
                "page_no": prov.page_no if prov else None,
                "bbox": {
                    "left": prov.bbox.l if prov else None,
                    "top": prov.bbox.t if prov else None,
                    "right": prov.bbox.r if prov else None,
                    "bottom": prov.bbox.b if prov else None,
                } if prov else None,
                "caption": element.caption_text(doc=doc) if hasattr(element, 'caption_text') else None,
                "element": element
            }

            images_with_context.append(image_info)

            print(f"\n  📷 Image: {image_info['ref']}")
            print(f"     Page: {image_info['page_no']}")
            if image_info['bbox']:
                print(f"     Position: ({image_info['bbox']['left']:.1f}, {image_info['bbox']['top']:.1f}) to ({image_info['bbox']['right']:.1f}, {image_info['bbox']['bottom']:.1f})")

    print(f"\n✅ Found {len(images_with_context)} images")

    # ========================================================================
    # STEP 2: Call Gemini for each image (gemini-flash-latest)
    # ========================================================================
    print(f"\n\nSTEP 2: Generate Descriptions via Gemini (gemini-flash-latest)")
    print("-" * 80)

    image_descriptions = {}

    for idx, img_info in enumerate(images_with_context, 1):
        element = img_info['element']

        if hasattr(element, 'image') and element.image:
            uri = str(element.image.uri)
            if 'base64,' in uri:
                b64_data = uri.split('base64,')[1]

                print(f"\n  📡 Calling Gemini for {img_info['ref']}...")
                try:
                    response = gemini.chat.completions.create(
                        model="gemini-flash-latest",  # Using latest model
                        messages=[
                            {
                                "role": "user",
                                "content": [
                                    {
                                        "type": "text",
                                        "text": "Describe this image in detail. Focus on visible text, graphics, diagrams, charts, or logos. Be specific about what you see."
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
                    image_descriptions[img_info['ref']] = description
                    img_info['description'] = description

                    print(f"     ✅ Got description ({len(description)} chars)")

                except Exception as e:
                    error_msg = f"[API Error: {str(e)[:100]}]"
                    image_descriptions[img_info['ref']] = error_msg
                    img_info['description'] = error_msg
                    print(f"     ❌ Failed: {error_msg}")

    # Save image descriptions
    desc_file = output_dir / "gemini_descriptions.json"
    with open(desc_file, 'w') as f:
        json.dump(image_descriptions, f, indent=2)
    print(f"\n📄 Saved: {desc_file.name}")

    # ========================================================================
    # STEP 3: Semantic Chunking
    # ========================================================================
    print(f"\n\nSTEP 3: Semantic Chunking with HybridChunker")
    print("-" * 80)

    chunker = HybridChunker(tokenizer="bert-base-uncased", max_tokens=512)
    chunks = list(chunker.chunk(doc))

    print(f"✅ Created {len(chunks)} chunks")

    # Build chunk context with page tracking
    chunks_with_context = []

    for i, chunk in enumerate(chunks, 1):
        chunk_info = {
            "chunk_num": i,
            "text": chunk.text,
            "meta": str(chunk.meta) if hasattr(chunk, 'meta') else None,
        }

        # Try to determine which page(s) this chunk covers
        chunk_pages = []
        if hasattr(chunk, 'meta') and chunk.meta:
            if hasattr(chunk.meta, 'pages'):
                chunk_pages = chunk.meta.pages
            elif hasattr(chunk.meta, 'page_no'):
                chunk_pages = [chunk.meta.page_no]

        chunk_info['pages'] = chunk_pages
        chunks_with_context.append(chunk_info)

    # ========================================================================
    # STEP 4: Match Images to Chunks (Accurate Placement)
    # ========================================================================
    print(f"\n\nSTEP 4: Match Images to Chunks")
    print("-" * 80)

    matches = []

    for img_info in images_with_context:
        img_page = img_info['page_no']
        img_ref = img_info['ref']
        img_caption = img_info['caption']

        print(f"\n  🔍 Finding best chunk for {img_ref} (Page {img_page})...")

        best_chunk = None
        match_reason = None

        # Strategy 1: Caption matching (most accurate)
        if img_caption:
            for chunk_info in chunks_with_context:
                if img_caption in chunk_info['text']:
                    best_chunk = chunk_info
                    match_reason = f"Caption found in chunk: '{img_caption[:50]}...'"
                    break

        # Strategy 2: Page number matching
        if not best_chunk and img_page is not None:
            page_chunks = [c for c in chunks_with_context if img_page in c['pages']]

            if page_chunks:
                best_chunk = page_chunks[0]
                match_reason = f"Same page ({img_page})"
            else:
                # Strategy 3: Proximity heuristic
                for chunk_info in chunks_with_context:
                    if chunk_info['chunk_num'] >= img_page * 2 and chunk_info['chunk_num'] <= (img_page + 1) * 3:
                        best_chunk = chunk_info
                        match_reason = f"Proximity heuristic (chunk {chunk_info['chunk_num']} ≈ page {img_page})"
                        break

        if best_chunk:
            matches.append({
                "image_ref": img_ref,
                "image_page": img_page,
                "chunk_num": best_chunk['chunk_num'],
                "match_reason": match_reason,
                "description": img_info.get('description', 'No description')
            })
            print(f"     ✅ Matched to Chunk #{best_chunk['chunk_num']}")
            print(f"        Reason: {match_reason}")
        else:
            # Fallback to first chunk
            print(f"     ⚠️  No good match found - using fallback")
            matches.append({
                "image_ref": img_ref,
                "image_page": img_page,
                "chunk_num": 1,
                "match_reason": "Fallback to first chunk",
                "description": img_info.get('description', 'No description')
            })

    # Save matching results
    match_file = output_dir / "image_to_chunk_matches.json"
    with open(match_file, 'w') as f:
        json.dump(matches, f, indent=2)
    print(f"\n📄 Saved: {match_file.name}")

    # ========================================================================
    # STEP 5: Insert Descriptions into Matched Chunks
    # ========================================================================
    print(f"\n\nSTEP 5: Enrich Chunks with Image Descriptions")
    print("-" * 80)

    enriched_chunks = []

    for chunk_info in chunks_with_context:
        chunk_num = chunk_info['chunk_num']
        chunk_text = chunk_info['text']

        # Find all images that belong to this chunk
        chunk_images = [m for m in matches if m['chunk_num'] == chunk_num]

        if chunk_images:
            # Build enriched text
            enriched_text = chunk_text

            for match in chunk_images:
                description = match['description']
                img_ref = match['image_ref']

                # Insert description at the end
                enriched_text += f"\n\n**[Image {img_ref} Description]:** {description}"

            enriched_chunks.append({
                "chunk_num": chunk_num,
                "original_text": chunk_text,
                "enriched_text": enriched_text,
                "images": [m['image_ref'] for m in chunk_images],
                "match_quality": [m['match_reason'] for m in chunk_images]
            })

            print(f"\n  ✅ Enriched Chunk #{chunk_num}")
            print(f"     Added {len(chunk_images)} image description(s)")
        else:
            # No images for this chunk
            enriched_chunks.append({
                "chunk_num": chunk_num,
                "original_text": chunk_text,
                "enriched_text": chunk_text,
                "images": [],
                "match_quality": []
            })

    # Save enriched chunks
    chunks_file = output_dir / "enriched_chunks.json"
    with open(chunks_file, 'w') as f:
        json.dump(enriched_chunks, f, indent=2)
    print(f"\n📄 Saved: {chunks_file.name}")

    # Save readable version
    readable_file = output_dir / "enriched_chunks_readable.txt"
    with open(readable_file, 'w') as f:
        for ec in enriched_chunks:
            if ec['images']:
                f.write("=" * 80 + "\n")
                f.write(f"CHUNK {ec['chunk_num']} - WITH IMAGE DESCRIPTIONS\n")
                f.write("=" * 80 + "\n")
                f.write(f"Images: {', '.join(ec['images'])}\n")
                f.write(f"Match Quality: {', '.join(ec['match_quality'])}\n")
                f.write("-" * 80 + "\n")
                f.write(ec['enriched_text'])
                f.write("\n\n")
    print(f"📄 Saved: {readable_file.name}")

    # ========================================================================
    # Summary
    # ========================================================================
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"\n📊 Statistics:")
    print(f"  • Total images: {len(images_with_context)}")
    print(f"  • Gemini API calls: {len([d for d in image_descriptions.values() if not d.startswith('[API Error')])} successful")
    print(f"  • Total chunks: {len(chunks)}")
    print(f"  • Enriched chunks: {sum(1 for ec in enriched_chunks if ec['images'])}")

    print(f"\n🎯 Match Quality:")
    for match in matches:
        print(f"  • {match['image_ref']} → Chunk #{match['chunk_num']}")
        print(f"    Reason: {match['match_reason']}")

    print(f"\n📁 Review outputs at: {output_dir}")
    print("=" * 80)

    # Return success status
    return {
        "success": True,
        "images_found": len(images_with_context),
        "api_calls_succeeded": len([d for d in image_descriptions.values() if not d.startswith('[API Error')]),
        "chunks_created": len(chunks),
        "chunks_enriched": sum(1 for ec in enriched_chunks if ec['images']),
        "output_dir": str(output_dir)
    }

if __name__ == "__main__":
    result = test_gemini_latest()

    if result and result['success']:
        print("\n✅ TEST PASSED - Workflow completed successfully!")
    else:
        print("\n❌ TEST FAILED - Check output for errors")
