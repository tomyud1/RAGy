#!/usr/bin/env python3
"""
End-to-end test: Verify figure extraction, rendering, and insertion works correctly
Tests the complete flow from PDF -> figures -> descriptions -> markdown + chunks
"""
import sys
import json
import os
from pathlib import Path

# Test configuration
test_chunk_path = "/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk007_p61-70.pdf"
test_output_folder = "/tmp/test_conversions"

if not Path(test_chunk_path).exists():
    print(f"ERROR: Test PDF not found: {test_chunk_path}", file=sys.stderr)
    sys.exit(1)

# Set minimal Gemini API key for testing (won't actually call it)
os.environ['GEMINI_API_KEY'] = 'test_key'

print("=" * 70)
print("END-TO-END TEST: Figure Extraction & Description Insertion")
print("=" * 70)

# Step 1: Import required modules
sys.path.insert(0, '/Users/tomeryud/projects/RAGy/server/python')
from docling.document_converter import DocumentConverter
from image_processor import process_document_with_images, insert_image_descriptions_in_markdown
from pathlib import Path

print("\n[1/5] Converting PDF with docling...")
converter = DocumentConverter()
result = converter.convert(test_chunk_path)
doc = result.document
print(f"✓ Found {len(doc.pictures)} pictures in docling metadata")

# Step 2: Extract figures
print("\n[2/5] Extracting and rendering figures...")
extracted_images, descriptions = process_document_with_images(
    test_chunk_path,
    test_output_folder,
    doc=doc,  # Pass docling document
    enable_description=False,  # Don't call Gemini for test
    vision_model='smolvlm'
)
print(f"✓ Extracted {len(extracted_images)} figures")

# Verify figures were rendered
for img in extracted_images[:3]:  # Check first 3
    if Path(img['image_path']).exists():
        print(f"  ✓ {img['filename']} rendered successfully")
    else:
        print(f"  ✗ {img['filename']} FAILED to render")

# Step 3: Create mock descriptions for testing
print("\n[3/5] Creating mock descriptions...")
mock_descriptions = {}
for img in extracted_images:
    mock_descriptions[img['image_path']] = f"Mock description for {img.get('caption', 'figure')} on page {img['page']}"
print(f"✓ Created {len(mock_descriptions)} mock descriptions")

# Step 4: Insert descriptions into markdown
print("\n[4/5] Inserting descriptions into markdown...")
markdown_text = doc.export_to_markdown()
original_image_tag_count = markdown_text.count('<!-- image -->')
print(f"  Original markdown: {original_image_tag_count} <!-- image --> tags")

enriched_markdown = insert_image_descriptions_in_markdown(
    markdown_text,
    extracted_images,
    mock_descriptions
)

remaining_image_tag_count = enriched_markdown.count('<!-- image -->')
inserted_count = original_image_tag_count - remaining_image_tag_count
print(f"  ✓ Inserted {inserted_count} descriptions, {remaining_image_tag_count} placeholders remaining")

# Step 5: Verify captions appear near descriptions
print("\n[5/5] Verifying caption-based matching...")
success_count = 0
for img in extracted_images[:5]:  # Check first 5
    caption = img.get('caption', '')
    if not caption:
        continue

    mock_desc = mock_descriptions.get(img['image_path'])
    if mock_desc and mock_desc in enriched_markdown:
        # Find description position
        desc_pos = enriched_markdown.find(mock_desc)
        # Check if caption appears within 300 chars before description
        context = enriched_markdown[max(0, desc_pos-300):desc_pos]

        # Normalize for comparison
        caption_normalized = caption[:20].lower()
        if caption_normalized in context.lower():
            success_count += 1
            print(f"  ✓ Figure {img['index']} matched correctly")
        else:
            print(f"  ✗ Figure {img['index']} description found but caption not nearby!")
    else:
        print(f"  ⚠ Figure {img['index']} description not in markdown")

print("\n" + "=" * 70)
print(f"RESULTS: {success_count}/{min(5, len(extracted_images))} figures matched correctly")
print("=" * 70)

# Final verification
if success_count >= 3:  # At least 3 out of first 5 should match
    print("\n✅ END-TO-END TEST PASSED!")
    print(f"\nGenerated files:")
    print(f"  - Rendered figures: {test_output_folder}/*/images/")
    print(f"  - Enriched markdown: {len(enriched_markdown)} characters")
else:
    print("\n❌ END-TO-END TEST FAILED - Check matching logic")
    sys.exit(1)
