/**
 * AI Service - Backward Compatibility Wrapper
 * 
 * This file re-exports from the modular ai/ package for backward compatibility.
 * 
 * For new code, prefer importing directly:
 *   import aiService from './ai/index.js';
 *   import { OpenAIProvider } from './ai/providers/index.js';
 */

import aiService from './ai/index.js';

export default aiService;
