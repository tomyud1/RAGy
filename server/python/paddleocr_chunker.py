#!/usr/bin/env python3
"""
PaddleOCR-VL document chunker service
Processes PDFs and images, returns page-based chunks in JSON format
Compatible with Windows/NVIDIA GPU and Linux systems
"""

import sys
import json
import os
import time
import gc
from pathlib import Path

# Supported file extensions
SUPPORTED_EXTENSIONS = {'.pdf', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif'}

def check_file_compatibility(file_paths):
    """
    Check if all files are compatible with PaddleOCR-VL
    Returns: (compatible_files, incompatible_files)
    """
    compatible = []
    incompatible = []

    for file_path in file_paths:
        ext = Path(file_path).suffix.lower()
        if ext in SUPPORTED_EXTENSIONS:
            compatible.append(file_path)
        else:
            incompatible.append((file_path, f"Unsupported format: {ext}"))

    return compatible, incompatible


def detect_hardware():
    """
    Detect available hardware and return optimal device configuration
    Returns: (device, precision, hardware_info)
    """
    hardware_info = {
        "device": "cpu",
        "precision": "fp32",
        "hardware": "CPU only",
        "warning": None,
        "recommendation": None
    }

    try:
        import paddle

        # Check for CUDA (NVIDIA GPU)
        if paddle.device.is_compiled_with_cuda():
            import subprocess
            try:
                # Try to get GPU name using nvidia-smi
                result = subprocess.run(['nvidia-smi', '--query-gpu=name', '--format=csv,noheader'],
                                      capture_output=True, text=True, timeout=5)
                if result.returncode == 0:
                    gpu_name = result.stdout.strip().split('\n')[0]
                    hardware_info["device"] = "gpu:0"
                    hardware_info["precision"] = "fp16"
                    hardware_info["hardware"] = f"NVIDIA GPU ({gpu_name})"
                    hardware_info["expected_speedup"] = "5-10x vs CPU"
                    return hardware_info["device"], hardware_info["precision"], hardware_info
            except:
                pass

        # Check for Apple Silicon (MPS)
        # PaddlePaddle doesn't support MPS, so Apple Silicon will use CPU
        import platform
        if platform.system() == 'Darwin' and 'arm' in platform.machine().lower():
            hardware_info["device"] = "cpu"
            hardware_info["precision"] = "fp32"
            hardware_info["hardware"] = "Apple Silicon (CPU mode)"
            hardware_info["warning"] = "PaddleOCR-VL does not support Apple Silicon GPU acceleration"
            hardware_info["recommendation"] = "Use Docling for faster processing on Mac, or use Windows/Linux with NVIDIA GPU for PaddleOCR-VL"
            return hardware_info["device"], hardware_info["precision"], hardware_info

        # Check for AMD GPU (ROCm)
        # PaddlePaddle has limited AMD support, treat as CPU for safety
        if paddle.device.is_compiled_with_rocm():
            hardware_info["device"] = "cpu"
            hardware_info["precision"] = "fp32"
            hardware_info["hardware"] = "AMD GPU detected (using CPU)"
            hardware_info["warning"] = "PaddleOCR-VL has limited AMD GPU support"
            hardware_info["recommendation"] = "Use NVIDIA GPU for best performance"
            return hardware_info["device"], hardware_info["precision"], hardware_info

    except ImportError:
        hardware_info["warning"] = "PaddlePaddle not installed"
        hardware_info["recommendation"] = "Install PaddlePaddle to use PaddleOCR-VL"

    return hardware_info["device"], hardware_info["precision"], hardware_info


def clear_gpu_memory():
    """Clear GPU memory between batches"""
    try:
        import paddle
        paddle.device.cuda.empty_cache()
        print(json.dumps({"info": "GPU memory cleared"}), file=sys.stderr, flush=True)
    except:
        pass
    gc.collect()


def process_with_paddleocr_vl(input_dir, output_file, batch_size=5, conversion_output_folder='conversions/'):
    """
    Process documents with PaddleOCR-VL and save page-based chunks

    Args:
        input_dir: Directory containing PDFs/images to process
        output_file: Path to save JSON chunks output
        batch_size: Number of pages to process before clearing memory (default 5)
        conversion_output_folder: Base folder for conversion outputs
    """
    try:
        from paddleocr import PaddleOCRVL
        import fitz  # PyMuPDF
    except ImportError as e:
        return {
            "success": False,
            "error": f"Required package not installed: {str(e)}. Please install: pip install paddleocr pymupdf"
        }

    # Track PROCESS start time (never changes)
    process_start_time = time.time()
    start_time = process_start_time

    # Detect hardware
    device, precision, hardware_info = detect_hardware()

    # Send hardware info to UI
    print(json.dumps({"type": "hardware_info", "data": hardware_info}), file=sys.stderr, flush=True)

    # Find all compatible files
    input_path = Path(input_dir)
    all_files = list(input_path.iterdir())
    file_paths = [str(f) for f in all_files if f.is_file()]

    compatible_files, incompatible_files = check_file_compatibility(file_paths)

    # Send file compatibility report
    if incompatible_files:
        print(json.dumps({
            "type": "file_validation",
            "compatible": len(compatible_files),
            "incompatible": len(incompatible_files),
            "incompatible_details": incompatible_files,
            "warning": f"{len(incompatible_files)} file(s) are not compatible with PaddleOCR-VL (PDF/images only)"
        }), file=sys.stderr, flush=True)

        if not compatible_files:
            return {
                "success": False,
                "error": "No compatible files found. PaddleOCR-VL only supports PDFs and images."
            }

    # Create subfolder for PaddleOCR outputs
    paddleocr_output_base = Path(conversion_output_folder) / "paddleocr"
    paddleocr_output_base.mkdir(parents=True, exist_ok=True)

    all_chunks = []
    total_pages_processed = 0

    # Process each compatible file
    for file_idx, file_path in enumerate(compatible_files, 1):
        file_name = Path(file_path).stem
        file_ext = Path(file_path).suffix.lower()

        # Send file progress
        print(json.dumps({
            "type": "progress",
            "current": file_idx,
            "total": len(compatible_files),
            "file": Path(file_path).name,
            "status": "starting",
            "device": device,
            "hardware": hardware_info["hardware"],
            "total_elapsed": int(time.time() - process_start_time)
        }), file=sys.stderr, flush=True)

        # Create output directory for this file
        file_output_dir = paddleocr_output_base / file_name
        file_output_dir.mkdir(parents=True, exist_ok=True)

        # Create pages directory for page images
        pages_dir = file_output_dir / "pages"
        pages_dir.mkdir(exist_ok=True)

        # Convert to images if PDF
        image_paths = []
        page_count = 0

        if file_ext == '.pdf':
            print(json.dumps({"info": f"Converting PDF to images: {Path(file_path).name}"}),
                  file=sys.stderr, flush=True)

            pdf_doc = fitz.open(file_path)
            page_count = len(pdf_doc)

            for page_num in range(page_count):
                page = pdf_doc[page_num]
                pix = page.get_pixmap(dpi=200)
                img_path = pages_dir / f"page_{page_num + 1}.png"
                pix.save(str(img_path))
                image_paths.append(str(img_path))

                # Explicitly free pixmap memory
                del pix

                # Aggressive garbage collection every 50 pages during conversion
                if (page_num + 1) % 50 == 0:
                    gc.collect()
                    print(json.dumps({"info": f"Memory cleanup at page {page_num + 1}"}),
                          file=sys.stderr, flush=True)

                # Send progress update every 10 pages
                if (page_num + 1) % 10 == 0 or page_num == page_count - 1:
                    print(json.dumps({
                        "type": "progress",
                        "current": file_idx,
                        "total": len(compatible_files),
                        "file": Path(file_path).name,
                        "status": "converting",
                        "phase": "pdf_to_images",
                        "page": page_num + 1,
                        "total_pages": page_count,
                        "device": device,
                        "hardware": hardware_info["hardware"],
                        "total_elapsed": int(time.time() - process_start_time)
                    }), file=sys.stderr, flush=True)

            pdf_doc.close()
            # Final cleanup after PDF conversion
            gc.collect()
            print(json.dumps({"info": f"Converted {page_count} pages, memory cleaned"}),
                  file=sys.stderr, flush=True)

        else:
            # Single image file
            page_count = 1
            # Copy image to pages directory
            import shutil
            img_path = pages_dir / f"page_1{file_ext}"
            shutil.copy(file_path, img_path)
            image_paths = [str(img_path)]

        # Calculate batches
        num_batches = (page_count + batch_size - 1) // batch_size

        print(json.dumps({
            "info": f"Processing in {num_batches} batch(es) of up to {batch_size} pages each"
        }), file=sys.stderr, flush=True)

        # Process in batches
        for batch_idx in range(num_batches):
            batch_start = batch_idx * batch_size
            batch_end = min((batch_idx + 1) * batch_size, page_count)

            print(json.dumps({
                "type": "progress",
                "current": file_idx,
                "total": len(compatible_files),
                "file": Path(file_path).name,
                "status": "converting",
                "current_batch": batch_idx + 1,
                "total_batches": num_batches,
                "total_pages": page_count,
                "pages": f"{batch_start + 1}-{batch_end}",
                "page": batch_start + 1,  # Show starting page of batch
                "device": device,
                "hardware": hardware_info["hardware"],
                "total_elapsed": int(time.time() - process_start_time)
            }), file=sys.stderr, flush=True)

            # Initialize PaddleOCR-VL for this batch
            pipeline = PaddleOCRVL(
                use_doc_orientation_classify=True,
                use_doc_unwarping=True,
                use_layout_detection=True,
                use_chart_recognition=True,
                format_block_content=True,
                device=device,
                precision=precision,
            )

            # Process pages in this batch
            for page_idx in range(batch_start, batch_end):
                page_num = page_idx + 1
                page_start_time = time.time()

                # Send update that we're starting this specific page
                print(json.dumps({
                    "type": "progress",
                    "current": file_idx,
                    "total": len(compatible_files),
                    "file": Path(file_path).name,
                    "status": "processing",
                    "page": page_num,
                    "total_pages": page_count,
                    "device": device,
                    "hardware": hardware_info["hardware"],
                    "total_elapsed": int(time.time() - process_start_time)
                }), file=sys.stderr, flush=True)

                try:
                    img_path = image_paths[page_idx]
                    output = pipeline.predict(img_path)

                    if output and len(output) > 0:
                        result = output[0]

                        # Save detailed results
                        page_dir = file_output_dir / f"page_{page_num}"
                        page_dir.mkdir(exist_ok=True)

                        result.save_to_markdown(save_path=str(page_dir))
                        result.save_to_json(save_path=str(page_dir))

                        # Extract text content
                        md_files = list(page_dir.glob("*.md"))
                        page_text = ""
                        if md_files:
                            with open(md_files[0], 'r', encoding='utf-8') as f:
                                page_text = f.read()

                        # Get extracted images info
                        imgs_dir = page_dir / "imgs"
                        extracted_images = []
                        if imgs_dir.exists():
                            for img_file in imgs_dir.glob("*.jpg"):
                                # Extract bbox from filename: img_in_TYPE_box_X_Y_W_H.jpg
                                parts = img_file.stem.split('_')
                                if 'box' in parts:
                                    box_idx = parts.index('box')
                                    if len(parts) > box_idx + 4:
                                        bbox = [int(parts[box_idx + 1]), int(parts[box_idx + 2]),
                                               int(parts[box_idx + 3]), int(parts[box_idx + 4])]
                                        extracted_images.append({
                                            "path": str(img_file.relative_to(Path(conversion_output_folder))),
                                            "bbox": bbox
                                        })

                        # Create chunk for this page
                        chunk = {
                            "text": page_text,
                            "metadata": {
                                "source": Path(file_path).name,
                                "page": page_num,
                                "total_pages": page_count,
                                "processor": "paddleocr-vl",
                                "page_image": str(Path(img_path).relative_to(Path(conversion_output_folder))),
                                "extracted_images": extracted_images
                            },
                            "tokens": len(page_text.split())  # Rough estimate
                        }

                        all_chunks.append(chunk)
                        total_pages_processed += 1

                        page_time = time.time() - page_start_time
                        print(json.dumps({
                            "type": "progress",
                            "current": file_idx,
                            "total": len(compatible_files),
                            "file": Path(file_path).name,
                            "status": "processing",
                            "page": page_num,
                            "total_pages": page_count,
                            "page_time_seconds": round(page_time, 2),
                            "device": device,
                            "hardware": hardware_info["hardware"],
                            "total_elapsed": int(time.time() - process_start_time)
                        }), file=sys.stderr, flush=True)

                except Exception as e:
                    print(json.dumps({
                        "error": f"Failed to process page {page_num}: {str(e)}"
                    }), file=sys.stderr, flush=True)
                    continue

            # Clear memory after batch
            del pipeline
            clear_gpu_memory()

            if batch_idx < num_batches - 1:
                time.sleep(2)  # Brief pause between batches

        # Save file-specific outputs
        file_chunks = [c for c in all_chunks if c["metadata"]["source"] == Path(file_path).name]

        # Save chunks.json for this file
        file_chunks_data = {
            "method": "paddleocr-vl",
            "chunks": file_chunks,
            "total_chunks": len(file_chunks),
            "original_file": Path(file_path).name,
            "total_pages": page_count
        }

        with open(file_output_dir / "chunks.json", 'w', encoding='utf-8') as f:
            json.dump(file_chunks_data, f, indent=2)

        print(json.dumps({
            "type": "progress",
            "current": file_idx,
            "total": len(compatible_files),
            "file": Path(file_path).name,
            "status": "completed",
            "chunks": len(file_chunks),
            "total_pages": page_count,
            "device": device,
            "hardware": hardware_info["hardware"],
            "total_elapsed": int(time.time() - process_start_time)
        }), file=sys.stderr, flush=True)

    # Save combined chunks
    output_dir = Path(output_file).parent
    output_dir.mkdir(parents=True, exist_ok=True)

    total_time = time.time() - start_time

    final_data = {
        "method": "paddleocr-vl",
        "chunks": all_chunks,
        "total_chunks": len(all_chunks),
        "processing_summary": {
            "files_processed": len(compatible_files),
            "total_pages": total_pages_processed,
            "total_conversion_time_seconds": round(total_time, 2),
            "avg_time_per_page": round(total_time / total_pages_processed, 2) if total_pages_processed > 0 else 0,
            "device": device,
            "precision": precision,
            "hardware": hardware_info["hardware"],
            "completed_at": time.strftime("%Y-%m-%d %H:%M:%S")
        }
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, indent=2)

    print(json.dumps({
        "type": "progress",
        "status": "completed",
        "total_chunks": len(all_chunks),
        "total_pages": total_pages_processed,
        "total_elapsed": int(time.time() - process_start_time)
    }), file=sys.stderr, flush=True)

    return {
        "success": True,
        "chunks_count": len(all_chunks),
        "files_processed": len(compatible_files),
        "output_file": output_file,
        "conversion_output_folder": str(paddleocr_output_base)
    }


def main():
    if len(sys.argv) < 3:
        print(json.dumps({
            "success": False,
            "error": "Usage: paddleocr_chunker.py <input_dir> <output_file> [batch_size] [conversion_output_folder]"
        }))
        sys.exit(1)

    input_dir = sys.argv[1]
    output_file = sys.argv[2]
    batch_size = int(sys.argv[3]) if len(sys.argv) > 3 else 5
    conversion_output_folder = sys.argv[4] if len(sys.argv) > 4 else 'conversions/'

    result = process_with_paddleocr_vl(input_dir, output_file, batch_size, conversion_output_folder)
    print(json.dumps(result))


if __name__ == "__main__":
    main()
