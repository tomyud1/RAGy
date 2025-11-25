/**
 * API Request/Response Schemas
 * ============================
 * 
 * This file contains Zod schemas for API validation.
 * Import and use with the validate middleware.
 * 
 * USAGE:
 *   import { createProjectSchema, chatMessageSchema } from '../schemas/index.js';
 *   import { validate } from '../middleware/validate.js';
 *   
 *   router.post('/', validate(createProjectSchema), handler);
 */

import { z } from 'zod';

// ==================================
// Project Schemas
// ==================================

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  description: z.string().max(500).optional(),
});

export const projectIdSchema = z.object({
  projectId: z.string().uuid('Invalid project ID'),
});

// ==================================
// Chat Schemas
// ==================================

export const chatMessageSchema = z.object({
  message: z.string().min(1, 'Message is required').max(10000, 'Message too long'),
  projectId: z.string().uuid('Invalid project ID'),
  threadId: z.string().optional(),
  model: z.string().optional().default('gpt-5'),
  vectorDbId: z.string().optional().nullable(),
});

export const createThreadSchema = z.object({
  name: z.string().max(100).optional(),
});

// ==================================
// Chunking Schemas
// ==================================

export const startChunkingSchema = z.object({
  projectId: z.string().uuid('Invalid project ID'),
  method: z.enum(['docling', 'paddleocr']).default('docling'),
  maxTokens: z.number().int().min(64).max(8192).optional().default(512),
  mergePeers: z.boolean().optional().default(true),
  enableFormula: z.boolean().optional().default(true),
  enablePictureClassification: z.boolean().optional().default(false),
  enablePictureDescription: z.boolean().optional().default(false),
  enableCodeEnrichment: z.boolean().optional().default(false),
  enableOcr: z.boolean().optional().default(true),
  enableTableStructure: z.boolean().optional().default(true),
  pictureDescriptionMaxTokens: z.number().int().min(100).max(2000).optional().default(800),
  visionBatchSize: z.number().int().min(1).max(32).optional().default(4),
  processingBatchSize: z.number().int().min(1).max(32).optional().default(4),
  visionBackend: z.enum(['auto', 'transformers', 'mlx']).optional().default('auto'),
  visionModel: z.enum(['smolvlm', 'gemini-2.0-flash']).optional().default('smolvlm'),
  resume: z.boolean().optional().default(false),
});

// ==================================
// Embedding Schemas
// ==================================

export const startEmbeddingSchema = z.object({
  projectId: z.string().uuid('Invalid project ID'),
  modelId: z.enum(['all-MiniLM-L6-v2', 'bge-base-en-v1.5', 'all-mpnet-base-v2']),
  devicePreference: z.enum(['auto', 'cpu', 'metal', 'cuda']).optional().default('auto'),
});

// ==================================
// RAG Query Schemas
// ==================================

export const ragQuerySchema = z.object({
  query: z.string().min(1, 'Query is required').max(5000, 'Query too long'),
  projectId: z.string().uuid('Invalid project ID'),
  vectorDbIds: z.array(z.string()).min(1, 'At least one vector DB required'),
  topK: z.number().int().min(1).max(50).optional().default(5),
  minSimilarity: z.number().min(0).max(1).optional().default(0.55),
  minTokens: z.number().int().min(0).optional().default(0),
});

// ==================================
// Settings Schemas
// ==================================

export const updateApiKeySchema = z.object({
  provider: z.enum(['openai', 'anthropic', 'gemini', 'moonshot']),
  apiKey: z.string().min(1, 'API key is required'),
});

// ==================================
// File Upload Schemas
// ==================================

export const uploadQuerySchema = z.object({
  projectId: z.string().uuid('Invalid project ID'),
});

