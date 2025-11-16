#!/usr/bin/env python3
"""
Compare SmolVLM performance: Transformers (MPS) vs MLX
Tests the same images with both backends and compares speed.
"""

import argparse
import time
from pathlib import Path
from PIL import Image
from datetime import datetime
import sys

def print_info(msg):
    print(f"\033[96m{msg}\033[0m")

def print_success(msg):
    print(f"\033[92m{msg}\033[0m")

def print_error(msg):
    print(f"\033[91m{msg}\033[0m")

def print_warning(msg):
    print(f"\033[93m{msg}\033[0m")

def test_transformers(images_dir):
    """Test SmolVLM using transformers library"""
    print_info("\n" + "="*70)
    print_info("🔧 BACKEND 1: TRANSFORMERS (MPS)")
    print_info("="*70)
    
    try:
        from transformers import AutoProcessor, AutoModelForVision2Seq
        import torch
        print_success("   ✅ Transformers imports successful")
    except ImportError as e:
        print_error(f"❌ transformers not found: {e}")
        return None
    
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    print_info(f"   Device: {device}")
    
    model_load_start = time.time()
    try:
        model_name = "HuggingFaceTB/SmolVLM-256M-Instruct"
        processor = AutoProcessor.from_pretrained(model_name)
        model = AutoModelForVision2Seq.from_pretrained(
            model_name,
            torch_dtype=torch.float16 if device != "cpu" else torch.float32,
        ).to(device)
        model_load_time = time.time() - model_load_start
        print_success(f"   ✅ Model loaded in {model_load_time:.2f}s")
    except Exception as e:
        print_error(f"❌ Failed to load model: {e}")
        return None
    
    # Find images
    image_files = sorted(list(images_dir.glob("*.jpeg")) + 
                        list(images_dir.glob("*.jpg")) + 
                        list(images_dir.glob("*.png")))
    
    if not image_files:
        print_error(f"❌ No images found")
        return None
    
    # Process first 5 images for quick comparison
    test_images = image_files[:5]
    print_info(f"\n   Testing on {len(test_images)} images...\n")
    
    results = []
    total_time = 0
    
    for idx, img_path in enumerate(test_images, 1):
        try:
            img = Image.open(img_path).convert("RGB")
            
            messages = [{"role": "user", "content": [{"type": "image"}, {"type": "text", "text": "Describe this image."}]}]
            text_input = processor.apply_chat_template(messages, add_generation_prompt=True)
            inputs = processor(text=text_input, images=[img], return_tensors="pt").to(device)
            
            start_time = time.time()
            with torch.no_grad():
                generated_ids = model.generate(**inputs, max_new_tokens=100)
            generated_texts = processor.batch_decode(
                generated_ids[:, inputs['input_ids'].size(1):],
                skip_special_tokens=True
            )
            inference_time = time.time() - start_time
            
            total_time += inference_time
            results.append({
                'filename': img_path.name,
                'time': inference_time,
                'description': generated_texts[0].strip()[:80]
            })
            print_success(f"   [{idx}/{len(test_images)}] {img_path.name}: {inference_time:.2f}s")
            
        except Exception as e:
            print_error(f"   [{idx}/{len(test_images)}] {img_path.name}: Error - {e}")
    
    avg_time = total_time / len(results) if results else 0
    
    return {
        'backend': 'Transformers (MPS)',
        'model_load_time': model_load_time,
        'total_inference_time': total_time,
        'avg_per_image': avg_time,
        'images_processed': len(results),
        'results': results
    }

