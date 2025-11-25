"""
Docling converter configuration and initialization
"""

import sys
import json


def create_converter(enable_formula=True, enable_picture_classification=False,
                     enable_picture_description=False, enable_code_enrichment=False,
                     enable_ocr=True, enable_table_structure=True,
                     picture_description_max_tokens=800, vision_batch_size=4,
                     processing_batch_size=4, vision_backend='auto', vision_model='smolvlm'):
    """
    Create and configure a DocumentConverter with the specified options.
    
    Returns:
        tuple: (converter, pipeline_options, detected_device)
    """
    try:
        from docling.document_converter import DocumentConverter, PdfFormatOption
        from docling.datamodel.pipeline_options import (
            PdfPipelineOptions,
            AcceleratorOptions,
        )
        from docling.datamodel.base_models import InputFormat
    except ImportError as e:
        print(json.dumps({
            "success": False,
            "error": f"Docling not installed: {str(e)}"
        }))
        raise

    # Configure accelerator with auto-detection
    accelerator_options = AcceleratorOptions(
        device='auto',
        num_threads=8
    )

    pipeline_options = PdfPipelineOptions(
        accelerator_options=accelerator_options,
        ocr_batch_size=processing_batch_size,
        layout_batch_size=processing_batch_size,
        table_batch_size=processing_batch_size
    )

    # Enable enrichments based on config
    if enable_formula:
        pipeline_options.do_formula_enrichment = True
        print(json.dumps({"info": "Formula enrichment enabled - will extract LaTeX from equations"}), file=sys.stderr, flush=True)

    if enable_picture_classification:
        pipeline_options.do_picture_classification = True
        print(json.dumps({"info": "Picture classification enabled"}), file=sys.stderr, flush=True)

    if enable_picture_description:
        # We use hybrid approach (PyMuPDF + SmolVLM/Gemini)
        pipeline_options.do_picture_description = False

        if vision_model == 'gemini-2.0-flash':
            print(json.dumps({
                "info": "Picture description enabled using Gemini 2.0 Flash",
                "max_tokens_per_image": picture_description_max_tokens,
            }), file=sys.stderr, flush=True)
        else:
            print(json.dumps({
                "info": "Picture description enabled using SmolVLM (local processing)",
                "backend": vision_backend,
                "max_tokens_per_image": picture_description_max_tokens,
            }), file=sys.stderr, flush=True)

    if enable_code_enrichment:
        pipeline_options.do_code_enrichment = True
        print(json.dumps({"info": "Code enrichment enabled"}), file=sys.stderr, flush=True)

    pipeline_options.do_ocr = enable_ocr
    if enable_ocr:
        print(json.dumps({"info": "OCR enabled"}), file=sys.stderr, flush=True)
    else:
        print(json.dumps({"info": "OCR disabled"}), file=sys.stderr, flush=True)

    pipeline_options.do_table_structure = enable_table_structure
    if enable_table_structure:
        print(json.dumps({"info": "Table structure enabled"}), file=sys.stderr, flush=True)
    else:
        print(json.dumps({"info": "Table structure disabled"}), file=sys.stderr, flush=True)

    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )

    # Detect actual device
    try:
        import torch
        from docling.utils.accelerator_utils import decide_device
        detected_device = decide_device('auto')
    except:
        detected_device = 'cpu'

    return converter, pipeline_options, detected_device


def log_hardware_info(pipeline_options, detected_device, processing_batch_size, enable_picture_description):
    """Log hardware acceleration info"""
    try:
        import torch
        pytorch_version = torch.__version__
    except:
        pytorch_version = 'unknown'

    actual_vision_batch = getattr(
        getattr(pipeline_options, 'picture_description_options', None), 
        'batch_size', 
        "N/A"
    ) if enable_picture_description else "N/A"

    device_info = {
        "device": detected_device,
        "pytorch_version": pytorch_version,
        "batch_sizes": {
            "ocr": pipeline_options.ocr_batch_size,
            "layout": pipeline_options.layout_batch_size,
            "table": pipeline_options.table_batch_size,
            "vision": actual_vision_batch
        },
        "user_configured": True,
        "note": f"Using user-configured batch sizes (processing: {processing_batch_size}, vision: {actual_vision_batch})"
    }

    if detected_device == 'mps':
        device_info["hardware"] = "Apple Silicon GPU (Metal)"
        device_info["expected_speedup"] = "2-4x vs CPU"
    elif str(detected_device).startswith('cuda'):
        device_info["hardware"] = "NVIDIA GPU (CUDA)"
        device_info["expected_speedup"] = "3-10x vs CPU"
    else:
        device_info["hardware"] = "CPU only"
        device_info["warning"] = "No GPU acceleration - processing will be slower"

    print(json.dumps({"type": "hardware_info", "data": device_info}), file=sys.stderr, flush=True)
    
    return device_info

