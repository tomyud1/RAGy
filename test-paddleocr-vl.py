#!/usr/bin/env python3
"""
PaddleOCR-VL Test Script
Tests on 10-page PDF from heat transfer book
"""

import time
import json
import os
import sys
from pathlib import Path

try:
    from paddleocr import PaddleOCRVL
    import fitz  # PyMuPDF
except ImportError as e:
    print(f"ERROR: Missing dependency: {e}")
    print("\nTo install:")
    print("  pip3 install 'paddleocr[doc-parser]' PyMuPDF")
    sys.exit(1)

def format_time(seconds):
    if seconds < 60:
        return f"{seconds:.2f}s"
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}m {secs:.2f}s"

# Configuration
pdf_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf"
output_dir = "/Users/tomeryud/projects/RAGy/paddleocr_vl_output"

print("="*80)
print("PaddleOCR-VL Test - M3 CPU")
print("="*80)
print(f"PDF: {pdf_path}")
print(f"Output: {output_dir}")
print()
print("⚠️  Running on CPU - will be slow (30-60s per page)")
print()

if not os.path.exists(pdf_path):
    print(f"ERROR: PDF not found")
    sys.exit(1)

# Create output directory
os.makedirs(output_dir, exist_ok=True)

# Initialize PaddleOCR-VL
print("Initializing PaddleOCR-VL (CPU mode)...")
print("First run will download models...")
print()

init_start = time.time()

try:
    pipeline = PaddleOCRVL(
        use_doc_orientation_classify=True,
        use_doc_unwarping=True,
        use_layout_detection=True,
        use_chart_recognition=True,
        device='cpu',
        precision='fp32',
    )
except Exception as e:
    print(f"ERROR initializing: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)

init_time = time.time() - init_start
print(f"✓ Initialized: {format_time(init_time)}")
print()

# Convert PDF to images
print("Converting PDF to images...")
pdf_doc = fitz.open(pdf_path)
total_pages = len(pdf_doc)

image_paths = []
for page_num in range(total_pages):
    page = pdf_doc[page_num]
    pix = page.get_pixmap(dpi=200)
    img_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
    pix.save(img_path)
    image_paths.append(img_path)

pdf_doc.close()
print(f"✓ Converted {total_pages} pages")
print()

# Process each page
print("Processing pages...")
print()

page_times = []
all_results = []

for idx, img_path in enumerate(image_paths):
    page_start = time.time()

    try:
        print(f"Page {idx + 1}/{total_pages}...", end=" ", flush=True)

        output = pipeline.predict(img_path)

        if output and len(output) > 0:
            result = output[0]
            all_results.append(result)

            # Save results
            page_dir = os.path.join(output_dir, f"page_{idx + 1}")
            os.makedirs(page_dir, exist_ok=True)

            result.save_to_markdown(save_path=page_dir)
            result.save_to_json(save_path=page_dir)

            page_time = time.time() - page_start
            page_times.append(page_time)

            avg_time = sum(page_times) / len(page_times)
            print(f"{format_time(page_time)} (avg: {format_time(avg_time)})")
        else:
            print("No results")
            all_results.append(None)

    except Exception as e:
        print(f"ERROR: {e}")
        all_results.append(None)

total_time = time.time() - init_start

print()
print("="*80)
print("Complete!")
print("="*80)
print(f"Total time: {format_time(total_time)}")
print(f"Average per page: {format_time(total_time / total_pages)}")
print()
print(f"Output directory: {output_dir}")
print()

# Combine markdown
combined_md = os.path.join(output_dir, "document.md")
with open(combined_md, 'w', encoding='utf-8') as f:
    for idx in range(total_pages):
        page_md = os.path.join(output_dir, f"page_{idx + 1}", "result.md")
        if os.path.exists(page_md):
            f.write(f"\n# Page {idx + 1}\n\n")
            with open(page_md, 'r', encoding='utf-8') as pf:
                f.write(pf.read())
            f.write("\n\n")

print(f"✓ Combined markdown: {combined_md}")
