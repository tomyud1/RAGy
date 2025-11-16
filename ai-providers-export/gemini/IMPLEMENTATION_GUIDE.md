# Google Gemini Implementation Guide

## Overview

Google Gemini provides the generativeai API with support for:
- Text generation
- Streaming responses
- Function/tool calling
- Large context windows (up to 2M tokens for Gemini 2.5 Flash)
- High rate limits

## Authentication

```javascript
const apiKey = process.env.GEMINI_API_KEY;

// API key is passed as URL parameter
const url = `https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key=${apiKey}`;
```

API keys start with `AIza` and can be obtained from [Google AI Studio](https://makersuite.google.com/app/apikey).

## Endpoints

### Non-streaming
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_API_KEY
```

### Streaming
```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=YOUR_API_KEY
```

## Message Format

Gemini uses a different structure from OpenAI/Anthropic:

```javascript
{
  "contents": [
    {
      "parts": [
        { "text": "System instruction: You are a helpful assistant.\n\nUser: Hello!" }
      ]
    }
  ],
  "tools": [...],
  "toolConfig": { "functionCallingConfig": { "mode": "ANY" } },
  "generationConfig": {
    "temperature": 0.7,
    "maxOutputTokens": 200000,
    "topP": 0.8,
    "topK": 40
  }
}
```

**Key characteristics:**
- No separate roles for system/user/assistant - combine into text
- Conversation history must be formatted as text in prompt
- Each turn is in `contents` array with `parts`

## Building Conversation History

```javascript
function buildEnhancedPrompt(conversationHistory, message) {
  let prompt = '';

  // Add conversation history
  if (conversationHistory?.messages?.length > 0) {
    prompt += '=== CONVERSATION HISTORY (FOR CONTEXT ONLY) ===\n';

    conversationHistory.messages.forEach((msg) => {
      if (msg.role === 'user') {
        prompt += `USER: ${msg.content}\n\n`;
      } else if (msg.role === 'assistant') {
        prompt += `ASSISTANT: ${msg.content}\n\n`;
      }
    });

    prompt += '=== END OF CONVERSATION HISTORY ===\n\n';
  }

  // Add current message
  prompt += '=== YOUR TASK: RESPOND ONLY TO THIS MESSAGE ===\n';
  prompt += `${message}\n`;
  prompt += '=== END OF MESSAGE ===\n\n';
  prompt += 'IMPORTANT: The conversation history is for context only. Only respond to the message in "YOUR TASK" section.';

  return prompt;
}
```

## Tool/Function Calling

**Tool Definition:**
```javascript
{
  "functionDeclarations": [
    {
      "name": "get_weather",
      "description": "Get weather for a location",
      "parameters": {
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
  ]
}
```

**Tool Config:**
```javascript
{
  "functionCallingConfig": {
    "mode": "ANY"  // ANY, AUTO, or NONE
  }
}
```

**Function Call from AI:**
```javascript
{
  "candidates": [{
    "content": {
      "parts": [{
        "functionCall": {
          "name": "get_weather",
          "args": {
            "location": "New York"
          }
        }
      }]
    }
  }]
}
```

**Function Response to AI:**
```javascript
{
  "contents": [
    {
      "parts": [{
        "functionResponse": {
          "name": "get_weather",
          "response": {
            "temperature": 72,
            "condition": "sunny"
          }
        }
      }]
    }
  ]
}
```

## Streaming

```javascript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=${apiKey}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [...],
      tools: [...],
      toolConfig: {...},
      generationConfig: {...}
    })
  }
);

const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = '';

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });

  // Parse complete JSON objects from buffer
  while (true) {
    const openBrace = buffer.indexOf('{');
    if (openBrace === -1) break;

    // Find matching closing brace
    let braceCount = 0;
    let closeBrace = -1;
    for (let i = openBrace; i < buffer.length; i++) {
      if (buffer[i] === '{') braceCount++;
      if (buffer[i] === '}') braceCount--;
      if (braceCount === 0) {
        closeBrace = i;
        break;
      }
    }

    if (closeBrace === -1) break; // Incomplete JSON

    const jsonString = buffer.substring(openBrace, closeBrace + 1);
    buffer = buffer.substring(closeBrace + 1);

    try {
      const data = JSON.parse(jsonString);

      // Extract text from candidates
      if (data.candidates?.[0]?.content?.parts) {
        for (const part of data.candidates[0].content.parts) {
          if (part.text) {
            console.log(part.text); // Stream text chunk
          }

          if (part.functionCall) {
            console.log('Function call:', part.functionCall);
          }
        }
      }
    } catch (e) {
      // Invalid JSON, skip
    }
  }
}
```

**Note:** Gemini streaming returns complete JSON objects (not SSE format like OpenAI).

## Tool Calling Loop Pattern

```javascript
const MAX_TOOL_STEPS = 10;
const contents = [
  {
    parts: [{
      text: `${systemInstruction}\n\nUser: ${enhancedPrompt}`
    }]
  }
];

