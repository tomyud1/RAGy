# PaddleOCR-VL Complete Guide

## What is PaddleOCR-VL?

**PaddleOCR-VL** is a **0.9B parameter vision-language model** (VLM) released in October 2025 by Baidu. It's a revolutionary approach to document parsing that replaces traditional multi-model pipelines with a single unified model.

### Key Advantages

| Feature | Traditional (PPStructureV3) | PaddleOCR-VL |
|---------|----------------------------|--------------|
| **Architecture** | 14 separate AI models | 1 unified VLM (0.9B params) |
| **Memory Usage** | ~16GB RAM | ~2-3GB RAM/VRAM |
| **Speed** | Slow (memory-bound) | **3-10x faster** |
| **Languages** | English-focused | **109 languages** |
| **Quality** | Good | **SOTA (State of the Art)** |
| **Complex Elements** | Text, tables, formulas | Text, tables, formulas, **11 chart types** |

---

## Features & Capabilities

### ✅ Supported Elements

1. **Text Recognition**
   - 109 languages (Chinese, English, Japanese, Korean, Arabic, Hindi, Thai, etc.)
   - Handwritten text
   - Historical documents
   - Multilingual mixed documents

2. **Table Recognition**
   - Structured table extraction
   - Nested tables
   - Tables with merged cells
   - Export to Excel (.xlsx)

3. **Formula Recognition**
   - Mathematical formulas → LaTeX
   - Chemical formulas
   - Complex equations

4. **Chart Recognition** (11 types)
   - Combo charts
   - Pie charts
   - 100% stacked bar charts
   - Area charts
   - Bar charts
   - Bubble charts
   - Histograms
   - Line charts
   - Scatter plots
   - Stacked area charts
   - Stacked bar charts
   - **Converts charts to data tables!**

5. **Layout Analysis**
   - Document structure detection
   - Reading order preservation
   - Block classification

6. **Document Preprocessing**
   - Orientation detection & correction
   - Image unwarping (fix curved/warped docs)
   - Quality enhancement

---

## Hardware Requirements & Optimization

### Supported Hardware

| Hardware | Support | Performance | Memory Usage |
|----------|---------|-------------|--------------|
| **NVIDIA GPU** (CUDA 12.6+) | ✅ **Best** | Fast | 2-3GB VRAM (fp16), 4-6GB (fp32) |
| **CPU** | ⚠️ Not official | Very slow | 4-6GB RAM |
| **Apple Silicon (M1/M2/M3)** | ❌ No | N/A | N/A |
| **AMD GPU** | ❌ No | N/A | N/A |

### Performance Comparison

**NVIDIA GPU (fp16):**
- Speed: **2-5 seconds per page**
- Memory: ~2-3GB VRAM
- Recommended for: Production use

**CPU:**
- Speed: **30-60 seconds per page**
- Memory: ~4-6GB RAM
- Recommended for: Testing only

**Apple M3:**
- **NOT SUPPORTED** - Cannot run PaddleOCR-VL
- Workaround: Use cloud GPU (RunPod, Google Colab, Lambda Labs)

---

## Installation

### Prerequisites

**For NVIDIA GPU (Recommended):**
```bash
# Check CUDA version (must be 12.6+)
nvidia-smi

# Install PaddlePaddle GPU
pip3 install paddlepaddle-gpu==3.2.1 -i https://www.paddlepaddle.org.cn/packages/stable/cu126/

# Install PaddleOCR with doc-parser
pip3 install -U "paddleocr[doc-parser]"

# Install PyMuPDF for PDF handling
pip3 install PyMuPDF
```

**For CPU (Not Recommended):**
```bash
# Install PaddlePaddle CPU
pip3 install paddlepaddle==3.2.1

# Install PaddleOCR with doc-parser
pip3 install -U "paddleocr[doc-parser]"

# Install PyMuPDF
pip3 install PyMuPDF
```

### Docker (Alternative)

