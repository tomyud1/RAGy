#!/usr/bin/env python3
"""
PaddleOCR-VL Improved Test Script - Batch Processing with Memory Management
- Processes in batches of 5 pages to prevent RAM overflow
- Better quality options enabled
- Fixed document.md combining
- Clears GPU memory between batches
"""

# ============================================================================
# CONFIGURATION
# ============================================================================
CACHE_DRIVE = "E:"  # Change to "C:" or any other drive letter
BATCH_SIZE = 5  # Process 5 pages at a time to manage RAM
# ============================================================================

import time
import json
import os
import sys
import subprocess
import gc
from pathlib import Path

class TeeOutput:
    """Duplicates output to both console and file"""
    def __init__(self, file_path):
        self.terminal = sys.stdout
        self.log = open(file_path, 'w', encoding='utf-8')

    def write(self, message):
        self.terminal.write(message)
        self.log.write(message)
        self.flush()

    def flush(self):
        self.terminal.flush()
        self.log.flush()

    def close(self):
        self.log.close()

def format_time(seconds):
    if seconds < 60:
        return f"{seconds:.2f}s"
    mins = int(seconds // 60)
    secs = seconds % 60
    return f"{mins}m {secs:.2f}s"

def clear_gpu_memory():
    """Clear GPU memory between batches"""
    try:
        import paddle
        paddle.device.cuda.empty_cache()
        print("[CLEANUP] GPU memory cleared")
    except:
        pass
    gc.collect()
    print("[CLEANUP] Python garbage collection completed")

def test_paddleocr_vl_batch(pdf_path, output_dir, device='cpu', precision='fp32'):
    """Test PaddleOCR-VL with batch processing"""

    try:
        from paddleocr import PaddleOCRVL
        import fitz  # PyMuPDF
    except ImportError as e:
        print(f"ERROR: Missing dependency: {e}")
        sys.exit(1)

    print("="*80)
    print("PaddleOCR-VL Improved Test - Batch Processing")
    print("="*80)
    print(f"PDF: {pdf_path}")
    print(f"Output: {output_dir}")
    print(f"Device: {device}")
    print(f"Precision: {precision}")
    print(f"Batch size: {BATCH_SIZE} pages")
    print()

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Convert PDF to images first
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
    print(f"[OK] Converted {total_pages} pages")
    print()

    # Calculate batches
    num_batches = (total_pages + BATCH_SIZE - 1) // BATCH_SIZE
    print(f"Processing in {num_batches} batches of up to {BATCH_SIZE} pages each")
    print()

    all_results = []
    page_times = []
    batch_start_time = time.time()

    for batch_idx in range(num_batches):
        batch_start = batch_idx * BATCH_SIZE
        batch_end = min((batch_idx + 1) * BATCH_SIZE, total_pages)
        batch_pages = range(batch_start, batch_end)

        print("="*80)
        print(f"BATCH {batch_idx + 1}/{num_batches}: Pages {batch_start + 1}-{batch_end}")
        print("="*80)

        # Initialize PaddleOCR-VL for this batch with IMPROVED OPTIONS
        print("Initializing PaddleOCR-VL with improved settings...")
        init_start = time.time()

        try:
            pipeline = PaddleOCRVL(
                use_doc_orientation_classify=True,
                use_doc_unwarping=True,
                use_layout_detection=True,
                use_chart_recognition=True,
                format_block_content=True,  # NEW: Better formatting
                device=device,
                precision=precision,
            )
        except Exception as e:
            print(f"ERROR initializing: {e}")
            import traceback
            traceback.print_exc()
            sys.exit(1)

        init_time = time.time() - init_start
        print(f"[OK] Initialized: {format_time(init_time)}")
        print()

        # Process pages in this batch
        for idx in batch_pages:
            page_start = time.time()

            try:
                print(f"Page {idx + 1}/{total_pages}...", end=" ", flush=True)

                img_path = image_paths[idx]
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
                    page_times.append(0)

            except Exception as e:
                print(f"ERROR: {e}")
                all_results.append(None)
                page_times.append(0)

        # Clean up pipeline and clear memory after batch
        del pipeline
        clear_gpu_memory()

        print()
        print(f"[OK] Batch {batch_idx + 1} complete")
        if batch_idx < num_batches - 1:
            print(f"[INFO] Starting next batch in 2 seconds...")
            time.sleep(2)  # Brief pause between batches
        print()

    total_time = time.time() - batch_start_time

    print()
    print("="*80)
    print("Complete!")
    print("="*80)
    print(f"Total time: {format_time(total_time)}")
    print(f"Average per page: {format_time(total_time / total_pages)}")
    print()

    # Combine markdown - FIXED VERSION
    print("Combining markdown files...")
    combined_md = os.path.join(output_dir, "document.md")
    with open(combined_md, 'w', encoding='utf-8') as f:
        for idx in range(total_pages):
            # Check multiple possible filenames
            possible_names = [
                os.path.join(output_dir, f"page_{idx + 1}", "result.md"),
                os.path.join(output_dir, f"page_{idx + 1}", f"page_{idx + 1}.md"),
            ]

            page_md = None
            for name in possible_names:
                if os.path.exists(name):
                    page_md = name
                    break

            if page_md:
                f.write(f"\n# Page {idx + 1}\n\n")
                with open(page_md, 'r', encoding='utf-8') as pf:
                    content = pf.read().strip()
                    if content:
                        f.write(content)
                    else:
                        f.write("*(Empty page)*")
                f.write("\n\n")
            else:
                f.write(f"\n# Page {idx + 1}\n\n*(No markdown file found)*\n\n")

    # Save summary
    summary = {
        'total_pages': total_pages,
        'total_time_seconds': total_time,
        'avg_time_per_page': total_time / total_pages,
        'batch_size': BATCH_SIZE,
        'num_batches': num_batches,
        'device': device,
        'precision': precision,
        'page_times': page_times
    }

    summary_path = os.path.join(output_dir, "summary.json")
    with open(summary_path, 'w') as f:
        json.dump(summary, f, indent=2)

    print(f"[OK] Combined markdown: {combined_md}")
    print(f"[OK] Summary: {summary_path}")
    print()
    print("Check the output folder for all results!")
    print()
    print("Extracted images are in: output/page_N/imgs/")

    return summary

if __name__ == "__main__":
    # Get script directory
    script_dir = Path(__file__).parent.absolute()

    # Setup logging to file AND console
    log_file = script_dir / "console_log_improved.txt"
    tee = TeeOutput(log_file)
    sys.stdout = tee
    sys.stderr = tee

    # Paths - default to pages 100-130, but allow override via command line
    if len(sys.argv) > 1:
        pdf_name = sys.argv[1]
        pdf_path = script_dir / pdf_name
        output_suffix = pdf_name.replace('.pdf', '').replace('test_document', '')
        output_dir = script_dir / f"output{output_suffix if output_suffix else '_improved'}"
    else:
        # Default: use the harder test (pages 100-130)
        pdf_path = script_dir / "test_document_pages100-130.pdf"
        output_dir = script_dir / "output_improved"

    print("="*80)
    print("PaddleOCR-VL Improved Test Script")
    print("="*80)
    print()
    print(f"Script directory: {script_dir}")
    print(f"Looking for PDF at: {pdf_path}")
    print(f"Logging to: {log_file}")
    print()

    try:
        # Check if running in venv
        in_venv = hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)

        if not in_venv:
            print("[ERROR] Please run from the virtual environment")
            print("Run: venv\\Scripts\\python.exe test_paddleocr_vl_improved.py")
            sys.exit(1)

        print("[OK] Running in virtual environment")
        print()

        # Check if PDF exists
        if not pdf_path.exists():
            print(f"ERROR: {pdf_path.name} not found in {script_dir}")
            print("Please place the PDF file in the same folder")
            sys.exit(1)

        # Auto-detect device
        print("Detecting hardware...")
        print()

        try:
            import paddle
            if paddle.device.is_compiled_with_cuda():
                print("[OK] PaddlePaddle compiled with CUDA support")
                device, precision = 'gpu:0', 'fp16'
            else:
                print("[WARNING] PaddlePaddle CPU-only version detected")
                device, precision = 'cpu', 'fp32'
        except:
            device, precision = 'cpu', 'fp32'

        # Run test
        print("Starting batch processing...")
        print()

        results = test_paddleocr_vl_batch(
            str(pdf_path),
            str(output_dir),
            device=device,
            precision=precision
        )

        print()
        print("="*80)
        print("SUCCESS!")
        print("="*80)
        print(f"Output saved to: {output_dir}")
        print(f"Log saved to: {log_file}")
        print()
        print("Output files:")
        print(f"  - document.md (combined markdown from all pages)")
        print(f"  - summary.json (processing stats)")
        print(f"  - page_N/ (individual page results)")
        print(f"  - page_N/imgs/ (extracted images)")

    except Exception as e:
        print(f"\nFATAL ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
    finally:
        # Close log file
        tee.close()
