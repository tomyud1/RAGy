#!/usr/bin/env python3
"""
Docling-based document chunker service
Processes documents and returns chunks in JSON format
"""

import sys
import json
import os
import threading
import time
import logging
import io
import signal
from pathlib import Path

# Global flag for graceful shutdown
STOP_REQUESTED = False

def signal_handler(sig, frame):
    """Handle stop signal gracefully"""
    global STOP_REQUESTED
    STOP_REQUESTED = True
    print(json.dumps({"info": "Stop requested - will finish current chunk and exit gracefully"}), file=sys.stderr, flush=True)

try:
    from docling.document_converter import DocumentConverter
    from docling.chunking import HybridChunker
    from docling.datamodel.base_models import InputFormat
    import pypdf
    import psutil
except ImportError as e:
    print(json.dumps({
        "success": False,
        "error": f"Required package not installed: {str(e)}. Please install with: pip install docling pypdf psutil"
    }))
    sys.exit(1)

class ProgressTracker:
    """Thread-safe progress tracker for monitoring conversion progress"""
    def __init__(self):
        self.current_page = 0
        self.total_pages = 0
        self.lock = threading.Lock()
    
    def set_total(self, total):
        with self.lock:
            self.total_pages = total
    
    def update_page(self, page):
        with self.lock:
            self.current_page = page
    
    def get_progress(self):
        with self.lock:
            if self.total_pages == 0:
                return 0.0
            return (self.current_page / self.total_pages) * 100


def send_conversion_heartbeat(idx, total_files, filename, total_pages, interval=2, enrichments_enabled=0, device_type='unknown'):
    """
    Send heartbeat updates during PDF conversion to show the process is active.

    Based on benchmarks: M3 Macs process ~1.26-1.5 seconds per page
    We use 1.5 seconds per page as conservative estimate for regular M3 (not Pro/Max)

    NOTE: Docling's converter.convert() is a black-box operation with no progress hooks.
    We can only show:
    1. That the process is running (not frozen)
    2. Elapsed time vs estimated time
    3. Estimated completion time

    Enrichments significantly increase processing time:
    - Each enrichment adds ~0.5-2 seconds per page
    - AI Image Descriptions can add 5-10 seconds per page with images
    """
    start_time = time.time()

    # Adjust time estimate based on enabled enrichments
    # Base: 1.5s/page, each enrichment adds time
    BASE_SECONDS_PER_PAGE = 1.5
    enrichment_multiplier = 1.0 + (enrichments_enabled * 0.5)  # Each enrichment adds 50% more time
    if enrichments_enabled >= 5:  # If many enrichments enabled, use more conservative estimate
        enrichment_multiplier = 4.0  # 4x slower with all enrichments

    SECONDS_PER_PAGE = BASE_SECONDS_PER_PAGE * enrichment_multiplier

    process = psutil.Process(os.getpid())

    def get_gpu_usage():
        """Get GPU usage percentage - cross-platform best effort"""
        try:
            # For NVIDIA GPUs (CUDA)
            if device_type.startswith('cuda'):
                try:
                    import pynvml
                    pynvml.nvmlInit()
                    handle = pynvml.nvmlDeviceGetHandleByIndex(0)
                    utilization = pynvml.nvmlDeviceGetUtilizationRates(handle)
                    return utilization.gpu
                except:
                    pass

            # For Apple Silicon (MPS) - no direct API available
            # GPU usage visible in Activity Monitor but not programmatically accessible
            # without sudo/elevated permissions
            return None
        except:
            return None

    while getattr(threading.current_thread(), "do_run", True):
        time.sleep(interval)
        if not getattr(threading.current_thread(), "do_run", True):
            break

        elapsed = int(time.time() - start_time)

        # Calculate estimates
        estimated_total_seconds = int(total_pages * SECONDS_PER_PAGE) if total_pages > 0 else 0
        remaining_seconds = max(0, estimated_total_seconds - elapsed)
        progress_percent = min(95, (elapsed / estimated_total_seconds * 100)) if estimated_total_seconds > 0 else 0

        # Get memory and CPU usage to prove process is active
        try:
            # Track memory for parent process
            mem_info = process.memory_info()
            cpu_percent = process.cpu_percent(interval=0.1)
            memory_mb = mem_info.rss / 1024 / 1024  # Convert to MB

            # Also track child processes (Docling spawns workers for vision models)
            try:
                children = process.children(recursive=True)
                for child in children:
                    try:
                        child_mem = child.memory_info()
                        memory_mb += child_mem.rss / 1024 / 1024
                    except (psutil.NoSuchProcess, psutil.AccessDenied):
                        pass
            except:
                pass
        except:
            cpu_percent = 0
            memory_mb = 0

        # Get GPU usage (NVIDIA only - MPS not accessible without sudo)
        gpu_percent = get_gpu_usage()

        # Send heartbeat to show we're alive
        progress = {
            "type": "progress",
            "current": idx,
            "total": total_files,
            "file": filename,
            "status": "converting",
            "total_pages": total_pages,
            "elapsed": elapsed,
            "estimated_total": estimated_total_seconds,
            "remaining": remaining_seconds,
            "percent": round(progress_percent, 1),
            "heartbeat": True,
            "cpu_percent": round(cpu_percent, 1),
            "memory_mb": round(memory_mb, 1),
            "gpu_percent": round(gpu_percent, 1) if gpu_percent is not None else None,
            "is_active": cpu_percent > 0,  # If CPU > 0, process is actively working
            "device": device_type  # Show what hardware is being used
        }
        print(json.dumps(progress), file=sys.stderr, flush=True)
        sys.stderr.flush()


