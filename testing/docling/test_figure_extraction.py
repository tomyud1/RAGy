#!/usr/bin/env python3
"""Test the new figure extraction and matching logic"""
import sys
import json
from pathlib import Path

# Test PDF chunk that has images
chunk_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk007_p61-70.pdf"

if not Path(chunk_path).exists():
    print(f"ERROR: Test PDF not found: {chunk_path}", file=sys.stderr)
    sys.exit(1)

from docling.document_converter import DocumentConverter
from server.python.image_processor import extract_figures_from_docling
from pathlib import Path

converter = DocumentConverter()
print(f"Converting {chunk_path}...", file=sys.stderr)
result = converter.convert(chunk_path)
doc = result.document

output_dir = Path("/tmp/test_figures")
output_dir.mkdir(exist_ok=True)

print(f"\n=== Testing Figure Extraction ===", file=sys.stderr)
figures = extract_figures_from_docling(doc, chunk_path, output_dir)

print(f"\n=== Results ===", file=sys.stderr)
print(f"Total figures extracted: {len(figures)}", file=sys.stderr)

for fig in figures:
    print(f"\nFigure {fig['index']}:", file=sys.stderr)
    print(f"  Page: {fig['page']}", file=sys.stderr)
    print(f"  Caption: {fig['caption'][:60] if fig['caption'] else 'N/A'}", file=sys.stderr)
    print(f"  Type: {fig['source_type']}", file=sys.stderr)
    print(f"  File: {fig['filename']}", file=sys.stderr)
    print(f"  Path exists: {Path(fig['image_path']).exists()}", file=sys.stderr)

# Export markdown and count image tags
markdown = doc.export_to_markdown()
image_tag_count = markdown.count('<!-- image -->')
print(f"\n<!-- image --> tags in markdown: {image_tag_count}", file=sys.stderr)
print(f"Figures extracted: {len(figures)}", file=sys.stderr)
print(f"✓ Match: {image_tag_count == len(figures)}", file=sys.stderr)

print("\n=== SUCCESS ===", file=sys.stderr)
