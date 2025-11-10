# Supported Formats - Docling

## Overview

Docling converts various document formats into a unified internal representation called the Docling Document, which can then be exported to different output formats. For architectural details, see the Architecture documentation.

## Supported Input Formats

### General Formats

| Format | Description |
|--------|-------------|
| PDF | Portable Document Format |
| DOCX, XLSX, PPTX | Microsoft Office 2007+ formats (Office Open XML) |
| Markdown | Lightweight markup language |
| AsciiDoc | "Plain-text markup language for structured technical content" |
| HTML, XHTML | Web markup formats |
| CSV | Comma-separated values |
| PNG, JPEG, TIFF, BMP, WEBP | Image formats |
| WebVTT | Web Video Text Tracks format for timed text |

### Schema-Specific Formats

| Format | Description |
|--------|-------------|
| USPTO XML | Patent document format from the United States Patent and Trademark Office |
| JATS XML | Academic article markup format |
| Docling JSON | JSON-serialized Docling Document representation |

## Supported Output Formats

| Format | Description |
|--------|-------------|
| HTML | With image embedding or referencing options |
| Markdown | Structured text markup |
| JSON | Lossless serialization preserving document structure |
| Text | Plain text without formatting markers |
| Doctags | "Markup format for efficiently representing the full content and layout characteristics of a document" |
