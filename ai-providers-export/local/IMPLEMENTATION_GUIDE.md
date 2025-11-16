# Local LM Studio Implementation Guide

## Overview

LM Studio provides a local server that runs large language models on your own hardware. It uses an **OpenAI-compatible API**, allowing you to use the same code as OpenAI with a different base URL.

**Key features:**
- OpenAI-compatible Chat Completions API
- Tool/function calling support
- Reasoning/thinking model support (DeepSeek R1, Qwen3-Thinking, etc.)
- Run models completely offline
- No API costs
- Privacy-focused (data never leaves your machine)
- Support for vision models (if model supports it)

## Setup

1. **Download LM Studio:**
   - Visit: [https://lmstudio.ai/](https://lmstudio.ai/)
   - Download for your OS (Windows, macOS, Linux)

2. **Download a Model:**
   - Open LM Studio
   - Browse models in the "Search" tab
   - Download a model (recommended: Qwen 2.5 Coder, Llama 3.3, DeepSeek R1)

3. **Start Local Server:**
   - Go to "Local Server" tab in LM Studio
   - Select your downloaded model
   - Click "Start Server"
   - Default URL: `http://localhost:1234`

4. **Configure in Your App:**
   ```javascript
   process.env.LOCAL_BASE_URL = 'http://localhost:1234';
   // OR if accessing from another device:
   process.env.LOCAL_BASE_URL = 'http://192.168.1.100:1234';
   ```

## Authentication

**No authentication required!** LM Studio server runs locally without API keys.

```javascript
const baseUrl = process.env.LOCAL_BASE_URL || 'http://localhost:1234';

// No Authorization header needed
headers: {
  'Content-Type': 'application/json'
}
```

## Endpoint

```
POST {baseUrl}/v1/chat/completions
```

Example: `http://localhost:1234/v1/chat/completions`

## Message Format

Same as OpenAI Chat Completions:

```javascript
{
  "model": "local-model",  // Can be any string, LM Studio uses loaded model
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there!" }
  ],
  "tools": [...],
  "temperature": 0.7,
  "stream": false
}
```

## Model Selection

```javascript
{
  "model": "default"  // LM Studio uses the currently loaded model
}
```

You can pass any string for `model` - LM Studio will use whatever model you've loaded in the UI.

## Tool/Function Calling

Identical to OpenAI format - see [OpenAI Implementation Guide](../openai/IMPLEMENTATION_GUIDE.md#toolfunctioncalling) for details.

**Important:** Tool calling support depends on the model:
- ✅ **Supported:** Qwen 2.5, Llama 3.3, Mistral models
- ❌ **Not supported:** Older models without function calling

Check model card in LM Studio to see if it supports function calling.

## Reasoning/Thinking Models

LM Studio supports models with built-in reasoning/thinking capabilities:

**Recommended reasoning models:**
- DeepSeek R1 (14B, 32B, 70B)
- Qwen3-Thinking
- Other models with `<think>` tags

**Handling thinking output:**

### Method 1: Dedicated reasoning field
```javascript
const delta = evt?.choices?.[0]?.delta;

if (delta.reasoning) {
  // Model outputs thinking in separate field
  console.log('[THINKING]', delta.reasoning);
  onChunk(delta.reasoning, { type: 'thinking', text: delta.reasoning });
}

if (delta.content) {
  // Regular response content
  console.log('[CONTENT]', delta.content);
  onChunk(delta.content);
}
```

### Method 2: XML-style thinking tags
```javascript
const content = delta.content;

// Detect thinking blocks
if (content.includes('<think>') || content.includes('<thinking>')) {
  inThinkingBlock = true;
}

if (inThinkingBlock) {
  thinkingBuffer += content;

  if (content.includes('</think>') || content.includes('</thinking>')) {
    inThinkingBlock = false;

    // Extract thinking content (remove tags)
    const thinkingContent = thinkingBuffer
      .replace(/<think>/g, '')
      .replace(/<\/think>/g, '')
      .replace(/<thinking>/g, '')
      .replace(/<\/thinking>/g, '');

    onChunk(thinkingContent, { type: 'thinking', text: thinkingContent });
    thinkingBuffer = '';
  }
}
```

## Streaming

Same as OpenAI Chat Completions streaming:

```javascript
{
  "model": "default",
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
const decoder = new TextDecoder('utf-8');
let buffer = '';

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  buffer += decoder.decode(value, { stream: true });
  const lines = buffer.split('\n');
  buffer = lines.pop() || '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === 'data: [DONE]') continue;
    if (!trimmed.startsWith('data: ')) continue;

    const json = trimmed.slice(6);
    try {
      const parsed = JSON.parse(json);
      const delta = parsed.choices?.[0]?.delta;

      // Handle reasoning/thinking
      const reasoningText = delta.reasoning || delta.reasoning_content;
      if (reasoningText) {
        onChunk(reasoningText, { type: 'thinking', text: reasoningText });
      }

      // Handle regular content
      if (delta.content) {
        onChunk(delta.content);
      }

      // Handle tool calls
      if (delta.tool_calls) {
        // Accumulate tool call data
      }
    } catch (e) {
      // Skip malformed JSON
    }
  }
}
```

## Tool Calling with Streaming

Same as OpenAI - accumulate tool call deltas during streaming:

```javascript
let assistantMessage = {
  role: 'assistant',
  content: '',
  tool_calls: []
};

// During streaming
if (delta.tool_calls) {
  for (const tc of delta.tool_calls) {
    const index = tc.index;

    if (!assistantMessage.tool_calls[index]) {
      assistantMessage.tool_calls[index] = {
        id: tc.id || '',
        type: 'function',
        function: { name: '', arguments: '' }
      };
    }

    if (tc.id) assistantMessage.tool_calls[index].id = tc.id;
    if (tc.function?.name) {
      assistantMessage.tool_calls[index].function.name += tc.function.name;
    }
    if (tc.function?.arguments) {
      assistantMessage.tool_calls[index].function.arguments += tc.function.arguments;
    }
  }
}

// After streaming completes, execute tools
const toolCalls = assistantMessage.tool_calls.filter(tc => tc.function?.name);
if (toolCalls.length > 0) {
  // Execute tools and continue conversation
}
```

## Network Configuration

### Same Machine (localhost)
```javascript
const baseUrl = 'http://localhost:1234';
```

### Different Machine (LAN)
1. Find your computer's local IP:
   - Windows: `ipconfig`
   - macOS/Linux: `ifconfig` or `ip addr`

2. Use IP instead of localhost:
   ```javascript
   const baseUrl = 'http://192.168.1.100:1234';
   ```

3. **Important:** Ensure firewall allows port 1234

### Custom Port
LM Studio allows changing the port:
```javascript
const baseUrl = 'http://localhost:8080'; // If you changed port to 8080
```

## Error Handling

```javascript
if (!response.ok) {
  const errorText = await response.text();

  // Provide helpful troubleshooting
  if (response.status === 404 || response.status === 502 || response.status === 503) {
    throw new Error(
      `Cannot connect to local server at ${baseUrl}.\n\n` +
      `**Troubleshooting:**\n` +
      `1. Make sure LM Studio is running\n` +
      `2. Click "Start Server" in LM Studio's Local Server tab\n` +
      `3. Verify the base URL matches LM Studio (should be like http://192.168.1.100:1234)\n` +
      `4. Check that your firewall allows connections on this port`
    );
  }

  throw new Error(`Local API error: ${response.status} - ${errorText}`);
}
```

**Common errors:**
- `404` / `502` / `503` - Server not running or wrong URL
- Network timeout - Firewall blocking connection
- CORS errors - Enable CORS in LM Studio settings if accessing from browser

## Vision Model Support

LM Studio supports vision models (LLaVA, etc.):

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

**Note:** Vision support depends on the model. Load a vision-capable model in LM Studio first.

## Performance Tips

1. **GPU Acceleration:**
   - LM Studio automatically uses GPU if available (NVIDIA, Apple Silicon)
   - Check GPU usage in LM Studio during inference

2. **Context Length:**
   - Larger context = more memory usage
   - Set reasonable max_tokens to avoid OOM errors

3. **Model Selection:**
   - Smaller models (7B, 8B) = faster, less memory
   - Larger models (70B+) = better quality, requires more RAM/VRAM

4. **Quantization:**
   - Q4 models = good balance of quality/speed
   - Q8 models = higher quality, slower
   - Download quantized models for better performance

5. **Tool Calling:**
   - Use models specifically trained for function calling
   - Qwen 2.5 Coder excellent for tool use

## Recommended Models

### General Purpose
- **Llama 3.3 70B** - Best overall quality (requires 48GB+ RAM)
- **Qwen 2.5 32B** - Excellent quality, good speed (32GB RAM)
- **Qwen 2.5 14B** - Fast, good quality (16GB RAM)

### Coding
- **Qwen 2.5 Coder 32B** - Best for code (32GB RAM)
- **DeepSeek Coder V2 16B** - Fast, good quality (16GB RAM)

### Reasoning
- **DeepSeek R1 70B** - Best reasoning (48GB+ RAM)
- **DeepSeek R1 14B** - Good reasoning, fast (16GB RAM)
- **Qwen3-Thinking** - Alternative reasoning model

### Small/Fast (8GB RAM)
- **Llama 3.2 3B** - Very fast, decent quality
- **Qwen 2.5 7B** - Good balance

## Complete Implementation Example

See [local.service.js](../../server/services/ai/local.service.js) for full implementation.

## Key Implementation Notes

1. **No Authentication**: No API keys needed
2. **OpenAI Compatible**: Use same message/tool format
3. **Model Agnostic**: Works with any model loaded in LM Studio
4. **Reasoning Support**: Detects `<think>` tags and reasoning fields
5. **Tool Calling**: Supported by compatible models
6. **Network Access**: Can run on localhost or LAN
7. **Privacy**: Everything runs locally
8. **Cost**: Free (only electricity)
9. **Speed**: Depends on your hardware

## Troubleshooting

### Server Not Connecting
```
Error: Cannot connect to http://localhost:1234
```

**Solutions:**
1. Open LM Studio
2. Go to "Local Server" tab
3. Load a model
4. Click "Start Server"
5. Verify URL matches (check port number)

### Slow Response
```
Response taking too long
```

**Solutions:**
1. Use smaller/quantized model
2. Check GPU is being used
3. Reduce context length
4. Close other applications

### Out of Memory
```
Error: Out of memory
```

**Solutions:**
1. Use smaller model (7B instead of 70B)
2. Use more quantized model (Q4 instead of Q8)
3. Reduce max_tokens
4. Close other applications

### Tool Calling Not Working
```
Model not calling tools
```

**Solutions:**
1. Verify model supports function calling
2. Use Qwen 2.5 or Llama 3.3 (known to work)
3. Check tool definitions are correct
4. Try simpler tool descriptions

## Comparison: Local vs Cloud

| Feature | Local (LM Studio) | Cloud (OpenAI, etc.) |
|---------|-------------------|---------------------|
| Privacy | ✅ Complete | ❌ Data sent to cloud |
| Cost | ✅ Free (after setup) | 💰 Per-token pricing |
| Speed | ⚡ Depends on hardware | ⚡ Usually fast |
| Model Quality | 📊 Depends on model | 📊 Very high |
| Setup | 🛠️ Requires installation | ✅ Just API key |
| Offline | ✅ Works offline | ❌ Needs internet |
| Context Length | 📏 Limited by RAM | 📏 Very large |
| Tool Calling | ✅ If model supports | ✅ Full support |

## References

- [LM Studio Website](https://lmstudio.ai/)
- [LM Studio Documentation](https://lmstudio.ai/docs)
- [Model Search](https://lmstudio.ai/models)
- [Discord Community](https://discord.gg/lm-studio)
- See also: [OpenAI Implementation Guide](../openai/IMPLEMENTATION_GUIDE.md)
