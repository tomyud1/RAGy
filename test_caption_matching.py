#!/usr/bin/env python3
"""
Test caption-based matching robustness
Shows that even if figure #5 fails to render, others still match correctly
"""

# Simulate markdown with 5 figures
markdown_text = """
Some text here...

<!-- image -->

## FIGURE 1-50

A step-by-step approach

More text...

<!-- image -->

## FIGURE 1-51

Another figure

<!-- image -->

## FIGURE 1-52

The results obtained

<!-- image -->

## FIGURE 1-53

Neatness and organization

<!-- image -->

## FIGURE 1-54

Final figure
"""

# Simulate extracted images - FIGURE 1-52 (index 2) failed to render!
images = [
    {
        'index': 0,
        'caption': 'FIGURE 1-50 A step-by-step approach can greatly',
        'filename': 'fig0_page1_vector.png',
        'page': 1,
        'image_path': '/tmp/fig0.png'
    },
    {
        'index': 1,
        'caption': 'FIGURE 1-51',
        'filename': 'fig1_page2_vector.png',
        'page': 2,
        'image_path': '/tmp/fig1.png'
    },
    # index 2 MISSING - failed to render!
    {
        'index': 3,
        'caption': 'FIGURE 1-53 Neatness and organization are highly valued',
        'filename': 'fig3_page2_vector.png',
        'page': 2,
        'image_path': '/tmp/fig3.png'
    },
    {
        'index': 4,
        'caption': 'FIGURE 1-54 and more efficient writer',
        'filename': 'fig4_page3_vector.png',
        'page': 3,
        'image_path': '/tmp/fig4.png'
    },
]

# Mock descriptions
descriptions = {
    '/tmp/fig0.png': 'Description of figure 0',
    '/tmp/fig1.png': 'Description of figure 1',
    '/tmp/fig3.png': 'Description of figure 3',
    '/tmp/fig4.png': 'Description of figure 4',
}

# Import and test the function
import sys
sys.path.insert(0, '/Users/tomeryud/projects/RAGy/server/python')
from image_processor import insert_image_descriptions_in_markdown

print("Testing caption-based matching with missing figure...")
print("=" * 60)
print(f"Total <!-- image --> tags in markdown: 5")
print(f"Total images extracted: {len(images)} (FIGURE 1-52 failed to render)")
print("=" * 60)

result = insert_image_descriptions_in_markdown(markdown_text, images, descriptions)

print("\n" + result)

# Verify correct matches
print("\n" + "=" * 60)
print("VERIFICATION:")
print("=" * 60)
if 'FIGURE 1-50' in result and 'Description of figure 0' in result:
    print("✓ FIGURE 1-50 matched correctly")
else:
    print("✗ FIGURE 1-50 NOT matched")

if 'FIGURE 1-51' in result and 'Description of figure 1' in result:
    print("✓ FIGURE 1-51 matched correctly")
else:
    print("✗ FIGURE 1-51 NOT matched")

if 'FIGURE 1-53' in result and 'Description of figure 3' in result:
    print("✓ FIGURE 1-53 matched correctly (even though fig2 failed!)")
else:
    print("✗ FIGURE 1-53 NOT matched")

if 'FIGURE 1-54' in result and 'Description of figure 4' in result:
    print("✓ FIGURE 1-54 matched correctly")
else:
    print("✗ FIGURE 1-54 NOT matched")

# Check that FIGURE 1-52 still has its placeholder
if '<!-- image -->' in result and 'FIGURE 1-52' in result:
    # Count how many unmatched placeholders
    unmatched_count = result.count('<!-- image -->')
    print(f"\n✓ FIGURE 1-52 kept as placeholder (expected 1 unmatched, found {unmatched_count})")
else:
    print("\n? FIGURE 1-52 handling unclear")
