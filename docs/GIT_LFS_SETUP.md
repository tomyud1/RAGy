# Git LFS Setup for Python Bundle

## Overview

The RAGy-Windows-Build repository uses **Git LFS (Large File Storage)** to handle the 1.9GB Python bundle that includes PyTorch, OpenCV, and other ML dependencies.

## What is Git LFS?

Git LFS is a Git extension that manages large files by storing them outside the main repository, while keeping lightweight pointers in the Git history.

## Why Git LFS?

The Python bundle contains several files that exceed GitHub's 100MB file size limit:
- `dnnl.lib`: 662MB (PyTorch deep learning library)
- `torch_cpu.dll`: 244MB (PyTorch CPU backend)
- `cv2.pyd`: 67MB (OpenCV)
- `kineto.lib`: 55MB (PyTorch profiler)

Without Git LFS, these files cannot be pushed to GitHub.

## Configuration

### Files Tracked by LFS

The following file types in the `build-resources/python-win/` directory are tracked:
- `**/*.dll` - Windows dynamic libraries
- `**/*.lib` - Static libraries
- `**/*.pyd` - Python extension modules

This is configured in `.gitattributes`:
```
build-resources/python-win/**/*.dll filter=lfs diff=lfs merge=lfs -text
build-resources/python-win/**/*.lib filter=lfs diff=lfs merge=lfs -text
build-resources/python-win/**/*.pyd filter=lfs diff=lfs merge=lfs -text
```

### Installation (One-time Setup)

If you're setting up a new development machine:

1. Install Git LFS:
   ```bash
   # macOS
   brew install git-lfs

   # Windows
   # Download from https://git-lfs.github.com/
   ```

2. Initialize Git LFS:
   ```bash
   git lfs install
   ```

### Cloning the Repository

When you clone the Windows Build repository, Git LFS will automatically download the large files:

```bash
git clone https://github.com/tomyud1/ragy-windows-build.git
```

Git LFS files are downloaded on-demand during checkout.

## How It Works with Update-and-Build

The `update-and-build.bat` script on Windows will now correctly pull the Python bundle:

1. User runs `update-and-build.bat`
2. Script runs `git pull origin main`
3. Git LFS automatically downloads any new/updated large files
4. Python bundle is available for the build process

## GitHub LFS Quotas

**Free GitHub accounts** get:
- 1GB storage
- 1GB bandwidth per month

**Current usage:**
- Storage: ~1.6GB (may require paid plan or purchasing data packs)

**Paid plans:** If you exceed the free tier, you can:
- Upgrade to GitHub Pro ($4/month) - 2GB storage, 10GB bandwidth
- Purchase data packs - $5 for 50GB bandwidth + 50GB storage

## Verifying LFS Files

Check which files are tracked by LFS:
```bash
cd /path/to/ragy-windows-build
git lfs ls-files
```

Check LFS status:
```bash
git lfs status
```

## Troubleshooting

### "This exceeds GitHub's file size limit"
You forgot to set up Git LFS. Run:
```bash
git lfs install
git lfs track "build-resources/python-win/**/*.dll"
git lfs track "build-resources/python-win/**/*.lib"
git lfs track "build-resources/python-win/**/*.pyd"
```

### LFS Files Not Downloading
Run:
```bash
git lfs pull
```

### Bandwidth Limit Exceeded
If you hit GitHub's bandwidth limit:
1. Wait until next month (limit resets monthly)
2. Purchase additional bandwidth ($5 for 50GB)
3. Use alternative hosting (e.g., GitHub Releases) for the Python bundle

## Alternative: GitHub Releases

If Git LFS becomes problematic, you can host the Python bundle via GitHub Releases:
1. Upload `python-3.11.9-embed-amd64.zip` to a GitHub Release
2. Modify the build process to download it during first run
3. This approach has no bandwidth limits but requires manual updates

## References

- [Git LFS Documentation](https://git-lfs.github.com/)
- [GitHub LFS Pricing](https://docs.github.com/en/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)
