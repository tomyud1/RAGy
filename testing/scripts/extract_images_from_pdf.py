#!/usr/bin/env python3
"""
PDF Image Extractor using Docling
Extracts up to 10 images or processes up to 50 pages (whichever limit is reached first)

Usage:
    python3 extract_images_from_pdf.py path/to/document.pdf
    python3 extract_images_from_pdf.py path/to/document.pdf --max-images 20 --max-pages 100
"""

import sys
import os
import time
import argparse
from pathlib import Path
import shutil

def print_header(text):
    """Print formatted header"""
    print(f"\n{'='*70}")
    print(f"  {text}")
    print('='*70)

def print_success(text):
    """Print success message"""
    print(f"✅ {text}")

def print_error(text):
    """Print error message"""
    print(f"❌ {text}")

def print_info(text):
    """Print info message"""
    print(f"ℹ️  {text}")

def print_progress(text):
    """Print progress message"""
    print(f"⏳ {text}", end='\r')


def prepare_output_directory(base_path="/Users/tomeryud/projects/RAGy"):
    """Create or clean the output directory for extracted images"""
    output_dir = Path(base_path) / "extracted_images"
    
    # If directory exists, clean it
    if output_dir.exists():
        print_info(f"Cleaning existing directory: {output_dir}")
        shutil.rmtree(output_dir)
    
    # Create fresh directory
    output_dir.mkdir(parents=True, exist_ok=True)
    print_success(f"Created output directory: {output_dir}")
    
    return output_dir


def extract_images_from_pdf(pdf_path, max_images=10, max_pages=50, output_dir=None):
    """
    Extract images from PDF using docling
    
    Args:
        pdf_path: Path to PDF file
        max_images: Maximum number of images to extract (default: 10)
        max_pages: Maximum number of pages to process (default: 50)
        output_dir: Directory to save images (default: ./extracted_images)
    
    Returns:
        dict with extraction results
    """
    
    print_header("PDF Image Extraction with Docling")
    
    # Validate PDF exists
    pdf_path = Path(pdf_path)
    if not pdf_path.exists():
        print_error(f"PDF file not found: {pdf_path}")
        return None
    
    print_info(f"PDF: {pdf_path.name}")
    print_info(f"Size: {pdf_path.stat().st_size / 1024 / 1024:.2f} MB")
    print_info(f"Limits: {max_images} images OR {max_pages} pages")
    
    # Prepare output directory
    if output_dir is None:
        output_dir = prepare_output_directory()
    else:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    
    # Import docling
    print_info("Loading docling...")
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        import pypdf
        from PIL import Image
        import io
    except ImportError as e:
        print_error(f"Required package not found: {e}")
        print_info("Install with: pip install docling pypdf pillow")
        return None
    
    # Get total pages in PDF for progress tracking
    try:
        with open(pdf_path, 'rb') as f:
            pdf_reader = pypdf.PdfReader(f)
            total_pages = len(pdf_reader.pages)
        print_info(f"Total pages in PDF: {total_pages}")
        pages_to_process = min(total_pages, max_pages)
        print_info(f"Will process up to: {pages_to_process} pages")
    except Exception as e:
        print_error(f"Could not read PDF metadata: {e}")
        total_pages = "unknown"
        pages_to_process = max_pages
    
    # Configure docling - USE PRODUCTION-LIKE CONFIGURATION
    print_info("Configuring docling converter...")
    
    from docling.datamodel.pipeline_options import AcceleratorOptions
    
    # Configure accelerator like production (auto-detect best device)
    accelerator_options = AcceleratorOptions(
        device='auto',  # Auto-detect: MPS (M3), CUDA, or CPU
        num_threads=8   # Use more threads for faster processing
    )
    
    # Create pipeline with proper settings
    pipeline_options = PdfPipelineOptions(
        accelerator_options=accelerator_options,
        # Use higher batch sizes for faster processing
        ocr_batch_size=8,
        layout_batch_size=8,    # This is critical for picture detection!
        table_batch_size=8,
        # Enrichments off (we just want pictures)
        do_picture_description=False,
        do_ocr=False,
        do_table_structure=True,  # Helps with layout
        do_code_enrichment=False,
        do_formula_enrichment=False,
    )
    
    print_info(f"Device: {accelerator_options.device}, Threads: {accelerator_options.num_threads}")
    print_info(f"Batch sizes: layout={pipeline_options.layout_batch_size}")
    
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pipeline_options
            )
        }
    )
    
    # Start conversion
    print_header("Processing PDF")
    start_time = time.time()
    
    try:
        print_info("Converting PDF with docling...")
        print_info("(This may take a moment...)")
        
        result = converter.convert(str(pdf_path))
        doc = result.document
        
        conversion_time = time.time() - start_time
        print_success(f"PDF converted in {conversion_time:.2f} seconds")
        
    except Exception as e:
        print_error(f"Conversion failed: {e}")
        import traceback
        traceback.print_exc()
        return None
    
    # Extract images from pictures collection
    print_header("Extracting Images")
    
    # Check if doc has pictures
    if not hasattr(doc, 'pictures') or not doc.pictures:
        print_error("No pictures found in document")
        return {
            'success': False,
            'images_extracted': 0,
            'pages_processed': 0,
            'total_time': time.time() - start_time,
            'output_directory': str(output_dir),
            'images': []
        }
    
    total_pictures = len(doc.pictures)
    print_success(f"Found {total_pictures} pictures in document!")
    print_info(f"Will extract up to {max_images} images")
    
    extracted_images = []
    images_found = 0
    
    # Iterate through pictures collection (it's a list)
    for item in doc.pictures:
        images_found += 1
        
        # Get page number for tracking
        page_no = "?"
        if hasattr(item, 'prov') and hasattr(item.prov, 'page_no'):
            page_no = item.prov.page_no
            
            # Check page limit
            if page_no > max_pages:
                print_info(f"Reached page limit (page {page_no} > {max_pages})")
                break
        
        print_progress(f"Processing image {images_found}/{min(total_pictures, max_images)}...")
        
        try:
            # THE CORRECT WAY: Use get_image(doc) method!
            img = None
            
            # Method 1: get_image() method (requires doc parameter)
            if hasattr(item, 'get_image'):
                try:
                    img = item.get_image(doc)  # Pass the document object!
                except Exception as e:
                    if images_found <= 5:
                        print_info(f"⚠️  get_image() failed for picture {images_found}: {e}")
            
            if img is not None:
                # Save image
                image_filename = f"image_{len(extracted_images)+1:03d}.png"
                image_path = output_dir / image_filename
                
                # Save
                img.save(image_path)
                
                # Get metadata
                width, height = img.size
                file_size = image_path.stat().st_size / 1024  # KB
                
                extracted_images.append({
                    'filename': image_filename,
                    'path': str(image_path),
                    'page': page_no,
                    'width': width,
                    'height': height,
                    'size_kb': file_size
                })
                
                print_success(f"✅ Image {len(extracted_images)}: {image_filename} ({width}x{height}, {file_size:.1f}KB, page {page_no})")
                
                # Check image limit
                if len(extracted_images) >= max_images:
                    print()  # New line
                    print_info(f"Reached image limit ({max_images} images)")
                    break
            
            else:
                # No image data found
                if images_found <= 5:  # Only show first few warnings
                    print_info(f"⚠️  Picture {images_found} on page {page_no}: No accessible image data")
                
        except Exception as e:
            print_error(f"Failed to save image {images_found}: {e}")
            continue
        
        # Check if we should stop (based on successfully extracted images)
        if len(extracted_images) >= max_images:
            break
    
    print()  # New line after progress
    
    # Summary
    total_time = time.time() - start_time
    
    print_header("Extraction Summary")
    print_success(f"Images extracted: {len(extracted_images)}")
    print_info(f"Total pictures in PDF: {total_pictures}")
    print_info(f"Pictures processed: {images_found}")
    print_info(f"Total time: {total_time:.2f} seconds")
    print_info(f"Output directory: {output_dir}")
    
    # Show file list
    if extracted_images:
        print_header("Extracted Images")
        print(f"{'#':<4} {'Filename':<20} {'Page':<6} {'Size':<12} {'Dimensions':<15}")
        print('-' * 70)
        for i, img in enumerate(extracted_images, 1):
            print(f"{i:<4} {img['filename']:<20} {img['page']:<6} "
                  f"{img['size_kb']:<11.1f}K {img['width']}x{img['height']:<15}")
    
    return {
        'success': True,
        'images_extracted': len(extracted_images),
        'total_pictures': total_pictures,
        'pictures_processed': images_found,
        'total_time': total_time,
        'output_directory': str(output_dir),
        'images': extracted_images
    }


