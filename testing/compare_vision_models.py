#!/usr/bin/env python3
"""
Compare Vision Models: SmolVLM (local) vs Gemini 2.5 Flash (API)

Tests:
- Description quality
- Processing speed
- Repetition issues
- Cost analysis
"""

import os
import sys
import time
import json
from pathlib import Path
from typing import Dict, List, Tuple
import argparse


def test_smolvlm_transformers(image_path: str, max_tokens: int = 300) -> Tuple[str, float, Dict]:
    """Test SmolVLM using Transformers backend"""
    try:
        from transformers import AutoProcessor, AutoModelForVision2Seq
        import torch
        from PIL import Image
    except ImportError as e:
        return f"Error: {e}", 0.0, {"error": str(e)}
    
    try:
        start_time = time.time()
        
        # Load model (only once per session)
        model_name = "HuggingFaceTB/SmolVLM-256M-Instruct"
        device = "mps" if torch.backends.mps.is_available() else "cuda" if torch.cuda.is_available() else "cpu"
        
        if not hasattr(test_smolvlm_transformers, 'model'):
            print(f"Loading SmolVLM (Transformers, {device})...", flush=True)
            test_smolvlm_transformers.processor = AutoProcessor.from_pretrained(model_name)
            test_smolvlm_transformers.model = AutoModelForVision2Seq.from_pretrained(
                model_name,
                torch_dtype=torch.float16 if device != "cpu" else torch.float32,
            ).to(device)
            test_smolvlm_transformers.device = device
        
        processor = test_smolvlm_transformers.processor
        model = test_smolvlm_transformers.model
        device = test_smolvlm_transformers.device
        
        # Process image
        img = Image.open(image_path).convert("RGB")
        
        messages = [{"role": "user", "content": [{"type": "image"}, {"type": "text", "text": "Describe this image in detail."}]}]
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
        
        description = generated_texts[0].strip()
        elapsed = time.time() - start_time
        
        # Analyze description
        words = description.split()
        unique_words = set(words)
        
        metadata = {
            "backend": "SmolVLM-Transformers",
            "device": device,
            "max_tokens": max_tokens,
            "word_count": len(words),
            "unique_words": len(unique_words),
            "repetition_ratio": 1 - (len(unique_words) / len(words)) if words else 0,
            "time_seconds": elapsed
        }
        
        return description, elapsed, metadata
        
    except Exception as e:
        return f"Error: {e}", 0.0, {"error": str(e)}


def test_smolvlm_mlx(image_path: str, max_tokens: int = 300) -> Tuple[str, float, Dict]:
    """Test SmolVLM using MLX backend (Apple Silicon optimized)"""
    try:
        import mlx_vlm
        from PIL import Image
    except ImportError as e:
        return f"Error: {e}", 0.0, {"error": str(e)}
    
    try:
        start_time = time.time()
        
        # Load model (only once per session)
        model_name = "mlx-community/SmolVLM-256M-Instruct-4bit"
        
        if not hasattr(test_smolvlm_mlx, 'model'):
            print(f"Loading SmolVLM (MLX, Apple Silicon optimized)...", flush=True)
            test_smolvlm_mlx.model, test_smolvlm_mlx.processor = mlx_vlm.load(model_name)
        
        model = test_smolvlm_mlx.model
        processor = test_smolvlm_mlx.processor
        
        # Process image
        img = Image.open(image_path).convert("RGB")
        
        prompt = "<image>Describe this image in detail."
        
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
        
        description = output.strip() if isinstance(output, str) else str(output).strip()
        elapsed = time.time() - start_time
        
        # Analyze description
        words = description.split()
        unique_words = set(words)
        
        metadata = {
            "backend": "SmolVLM-MLX",
            "device": "Apple Silicon (MLX)",
            "max_tokens": max_tokens,
            "word_count": len(words),
            "unique_words": len(unique_words),
            "repetition_ratio": 1 - (len(unique_words) / len(words)) if words else 0,
            "time_seconds": elapsed
        }
        
        return description, elapsed, metadata
        
    except Exception as e:
        return f"Error: {e}", 0.0, {"error": str(e)}


