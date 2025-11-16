# OpenAI Implementation Guide

## Overview

OpenAI provides two different APIs:
1. **Chat Completions API** - For GPT-4, GPT-4 Turbo, GPT-3.5 Turbo models
2. **Responses API** - For GPT-5 family models (reasoning models)

This implementation automatically detects which API to use based on the model name.

## Authentication

```javascript
const apiKey = process.env.OPENAI_API_KEY;

headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
}
```

## Endpoints

### Chat Completions API
```
POST https://api.openai.com/v1/chat/completions
```

### Responses API (GPT-5)
```
POST https://api.openai.com/v1/responses
```

## Message Format

### Chat Completions API

```javascript
{
  "model": "gpt-4",
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

**Message roles:**
- `system` - System instructions
- `user` - User messages
- `assistant` - AI responses
- `tool` - Tool/function call results

### Responses API (GPT-5)

```javascript
{
  "model": "gpt-5",
  "input": [
    { "role": "user", "content": "System instruction here" },
    { "role": "user", "content": "User message" },
    { "role": "assistant", "content": "Assistant response" }
  ],
  "tools": [...],
  "reasoning": {
    "effort": "medium",  // low, medium, high
    "summary": "auto"    // auto or none
  },
  "stream": false
}
```

**Key differences from Chat Completions:**
- No `system` role - convert system messages to `user` role
- Array is called `input` instead of `messages`
- Supports `reasoning` parameter for thinking models
- Content types use different names (e.g., `input_text` instead of `text`)

## Multimodal Support (Images)

### Chat Completions API

```javascript
{
  "role": "user",
  "content": [
    { "type": "text", "text": "What's in this image?" },
    {
      "type": "image_url",
      "image_url": { "url": "data:image/png;base64,..." }
    }
  ]
}
```

### Responses API

```javascript
{
  "role": "user",
  "content": [
    { "type": "input_text", "text": "What's in this image?" },
    {
      "type": "input_image",
      "image_url": "data:image/png;base64,..."  // Direct string, not nested
    }
  ]
}
```

## Tool/Function Calling

### Chat Completions API

**Tool Definition:**
```javascript
{
  "type": "function",
  "function": {
    "name": "get_weather",
    "description": "Get weather for a location",
    "parameters": {
      "type": "object",
      "properties": {
        "location": { "type": "string", "description": "City name" }
      },
      "required": ["location"]
    }
  }
}
```

**Tool Call from AI:**
```javascript
{
  "role": "assistant",
  "content": "",
  "tool_calls": [
    {
      "id": "call_abc123",
      "type": "function",
      "function": {
        "name": "get_weather",
        "arguments": "{\"location\":\"New York\"}"
      }
    }
  ]
}
```

**Tool Result:**
```javascript
{
  "role": "tool",
  "tool_call_id": "call_abc123",
  "content": "{\"temperature\":72,\"condition\":\"sunny\"}"
}
```

### Responses API (GPT-5)

**Tool Definition:**
```javascript
{
  "type": "function",
  "function": {
    "name": "get_weather",
    "description": "Get weather for a location",
    "parameters": {
      "type": "object",
      "properties": {
        "location": { "type": "string", "description": "City name" }
      },
      "required": ["location"],
      "additionalProperties": false
    },
    "strict": false
  }
}
```

**Tool Call in Output:**
```javascript
{
  "type": "function_call",
  "call_id": "call_abc123",
  "name": "get_weather",
  "arguments": "{\"location\":\"New York\"}"
}
```

**Tool Result in Input:**
```javascript
{
  "type": "function_call_output",
  "call_id": "call_abc123",
  "output": "{\"temperature\":72,\"condition\":\"sunny\"}"
}
```

## Streaming

### Chat Completions Streaming

```javascript
{
  "model": "gpt-4",
  "messages": [...],
  "stream": true
}
```

**Stream Events (SSE format):**
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

    const evt = JSON.parse(dataStr);
    const delta = evt?.choices?.[0]?.delta?.content;
    if (delta) {
      console.log(delta); // Text chunk
    }
  }
}
```

