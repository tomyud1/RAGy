import React from 'react';
import { FileText } from 'lucide-react';

/**
 * Search results display component
 */
export function SearchResults({
  results,
  expandedResult,
  setExpandedResult,
}) {
  if (!results) return null;

  const getSimilarityColor = (similarity) => {
    if (similarity >= 0.8) return '#22c55e';
    if (similarity >= 0.6) return '#eab308';
    return '#ef4444';
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
        Search Results ({results.results?.length || 0})
      </h3>

      {/* Results Table Summary */}
      {results.results && results.results.length > 0 && (
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600' }}>Rank</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600' }}>Similarity</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600' }}>Source</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600' }}>Tokens</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600' }}>Preview</th>
              </tr>
            </thead>
            <tbody>
              {results.results.map((result, idx) => (
                <tr
                  key={idx}
                  onClick={() => setExpandedResult(expandedResult === idx ? null : idx)}
                  style={{
                    cursor: 'pointer',
                    borderTop: '1px solid var(--border)',
                    background: expandedResult === idx ? 'var(--accent-subtle)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>#{idx + 1}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: `${getSimilarityColor(result.similarity)}20`,
                      color: getSimilarityColor(result.similarity),
                      fontSize: '0.875rem',
                      fontWeight: '500',
                    }}>
                      {(result.similarity * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}>
                      <FileText size={14} />
                      {result.metadata?.source || 'Unknown'}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {result.tokens || '~' + Math.round((result.text?.length || 0) / 4)}
                  </td>
                  <td style={{ padding: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {result.text?.substring(0, 100)}...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detailed View */}
      {expandedResult !== null && results.results?.[expandedResult] && (
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1.5rem',
        }}>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>
            Result #{expandedResult + 1} Details
          </h4>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Similarity</div>
              <div style={{ fontWeight: '600', color: getSimilarityColor(results.results[expandedResult].similarity) }}>
                {(results.results[expandedResult].similarity * 100).toFixed(2)}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Source</div>
              <div style={{ fontWeight: '500' }}>{results.results[expandedResult].metadata?.source || 'Unknown'}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Vector DB</div>
              <div style={{ fontWeight: '500' }}>{results.results[expandedResult].vectorDbId}</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Full Text</div>
            <div style={{
              background: 'var(--bg-tertiary)',
              padding: '1rem',
              borderRadius: '6px',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              whiteSpace: 'pre-wrap',
              maxHeight: '300px',
              overflow: 'auto',
            }}>
              {results.results[expandedResult].text}
            </div>
          </div>
        </div>
      )}

      {results.results?.length === 0 && (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '8px',
        }}>
          No results found. Try adjusting your search parameters or query.
        </div>
      )}
    </div>
  );
}

