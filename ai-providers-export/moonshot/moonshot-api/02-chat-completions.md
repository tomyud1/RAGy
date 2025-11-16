# Chat Completions API

## Overview

The Chat Completions API is the primary interface for interacting with Kimi models. It follows an OpenAI-compatible format, making it easy to integrate if you're familiar with OpenAI's API.

## Endpoint

```
POST https://api.moonshot.cn/v1/chat/completions
```

## Authentication

Include your API key in the request headers:

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

## Request Format

### Basic Request

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Hello, how are you?"
    }
  ]
}
```

## Request Parameters

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `model` | string | The model to use (e.g., `moonshot-v1-8k`, `moonshot-v1-32k`, `moonshot-v1-128k`) |
| `messages` | array | Array of message objects representing the conversation history |

### Optional Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `temperature` | number | 0.7 | Controls randomness (0.0 to 2.0). Higher = more random |
| `top_p` | number | 1.0 | Nucleus sampling parameter (0.0 to 1.0) |
| `max_tokens` | integer | - | Maximum tokens to generate in the response |
| `stream` | boolean | false | Whether to stream responses |
| `stop` | string or array | null | Sequences where the API will stop generating |
| `presence_penalty` | number | 0.0 | Penalizes new tokens based on presence (-2.0 to 2.0) |
| `frequency_penalty` | number | 0.0 | Penalizes repeated tokens (-2.0 to 2.0) |
| `n` | integer | 1 | Number of completions to generate |
| `tools` | array | - | List of tools the model can call |
| `tool_choice` | string/object | "auto" | Controls which tool to call |
| `response_format` | object | - | Specify output format (e.g., JSON mode) |

## Message Object Format

Each message in the `messages` array has the following structure:

```json
{
  "role": "user|assistant|system|tool",
  "content": "Message content",
  "name": "optional-name",
  "tool_calls": []  // Only for assistant messages with tool calls
}
```

### Message Roles

- **`system`**: Sets the behavior and context for the assistant
- **`user`**: Messages from the end user
- **`assistant`**: Previous responses from the model
- **`tool`**: Results from tool/function calls

## Response Format

### Standard Response

```json
{
  "id": "chatcmpl-123456",
  "object": "chat.completion",
  "created": 1699999999,
  "model": "moonshot-v1-8k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The assistant's response text"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 50,
    "total_tokens": 70
  }
}
```

### Response Fields

| Field | Description |
|-------|-------------|
| `id` | Unique identifier for the completion |
| `object` | Type of object returned |
| `created` | Unix timestamp of creation |
| `model` | Model used for the completion |
| `choices` | Array of completion choices |
| `usage` | Token usage information |

### Finish Reasons

| Reason | Description |
|--------|-------------|
| `stop` | Natural completion or hit stop sequence |
| `length` | Reached max_tokens limit |
| `tool_calls` | Model called a tool/function |
| `content_filter` | Content filtered by moderation |

## Examples

### Basic Conversation

```bash
curl https://api.moonshot.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "moonshot-v1-8k",
    "messages": [
      {"role": "system", "content": "You are a helpful coding assistant."},
      {"role": "user", "content": "Write a Python function to calculate factorial."}
    ],
    "temperature": 0.7
  }'
```

### Multi-Turn Conversation

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "What's the capital of France?"
    },
    {
      "role": "assistant",
      "content": "The capital of France is Paris."
    },
    {
      "role": "user",
      "content": "What's the population?"
    }
  ]
}
```

### Temperature Control

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {"role": "user", "content": "Generate a creative story about a robot."}
  ],
  "temperature": 1.2,
  "max_tokens": 500
}
```

### JSON Mode (Structured Output)

The Kimi API excels at generating accurate JSON responses:

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant that outputs data in JSON format."
    },
    {
      "role": "user",
      "content": "Extract the following information and return as JSON: Name: John Doe, Age: 30, City: New York"
    }
  ],
  "response_format": { "type": "json_object" }
}
```

## Token Limits by Model

| Model | Max Context Length | Typical Use Case |
|-------|-------------------|------------------|
| moonshot-v1-8k | 8,192 tokens | Short conversations, quick queries |
| moonshot-v1-32k | 32,768 tokens | Extended conversations, medium documents |
| moonshot-v1-128k | 131,072 tokens | Long documents, extensive context |

## Best Practices

### 1. System Message Design

Craft effective system messages:

```json
{
  "role": "system",
  "content": "You are an expert Python developer. Provide clear, concise code examples with explanations. Follow PEP 8 style guidelines."
}
```

### 2. Token Optimization

- Keep conversation history concise
- Summarize long conversations periodically
- Use context caching for repeated large contexts
- Choose appropriate model size for your needs

### 3. Temperature Selection

- **0.0 - 0.3**: Factual, deterministic responses
- **0.4 - 0.7**: Balanced creativity and consistency (default)
- **0.8 - 1.2**: Creative, varied responses
- **1.3 - 2.0**: Highly creative, experimental

### 4. Error Handling

Always handle potential errors:

```python
try:
    response = requests.post(url, headers=headers, json=data, timeout=30)
    response.raise_for_status()
    result = response.json()
    
    if 'error' in result:
        print(f"API Error: {result['error']['message']}")
    else:
        return result['choices'][0]['message']['content']
        
except requests.exceptions.Timeout:
    print("Request timed out")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
```

## Common Error Codes

| Status Code | Error Type | Description |
|-------------|-----------|-------------|
| 400 | Bad Request | Invalid request format or parameters |
| 401 | Unauthorized | Invalid or missing API key |
| 403 | Forbidden | API key doesn't have required permissions |
| 429 | Rate Limit | Too many requests, slow down |
| 500 | Server Error | Internal server error, retry later |
| 503 | Service Unavailable | Service temporarily unavailable |

## Performance Tips

1. **Use Appropriate Models**: Don't use 128k model for simple queries
2. **Batch Requests**: Group multiple queries when possible
3. **Cache Results**: Cache responses for identical queries
4. **Monitor Usage**: Track token usage to optimize costs
5. **Set Timeouts**: Implement reasonable timeout values

## Next Steps

- Learn about [Tool Usage](03-tools-function-calling.md) for external integrations
- Explore [Streaming](05-streaming.md) for real-time responses
- Understand [Context Caching](04-context-caching.md) for cost optimization

## Related Resources

- [Official API Documentation](https://platform.moonshot.ai/docs/overview)
- [Getting Started Guide](01-getting-started.md)
- [Best Practices](06-best-practices.md)



