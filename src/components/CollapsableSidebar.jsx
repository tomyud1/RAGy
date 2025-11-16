import { ChevronLeft, ChevronRight, MessageSquare, Database, Home } from 'lucide-react';
import './CollapsableSidebar.css';

const CollapsableSidebar = ({
  isOpen,
  onToggle,
  activeApp,
  onAppChange,
  project,
  onBackToProjects
}) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button
            className="sidebar-back-btn"
            onClick={onBackToProjects}
            title="Back to Projects"
          >
            <Home size={20} />
          </button>
          <h3 className="sidebar-project-name">{project.name}</h3>
        </div>

        <div className="sidebar-apps">
          <button
            className={`sidebar-app-btn ${activeApp === 'chat' ? 'active' : ''}`}
            onClick={() => onAppChange('chat')}
          >
            <MessageSquare size={20} />
            <span>Chat</span>
          </button>

          <button
            className={`sidebar-app-btn ${activeApp === 'rag' ? 'active' : ''}`}
            onClick={() => onAppChange('rag')}
          >
            <Database size={20} />
            <span>RAG System</span>
          </button>
        </div>

        <button
          className="sidebar-toggle-btn"
          onClick={onToggle}
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {!isOpen && (
        <button
          className="sidebar-open-btn"
          onClick={onToggle}
          title="Open Sidebar"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </>
  );
};

export default CollapsableSidebar;
