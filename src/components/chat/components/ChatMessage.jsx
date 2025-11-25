import ReactMarkdown from 'react-markdown';

// Helper to format thinking text
const formatThinkingText = (text) => {
  if (!text) return '';
  return text.replace(/([^\n])\*\*(\w)/g, '$1\n\n**$2');
};

/**
 * Single chat message component
 */
export function ChatMessage({ message }) {
  const hasContentBlocks = message.contentBlocks && message.contentBlocks.length > 0;

  return (
    <div
      className={`chat-message ${message.role}`}
      data-streaming={message.isStreaming ? 'true' : 'false'}
    >
      {message.role === 'user' ? (
        <div className="message-content">
          {message.content}
        </div>
      ) : hasContentBlocks ? (
        message.contentBlocks.map((block, idx) => {
          if (block.type === 'reasoning') {
            const isStreaming = message.isStreaming && idx === message.contentBlocks.length - 1 && !block.endTime;

            if (isStreaming) {
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

      {/* RAG Context */}
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
}

