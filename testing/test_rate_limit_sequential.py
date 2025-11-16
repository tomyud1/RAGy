#!/usr/bin/env python3
"""
Test Docling + Gemini-2.0-Flash Sequential Processing with Rate Limit Monitoring
Process multiple PDF chunks sequentially and track API rate limiting
"""

import os
import json
import time
from pathlib import Path
from openai import OpenAI
from datetime import datetime

def process_chunk(pdf_path, gemini_client, output_base_dir, chunk_name):
    """Process a single PDF chunk with Docling + Gemini"""
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions
    from docling_core.types.doc import PictureItem
    from docling.chunking import HybridChunker

    print("\n" + "=" * 80)
    print(f"Processing: {chunk_name}")
    print("=" * 80)

    chunk_output_dir = output_base_dir / chunk_name
    chunk_output_dir.mkdir(parents=True, exist_ok=True)

    start_time = time.time()
    api_calls = []

    # ========================================================================
    # STEP 1: Convert PDF
    # ========================================================================
    print("  [1/5] Converting PDF...")

    pipeline_options = PdfPipelineOptions()
    pipeline_options.generate_picture_images = True
    pipeline_options.images_scale = 2.0

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )

    result = converter.convert(pdf_path)
    doc = result.document

    # ========================================================================
    # STEP 2: Extract Images
    # ========================================================================
    print("  [2/5] Extracting images...")

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

    print(f"      Found {len(images_with_context)} images")

    # ========================================================================
    # STEP 3: Call Gemini (with rate tracking)
    # ========================================================================
    print(f"  [3/5] Calling Gemini API ({len(images_with_context)} requests)...")

    image_descriptions = {}

    for idx, img_info in enumerate(images_with_context, 1):
        element = img_info['element']

        if hasattr(element, 'image') and element.image:
            uri = str(element.image.uri)
            if 'base64,' in uri:
                b64_data = uri.split('base64,')[1]

                api_call_start = time.time()

                try:
                    response = gemini_client.chat.completions.create(
                        model="gemini-2.0-flash",
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

                    api_call_end = time.time()

                    description = response.choices[0].message.content
                    image_descriptions[img_info['ref']] = description
                    img_info['description'] = description

                    api_calls.append({
                        "image_ref": img_info['ref'],
                        "timestamp": api_call_end,
                        "duration": api_call_end - api_call_start,
                        "status": "success",
                        "description_length": len(description) if description else 0
                    })

                    print(f"      ✅ {idx}/{len(images_with_context)} - {img_info['ref']} ({len(description) if description else 0} chars)")

                except Exception as e:
                    api_call_end = time.time()
                    error_msg = str(e)[:200]
                    image_descriptions[img_info['ref']] = f"[API Error: {error_msg}]"
                    img_info['description'] = f"[API Error: {error_msg}]"

                    api_calls.append({
                        "image_ref": img_info['ref'],
                        "timestamp": api_call_end,
                        "duration": api_call_end - api_call_start,
                        "status": "error",
                        "error": error_msg
                    })

                    print(f"      ❌ {idx}/{len(images_with_context)} - {img_info['ref']} - Error: {error_msg[:50]}")

    # ========================================================================
    # STEP 4: Semantic Chunking
    # ========================================================================
    print("  [4/5] Semantic chunking...")

    chunker = HybridChunker(tokenizer="bert-base-uncased", max_tokens=512)
    chunks = list(chunker.chunk(doc))

    print(f"      Created {len(chunks)} chunks")

    chunks_with_context = []
    for i, chunk in enumerate(chunks, 1):
        chunk_info = {
            "chunk_num": i,
            "text": chunk.text,
            "meta": str(chunk.meta) if hasattr(chunk, 'meta') else None,
        }

        chunk_pages = []
        if hasattr(chunk, 'meta') and chunk.meta:
            if hasattr(chunk.meta, 'pages'):
                chunk_pages = chunk.meta.pages
            elif hasattr(chunk.meta, 'page_no'):
                chunk_pages = [chunk.meta.page_no]

        chunk_info['pages'] = chunk_pages
        chunks_with_context.append(chunk_info)

    # ========================================================================
    # STEP 5: Match and Enrich
    # ========================================================================
    print("  [5/5] Matching images to chunks...")

    matches = []

    for img_info in images_with_context:
        img_page = img_info['page_no']
        img_ref = img_info['ref']
        img_caption = img_info['caption']

        best_chunk = None
        match_reason = None

        # Caption matching
        if img_caption:
            for chunk_info in chunks_with_context:
                if img_caption in chunk_info['text']:
                    best_chunk = chunk_info
                    match_reason = f"Caption match"
                    break

        # Page number matching
        if not best_chunk and img_page is not None:
            page_chunks = [c for c in chunks_with_context if img_page in c['pages']]

            if page_chunks:
                best_chunk = page_chunks[0]
                match_reason = f"Page match ({img_page})"
            else:
                # Proximity heuristic
                for chunk_info in chunks_with_context:
                    if chunk_info['chunk_num'] >= img_page * 2 and chunk_info['chunk_num'] <= (img_page + 1) * 3:
                        best_chunk = chunk_info
                        match_reason = f"Proximity (page {img_page})"
                        break

        if best_chunk:
            matches.append({
                "image_ref": img_ref,
                "image_page": img_page,
                "chunk_num": best_chunk['chunk_num'],
                "match_reason": match_reason,
                "description": img_info.get('description', 'No description')
            })
        else:
            matches.append({
                "image_ref": img_ref,
                "image_page": img_page,
                "chunk_num": 1,
                "match_reason": "Fallback",
                "description": img_info.get('description', 'No description')
            })

    # Enrich chunks
    enriched_chunks = []

    for chunk_info in chunks_with_context:
        chunk_num = chunk_info['chunk_num']
        chunk_text = chunk_info['text']

        chunk_images = [m for m in matches if m['chunk_num'] == chunk_num]

        if chunk_images:
            enriched_text = chunk_text

            for match in chunk_images:
                description = match['description']
                img_ref = match['image_ref']
                enriched_text += f"\n\n**[Image {img_ref} Description]:** {description}"

            enriched_chunks.append({
                "chunk_num": chunk_num,
                "original_text": chunk_text,
                "enriched_text": enriched_text,
                "images": [m['image_ref'] for m in chunk_images],
                "match_quality": [m['match_reason'] for m in chunk_images]
            })
        else:
            enriched_chunks.append({
                "chunk_num": chunk_num,
                "original_text": chunk_text,
                "enriched_text": chunk_text,
                "images": [],
                "match_quality": []
            })

    print(f"      Enriched {sum(1 for ec in enriched_chunks if ec['images'])} chunks")

    # ========================================================================
    # Save Results
    # ========================================================================
    with open(chunk_output_dir / "enriched_chunks.json", 'w') as f:
        json.dump(enriched_chunks, f, indent=2)

    with open(chunk_output_dir / "api_calls.json", 'w') as f:
        json.dump(api_calls, f, indent=2)

    end_time = time.time()

    # Return summary
    return {
        "chunk_name": chunk_name,
        "pdf_path": str(pdf_path),
        "images_found": len(images_with_context),
        "api_calls": len(api_calls),
        "api_success": len([c for c in api_calls if c['status'] == 'success']),
        "api_errors": len([c for c in api_calls if c['status'] == 'error']),
        "chunks_created": len(chunks),
        "chunks_enriched": sum(1 for ec in enriched_chunks if ec['images']),
        "processing_time": end_time - start_time,
        "api_call_times": [c['timestamp'] for c in api_calls]
    }


def main():
    """Main test function"""

    # Initialize Gemini
    api_key = os.getenv('GEMINI_API_KEY', 'AIzaSyCw_AoXsFHuHAuMoLZzFmZ7Hy6PrSKEdfg')
    gemini = OpenAI(
        api_key=api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
    )

    # Create output directory
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = Path(f"/Users/tomeryud/projects/RAGy/testing/outputs/rate_limit_test_{timestamp}")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("=" * 80)
    print("GEMINI-2.0-FLASH RATE LIMIT TEST - SEQUENTIAL PROCESSING")
    print("=" * 80)
    print(f"\n📁 Output Directory: {output_dir}")
    print(f"⏱️  Rate Limit: 10 requests per minute")
    print(f"🔧 Model: gemini-2.0-flash\n")

    # Define chunks to process
    chunks_to_process = [
        "file8973_chunk001_p1-10",
        "file8973_chunk002_p11-20",
        "file8973_chunk003_p21-30",
        "file8973_chunk004_p31-40",
        "file8973_chunk005_p41-50",
        "file8973_chunk006_p51-60",
        "file8973_chunk007_p61-70",
        "file8973_chunk008_p71-80",
        "file8973_chunk009_p81-90",
        "file8973_chunk010_p91-100",
        "file8973_chunk011_p101-110",
    ]

    # Find PDFs
    pdf_base_path = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973")

    pdf_files = []
    for chunk_name in chunks_to_process:
        pdf_path = pdf_base_path / f"{chunk_name}.pdf"
        if pdf_path.exists():
            pdf_files.append((chunk_name, pdf_path))
        else:
            print(f"⚠️  Warning: PDF not found for {chunk_name}")

    print(f"Found {len(pdf_files)} PDFs to process\n")

    # Process each chunk
    results = []
    total_api_calls = 0
    total_errors = 0
    start_time = time.time()

    # Rate limiting tracker
    api_call_window = []  # Track API call timestamps in last 60 seconds

    for idx, (chunk_name, pdf_path) in enumerate(pdf_files, 1):
        print(f"\n{'─' * 80}")
        print(f"CHUNK {idx}/{len(pdf_files)}: {chunk_name}")
        print(f"{'─' * 80}")

        # Process chunk
        chunk_result = process_chunk(pdf_path, gemini, output_dir, chunk_name)
        results.append(chunk_result)

        total_api_calls += chunk_result['api_calls']
        total_errors += chunk_result['api_errors']

        # Update API call window
        current_time = time.time()
        api_call_window.extend(chunk_result['api_call_times'])

        # Remove calls older than 60 seconds
        api_call_window = [t for t in api_call_window if current_time - t < 60]

        # Rate limiting logic
        if idx < len(pdf_files):  # Not the last chunk
            calls_in_last_minute = len(api_call_window)

            if calls_in_last_minute >= 10:
                # Need to wait
                oldest_call = min(api_call_window)
                wait_time = 60 - (current_time - oldest_call) + 1  # +1 for safety

                if wait_time > 0:
                    print(f"\n  ⏳ Rate limit protection: {calls_in_last_minute} calls in last 60s")
                    print(f"     Waiting {wait_time:.1f} seconds before next chunk...")
                    time.sleep(wait_time)

                    # Clear old calls after waiting
                    current_time = time.time()
                    api_call_window = [t for t in api_call_window if current_time - t < 60]

    end_time = time.time()

    # ========================================================================
    # Generate Summary Report
    # ========================================================================
    print("\n\n" + "=" * 80)
    print("FINAL SUMMARY")
    print("=" * 80)

    total_images = sum(r['images_found'] for r in results)
    total_chunks = sum(r['chunks_created'] for r in results)
    total_enriched = sum(r['chunks_enriched'] for r in results)
    total_time = end_time - start_time

    print(f"\n📊 Overall Statistics:")
    print(f"  • Total PDFs processed: {len(results)}")
    print(f"  • Total images found: {total_images}")
    print(f"  • Total API calls: {total_api_calls}")
    print(f"  • Successful calls: {total_api_calls - total_errors}")
    print(f"  • Failed calls: {total_errors}")
    print(f"  • Total chunks created: {total_chunks}")
    print(f"  • Total chunks enriched: {total_enriched}")
    print(f"  • Total processing time: {total_time:.1f}s ({total_time/60:.1f} min)")

    if total_api_calls > 0:
        print(f"\n⏱️  Rate Limit Analysis:")
        print(f"  • Average API calls per chunk: {total_api_calls / len(results):.1f}")
        print(f"  • Effective rate: {total_api_calls / (total_time / 60):.1f} calls/min")
        print(f"  • Rate limit: 10 calls/min")

        if total_errors > 0:
            print(f"\n⚠️  ERRORS DETECTED!")
            print(f"  • Error rate: {total_errors / total_api_calls * 100:.1f}%")
        else:
            print(f"\n✅ NO RATE LIMIT ERRORS!")

    print(f"\n📋 Per-Chunk Results:")
    for r in results:
        status = "✅" if r['api_errors'] == 0 else "❌"
        print(f"  {status} {r['chunk_name']}: {r['images_found']} images, {r['api_calls']} API calls, {r['api_errors']} errors")

    # Save summary
    summary = {
        "test_timestamp": timestamp,
        "model": "gemini-2.0-flash",
        "total_pdfs": len(results),
        "total_images": total_images,
        "total_api_calls": total_api_calls,
        "successful_calls": total_api_calls - total_errors,
        "failed_calls": total_errors,
        "total_chunks": total_chunks,
        "enriched_chunks": total_enriched,
        "processing_time_seconds": total_time,
        "effective_rate_per_minute": total_api_calls / (total_time / 60) if total_time > 0 else 0,
        "chunk_results": results
    }

    summary_file = output_dir / "test_summary.json"
    with open(summary_file, 'w') as f:
        json.dump(summary, f, indent=2)

    print(f"\n📁 Full results saved to: {output_dir}")
    print("=" * 80)

    return summary


if __name__ == "__main__":
    main()
