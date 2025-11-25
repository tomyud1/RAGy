# MCP Integration Guide

This guide explains the MCP (Model Context Protocol) integration in RAGy and how to use it.

## Overview

MCP allows AI models to access tools (like memory, file operations, databases, etc.) through a standardized protocol. Instead of hardcoding RAG queries, the AI can now decide when to search the knowledge base using tools.

## Architecture

```
┌─────────────────────────────────────────────┐
│  Chat Client (Frontend)                     │
│  - Sends message                            │
│  - Receives streaming response              │
│  - Sees tool calls and results              │
└────────────────┬────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────┐
│  Chat API (/api/chat-tools)                 │
│  - Receives message                         │
│  - Gets available tools from MCP            │
│  - Calls AI with tools                      │
└────────────────┬────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────┐
│  AI Service with Tools                      │
│  - Formats tools for provider               │
│  - Handles tool calling loop                │
│  - Streams response to client               │
└─────┬───────────────────────┬───────────────┘
      │                       │
      ↓                       ↓
┌─────────────┐         ┌──────────────────┐
│  OpenAI API │         │  Anthropic API   │
│  (GPT-4)    │         │  (Claude)        │
│  Function   │         │  Tool Use        │
│  Calling    │         │                  │
└─────┬───────┘         └──────┬───────────┘
      │                        │
      └────────────┬───────────┘
                   ↓
        ┌──────────────────────┐
        │  MCP Client Manager  │
        │  - Routes tool calls │
        │  - Manages servers   │
        └──────────┬───────────┘
                   │
                   ↓
        ┌──────────────────────┐
        │  MCP Server (Memory) │
        │  - store_memory      │
        │  - retrieve_memory   │
        │  - list_memories     │
        │  - delete_memory     │
        └──────────────────────┘
```

## Files Created

### 1. MCP Server
- **Location**: `server/mcp-servers/memory-server.js`
- **Purpose**: Provides memory tools for the AI
- **Tools**:
  - `store_memory`: Store information for later retrieval
  - `retrieve_memory`: Get stored information
  - `list_memories`: List all stored memories
  - `delete_memory`: Remove stored information

### 2. MCP Client Manager
- **Location**: `server/mcp/mcp-client.js`
- **Purpose**: Manages connections to MCP servers and executes tools
- **Features**:
  - Connects to MCP servers via stdio
  - Lists available tools
  - Converts tools to OpenAI/Anthropic format
  - Routes tool calls to correct server
  - Handles cleanup

### 3. AI Service with Tools
- **Location**: `server/services/ai-with-tools.service.js`
- **Purpose**: AI service that supports function calling
- **Features**:
  - Works with both OpenAI and Anthropic
  - Handles tool calling loop (AI → Tool → AI)
  - Streams responses
  - Prevents infinite loops (max 5 iterations)

### 4. Chat Routes with Tools
- **Location**: `server/routes/chat-with-tools.routes.js`
- **Purpose**: API endpoints for chat with MCP tools
- **Endpoints**:
  - `GET /api/chat-tools/mcp/status` - Get MCP status and available tools
  - `POST /api/chat-tools/message/stream` - Send message with tool support (SSE)
  - `POST /api/chat-tools/test/tool` - Test direct tool execution

## Testing

### 1. Automated Test Script

Run the comprehensive test script:

```bash
node test-mcp-integration.js
```

This tests:
- MCP initialization
- Tool listing
- Direct tool execution
- AI with tools (OpenAI)
- AI with tools (Anthropic)

### 2. Manual API Testing

#### Check MCP Status
```bash
curl http://localhost:3001/api/chat-tools/mcp/status
```

#### Test Direct Tool Call
```bash
curl -X POST http://localhost:3001/api/chat-tools/test/tool \
  -H "Content-Type: application/json" \
  -d '{
    "tool": "store_memory",
    "args": {
      "key": "test",
      "value": "Hello from API test"
    }
  }'
```

#### Test Chat with Tools (SSE)
```bash
curl -X POST http://localhost:3001/api/chat-tools/message/stream \
  -H "Content-Type: application/json" \
  -d '{
    "projectId": "your-project-id",
    "threadId": "your-thread-id",
    "message": "Remember that my favorite color is blue",
    "model": "gpt-4o"
  }'
```

## Usage Example

### From Frontend

