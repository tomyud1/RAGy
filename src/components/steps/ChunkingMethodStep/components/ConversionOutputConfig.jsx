import React from 'react';
import { API_BASE } from '../../../../constants/api';

export function ConversionOutputConfig({ conversionOutputFolder, setConversionOutputFolder }) {
  const handleOpenFolder = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/open-folder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folderPath: conversionOutputFolder })
      });
      const data = await response.json();
      if (!data.success) {
        alert(`Failed to open folder: ${data.error}`);
      }
    } catch (error) {
      alert(`Failed to open folder: ${error.message}`);
    }
  };

  return (
    <div style={{
      marginBottom: '2rem',
      padding: '1rem',
      background: 'var(--bg-secondary)',
      borderRadius: '8px',
      border: '1px solid var(--border)'
    }}>
      <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
        📁 Conversion Output Location
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
        All conversion outputs will be saved here: extracted images, full document markdown, and final chunks
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '6px'
      }}>
        <input
          type="text"
          value={conversionOutputFolder}
          onChange={(e) => setConversionOutputFolder(e.target.value)}
          placeholder="conversions/"
          style={{
            flex: 1,
            fontSize: '0.85rem',
            fontFamily: 'monospace',
            padding: '0.5rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            color: 'var(--text-primary)'
          }}
        />
        <button
          onClick={handleOpenFolder}
          title="Open folder in file system"
          style={{
            padding: '0.5rem 0.75rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            color: 'var(--text-primary)',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          📁 Open Folder
        </button>
      </div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', marginBottom: 0 }}>
        💡 Outputs will be saved in: <code style={{ background: 'var(--bg-tertiary)', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>{conversionOutputFolder}[document-name]/</code>
      </p>
    </div>
  );
}
