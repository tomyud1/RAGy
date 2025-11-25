"""
Image extraction utilities for PDFs
"""

import os
import sys
import json
from pathlib import Path
from typing import List, Dict, Optional


# Filtering thresholds
MIN_WIDTH = 100
MIN_HEIGHT = 100
MIN_AREA = 15000
MIN_FILE_SIZE = 5000


def extract_images_pymupdf(pdf_path: str, output_dir: Path) -> List[Dict]:
    """
    Extract images from PDF using PyMuPDF (direct extraction)

    Filters out small images (watermarks, logos, decorative elements) and only
    extracts meaningful figures like diagrams, charts, and schematics.

    Returns:
        List of dicts with: {
            'image_path': str,
            'page': int,
            'bbox': (x0, y0, x1, y1),
            'index': int
        }
    """
    try:
        import fitz  # PyMuPDF
        from PIL import Image
    except ImportError as e:
        error_msg = f"PyMuPDF or Pillow not installed: {e}. Install with: pip install PyMuPDF Pillow"
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    output_dir.mkdir(parents=True, exist_ok=True)
    extracted_images = []

    try:
        doc = fitz.open(pdf_path)

        for page_num in range(len(doc)):
            page = doc[page_num]
            image_list = page.get_images(full=True)

            for img_index, img in enumerate(image_list):
                xref = img[0]

                try:
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]
                    image_ext = base_image["ext"]
                    width = base_image.get("width", 0)
                    height = base_image.get("height", 0)

                    # Filter small images
                    if width < MIN_WIDTH or height < MIN_HEIGHT:
                        print(json.dumps({
                            "debug": f"Skipping small image on page {page_num + 1}: {width}x{height}px"
                        }), file=sys.stderr, flush=True)
                        continue

                    area = width * height
                    if area < MIN_AREA:
                        print(json.dumps({
                            "debug": f"Skipping low-area image on page {page_num + 1}: {area}px area"
                        }), file=sys.stderr, flush=True)
                        continue

                    if len(image_bytes) < MIN_FILE_SIZE:
                        print(json.dumps({
                            "debug": f"Skipping small file on page {page_num + 1}: {len(image_bytes)} bytes"
                        }), file=sys.stderr, flush=True)
                        continue

                    # Get image position
                    img_rects = page.get_image_rects(xref)
                    bbox = img_rects[0] if img_rects else (0, 0, 0, 0)

                    # Save image
                    image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                    image_path = output_dir / image_filename

                    with open(image_path, "wb") as img_file:
                        img_file.write(image_bytes)

                    # Verify saved image
                    try:
                        with Image.open(image_path) as pil_img:
                            actual_width, actual_height = pil_img.size

                            if actual_width < MIN_WIDTH or actual_height < MIN_HEIGHT:
                                os.remove(image_path)
                                continue
                    except Exception as verify_err:
                        print(json.dumps({
                            "warning": f"Failed to verify image {image_filename}: {verify_err}"
                        }), file=sys.stderr, flush=True)
                        if os.path.exists(image_path):
                            os.remove(image_path)
                        continue

                    extracted_images.append({
                        'image_path': str(image_path),
                        'page': page_num + 1,
                        'bbox': tuple(bbox),
                        'index': img_index + 1,
                        'filename': image_filename,
                        'width': width,
                        'height': height
                    })

                    print(json.dumps({
                        "info": f"✓ Extracted meaningful image: {image_filename} ({width}x{height}px)"
                    }), file=sys.stderr, flush=True)

                except Exception as e:
                    print(json.dumps({
                        "warning": f"Failed to extract image {img_index} from page {page_num + 1}: {e}"
                    }), file=sys.stderr, flush=True)
                    continue

        doc.close()
        return extracted_images

    except Exception as e:
        error_msg = f"Failed to extract images from PDF: {str(e)}"
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e


