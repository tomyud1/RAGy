import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import ragRouter from './server/routes/rag.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/rag', ragRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'RAG System' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 RAG System running on http://localhost:${PORT}`);
  console.log(`📊 RAG Tester UI: http://localhost:${PORT}/rag-tester.html`);
  console.log(`🔍 API: http://localhost:${PORT}/api/rag/stats`);
});
