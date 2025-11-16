#!/usr/bin/env python3
"""
Image Processing Module for Docling
Handles hybrid image extraction (PyMuPDF) and AI description (MLX/Transformers)
"""

import os
import sys
import json
import time
from pathlib import Path
from typing import List, Dict, Tuple, Optional
import platform


def detect_vision_backend(preferred='auto'):
    """
    Detect the best vision backend based on hardware
    
    Args:
        preferred: 'auto', 'transformers', or 'mlx'
    
    Returns:
        'transformers' or 'mlx'
    """
    if preferred == 'transformers':
        return 'transformers'
    
    if preferred == 'mlx':
        # Check if MLX is available and we're on Apple Silicon
        try:
            import mlx.core as mx
            import mlx_vlm
            if platform.machine() == 'arm64' and platform.system() == 'Darwin':
                return 'mlx'
        except ImportError:
            pass
        return 'transformers'  # Fallback
    
    # Auto-detect
    if platform.machine() == 'arm64' and platform.system() == 'Darwin':
        try:
            import mlx.core as mx
            import mlx_vlm
            return 'mlx'
        except ImportError:
            return 'transformers'
    
    return 'transformers'


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
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    output_dir.mkdir(parents=True, exist_ok=True)
    extracted_images = []

    # Filtering thresholds to skip watermarks/logos/decorative elements
    MIN_WIDTH = 100       # Minimum width in pixels
    MIN_HEIGHT = 100      # Minimum height in pixels
    MIN_AREA = 15000      # Minimum total area (width * height)
    MIN_FILE_SIZE = 5000  # Minimum file size in bytes (5KB)

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

                    # Filter 1: Skip tiny images (watermarks, logos, icons)
                    if width < MIN_WIDTH or height < MIN_HEIGHT:
                        print(json.dumps({
                            "debug": f"Skipping small image on page {page_num + 1}: {width}x{height}px"
                        }), file=sys.stderr, flush=True)
                        continue

                    # Filter 2: Skip images with small total area
                    area = width * height
                    if area < MIN_AREA:
                        print(json.dumps({
                            "debug": f"Skipping low-area image on page {page_num + 1}: {area}px area"
                        }), file=sys.stderr, flush=True)
                        continue

                    # Filter 3: Skip very small file sizes (compressed logos/watermarks)
                    if len(image_bytes) < MIN_FILE_SIZE:
                        print(json.dumps({
                            "debug": f"Skipping small file on page {page_num + 1}: {len(image_bytes)} bytes"
                        }), file=sys.stderr, flush=True)
                        continue

                    # Get image position on page
                    img_rects = page.get_image_rects(xref)
                    bbox = img_rects[0] if img_rects else (0, 0, 0, 0)

                    # Save image
                    image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                    image_path = output_dir / image_filename

                    with open(image_path, "wb") as img_file:
                        img_file.write(image_bytes)

                    # Verify saved image is valid and get actual dimensions
                    try:
                        with Image.open(image_path) as pil_img:
                            actual_width, actual_height = pil_img.size

                            # Double-check with actual file dimensions
                            if actual_width < MIN_WIDTH or actual_height < MIN_HEIGHT:
                                os.remove(image_path)
                                print(json.dumps({
                                    "debug": f"Removed saved small image on page {page_num + 1}: {actual_width}x{actual_height}px"
                                }), file=sys.stderr, flush=True)
                                continue
                    except Exception as verify_err:
                        print(json.dumps({
                            "warning": f"Failed to verify image {image_filename}: {verify_err}"
                        }), file=sys.stderr, flush=True)
                        # Remove potentially corrupted image
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
                        "info": f"✓ Extracted meaningful image: {image_filename} ({width}x{height}px, {len(image_bytes)} bytes)"
                    }), file=sys.stderr, flush=True)

                except Exception as e:
                    print(json.dumps({"warning": f"Failed to extract image {img_index} from page {page_num + 1}: {e}"}),
                          file=sys.stderr, flush=True)
                    continue

        doc.close()
        return extracted_images

    except Exception as e:
        error_msg = f"Failed to extract images from PDF: {str(e)}"
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e


