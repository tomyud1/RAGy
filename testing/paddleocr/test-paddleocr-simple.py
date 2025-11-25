#!/usr/bin/env python3
"""
Simple PaddleOCR Test - Basic OCR and Table Recognition
Simpler than PP-Structure V3, easier to get started
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

def test_simple_ocr(pdf_path, output_dir):
    """
    Simple PaddleOCR test with basic features
    """
    print("="*80)
    print("PaddleOCR Simple Test")
    print("="*80)
    print(f"Input PDF: {pdf_path}")
    print(f"Output Dir: {output_dir}")
    print()

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Initialize PaddleOCR (simpler API)
    print("Initializing PaddleOCR...")
    print("  - OCR: Text recognition")
    print("  - Language: English")
    print()
    print("Note: First run will download models (~100MB), please be patient...")
    print()

    start_init = time.time()

    # Basic PaddleOCR setup
    ocr = PaddleOCR(
        use_angle_cls=True,  # Enable rotation detection
        lang='en',           # English
        show_log=False       # Reduce console spam
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

        # Convert PDF page to image
        page = pdf_doc[page_num]
        pix = page.get_pixmap(dpi=150)  # 150 DPI for good quality
        img_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
        pix.save(img_path)

        # Run OCR
        result = ocr.ocr(img_path, cls=True)
        all_results.append(result)

        page_time = time.time() - page_start
        page_times.append(page_time)

        # Show progress
        pages_done = page_num + 1
        progress_pct = (pages_done / total_pages) * 100
        avg_time = sum(page_times) / len(page_times)

        print(f"Page {pages_done}/{total_pages} ({progress_pct:.1f}%) - {format_time(page_time)} (avg: {format_time(avg_time)})")

        # Count text regions found
        text_regions = len(result[0]) if result and result[0] else 0
        print(f"  Found: {text_regions} text regions")
        print()

    pdf_doc.close()

    total_process_time = time.time() - start_process

    print("="*80)
    print("Processing Complete!")
    print("="*80)
    print(f"Total time: {format_time(total_process_time)}")
    print(f"Average per page: {format_time(total_process_time / total_pages)}")
    print()

    # Save results
    results_file = os.path.join(output_dir, "paddleocr_simple_results.json")

    # Extract text from results
    extracted_text = []
    for page_idx, page_result in enumerate(all_results):
        page_text = []
        if page_result and page_result[0]:
            for line in page_result[0]:
                # line format: [bbox, (text, confidence)]
                text = line[1][0]
                confidence = line[1][1]
                bbox = line[0]
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
    avg_confidence = sum(
        r['confidence']
        for p in extracted_text
        for r in p['text_regions']
    ) / total_regions if total_regions > 0 else 0

    print(f"Total text regions detected: {total_regions}")
    print(f"Average confidence: {avg_confidence:.2%}")
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
    output_dir = "/Users/tomeryud/projects/RAGy/paddleocr_simple_output"

    # Check if PDF exists
    if not os.path.exists(pdf_path):
        print(f"ERROR: PDF not found at {pdf_path}")
        sys.exit(1)

    # Run the test
    start_process = time.time()
    try:
        results = test_simple_ocr(pdf_path, output_dir)

        print("="*80)
        print("Test Complete!")
        print("="*80)
        print(f"Check output directory: {output_dir}")
        print()
        print("Next steps:")
        print("  1. Review extracted_text.txt for OCR quality")
        print("  2. Check paddleocr_simple_results.json for detailed results")
        print("  3. Compare with Docling output")
        print()
        print("For advanced features (tables, formulas), you'll need PP-Structure V3")
        print("which requires more setup and model downloads.")

    except Exception as e:
        print(f"\nERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
