import settingsService from './settings.service.js';
import mcpClientManager from '../mcp/mcp-client.js';

/**
 * AI Service with Function Calling / Tool Use Support
 * Supports both OpenAI and Anthropic with MCP tool integration
 */
class AIWithToolsService {
  constructor() {
    this.maxToolIterations = 100; // Allow many tool iterations like Cursor/Claude Code
  }

  /**
   * Generate response with tool support and streaming
   */
  async generateResponseWithTools(userInput, context, model, onChunk, conversationHistory = [], projectId = null, vectorDbId = null) {
    const provider = this.getProviderForModel(model);
    const apiKey = await settingsService.getApiKey(provider);

    if (!apiKey) {
      throw new Error(`No API key configured for ${provider}. Please add it in settings.`);
    }

    // Get available tools from MCP
    const tools = await this.getToolsForProvider(provider);

    console.log(`[AI Tools] Available tools: ${tools.length}`);

    // Store projectId and vectorDbId for RAG tool injection
    this.projectId = projectId;
    this.vectorDbId = vectorDbId;

    try {
      switch (provider) {
        case 'openai':
          return await this.callOpenAIWithTools(
            userInput,
            context,
            model,
            apiKey,
            tools,
            onChunk,
            conversationHistory
          );
        case 'anthropic':
          return await this.callAnthropicWithTools(
            userInput,
            context,
            model,
            apiKey,
            tools,
            onChunk,
            conversationHistory
          );
        case 'moonshot':
          return await this.callMoonshotWithTools(
            userInput,
            context,
            model,
            apiKey,
            tools,
            onChunk,
            conversationHistory
          );
        case 'gemini':
          // Gemini doesn't support tools in this implementation
          throw new Error(`Gemini does not support tools yet in this implementation`);
        default:
          throw new Error(`Provider ${provider} does not support tools yet`);
      }
    } catch (error) {
      console.error('[AI Tools] Error:', error);
      throw error;
    }
  }

  /**
   * Get tools in the format required by the provider
   */
  async getToolsForProvider(provider) {
    switch (provider) {
      case 'openai':
        return await mcpClientManager.getToolsForOpenAI();
      case 'anthropic':
        return await mcpClientManager.getToolsForAnthropic();
      case 'moonshot':
        // Moonshot uses OpenAI-compatible tool format
        return await mcpClientManager.getToolsForOpenAI();
      default:
        return [];
    }
  }

  /**
   * Check if model is a reasoning model (GPT-5, o-series)
   * These models require max_completion_tokens instead of max_tokens
   */
  isReasoningModel(model) {
    const modelLower = model.toLowerCase();
    return modelLower.includes('gpt-5') || modelLower.includes('gpt5') ||
           modelLower.startsWith('o1') || modelLower.startsWith('o3') ||
           modelLower.startsWith('o4');
  }

