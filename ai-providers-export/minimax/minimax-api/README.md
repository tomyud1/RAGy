# MiniMax-M2 API Documentation

Welcome to the MiniMax-M2 API documentation! This folder contains comprehensive guides for integrating and using the MiniMax-M2 AI model in your applications.

## 📚 Documentation Index

### Getting Started

1. **[Text Generation API Introduction](./01-text-generation-intro.md)**
   - Overview of MiniMax-M2 capabilities
   - Supported models and features
   - Context window information
   - Integration options

2. **[Authentication & Getting Started](./06-authentication.md)**
   - How to obtain API credentials
   - Security best practices
   - Quick start examples
   - Troubleshooting guide

3. **[Pricing](./07-pricing.md)**
   - Token-based pricing model
   - Cost estimation examples
   - Cost optimization tips
   - Promotional offers

### Integration Guides

4. **[Compatible Anthropic API (Recommended)](./02-compatible-anthropic-api.md)**
   - Using Anthropic SDK with MiniMax
   - Response structure and handling
   - Multi-turn conversations
   - Best practices

5. **[Compatible OpenAI API](./03-compatible-openai-api.md)**
   - Using OpenAI SDK with MiniMax
   - Reasoning split feature
   - Streaming support
   - Tool calling with OpenAI format

### Advanced Features

6. **[M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md)**
   - Function calling capabilities
   - Interleaved thinking process
   - Complete tool use examples
   - Best practices for tool integration

7. **[M2 for AI Coding Tools](./05-ai-coding-tools.md)**
   - Code understanding and generation
   - Integration with popular coding tools
   - Multi-file context handling
   - Code-specific best practices

## 🚀 Quick Start

### 1. Get Your API Key

Visit [MiniMax Platform](https://platform.minimax.io/) and obtain your:
- GroupID
- API Key

See [Authentication Guide](./06-authentication.md) for detailed steps.

### 2. Choose Your Integration Method

**Option A: Anthropic SDK (Recommended)**

```python
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key="your_api_key"
)

message = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=[{"role": "user", "content": [{"type": "text", "text": "Hello!"}]}]
)
```

**Option B: OpenAI SDK**

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[{"role": "user", "content": "Hello!"}]
)
```

### 3. Explore Advanced Features

- [Tool Use & Function Calling](./04-tool-use-and-thinking.md)
- [AI Coding Integration](./05-ai-coding-tools.md)

## 🌟 Key Features

### Large Context Window
- **204,800 tokens** - Handle entire codebases, long documents, and extended conversations

### Interleaved Thinking
- See the model's reasoning process
- Improved accuracy through step-by-step thinking
- Better transparency and debugging

### Function Calling
- Call external APIs and functions
- Retrieve real-time data
- Extend AI capabilities dynamically

### Competitive Pricing
- **Input**: $0.30 per 1M tokens
- **Output**: $1.20 per 1M tokens
- **Free until Nov 10, 2025** (promotional offer)

### Dual API Compatibility
- **Anthropic API** format (recommended)
- **OpenAI API** format
- Easy migration from existing projects

## 📖 Common Use Cases

### 1. AI Assistants
Build conversational AI with long-term memory and context awareness.

**Relevant docs**:
- [Text Generation Introduction](./01-text-generation-intro.md)
- [Anthropic API](./02-compatible-anthropic-api.md)

### 2. Code Analysis & Generation
Understand and generate code across multiple files.

**Relevant docs**:
- [AI Coding Tools](./05-ai-coding-tools.md)
- [Tool Use](./04-tool-use-and-thinking.md)

### 3. Document Processing
Analyze and summarize long documents with high accuracy.

**Relevant docs**:
- [Text Generation Introduction](./01-text-generation-intro.md)
- [Pricing](./07-pricing.md) (cost optimization)

### 4. Tool-Augmented Applications
Build AI agents that can interact with external systems.

**Relevant docs**:
- [Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md)

## 🔗 API Endpoints

### Anthropic-Compatible (Recommended)
```
Base URL: https://api.minimax.io/anthropic
```

### OpenAI-Compatible
```
Base URL: https://api.minimax.io/v1
```

## 🛠️ Supported Models

| Model | Context Window | Best For |
|-------|---------------|----------|
| `MiniMax-M2` | 204,800 tokens | General use, complex reasoning |
| `MiniMax-M2-Stable` | 204,800 tokens | High concurrency, commercial use |

## 💡 Best Practices

1. **Use Anthropic API** - Recommended for new projects
2. **Preserve thinking content** - Keep reasoning in conversation history
3. **Manage context** - Don't send unnecessary tokens
4. **Set max_tokens** - Prevent unexpectedly long outputs
5. **Use environment variables** - Never hardcode API keys
6. **Monitor usage** - Track costs and token consumption

## 🆘 Getting Help

### Documentation Issues
If you find issues in this documentation:
- Check the [official MiniMax docs](https://platform.minimax.io/docs/)
- Contact MiniMax support

### API Issues
1. Check [Authentication Guide](./06-authentication.md) for credential issues
2. Review error codes and troubleshooting
3. Check the [MiniMax Platform](https://platform.minimax.io/) for status updates

### Common Problems

**Problem: 401 Unauthorized**
- Solution: Check your API key in [Authentication Guide](./06-authentication.md)

**Problem: Rate limits**
- Solution: See [Pricing Guide](./07-pricing.md) for limits and optimization

**Problem: High costs**
- Solution: Review [Cost Optimization Tips](./07-pricing.md#cost-optimization-tips)

## 📱 Community & Support

- **Official Website**: https://platform.minimax.io/
- **Documentation**: https://platform.minimax.io/docs/
- **Developer Platform**: https://platform.minimax.io/

## 📝 License & Terms

Please review MiniMax's Terms of Service and Privacy Policy on the official platform.

## 🎉 Promotional Offer

**FREE API calls until November 10, 2025, at 24:00 UTC!**

Take advantage of this promotional period to test and integrate MiniMax-M2 at no cost.

## 📊 Version History

- **v1.0** - Initial documentation compilation (November 2024)
- Models: MiniMax-M2, MiniMax-M2-Stable
- Context Window: 204,800 tokens

## 🔄 Updates

This documentation is compiled from official MiniMax sources. For the most up-to-date information, always refer to:

https://platform.minimax.io/docs/api-reference/text-intro

---

**Last Updated**: November 8, 2025
**Source**: Compiled from official MiniMax API documentation
