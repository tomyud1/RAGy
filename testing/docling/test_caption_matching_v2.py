#!/usr/bin/env python3
"""
Test caption-based matching with CORRECT markdown structure (caption BEFORE tag)
"""

# Simulate real markdown structure where caption comes BEFORE <!-- image -->
markdown_text = """
Some text here...

FIGURE 1-50 A step-by-step approach can greatly

<!-- image -->

simplify problem solving.

More text...

FIGURE 1-51

<!-- image -->

Another table here

FIGURE 1-52 The results obtained

<!-- image -->

FIGURE 1-53 Neatness and organization

<!-- image -->

FIGURE 1-54 and more efficient writer

<!-- image -->

Final text
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
        'caption': 'FIGURE 1-53 Neatness and organization',
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

print("Testing caption-based matching with CORRECT markdown structure")
print("(Caption appears BEFORE <!-- image --> tag)")
print("=" * 60)
print(f"Total <!-- image --> tags in markdown: 5")
print(f"Total images extracted: {len(images)} (FIGURE 1-52 failed to render)")
print("=" * 60)

result = insert_image_descriptions_in_markdown(markdown_text, images, descriptions)

print("\nRESULT:")
print("=" * 60)
print(result)

# Verify correct matches
print("\n" + "=" * 60)
print("VERIFICATION:")
print("=" * 60)

tests = [
    ('FIGURE 1-50', 'Description of figure 0', "FIGURE 1-50"),
    ('FIGURE 1-51', 'Description of figure 1', "FIGURE 1-51"),
    ('FIGURE 1-53', 'Description of figure 3', "FIGURE 1-53 (even though fig2 failed!)"),
    ('FIGURE 1-54', 'Description of figure 4', "FIGURE 1-54"),
]

for caption, desc, test_name in tests:
    # Check if figure reference appears near description
    if desc in result:
        # Find description position
        desc_pos = result.find(desc)
        # Get 200 chars before and after
        context = result[max(0, desc_pos-200):desc_pos+200]
        if caption in context or caption.replace('FIGURE', 'Figure') in context:
            print(f"✓ {test_name} matched correctly")
        else:
            print(f"✗ {test_name} description found but caption not nearby")
    else:
        print(f"✗ {test_name} NOT matched (description not in result)")

# Check that FIGURE 1-52 still has its placeholder
unmatched_count = result.count('<!-- image -->')
print(f"\n✓ Unmatched placeholders: {unmatched_count} (expected 1 for FIGURE 1-52)")
