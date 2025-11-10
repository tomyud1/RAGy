# Docling Architecture

## Overview

Docling's architecture follows a structured approach to document processing. The system uses a **document converter** as its central component, which orchestrates the conversion process for various file formats.

## Key Components

### Document Converter
The document converter manages format-specific processing by:
- Identifying the appropriate backend parser for each document format
- Selecting the relevant pipeline for execution orchestration
- Applying format-specific options and configurations

### Processing Pipeline
"For each document format, the _document converter_ knows which format-specific _backend_ to employ for parsing the document and which _pipeline_ to use for orchestrating the execution."

The system supports customizable configurations, allowing users to swap backends and adjust pipeline options (particularly useful for PDF processing).

### Output: Docling Document
The conversion result produces a [Docling document](../docling_document/), which serves as the fundamental representation for processed content.

## Downstream Applications

After conversion, users can:
- **Export** documents using built-in export methods (markdown, dictionary format, etc.)
- **Serialize** using specialized serializers
- **Chunk** using dedicated chunking tools

## Architecture Note

Components shown with dashed outlines in the architecture diagram represent base classes designed for subclassing and specialized implementations.

## Additional Resources

For comprehensive technical details, refer to the [Docling Technical Report](https://arxiv.org/abs/2408.09869).
