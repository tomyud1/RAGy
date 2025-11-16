#!/usr/bin/env python3
"""
Direct test: Can Gemini API actually describe images via OpenAI endpoint?
"""

import os
from openai import OpenAI

def test_direct_image_description():
    api_key = os.getenv('GEMINI_API_KEY', '')
    if not api_key:
        print("❌ GEMINI_API_KEY not set")
        return

    # Sample image from the docling output (first 100 chars of base64)
    sample_image_b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="

    client = OpenAI(
        api_key=api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
    )

    print("\n🔬 Testing Gemini image description directly...")
    print(f"   Model: gemini-2.0-flash")

    try:
        response = client.chat.completions.create(
            model="gemini-2.0-flash",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Describe this image in detail:"},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{sample_image_b64}"
                            }
                        }
                    ]
                }
            ],
            max_tokens=200
        )

        description = response.choices[0].message.content
        print(f"\n✅ Gemini responded successfully!")
        print(f"   Description: {description[:200]}...")
        return True

    except Exception as e:
        print(f"\n❌ Error: {e}")
        return False

if __name__ == "__main__":
    success = test_direct_image_description()
    if success:
        print("\n💡 Conclusion: Gemini API works fine outside Docling")
        print("   The issue is with Docling's PictureDescriptionApiOptions")
    else:
        print("\n💡 Conclusion: There's an issue with the Gemini API itself")
