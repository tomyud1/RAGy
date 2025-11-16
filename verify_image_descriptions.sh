#!/bin/bash

# Verification script for image descriptions fix
echo "========================================"
echo "🔍 Verifying Image Descriptions Fix"
echo "========================================"
echo ""

CONVERSIONS_DIR="conversions"

if [ ! -d "$CONVERSIONS_DIR" ]; then
    echo "❌ No conversions folder found. Please run a conversion first."
    exit 1
fi

# Find all chunks.json files in conversions
CHUNKS_FILES=$(find "$CONVERSIONS_DIR" -name "chunks.json" -type f)

if [ -z "$CHUNKS_FILES" ]; then
    echo "❌ No chunks.json files found in conversions folder."
    echo "   This means the fix hasn't been applied yet."
    echo "   Please run a new conversion with image descriptions enabled."
    exit 1
fi

echo "✓ Found chunks.json files in conversions folder"
echo ""

# Check if chunks contain image descriptions
TOTAL_CHUNKS_FILES=0
FILES_WITH_DESCRIPTIONS=0
TOTAL_CHUNKS=0
CHUNKS_WITH_IMAGES=0

while IFS= read -r chunks_file; do
    TOTAL_CHUNKS_FILES=$((TOTAL_CHUNKS_FILES + 1))

    echo "📄 Checking: $chunks_file"

    # Count total chunks in this file
    NUM_CHUNKS=$(jq '.chunks | length' "$chunks_file")
    TOTAL_CHUNKS=$((TOTAL_CHUNKS + NUM_CHUNKS))

    # Check if any chunk contains image descriptions
    HAS_IMAGES=$(jq '[.chunks[].text | contains("📷 IMAGES IN THIS SECTION")] | any' "$chunks_file")

    if [ "$HAS_IMAGES" = "true" ]; then
        FILES_WITH_DESCRIPTIONS=$((FILES_WITH_DESCRIPTIONS + 1))

        # Count how many chunks have images
        CHUNKS_WITH_IMG=$(jq '[.chunks[].text | contains("📷 IMAGES IN THIS SECTION")] | map(select(. == true)) | length' "$chunks_file")
        CHUNKS_WITH_IMAGES=$((CHUNKS_WITH_IMAGES + CHUNKS_WITH_IMG))

        echo "   ✅ Contains image descriptions: $CHUNKS_WITH_IMG chunks with images"
    else
        echo "   ⚠️  No image descriptions found (might not have images on these pages)"
    fi

    echo ""
done <<< "$CHUNKS_FILES"

echo "========================================"
echo "📊 Summary:"
echo "========================================"
echo "Total chunks.json files:        $TOTAL_CHUNKS_FILES"
echo "Files with image descriptions:  $FILES_WITH_DESCRIPTIONS"
echo "Total semantic chunks:          $TOTAL_CHUNKS"
echo "Chunks containing images:       $CHUNKS_WITH_IMAGES"
echo ""

# Check directory structure
echo "========================================"
echo "📁 Output Structure:"
echo "========================================"
echo ""

for dir in "$CONVERSIONS_DIR"/*/ ; do
    if [ -d "$dir" ]; then
        dirname=$(basename "$dir")
        echo "📂 $dirname/"

        # Check for images
        if [ -d "$dir/images" ]; then
            IMG_COUNT=$(find "$dir/images" -type f | wc -l | tr -d ' ')
            echo "   ├─ images/ ($IMG_COUNT files)"
        fi

        # Check for markdown
        if ls "$dir"/*.md 1> /dev/null 2>&1; then
            MD_FILES=$(ls -1 "$dir"/*.md | wc -l | tr -d ' ')
            echo "   ├─ markdown files: $MD_FILES"
        fi

        # Check for chunks.json
        if [ -f "$dir/chunks.json" ]; then
            CHUNK_COUNT=$(jq '.total_chunks' "$dir/chunks.json")
            echo "   ├─ chunks.json (${CHUNK_COUNT} semantic chunks) ✅"
        else
            echo "   ├─ chunks.json: MISSING ❌"
        fi

        # Check for metadata.json
        if [ -f "$dir/metadata.json" ]; then
            echo "   └─ metadata.json ✅"
        else
            echo "   └─ metadata.json: MISSING ❌"
        fi

        echo ""
    fi
done

# Sample a chunk with image description
echo "========================================"
echo "📝 Sample Chunk with Image Description:"
echo "========================================"
echo ""

SAMPLE_FILE=$(find "$CONVERSIONS_DIR" -name "chunks.json" -type f | head -1)
if [ -n "$SAMPLE_FILE" ]; then
    # Find first chunk with image description
    CHUNK_WITH_IMG=$(jq -r '.chunks[] | select(.text | contains("📷 IMAGES IN THIS SECTION")) | .text' "$SAMPLE_FILE" | head -1)

    if [ -n "$CHUNK_WITH_IMG" ]; then
        # Extract just the image section (not the full chunk text)
        echo "$CHUNK_WITH_IMG" | grep -A 20 "📷 IMAGES IN THIS SECTION"
    else
        echo "No chunks with image descriptions found in $SAMPLE_FILE"
    fi
fi

echo ""
echo "========================================"
if [ $FILES_WITH_DESCRIPTIONS -gt 0 ]; then
    echo "✅ Fix verified! Image descriptions are in semantic chunks."
else
    echo "⚠️  No image descriptions found. This could mean:"
    echo "   1. The conversion was run before the fix"
    echo "   2. The PDF has no images"
    echo "   3. Image descriptions were not enabled"
fi
echo "========================================"
