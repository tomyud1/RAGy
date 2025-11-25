"""
Main orchestrator for docling document chunking
This module coordinates all the sub-modules and provides the main entry point
"""

import sys
import json
import time
import signal
import threading
from pathlib import Path

# Import from sub-modules
from .progress_tracker import ProgressTracker, send_conversion_heartbeat
from .pdf_utils import get_pdf_page_count, split_pdf
from .resume_manager import save_progress, load_progress, clear_progress
from .output_writer import append_chunks_to_file, save_markdown_to_file, save_metadata_to_file
from .converter_config import create_converter, log_hardware_info

# Global flag for graceful shutdown
STOP_REQUESTED = False


def signal_handler(sig, frame):
    """Handle stop signal gracefully"""
    global STOP_REQUESTED
    STOP_REQUESTED = True
    print(json.dumps({"info": "Stop requested - will finish current chunk and exit gracefully"}), file=sys.stderr, flush=True)


def get_supported_extensions():
    """Return list of file extensions supported by Docling"""
    return [
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


def find_documents(input_dir):
    """Find all supported documents in input directory"""
    input_path = Path(input_dir)
    document_files = []
    
    for ext in get_supported_extensions():
        document_files.extend(input_path.glob(f'*{ext}'))
        document_files.extend(input_path.glob(f'*{ext.upper()}'))
    
    return document_files


def process_single_chunk(chunk_path, doc_path, chunk_idx, total_chunks, idx, total_files,
                         converter, chunker, page_count, detected_device, enrichments_count,
                         process_start_time, enable_picture_description, picture_description_max_tokens,
                         vision_backend, vision_model, conversion_output_folder, max_tokens, merge_peers,
                         enable_formula, enable_ocr, enable_table_structure):
    """Process a single PDF chunk and return the results"""
    from .progress_tracker import send_conversion_heartbeat
    
    # Import image processor if needed
    try:
        from image_processor import (
            process_document_with_images, 
            insert_image_descriptions_in_markdown,
            inject_image_descriptions_into_chunks
        )
    except ImportError:
        process_document_with_images = None
        insert_image_descriptions_in_markdown = None
        inject_image_descriptions_into_chunks = None
    
    chunk_page_count = get_pdf_page_count(chunk_path) if chunk_path.endswith('.pdf') else page_count
    
    # Send initial progress
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
        "elapsed": 0,
        "total_elapsed": int(time.time() - process_start_time)
    }
    print(json.dumps(initial_progress), file=sys.stderr, flush=True)
    sys.stderr.flush()
    
    # Start heartbeat thread
    heartbeat_thread = threading.Thread(
        target=send_conversion_heartbeat,
        args=(idx, total_files, f"{doc_path.name} (chunk {chunk_idx}/{total_chunks})",
              chunk_page_count or 0, 2, enrichments_count, detected_device, process_start_time),
        daemon=True
    )
    heartbeat_thread.do_run = True
    heartbeat_thread.start()
    
    try:
        result = converter.convert(chunk_path)
        doc = result.document
    finally:
        heartbeat_thread.do_run = False
        heartbeat_thread.join(timeout=1)
    
    # Send converted status
    converted_progress = {
        "type": "progress",
        "current": idx,
        "total": total_files,
        "file": doc_path.name,
        "status": "converted",
        "current_chunk": chunk_idx,
        "total_chunks": total_chunks,
        "total_pages": page_count or 0,
        "total_elapsed": int(time.time() - process_start_time)
    }
    print(json.dumps(converted_progress), file=sys.stderr, flush=True)
    sys.stderr.flush()
    
    # Image processing
    extracted_images = []
    image_descriptions = {}
    
    if chunk_path.endswith('.pdf') and process_document_with_images:
        try:
            extracted_images, image_descriptions = process_document_with_images(
                chunk_path,
                conversion_output_folder,
                doc=doc,
                enable_description=enable_picture_description,
                max_tokens=picture_description_max_tokens,
                vision_backend=vision_backend,
                vision_model=vision_model
            )
            
            if enable_picture_description and extracted_images and not image_descriptions:
                raise ValueError(f"Failed to generate image descriptions for {len(extracted_images)} images")
            elif enable_picture_description and extracted_images and image_descriptions:
                print(json.dumps({
                    "info": f"✓ Generated {len(image_descriptions)} image descriptions successfully"
                }), file=sys.stderr, flush=True)
        except Exception as e:
            if enable_picture_description:
                raise
            else:
                print(json.dumps({"warning": f"Image extraction failed: {e}"}), file=sys.stderr, flush=True)
    
    # Export markdown
    markdown_text = ""
    try:
        markdown_text = doc.export_to_markdown()
        
        if extracted_images and image_descriptions and insert_image_descriptions_in_markdown:
            print(json.dumps({
                "info": f"Inserting {len(image_descriptions)} image descriptions into markdown..."
            }), file=sys.stderr, flush=True)
            
            markdown_text = insert_image_descriptions_in_markdown(
                markdown_text,
                extracted_images,
                image_descriptions
            )
        
        # Save markdown
        doc_name = Path(chunk_path).stem
        output_base = Path(conversion_output_folder) / doc_name
        output_base.mkdir(parents=True, exist_ok=True)
        
        md_filename = f"full_document_chunk{chunk_idx}.md" if total_chunks > 1 else "full_document.md"
        md_path = output_base / md_filename
        save_markdown_to_file(markdown_text, str(md_path))
        
        print(json.dumps({"info": f"Saved full markdown to: {md_path}"}), file=sys.stderr, flush=True)
        
    except Exception as e:
        print(json.dumps({"warning": f"Failed to export markdown: {e}"}), file=sys.stderr, flush=True)
    
    # Chunk the document
    chunk_count = 0
    pdf_chunk_results = []
    
    for chunk in chunker.chunk(doc):
        chunk_count += 1
        
        chunking_progress = {
            "type": "progress",
            "current": idx,
            "total": total_files,
            "file": doc_path.name,
            "status": "chunking",
            "current_chunk": chunk_idx,
            "total_chunks": total_chunks,
            "chunks_so_far": chunk_count,
            "total_elapsed": int(time.time() - process_start_time)
        }
        print(json.dumps(chunking_progress), file=sys.stderr, flush=True)
        sys.stderr.flush()
        
        chunk_text = chunk.text if hasattr(chunk, 'text') else str(chunk)
        
        metadata = {
            "source": doc_path.name,
            "chunk_part": f"{chunk_idx}/{total_chunks}" if total_chunks > 1 else None
        }
        
        if hasattr(chunk, 'meta'):
            if hasattr(chunk.meta, 'doc_items'):
                metadata["doc_items"] = [str(item) for item in chunk.meta.doc_items]
            if hasattr(chunk.meta, 'headings'):
                metadata["headings"] = chunk.meta.headings
        
        pdf_chunk_results.append({
            "text": chunk_text,
            "metadata": metadata,
            "tokens": len(chunk_text.split())
        })
    
    # Inject image descriptions into chunks
    if extracted_images and image_descriptions and inject_image_descriptions_into_chunks:
        print(json.dumps({
            "info": f"💉 Injecting {len(image_descriptions)} image descriptions into {len(pdf_chunk_results)} semantic chunks..."
        }), file=sys.stderr, flush=True)
        
        pdf_chunk_results = inject_image_descriptions_into_chunks(
            pdf_chunk_results,
            extracted_images,
            image_descriptions
        )
        
        print(json.dumps({
            "info": "✓ Image descriptions injected into semantic chunks successfully"
        }), file=sys.stderr, flush=True)
    
    return pdf_chunk_results, len(extracted_images)


