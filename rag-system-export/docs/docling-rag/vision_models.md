# Vision Models in Docling

## Overview

The `VlmPipeline` feature enables end-to-end document conversion using vision-language models. These models support multiple output formats including DocTags (preferred), Markdown, and HTML.

## Quick Start

**Command Line:**
```bash
docling --pipeline vlm FILE
```

**Python:**
```python
from docling.datamodel.base_models import InputFormat
from docling.document_converter import DocumentConverter, PdfFormatOption
from docling.pipeline.vlm_pipeline import VlmPipeline

converter = DocumentConverter(
    format_options={
        InputFormat.PDF: PdfFormatOption(
            pipeline_cls=VlmPipeline,
        ),
    }
)
doc = converter.convert(source="FILE").document
```

## Available Local Models

Docling supports models through Hugging Face Transformers and MLX frameworks. Key available models include:

- **GraniteDocling** (258M): IBM's dedicated document understanding model
- **SmolDocling** (256M): Lightweight option with fast inference (6.15 seconds on Apple M3 Max)
- **Qwen2.5-VL-3B**: Multi-lingual capability
- **Pixtral 12B**: Higher accuracy option
- **Gemma-3 12B**: Alternative architecture

Performance varies significantly—SmolDocling MLX achieves 6.15-second inference while larger Transformers models require 1000+ seconds on CPU.

## Custom Model Configuration

Users can configure custom models via Hugging Face repo IDs with custom prompts and inference parameters using `InlineVlmOptions`.

## Remote Models

The pipeline supports offloading to remote services with OpenAI-compatible APIs, including vLLM and Ollama.
