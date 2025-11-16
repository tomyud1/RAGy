#!/usr/bin/env python3
"""
Debug Gemini API response with gemini-flash-latest
"""

import os
import base64
from openai import OpenAI

# Initialize Gemini
api_key = os.getenv('GEMINI_API_KEY', 'AIzaSyCw_AoXsFHuHAuMoLZzFmZ7Hy6PrSKEdfg')
gemini = OpenAI(
    api_key=api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# Create a simple test image (1x1 red pixel PNG)
test_image_b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="

print("Testing Gemini API with gemini-flash-latest model...")
print("=" * 80)

try:
    response = gemini.chat.completions.create(
        model="gemini-flash-latest",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "What do you see in this image?"
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{test_image_b64}"
                        }
                    }
                ]
            }
        ],
        max_tokens=100
    )

    print("\n✅ API Call Successful!")
    print(f"\nResponse object type: {type(response)}")
    print(f"Response: {response}")
    print(f"\nChoices: {response.choices}")
    print(f"\nFirst choice: {response.choices[0]}")
    print(f"\nMessage: {response.choices[0].message}")
    print(f"\nContent type: {type(response.choices[0].message.content)}")
    print(f"\nContent: {response.choices[0].message.content}")

    if response.choices[0].message.content is None:
        print("\n❌ PROBLEM: Content is None!")
        print("This might be a model compatibility issue with gemini-flash-latest")
    else:
        print(f"\n✅ Got description: {response.choices[0].message.content}")

except Exception as e:
    print(f"\n❌ Error: {e}")
    import traceback
    traceback.print_exc()