def test_gemini_flash(image_path: str, api_key: str, max_tokens: int = 300) -> Tuple[str, float, Dict]:
    """Test Gemini 2.5 Flash via API"""
    try:
        import google.generativeai as genai
        from PIL import Image
    except ImportError:
        return "Error: google-generativeai not installed. Run: pip install google-generativeai", 0.0, {"error": "Package not installed"}
    
    try:
        start_time = time.time()
        
        # Configure Gemini
        genai.configure(api_key=api_key)
        
        # Load model (only once per session)
        if not hasattr(test_gemini_flash, 'model'):
            print("Loading Gemini 2.5 Flash...", flush=True)
            test_gemini_flash.model = genai.GenerativeModel('gemini-2.5-flash')
        
        model = test_gemini_flash.model
        
        # Process image - use PIL Image directly (API supports it)
        img = Image.open(image_path).convert("RGB")
        
        # Generate description using proper format
        response = model.generate_content(
            [img, "Describe this image in detail."],
            generation_config=genai.GenerationConfig(
                max_output_tokens=max_tokens,
                temperature=0.7,
                top_p=0.9,
            )
        )
        
        description = response.text.strip()
        elapsed = time.time() - start_time
        
        # Analyze description
        words = description.split()
        unique_words = set(words)
        
        # Estimate cost (Gemini 2.0 Flash pricing)
        # Input: $0.075 per 1M tokens, Output: $0.30 per 1M tokens
        # Rough estimate: 1 image ≈ 258 tokens
        input_cost = (258 / 1_000_000) * 0.075
        output_cost = (len(words) * 1.3 / 1_000_000) * 0.30  # Rough token estimate
        total_cost = input_cost + output_cost
        
        metadata = {
            "backend": "Gemini-2.5-Flash",
            "device": "Google API",
            "max_tokens": max_tokens,
            "word_count": len(words),
            "unique_words": len(unique_words),
            "repetition_ratio": 1 - (len(unique_words) / len(words)) if words else 0,
            "time_seconds": elapsed,
            "estimated_cost_usd": total_cost
        }
        
        return description, elapsed, metadata
        
    except Exception as e:
        return f"Error: {e}", 0.0, {"error": str(e)}


def analyze_repetition(text: str) -> Dict:
    """Detect repetitive patterns in text"""
    words = text.split()
    
    # Find repeating sequences
    repetitions = []
    for seq_len in range(3, 10):  # Check sequences of 3-9 words
        for i in range(len(words) - seq_len * 2):
            sequence = ' '.join(words[i:i+seq_len])
            next_seq = ' '.join(words[i+seq_len:i+seq_len*2])
            if sequence == next_seq:
                repetitions.append(sequence)
                break
    
    return {
        "has_repetition": len(repetitions) > 0,
        "repeating_sequences": repetitions[:3],  # First 3 examples
        "total_repetitions": len(repetitions)
    }


