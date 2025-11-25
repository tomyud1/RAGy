#!/usr/bin/env python3
"""
PaddleOCR Optimized Test - Memory Efficient
Uses basic PaddleOCR instead of PP-Structure V3 to reduce memory usage
"""

import time
import json
import os
import sys

try:
    from paddleocr import PaddleOCR
    import fitz  # PyMuPDF
except ImportError as e:
    print(f"ERROR: Missing dependency: {e}")
    print("\nTo install, run:")
    print("  pip3 install 'paddleocr>=3.0.0' paddlepaddle PyMuPDF")
    sys.exit(1)

def format_time(seconds):
    """Format seconds into readable time"""
    if seconds < 60:
        return f"{seconds:.2f}s"
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}m {secs:.2f}s"

def test_paddleocr_optimized(pdf_path, output_dir):
    """
    Memory-optimized PaddleOCR test
    """
    print("="*80)
    print("PaddleOCR Optimized Test (Memory Efficient)")
    print("="*80)
    print(f"Input PDF: {pdf_path}")
    print(f"Output Dir: {output_dir}")
    print()

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Initialize basic PaddleOCR with minimal models
    print("Initializing PaddleOCR (optimized for memory)...")
    print("  - Basic OCR only (no table/formula/chart recognition)")
    print("  - Lower DPI for reduced memory usage")
    print("  - Smaller models")
    print()

    start_init = time.time()

    # Basic PaddleOCR setup - MUCH lighter than PPStructureV3
    ocr = PaddleOCR(
        use_angle_cls=True,      # Rotation detection
        lang='en',               # English
        show_log=False,          # Reduce console spam
        use_gpu=False,           # CPU only (GPU not working on M3)
        det_db_box_thresh=0.5,   # Detection threshold
        rec_batch_num=6,         # Smaller batch size to save memory
        max_text_length=2000,    # Limit text length
        drop_score=0.5,          # Drop low confidence results
    )

    init_time = time.time() - start_init
    print(f"✓ Initialization complete: {format_time(init_time)}")
    print()

    # Process the PDF
    print("Processing PDF...")
    print()

    pdf_doc = fitz.open(pdf_path)
    total_pages = len(pdf_doc)

    print(f"Total pages: {total_pages}")
    print()

    all_results = []
    page_times = []

    for page_num in range(total_pages):
        page_start = time.time()

        # Convert PDF page to image at LOWER DPI to save memory
        page = pdf_doc[page_num]
        pix = page.get_pixmap(dpi=150)  # 150 instead of 200 - saves ~30% memory
        img_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
        pix.save(img_path)

        # Run OCR
        try:
            result = ocr.ocr(img_path, cls=True)
            all_results.append(result)
        except Exception as e:
            print(f"  ERROR on page {page_num + 1}: {e}")
            all_results.append([])

        # Delete the image to free memory
        try:
            os.remove(img_path)
        except:
            pass

        page_time = time.time() - page_start
        page_times.append(page_time)

        # Show progress
        pages_done = page_num + 1
        progress_pct = (pages_done / total_pages) * 100
        avg_time = sum(page_times) / len(page_times)

        text_regions = len(result[0]) if result and result[0] else 0
        print(f"Page {pages_done}/{total_pages} ({progress_pct:.1f}%) - {format_time(page_time)} (avg: {format_time(avg_time)}) - {text_regions} regions")

    pdf_doc.close()

    total_process_time = time.time() - start_init

    print()
    print("="*80)
    print("Processing Complete!")
    print("="*80)
    print(f"Total time: {format_time(total_process_time)}")
    print(f"Average per page: {format_time(total_process_time / total_pages)}")
    print()

    # Save results
    results_file = os.path.join(output_dir, "paddleocr_optimized_results.json")

    # Extract text from results
    extracted_text = []
    for page_idx, page_result in enumerate(all_results):
        page_text = []
        if page_result and page_result[0]:
            for line in page_result[0]:
                # line format: [bbox, (text, confidence)]
                text = line[1][0] if len(line) > 1 else ""
                confidence = line[1][1] if len(line) > 1 else 0.0
                bbox = line[0] if len(line) > 0 else []
                page_text.append({
                    'text': text,
                    'confidence': confidence,
                    'bbox': bbox
                })
        extracted_text.append({
            'page': page_idx + 1,
            'text_regions': page_text
        })

    with open(results_file, 'w', encoding='utf-8') as f:
        json.dump({
            'total_pages': total_pages,
            'total_time_seconds': total_process_time,
            'avg_time_per_page': total_process_time / total_pages,
            'pages': extracted_text
        }, f, indent=2, ensure_ascii=False)

    print(f"✓ Results saved to: {results_file}")
    print()

    # Extract full text
    text_file = os.path.join(output_dir, "extracted_text.txt")
    with open(text_file, 'w', encoding='utf-8') as f:
        for page_data in extracted_text:
            f.write(f"\n{'='*80}\n")
            f.write(f"Page {page_data['page']}\n")
            f.write(f"{'='*80}\n\n")
            for region in page_data['text_regions']:
                f.write(f"{region['text']}\n")

    print(f"✓ Full text saved to: {text_file}")
    print()

    # Statistics
    print("="*80)
    print("Statistics")
    print("="*80)
    total_regions = sum(len(p['text_regions']) for p in extracted_text)
    if total_regions > 0:
        avg_confidence = sum(
            r['confidence']
            for p in extracted_text
            for r in p['text_regions']
        ) / total_regions
        print(f"Total text regions detected: {total_regions}")
        print(f"Average confidence: {avg_confidence:.2%}")
    else:
        print("No text regions detected")
    print()

    return {
        'total_time': total_process_time,
        'pages': total_pages,
        'avg_per_page': total_process_time / total_pages,
        'total_regions': total_regions
    }

if __name__ == "__main__":
    # Test PDF path (10 pages from heat transfer book)
    pdf_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf"

    # Output directory
    output_dir = "/Users/tomeryud/projects/RAGy/paddleocr_optimized_output"

    # Check if PDF exists
    if not os.path.exists(pdf_path):
        print(f"ERROR: PDF not found at {pdf_path}")
        sys.exit(1)

    # Run the test
    try:
        results = test_paddleocr_optimized(pdf_path, output_dir)

        print("="*80)
        print("Test Complete!")
        print("="*80)
        print(f"Check output directory: {output_dir}")
        print()
        print("NOTE: This uses basic OCR only (no tables/formulas).")
        print("Memory usage: ~2-4GB instead of 16GB+")
        print("Speed: Should be 3-5s per page")

    except Exception as e:
        print(f"\nERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
