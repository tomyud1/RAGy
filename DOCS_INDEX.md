# RAGy Documentation Index

Welcome to the RAGy project documentation. This index provides a comprehensive overview of all documentation resources organized by category.

## Getting Started

Essential documents for new users:

- [README.md](README.md) - Project overview and introduction
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide to get up and running
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup instructions

## Implementation Guides

Step-by-step implementation documentation:

- [Figure Extraction Implementation](docs/implementation/FIGURE_EXTRACTION_IMPLEMENTATION.md) - Guide for implementing figure extraction
- [Implementation Checklist](docs/implementation/IMPLEMENTATION_CHECKLIST.md) - Checklist for feature implementation

## Technical Guides

In-depth technical documentation:

- [How Tools Work](docs/guides/HOW-TOOLS-WORK.md) - Understanding the tools system
- [MCP Integration](docs/guides/MCP-INTEGRATION.md) - Model Context Protocol integration guide
- [MCP Servers Roadmap](docs/guides/MCP_SERVERS_ROADMAP.md) - Roadmap for MCP server development

## Research Documents

Research findings and comparisons:

- [PaddleOCR vs Docling Output](docs/research/PADDLEOCR_VS_DOCLING_OUTPUT.md) - Comparison of OCR solutions
- [PaddleOCR Setup](docs/research/PADDLEOCR_SETUP.md) - PaddleOCR setup and configuration
- [PaddleOCR Memory Issue](docs/research/PADDLEOCR_MEMORY_ISSUE.md) - Memory management in PaddleOCR

## Testing Documentation

For testing information, see:

- [Testing README](testing/README.md) - Comprehensive testing guide
- [Testing Docs](testing/docs/) - Additional testing documentation and research

## Project Structure

```
RAGy/
├── README.md                 # Project overview
├── QUICKSTART.md            # Quick start guide
├── SETUP_GUIDE.md           # Setup instructions
├── DOCS_INDEX.md            # This file
│
├── docs/                    # Documentation
│   ├── implementation/      # Implementation guides
│   ├── guides/             # Technical guides
│   └── research/           # Research documents
│
├── testing/                 # Testing
│   ├── README.md           # Testing guide
│   ├── mcp/                # MCP tests
│   ├── gemini/             # Gemini tests
│   ├── paddleocr/          # PaddleOCR tests
│   ├── docling/            # Docling tests
│   ├── performance/        # Performance tests
│   ├── scripts/            # Testing utilities
│   ├── utils/              # Utility scripts
│   ├── outputs/            # Test outputs
│   └── docs/               # Testing documentation
│
├── server/                  # Backend server
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── mcp/                # MCP implementation
│   └── mcp-servers/        # MCP servers
│
├── src/                     # Frontend source
│   └── components/         # React components
│
├── data/                    # Data files
├── conversions/            # Document conversions
└── uploads/                # Uploaded files
```

## External Resources

### AI Provider Documentation

- [OpenAI Implementation Guide](ai-providers-export/openai/IMPLEMENTATION_GUIDE.md)

### Exported Projects

- [RAG System Export](rag-system-export/README.md) - Standalone RAG system
- [RAG System Setup](rag-system-export/SETUP.md)
- [RAG System Implementation Summary](rag-system-export/IMPLEMENTATION_SUMMARY.md)

## Contributing

When adding new documentation:

1. Place files in the appropriate directory under `docs/`
2. Use descriptive filenames in UPPERCASE with underscores
3. Update this index with links to new documents
4. Include clear section headings and table of contents for longer documents

## Documentation Categories

### By Topic

- **Setup & Installation**: README, QUICKSTART, SETUP_GUIDE
- **MCP (Model Context Protocol)**: MCP-INTEGRATION, MCP_SERVERS_ROADMAP, HOW-TOOLS-WORK
- **Document Processing**: FIGURE_EXTRACTION_IMPLEMENTATION, PADDLEOCR_SETUP, PADDLEOCR_VS_DOCLING_OUTPUT
- **Testing**: See [testing/README.md](testing/README.md)
- **Implementation**: IMPLEMENTATION_CHECKLIST, FIGURE_EXTRACTION_IMPLEMENTATION

### By Audience

- **New Users**: README → QUICKSTART → SETUP_GUIDE
- **Developers**: HOW-TOOLS-WORK → MCP-INTEGRATION → IMPLEMENTATION_CHECKLIST
- **Researchers**: docs/research/* → testing/docs/*
- **QA/Testing**: testing/README.md → testing/docs/*

## Quick Links

- [Testing Directory](testing/)
- [Documentation Directory](docs/)
- [Server Code](server/)
- [Frontend Code](src/)
- [AI Provider Exports](ai-providers-export/)
- [RAG System Export](rag-system-export/)
