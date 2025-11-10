# Docling Documentation for RAG

This folder contains comprehensive documentation about Docling, a document conversion and processing framework, optimized for RAG (Retrieval-Augmented Generation) and searchability.

## What is Docling?

Docling is a powerful document conversion framework that can:
- Convert various document formats (PDF, DOCX, XLSX, PPTX, images, etc.) into structured formats
- Extract text, tables, pictures, and layout information
- Enable RAG implementations with AI frameworks like LangChain, LlamaIndex, and Haystack
- Support advanced features like OCR, vision models, and GPU acceleration

## Documentation Contents

### Getting Started
- [getting_started.md](getting_started.md) - Overview and introduction
- [installation.md](installation.md) - Setup instructions for various platforms

### Core Concepts
- [architecture.md](architecture.md) - System architecture and components
- [docling_document.md](docling_document.md) - The unified document representation format
- [serialization.md](serialization.md) - Converting documents to text formats
- [chunking.md](chunking.md) - Breaking documents into manageable pieces for RAG
- [confidence_scores.md](confidence_scores.md) - Quality assessment metrics

### Usage & Features
- [supported_formats.md](supported_formats.md) - Input/output format support
- [enrichments.md](enrichments.md) - Code, formula, and image enrichment options
- [vision_models.md](vision_models.md) - VLM pipeline for end-to-end conversion
- [gpu.md](gpu.md) - GPU acceleration guide
- [advanced_options.md](advanced_options.md) - Advanced configuration options

### Integration & Extension
- [integrations.md](integrations.md) - Framework integrations (LangChain, LlamaIndex, etc.)
- [plugins.md](plugins.md) - Extending Docling with custom plugins
- [mcp.md](mcp.md) - Model Context Protocol server
- [jobkit.md](jobkit.md) - Distributed job processing

### Reference
- [examples.md](examples.md) - Example use cases and workflows
- [faq.md](faq.md) - Common questions and troubleshooting

## Use Cases for RAG

Docling is particularly useful for:
1. **Document Understanding**: Converting PDFs and other documents into structured data
2. **RAG Pipelines**: Chunking and processing documents for vector databases
3. **Table Extraction**: Extracting structured table data from documents
4. **Visual Grounding**: Connecting text to visual elements in documents
5. **Multi-format Processing**: Handling diverse document types in a unified way

## Key Features for AI Applications

- **Chunking**: Multiple strategies (Hybrid, Hierarchical) for optimal RAG performance
- **Vision Models**: Support for VLM pipelines with models like GraniteDocling
- **Vector Store Integration**: Works with Milvus, Weaviate, Qdrant, MongoDB, etc.
- **Framework Integration**: Native support for LangChain, LlamaIndex, Haystack
- **Confidence Scores**: Quality metrics to filter low-quality conversions

## Quick Links

- Official Documentation: https://docling-project.github.io/docling/
- GitHub Repository: https://github.com/docling-project/docling
- PyPI Package: https://pypi.org/project/docling/

---

*This documentation was crawled and formatted for easy searching and reference by AI assistants.*
