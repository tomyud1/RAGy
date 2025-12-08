# Python Bundling Guide for Electron

## ⚠️ FOR DEVELOPERS ONLY

This guide is for **developers building the app**, NOT for end users.

**End users:** No action needed! Python is fully bundled in the installer. Just download and double-click the `.exe` to install.

**Developers:** Follow this guide to prepare Python bundling before building the installer.

---

## Quick Start (Windows Build)

**One-time setup on your Windows PC:**

```powershell
# 1. Install Python packages into bundled Python (takes ~10-15 minutes)
cd build-resources\python-win
.\setup-python.ps1

# 2. Verify installation
.\python.exe -m pip list
# Should show: torch, transformers, sentence-transformers, docling, etc.

# 3. Go back to project root
cd ..\..

# 4. Build the app
npm install
npm run build
npm run electron:build:win

# 5. Installer is ready!
# Location: release\RAGy Setup 0.1.0.exe (~500MB)
```

**That's it!** The built installer now includes:
- Python 3.11.9 runtime (~15MB)
- All pip packages (~300MB)
- Your app code
- Everything runs isolated in the installation folder

**End users** then just double-click the `.exe` to install - no command line needed!

---

## Overview

**Goal:** Include Python interpreter + all dependencies inside the app installation folder for complete isolation.

**Current Status:** ✅ Python runtime bundled, packages installed via one-time setup script
**End User Experience:** ✅ Zero installation - everything works out of the box

## Why Bundle Python?

1. **No Conflicts**: Won't interfere with user's other Python projects
2. **Easy Installation**: User just runs one installer
3. **Version Control**: Exact Python version + dependencies guaranteed
4. **Professional**: Real desktop app experience

## Approaches

### Option A: Embeddable Python (Windows) + Framework Build (macOS) - RECOMMENDED

This is the approach used by professional apps like VS Code.

**For Windows:**
- Use [Python Embeddable Package](https://www.python.org/downloads/windows/)
- Download: `python-3.11.x-embed-amd64.zip`
- Size: ~15MB + ~300MB for packages (torch, docling, etc.)
- Total bundled size: ~315MB

**For macOS:**
- Use Python.org framework build
- Or use `python-build-standalone` from GitHub
- Size: similar to Windows

**Steps:**

1. **Download Portable Python**
   ```bash
   # Windows
   curl -O https://www.python.org/ftp/python/3.11.7/python-3.11.7-embed-amd64.zip

   # macOS
   curl -O https://www.python.org/ftp/python/3.11.7/python-3.11.7-macos11.pkg
   ```

2. **Extract to build-resources/**
   ```
   build-resources/
   ├── python-win/
   │   ├── python.exe
   │   ├── python311.dll
   │   └── Lib/
   └── python-mac/
       ├── bin/python3
       └── lib/
   ```

3. **Install Dependencies into Portable Python**
   ```bash
   # Windows
   ./build-resources/python-win/python.exe -m pip install -r server/python/requirements.txt --target ./build-resources/python-win/Lib/site-packages

   # macOS
   ./build-resources/python-mac/bin/python3 -m pip install -r server/python/requirements.txt
   ```

4. **Update electron-builder Config**
   ```json
   {
     "build": {
       "files": [
         "dist/**/*",
         "electron/**/*",
         "server/**/*",
         "node_modules/**/*",
         "build-resources/python-${platform}/**/*",  // ADD THIS
         "package.json"
       ],
       "extraResources": [
         {
           "from": "build-resources/python-${platform}",
           "to": "python",
           "filter": ["**/*"]
         }
       ]
     }
   }
   ```

5. **Update Server to Use Bundled Python**

   Update `server/services/embedding/python-bridge.js` or wherever Python is spawned:

   ```javascript
   import { app } from 'electron';
   import path from 'path';

   function getPythonPath() {
     if (app.isPackaged) {
       // In production, use bundled Python
       const platform = process.platform;
       if (platform === 'win32') {
         return path.join(process.resourcesPath, 'python', 'python.exe');
       } else if (platform === 'darwin') {
         return path.join(process.resourcesPath, 'python', 'bin', 'python3');
       } else {
         return path.join(process.resourcesPath, 'python', 'bin', 'python3');
       }
     } else {
       // In development, use system Python
       return 'python3';
     }
   }

   // Use it when spawning Python:
   const pythonPath = getPythonPath();
   spawn(pythonPath, ['script.py']);
   ```

### Option B: PyInstaller (Create Executable from Python Scripts)

Convert Python scripts to standalone executables.

**Pros:**
- Single executable per script
- No Python runtime needed

**Cons:**
- Need to rebuild for each Python script change
- Larger size per script
- More complex debugging
- Need separate builds for Windows/Mac/Linux

**Not recommended** for apps with multiple Python scripts like ours.

### Option C: System Python (Current - NOT RECOMMENDED)

Require users to install Python manually.

**Cons:**
- Not user-friendly ❌
- Version conflicts ❌
- Package conflicts with user's projects ❌
- Installation friction ❌

## Implementation Status

**Already completed (in codebase):**
- [x] Downloaded embeddable Python for Windows (3.11.9)
- [x] Extracted to `build-resources/python-win/`
- [x] Created `setup-python.ps1` script for dependency installation
- [x] Updated `electron-builder` config to bundle Python
- [x] Updated all server code to use bundled Python path
- [x] Updated `.gitignore` to exclude site-packages from git

**Developer needs to do (one-time, before building):**
- [ ] Run `setup-python.ps1` on Windows to install Python packages
- [ ] Build the app with `npm run electron:build:win`
- [ ] Test installer on clean Windows machine
- [ ] (Optional) Set up macOS Python bundling for Mac builds

## File Size Impact

**Before bundling:**
- App size: ~200MB (Electron + Node + your code)

**After bundling:**
- App size: ~515MB (+ Python ~15MB + packages ~300MB)

**Breakdown:**
- Electron/Chromium: ~150MB
- Node.js: ~50MB
- Your code: ~10MB
- Python runtime: ~15MB
- Python packages (torch, docling, transformers): ~300MB
- **Total: ~525MB**

This is normal for desktop apps with ML capabilities.

## Testing

**Test on clean machines WITHOUT Python installed:**

1. Install your app
2. Verify Python scripts run
3. Check data isolation (no conflicts with system Python)
4. Verify all features work (document processing, embeddings, etc.)

## Alternative: Docker-based Approach

For future consideration: Package Python backend as Docker container.

**Pros:**
- True isolation
- Easy updates
- Cross-platform consistency

**Cons:**
- Users need Docker installed
- More complex distribution
- Larger download

Not recommended for v1.0 but worth considering for future.

## Resources

- [Python Embeddable Package](https://docs.python.org/3/using/windows.html#embedded-distribution)
- [python-build-standalone](https://github.com/indygreg/python-build-standalone)
- [Electron Builder Extra Resources](https://www.electron.build/configuration/contents#extraresources)

## Next Steps

1. Download portable Python for your development machine
2. Test bundling locally
3. Update build scripts
4. Test on clean VM
5. Document for other developers
