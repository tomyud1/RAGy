import React, { useState, useEffect } from 'react';
import { Scissors, Upload, CheckCircle, Loader, Info, RefreshCw, AlertTriangle } from 'lucide-react';

// Tooltip component
function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '0.5rem',
            padding: '0.75rem 1rem',
            background: 'rgba(0, 0, 0, 0.95)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            whiteSpace: 'normal',
            width: '280px',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            pointerEvents: 'none',
          }}
        >
          {text}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid rgba(0, 0, 0, 0.95)',
            }}
          />
        </div>
      )}
    </span>
  );
}

const CHUNKING_METHODS = [
  {
    id: 'docling-hybrid',
    name: 'Docling Hybrid (Default)',
    description: 'Combines hierarchical structure with token-aware splitting. Best for most documents.',
    recommended: true,
    config: {
      maxTokens: 512,
      mergePeers: true,
    }
  },
  // Future methods can be added here
];

function ChunkingMethodStep({ project, files, onComplete, onBack }) {
  const [selectedMethod, setSelectedMethod] = useState('docling-hybrid');
  const [maxTokens, setMaxTokens] = useState(512);
  const [enableFormula, setEnableFormula] = useState(true); // Default to true for formulas!
  const [enablePictureClassification, setEnablePictureClassification] = useState(false);
  const [enablePictureDescription, setEnablePictureDescription] = useState(false);
  const [enableCodeEnrichment, setEnableCodeEnrichment] = useState(false);
  const [enableOcr, setEnableOcr] = useState(true); // Default to true for OCR
  const [enableTableStructure, setEnableTableStructure] = useState(true); // Default to true for tables
  const [chunking, setChunking] = useState(false);
  const [uploadingChunked, setUploadingChunked] = useState(false);
  const [showUploadChunked, setShowUploadChunked] = useState(false);
  const [progress, setProgress] = useState(null);
  const [jobStatus, setJobStatus] = useState(null); // 'checking' | 'resuming' | 'completed' | 'failed' | null
  const [existingJob, setExistingJob] = useState(null);

  // Check for existing chunking job on mount
  useEffect(() => {
    checkExistingJob();
  }, [project.id]);

  const checkExistingJob = async () => {
    try {
      setJobStatus('checking');
      
      const response = await fetch(`/api/chunking/status/${project.id}`);
      const data = await response.json();
      
      if (data.success && data.job) {
        const job = data.job;
        setExistingJob(job);
        
        if (job.status === 'in-progress') {
          // Chunking is still in progress, reconnect
          setJobStatus('resuming');
          setChunking(true);
          setProgress(job.progress);
          reconnectToJob(job.jobId);
        } else if (job.status === 'completed') {
          // Chunking completed while user was away
          setJobStatus('completed');
          setTimeout(() => {
            // Auto-proceed to next step after showing success message
            onComplete({ chunkingMethod: job.method, chunks: { chunks: [] } });
          }, 2000);
        } else if (job.status === 'failed') {
          // Chunking failed
          setJobStatus('failed');
        } else {
          setJobStatus(null);
        }
      } else {
        setJobStatus(null);
      }
    } catch (error) {
      console.error('Failed to check existing job:', error);
      setJobStatus(null);
    }
  };

  const reconnectToJob = (jobId) => {
    // Connect to WebSocket for progress updates
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);
    
    ws.onopen = () => {
      console.log('Reconnected to WebSocket');
      // Subscribe to job updates
      ws.send(JSON.stringify({ type: 'subscribe', jobId }));
      setJobStatus(null); // Clear resuming status once connected
    };
    
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('WebSocket message received:', message);
      
      if (message.type === 'chunking-progress') {
        setProgress(message.data);
      } else if (message.type === 'chunking-complete') {
        console.log('Chunking complete! Data:', message.data);
        ws.close();
        setChunking(false);
        setJobStatus('completed');
        setTimeout(() => {
          onComplete({ chunkingMethod: selectedMethod, chunks: message.data.chunks });
        }, 1500);
      } else if (message.type === 'chunking-error') {
        console.error('Chunking error:', message.data);
        ws.close();
        setChunking(false);
        setJobStatus('failed');
        alert('Chunking failed: ' + (message.data.error || 'Unknown error'));
      }
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      ws.close();
      setChunking(false);
      setJobStatus('failed');
    };
  };

  const handleStartChunking = async () => {
    console.log('[Frontend] Starting chunking process...');
    setChunking(true);
    setJobStatus(null);
    
    // Show immediate "Initializing" feedback
    setProgress({
      type: 'progress',
      current: 0,
      total: files.length,
      file: 'Initializing chunking process...',
      status: 'initializing'
    });
    
    try {
      // Connect to WebSocket FIRST, before starting the process
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);
      
      // Wait for WebSocket to connect
      await new Promise((resolve, reject) => {
        ws.onopen = () => {
          console.log('[Frontend] WebSocket connected');
          resolve();
        };
        ws.onerror = (error) => {
          console.error('[Frontend] WebSocket connection failed:', error);
          reject(new Error('Failed to connect to server'));
        };
        // Timeout after 5 seconds
        setTimeout(() => reject(new Error('WebSocket connection timeout')), 5000);
      });
      
      // Setup WebSocket message handlers
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log('[Frontend] WebSocket message received:', message);
        console.log('[Frontend] Message type:', message.type);
        console.log('[Frontend] Progress data:', message.data);
        
        if (message.type === 'chunking-progress') {
          console.log('[Frontend] Setting progress state:', message.data);
          setProgress(message.data);
        } else if (message.type === 'chunking-complete') {
          console.log('Chunking complete! Data:', message.data);
          ws.close();
          setChunking(false);
          setJobStatus('completed');
          setTimeout(() => {
            onComplete({ chunkingMethod: selectedMethod, chunks: message.data.chunks });
          }, 1500);
        } else if (message.type === 'chunking-error') {
          console.error('Chunking error:', message.data);
          ws.close();
          setChunking(false);
          setJobStatus('failed');
          alert('Chunking failed: ' + (message.data.error || 'Unknown error'));
        }
      };
      
      ws.onerror = (error) => {
        console.error('[Frontend] WebSocket error:', error);
        ws.close();
        setChunking(false);
        setJobStatus('failed');
        alert('Connection error. Please try again.');
      };
      
      // NOW start chunking process (WebSocket is already connected)
      console.log('[Frontend] Sending chunking request to server...');
      const response = await fetch('/api/chunking/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          method: selectedMethod,
          config: {
            maxTokens: maxTokens,
            mergePeers: true,
            enableFormula: enableFormula,
            enablePictureClassification: enablePictureClassification,
            enablePictureDescription: enablePictureDescription,
            enableCodeEnrichment: enableCodeEnrichment,
            enableOcr: enableOcr,
            enableTableStructure: enableTableStructure,
          },
        }),
      });
      
      const data = await response.json();
      console.log('[Frontend] Chunking started, received jobId:', data.jobId);
      
      if (!data.success || !data.jobId) {
        ws.close();
        throw new Error(data.error || 'Failed to start chunking');
      }
      
      const jobId = data.jobId;
      
      // Subscribe to this specific job
      console.log('[Frontend] Subscribing to job:', jobId);
      ws.send(JSON.stringify({ type: 'subscribe', jobId }));
      
    } catch (error) {
      console.error('Chunking failed:', error);
      alert('Chunking failed: ' + error.message);
      setChunking(false);
      setJobStatus('failed');
    }
  };

  const handleUploadChunkedFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingChunked(true);
    const formData = new FormData();
    formData.append('chunkedFile', file);
    formData.append('projectId', project.id);

    try {
      const response = await fetch('/api/chunking/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        onComplete({ chunkingMethod: 'pre-chunked', chunks: data.chunks });
      } else {
        alert('Failed to upload chunked file: ' + data.error);
      }
    } catch (error) {
      console.error('Failed to upload chunked file:', error);
      alert('Failed to upload chunked file. Please try again.');
    } finally {
      setUploadingChunked(false);
    }
  };

  return (
    <div>
      {/* Status Banners */}
      {jobStatus === 'checking' && (
        <div style={{
          padding: '1rem',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <Loader size={20} className="animate-spin" style={{ color: 'rgb(59, 130, 246)' }} />
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Checking for existing chunking job...</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Please wait while we check if chunking was already in progress
            </div>
          </div>
        </div>
      )}

      {jobStatus === 'resuming' && (
        <div style={{
          padding: '1rem',
          background: 'rgba(234, 179, 8, 0.1)',
          border: '1px solid rgba(234, 179, 8, 0.3)',
          borderRadius: '8px',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <RefreshCw size={20} className="animate-spin" style={{ color: 'rgb(234, 179, 8)' }} />
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Resuming chunking process...</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Reconnecting to your in-progress chunking job
            </div>
          </div>
        </div>
      )}

      {jobStatus === 'completed' && (
        <div style={{
          padding: '1rem',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '8px',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <CheckCircle size={20} style={{ color: 'rgb(34, 197, 94)' }} />
          <div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Chunking completed successfully!</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Your documents have been chunked. Proceeding to next step...
            </div>
          </div>
        </div>
      )}

      {jobStatus === 'failed' && (
        <div style={{
          padding: '1rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <AlertTriangle size={20} style={{ color: 'rgb(239, 68, 68)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Chunking failed</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {existingJob?.error || 'The previous chunking process failed. You can try again.'}
            </div>
          </div>
          <button
            onClick={() => {
              setJobStatus(null);
              setExistingJob(null);
              setProgress(null);
            }}
            style={{
              padding: '0.5rem 1rem',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      )}

      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.25rem' }}>
        Choose Chunking Method
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
        Select how you want to split your documents into chunks for the vector database
      </p>

      {/* Chunking Methods */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {CHUNKING_METHODS.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            style={{
              padding: '1rem',
              background: selectedMethod === method.id ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
              border: selectedMethod === method.id ? '2px solid var(--accent-primary)' : '1px solid var(--border)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.borderColor = 'var(--accent-light)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.borderColor = 'var(--border)';
              }
            }}
          >
            {method.recommended && (
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.25rem 0.75rem',
                background: 'var(--accent-primary)',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
              }}>
                RECOMMENDED
              </div>
            )}
            
            <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: selectedMethod === method.id ? '6px solid var(--accent-primary)' : '2px solid var(--border)',
                flexShrink: 0,
                marginTop: '0.25rem',
              }} />
              
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {method.name}
                  <Tooltip text="The HybridChunker combines document structure awareness with token-based splitting. It first divides oversized chunks, then merges small consecutive chunks with matching headers to maintain context.">
                    <Info size={18} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
                  </Tooltip>
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  {method.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Merge Peers: <strong>{method.config.mergePeers ? 'Yes' : 'No'}</strong>
                    <Tooltip text="When enabled, combines small consecutive chunks that have matching headers and captions. This helps maintain context by keeping related content together.">
                      <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
                    </Tooltip>
                  </span>
                </div>

                {/* Max Tokens Configuration */}
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
                    Max Tokens per Chunk
                    <Tooltip text="Controls the maximum size of each chunk in tokens (roughly 0.75 words per token). Larger values preserve more context but may exceed embedding model limits. Typical embedding models support 512-8192 tokens.">
                      <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
                    </Tooltip>
                  </label>
                  
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); setMaxTokens(512); }}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: maxTokens === 512 ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      512
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setMaxTokens(1024); }}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: maxTokens === 1024 ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      1024
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setMaxTokens(2048); }}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: maxTokens === 2048 ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      2048
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setMaxTokens(4096); }}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: maxTokens === 4096 ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      4096
                    </button>
                    <input
                      type="number"
                      min="128"
                      max="8192"
                      step="128"
                      value={maxTokens}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => setMaxTokens(parseInt(e.target.value) || 512)}
                      style={{
                        width: '80px',
                        padding: '0.4rem 0.5rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.8rem',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                  
                  <p style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}>
                    Larger values preserve more context. Recommended: 512-2048 tokens.
                  </p>
                </div>

                {/* Enrichment Options */}
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
                    Content Enrichment Options
                    <Tooltip text="Enable advanced processing to extract structured information like LaTeX formulas, image classifications, and AI-generated descriptions. These features improve RAG quality but increase processing time.">
                      <Info size={14} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
                    </Tooltip>
                  </label>

                  {/* Formula Enrichment */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginBottom: '0.5rem',
                      border: enableFormula ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enableFormula}
                      onChange={(e) => setEnableFormula(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>📐 Formula Extraction</span>
                        <span style={{
                          padding: '0.125rem 0.5rem',
                          background: 'var(--accent-primary)',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                        }}>RECOMMENDED</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Extract LaTeX representations from mathematical equations. Essential for technical documents.
                      </p>
                    </div>
                  </label>

                  {/* Picture Classification */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginBottom: '0.5rem',
                      border: enablePictureClassification ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enablePictureClassification}
                      onChange={(e) => setEnablePictureClassification(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>🖼️ Picture Classification</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Classify images as charts, diagrams, logos, or signatures. Useful for document analysis.
                      </p>
                    </div>
                  </label>

                  {/* Picture Description */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: enablePictureDescription ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enablePictureDescription}
                      onChange={(e) => setEnablePictureDescription(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>🤖 AI Image Descriptions</span>
                        <span style={{
                          padding: '0.125rem 0.5rem',
                          background: 'rgba(234, 179, 8, 0.2)',
                          color: 'rgb(234, 179, 8)',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                        }}>SLOWER</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Generate AI descriptions for images using vision models (SmolVLM). Significantly increases processing time.
                      </p>
                    </div>
                  </label>

                  {/* Code Enrichment */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginBottom: '0.5rem',
                      border: enableCodeEnrichment ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enableCodeEnrichment}
                      onChange={(e) => setEnableCodeEnrichment(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>💻 Code Enrichment</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Extract and format code blocks with syntax preservation. Useful for technical documentation.
                      </p>
                    </div>
                  </label>

                  {/* OCR */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginBottom: '0.5rem',
                      border: enableOcr ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enableOcr}
                      onChange={(e) => setEnableOcr(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>🔍 OCR (Text Recognition)</span>
                        <span style={{
                          padding: '0.125rem 0.5rem',
                          background: 'var(--accent-primary)',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                        }}>RECOMMENDED</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Extract text from scanned documents and images. Essential for PDFs that contain images of text.
                      </p>
                    </div>
                  </label>

                  {/* Table Structure */}
                  <label 
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: enableTableStructure ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={enableTableStructure}
                      onChange={(e) => setEnableTableStructure(e.target.checked)}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        marginTop: '0.1rem',
                        accentColor: 'var(--accent-primary)',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>📊 Table Structure</span>
                        <span style={{
                          padding: '0.125rem 0.5rem',
                          background: 'var(--accent-primary)',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                        }}>RECOMMENDED</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Extract and preserve table structure with cells, rows, and columns. Essential for data-rich documents.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Or Upload Pre-chunked */}
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
            onChange={handleUploadChunkedFile}
            disabled={uploadingChunked}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {/* Progress Display */}
      {chunking && progress && (
        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.25rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                {progress.status === 'initializing' && '🚀 Initializing...'}
                {progress.status === 'processing' && '📄 Reading Document'}
                {progress.status === 'converting' && '⚙️ Converting PDF'}
                {progress.status === 'converted' && '✓ PDF Converted'}
                {progress.status === 'chunking' && '✂️ Generating Chunks'}
                {progress.status === 'chunked' && '✓ Chunking Complete'}
                {progress.status === 'completed' && '✓ Document Processed'}
                {progress.status === 'finalizing' && '✨ Finalizing'}
                {progress.status === 'saving' && '💾 Saving to Disk'}
                {progress.status === 'error' && '❌ Error'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {progress.status === 'initializing' && 'Setting up the chunking process...'}
                {progress.status === 'processing' && `Loading: ${progress.file}`}
                {progress.status === 'converting' && (
                  <>
                    Processing {progress.total_pages > 0 ? `${progress.total_pages}-page` : ''} PDF: {progress.file}
                    {progress.heartbeat && progress.elapsed && (
                      <span style={{ display: 'block', marginTop: '0.25rem', color: 'var(--accent-primary)', fontWeight: '500' }}>
                        ⏱️ {Math.floor(progress.elapsed / 60)}m {progress.elapsed % 60}s elapsed
                        {progress.remaining > 0 && (
                          <span style={{ color: 'var(--text-secondary)', fontWeight: '400', marginLeft: '0.5rem' }}>
                            • ~{Math.floor(progress.remaining / 60)}m {progress.remaining % 60}s remaining
                          </span>
                        )}
                        {progress.percent > 0 && (
                          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
                            Estimated: {progress.percent}% complete
                          </span>
                        )}
                      </span>
                    )}
                    {!progress.heartbeat && (
                      <span style={{ display: 'block', marginTop: '0.25rem', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                        Analyzing layout, tables, and figures... (~1.5s per page on M3)
                      </span>
                    )}
                  </>
                )}
                {progress.status === 'converted' && `✓ Successfully converted ${progress.total_pages}-page PDF`}
                {progress.status === 'chunking' && `Generating chunks: ${progress.chunks_so_far || 0} chunks created so far from ${progress.file}`}
                {progress.status === 'chunked' && `Generated ${progress.chunks} chunks from ${progress.file}`}
                {progress.status === 'completed' && `Completed: ${progress.file} (${progress.chunks} chunks)`}
                {progress.status === 'finalizing' && `Organizing ${progress.chunks} total chunks...`}
                {progress.status === 'saving' && `Writing ${progress.chunks} chunks to disk... (This may take a moment for large documents)`}
                {progress.status === 'error' && `Error processing: ${progress.file}`}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                {progress.status === 'initializing' ? '...' : 
                 progress.status === 'saving' ? '✓' :
                 progress.status === 'converting' && progress.percent ? `${progress.percent}%` :
                 `${progress.current}/${progress.total}`}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {progress.status === 'initializing' ? 'Starting' :
                 progress.status === 'saving' ? 'Saving' :
                 progress.status === 'converting' && progress.remaining > 0 ? 
                   `~${Math.floor(progress.remaining / 60)}m ${progress.remaining % 60}s left` :
                 `${Math.round((progress.current / progress.total) * 100)}%`}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '8px',
            background: 'var(--bg-primary)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${
                progress.status === 'initializing' ? 5 :
                progress.status === 'converting' && progress.percent ? progress.percent :
                progress.status === 'saving' ? 100 : 
                (progress.current / progress.total) * 100
              }%`,
              height: '100%',
              background: 
                progress.status === 'initializing' ? 'linear-gradient(90deg, rgb(59, 130, 246), rgb(99, 102, 241))' :
                progress.status === 'converting' ? 'linear-gradient(90deg, rgb(168, 85, 247), rgb(236, 72, 153))' :
                progress.status === 'chunking' ? 'linear-gradient(90deg, rgb(251, 146, 60), rgb(251, 191, 36))' :
                progress.status === 'saving' ? 'linear-gradient(90deg, rgb(34, 197, 94), rgb(59, 130, 246))' :
                'linear-gradient(90deg, var(--accent-primary), var(--accent-hover))',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={onBack}
          disabled={chunking}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: chunking ? 'not-allowed' : 'pointer',
            opacity: chunking ? 0.5 : 1,
          }}
        >
          Back
        </button>
        
        <button
          onClick={handleStartChunking}
          disabled={chunking}
          style={{
            padding: '0.875rem 2rem',
            background: chunking ? 'var(--bg-tertiary)' : 'var(--accent-primary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: chunking ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!chunking) {
              e.currentTarget.style.background = 'var(--accent-hover)';
            }
          }}
          onMouseLeave={(e) => {
            if (!chunking) {
              e.currentTarget.style.background = 'var(--accent-primary)';
            }
          }}
        >
          {chunking && <Loader size={20} className="animate-spin" />}
          {chunking ? 'Chunking Documents...' : 'Start Chunking'}
        </button>
      </div>
    </div>
  );
}

export default ChunkingMethodStep;