### Responses API Streaming

```javascript
{
  "model": "gpt-5",
  "input": [...],
  "tools": [...],
  "reasoning": { "effort": "medium", "summary": "auto" },
  "stream": true
}
```

**Stream Event Types:**
- `response.output_item.added` - New output item started
- `response.output_text.delta` - Text content delta
- `response.reasoning_text.delta` - Reasoning/thinking text delta
- `response.reasoning_summary_text.delta` - Reasoning summary
- `response.function_call_arguments.done` - Function call complete
- `response.output_item.done` - Output item complete
- `response.completed` - Full response complete with usage stats

**Example Processing:**
```javascript
for (const line of lines) {
  const evt = JSON.parse(dataStr);
  const evtType = evt?.type;

  if (evtType === 'response.output_text.delta') {
    console.log(evt.delta); // Regular text
  }

  if (evtType === 'response.reasoning_text.delta') {
    console.log(evt.delta); // Thinking/reasoning
  }

  if (evtType === 'response.function_call_arguments.done') {
    const { name, arguments, call_id } = evt;
    // Execute tool
  }
}
```

## Tool Calling Loop Pattern

Both APIs support multi-turn tool calling:

```javascript
const MAX_TOOL_STEPS = 10;

for (let step = 1; step <= MAX_TOOL_STEPS; step++) {
  // 1. Call AI
  const response = await callAI(messages);

  // 2. Check for tool calls
  const toolCalls = extractToolCalls(response);

  if (toolCalls.length === 0) {
    // No tools - return final text response
    return extractText(response);
  }

  // 3. Execute tools
  for (const call of toolCalls) {
    const result = await executeToolCall(call);
    messages.push(formatToolResult(call.id, result));
  }

  // 4. Request periodic update (prevents silent tool loops)
  messages.push({
    role: 'user',
    content: 'Briefly (1 sentence) summarize what you just discovered/did.'
  });
}
```

## Model Selection

```javascript
function isResponsesModel(modelLower) {
  return modelLower.includes('gpt-5') ||
         modelLower.includes('gpt5');
}

async function resolveOpenAIModel(modelId) {
  // Map friendly names to actual model IDs
  const modelMap = {
    'gpt-4': 'gpt-4-turbo-preview',
    'gpt-5': 'gpt-5-preview',
    'gpt-5-mini': 'gpt-5-mini-preview'
  };

  return modelMap[modelId] || modelId;
}
```

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();

  // Parse error for better messaging
  try {
    const errorJson = JSON.parse(errorText);
    if (errorJson.error?.message) {
      throw new Error(`OpenAI: ${errorJson.error.message}`);
    }
  } catch {}

  throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
}
```

**Common errors:**
- `401` - Invalid API key
- `429` - Rate limit exceeded
- `500` - Server error
- `503` - Service unavailable

## Complete Implementation Example

See [openai.service.js](../../server/services/ai/openai.service.js) for full implementation.

## Key Implementation Notes

1. **Automatic API Selection**: Detect model type and route to correct API
2. **Content Type Conversion**: Convert between Chat Completions and Responses format
3. **Tool Loop Management**: Bound tool calls to prevent infinite loops
4. **Progress Updates**: Force periodic text responses during tool execution
5. **Streaming + Tools**: Responses API supports both simultaneously
6. **Reasoning Tokens**: GPT-5 provides separate reasoning/thinking output
7. **Image Handling**: Convert data URLs to correct format for each API
8. **Output Ordering**: Responses API provides `output_index` for proper ordering

## References

- [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat)
- [OpenAI Responses API](https://platform.openai.com/docs/api-reference/responses)
- [Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)
- [Vision Guide](https://platform.openai.com/docs/guides/vision)
