import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

export function PaddleOCRConfig({ batchSize, setBatchSize }) {
  return (
    <>
      {/* Info Box: PaddleOCR-VL Features */}
      <div style={{
        padding: '0.75rem',
        background: 'var(--bg-primary)',
        borderRadius: '8px',
        border: '1px solid var(--accent-primary)',
        marginBottom: '0.75rem',
      }}>
        <div style={{
          fontSize: '0.875rem',
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          fontWeight: '600',
        }}>
          🔍 PaddleOCR-VL Quality Settings (Always Enabled)
        </div>
        <ul style={{
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          margin: 0,
          paddingLeft: '1.5rem',
          lineHeight: '1.6',
        }}>
          <li>Page orientation detection and correction</li>
          <li>Document unwarping for scanned pages</li>
          <li>Layout detection (headings, paragraphs, lists)</li>
          <li>Chart and diagram recognition</li>
          <li>Content block formatting</li>
        </ul>
      </div>

      {/* Batch Size Configuration */}
      <div style={{
        padding: '0.75rem',
        background: 'var(--bg-primary)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
      }}>
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          marginBottom: '0.4rem',
          color: 'var(--text-secondary)',
        }}>
          Pages per Batch
          <Tooltip text="Number of pages to process before clearing GPU memory. Lower values use less RAM but are slightly slower. Recommended: 5 pages for most systems, 3 for low RAM (8GB), 10 for high RAM (32GB+).">
            <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
          </Tooltip>
        </label>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
          {[
            { value: 3, label: '3 (Low RAM)' },
            { value: 5, label: '5 (Default)' },
            { value: 10, label: '10 (High RAM)' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={(e) => { e.stopPropagation(); setBatchSize(value); }}
              style={{
                padding: '0.4rem 0.75rem',
                background: batchSize === value ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {label}
            </button>
          ))}
          <input
            type="number"
            min="1"
            max="20"
            value={batchSize}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setBatchSize(parseInt(e.target.value) || 5)}
            style={{
              width: '60px',
              padding: '0.4rem 0.5rem',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              textAlign: 'center',
              fontFamily: 'inherit',
            }}
          />
        </div>
        <div style={{
          fontSize: '0.65rem',
          color: 'var(--text-tertiary)',
          marginTop: '0.5rem',
        }}>
          <span style={{
            padding: '0.125rem 0.5rem',
            background: batchSize <= 5 ? 'rgba(34, 197, 94, 0.2)' : batchSize <= 10 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            color: batchSize <= 5 ? 'rgb(34, 197, 94)' : batchSize <= 10 ? 'rgb(251, 146, 60)' : 'rgb(239, 68, 68)',
            borderRadius: '4px',
            fontSize: '0.65rem',
            fontWeight: '600',
          }}>
            {batchSize <= 5 ? '🟢 Safe' : batchSize <= 10 ? '🟡 Moderate' : '🔴 High RAM'}
          </span>
          {' '}Default: 5 • Recommended: 3-10
        </div>
      </div>

      {/* Hardware Detection Note */}
      <div style={{
        padding: '0.75rem',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        marginTop: '0.75rem',
      }}>
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
        }}>
          💡 <strong>Hardware Auto-Detection:</strong> PaddleOCR-VL will automatically detect and use your GPU (NVIDIA CUDA) if available. Processing speed: ~30s/page with GPU, ~60s/page with CPU.
        </div>
      </div>
    </>
  );
}
