import settingsService from './settings.service.js';

class AIService {
  async generateQueryFromInput(userInput) {
    // For now, we'll use the user input directly as the query
    // In the future, we can enhance this with AI to extract semantic meaning
    return userInput;
  }

  async generateResponse(userInput, context, model) {
    const provider = this.getProviderForModel(model);
    const apiKey = await settingsService.getApiKey(provider);

    if (!apiKey) {
      throw new Error(`No API key configured for ${provider}. Please add it in settings.`);
    }

    try {
      switch (provider) {
        case 'openai':
          return await this.callOpenAI(userInput, context, model, apiKey);
        case 'anthropic':
          return await this.callAnthropic(userInput, context, model, apiKey);
        case 'moonshot':
          return await this.callMoonshot(userInput, context, model, apiKey);
        case 'gemini':
          return await this.callGemini(userInput, context, model, apiKey);
        default:
          throw new Error(`Unsupported provider: ${provider}`);
      }
    } catch (error) {
      console.error('AI service error:', error);
      throw error;
    }
  }

  async generateResponseStream(userInput, context, model, onChunk) {
    const provider = this.getProviderForModel(model);
    const apiKey = await settingsService.getApiKey(provider);

    if (!apiKey) {
      throw new Error(`No API key configured for ${provider}. Please add it in settings.`);
    }

    try {
      switch (provider) {
        case 'openai':
          return await this.callOpenAIStream(userInput, context, model, apiKey, onChunk);
        case 'anthropic':
          return await this.callAnthropicStream(userInput, context, model, apiKey, onChunk);
        case 'moonshot':
          return await this.callMoonshotStream(userInput, context, model, apiKey, onChunk);
        case 'gemini':
          return await this.callGeminiStream(userInput, context, model, apiKey, onChunk);
        default:
          throw new Error(`Unsupported provider: ${provider}`);
      }
    } catch (error) {
      console.error('AI service streaming error:', error);
      throw error;
    }
  }

  getProviderForModel(model) {
    if (model.startsWith('gpt')) return 'openai';
    if (model.startsWith('claude')) return 'anthropic';
    if (model.startsWith('kimi')) return 'moonshot';
    if (model.startsWith('gemini')) return 'gemini';
    return 'openai'; // default
  }

  isResponsesModel(model) {
    // GPT-5 models use the Responses API
    const modelLower = model.toLowerCase();
    return modelLower.includes('gpt-5') || modelLower.includes('gpt5');
  }

  resolveOpenAIModel(modelId) {
    // Map friendly names to actual model IDs
    const modelMap = {
      // gpt-5 models use their base names directly (no -preview suffix)
      // See: https://platform.openai.com/docs/api-reference/models
    };

    return modelMap[modelId] || modelId;
  }

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

  async callOpenAI(userInput, context, model, apiKey) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : userInput;