def chunk_documents(input_dir, output_file, max_tokens=512, merge_peers=True, 
                    enable_formula=True, enable_picture_classification=False,
                    enable_picture_description=False, enable_code_enrichment=False,
                    enable_ocr=True, enable_table_structure=True,
                    picture_description_max_tokens=800, resume=False,
                    vision_batch_size=4, processing_batch_size=4,
                    vision_backend='auto', conversion_output_folder='conversions/',
                    vision_model='smolvlm'):
    """
    Process documents in input_dir and save chunks to output_file INCREMENTALLY

    Args:
        input_dir: Directory containing documents to process
        output_file: Path to save JSON output
        max_tokens: Maximum tokens per chunk
        merge_peers: Whether to merge consecutive chunks with same headers
        enable_formula: Enable LaTeX formula extraction
        enable_picture_classification: Classify images
        enable_picture_description: Generate descriptions for images
        enable_code_enrichment: Extract and format code blocks
        enable_ocr: Extract text from scanned documents
        enable_table_structure: Extract and preserve table structure
        picture_description_max_tokens: Max tokens per image description
        resume: If True, resume from saved progress
        vision_batch_size: Batch size for vision model
        processing_batch_size: Batch size for OCR/layout/table
        vision_backend: 'auto', 'transformers', 'mlx'
        conversion_output_folder: Output folder for conversions
        vision_model: 'smolvlm' or 'gemini-2.0-flash'
    """
    global STOP_REQUESTED
    
    process_start_time = time.time()
    
    # Create docling subfolder
    docling_output_base = Path(conversion_output_folder) / 'docling'
    docling_output_base.mkdir(parents=True, exist_ok=True)
    conversion_output_folder = str(docling_output_base)
    
    # Register signal handlers
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    try:
        # Import chunker
        from docling.chunking import HybridChunker
        
        # Create converter
        converter, pipeline_options, detected_device = create_converter(
            enable_formula=enable_formula,
            enable_picture_classification=enable_picture_classification,
            enable_picture_description=enable_picture_description,
            enable_code_enrichment=enable_code_enrichment,
            enable_ocr=enable_ocr,
            enable_table_structure=enable_table_structure,
            picture_description_max_tokens=picture_description_max_tokens,
            vision_batch_size=vision_batch_size,
            processing_batch_size=processing_batch_size,
            vision_backend=vision_backend,
            vision_model=vision_model
        )
        
        # Log hardware info
        log_hardware_info(pipeline_options, detected_device, processing_batch_size, enable_picture_description)
        
        # Initialize chunker
        chunker = HybridChunker(
            tokenizer="bert-base-uncased",
            max_tokens=max_tokens,
            merge_peers=merge_peers
        )
        
        all_chunks = []
        processed_files = []
        chunks_by_document = {}
        
        processing_stats = {
            "files_by_type": {},
            "total_conversion_time": 0,
            "start_time": time.time(),
            "output_files": {"images": 0, "markdown_files": 0}
        }
        
        # Find documents
        document_files = find_documents(input_dir)
        
        if not document_files:
            return {
                "success": False,
                "error": f"No supported documents found in {input_dir}"
            }
        
        # Check for resume
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
        
        # Save config for resume
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
        
        total_files = len(document_files)
        enrichments_count = sum([
            enable_formula, enable_picture_classification, enable_picture_description,
            enable_code_enrichment, enable_ocr, enable_table_structure
        ])
        
        # Process each document
        for idx, doc_path in enumerate(document_files, 1):
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
            
            if idx < start_file_idx:
                continue
            
            try:
                file_ext = doc_path.suffix.lower()
                file_type = file_ext.replace('.', '')
                
                if file_type not in processing_stats["files_by_type"]:
                    processing_stats["files_by_type"][file_type] = {"count": 0, "pages": 0}
                processing_stats["files_by_type"][file_type]["count"] += 1
                
                page_count = None
                pdf_chunks = [str(doc_path)]
                
                if doc_path.suffix.lower() == '.pdf':
                    page_count = get_pdf_page_count(str(doc_path))
                    if page_count:
                        processing_stats["files_by_type"][file_type]["pages"] += page_count
                    
                    if page_count and page_count > 20:
                        pdf_chunks = split_pdf(str(doc_path), pages_per_chunk=10)
                
                total_chunks = len(pdf_chunks)
                
                for chunk_idx, chunk_path in enumerate(pdf_chunks, 1):
                    if STOP_REQUESTED:
                        save_progress(output_file, completed_chunk_paths, idx, total_files, config)
                        return {
                            "success": False,
                            "error": "Stopped by user",
                            "resumable": True,
                            "completed_parts": len(completed_chunk_paths)
                        }
                    
                    if chunk_path in completed_chunk_paths:
                        print(json.dumps({
                            "info": f"Skipping already completed chunk: {Path(chunk_path).name}"
                        }), file=sys.stderr, flush=True)
                        continue
                    
                    # Process the chunk
                    pdf_chunk_results, images_count = process_single_chunk(
                        chunk_path, doc_path, chunk_idx, total_chunks, idx, total_files,
                        converter, chunker, page_count, detected_device, enrichments_count,
                        process_start_time, enable_picture_description, picture_description_max_tokens,
                        vision_backend, vision_model, conversion_output_folder, max_tokens, merge_peers,
                        enable_formula, enable_ocr, enable_table_structure
                    )
                    
                    processing_stats["output_files"]["images"] += images_count
                    processing_stats["output_files"]["markdown_files"] += 1
                    
                    # Save incrementally
                    is_first = (idx == 1 and chunk_idx == 1 and len(completed_chunk_paths) == 0)
                    save_success = append_chunks_to_file(output_file, pdf_chunk_results, is_first_write=is_first)
                    
                    if save_success:
                        all_chunks.extend(pdf_chunk_results)
                        
                        chunk_base_name = Path(chunk_path).stem
                        if chunk_base_name not in chunks_by_document:
                            chunks_by_document[chunk_base_name] = {
                                "chunks": [],
                                "original_document": doc_path.name
                            }
                        chunks_by_document[chunk_base_name]["chunks"].extend(pdf_chunk_results)
                        
                        # Save to conversion folder
                        try:
                            output_base = Path(conversion_output_folder) / chunk_base_name
                            output_base.mkdir(parents=True, exist_ok=True)
                            
                            chunks_copy_path = output_base / "chunks.json"
                            doc_chunks_data = {
                                "method": "docling-hybrid",
                                "chunks": pdf_chunk_results,
                                "total_chunks": len(pdf_chunk_results),
                                "original_document": doc_path.name,
                                "pdf_chunk": chunk_base_name,
                                "config": config
                            }
                            
                            with open(chunks_copy_path, 'w', encoding='utf-8') as f:
                                json.dump(doc_chunks_data, f, indent=2)
                            
                            # Create metadata
                            import re
                            chunk_match = re.search(r'_chunk(\d+)_', chunk_base_name)
                            md_filename = f"full_document_chunk{int(chunk_match.group(1))}.md" if chunk_match else "full_document.md"
                            
                            metadata = {
                                "original_document": doc_path.name,
                                "pdf_chunk": chunk_base_name,
                                "total_chunks": len(pdf_chunk_results),
                                "config": config,
                                "outputs": {
                                    "full_markdown": str(output_base / md_filename),
                                    "images_folder": str(output_base / "images"),
                                    "semantic_chunks": str(chunks_copy_path)
                                }
                            }
                            
                            save_metadata_to_file(metadata, str(output_base / "metadata.json"))
                            
                        except Exception as e:
                            import traceback
                            print(json.dumps({
                                "warning": f"Failed to save to conversion folder: {e}",
                                "traceback": traceback.format_exc()
                            }), file=sys.stderr, flush=True)
                        
                        completed_chunk_paths.append(chunk_path)
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
                            "completed_parts": len(completed_chunk_paths),
                            "total_elapsed": int(time.time() - process_start_time)
                        }
                        print(json.dumps(saved_progress), file=sys.stderr, flush=True)
                
                processed_files.append(doc_path.name)
                
                progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "completed",
                    "total_chunks_so_far": len(all_chunks),
                    "total_elapsed": int(time.time() - process_start_time)
                }
                print(json.dumps(progress), file=sys.stderr, flush=True)
                
            except Exception as e:
                progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "error",
                    "error": str(e),
                    "total_elapsed": int(time.time() - process_start_time)
                }
                print(json.dumps(progress), file=sys.stderr, flush=True)
                continue
        
        if not all_chunks:
            return {
                "success": False,
                "error": "No chunks generated from documents"
            }
        
        clear_progress(output_file)
        
        processing_stats["total_conversion_time"] = time.time() - processing_stats["start_time"]
        processing_stats["total_chunks"] = len(all_chunks)
        
        # Update output file with stats
        try:
            with open(output_file, 'r') as f:
                final_data = json.load(f)
            
            final_data["processing_summary"] = {
                "files_processed": processing_stats["files_by_type"],
                "total_conversion_time_seconds": round(processing_stats["total_conversion_time"], 2),
                "output_files": processing_stats["output_files"],
                "total_chunks": processing_stats["total_chunks"],
                "completed_at": time.strftime("%Y-%m-%d %H:%M:%S")
            }
            
            with open(output_file, 'w') as f:
                json.dump(final_data, f, indent=2)
        except Exception as e:
            print(json.dumps({"warning": f"Failed to add processing stats: {e}"}), file=sys.stderr, flush=True)
        
        print(json.dumps({
            "info": "✅ Conversion completed successfully",
            "total_semantic_chunks": len(all_chunks)
        }), file=sys.stderr, flush=True)
        
        return {
            "success": True,
            "chunks_count": len(all_chunks),
            "files_processed": len(processed_files),
            "output_file": output_file,
            "conversion_output_folder": conversion_output_folder,
            "processing_stats": processing_stats
        }
        
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

