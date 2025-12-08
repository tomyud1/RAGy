# RAGy Release & Auto-Update Guide

## Overview

RAGy uses **electron-updater** with **GitHub Releases** for automatic updates. When you publish a new version to GitHub, users with the app installed will automatically receive update notifications.

---

## For Developers: Publishing a New Release

### Prerequisites

1. **GitHub Personal Access Token** - Already configured! ✅
   - Stored in `~/.zshrc` as `GH_TOKEN` environment variable
   - If you need a new token: https://github.com/settings/tokens/new?scopes=repo

2. **Updated version number** in `package.json`

### Step-by-Step Release Process

#### 1. Update the Version Number

Edit `package.json` and increment the version:

```json
{
  "version": "0.1.0-dev.3"  // Increment this!
}
```

**Version format:**
- `0.1.0-dev.1`, `0.1.0-dev.2` → Pre-release/development versions
- `0.1.0`, `0.2.0`, `1.0.0` → Production releases

#### 2. Build and Publish

**One command (token already configured):**
```bash
# Just run this - GH_TOKEN is already in your environment
npm run electron:build:win -- --publish always
```

**If token not set (new terminal), run:**
```bash
source ~/.zshrc  # Reload shell config to get GH_TOKEN
npm run electron:build:win -- --publish always
```

**Option B: Manual upload**
```bash
# Build without publishing
npm run electron:build:win

# Then manually upload files to GitHub Releases:
# - release/RAGy-Setup-X.X.X.exe
# - release/RAGy-Setup-X.X.X.exe.blockmap
# - release/latest.yml
```

#### 3. Clean Up Release Folder (Important!)

After publishing, clean up old files from the `release/` folder:

```bash
cd release/
# Keep only the latest version files
# Remove old .exe and .blockmap files
rm RAGy-Setup-OLD_VERSION.exe RAGy-Setup-OLD_VERSION.exe.blockmap
```

**Only these files should remain:**
```
release/
├── RAGy-Setup-{LATEST_VERSION}.exe       ← Current installer
├── RAGy-Setup-{LATEST_VERSION}.exe.blockmap
├── latest.yml
└── win-unpacked/                         ← For debugging
```

#### 4. Verify the Release

Check that the release was created:
- Go to: https://github.com/tomyud1/RAGy/releases
- Verify the new version is listed
- Confirm files are uploaded

---

## Release Configuration

The release settings are in `package.json`:

```json
{
  "build": {
    "publish": {
      "provider": "github",
      "owner": "tomyud1",
      "repo": "RAGy",
      "releaseType": "prerelease"  // Change to "release" for production
    }
  }
}
```

**Release Types:**
- `"prerelease"` → Marked as pre-release on GitHub (for development)
- `"release"` → Full production release

---

## Files Explanation

| File | Purpose |
|------|---------|
| `RAGy-Setup-X.X.X.exe` | The Windows installer users download |
| `RAGy-Setup-X.X.X.exe.blockmap` | Enables delta updates (only download changed parts) |
| `latest.yml` | Metadata file that tells the app what the latest version is |
| `win-unpacked/` | Unpacked app files (for debugging, not uploaded) |

---

## For AI Agents: Quick Reference

When asked to publish a new release:

1. **Increment version** in `package.json`
2. **Run:** `GH_TOKEN=<token> npm run electron:build:win -- --publish always`
3. **Clean up** old files from `release/` folder
4. **Verify** at https://github.com/tomyud1/RAGy/releases

**Never commit the GH_TOKEN to the repository!**

---

## Troubleshooting

### "Release already exists" error
The version number hasn't been incremented. Update `package.json` version.

### "401 Unauthorized" error
The GitHub token is invalid or expired. Generate a new one.

### Users not seeing updates
- Check that `latest.yml` was uploaded to the release
- Verify the version in `latest.yml` matches the release tag
- Users need to restart the app to check for updates

---

## Testing Auto-Updates

1. Install version `0.1.0-dev.1` on Windows
2. Publish version `0.1.0-dev.2` to GitHub
3. Open the app on Windows
4. Wait ~5 seconds (auto-check) or check manually
5. Update notification should appear!

