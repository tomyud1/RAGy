import { useState, useCallback } from 'react';

/**
 * Custom hook for managing chat messages and streaming
 */
export function useChatMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addUserMessage = useCallback((content) => {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMessage]);
    return userMessage;
  }, []);

  const createAssistantPlaceholder = useCallback(() => {
    const assistantMessageId = Date.now() + 1;
    const assistantMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      contentBlocks: [],
      currentReasoningBlock: null,
      context: null,
      timestamp: new Date().toISOString(),
      isStreaming: true,
    };
    setMessages(prev => [...prev, assistantMessage]);
    return assistantMessageId;
  }, []);

  const updateAssistantMessage = useCallback((messageId, updater) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId ? updater(msg) : msg
    ));
  }, []);

  const handleStreamEvent = useCallback((messageId, data) => {
    if (data.type === 'context') {
      setMessages(prev => prev.map(msg =>
        msg.id === messageId
          ? { ...msg, context: data.context }
          : msg
      ));
    } else if (data.type === 'tool_call') {
      setMessages(prev => prev.map(msg =>
        msg.id === messageId
          ? {
              ...msg,
              toolCalls: [...(msg.toolCalls || []), {
                name: data.tool_name,
                args: data.tool_args
              }]
            }
          : msg
      ));
    } else if (data.type === 'content') {
      const content = data.content || '';
      const metadata = data.metadata || {};

      setMessages(prev => prev.map(msg => {
        if (msg.id !== messageId) return msg;

        const blocks = [...msg.contentBlocks];
        let currentReasoning = msg.currentReasoningBlock;

        if (metadata.type === 'thinking') {
          if (!currentReasoning) {
            currentReasoning = {
              type: 'reasoning',
              content: content,
              startTime: Date.now()
            };
            blocks.push(currentReasoning);
          } else {
            const lastBlock = blocks[blocks.length - 1];
            if (lastBlock.type === 'reasoning') {
              blocks[blocks.length - 1] = {
                ...lastBlock,
                content: lastBlock.content + content
              };
            }
          }
          return { ...msg, contentBlocks: blocks, currentReasoningBlock: currentReasoning };
        } else if (metadata.type === 'thinking_summary') {
          const lastBlock = blocks[blocks.length - 1];
          if (lastBlock && lastBlock.type === 'reasoning_summary') {
            blocks[blocks.length - 1] = {
              ...lastBlock,
              content: lastBlock.content + content
            };
          } else {
            blocks.push({ type: 'reasoning_summary', content });
          }
          return { ...msg, contentBlocks: blocks };
        } else {
          if (currentReasoning) {
            const lastBlock = blocks[blocks.length - 1];
            if (lastBlock.type === 'reasoning') {
              blocks[blocks.length - 1] = {
                ...lastBlock,
                endTime: Date.now()
              };
            }
            currentReasoning = null;
          }

          const lastBlock = blocks[blocks.length - 1];
          if (lastBlock && lastBlock.type === 'text') {
            blocks[blocks.length - 1] = {
              ...lastBlock,
              content: lastBlock.content + content
            };
          } else {
            blocks.push({ type: 'text', content });
          }

          return {
            ...msg,
            content: msg.content + content,
            contentBlocks: blocks,
            currentReasoningBlock: currentReasoning
          };
        }
      }));
    } else if (data.type === 'done') {
      setMessages(prev => prev.map(msg => {
        if (msg.id !== messageId) return msg;

        const blocks = [...msg.contentBlocks];
        if (msg.currentReasoningBlock) {
          const lastBlock = blocks[blocks.length - 1];
          if (lastBlock && lastBlock.type === 'reasoning' && !lastBlock.endTime) {
            blocks[blocks.length - 1] = {
              ...lastBlock,
              endTime: Date.now()
            };
          }
        }

        return { ...msg, isStreaming: false, currentReasoningBlock: null, contentBlocks: blocks };
      }));
    }
  }, []);

  const setError = useCallback((messageId, errorMessage) => {
    setMessages(prev => prev.map(msg =>
      msg.id === messageId
        ? {
            ...msg,
            content: 'Sorry, I encountered an error while processing your request.\n\nError: ' + errorMessage,
            isError: true,
            isStreaming: false,
          }
        : msg
    ));
  }, []);

  return {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    addUserMessage,
    createAssistantPlaceholder,
    updateAssistantMessage,
    handleStreamEvent,
    setError,
  };
}

