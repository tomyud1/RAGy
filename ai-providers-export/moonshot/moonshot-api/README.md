# Moonshot AI - Kimi API Documentation

Complete documentation for integrating the Moonshot AI Kimi API into your applications.

## Official Resources

- **Official Documentation**: [https://platform.moonshot.ai/docs/overview](https://platform.moonshot.ai/docs/overview)
- **Platform**: [https://platform.moonshot.ai](https://platform.moonshot.ai)
- **Base API URL**: `https://api.moonshot.cn`

## Quick Reference

### API Capabilities

| Feature | Supported | Notes |
|---------|-----------|-------|
| **Image Input** | ❌ No | Text-only processing |
| **Tool Usage** | ✅ Yes | Full function calling support |
| **Thinking Process** | ⚠️ Optional | Default: hidden (efficient), can be enabled via prompts |
| **Streaming** | ✅ Yes | Real-time response streaming |
| **Context Caching** | ✅ Yes | Up to 90% cost reduction |
| **JSON Mode** | ✅ Yes | Structured output generation |

### Key Findings

#### 🚫 Image Input: NOT SUPPORTED
The Kimi-K2 API **does not support image inputs**. It is designed exclusively for text-based processing and generation.

#### ✅ Tool Usage: FULLY SUPPORTED
The Kimi-K2 API has excellent tool/function calling capabilities:
- Intelligently determines which tools to invoke based on context
- **Default behavior**: Direct tool invocation without exposing thought process (more efficient, saves tokens)
- **Optional**: Can be configured to show detailed reasoning by adjusting prompts
- Seamless integration with external systems

**Source**: [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

#### ⚡ Thinking Process: CONFIGURABLE
- **Default (Production)**: Model directly executes tasks without showing reasoning → More concise, faster, saves tokens
- **Optional (Debugging)**: Configure prompts to reveal step-by-step reasoning → Useful for debugging and transparency
- Flexibility to choose based on specific business requirements

**Source**: [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

## Documentation Structure

### Getting Started
1. [**Overview**](00-overview.md) - Introduction and capabilities
2. [**Getting Started**](01-getting-started.md) - Quick start guide

### Core API
3. [**Chat Completions**](02-chat-completions.md) - Main API reference
4. [**Tools & Function Calling**](03-tools-function-calling.md) - External tool integration
5. [**Context Caching**](04-context-caching.md) - Cost optimization (up to 90% savings)
6. [**Streaming**](05-streaming.md) - Real-time responses

### Best Practices & Operations
7. [**Best Practices**](06-best-practices.md) - Production guidelines
8. [**Pricing & Rate Limits**](07-pricing-rate-limits.md) - Cost and limits
9. [**Error Handling**](08-error-handling.md) - Robust error management
10. [**Models**](09-models.md) - Model selection guide

## Available Models

| Model | Context Length | Best For |
|-------|---------------|----------|
| `moonshot-v1-8k` | 8,192 tokens | Quick queries, chat |
| `moonshot-v1-32k` | 32,768 tokens | Medium documents, conversations |
| `moonshot-v1-128k` | 131,072 tokens | Large documents, codebases |

## Quick Start Example

### Python

```python
import requests

api_key = "YOUR_API_KEY"
url = "https://api.moonshot.cn/v1/chat/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

data = {
    "model": "moonshot-v1-8k",
    "messages": [
        {"role": "user", "content": "Hello, Kimi!"}
    ]
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result['choices'][0]['message']['content'])
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const url = 'https://api.moonshot.cn/v1/chat/completions';

axios.post(url, {
  model: 'moonshot-v1-8k',
  messages: [
    { role: 'user', content: 'Hello, Kimi!' }
  ]
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
})
.then(response => {
  console.log(response.data.choices[0].message.content);
})
.catch(error => {
  console.error('Error:', error.message);
});
```

### cURL

```bash
curl https://api.moonshot.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "moonshot-v1-8k",
    "messages": [
      {"role": "user", "content": "Hello, Kimi!"}
    ]
  }'
```

## Common Use Cases

### 1. Chatbot
- **Model**: `moonshot-v1-8k` or `moonshot-v1-32k`
- **Features**: Streaming, conversation history
- **Docs**: [Streaming](05-streaming.md), [Chat Completions](02-chat-completions.md)

### 2. Document Q&A
- **Model**: `moonshot-v1-32k` or `moonshot-v1-128k`
- **Features**: Context caching for cost efficiency
- **Docs**: [Context Caching](04-context-caching.md)

### 3. Tool Integration
- **Model**: Any model
- **Features**: Function calling
- **Docs**: [Tools & Function Calling](03-tools-function-calling.md)

### 4. Code Analysis
- **Model**: `moonshot-v1-128k` for large codebases
- **Features**: Large context, structured output
- **Docs**: [Models](09-models.md)

## Key Features

### Context Caching
Save up to 90% on costs by reusing repeated context:

```python
# First request: Full processing + caching
response1 = chat(large_document, "Question 1")

# Subsequent requests: ~90% cheaper!
response2 = chat(large_document, "Question 2")
response3 = chat(large_document, "Question 3")
```

**Docs**: [Context Caching](04-context-caching.md)

### Tool Usage (Default Efficient Mode)

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string"}
                }
            }
        }
    }
]

