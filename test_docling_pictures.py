#!/usr/bin/env python3
"""Test script to explore docling's picture metadata structure"""
import sys
import json
from pathlib import Path

# Use a chunk that we know has images
chunk_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk007_p61-70.pdf"

if not Path(chunk_path).exists():
    print(f"ERROR: Test PDF not found: {chunk_path}", file=sys.stderr)
    sys.exit(1)

from docling.document_converter import DocumentConverter

converter = DocumentConverter()
print(f"Converting {chunk_path}...", file=sys.stderr)
result = converter.convert(chunk_path)
doc = result.document

print("\n=== Document Attributes ===", file=sys.stderr)
attrs = [attr for attr in dir(doc) if not attr.startswith('_')]
print(f"Available attributes: {attrs[:20]}", file=sys.stderr)

# Check for picture-related attributes
picture_attrs = [attr for attr in attrs if 'picture' in attr.lower() or 'image' in attr.lower() or 'figure' in attr.lower()]
print(f"\nPicture-related attributes: {picture_attrs}", file=sys.stderr)

# Try accessing picture items
if hasattr(doc, 'pictures'):
    print(f"\n✓ doc.pictures exists: {type(doc.pictures)}", file=sys.stderr)
    print(f"  Number of pictures: {len(doc.pictures) if hasattr(doc.pictures, '__len__') else 'N/A'}", file=sys.stderr)

    # Inspect first picture in detail
    if len(doc.pictures) > 0:
        print(f"\n=== First Picture Details ===", file=sys.stderr)
        pic = doc.pictures[0]
        print(f"Type: {type(pic)}", file=sys.stderr)
        pic_attrs = [attr for attr in dir(pic) if not attr.startswith('_')]
        print(f"Attributes: {pic_attrs}", file=sys.stderr)

        # Check for common metadata
        if hasattr(pic, 'prov'):
            print(f"\n✓ Provenance (prov):", file=sys.stderr)
            print(f"  {pic.prov}", file=sys.stderr)
            if len(pic.prov) > 0:
                prov0 = pic.prov[0]
                prov_attrs = [attr for attr in dir(prov0) if not attr.startswith('_')]
                print(f"  Prov attributes: {prov_attrs}", file=sys.stderr)
                if hasattr(prov0, 'page_no'):
                    print(f"  Page number: {prov0.page_no}", file=sys.stderr)
                if hasattr(prov0, 'bbox'):
                    print(f"  Bounding box: {prov0.bbox}", file=sys.stderr)

        if hasattr(pic, 'self_ref'):
            print(f"\n✓ self_ref: {pic.self_ref}", file=sys.stderr)
        if hasattr(pic, 'caption_text'):
            print(f"\n✓ caption_text: {pic.caption_text(doc) if callable(pic.caption_text) else pic.caption_text}", file=sys.stderr)
        if hasattr(pic, 'text'):
            print(f"\n✓ text: {pic.text[:200] if pic.text else None}", file=sys.stderr)
        if hasattr(pic, 'label'):
            print(f"\n✓ label: {pic.label}", file=sys.stderr)
        if hasattr(pic, 'data'):
            print(f"\n✓ data exists: {type(pic.data)}", file=sys.stderr)
        if hasattr(pic, 'image'):
            print(f"\n✓ image (raster data): {type(pic.image)}", file=sys.stderr)
            if pic.image is None:
                print(f"  → This is a VECTOR GRAPHIC (needs rendering!)", file=sys.stderr)

        # Print summary of all pictures
        print(f"\n=== All Pictures Summary ===", file=sys.stderr)
        for idx, pic in enumerate(doc.pictures):
            page_no = pic.prov[0].page_no if pic.prov else 'N/A'
            has_raster = pic.image is not None
            caption = pic.caption_text(doc) if hasattr(pic, 'caption_text') and callable(pic.caption_text) else 'N/A'
            print(f"  Picture {idx}: page={page_no}, has_raster={has_raster}, caption={caption[:50] if caption else 'N/A'}", file=sys.stderr)

# Check document body structure
if hasattr(doc, 'body'):
    print(f"\n✓ doc.body exists", file=sys.stderr)

# Try iterating through document items
if hasattr(doc, 'iterate_items'):
    print(f"\n✓ doc.iterate_items exists", file=sys.stderr)
    pictures_found = []
    for item in doc.iterate_items():
        item_type = type(item).__name__
        if 'picture' in item_type.lower() or 'image' in item_type.lower():
            pictures_found.append(item)
            print(f"  Found picture item: {item_type}", file=sys.stderr)
            # Print attributes of first picture
            if len(pictures_found) == 1:
                pic_attrs = [attr for attr in dir(item) if not attr.startswith('_')]
                print(f"  Picture attributes: {pic_attrs[:30]}", file=sys.stderr)

                # Check for common attributes
                if hasattr(item, 'prov'):
                    print(f"  ✓ item.prov exists: {item.prov}", file=sys.stderr)
                if hasattr(item, 'self_ref'):
                    print(f"  ✓ item.self_ref exists: {item.self_ref}", file=sys.stderr)
                if hasattr(item, 'text'):
                    print(f"  ✓ item.text (caption?): {item.text[:100] if item.text else None}", file=sys.stderr)

    print(f"\nTotal pictures found via iterate_items: {len(pictures_found)}", file=sys.stderr)

# Export markdown to see how images are marked
markdown = doc.export_to_markdown()
image_tag_count = markdown.count('<!-- image -->')
print(f"\n<!-- image --> tags in markdown: {image_tag_count}", file=sys.stderr)

print("\n=== SUCCESS ===", file=sys.stderr)
