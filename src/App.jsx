import React, { useState, useEffect } from 'react';
import ProjectSelector from './components/ProjectSelector';
import MainLayout from './components/MainLayout';
import UpdateNotification from './components/UpdateNotification';
import { API_BASE } from './constants/api';

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
      const response = await fetch(`${API_BASE}/api/projects`);
      
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
        const response = await fetch(`${API_BASE}/api/projects/${savedProjectId}`);
        
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
      const response = await fetch(`${API_BASE}/api/projects`, {
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
    <div style={{ minHeight: '100vh' }}>
      {/* Auto-update notification */}
      <UpdateNotification />
      
      {isLoadingProject ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: 'var(--text-secondary)',
        }}>
          <div style={{ fontSize: '1rem' }}>Loading...</div>
        </div>
      ) : !currentProject ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '3rem 2rem',
        }}>
          <ProjectSelector
            projects={projects}
            onSelectProject={selectProject}
            onCreateProject={createProject}
          />
        </div>
      ) : (
        <MainLayout
          project={currentProject}
          onBackToProjects={goBackToProjects}
          onProjectUpdate={loadProjects}
        />
      )}
    </div>
  );
}

export default App;

