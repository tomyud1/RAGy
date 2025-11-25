#!/usr/bin/env python3
"""
PaddleOCR Test Script - Compare with Docling
Tests PaddleOCR's PP-Structure V3 for document parsing
Features: OCR, Table Recognition, Formula Recognition, Layout Analysis
"""

import time
import json
import os
from pathlib import Path
import sys

# Check if paddleocr is installed
try:
    from paddleocr import PPStructureV3
except ImportError:
    print("ERROR: PaddleOCR is not installed!")
    print("\nTo install PaddleOCR, run:")
    print("  pip3 install 'paddleocr>=3.0.0' paddlepaddle PyMuPDF")
    print("\nFor better performance (GPU), install paddlepaddle-gpu instead")
    sys.exit(1)

def format_time(seconds):
    """Format seconds into readable time"""
    if seconds < 60:
        return f"{seconds:.2f}s"
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}m {secs:.2f}s"

def test_paddleocr_structure(pdf_path, output_dir):
    """
    Test PaddleOCR's PP-Structure V3 on a PDF

    Args:
        pdf_path: Path to PDF file (10 pages)
        output_dir: Where to save results
    """

    print("="*80)
    print("PaddleOCR PP-Structure V3 Test")
    print("="*80)
    print(f"Input PDF: {pdf_path}")
    print(f"Output Dir: {output_dir}")
    print()

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Initialize PP-Structure with all features enabled
    print("Initializing PP-Structure V3...")
    print("  - OCR: Text recognition")
    print("  - Table Structure: Table recognition")
    print("  - Layout Analysis: Document structure")
    print("  - Formula Recognition: Math formulas (if available)")
    print()

    start_init = time.time()

    # Configure PP-Structure V3
    # Enable all major features
    engine = PPStructureV3(
        use_table_recognition=True,      # Enable table recognition
        use_formula_recognition=True,    # Enable formula recognition
        use_chart_recognition=True,      # Enable chart recognition
        lang='en',                       # Language (en for English)
    )

    init_time = time.time() - start_init
    print(f"✓ Initialization complete: {format_time(init_time)}")
    print()

    # Process the PDF
    print("Processing PDF...")
    print("Note: PaddleOCR processes page-by-page")
    print()

    start_process = time.time()

    # Convert PDF to images first (PP-Structure works with images)
    # For direct PDF processing, we need to convert each page
    import fitz  # PyMuPDF for PDF handling

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
        pix = page.get_pixmap(dpi=200)  # Higher DPI for better OCR
        img_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
        pix.save(img_path)

        # Process with PP-Structure V3
        result = engine.predict(input=img_path)
        all_results.append(result)

        page_time = time.time() - page_start
        page_times.append(page_time)

        # Show real progress (not estimate)
        pages_done = page_num + 1
        progress_pct = (pages_done / total_pages) * 100
        avg_time = sum(page_times) / len(page_times)

        print(f"Page {pages_done}/{total_pages} ({progress_pct:.1f}%) - {format_time(page_time)} (avg: {format_time(avg_time)})")

        # Print what was found on this page
        regions_found = len(result)
        tables_found = sum(1 for r in result if r.get('type') == 'table')
        text_found = sum(1 for r in result if r.get('type') in ['text', 'title'])

        print(f"  Found: {regions_found} regions ({text_found} text, {tables_found} tables)")
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
    results_file = os.path.join(output_dir, "paddleocr_results.json")
    with open(results_file, 'w', encoding='utf-8') as f:
        # Convert results to serializable format
        serializable_results = []
        for page_result in all_results:
            page_data = []
            for item in page_result:
                # Convert each region to dict
                region = {
                    'type': item.get('type', 'unknown'),
                    'bbox': item.get('bbox', []),
                }

                # Add text content if available
                if 'res' in item:
                    if item['type'] == 'table':
                        # For tables, include HTML structure
                        region['html'] = item['res'].get('html', '')
                    else:
                        # For text, extract OCR results
                        region['text'] = '\n'.join([line['text'] for line in item['res']])

                page_data.append(region)
            serializable_results.append(page_data)

        json.dump({
            'total_pages': total_pages,
            'total_time_seconds': total_process_time,
            'avg_time_per_page': total_process_time / total_pages,
            'results': serializable_results
        }, f, indent=2, ensure_ascii=False)

    print(f"✓ Results saved to: {results_file}")

    # Generate statistics
    print()
    print("="*80)
    print("Statistics")
    print("="*80)

    total_regions = sum(len(r) for r in all_results)
    total_tables = sum(sum(1 for item in r if item.get('type') == 'table') for r in all_results)
    total_text = sum(sum(1 for item in r if item.get('type') in ['text', 'title']) for r in all_results)
    total_figures = sum(sum(1 for item in r if item.get('type') == 'figure') for r in all_results)

    print(f"Total regions detected: {total_regions}")
    print(f"  - Text regions: {total_text}")
    print(f"  - Tables: {total_tables}")
    print(f"  - Figures: {total_figures}")
    print()

    # Compare with Docling features
    print("="*80)
    print("Feature Comparison with Docling")
    print("="*80)
    print("Feature               | PaddleOCR | Docling")
    print("-"*80)
    print("OCR                   | ✓ Yes     | ✓ Yes")
    print("Table Structure       | ✓ Yes     | ✓ Yes")
    print("Formula Recognition   | ✓ Yes*    | ✓ Yes")
    print("Image Description     | ✗ No      | ✓ Yes (via Gemini)")
    print("Layout Analysis       | ✓ Yes     | ✓ Yes")
    print("Progress Tracking     | ✓ Page    | ✗ No")
    print("Speed (10 pages)      | {:<9} | (Compare)".format(format_time(total_process_time)))
    print()
    print("* Formula recognition available in PaddleOCR 3.x with LatexOCR model")
    print()

    return {
        'total_time': total_process_time,
        'pages': total_pages,
        'avg_per_page': total_process_time / total_pages,
        'total_regions': total_regions,
        'tables': total_tables,
        'text': total_text,
        'figures': total_figures
    }

if __name__ == "__main__":
    # Test PDF path (10 pages from heat transfer book)
    pdf_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf"

    # Output directory
    output_dir = "/Users/tomeryud/projects/RAGy/paddleocr_test_output"

    # Check if PDF exists
    if not os.path.exists(pdf_path):
        print(f"ERROR: PDF not found at {pdf_path}")
        print("\nPlease update the pdf_path variable in the script.")
        sys.exit(1)

    # Check for PyMuPDF
    try:
        import fitz
    except ImportError:
        print("ERROR: PyMuPDF (fitz) is not installed!")
        print("\nTo install PyMuPDF, run:")
        print("  pip3 install PyMuPDF")
        sys.exit(1)

    # Run the test
    try:
        results = test_paddleocr_structure(pdf_path, output_dir)

        print("="*80)
        print("Test Complete!")
        print("="*80)
        print(f"Check output directory: {output_dir}")

    except Exception as e:
        print(f"\nERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
