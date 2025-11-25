#!/usr/bin/env python3
"""
Check which Gemini models are available with the current API key
"""

import os
import requests
import json

api_key = os.getenv('GEMINI_API_KEY', '')

if not api_key:
    print("❌ GEMINI_API_KEY not set")
    exit(1)

print(f"Testing with API key: {api_key[:10]}...\n")
print("=" * 60)
print("Testing different Gemini model names:")
print("=" * 60)

models_to_test = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-2.0-flash',
    'gemini-2.0-flash-exp',
    'gemini-flash-2.0',
    'gemini-pro-vision',
]

for model_name in models_to_test:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"

    try:
        response = requests.post(
            url,
            json={
                "contents": [{
                    "parts": [{"text": "test"}]
                }]
            },
            headers={"Content-Type": "application/json"},
            timeout=10
        )

        if response.status_code == 200:
            print(f"✅ {model_name:30s} - WORKS")
        elif response.status_code == 404:
            print(f"❌ {model_name:30s} - NOT FOUND (404)")
        elif response.status_code == 400:
            error_data = response.json()
            error_msg = error_data.get('error', {}).get('message', 'Unknown error')
            print(f"⚠️  {model_name:30s} - BAD REQUEST: {error_msg[:50]}")
        else:
            error_data = response.json()
            error_msg = error_data.get('error', {}).get('message', str(error_data))
            print(f"❌ {model_name:30s} - ERROR ({response.status_code}): {error_msg[:50]}")

    except Exception as e:
        print(f"❌ {model_name:30s} - EXCEPTION: {str(e)[:50]}")

print("\n" + "=" * 60)
print("Listing all available models:")
print("=" * 60)

# List all available models
try:
    list_url = f"https://generativelanguage.googleapis.com/v1beta/models?key={api_key}"
    response = requests.get(list_url, timeout=10)

    if response.status_code == 200:
        data = response.json()
        models = data.get('models', [])

        vision_models = []
        for model in models:
            name = model.get('name', '').replace('models/', '')
            supported_methods = model.get('supportedGenerationMethods', [])

            # Check if it supports generateContent (needed for vision)
            if 'generateContent' in supported_methods:
                vision_models.append(name)

        print("\nModels that support vision (generateContent):")
        for model in sorted(vision_models):
            print(f"  ✓ {model}")

    else:
        print(f"Failed to list models: {response.status_code}")

except Exception as e:
    print(f"Failed to list models: {e}")
