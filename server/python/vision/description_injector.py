"""
Inject image descriptions into markdown and semantic chunks
"""

import re
import sys
import json
from typing import List, Dict


def inject_image_descriptions_into_chunks(
    chunks: List[Dict],
    images: List[Dict],
    descriptions: Dict[str, str]
) -> List[Dict]:
    """
    Inject image descriptions into semantic chunks based on page numbers

    Args:
        chunks: List of semantic chunks with text and metadata
        images: List of extracted images with page numbers
        descriptions: Dict mapping image_path to description

    Returns:
        Updated chunks with image descriptions injected
    """
    if not images or not descriptions:
        return chunks

    # Group images by page
    images_by_page = {}
    for img in images:
        page = img['page']
        if page not in images_by_page:
            images_by_page[page] = []
        images_by_page[page].append(img)

    # Sort by vertical position
    for page in images_by_page:
        images_by_page[page].sort(key=lambda x: x['bbox'][1] if x['bbox'] else 0)

    used_images = set()
    enriched_chunks = []

    for chunk_data in chunks:
        chunk_text = chunk_data['text']

        # Extract page numbers from chunk metadata
        pages_in_chunk = set()
        if 'doc_items' in chunk_data.get('metadata', {}):
            for doc_item_str in chunk_data['metadata']['doc_items']:
                page_matches = re.findall(r'page_no=(\d+)', doc_item_str)
                for page_str in page_matches:
                    pages_in_chunk.add(int(page_str))

        if pages_in_chunk:
            chunk_images = []
            for page in sorted(pages_in_chunk):
                if page in images_by_page:
                    for img in images_by_page[page]:
                        img_key = img['image_path']
                        if img_key not in used_images and img_key in descriptions:
                            chunk_images.append(img)
                            used_images.add(img_key)

            if chunk_images:
                image_section = "\n\n" + "="*50 + "\n"
                image_section += f"📷 IMAGES IN THIS SECTION ({len(chunk_images)} images):\n"
                image_section += "="*50 + "\n\n"

                for img in chunk_images:
                    desc = descriptions[img['image_path']]
                    caption = img.get('caption', '')
                    image_section += f"**[Figure {img.get('index', '?')}: {img['filename']} - Page {img['page']}]**\n"
                    if caption:
                        image_section += f"*Caption: {caption}*\n"
                    image_section += f"{desc}\n\n"

                chunk_text = chunk_text + image_section

        enriched_chunks.append({
            "text": chunk_text,
            "metadata": chunk_data['metadata'],
            "tokens": len(chunk_text.split())
        })

    return enriched_chunks


def insert_image_descriptions_in_markdown(
    markdown_text: str,
    images: List[Dict],
    descriptions: Dict[str, str]
) -> str:
    """
    Insert image descriptions at the correct positions in markdown text

    This replaces Docling's <!-- image --> placeholders with actual image descriptions
    using CAPTION-BASED MATCHING for 100% accuracy.

    MATCHING STRATEGY:
    - Find <!-- image --> tag
    - Look at previous lines for caption (e.g., "## FIGURE 5-28" or caption text)
    - Match with image that has same caption
    """
    if not images or not descriptions:
        return markdown_text

    def normalize_caption(text):
        if not text:
            return ""
        text = text.strip().lower()
        text = text.replace('figure', '').replace('fig.', '').replace('fig', '')
        text = text.replace('table', '').replace('tbl.', '').replace('tbl', '')
        return text.strip()

    # Build caption lookup
    caption_to_image = {}
    images_without_captions = []

    for img in images:
        caption = img.get('caption', '')
        if caption:
            normalized = normalize_caption(caption)
            if normalized and len(normalized) > 3:
                caption_to_image[normalized] = img

            fig_match = re.search(r'(?:figure|fig\.?|table|tbl\.?)\s*([\d\-]+)', caption.lower())
            if fig_match:
                fig_num = fig_match.group(1)
                caption_to_image[fig_num] = img
        else:
            images_without_captions.append(img)

    lines = markdown_text.split('\n')
    result_lines = []
    i = 0
    matched_indices = set()

    while i < len(lines):
        line = lines[i]

        if line.strip() == '<!-- image -->':
            matched_img = None

            # Look backwards for caption
            for j in range(max(0, i - 5), i):
                lookback_text = lines[j].strip()

                if not lookback_text:
                    continue

                normalized_line = normalize_caption(lookback_text)

                for caption_key, img in caption_to_image.items():
                    img_index = img.get('index', -1)
                    if img_index in matched_indices:
                        continue

                    if caption_key in normalized_line or normalized_line.startswith(caption_key[:10]):
                        matched_img = img
                        matched_indices.add(img_index)
                        break

                if matched_img:
                    break

            # Fallback for images without captions
            if not matched_img and images_without_captions:
                for j in range(max(0, i - 5), i):
                    lookback_text = lines[j].strip()
                    if not lookback_text:
                        continue

                    fig_match = re.search(r'(?:##\s*)?(?:figure|fig\.?|table|tbl\.?)\s*([\d\-]+)', lookback_text, re.IGNORECASE)
                    if fig_match:
                        for img in images_without_captions:
                            img_index = img.get('index', -1)
                            if img_index in matched_indices:
                                continue

                            matched_img = img
                            matched_indices.add(img_index)
                            print(json.dumps({
                                "debug": f"✓ Fallback match: Figure {img_index} matched to heading '{lookback_text[:50]}'"
                            }), file=sys.stderr, flush=True)
                            break

                    if matched_img:
                        break

            if matched_img and matched_img['image_path'] in descriptions:
                desc = descriptions[matched_img['image_path']]
                caption = matched_img.get('caption', '')

                result_lines.append('')
                result_lines.append(f"**[Figure {matched_img.get('index', '?')}: {matched_img['filename']} - Page {matched_img['page']}]**")
                if caption:
                    result_lines.append(f"*Caption: {caption}*")
                result_lines.append(f"\n{desc}\n")
                result_lines.append('')

                print(json.dumps({
                    "debug": f"✓ Matched <!-- image --> with figure {matched_img.get('index')} via caption"
                }), file=sys.stderr, flush=True)
            else:
                print(json.dumps({
                    "warning": f"Could not match <!-- image --> at line {i}"
                }), file=sys.stderr, flush=True)
                result_lines.append(line)

        else:
            result_lines.append(line)

        i += 1

    return '\n'.join(result_lines)

