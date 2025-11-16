#!/usr/bin/env python3
"""
Test SmolVLM directly for image description
Feeds extracted images to the SmolVLM model and generates descriptions.

Model Download:
- The model is automatically downloaded from HuggingFace on first use
- Model: HuggingFaceTB/SmolVLM-256M-Instruct (about 500MB)
- Cached in: ~/.cache/huggingface/hub/
- Can use MLX-optimized version for Apple Silicon (if mlx-vlm is installed)
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

def test_smolvlm_transformers(images_dir, output_file):
    """Test SmolVLM using transformers library"""
    
    images_dir = Path(images_dir)
    output_file = Path(output_file)
    
    # Import here to time the model loading
    print_info("🔧 Loading SmolVLM model...")
    print_info("   (First run will download ~500MB from HuggingFace)")
    
    model_load_start = time.time()
    
    try:
        from transformers import AutoProcessor, AutoModelForVision2Seq
        import torch
        print_success("   ✅ Transformers imports successful")
    except ImportError as e:
        print_error(f"❌ transformers not found: {e}")
        print_info("Install with: pip install transformers torch pillow")
        return
    
    # Check device
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    print_info(f"   Using device: {device}")
    
    # Load model and processor
    try:
        print_info("   Loading model and processor...")
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
        import traceback
        traceback.print_exc()
        return
    
    # Find images
    image_files = sorted(list(images_dir.glob("*.jpeg")) + 
                        list(images_dir.glob("*.jpg")) + 
                        list(images_dir.glob("*.png")))
    
    if not image_files:
        print_error(f"❌ No images found in {images_dir}")
        return
    
    print_info(f"\n📸 Found {len(image_files)} images to process\n")
    print_info("="*70)
    
    # Process images
    results = []
    total_inference_time = 0
    
    prompt = "Describe this image in detail."
    
    for idx, img_path in enumerate(image_files, 1):
        print_info(f"\n[{idx}/{len(image_files)}] Processing: {img_path.name}")
        
        try:
            # Load image
            img = Image.open(img_path).convert("RGB")
            img_size = f"{img.width}x{img.height}"
            file_size_kb = img_path.stat().st_size / 1024
            
            print_info(f"   Size: {img_size}, File: {file_size_kb:.1f} KB")
            
            # Prepare inputs
            messages = [
                {
                    "role": "user",
                    "content": [
                        {"type": "image"},
                        {"type": "text", "text": prompt}
                    ]
                },
            ]
            
            # Generate description (timed)
            start_time = time.time()
            
            # Apply chat template
            text_input = processor.apply_chat_template(messages, add_generation_prompt=True)
            inputs = processor(text=text_input, images=[img], return_tensors="pt").to(device)
            
            # Generate
            with torch.no_grad():
                generated_ids = model.generate(**inputs, max_new_tokens=500)
            
            generated_texts = processor.batch_decode(
                generated_ids[:, inputs['input_ids'].size(1):],
                skip_special_tokens=True
            )
            
            description = generated_texts[0].strip()
            
            inference_time = time.time() - start_time
            total_inference_time += inference_time
            
            print_success(f"   ⏱️  Time: {inference_time:.2f}s")
            print_info(f"   📝 Description: {description[:100]}...")
            
            results.append({
                'filename': img_path.name,
                'size': img_size,
                'file_size_kb': file_size_kb,
                'inference_time': inference_time,
                'description': description
            })
            
        except Exception as e:
            print_error(f"   ❌ Error: {e}")
            import traceback
            traceback.print_exc()
            results.append({
                'filename': img_path.name,
                'error': str(e)
            })
    
    # Generate markdown report
    print_info("\n" + "="*70)
    print_info("📊 Generating markdown report...")
    
    successful_results = [r for r in results if 'error' not in r]
    
    with open(output_file, 'w') as f:
        f.write(f"# SmolVLM Image Description Test Results\n\n")
        f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"**Model:** HuggingFaceTB/SmolVLM-256M-Instruct\n")
        f.write(f"**Device:** {device}\n")
        f.write(f"**Model Load Time:** {model_load_time:.2f}s\n\n")
        
        f.write("## Summary Statistics\n\n")
        f.write(f"- **Total Images:** {len(image_files)}\n")
        f.write(f"- **Successfully Processed:** {len(successful_results)}\n")
        f.write(f"- **Failed:** {len(results) - len(successful_results)}\n")
        f.write(f"- **Total Inference Time:** {total_inference_time:.2f}s\n")
        if successful_results:
            avg_time = total_inference_time / len(successful_results)
            f.write(f"- **Average Time per Image:** {avg_time:.2f}s\n")
        
        f.write("\n---\n\n")
        f.write("## Image Descriptions\n\n")
        
        for idx, result in enumerate(results, 1):
            f.write(f"### {idx}. {result['filename']}\n\n")
            
            if 'error' in result:
                f.write(f"❌ **Error:** {result['error']}\n\n")
            else:
                f.write(f"- **Image Size:** {result['size']}\n")
                f.write(f"- **File Size:** {result['file_size_kb']:.1f} KB\n")
                f.write(f"- **Inference Time:** {result['inference_time']:.2f}s\n\n")
                f.write(f"**Description:**\n\n")
                f.write(f"{result['description']}\n\n")
            
            f.write("---\n\n")
    
    print_success(f"✅ Report saved to: {output_file.absolute()}")
    
    print_info("\n" + "="*70)
    print_info("📊 SUMMARY")
    print_info("="*70)
    print_success(f"✅ Processed {len(successful_results)}/{len(image_files)} images successfully")
    print_info(f"⏱️  Total inference time: {total_inference_time:.2f}s")
    if successful_results:
        avg_time = total_inference_time / len(successful_results)
        print_info(f"📈 Average per image: {avg_time:.2f}s")
    print_info(f"🔧 Model load time: {model_load_time:.2f}s")
    print_info(f"📄 Full report: {output_file.absolute()}")
    print_info("="*70)

def main():
    parser = argparse.ArgumentParser(
        description="Test SmolVLM for image description",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Model Download Information:
  On first run, the SmolVLM model (~500MB) will be automatically downloaded
  from HuggingFace and cached in: ~/.cache/huggingface/hub/
  
  Performance Tips:
  - Apple Silicon (M1/M2/M3): Uses MPS acceleration automatically
  - For faster inference: pip install mlx mlx-vlm (for MLX-optimized version)
  - CPU inference will be slower but works on any system
        """
    )
    parser.add_argument("images_dir", 
                       help="Directory containing extracted images")
    parser.add_argument("--output", "-o", 
                       default="smolvlm_test_results.md",
                       help="Output markdown file (default: smolvlm_test_results.md)")
    
    args = parser.parse_args()
    
    test_smolvlm_transformers(args.images_dir, args.output)

if __name__ == "__main__":
    main()