for (let step = 1; step <= MAX_TOOL_STEPS; step++) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      tools,
      toolConfig,
      generationConfig
    })
  });

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];

  // Check for function call
  const fnPart = parts.find(p => p.functionCall?.name);

  if (fnPart) {
    const name = fnPart.functionCall.name;
    const args = fnPart.functionCall.args || {};

    console.log(`Tool call: ${name}`, args);

    // Execute tool
    const result = await executeToolCall(name, args);

    // Add function response
    contents.push({
      parts: [{
        functionResponse: {
          name,
          response: result
        }
      }]
    });

    continue; // Loop again
  }

  // No function call - extract text
  const textPart = parts.find(p => p.text);
  if (textPart) {
    return textPart.text;
  }
}

return 'Could not complete request within tool-call step limit.';
```

## Generation Config

```javascript
{
  "temperature": 0.7,      // 0.0 to 2.0 - creativity level
  "maxOutputTokens": 200000, // Max response length
  "topP": 0.8,            // Nucleus sampling (0.0 to 1.0)
  "topK": 40,             // Top-K sampling
  "stopSequences": []      // Stop generation at these strings
}
```

**Recommended settings:**
- **Creative tasks**: temperature 0.9-1.2, topP 0.9, topK 40
- **Factual tasks**: temperature 0.3-0.7, topP 0.8, topK 10
- **Code generation**: temperature 0.2-0.5, topP 0.8, topK 10

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();
  throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
}
```

**Common errors:**
- `400` - Invalid request (bad API key format, invalid model)
- `401` - Authentication failed
- `403` - Permission denied / API not enabled
- `404` - Model not found
- `429` - Rate limit exceeded (quota exhausted)
- `500` - Server error
- `503` - Service unavailable

## API Key Validation

```javascript
function isValidGeminiKey(apiKey) {
  return apiKey &&
         apiKey !== 'YOUR_API_KEY' &&
         apiKey !== 'your_gemini_api_key_here' &&
         !apiKey.includes('Failed to save') &&
         apiKey.startsWith('AIza');
}
```

## Model Selection

```javascript
const models = {
  'gemini-2.5-flash': 'gemini-2.5-flash',         // Latest, fastest
  'gemini-2.0-flash': 'gemini-2.0-flash',         // Previous generation
  'gemini-1.5-pro': 'gemini-1.5-pro-latest',      // High quality
  'gemini-1.5-flash': 'gemini-1.5-flash-latest'   // Fast, cost-effective
};

const resolvedModel = models[modelId] || 'gemini-2.5-flash';
```

**Model characteristics:**
- **gemini-2.5-flash**: 2M context, fastest, best for most tasks
- **gemini-1.5-pro**: 2M context, highest quality, slower
- **gemini-1.5-flash**: 1M context, fast and efficient

## Retry Logic for Network Reliability

```javascript
const maxAttempts = 4;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    // Success
    return await processResponse(response);

  } catch (error) {
    console.error(`Attempt ${attempt} failed:`, error);

    if (attempt === maxAttempts) {
      throw error;
    }

    // Exponential backoff
    await new Promise(r => setTimeout(r, attempt * 500));
  }
}
```

## Complete Implementation Example

See [gemini.service.js](../../server/services/ai/gemini.service.js) for full implementation.

## Key Implementation Notes

1. **No Role System**: Combine system/user/assistant into text prompts
2. **Context Management**: Manually format conversation history
3. **JSON Streaming**: Parse complete JSON objects (not SSE)
4. **Function Format**: Different from OpenAI (functionCall/functionResponse)
5. **Tool Config**: Specify function calling mode explicitly
6. **Large Context**: Can handle very long contexts (up to 2M tokens)
7. **High Rate Limits**: More generous than other providers
8. **Simple Auth**: API key in URL, no complex headers

## Image Support

**Note:** This implementation does not include vision/image support, but Gemini does support it. To add:

```javascript
{
  "contents": [{
    "parts": [
      { "text": "What's in this image?" },
      {
        "inline_data": {
          "mime_type": "image/png",
          "data": "base64_encoded_image"
        }
      }
    ]
  }]
}
```

## References

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Function Calling Guide](https://ai.google.dev/docs/function_calling)
- [Streaming Guide](https://ai.google.dev/docs/streaming)
- [Get API Key](https://makersuite.google.com/app/apikey)
