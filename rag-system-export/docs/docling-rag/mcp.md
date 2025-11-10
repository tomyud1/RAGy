# Docling MCP Server Documentation

## Overview

Docling supports AI agent development through an MCP (Model Context Protocol) Server, enabling integration with agentic AI systems that can autonomously accomplish specific tasks with minimal supervision.

## What is MCP?

The Model Context Protocol has emerged as a popular standard for connecting AI applications to external tools, addressing integration challenges in the agentic AI landscape.

## Installation and Configuration

### Claude Desktop

Adding Docling MCP to Claude requires editing the `claude_desktop_config.json` configuration file with this entry:

```json
{
  "mcpServers": {
    "docling": {
      "command": "uvx",
      "args": [
        "--from=docling-mcp",
        "docling-mcp-server"
      ]
    }
  }
}
```

### LM Studio

For LM Studio users, edit the `mcp.json` file with the appropriate configuration section, or use the direct install button available in the documentation.

## Features and Frameworks

Docling MCP provides application-specific tools and supports multiple AI frameworks including:

- LlamaIndex
- Llama Stack
- Pydantic AI
- smolagents

For comprehensive details, examples, and framework-specific implementations, refer to the [Docling MCP Server repository](https://github.com/docling-project/docling-mcp).
