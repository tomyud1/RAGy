#!/usr/bin/env python3
"""
Diagnostic script to inspect PDF structure and see how docling stores images
"""

import sys
from pathlib import Path

def diagnose_pdf(pdf_path):
    """Inspect PDF structure with docling"""
    
    print("="*70)
    print("  PDF Structure Diagnostic")
    print("="*70)
    
    pdf_path = Path(pdf_path)
    if not pdf_path.exists():
        print(f"❌ PDF not found: {pdf_path}")
        return
    
    print(f"📄 PDF: {pdf_path.name}")
    print(f"📦 Size: {pdf_path.stat().st_size / 1024 / 1024:.2f} MB\n")
    
    # Import docling
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import PdfPipelineOptions
        print("✅ Docling imported\n")
    except ImportError as e:
        print(f"❌ Import error: {e}")
        return
    
    # Configure converter - MUST keep layout detection!
    print("⏳ Converting PDF (this may take a minute)...")
    pipeline_options = PdfPipelineOptions(
        # Keep layout detection enabled (default) - essential for finding pictures!
        do_picture_description=False,
        do_ocr=False,
        do_table_structure=True,  # Helps with layout
        do_code_enrichment=False,
        do_formula_enrichment=False,
    )
    
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )
    
    result = converter.convert(str(pdf_path))
    doc = result.document
    
    print("✅ Conversion complete\n")
    
    # Inspect document structure
    print("="*70)
    print("  Document Items Analysis")
    print("="*70)
    
    item_types = {}
    picture_count = 0
    items_with_image_attr = 0
    
    for i, item in enumerate(doc.iterate_items()):
        # Count by label
        label = getattr(item, 'label', 'unknown')
        item_types[label] = item_types.get(label, 0) + 1
        
        # Check if it's a picture
        if label == 'picture':
            picture_count += 1
            print(f"\n📷 Picture #{picture_count} found:")
            print(f"   Type: {type(item).__name__}")
            
            # List all attributes
            attrs = [attr for attr in dir(item) if not attr.startswith('_')]
            print(f"   Attributes: {', '.join(attrs[:10])}...")
            
            # Check for image data
            if hasattr(item, 'image'):
                print(f"   ✅ Has 'image' attribute")
                img_obj = item.image
                print(f"   Image type: {type(img_obj).__name__}")
                
                # Check image attributes
                if img_obj is not None:
                    img_attrs = [attr for attr in dir(img_obj) if not attr.startswith('_')]
                    print(f"   Image attributes: {', '.join(img_attrs)}")
                    
                    # Check for common image properties
                    if hasattr(img_obj, 'pil_image'):
                        print(f"   ✅ Has pil_image")
                    if hasattr(img_obj, 'uri'):
                        print(f"   ✅ Has uri: {getattr(img_obj, 'uri', '')[:100]}")
                    if hasattr(img_obj, 'data'):
                        print(f"   ✅ Has data (length: {len(getattr(img_obj, 'data', b''))})")
                    if hasattr(img_obj, 'bytes'):
                        print(f"   ✅ Has bytes (length: {len(getattr(img_obj, 'bytes', b''))})")
                    if hasattr(img_obj, 'size'):
                        print(f"   ✅ Has size: {getattr(img_obj, 'size', None)}")
                else:
                    print(f"   ⚠️  image attribute is None")
            else:
                print(f"   ❌ No 'image' attribute")
            
            # Check for other image-related attributes
            if hasattr(item, 'data'):
                print(f"   ✅ Has 'data' attribute directly on item")
            if hasattr(item, 'prov'):
                prov = item.prov
                print(f"   Page: {getattr(prov, 'page_no', '?')}")
                if hasattr(prov, 'bbox'):
                    bbox = prov.bbox
                    print(f"   BBox: {bbox}")
            
            # Check text content
            if hasattr(item, 'text'):
                text = getattr(item, 'text', '')
                if text:
                    print(f"   Text: '{text[:100]}...'")
            
            # Only show first 3 pictures in detail
            if picture_count >= 3:
                print(f"\n   (Showing details for first 3 pictures only...)")
                break
    
    # Summary
    print("\n" + "="*70)
    print("  Summary")
    print("="*70)
    print(f"Total items: {sum(item_types.values())}")
    print(f"\nItem types found:")
    for label, count in sorted(item_types.items(), key=lambda x: x[1], reverse=True):
        print(f"  - {label}: {count}")
    
    print(f"\n📷 Total pictures: {picture_count}")
    
    if picture_count == 0:
        print("\n⚠️  No picture items found in this PDF!")
        print("   Possible reasons:")
        print("   1. PDF doesn't contain images")
        print("   2. Images are embedded as part of page background")
        print("   3. Docling didn't detect them as separate picture items")
        print("\n   Try using pdf2image to extract page images instead.")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 diagnose_pdf_structure.py <pdf_path>")
        sys.exit(1)
    
    diagnose_pdf(sys.argv[1])