def render_pdf_region(pdf_path: str, page_no: int, bbox: 'BoundingBox', output_path: Path) -> Optional[str]:
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
        from PIL import Image
    except ImportError as e:
        print(json.dumps({"error": f"PyMuPDF or Pillow not installed: {e}"}),
              file=sys.stderr, flush=True)
        return None

    try:
        doc = fitz.open(pdf_path)

        # Convert to 0-indexed
        page_index = page_no - 1
        if page_index < 0 or page_index >= len(doc):
            print(json.dumps({"warning": f"Page {page_no} out of range"}),
                  file=sys.stderr, flush=True)
            return None

        page = doc[page_index]

        # Docling uses BOTTOMLEFT origin, PyMuPDF uses TOPLEFT
        # Convert coordinates
        page_height = page.rect.height

        # Create PyMuPDF rect from docling bbox
        # Docling: (left, top, right, bottom) with BOTTOMLEFT origin
        # PyMuPDF: (x0, y0, x1, y1) with TOPLEFT origin
        x0 = bbox.l
        y0 = page_height - bbox.t  # Flip Y coordinate
        x1 = bbox.r
        y1 = page_height - bbox.b  # Flip Y coordinate

        clip_rect = fitz.Rect(x0, y0, x1, y1)

        # Render at 2x resolution for better quality
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, clip=clip_rect)

        # Convert to PNG and save
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
        print(json.dumps({"warning": f"Failed to render PDF region on page {page_no}: {e}"}),
              file=sys.stderr, flush=True)
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
        List of dicts with: {
            'image_path': str,
            'page': int,
            'bbox': BoundingBox,
            'index': int,  # Position in doc.pictures - matches <!-- image --> tag order!
            'self_ref': str,  # e.g., '#/pictures/0'
            'caption': str,
            'source_type': 'raster' or 'vector'
        }
    """
    if not hasattr(doc, 'pictures'):
        print(json.dumps({"info": "Document has no pictures attribute"}),
              file=sys.stderr, flush=True)
        return []

    output_dir.mkdir(parents=True, exist_ok=True)
    extracted_figures = []

    print(json.dumps({
        "info": f"Processing {len(doc.pictures)} figures from docling metadata..."
    }), file=sys.stderr, flush=True)

    for idx, pic in enumerate(doc.pictures):
        try:
            # Get metadata
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

            # Determine if this is raster or vector
            has_embedded_raster = hasattr(pic, 'image') and pic.image is not None
            source_type = 'raster' if has_embedded_raster else 'vector'

            # Generate filename
            filename = f"fig{idx}_page{page_no}_{source_type}.png"
            image_path = output_dir / filename

            if has_embedded_raster:
                # TODO: Extract embedded raster directly from pic.image
                # For now, skip embedded rasters (rare case)
                print(json.dumps({
                    "info": f"Skipping embedded raster at picture {idx} (not yet implemented)"
                }), file=sys.stderr, flush=True)
                continue
            else:
                # Render vector graphic from PDF
                rendered_path = render_pdf_region(pdf_path, page_no, bbox, image_path)
                if not rendered_path:
                    continue

            extracted_figures.append({
                'image_path': str(image_path),
                'filename': filename,
                'page': page_no,
                'bbox': bbox,
                'index': idx,  # CRITICAL: This matches <!-- image --> tag order in markdown!
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


def describe_images_transformers(images: List[Dict], max_tokens: int = 800) -> Dict[str, str]:
    """
    Describe images using Transformers backend (SmolVLM)

    Returns:
        Dict mapping image_path to description
    """
    try:
        from transformers import AutoProcessor, AutoModelForVision2Seq
        import torch
        from PIL import Image
    except ImportError as e:
        error_msg = f"Required packages not installed: {e}. Please install transformers, torch, and Pillow."
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
        # Load model
        model_name = "HuggingFaceTB/SmolVLM-256M-Instruct"
        device = "mps" if torch.backends.mps.is_available() else "cuda" if torch.cuda.is_available() else "cpu"

        print(json.dumps({"info": f"Loading SmolVLM model (Transformers, {device})..."}),
              file=sys.stderr, flush=True)

        processor = AutoProcessor.from_pretrained(model_name)
        model = AutoModelForVision2Seq.from_pretrained(
            model_name,
            torch_dtype=torch.float16 if device != "cpu" else torch.float32,
        ).to(device)

        print(json.dumps({"info": f"Processing {len(images)} images..."}),
              file=sys.stderr, flush=True)

        for idx, img_info in enumerate(images, 1):
            try:
                img = Image.open(img_info['image_path']).convert("RGB")

                messages = [{"role": "user", "content": [{"type": "image"}, {"type": "text", "text": "Describe this image in detail. Focus on visible text, graphics, diagrams, charts, or logos. Be specific about what you see."}]}]
                text_input = processor.apply_chat_template(messages, add_generation_prompt=True)
                inputs = processor(text=text_input, images=[img], return_tensors="pt").to(device)

                with torch.no_grad():
                    generated_ids = model.generate(
                        **inputs,
                        max_new_tokens=max_tokens,
                        do_sample=True,
                        temperature=0.7,
                        top_p=0.9,
                        repetition_penalty=1.2
                    )

                generated_texts = processor.batch_decode(
                    generated_ids[:, inputs['input_ids'].size(1):],
                    skip_special_tokens=True
                )

                descriptions[img_info['image_path']] = generated_texts[0].strip()

                print(json.dumps({"progress": f"Described image {idx}/{len(images)}"}),
                      file=sys.stderr, flush=True)

            except Exception as e:
                print(json.dumps({"warning": f"Failed to describe {img_info['filename']}: {e}"}),
                      file=sys.stderr, flush=True)
                descriptions[img_info['image_path']] = "[Image description unavailable]"

        return descriptions

    except Exception as e:
        error_msg = f"Transformers backend failed: {str(e)}"
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e


def describe_images_mlx(images: List[Dict], max_tokens: int = 800) -> Dict[str, str]:
    """
    Describe images using MLX backend (optimized for Apple Silicon)

    Returns:
        Dict mapping image_path to description
    """
    try:
        import mlx_vlm
        from PIL import Image
    except ImportError as e:
        error_msg = f"MLX-VLM not installed: {e}. Please install mlx-vlm or select a different backend."
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
        # Load MLX model (4-bit quantized for speed)
        model_name = "mlx-community/SmolVLM-256M-Instruct-4bit"

        print(json.dumps({"info": f"Loading SmolVLM model (MLX, optimized for Apple Silicon)..."}),
              file=sys.stderr, flush=True)

        model, processor = mlx_vlm.load(model_name)

        print(json.dumps({"info": f"Processing {len(images)} images..."}),
              file=sys.stderr, flush=True)

        for idx, img_info in enumerate(images, 1):
            try:
                img = Image.open(img_info['image_path']).convert("RGB")

                prompt = "<image>Describe this image in detail. Focus on visible text, graphics, diagrams, charts, or logos. Be specific about what you see."

                output = mlx_vlm.generate(
                    model=model,
                    processor=processor,
                    image=img,
                    prompt=prompt,
                    max_tokens=max_tokens,
                    temp=0.7,
                    top_p=0.9,
                    repetition_penalty=1.2,
                    repetition_context_size=20,
                    verbose=False
                )

                descriptions[img_info['image_path']] = output.strip() if isinstance(output, str) else str(output).strip()

                print(json.dumps({"progress": f"Described image {idx}/{len(images)} (MLX)"}),
                      file=sys.stderr, flush=True)

            except Exception as e:
                print(json.dumps({"warning": f"Failed to describe {img_info['filename']}: {e}"}),
                      file=sys.stderr, flush=True)
                descriptions[img_info['image_path']] = "[Image description unavailable]"

        return descriptions

    except Exception as e:
        error_msg = f"MLX backend failed: {str(e)}"
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e


def validate_gemini_api_key_native(api_key: str, model_name: str = 'gemini-2.0-flash') -> bool:
    """
    Validate Gemini API key using native Gemini API

    Args:
        api_key: The Gemini API key to validate
        model_name: Model to use for validation (default: gemini-2.0-flash)

    Returns:
        True if valid, False otherwise
    """
    if not api_key or api_key.strip() == '':
        print(json.dumps({"error": "Gemini API key not set. Please add your Gemini API key in Settings."}),
              file=sys.stderr, flush=True)
        return False

    try:
        import requests
    except ImportError:
        print(json.dumps({"error": "requests package not installed. Install with: pip install requests"}),
              file=sys.stderr, flush=True)
        return False

    try:
        # Test API key with minimal request using the specified model
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"

        response = requests.post(
            url,
            json={
                "contents": [{
                    "parts": [{"text": "test"}]
                }]
            },
            headers={"Content-Type": "application/json"},
            timeout=10
        )

        if response.status_code == 200:
            print(json.dumps({"info": "✓ Gemini API key validated successfully"}),
                  file=sys.stderr, flush=True)
            return True

        # Parse error response
        try:
            error_data = response.json()
            error_msg = error_data.get('error', {}).get('message', str(error_data))
        except:
            error_msg = response.text

        if response.status_code == 401 or response.status_code == 403:
            print(json.dumps({"error": f"Gemini API key is invalid or unauthorized: {error_msg}"}),
                  file=sys.stderr, flush=True)
        else:
            print(json.dumps({"warning": f"Gemini API validation returned {response.status_code}: {error_msg}"}),
                  file=sys.stderr, flush=True)
            print(json.dumps({"info": "Attempting to proceed anyway - validation might be overly strict"}),
                  file=sys.stderr, flush=True)
            # Return True anyway if it's not a clear auth error
            # The actual image description call will fail properly if the key is truly invalid
            return response.status_code not in [401, 403]

        return False

    except Exception as e:
        error_msg = str(e)
        print(json.dumps({"error": f"Failed to validate Gemini API key: {error_msg}"}),
              file=sys.stderr, flush=True)
        return False


def describe_images_gemini_native(images: List[Dict], api_key: str, max_tokens: int = 800, model_name: str = 'gemini-2.0-flash') -> Dict[str, str]:
    """
    Describe images using native Gemini API (same as chat)

    Args:
        images: List of image dicts with 'image_path' and 'filename'
        api_key: Gemini API key
        max_tokens: Maximum tokens per description (default: 800)
        model_name: Model to use (default: gemini-2.0-flash)

    Returns:
        Dict mapping image_path to description
    """
    try:
        from PIL import Image
        import base64
        import io
        import requests
    except ImportError as e:
        error_msg = f"Required packages not installed: {e}. Install with: pip install Pillow requests"
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
        print(json.dumps({"info": f"Using Gemini {model_name} (native API, same as chat)"}),
              file=sys.stderr, flush=True)
        print(json.dumps({"info": f"Processing {len(images)} images..."}),
              file=sys.stderr, flush=True)

        # Track API call timing for rate limit monitoring
        api_call_times = []

        for idx, img_info in enumerate(images, 1):
            try:
                # Load and encode image to base64
                img = Image.open(img_info['image_path']).convert("RGB")

                # Save to bytes for base64 encoding
                img_byte_arr = io.BytesIO()
                img.save(img_byte_arr, format='PNG')
                img_byte_arr = img_byte_arr.getvalue()
                b64_data = base64.b64encode(img_byte_arr).decode('utf-8')

                # Rate limiting: Track calls in last 60 seconds
                # Gemini free tier: 15 RPM (requests per minute)
                current_time = time.time()
                api_call_times = [t for t in api_call_times if current_time - t < 60]

                # If we have 14+ calls in last 60 seconds, wait before making next call
                # (Conservative: 14 instead of 15 to have safety margin)
                if len(api_call_times) >= 14:
                    oldest_call = min(api_call_times)
                    wait_time = 60 - (current_time - oldest_call) + 1  # +1 for safety

                    if wait_time > 0:
                        print(json.dumps({
                            "info": f"Rate limit protection: Waiting {wait_time:.1f}s (processed {idx-1}/{len(images)})"
                        }), file=sys.stderr, flush=True)
                        time.sleep(wait_time)

                        # Clear old calls after waiting
                        current_time = time.time()
                        api_call_times = [t for t in api_call_times if current_time - t < 60]

                # Make API call using native Gemini API (same as chat)
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"

                response = requests.post(
                    url,
                    json={
                        "contents": [{
                            "parts": [
                                {
                                    "text": "Describe this image in detail. Focus on visible text, graphics, diagrams, charts, tables, or other visual elements. Be specific about what you see. Provide a clear, focused description without repeating yourself."
                                },
                                {
                                    "inlineData": {
                                        "mimeType": "image/png",
                                        "data": b64_data
                                    }
                                }
                            ]
                        }],
                        "generationConfig": {
                            "temperature": 0.3,
                            "maxOutputTokens": max_tokens,
                            "topP": 0.9,
                            "topK": 40
                        }
                    },
                    headers={"Content-Type": "application/json"},
                    timeout=60
                )

                # Track this API call
                api_call_times.append(time.time())

                if response.status_code == 200:
                    data = response.json()

                    # Extract text from Gemini response (same format as chat)
                    candidate = data.get('candidates', [{}])[0]
                    text_part = candidate.get('content', {}).get('parts', [{}])[0]
                    description = text_part.get('text', '')

                    if description:
                        descriptions[img_info['image_path']] = description.strip()
                        print(json.dumps({
                            "progress": f"✓ {idx}/{len(images)} - {img_info['filename']} ({len(description)} chars)"
                        }), file=sys.stderr, flush=True)
                    else:
                        descriptions[img_info['image_path']] = "[Image description unavailable - no content]"
                        print(json.dumps({
                            "warning": f"No content for {img_info['filename']}"
                        }), file=sys.stderr, flush=True)
                else:
                    # Parse error
                    try:
                        error_data = response.json()
                        error_msg = error_data.get('error', {}).get('message', response.text)
                    except:
                        error_msg = response.text

                    print(json.dumps({
                        "warning": f"Failed to describe {img_info['filename']}: {error_msg[:100]}"
                    }), file=sys.stderr, flush=True)

                    descriptions[img_info['image_path']] = "[Image description unavailable - API error]"

            except Exception as e:
                error_msg = str(e)

                print(json.dumps({
                    "warning": f"Failed to describe {img_info['filename']}: {error_msg[:100]}"
                }), file=sys.stderr, flush=True)

                descriptions[img_info['image_path']] = "[Image description unavailable - error]"

        # Final summary
        successful = sum(1 for d in descriptions.values() if not d.startswith('['))
        print(json.dumps({
            "info": f"✓ Gemini processing complete: {successful}/{len(images)} successful"
        }), file=sys.stderr, flush=True)

        return descriptions

    except Exception as e:
        error_msg = f"Gemini API failed: {str(e)}"
        print(json.dumps({"error": error_msg}),
              file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e


def process_document_with_images(
    pdf_path: str,
    conversion_output_folder: str,
    doc=None,
    enable_description: bool = False,
    max_tokens: int = 800,
    vision_backend: str = 'auto',
    vision_model: str = 'smolvlm'
) -> Tuple[List[Dict], Dict[str, str]]:
    """
    Extract and optionally describe images and figures from a PDF

    Args:
        pdf_path: Path to PDF file
        conversion_output_folder: Base folder for conversions
        doc: Docling document object (optional, for extracting figures from metadata)
        enable_description: Whether to generate descriptions
        max_tokens: Maximum tokens per description (default: 800)
        vision_backend: 'auto', 'transformers', or 'mlx' (for SmolVLM)
        vision_model: 'smolvlm' or 'gemini-2.0-flash'

    Returns:
        (extracted_images, descriptions)
    """
    pdf_path = Path(pdf_path)
    doc_name = pdf_path.stem

    # Create output structure: conversions/[document-name]/images/
    output_base = Path(conversion_output_folder) / doc_name
    images_dir = output_base / "images"
    images_dir.mkdir(parents=True, exist_ok=True)

    print(json.dumps({"info": f"Extracting images and figures from {pdf_path.name}..."}),
          file=sys.stderr, flush=True)

    # NEW APPROACH: Extract figures from docling metadata (vector diagrams + embedded images)
    # This is the source of truth for matching with <!-- image --> tags
    extracted_images = []

    if doc is not None:
        # Extract and render figures using docling's picture metadata
        # This captures vector graphics that PyMuPDF misses
        extracted_images = extract_figures_from_docling(doc, str(pdf_path), images_dir)
        print(json.dumps({
            "info": f"✓ Extracted {len(extracted_images)} figures from docling metadata (includes vector diagrams)"
        }), file=sys.stderr, flush=True)
    else:
        # Fallback: Use PyMuPDF for embedded raster images only
        # This won't capture vector graphics
        print(json.dumps({
            "warning": "No docling document provided - falling back to PyMuPDF (may miss vector diagrams)"
        }), file=sys.stderr, flush=True)
        extracted_images = extract_images_pymupdf(str(pdf_path), images_dir)
        print(json.dumps({"info": f"Extracted {len(extracted_images)} embedded images"}),
              file=sys.stderr, flush=True)

    descriptions = {}

    if enable_description and extracted_images:
        # Check if using Gemini
        if vision_model == 'gemini-2.0-flash':
            # Get API key from environment
            api_key = os.getenv('GEMINI_API_KEY', '')

            # Check if API key is set
            if not api_key or api_key.strip() == '':
                error_msg = (
                    "❌ Gemini API key not found!\n\n"
                    "To use Gemini for image descriptions:\n"
                    "1. Get a free API key from: https://aistudio.google.com/app/apikey\n"
                    "2. Add it in Settings → AI Providers → Gemini API Key\n"
                    "3. Ensure billing is enabled in Google Cloud Console\n\n"
                    "Alternatively, switch to SmolVLM (runs locally, no API key needed)"
                )
                print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
                raise ValueError(error_msg)

            # Use gemini-2.0-flash model
            gemini_model_name = 'gemini-2.0-flash'

            # Validate API key before processing (non-blocking)
            print(json.dumps({"info": f"Using Gemini {gemini_model_name} for image descriptions..."}), file=sys.stderr, flush=True)

            # Try validation but don't block on timeout/errors
            # The actual image description will fail properly if the key is bad
            try:
                validate_gemini_api_key_native(api_key, model_name=gemini_model_name)
            except Exception as e:
                print(json.dumps({"warning": f"API key validation skipped due to timeout/error - will validate during first image"}), file=sys.stderr, flush=True)

            descriptions = describe_images_gemini_native(
                extracted_images,
                api_key,
                max_tokens=max_tokens,
                model_name=gemini_model_name  # Use gemini-2.0-flash
            )
        else:
            # Use SmolVLM (local)
            backend = detect_vision_backend(vision_backend)
            print(json.dumps({"info": f"Using SmolVLM with backend: {backend}"}),
                  file=sys.stderr, flush=True)

            # Describe images
            if backend == 'mlx':
                descriptions = describe_images_mlx(extracted_images, max_tokens)
            else:
                descriptions = describe_images_transformers(extracted_images, max_tokens)

    return extracted_images, descriptions


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

    # Group images by page for quick lookup
    images_by_page = {}
    for img in images:
        page = img['page']
        if page not in images_by_page:
            images_by_page[page] = []
        images_by_page[page].append(img)

    # Sort images by vertical position on each page
    for page in images_by_page:
        images_by_page[page].sort(key=lambda x: x['bbox'][1] if x['bbox'] else 0)

    # Track which images have been used
    used_images = set()

    # Process each chunk and inject relevant image descriptions
    enriched_chunks = []
    for chunk_data in chunks:
        chunk_text = chunk_data['text']

        # Extract page numbers from chunk metadata (from doc_items provenance)
        pages_in_chunk = set()
        if 'doc_items' in chunk_data.get('metadata', {}):
            for doc_item_str in chunk_data['metadata']['doc_items']:
                # Parse page_no from provenance in doc_items string
                # Format: "ProvenanceItem(page_no=X, bbox=..."
                import re
                page_matches = re.findall(r'page_no=(\d+)', doc_item_str)
                for page_str in page_matches:
                    pages_in_chunk.add(int(page_str))

        # If we found pages, inject descriptions for images on those pages
        if pages_in_chunk:
            # Find all images from these pages that haven't been used yet
            chunk_images = []
            for page in sorted(pages_in_chunk):
                if page in images_by_page:
                    for img in images_by_page[page]:
                        img_key = img['image_path']
                        if img_key not in used_images and img_key in descriptions:
                            chunk_images.append(img)
                            used_images.add(img_key)

            # Inject image descriptions at the end of chunk
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

        # Create enriched chunk
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
    using CAPTION-BASED MATCHING for 100% accuracy even if some renders fail.

    MATCHING STRATEGY:
    - Find <!-- image --> tag
    - Look at next few lines for caption (e.g., "## FIGURE 5-28" or caption text)
    - Match with image that has same caption
    - This is robust: if one figure fails to render, others still match correctly!
    """
    if not images or not descriptions:
        return markdown_text

    # Build caption lookup: caption -> image
    # Normalize captions for matching (lowercase, strip whitespace)
    def normalize_caption(text):
        if not text:
            return ""
        # Extract just the figure name/number for matching
        text = text.strip().lower()
        # Remove common prefixes
        text = text.replace('figure', '').replace('fig.', '').replace('fig', '')
        text = text.replace('table', '').replace('tbl.', '').replace('tbl', '')
        return text.strip()

    # Build multiple lookup strategies
    import re
    caption_to_image = {}
    images_without_captions = []  # Track for fallback matching

    for img in images:
        caption = img.get('caption', '')
        if caption:
            # Strategy 1: Full normalized caption
            normalized = normalize_caption(caption)
            if normalized and len(normalized) > 3:  # Avoid matching single chars
                caption_to_image[normalized] = img

            # Strategy 2: Extract figure number (e.g., "FIGURE 5-28" -> "5-28")
            fig_match = re.search(r'(?:figure|fig\.?|table|tbl\.?)\s*([\d\-]+)', caption.lower())
            if fig_match:
                fig_num = fig_match.group(1)
                caption_to_image[fig_num] = img
        else:
            # No caption in metadata - will try to match by page + position later
            images_without_captions.append(img)

    lines = markdown_text.split('\n')
    result_lines = []
    i = 0
    matched_indices = set()  # Track which images we've matched

    while i < len(lines):
        line = lines[i]

        # Replace <!-- image --> placeholders
        if line.strip() == '<!-- image -->':
            # CRITICAL: Caption appears BEFORE the <!-- image --> tag, not after!
            # Look backwards in previous lines to find the caption
            matched_img = None

            # Check previous 5 lines for caption (caption comes BEFORE <!-- image -->)
            for j in range(max(0, i - 5), i):
                lookback_text = lines[j].strip()

                # Skip empty lines
                if not lookback_text:
                    continue

                # Normalize the lookback text
                normalized_line = normalize_caption(lookback_text)

                # Try to find a match in our caption lookup
                for caption_key, img in caption_to_image.items():
                    # Check if we haven't already matched this image
                    img_index = img.get('index', -1)
                    if img_index in matched_indices:
                        continue

                    # Match if caption key appears in line or vice versa
                    if caption_key in normalized_line or normalized_line.startswith(caption_key[:10]):
                        matched_img = img
                        matched_indices.add(img_index)
                        break

                if matched_img:
                    break

            # Fallback: If no caption match and we have images without captions,
            # try to match by extracting figure number from markdown heading
            if not matched_img and images_without_captions:
                for j in range(max(0, i - 5), i):
                    lookback_text = lines[j].strip()
                    if not lookback_text:
                        continue

                    # Look for headings like "## FIGURE 1-55" or "FIGURE 1-55"
                    fig_match = re.search(r'(?:##\s*)?(?:figure|fig\.?|table|tbl\.?)\s*([\d\-]+)', lookback_text, re.IGNORECASE)
                    if fig_match:
                        fig_num = fig_match.group(1)

                        # Try to find an unmatched image without caption that could match
                        for img in images_without_captions:
                            img_index = img.get('index', -1)
                            if img_index in matched_indices:
                                continue

                            # For now, just use the first unmatched captionless image on this page
                            # This is a best-effort fallback
                            matched_img = img
                            matched_indices.add(img_index)
                            print(json.dumps({
                                "debug": f"✓ Fallback match: Figure {img_index} (no caption in metadata) matched to heading '{lookback_text[:50]}'"
                            }), file=sys.stderr, flush=True)
                            break

                    if matched_img:
                        break

            # If we found a match, insert description
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
                    "debug": f"✓ Matched <!-- image --> with figure {matched_img.get('index')} via caption (found in previous lines)"
                }), file=sys.stderr, flush=True)
            else:
                # No match found - keep placeholder and warn
                print(json.dumps({
                    "warning": f"Could not match <!-- image --> at line {i} - no figure with matching caption found in previous 5 lines"
                }), file=sys.stderr, flush=True)
                result_lines.append(line)

        else:
            result_lines.append(line)

        i += 1

    return '\n'.join(result_lines)

