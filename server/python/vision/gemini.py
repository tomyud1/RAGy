"""
Gemini Vision API backend for image descriptions
"""

import os
import sys
import json
import time
from typing import List, Dict


def validate_gemini_api_key_native(api_key: str, model_name: str = 'gemini-2.0-flash') -> bool:
    """
    Validate Gemini API key using native Gemini API

    Args:
        api_key: The Gemini API key to validate
        model_name: Model to use for validation

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
            return response.status_code not in [401, 403]

        return False

    except Exception as e:
        print(json.dumps({"error": f"Failed to validate Gemini API key: {str(e)}"}),
              file=sys.stderr, flush=True)
        return False


def describe_images_gemini_native(images: List[Dict], api_key: str, max_tokens: int = 800,
                                   model_name: str = 'gemini-2.0-flash') -> Dict[str, str]:
    """
    Describe images using native Gemini API

    Args:
        images: List of image dicts with 'image_path' and 'filename'
        api_key: Gemini API key
        max_tokens: Maximum tokens per description
        model_name: Model to use

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
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
        print(json.dumps({"info": f"Using Gemini {model_name} (native API)"}),
              file=sys.stderr, flush=True)
        print(json.dumps({"info": f"Processing {len(images)} images..."}),
              file=sys.stderr, flush=True)

        api_call_times = []

        for idx, img_info in enumerate(images, 1):
            try:
                img = Image.open(img_info['image_path']).convert("RGB")

                img_byte_arr = io.BytesIO()
                img.save(img_byte_arr, format='PNG')
                img_byte_arr = img_byte_arr.getvalue()
                b64_data = base64.b64encode(img_byte_arr).decode('utf-8')

                # Rate limiting
                current_time = time.time()
                api_call_times = [t for t in api_call_times if current_time - t < 60]

                if len(api_call_times) >= 14:
                    oldest_call = min(api_call_times)
                    wait_time = 60 - (current_time - oldest_call) + 1

                    if wait_time > 0:
                        print(json.dumps({
                            "info": f"Rate limit protection: Waiting {wait_time:.1f}s (processed {idx-1}/{len(images)})"
                        }), file=sys.stderr, flush=True)
                        time.sleep(wait_time)
                        current_time = time.time()
                        api_call_times = [t for t in api_call_times if current_time - t < 60]

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

                api_call_times.append(time.time())

                if response.status_code == 200:
                    data = response.json()
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
                else:
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
                print(json.dumps({
                    "warning": f"Failed to describe {img_info['filename']}: {str(e)[:100]}"
                }), file=sys.stderr, flush=True)
                descriptions[img_info['image_path']] = "[Image description unavailable - error]"

        successful = sum(1 for d in descriptions.values() if not d.startswith('['))
        print(json.dumps({
            "info": f"✓ Gemini processing complete: {successful}/{len(images)} successful"
        }), file=sys.stderr, flush=True)

        return descriptions

    except Exception as e:
        error_msg = f"Gemini API failed: {str(e)}"
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

