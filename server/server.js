import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import projectRoutes from './routes/project.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import chunkingRoutes, { setBroadcastFunction as setChunkingBroadcast } from './routes/chunking.routes.js';
import embeddingRoutes, { setBroadcastFunction as setEmbeddingBroadcast } from './routes/embedding.routes.js';
import ragRoutes from './routes/rag.routes.js';
import settingsRoutes from './routes/settings.routes.js';
import chatRoutes from './routes/chat.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server, path: '/ws' });

// Store active connections by jobId
const wsConnections = new Map();

// Buffer for messages sent before WebSocket connection (race condition fix)
const messageBuffer = new Map(); // jobId -> array of messages
const MAX_BUFFER_SIZE = 50; // Limit buffer size to prevent memory leaks

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('[WS] Client message received:', data);

      if (data.type === 'subscribe' && data.jobId) {
        // Store connection with jobId
        if (!wsConnections.has(data.jobId)) {
          wsConnections.set(data.jobId, new Set());
        }
        wsConnections.get(data.jobId).add(ws);
        console.log(`[WS] Client subscribed to job ${data.jobId}. Total subscribers: ${wsConnections.get(data.jobId).size}`);

        // Send any buffered messages for this job
        const bufferedMessages = messageBuffer.get(data.jobId);
        if (bufferedMessages && bufferedMessages.length > 0) {
          console.log(`[WS] Sending ${bufferedMessages.length} buffered messages to newly connected client`);
          bufferedMessages.forEach(bufferedData => {
            if (ws.readyState === ws.OPEN) {
              ws.send(JSON.stringify(bufferedData));
            }
          });
          // Clear buffer after sending
          messageBuffer.delete(data.jobId);
        }

        // Remove connection when it closes
        ws.on('close', () => {
          console.log(`[WS] Client disconnected from job ${data.jobId}`);
          const connections = wsConnections.get(data.jobId);
          if (connections) {
            connections.delete(ws);
            if (connections.size === 0) {
              wsConnections.delete(data.jobId);
            }
          }
        });
      }
    } catch (error) {
      console.error('WebSocket message error:', error);
    }
  });
});

// Export broadcast function for other modules
export function broadcastToJob(jobId, data) {
  const connections = wsConnections.get(jobId);
  console.log(`[WS] Broadcasting to job ${jobId}:`, data.type, connections ? `(${connections.size} clients)` : '(no clients)');

  if (connections && connections.size > 0) {
    // Send to all connected clients
    const message = JSON.stringify(data);
    connections.forEach(ws => {
      if (ws.readyState === ws.OPEN) {
        console.log(`[WS] Sending message to client`);
        ws.send(message);
      }
    });
  } else {
    // No connections yet - buffer the message (race condition fix)
    console.log(`[WS] No connections yet for job ${jobId}, buffering message`);
    if (!messageBuffer.has(jobId)) {
      messageBuffer.set(jobId, []);
    }
    const buffer = messageBuffer.get(jobId);

    // Only buffer if not at max size
    if (buffer.length < MAX_BUFFER_SIZE) {
      buffer.push(data);
    } else {
      console.warn(`[WS] Message buffer full for job ${jobId}, dropping oldest message`);
      buffer.shift(); // Remove oldest
      buffer.push(data);
    }
  }
}

// Set broadcast function for chunking and embedding routes
setChunkingBroadcast(broadcastToJob);
setEmbeddingBroadcast(broadcastToJob);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/chunking', chunkingRoutes);
app.use('/api/embedding', embeddingRoutes);
app.use('/api/rag', ragRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/chat', chatRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'RAGy API',
    websocket: wss.clients.size + ' clients connected',
  });
});

// Open folder in file system
app.post('/api/open-folder', async (req, res) => {
  try {
    const { folderPath } = req.body;
    
    if (!folderPath) {
      return res.status(400).json({ success: false, error: 'Folder path is required' });
    }
    
    const { exec } = await import('child_process');
    const { promisify } = await import('util');
    const execAsync = promisify(exec);
    const path = await import('path');
    const fs = await import('fs/promises');
    
    // Resolve to absolute path
    const absolutePath = path.resolve(folderPath);
    
    // Create folder if it doesn't exist
    try {
      await fs.mkdir(absolutePath, { recursive: true });
    } catch (err) {
      // Folder might already exist, that's ok
    }
    
    // Open folder based on OS
    let command;
    if (process.platform === 'darwin') {
      command = `open "${absolutePath}"`;
    } else if (process.platform === 'win32') {
      command = `explorer "${absolutePath}"`;
    } else {
      command = `xdg-open "${absolutePath}"`;
    }
    
    await execAsync(command);
    
    res.json({ success: true, path: absolutePath });
  } catch (error) {
    console.error('Failed to open folder:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 RAGy Server running on http://localhost:${PORT}`);
  console.log(`🔌 WebSocket server ready at ws://localhost:${PORT}/ws`);
  console.log(`📊 API Health: http://localhost:${PORT}/api/health`);

  // Check if garbage collection is available
  if (global.gc) {
    console.log(`♻️  Manual garbage collection: ENABLED (optimal memory management)`);
  } else {
    console.warn(`⚠️  Manual garbage collection: DISABLED`);
    console.warn(`   Memory usage may be higher during embedding generation.`);
    console.warn(`   To enable: Start with 'node --expose-gc server/server.js'`);
    console.warn(`   Or use: 'npm run server' (already configured)`);
  }
});

