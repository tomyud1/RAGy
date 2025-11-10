import React, { useState, useEffect } from 'react';
import ProjectSelector from './components/ProjectSelector';
import ProjectWorkspace from './components/ProjectWorkspace';
import Header from './components/Header';

function App() {
  const [currentProject, setCurrentProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoadingProject, setIsLoadingProject] = useState(true);

  useEffect(() => {
    loadProjects();
    restoreCurrentProject();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      
      if (!response.ok) {
        console.error('Failed to load projects:', response.status);
        return;
      }
      
      const data = await response.json();
      console.log('Projects loaded:', data);
      setProjects(data.projects || []);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  };

  const restoreCurrentProject = async () => {
    try {
      const savedProjectId = localStorage.getItem('currentProjectId');
      
      if (savedProjectId) {
        console.log('Restoring project:', savedProjectId);
        const response = await fetch(`/api/projects/${savedProjectId}`);
        
        if (response.ok) {
          const project = await response.json();
          setCurrentProject(project);
          console.log('Project restored:', project);
        } else {
          // Project not found or error, clear localStorage
          console.log('Project not found, clearing localStorage');
          localStorage.removeItem('currentProjectId');
        }
      }
    } catch (error) {
      console.error('Failed to restore project:', error);
      localStorage.removeItem('currentProjectId');
    } finally {
      setIsLoadingProject(false);
    }
  };

  const createProject = async (projectName) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: projectName }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        alert(`Failed to create project: ${response.status} ${errorText}`);
        return;
      }
      
      const data = await response.json();
      console.log('Project created:', data);
      
      if (data.project) {
        setProjects([...projects, data.project]);
        setCurrentProject(data.project);
        // Save to localStorage
        localStorage.setItem('currentProjectId', data.project.id);
      } else {
        console.error('No project in response:', data);
        alert('Failed to create project: Invalid response');
      }
    } catch (error) {
      console.error('Failed to create project:', error);
      alert(`Failed to create project: ${error.message}`);
    }
  };

  const selectProject = (project) => {
    setCurrentProject(project);
    // Save to localStorage
    localStorage.setItem('currentProjectId', project.id);
  };

  const goBackToProjects = () => {
    setCurrentProject(null);
    // Clear from localStorage
    localStorage.removeItem('currentProjectId');
    loadProjects();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header currentProject={currentProject} onBackToProjects={goBackToProjects} />
      
      <main style={{ 
        flex: 1, 
        padding: '3rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: currentProject ? 'flex-start' : 'center',
        minHeight: 'calc(100vh - 80px)',
      }}>
        {isLoadingProject ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            <div style={{ fontSize: '1rem' }}>Loading...</div>
          </div>
        ) : !currentProject ? (
          <ProjectSelector
            projects={projects}
            onSelectProject={selectProject}
            onCreateProject={createProject}
          />
        ) : (
          <ProjectWorkspace
            project={currentProject}
            onProjectUpdate={loadProjects}
          />
        )}
      </main>
    </div>
  );
}

export default App;

