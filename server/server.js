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
  if (connections) {
    const message = JSON.stringify(data);
    connections.forEach(ws => {
      if (ws.readyState === ws.OPEN) {
        console.log(`[WS] Sending message to client`);
        ws.send(message);
      }
    });
  } else {
    console.warn(`[WS] No WebSocket connections found for job ${jobId}`);
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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'RAGy API',
    websocket: wss.clients.size + ' clients connected',
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 RAGy Server running on http://localhost:${PORT}`);
  console.log(`🔌 WebSocket server ready at ws://localhost:${PORT}/ws`);
  console.log(`📊 API Health: http://localhost:${PORT}/api/health`);
});