def compare_models(images_dir: str, api_key: str, max_tokens: int = 300, use_mlx: bool = True, use_transformers: bool = True):
    """Compare all models on test images"""
    
    images_dir = Path(images_dir)
    image_files = sorted(images_dir.glob("*.jpeg")) + sorted(images_dir.glob("*.jpg")) + sorted(images_dir.glob("*.png"))
    
    if not image_files:
        print(f"No images found in {images_dir}")
        return
    
    print(f"\n{'='*80}")
    print(f"VISION MODEL COMPARISON TEST")
    print(f"{'='*80}")
    print(f"Images: {len(image_files)}")
    print(f"Max tokens per description: {max_tokens}")
    print(f"Models: ", end="")
    models = []
    if use_transformers:
        models.append("SmolVLM-Transformers")
    if use_mlx:
        models.append("SmolVLM-MLX")
    models.append("Gemini-2.5-Flash")
    print(", ".join(models))
    print(f"{'='*80}\n")
    
    results = {
        "smolvlm_transformers": [] if use_transformers else None,
        "smolvlm_mlx": [] if use_mlx else None,
        "gemini_flash": []
    }
    
    for idx, img_path in enumerate(image_files, 1):
        print(f"\n{'='*80}")
        print(f"IMAGE {idx}/{len(image_files)}: {img_path.name}")
        print(f"{'='*80}\n")
        
        # Test SmolVLM (Transformers) - optional
        if use_transformers:
            print("🤖 Testing SmolVLM (Transformers)...")
            desc_trans, time_trans, meta_trans = test_smolvlm_transformers(str(img_path), max_tokens)
            rep_trans = analyze_repetition(desc_trans)
            results["smolvlm_transformers"].append({
                "image": img_path.name,
                "description": desc_trans,
                "metadata": meta_trans,
                "repetition_analysis": rep_trans
            })
            print(f"✅ Complete in {time_trans:.2f}s")
            print(f"   Words: {meta_trans.get('word_count', 0)}, Unique: {meta_trans.get('unique_words', 0)}")
            if rep_trans['has_repetition']:
                print(f"   ⚠️  REPETITION DETECTED: {rep_trans['repeating_sequences'][0][:50]}...")
            print()
        
        # Test SmolVLM (MLX) - optional
        if use_mlx:
            print("🚀 Testing SmolVLM (MLX - Apple Silicon)...")
            desc_mlx, time_mlx, meta_mlx = test_smolvlm_mlx(str(img_path), max_tokens)
            rep_mlx = analyze_repetition(desc_mlx)
            results["smolvlm_mlx"].append({
                "image": img_path.name,
                "description": desc_mlx,
                "metadata": meta_mlx,
                "repetition_analysis": rep_mlx
            })
            print(f"✅ Complete in {time_mlx:.2f}s")
            print(f"   Words: {meta_mlx.get('word_count', 0)}, Unique: {meta_mlx.get('unique_words', 0)}")
            if rep_mlx['has_repetition']:
                print(f"   ⚠️  REPETITION DETECTED: {rep_mlx['repeating_sequences'][0][:50]}...")
            print()
        
        # Test Gemini Flash
        print("☁️  Testing Gemini 2.5 Flash...")
        desc_gem, time_gem, meta_gem = test_gemini_flash(str(img_path), api_key, max_tokens)
        rep_gem = analyze_repetition(desc_gem)
        results["gemini_flash"].append({
            "image": img_path.name,
            "description": desc_gem,
            "metadata": meta_gem,
            "repetition_analysis": rep_gem
        })
        print(f"✅ Complete in {time_gem:.2f}s")
        print(f"   Words: {meta_gem.get('word_count', 0)}, Unique: {meta_gem.get('unique_words', 0)}")
        print(f"   Cost: ${meta_gem.get('estimated_cost_usd', 0):.6f}")
        if rep_gem['has_repetition']:
            print(f"   ⚠️  REPETITION DETECTED: {rep_gem['repeating_sequences'][0][:50]}...")
        print()
        
        # Show descriptions side-by-side
        print(f"\n{'─'*80}")
        print("DESCRIPTIONS PREVIEW:")
        print(f"{'─'*80}")
        if use_transformers:
            print(f"\n📘 SmolVLM (Transformers):\n{desc_trans[:200]}{'...' if len(desc_trans) > 200 else ''}\n")
        if use_mlx and not desc_mlx.startswith("Error"):
            print(f"📗 SmolVLM (MLX):\n{desc_mlx[:200]}{'...' if len(desc_mlx) > 200 else ''}\n")
        if not desc_gem.startswith("Error"):
            print(f"📙 Gemini 2.5 Flash:\n{desc_gem[:200]}{'...' if len(desc_gem) > 200 else ''}\n")
    
    # Generate summary report
    generate_summary_report(results, len(image_files), max_tokens)
    
    # Save full results to JSON
    output_file = Path(__file__).parent / "outputs" / "vision_model_comparison.json"
    output_file.parent.mkdir(exist_ok=True)
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2)
    print(f"\n✅ Full results saved to: {output_file}")