def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description='Extract images from PDF using docling',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Extract up to 10 images from first 50 pages
  python3 extract_images_from_pdf.py document.pdf
  
  # Custom limits
  python3 extract_images_from_pdf.py document.pdf --max-images 20 --max-pages 100
  
  # Custom output directory
  python3 extract_images_from_pdf.py document.pdf --output-dir /path/to/folder
        """
    )
    
    parser.add_argument('pdf_path', help='Path to PDF file')
    parser.add_argument('--max-images', type=int, default=10,
                       help='Maximum number of images to extract (default: 10)')
    parser.add_argument('--max-pages', type=int, default=50,
                       help='Maximum number of pages to process (default: 50)')
    parser.add_argument('--output-dir', type=str, default=None,
                       help='Output directory for images (default: ./extracted_images)')
    
    args = parser.parse_args()
    
    # Validate inputs
    if args.max_images < 1:
        print_error("max-images must be at least 1")
        return 1
    
    if args.max_pages < 1:
        print_error("max-pages must be at least 1")
        return 1
    
    # Run extraction
    result = extract_images_from_pdf(
        args.pdf_path,
        max_images=args.max_images,
        max_pages=args.max_pages,
        output_dir=args.output_dir
    )
    
    if result is None:
        return 1
    
    # Final message
    print_header("Complete!")
    print_success(f"Successfully extracted {result['images_extracted']} images")
    print_success(f"Images saved to: {result['output_directory']}")
    print_info("You can now use these images for testing SmolDocling-MLX")
    
    return 0


if __name__ == '__main__':
    sys.exit(main())

