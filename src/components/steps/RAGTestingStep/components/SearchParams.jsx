import React from 'react';

/**
 * Search parameters component with sliders
 */
export function SearchParams({
  topK,
  setTopK,
  minSimilarity,
  setMinSimilarity,
  minTokens,
  setMinTokens,
}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    }}>
      {/* Top K Results */}
      <div>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
        }}>
          Results (Top K): {topK}
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={topK}
          onChange={(e) => setTopK(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          <span>1</span>
          <span>20</span>
        </div>
      </div>

      {/* Min Similarity */}
      <div>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
        }}>
          Min Similarity: {(minSimilarity * 100).toFixed(0)}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={minSimilarity * 100}
          onChange={(e) => setMinSimilarity(parseInt(e.target.value) / 100)}
          style={{ width: '100%' }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Min Tokens */}
      <div>
        <label style={{
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          marginBottom: '0.5rem',
        }}>
          Min Tokens: {minTokens === 0 ? 'None' : minTokens}
        </label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={minTokens}
          onChange={(e) => setMinTokens(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          <span>0</span>
          <span>500</span>
        </div>
      </div>
    </div>
  );
}

