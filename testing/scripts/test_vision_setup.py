#!/usr/bin/env python3
"""
Test script for vision model setup in RAGy
Tests both local MLX and cloud vision options

Usage:
    python3 test_vision_setup.py
    python3 test_vision_setup.py --cloud gemini
    python3 test_vision_setup.py --cloud openai
"""

import os
import sys
import json
import argparse
from pathlib import Path

def print_header(text):
    """Print a formatted header"""
    print(f"\n{'='*60}")
    print(f"  {text}")
    print('='*60)

def print_success(text):
    """Print success message"""
    print(f"✅ {text}")

def print_error(text):
    """Print error message"""
    print(f"❌ {text}")

def print_warning(text):
    """Print warning message"""
    print(f"⚠️  {text}")

def print_info(text):
    """Print info message"""
    print(f"ℹ️  {text}")


def test_environment():
    """Test environment configuration"""
    print_header("Testing Environment")
    
    # Check Python version
    py_version = sys.version_info
    if py_version >= (3, 9):
        print_success(f"Python version: {py_version.major}.{py_version.minor}.{py_version.micro}")
    else:
        print_error(f"Python version too old: {py_version.major}.{py_version.minor}")
        print_info("Please upgrade to Python 3.9+")
        return False
    
    # Check project directory
    project_root = Path("/Users/tomeryud/projects/RAGy")
    if project_root.exists():
        print_success(f"Project directory found: {project_root}")
    else:
        print_error(f"Project directory not found: {project_root}")
        return False
    
    # Check if we're in the right directory
    current_dir = Path.cwd()
    print_info(f"Current directory: {current_dir}")
    
    return True


def test_docling_installation():
    """Test if docling is installed and importable"""
    print_header("Testing Docling Installation")
    
    try:
        import docling
        print_success("Docling is installed")
        
        # Try to import specific classes
        from docling.document_converter import DocumentConverter
        print_success("DocumentConverter available")
        
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        print_success("PdfPipelineOptions available")
        
        # Check version if available
        if hasattr(docling, '__version__'):
            print_info(f"Docling version: {docling.__version__}")
        
        return True
        
    except ImportError as e:
        print_error(f"Docling not installed: {e}")
        print_info("Install with: pip install docling")
        return False


def test_mlx_support():
    """Test if MLX is available for Apple Silicon optimization"""
    print_header("Testing MLX Support (Apple Silicon)")
    
    # Check if on macOS
    if sys.platform != 'darwin':
        print_warning("Not on macOS - MLX not available")
        return False
    
    try:
        import mlx
        print_success("MLX is installed")
        
        try:
            import mlx_lm
            print_success("MLX-LM is installed")
        except ImportError:
            print_warning("MLX-LM not installed (optional)")
            print_info("Install with: pip install mlx-lm")
        
        return True
        
    except ImportError:
        print_warning("MLX not installed")
        print_info("Install with: pip install mlx mlx-lm")
        print_info("MLX provides optimized inference on Apple Silicon")
        return False


def test_cloud_config(provider='gemini'):
    """Test cloud API configuration"""
    print_header(f"Testing Cloud Configuration ({provider})")
    
    # Check if cloud vision is enabled
    use_cloud = os.getenv('USE_CLOUD_VISION', 'false').lower()
    print_info(f"USE_CLOUD_VISION={use_cloud}")
    
    if use_cloud != 'true':
        print_warning("Cloud vision not enabled in environment")
        print_info("To enable: export USE_CLOUD_VISION=true")
    
    # Check provider setting
    env_provider = os.getenv('CLOUD_VISION_PROVIDER', 'gemini').lower()
    print_info(f"CLOUD_VISION_PROVIDER={env_provider}")
    
    # Check API key
    if provider == 'gemini':
        api_key_name = 'GOOGLE_API_KEY'
    elif provider == 'openai':
        api_key_name = 'OPENAI_API_KEY'
    else:
        print_error(f"Unknown provider: {provider}")
        return False
    
    api_key = os.getenv(api_key_name)
    
    if api_key:
        # Mask the key for security
        masked_key = api_key[:8] + '...' + api_key[-4:] if len(api_key) > 12 else '***'
        print_success(f"{api_key_name} is set: {masked_key}")
        print_info(f"Key length: {len(api_key)} characters")
        return True
    else:
        print_error(f"{api_key_name} not set")
        print_info(f"Set it with: export {api_key_name}=your_key_here")
        print_info(f"Or add to .env file in project root")
        return False


