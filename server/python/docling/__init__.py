"""
Docling-based document chunker service
Modular package for document processing and chunking
"""

from .main import chunk_documents
from .progress_tracker import ProgressTracker
from .pdf_utils import get_pdf_page_count, split_pdf
from .resume_manager import save_progress, load_progress, clear_progress, get_progress_file_path
from .output_writer import append_chunks_to_file

__all__ = [
    'chunk_documents',
    'ProgressTracker',
    'get_pdf_page_count',
    'split_pdf',
    'save_progress',
    'load_progress',
    'clear_progress',
    'get_progress_file_path',
    'append_chunks_to_file',
]