```bash
# Pull official image with GPU support
docker run -it --gpus all --network host --user root \
  ccr-2vdh3abv-pub.cnc.bj.baidubce.com/paddlepaddle/paddleocr-vl:latest \
  /bin/bash
```

---

## Configuration Options

### Initialization Parameters

```python
from paddleocr import PaddleOCRVL

pipeline = PaddleOCRVL(
    # Feature toggles
    use_doc_orientation_classify=True,   # Auto-detect and fix rotation
    use_doc_unwarping=True,              # Fix warped/curved documents
    use_layout_detection=True,           # Detect document structure
    use_chart_recognition=True,          # Parse charts to tables

    # Hardware settings
    device='gpu:0',                      # 'cpu', 'gpu:0', 'gpu:1', etc.
    precision='fp16',                    # 'fp32' (accurate) or 'fp16' (faster, GPU only)

    # Model parameters
    layout_threshold=0.5,                # Confidence threshold for layout
    temperature=1.0,                     # Language model temperature
    top_p=0.9,                           # Nucleus sampling parameter
    repetition_penalty=1.0,              # Prevent repetition

    # Image processing
    min_pixels=256*28*28,                # Minimum image resolution
    max_pixels=1280*28*28,               # Maximum image resolution
)
```

### Prediction Parameters

```python
output = pipeline.predict(
    input="image.png",                   # File path, URL, or directory
    format_block_content=True,           # Format as Markdown blocks
)
```

---

## Usage Examples

### Basic Usage

```python
from paddleocr import PaddleOCRVL

# Initialize
pipeline = PaddleOCRVL()

# Process image
output = pipeline.predict("document.png")

# Get result
result = output[0]

# Display in terminal
result.print()

# Save as markdown
result.save_to_markdown(save_path="output/")

# Save as JSON
result.save_to_json(save_path="output/")

# Save visualization
result.save_to_img(save_path="output/")

# Export tables to Excel
result.save_to_xlsx(save_path="output/")
```

### Advanced: GPU Optimized

```python
from paddleocr import PaddleOCRVL

# GPU with fp16 for maximum speed
pipeline = PaddleOCRVL(
    device='gpu:0',
    precision='fp16',
    use_chart_recognition=True,
)

# Process with all features
output = pipeline.predict(
    input="document.pdf",
    format_block_content=True,
)
```

### Production: Using vLLM Backend

For high-throughput production deployments:

```bash
# Install vLLM backend
paddleocr install_genai_server_deps vllm

# Start inference server
paddleocr genai_server --model_name PaddleOCR-VL-0.9B --backend vllm
```

Then use server backend:

```python
pipeline = PaddleOCRVL(
    vl_rec_backend="vllm-server",
    vl_rec_server_url="http://127.0.0.1:8118/v1"
)
```

---

## Output Format

### Markdown Output

```markdown
# Detected Title

## Section 1

This is paragraph text extracted from the document.

### Table 1

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |

### Formula

$$E = mc^2$$

### Chart Data

[Chart converted to table format]
```

### JSON Output

```json
{
  "layout": [
    {
      "type": "text",
      "text": "content here",
      "bbox": [x1, y1, x2, y2]
    },
    {
      "type": "table",
      "html": "<table>...</table>",
      "bbox": [x1, y1, x2, y2]
    },
    {
      "type": "formula",
      "latex": "E = mc^2",
      "bbox": [x1, y1, x2, y2]
    }
  ]
}
```

---

## Comparison with Docling

| Feature | Docling | PaddleOCR-VL |
|---------|---------|--------------|
| **Memory** | ~4-6GB | ~2-3GB (GPU), ~4-6GB (CPU) |
| **Speed** | 10-20s/page | 2-5s/page (GPU), 30-60s/page (CPU) |
| **Languages** | Limited | ✅ 109 languages |
| **Handwriting** | Basic | ✅ Excellent |
| **Charts** | Limited | ✅ 11 types → tables |
| **Output** | Markdown + chunks | Markdown + JSON |
| **Apple Silicon** | ✅ Works | ❌ Not supported |
| **Quality** | Good | ✅ SOTA |
| **RAG-Ready** | ✅ Pre-chunked | ⚠️ Need chunking |

