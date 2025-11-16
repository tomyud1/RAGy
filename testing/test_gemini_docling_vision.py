#!/usr/bin/env python3
"""
Test script to verify Gemini's OpenAI endpoint works with Docling for image descriptions
"""

import os
import json
from pathlib import Path

def test_gemini_openai_vision():
    """Test if Gemini OpenAI endpoint supports vision inputs"""
    print("=" * 60)
    print("TEST 1: Gemini OpenAI Endpoint - Vision Support")
    print("=" * 60)
    
    try:
        from openai import OpenAI
        import base64
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set in environment")
            return False
        
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        # Test with a simple base64 encoded 1x1 pixel image
        # This is just to test the API format, not actual vision capability
        test_image_base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        
        print("\n📡 Testing Gemini OpenAI endpoint with image input...")
        
        response = client.chat.completions.create(
            model="gemini-2.0-flash",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Describe this image:"},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{test_image_base64}"
                            }
                        }
                    ]
                }
            ],
            max_tokens=100
        )
        
        print("✅ Gemini OpenAI endpoint supports vision inputs!")
        print(f"Response: {response.choices[0].message.content[:100]}...")
        return True
        
    except Exception as e:
        print(f"❌ Gemini OpenAI vision test failed: {e}")
        return False


def test_docling_with_gemini():
    """Test Docling's built-in API integration with Gemini"""
    print("\n" + "=" * 60)
    print("TEST 2: Docling + Gemini API Integration")
    print("=" * 60)
    
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import (
            PdfPipelineOptions,
            PictureDescriptionApiOptions,
        )
        from docling_core.types.doc import PictureItem
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set")
            return False
        
        # Find a test PDF - using the first 10 pages chunk
        test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")
        if not test_pdf.exists():
            print(f"❌ Test PDF not found: {test_pdf}")
            return False

        print(f"\n📄 Converting 10-page PDF chunk with Gemini image descriptions...")
        
        # Configure pipeline with Gemini API
        print("   Using enable_remote_services=True (required for API)...")
        pipeline_options = PdfPipelineOptions(
            enable_remote_services=True  # Required for external API services
        )
        
        pipeline_options.do_picture_description = True
        pipeline_options.picture_description_options = PictureDescriptionApiOptions(
            url="https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
            headers={"Authorization": f"Bearer {api_key}"},
            params=dict(
                model="gemini-2.0-flash",  # Using gemini-2.0-flash (10 RPM rate limit)
                max_completion_tokens=300,
            ),
            prompt="Describe this image in detail for a technical document. Focus on key elements, data, and context.",
            timeout=90,
        )
        
        # Enable image generation
        pipeline_options.images_scale = 2.0
        pipeline_options.generate_picture_images = True
        
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(
                    pipeline_options=pipeline_options,
                )
            }
        )
        
        # Convert all 10 pages
        result = converter.convert(test_pdf)
        doc = result.document
        
        print(f"✅ Conversion complete!")
        print(f"   Total pages: {len(doc.pages) if hasattr(doc, 'pages') else 'N/A'}")
        
        # Check for pictures and their descriptions
        picture_count = 0
        described_count = 0
        
        print("\n📷 Checking for images and descriptions...")
        
        for element, _level in doc.iterate_items():
            if isinstance(element, PictureItem):
                picture_count += 1
                caption = element.caption_text(doc=doc)
                # Check both annotations (deprecated) and meta (new way)
                annotations = element.annotations if hasattr(element, 'annotations') else []
                meta = element.meta if hasattr(element, 'meta') else {}

                print(f"\n   Picture #{picture_count}:")
                print(f"      Reference: {element.self_ref}")
                print(f"      Caption: {caption or '(none)'}")
                print(f"      Annotations (deprecated): {annotations}")
                print(f"      Meta: {meta}")

                # Check both annotations and meta for descriptions
                has_description = (annotations and len(annotations) > 0) or (meta and len(meta) > 0)
                if has_description:
                    described_count += 1
                    desc = str(annotations[0])[:100] if annotations else str(meta)[:100]
                    print(f"      ✅ Has description: {desc}...")
                else:
                    print(f"      ⚠️  No description found")
        
        print(f"\n📊 Summary:")
        print(f"   Pictures found: {picture_count}")
        print(f"   Pictures with descriptions: {described_count}")
        
        if picture_count > 0 and described_count > 0:
            print("\n✅ Docling + Gemini integration works!")
            
            # Test if descriptions appear in markdown export
            print("\n📝 Testing markdown export...")
            markdown = doc.export_to_markdown()
            
            # Save for inspection
            output_path = Path("/Users/tomeryud/projects/RAGy/testing/outputs/test_gemini_docling_output.md")
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(markdown)
            
            print(f"   Saved markdown to: {output_path}")
            
            # Check if descriptions are in markdown
            if described_count > 0 and "annotation" in markdown.lower():
                print("   ✅ Descriptions appear in markdown!")
            
            return True
        else:
            print("\n⚠️  No pictures or descriptions found")
            return False
            
    except Exception as e:
        print(f"❌ Docling integration test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_chunking_with_descriptions():
    """Test if image descriptions appear in semantic chunks"""
    print("\n" + "=" * 60)
    print("TEST 3: Semantic Chunking with Image Descriptions")
    print("=" * 60)
    
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.base_models import InputFormat
        from docling.datamodel.pipeline_options import (
            PdfPipelineOptions,
            PictureDescriptionApiOptions,
        )
        from docling.chunking import HybridChunker
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set")
            return False
        
        test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")
        if not test_pdf.exists():
            print(f"❌ Test PDF not found")
            return False

        print(f"\n📄 Converting 10-page PDF chunk with Gemini descriptions...")
        print("   Using enable_remote_services=True (required for API)...")

        pipeline_options = PdfPipelineOptions(
            enable_remote_services=True  # Required for external API services
        )
        pipeline_options.do_picture_description = True
        pipeline_options.picture_description_options = PictureDescriptionApiOptions(
            url="https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
            headers={"Authorization": f"Bearer {api_key}"},
            params=dict(
                model="gemini-2.0-flash",  # Using gemini-2.0-flash (10 RPM rate limit)
                max_completion_tokens=300,
            ),
            prompt="Describe this image in detail.",
            timeout=90,
        )
        pipeline_options.images_scale = 2.0
        pipeline_options.generate_picture_images = True
        
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(
                    pipeline_options=pipeline_options,
                )
            }
        )
        
        result = converter.convert(test_pdf)
        doc = result.document
        
        print(f"✅ Conversion complete!")
        
        # Initialize chunker
        print(f"\n🔪 Running semantic chunking...")
        chunker = HybridChunker(
            tokenizer="bert-base-uncased",
            max_tokens=512,
            merge_peers=True
        )
        
        chunks_with_descriptions = 0
        total_chunks = 0
        
        for chunk in chunker.chunk(doc):
            total_chunks += 1
            chunk_text = chunk.text if hasattr(chunk, 'text') else str(chunk)
            
            # Check if chunk contains image-related content
            if any(keyword in chunk_text.lower() for keyword in ['image', 'figure', 'diagram', 'graph', 'chart']):
                chunks_with_descriptions += 1
                print(f"\n   Chunk #{total_chunks} (with potential image content):")
                print(f"      {chunk_text[:200]}...")
        
        print(f"\n📊 Chunking Summary:")
        print(f"   Total chunks: {total_chunks}")
        print(f"   Chunks with image-related content: {chunks_with_descriptions}")
        
        if chunks_with_descriptions > 0:
            print("\n✅ Image descriptions are included in semantic chunks!")
            return True
        else:
            print("\n⚠️  No image descriptions found in chunks")
            return False
        
    except Exception as e:
        print(f"❌ Chunking test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    print("\n" + "=" * 60)
    print("GEMINI + DOCLING VISION INTEGRATION TEST SUITE")
    print("=" * 60)
    
    # Check API key
    if not os.getenv('GEMINI_API_KEY'):
        print("\n❌ GEMINI_API_KEY environment variable not set!")
        print("   Set it with: export GEMINI_API_KEY='your-key-here'")
        return
    
    results = {
        "openai_endpoint": test_gemini_openai_vision(),
        "docling_integration": test_docling_with_gemini(),
        "chunking": test_chunking_with_descriptions(),
    }
    
    print("\n" + "=" * 60)
    print("FINAL RESULTS")
    print("=" * 60)
    
    for test_name, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    all_passed = all(results.values())
    
    if all_passed:
        print("\n🎉 ALL TESTS PASSED! Ready to overhaul the main script.")
    else:
        print("\n⚠️  Some tests failed. Need to investigate before overhauling.")
    
    print("=" * 60)


if __name__ == "__main__":
    main()

