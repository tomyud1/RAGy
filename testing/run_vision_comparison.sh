#!/bin/bash
# Run vision model comparison test

set -e

echo "========================================"
echo "Vision Model Comparison Test"
echo "========================================"
echo ""

# Check for images directory
IMAGES_DIR="../conversions/4216-Sherman-Ave-Property-Report-/images"
if [ ! -d "$IMAGES_DIR" ]; then
    echo "Error: Images directory not found at $IMAGES_DIR"
    echo "Please run a conversion first to generate test images."
    exit 1
fi

# Check for Gemini API key
if [ -z "$GEMINI_API_KEY" ]; then
    echo "Gemini API key not found in environment."
    echo ""
    echo "Please provide your Gemini API key:"
    echo "You can find it in the app settings (Chat → Settings → API Keys)"
    echo ""
    read -p "Enter Gemini API Key: " GEMINI_API_KEY
    export GEMINI_API_KEY
fi

# Install google-generativeai if needed
if ! python3 -c "import google.generativeai" 2>/dev/null; then
    echo ""
    echo "Installing google-generativeai package..."
    pip3 install -q google-generativeai
fi

# Run comparison
echo ""
echo "Starting comparison test..."
echo "Images: $IMAGES_DIR"
echo "Models: SmolVLM (MLX) vs Gemini 2.5 Flash"
echo "Max tokens: 300"
echo ""

python3 compare_vision_models.py \
    --images-dir "$IMAGES_DIR" \
    --max-tokens 300 \
    --no-transformers

echo ""
echo "✅ Test complete! Check testing/outputs/vision_model_comparison.json for full results."

