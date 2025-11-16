# MiniMax-M2 Implementation Guide

## Overview

MiniMax provides M2 models through an **Anthropic-compatible API**. This means you can use the same code structure as Anthropic Claude with minimal changes.

**Key features:**
- Anthropic-compatible Messages API
- Tool/function calling support
- Thinking blocks for reasoning visualization
- Large context windows
- **Does NOT support image inputs** (text-only)
- Chinese language optimization

## Authentication

```javascript
const apiKey = process.env.MINIMAX_API_KEY;

headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
  'anthropic-version': '2023-06-01'
}
```

Get API keys from: [https://platform.minimax.io/](https://platform.minimax.io/)

## Endpoint

```
POST https://api.minimax.io/anthropic/v1/messages
```

## Message Format

Same as Anthropic Messages API:

```javascript
{
  "model": "MiniMax-M2",
  "max_tokens": 8192,
  "temperature": 1.0,  // MiniMax recommends 1.0
  "system": "You are a helpful assistant.",
  "messages": [
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there!" }
  ],
  "tools": [...],
  "stream": false
}
```

## Available Models

```javascript
const models = {
  'minimax-m2': 'MiniMax-M2',
  'minimax-m2-stable': 'MiniMax-M2-Stable',
  'MiniMax-M2': 'MiniMax-M2',
  'MiniMax-M2-Stable': 'MiniMax-M2-Stable'
};
```

**Model characteristics:**
- **MiniMax-M2**: Latest model, best performance
- **MiniMax-M2-Stable**: Stable version for production

## Tool/Function Calling

Identical to Anthropic format - see [Anthropic Implementation Guide](../anthropic/IMPLEMENTATION_GUIDE.md#toolfunctioncalling) for details.

**Quick reference:**

```javascript
// Tool definition
{
  "name": "get_weather",
  "description": "Get weather for a location",
  "input_schema": {
    "type": "object",
    "properties": {
      "location": { "type": "string", "description": "City name" }
    },
    "required": ["location"]
  }
}

// Tool use in assistant response
{
  "role": "assistant",
  "content": [
    {
      "type": "tool_use",
      "id": "toolu_abc123",
      "name": "get_weather",
      "input": { "location": "New York" }
    }
  ]
}

// Tool result
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

## Thinking Blocks

**Unique to MiniMax:** The model can output thinking blocks showing its reasoning process:

```javascript
{
  "role": "assistant",
  "content": [
    {
      "type": "thinking",
      "thinking": "Let me analyze this step by step...\n1. First, I need to understand...\n2. Then, I should consider..."
    },
    {
      "type": "text",
      "text": "Based on my analysis, here's the answer..."
    }
  ]
}
```

**Streaming thinking blocks:**
```javascript
// Event type: content_block_start
{
  "type": "content_block_start",
  "index": 0,
  "content_block": {
    "type": "thinking",
    "thinking": ""
  }
}

// Event type: content_block_delta
{
  "type": "content_block_delta",
  "index": 0,
  "delta": {
    "type": "thinking_delta",
    "thinking": "I need to think about..."
  }
}

// Event type: content_block_stop
{
  "type": "content_block_stop",
  "index": 0
}
```

**Handling thinking in UI:**
```javascript
if (delta?.type === 'thinking_delta') {
  const thinkingText = delta.thinking || '';

  // Display as thinking chip in UI
  onChunk(thinkingText, {
    type: 'thinking',
    text: thinkingText,
    output_index: currentBlockIndex
  });
}
```

## Image Handling (Workaround)

**Important:** MiniMax does NOT support images directly. This implementation converts images to text using Gemini:

```javascript
async function handleImageAttachment(attachment, geminiApiKey) {
  if (!geminiApiKey) {
    return '[Image could not be processed - Gemini API key required for conversion]';
  }

  try {
    const imageDescription = await convertImageToText(
      attachment.preview,
      geminiApiKey
    );

    return `--- Image: ${attachment.name} ---\n${imageDescription}\n--- End of image description ---`;
  } catch (error) {
    if (error.message.includes('API key not valid')) {
      return '⚠️ Image processing failed - Gemini API key is invalid.';
    }

    return `⚠️ Image processing failed: ${error.message}`;
  }
}
```

## Streaming

Same as Anthropic Messages API streaming:

```javascript
{
  "model": "MiniMax-M2",
  "max_tokens": 8192,
  "temperature": 1.0,
  "system": "...",
  "messages": [...],
  "tools": [...],
  "stream": true
}
```

**Stream Event Types (SSE format):**

1. `message_start` - Stream begins
2. `content_block_start` - New content block (text/thinking/tool_use)
3. `content_block_delta` - Content chunk
   - `text_delta` - Text content
   - `thinking_delta` - Thinking content (unique to MiniMax)
   - `input_json_delta` - Tool input JSON
4. `content_block_stop` - Content block complete
5. `message_delta` - Message metadata
6. `message_stop` - Stream complete

**Processing Example:**
```javascript
const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = '';

let currentTextBlock = null;
let currentThinkingBlock = null;
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
      } else if (block?.type === 'thinking') {
        currentThinkingBlock = { type: 'thinking', thinking: '' };
        allContent.push(currentThinkingBlock);
      } else if (block?.type === 'tool_use') {
        currentToolBlock = {
          type: 'tool_use',
          id: block.id,
          name: block.name,
          input: {},
          inputJson: ''
        };
        allContent.push(currentToolBlock);
      }
    }

    if (evtType === 'content_block_delta') {
      const delta = evt?.delta;

      if (delta?.type === 'text_delta' && currentTextBlock) {
        currentTextBlock.text += delta.text;
        console.log(delta.text); // Regular text
      }

      if (delta?.type === 'thinking_delta' && currentThinkingBlock) {
        currentThinkingBlock.thinking += delta.thinking;
        console.log('[THINKING]', delta.thinking); // Thinking
      }

      if (delta?.type === 'input_json_delta' && currentToolBlock) {
        currentToolBlock.inputJson += delta.partial_json;
      }
    }

    if (evtType === 'content_block_stop') {
      if (currentToolBlock && currentToolBlock.inputJson) {
        currentToolBlock.input = JSON.parse(currentToolBlock.inputJson);
        delete currentToolBlock.inputJson;
      }

      currentTextBlock = null;
      currentThinkingBlock = null;
      currentToolBlock = null;
    }

    if (evtType === 'message_stop') {
      break;
    }
  }
}
```

## Rate Limiting & Retry

Implementation includes exponential backoff for rate limits:

```javascript
const maxRetries = 5;
const initialBackoffMs = 2000;

