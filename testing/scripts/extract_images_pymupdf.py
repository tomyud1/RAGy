#!/usr/bin/env python3
"""
Extract images from PDF using PyMuPDF (direct image extraction)
This bypasses Docling's layout detection and extracts actual embedded images.
"""

import fitz  # PyMuPDF
import argparse
from pathlib import Path
import sys

def print_info(msg):
    print(f"\033[96m{msg}\033[0m")

def print_success(msg):
    print(f"\033[92m{msg}\033[0m")

def print_error(msg):
    print(f"\033[91m{msg}\033[0m")

def extract_images_from_pdf(pdf_path, output_dir, max_images=None, max_pages=None):
    """Extract images from PDF using PyMuPDF"""
    
    pdf_path = Path(pdf_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print_info(f"📄 Opening PDF: {pdf_path}")
    
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print_error(f"Failed to open PDF: {e}")
        return
    
    total_pages = len(doc)
    pages_to_process = min(max_pages, total_pages) if max_pages else total_pages
    
    print_info(f"📊 Total pages: {total_pages}, processing: {pages_to_process}")
    
    images_extracted = 0
    
    for page_num in range(pages_to_process):
        print_info(f"\n📄 Processing page {page_num + 1}/{pages_to_process}...")
        
        page = doc[page_num]
        image_list = page.get_images()
        
        print_info(f"   Found {len(image_list)} image(s) on this page")
        
        for img_index, img in enumerate(image_list):
            if max_images and images_extracted >= max_images:
                print_info(f"\n🛑 Reached max images limit ({max_images})")
                doc.close()
                return images_extracted
            
            xref = img[0]  # Image XREF
            
            try:
                # Extract image
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Save image
                output_path = output_dir / f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                with open(output_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                images_extracted += 1
                file_size_kb = len(image_bytes) / 1024
                print_success(f"   ✅ Saved: {output_path.name} ({file_size_kb:.1f} KB)")
                
            except Exception as e:
                print_error(f"   ❌ Failed to extract image {img_index + 1}: {e}")
    
    doc.close()
    
    print_info(f"\n{'='*70}")
    print_success(f"✅ Successfully extracted {images_extracted} images")
    print_info(f"📂 Output directory: {output_dir.absolute()}")
    print_info(f"{'='*70}")
    
    return images_extracted

def main():
    parser = argparse.ArgumentParser(description="Extract images from PDF using PyMuPDF")
    parser.add_argument("pdf_path", help="Path to PDF file")
    parser.add_argument("--output-dir", default="extracted_images", 
                       help="Output directory for extracted images (default: extracted_images)")
    parser.add_argument("--max-images", type=int, 
                       help="Maximum number of images to extract (default: no limit)")
    parser.add_argument("--max-pages", type=int, 
                       help="Maximum number of pages to process (default: all)")
    
    args = parser.parse_args()
    
    extract_images_from_pdf(
        args.pdf_path,
        args.output_dir,
        max_images=args.max_images,
        max_pages=args.max_pages
    )

if __name__ == "__main__":
    main()

