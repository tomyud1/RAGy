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
from pathlib import Path

try:
    from docling.document_converter import DocumentConverter
    from docling.chunking import HybridChunker
    from docling.datamodel.base_models import InputFormat
    import pypdf
except ImportError as e:
    print(json.dumps({
        "success": False,
        "error": f"Required package not installed: {str(e)}. Please install with: pip install docling pypdf"
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


def send_conversion_heartbeat(idx, total_files, filename, total_pages, interval=2):
    """
    Send heartbeat updates during PDF conversion to show the process is active.
    
    Based on benchmarks: M3 Macs process ~1.26-1.5 seconds per page
    We use 1.5 seconds per page as conservative estimate for regular M3 (not Pro/Max)
    
    NOTE: Docling's converter.convert() is a black-box operation with no progress hooks.
    We can only show:
    1. That the process is running (not frozen)
    2. Elapsed time vs estimated time
    3. Estimated completion time
    """
    start_time = time.time()
    SECONDS_PER_PAGE = 1.5  # Conservative estimate for M3 MacBook
    
    while getattr(threading.current_thread(), "do_run", True):
        time.sleep(interval)
        if not getattr(threading.current_thread(), "do_run", True):
            break
        
        elapsed = int(time.time() - start_time)
        
        # Calculate estimates
        estimated_total_seconds = int(total_pages * SECONDS_PER_PAGE) if total_pages > 0 else 0
        remaining_seconds = max(0, estimated_total_seconds - elapsed)
        progress_percent = min(95, (elapsed / estimated_total_seconds * 100)) if estimated_total_seconds > 0 else 0
        
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
            "heartbeat": True
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


def chunk_documents(input_dir, output_file, max_tokens=512, merge_peers=True, enable_formula=True, enable_picture_classification=False, enable_picture_description=False, enable_code_enrichment=False, enable_ocr=True, enable_table_structure=True):
    """
    Process documents in input_dir and save chunks to output_file
    
    Args:
        input_dir: Directory containing documents to process
        output_file: Path to save JSON output
        max_tokens: Maximum tokens per chunk
        merge_peers: Whether to merge consecutive chunks with same headers
        enable_formula: Enable LaTeX formula extraction (recommended for technical docs)
        enable_picture_classification: Classify images as charts, diagrams, etc.
        enable_picture_description: Generate descriptions for images (slower, uses vision models)
        enable_code_enrichment: Extract and format code blocks with syntax preservation
        enable_ocr: Extract text from scanned documents and images
        enable_table_structure: Extract and preserve table structure
    """
    try:
        # Initialize converter with optimized settings for M1/M2/M3 Macs
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        from docling.datamodel.base_models import InputFormat
        from docling.document_converter import PdfFormatOption
        
        # Configure pipeline options with enrichments
        pipeline_options = PdfPipelineOptions()
        
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
            # Use lightweight SmolVLM model for faster processing on M-series Macs
            try:
                from docling.datamodel.pipeline_options import smolvlm_picture_description
                pipeline_options.do_picture_description = True
                pipeline_options.picture_description_options = smolvlm_picture_description()
                print(json.dumps({"info": "Picture description enabled using SmolVLM (256M model)"}), file=sys.stderr, flush=True)
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
        
        # Process each document
        total_files = len(document_files)
        for idx, doc_path in enumerate(document_files, 1):
            try:
                # Get page count for PDFs
                page_count = None
                if doc_path.suffix.lower() == '.pdf':
                    page_count = get_pdf_page_count(str(doc_path))
                
                # Send initial progress update
                initial_progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "converting",
                    "total_pages": page_count or 0,
                    "elapsed": 0
                }
                print(json.dumps(initial_progress), file=sys.stderr, flush=True)
                sys.stderr.flush()
                
                # Start heartbeat thread to show we're working
                # Note: Docling doesn't provide progress hooks, so we can only show elapsed time
                heartbeat_thread = threading.Thread(
                    target=send_conversion_heartbeat,
                    args=(idx, total_files, doc_path.name, page_count or 0, 2),
                    daemon=True
                )
                heartbeat_thread.do_run = True
                heartbeat_thread.start()
                
                try:
                    # Convert document (this can take 5-10 minutes for large PDFs!)
                    # NOTE: This is a black-box operation - Docling doesn't expose page-by-page progress
                    result = converter.convert(str(doc_path))
                    doc = result.document
                finally:
                    # Stop heartbeat
                    heartbeat_thread.do_run = False
                    heartbeat_thread.join(timeout=1)
                
                # Send completion for converting phase
                converted_progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "converted",
                    "total_pages": page_count or 0
                }
                print(json.dumps(converted_progress), file=sys.stderr, flush=True)
                sys.stderr.flush()
                
                # Chunk the document with progress reporting
                # chunker.chunk() returns a generator, so we can report progress as chunks are generated
                chunks = []
                chunk_count = 0
                
                # Estimate total chunks (rough estimate based on doc size)
                # We'll update this as we go
                for chunk in chunker.chunk(doc):
                    chunks.append(chunk)
                    chunk_count += 1
                    
                    # Send progress update for every chunk
                    # This gives real-time feedback
                    chunking_progress = {
                        "type": "progress",
                        "current": idx,
                        "total": total_files,
                        "file": doc_path.name,
                        "status": "chunking",
                        "chunks_so_far": chunk_count
                    }
                    print(json.dumps(chunking_progress), file=sys.stderr, flush=True)
                    sys.stderr.flush()
                
                # Send chunking complete for this file
                chunked_progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "chunked",
                    "chunks": len(chunks)
                }
                print(json.dumps(chunked_progress), file=sys.stderr, flush=True)
                sys.stderr.flush()
                
                # Convert chunks to our format
                for chunk in chunks:
                    chunk_text = chunk.text if hasattr(chunk, 'text') else str(chunk)
                    
                    # Extract metadata
                    metadata = {
                        "source": doc_path.name,
                    }
                    
                    # Try to get additional metadata if available
                    if hasattr(chunk, 'meta'):
                        if hasattr(chunk.meta, 'doc_items'):
                            metadata["doc_items"] = [str(item) for item in chunk.meta.doc_items]
                        if hasattr(chunk.meta, 'headings'):
                            metadata["headings"] = chunk.meta.headings
                    
                    all_chunks.append({
                        "text": chunk_text,
                        "metadata": metadata,
                        "tokens": len(chunk_text.split())  # Rough estimate
                    })
                
                processed_files.append(doc_path.name)
                
                # Send completion update for this file
                progress = {
                    "type": "progress",
                    "current": idx,
                    "total": total_files,
                    "file": doc_path.name,
                    "status": "completed",
                    "chunks": len(chunks)
                }
                print(json.dumps(progress), file=sys.stderr, flush=True)
                sys.stderr.flush()  # Ensure immediate flush
                
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
        
        # Send finalizing status update
        finalizing_progress = {
            "type": "progress",
            "current": total_files,
            "total": total_files,
            "file": "All files processed",
            "status": "finalizing",
            "chunks": len(all_chunks)
        }
        print(json.dumps(finalizing_progress), file=sys.stderr, flush=True)
        sys.stderr.flush()  # Ensure immediate flush
        
        # Send saving status update
        saving_progress = {
            "type": "progress",
            "current": total_files,
            "total": total_files,
            "file": f"Saving {len(all_chunks)} chunks to disk...",
            "status": "saving",
            "chunks": len(all_chunks)
        }
        print(json.dumps(saving_progress), file=sys.stderr, flush=True)
        sys.stderr.flush()  # Ensure immediate flush
        
        # Save chunks to output file
        output_data = {
            "method": "docling-hybrid",
            "config": {
                "max_tokens": max_tokens,
                "merge_peers": merge_peers,
                "formula_enrichment": enable_formula,
                "picture_classification": enable_picture_classification,
                "picture_description": enable_picture_description
            },
            "processed_files": processed_files,
            "chunks": all_chunks,
            "stats": {
                "total_chunks": len(all_chunks),
                "total_files": len(processed_files),
                "avg_tokens": sum(c["tokens"] for c in all_chunks) // len(all_chunks) if all_chunks else 0
            }
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
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
            "error": "Usage: docling_chunker.py <input_dir> <output_file> [max_tokens] [merge_peers] [enable_formula] [enable_picture_classification] [enable_picture_description] [enable_code_enrichment] [enable_ocr] [enable_table_structure]"
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
    
    result = chunk_documents(input_dir, output_file, max_tokens, merge_peers, enable_formula, enable_picture_classification, enable_picture_description, enable_code_enrichment, enable_ocr, enable_table_structure)
    print(json.dumps(result))


if __name__ == "__main__":
    main()