    // Check if this is a Responses API model (gpt-5 family)
    if (this.isResponsesModel(model)) {
      const resolvedModel = this.resolveOpenAIModel(model);
      const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
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
        } catch (e) {
          // Use raw text if not JSON
        }
        throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
      }

      const data = await response.json();
      // Extract text from Responses API format
      const outputText = data.output?.find(item => item.type === 'message')
        ?.content?.find(c => c.type === 'output_text')?.text || '';
      return outputText;
    }

    // Use Chat Completions API for non-gpt-5 models
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
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
      } catch (e) {
        // Use raw text if not JSON
      }
      throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }

  async callAnthropic(userInput, context, model, apiKey) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : userInput;

    // Map our model IDs to Anthropic's actual model names
    const modelMap = {
      'claude-opus-4-5': 'claude-opus-4-20250514',
      'claude-sonnet-4-5': 'claude-sonnet-4-20250514',
      'claude-haiku-4-5': 'claude-4-haiku-20250514',
    };

    const anthropicModel = modelMap[model] || model;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
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

  async callMoonshot(userInput, context, model, apiKey) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : userInput;

    // Moonshot uses OpenAI-compatible API with strict rate limits
    const endpoint = 'https://api.moonshot.ai/v1/chat/completions';
    const maxRetries = 10;
    const initialBackoffMs = 2000;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'kimi-k2-turbo-preview',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 1000,
          }),
        });

        // Handle rate limiting
        if (response.status === 429) {
          const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
          console.log(`Moonshot rate limited. Attempt ${attempt}/${maxRetries}. Waiting ${waitTime}ms...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }

        if (!response.ok) {
          const errorText = await response.text();
          let errorMessage = errorText;

          try {
            const errorJson = JSON.parse(errorText);
            errorMessage = errorJson.error?.message || errorJson.message || errorText;
          } catch (e) {
            // Use raw text if not JSON
          }

          if (response.status === 401) {
            throw new Error(
              `Moonshot authentication failed. Possible causes:\n` +
              `- Invalid or expired API key\n` +
              `- Account has no credits/quota\n` +
              `- API key lacks required permissions\n` +
              `Check at: https://platform.moonshot.ai/`
            );
          }

          throw new Error(`Moonshot API error (${response.status}): ${errorMessage}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

      } catch (error) {
        // If it's our thrown error, re-throw it
        if (error.message.includes('authentication failed') || error.message.includes('API error')) {
          throw error;
        }

        // Network errors - retry with backoff
        if (attempt === maxRetries) {
          throw new Error(`Moonshot request failed after ${maxRetries} attempts: ${error.message}`);
        }

        const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
        console.log(`Moonshot request failed. Attempt ${attempt}/${maxRetries}. Retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }

    throw new Error('Moonshot request failed: Maximum retries exceeded');
  }

  async callMoonshotStream(userInput, context, model, apiKey, onChunk) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : userInput;

    // Moonshot uses OpenAI-compatible API with strict rate limits
    const endpoint = 'https://api.moonshot.ai/v1/chat/completions';
    const maxRetries = 10;
    const initialBackoffMs = 2000;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'kimi-k2-turbo-preview',
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt },
            ],
            temperature: 0.7,
            max_tokens: 1000,
            stream: true,
          }),
        });

        // Handle rate limiting
        if (response.status === 429) {
          const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
          console.log(`Moonshot rate limited. Attempt ${attempt}/${maxRetries}. Waiting ${waitTime}ms...`);

          // Send rate limit metadata to client
          onChunk('', {
            type: 'rate_limit_wait',
            waitTimeMs: waitTime,
            waitTimeSec: Math.round(waitTime / 1000),
            attemptNumber: attempt,
            maxRetries: maxRetries,
          });

          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }

        if (!response.ok) {
          const errorText = await response.text();
          let errorMessage = errorText;

          try {
            const errorJson = JSON.parse(errorText);
            errorMessage = errorJson.error?.message || errorJson.message || errorText;
          } catch (e) {
            // Use raw text if not JSON
          }

          if (response.status === 401) {
            throw new Error(
              `Moonshot authentication failed. Possible causes:\n` +
              `- Invalid or expired API key\n` +
              `- Account has no credits/quota\n` +
              `- API key lacks required permissions\n` +
              `Check at: https://platform.moonshot.ai/`
            );
          }

          throw new Error(`Moonshot API error (${response.status}): ${errorMessage}`);
        }

        // Process streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed === 'data: [DONE]') continue;
            if (!trimmed.startsWith('data: ')) continue;

            const dataStr = trimmed.slice(6);

            try {
              const evt = JSON.parse(dataStr);
              const delta = evt?.choices?.[0]?.delta;
              const finishReason = evt?.choices?.[0]?.finish_reason;

              if (delta?.content) {
                onChunk(delta.content);
              }

              // Important: Check finish_reason to detect completion
              if (finishReason && finishReason !== 'null') {
                console.log('Moonshot stream complete:', finishReason);
                return;
              }
            } catch (e) {
              // Skip malformed JSON
              console.warn('Failed to parse SSE data:', dataStr);
            }
          }
        }

        return; // Success

      } catch (error) {
        // If it's our thrown error, re-throw it
        if (error.message.includes('authentication failed') || error.message.includes('API error')) {
          throw error;
        }

        // Network errors - retry with backoff
        if (attempt === maxRetries) {
          throw new Error(`Moonshot streaming failed after ${maxRetries} attempts: ${error.message}`);
        }

        const waitTime = initialBackoffMs * Math.pow(2, attempt - 1);
        console.log(`Moonshot stream failed. Attempt ${attempt}/${maxRetries}. Retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }

    throw new Error('Moonshot streaming failed: Maximum retries exceeded');
  }

  async callOpenAIStream(userInput, context, model, apiKey, onChunk) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : userInput;

    const resolvedModel = this.resolveOpenAIModel(model);
    const endpoint = 'https://api.openai.com/v1/responses';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: resolvedModel,
          input: [
            // GPT-5 Responses API doesn't have system role, convert to user
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
        } catch (e) {
          // Use raw text if not JSON
        }

        throw new Error(`OpenAI API error (${response.status}): ${errorMessage}`);
      }

      // Process streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let currentOutputIndex = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;
          if (!trimmed.startsWith('data: ')) continue;

          const dataStr = trimmed.slice(6);

          try {
            const evt = JSON.parse(dataStr);
            const evtType = evt?.type;

            if (evtType === 'response.output_item.added') {
              // New output item started
              currentOutputIndex = evt.index || 0;
            } else if (evtType === 'response.output_text.delta') {
              // Regular text content
              const delta = evt.delta;
              if (delta) {
                onChunk(delta, { type: 'content', output_index: evt.index });
              }
            } else if (evtType === 'response.reasoning_text.delta') {
              // Thinking/reasoning text
              const delta = evt.delta;
              if (delta) {
                onChunk(delta, { type: 'thinking', output_index: evt.index });
              }
            } else if (evtType === 'response.reasoning_summary_text.delta') {
              // Reasoning summary
              const delta = evt.delta;
              if (delta) {
                onChunk(delta, { type: 'thinking_summary', output_index: evt.index });
              }
            } else if (evtType === 'response.function_call_arguments.done') {
              // Tool call completed
              const { name, arguments: args, call_id } = evt;
              onChunk('', {
                type: 'tool_call',
                tool_name: name,
                tool_args: args,
                tool_call_id: call_id,
                output_index: evt.index,
              });
            } else if (evtType === 'response.output_item.done') {
              // Output item complete
              console.log('OpenAI output item complete:', evt.index);
            } else if (evtType === 'response.completed') {
              // Stream complete
              console.log('OpenAI stream complete. Usage:', evt.usage);
              return;
            }
          } catch (e) {
            // Skip malformed JSON
            console.warn('Failed to parse SSE data:', dataStr);
          }
        }
      }

      return; // Success

    } catch (error) {
      console.error('OpenAI streaming error:', error);
      throw error;
    }
  }

  async callAnthropicStream(userInput, context, model, apiKey, onChunk) {
    throw new Error('Anthropic streaming not yet implemented');
  }

  resolveGeminiModel(modelId) {
    // Map friendly names to actual model IDs
    const modelMap = {
      'gemini-2.5-flash': 'gemini-2.5-flash',
      'gemini-2.5-pro': 'gemini-2.5-pro',
    };

    return modelMap[modelId] || 'gemini-2.5-flash';
  }

  async callGemini(userInput, context, model, apiKey) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${systemPrompt}\n\n${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : `${systemPrompt}\n\nUser Question: ${userInput}`;

    const resolvedModel = this.resolveGeminiModel(model);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${resolvedModel}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: userPrompt }
            ]
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
      } catch (e) {
        // Use raw text if not JSON
      }
      throw new Error(`Gemini API error (${response.status}): ${errorMessage}`);
    }

    const data = await response.json();

    // Extract text from Gemini response format
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

  async callGeminiStream(userInput, context, model, apiKey, onChunk) {
    const contextPrompt = this.buildContextPrompt(context);

    const systemPrompt = `You are a helpful AI assistant that answers questions based on the provided context from a knowledge base.
If the context doesn't contain relevant information to answer the question, you should say so clearly.
Always cite which source you're using when answering.`;

    const userPrompt = contextPrompt
      ? `${systemPrompt}\n\n${contextPrompt}\n\nUser Question: ${userInput}\n\nPlease answer based on the context above.`
      : `${systemPrompt}\n\nUser Question: ${userInput}`;

    const resolvedModel = this.resolveGeminiModel(model);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${resolvedModel}:streamGenerateContent?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: userPrompt }
              ]
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
        } catch (e) {
          // Use raw text if not JSON
        }
        throw new Error(`Gemini API error (${response.status}): ${errorMessage}`);
      }

      // Process streaming response - Gemini sends complete JSON objects
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Parse complete JSON objects from buffer
        while (true) {
          const openBrace = buffer.indexOf('{');
          if (openBrace === -1) break;

          // Find matching closing brace
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

          if (closeBrace === -1) break; // Incomplete JSON

          const jsonString = buffer.substring(openBrace, closeBrace + 1);
          buffer = buffer.substring(closeBrace + 1);

          try {
            const data = JSON.parse(jsonString);

            // Extract text from candidates
            if (data.candidates?.[0]?.content?.parts) {
              for (const part of data.candidates[0].content.parts) {
                if (part.text) {
                  onChunk(part.text);
                }
              }
            }

            // Check for finish reason
            const finishReason = data.candidates?.[0]?.finishReason;
            if (finishReason && finishReason !== 'STOP') {
              console.log('Gemini stream finished with reason:', finishReason);
            }
          } catch (e) {
            // Skip malformed JSON
            console.warn('Failed to parse Gemini JSON:', jsonString);
          }
        }
      }

      return; // Success

    } catch (error) {
      console.error('Gemini streaming error:', error);
      throw error;
    }
  }
}

export default new AIService();
