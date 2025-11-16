# AI Providers Integration Guide

Complete documentation for integrating multiple AI providers into your chat application. This export contains implementation guides, API documentation, and code examples for all supported AI providers.

## 📚 What's Included

This documentation package includes:

1. **Implementation Guides** - Detailed guides for each AI provider with code examples
2. **API Documentation** - Official API documentation (where available)
3. **Code Examples** - Real-world implementation from a production chat app
4. **Best Practices** - Rate limiting, error handling, streaming, tool calling

## 🤖 Supported AI Providers

### 1. OpenAI (ChatGPT)
**Folder:** [`openai/`](openai/)

- **Models:** GPT-4, GPT-4 Turbo, GPT-3.5 Turbo, GPT-5 (Responses API)
- **Features:** Chat Completions API, Responses API, streaming, tool calling, vision
- **Best for:** General purpose, code generation, reasoning tasks
- **Documentation:**
  - [Implementation Guide](openai/IMPLEMENTATION_GUIDE.md)
  - [Official API Docs](openai/official-docs/)

**Quick Start:**
```javascript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

---

### 2. Anthropic (Claude)
**Folder:** [`anthropic/`](anthropic/)

- **Models:** Claude 3.5 Sonnet, Claude 3.5 Haiku, Claude 3 Opus
- **Features:** Messages API, streaming, tool calling, vision, extended thinking
- **Best for:** Long conversations, analysis, creative writing, complex reasoning
- **Documentation:**
  - [Implementation Guide](anthropic/IMPLEMENTATION_GUIDE.md)

**Quick Start:**
```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4.5-20250929',
    max_tokens: 8192,
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

---

### 3. Google Gemini
**Folder:** [`gemini/`](gemini/)

- **Models:** Gemini 2.5 Flash, Gemini 1.5 Pro, Gemini 1.5 Flash
- **Features:** Large context (2M tokens), streaming, tool calling, vision
- **Best for:** Large document processing, high throughput, cost-effective
- **Documentation:**
  - [Implementation Guide](gemini/IMPLEMENTATION_GUIDE.md)

**Quick Start:**
```javascript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: 'Hello!' }]
      }]
    })
  }
);
```

---

### 4. Moonshot (Kimi-K2)
**Folder:** [`moonshot/`](moonshot/)

- **Models:** Kimi-K2 Turbo
- **Features:** OpenAI-compatible API, large context (262k tokens), reasoning
- **Best for:** Chinese language, complex reasoning, large context tasks
- **Documentation:**
  - [Implementation Guide](moonshot/IMPLEMENTATION_GUIDE.md)
  - [Moonshot API Docs](moonshot-api/)

