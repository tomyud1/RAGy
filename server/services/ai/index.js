/**
 * AI Service - Factory and Router for AI Providers
 * 
 * This is the main entry point for AI operations.
 * It automatically selects the correct provider based on the model.
 */

import settingsService from '../settings.service.js';
import { OpenAIProvider } from './providers/openai.provider.js';
import { AnthropicProvider } from './providers/anthropic.provider.js';
import { MoonshotProvider } from './providers/moonshot.provider.js';
import { GeminiProvider } from './providers/gemini.provider.js';

class AIService {
  /**
   * Get the provider name for a given model
   * @param {string} model - Model ID
   * @returns {string} - Provider name
   */
  getProviderForModel(model) {
    if (model.startsWith('gpt')) return 'openai';
    if (model.startsWith('claude')) return 'anthropic';
    if (model.startsWith('kimi')) return 'moonshot';
    if (model.startsWith('gemini')) return 'gemini';
    return 'openai'; // default
  }

  /**
   * Create a provider instance for the given model
   * @param {string} model - Model ID
   * @returns {Promise<BaseProvider>} - Provider instance
   */
  async createProvider(model) {
    const providerName = this.getProviderForModel(model);
    const apiKey = await settingsService.getApiKey(providerName);

    if (!apiKey) {
      throw new Error(`No API key configured for ${providerName}. Please add it in settings.`);
    }

    switch (providerName) {
      case 'openai':
        return new OpenAIProvider(apiKey);
      case 'anthropic':
        return new AnthropicProvider(apiKey);
      case 'moonshot':
        return new MoonshotProvider(apiKey);
      case 'gemini':
        return new GeminiProvider(apiKey);
      default:
        throw new Error(`Unsupported provider: ${providerName}`);
    }
  }

  /**
   * Generate a query from user input (for future enhancement)
   * @param {string} userInput - User's input
   * @returns {Promise<string>} - Generated query
   */
  async generateQueryFromInput(userInput) {
    return userInput;
  }

  /**
   * Generate a non-streaming response
   * @param {string} userInput - User's message
   * @param {Array} context - RAG context
   * @param {string} model - Model ID
   * @returns {Promise<string>} - Generated response
   */
  async generateResponse(userInput, context, model) {
    const provider = await this.createProvider(model);
    try {
      return await provider.generateResponse(userInput, context, model);
    } catch (error) {
      console.error('AI service error:', error);
      throw error;
    }
  }

  /**
   * Generate a streaming response
   * @param {string} userInput - User's message
   * @param {Array} context - RAG context
   * @param {string} model - Model ID
   * @param {Function} onChunk - Callback for each chunk
   * @returns {Promise<void>}
   */
  async generateResponseStream(userInput, context, model, onChunk) {
    const provider = await this.createProvider(model);
    try {
      return await provider.generateResponseStream(userInput, context, model, onChunk);
    } catch (error) {
      console.error('AI service streaming error:', error);
      throw error;
    }
  }

  /**
   * Build context prompt from RAG results
   * @param {Array} context - Context items
   * @returns {string} - Formatted context
   */
  buildContextPrompt(context) {
    if (!context || context.length === 0) {
      return '';
    }

    const contextText = context
      .map((item, idx) => {
        return `[Source ${idx + 1}: ${item.source}]\n${item.text}`;
      })
      .join('\n\n');

    return `Here is relevant context from the knowledge base:\n\n${contextText}`;
  }
}

// Export singleton instance for backward compatibility
export default new AIService();

// Also export the class for testing
export { AIService };