def generate_summary_report(results: Dict, num_images: int, max_tokens: int):
    """Generate summary comparison report"""
    
    print(f"\n\n{'='*80}")
    print("SUMMARY REPORT")
    print(f"{'='*80}\n")
    
    # SmolVLM Transformers (if tested)
    trans_times = []
    trans_words = []
    trans_reps = 0
    if results["smolvlm_transformers"]:
        trans_results = results["smolvlm_transformers"]
        trans_times = [r["metadata"].get("time_seconds", 0) for r in trans_results if "error" not in r["metadata"]]
        trans_words = [r["metadata"].get("word_count", 0) for r in trans_results if "error" not in r["metadata"]]
        trans_reps = sum(1 for r in trans_results if r["repetition_analysis"]["has_repetition"])
        
        print("📘 SmolVLM (Transformers)")
        print(f"   Average time: {sum(trans_times)/len(trans_times):.2f}s per image" if trans_times else "   N/A")
        print(f"   Total time: {sum(trans_times):.2f}s for {num_images} images")
        print(f"   Average words: {sum(trans_words)/len(trans_words):.1f}" if trans_words else "   N/A")
        print(f"   Repetition issues: {trans_reps}/{len(trans_results)} images")
        print(f"   Cost: $0 (local)")
        print()
    
    # SmolVLM MLX (if tested)
    mlx_times = []
    mlx_words = []
    mlx_reps = 0
    if results["smolvlm_mlx"]:
        mlx_results = results["smolvlm_mlx"]
        mlx_times = [r["metadata"].get("time_seconds", 0) for r in mlx_results if "error" not in r["metadata"]]
        mlx_words = [r["metadata"].get("word_count", 0) for r in mlx_results if "error" not in r["metadata"]]
        mlx_reps = sum(1 for r in mlx_results if r["repetition_analysis"]["has_repetition"])
        
        print("📗 SmolVLM (MLX - Apple Silicon)")
        print(f"   Average time: {sum(mlx_times)/len(mlx_times):.2f}s per image" if mlx_times else "   N/A")
        print(f"   Total time: {sum(mlx_times):.2f}s for {num_images} images")
        print(f"   Average words: {sum(mlx_words)/len(mlx_words):.1f}" if mlx_words else "   N/A")
        print(f"   Repetition issues: {mlx_reps}/{len(mlx_results)} images")
        print(f"   Cost: $0 (local)")
        
        if trans_times and mlx_times:
            speedup = (sum(trans_times) / sum(mlx_times))
            print(f"   ⚡ {speedup:.1f}x faster than Transformers")
        print()
    
    # Gemini Flash
    gem_results = results["gemini_flash"]
    gem_times = [r["metadata"].get("time_seconds", 0) for r in gem_results if "error" not in r["metadata"]]
    gem_words = [r["metadata"].get("word_count", 0) for r in gem_results if "error" not in r["metadata"]]
    gem_costs = [r["metadata"].get("estimated_cost_usd", 0) for r in gem_results if "error" not in r["metadata"]]
    gem_reps = sum(1 for r in gem_results if r["repetition_analysis"]["has_repetition"])
    
    print("📙 Gemini 2.5 Flash")
    print(f"   Average time: {sum(gem_times)/len(gem_times):.2f}s per image" if gem_times else "   N/A")
    print(f"   Total time: {sum(gem_times):.2f}s for {num_images} images")
    print(f"   Average words: {sum(gem_words)/len(gem_words):.1f}" if gem_words else "   N/A")
    print(f"   Repetition issues: {gem_reps}/{len(gem_results)} images")
    print(f"   Estimated cost: ${sum(gem_costs):.6f} for {num_images} images")
    print(f"   Cost per image: ${sum(gem_costs)/len(gem_costs):.6f}" if gem_costs else "   N/A")
    print()
    
    # Winner analysis
    print(f"{'='*80}")
    print("WINNER ANALYSIS")
    print(f"{'='*80}\n")
    
    print("🏆 Speed:")
    if results["smolvlm_mlx"] and mlx_times:
        print(f"   MLX: {sum(mlx_times)/len(mlx_times):.2f}s/image (FASTEST)")
    if trans_times:
        print(f"   Transformers: {sum(trans_times)/len(trans_times):.2f}s/image")
    if gem_times:
        print(f"   Gemini: {sum(gem_times)/len(gem_times):.2f}s/image")
    print()
    
    print("📝 Description Length:")
    avg_trans = sum(trans_words)/len(trans_words) if trans_words else 0
    avg_mlx = sum(mlx_words)/len(mlx_words) if mlx_words else 0
    avg_gem = sum(gem_words)/len(gem_words) if gem_words else 0
    
    # Compare using the local model that was tested
    local_avg = avg_mlx if avg_mlx > 0 else avg_trans
    local_name = "SmolVLM (MLX)" if avg_mlx > 0 else "SmolVLM (Transformers)"
    
    if avg_gem > local_avg:
        print(f"   Gemini: {avg_gem:.1f} words (MORE DETAILED)")
        print(f"   {local_name}: {local_avg:.1f} words")
    else:
        print(f"   {local_name}: {local_avg:.1f} words (MORE DETAILED)")
        print(f"   Gemini: {avg_gem:.1f} words")
    print()
    
    print("🔁 Repetition Issues:")
    # Use MLX or Transformers results depending on what was tested
    local_reps = mlx_reps if mlx_reps > 0 or not results["smolvlm_transformers"] else trans_reps
    local_total = len(results["smolvlm_mlx"]) if results["smolvlm_mlx"] else len(results["smolvlm_transformers"]) if results["smolvlm_transformers"] else 0
    print(f"   {local_name}: {local_reps}/{local_total} images")
    print(f"   Gemini: {gem_reps}/{len(gem_results)} images")
    if gem_reps < local_reps:
        print(f"   ✅ Gemini has FEWER repetition issues")
    else:
        print(f"   ✅ {local_name} has FEWER repetition issues")
    print()
    
    print("💰 Cost:")
    print(f"   SmolVLM: FREE (local)")
    print(f"   Gemini: ${sum(gem_costs):.6f} for {num_images} images")
    if gem_costs:
        cost_per_1000 = (sum(gem_costs) / num_images) * 1000
        print(f"   Gemini cost for 1,000 images: ${cost_per_1000:.2f}")
    print()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Compare vision models")
    parser.add_argument("--images-dir", required=True, help="Directory containing test images")
    parser.add_argument("--api-key", help="Gemini API key (or set GEMINI_API_KEY env var)")
    parser.add_argument("--max-tokens", type=int, default=300, help="Max tokens per description")
    parser.add_argument("--no-mlx", action="store_true", help="Skip MLX backend test")
    parser.add_argument("--no-transformers", action="store_true", help="Skip Transformers backend test")
    
    args = parser.parse_args()
    
    # Get API key
    api_key = args.api_key or os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("Error: Gemini API key required. Use --api-key or set GEMINI_API_KEY env var")
        sys.exit(1)
    
    compare_models(
        images_dir=args.images_dir,
        api_key=api_key,
        max_tokens=args.max_tokens,
        use_mlx=not args.no_mlx,
        use_transformers=not args.no_transformers
    )

