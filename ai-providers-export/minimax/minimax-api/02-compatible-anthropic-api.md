# Compatible Anthropic API (Recommended)

## Overview

MiniMax-M2 provides compatibility with the Anthropic SDK, allowing you to use familiar Anthropic API patterns with MiniMax models. This is the **recommended** integration method.

## Installation

Install the Anthropic SDK:

```bash
pip install anthropic
```

## Configuration

Configure the Anthropic client to use MiniMax's API endpoint:

```python
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key="your_api_key"
)
```

## Basic Usage

### Simple Message

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
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Hi, how are you?"
                }
            ]
        }
    ]
)

# Process response blocks
for block in message.content:
    if block.type == "thinking":
        print(f"Thinking:\n{block.thinking}\n")
    elif block.type == "text":
        print(f"Text:\n{block.text}\n")
```

## Response Structure

The response contains a list of content blocks that can be:

1. **Thinking blocks** (`type: "thinking"`):
   - Contains the model's reasoning process
   - Accessed via `block.thinking`
   - Helps understand how the model arrived at its answer

2. **Text blocks** (`type: "text"`):
   - Contains the final response text
   - Accessed via `block.text`
   - The actual answer to the user's query

## Multi-turn Conversations

For multi-turn conversations, **append the full `response.content` list** to the message history to maintain continuity:

```python
messages = [
    {
        "role": "user",
        "content": [{"type": "text", "text": "What is 2+2?"}]
    }
]

# First turn
response = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=messages
)

# Append assistant's full response to history
messages.append({
    "role": "assistant",
    "content": response.content  # Include ALL content blocks
})

# Second turn
messages.append({
    "role": "user",
    "content": [{"type": "text", "text": "What is that number squared?"}]
})

response = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=messages
)
```

## Parameters

### Supported Parameters

- **model** (required): Model identifier (`"MiniMax-M2"` or `"MiniMax-M2-Stable"`)
- **max_tokens** (required): Maximum number of tokens to generate
- **messages** (required): List of messages in the conversation
- **system** (optional): System prompt to guide the model's behavior
- **temperature** (optional): Controls randomness (range: (0.0, 1.0], recommended: 1.0)

### Important Notes

- **Temperature Range**: Must be in the range (0.0, 1.0]. Values outside this range will return an error.
- **Model Support**: Currently only supports the `MiniMax-M2` and `MiniMax-M2-Stable` models.

### Ignored Parameters

The following Anthropic parameters are currently ignored:
- `thinking`
- `top_k`
- `stop_sequences`
- `service_tier`
- `mcp_servers`
- `context_management`
- `container`

### Unsupported Features

- **Image inputs**: ❌ Not currently supported (MiniMax-M2 does not accept image inputs)
- **Document inputs**: Not currently supported
- **Audio inputs**: Not currently supported

## Best Practices

### 1. Preserve Thinking Content

Always preserve the assistant's thinking content in the conversation history to maintain performance:

```python
# ✅ CORRECT - Include all content blocks
messages.append({
    "role": "assistant",
    "content": response.content  # Full list including thinking blocks
})

# ❌ INCORRECT - Only including text blocks
text_only = [block for block in response.content if block.type == "text"]
messages.append({
    "role": "assistant",
    "content": text_only  # Missing thinking blocks!
})
```

### 2. Optimal Parameter Settings

Use these recommended settings for best results:
- **temperature**: `1.0`
- **top_p**: `0.95` (if supported)

### 3. Error Handling

Always handle potential errors:

```python
try:
    response = client.messages.create(
        model="MiniMax-M2",
        max_tokens=1000,
        system="You are a helpful assistant.",
        messages=messages
    )
except anthropic.APIError as e:
    print(f"API Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

## Tool Use / Function Calling

MiniMax-M2 supports function calling through the Anthropic API format. See [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md) for detailed guidance.

## Streaming

Streaming responses are supported:

```python
with client.messages.stream(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": [{"type": "text", "text": "Tell me a story."}]}
    ]
) as stream:
    for block in stream:
        if hasattr(block, 'delta'):
            print(block.delta.text, end='', flush=True)
```

## Authentication

You need:
1. **GroupID**: Unique identifier linked to your account
2. **API Key**: Secret key for authentication

To obtain these:
1. Navigate to the [Account tab](https://platform.minimax.io/docs/guides/quickstart)
2. Under "Your Profile," find your GroupID
3. In "API Keys," create a new secret key and store it securely

## Advantages of Anthropic API

✅ **Recommended** - This is the preferred integration method
✅ **Thinking blocks** - Access to model's reasoning process
✅ **Clean interface** - Well-designed API structure
✅ **Familiar** - Compatible with existing Anthropic code
✅ **Type safety** - Better typing support in modern IDEs

## Related Documentation

- [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md)
- [Authentication](./06-authentication.md)
- [Pricing](./07-pricing.md)

## Source

Documentation compiled from: https://platform.minimax.io/docs/api-reference/text-anthropic-api


