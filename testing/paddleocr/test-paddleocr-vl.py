#!/usr/bin/env python3
"""
PaddleOCR-VL Test Script
Tests the 0.9B vision-language model for document parsing

IMPORTANT: PaddleOCR-VL requirements:
- NVIDIA GPU with CUDA 12.6+ (recommended)
- OR CPU (very slow, not officially supported)
- Apple Silicon (M3) NOT supported
"""

import time
import json
import os
import sys
from pathlib import Path

# Check if PaddleOCR-VL is available
try:
    from paddleocr import PaddleOCRVL
except ImportError:
    print("ERROR: PaddleOCR-VL is not installed!")
    print("\nTo install PaddleOCR-VL, run:")
    print("  # For NVIDIA GPU:")
    print("  pip3 install paddlepaddle-gpu==3.2.1")
    print("  pip3 install -U 'paddleocr[doc-parser]'")
    print()
    print("  # For CPU (not recommended, very slow):")
    print("  pip3 install paddlepaddle==3.2.1")
    print("  pip3 install -U 'paddleocr[doc-parser]'")
    print()
    print("IMPORTANT: Apple Silicon (M3) is NOT supported!")
    sys.exit(1)

try:
    import fitz  # PyMuPDF
except ImportError:
    print("ERROR: PyMuPDF is not installed!")
    print("  pip3 install PyMuPDF")
    sys.exit(1)

def format_time(seconds):
    """Format seconds into readable time"""
    if seconds < 60:
        return f"{seconds:.2f}s"
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}m {secs:.2f}s"

def test_paddleocr_vl(pdf_path, output_dir, device='cpu', precision='fp32'):
    """
    Test PaddleOCR-VL on a PDF document

    Args:
        pdf_path: Path to PDF file
        output_dir: Where to save results
        device: 'cpu', 'gpu:0', etc.
        precision: 'fp32' or 'fp16' (fp16 requires GPU)
    """
    print("="*80)
    print("PaddleOCR-VL Test - Vision-Language Model (0.9B)")
    print("="*80)
    print(f"Input PDF: {pdf_path}")
    print(f"Output Dir: {output_dir}")
    print(f"Device: {device}")
    print(f"Precision: {precision}")
    print()
    print("Features:")
    print("  ✅ 109 languages supported")
    print("  ✅ Text, tables, formulas, charts (11 types)")
    print("  ✅ Much more memory efficient than PPStructureV3")
    print("  ✅ SOTA quality")
    print()

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Initialize PaddleOCR-VL
    print("Initializing PaddleOCR-VL...")
    print("  This will download the model on first run (~2GB)")
    print()

    init_start = time.time()

    try:
        pipeline = PaddleOCRVL(
            use_doc_orientation_classify=True,  # Auto-detect rotation
            use_doc_unwarping=True,             # Fix warped/curved documents
            use_layout_detection=True,          # Detect document structure
            use_chart_recognition=True,         # Parse charts to tables
            device=device,                      # 'cpu', 'gpu:0', etc.
            precision=precision,                # 'fp32' or 'fp16'
        )
    except Exception as e:
        print(f"ERROR initializing PaddleOCR-VL: {e}")
        print()
        if "CUDA" in str(e) or "GPU" in str(e):
            print("GPU initialization failed. Try running with device='cpu'")
        sys.exit(1)

    init_time = time.time() - init_start
    print(f"✓ Initialization complete: {format_time(init_time)}")
    print()

    # Convert PDF to images
    print("Converting PDF to images...")
    pdf_doc = fitz.open(pdf_path)
    total_pages = len(pdf_doc)

    image_paths = []
    for page_num in range(total_pages):
        page = pdf_doc[page_num]
        pix = page.get_pixmap(dpi=200)  # High DPI for better quality
        img_path = os.path.join(output_dir, f"page_{page_num + 1}.png")
        pix.save(img_path)
        image_paths.append(img_path)

    pdf_doc.close()
    print(f"✓ Converted {total_pages} pages to images")
    print()

    # Process each page
    print("Processing pages with PaddleOCR-VL...")
    print()

    all_results = []
    page_times = []

    for idx, img_path in enumerate(image_paths):
        page_start = time.time()

        try:
            # Run PaddleOCR-VL on the image
            output = pipeline.predict(img_path)

            # Extract result
            if output and len(output) > 0:
                result = output[0]
                all_results.append(result)

                # Save page results
                page_output_dir = os.path.join(output_dir, f"page_{idx + 1}")
                os.makedirs(page_output_dir, exist_ok=True)

                # Save as markdown
                result.save_to_markdown(save_path=page_output_dir)

                # Save as JSON
                result.save_to_json(save_path=page_output_dir)

                # Save visualization (if available)
                try:
                    result.save_to_img(save_path=page_output_dir)
                except:
                    pass  # Visualization might not be available

                page_time = time.time() - page_start
                page_times.append(page_time)

                # Show progress
                pages_done = idx + 1
                progress_pct = (pages_done / total_pages) * 100
                avg_time = sum(page_times) / len(page_times)

                print(f"Page {pages_done}/{total_pages} ({progress_pct:.1f}%) - {format_time(page_time)} (avg: {format_time(avg_time)})")

            else:
                print(f"Page {idx + 1}/{total_pages} - No results")
                all_results.append(None)

        except Exception as e:
            print(f"Page {idx + 1}/{total_pages} - ERROR: {e}")
            all_results.append(None)

    total_process_time = time.time() - init_start

    print()
    print("="*80)
    print("Processing Complete!")
    print("="*80)
    print(f"Total time: {format_time(total_process_time)}")
    print(f"Average per page: {format_time(total_process_time / total_pages)}")
    print()

    # Combine all markdown files into one
    print("Creating combined output...")
    combined_md_path = os.path.join(output_dir, "document.md")
    with open(combined_md_path, 'w', encoding='utf-8') as f:
        for idx in range(total_pages):
            page_md_path = os.path.join(output_dir, f"page_{idx + 1}", "result.md")
            if os.path.exists(page_md_path):
                f.write(f"\n# Page {idx + 1}\n\n")
                with open(page_md_path, 'r', encoding='utf-8') as page_f:
                    f.write(page_f.read())
                f.write("\n\n")

    print(f"✓ Combined markdown saved to: {combined_md_path}")
    print()

    # Create summary
    summary = {
        'total_pages': total_pages,
        'total_time_seconds': total_process_time,
        'avg_time_per_page': total_process_time / total_pages,
        'device': device,
        'precision': precision,
        'output_files': {
            'combined_markdown': combined_md_path,
            'per_page_results': [
                os.path.join(output_dir, f"page_{i + 1}")
                for i in range(total_pages)
            ]
        }
    }

    summary_path = os.path.join(output_dir, "summary.json")
    with open(summary_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2)

    print(f"✓ Summary saved to: {summary_path}")
    print()

    # Statistics
    print("="*80)
    print("Statistics")
    print("="*80)
    print(f"Model: PaddleOCR-VL (0.9B parameters)")
    print(f"Pages processed: {total_pages}")
    print(f"Total time: {format_time(total_process_time)}")
    print(f"Average per page: {format_time(total_process_time / total_pages)}")
    print()
    print("Output includes:")
    print("  ✅ Markdown with structure")
    print("  ✅ JSON with detailed data")
    print("  ✅ Tables extracted")
    print("  ✅ Formulas recognized")
    print("  ✅ Charts parsed")
    print()

    return summary

