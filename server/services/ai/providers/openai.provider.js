/**
 * OpenAI Provider
 * Supports both Chat Completions API and Responses API (GPT-5)
 */

import { BaseProvider } from '../base-provider.js';
import { createStreamReader } from '../utils/stream-parser.js';

export class OpenAIProvider extends BaseProvider {
  /**
   * Check if model uses Responses API (GPT-5 family)
   */
  isResponsesModel(model) {
    const modelLower = model.toLowerCase();
    return modelLower.includes('gpt-5') || modelLower.includes('gpt5');
  }

  /**
   * Resolve model ID to actual OpenAI model name
   */
  resolveModel(modelId) {
    // Map friendly names to actual model IDs if needed
    return modelId;
  }

  async generateResponse(userInput, context, model) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = userInput;

    if (this.isResponsesModel(model)) {
      return await this._callResponsesAPI(systemPrompt, userPrompt, model);
    }

    return await this._callChatCompletions(systemPrompt, userPrompt, model);
  }

  async generateResponseStream(userInput, context, model, onChunk) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = userInput;

    if (this.isResponsesModel(model)) {
      return await this._streamResponsesAPI(systemPrompt, userPrompt, model, onChunk);
    }

    return await this._streamChatCompletions(systemPrompt, userPrompt, model, onChunk);
  }

  async _callChatCompletions(systemPrompt, userPrompt, model) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorText;
      } catch (e) {}
      throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  async _callResponsesAPI(systemPrompt, userPrompt, model) {
    const resolvedModel = this.resolveModel(model);
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: resolvedModel,
        input: [
          { role: 'user', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        reasoning: {
          effort: 'medium',
          summary: 'auto',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorText;
      } catch (e) {}
      throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    const outputText = data.output?.find(item => item.type === 'message')
      ?.content?.find(c => c.type === 'output_text')?.text || '';
    return outputText;
  }

  async _streamChatCompletions(systemPrompt, userPrompt, model, onChunk) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorText;
      } catch (e) {}
      throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
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
  }

  async _streamResponsesAPI(systemPrompt, userPrompt, model, onChunk) {
    const resolvedModel = this.resolveModel(model);
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: resolvedModel,
        input: [
          { role: 'user', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        reasoning: {
          effort: 'medium',
          summary: 'auto',
        },
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorText;
      } catch (e) {}
      throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
    }

    for await (const evt of createStreamReader(response.body)) {
      const evtType = evt?.type;

      if (evtType === 'response.output_text.delta') {
        const delta = evt.delta;
        if (delta) {
          onChunk(delta, { type: 'content', output_index: evt.index });
        }
      } else if (evtType === 'response.reasoning_text.delta') {
        const delta = evt.delta;
        if (delta) {
          onChunk(delta, { type: 'thinking', output_index: evt.index });
        }
      } else if (evtType === 'response.reasoning_summary_text.delta') {
        const delta = evt.delta;
        if (delta) {
          onChunk(delta, { type: 'thinking_summary', output_index: evt.index });
        }
      } else if (evtType === 'response.function_call_arguments.done') {
        const { name, arguments: args, call_id } = evt;
        onChunk('', {
          type: 'tool_call',
          tool_name: name,
          tool_args: args,
          tool_call_id: call_id,
          output_index: evt.index,
        });
      } else if (evtType === 'response.completed') {
        return;
      }
    }
  }
}

