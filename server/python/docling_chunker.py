#!/usr/bin/env python3
"""
Docling-based document chunker service
This is a backward-compatible wrapper that imports from the modular docling package

For new code, prefer importing directly from the docling package:
    from docling import chunk_documents
"""

import sys
import json

# Re-export everything from the modular package
from docling import (
    chunk_documents,
    ProgressTracker,
    get_pdf_page_count,
    split_pdf,
    save_progress,
    load_progress,
    clear_progress,
    get_progress_file_path,
    append_chunks_to_file,
)

# Also import sub-modules for those who need them
from docling.progress_tracker import send_conversion_heartbeat
from docling.converter_config import create_converter, log_hardware_info
from docling.output_writer import save_markdown_to_file, save_metadata_to_file


def main():
    """CLI entry point - maintains backward compatibility"""
    if len(sys.argv) < 3:
        print(json.dumps({
            "success": False,
            "error": "Usage: docling_chunker.py <input_dir> <output_file> [max_tokens] [merge_peers] [enable_formula] [enable_picture_classification] [enable_picture_description] [enable_code_enrichment] [enable_ocr] [enable_table_structure] [picture_description_max_tokens] [resume] [vision_batch_size] [processing_batch_size] [vision_backend] [conversion_output_folder] [vision_model]"
        }))
        sys.exit(1)

    input_dir = sys.argv[1]
    output_file = sys.argv[2]
    max_tokens = int(sys.argv[3]) if len(sys.argv) > 3 else 512
    merge_peers = sys.argv[4].lower() == 'true' if len(sys.argv) > 4 else True
    enable_formula = sys.argv[5].lower() == 'true' if len(sys.argv) > 5 else True
    enable_picture_classification = sys.argv[6].lower() == 'true' if len(sys.argv) > 6 else False
    enable_picture_description = sys.argv[7].lower() == 'true' if len(sys.argv) > 7 else False
    enable_code_enrichment = sys.argv[8].lower() == 'true' if len(sys.argv) > 8 else False
    enable_ocr = sys.argv[9].lower() == 'true' if len(sys.argv) > 9 else True
    enable_table_structure = sys.argv[10].lower() == 'true' if len(sys.argv) > 10 else True
    picture_description_max_tokens = int(sys.argv[11]) if len(sys.argv) > 11 else 800
    resume = sys.argv[12].lower() == 'true' if len(sys.argv) > 12 else False
    vision_batch_size = int(sys.argv[13]) if len(sys.argv) > 13 else 4
    processing_batch_size = int(sys.argv[14]) if len(sys.argv) > 14 else 4
    vision_backend = sys.argv[15] if len(sys.argv) > 15 else 'auto'
    conversion_output_folder = sys.argv[16] if len(sys.argv) > 16 else 'conversions/'
    vision_model = sys.argv[17] if len(sys.argv) > 17 else 'smolvlm'

    result = chunk_documents(
        input_dir, output_file, max_tokens, merge_peers,
        enable_formula, enable_picture_classification, enable_picture_description,
        enable_code_enrichment, enable_ocr, enable_table_structure,
        picture_description_max_tokens, resume, vision_batch_size, processing_batch_size,
        vision_backend, conversion_output_folder, vision_model
    )
    print(json.dumps(result))


if __name__ == "__main__":
    main()
