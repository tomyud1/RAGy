# Text Generation API - Introduction

## Overview

The text generation API uses **MiniMax M2** to generate conversational content and trigger tool calls based on the provided context.

It can be accessed via:
- **HTTP requests**
- **Anthropic SDK** (Recommended)
- **OpenAI SDK**

## Supported Models

| Model Name        | Context Window (total input + output per request) |
| ----------------- | ------------------------------------------------- |
| MiniMax-M2        | 204,800 tokens                                    |
| MiniMax-M2-Stable | 204,800 tokens                                    |

**Note**: The maximum token count refers to the total number of input and output tokens.

## Model Features

### MiniMax-M2
- **Context Window**: 204,800 tokens (total input + output per request)
- **Agentic capabilities**: Advanced reasoning and decision-making
- **Function calling**: Ability to invoke external functions
- **Advanced reasoning**: Interleaved thinking process
- **Real-time streaming**: Support for streaming responses

### MiniMax-M2-Stable
- **Context Window**: 204,800 tokens
- **Built for high concurrency**: Optimized for commercial use
- **Stable performance**: Consistent and reliable results

## Key Features

### Interleaved Thinking
MiniMax-M2 uses an interleaved thinking process that enhances its performance in complex tasks by allowing it to reason step-by-step while maintaining context.

### Tool Use / Function Calling
The model can call external functions to extend its capabilities, making it ideal for:
- Data retrieval
- Calculations
- External API integration
- Dynamic information access

### High Context Window
With a 204,800 token context window, MiniMax-M2 can handle:
- Long documents
- Extended conversations
- Complex multi-turn interactions
- Large code files

## ⚠️ Current Limitations

### Image Input Not Supported
**Important**: MiniMax-M2 currently **does NOT support image inputs** through the API. If you need vision capabilities:
- Use other providers (OpenAI GPT-4V, Gemini, Claude) for image analysis
- MiniMax-M2 only accepts text-based inputs (including code files, scripts, documents)
- Future updates may add image support - check official documentation

### Supported Input Types
✅ Text messages
✅ Code files and scripts
✅ Scene files
✅ Long documents (up to 204,800 tokens)
✅ Multi-turn conversations

❌ Images (JPEG, PNG, etc.)
❌ Audio inputs
❌ Video inputs

## Integration Options

1. **Compatible Anthropic API (Recommended)** - Use Anthropic SDK with MiniMax models
2. **Compatible OpenAI API** - Use OpenAI SDK with MiniMax models
3. **Direct HTTP Requests** - Make direct API calls

## Use Cases

- AI Assistants
- Code Understanding and Generation
- Document Analysis
- Conversational AI
- Complex Reasoning Tasks
- Tool-augmented Applications

## Related Documentation

- [Compatible Anthropic API](./02-compatible-anthropic-api.md) - Recommended integration method
- [Compatible OpenAI API](./03-compatible-openai-api.md) - OpenAI SDK integration
- [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md) - Function calling guide
- [M2 for AI Coding Tools](./05-ai-coding-tools.md) - Integration with coding tools
- [Authentication](./06-authentication.md) - Getting started with API keys

## Source

Documentation compiled from: https://platform.minimax.io/docs/api-reference/text-intro


