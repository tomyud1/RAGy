# Enrichment Features - Docling Documentation

## Overview

Docling enables enrichment of the document conversion pipeline with additional processing steps for specific components like code blocks and images. Most enrichment models are disabled by default due to increased processing time.

## Available Enrichment Models

| Feature | Parameter | Processed Item | Description |
|---------|-----------|-----------------|-------------|
| Code understanding | `do_code_enrichment` | `CodeItem` | Advanced parsing for code blocks |
| Formula understanding | `do_formula_enrichment` | `TextItem` (FORMULA label) | LaTeX extraction from equations |
| Picture classification | `do_picture_classification` | `PictureItem` | Document-specific image classification |
| Picture description | `do_picture_description` | `PictureItem` | Vision model-based image captioning |

## Code Understanding

"The code understanding step allows to use advanced parsing for code blocks found in the document" and automatically assigns the `code_language` property to `CodeItem` objects.

**Model:** CodeFormula (Hugging Face)

**CLI:** `docling --enrich-code FILE`

**Python Example:**
```python
from docling.document_converter import DocumentConverter, PdfFormatOption
from docling.datamodel.pipeline_options import PdfPipelineOptions
from docling.datamodel.base_models import InputFormat

pipeline_options = PdfPipelineOptions()
pipeline_options.do_code_enrichment = True

converter = DocumentConverter(format_options={
    InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
})
```

## Formula Understanding

"The formula understanding step will analyze the equation formulas in documents and extract their LaTeX representation." The HTML export functions leverage this enrichment for MathML visualization.

**Model:** CodeFormula (Hugging Face)

**CLI:** `docling --enrich-formula FILE`

## Picture Classification

"The picture classification step classifies the `PictureItem` elements in the document with the `DocumentFigureClassifier` model" to identify chart types, diagrams, logos, and signatures.

**Model:** DocumentFigureClassifier (Hugging Face)

**CLI:** `docling --enrich-picture-classes FILE`

## Picture Description

"The picture description step allows to annotate a picture with a vision model" for image captioning. Docling supports multiple vision model options.

### Vision Model Options

**Granite Vision Model**
- Model: ibm-granite/granite-vision-3.1-2b-preview
- Import: `from docling.datamodel.pipeline_options import granite_picture_description`

**SmolVLM Model**
- Model: HuggingFaceTB/SmolVLM-256M-Instruct
- Import: `from docling.datamodel.pipeline_options import smolvlm_picture_description`

**Custom Models**
Use `PictureDescriptionVlmOptions` for any Hugging Face Hub model with custom prompts.

**Remote Models**
`PictureDescriptionApiOptions` supports remote services like VLLM, Ollama, and IBM watsonx.ai. Requires `enable_remote_services=True`.

## Developing Custom Enrichments

Documentation includes examples for implementing custom enrichment models:
- Picture enrichment development
- Formula enrichment development
