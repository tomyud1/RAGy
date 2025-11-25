/**
 * Anthropic Provider
 * Supports Claude models via Messages API
 */

import { BaseProvider } from '../base-provider.js';

export class AnthropicProvider extends BaseProvider {
  /**
   * Model name mapping
   */
  static MODEL_MAP = {
    'claude-opus-4-5': 'claude-opus-4-20250514',
    'claude-sonnet-4-5': 'claude-sonnet-4-20250514',
    'claude-haiku-4-5': 'claude-4-haiku-20250514',
  };

  resolveModel(modelId) {
    return AnthropicProvider.MODEL_MAP[modelId] || modelId;
  }

  async generateResponse(userInput, context, model) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = userInput;
    const anthropicModel = this.resolveModel(model);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: anthropicModel,
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Anthropic API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  async generateResponseStream(userInput, context, model, onChunk) {
    // TODO: Implement Anthropic streaming
    throw new Error('Anthropic streaming not yet implemented');
  }
}