def get_pdf_page_count(pdf_path):
    """Get the number of pages in a PDF file"""
    try:
        with open(pdf_path, 'rb') as f:
            pdf = pypdf.PdfReader(f)
            return len(pdf.pages)
    except Exception as e:
        return None


def get_progress_file_path(output_file):
    """Get the path to the progress file for resuming"""
    output_path = Path(output_file)
    return output_path.parent / f".progress_{output_path.stem}.json"


def save_progress(output_file, completed_chunks, current_file_idx, total_files, config):
    """
    Save progress to disk for resuming later

    Args:
        output_file: Path to the output chunks file
        completed_chunks: List of completed chunk paths
        current_file_idx: Current file being processed
        total_files: Total number of files
        config: Configuration dict
    """
    progress_file = get_progress_file_path(output_file)
    progress_data = {
        "output_file": output_file,
        "completed_chunks": completed_chunks,
        "current_file_idx": current_file_idx,
        "total_files": total_files,
        "config": config,
        "timestamp": time.time()
    }
    try:
        with open(progress_file, 'w') as f:
            json.dump(progress_data, f, indent=2)
    except Exception as e:
        print(json.dumps({"error": f"Failed to save progress: {str(e)}"}), file=sys.stderr, flush=True)


def load_progress(output_file):
    """
    Load progress from disk if resuming

    Returns:
        Progress data dict or None if no progress exists
    """
    progress_file = get_progress_file_path(output_file)
    if not progress_file.exists():
        return None

    try:
        with open(progress_file, 'r') as f:
            progress_data = json.load(f)

        # Check if progress is recent (within 7 days)
        age_days = (time.time() - progress_data.get("timestamp", 0)) / 86400
        if age_days > 7:
            print(json.dumps({"info": "Progress file too old (>7 days), starting fresh"}), file=sys.stderr, flush=True)
            return None

        return progress_data
    except Exception as e:
        print(json.dumps({"error": f"Failed to load progress: {str(e)}"}), file=sys.stderr, flush=True)
        return None


def clear_progress(output_file):
    """Clear progress file after successful completion"""
    progress_file = get_progress_file_path(output_file)
    try:
        if progress_file.exists():
            progress_file.unlink()
    except:
        pass


