import React, { useState, useEffect } from 'react';
import { Search, Database, Upload, TrendingUp, Clock, FileText } from 'lucide-react';
import { TEXT_SIZES, FONT_WEIGHTS } from '../../constants/ui';

function RAGTestingStep({ project, vectorDbs, onBack }) {
  const [availableDbs, setAvailableDbs] = useState([]);
  const [selectedDbs, setSelectedDbs] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const [expandedResult, setExpandedResult] = useState(null);
  
  // Search parameters
  const [topK, setTopK] = useState(5); // Number of results
  const [minSimilarity, setMinSimilarity] = useState(0.55); // Minimum similarity threshold (0-1)
  const [minTokens, setMinTokens] = useState(0); // Minimum token count (0 = no filter)

  useEffect(() => {
    loadVectorDbs();
  }, [project]);

  const loadVectorDbs = async () => {
    try {
      const response = await fetch(`/api/projects/${project.id}/vector-dbs`);
      const data = await response.json();
      setAvailableDbs(data.vectorDbs);
      
      // Select all by default
      setSelectedDbs(data.vectorDbs.map(db => db.id));
    } catch (error) {
      console.error('Failed to load vector databases:', error);
    }
  };

  const handleSearch = async () => {
    if (!query.trim() || selectedDbs.length === 0) return;
    
    setSearching(true);
    
    try {
      const response = await fetch('/api/rag/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query.trim(),
          projectId: project.id,
          vectorDbIds: selectedDbs,
          topK: topK,
          minSimilarity: minSimilarity,
          minTokens: minTokens,
        }),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Search failed. Please try again.');
    } finally {
      setSearching(false);
    }
  };

  const handleImportVectorDb = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('vectorDb', file);
    formData.append('projectId', project.id);

    try {
      const response = await fetch('/api/vector-db/import', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        loadVectorDbs();
      } else {
        alert('Failed to import vector database: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to import:', error);
      alert('Failed to import vector database');
    }
  };

  const toggleDbSelection = (dbId) => {
    setSelectedDbs(prev => 
      prev.includes(dbId) 
        ? prev.filter(id => id !== dbId)
        : [...prev, dbId]
    );
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Test RAG System
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Query your vector databases and compare results
      </p>

      {/* Vector Database Selection */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Available Vector Databases ({availableDbs.length})
          </h3>
          
          <label style={{
            padding: '0.5rem 1rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <Upload size={16} />
            Import Vector DB
            <input
              type="file"
              accept=".json,.hnsw"
              onChange={handleImportVectorDb}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {availableDbs.map((db) => (
            <div
              key={db.id}
              onClick={() => toggleDbSelection(db.id)}
              style={{
                padding: '1rem',
                background: selectedDbs.includes(db.id) ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
                border: selectedDbs.includes(db.id) ? '2px solid var(--accent-primary)' : '1px solid var(--border)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Database size={20} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontWeight: '600' }}>{db.modelName}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {db.chunkCount} chunks • {db.dimensions}D
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Interface */}
      <div style={{
        background: 'var(--bg-primary)',
        borderRadius: '12px',
        padding: '1.5rem',
        border: '1px solid var(--border)',
        marginBottom: '2rem',
      }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search
              size={20}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)',
              }}
            />
            <input
              type="text"
              placeholder="Enter your query (e.g., 'How does node hierarchy work in Godot?')"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              style={{
                width: '100%',
                padding: '0.875rem 1rem 0.875rem 3rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
              }}
            />
          </div>
          
          <button
            onClick={handleSearch}
            disabled={!query.trim() || selectedDbs.length === 0 || searching}
            style={{
              padding: '0.875rem 2rem',
              background: query.trim() && selectedDbs.length > 0 && !searching ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontWeight: '600',
              cursor: query.trim() && selectedDbs.length > 0 && !searching ? 'pointer' : 'not-allowed',
              whiteSpace: 'nowrap',
            }}
          >
            {searching ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        {/* Search Parameters */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem',
          marginTop: '1.5rem',
          marginBottom: '1rem',
        }}>
          {/* Min Similarity Slider */}
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}>
              <label style={{ fontSize: TEXT_SIZES.small, color: 'var(--text-secondary)' }}>
                Min Similarity
              </label>
              <span style={{ 
                fontSize: TEXT_SIZES.small, 
                fontWeight: FONT_WEIGHTS.semibold,
                color: 'var(--accent-primary)',
              }}>
                {(minSimilarity * 100).toFixed(0)}%
              </span>
            </div>
            <input
              type="range"
              min="0.3"
              max="0.8"
              step="0.05"
              value={minSimilarity}
              onChange={(e) => setMinSimilarity(parseFloat(e.target.value))}
              style={{
                width: '100%',
                cursor: 'pointer',
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: TEXT_SIZES.tiny,
              color: 'var(--text-secondary)',
              marginTop: '0.25rem',
            }}>
              <span>30%</span>
              <span>80%</span>
            </div>
          </div>
          
          {/* Max Results Slider */}
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}>
              <label style={{ fontSize: TEXT_SIZES.small, color: 'var(--text-secondary)' }}>
                Max Results
              </label>
              <span style={{ 
                fontSize: TEXT_SIZES.small, 
                fontWeight: FONT_WEIGHTS.semibold,
                color: 'var(--accent-primary)',
              }}>
                {topK} docs
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="15"
              step="1"
              value={topK}
              onChange={(e) => setTopK(parseInt(e.target.value))}
              style={{
                width: '100%',
                cursor: 'pointer',
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: TEXT_SIZES.tiny,
              color: 'var(--text-secondary)',
              marginTop: '0.25rem',
            }}>
              <span>3</span>
              <span>15</span>
            </div>
          </div>
          
          {/* Min Tokens Slider */}
          <div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '0.5rem',
            }}>
              <label style={{ fontSize: TEXT_SIZES.small, color: 'var(--text-secondary)' }}>
                Min Tokens
              </label>
              <span style={{ 
                fontSize: TEXT_SIZES.small, 
                fontWeight: FONT_WEIGHTS.semibold,
                color: 'var(--accent-primary)',
              }}>
                {minTokens === 0 ? 'Off' : `${minTokens}+`}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              step="10"
              value={minTokens}
              onChange={(e) => setMinTokens(parseInt(e.target.value))}
              style={{
                width: '100%',
                cursor: 'pointer',
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: TEXT_SIZES.tiny,
              color: 'var(--text-secondary)',
              marginTop: '0.25rem',
            }}>
              <span>Off</span>
              <span>300</span>
            </div>
          </div>
        </div>
        
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          Selected {selectedDbs.length} database{selectedDbs.length !== 1 ? 's' : ''} for comparison
        </p>
      </div>

      {/* Results */}
      {results && (
        <div>
          {/* Summary Comparison */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
              Comparison Summary
            </h3>
            
            <div style={{
              background: 'var(--bg-primary)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Model</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Avg Similarity</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Results</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>Query Time</th>
                  </tr>
                </thead>
                <tbody>
                  {results.results.map((result, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.75rem' }}>
                        <div style={{ fontWeight: '600' }}>{result.modelName}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{result.dimensions}D</div>
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        <div style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          background: 'var(--accent-primary)',
                          borderRadius: '12px',
                          fontWeight: '600',
                        }}>
                          {(result.avgSimilarity * 100).toFixed(1)}%
                        </div>
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        {result.documents.length}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        {result.queryTime}ms
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Results per Model */}
          {results.results.map((result, modelIndex) => (
            <div key={modelIndex} style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <Database size={20} style={{ color: 'var(--accent-primary)' }} />
                {result.modelName}
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '400' }}>
                  ({result.documents.length} results)
                </span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {result.documents.length === 0 && (
                  <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-primary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                  }}>
                    <p style={{ marginBottom: '0.5rem' }}>No results found above {(minSimilarity * 100).toFixed(0)}% similarity threshold</p>
                    <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Try lowering the minimum similarity or adjusting your query</p>
                  </div>
                )}
                
                {result.documents.map((doc, docIndex) => {
                  const key = `${modelIndex}-${docIndex}`;
                  const isExpanded = expandedResult === key;
                  
                  return (
                    <div
                      key={key}
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        onClick={() => setExpandedResult(isExpanded ? null : key)}
                        style={{
                          padding: '1rem',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <FileText size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: TEXT_SIZES.small, fontWeight: FONT_WEIGHTS.semibold }}>
                              Result {docIndex + 1}
                            </span>
                            {doc.metadata?.source && (
                              <span style={{ fontSize: TEXT_SIZES.tiny, color: 'var(--text-secondary)' }}>
                                from {doc.metadata.source}
                              </span>
                            )}
                            <span style={{ 
                              fontSize: TEXT_SIZES.tiny, 
                              color: 'var(--text-secondary)',
                              padding: '0.125rem 0.5rem',
                              background: 'var(--bg-primary)',
                              borderRadius: '4px',
                            }}>
                              {doc.text.length} chars
                            </span>
                            <span style={{ 
                              fontSize: TEXT_SIZES.tiny, 
                              color: 'var(--text-secondary)',
                              padding: '0.125rem 0.5rem',
                              background: 'var(--bg-primary)',
                              borderRadius: '4px',
                            }}>
                              {doc.tokens || 'N/A'} tokens
                            </span>
                          </div>
                          <div style={{
                            color: 'var(--text-secondary)',
                            fontSize: TEXT_SIZES.small,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: isExpanded ? 'normal' : 'nowrap',
                          }}>
                            {doc.text.substring(0, isExpanded ? undefined : 150)}
                            {!isExpanded && doc.text.length > 150 && '...'}
                          </div>
                        </div>
                        
                        <div style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          background: 'var(--bg-primary)',
                          borderRadius: '12px',
                          fontSize: TEXT_SIZES.tiny,
                          fontWeight: FONT_WEIGHTS.semibold,
                          marginLeft: '1rem',
                          flexShrink: 0,
                        }}>
                          {(doc.similarity * 100).toFixed(1)}%
                        </div>
                      </div>
                      
                      {isExpanded && (
                        <div style={{
                          padding: '1rem',
                          borderTop: '1px solid var(--border)',
                          background: 'var(--bg-primary)',
                        }}>
                          <pre style={{
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                            fontFamily: 'monospace',
                            fontSize: '0.875rem',
                            lineHeight: '1.6',
                            margin: 0,
                          }}>
                            {doc.text}
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button
          onClick={onBack}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: TEXT_SIZES.buttonLarge,
            fontWeight: FONT_WEIGHTS.semibold,
            cursor: 'pointer',
          }}
        >
          Back to Embedding
        </button>
        
        <button
          onClick={() => {
            // Create another vector DB with different model
            window.location.reload();
          }}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--accent-primary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: TEXT_SIZES.buttonLarge,
            fontWeight: FONT_WEIGHTS.semibold,
            cursor: 'pointer',
          }}
        >
          Create Another Vector DB
        </button>
      </div>
    </div>
  );
}

export default RAGTestingStep;

