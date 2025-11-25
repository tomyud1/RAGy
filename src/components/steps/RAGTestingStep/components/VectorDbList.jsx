import React from 'react';
import { Database, TrendingUp, Clock, X } from 'lucide-react';
import { formatTime } from '../utils';

/**
 * Vector database list component with selection and deletion
 */
export function VectorDbList({
  availableDbs,
  selectedDbs,
  toggleDbSelection,
  setDeleteConfirm,
}) {
  if (availableDbs.length === 0) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
      }}>
        No vector databases available. Go to Step 3 (Embedding) to create one.
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {availableDbs.map(db => (
        <div
          key={db.id}
          onClick={() => toggleDbSelection(db.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            background: selectedDbs.includes(db.id)
              ? 'var(--accent-subtle)'
              : 'var(--bg-secondary)',
            border: selectedDbs.includes(db.id)
              ? '1px solid var(--accent)'
              : '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            border: selectedDbs.includes(db.id)
              ? '2px solid var(--accent)'
              : '2px solid var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selectedDbs.includes(db.id) ? 'var(--accent)' : 'transparent',
          }}>
            {selectedDbs.includes(db.id) && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>

          <Database size={20} style={{ color: 'var(--accent)' }} />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {db.id}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <TrendingUp size={14} /> {db.chunkCount} chunks
              </span>
              <span>•</span>
              <span>{db.dimensions}D</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={14} /> {formatTime(db.elapsedTimeSeconds)}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setDeleteConfirm({ dbId: db.id, dbName: db.id });
            }}
            style={{
              padding: '0.5rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            title="Delete vector database"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}