# Model will automatically call tools when needed
# Default: No thought process shown (efficient)
response = chat_with_tools(messages, tools)
```

**Docs**: [Tools & Function Calling](03-tools-function-calling.md)

### Streaming Responses

```python
for chunk in stream_chat("Write a long story"):
    print(chunk, end='', flush=True)
```

**Docs**: [Streaming](05-streaming.md)

## Important Notes

### What Kimi API Can Do
✅ Advanced text generation and understanding  
✅ Multi-turn conversations with long context  
✅ External tool/function calling  
✅ Structured JSON output  
✅ Code generation and analysis  
✅ Document summarization and Q&A  
✅ Real-time streaming responses  
✅ Cost optimization via context caching  

### What Kimi API Cannot Do
❌ Process or analyze images  
❌ Process audio or video  
❌ Browse the internet (but can use tools you provide)  
❌ Execute code directly (but can generate code)  

## Performance Optimization

1. **Choose Right Model**: Don't use 128k for simple queries
2. **Use Context Caching**: Structure requests for cache hits
3. **Implement Rate Limiting**: Avoid hitting API limits
4. **Handle Errors Gracefully**: Implement retry logic
5. **Monitor Usage**: Track tokens and costs

**Docs**: [Best Practices](06-best-practices.md)

## Pricing Strategy

- **Token-based pricing**: Pay for input and output tokens
- **Cached tokens**: Significantly discounted (~90% off)
- **Model pricing**: Larger contexts cost more per token
- **Optimization**: Use caching and appropriate models

**Docs**: [Pricing & Rate Limits](07-pricing-rate-limits.md)

## Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| 401 | Invalid API key | Check key in dashboard |
| 429 | Rate limit | Implement exponential backoff |
| 400 | Invalid request | Validate request format |
| 500 | Server error | Retry with backoff |

**Docs**: [Error Handling](08-error-handling.md)

## Support

- **Documentation Issues**: Open issue in this repository
- **API Issues**: Contact Moonshot AI support
- **Community**: Moonshot AI developer forums

## Additional Resources

### Official Moonshot AI Resources
- [Kimi Latest Updates](https://platform.moonshot.ai/blog/posts/kimi-latest)
- [Context Caching Introduction](https://platform.moonshot.ai/blog/posts/introduction-to-context-caching)
- [Tool Usage Updates](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

### Related Documentation in This Repository
- [ComfyUI Nodes Documentation](../comfyui-nodes/)
- [Minimax API Documentation](../minimax-api/)
- [OpenAI Official Documentation](../../OpenAI%20Official%20DOCS/)

## Contributing

Found an error or want to improve this documentation? Please:
1. Check the official Moonshot AI docs for latest information
2. Submit issues or pull requests
3. Keep examples clear and tested

## License

This documentation is provided for educational purposes. Please refer to Moonshot AI's official terms of service for API usage terms.

---

**Last Updated**: November 8, 2025  
**Documentation Version**: 1.0  
**API Version**: Kimi-K2 (latest)
