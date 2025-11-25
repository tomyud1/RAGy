# Documentation Directory

This directory contains organized project documentation categorized by type.

## Directory Structure

### `/implementation` - Implementation Guides
Step-by-step guides for implementing specific features:
- [FIGURE_EXTRACTION_IMPLEMENTATION.md](implementation/FIGURE_EXTRACTION_IMPLEMENTATION.md) - Complete guide for figure extraction feature
- [IMPLEMENTATION_CHECKLIST.md](implementation/IMPLEMENTATION_CHECKLIST.md) - General implementation checklist

### `/guides` - Technical Guides
Comprehensive technical documentation and integration guides:
- [HOW-TOOLS-WORK.md](guides/HOW-TOOLS-WORK.md) - Deep dive into the tools system architecture
- [MCP-INTEGRATION.md](guides/MCP-INTEGRATION.md) - Model Context Protocol integration guide
- [MCP_SERVERS_ROADMAP.md](guides/MCP_SERVERS_ROADMAP.md) - Roadmap for MCP server development

### `/research` - Research & Analysis
Research findings, comparisons, and analysis documents:
- [PADDLEOCR_SETUP.md](research/PADDLEOCR_SETUP.md) - PaddleOCR setup and configuration guide
- [PADDLEOCR_MEMORY_ISSUE.md](research/PADDLEOCR_MEMORY_ISSUE.md) - Analysis of memory management in PaddleOCR
- [PADDLEOCR_VS_DOCLING_OUTPUT.md](research/PADDLEOCR_VS_DOCLING_OUTPUT.md) - Comparison between PaddleOCR and Docling
- [PADDLEOCR_VL_GUIDE.md](research/PADDLEOCR_VL_GUIDE.md) - PaddleOCR Vision-Language model guide

## Documentation Guidelines

When creating new documentation:

1. **Choose the right directory:**
   - `implementation/` - For "how to implement X" guides
   - `guides/` - For "how X works" technical documentation
   - `research/` - For comparisons, analysis, and research findings

2. **Naming conventions:**
   - Use UPPERCASE for documentation files
   - Use underscores to separate words
   - Be descriptive but concise

3. **Content structure:**
   - Start with a clear title and overview
   - Include table of contents for longer documents
   - Use code examples where appropriate
   - Add links to related documentation

4. **Keep it updated:**
   - Review documentation when making related code changes
   - Update the main [DOCS_INDEX.md](../DOCS_INDEX.md) when adding new files
   - Remove or archive outdated documentation

## Quick Links

- [Main Documentation Index](../DOCS_INDEX.md)
- [Testing Documentation](../testing/README.md)
- [Project README](../README.md)
