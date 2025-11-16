# Moonshot (Kimi-K2) Implementation Guide

## Overview

Moonshot AI provides Kimi-K2 models through an **OpenAI-compatible API**. This means you can use the same code structure as OpenAI with minimal changes.

**Key features:**
- OpenAI-compatible Chat Completions API
- Tool/function calling support
- Thinking/reasoning models (Kimi-K2-turbo-preview)
- Large context windows (up to 262k tokens)
- **Does NOT support image inputs** (text-only)

## Authentication

```javascript
const apiKey = process.env.MOONSHOT_API_KEY;

headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
}
```

Get API keys from: [https://platform.moonshot.ai/](https://platform.moonshot.ai/)

## Endpoint

```
POST https://api.moonshot.ai/v1/chat/completions
```

## Message Format

Same as OpenAI Chat Completions:

```javascript
{
  "model": "kimi-k2-turbo-preview",
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there!" }
  ],
  "tools": [...],
  "tool_choice": "auto",
  "temperature": 0.7,
  "stream": false
}
```

## Available Models

```javascript
const models = {
  'kimi-k2': 'kimi-k2-turbo-preview',
  'kimi-k2-turbo': 'kimi-k2-turbo-preview',
  'kimi-k2-turbo-preview': 'kimi-k2-turbo-preview'
};
```

**Model characteristics:**
- **kimi-k2-turbo-preview**: 128k context, reasoning model, best for complex tasks

## Tool/Function Calling

Identical to OpenAI format - see [OpenAI Implementation Guide](../openai/IMPLEMENTATION_GUIDE.md#toolfunctioncalling) for details.

## Image Handling (Workaround)

**Important:** Kimi does NOT support images directly. This implementation converts images to text using Gemini:

```javascript
async function handleImageAttachment(attachment, geminiApiKey) {
  if (!geminiApiKey) {
    return '[Image could not be processed - Gemini API key required for conversion]';
  }

  try {
    // Convert image to text description using Gemini
    const imageDescription = await convertImageToText(
      attachment.preview,
      geminiApiKey
    );

    return `--- Image: ${attachment.name} ---\n${imageDescription}\n--- End of image description ---`;
  } catch (error) {
    if (error.message.includes('API key not valid')) {
      return '⚠️ Image processing failed - Gemini API key is invalid. Please update it in Settings.';
    }

    return `⚠️ Image processing failed: ${error.message}`;
  }
}
```

**Setup for image support:**
1. Save a valid Gemini API key in Settings
2. When user sends image with Kimi selected, image is automatically converted to text
3. Text description is sent to Kimi instead of image

## Streaming

Same as OpenAI Chat Completions streaming:

```javascript
{
  "model": "kimi-k2-turbo-preview",
  "messages": [...],
  "tools": [...],
  "stream": true
}
```

**Stream format (SSE):**
```
data: {"choices":[{"delta":{"content":"Hello"}}]}
data: {"choices":[{"delta":{"content":" there"}}]}
data: [DONE]
```

**Processing:**
```javascript
const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = '';

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });
  const lines = buffer.split('\n');
  buffer = lines.pop() ?? '';

  for (const line of lines) {
    if (!line.trim().startsWith('data:')) continue;
    const dataStr = line.slice(5).trim();
    if (dataStr === '[DONE]') break;

    try {
      const evt = JSON.parse(dataStr);
      const delta = evt?.choices?.[0]?.delta?.content;
      const finishReason = evt?.choices?.[0]?.finish_reason;

      if (delta) {
        console.log(delta); // Text chunk
      }

      // IMPORTANT: Check finish_reason to detect completion
      if (finishReason && finishReason !== 'null') {
        console.log('Stream complete:', finishReason);
        break;
      }
    } catch (e) {
      // Skip malformed JSON
    }
  }
}
```

**Important:** Kimi may not always send `[DONE]` marker. Always check `finish_reason` field.

## Rate Limiting & Retry

Moonshot has strict rate limits. Implementation includes exponential backoff:

```javascript
const maxRetries = 10;
const initialBackoffMs = 2000;

for (let attempt = 1; attempt <= maxRetries; attempt++) {
  try {
    const response = await fetch(endpoint, options);

    if (response.status === 429) {
      // Rate limit hit
      const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
      console.log(`Rate limited. Waiting ${waitTime}ms...`);
      await sleep(waitTime);
      continue;
    }

    if (!response.ok) {
      throw new Error(`Moonshot API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (attempt === maxRetries) throw error;
    await sleep(initialBackoffMs * Math.pow(2, attempt - 1));
  }
}
```

**Backoff schedule:**
- Attempt 1: 2 seconds
- Attempt 2: 4 seconds
- Attempt 3: 8 seconds
- Attempt 4: 16 seconds
- Attempt 5: 32 seconds
- Attempt 6: 64 seconds (~1 minute)
- ...up to attempt 10

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();

  // Parse error
  let errorMessage = errorText;
  try {
    const errorJson = JSON.parse(errorText);
    errorMessage = errorJson.error?.message || errorJson.message || errorText;
  } catch (e) {
    // Use raw text if not JSON
  }

  if (response.status === 401) {
    throw new Error(
      `Moonshot authentication failed. Possible causes:\n` +
      `- Invalid or expired API key\n` +
      `- Account has no credits/quota\n` +
      `- API key lacks required permissions\n` +
      `Check at: https://platform.moonshot.ai/`
    );
  }

  throw new Error(`Moonshot API error (${response.status}): ${errorMessage}`);
}
```

**Common errors:**
- `401` - Authentication failed (invalid key, no quota)
- `429` - Rate limit exceeded (very common)
- `500` - Server error
- `503` - Service unavailable

## Tool Calling Loop

Same as OpenAI - see [OpenAI Implementation Guide](../openai/IMPLEMENTATION_GUIDE.md#toolcallinglooppattern).

**Important note:** After each tool execution, request a progress update to prevent silent tool loops:

```javascript
messages.push({
  role: 'user',
  content: 'Briefly (1 sentence) summarize what you just discovered/did before continuing with more tools.'
});
```

## Complete Implementation Example

See [moonshot.service.js](../../server/services/ai/moonshot.service.js) for full implementation.

## Key Implementation Notes

1. **OpenAI Compatible**: Use same message/tool format as OpenAI
2. **No Images**: Convert images to text using Gemini API
3. **Rate Limits**: Very strict - use aggressive retry with exponential backoff
4. **Stream Completion**: Check `finish_reason`, don't rely on `[DONE]` marker
5. **Large Context**: Supports up to 262k tokens
6. **Reasoning Model**: Kimi-K2 is optimized for complex reasoning tasks
7. **Chinese Language**: Excellent support for Chinese language
8. **API Key Rotation**: Support multiple keys to handle rate limits

## Rate Limit UI Feedback

Implementation sends rate limit status to UI:

```javascript
// Send countdown metadata to client
onChunk('', {
  type: 'rate_limit_wait',
  waitTimeMs: 4000,
  waitTimeSec: 4,
  attemptNumber: 2,
  maxRetries: 10
});
```

This allows the UI to show a countdown timer to the user during rate limit waits.

## Differences from OpenAI

**Similarities:**
- Same API endpoint structure
- Same message format
- Same tool/function calling format
- Same streaming format

**Differences:**
- Different base URL (`api.moonshot.ai` vs `api.openai.com`)
- Different models
- Stricter rate limits
- No image support
- May not send `[DONE]` in streams
- Chinese language optimization

## References

- [Moonshot Platform](https://platform.moonshot.ai/)
- [Moonshot API Documentation](https://platform.moonshot.ai/docs)
- [OpenAI Compatibility](https://platform.moonshot.ai/docs/api-reference#chat)
- See also: [OpenAI Implementation Guide](../openai/IMPLEMENTATION_GUIDE.md)
