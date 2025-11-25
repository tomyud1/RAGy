/**
 * Gemini Provider
 * Supports Google Gemini models via Generative Language API
 */

import { BaseProvider } from '../base-provider.js';

export class GeminiProvider extends BaseProvider {
  /**
   * Model name mapping
   */
  static MODEL_MAP = {
    'gemini-2.5-flash': 'gemini-2.5-flash',
    'gemini-2.5-pro': 'gemini-2.5-pro',
  };

  resolveModel(modelId) {
    return GeminiProvider.MODEL_MAP[modelId] || 'gemini-2.5-flash';
  }

  async generateResponse(userInput, context, model) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = `${systemPrompt}\n\n${userInput}`;
    const resolvedModel = this.resolveModel(model);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${resolvedModel}:generateContent?key=${this.apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userPrompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8000,
          topP: 0.8,
          topK: 40,
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
      throw new Error(`Gemini API error (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    const candidate = data.candidates?.[0];
    if (!candidate) {
      throw new Error('No response from Gemini');
    }

    const textPart = candidate.content?.parts?.find(p => p.text);
    if (!textPart) {
      throw new Error('No text content in Gemini response');
    }

    return textPart.text;
  }

  async generateResponseStream(userInput, context, model, onChunk) {
    const systemPrompt = this.getSystemPrompt();
    const userPrompt = `${systemPrompt}\n\n${userInput}`;
    const resolvedModel = this.resolveModel(model);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${resolvedModel}:streamGenerateContent?key=${this.apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: userPrompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 8000,
          topP: 0.8,
          topK: 40,
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
      throw new Error(`Gemini API error (${response.status}): ${errorMessage}`);
    }

    // Gemini sends complete JSON objects, not SSE
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Parse complete JSON objects
      while (true) {
        const openBrace = buffer.indexOf('{');
        if (openBrace === -1) break;

        let braceCount = 0;
        let closeBrace = -1;
        for (let i = openBrace; i < buffer.length; i++) {
          if (buffer[i] === '{') braceCount++;
          if (buffer[i] === '}') braceCount--;
          if (braceCount === 0) {
            closeBrace = i;
            break;
          }
        }

        if (closeBrace === -1) break;

        const jsonString = buffer.substring(openBrace, closeBrace + 1);
        buffer = buffer.substring(closeBrace + 1);

        try {
          const data = JSON.parse(jsonString);

          if (data.candidates?.[0]?.content?.parts) {
            for (const part of data.candidates[0].content.parts) {
              if (part.text) {
                onChunk(part.text);
              }
            }
          }
        } catch (e) {
          console.warn('Failed to parse Gemini JSON:', jsonString);
        }
      }
    }
  }
}

