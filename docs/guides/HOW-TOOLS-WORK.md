# How MCP Tools Work - Complete Flow

This document explains exactly how the AI knows about tools and how to use them.

## The Complete Flow

### 1. Frontend Sends Message

```javascript
// ChatInterface.jsx:330
fetch('http://localhost:3001/api/chat-tools/message/stream', {
  body: JSON.stringify({
    projectId: 'project-123',
    threadId: 'thread-456',
    message: 'Remember that my favorite color is blue',
    model: 'gpt-4o'
  })
})
```

### 2. Backend Gets Available Tools from MCP

```javascript
// chat-with-tools.routes.js:51
await ensureMCPInitialized(); // Starts MCP servers

// ai-with-tools.service.js:30
const tools = await this.getToolsForProvider('openai');
// ↓
// mcp-client.js:87
const tools = await mcpClientManager.getToolsForOpenAI();
```

**This queries all connected MCP servers and gets their tool definitions:**

```javascript
// MCP Memory Server returns:
[
  {
    name: 'store_memory',
    description: 'Store information in conversation memory...',
    inputSchema: {
      type: 'object',
      properties: {
        key: { type: 'string', description: '...' },
        value: { type: 'string', description: '...' }
      },
      required: ['key', 'value']
    }
  },
  // ... 3 more tools
]
```

**Then converted to OpenAI format:**

```javascript
// mcp-client.js:98
{
  type: 'function',
  function: {
    name: 'store_memory',
    description: 'Store information in conversation memory...',
    parameters: {  // inputSchema becomes parameters
      type: 'object',
      properties: { ... }
    },
    _mcpServer: 'memory'  // Added for routing
  }
}
```

### 3. Backend Sends Message + Tools to AI

```javascript
// ai-with-tools.service.js:136
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful AI assistant with access to tools...' },
      { role: 'user', content: 'Remember that my favorite color is blue' }
    ],
    tools: [  // ← THIS IS HOW AI KNOWS ABOUT TOOLS!
      {
        type: 'function',
        function: {
          name: 'store_memory',
          description: 'Store information in conversation memory...',
          parameters: { ... }
        }
      },
      // ... more tools
    ],
    tool_choice: 'auto',  // AI decides when to use tools
    stream: true
  })
})
```

**OpenAI now knows:**
- What tools are available
- What each tool does (from description)
- What parameters each tool needs (from parameters schema)
- It can decide to use them!

### 4. AI Decides to Use a Tool

**AI Response:**
```json
{
  "choices": [{
    "delta": {
      "tool_calls": [{
        "id": "call_abc123",
        "type": "function",
        "function": {
          "name": "store_memory",
          "arguments": "{\"key\":\"user_favorite_color\",\"value\":\"blue\"}"
        }
      }]
    },
    "finish_reason": "tool_calls"
  }]
}
```

### 5. Backend Executes the Tool

```javascript
// ai-with-tools.service.js:191
const toolName = 'store_memory';
const toolArgs = { key: 'user_favorite_color', value: 'blue' };

// Find which MCP server has this tool
const tool = tools.find(t => t.function.name === toolName);
const serverName = tool.function._mcpServer; // 'memory'

// Execute via MCP
const result = await mcpClientManager.callTool(
  toolName,    // 'store_memory'
  toolArgs,    // { key: '...', value: '...' }
  serverName   // 'memory'
);
```

**MCP Client Manager routes to correct server:**

```javascript
// mcp-client.js:168
const serverInfo = this.clients.get('memory');
const response = await serverInfo.client.callTool({
  name: 'store_memory',
  arguments: { key: 'user_favorite_color', value: 'blue' }
});
```

**MCP Memory Server executes:**

```javascript
// memory-server.js:104
case 'store_memory': {
  const { key, value } = args;
  memory.set(key, { value, storedAt: new Date().toISOString() });
  return {
    content: [
      { type: 'text', text: 'Memory stored successfully with key: "user_favorite_color"' }
    ]
  };
}
```

### 6. Backend Sends Tool Result Back to AI

