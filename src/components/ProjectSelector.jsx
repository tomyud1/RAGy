import React, { useState } from 'react';
import { Plus, FolderOpen, Calendar, Trash2 } from 'lucide-react';

function ProjectSelector({ projects, onSelectProject, onCreateProject }) {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [deletingProjectId, setDeletingProjectId] = useState(null);

  const handleCreate = () => {
    if (newProjectName.trim()) {
      onCreateProject(newProjectName.trim());
      setNewProjectName('');
      setShowCreateForm(false);
    }
  };

  const handleDeleteProject = async (e, projectId) => {
    e.stopPropagation(); // Prevent card click
    
    if (!window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }
    
    setDeletingProjectId(projectId);
    
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Reload projects after deletion
        window.location.reload();
      } else {
        alert('Failed to delete project');
      }
    } catch (error) {
      console.error('Failed to delete project:', error);
      alert('Failed to delete project');
    } finally {
      setDeletingProjectId(null);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }} className="animate-fade-in">
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>
          Your RAG Projects
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
          Create a new project or select an existing one to continue
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Create New Project Card */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '2px dashed var(--border)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px',
            minWidth: '320px',
            boxShadow: '0 4px 6px var(--shadow)',
          }}
          onClick={() => setShowCreateForm(true)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.background = 'var(--bg-tertiary)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 12px 24px var(--shadow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'var(--bg-secondary)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px var(--shadow)';
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}>
            <Plus size={40} style={{ color: 'var(--accent-primary)' }} />
          </div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Create New Project</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Start your RAG journey</p>
        </div>

        {/* Existing Projects */}
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minHeight: '260px',
              minWidth: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 6px var(--shadow)',
              position: 'relative',
              opacity: deletingProjectId === project.id ? 0.5 : 1,
            }}
            onClick={() => onSelectProject(project)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px var(--shadow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px var(--shadow)';
            }}
          >
            {/* Delete Button */}
            <button
              onClick={(e) => handleDeleteProject(e, project.id)}
              disabled={deletingProjectId === project.id}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: deletingProjectId === project.id ? 'not-allowed' : 'pointer',
                padding: '0.5rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (deletingProjectId !== project.id) {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--error)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Trash2 size={18} />
            </button>

            {/* Project Icon */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
            }}>
              <FolderOpen size={32} style={{ color: 'var(--accent-primary)' }} />
            </div>

            {/* Project Name */}
            <h3 style={{ fontSize: '1.375rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              {project.name}
            </h3>
            
            {/* Created Date */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.875rem',
              marginBottom: '1rem',
            }}>
              <Calendar size={14} />
              <span>Created {new Date(project.createdAt).toLocaleDateString()}</span>
            </div>
            
            {/* Stats */}
            {project.stats && (
              <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                fontSize: '0.875rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--bg-primary)',
                borderRadius: '8px',
              }}>
                <span style={{ color: 'var(--text-secondary)' }}>
                  Files: <strong style={{ color: 'var(--text-primary)' }}>{project.stats.fileCount || 0}</strong>
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>
                  VectorDBs: <strong style={{ color: 'var(--text-primary)' }}>{project.stats.vectorDbCount || 0}</strong>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Create Project Modal */}
      {showCreateForm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowCreateForm(false)}
        >
          <div
            style={{
              background: 'var(--bg-secondary)',
              borderRadius: '12px',
              padding: '2rem',
              width: '100%',
              maxWidth: '500px',
              border: '1px solid var(--border)',
            }}
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in"
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Create New Project
            </h3>
            <input
              type="text"
              placeholder="Project name (e.g., Heat Transfer Textbook)"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCreate()}
              autoFocus
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                marginBottom: '1.5rem',
              }}
            />
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowCreateForm(false)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--bg-tertiary)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: '500',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={!newProjectName.trim()}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: newProjectName.trim() ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  cursor: newProjectName.trim() ? 'pointer' : 'not-allowed',
                  fontWeight: '500',
                }}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectSelector;

