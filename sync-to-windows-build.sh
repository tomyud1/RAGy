#!/bin/bash

# RAGy - Sync to Windows Build
# Run this after making changes to push to GitHub

echo "========================================"
echo "   Syncing RAGy to Windows Build Repo"
echo "========================================"
echo ""

# Source and destination
SRC="/Users/tomeryud/projects/RAGy"
DEST="/Users/tomeryud/projects/RAGy-Windows-Build"

# Files to sync (excluding node_modules, release, etc.)
echo "[1/4] Copying source files..."

# Copy key directories
rsync -av --delete --exclude='node_modules' --exclude='.git' "$SRC/src/" "$DEST/src/"
rsync -av --delete --exclude='node_modules' --exclude='.git' "$SRC/server/" "$DEST/server/"
rsync -av --delete --exclude='node_modules' --exclude='.git' "$SRC/electron/" "$DEST/electron/"
rsync -av --exclude='node_modules' --exclude='.git' "$SRC/build-resources/" "$DEST/build-resources/"

# Copy root files
cp "$SRC/package.json" "$DEST/"
cp "$SRC/package-lock.json" "$DEST/" 2>/dev/null || true
cp "$SRC/vite.config.js" "$DEST/"
cp "$SRC/index.html" "$DEST/"
cp "$SRC/update-and-build.bat" "$DEST/"
cp "$SRC/BUILD_SPEED_TIPS.md" "$DEST/" 2>/dev/null || true

# Copy Git LFS configuration (if it exists in Windows Build repo)
if [ -f "$DEST/.gitattributes" ]; then
    echo "Git LFS is configured in Windows Build repo"
fi

echo ""
echo "[2/4] Committing changes..."
cd "$DEST"
git add -A
git commit -m "Sync from development: $(date '+%Y-%m-%d %H:%M')" || echo "No changes to commit"

echo ""
echo "[3/4] Pushing to GitHub..."
git push origin main

echo ""
echo "========================================"
echo "   Sync Complete!"
echo "========================================"
echo ""
echo "Now on Windows, double-click: update-and-build.bat"
echo ""



