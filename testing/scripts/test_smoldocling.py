#!/usr/bin/env python3
"""
Test SmolVLM (Docling's vision model) for image description
Feeds extracted images to the model and generates descriptions.

Model Download:
- The model is automatically downloaded from HuggingFace on first use
- Model: HuggingFaceTB/SmolVLM-256M-Instruct (about 500MB)
- Cached in: ~/.cache/huggingface/hub/
- MLX-optimized version for Apple Silicon (if available)
"""

import argparse
import time
from pathlib import Path
from PIL import Image
from datetime import datetime

def print_info(msg):
    print(f"\033[96m{msg}\033[0m")

def print_success(msg):
    print(f"\033[92m{msg}\033[0m")

def print_error(msg):
    print(f"\033[91m{msg}\033[0m")

def test_smolvlm(images_dir, output_file):
    """Test SmolVLM on extracted images"""
    
    images_dir = Path(images_dir)
    output_file = Path(output_file)
    
    # Import here to time the model loading
    print_info("🔧 Importing Docling and loading model...")
    print_info("   (First run will download ~500MB model from HuggingFace)")
    
    model_load_start = time.time()
    
    try:
        from docling.document_converter import DocumentConverter
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import PdfPipelineOptions, smolvlm_picture_description
        print_success("   ✅ Docling imports successful")
    except ImportError as e:
        print_error(f"❌ Docling not found: {e}")
        print_info("Install with: pip install docling")
        return
    
    # Try to use MLX if available
    use_mlx = False
    try:
        import mlx.core as mx
        use_mlx = True
        print_success("   ✅ MLX detected - will use Apple Silicon optimization")
    except ImportError:
        print_info("   ℹ️  MLX not available - using standard transformers backend")
        print_info("   To enable MLX: pip install mlx mlx-vlm")
    
    # Initialize pipeline with SmolVLM picture description
    try:
        print_info("   Configuring SmolVLM pipeline...")
        pipeline_options = PdfPipelineOptions(
            do_picture_description=True,
            picture_description_options=smolvlm_picture_description(),
        )
        
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
            }
        )
        model_load_time = time.time() - model_load_start
        print_success(f"   ✅ Pipeline configured in {model_load_time:.2f}s")
        print_info("   ⚠️  Note: Model will download on first image processing")
    except Exception as e:
        print_error(f"❌ Failed to configure pipeline: {e}")
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
    
    for idx, img_path in enumerate(image_files, 1):
        print_info(f"\n[{idx}/{len(image_files)}] Processing: {img_path.name}")
        
        try:
            # Load image
            img = Image.open(img_path)
            img_size = f"{img.width}x{img.height}"
            file_size_kb = img_path.stat().st_size / 1024
            
            print_info(f"   Size: {img_size}, File: {file_size_kb:.1f} KB")
            
            # Generate description (timed)
            start_time = time.time()
            
            # Convert PIL Image to format expected by model
            description = model.predict(img)
            
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
            results.append({
                'filename': img_path.name,
                'error': str(e)
            })
    
    # Generate markdown report
    print_info("\n" + "="*70)
    print_info("📊 Generating markdown report...")
    
    with open(output_file, 'w') as f:
        f.write(f"# SmolVLM Image Description Test Results\n\n")
        f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write(f"**Model:** HuggingFaceTB/SmolVLM-256M-Instruct\n")
        f.write(f"**Backend:** {'MLX (Apple Silicon)' if use_mlx else 'Transformers (CPU/GPU)'}\n")
        f.write(f"**Model Load Time:** {model_load_time:.2f}s\n\n")
        
        f.write("## Summary Statistics\n\n")
        f.write(f"- **Total Images:** {len(image_files)}\n")
        f.write(f"- **Successfully Processed:** {len([r for r in results if 'error' not in r])}\n")
        f.write(f"- **Total Inference Time:** {total_inference_time:.2f}s\n")
        if total_inference_time > 0:
            avg_time = total_inference_time / len([r for r in results if 'error' not in r])
            f.write(f"- **Average Time per Image:** {avg_time:.2f}s\n")
        
        f.write("\n## Image Descriptions\n\n")
        
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
    print_success(f"✅ Processed {len(image_files)} images")
    print_info(f"⏱️  Total inference time: {total_inference_time:.2f}s")
    if total_inference_time > 0:
        avg_time = total_inference_time / len([r for r in results if 'error' not in r])
        print_info(f"📈 Average per image: {avg_time:.2f}s")
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
  
  MLX Optimization (optional):
  For faster inference on Apple Silicon (M1/M2/M3):
    pip install mlx mlx-vlm
        """
    )
    parser.add_argument("images_dir", 
                       help="Directory containing extracted images")
    parser.add_argument("--output", "-o", 
                       default="smolvlm_test_results.md",
                       help="Output markdown file (default: smolvlm_test_results.md)")
    
    args = parser.parse_args()
    
    test_smolvlm(args.images_dir, args.output)

if __name__ == "__main__":
    main()

