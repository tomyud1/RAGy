#!/usr/bin/env python3
"""
DEBUG version - Shows exactly what docling is finding
"""

import sys
from pathlib import Path
import time

def extract_with_debug(pdf_path, max_pages=50):
    """Extract with detailed debugging"""
    
    print("="*70)
    print("  DEBUG: PDF Image Extraction")
    print("="*70)
    
    pdf_path = Path(pdf_path)
    print(f"📄 PDF: {pdf_path.name}")
    
    # Import
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions, AcceleratorOptions
    
    # Configure - PRODUCTION-LIKE SETTINGS
    print("\n⚙️  Configuration:")
    accelerator_options = AcceleratorOptions(
        device='auto',
        num_threads=8
    )
    
    pipeline_options = PdfPipelineOptions(
        accelerator_options=accelerator_options,
        ocr_batch_size=8,
        layout_batch_size=8,
        table_batch_size=8,
        do_picture_description=False,
        do_ocr=False,
        do_table_structure=True,
        do_code_enrichment=False,
        do_formula_enrichment=False,
    )
    print(f"   - device: {accelerator_options.device}")
    print(f"   - threads: {accelerator_options.num_threads}")
    print(f"   - layout_batch_size: {pipeline_options.layout_batch_size}")
    print(f"   - picture_description: {pipeline_options.do_picture_description}")
    print(f"   - ocr: {pipeline_options.do_ocr}")
    print(f"   - table_structure: {pipeline_options.do_table_structure}")
    
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )
    
    # Convert
    print("\n⏳ Converting (please wait)...")
    start = time.time()
    result = converter.convert(str(pdf_path))
    doc = result.document
    elapsed = time.time() - start
    print(f"✅ Converted in {elapsed:.1f}s")
    
    # Analyze
    print("\n" + "="*70)
    print("  DOCUMENT ANALYSIS")
    print("="*70)
    
    item_counts = {}
    picture_items = []
    page_count = 0
    
    for i, item in enumerate(doc.iterate_items()):
        # Count types
        label = getattr(item, 'label', 'unknown')
        item_counts[label] = item_counts.get(label, 0) + 1
        
        # Track pages
        if hasattr(item, 'prov') and hasattr(item.prov, 'page_no'):
            page_count = max(page_count, item.prov.page_no)
        
        # Find pictures
        if label == 'picture':
            picture_items.append(item)
            if len(picture_items) <= 3:  # Show first 3 in detail
                print(f"\n📷 PICTURE #{len(picture_items)}:")
                print(f"   Type: {type(item).__name__}")
                
                # Show all attributes
                attrs = {k: v for k, v in vars(item).items() if not k.startswith('_')}
                for key, val in attrs.items():
                    if key == 'image':
                        print(f"   - {key}: {type(val).__name__}")
                        if val is not None:
                            img_attrs = {k: v for k, v in vars(val).items() if not k.startswith('_')}
                            for ik, iv in img_attrs.items():
                                print(f"      └─ {ik}: {type(iv).__name__}")
                    elif key == 'prov':
                        print(f"   - prov.page_no: {getattr(val, 'page_no', '?')}")
                    else:
                        val_str = str(val)[:100] if val else 'None'
                        print(f"   - {key}: {val_str}")
        
        if page_count >= max_pages:
            print(f"\n⚠️  Stopping at page {max_pages}")
            break
    
    # Summary
    print("\n" + "="*70)
    print("  SUMMARY")
    print("="*70)
    print(f"Total items: {sum(item_counts.values())}")
    print(f"Pages seen: {page_count}")
    print(f"\nItem types:")
    for label, count in sorted(item_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {label}: {count}")
    
    print(f"\n📷 PICTURES FOUND: {len(picture_items)}")
    
    if len(picture_items) == 0:
        print("\n❌ NO PICTURES DETECTED!")
        print("   This means docling's layout model didn't find any picture regions.")
        print("   Possible reasons:")
        print("   1. Layout detection isn't running")
        print("   2. PDF images are embedded in a way docling doesn't recognize")
        print("   3. Need different pipeline settings")
    
    # Try to check if images are in doc.pictures
    if hasattr(doc, 'pictures'):
        print(f"\n📦 doc.pictures collection: {len(doc.pictures)} items")
        if len(doc.pictures) > 0:
            print("   ✅ Pictures ARE in the collection!")
            print("   Checking first 3 pictures...")
            for i, pic in enumerate(doc.pictures):
                if i < 3:
                    print(f"\n   Picture #{i+1}:")
                    print(f"      Type: {type(pic).__name__}")
                    
                    # Check for pil_image attribute
                    if hasattr(pic, 'pil_image'):
                        print(f"      ✅ Has pil_image: {pic.pil_image is not None}")
                        if pic.pil_image:
                            print(f"         Size: {pic.pil_image.size}")
                    
                    # Check for image attribute
                    if hasattr(pic, 'image'):
                        print(f"      Has image: {type(pic.image).__name__ if pic.image else None}")
                    
                    # Check for data
                    if hasattr(pic, 'data'):
                        print(f"      Has data: {len(pic.data) if pic.data else 0} bytes")
                    
                    # Check for page info
                    if hasattr(pic, 'prov') and hasattr(pic.prov, 'page_no'):
                        print(f"      Page: {pic.prov.page_no}")
                
                if i >= 2:  # Stop after 3
                    break
            
            print(f"\n   💡 SOLUTION: Extract from doc.pictures list directly!")
    
    return len(picture_items)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 extract_images_debug.py <pdf_path>")
        sys.exit(1)
    
    count = extract_with_debug(sys.argv[1])
    print(f"\n{'='*70}")
    print(f"Result: {count} picture items found")
    print('='*70)

