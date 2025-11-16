#!/usr/bin/env python3
"""
Test Gemini's actual response format and try structured output to match Docling's expectations
"""

import os
import json
import base64
from pathlib import Path

def test_gemini_vision_response_format():
    """Test what format Gemini actually returns for vision requests"""
    print("=" * 60)
    print("TEST 1: Gemini Vision Response Format (Raw)")
    print("=" * 60)
    
    try:
        from openai import OpenAI
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set")
            return None
        
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        # Test image (1x1 green pixel)
        test_image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        
        print("\n📡 Sending vision request to gemini-flash-latest...")
        
        response = client.chat.completions.create(
            model="gemini-flash-latest",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Describe this image:"},
                        {
                            "type": "image_url",
                            "image_url": {"url": f"data:image/png;base64,{test_image}"}
                        }
                    ]
                }
            ],
            max_tokens=100
        )
        
        print("\n✅ Response received!")
        print("\n📋 Response structure:")
        print(f"Type: {type(response)}")
        print(f"Response object: {response}")
        print("\n📋 Response dict:")
        response_dict = response.model_dump()
        print(json.dumps(response_dict, indent=2))
        
        print("\n📋 Checking required fields for Docling:")
        print(f"  choices: {response_dict.get('choices', 'MISSING')}")
        if 'choices' in response_dict and len(response_dict['choices']) > 0:
            choice = response_dict['choices'][0]
            print(f"  choices[0]: {choice}")
            print(f"  choices[0].message: {choice.get('message', 'MISSING')}")
            if 'message' in choice:
                message = choice['message']
                print(f"  choices[0].message.content: {message.get('content', 'MISSING')}")
                print(f"  choices[0].message.role: {message.get('role', 'MISSING')}")
        
        return response_dict
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return None


def test_structured_output():
    """Test if we can use Pydantic models to structure Gemini's output"""
    print("\n" + "=" * 60)
    print("TEST 2: Structured Output with Pydantic")
    print("=" * 60)
    
    try:
        from openai import OpenAI
        from pydantic import BaseModel
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set")
            return None
        
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        # Define the expected structure
        class ImageDescription(BaseModel):
            description: str
        
        test_image = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        
        print("\n📡 Testing structured output with Pydantic model...")
        
        try:
            completion = client.beta.chat.completions.parse(
                model="gemini-flash-latest",
                messages=[
                    {"role": "system", "content": "You are an image description assistant."},
                    {
                        "role": "user",
                        "content": [
                            {"type": "text", "text": "Describe this image:"},
                            {
                                "type": "image_url",
                                "image_url": {"url": f"data:image/png;base64,{test_image}"}
                            }
                        ]
                    }
                ],
                response_format=ImageDescription,
            )
            
            print("\n✅ Structured output works!")
            print(f"Parsed: {completion.choices[0].message.parsed}")
            return completion
            
        except Exception as e:
            print(f"❌ Structured output not supported: {e}")
            return None
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return None


def test_with_actual_image():
    """Test with an actual image from the PDF chunks"""
    print("\n" + "=" * 60)
    print("TEST 3: Actual Image from PDF")
    print("=" * 60)
    
    try:
        from openai import OpenAI
        from PIL import Image
        import io
        
        api_key = os.getenv('GEMINI_API_KEY', '')
        if not api_key:
            print("❌ GEMINI_API_KEY not set")
            return None
        
        # Look for an actual extracted image
        image_dir = Path("/Users/tomeryud/projects/RAGy/server/conversions/file8973_chunk001_p1-10/images")
        if not image_dir.exists():
            print(f"❌ Image directory not found: {image_dir}")
            return None
        
        image_files = list(image_dir.glob("*.jpeg")) + list(image_dir.glob("*.png"))
        if not image_files:
            print("❌ No images found")
            return None
        
        test_image_path = image_files[0]
        print(f"\n📷 Using image: {test_image_path.name}")
        
        # Convert to base64
        with open(test_image_path, 'rb') as f:
            image_data = base64.b64encode(f.read()).decode('utf-8')
        
        client = OpenAI(
            api_key=api_key,
            base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
        )
        
        print("\n📡 Sending actual image to Gemini...")
        
        response = client.chat.completions.create(
            model="gemini-flash-latest",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Describe this image in detail for a technical document."},
                        {
                            "type": "image_url",
                            "image_url": {"url": f"data:image/jpeg;base64,{image_data}"}
                        }
                    ]
                }
            ],
            max_tokens=300
        )
        
        print("\n✅ Response received!")
        print(f"\n📝 Description:")
        print(f"{response.choices[0].message.content}")
        
        # Check response structure
        response_dict = response.model_dump()
        print("\n📋 Response structure check:")
        print(f"  ✓ choices: {len(response_dict['choices'])} item(s)")
        print(f"  ✓ choices[0].message.content: {len(response_dict['choices'][0]['message']['content'])} chars")
        print(f"  ✓ choices[0].message.role: {response_dict['choices'][0]['message']['role']}")
        
        return response_dict
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return None


def compare_with_docling_expectations():
    """Show what Docling expects vs what Gemini returns"""
    print("\n" + "=" * 60)
    print("ANALYSIS: Docling vs Gemini Response Format")
    print("=" * 60)
    
    print("\n📚 What Docling expects (OpenAI format):")
    print(json.dumps({
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": "The image shows..."
                }
            }
        ]
    }, indent=2))
    
    print("\n📊 Summary:")
    print("  Required fields:")
    print("    - choices (list)")
    print("    - choices[0].message (dict)")
    print("    - choices[0].message.content (string)")
    print("    - choices[0].message.role (string)")


def main():
    print("\n" + "=" * 60)
    print("GEMINI RESPONSE FORMAT INVESTIGATION")
    print("=" * 60)
    
    if not os.getenv('GEMINI_API_KEY'):
        print("\n❌ GEMINI_API_KEY not set!")
        return
    
    # Test 1: Check raw response format
    response1 = test_gemini_vision_response_format()
    
    # Test 2: Try structured output
    response2 = test_structured_output()
    
    # Test 3: Test with actual image
    response3 = test_with_actual_image()
    
    # Analysis
    compare_with_docling_expectations()
    
    print("\n" + "=" * 60)
    print("CONCLUSIONS")
    print("=" * 60)
    
    if response1 and 'choices' in response1:
        choice = response1['choices'][0]
        message = choice.get('message', {})
        
        if 'content' in message and message['content']:
            print("\n✅ Gemini DOES return proper OpenAI-compatible format!")
            print("   The issue must be elsewhere in Docling's parsing.")
        else:
            print("\n❌ Gemini's response is missing 'content' field")
            print(f"   Message structure: {message}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    main()