if __name__ == "__main__":
    # Configuration
    pdf_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf"
    output_dir = "/Users/tomeryud/projects/RAGy/paddleocr_vl_output"

    # Device configuration
    # IMPORTANT: Change this based on your hardware
    device = 'cpu'  # Options: 'cpu', 'gpu:0', 'gpu:1', etc.
    precision = 'fp32'  # Options: 'fp32', 'fp16' (fp16 requires GPU)

    print("="*80)
    print("HARDWARE COMPATIBILITY NOTICE")
    print("="*80)
    print("PaddleOCR-VL hardware support:")
    print("  ✅ NVIDIA GPU (CUDA 12.6+) - RECOMMENDED")
    print("  ⚠️  CPU - Works but VERY slow")
    print("  ❌ Apple Silicon (M3) - NOT supported")
    print("  ❌ AMD GPU - NOT supported")
    print()
    print(f"Current configuration: device='{device}', precision='{precision}'")
    print()

    if device == 'cpu':
        print("⚠️  WARNING: Running on CPU will be VERY slow!")
        print("   Expected: 30-60 seconds per page")
        print("   Consider using cloud GPU (Google Colab, RunPod, etc.)")
        print()
        response = input("Continue with CPU? (yes/no): ")
        if response.lower() not in ['yes', 'y']:
            print("Aborted. Change device to 'gpu:0' if you have NVIDIA GPU.")
            sys.exit(0)

    if not os.path.exists(pdf_path):
        print(f"ERROR: PDF not found at {pdf_path}")
        sys.exit(1)

    try:
        results = test_paddleocr_vl(pdf_path, output_dir, device=device, precision=precision)

        print("="*80)
        print("Test Complete!")
        print("="*80)
        print(f"Check output directory: {output_dir}")
        print()
        print("Output structure:")
        print(f"  {output_dir}/")
        print(f"    ├── document.md          (Combined markdown)")
        print(f"    ├── summary.json         (Processing summary)")
        print(f"    ├── page_1/")
        print(f"    │   ├── result.md        (Page markdown)")
        print(f"    │   └── result.json      (Page JSON)")
        print(f"    ├── page_2/")
        print(f"    └── ...")
        print()
        print("Compare with Docling output to decide which is better!")

    except Exception as e:
        print(f"\nERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
