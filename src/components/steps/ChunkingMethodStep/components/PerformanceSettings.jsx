import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

export function PerformanceSettings({ state }) {
  const {
    processingBatchSize,
    setProcessingBatchSize,
    visionBatchSize,
    setVisionBatchSize,
    enablePictureDescription,
  } = state;

  return (
    <div style={{
      padding: '0.75rem',
      background: 'var(--bg-primary)',
      borderRadius: '8px',
      border: '1px solid var(--border)',
      marginTop: '0.75rem',
    }}>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        marginBottom: '0.75rem',
        color: 'var(--text-secondary)',
      }}>
        ⚡ Performance Settings
        <Tooltip text="Adjust batch sizes to balance speed vs memory usage. Higher values = faster processing but more RAM needed. For M3 Macs with 16GB+ RAM, you can safely use 8-16. For systems with 8GB RAM, keep at 4-8.">
          <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
        </Tooltip>
      </label>

      {/* OCR/Layout/Table Batch Size */}
      <div style={{
        padding: '0.75rem',
        background: 'var(--bg-secondary)',
        borderRadius: '6px',
        marginBottom: enablePictureDescription ? '0.5rem' : 0,
      }}>
        <label style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.8rem',
          fontWeight: '600',
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
        }}>
          📄 Document Processing Batch Size
          <Tooltip text="Controls how many pages are processed simultaneously for OCR, layout detection, and table extraction. Higher = faster but more RAM.">
            <Info size={12} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
          </Tooltip>
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="range"
            min="1"
            max="32"
            step="1"
            value={processingBatchSize}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setProcessingBatchSize(parseInt(e.target.value))}
            style={{
              flex: 1,
              cursor: 'pointer',
              accentColor: 'var(--accent-primary)',
            }}
          />
          <input
            type="number"
            min="1"
            max="32"
            value={processingBatchSize}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setProcessingBatchSize(parseInt(e.target.value) || 4)}
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{
            padding: '0.125rem 0.5rem',
            background: processingBatchSize <= 4 ? 'rgba(34, 197, 94, 0.2)' : processingBatchSize <= 8 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            color: processingBatchSize <= 4 ? 'rgb(34, 197, 94)' : processingBatchSize <= 8 ? 'rgb(251, 146, 60)' : 'rgb(239, 68, 68)',
            borderRadius: '4px',
            fontSize: '0.65rem',
            fontWeight: '600',
          }}>
            {processingBatchSize <= 4 ? '🟢 Safe' : processingBatchSize <= 8 ? '🟡 Moderate' : '🔴 High RAM'}
          </span>
          Default: 4 • Recommended: 4-8 • High-end: 8-16
        </div>
      </div>

      {/* Vision Model Batch Size - Only show if picture description enabled */}
      {enablePictureDescription && (
        <div style={{
          padding: '0.75rem',
          background: 'var(--bg-secondary)',
          borderRadius: '6px',
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
          }}>
            🤖 Vision Model Batch Size
            <Tooltip text="Controls how many images are processed simultaneously by the AI vision model. Higher = faster but significantly more VRAM/RAM needed.">
              <Info size={12} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
            </Tooltip>
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              type="range"
              min="1"
              max="32"
              step="1"
              value={visionBatchSize}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setVisionBatchSize(parseInt(e.target.value))}
              style={{
                flex: 1,
                cursor: 'pointer',
                accentColor: 'var(--accent-primary)',
              }}
            />
            <input
              type="number"
              min="1"
              max="32"
              value={visionBatchSize}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setVisionBatchSize(parseInt(e.target.value) || 4)}
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
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{
              padding: '0.125rem 0.5rem',
              background: visionBatchSize <= 4 ? 'rgba(34, 197, 94, 0.2)' : visionBatchSize <= 8 ? 'rgba(251, 146, 60, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              color: visionBatchSize <= 4 ? 'rgb(34, 197, 94)' : visionBatchSize <= 8 ? 'rgb(251, 146, 60)' : 'rgb(239, 68, 68)',
              borderRadius: '4px',
              fontSize: '0.65rem',
              fontWeight: '600',
            }}>
              {visionBatchSize <= 4 ? '🟢 Safe' : visionBatchSize <= 8 ? '🟡 Moderate' : '🔴 High VRAM'}
            </span>
            Default: 4 • Recommended: 4-8 • High-end: 8-12
          </div>
        </div>
      )}
    </div>
  );
}