  /**
   * OpenAI with function calling (GPT-4, GPT-3.5)
   */
  async callOpenAIWithTools(userInput, context, model, apiKey, tools, onChunk, conversationHistory) {
    const systemPrompt = `You are a helpful AI assistant with access to tools.

You have access to conversation memory and can store/retrieve information across messages.
Use the tools when appropriate to provide better answers.`;

    const userPrompt = userInput;

    // Build messages array
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userPrompt },
    ];

    let fullResponse = '';
    let iterations = 0;

    // Check if this is a reasoning model (GPT-5, o-series)
    const isReasoningModel = this.isReasoningModel(model);

    // Tool calling loop
    while (iterations < this.maxToolIterations) {
      iterations++;

      let requestBody;
      let endpoint;

      // GPT-5 models use Responses API, others use Chat Completions API
      if (isReasoningModel) {
        // Responses API format
        endpoint = 'https://api.openai.com/v1/responses';

        // Convert messages to Responses API input format
        const inputMessages = messages.map(msg => ({
          role: msg.role === 'system' ? 'user' : msg.role,  // Responses API doesn't have system role
          content: msg.content
        }));

        // Format tools for Responses API
        // IMPORTANT: Responses API has a different format than Chat Completions API
        // For Responses API, name/description/parameters are at root level, not nested in function object
        const responsesAPITools = tools.map(tool => ({
          type: 'function',
          name: tool.function.name,
          description: tool.function.description,
          parameters: {
            ...tool.function.parameters,
            additionalProperties: false
          },
          strict: false
        }));

        requestBody = {
          model: model,
          input: inputMessages,
          tools: responsesAPITools,
          tool_choice: 'auto',
          stream: true,
          max_output_tokens: 2000,
          reasoning: {
            effort: 'medium',
            summary: 'auto'
          }
        };
      } else {
        // Chat Completions API format
        endpoint = 'https://api.openai.com/v1/chat/completions';
        requestBody = {
          model: model,
          messages: messages,
          tools: tools,
          tool_choice: 'auto',
          stream: true,
          max_tokens: 2000,
          temperature: 0.7
        };
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
      }

      // Process stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let currentToolCalls = [];
      let currentMessage = { role: 'assistant', content: '' };

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

            // Handle Responses API format (GPT-5)
            if (isReasoningModel && evt.type) {
              const evtType = evt.type;

              // Debug: Log non-delta event types only
              if (!evtType.includes('.delta')) {
                console.log('[AI Tools] Responses API event:', evtType);
              }

              // Regular text content
              if (evtType === 'response.output_text.delta') {
                const delta = evt.delta;
                if (delta) {
                  currentMessage.content += delta;
                  fullResponse += delta;
                  if (onChunk) {
                    onChunk(delta, { type: 'content' });
                  }
                }
              }
              // Reasoning/thinking text (full reasoning tokens if available)
              else if (evtType === 'response.reasoning_text.delta') {
                const delta = evt.delta;
                if (delta && onChunk) {
                  onChunk(delta, { type: 'thinking' });
                }
              }
              // Reasoning summary - GPT-5 typically only provides this, not full reasoning
              // Treat it as thinking content so users can see it
              else if (evtType === 'response.reasoning_summary_text.delta') {
                const delta = evt.delta;
                if (delta && onChunk) {
                  // Use 'thinking' type so it displays as thinking content
                  onChunk(delta, { type: 'thinking' });
                }
              }
              // Tool call completed
              else if (evtType === 'response.function_call_arguments.done') {
                const { name, arguments: args, call_id } = evt;
                currentToolCalls.push({
                  id: call_id || '',
                  type: 'function',
                  function: {
                    name: name,
                    arguments: args,
                  },
                });
              }
              // Response completed
              else if (evtType === 'response.completed') {
                // Check if there were tool calls
                if (currentToolCalls.length > 0) {
                  // Execute tool calls
                  console.log(`[AI Tools] Executing ${currentToolCalls.length} tool calls`);

                  currentMessage.tool_calls = currentToolCalls;
                  messages.push(currentMessage);

                  // Execute all tool calls
                  for (const toolCall of currentToolCalls) {
                    const toolName = toolCall.function.name;
                    let toolArgs = JSON.parse(toolCall.function.arguments);

                    // Inject RAG context (projectId, vectorDbId) for RAG tools
                    toolArgs = this.injectRAGContext(toolName, toolArgs);

                    // Send tool call notification to client
                    if (onChunk) {
                      onChunk('', {
                        type: 'tool_call',
                        tool_name: toolName,
                        tool_args: toolArgs,
                      });
                    }

                    // Find which server this tool belongs to
                    const tool = tools.find((t) => t.function.name === toolName);
                    const serverName = tool?.function._mcpServer;

                    // Execute tool via MCP
                    const result = await mcpClientManager.callTool(toolName, toolArgs, serverName);

                    // Extract text from MCP response
                    const resultText = result.content
                      .map((c) => c.text)
                      .filter(Boolean)
                      .join('\n');

                    // Add tool result to messages
                    messages.push({
                      role: 'tool',
                      tool_call_id: toolCall.id,
                      content: resultText,
                    });

                    // Send tool result to client
                    if (onChunk) {
                      onChunk('', {
                        type: 'tool_result',
                        tool_name: toolName,
                        result: resultText,
                      });
                    }
                  }

                  // Continue loop to get final response
                  break;
                } else {
                  // Done - no more tool calls
                  return fullResponse;
                }
              }
            }
          } catch (e) {
            console.warn('[AI Tools] Failed to parse SSE data:', e);
          }
        }
      }

      // If we didn't break out, we're done
      if (currentToolCalls.length === 0) {
        return fullResponse;
      }
    }

    // Max iterations reached
    console.warn('[AI Tools] Max tool iterations reached');
    return fullResponse;
  }

  /**
   * Anthropic with tool use (Claude)
   */
  async callAnthropicWithTools(userInput, context, model, apiKey, tools, onChunk, conversationHistory) {
    const systemPrompt = `You are a helpful AI assistant with access to tools.

You have access to conversation memory and can store/retrieve information across messages.
Use the tools when appropriate to provide better answers.`;

    const userPrompt = userInput;

    // Map model name
    const modelMap = {
      'claude-opus-4-5': 'claude-opus-4-20250514',
      'claude-sonnet-4-5': 'claude-sonnet-4-20250514',
      'claude-haiku-4-5': 'claude-4-haiku-20250514',
    };
    const anthropicModel = modelMap[model] || model;

    // Build messages array
    const messages = [...conversationHistory, { role: 'user', content: userPrompt }];

    let fullResponse = '';
    let iterations = 0;

    // Tool calling loop
    while (iterations < this.maxToolIterations) {
      iterations++;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: anthropicModel,
          max_tokens: 2000,
          system: systemPrompt,
          messages: messages,
          tools: tools,
          thinking: {
            type: 'enabled',
            budget_tokens: 5000, // Allow up to 5000 tokens for thinking
          },
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Anthropic API error (${response.status}): ${errorText}`);
      }

      // Process stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let currentContent = [];
      let stopReason = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;

          const dataStr = trimmed.slice(6);

          try {
            const evt = JSON.parse(dataStr);

            if (evt.type === 'content_block_delta') {
              const delta = evt.delta;

              if (delta.type === 'text_delta') {
                const text = delta.text;

                // Check if this is from a thinking block
                const blockIndex = evt.index;
                const isThinking = currentContent[blockIndex]?.type === 'thinking';

                if (isThinking) {
                  // This is thinking content
                  if (onChunk) {
                    onChunk(text, { type: 'thinking' });
                  }
                } else {
                  // Regular content
                  fullResponse += text;
                  if (onChunk) {
                    onChunk(text, { type: 'content' });
                  }
                }
                currentContent.push({ type: 'text', text });
              }

              if (delta.type === 'input_json_delta') {
                // Tool input is being streamed
                // We'll handle complete tool use in content_block_stop
              }
            }

            if (evt.type === 'content_block_start') {
              const block = evt.content_block;
              if (block.type === 'tool_use') {
                currentContent.push({
                  type: 'tool_use',
                  id: block.id,
                  name: block.name,
                  input: {},
                });
              } else if (block.type === 'thinking') {
                // Extended thinking block (Claude Sonnet 4, Haiku 4.5, etc.)
                currentContent.push({
                  type: 'thinking',
                  thinking: '',
                });
              }
            }

            if (evt.type === 'content_block_stop') {
              // Content block completed
            }

            if (evt.type === 'message_delta') {
              stopReason = evt.delta.stop_reason;
            }

            if (evt.type === 'message_stop') {
              // Message completed
              break;
            }
          } catch (e) {
            console.warn('[AI Tools] Failed to parse SSE data:', e);
          }
        }
      }

      // Check if we need to execute tools
      const toolUses = currentContent.filter((c) => c.type === 'tool_use');

      if (toolUses.length > 0 && stopReason === 'tool_use') {
        console.log(`[AI Tools] Executing ${toolUses.length} tool calls`);

        // Add assistant message
        messages.push({
          role: 'assistant',
          content: currentContent,
        });

        // Execute all tools
        const toolResults = [];

        for (const toolUse of toolUses) {
          const toolName = toolUse.name;
          let toolArgs = toolUse.input;

          // Inject RAG context (projectId, vectorDbId) for RAG tools
          toolArgs = this.injectRAGContext(toolName, toolArgs);

          // Send tool call notification
          if (onChunk) {
            onChunk('', {
              type: 'tool_call',
              tool_name: toolName,
              tool_args: toolArgs,
            });
          }

          // Find server
          const tool = tools.find((t) => t.name === toolName);
          const serverName = tool?._mcpServer;

          // Execute tool
          const result = await mcpClientManager.callTool(toolName, toolArgs, serverName);

          // Extract text
          const resultText = result.content
            .map((c) => c.text)
            .filter(Boolean)
            .join('\n');

          toolResults.push({
            type: 'tool_result',
            tool_use_id: toolUse.id,
            content: resultText,
          });

          // Send tool result
          if (onChunk) {
            onChunk('', {
              type: 'tool_result',
              tool_name: toolName,
              result: resultText,
            });
          }
        }

        // Add tool results as user message
        messages.push({
          role: 'user',
          content: toolResults,
        });

        // Continue loop to get final response
        currentContent = [];
        continue;
      } else {
        // Done - no more tools
        return fullResponse;
      }
    }

    // Max iterations reached
    console.warn('[AI Tools] Max tool iterations reached');
    return fullResponse;
  }

  /**
   * Moonshot with function calling (Kimi-K2)
   * Uses OpenAI-compatible API
   */
  async callMoonshotWithTools(userInput, context, model, apiKey, tools, onChunk, conversationHistory) {
    const systemPrompt = `You are a helpful AI assistant with access to tools.

You have access to conversation memory and can store/retrieve information across messages.
Use the tools when appropriate to provide better answers.`;

    const userPrompt = userInput;

    // Resolve model name to Moonshot API model ID
    const moonshotModel = this.resolveMoonshotModel(model);

    // Build messages array
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: userPrompt },
    ];

    let fullResponse = '';
    let iterations = 0;

    // Tool calling loop
    while (iterations < this.maxToolIterations) {
      iterations++;

      const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: moonshotModel,
          messages: messages,
          tools: tools,
          tool_choice: 'auto',
          temperature: 0.7,
          max_tokens: 2000,
          stream: true,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Moonshot API error (${response.status}): ${errorText}`);
      }

      // Process stream (same as OpenAI since it's compatible)
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let currentToolCalls = [];
      let currentMessage = { role: 'assistant', content: '' };

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

            // Content delta
            if (delta?.content) {
              currentMessage.content += delta.content;
              fullResponse += delta.content;
              if (onChunk) {
                onChunk(delta.content, { type: 'content' });
              }
            }

            // Thinking/reasoning delta (for kimi-k2-thinking-turbo)
            if (delta?.reasoning_content) {
              // Kimi K2 thinking content (if supported)
              if (onChunk) {
                onChunk(delta.reasoning_content, { type: 'thinking' });
              }
            }

            // Tool call delta
            if (delta?.tool_calls) {
              for (const toolCallDelta of delta.tool_calls) {
                const index = toolCallDelta.index;

                if (!currentToolCalls[index]) {
                  currentToolCalls[index] = {
                    id: toolCallDelta.id || '',
                    type: 'function',
                    function: {
                      name: toolCallDelta.function?.name || '',
                      arguments: toolCallDelta.function?.arguments || '',
                    },
                  };
                } else {
                  if (toolCallDelta.function?.name) {
                    currentToolCalls[index].function.name += toolCallDelta.function.name;
                  }
                  if (toolCallDelta.function?.arguments) {
                    currentToolCalls[index].function.arguments += toolCallDelta.function.arguments;
                  }
                }
              }
            }

            // Check if done
            if (finishReason) {
              if (finishReason === 'tool_calls') {
                // Execute tool calls
                console.log(`[AI Tools] Executing ${currentToolCalls.length} tool calls`);

                currentMessage.tool_calls = currentToolCalls;
                messages.push(currentMessage);

                // Execute all tool calls
                for (const toolCall of currentToolCalls) {
                  const toolName = toolCall.function.name;
                  let toolArgs = JSON.parse(toolCall.function.arguments);

                  // Inject RAG context (projectId, vectorDbId) for RAG tools
                  toolArgs = this.injectRAGContext(toolName, toolArgs);

                  // Send tool call notification to client
                  if (onChunk) {
                    onChunk('', {
                      type: 'tool_call',
                      tool_name: toolName,
                      tool_args: toolArgs,
                    });
                  }

                  // Find which server this tool belongs to
                  const tool = tools.find((t) => t.function.name === toolName);
                  const serverName = tool?.function._mcpServer;

                  // Execute tool via MCP
                  const result = await mcpClientManager.callTool(toolName, toolArgs, serverName);

                  // Extract text from MCP response
                  const resultText = result.content
                    .map((c) => c.text)
                    .filter(Boolean)
                    .join('\n');

                  // Add tool result to messages
                  messages.push({
                    role: 'tool',
                    tool_call_id: toolCall.id,
                    content: resultText,
                  });

                  // Send tool result to client
                  if (onChunk) {
                    onChunk('', {
                      type: 'tool_result',
                      tool_name: toolName,
                      result: resultText,
                    });
                  }
                }

                // Continue loop to get final response
                break;
              } else {
                // Done - no more tool calls
                return fullResponse;
              }
            }
          } catch (e) {
            console.warn('[AI Tools] Failed to parse SSE data:', e);
          }
        }
      }

      // If we didn't break out, we're done
      if (currentToolCalls.length === 0) {
        return fullResponse;
      }
    }

    // Max iterations reached
    console.warn('[AI Tools] Max tool iterations reached');
    return fullResponse;
  }

  resolveMoonshotModel(modelId) {
    // Map friendly names to actual Moonshot API model IDs
    const modelMap = {
      'kimi-k2': 'kimi-k2-thinking-turbo',  // Kimi K2 thinking model
      'kimi-k2-thinking-turbo': 'kimi-k2-thinking-turbo',
      'kimi-32k': 'moonshot-v1-32k',
      'kimi-8k': 'moonshot-v1-8k',
      'moonshot-v1-8k': 'moonshot-v1-8k',
      'moonshot-v1-32k': 'moonshot-v1-32k',
      'moonshot-v1-128k': 'moonshot-v1-128k',
    };

    return modelMap[modelId] || 'moonshot-v1-8k';  // Default to 8k model
  }

  getProviderForModel(model) {
    if (model.startsWith('gpt')) return 'openai';
    if (model.startsWith('claude')) return 'anthropic';
    if (model.startsWith('kimi')) return 'moonshot';
    if (model.startsWith('gemini')) return 'gemini';
    return 'openai';
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

  /**
   * Inject projectId and vectorDbId into RAG tool arguments
   */
  injectRAGContext(toolName, toolArgs) {
    const ragTools = ['search_documents', 'grep_documents', 'list_available_documents', 'get_vector_db_info'];

    if (ragTools.includes(toolName)) {
      // Inject projectId and vectorDbId into arguments
      return {
        ...toolArgs,
        project_id: this.projectId,
        vector_db_id: this.vectorDbId,
      };
    }

    return toolArgs;
  }
}

export default new AIWithToolsService();
