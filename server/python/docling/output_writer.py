"""
Output file writing utilities for chunks and markdown
"""

import sys
import json


def append_chunks_to_file(output_file, chunks, is_first_write=False):
    """
    Append chunks to the output file incrementally

    Args:
        output_file: Path to JSON output file
        chunks: List of chunks to append
        is_first_write: True if this is the first write (creates file), False to append
    
    Returns:
        True if successful, False otherwise
    """
    try:
        if is_first_write:
            output_data = {
                "method": "docling-hybrid",
                "chunks": chunks,
                "total_chunks": len(chunks)
            }
            with open(output_file, 'w') as f:
                json.dump(output_data, f, indent=2)
        else:
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


def save_markdown_to_file(markdown_text, output_path):
    """
    Save markdown content to a file
    
    Args:
        markdown_text: The markdown content
        output_path: Path to save the file
    
    Returns:
        True if successful, False otherwise
    """
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(markdown_text)
        return True
    except Exception as e:
        print(json.dumps({"error": f"Failed to save markdown: {str(e)}"}), file=sys.stderr, flush=True)
        return False


def save_metadata_to_file(metadata, output_path):
    """
    Save metadata JSON to a file
    
    Args:
        metadata: The metadata dict
        output_path: Path to save the file
    
    Returns:
        True if successful, False otherwise
    """
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(metadata, f, indent=2)
        return True
    except Exception as e:
        print(json.dumps({"error": f"Failed to save metadata: {str(e)}"}), file=sys.stderr, flush=True)
        return False