def test_mlx(images_dir):
    """Test SmolVLM using MLX"""
    print_info("\n" + "="*70)
    print_info("⚡ BACKEND 2: MLX (APPLE SILICON OPTIMIZED)")
    print_info("="*70)
    
    try:
        from mlx_vlm import load, generate
        print_success("   ✅ MLX-VLM imports successful")
    except ImportError as e:
        print_error(f"❌ mlx-vlm not found: {e}")
        print_info("   Install with: pip install mlx mlx-vlm")
        return None
    
    model_load_start = time.time()
    try:
        model_name = "mlx-community/SmolVLM-256M-Instruct-4bit"
        print_info(f"   Loading: {model_name}")
        model, processor = load(model_name)
        model_load_time = time.time() - model_load_start
        print_success(f"   ✅ Model loaded in {model_load_time:.2f}s")
    except Exception as e:
        print_error(f"❌ Failed to load model: {e}")
        import traceback
        traceback.print_exc()
        return None
    
    # Find images
    image_files = sorted(list(images_dir.glob("*.jpeg")) + 
                        list(images_dir.glob("*.jpg")) + 
                        list(images_dir.glob("*.png")))
    
    if not image_files:
        print_error(f"❌ No images found")
        return None
    
    # Process first 5 images for quick comparison
    test_images = image_files[:5]
    print_info(f"\n   Testing on {len(test_images)} images...\n")
    
    results = []
    total_time = 0
    
    for idx, img_path in enumerate(test_images, 1):
        try:
            # Convert to RGB to handle grayscale images
            img = Image.open(img_path).convert("RGB")
            
            # Include <image> token in prompt (required for MLX-VLM)
            prompt = "<image>Describe this image in detail."
            
            start_time = time.time()
            output = generate(
                model=model, 
                processor=processor, 
                image=img, 
                prompt=prompt, 
                max_tokens=100, 
                temp=0.7,
                verbose=False
            )
            inference_time = time.time() - start_time
            
            total_time += inference_time
            
            # Extract text from output
            description = output if isinstance(output, str) else str(output)
            
            results.append({
                'filename': img_path.name,
                'time': inference_time,
                'description': description[:80]
            })
            print_success(f"   [{idx}/{len(test_images)}] {img_path.name}: {inference_time:.2f}s")
            
        except Exception as e:
            print_error(f"   [{idx}/{len(test_images)}] {img_path.name}: Error - {e}")
            import traceback
            traceback.print_exc()
    
    avg_time = total_time / len(results) if results else 0
    
    return {
        'backend': 'MLX (4-bit quantized)',
        'model_load_time': model_load_time,
        'total_inference_time': total_time,
        'avg_per_image': avg_time,
        'images_processed': len(results),
        'results': results
    }

