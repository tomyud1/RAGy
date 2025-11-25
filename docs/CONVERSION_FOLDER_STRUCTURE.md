# Conversion Folder Structure

## Overview

RAGy now supports multiple document processing methods (Docling and PaddleOCR-VL), each saving outputs to organized subfolders.

## Folder Structure

```
conversions/
├── docling/                      # Docling outputs
│   └── {document_name}/
│       ├── full_document.md      # Complete markdown
│       ├── chunks.json           # Semantic chunks for vector DB
│       ├── images/               # Extracted images
│       │   ├── page1_img1.jpeg
│       │   └── ...
│       └── metadata.json         # Processing metadata
│
└── paddleocr/                    # PaddleOCR-VL outputs
    └── {document_name}/
        ├── pages/                # ⭐ Page images (for RAG retrieval)
        │   ├── page_1.png
        │   ├── page_2.png
        │   └── ...
        ├── page_1/               # Per-page detailed results
        │   ├── result.md         # Page markdown
        │   ├── page_1_res.json   # OCR detection results
        │   └── imgs/             # Images extracted from this page
        │       └── img_*.jpg
        ├── page_2/
        │   └── ...
        ├── chunks.json           # Page-based chunks for vector DB
        └── document.md           # Combined markdown from all pages
```

## How It Works

### 1. Docling Processing

When you select **Docling Hybrid** as the chunking method:

```
User uploads: document.pdf
↓
Docling processes document
↓
Outputs saved to: conversions/docling/document/
  ├── full_document.md          # Complete document
  ├── chunks.json               # Semantic chunks (intelligent splitting)
  └── images/                   # Extracted images
      └── page1_img1.jpeg
```

**Chunks structure:**
- Semantic chunking based on document structure
- Respects headings, sections, paragraphs
- Smart token-aware splitting

### 2. PaddleOCR-VL Processing

When you select **PaddleOCR-VL** as the chunking method:

```
User uploads: document.pdf
↓
PaddleOCR-VL processes document (page by page)
↓
Outputs saved to: conversions/paddleocr/document/
  ├── pages/                    # ⭐ Page images for RAG
  │   ├── page_1.png           # 200 DPI page image
  │   └── ...
  ├── page_1/                   # Detailed per-page results
  │   ├── result.md
  │   └── imgs/                 # Extracted images from page
  └── chunks.json               # Page-based chunks
```

**Chunks structure:**
- Page-based chunking (1 chunk = 1 page)
- Includes `page_image` path in metadata
- Includes `extracted_images` array in metadata

## Embedding Process

The embedding service automatically recognizes both folder structures:

1. **Load chunks**: Reads `conversions/` folder
2. **Detect subfolders**: Checks for `docling/` and `paddleocr/` subfolders
3. **Aggregate chunks**: Loads all chunks from both methods
4. **Embed**: Creates vector embeddings for all chunks
5. **Store metadata**: Preserves image paths and other metadata

### Backward Compatibility

The system also supports the old structure (direct folders under `conversions/`):

```
conversions/
└── document_chunk001_p1-10/    # Old structure (still works)
    └── chunks.json
```

## RAG Retrieval with Images

When chunks are retrieved during RAG queries:

### Docling Chunks
```json
{
  "text": "Chapter content...",
  "metadata": {
    "source": "document.pdf",
    "headings": ["Chapter 1", "Introduction"],
    "doc_items": [...]
  }
}
```

### PaddleOCR-VL Chunks
```json
{
  "text": "Page content...",
  "metadata": {
    "source": "document.pdf",
    "page": 1,
    "total_pages": 100,
    "processor": "paddleocr-vl",
    "page_image": "paddleocr/document/pages/page_1.png",  ⭐
    "extracted_images": [
      {
        "path": "paddleocr/document/page_1/imgs/img_1.jpg",
        "bbox": [100, 200, 300, 400]
      }
    ]
  }
}
```

The `page_image` and `extracted_images` paths are **relative to the conversions folder**, making them portable and easy to serve.

## Configuration

### Docling

No additional configuration needed. Automatically saves to `conversions/docling/`.

### PaddleOCR-VL

Optional configuration:
- `batchSize`: Pages per batch (default: 5)
- `conversionOutputFolder`: Base folder (default: `conversions/`)

## Migration from Old Structure

If you have existing conversions in the old structure:

```
conversions/
├── document_chunk001_p1-10/    # Old (still works)
├── docling/                     # New (preferred)
└── paddleocr/                   # New (preferred)
```

**The system handles both automatically!** No migration needed.

## API Endpoints

### Get Project Chunks

```javascript
GET /api/projects/:projectId/chunks

// Returns chunks from both docling/ and paddleocr/ subfolders
{
  "method": "docling-hybrid",  // For compatibility
  "chunks": [/* all chunks from both methods */],
  "stats": {
    "totalChunks": 150,
    "avgTokens": 400,
    "sourceFiles": 1
  }
}
```

### Start Chunking

```javascript
POST /api/chunking/start
{
  "projectId": "abc123",
  "method": "paddleocr-vl",  // or "docling-hybrid"
  "config": {
    "batchSize": 5,
    "conversionOutputFolder": "conversions/"
  }
}

// Outputs to conversions/paddleocr/{document}/
```

## File Serving

To serve page images and extracted images in the frontend:

```javascript
// Serve from conversions folder
app.use('/conversions', express.static(path.join(process.cwd(), 'conversions')));

// Access in frontend
<img src={`/conversions/${chunk.metadata.page_image}`} />
// Result: /conversions/paddleocr/document/pages/page_1.png
```

## Benefits of Subfolder Structure

1. **Organization**: Clear separation between methods
2. **Comparison**: Easy to compare Docling vs PaddleOCR outputs
3. **No conflicts**: Same document can be processed with both methods
4. **Cleanup**: Delete one method's outputs without affecting the other
5. **Scalability**: Can add more methods in the future

## Example Workflow

```bash
# User uploads heat_transfer_textbook.pdf

# Option 1: Process with Docling
→ Creates: conversions/docling/heat_transfer_textbook/
  ├── full_document.md
  ├── chunks.json (semantic chunks)
  └── images/

# Option 2: Process with PaddleOCR-VL (on Windows with GPU)
→ Creates: conversions/paddleocr/heat_transfer_textbook/
  ├── pages/ (page images for RAG)
  ├── page_1/, page_2/, ... (detailed results)
  └── chunks.json (page-based chunks)

# Embedding
→ Embeds ALL chunks from both methods
→ Vector DB contains chunks from both sources

# RAG Query: "Explain heat conduction equations"
→ Retrieves relevant chunks from both methods
→ PaddleOCR chunks include page images
→ AI can reference and display page images in response
```

## Summary

- ✅ Docling saves to: `conversions/docling/{document}/`
- ✅ PaddleOCR-VL saves to: `conversions/paddleocr/{document}/`
- ✅ Embedding recognizes both subfolders
- ✅ Backward compatible with old structure
- ✅ Page images included in PaddleOCR chunks for RAG retrieval
- ✅ No migration needed - just works!