**Quick Start:**
```javascript
// Same as OpenAI format, different endpoint
const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.MOONSHOT_API_KEY}`
  },
  body: JSON.stringify({
    model: 'kimi-k2-turbo-preview',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

---

### 5. MiniMax-M2
**Folder:** [`minimax/`](minimax/)

- **Models:** MiniMax-M2, MiniMax-M2-Stable
- **Features:** Anthropic-compatible API, thinking blocks, tool calling
- **Best for:** Chinese language, reasoning visualization, creative tasks
- **Documentation:**
  - [Implementation Guide](minimax/IMPLEMENTATION_GUIDE.md)
  - [MiniMax API Docs](minimax-api/)

**Quick Start:**
```javascript
// Same as Anthropic format, different endpoint
const response = await fetch('https://api.minimax.io/anthropic/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.MINIMAX_API_KEY}`,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'MiniMax-M2',
    max_tokens: 8192,
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

---

### 6. Local (LM Studio)
**Folder:** [`local/`](local/)

- **Models:** Any model you download (Llama, Qwen, DeepSeek, etc.)
- **Features:** OpenAI-compatible API, completely offline, no API costs
- **Best for:** Privacy, offline use, development/testing, no ongoing costs
- **Documentation:**
  - [Implementation Guide](local/IMPLEMENTATION_GUIDE.md)

**Quick Start:**
```javascript
// Same as OpenAI format, localhost endpoint
const response = await fetch('http://localhost:1234/v1/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'default',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
});
```

---

## 🚀 Quick Comparison

| Provider | API Format | Best Feature | Cost | Image Support |
|----------|-----------|--------------|------|---------------|
| **OpenAI** | OpenAI Chat Completions | GPT-4 quality, Responses API | $$$ | ✅ Yes |
| **Anthropic** | Custom Messages API | Long conversations, thinking | $$$ | ✅ Yes |
| **Gemini** | Custom generativeai | 2M context, fast | $$ | ✅ Yes |
| **Moonshot** | OpenAI-compatible | Chinese language, 262k context | $$ | ❌ No (convert via Gemini) |
| **MiniMax** | Anthropic-compatible | Thinking blocks, Chinese | $$ | ❌ No (convert via Gemini) |
| **Local** | OpenAI-compatible | Privacy, offline, free | Free* | ⚡ If model supports |

*Free after hardware investment (GPU recommended)

## 🎯 Choosing the Right Provider

### For General Purpose Development
→ **OpenAI GPT-4** - Best quality and ecosystem support

### For Long Conversations & Analysis
→ **Anthropic Claude** - Excellent at maintaining context

### For Cost-Effective High Volume
→ **Google Gemini** - Fast and affordable with large context

### For Chinese Language
→ **Moonshot Kimi** or **MiniMax** - Optimized for Chinese

### For Privacy & Offline Use
→ **Local LM Studio** - Complete control and privacy

### For Development & Testing
→ **Local LM Studio** - No API costs during development

## 🔧 Common Implementation Patterns

### 1. Tool/Function Calling

All providers support tool calling, but with different formats:

**OpenAI/Moonshot/Local:**
```javascript
{
  "type": "function",
  "function": {
    "name": "get_weather",
    "description": "Get weather for a location",
    "parameters": { /* JSON Schema */ }
  }
}
```

**Anthropic/MiniMax:**
```javascript
{
  "name": "get_weather",
  "description": "Get weather for a location",
  "input_schema": { /* JSON Schema */ }
}
```

**Gemini:**
```javascript
{
  "functionDeclarations": [{
    "name": "get_weather",
    "description": "Get weather for a location",
    "parameters": { /* JSON Schema */ }
  }]
}
```

### 2. Streaming Responses

**OpenAI/Moonshot/Local (SSE format):**
```
data: {"choices":[{"delta":{"content":"Hello"}}]}
data: [DONE]
```

**Anthropic/MiniMax (SSE format):**
```
data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"Hello"}}
```

**Gemini (JSON objects):**
```
{"candidates":[{"content":{"parts":[{"text":"Hello"}]}}]}
```

### 3. Image Handling

**OpenAI/Local:**
```javascript
{
  "type": "image_url",
  "image_url": { "url": "data:image/png;base64,..." }
}
```

**Anthropic/MiniMax:**
```javascript
{
  "type": "image",
  "source": {
    "type": "base64",
    "media_type": "image/png",
    "data": "base64_string_without_prefix"
  }
}
```

**Moonshot/MiniMax (no native support):**
- Convert images to text descriptions using Gemini
- Include text description in prompt

### 4. Rate Limiting & Retry

Implement exponential backoff for all providers:

```javascript
const maxRetries = 5;
const initialBackoffMs = 2000;

for (let attempt = 1; attempt <= maxRetries; attempt++) {
  try {
    const response = await fetch(endpoint, options);

    if (response.status === 429) {
      // Rate limit - wait and retry
      const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
      await sleep(waitTime);
      continue;
    }

    return await response.json();
  } catch (error) {
    if (attempt === maxRetries) throw error;
    await sleep(initialBackoffMs * Math.pow(2, attempt - 1));
  }
}
```

### 5. Multi-Provider Support

Implement a unified interface:

```javascript
class AIProvider {
  constructor(provider, apiKey) {
    this.provider = provider;
    this.apiKey = apiKey;
  }

  async sendMessage(message) {
    switch (this.provider) {
      case 'openai':
        return await this.sendOpenAI(message);
      case 'anthropic':
        return await this.sendAnthropic(message);
      case 'gemini':
        return await this.sendGemini(message);
      // ... etc
    }
  }
}
```

## 📖 Reading the Guides

Each provider folder contains:

1. **IMPLEMENTATION_GUIDE.md** - Complete implementation details
   - Authentication
   - Message formats
   - Tool calling
   - Streaming
   - Error handling
   - Code examples

2. **API Documentation** - Official docs (where available)
   - Complete API reference
   - Model details
   - Pricing information

3. **Code Examples** - From production implementation
   - See `server/services/ai/` folder for real implementations

## 🔐 API Key Setup

### OpenAI
1. Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create new key
3. Set `OPENAI_API_KEY` environment variable

### Anthropic
1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Get API key
3. Set `ANTHROPIC_API_KEY` environment variable
4. Optional: Set multiple keys (comma-separated) for rotation

### Gemini
1. Visit [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Create API key (starts with "AIza")
3. Set `GEMINI_API_KEY` environment variable

### Moonshot
1. Visit [https://platform.moonshot.ai/](https://platform.moonshot.ai/)
2. Create account and get API key
3. Set `MOONSHOT_API_KEY` environment variable

### MiniMax
1. Visit [https://platform.minimax.io/](https://platform.minimax.io/)
2. Create account and get API key
3. Set `MINIMAX_API_KEY` environment variable

### Local (LM Studio)
1. Download from [https://lmstudio.ai/](https://lmstudio.ai/)
2. Download a model
3. Start local server
4. Set `LOCAL_BASE_URL` (e.g., "http://localhost:1234")

## 🎓 Learning Path

### Beginner
1. Start with **OpenAI** - most documentation and examples
2. Read [OpenAI Implementation Guide](openai/IMPLEMENTATION_GUIDE.md)
3. Implement basic chat completion
4. Add streaming support

### Intermediate
1. Add **Anthropic** for better conversation handling
2. Read [Anthropic Implementation Guide](anthropic/IMPLEMENTATION_GUIDE.md)
3. Implement tool calling
4. Handle rate limiting

### Advanced
1. Add **Gemini** for cost optimization
2. Add **Local** for development
3. Implement provider abstraction layer
4. Add automatic failover between providers

## 🛠️ Integration Tips

### 1. Start Simple
- Implement one provider first
- Get basic chat working
- Add streaming
- Then add tool calling

### 2. Abstract Common Patterns
- Create unified message format
- Convert to provider-specific format at API boundary
- Maintain single conversation history format

### 3. Handle Provider Differences
- Message format conversion
- Tool definition conversion
- Stream format parsing
- Error handling per provider

### 4. Implement Fallbacks
- Primary provider fails → try secondary
- Rate limit hit → switch provider
- Different models for different tasks

### 5. Monitor & Log
- Track API costs per provider
- Log errors and retry attempts
- Monitor response times
- Track tool calling success rates

## 📊 Cost Optimization

1. **Use Gemini for high volume** - Cheapest per token
2. **Use Local for development** - No API costs
3. **Cache system prompts** - Anthropic/Gemini support prompt caching
4. **Batch requests** - Where possible
5. **Set token limits** - Prevent runaway costs
6. **Monitor usage** - Track costs per provider

## 🐛 Debugging Tips

### Request/Response Logging
```javascript
console.log('Request:', {
  provider,
  model,
  messageCount: messages.length,
  hasTools: tools.length > 0
});

console.log('Response:', {
  provider,
  status: response.status,
  contentLength: responseText.length,
  tokensUsed: data.usage
});
```

### Error Details
```javascript
try {
  const response = await fetch(endpoint, options);
  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error:', {
      status: response.status,
      headers: Object.fromEntries(response.headers),
      body: errorText
    });
  }
} catch (error) {
  console.error('Request Failed:', error);
}
```

## 📚 Additional Resources

- **Source Code:** Full implementation in `server/services/ai/` folder
- **Tool Schemas:** Tool definitions in `tool_schemas/` folder
- **Key Rotation:** `server/services/ai/key-rotation.service.js`
- **Message Builder:** `server/services/ai/prompt-builder.js`

## 🤝 Contributing

This documentation is based on a production chat application. If you find errors or want to add improvements:

1. Test your changes with actual implementation
2. Update relevant implementation guide
3. Add code examples
4. Document edge cases

## 📜 License

This documentation is provided as-is for educational and implementation purposes.

Each AI provider has its own terms of service:
- OpenAI: [https://openai.com/policies/terms-of-use](https://openai.com/policies/terms-of-use)
- Anthropic: [https://www.anthropic.com/legal/consumer-terms](https://www.anthropic.com/legal/consumer-terms)
- Google: [https://policies.google.com/terms](https://policies.google.com/terms)
- Moonshot: Check [https://platform.moonshot.ai/](https://platform.moonshot.ai/)
- MiniMax: Check [https://platform.minimax.io/](https://platform.minimax.io/)

---

**Happy Building!** 🚀

For questions or issues, refer to the individual implementation guides in each provider folder.