def split_pdf(pdf_path, pages_per_chunk=100):
    """
    Split a large PDF into smaller chunks for memory-efficient processing

    Args:
        pdf_path: Path to the PDF file
        pages_per_chunk: Number of pages per chunk (default 100)

    Returns:
        List of paths to chunk files
    """
    try:
        with open(pdf_path, 'rb') as f:
            pdf = pypdf.PdfReader(f)
            total_pages = len(pdf.pages)

            if total_pages <= pages_per_chunk:
                # No need to split
                return [pdf_path]

            # Create temp directory for chunks
            pdf_name = Path(pdf_path).stem
            temp_dir = Path(pdf_path).parent / f".chunks_{pdf_name}"
            temp_dir.mkdir(exist_ok=True)

            chunk_paths = []
            num_chunks = (total_pages + pages_per_chunk - 1) // pages_per_chunk

            print(json.dumps({
                "info": f"Splitting {total_pages}-page PDF into {num_chunks} chunks of ~{pages_per_chunk} pages",
                "reason": "Large PDF with AI descriptions - processing in chunks to prevent out-of-memory"
            }), file=sys.stderr, flush=True)

            for chunk_idx in range(num_chunks):
                start_page = chunk_idx * pages_per_chunk
                end_page = min(start_page + pages_per_chunk, total_pages)

                # Create writer for this chunk
                writer = pypdf.PdfWriter()

                # Add pages to this chunk
                for page_num in range(start_page, end_page):
                    writer.add_page(pdf.pages[page_num])

                # Save chunk
                chunk_path = temp_dir / f"{pdf_name}_chunk{chunk_idx+1:03d}_p{start_page+1}-{end_page}.pdf"
                with open(chunk_path, 'wb') as chunk_file:
                    writer.write(chunk_file)

                chunk_paths.append(str(chunk_path))

                print(json.dumps({
                    "info": f"Created chunk {chunk_idx+1}/{num_chunks}: pages {start_page+1}-{end_page}"
                }), file=sys.stderr, flush=True)

            return chunk_paths

    except Exception as e:
        print(json.dumps({
            "error": f"Failed to split PDF: {str(e)}"
        }), file=sys.stderr, flush=True)
        return [pdf_path]  # Fall back to processing whole file


def append_chunks_to_file(output_file, chunks, is_first_write=False):
    """
    Append chunks to the output file incrementally

    Args:
        output_file: Path to JSON output file
        chunks: List of chunks to append
        is_first_write: True if this is the first write (creates file), False to append
    """
    try:
        if is_first_write:
            # First write: create file with metadata and start chunks array
            output_data = {
                "method": "docling-hybrid",
                "chunks": chunks,
                "total_chunks": len(chunks)
            }
            with open(output_file, 'w') as f:
                json.dump(output_data, f, indent=2)
        else:
            # Subsequent writes: read existing, append chunks, write back
            with open(output_file, 'r') as f:
                output_data = json.load(f)

            output_data["chunks"].extend(chunks)
            output_data["total_chunks"] = len(output_data["chunks"])

            with open(output_file, 'w') as f:
                json.dump(output_data, f, indent=2)

        return True
    except Exception as e:
        print(json.dumps({"error": f"Failed to save chunks: {str(e)}"}), file=sys.stderr, flush=True)
        return False