```javascript
// ai-with-tools.service.js:210
messages.push({
  role: 'tool',
  tool_call_id: 'call_abc123',
  content: 'Memory stored successfully with key: "user_favorite_color"'
});

// Call AI again with tool result
const response2 = await fetch('https://api.openai.com/v1/chat/completions', {
  body: JSON.stringify({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: '...' },
      { role: 'user', content: 'Remember that my favorite color is blue' },
      {
        role: 'assistant',
        tool_calls: [{
          id: 'call_abc123',
          function: { name: 'store_memory', arguments: '...' }
        }]
      },
      {
        role: 'tool',  // ← Tool result
        tool_call_id: 'call_abc123',
        content: 'Memory stored successfully with key: "user_favorite_color"'
      }
    ],
    tools: [...],
    stream: true
  })
})
```

### 7. AI Generates Final Response

**AI Response:**
```json
{
  "choices": [{
    "delta": {
      "content": "I've stored in memory that your favorite color is blue!"
    },
    "finish_reason": "stop"
  }]
}
```

### 8. Backend Streams to Frontend

```javascript
// ai-with-tools.service.js
onChunk("I've stored in memory that your favorite color is blue!", { type: 'content' });

// chat-with-tools.routes.js:82
res.write(`data: ${JSON.stringify({ type: 'content', content: chunk })}\n\n`);
```

### 9. Frontend Displays Response

```javascript
// ChatInterface.jsx:396
if (data.type === 'content') {
  setMessages(prev => prev.map(msg =>
    msg.id === assistantMessageId
      ? { ...msg, content: msg.content + data.content }
      : msg
  ));
}
```

## Visual Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. User: "Remember that my favorite color is blue"             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 2. Frontend → POST /api/chat-tools/message/stream              │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 3. Backend Gets Tools from MCP Servers                          │
│    ┌──────────────┐                                             │
│    │ Memory Server│ → store_memory, retrieve_memory, etc.       │
│    └──────────────┘                                             │
│    Converted to:                                                │
│    { type: 'function', function: { name: '...', params: {...}}} │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 4. Backend → OpenAI API                                         │
│    {                                                             │
│      messages: [...],                                           │
│      tools: [...]  ← AI SEES TOOLS HERE                         │
│    }                                                             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 5. OpenAI Responds with Tool Call                               │
│    {                                                             │
│      tool_calls: [{                                             │
│        name: "store_memory",                                    │
│        arguments: { key: "...", value: "blue" }                 │
│      }]                                                          │
│    }                                                             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 6. Backend Executes Tool via MCP                                │
│    mcpClient.callTool('store_memory', {...})                    │
│    ↓                                                             │
│    Memory Server: memory.set(key, value)                        │
│    ↓                                                             │
│    Returns: "Memory stored successfully"                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 7. Backend Sends Tool Result Back to OpenAI                     │
│    {                                                             │
│      role: "tool",                                              │
│      content: "Memory stored successfully"                      │
│    }                                                             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 8. OpenAI Generates Final Response                              │
│    "I've stored that your favorite color is blue!"             │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 9. Backend Streams to Frontend (SSE)                            │
│    data: {"type": "content", "content": "I've stored..."}       │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────────┐
│ 10. User Sees Response in Chat                                  │
│     "I've stored that your favorite color is blue!"            │
└─────────────────────────────────────────────────────────────────┘
```

## Key Insights

### Q: How does the AI know about tools?
**A:** The `tools` parameter in the API request tells the AI what tools exist, what they do, and what parameters they need.

### Q: How does the AI know WHEN to use tools?
**A:** The AI's training teaches it to use tools when appropriate. The `tool_choice: 'auto'` parameter lets it decide. The tool descriptions help it understand when each tool is useful.

### Q: How does the backend know which MCP server to call?
**A:** We add `_mcpServer: 'memory'` to each tool during conversion, so we can route tool calls to the correct server.

### Q: Can the AI call multiple tools?
**A:** Yes! The loop in `callOpenAIWithTools` handles multiple tool calls and up to 5 iterations (AI → Tool → AI → Tool → ...).

### Q: What if I add more MCP servers?
**A:** Just connect them in `mcp-client.js` and their tools automatically become available to the AI!

## Testing

Now that your frontend is updated, try asking:

1. **"Remember that my favorite color is blue"**
   - AI should call `store_memory` tool
   - Check browser console for tool call logs

2. **"What's my favorite color?"**
   - AI should call `retrieve_memory` tool
   - Should respond with "blue"

3. **Open browser DevTools → Console** to see:
   ```
   Tool call: store_memory { key: '...', value: '...' }
   Tool result: store_memory Memory stored successfully...
   ```

The AI now has access to tools! 🎉
