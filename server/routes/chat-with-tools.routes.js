import express from 'express';
import chatService from '../services/chat.service.js';
import aiWithToolsService from '../services/ai-with-tools.service.js';
import { RAGService } from '../services/rag.service.js';
import mcpClientManager from '../mcp/mcp-client.js';

const router = express.Router();

// Initialize MCP on first use
let mcpInitialized = false;

async function ensureMCPInitialized() {
  if (!mcpInitialized) {
    console.log('[Chat with Tools] Initializing MCP...');
    await mcpClientManager.initialize();
    mcpInitialized = true;
    console.log('[Chat with Tools] MCP initialized successfully');
  }
}

// Get MCP status
router.get('/mcp/status', async (req, res) => {
  try {
    const status = mcpClientManager.getStatus();
    const tools = await mcpClientManager.getAllTools();

    res.json({
      ...status,
      availableTools: tools.map((t) => ({
        name: t.name,
        description: t.description,
        server: t._mcpServer,
      })),
    });
  } catch (error) {
    console.error('[Chat with Tools] Failed to get MCP status:', error);
    res.status(500).json({ error: error.message });
  }
});

// Send message with MCP tools support (streaming)
router.post('/message/stream', async (req, res) => {
  try {
    const { projectId, threadId, message, model, vectorDbId } = req.body;

    if (!projectId || !threadId || !message || !model) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize MCP if needed
    await ensureMCPInitialized();

    // Set up SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // No automatic querying - let the AI use tools when it needs to search
    const context = [];
    res.write(`data: ${JSON.stringify({ type: 'context', context: [] })}\n\n`);

    // Get conversation history
    const history = await chatService.loadChatHistory(threadId);
    const conversationHistory = history.messages.slice(-10).map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Stream AI response with tools
    let fullResponse = '';
    let contentBlocks = [];
    let currentReasoningBlock = null;

    await aiWithToolsService.generateResponseWithTools(
      message,
      context,
      model,
      (chunk, metadata) => {
        if (metadata?.type === 'content' && chunk) {
          fullResponse += chunk;
          res.write(`data: ${JSON.stringify({ type: 'content', content: chunk })}\n\n`);

          // Add to content blocks
          const lastBlock = contentBlocks[contentBlocks.length - 1];
          if (lastBlock && lastBlock.type === 'text') {
            lastBlock.content += chunk;
          } else {
            contentBlocks.push({ type: 'text', content: chunk });
          }
        } else if (metadata?.type === 'thinking' && chunk) {
          // Forward thinking/reasoning tokens to frontend
          res.write(`data: ${JSON.stringify({ type: 'content', content: chunk, metadata: { type: 'thinking' } })}\n\n`);

          // Track reasoning blocks
          if (!currentReasoningBlock) {
            currentReasoningBlock = {
              type: 'reasoning',
              content: chunk,
              startTime: Date.now()
            };
            contentBlocks.push(currentReasoningBlock);
          } else {
            currentReasoningBlock.content += chunk;
          }
        } else if (metadata?.type === 'thinking_summary' && chunk) {
          // Forward thinking summary tokens to frontend
          res.write(`data: ${JSON.stringify({ type: 'content', content: chunk, metadata: { type: 'thinking_summary' } })}\n\n`);

          // Close reasoning block and add summary
          if (currentReasoningBlock) {
            currentReasoningBlock.endTime = Date.now();
            currentReasoningBlock = null;
          }

          const lastBlock = contentBlocks[contentBlocks.length - 1];
          if (lastBlock && lastBlock.type === 'reasoning_summary') {
            lastBlock.content += chunk;
          } else {
            contentBlocks.push({ type: 'reasoning_summary', content: chunk });
          }
        } else if (metadata?.type === 'tool_call') {
          // Close reasoning block when tool starts
          if (currentReasoningBlock) {
            currentReasoningBlock.endTime = Date.now();
            currentReasoningBlock = null;
          }

          res.write(`data: ${JSON.stringify({ type: 'tool_call', ...metadata })}\n\n`);
        } else if (metadata?.type === 'tool_result') {
          res.write(`data: ${JSON.stringify({ type: 'tool_result', ...metadata })}\n\n`);
        }
      },
      conversationHistory,
      projectId, // Pass projectId for RAG tools
      vectorDbId // Pass vectorDbId for RAG tools
    );

    // Close any open reasoning block
    if (currentReasoningBlock) {
      currentReasoningBlock.endTime = Date.now();
    }

    // Save user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, userMessage);

    // Save assistant message
    const assistantMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: fullResponse,
      contentBlocks: contentBlocks,  // Save structured content blocks
      context: context,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, assistantMessage);

    // Update thread message count
    await chatService.updateThreadMessageCount(projectId, threadId);

    // Send done signal
    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
    res.end();
  } catch (error) {
    console.error('[Chat with Tools] Failed to process message:', error);
    res.write(
      `data: ${JSON.stringify({
        type: 'error',
        error: error.message || 'Failed to process message',
      })}\n\n`
    );
    res.end();
  }
});

// Test endpoint to try a simple tool call
router.post('/test/tool', async (req, res) => {
  try {
    const { tool, args } = req.body;

    await ensureMCPInitialized();

    const result = await mcpClientManager.callTool(tool, args);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('[Chat with Tools] Tool test failed:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
