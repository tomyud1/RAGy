export const CHUNKING_METHODS = [
  {
    id: 'docling-hybrid',
    name: 'Docling Hybrid (Default)',
    description: 'Combines hierarchical structure with token-aware splitting. Best for most documents.',
    recommended: true,
    config: {
      maxTokens: 512,
      mergePeers: true,
    },
    supportedFormats: ['PDF', 'DOCX', 'XLSX', 'PPTX', 'Images', 'HTML', 'Text'],
    hardwareSupport: 'CPU, Apple Silicon (Metal), NVIDIA GPU (CUDA)'
  },
  {
    id: 'paddleocr-vl',
    name: 'PaddleOCR-VL',
    description: 'Page-based chunking with image extraction. 1 chunk = 1 page. Best for Windows/NVIDIA GPUs. Extracts page images for RAG retrieval.',
    recommended: false,
    config: {
      batchSize: 5,
    },
    supportedFormats: ['PDF', 'Images (JPG, PNG, GIF, BMP, TIFF)'],
    hardwareSupport: 'CPU (slow), NVIDIA GPU (fast, 5-10x speedup)',
    limitations: 'No Apple Silicon GPU support. No AMD GPU support. PDFs and images only.',
    warning: 'Not recommended for Apple Silicon Macs (CPU-only, very slow)'
  }
];

export const DEFAULT_VALUES = {
  maxTokens: 512,
  batchSize: 5,
  visionBatchSize: 4,
  processingBatchSize: 4,
  pictureDescriptionMaxTokens: 100,
  conversionOutputFolder: '', // Empty = use default app data location
  enableFormula: true,
  enableOcr: true,
  enableTableStructure: true,
  enablePictureClassification: false,
  enablePictureDescription: false,
  enableCodeEnrichment: false,
  visionModel: 'smolvlm',
  visionBackend: 'auto',
};
