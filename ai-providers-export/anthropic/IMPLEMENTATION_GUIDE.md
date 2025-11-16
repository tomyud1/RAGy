# Anthropic (Claude) Implementation Guide

## Overview

Anthropic provides the Messages API for Claude models (Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku, etc.).

The implementation includes:
- Messages API with streaming support
- Tool/function calling
- Extended thinking mode (Claude 3.5 Sonnet and Haiku)
- Multimodal support (images)
- API key rotation for rate limit handling

## Authentication

```javascript
const apiKey = process.env.ANTHROPIC_API_KEY;

headers: {
  'Content-Type': 'application/json',
  'x-api-key': apiKey,
  'anthropic-version': '2023-06-01'
}
```

## Endpoint

```
POST https://api.anthropic.com/v1/messages
```

## Message Format

```javascript
{
  "model": "claude-sonnet-4.5-20250929",
  "max_tokens": 8192,
  "system": "You are a helpful assistant.",
  "messages": [
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there!" }
  ],
  "tools": [...],
  "stream": false
}
```

**Key characteristics:**
- System instruction is separate from messages array
- Only `user` and `assistant` roles in messages (no `system` role)
- Content can be string or array of content blocks
- Messages must alternate between user and assistant

## Multimodal Support (Images)

```javascript
{
  "role": "user",
  "content": [
    { "type": "text", "text": "What's in this image?" },
    {
      "type": "image",
      "source": {
        "type": "base64",
        "media_type": "image/png",
        "data": "iVBORw0KGgoAAAANSUh..." // Base64 string without data URL prefix
      }
    }
  ]
}
```

**Image processing:**
```javascript
// Extract base64 data from data URL
const base64Match = dataUrl.match(/^data:image\/(png|jpeg|jpg|webp|gif);base64,(.+)$/);

if (base64Match) {
  const mediaType = base64Match[1];  // e.g., 'png'
  const base64Data = base64Match[2]; // Pure base64 string

  contentParts.push({
    type: 'image',
    source: {
      type: 'base64',
      media_type: `image/${mediaType}`,
      data: base64Data
    }
  });
}
```

**Supported formats:**
- PNG (image/png)
- JPEG (image/jpeg)
- WebP (image/webp)
- GIF (image/gif)

## Tool/Function Calling

**Tool Definition:**
```javascript
{
  "name": "get_weather",
  "description": "Get weather for a location",
  "input_schema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "City name"
      }
    },
    "required": ["location"]
  }
}
```

**Tool Use in Assistant Response:**
```javascript
{
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "I'll check the weather for you."
    },
    {
      "type": "tool_use",
      "id": "toolu_abc123",
      "name": "get_weather",
      "input": {
        "location": "New York"
      }
    }
  ]
}
```

**Tool Result from User:**
```javascript
{
  "role": "user",
  "content": [
    {
      "type": "tool_result",
      "tool_use_id": "toolu_abc123",
      "content": "{\"temperature\":72,\"condition\":\"sunny\"}"
    }
  ]
}
```

**Important:** Content blocks must be cleaned before sending back to API:

```javascript
const cleanedContent = content.map(block => {
  if (block.type === 'tool_use') {
    // Remove any temporary fields
    const cleanInput = {};
    for (const key in block.input) {
      if (key !== 'json' && key !== 'inputJson') {
        cleanInput[key] = block.input[key];
      }
    }

    return {
      type: 'tool_use',
      id: block.id,
      name: block.name,
      input: cleanInput
    };
  }
  return block;
});
```

## Extended Thinking Mode

Available for Claude 3.5 Sonnet and Claude 3.5 Haiku:

```javascript
{
  "model": "claude-sonnet-4.5-20250929",
  "max_tokens": 8192,
  "system": "...",
  "messages": [...],
  "tools": [...],
  "stream": true,
  "thinking": {
    "type": "enabled",
    "budget_tokens": 4000  // Tokens allocated for internal reasoning
  }
}
```

This enables Claude to use internal reasoning before responding, improving response quality for complex tasks.

## Streaming

```javascript
{
  "model": "claude-sonnet-4.5-20250929",
  "max_tokens": 8192,
  "system": "...",
  "messages": [...],
  "tools": [...],
  "stream": true
}
```

**Stream Event Types (SSE format):**

1. `message_start` - Stream begins
2. `content_block_start` - New content block (text/tool_use)
3. `content_block_delta` - Content chunk
   - `text_delta` - Text content
   - `input_json_delta` - Tool input JSON accumulation
4. `content_block_stop` - Content block complete
5. `message_delta` - Message metadata
6. `message_stop` - Stream complete

**Processing Example:**
```javascript
const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = '';

let currentTextBlock = null;
let currentToolBlock = null;
const allContent = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });
  const lines = buffer.split('\n');
  buffer = lines.pop() ?? '';

  for (const line of lines) {
    if (!line.trim().startsWith('data:')) continue;
    const dataStr = line.slice(5).trim();

    const evt = JSON.parse(dataStr);
    const evtType = evt?.type;

    if (evtType === 'content_block_start') {
      const block = evt?.content_block;
      if (block?.type === 'text') {
        currentTextBlock = { type: 'text', text: '' };
        allContent.push(currentTextBlock);
      } else if (block?.type === 'tool_use') {
        currentToolBlock = {
          type: 'tool_use',
          id: block.id,
          name: block.name,
          input: {},
          inputJson: '' // Accumulator
        };
        allContent.push(currentToolBlock);
      }
    }

    if (evtType === 'content_block_delta') {
      const delta = evt?.delta;

      if (delta?.type === 'text_delta' && currentTextBlock) {
        currentTextBlock.text += delta.text;
        console.log(delta.text); // Stream to UI
      }

      if (delta?.type === 'input_json_delta' && currentToolBlock) {
        currentToolBlock.inputJson += delta.partial_json;
      }
    }

    if (evtType === 'content_block_stop') {
      if (currentToolBlock && currentToolBlock.inputJson) {
        // Parse accumulated JSON
        currentToolBlock.input = JSON.parse(currentToolBlock.inputJson);
        delete currentToolBlock.inputJson;
      }
      currentTextBlock = null;
      currentToolBlock = null;
    }

    if (evtType === 'message_stop') {
      break;
    }
  }
}
```

