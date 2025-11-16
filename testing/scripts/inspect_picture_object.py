#!/usr/bin/env python3
"""
Inspect what's actually in a picture object from docling
"""

import sys
import argparse
from pathlib import Path

def inspect_pictures(pdf_path, output_dir=None):
    print("="*70)
    print("  Inspecting Picture Objects")
    print("="*70)
    
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions, AcceleratorOptions
    
    # Configure
    accelerator_options = AcceleratorOptions(device='auto', num_threads=8)
    pipeline_options = PdfPipelineOptions(
        accelerator_options=accelerator_options,
        ocr_batch_size=8,
        layout_batch_size=8,
        table_batch_size=8,
        do_picture_description=False,
        do_ocr=False,
        do_table_structure=True,
    )
    
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )
    
    pdf_file = Path(pdf_path)
    print(f"Converting {pdf_file.name}...")
    
    # Track what files exist before conversion
    temp_dir = Path("/tmp")
    before_files = set(temp_dir.glob("**/*")) if temp_dir.exists() else set()
    
    result = converter.convert(str(pdf_path))
    doc = result.document
    
    # Check what files were created
    after_files = set(temp_dir.glob("**/*")) if temp_dir.exists() else set()
    new_files = after_files - before_files
    temp_files_to_copy = []  # Initialize outside if block
    
    # Also check docling cache
    docling_cache = Path.home() / ".cache" / "docling"
    if docling_cache.exists():
        print(f"\n📁 Docling cache: {docling_cache}")
        cache_files = list(docling_cache.glob("**/*"))[:10]
        for f in cache_files:
            if f.is_file():
                print(f"   {f.name} ({f.stat().st_size/1024:.1f}KB)")
    
    if new_files:
        print(f"\n📂 New files created during conversion:")
        for f in sorted(new_files)[:20]:  # Show first 20
            if f.is_file():
                print(f"   {f} ({f.stat().st_size/1024:.1f}KB)")
                # If it's a docling-related file, save it for copying
                if 'docling' in str(f).lower() or f.suffix in ['.png', '.jpg', '.jpeg']:
                    temp_files_to_copy.append(f)
    
    print(f"\n✅ Found {len(doc.pictures)} pictures")
    print(f"📄 Document type: {type(doc).__name__}")
    print(f"📦 Result type: {type(result).__name__}")
    
    # Inspect first picture in detail
    if len(doc.pictures) > 0:
        pic = doc.pictures[0]
        
        print("="*70)
        print("  FIRST PICTURE - COMPLETE DUMP")
        print("="*70)
        print(f"Type: {type(pic).__name__}")
        print(f"Module: {type(pic).__module__}")
        
        # Get ALL attributes
        print("\n📋 All attributes:")
        for attr in sorted(dir(pic)):
            if not attr.startswith('_'):
                try:
                    val = getattr(pic, attr)
                    val_type = type(val).__name__
                    
                    # Show value preview
                    if callable(val):
                        print(f"  {attr}(): <method>")
                    elif val_type in ['str', 'int', 'float', 'bool']:
                        print(f"  {attr}: {val} ({val_type})")
                    elif val_type == 'NoneType':
                        print(f"  {attr}: None")
                    else:
                        print(f"  {attr}: <{val_type}>")
                        
                        # If it's an object, show its attributes too
                        if hasattr(val, '__dict__') and not callable(val):
                            sub_attrs = {k: v for k, v in vars(val).items() if not k.startswith('_')}
                            if sub_attrs:
                                print(f"      └─ {list(sub_attrs.keys())}")
                except Exception as e:
                    print(f"  {attr}: <error: {e}>")
        
        # Try to access the image using the document's get_images() method
        print("\n" + "="*70)
        print("  Trying document.export_to_image_store()")
        print("="*70)
        
        if hasattr(doc, 'export_to_image_store'):
            try:
                print("✅ doc has export_to_image_store method!")
                print("   Attempting to export images...")
                
                output_dir = Path("/Users/tomeryud/projects/RAGy/test_export")
                output_dir.mkdir(exist_ok=True)
                
                doc.export_to_image_store(output_dir)
                
                # Check what was created
                exported_files = list(output_dir.glob("*"))
                print(f"   ✅ Exported {len(exported_files)} files to {output_dir}")
                
                if exported_files:
                    print("   Files created:")
                    for f in exported_files[:10]:
                        print(f"      - {f.name} ({f.stat().st_size/1024:.1f}KB)")
                
            except Exception as e:
                print(f"   ❌ Export failed: {e}")
                import traceback
                traceback.print_exc()
        else:
            print("❌ doc doesn't have export_to_image_store method")
        
        # Check if there's a Picture class with uri/data
        print("\n" + "="*70)
        print("  Checking picture data access")
        print("="*70)
        
        if hasattr(pic, 'uri'):
            print(f"✅ Has uri: {pic.uri}")
        if hasattr(pic, 'data'):
            data = getattr(pic, 'data', None)
            if data:
                print(f"✅ Has data: {len(data)} bytes")
            else:
                print(f"⚠️  Has 'data' attribute but it's None/empty")
        if hasattr(pic, 'get_image'):
            print(f"✅ Has get_image() method")
            try:
                img = pic.get_image(doc)  # Pass doc!
                print(f"   Returned: {type(img).__name__ if img else 'None'}")
                if img:
                    print(f"   ✅ SUCCESS! Got image: {img.size if hasattr(img, 'size') else 'unknown size'}")
                else:
                    print(f"   ❌ Returned None")
                    
                    # Check if we need to provide the result object instead
                    print(f"\n   Trying with result object...")
                    # The doc might need the original result
                    
            except Exception as e:
                print(f"   ❌ Error calling: {e}")
                import traceback
                traceback.print_exc()
        
        # Check self_ref
        print(f"\n📍 self_ref: {pic.self_ref}")
        print(f"   This is how the picture is referenced in the document")
        
        # Maybe pictures need to be loaded from a different source?
        print(f"\n🔍 Checking document structure...")
        print(f"   doc type: {type(doc).__name__}")
        print(f"   doc has pictures: {hasattr(doc, 'pictures')}")
        
        if hasattr(doc, '__dict__'):
            doc_attrs = [k for k in dir(doc) if not k.startswith('_') and not callable(getattr(doc, k, None))]
            print(f"   doc attributes: {doc_attrs[:20]}")
        
        # Check if there's a picture store or similar
        if hasattr(doc, 'picture_store'):
            print(f"   ✅ doc.picture_store exists: {type(doc.picture_store)}")
        
        # Try accessing via the conversion result
        print(f"\n💡 Checking ConversionResult...")
        print(f"   result type: {type(result).__name__}")
        if hasattr(result, '__dict__'):
            result_attrs = {k: type(v).__name__ for k, v in vars(result).items() if not k.startswith('_')}
            print(f"   result attributes: {result_attrs}")
    
    # Export document to different formats to see what's created
    print("\n" + "="*70)
    print("  Exporting Document to Various Formats")
    print("="*70)
    
    # Use provided output directory or default
    if output_dir:
        export_dir = Path(output_dir)
    else:
        export_dir = Path("/Users/tomeryud/projects/RAGy/docling_exports")
    
    export_dir.mkdir(parents=True, exist_ok=True)
    print(f"📂 Export directory: {export_dir}\n")
    
    # Export to Markdown
    try:
        md_file = export_dir / "document.md"
        md_content = doc.export_to_markdown()
        md_file.write_text(md_content)
        print(f"✅ Exported to Markdown: {md_file.name} ({len(md_content)} chars)")
    except Exception as e:
        print(f"❌ Markdown export failed: {e}")
    
    # Export to HTML
    try:
        html_file = export_dir / "document.html"
        html_content = doc.export_to_html()
        html_file.write_text(html_content)
        print(f"✅ Exported to HTML: {html_file.name} ({len(html_content)} chars)")
    except Exception as e:
        print(f"❌ HTML export failed: {e}")
    
    # Export to JSON (document structure)
    try:
        import json
        json_file = export_dir / "document.json"
        # Try model_dump if available (Pydantic v2)
        if hasattr(doc, 'model_dump'):
            doc_dict = doc.model_dump()
        elif hasattr(doc, 'dict'):
            doc_dict = doc.dict()
        else:
            doc_dict = vars(doc)
        
        json_file.write_text(json.dumps(doc_dict, indent=2, default=str))
        print(f"✅ Exported to JSON: {json_file.name}")
        
        # Check if pictures are in JSON with image data
        if 'pictures' in doc_dict:
            print(f"   Pictures in JSON: {len(doc_dict['pictures'])}")
            if doc_dict['pictures']:
                first_pic = doc_dict['pictures'][0]
                print(f"   First picture keys: {list(first_pic.keys())}")
                if 'image' in first_pic:
                    print(f"   First picture has 'image' key: {type(first_pic['image'])}")
                    
    except Exception as e:
        print(f"❌ JSON export failed: {e}")
        import traceback
        traceback.print_exc()
    
    # Try to export images if there's a method
    print(f"\n🖼️  Trying image export methods...")
    
    # Method 1: Check for export_images or similar
    for method_name in ['export_images', 'save_images', 'extract_images', 'get_images']:
        if hasattr(doc, method_name):
            print(f"   ✅ Found method: {method_name}")
            try:
                method = getattr(doc, method_name)
                result_val = method(export_dir)
                print(f"      Result: {result_val}")
            except Exception as e:
                print(f"      Error: {e}")
    
    # Check what files were created by exports
    exported_files = list(export_dir.glob("*"))
    print(f"\n📂 Files in export directory: {len(exported_files)}")
    for f in exported_files:
        size = f.stat().st_size / 1024
        print(f"   - {f.name} ({size:.1f}KB)")
    
    # Look for images in subdirectories
    image_files = list(export_dir.glob("**/*.png")) + list(export_dir.glob("**/*.jpg"))
    if image_files:
        print(f"\n🎉 Found {len(image_files)} image files!")
        for img in image_files[:10]:
            print(f"   ✅ {img.relative_to(export_dir)}")
    
    # Copy any temp files to output directory
    if temp_files_to_copy:
        print(f"\n📋 Copying {len(temp_files_to_copy)} temp files to output directory...")
        import shutil
        temp_subdir = export_dir / "temp_files"
        temp_subdir.mkdir(exist_ok=True)
        
        for temp_file in temp_files_to_copy:
            try:
                dest = temp_subdir / temp_file.name
                shutil.copy2(temp_file, dest)
                print(f"   ✅ Copied: {temp_file.name}")
            except Exception as e:
                print(f"   ❌ Failed to copy {temp_file.name}: {e}")
    
    # Final summary
    print(f"\n" + "="*70)
    print(f"  SUMMARY")
    print("="*70)
    print(f"📂 All outputs saved to: {export_dir}")
    print(f"📄 Total files created: {len(list(export_dir.glob('**/*')))}")
    print(f"🖼️  Image files found: {len(image_files)}")
    print(f"\nTo browse outputs:")
    print(f"   cd {export_dir}")
    print(f"   ls -lh")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Inspect PDF structure and export all docling outputs',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    
    parser.add_argument('pdf_path', help='Path to PDF file')
    parser.add_argument('--output-dir', '-o', 
                       default='/Users/tomeryud/projects/RAGy/docling_exports',
                       help='Output directory for all exports (default: ./docling_exports)')
    
    args = parser.parse_args()
    
    inspect_pictures(args.pdf_path, args.output_dir)

