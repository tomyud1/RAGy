import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import ProjectWorkspace from './ProjectWorkspace';
import SettingsModal from './chat/SettingsModal';
import './RAGSystemApp.css';

const RAGSystemApp = ({ project, onProjectUpdate }) => {
  const [serverStatus, setServerStatus] = useState('checking');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  return (
    <div className="rag-system-app">
      <div className="rag-top-bar">
        <div className="rag-top-title">
          <h2>RAG System <span className="project-name-inline">- {project.name}</span></h2>
        </div>

        <div className="rag-top-right">
          <div className="server-status">
            <div className={`server-status-dot ${serverStatus}`} />
            <span className={`server-status-text ${serverStatus}`}>Server</span>
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

      <div className="rag-workspace-container">
        <ProjectWorkspace
          project={project}
          onProjectUpdate={onProjectUpdate}
        />
      </div>

      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
};

export default RAGSystemApp;
