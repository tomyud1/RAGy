import React, { useState, useEffect, useRef } from 'react';
import { Loader, CheckCircle, AlertCircle, Zap } from 'lucide-react';

function EmbeddingProgressStep({ project, embeddingModel, onComplete, onBack }) {
  const [status, setStatus] = useState('starting'); // starting, processing, completed, error
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({
    processedChunks: 0,
    totalChunks: 0,
    currentBatch: 0,
    totalBatches: 0,
    eta: null,
    speed: null,
    avgTimePerChunk: null,
  });
  const [hardware, setHardware] = useState(null);
  const [error, setError] = useState(null);
  const wsRef = useRef(null);
  const jobIdRef = useRef(null);

  useEffect(() => {
    startEmbedding();
    
    return () => {
      // Cancel job when component unmounts (user navigates away or refreshes)
      if (jobIdRef.current) {
        console.log('[EmbeddingProgress] Cancelling job on unmount:', jobIdRef.current);
        fetch(`/api/embedding/cancel/${jobIdRef.current}`, { method: 'POST' })
          .catch(err => console.warn('Failed to cancel job:', err));
      }
      
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const startEmbedding = async () => {
    try {
      // Start the embedding process
      const response = await fetch('/api/embedding/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          modelId: embeddingModel,
        }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        setStatus('error');
        setError(data.error);
        return;
      }

      jobIdRef.current = data.jobId;
      
      // Connect to WebSocket for progress updates
      connectWebSocket(data.jobId);
    } catch (error) {
      console.error('Failed to start embedding:', error);
      setStatus('error');
      setError('Failed to start embedding process');
    }
  };

  const connectWebSocket = (jobId) => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${protocol}//${window.location.hostname}:3001/ws`);
    
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'subscribe', jobId }));
      setStatus('processing');
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (data.type === 'progress') {
        setProgress(data.progress);
        setStats({
          processedChunks: data.processedChunks,
          totalChunks: data.totalChunks,
          currentBatch: data.currentBatch,
          totalBatches: data.totalBatches,
          eta: data.eta,
          speed: data.speed,
          avgTimePerChunk: data.avgTimePerChunk,
        });
        
        // Update hardware info if provided
        if (data.hardware) {
          setHardware(data.hardware);
        }
      } else if (data.type === 'complete') {
        setStatus('completed');
        setProgress(100);
        ws.close();
        jobIdRef.current = null; // Clear job ID
        
        // Wait a moment before transitioning
        setTimeout(() => {
          onComplete({ vectorDb: data.vectorDb });
        }, 2000);
      } else if (data.type === 'error') {
        setStatus('error');
        setError(data.error);
        ws.close();
        jobIdRef.current = null;
      } else if (data.type === 'cancelled') {
        setStatus('error');
        setError('Job was cancelled');
        ws.close();
        jobIdRef.current = null;
      }
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setStatus('error');
      setError('Connection error');
    };
    
    wsRef.current = ws;
  };

  const formatTime = (seconds) => {
    if (!seconds) return 'Calculating...';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}m ${secs}s`;
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Generating Embeddings
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Creating vector database with {embeddingModel}
      </p>

      {/* Status Display */}
      <div style={{
        background: 'var(--bg-primary)',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        {status === 'starting' && (
          <>
            <Loader size={48} className="animate-spin" style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Initializing...</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Preparing embedding model</p>
          </>
        )}
        
        {status === 'processing' && (
          <>
            <Zap size={48} style={{ color: 'var(--accent-primary)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Processing Chunks</h3>
            
            {/* Chunks info */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
              {stats.processedChunks} / {stats.totalChunks} chunks embedded
            </p>
            
            {/* Batch info */}
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.875rem', opacity: 0.8 }}>
              Batch {stats.currentBatch} / {stats.totalBatches}
            </p>
            
            {/* Speed and Avg on same line */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center', 
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
            }}>
              <span>
                Speed: <strong style={{ color: 'var(--text-primary)' }}>
                  {stats.speed ? `${stats.speed.toFixed(1)} chunks/s` : 'Calculating...'}
                </strong>
              </span>
              <span>
                Avg: <strong style={{ color: 'var(--text-primary)' }}>
                  {stats.avgTimePerChunk ? `${stats.avgTimePerChunk.toFixed(0)}ms` : 'Calculating...'}
                </strong>
              </span>
            </div>
            
            {/* Segmented Progress Bar - group batches for visual clarity */}
            <div style={{
              width: '100%',
              display: 'flex',
              gap: '2px',
              marginBottom: '1rem',
            }}>
              {(() => {
                // Group every 4 batches into one visual segment (represents ~20 chunks)
                const segmentGrouping = 4;
                const visualSegments = Math.ceil((stats.totalBatches || 1) / segmentGrouping);
                
                return Array.from({ length: visualSegments }).map((_, index) => {
                  const segmentStartBatch = index * segmentGrouping + 1;
                  const segmentEndBatch = Math.min((index + 1) * segmentGrouping, stats.totalBatches);
                  const isCompleted = stats.currentBatch > segmentEndBatch;
                  const isActive = stats.currentBatch >= segmentStartBatch && stats.currentBatch <= segmentEndBatch;
                  
                  return (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        height: '12px',
                        background: isCompleted || isActive
                          ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-light))'
                          : 'var(--bg-tertiary)',
                        borderRadius: '3px',
                        opacity: isCompleted ? 1 : isActive ? 0.8 : 0.3,
                        transition: 'all 0.2s ease',
                        boxShadow: isActive 
                          ? '0 0 8px var(--accent-primary)' 
                          : 'none',
                      }}
                    />
                  );
                });
              })()}
            </div>
            
            {/* Progress percentage and Time Remaining on same line */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '1rem',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '600' }}>
                {progress.toFixed(1)}%
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                {formatTime(stats.eta)} remaining
              </div>
            </div>
          </>
        )}
        
        {status === 'completed' && (
          <>
            <CheckCircle size={48} style={{ color: 'var(--success)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--success)' }}>
              Embeddings Complete!
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Vector database created successfully
            </p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <AlertCircle size={48} style={{ color: 'var(--error)', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--error)' }}>
              Error Occurred
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              {error || 'An unknown error occurred'}
            </p>
          </>
        )}
      </div>

      {/* Hardware Acceleration Info */}
      {status === 'processing' && hardware && (
        <div style={{
          background: 'var(--bg-primary)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '2rem',
          fontSize: '0.875rem',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={20} style={{ color: hardware.type === 'cpu' ? 'var(--text-secondary)' : 'var(--accent-primary)' }} />
            <div>
              <strong>
                {hardware.type === 'mps' && 'Using GPU Acceleration'}
                {hardware.type === 'cuda' && 'Using GPU Acceleration'}
                {hardware.type === 'rocm' && 'Using GPU Acceleration'}
                {hardware.type === 'cpu' && 'No GPU Acceleration Available'}
              </strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem', margin: 0 }}>
                {hardware.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={onBack}
          disabled={status === 'processing'}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            cursor: status === 'processing' ? 'not-allowed' : 'pointer',
            opacity: status === 'processing' ? 0.5 : 1,
          }}
        >
          Back
        </button>
        
        {status === 'error' && (
          <button
            onClick={startEmbedding}
            style={{
              padding: '0.875rem 2rem',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}

export default EmbeddingProgressStep;

