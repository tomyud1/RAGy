# Build Resources

This directory contains resources needed for building the Electron app.

## Required Icons

For the app to build properly, you'll need to add app icons in the following formats:

### Mac
- `icon.icns` - Mac icon file (1024x1024px recommended)

### Windows
- `icon.ico` - Windows icon file (256x256px recommended)

### Linux
- `icon.png` - Linux icon file (512x512px or 1024x1024px)

## Creating Icons

You can use online tools or command-line tools to convert a PNG image to these formats:

**From PNG to ICNS (Mac):**
```bash
# Using iconutil (built-in on macOS)
# Or use online tool: https://cloudconvert.com/png-to-icns
```

**From PNG to ICO (Windows):**
```bash
# Using ImageMagick
convert icon.png -define icon:auto-resize=256,128,64,48,32,16 icon.ico
# Or use online tool: https://convertio.co/png-ico/
```

## Temporary Solution

If you don't have icons yet, electron-builder will use default icons, but it will show warnings during build.

For development and testing, you can proceed without custom icons.
