"""
SmolVLM vision backends - Transformers and MLX implementations
"""

import sys
import json
from typing import List, Dict


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
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
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

                messages = [{
                    "role": "user",
                    "content": [
                        {"type": "image"},
                        {"type": "text", "text": "Describe this image in detail. Focus on visible text, graphics, diagrams, charts, or logos. Be specific about what you see."}
                    ]
                }]
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
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
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
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

    descriptions = {}

    try:
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
        print(json.dumps({"error": error_msg}), file=sys.stderr, flush=True)
        raise RuntimeError(error_msg) from e

