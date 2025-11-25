#!/usr/bin/env python3
"""
Test if captions from docling metadata match exactly with what appears in markdown
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

# Get captions from metadata
print("="*60)
print("CAPTION COMPARISON")
print("="*60)

for idx, pic in enumerate(doc.pictures[:5]):  # First 5 only
    caption_from_metadata = pic.caption_text(doc) if hasattr(pic, 'caption_text') and callable(pic.caption_text) else 'N/A'

    print(f"\nFigure {idx}:")
    print(f"  Caption from metadata: '{caption_from_metadata}'")

    # Find corresponding section in markdown
    # Split by <!-- image --> tags
    parts = markdown.split('<!-- image -->')
    if idx + 1 < len(parts):
        # Get the section after this image tag (next ~200 chars)
        section = parts[idx + 1][:200].strip()
        # Get first few lines
        lines = [l.strip() for l in section.split('\n')[:5] if l.strip()]

        print(f"  Lines after <!-- image --> tag:")
        for i, line in enumerate(lines[:3]):
            print(f"    Line {i}: '{line}'")

        # Check if caption appears in any of these lines
        found = False
        for line in lines:
            if caption_from_metadata and caption_from_metadata.lower() in line.lower():
                found = True
                print(f"  ✓ Caption found in line: '{line}'")
                break

        if not found and caption_from_metadata != 'N/A':
            # Try partial match
            caption_start = caption_from_metadata[:20].lower()
            for line in lines:
                if caption_start in line.lower():
                    found = True
                    print(f"  ✓ Partial caption match in line: '{line}'")
                    break

        if not found and caption_from_metadata != 'N/A':
            print(f"  ⚠️  Caption NOT found in nearby lines!")

print("\n" + "="*60)