def test_docling_cloud_api():
    """Test if docling's cloud API options are available"""
    print_header("Testing Docling Cloud API Support")
    
    try:
        from docling.datamodel.pipeline_options import PictureDescriptionApiOptions
        print_success("PictureDescriptionApiOptions available")
        
        # Try to create a sample configuration
        test_config = PictureDescriptionApiOptions(
            url="http://test.example.com/v1/chat/completions",
            params={"model": "test", "max_tokens": 100},
            concurrency=1,
            prompt="Test prompt",
            timeout=30
        )
        print_success("Successfully created test PictureDescriptionApiOptions")
        
        return True
        
    except ImportError as e:
        print_error(f"PictureDescriptionApiOptions not available: {e}")
        print_info("You may need to upgrade docling")
        print_info("Run: pip install --upgrade docling")
        return False
    except Exception as e:
        print_error(f"Error creating test config: {e}")
        return False


def test_create_pipeline(use_cloud=False, provider='gemini'):
    """Test creating a docling pipeline with vision options"""
    print_header(f"Testing Pipeline Creation ({'Cloud' if use_cloud else 'Local'})")
    
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        from docling.datamodel.base_models import InputFormat
        
        if use_cloud:
            # Test cloud configuration
            from docling.datamodel.pipeline_options import PictureDescriptionApiOptions
            
            # Provider-specific config
            if provider == 'gemini':
                url = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions'
                model = 'gemini-1.5-flash'
                api_key = os.getenv('GOOGLE_API_KEY')
                headers = {
                    'Authorization': f'Bearer {api_key}',
                    'Content-Type': 'application/json'
                }
            elif provider == 'openai':
                url = 'https://api.openai.com/v1/chat/completions'
                model = 'gpt-4o-mini'
                api_key = os.getenv('OPENAI_API_KEY')
                headers = {
                    'Authorization': f'Bearer {api_key}',
                    'Content-Type': 'application/json'
                }
            else:
                print_error(f"Unknown provider: {provider}")
                return False
            
            if not api_key:
                print_error(f"API key not set for {provider}")
                return False
            
            picture_options = PictureDescriptionApiOptions(
                url=url,
                params={
                    'model': model,
                    'max_tokens': 500,
                    'temperature': 0.3,
                },
                headers=headers,
                concurrency=4,
                prompt="Describe this image for document understanding.",
                timeout=30,
            )
            
            pipeline_options = PdfPipelineOptions(
                enable_remote_services=True,
                do_picture_description=True,
                picture_options=picture_options,
            )
            
            print_success(f"Cloud pipeline configured for {provider}")
            
        else:
            # Test local configuration
            pipeline_options = PdfPipelineOptions(
                do_picture_description=True,
            )
            
            print_success("Local pipeline configured (MLX-optimized)")
        
        # Try to create converter
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(
                    pipeline_options=pipeline_options
                )
            }
        )
        
        print_success("DocumentConverter created successfully")
        print_info("Pipeline is ready for document processing!")
        
        return True
        
    except Exception as e:
        print_error(f"Failed to create pipeline: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_sample_conversion(use_cloud=False, provider='gemini'):
    """Test actual document conversion if sample file exists"""
    print_header("Testing Sample Document Conversion")
    
    # Look for sample PDF
    sample_files = [
        Path("/Users/tomeryud/projects/RAGy/test.pdf"),
        Path("/Users/tomeryud/projects/RAGy/sample.pdf"),
        Path.home() / "Downloads" / "test.pdf",
    ]
    
    sample_pdf = None
    for f in sample_files:
        if f.exists():
            sample_pdf = f
            break
    
    if not sample_pdf:
        print_warning("No sample PDF found")
        print_info("To test conversion, place a PDF file at:")
        print_info("  /Users/tomeryud/projects/RAGy/test.pdf")
        print_info("Skipping conversion test")
        return None
    
    print_info(f"Found sample PDF: {sample_pdf}")
    print_info(f"File size: {sample_pdf.stat().st_size / 1024:.2f} KB")
    
    # Ask user if they want to proceed
    response = input("\nProceed with actual conversion test? (y/N): ")
    if response.lower() != 'y':
        print_info("Skipping conversion test")
        return None
    
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        from docling.datamodel.base_models import InputFormat
        import time
        
        # Create pipeline
        if use_cloud:
            from docling.datamodel.pipeline_options import PictureDescriptionApiOptions
            
            if provider == 'gemini':
                url = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions'
                model = 'gemini-1.5-flash'
                api_key = os.getenv('GOOGLE_API_KEY')
                headers = {'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'}
            elif provider == 'openai':
                url = 'https://api.openai.com/v1/chat/completions'
                model = 'gpt-4o-mini'
                api_key = os.getenv('OPENAI_API_KEY')
                headers = {'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'}
            
            picture_options = PictureDescriptionApiOptions(
                url=url,
                params={'model': model, 'max_tokens': 500},
                headers=headers,
                concurrency=4,
                prompt="Describe this image.",
                timeout=30,
            )
            
            pipeline_options = PdfPipelineOptions(
                enable_remote_services=True,
                do_picture_description=True,
                picture_options=picture_options,
            )
        else:
            pipeline_options = PdfPipelineOptions(
                do_picture_description=True,
            )
        
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
            }
        )
        
        print_info("Starting conversion...")
        start_time = time.time()
        
        result = converter.convert(str(sample_pdf))
        
        elapsed = time.time() - start_time
        print_success(f"Conversion completed in {elapsed:.2f} seconds")
        
        # Count images
        image_count = 0
        described_count = 0
        
        doc = result.document
        for item in doc.iterate_items():
            if hasattr(item, 'label') and item.label == 'picture':
                image_count += 1
                if hasattr(item, 'caption') and item.caption:
                    described_count += 1
                    print_success(f"Image {image_count} described: {item.caption[:80]}...")
        
        print_info(f"Total images: {image_count}")
        print_info(f"Described: {described_count}")
        
        if image_count > 0 and described_count == image_count:
            print_success("All images have descriptions!")
            return True
        elif image_count == 0:
            print_warning("No images found in PDF")
            return None
        else:
            print_warning(f"Some images not described: {described_count}/{image_count}")
            return False
        
    except Exception as e:
        print_error(f"Conversion failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Main test runner"""
    parser = argparse.ArgumentParser(description='Test vision model setup for RAGy')
    parser.add_argument('--cloud', choices=['gemini', 'openai'], help='Test cloud provider')
    parser.add_argument('--full-test', action='store_true', help='Run full conversion test')
    args = parser.parse_args()
    
    print_header("RAGy Vision Model Setup Test")
    print_info("This script will test your vision model configuration")
    
    results = []
    
    # Test 1: Environment
    results.append(('Environment', test_environment()))
    
    # Test 2: Docling installation
    results.append(('Docling Installation', test_docling_installation()))
    
    # Test 3: MLX support (if on macOS)
    if sys.platform == 'darwin':
        results.append(('MLX Support', test_mlx_support()))
    
    # Test 4: Cloud configuration if requested
    if args.cloud:
        results.append((f'Cloud Config ({args.cloud})', test_cloud_config(args.cloud)))
        results.append(('Cloud API Options', test_docling_cloud_api()))
        results.append((f'Pipeline Creation (Cloud)', test_create_pipeline(True, args.cloud)))
        
        if args.full_test:
            conv_result = test_sample_conversion(True, args.cloud)
            if conv_result is not None:
                results.append(('Sample Conversion', conv_result))
    else:
        # Test local/MLX setup
        results.append(('Pipeline Creation (Local)', test_create_pipeline(False)))
        
        if args.full_test:
            conv_result = test_sample_conversion(False)
            if conv_result is not None:
                results.append(('Sample Conversion', conv_result))
    
    # Summary
    print_header("Test Summary")
    
    passed = sum(1 for _, result in results if result is True)
    failed = sum(1 for _, result in results if result is False)
    skipped = sum(1 for _, result in results if result is None)
    total = len(results)
    
    for name, result in results:
        if result is True:
            print_success(f"{name}: PASSED")
        elif result is False:
            print_error(f"{name}: FAILED")
        else:
            print_info(f"{name}: SKIPPED")
    
    print(f"\n{'='*60}")
    print(f"Results: {passed}/{total} passed, {failed} failed, {skipped} skipped")
    print('='*60)
    
    # Recommendations
    print_header("Recommendations")
    
    if failed == 0 and passed > 0:
        print_success("All tests passed! Your setup is ready.")
        
        if not args.cloud:
            print_info("\nNext steps:")
            print_info("1. Try local MLX processing first")
            print_info("2. If you get memory errors, run:")
            print_info("   python3 test_vision_setup.py --cloud gemini")
    
    elif failed > 0:
        print_warning("Some tests failed. Review the errors above.")
        
        # Specific recommendations
        if not test_docling_installation():
            print_info("\n→ Install docling: pip install docling")
        
        if args.cloud and not test_cloud_config(args.cloud):
            if args.cloud == 'gemini':
                print_info("\n→ Get API key: https://aistudio.google.com/app/apikey")
                print_info("→ Set it: export GOOGLE_API_KEY=your_key")
            elif args.cloud == 'openai':
                print_info("\n→ Get API key: https://platform.openai.com/api-keys")
                print_info("→ Set it: export OPENAI_API_KEY=your_key")
    
    # Exit code
    sys.exit(0 if failed == 0 else 1)


if __name__ == '__main__':
    main()

