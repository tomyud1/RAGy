# Advanced Options - Docling Documentation

## Model Prefetching and Offline Usage

Docling automatically downloads models upon first use. For offline environments, users can prefetch models using:

**Command-line approach:**
```bash
docling-tools models download
```

This downloads layout, tableformer, picture classifier, code formula, and easyocr models to `$HOME/.cache/docling/models`.

Alternative methods include programmatic downloading via `docling.utils.model_downloader.download_models()` or downloading specific HuggingFace repositories.

**Using prefetched models:**
Users can specify the artifacts path through Python code, CLI flag `--artifacts-path`, or the `DOCLING_ARTIFACTS_PATH` environment variable.

## Using Remote Services

Docling prioritizes local processing but allows explicit opt-in for remote services like cloud OCR or hosted LLMs. This requires setting `enable_remote_services=True` in pipeline options, or the system raises an `OperationNotAllowed()` exception.

**Remote services requiring explicit opt-in:**
- `PictureDescriptionApiOptions`: Vision models via API

## Adjust Pipeline Features

### PDF Table Extraction Control

Users can configure table structure recognition to either map recognized structures to PDF cells (default) or use predicted text cells. The `TableFormerMode` option (available since v1.16.0) allows choosing between `FAST` and `ACCURATE` modes.

## Document Size Limits

The converter supports `max_num_pages` and `max_file_size` parameters to restrict processing:
- Maximum file size example: 20971520 bytes
- Maximum pages: configurable per document

## Binary PDF Stream Conversion

PDFs can be processed from BytesIO streams using the `DocumentStream` class instead of filesystem paths.

## Resource Usage Limits

CPU thread usage is controlled via the `OMP_NUM_THREADS` environment variable (default: 4 threads).