def generate_comparison_report(transformers_results, mlx_results, output_file):
    """Generate markdown comparison report"""
    
    with open(output_file, 'w') as f:
        f.write(f"# SmolVLM Backend Comparison: Transformers vs MLX\n\n")
        f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"**Hardware:** Apple M3\n\n")
        
        f.write("## Performance Summary\n\n")
        f.write("| Metric | Transformers (MPS) | MLX | Speedup |\n")
        f.write("|--------|-------------------|-----|----------|\n")
        
        if transformers_results and mlx_results:
            speedup = transformers_results['avg_per_image'] / mlx_results['avg_per_image'] if mlx_results['avg_per_image'] > 0 else 0
            
            load_speedup = transformers_results['model_load_time']/mlx_results['model_load_time'] if mlx_results['model_load_time'] > 0 else 0
            infer_speedup = transformers_results['total_inference_time']/mlx_results['total_inference_time'] if mlx_results['total_inference_time'] > 0 else 0
            
            f.write(f"| Model Load Time | {transformers_results['model_load_time']:.2f}s | {mlx_results['model_load_time']:.2f}s | {load_speedup:.1f}x |\n")
            f.write(f"| Total Inference Time | {transformers_results['total_inference_time']:.2f}s | {mlx_results['total_inference_time']:.2f}s | {infer_speedup:.1f}x |\n")
            f.write(f"| Avg Time per Image | {transformers_results['avg_per_image']:.2f}s | {mlx_results['avg_per_image']:.2f}s | **{speedup:.1f}x faster** |\n")
            f.write(f"| Images Processed | {transformers_results['images_processed']} | {mlx_results['images_processed']} | - |\n")
        
        f.write("\n## Detailed Results\n\n")
        
        if transformers_results:
            f.write("### Transformers (MPS Backend)\n\n")
            for r in transformers_results['results']:
                f.write(f"- **{r['filename']}**: {r['time']:.2f}s\n")
                f.write(f"  - _{r['description']}_\n\n")
        
        if mlx_results:
            f.write("### MLX (Apple Silicon Optimized)\n\n")
            for r in mlx_results['results']:
                f.write(f"- **{r['filename']}**: {r['time']:.2f}s\n")
                f.write(f"  - _{r['description']}_\n\n")
        
        f.write("\n## Recommendation\n\n")
        if mlx_results and transformers_results and mlx_results['avg_per_image'] > 0:
            speedup = transformers_results['avg_per_image'] / mlx_results['avg_per_image']
            if speedup > 3:
                f.write(f"✅ **Use MLX** - {speedup:.1f}x faster inference on Apple Silicon\n\n")
                f.write("MLX is significantly faster and more memory-efficient on M-series chips.\n")
            elif speedup > 1.5:
                f.write(f"⚠️ **MLX recommended** - {speedup:.1f}x faster but smaller improvement\n\n")
            else:
                f.write(f"⚠️ **Either backend works** - Similar performance ({speedup:.1f}x difference)\n\n")
        elif mlx_results and mlx_results['images_processed'] == 0:
            f.write("❌ **MLX failed** - Use Transformers backend instead\n\n")
            f.write("MLX-VLM encountered errors during inference.\n")

def main():
    parser = argparse.ArgumentParser(description="Compare Transformers vs MLX backends for SmolVLM")
    parser.add_argument("images_dir", help="Directory containing test images")
    parser.add_argument("--output", "-o", default="backend_comparison.md",
                       help="Output markdown file (default: backend_comparison.md)")
    
    args = parser.parse_args()
    
    images_dir = Path(args.images_dir)
    
    if not images_dir.exists():
        print_error(f"❌ Directory not found: {images_dir}")
        return
    
    print_info("\n🔬 SmolVLM Backend Comparison Test")
    print_info("="*70)
    
    # Test both backends
    transformers_results = test_transformers(images_dir)
    mlx_results = test_mlx(images_dir)
    
    # Generate report
    print_info("\n" + "="*70)
    print_info("📊 GENERATING COMPARISON REPORT")
    print_info("="*70)
    
    output_file = Path(args.output)
    generate_comparison_report(transformers_results, mlx_results, output_file)
    
    print_success(f"\n✅ Report saved to: {output_file.absolute()}")
    
    # Print summary
    if transformers_results and mlx_results:
        print_info("\n" + "="*70)
        print_info("📊 FINAL COMPARISON")
        print_info("="*70)
        
        print_info(f"\n🔧 Transformers (MPS):")
        print_info(f"   Model Load: {transformers_results['model_load_time']:.2f}s")
        print_info(f"   Avg per Image: {transformers_results['avg_per_image']:.2f}s")
        print_info(f"   Images Processed: {transformers_results['images_processed']}")
        
        print_info(f"\n⚡ MLX (Apple Silicon):")
        print_info(f"   Model Load: {mlx_results['model_load_time']:.2f}s")
        print_info(f"   Avg per Image: {mlx_results['avg_per_image']:.2f}s")
        print_info(f"   Images Processed: {mlx_results['images_processed']}")
        
        if mlx_results['avg_per_image'] > 0:
            speedup = transformers_results['avg_per_image'] / mlx_results['avg_per_image']
            print_success(f"\n🚀 MLX is {speedup:.1f}x FASTER!")
        else:
            print_error("\n❌ MLX failed to process images")
        
        print_info("="*70)

if __name__ == "__main__":
    main()