```javascript
// Send message with tools
const eventSource = new EventSource('/api/chat-tools/message/stream?' + new URLSearchParams({
  projectId: 'project-123',
  threadId: 'thread-456',
  message: 'Store in memory that I prefer dark mode',
  model: 'gpt-4o'
}));

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'content') {
    // Regular text response
    console.log('AI:', data.content);
  } else if (data.type === 'tool_call') {
    // AI is calling a tool
    console.log('Tool call:', data.tool_name, data.tool_args);
  } else if (data.type === 'tool_result') {
    // Tool result received
    console.log('Tool result:', data.tool_name, data.result);
  } else if (data.type === 'done') {
    // Response complete
    eventSource.close();
  }
};
```

## How It Works

### 1. User Sends Message
```
User: "Remember that my favorite color is blue"
```

### 2. API Gets Available Tools
```javascript
const tools = await mcpClientManager.getAllTools();
// Returns: [store_memory, retrieve_memory, list_memories, delete_memory]
```

### 3. AI Receives Message + Tools
```json
{
  "messages": [{"role": "user", "content": "Remember that my favorite color is blue"}],
  "tools": [
    {
      "name": "store_memory",
      "description": "Store information...",
      "parameters": { ... }
    }
  ]
}
```

### 4. AI Decides to Use Tool
```json
{
  "tool_calls": [{
    "name": "store_memory",
    "arguments": {
      "key": "user_favorite_color",
      "value": "blue"
    }
  }]
}
```

### 5. Tool Gets Executed
```javascript
const result = await mcpClientManager.callTool('store_memory', {
  key: 'user_favorite_color',
  value: 'blue'
});
// Returns: "Memory stored successfully with key: user_favorite_color"
```

### 6. Result Sent Back to AI
```json
{
  "role": "tool",
  "tool_call_id": "call_123",
  "content": "Memory stored successfully with key: user_favorite_color"
}
```

### 7. AI Generates Final Response
```
AI: "I've stored in memory that your favorite color is blue!"
```

## Supported Models

### ✅ OpenAI
- GPT-4o
- GPT-4o-mini
- GPT-4 Turbo
- GPT-4
- GPT-3.5 Turbo

### ✅ Anthropic
- Claude Opus 4.5
- Claude Sonnet 4.5
- Claude Haiku 4.5

## Event Types (SSE)

When using the streaming endpoint, you'll receive these event types:

| Type | Description | Data |
|------|-------------|------|
| `context` | RAG context documents | `{ context: [...] }` |
| `content` | AI response text chunk | `{ content: "..." }` |
| `tool_call` | AI calling a tool | `{ tool_name: "...", tool_args: {...} }` |
| `tool_result` | Tool execution result | `{ tool_name: "...", result: "..." }` |
| `done` | Response complete | `{}` |
| `error` | Error occurred | `{ error: "..." }` |

## Adding More Tools

To add custom tools (e.g., search_documents):

### 1. Create MCP Server
```javascript
// server/mcp-servers/rag-server.js
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_documents',
        description: 'Search the knowledge base',
        inputSchema: {
          type: 'object',
          properties: {
            query: { type: 'string' },
            top_k: { type: 'number', default: 5 }
          },
          required: ['query']
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'search_documents') {
    const results = await vectorDB.search(args.query, args.top_k);
    return {
      content: [{ type: 'text', text: JSON.stringify(results) }]
    };
  }
});
```

### 2. Connect in MCP Client Manager
```javascript
// In mcp-client.js initialize()
await this.connectToServer('rag', {
  command: 'node',
  args: [path.join(__dirname, '../mcp-servers/rag-server.js')],
});
```

### 3. Test
The tool will automatically be available to the AI!

## Troubleshooting

### MCP Server Won't Start
- Check that all dependencies are installed: `npm install`
- Check console for error messages
- Verify the server file has no syntax errors

### Tools Not Available
- Check MCP status: `GET /api/chat-tools/mcp/status`
- Ensure MCP is initialized before first chat
- Check server logs for connection errors

### AI Not Using Tools
- Make sure you're using a supported model (GPT-4, Claude 3.5+)
- Check that tool descriptions are clear
- Try being more explicit: "Use the store_memory tool to remember..."

### Tool Execution Fails
- Check tool arguments match the schema
- Verify the MCP server is running
- Check server logs for execution errors

## Next Steps

1. **Add RAG Tools**: Create search_documents, grep_documents tools
2. **Add More Servers**: Integrate community MCP servers (filesystem, postgres, etc.)
3. **Update Frontend**: Add UI to show tool calls and results
4. **Add Tool History**: Track which tools are used most often
5. **Add Tool Permissions**: Control which tools are available per project

## References

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP SDK GitHub](https://github.com/modelcontextprotocol/sdk)
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling)
- [Anthropic Tool Use](https://docs.anthropic.com/claude/docs/tool-use)
