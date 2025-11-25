import React from 'react';
import { Loader, AlertTriangle } from 'lucide-react';
import { TEXT_SIZES, FONT_WEIGHTS } from '../../../../constants/ui';

export function ActionButtons({
  onBack,
  chunking,
  stopping,
  onStop,
  jobStatus,
  processingSummary,
  onComplete,
  onStartChunking,
  onChunkAgain,
  existingJob,
  selectedMethod,
  project
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
      <button
        onClick={onBack}
        disabled={chunking}
        style={{
          padding: '0.875rem 2rem',
          background: 'var(--bg-tertiary)',
          border: 'none',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          fontWeight: FONT_WEIGHTS.semibold,
          fontSize: TEXT_SIZES.buttonLarge,
          cursor: chunking ? 'not-allowed' : 'pointer',
          opacity: chunking ? 0.5 : 1,
        }}
      >
        Back
      </button>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Stop Button - only show when chunking */}
        {chunking && !stopping && (
          <button
            onClick={onStop}
            style={{
              padding: '0.875rem 1.5rem',
              background: 'linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38))',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: FONT_WEIGHTS.semibold,
              fontSize: TEXT_SIZES.buttonLarge,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgb(220, 38, 38), rgb(185, 28, 28))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38))';
            }}
          >
            <AlertTriangle size={18} />
            Stop Processing
          </button>
        )}

        {stopping && (
          <div style={{
            padding: '0.875rem 1.5rem',
            background: 'var(--bg-tertiary)',
            borderRadius: '8px',
            color: 'var(--text-secondary)',
            fontSize: TEXT_SIZES.buttonLarge,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Loader size={18} className="animate-spin" />
            Terminating process...
          </div>
        )}

        {/* Open Folder Button - show when completed */}
        {jobStatus === 'completed' && (
          <>
            <button
              onClick={async () => {
                try {
                  const response = await fetch(`/api/projects/${project.id}/open-chunks-folder`);
                  const data = await response.json();
                  if (!data.success) {
                    alert('Failed to open folder: ' + data.error);
                  }
                } catch (error) {
                  alert('Failed to open folder: ' + error.message);
                }
              }}
              style={{
                padding: '0.875rem 1.5rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-tertiary)';
              }}
            >
              📂 Open Chunks Folder
            </button>

            {/* Chunk Again Button - show when completed */}
            <button
              onClick={onChunkAgain}
              style={{
                padding: '0.875rem 1.5rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-tertiary)';
              }}
            >
              🔄 Chunk Again
            </button>
          </>
        )}

        {(jobStatus === 'completed' || processingSummary) ? (
          <button
            onClick={() => onComplete({
              chunkingMethod: existingJob?.method || selectedMethod,
              chunks: existingJob?.chunks || { chunks: [] }
            })}
            style={{
              padding: '0.875rem 2rem',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontWeight: FONT_WEIGHTS.semibold,
              fontSize: TEXT_SIZES.buttonLarge,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-primary)';
            }}
          >
            Next: Preview Chunks
          </button>
        ) : (
          <button
            onClick={() => onStartChunking(false)}
            disabled={chunking}
            style={{
              padding: '0.875rem 2rem',
              background: chunking ? 'var(--bg-tertiary)' : 'var(--accent-primary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontWeight: FONT_WEIGHTS.semibold,
              fontSize: TEXT_SIZES.buttonLarge,
              cursor: chunking ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!chunking) {
                e.currentTarget.style.background = 'var(--accent-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (!chunking) {
                e.currentTarget.style.background = 'var(--accent-primary)';
              }
            }}
          >
            {chunking && <Loader size={20} className="animate-spin" />}
            {chunking ? 'Chunking Documents...' : 'Start Chunking'}
          </button>
        )}
      </div>
    </div>
  );
}
