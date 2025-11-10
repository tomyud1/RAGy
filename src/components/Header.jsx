import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

function Header({ currentProject, onBackToProjects }) {
  const [serverStatus, setServerStatus] = useState('checking'); // 'online', 'offline', 'checking'

  useEffect(() => {
    // Check server status immediately
    checkServerStatus();

    // Check every 5 seconds
    const interval = setInterval(checkServerStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch('/api/health', { 
        method: 'GET',
        // Timeout after 3 seconds
        signal: AbortSignal.timeout(3000)
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

  return (
    <header style={{
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border)',
      padding: '1.25rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      boxShadow: '0 2px 8px var(--shadow)',
      position: 'relative',
    }}>
      {currentProject && (
        <button
          onClick={onBackToProjects}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s',
            position: 'absolute',
            left: '2rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--bg-tertiary)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <ArrowLeft size={20} />
        </button>
      )}
      
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          RAGy - Powerful RAG System
        </h1>
        {currentProject && (
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {currentProject.name}
          </p>
        )}
      </div>

      {/* Server Status Indicator */}
      <div style={{
        position: 'absolute',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        background: serverStatus === 'online' ? 'rgba(34, 197, 94, 0.1)' : 
                    serverStatus === 'offline' ? 'rgba(239, 68, 68, 0.1)' : 
                    'rgba(156, 163, 175, 0.1)',
        border: serverStatus === 'online' ? '1px solid rgba(34, 197, 94, 0.3)' : 
                serverStatus === 'offline' ? '1px solid rgba(239, 68, 68, 0.3)' : 
                '1px solid rgba(156, 163, 175, 0.3)',
        borderRadius: '6px',
        fontSize: '0.875rem',
        fontWeight: '600',
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: serverStatus === 'online' ? 'rgb(34, 197, 94)' : 
                     serverStatus === 'offline' ? 'rgb(239, 68, 68)' : 
                     'rgb(156, 163, 175)',
          boxShadow: serverStatus === 'online' ? '0 0 8px rgba(34, 197, 94, 0.5)' : 
                     serverStatus === 'offline' ? '0 0 8px rgba(239, 68, 68, 0.5)' : 
                     'none',
          animation: serverStatus === 'checking' ? 'pulse 2s ease-in-out infinite' : 'none',
        }} />
        <span style={{
          color: serverStatus === 'online' ? 'rgb(34, 197, 94)' : 
                 serverStatus === 'offline' ? 'rgb(239, 68, 68)' : 
                 'var(--text-secondary)',
        }}>
          Server
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </header>
  );
}

export default Header;