## Tool Calling Loop Pattern

```javascript
const MAX_TOOL_STEPS = 10;
const messages = [];

for (let step = 1; step <= MAX_TOOL_STEPS; step++) {
  // 1. Call Claude
  const response = await streamClaudeRequest(messages);

  // 2. Accumulate content blocks during streaming
  const contentBlocks = await processStream(response);

  // 3. Check for tool use
  const toolUseBlocks = contentBlocks.filter(b => b.type === 'tool_use');

  if (toolUseBlocks.length === 0) {
    // No tools - extract text and return
    const textBlocks = contentBlocks.filter(b => b.type === 'text');
    return textBlocks.map(b => b.text).join('');
  }

  // 4. Add assistant message with tool use
  messages.push({
    role: 'assistant',
    content: cleanContentBlocks(contentBlocks)
  });

  // 5. Execute tools and collect results
  const toolResults = [];
  for (const toolUse of toolUseBlocks) {
    const result = await executeToolCall(toolUse.name, toolUse.input);
    toolResults.push({
      type: 'tool_result',
      tool_use_id: toolUse.id,
      content: JSON.stringify(result)
    });
  }

  // 6. Add user message with tool results
  messages.push({ role: 'user', content: toolResults });

  // 7. Request periodic update
  messages.push({
    role: 'user',
    content: 'Based on the tool results, decide: if you need more information, call another tool. If you have enough information, provide your final answer to the user.'
  });
}
```

## API Key Rotation for Rate Limiting

Implementation includes automatic key rotation when rate limits are hit:

```javascript
// Multiple API keys (comma-separated)
const apiKeys = process.env.ANTHROPIC_API_KEY.split(',').map(k => k.trim());

async function makeRequestWithRotation(provider, requestFn, options) {
  const { maxRetries = 5, initialBackoffMs = 2000 } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const keyIndex = attempt % apiKeys.length;
    const apiKey = apiKeys[keyIndex];

    try {
      const response = await requestFn(apiKey);

      // Check for rate limit (429)
      if (response.status === 429) {
        const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
        console.log(`Rate limit hit. Waiting ${waitTime}ms...`);
        await sleep(waitTime);
        continue; // Try next key
      }

      return response;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      await sleep(initialBackoffMs * Math.pow(2, attempt - 1));
    }
  }
}
```

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();

  // Parse Anthropic error format
  try {
    const errorJson = JSON.parse(errorText);
    const errorType = errorJson.error?.type;
    const errorMessage = errorJson.error?.message;

    throw new Error(`Anthropic ${errorType}: ${errorMessage}`);
  } catch {}

  throw new Error(`Anthropic API error: ${response.status} - ${errorText}`);
}
```

**Common errors:**
- `401` - Invalid API key
- `429` - Rate limit exceeded
- `overloaded_error` - Service overloaded, retry with exponential backoff
- `invalid_request_error` - Invalid request format
- `500` - Server error

## Model Selection

```javascript
const models = {
  'claude-3.5-sonnet': 'claude-sonnet-4.5-20250929',
  'claude-3.5-haiku': 'claude-haiku-4.5-20250929',
  'claude-3-opus': 'claude-3-opus-20240229',
  'claude-3-sonnet': 'claude-3-sonnet-20240229',
  'claude-3-haiku': 'claude-3-haiku-20240307'
};

const resolvedModel = models[modelId] || modelId || 'claude-sonnet-4.5-20250929';
```

## Message Alternation Requirement

Anthropic requires messages to alternate between `user` and `assistant`. If you need consecutive user messages, combine them:

```javascript
// Bad - consecutive user messages
[
  { role: 'user', content: 'First message' },
  { role: 'user', content: 'Second message' }
]

// Good - combined into one
[
  { role: 'user', content: 'First message\n\nSecond message' }
]
```

## Complete Implementation Example

See [anthropic.service.js](../../server/services/ai/anthropic.service.js) for full implementation.

## Key Implementation Notes

1. **System Separate from Messages**: System instruction is a separate field
2. **Content Block Cleaning**: Remove temporary fields before re-sending
3. **Image Format**: Base64 without data URL prefix
4. **Tool Results**: Always wrapped in content blocks
5. **Message Alternation**: Must alternate user/assistant
6. **Streaming**: Accumulate content blocks during stream
7. **Rate Limiting**: Implement exponential backoff and key rotation
8. **Extended Thinking**: Improves quality for complex reasoning tasks
9. **Output Indexing**: Track content block order for proper UI rendering

## References

- [Anthropic Messages API](https://docs.anthropic.com/claude/reference/messages_post)
- [Tool Use Guide](https://docs.anthropic.com/claude/docs/tool-use)
- [Vision Guide](https://docs.anthropic.com/claude/docs/vision)
- [Extended Thinking](https://docs.anthropic.com/claude/docs/extended-thinking)
