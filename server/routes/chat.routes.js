import express from 'express';
import chatService from '../services/chat.service.js';
import aiService from '../services/ai.service.js';
import { RAGService } from '../services/rag.service.js';

const router = express.Router();

// Get all chat threads for a project
router.get('/threads/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const threads = await chatService.loadChatThreads(projectId);
    res.json(threads);
  } catch (error) {
    console.error('Failed to get chat threads:', error);
    res.status(500).json({ error: 'Failed to retrieve chat threads' });
  }
});

// Create a new chat thread
router.post('/threads/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const { name } = req.body;

    const newThread = await chatService.createChatThread(projectId, name);
    res.json(newThread);
  } catch (error) {
    console.error('Failed to create chat thread:', error);
    res.status(500).json({ error: 'Failed to create chat thread' });
  }
});

// Delete a chat thread
router.delete('/threads/:threadId', async (req, res) => {
  try {
    const { threadId } = req.params;
    const { projectId } = req.query;

    if (!projectId) {
      return res.status(400).json({ error: 'Project ID is required' });
    }

    await chatService.deleteChatThread(projectId, threadId);
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to delete chat thread:', error);
    res.status(500).json({ error: 'Failed to delete chat thread' });
  }
});

// Get chat history for a thread
router.get('/history/:threadId', async (req, res) => {
  try {
    const { threadId } = req.params;
    const history = await chatService.loadChatHistory(threadId);
    res.json(history);
  } catch (error) {
    console.error('Failed to get chat history:', error);
    res.status(500).json({ error: 'Failed to retrieve chat history' });
  }
});

// Send a message and get AI response (non-streaming)
router.post('/message', async (req, res) => {
  try {
    const { projectId, threadId, message, model, vectorDbId } = req.body;

    if (!projectId || !threadId || !message || !model) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // No automatic querying - just chat naturally
    const context = [];

    // Generate AI response
    const aiResponse = await aiService.generateResponse(message, context, model);

    // 5. Save user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, userMessage);

    // 6. Save assistant message
    const assistantMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: aiResponse,
      context: context,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, assistantMessage);

    // 7. Update thread message count
    await chatService.updateThreadMessageCount(projectId, threadId);

    // 8. Return response
    res.json({
      response: aiResponse,
      context: context,
    });
  } catch (error) {
    console.error('Failed to process message:', error);
    res.status(500).json({
      error: error.message || 'Failed to process message',
    });
  }
});

// Send a message and get AI response with streaming
router.post('/message/stream', async (req, res) => {
  try {
    const { projectId, threadId, message, model, vectorDbId } = req.body;

    if (!projectId || !threadId || !message || !model) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Set up SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // No automatic querying - just chat naturally
    const context = [];
    res.write(`data: ${JSON.stringify({ type: 'context', context: [] })}\n\n`);

    // Stream AI response
    let fullResponse = '';

    await aiService.generateResponseStream(
      message,
      context,
      model,
      (chunk, metadata) => {
        // Send each chunk to the client
        if (chunk) {
          fullResponse += chunk;
          res.write(`data: ${JSON.stringify({ type: 'content', content: chunk, metadata })}\n\n`);
        }
      }
    );

    // 5. Save user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, userMessage);

    // 6. Save assistant message
    const assistantMessage = {
      id: Date.now() + 1,
      role: 'assistant',
      content: fullResponse,
      context: context,
      timestamp: new Date().toISOString(),
    };
    await chatService.addMessage(threadId, assistantMessage);

    // 7. Update thread message count
    await chatService.updateThreadMessageCount(projectId, threadId);

    // 8. Send done signal
    res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
    res.end();

  } catch (error) {
    console.error('Failed to process streaming message:', error);

    // Send error as SSE
    res.write(`data: ${JSON.stringify({
      type: 'error',
      error: error.message || 'Failed to process message'
    })}\n\n`);
    res.end();
  }
});

export default router;