---

## Memory Usage Breakdown

### PaddleOCR-VL (GPU, fp16)
- Model loading: ~1.5GB VRAM
- Inference: ~1-2GB VRAM
- **Peak: ~2-3GB VRAM**

### PaddleOCR-VL (GPU, fp32)
- Model loading: ~3GB VRAM
- Inference: ~2-3GB VRAM
- **Peak: ~4-6GB VRAM**

### PaddleOCR-VL (CPU)
- Model loading: ~3GB RAM
- Inference: ~2-3GB RAM
- **Peak: ~4-6GB RAM**

### PPStructureV3 (for comparison)
- Model loading: ~12GB RAM
- Inference: ~4GB RAM
- **Peak: ~16GB RAM** ❌

---

## Optimization Tips

### 1. Use fp16 Precision (GPU only)
```python
pipeline = PaddleOCRVL(precision='fp16')
# 2x faster, half memory, minimal quality loss
```

### 2. Disable Unused Features
```python
pipeline = PaddleOCRVL(
    use_chart_recognition=False,  # If no charts in documents
)
```

### 3. Batch Processing
Process multiple images at once for better throughput.

### 4. Use vLLM Backend
For production, vLLM can achieve **10x higher throughput**.

---

## Cloud GPU Options (for M3 users)

Since Apple Silicon isn't supported, use cloud GPU:

| Service | GPU Type | Cost | Best For |
|---------|----------|------|----------|
| **Google Colab** | T4 (free tier) | Free-$10/mo | Testing |
| **RunPod** | RTX 4090 | $0.39/hr | Development |
| **Lambda Labs** | A100 | $1.10/hr | Production |
| **Vast.ai** | Various | $0.15+/hr | Budget option |

### Quick Colab Setup

```python
# In Google Colab notebook
!pip install paddlepaddle-gpu==3.2.1
!pip install -U "paddleocr[doc-parser]"

# Upload your PDF, then run PaddleOCR-VL
from paddleocr import PaddleOCRVL
pipeline = PaddleOCRVL(device='gpu:0', precision='fp16')
```

---

## Recommendation for Your Use Case

### For M3 MacBook:

**Don't use PaddleOCR-VL locally** - it won't work with Apple Silicon.

**Better options:**

1. **Keep using Docling** (works well on M3)
   - Good quality
   - Reasonable speed
   - Already integrated

2. **Use cloud GPU for PaddleOCR-VL** when needed
   - Non-English documents
   - Charts that need parsing
   - Handwritten documents
   - Maximum quality needed

3. **Hybrid approach:**
   - Docling for 90% of documents (runs locally on M3)
   - PaddleOCR-VL on cloud GPU for special cases

---

## Testing the Script

```bash
# This will NOT work well on M3 (uses CPU, very slow)
python3 test-paddleocr-vl.py

# You'll get a warning and confirmation prompt
```

**Expected result on M3 with CPU:**
- ⚠️ 30-60 seconds per page
- Uses ~4-6GB RAM
- Works but impractically slow

**If you have NVIDIA GPU:**
- Edit script: `device='gpu:0'`, `precision='fp16'`
- Speed: 2-5 seconds per page
- Memory: ~2-3GB VRAM

---

## Summary

**PaddleOCR-VL is amazing IF you have NVIDIA GPU:**
- ✅ Much better than PPStructureV3
- ✅ Much better than Docling (for multilingual/charts)
- ✅ Fast and memory-efficient
- ✅ SOTA quality

**On Apple Silicon (M3):**
- ❌ Not supported
- Use Docling instead
- OR use cloud GPU for special cases

The future is bright - Apple Silicon support may come later!
