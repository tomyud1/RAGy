# Electron Desktop App Guide

RAGy is now configured as an Electron desktop application! This guide explains how to develop, build, and distribute the app.

## Version

Current version: **0.1.0** (Early development phase)

## Development

### Running in Development Mode

```bash
# Start the Electron app in development mode
npm run electron:dev
```

This will:
1. Start the Vite dev server (React frontend) on port 5173
2. Wait for the dev server to be ready
3. Launch Electron with the app
4. Open DevTools automatically for debugging

**Note:** The backend server (Express) starts automatically when Electron launches.

### Development Workflow

1. Make changes to your React code in `src/`
2. Vite will hot-reload the changes
3. Make changes to Electron code in `electron/`
4. Restart Electron to see changes (Ctrl+C and run `npm run electron:dev` again)

## Building for Distribution

### Build for Your Current Platform

```bash
npm run electron:build
```

### Build for Specific Platforms

```bash
# Windows
npm run electron:build:win

# macOS
npm run electron:build:mac

# Linux
npm run electron:build:linux
```

### Build Output

Built files will be in the `release/` directory:

**Windows:**
- `RAGy-Setup-0.1.0.exe` - Installer with install wizard
- `RAGy-0.1.0-portable.exe` - Portable version (no installation needed)

**macOS:**
- `RAGy-0.1.0.dmg` - Disk image installer
- `RAGy-0.1.0-mac.zip` - ZIP archive

**Linux:**
- `RAGy-0.1.0.AppImage` - Universal Linux app
- `ragy_0.1.0_amd64.deb` - Debian/Ubuntu package

## Cross-Platform Building

### Building Windows App on Mac

```bash
npm run electron:build:win
```

Requirements:
- Wine installed (for app signing)
- Or skip signing during development

### Building Mac App on Windows

Not recommended. Use a Mac or CI/CD service.

## Directory Structure

```
RAGy/
├── electron/
│   ├── main.js       # Electron main process
│   └── preload.js    # Secure bridge
├── src/              # React frontend (unchanged)
├── server/           # Node.js backend (unchanged)
├── dist/             # Built frontend (generated)
├── release/          # Final packaged apps (generated)
└── build-resources/  # App icons
```

## Version Management

**IMPORTANT:** Always increment the version before building for distribution!

### Changing Version

Edit `package.json`:
```json
{
  "version": "0.1.0"  // Change this
}
```

Or use npm commands:
```bash
# Patch version (0.1.0 -> 0.1.1) - Bug fixes
npm version patch

# Minor version (0.1.0 -> 0.2.0) - New features
npm version minor

# Major version (0.1.0 -> 1.0.0) - Breaking changes
npm version major
```

### Version Numbering During Testing

```
0.1.0  - Initial Electron migration
0.1.1  - First test build for Windows PC
0.1.2  - Fixed crash on startup
0.1.3  - Added feature X
...
0.2.0  - Ready for wider testing
1.0.0  - Production release
```

## App Configuration

### Installation Options (Windows NSIS)

Users can:
- ✅ Choose installation directory
- ✅ Create desktop shortcut
- ✅ Create Start Menu shortcut
- ✅ Uninstall via Control Panel

### Data Directory

Currently hardcoded to `data/` in project root.
Future enhancement: Allow users to choose data directory on first launch.

## Distributing Updates

### Manual Distribution (Testing Phase)

1. Build new version
2. Increment version number
3. Copy installer to shared location or send directly
4. Users download and install

### Auto-Update (Future)

Configured in `package.json`:
```json
"publish": {
  "provider": "github",
  "owner": "tomyud1",
  "repo": "RAGy"
}
```

To enable auto-updates:
1. Create GitHub Release
2. Upload built installers as release assets
3. App will check for updates automatically

## Troubleshooting

### "App won't start"

- Check console for errors
- Ensure server port 3001 is not in use
- Check that `server/server.js` exists

### "Build fails"

- Run `npm install` again
- Check that all files are present
- For Windows builds on Mac: install Wine

### "App is too large"

- Normal! Electron apps are 200-300MB
- Includes Chromium browser + Node.js runtime
- Trade-off for easy distribution

### "Icons not showing"

- Add proper icon files to `build-resources/`
- See `build-resources/README.md` for formats

## Development vs Production

| Feature | Development | Production |
|---------|-------------|------------|
| Frontend | Vite dev server | Built files in dist/ |
| Backend | Started by Electron | Started by Electron |
| DevTools | Auto-open | Disabled |
| Console logs | Visible | Hidden |
| Hot reload | Yes | No |

## What Changed from Web Version

**✅ No changes needed:**
- All React components work as-is
- All server code works as-is
- All Python code works as-is
- All API endpoints work as-is

**📦 New wrapper:**
- Electron provides the window
- Server starts automatically
- Looks like a native desktop app

## Next Steps

1. ✅ Migration to Electron complete
2. ⏭️ Test on macOS (`npm run electron:dev`)
3. ⏭️ Build for Windows (`npm run electron:build:win`)
4. ⏭️ Test on Windows PC
5. ⏭️ Add custom icons
6. ⏭️ Implement auto-updater
7. ⏭️ Add configurable data directory

## Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [electron-builder Documentation](https://www.electron.build/)
- [Electron Forge](https://www.electronforge.io/) (alternative to electron-builder)
