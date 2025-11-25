import React from 'react';
import { Loader, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

export function StatusBanner({ jobStatus, existingJob, onRetry }) {
  if (jobStatus === 'checking') {
    return (
      <div style={{
        padding: '1rem',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <Loader size={20} className="animate-spin" style={{ color: 'rgb(59, 130, 246)' }} />
        <div>
          <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Checking for existing chunking job...</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Please wait while we check if chunking was already in progress
          </div>
        </div>
      </div>
    );
  }

  if (jobStatus === 'resuming') {
    return (
      <div style={{
        padding: '1rem',
        background: 'rgba(234, 179, 8, 0.1)',
        border: '1px solid rgba(234, 179, 8, 0.3)',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <RefreshCw size={20} className="animate-spin" style={{ color: 'rgb(234, 179, 8)' }} />
        <div>
          <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Resuming chunking process...</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Reconnecting to your in-progress chunking job
          </div>
        </div>
      </div>
    );
  }

  if (jobStatus === 'completed') {
    return (
      <div style={{
        padding: '1rem',
        background: 'rgba(34, 197, 94, 0.1)',
        border: '1px solid rgba(34, 197, 94, 0.3)',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <CheckCircle size={20} style={{ color: 'rgb(34, 197, 94)' }} />
        <div>
          <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Chunking completed successfully!</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Your documents have been chunked. Proceeding to next step...
          </div>
        </div>
      </div>
    );
  }

  if (jobStatus === 'failed') {
    return (
      <div style={{
        padding: '1rem',
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '8px',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <AlertTriangle size={20} style={{ color: 'rgb(239, 68, 68)' }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Chunking failed</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {existingJob?.error || 'The previous chunking process failed. You can try again.'}
          </div>
        </div>
        <button
          onClick={onRetry}
          style={{
            padding: '0.5rem 1rem',
            background: 'var(--accent-primary)',
            border: 'none',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return null;
}