def render_pdf_region(pdf_path: str, page_no: int, bbox, output_path: Path) -> Optional[str]:
    """
    Render a specific region of a PDF page as an image (for vector graphics/diagrams)

    Args:
        pdf_path: Path to PDF file
        page_no: Page number (1-indexed)
        bbox: BoundingBox object from docling with (l, t, r, b) coordinates
        output_path: Where to save the rendered image

    Returns:
        Path to rendered image, or None if rendering failed
    """
    try:
        import fitz  # PyMuPDF
    except ImportError as e:
        print(json.dumps({"error": f"PyMuPDF not installed: {e}"}), file=sys.stderr, flush=True)
        return None

    try:
        doc = fitz.open(pdf_path)

        page_index = page_no - 1
        if page_index < 0 or page_index >= len(doc):
            print(json.dumps({"warning": f"Page {page_no} out of range"}), file=sys.stderr, flush=True)
            return None

        page = doc[page_index]

        # Docling uses BOTTOMLEFT origin, PyMuPDF uses TOPLEFT
        page_height = page.rect.height

        x0 = bbox.l
        y0 = page_height - bbox.t
        x1 = bbox.r
        y1 = page_height - bbox.b

        clip_rect = fitz.Rect(x0, y0, x1, y1)

        # Render at 2x resolution
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, clip=clip_rect)

        img_data = pix.tobytes("png")
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with open(output_path, "wb") as f:
            f.write(img_data)

        doc.close()

        print(json.dumps({
            "info": f"✓ Rendered vector graphic: {output_path.name} from page {page_no}"
        }), file=sys.stderr, flush=True)

        return str(output_path)

    except Exception as e:
        print(json.dumps({
            "warning": f"Failed to render PDF region on page {page_no}: {e}"
        }), file=sys.stderr, flush=True)
        return None


def extract_figures_from_docling(doc, pdf_path: str, output_dir: Path) -> List[Dict]:
    """
    Extract and render figures from docling's picture metadata

    This handles both:
    - Embedded raster images (pic.image != None)
    - Vector graphics/diagrams (pic.image == None - needs rendering)

    Args:
        doc: Docling document object
        pdf_path: Path to source PDF
        output_dir: Where to save rendered images

    Returns:
        List of dicts with figure metadata
    """
    if not hasattr(doc, 'pictures'):
        print(json.dumps({"info": "Document has no pictures attribute"}), file=sys.stderr, flush=True)
        return []

    output_dir.mkdir(parents=True, exist_ok=True)
    extracted_figures = []

    print(json.dumps({
        "info": f"Processing {len(doc.pictures)} figures from docling metadata..."
    }), file=sys.stderr, flush=True)

    for idx, pic in enumerate(doc.pictures):
        try:
            if not pic.prov or len(pic.prov) == 0:
                print(json.dumps({"warning": f"Picture {idx} has no provenance data, skipping"}),
                      file=sys.stderr, flush=True)
                continue

            page_no = pic.prov[0].page_no
            bbox = pic.prov[0].bbox
            self_ref = pic.self_ref if hasattr(pic, 'self_ref') else f'#/pictures/{idx}'

            # Get caption
            caption = ''
            if hasattr(pic, 'caption_text') and callable(pic.caption_text):
                try:
                    caption = pic.caption_text(doc)
                except:
                    pass

            has_embedded_raster = hasattr(pic, 'image') and pic.image is not None
            source_type = 'raster' if has_embedded_raster else 'vector'

            filename = f"fig{idx}_page{page_no}_{source_type}.png"
            image_path = output_dir / filename

            if has_embedded_raster:
                print(json.dumps({
                    "info": f"Skipping embedded raster at picture {idx} (not yet implemented)"
                }), file=sys.stderr, flush=True)
                continue
            else:
                rendered_path = render_pdf_region(pdf_path, page_no, bbox, image_path)
                if not rendered_path:
                    continue

            extracted_figures.append({
                'image_path': str(image_path),
                'filename': filename,
                'page': page_no,
                'bbox': bbox,
                'index': idx,
                'self_ref': self_ref,
                'caption': caption,
                'source_type': source_type,
                'width': int(bbox.r - bbox.l),
                'height': int(bbox.t - bbox.b)
            })

        except Exception as e:
            print(json.dumps({"warning": f"Failed to process picture {idx}: {e}"}),
                  file=sys.stderr, flush=True)
            continue

    print(json.dumps({
        "info": f"✓ Extracted {len(extracted_figures)} figures from docling metadata"
    }), file=sys.stderr, flush=True)

    return extracted_figures

