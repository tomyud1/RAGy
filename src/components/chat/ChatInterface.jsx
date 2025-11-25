import { useState, useEffect, useRef } from 'react';
import { Settings, Send, Database, ChevronDown, Plus, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SettingsModal from './SettingsModal';
import ChatThreadSelector from './ChatThreadSelector';
import VectorDbSelector from './VectorDbSelector';
import './ChatInterface.css';

// Helper to format thinking text - add line breaks before bold titles (except first one)
const formatThinkingText = (text) => {
  if (!text) return '';
  // Add newline before opening ** (followed by word char) that appears after text
  // This avoids breaking closing ** markers
  return text.replace(/([^\n])\*\*(\w)/g, '$1\n\n**$2');
};

const ChatInterface = ({ project, onProjectUpdate }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [chatThreads, setChatThreads] = useState([]);
  const [currentThreadId, setCurrentThreadId] = useState(() => {
    // Load saved thread ID from localStorage for this project
    return localStorage.getItem(`ragy-thread-${project.id}`) || null;
  });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState(() => {
    // Load saved model from localStorage, default to 'gpt-5'
    return localStorage.getItem('ragy-selected-model') || 'gpt-5';
  });
  const [isModelSelectorOpen, setIsModelSelectorOpen] = useState(false);
  const [selectedVectorDb, setSelectedVectorDb] = useState(() => {
    // Load saved vector DB from localStorage for this project
    return localStorage.getItem(`ragy-vectordb-${project.id}`) || null;
  });
  const [vectorDbs, setVectorDbs] = useState([]);
  const [vectorDbStatus, setVectorDbStatus] = useState('none'); // 'loaded', 'none', 'error'
  const [isLoading, setIsLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');
  const messagesEndRef = useRef(null);
  const modelSelectorRef = useRef(null);

  const availableModels = [
    { id: 'gpt-5', name: 'GPT-5', provider: 'OpenAI' },
    { id: 'claude-opus-4-5', name: 'Claude Opus 4.5', provider: 'Anthropic' },
    { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5', provider: 'Anthropic' },
    { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5', provider: 'Anthropic' },
    { id: 'kimi-k2', name: 'Kimi K2', provider: 'Moonshot' },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'Google' },
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google' },
  ];

  // Save selected model to localStorage
  useEffect(() => {
    localStorage.setItem('ragy-selected-model', selectedModel);
  }, [selectedModel]);

  // Save selected vector DB to localStorage
  useEffect(() => {
    if (selectedVectorDb) {
      localStorage.setItem(`ragy-vectordb-${project.id}`, selectedVectorDb);
    } else {
      localStorage.removeItem(`ragy-vectordb-${project.id}`);
    }
  }, [selectedVectorDb, project.id]);

  // Save current thread ID to localStorage
  useEffect(() => {
    if (currentThreadId) {
      localStorage.setItem(`ragy-thread-${project.id}`, currentThreadId);
    } else {
      localStorage.removeItem(`ragy-thread-${project.id}`);
    }
  }, [currentThreadId, project.id]);

  // Check server status
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/health', {
          method: 'GET',
          signal: AbortSignal.timeout(3000),
        });
        if (response.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('offline');
        }
      } catch (error) {
        setServerStatus('offline');
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  // Load vector databases for the project
  useEffect(() => {
    const loadVectorDbs = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/projects/${project.id}/vector-dbs`);
        if (response.ok) {
          const data = await response.json();
          const dbs = data.vectorDbs || [];
          setVectorDbs(dbs);

          // Don't auto-select a vector database, let user choose
          // Just update status based on current selection
          if (selectedVectorDb) {
            // Verify the selected DB still exists
            const dbExists = dbs.some(db => db.id === selectedVectorDb);
            if (dbExists) {
              setVectorDbStatus('loaded');
            } else {
              // Selected DB no longer exists, clear selection
              setSelectedVectorDb(null);
              setVectorDbStatus('none');
            }
          } else {
            setVectorDbStatus('none');
          }
        }
      } catch (error) {
        console.error('Failed to load vector databases:', error);
        setVectorDbStatus('error');
      }
    };

    loadVectorDbs();
  }, [project.id, selectedVectorDb]);

  // Load chat threads for the project
  useEffect(() => {
    const loadChatThreads = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/chat/threads/${project.id}`);
        if (response.ok) {
          const threads = await response.json();
          setChatThreads(threads);

          if (threads.length > 0) {
            // Try to restore the saved thread if it exists (from initial state)
            if (currentThreadId && threads.some(t => t.id === currentThreadId)) {
              // Thread exists, just load its history
              loadChatHistory(currentThreadId);
            } else {
              // Saved thread doesn't exist or no saved thread, fall back to last thread
              const lastThread = threads[threads.length - 1];
              setCurrentThreadId(lastThread.id);
              loadChatHistory(lastThread.id);
            }
          } else {
            createNewThread();
          }
        }
      } catch (error) {
        console.error('Failed to load chat threads:', error);
        createNewThread();
      }
    };

    loadChatThreads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id]);

  const loadChatHistory = async (threadId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/history/${threadId}`);
      if (response.ok) {
        const history = await response.json();
        setMessages(history.messages || []);
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  };

  const createNewThread = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/threads/${project.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}), // Let backend handle naming
      });

      if (response.ok) {
        const newThread = await response.json();
        setChatThreads(prevThreads => [...prevThreads, newThread]);
        setCurrentThreadId(newThread.id);
        setMessages([]);
      }
    } catch (error) {
      console.error('Failed to create chat thread:', error);
    }
  };

  const deleteThread = async (threadId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/threads/${threadId}?projectId=${project.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setChatThreads(prevThreads => {
          const updatedThreads = prevThreads.filter(t => t.id !== threadId);

          // Handle current thread deletion
          if (currentThreadId === threadId) {
            if (updatedThreads.length > 0) {
              const newThread = updatedThreads[updatedThreads.length - 1];
              setCurrentThreadId(newThread.id);
              loadChatHistory(newThread.id);
            } else {
              // No threads left, create a new one
              setCurrentThreadId(null);
              setMessages([]);
              // Create new thread after state is cleared
              setTimeout(() => createNewThread(), 0);
            }
          }

          return updatedThreads;
        });
      } else {
        const error = await response.json();
        console.error('Failed to delete thread:', error);
        alert(`Failed to delete chat thread: ${error.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to delete thread:', error);
      alert('Failed to delete chat thread');
    }
  };

  const handleVectorDbSelect = (dbId) => {
    setSelectedVectorDb(dbId);
    setVectorDbStatus(dbId ? 'loaded' : 'none');
  };

  const handleLoadFromDisk = async () => {
    try {
      // Create a file input element
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.faiss,.index';
      input.multiple = false;

      input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('vectorDb', file);
        formData.append('projectId', project.id);

        try {
          const response = await fetch('http://localhost:3001/api/projects/upload-vector-db', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const result = await response.json();
            // Reload vector databases (don't auto-select, let user choose)
            const dbsResponse = await fetch(`http://localhost:3001/api/projects/${project.id}/vector-dbs`);
            if (dbsResponse.ok) {
              const data = await dbsResponse.json();
              const dbs = data.vectorDbs || [];
              setVectorDbs(dbs);
              alert('Vector database loaded successfully! Select it from the dropdown to use it.');
            }
          } else {
            const error = await response.json();
            alert(`Failed to load vector database: ${error.error || 'Unknown error'}`);
            setVectorDbStatus('error');
          }
        } catch (error) {
          console.error('Failed to upload vector database:', error);
          alert('Failed to upload vector database');
          setVectorDbStatus('error');
        }
      };

      input.click();
    } catch (error) {
      console.error('Failed to load from disk:', error);
      setVectorDbStatus('error');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close model selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelSelectorRef.current && !modelSelectorRef.current.contains(event.target)) {
        setIsModelSelectorOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    const messageContent = input;
    setInput('');
    setIsLoading(true);

    // Create placeholder assistant message for streaming
    const assistantMessageId = Date.now() + 1;
    const assistantMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      contentBlocks: [],  // Ordered array of content blocks (reasoning, text, etc.)
      currentReasoningBlock: null,  // Track active reasoning block for timing
      context: null,
      timestamp: new Date().toISOString(),
      isStreaming: true,
    };

    setMessages(prev => [...prev, assistantMessage]);

    try {
      // Send message to backend for streaming WITH TOOLS
      const response = await fetch('http://localhost:3001/api/chat-tools/message/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          threadId: currentThreadId,
          message: messageContent,
          model: selectedModel,
          vectorDbId: selectedVectorDb,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || `HTTP ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      // Process SSE stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

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
            const data = JSON.parse(dataStr);

            if (data.type === 'context') {
              // Update context
              setMessages(prev => prev.map(msg =>
                msg.id === assistantMessageId
                  ? { ...msg, context: data.context }
                  : msg
              ));
            } else if (data.type === 'tool_call') {
              // AI is calling a tool
              console.log('Tool call:', data.tool_name, data.tool_args);
              setMessages(prev => prev.map(msg =>
                msg.id === assistantMessageId
                  ? {
                      ...msg,
                      toolCalls: [...(msg.toolCalls || []), {
                        name: data.tool_name,
                        args: data.tool_args
                      }]
                    }
                  : msg
              ));
            } else if (data.type === 'tool_result') {
              // Tool execution result
              console.log('Tool result:', data.tool_name, data.result);
            } else if (data.type === 'content') {
              // Append content chunk (regular text, reasoning, or reasoning summary)
              const content = data.content || '';
              const metadata = data.metadata || {};

              setMessages(prev => prev.map(msg => {
                if (msg.id !== assistantMessageId) return msg;

                const blocks = [...msg.contentBlocks];
                let currentReasoning = msg.currentReasoningBlock;

                if (metadata.type === 'thinking') {
                  // Start or continue reasoning block
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
                      // Create new block object instead of mutating
                      blocks[blocks.length - 1] = {
                        ...lastBlock,
                        content: lastBlock.content + content
                      };
                    }
                  }
                  return { ...msg, contentBlocks: blocks, currentReasoningBlock: currentReasoning };
                } else if (metadata.type === 'thinking_summary') {
                  // Reasoning summary
                  const lastBlock = blocks[blocks.length - 1];
                  if (lastBlock && lastBlock.type === 'reasoning_summary') {
                    // Create new block object instead of mutating
                    blocks[blocks.length - 1] = {
                      ...lastBlock,
                      content: lastBlock.content + content
                    };
                  } else {
                    blocks.push({ type: 'reasoning_summary', content });
                  }
                  return { ...msg, contentBlocks: blocks };
                } else {
                  // Regular text content
                  // Close current reasoning block if any
                  if (currentReasoning) {
                    const lastBlock = blocks[blocks.length - 1];
                    if (lastBlock.type === 'reasoning') {
                      // Create new block object instead of mutating
                      blocks[blocks.length - 1] = {
                        ...lastBlock,
                        endTime: Date.now()
                      };
                    }
                    currentReasoning = null;
                  }

                  const lastBlock = blocks[blocks.length - 1];
                  if (lastBlock && lastBlock.type === 'text') {
                    // Create new block object instead of mutating
                    blocks[blocks.length - 1] = {
                      ...lastBlock,
                      content: lastBlock.content + content
                    };
                  } else {
                    blocks.push({ type: 'text', content });
                  }

                  // Also update legacy content field for backward compatibility
                  return {
                    ...msg,
                    content: msg.content + content,
                    contentBlocks: blocks,
                    currentReasoningBlock: currentReasoning
                  };
                }
              }));
            } else if (data.type === 'rate_limit_wait') {
              // Show rate limit info (optional: display to user)
              console.log(`Rate limited. Waiting ${data.waitTimeSec}s (attempt ${data.attemptNumber}/${data.maxRetries})...`);
            } else if (data.type === 'done') {
              // Mark streaming as complete and finalize any open reasoning blocks
              setMessages(prev => prev.map(msg => {
                if (msg.id !== assistantMessageId) return msg;

                const blocks = [...msg.contentBlocks];
                if (msg.currentReasoningBlock) {
                  const lastBlock = blocks[blocks.length - 1];
                  if (lastBlock && lastBlock.type === 'reasoning' && !lastBlock.endTime) {
                    // Create new block object instead of mutating
                    blocks[blocks.length - 1] = {
                      ...lastBlock,
                      endTime: Date.now()
                    };
                  }
                }

                return { ...msg, isStreaming: false, currentReasoningBlock: null, contentBlocks: blocks };
              }));
            } else if (data.type === 'error') {
              throw new Error(data.error);
            }
          } catch (e) {
            if (e.message && !e.message.includes('JSON')) {
              throw e;
            }
            console.warn('Failed to parse SSE data:', dataStr);
          }
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);

      // Update the assistant message with error
      setMessages(prev => prev.map(msg =>
        msg.id === assistantMessageId
          ? {
              ...msg,
              content: 'Sorry, I encountered an error while processing your request.\n\nError: ' + error.message,
              isError: true,
              isStreaming: false,
            }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const currentModel = availableModels.find(m => m.id === selectedModel);

  return (
    <div className="chat-interface">
      <div className="chat-top-bar">
        <div className="chat-top-left">
          <ChatThreadSelector
            threads={chatThreads}
            currentThreadId={currentThreadId}
            onThreadSelect={(id) => {
              setCurrentThreadId(id);
              loadChatHistory(id);
            }}
            onNewThread={createNewThread}
            onDeleteThread={deleteThread}
          />

          <VectorDbSelector
            vectorDbs={vectorDbs}
            selectedVectorDb={selectedVectorDb}
            onVectorDbSelect={handleVectorDbSelect}
            onLoadFromDisk={handleLoadFromDisk}
            dbStatus={vectorDbStatus}
          />
        </div>

        <div className="chat-top-right">
          <div className="status-indicators">
            <div className="vector-db-status">
              <div className={`status-dot ${vectorDbStatus}`} />
              <span className={`status-text ${vectorDbStatus}`}>Vector DB</span>
            </div>

            <div className="server-status">
              <div className={`status-dot ${serverStatus}`} />
              <span className={`status-text ${serverStatus}`}>Server</span>
            </div>
          </div>

          <button
            className="settings-btn"
            onClick={() => setIsSettingsOpen(true)}
            title="Settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-welcome">
            <h2>Welcome to RAGy Chat</h2>
            <p>
              {selectedVectorDb
                ? "Ask questions about your documents and I'll help you find answers using the knowledge base."
                : "Chat with AI directly, or select a vector database to query your documents."}
            </p>
            {!selectedVectorDb && vectorDbs.length > 0 && (
              <p className="info-text">
                Select a vector database from the dropdown above to enable document search.
              </p>
            )}
            {vectorDbs.length === 0 && (
              <p className="info-text">
                To enable document search, create a vector database in the RAG System or load one from disk.
              </p>
            )}
          </div>
        )}

        {messages.map(message => {
          // Use new contentBlocks structure or fall back to legacy fields
          const hasContentBlocks = message.contentBlocks && message.contentBlocks.length > 0;

          return (
          <div
            key={message.id}
            className={`chat-message ${message.role}`}
            data-streaming={message.isStreaming ? 'true' : 'false'}
          >
            {message.role === 'user' ? (
              /* User messages */
              <div className="message-content">
                {message.content}
              </div>
            ) : hasContentBlocks ? (
              /* New structured content blocks */
              message.contentBlocks.map((block, idx) => {
                if (block.type === 'reasoning') {
                  const isStreaming = message.isStreaming && idx === message.contentBlocks.length - 1 && !block.endTime;

                  if (isStreaming) {
                    // While streaming: show as plain grey text with "Thinking" label
                    return (
                      <div key={idx} className="message-thinking streaming">
                        <div className="thinking-label">Thinking</div>
                        <div className="thinking-text">
                          <ReactMarkdown>{formatThinkingText(block.content)}</ReactMarkdown>
                          <span className="streaming-cursor">▊</span>
                        </div>
                      </div>
                    );
                  } else {
                    // When complete: show collapsed with chevron
                    return (
                      <div key={idx} className="message-thinking">
                        <details>
                          <summary>
                            <span>Thinking</span>
                            <span className="thinking-chevron">▾</span>
                          </summary>
                          <div className="thinking-content">
                            <ReactMarkdown>{formatThinkingText(block.content)}</ReactMarkdown>
                          </div>
                        </details>
                      </div>
                    );
                  }
                } else if (block.type === 'reasoning_summary') {
                  // Don't render summary blocks - hide them
                  return null;
                } else if (block.type === 'text') {
                  return (
                    <div key={idx} className="message-content">
                      <ReactMarkdown>{block.content}</ReactMarkdown>
                    </div>
                  );
                }
                return null;
              })
            ) : (
              /* Legacy fallback for old messages */
              <>
                {message.thinking && (
                  <div className="message-thinking">
                    <details>
                      <summary>
                        <span>Thinking</span>
                        <span className="thinking-chevron">▾</span>
                      </summary>
                      <div className="thinking-content">
                        {message.thinking}
                      </div>
                    </details>
                  </div>
                )}

                <div className="message-content">
                  <ReactMarkdown>{message.content || ''}</ReactMarkdown>
                </div>
              </>
            )}

            {/* RAG Context - Only show if context exists (for future tool-based search) */}
            {message.context && message.context.length > 0 && (
              <div className="message-context">
                <details>
                  <summary>View source context ({message.context.length} chunks)</summary>
                  <div className="context-list">
                    {message.context.map((ctx, idx) => (
                      <div key={idx} className="context-item">
                        <div className="context-metadata">
                          <span className="context-source">{ctx.source}</span>
                          <span className="context-similarity">
                            Similarity: {(ctx.similarity * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="context-text">{ctx.text}</div>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            )}
            <div className="message-timestamp">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
          );
        })}

        {/* Loading dots removed - streaming message shows progress */}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <textarea
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={selectedVectorDb ? "Ask a question about your documents..." : "Ask me anything..."}
          rows={1}
          disabled={isLoading}
        />

        <div className="chat-input-actions">
          <div className="model-selector" ref={modelSelectorRef}>
            <button
              className="model-selector-btn"
              onClick={() => setIsModelSelectorOpen(!isModelSelectorOpen)}
              disabled={isLoading}
            >
              <span className="model-name">{currentModel?.name}</span>
              <ChevronDown size={16} />
            </button>

            {isModelSelectorOpen && (
              <div className="model-dropdown">
                {availableModels.map(model => (
                  <button
                    key={model.id}
                    className={`model-option ${selectedModel === model.id ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedModel(model.id);
                      setIsModelSelectorOpen(false);
                    }}
                  >
                    <span className="model-option-name">{model.name}</span>
                    <span className="model-option-provider">{model.provider}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="send-btn"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatInterface;
