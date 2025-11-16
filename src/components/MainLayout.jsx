import { useState, useEffect } from 'react';
import CollapsableSidebar from './CollapsableSidebar';
import ChatInterface from './chat/ChatInterface';
import RAGSystemApp from './RAGSystemApp';
import './MainLayout.css';

const MainLayout = ({ project, onBackToProjects, onProjectUpdate }) => {
  // Persist active app to localStorage
  const [activeApp, setActiveApp] = useState(() => {
    const saved = localStorage.getItem('ragy_active_app');
    return saved || 'chat'; // Default to 'chat' if nothing saved
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Save active app to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('ragy_active_app', activeApp);
  }, [activeApp]);

  return (
    <div className="main-layout">
      <CollapsableSidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        activeApp={activeApp}
        onAppChange={setActiveApp}
        project={project}
        onBackToProjects={onBackToProjects}
      />

      <div className="main-content">
        {activeApp === 'chat' ? (
          <ChatInterface
            project={project}
            onProjectUpdate={onProjectUpdate}
          />
        ) : (
          <RAGSystemApp
            project={project}
            onProjectUpdate={onProjectUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
