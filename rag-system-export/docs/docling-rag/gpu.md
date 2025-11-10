# GPU Support - Docling Documentation

## Achieving Optimal GPU Performance with Docling

This guide explains how to maximize GPU acceleration for Docling pipelines, covering device selection, pipeline configuration, and providing code examples for batch size and concurrency settings.

### Standard Pipeline

GPU acceleration is enabled through accelerator configuration:

```python
from docling.datamodel.accelerator_options import AcceleratorDevice, AcceleratorOptions

accelerator_options = AcceleratorOptions(
    device=AcceleratorDevice.CUDA,  # or AcceleratorDevice.AUTO
)
```

Control batch size and concurrency per pipeline stage:

```python
from docling.datamodel.pipeline_options import ThreadedPdfPipelineOptions

pipeline_options = ThreadedPdfPipelineOptions(
    ocr_batch_size=64,           # default 4
    layout_batch_size=64,        # default 4
    table_batch_size=4,          # currently not using GPU batching
)
```

Higher `page_batch_size` values enable GPU batch inference, particularly for layout detection.

**Complete example:** See `gpu_standard_pipeline.py`

### VLM Pipeline

For optimal GPU utilization, use a local inference server supporting OpenAI-compatible chat completion endpoints:

- **vllm:** `http://localhost:8000/v1/chat/completions` (Linux only)
- **LM Studio:** `http://localhost:1234/v1/chat/completions` (Linux and Windows)
- **Ollama:** `http://localhost:11434/v1/chat/completions` (Linux and Windows)

#### Starting vllm Server

```bash
vllm serve ibm-granite/granite-docling-258M \
  --host 127.0.0.1 --port 8000 \
  --max-num-seqs 512 \
  --max-num-batched-tokens 8192 \
  --enable-chunked-prefill \
  --gpu-memory-utilization 0.9
```

#### Configuring Docling for VLM

```python
from docling.datamodel.pipeline_options import VlmPipelineOptions

vlm_options = VlmPipelineOptions(
    enable_remote_services=True,
    vlm_options={
        "url": "http://localhost:8000/v1/chat/completions",
        "params": {
            "model": "ibm-granite/granite-docling-258M",
            "max_tokens": 4096,
        },
        "concurrency": 64,  # default is 1
        "prompt": "Convert this page to docling.",
        "timeout": 90,
    }
)
```

Set global performance parameters:

```python
from docling.datamodel.settings import settings

settings.perf.page_batch_size = 64  # default is 4
```

Ensure `page_batch_size >= concurrency` value.

**Complete example:** See `gpu_vlm_pipeline.py`

#### Available Models

LM Studio and Ollama use llama.cpp runtime, requiring GGUF format models. Specific model availability is listed as "TBA."

## Performance Results

**Test Data:**
- 192 pages
- 95 tables

**Infrastructure:**
- Instance: g6e.2xlarge
- CPU: 8 vCPUs (AMD EPYC 7R13)
- RAM: 64GB
- GPU: NVIDIA L40S 48GB
- CUDA 13.0, Driver 580.95.05

**Performance Metrics:**
- Standard Pipeline (Inline): 3.1 pages/second
- VLM Pipeline (GraniteDocling): 2.4 pages/second
