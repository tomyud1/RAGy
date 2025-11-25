import { useState, useEffect, useRef, useCallback } from 'react';
import SettingsModal from './SettingsModal';
import ChatThreadSelector from './ChatThreadSelector';
import VectorDbSelector from './VectorDbSelector';
import './ChatInterface.css';

// Import custom hooks
import {
  useChatThreads,
  useChatMessages,
  useVectorDb,
  useServerStatus,
  useModelSelector,
} from './hooks';

// Import components
import {
  ChatMessage,
  ChatInputArea,
  ChatWelcome,
  StatusIndicators,
} from './components';

const ChatInterface = ({ project, onProjectUpdate }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Custom hooks
  const serverStatus = useServerStatus();
  const {
    selectedModel,
    currentModel,
    isModelSelectorOpen,
    setIsModelSelectorOpen,
    modelSelectorRef,
    selectModel,
    availableModels,
  } = useModelSelector();

  const {
    vectorDbs,
    selectedVectorDb,
    vectorDbStatus,
    handleVectorDbSelect,
    handleLoadFromDisk,
  } = useVectorDb(project.id);

  const {
    chatThreads,
    currentThreadId,
    setCurrentThreadId,
    loadChatHistory,
    createNewThread,
    deleteThread,
    loadThreads,
  } = useChatThreads(project.id);

  const {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    addUserMessage,
    createAssistantPlaceholder,
    handleStreamEvent,
    setError,
  } = useChatMessages();

  // Load chat threads on mount
  useEffect(() => {
    const initializeThreads = async () => {
      const result = await loadThreads();
      if (result.needsNewThread) {
        await createNewThread();
      } else if (result.selectedId) {
        const history = await loadChatHistory(result.selectedId);
        setMessages(history);
      }
    };
    initializeThreads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle thread selection
  const handleThreadSelect = useCallback(async (id) => {
    setCurrentThreadId(id);
    const history = await loadChatHistory(id);
    setMessages(history);
  }, [setCurrentThreadId, loadChatHistory, setMessages]);

  // Handle new thread creation
  const handleNewThread = useCallback(async () => {
    const newThread = await createNewThread();
    if (newThread) {
      setMessages([]);
    }
  }, [createNewThread, setMessages]);

  // Handle sending messages
  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    addUserMessage(input);
    const messageContent = input;
    setInput('');
    setIsLoading(true);

    const assistantMessageId = createAssistantPlaceholder();

    try {
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
            
            if (data.type === 'error') {
              throw new Error(data.error);
            }
            
            handleStreamEvent(assistantMessageId, data);
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
      setError(assistantMessageId, error.message);
    } finally {
      setIsLoading(false);
    }
  }, [
    input, isLoading, project.id, currentThreadId, selectedModel, selectedVectorDb,
    addUserMessage, createAssistantPlaceholder, handleStreamEvent, setError, setIsLoading
  ]);

  return (
    <div className="chat-interface">
      <div className="chat-top-bar">
        <div className="chat-top-left">
          <ChatThreadSelector
            threads={chatThreads}
            currentThreadId={currentThreadId}
            onThreadSelect={handleThreadSelect}
            onNewThread={handleNewThread}
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

        <StatusIndicators
          vectorDbStatus={vectorDbStatus}
          serverStatus={serverStatus}
          onSettingsClick={() => setIsSettingsOpen(true)}
        />
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <ChatWelcome
            selectedVectorDb={selectedVectorDb}
            vectorDbs={vectorDbs}
          />
        )}

        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}

        <div ref={messagesEndRef} />
      </div>

      <ChatInputArea
        input={input}
        setInput={setInput}
        onSend={handleSend}
        isLoading={isLoading}
        selectedVectorDb={selectedVectorDb}
        currentModel={currentModel}
        availableModels={availableModels}
        selectedModel={selectedModel}
        isModelSelectorOpen={isModelSelectorOpen}
        setIsModelSelectorOpen={setIsModelSelectorOpen}
        onSelectModel={selectModel}
        modelSelectorRef={modelSelectorRef}
      />

      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
};

export default ChatInterface;
