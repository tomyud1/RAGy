import { useState, useRef, useEffect } from 'react';
import { Plus, ChevronDown, Trash2, MessageSquare } from 'lucide-react';
import './ChatThreadSelector.css';

const ChatThreadSelector = ({
  threads,
  currentThreadId,
  onThreadSelect,
  onNewThread,
  onDeleteThread,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentThread = threads.find(t => t.id === currentThreadId);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="thread-selector" ref={dropdownRef}>
      <button
        className="thread-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare size={16} />
        <span>{currentThread?.name || 'Select Chat'}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="thread-dropdown">
          <div className="thread-dropdown-header">
            <span>Chat Threads</span>
            <button
              className="new-thread-btn"
              onClick={onNewThread}
              title="New Thread"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="thread-list">
            {threads.length === 0 ? (
              <div className="thread-empty">No chat threads yet</div>
            ) : (
              threads.map(thread => (
                <div
                  key={thread.id}
                  className={`thread-item ${thread.id === currentThreadId ? 'active' : ''}`}
                >
                  <button
                    className="thread-item-btn"
                    onClick={() => {
                      onThreadSelect(thread.id);
                      setIsOpen(false);
                    }}
                  >
                    <MessageSquare size={14} />
                    <span className="thread-name">{thread.name}</span>
                    <span className="thread-count">
                      {thread.messageCount || 0} messages
                    </span>
                  </button>

                  <button
                    className="thread-delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm('Delete this chat thread?')) {
                        onDeleteThread(thread.id);
                      }
                    }}
                    title="Delete Thread"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatThreadSelector;
