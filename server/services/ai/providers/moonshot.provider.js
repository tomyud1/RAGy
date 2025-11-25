/**
 * Moonshot Provider
 * Supports Kimi models via OpenAI-compatible API
 */

import { BaseProvider } from '../base-provider.js';
import { withRetry } from '../utils/rate-limiter.js';
import { createStreamReader } from '../utils/stream-parser.js';

export class MoonshotProvider extends BaseProvider {
  static ENDPOINT = 'https://api.moonshot.ai/v1/chat/completions';

  /**
   * Model name mapping
   */
  static MODEL_MAP = {
    'kimi-k2': 'kimi-k2-thinking-turbo',
    'kimi-k2-thinking-turbo': 'kimi-k2-thinking-turbo',
    'kimi-32k': 'moonshot-v1-32k',
    'kimi-8k': 'moonshot-v1-8k',
    'moonshot-v1-8k': 'moonshot-v1-8k',
    'moonshot-v1-32k': 'moonshot-v1-32k',
    'moonshot-v1-128k': 'moonshot-v1-128k',
  };

  resolveModel(modelId) {
    return MoonshotProvider.MODEL_MAP[modelId] || 'moonshot-v1-8k';
  }

  async generateResponse(userInput, context, model) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = userInput;
    const moonshotModel = this.resolveModel(model);

    return await withRetry(async () => {
      const response = await fetch(MoonshotProvider.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: moonshotModel,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (response.status === 429) {
        const error = new Error('Rate limited');
        error.status = 429;
        throw error;
      }

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = errorText;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.error?.message || errorJson.message || errorText;
        } catch (e) {}

        if (response.status === 401) {
          throw new Error(
            `Moonshot authentication failed. Possible causes:\n` +
            `- Invalid or expired API key\n` +
            `- Account has no credits/quota\n` +
            `Check at: https://platform.moonshot.ai/`
          );
        }

        throw new Error(`Moonshot API error (${response.status}): ${errorMessage}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    });
  }

  async generateResponseStream(userInput, context, model, onChunk) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = userInput;
    const moonshotModel = this.resolveModel(model);

    await withRetry(async (attempt) => {
      const response = await fetch(MoonshotProvider.ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: moonshotModel,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          temperature: 0.7,
          max_tokens: 1000,
          stream: true,
        }),
      });

      if (response.status === 429) {
        onChunk('', {
          type: 'rate_limit_wait',
          waitTimeMs: 2000 * Math.pow(2, attempt - 1),
          attemptNumber: attempt,
          maxRetries: 10,
        });
        const error = new Error('Rate limited');
        error.status = 429;
        throw error;
      }

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = errorText;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.error?.message || errorJson.message || errorText;
        } catch (e) {}
        throw new Error(`Moonshot API error (${response.status}): ${errorMessage}`);
      }

      for await (const evt of createStreamReader(response.body)) {
        const delta = evt?.choices?.[0]?.delta;
        const finishReason = evt?.choices?.[0]?.finish_reason;

        if (delta?.content) {
          onChunk(delta.content);
        }

        if (finishReason && finishReason !== 'null') {
          return;
        }
      }
    }, {
      onRetry: ({ attempt, maxRetries, waitTimeMs }) => {
        console.log(`Moonshot rate limited. Attempt ${attempt}/${maxRetries}. Waiting ${waitTimeMs}ms...`);
      }
    });
  }
}

