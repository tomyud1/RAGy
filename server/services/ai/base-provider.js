/**
 * Base AI Provider - Abstract class for all AI providers
 * All providers must implement these methods
 */
export class BaseProvider {
  constructor(apiKey) {
    if (new.target === BaseProvider) {
      throw new Error('BaseProvider is abstract and cannot be instantiated directly');
    }
    this.apiKey = apiKey;
  }

  /**
   * Generate a non-streaming response
   * @param {string} userInput - User's message
   * @param {Array} context - RAG context (optional)
   * @param {string} model - Model ID
   * @returns {Promise<string>} - Generated response text
   */
  async generateResponse(userInput, context, model) {
    throw new Error('generateResponse must be implemented by subclass');
  }

  /**
   * Generate a streaming response
   * @param {string} userInput - User's message
   * @param {Array} context - RAG context (optional)
   * @param {string} model - Model ID
   * @param {Function} onChunk - Callback for each chunk (content, metadata)
   * @returns {Promise<void>}
   */
  async generateResponseStream(userInput, context, model, onChunk) {
    throw new Error('generateResponseStream must be implemented by subclass');
  }

  /**
   * Build context prompt from RAG results
   * @param {Array} context - Array of context items
   * @returns {string} - Formatted context string
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

  /**
   * Get default system prompt
   * @returns {string}
   */
  getSystemPrompt() {
    return 'You are a helpful AI assistant.';
  }
}

