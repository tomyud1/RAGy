# Compatible OpenAI API

## Overview

MiniMax-M2 provides compatibility with the OpenAI SDK, allowing you to use familiar OpenAI API patterns with MiniMax models.

## Installation

Install the OpenAI SDK:

```bash
pip install openai
```

## Configuration

Configure the OpenAI client to use MiniMax's API endpoint:

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="your_api_key"
)
```

## Basic Usage

### Simple Chat Completion

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hi, how are you?"},
    ]
)

print(response.choices[0].message.content)
```

### With Reasoning Split

To access the model's thinking process, use the `reasoning_split` parameter:

```python
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing."},
    ],
    extra_body={"reasoning_split": True},
)

# Access thinking and response separately
print(f"Thinking:\n{response.choices[0].message.reasoning_details[0]['text']}\n")
print(f"Text:\n{response.choices[0].message.content}\n")
```

## Response Structure

### Standard Response

```python
response.choices[0].message.content  # The text response
```

### With Reasoning Split

When `reasoning_split=True` is enabled:

```python
response.choices[0].message.reasoning_details[0]['text']  # Model's thinking process
response.choices[0].message.content  # Final response text
```

## Multi-turn Conversations

For multi-turn conversations, **append the full `response_message` object** (including the `tool_calls` field) to the message history:

```python
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is 2+2?"}
]

# First turn
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=messages
)

# Append assistant's FULL response to history
response_message = response.choices[0].message
messages.append({
    "role": "assistant",
    "content": response_message.content,
    "tool_calls": response_message.tool_calls  # Important for continuity!
})

# Second turn
messages.append({
    "role": "user",
    "content": "What is that number squared?"
})

response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=messages
)
```

## Parameters

### Supported Parameters

- **model** (required): Model identifier (`"MiniMax-M2"` or `"MiniMax-M2-Stable"`)
- **messages** (required): List of messages in the conversation
- **temperature** (optional): Controls randomness (range: (0.0, 1.0], recommended: 1.0)
- **top_p** (optional): Nucleus sampling parameter (recommended: 0.95)
- **max_tokens** (optional): Maximum tokens to generate
- **stream** (optional): Enable streaming responses
- **tools** (optional): List of available functions for tool calling
- **extra_body** (optional): Additional parameters like `reasoning_split`

### Important Notes

- **Temperature Range**: Must be in the range (0.0, 1.0]. Values outside this range will return an error.
- **n Parameter**: Only supports the value `1`

### Ignored Parameters

The following OpenAI parameters are currently ignored:
- `presence_penalty`
- `frequency_penalty`
- `logit_bias`

### Unsupported Features

- **Image inputs**: Not currently supported
- **Audio inputs**: Not currently supported
- **function_call** (deprecated): Not supported; use `tools` parameter instead

## Best Practices

### 1. Preserve Tool Calls in History

Always preserve the `tool_calls` field when maintaining conversation history:

```python
# ✅ CORRECT
response_message = response.choices[0].message
messages.append({
    "role": "assistant",
    "content": response_message.content,
    "tool_calls": response_message.tool_calls  # Essential!
})

# ❌ INCORRECT
messages.append({
    "role": "assistant",
    "content": response.choices[0].message.content  # Missing tool_calls!
})
```

### 2. Optimal Parameter Settings

Use these recommended settings for best results:
- **temperature**: `1.0`
- **top_p**: `0.95`

### 3. Use Thinking Content

Preserve thinking content wrapped in `<think>...</think>` tags in conversation history for better performance:

```python
# When reasoning_split is enabled, the thinking is available separately
# But in the conversation history, it's maintained automatically
```

### 4. Error Handling

Always handle potential errors:

```python
from openai import OpenAIError

try:
    response = client.chat.completions.create(
        model="MiniMax-M2",
        messages=messages
    )
except OpenAIError as e:
    print(f"API Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

## Tool Use / Function Calling

MiniMax-M2 supports function calling through the OpenAI API format. Use the `tools` parameter:

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city name"
                    }
                },
                "required": ["location"]
            }
        }
    }
]

response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "user", "content": "What's the weather in Tokyo?"}
    ],
    tools=tools
)
```

See [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md) for detailed guidance.

## Streaming

Enable streaming for real-time responses:

```python
stream = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Tell me a story."}
    ],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end='', flush=True)
```

## Authentication

You need:
1. **GroupID**: Unique identifier linked to your account
2. **API Key**: Secret key for authentication

To obtain these:
1. Navigate to the [Account tab](https://platform.minimax.io/docs/guides/quickstart)
2. Under "Your Profile," find your GroupID
3. In "API Keys," create a new secret key and store it securely

## Comparison with Anthropic API

| Feature | OpenAI API | Anthropic API (Recommended) |
|---------|------------|------------------------------|
| Thinking Access | Via `reasoning_split` | Built-in thinking blocks |
| Familiar to | OpenAI users | Anthropic/Claude users |
| Streaming | ✅ Supported | ✅ Supported |
| Tool Calling | ✅ Supported | ✅ Supported |
| Type Safety | Good | Better |

**Note**: The Anthropic API is the recommended integration method for new projects.

## Related Documentation

- [Compatible Anthropic API (Recommended)](./02-compatible-anthropic-api.md)
- [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md)
- [Authentication](./06-authentication.md)
- [Pricing](./07-pricing.md)

## Source

Documentation compiled from: https://platform.minimax.io/docs/api-reference/text-openai-api




