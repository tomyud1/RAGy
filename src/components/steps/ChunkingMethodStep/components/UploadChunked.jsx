import React from 'react';
import { Upload, Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

export function UploadChunked({ uploadingChunked, onUploadChunkedFile }) {
  return (
    <div style={{
      background: 'var(--bg-primary)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.25rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <Upload size={20} style={{ color: 'var(--accent-primary)' }} />
        <h3 style={{ fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Already Have Chunked Data?
          <Tooltip text="Upload a JSON file with an array of chunks. Each chunk should have a 'text' field. Optional fields: 'metadata' (object) and 'tokens' (number). This skips the chunking process entirely.">
            <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
          </Tooltip>
        </h3>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
        If you've already chunked your documents, upload a JSON file with your chunks to skip this step.
      </p>

      <label style={{
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        cursor: uploadingChunked ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
      }}>
        {uploadingChunked ? 'Uploading...' : 'Upload Chunked JSON'}
        <input
          type="file"
          accept=".json"
          onChange={onUploadChunkedFile}
          disabled={uploadingChunked}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  );
}
