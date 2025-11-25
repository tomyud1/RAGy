import React from 'react';
import { RefreshCw } from 'lucide-react';

export function ResumeOption({ showResumeOption, chunking, resumableProgress, onResume, onStartFresh }) {
  if (!showResumeOption || chunking) return null;

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))',
      border: '2px solid rgb(168, 85, 247)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginTop: '1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <RefreshCw size={28} style={{ color: 'rgb(168, 85, 247)' }} />
        <div>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
            Resume Previous Processing
          </h3>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Found incomplete chunking process with {resumableProgress?.completedParts || 0} parts completed ({Math.round(resumableProgress?.ageHours || 0)} hours ago)
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={onResume}
          style={{
            flex: '1',
            padding: '0.75rem 1.5rem',
            background: 'rgb(168, 85, 247)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(147, 51, 234)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
        >
          <RefreshCw size={18} />
          Resume Processing
        </button>

        <button
          onClick={onStartFresh}
          style={{
            flex: '1',
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
        >
          Start Fresh
        </button>
      </div>
    </div>
  );
}
