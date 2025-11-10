import React, { useState, useEffect } from 'react';
import { FileText, ChevronDown, ChevronUp, RefreshCw, CheckCircle, Trash2, AlertTriangle } from 'lucide-react';

function ChunkPreviewStep({ project, chunks, onComplete, onBack }) {
  const [chunkData, setChunkData] = useState(null);
  const [expandedChunk, setExpandedChunk] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [samplingRandom, setSamplingRandom] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const chunksPerPage = 10;

  useEffect(() => {
    loadChunks();
  }, [project]);

  const loadChunks = async () => {
    try {
      const response = await fetch(`/api/projects/${project.id}/chunks`);
      const data = await response.json();
      setChunkData(data);
    } catch (error) {
      console.error('Failed to load chunks:', error);
    }
  };

  const handleRandomSample = () => {
    setSamplingRandom(true);
    setTimeout(() => {
      const randomPage = Math.floor(Math.random() * Math.ceil(chunkData.chunks.length / chunksPerPage));
      setCurrentPage(randomPage);
      setSamplingRandom(false);
    }, 300);
  };

  const handleDeleteChunks = async () => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/chunking/delete/${project.id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Go back to chunking method step
        onBack();
      } else {
        alert('Failed to delete chunks: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to delete chunks:', error);
      alert('Failed to delete chunks. Please try again.');
    } finally {
      setDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  if (!chunkData) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <div className="animate-spin" style={{ display: 'inline-block', marginBottom: '1rem' }}>
          <RefreshCw size={32} style={{ color: 'var(--accent-primary)' }} />
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>Loading chunks...</p>
      </div>
    );
  }

  const totalChunks = chunkData.chunks.length;
  const totalPages = Math.ceil(totalChunks / chunksPerPage);
  const displayedChunks = chunkData.chunks.slice(
    currentPage * chunksPerPage,
    (currentPage + 1) * chunksPerPage
  );

  return (
    <div>
      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            background: 'var(--bg-primary)',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <AlertTriangle size={32} style={{ color: 'rgb(239, 68, 68)' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
                Delete All Chunks?
              </h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              This will permanently delete all {totalChunks} chunks from this project. 
              You'll need to re-chunk your documents with the new settings (like formula extraction).
            </p>
            
            <div style={{ 
              padding: '1rem', 
              background: 'rgba(239, 68, 68, 0.1)', 
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
            }}>
              ⚠️ <strong>Note:</strong> This will not delete your original PDF files, only the processed chunks.
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--bg-tertiary)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  cursor: deleting ? 'not-allowed' : 'pointer',
                  opacity: deleting ? 0.5 : 1,
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteChunks}
                disabled={deleting}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: deleting ? 'var(--bg-tertiary)' : 'rgb(239, 68, 68)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontWeight: '600',
                  cursor: deleting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                {deleting ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={16} />
                    Yes, Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Preview & Test Chunks
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>
            Review your document chunks to ensure they're split correctly for your needs
          </p>
        </div>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          style={{
            padding: '0.75rem 1.25rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            color: 'rgb(239, 68, 68)',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
          }}
        >
          <Trash2 size={16} />
          Delete & Re-chunk
        </button>
      </div>

      <div style={{ marginBottom: '2rem', marginTop: '1rem' }}></div>

      {/* Statistics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{
          padding: '1.25rem',
          background: 'var(--bg-tertiary)',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            Total Chunks
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
            {totalChunks}
          </div>
        </div>
        
        <div style={{
          padding: '1.25rem',
          background: 'var(--bg-tertiary)',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            Avg Tokens
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '600' }}>
            {chunkData.stats.avgTokens}
          </div>
        </div>
        
        <div style={{
          padding: '1.25rem',
          background: 'var(--bg-tertiary)',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            Source Files
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: '600' }}>
            {chunkData.stats.sourceFiles}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <button
          onClick={handleRandomSample}
          disabled={samplingRandom}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '500',
            cursor: samplingRandom ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <RefreshCw size={16} className={samplingRandom ? 'animate-spin' : ''} />
          Random Sample
        </button>
      </div>

      {/* Chunk List */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Chunks {currentPage * chunksPerPage + 1}-{Math.min((currentPage + 1) * chunksPerPage, totalChunks)} of {totalChunks}
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {displayedChunks.map((chunk, index) => {
            const globalIndex = currentPage * chunksPerPage + index;
            const isExpanded = expandedChunk === globalIndex;
            
            return (
              <div
                key={globalIndex}
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <div
                  onClick={() => setExpandedChunk(isExpanded ? null : globalIndex)}
                  style={{
                    padding: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <FileText size={16} style={{ color: 'var(--accent-primary)' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                        Chunk {globalIndex + 1}
                      </span>
                      {chunk.metadata?.source && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          from {chunk.metadata.source}
                        </span>
                      )}
                    </div>
                    <div style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: isExpanded ? 'normal' : 'nowrap',
                    }}>
                      {chunk.text.substring(0, isExpanded ? undefined : 100)}
                      {!isExpanded && chunk.text.length > 100 && '...'}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {chunk.tokens || Math.ceil(chunk.text.length / 4)} tokens
                    </span>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                      color: 'var(--text-primary)',
                      margin: 0,
                    }}>
                      {chunk.text}
                    </pre>
                    
                    {chunk.metadata && (
                      <div style={{
                        marginTop: '1rem',
                        padding: '0.75rem',
                        background: 'var(--bg-secondary)',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                      }}>
                        <strong>Metadata:</strong>
                        <pre style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                          {JSON.stringify(chunk.metadata, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
          }}>
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text-primary)',
                cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              Previous
            </button>
            
            <span style={{ color: 'var(--text-secondary)' }}>
              Page {currentPage + 1} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--text-primary)',
                cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--accent-primary)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
        fontSize: '0.875rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
          <CheckCircle size={20} style={{ color: 'var(--accent-primary)', marginTop: '0.125rem', flexShrink: 0 }} />
          <div>
            <strong>Looking good?</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              Make sure your chunks preserve the context you need. If a chapter or section is split incorrectly, 
              you may want to adjust the chunking parameters or use a different method.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={onBack}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Back to Chunking
        </button>
        
        <button
          onClick={() => onComplete({ chunks: chunkData })}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--accent-primary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-primary)';
          }}
        >
          Approve & Continue
        </button>
      </div>
    </div>
  );
}

export default ChunkPreviewStep;

