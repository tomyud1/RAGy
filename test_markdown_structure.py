#!/usr/bin/env python3
"""
Examine the actual markdown structure around <!-- image --> tags
"""
import sys
from pathlib import Path

chunk_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk007_p61-70.pdf"

from docling.document_converter import DocumentConverter

converter = DocumentConverter()
print("Converting PDF...\n", file=sys.stderr)
result = converter.convert(chunk_path)
doc = result.document

# Get markdown
markdown = doc.export_to_markdown()

# Find all <!-- image --> tags and show context
lines = markdown.split('\n')

print("="*60)
print("MARKDOWN STRUCTURE AROUND <!-- image --> TAGS")
print("="*60)

for i, line in enumerate(lines):
    if '<!-- image -->' in line:
        print(f"\n--- IMAGE TAG at line {i} ---")
        # Show 3 lines before and 5 lines after
        start = max(0, i - 3)
        end = min(len(lines), i + 6)

        for j in range(start, end):
            prefix = ">>> " if j == i else "    "
            print(f"{prefix}{j:4d}: {lines[j][:100]}")

        # Get caption from metadata for comparison
        # Count which image tag this is
        tag_index = sum(1 for l in lines[:i] if '<!-- image -->' in l)

        if tag_index < len(doc.pictures):
            pic = doc.pictures[tag_index]
            caption = pic.caption_text(doc) if hasattr(pic, 'caption_text') and callable(pic.caption_text) else 'N/A'
            print(f"    Metadata caption: '{caption}'")
