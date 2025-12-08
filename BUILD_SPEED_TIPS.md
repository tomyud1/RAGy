# RAGy Build Speed Optimization Guide

## Applied Optimizations (v0.1.0-dev.18+)

### 1. **Compression: NONE** ⚡️ (Biggest Impact)
- Changed from `compression: "normal"` to `compression: "store"`
- **Speed gain**: 3-5x faster NSIS installer creation
- **Trade-off**: Installer size ~150-300MB instead of ~80-120MB

### 2. **Native Module Rebuilding: DISABLED**
- Set `npmRebuild: false`
- Native modules are built once during `npm install`, not rebuilt during packaging
- **Speed gain**: Saves 30-60 seconds

### 3. **Vite Build Optimizations**
- Disabled sourcemaps: `sourcemap: false`
- Using esbuild for minification (faster than terser)
- **Speed gain**: Saves 10-20% on frontend build time

### 4. **NSIS Installer Simplified**
- Removed custom installer script (`installer.nsh`)
- Removed extra icon configurations
- **Speed gain**: Slightly faster packaging

### 5. **File Exclusions**
- Exclude test files, docs, examples from node_modules
- **Speed gain**: Fewer files to process

## Expected Build Times

### Before Optimizations:
- Vite build: ~800ms
- Server bundle: ~80ms
- electron-builder: ~4-8 minutes
- **Total: ~5-10 minutes**

### After Optimizations:
- Vite build: ~600ms
- Server bundle: ~80ms
- electron-builder: ~1-2 minutes
- **Total: ~2-3 minutes** ⚡️

## Windows-Specific Optimizations

### 1. **Antivirus Exclusion** (CRITICAL)
Add build folder to Windows Defender exclusions:

```batch
REM Run as Administrator
powershell -Command "Add-MpPreference -ExclusionPath 'E:\Downloads\RAGy-Windows-Build'"
powershell -Command "Add-MpPreference -ExclusionPath 'E:\Downloads\RAGy-Windows-Build\release'"
powershell -Command "Add-MpPreference -ExclusionPath 'E:\Downloads\RAGy-Windows-Build\node_modules'"
```

**This alone can save 50-70% of build time!**

### 2. **Use SSD** (if not already)
- Build on SSD, not HDD
- Speed difference: 5-10x faster

### 3. **Close Background Apps**
- Close Chrome, VS Code, etc. during builds
- More RAM available = faster builds

### 4. **Node.js Performance**
Ensure you're using Node.js v22 LTS:
```batch
node --version
```

## For Even Faster Dev Builds

If you want MAXIMUM speed for testing (not for release):

### Option 1: Skip Publishing
Use local build without publishing to GitHub:
```batch
npm run build
npm run build:server
npx electron-builder --win --x64 --publish never
```

### Option 2: Use Directory Target (No Installer)
Fastest possible - creates unpacked folder instead of installer:
```json
"win": {
  "target": "dir"
}
```
Then just run the .exe from `release/win-unpacked/RAGy.exe`

**Speed**: ~30-60 seconds total! But no installer.

## Current Settings Summary

```json
{
  "compression": "store",        // No compression = FAST
  "npmRebuild": false,           // Don't rebuild natives
  "asar": false                  // Disabled ASAR to avoid dependency issues
}
```

**Why ASAR is disabled**: We had constant issues with Node.js dependencies being stuck inside the ASAR archive. Disabling it eliminates ALL "Cannot find module" errors and potentially speeds up builds.

## Monitoring Build Performance

To see where time is spent:
```batch
npm run electron:build:win -- --publish always
```

Look for:
- "packing" - creating ASAR
- "building native dependencies" - should be skipped
- "creating installer" - main bottleneck (now much faster with store compression)

---

**Bottom line**: With these optimizations, builds should be **2-3 minutes** instead of **5-10 minutes**. Add antivirus exclusion for another **50% speed boost** (down to **1-2 minutes**).