def chunk_documents(input_dir, output_file, max_tokens=512, merge_peers=True, enable_formula=True, enable_picture_classification=False, enable_picture_description=False, enable_code_enrichment=False, enable_ocr=True, enable_table_structure=True, picture_description_max_tokens=100, resume=False, vision_batch_size=4, processing_batch_size=4):
    """
    Process documents in input_dir and save chunks to output_file INCREMENTALLY

    Args:
        input_dir: Directory containing documents to process
        output_file: Path to save JSON output (saved after each PDF chunk)
        max_tokens: Maximum tokens per chunk
        merge_peers: Whether to merge consecutive chunks with same headers
        enable_formula: Enable LaTeX formula extraction (recommended for technical docs)
        enable_picture_classification: Classify images as charts, diagrams, etc.
        enable_picture_description: Generate descriptions for images (slower, uses vision models)
        enable_code_enrichment: Extract and format code blocks with syntax preservation
        enable_ocr: Extract text from scanned documents and images
        enable_table_structure: Extract and preserve table structure
        picture_description_max_tokens: Max tokens to generate per image description (50-200, lower=faster)
        resume: If True, resume from saved progress
        vision_batch_size: Batch size for vision model (1-32, default 4, higher=faster but more VRAM)
        processing_batch_size: Batch size for OCR/layout/table (1-32, default 4, higher=faster but more RAM)
    """
    global STOP_REQUESTED

    # Register signal handler for graceful stop
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    try:
        # Initialize converter with optimized settings for M1/M2/M3 Macs
        from docling.datamodel.pipeline_options import (
            PdfPipelineOptions,
            AcceleratorOptions,
            PictureDescriptionVlmOptions
        )
        from docling.datamodel.base_models import InputFormat
        from docling.document_converter import PdfFormatOption

        # Configure accelerator with auto-detection for cross-platform compatibility
        # Will automatically select: CUDA (NVIDIA), MPS (Apple Silicon), or CPU
        accelerator_options = AcceleratorOptions(
            device='auto',  # Auto-detect best available device
            num_threads=8   # Optimize for modern CPUs (adjust based on cores)
        )

        # CRITICAL: Use configurable batch sizes to balance speed vs memory
        # Large batch sizes = faster for small docs, but cause OOM on large docs
        # Docling loads entire batches into RAM simultaneously
        pipeline_options = PdfPipelineOptions(
            accelerator_options=accelerator_options,
            # User-configurable batch sizes for performance tuning
            ocr_batch_size=processing_batch_size,       # User-defined (default: 4)
            layout_batch_size=processing_batch_size,    # User-defined (default: 4)
            table_batch_size=processing_batch_size      # User-defined (default: 4)
        )
        
        # Enable formula enrichment for mathematical equations
        if enable_formula:
            pipeline_options.do_formula_enrichment = True
            print(json.dumps({"info": "Formula enrichment enabled - will extract LaTeX from equations"}), file=sys.stderr, flush=True)
        
        # Enable picture classification (identifies chart types, diagrams, etc.)
        if enable_picture_classification:
            pipeline_options.do_picture_classification = True
            print(json.dumps({"info": "Picture classification enabled"}), file=sys.stderr, flush=True)
        
        # Enable picture description (generates captions using vision models)
        if enable_picture_description:
            # Use lightweight SmolVLM model with optimized batch size for M3 GPU
            try:
                from docling.datamodel.pipeline_options import smolvlm_picture_description

                # CRITICAL: Use configurable batch size to balance speed vs memory
                # Large batches load many images into RAM/VRAM simultaneously
                # For large documents (100+ pages), large batch sizes can cause OOM
                # Default batch_size is 8, we use user-defined (default 4) for customization
                optimized_vlm_config = PictureDescriptionVlmOptions(
                    batch_size=vision_batch_size,   # User-defined (default: 4)
                    scale=2,  # Keep default
                    picture_area_threshold=0.05,  # Keep default
                    repo_id='HuggingFaceTB/SmolVLM-256M-Instruct',
                    prompt='Describe this image in a few sentences.',
                    generation_config={
                        'max_new_tokens': picture_description_max_tokens,  # User-configurable
                        'do_sample': False
                    }
                )

                pipeline_options.do_picture_description = True
                pipeline_options.picture_description_options = optimized_vlm_config
                print(json.dumps({
                    "info": "Picture description enabled using SmolVLM (256M model)",
                    "batch_size": vision_batch_size,
                    "max_tokens_per_image": picture_description_max_tokens,
                    "note": f"Batch size {vision_batch_size} - balance speed vs memory usage"
                }), file=sys.stderr, flush=True)
            except ImportError:
                print(json.dumps({"warning": "Picture description requested but SmolVLM not available"}), file=sys.stderr, flush=True)
        
        # Enable code enrichment for code blocks
        if enable_code_enrichment:
            pipeline_options.do_code_enrichment = True
            print(json.dumps({"info": "Code enrichment enabled - will extract and format code blocks"}), file=sys.stderr, flush=True)
        
        # Control OCR (text recognition for scanned documents)
        pipeline_options.do_ocr = enable_ocr
        if enable_ocr:
            print(json.dumps({"info": "OCR enabled - will extract text from scanned images"}), file=sys.stderr, flush=True)
        else:
            print(json.dumps({"info": "OCR disabled - will only extract native text"}), file=sys.stderr, flush=True)
        
        # Control table structure extraction
        pipeline_options.do_table_structure = enable_table_structure
        if enable_table_structure:
            print(json.dumps({"info": "Table structure enabled - will preserve table layouts"}), file=sys.stderr, flush=True)
        else:
            print(json.dumps({"info": "Table structure disabled - tables will be treated as plain text"}), file=sys.stderr, flush=True)
        
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
            }
        )

        # Detect and log actual hardware acceleration being used
        import torch
        from docling.utils.accelerator_utils import decide_device

        detected_device = decide_device('auto')
        actual_vision_batch = pipeline_options.picture_description_options.batch_size if enable_picture_description else "N/A"
        device_info = {
            "device": detected_device,
            "pytorch_version": torch.__version__,
            "batch_sizes": {
                "ocr": pipeline_options.ocr_batch_size,
                "layout": pipeline_options.layout_batch_size,
                "table": pipeline_options.table_batch_size,
                "vision": actual_vision_batch
            },
            "user_configured": True,
            "note": f"Using user-configured batch sizes (processing: {processing_batch_size}, vision: {actual_vision_batch})"
        }

        # Add hardware-specific info
        if detected_device == 'mps':
            device_info["hardware"] = "Apple Silicon GPU (Metal)"
            device_info["expected_speedup"] = "2-4x vs CPU"
        elif detected_device.startswith('cuda'):
            device_info["hardware"] = "NVIDIA GPU (CUDA)"
            device_info["expected_speedup"] = "3-10x vs CPU"
        else:
            device_info["hardware"] = "CPU only"
            device_info["warning"] = "No GPU acceleration - processing will be slower"

        print(json.dumps({"type": "hardware_info", "data": device_info}), file=sys.stderr, flush=True)

        # Initialize chunker
        chunker = HybridChunker(
            tokenizer="bert-base-uncased",
            max_tokens=max_tokens,
            merge_peers=merge_peers
        )
        
        all_chunks = []
        processed_files = []
        
        # Find all supported documents
        input_path = Path(input_dir)
        document_files = []
        
        # Supported formats by Docling
        supported_extensions = [
            # Documents
            '.pdf', '.docx', '.doc',
            # Spreadsheets
            '.xlsx', '.xls',
            # Presentations
            '.pptx', '.ppt',
            # Text files
            '.md', '.txt', '.rst',
            # Images (for OCR)
            '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif',
            # HTML
            '.html', '.htm'
        ]
        
        for ext in supported_extensions:
            document_files.extend(input_path.glob(f'*{ext}'))
            document_files.extend(input_path.glob(f'*{ext.upper()}'))
        
        if not document_files:
            return {
                "success": False,
                "error": f"No supported documents found in {input_dir}"
            }

        # Check for existing progress and resume if requested
        completed_chunk_paths = []
        start_file_idx = 1

        if resume:
            progress_data = load_progress(output_file)
            if progress_data:
                completed_chunk_paths = progress_data.get("completed_chunks", [])
                start_file_idx = progress_data.get("current_file_idx", 1)

                print(json.dumps({
                    "info": f"Resuming from previous session - {len(completed_chunk_paths)} chunks already completed",
                    "resuming_from_file": start_file_idx
                }), file=sys.stderr, flush=True)
            else:
                print(json.dumps({"info": "No previous progress found, starting fresh"}), file=sys.stderr, flush=True)

        # Save configuration for resume
        config = {
            "max_tokens": max_tokens,
            "merge_peers": merge_peers,
            "enable_formula": enable_formula,
            "enable_picture_classification": enable_picture_classification,
            "enable_picture_description": enable_picture_description,
            "enable_code_enrichment": enable_code_enrichment,
            "enable_ocr": enable_ocr,
            "enable_table_structure": enable_table_structure,
            "picture_description_max_tokens": picture_description_max_tokens
        }

        # Process each document
        total_files = len(document_files)
        for idx, doc_path in enumerate(document_files, 1):
            # Check for stop signal
            if STOP_REQUESTED:
                print(json.dumps({
                    "info": "Processing stopped by user - progress saved",
                    "completed_parts": len(completed_chunk_paths),
                    "can_resume": True
                }), file=sys.stderr, flush=True)
                return {
                    "success": False,
                    "error": "Stopped by user",
                    "resumable": True,
                    "completed_parts": len(completed_chunk_paths)
                }

            # Skip files before resume point
            if idx < start_file_idx:
                continue
            try:
                # Get page count for PDFs and check if splitting is needed
                page_count = None
                pdf_chunks = [str(doc_path)]  # Default: process whole file

                if doc_path.suffix.lower() == '.pdf':
                    page_count = get_pdf_page_count(str(doc_path))

                    # Split large PDFs (>200 pages) if AI descriptions are enabled
                    # This prevents out-of-memory issues on large documents
                    if page_count and page_count > 200 and enable_picture_description:
                        pdf_chunks = split_pdf(str(doc_path), pages_per_chunk=100)

                total_chunks = len(pdf_chunks)

                # Process each chunk (will be 1 chunk for small PDFs or non-PDFs)
                for chunk_idx, chunk_path in enumerate(pdf_chunks, 1):
                    # Check for stop signal before starting each chunk
                    if STOP_REQUESTED:
                        save_progress(output_file, completed_chunk_paths, idx, total_files, config)
                        print(json.dumps({
                            "info": "Processing stopped - progress saved",
                            "completed_parts": len(completed_chunk_paths)
                        }), file=sys.stderr, flush=True)
                        return {
                            "success": False,
                            "error": "Stopped by user",
                            "resumable": True,
                            "completed_parts": len(completed_chunk_paths)
                        }

                    # Skip already completed chunks
                    if chunk_path in completed_chunk_paths:
                        print(json.dumps({
                            "info": f"Skipping already completed chunk: {Path(chunk_path).name}"
                        }), file=sys.stderr, flush=True)
                        continue

                    chunk_page_count = get_pdf_page_count(chunk_path) if chunk_path.endswith('.pdf') else page_count

                    # Send initial progress update for this chunk
                    initial_progress = {
                        "type": "progress",
                        "current": idx,
                        "total": total_files,
                        "file": doc_path.name,
                        "status": "converting",
                        "total_pages": page_count or 0,
                        "current_chunk": chunk_idx,
                        "total_chunks": total_chunks,
                        "chunk_pages": chunk_page_count or 0,
                        "elapsed": 0
                    }
                    print(json.dumps(initial_progress), file=sys.stderr, flush=True)
                    sys.stderr.flush()

                    # Count enabled enrichments for better time estimation
                    enrichments_count = sum([
                        enable_formula,
                        enable_picture_classification,
                        enable_picture_description,
                        enable_code_enrichment,
                        enable_ocr,
                        enable_table_structure
                    ])

                    # Start heartbeat thread to show we're working
                    heartbeat_thread = threading.Thread(
                        target=send_conversion_heartbeat,
                        args=(idx, total_files, f"{doc_path.name} (chunk {chunk_idx}/{total_chunks})",
                              chunk_page_count or 0, 2, enrichments_count, detected_device),
                        daemon=True
                    )
                    heartbeat_thread.do_run = True
                    heartbeat_thread.start()

                    try:
                        # Convert document chunk (blackbox operation)
                        result = converter.convert(chunk_path)
                        doc = result.document
                    finally:
                        # Stop heartbeat
                        heartbeat_thread.do_run = False
                        heartbeat_thread.join(timeout=1)

                    # Send completion for converting phase of this chunk
                    converted_progress = {
                        "type": "progress",
                        "current": idx,
                        "total": total_files,
                        "file": doc_path.name,
                        "status": "converted",
                        "current_chunk": chunk_idx,
                        "total_chunks": total_chunks,
                        "total_pages": page_count or 0
                    }
                    print(json.dumps(converted_progress), file=sys.stderr, flush=True)
                    sys.stderr.flush()

                    # Chunk this PDF chunk and collect results
                    chunk_count = 0
                    pdf_chunk_results = []

                    for chunk in chunker.chunk(doc):
                        chunk_count += 1

                        # Send progress update
                        chunking_progress = {
                            "type": "progress",
                            "current": idx,
                            "total": total_files,
                            "file": doc_path.name,
                            "status": "chunking",
                            "current_chunk": chunk_idx,
                            "total_chunks": total_chunks,
                            "chunks_so_far": chunk_count
                        }
                        print(json.dumps(chunking_progress), file=sys.stderr, flush=True)
                        sys.stderr.flush()

                        # Convert chunk to our format
                        chunk_text = chunk.text if hasattr(chunk, 'text') else str(chunk)

                        # Extract metadata
                        metadata = {
                            "source": doc_path.name,
                            "chunk_part": f"{chunk_idx}/{total_chunks}" if total_chunks > 1 else None
                        }

                        # Try to get additional metadata if available
                        if hasattr(chunk, 'meta'):
                            if hasattr(chunk.meta, 'doc_items'):
                                metadata["doc_items"] = [str(item) for item in chunk.meta.doc_items]
                            if hasattr(chunk.meta, 'headings'):
                                metadata["headings"] = chunk.meta.headings

                        pdf_chunk_results.append({
                            "text": chunk_text,
                            "metadata": metadata,
                            "tokens": len(chunk_text.split())  # Rough estimate
                        })

                    # SAVE INCREMENTALLY after each PDF chunk
                    # This prevents data loss if process crashes
                    is_first = (idx == 1 and chunk_idx == 1 and len(completed_chunk_paths) == 0)
                    save_success = append_chunks_to_file(output_file, pdf_chunk_results, is_first_write=is_first)

                    if save_success:
                        all_chunks.extend(pdf_chunk_results)

                        # Mark this chunk as completed
                        completed_chunk_paths.append(chunk_path)

                        # Save progress file for resume
                        save_progress(output_file, completed_chunk_paths, idx, total_files, config)

                        saved_progress = {
                            "type": "progress",
                            "current": idx,
                            "total": total_files,
                            "file": doc_path.name,
                            "status": "saved",
                            "current_chunk": chunk_idx,
                            "total_chunks": total_chunks,
                            "chunks_from_this_part": len(pdf_chunk_results),
                            "total_chunks_so_far": len(all_chunks),
                            "completed_parts": len(completed_chunk_paths)
                        }
                        print(json.dumps(saved_progress), file=sys.stderr, flush=True)
                        sys.stderr.flush()

                # Mark file as processed after all chunks done
                processed_files.append(doc_path.name)
                
                # Send completion update for this file
                progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "completed",
                    "total_chunks_so_far": len(all_chunks)
                }
                print(json.dumps(progress), file=sys.stderr, flush=True)
                sys.stderr.flush()

            except Exception as e:
                # Send error update
                progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "error",
                    "error": str(e)
                }
                print(json.dumps(progress), file=sys.stderr, flush=True)
                # Continue with other files
                continue

        if not all_chunks:
            return {
                "success": False,
                "error": "No chunks generated from documents"
            }

        # All chunks are already saved incrementally!
        # Clear progress file since we completed successfully
        clear_progress(output_file)

        # Just send completion status
        finalizing_progress = {
            "type": "progress",
            "current": total_files,
            "total": total_files,
            "file": "All files processed",
            "status": "completed",
            "total_chunks": len(all_chunks)
        }
        print(json.dumps(finalizing_progress), file=sys.stderr, flush=True)
        sys.stderr.flush()

        # File is already saved incrementally!
        return {
            "success": True,
            "chunks_count": len(all_chunks),
            "files_processed": len(processed_files),
            "output_file": output_file
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


def main():
    if len(sys.argv) < 3:
        print(json.dumps({
            "success": False,
            "error": "Usage: docling_chunker.py <input_dir> <output_file> [max_tokens] [merge_peers] [enable_formula] [enable_picture_classification] [enable_picture_description] [enable_code_enrichment] [enable_ocr] [enable_table_structure] [picture_description_max_tokens]"
        }))
        sys.exit(1)

    input_dir = sys.argv[1]
    output_file = sys.argv[2]
    max_tokens = int(sys.argv[3]) if len(sys.argv) > 3 else 512
    merge_peers = sys.argv[4].lower() == 'true' if len(sys.argv) > 4 else True
    enable_formula = sys.argv[5].lower() == 'true' if len(sys.argv) > 5 else True  # Default to True for formulas
    enable_picture_classification = sys.argv[6].lower() == 'true' if len(sys.argv) > 6 else False
    enable_picture_description = sys.argv[7].lower() == 'true' if len(sys.argv) > 7 else False
    enable_code_enrichment = sys.argv[8].lower() == 'true' if len(sys.argv) > 8 else False
    enable_ocr = sys.argv[9].lower() == 'true' if len(sys.argv) > 9 else True  # Default to True for OCR
    enable_table_structure = sys.argv[10].lower() == 'true' if len(sys.argv) > 10 else True  # Default to True for tables
    picture_description_max_tokens = int(sys.argv[11]) if len(sys.argv) > 11 else 100  # Default 100 tokens per image
    resume = sys.argv[12].lower() == 'true' if len(sys.argv) > 12 else False  # Resume from saved progress
    vision_batch_size = int(sys.argv[13]) if len(sys.argv) > 13 else 4  # Default 4 for vision model
    processing_batch_size = int(sys.argv[14]) if len(sys.argv) > 14 else 4  # Default 4 for OCR/layout/table

    result = chunk_documents(input_dir, output_file, max_tokens, merge_peers, enable_formula, enable_picture_classification, enable_picture_description, enable_code_enrichment, enable_ocr, enable_table_structure, picture_description_max_tokens, resume, vision_batch_size, processing_batch_size)
    print(json.dumps(result))


if __name__ == "__main__":
    main()

