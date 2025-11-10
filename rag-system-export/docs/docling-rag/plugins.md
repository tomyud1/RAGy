# Plugins - Docling Documentation

## Overview

Docling supports extensibility through third-party plugins that expand pipeline options at various processing stages. The system uses [pluggy](https://github.com/pytest-dev/pluggy/) for loading plugins registered via setuptools entrypoints.

## Plugin Registration

To register a plugin, define an entrypoint in your package configuration:

**pyproject.toml (PEP 621):**
```
[project.entry-points."docling"]
your_plugin_name = "your_package.module"
```

**Poetry:**
```
[tool.poetry.plugins."docling"]
your_plugin_name = "your_package.module"
```

**setup.cfg:**
```
[options.entry_points]
docling =
    your_plugin_name = your_package.module
```

**setup.py:**
```python
entry_points = {
    'docling': [
        'your_plugin_name = "your_package.module"'
    ]
}
```

- `your_plugin_name`: Unique identifier within the Docling ecosystem
- `your_package.module`: Module handling plugin registration

## Plugin Factories

### OCR Factory

Extend Docling with additional OCR engines. The registration module should contain:

```python
def ocr_engines():
    return {
        "ocr_engines": [
            YourOcrModel,
        ]
    }
```

Custom OCR models must implement `BaseOcrModel` and provide an options class extending `OcrOptions`. Reference the [default Docling plugins](https://github.com/docling-project/docling/blob/main/docling/models/plugins/defaults.py) for implementation details.

## Third-Party Plugins

External plugins require explicit enabling via the `allow_external_plugins` option:

```python
from docling.datamodel.base_models import InputFormat
from docling.datamodel.pipeline_options import PdfPipelineOptions
from docling.document_converter import DocumentConverter, PdfFormatOption

pipeline_options = PdfPipelineOptions()
pipeline_options.allow_external_plugins = True
pipeline_options.ocr_options = YourOptions

doc_converter = DocumentConverter(
    format_options={
        InputFormat.PDF: PdfFormatOption(
            pipeline_options=pipeline_options
        )
    }
)
```

### CLI Usage

When using the command-line interface, enable external plugins before selecting custom options:

```bash
docling --show-external-plugins
docling --allow-external-plugins --ocr-engine=NAME
```