for (let attempt = 1; attempt <= maxRetries; attempt++) {
  try {
    const response = await fetch(endpoint, options);

    if (response.status === 429) {
      const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
      console.log(`Rate limited. Waiting ${waitTime}ms...`);
      await sleep(waitTime);
      continue;
    }

    if (!response.ok) {
      throw new Error(`MiniMax API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (attempt === maxRetries) throw error;
    await sleep(initialBackoffMs * Math.pow(2, attempt - 1));
  }
}
```

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();

  // Parse error
  try {
    const errorJson = JSON.parse(errorText);
    const errorMessage = errorJson.error?.message || errorJson.message;
    throw new Error(`MiniMax: ${errorMessage}`);
  } catch {}

  throw new Error(`MiniMax API error: ${response.status} - ${errorText}`);
}
```

**Common errors:**
- `401` - Invalid API key
- `429` - Rate limit exceeded
- `500` - Server error
- `503` - Service unavailable

## Tool Calling Loop

Same as Anthropic - see [Anthropic Implementation Guide](../anthropic/IMPLEMENTATION_GUIDE.md#toolcallinglooppattern).

**Important:** Clean content blocks before re-sending:

```javascript
const cleanedContent = content.map(block => {
  if (block.type === 'tool_use') {
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

## Temperature Setting

MiniMax recommends `temperature: 1.0` for best results:

```javascript
{
  "model": "MiniMax-M2",
  "temperature": 1.0,  // ✅ Recommended by MiniMax
  "messages": [...]
}
```

## Complete Implementation Example

See [minimax.service.js](../../server/services/ai/minimax.service.js) for full implementation.

## Key Implementation Notes

1. **Anthropic Compatible**: Use same message/tool format as Anthropic
2. **Thinking Blocks**: Unique feature for reasoning visualization
3. **No Images**: Convert images to text using Gemini API
4. **Temperature 1.0**: MiniMax's recommended setting
5. **Content Block Cleaning**: Remove temporary fields before re-sending
6. **Message Alternation**: Must alternate user/assistant like Anthropic
7. **Chinese Optimization**: Excellent support for Chinese language
8. **Streaming Format**: SSE with thinking_delta events

## Thinking Block UI Integration

To display thinking blocks in your UI:

```javascript
// In your message rendering component
if (block.type === 'thinking') {
  return (
    <div className="thinking-block">
      <div className="thinking-header">
        <ThinkingIcon />
        <span>Thinking...</span>
      </div>
      <div className="thinking-content">
        {block.thinking}
      </div>
    </div>
  );
}
```

## Differences from Anthropic

**Similarities:**
- Same API endpoint structure
- Same message format
- Same tool/function calling format
- Same streaming event types

**Differences:**
- Different base URL (`api.minimax.io` vs `api.anthropic.com`)
- Different models
- **Thinking blocks** (unique to MiniMax)
- Temperature recommendation (1.0 vs 0.7)
- No image support
- Chinese language optimization
- Potentially different rate limits

## References

- [MiniMax Platform](https://platform.minimax.io/)
- [MiniMax API Documentation](https://platform.minimax.io/docs)
- [Anthropic Compatibility](https://platform.minimax.io/docs/api-reference/text-anthropic-api)
- See also: [Anthropic Implementation Guide](../anthropic/IMPLEMENTATION_GUIDE.md)
