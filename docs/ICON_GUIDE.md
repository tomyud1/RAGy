# App Icon Guide

Your app needs icons in multiple formats for different platforms.

## Required Formats

### Windows
- **icon.ico** - 256x256px (contains multiple sizes: 256, 128, 64, 48, 32, 16)
- Location: `build-resources/icon.ico`

### macOS
- **icon.icns** - 1024x1024px (contains multiple sizes automatically)
- Location: `build-resources/icon.icns`

### Linux
- **icon.png** - 512x512px or 1024x1024px
- Location: `build-resources/icon.png`

## Option 1: Generate AI Icon (Quick & Free)

Use AI to generate a simple, professional icon:

**Recommended AI Tools:**
1. **DALL-E 3** (via ChatGPT Plus) - Best quality
   - Prompt: "Simple, modern app icon for a RAG (Retrieval-Augmented Generation) system. Minimalist design with a book/document symbol and a neural network or AI element. Professional, clean, flat design. Purple and blue gradient. 1024x1024px"

2. **Midjourney** - Professional results
   - Similar prompt, request square format

3. **Stable Diffusion** (Free, local)
   - Use similar prompt
   - Generate 1024x1024px

**After generating:**
- Save as PNG (1024x1024px)
- Convert to required formats (see conversion section below)

## Option 2: Use Icon Libraries (Free)

**Free Icon Resources:**

1. **Flaticon** - https://www.flaticon.com/
   - Search: "document AI", "RAG", "database AI"
   - Download PNG (512px or larger)
   - Free with attribution (or $10/month for no attribution)

2. **Icons8** - https://icons8.com/
   - Similar search terms
   - Free with backlink

3. **IconFinder** - https://www.iconfinder.com/
   - Mix of free and paid
   - Good selection

4. **Font Awesome** - https://fontawesome.com/
   - Free icon fonts
   - Can export as PNG

**Recommended search terms:**
- "document database"
- "AI book"
- "knowledge base"
- "neural network document"
- "semantic search"

## Option 3: Design Custom Icon

**Simple Design Tools:**

1. **Figma** (Free) - https://figma.com/
   - Professional vector editor
   - Export at any size

2. **Canva** (Free tier sufficient) - https://canva.com/
   - Easy to use
   - Templates available

3. **Inkscape** (Free, open-source) - https://inkscape.org/
   - Vector graphics
   - Great for simple icons

**Design Tips:**
- Keep it simple (will be viewed at 16x16px to 1024x1024px)
- Use 2-3 colors max
- Avoid fine details (won't show at small sizes)
- Square format with some padding
- Test at 32x32px to ensure clarity

## Converting Between Formats

Once you have a 1024x1024px PNG, convert to all formats:

### Mac: PNG → ICNS

```bash
# Create iconset directory
mkdir MyIcon.iconset

# Create all required sizes (use Image Magick or Preview)
sips -z 16 16     icon1024.png --out MyIcon.iconset/icon_16x16.png
sips -z 32 32     icon1024.png --out MyIcon.iconset/icon_16x16@2x.png
sips -z 32 32     icon1024.png --out MyIcon.iconset/icon_32x32.png
sips -z 64 64     icon1024.png --out MyIcon.iconset/icon_32x32@2x.png
sips -z 128 128   icon1024.png --out MyIcon.iconset/icon_128x128.png
sips -z 256 256   icon1024.png --out MyIcon.iconset/icon_128x128@2x.png
sips -z 256 256   icon1024.png --out MyIcon.iconset/icon_256x256.png
sips -z 512 512   icon1024.png --out MyIcon.iconset/icon_256x256@2x.png
sips -z 512 512   icon1024.png --out MyIcon.iconset/icon_512x512.png
sips -z 1024 1024 icon1024.png --out MyIcon.iconset/icon_512x512@2x.png

# Convert to ICNS
iconutil -c icns MyIcon.iconset

# Move to build-resources
mv MyIcon.icns build-resources/icon.icns
```

### Windows: PNG → ICO

**Using ImageMagick** (install: `brew install imagemagick`):
```bash
convert icon1024.png -define icon:auto-resize=256,128,64,48,32,16 build-resources/icon.ico
```

**Using Online Tool** (easier):
- https://convertio.co/png-ico/
- Upload your 1024x1024px PNG
- Download ICO file
- Move to `build-resources/icon.ico`

### Linux: Just rename
```bash
cp icon1024.png build-resources/icon.png
```

## Online Conversion Tools (Easiest)

**All-in-one converters:**

1. **CloudConvert** - https://cloudconvert.com/
   - PNG to ICO
   - PNG to ICNS
   - High quality, free tier available

2. **ICO Convert** - https://icoconvert.com/
   - Specifically for ICO files
   - Free, no signup

3. **AnyConv** - https://anyconv.com/
   - Supports all formats
   - Free

## Temporary Solution (For Testing)

**If you don't have icons yet**, the app will still build with warnings. Electron-builder uses default Electron icon.

**To proceed without custom icons:**
1. Comment out icon lines in `package.json`:
   ```json
   {
     "build": {
       "mac": {
         // "icon": "build-resources/icon.icns"  // Comment out
       },
       "win": {
         // "icon": "build-resources/icon.ico"   // Comment out
       }
     }
   }
   ```

2. Or create placeholder icons:
   ```bash
   # macOS - copy default Electron icon
   cp /Applications/Electron.app/Contents/Resources/electron.icns build-resources/icon.icns
   ```

## Quick Start (Recommended Path)

1. **Generate with AI** (5 minutes)
   - Use ChatGPT DALL-E or free Stable Diffusion
   - Get 1024x1024px PNG

2. **Convert online** (5 minutes)
   - CloudConvert for ICNS
   - ICO Convert for ICO
   - Copy PNG for Linux

3. **Place in build-resources/**
   ```
   build-resources/
   ├── icon.icns (macOS)
   ├── icon.ico  (Windows)
   └── icon.png  (Linux)
   ```

4. **Build and test**
   ```bash
   npm run electron:build
   ```

**Total time: 10-15 minutes**

## Icon Best Practices

- **Colors**: Use 2-3 colors that work on both light and dark backgrounds
- **Contrast**: Ensure icon is visible on white, black, and colored backgrounds
- **Size**: Always start with 1024x1024px, scale down
- **Simplicity**: Avoid text (except maybe 1-2 letters)
- **Testing**: View at 16x16px - if not clear, simplify
- **Padding**: Leave ~10% padding around edges

## Example Icon Concepts for RAGy

Simple concepts you could create/generate:

1. **Book + Network nodes** - Symbolizes knowledge + AI
2. **Document with brain icon** - RAG concept
3. **Database + lightning bolt** - Fast retrieval
4. **Letter "R" stylized** - Simple, memorable
5. **Magnifying glass + documents** - Search/retrieval

Choose something simple and scalable!
