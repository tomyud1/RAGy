"""
PDF utility functions for splitting and analyzing PDFs
"""

import sys
import json
from pathlib import Path

try:
    import pypdf
except ImportError:
    pypdf = None


def get_pdf_page_count(pdf_path):
    """Get the number of pages in a PDF file"""
    if not pypdf:
        return None
    try:
        with open(pdf_path, 'rb') as f:
            pdf = pypdf.PdfReader(f)
            return len(pdf.pages)
    except Exception as e:
        return None


def split_pdf(pdf_path, pages_per_chunk=100):
    """
    Split a large PDF into smaller chunks for memory-efficient processing

    Args:
        pdf_path: Path to the PDF file
        pages_per_chunk: Number of pages per chunk (default 100)

    Returns:
        List of paths to chunk files
    """
    if not pypdf:
        return [pdf_path]
        
    try:
        with open(pdf_path, 'rb') as f:
            pdf = pypdf.PdfReader(f)
            total_pages = len(pdf.pages)

            if total_pages <= pages_per_chunk:
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

                writer = pypdf.PdfWriter()

                for page_num in range(start_page, end_page):
                    writer.add_page(pdf.pages[page_num])

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
        return [pdf_path]

