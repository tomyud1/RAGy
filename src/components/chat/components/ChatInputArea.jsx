import { Send, ChevronDown } from 'lucide-react';

/**
 * Chat input area with model selector
 */
export function ChatInputArea({
  input,
  setInput,
  onSend,
  isLoading,
  selectedVectorDb,
  currentModel,
  availableModels,
  selectedModel,
  isModelSelectorOpen,
  setIsModelSelectorOpen,
  onSelectModel,
  modelSelectorRef,
}) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
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
                  onClick={() => onSelectModel(model.id)}
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
          onClick={onSend}
          disabled={!input.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

