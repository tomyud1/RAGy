import React, { useState, useEffect } from 'react';
import { Scissors, Upload, CheckCircle, Loader, Info, RefreshCw, AlertTriangle } from 'lucide-react';
import { TEXT_SIZES, FONT_WEIGHTS } from '../../constants/ui';

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
  const [pictureDescriptionMaxTokens, setPictureDescriptionMaxTokens] = useState(100); // Default 100 tokens per image
  const [enableCodeEnrichment, setEnableCodeEnrichment] = useState(false);
  const [enableOcr, setEnableOcr] = useState(true); // Default to true for OCR
  const [enableTableStructure, setEnableTableStructure] = useState(true); // Default to true for tables
  const [visionBatchSize, setVisionBatchSize] = useState(4); // Default 4 for vision model
  const [processingBatchSize, setProcessingBatchSize] = useState(4); // Default 4 for OCR/layout/table
  const [chunking, setChunking] = useState(false);
  const [uploadingChunked, setUploadingChunked] = useState(false);
  const [showUploadChunked, setShowUploadChunked] = useState(false);
  const [progress, setProgress] = useState(null);
  const [jobStatus, setJobStatus] = useState(null); // 'checking' | 'resuming' | 'completed' | 'failed' | null
  const [existingJob, setExistingJob] = useState(null);
  const [resumableProgress, setResumableProgress] = useState(null);
  const [showResumeOption, setShowResumeOption] = useState(false);
  const [stopping, setStopping] = useState(false);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0); // Total time across all parts
  const [currentPartStartTime, setCurrentPartStartTime] = useState(null);
  const [conversionSummary, setConversionSummary] = useState(null); // Summary info about the conversion
  const [filesInfo, setFilesInfo] = useState([]); // Track all files being processed

  // Persist state to localStorage for page refresh recovery
  useEffect(() => {
    const persistKey = `chunking_state_${project.id}`;
    if (chunking && progress) {
      localStorage.setItem(persistKey, JSON.stringify({
        chunking: true,
        progress: progress,
        timestamp: Date.now()
      }));
    } else {
      localStorage.removeItem(persistKey);
    }
  }, [chunking, progress, project.id]);

  // Restore state from localStorage on mount
  useEffect(() => {
    const persistKey = `chunking_state_${project.id}`;
    const saved = localStorage.getItem(persistKey);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        // Only restore if less than 24 hours old
        if (Date.now() - state.timestamp < 86400000) {
          setProgress(state.progress);
        } else {
          localStorage.removeItem(persistKey);
        }
      } catch (e) {
        localStorage.removeItem(persistKey);
      }
    }
  }, [project.id]);

  // Check for existing chunking job and resumable progress on mount
  useEffect(() => {
    checkExistingJob();
    checkResumable();
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
          // Chunking completed while user was away - just show success message
          setJobStatus('completed');
          // Don't auto-proceed - let user click Next button
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

  const checkResumable = async () => {
    try {
      const response = await fetch(`/api/chunking/check-resumable/${project.id}`);
      const data = await response.json();

      if (data.success && data.resumable) {
        setResumableProgress(data);
        setShowResumeOption(true);
      }
    } catch (error) {
      console.error('Failed to check resumable progress:', error);
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
        const progressData = message.data;

        // Build files info from progress data
        if (progressData.file && progressData.total_pages) {
          setFilesInfo(prev => {
            const existing = prev.find(f => f.fileName === progressData.file);
            if (!existing) {
              return [...prev, {
                fileName: progressData.file,
                totalPages: progressData.total_pages,
                totalParts: progressData.total_chunks || 1,
                isSplit: (progressData.total_chunks || 1) > 1,
                completedParts: 0,
                currentPart: progressData.current_chunk || 1,
                status: progressData.status
              }];
            } else {
              return prev.map(f =>
                f.fileName === progressData.file
                  ? {
                      ...f,
                      currentPart: progressData.current_chunk || f.currentPart,
                      completedParts: progressData.completed_parts || f.completedParts,
                      status: progressData.status
                    }
                  : f
              );
            }
          });
        }

        // Extract summary info on first progress update
        if (!conversionSummary && progressData.total_pages) {
          setConversionSummary({
            totalPages: progressData.total_pages,
            fileName: progressData.file,
            totalParts: progressData.total_chunks || 1,
            isSplit: (progressData.total_chunks || 1) > 1,
          });
        }

        // Track when a new part starts converting
        if (progressData.status === 'converting' && !currentPartStartTime) {
          setCurrentPartStartTime(Date.now());
        }

        // When a part is saved, add its time to total and reset part timer
        if (progressData.status === 'saved' && currentPartStartTime) {
          const partDuration = Math.floor((Date.now() - currentPartStartTime) / 1000);
          setTotalElapsedTime(prev => prev + partDuration);
          setCurrentPartStartTime(null);
        }

        setProgress(progressData);
      } else if (message.type === 'chunking-complete') {
        console.log('Chunking complete! Data:', message.data);
        ws.close();
        setChunking(false);
        setStopping(false);
        setJobStatus('completed');
        setExistingJob({ ...existingJob, status: 'completed', chunks: message.data.chunks });
        // Don't auto-proceed - let user click Next button
      } else if (message.type === 'chunking-error') {
        console.error('Chunking error:', message.data);
        ws.close();
        setChunking(false);
        setStopping(false);
        setJobStatus('failed');
        alert('Chunking failed: ' + (message.data.error || 'Unknown error'));
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      ws.close();
      setChunking(false);
      setStopping(false);
      setJobStatus('failed');
    };
  };

  const handleStopChunking = async () => {
    if (!window.confirm('Stop processing immediately? All completed parts have been saved and you can resume later. The current processing part will be discarded.')) {
      return;
    }

    setStopping(true);
    try {
      const response = await fetch(`/api/chunking/stop/${project.id}`, {
        method: 'POST'
      });
      const data = await response.json();

      if (data.success) {
        // Process is killed immediately, update UI
        setChunking(false);
        setStopping(false);
        setJobStatus(null);
        setProgress(null);
        // Reset timing states
        setCurrentPartStartTime(null);
        // Don't reset totalElapsedTime as parts completed are saved
        // Recheck for resumable progress
        checkResumable();
      } else {
        alert('Failed to stop: ' + data.error);
        setStopping(false);
      }
    } catch (error) {
      console.error('Failed to stop chunking:', error);
      alert('Failed to stop chunking: ' + error.message);
      setStopping(false);
    }
  };

  const handleStartChunking = async (resume = false) => {
    console.log('[Frontend] Starting chunking process...', { resume });
    setChunking(true);
    setJobStatus(null);

    // Reset timing state for fresh start
    if (!resume) {
      setTotalElapsedTime(0);
      setCurrentPartStartTime(null);
      setConversionSummary(null);
      setFilesInfo([]);
    }

    // Hide resume banner if resuming
    if (resume) {
      setShowResumeOption(false);
    }

    // Show immediate "Initializing" feedback
    setProgress({
      type: 'progress',
      current: 0,
      total: files.length,
      file: resume ? 'Resuming from previous progress...' : 'Initializing chunking process...',
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
          const progressData = message.data;

          // Build files info from progress data
          if (progressData.file && progressData.total_pages) {
            setFilesInfo(prev => {
              const existing = prev.find(f => f.fileName === progressData.file);
              if (!existing) {
                return [...prev, {
                  fileName: progressData.file,
                  totalPages: progressData.total_pages,
                  totalParts: progressData.total_chunks || 1,
                  isSplit: (progressData.total_chunks || 1) > 1,
                  completedParts: 0,
                  currentPart: progressData.current_chunk || 1,
                  status: progressData.status
                }];
              } else {
                return prev.map(f =>
                  f.fileName === progressData.file
                    ? {
                        ...f,
                        currentPart: progressData.current_chunk || f.currentPart,
                        completedParts: progressData.completed_parts || f.completedParts,
                        status: progressData.status
                      }
                    : f
                );
              }
            });
          }

          // Extract summary info on first progress update
          if (!conversionSummary && progressData.total_pages) {
            setConversionSummary({
              totalPages: progressData.total_pages,
              fileName: progressData.file,
              totalParts: progressData.total_chunks || 1,
              isSplit: (progressData.total_chunks || 1) > 1,
            });
          }

          // Track when a new part starts converting
          if (progressData.status === 'converting' && !currentPartStartTime) {
            setCurrentPartStartTime(Date.now());
          }

          // When a part is saved, add its time to total and reset part timer
          if (progressData.status === 'saved' && currentPartStartTime) {
            const partDuration = Math.floor((Date.now() - currentPartStartTime) / 1000);
            setTotalElapsedTime(prev => prev + partDuration);
            setCurrentPartStartTime(null); // Reset for next part
          }

          setProgress(progressData);
        } else if (message.type === 'chunking-complete') {
          console.log('Chunking complete! Data:', message.data);
          ws.close();
          setChunking(false);
          setJobStatus('completed');
          setExistingJob({ ...existingJob, status: 'completed', chunks: message.data.chunks });
          // Don't auto-proceed - let user click Next button
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
      console.log('[Frontend] Sending chunking request to server...', { resume });
      const response = await fetch('/api/chunking/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          method: selectedMethod,
          resume: resume, // Pass resume flag
          config: {
            maxTokens: maxTokens,
            mergePeers: true,
            enableFormula: enableFormula,
            enablePictureClassification: enablePictureClassification,
            enablePictureDescription: enablePictureDescription,
            pictureDescriptionMaxTokens: pictureDescriptionMaxTokens,
            enableCodeEnrichment: enableCodeEnrichment,
            enableOcr: enableOcr,
            enableTableStructure: enableTableStructure,
            visionBatchSize: visionBatchSize,
            processingBatchSize: processingBatchSize,
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
                          background: 'rgba(239, 68, 68, 0.2)',
                          color: 'rgb(239, 68, 68)',
                          borderRadius: '4px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                        }}>VERY SLOW</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0, marginBottom: '0.5rem' }}>
                        Generate AI descriptions for images using vision models (SmolVLM-256M).
                      </p>
                      <div style={{
                        fontSize: '0.7rem',
                        color: 'rgb(239, 68, 68)',
                        background: 'rgba(239, 68, 68, 0.1)',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        marginBottom: '0.5rem'
                      }}>
                        ⚠️ <strong>Warning:</strong> Can take 3-6+ hours for large PDFs (>500 pages). Not recommended for documents with many images. Use "Fast Mode" preset instead.
                      </div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: 'var(--text-tertiary)',
                        background: 'var(--bg-primary)',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        border: '1px solid var(--border)'
                      }}>
                        <strong>Hardware Requirements:</strong><br/>
                        • <strong>Minimum:</strong> 4GB RAM, CPU (slow)<br/>
                        • <strong>Recommended:</strong> 8GB+ RAM, Apple Silicon (M1/M2/M3) or NVIDIA GPU<br/>
                        • <strong>Model Size:</strong> 256MB (auto-downloaded on first use)<br/>
                        • <strong>Speed:</strong> ~2-5s per image (GPU) vs ~10-20s per image (CPU)
                      </div>
                      {enablePictureDescription && (
                        <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                          <label style={{ fontSize: '0.75rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                            Max Tokens per Image
                          </label>
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {[50, 75, 100, 150, 200].map((value) => (
                              <button
                                key={value}
                                onClick={(e) => { e.stopPropagation(); setPictureDescriptionMaxTokens(value); }}
                                style={{
                                  padding: '0.35rem 0.75rem',
                                  background: pictureDescriptionMaxTokens === value ? 'var(--accent-primary)' : 'var(--bg-primary)',
                                  border: '1px solid var(--border)',
                                  borderRadius: '4px',
                                  color: 'var(--text-primary)',
                                  fontSize: '0.7rem',
                                  cursor: 'pointer',
                                  fontWeight: pictureDescriptionMaxTokens === value ? '600' : '400',
                                }}
                              >
                                {value}
                              </button>
                            ))}
                          </div>
                          <p style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', marginBottom: 0 }}>
                            Lower = faster processing, higher = more detailed descriptions. Recommended: 50-100 for speed, 150-200 for detail.
                          </p>
                        </div>
                      )}
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

                {/* Performance Settings */}
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
                    marginBottom: '0.5rem',
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

      {/* Resume Banner */}
      {showResumeOption && !chunking && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.15))',
          border: '2px solid rgb(168, 85, 247)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginTop: '1.5rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <RefreshCw size={28} style={{ color: 'rgb(168, 85, 247)' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                Resume Previous Processing
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Found incomplete chunking process with {resumableProgress?.completedParts || 0} parts completed ({Math.round(resumableProgress?.ageHours || 0)} hours ago)
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleStartChunking(true)}
              style={{
                flex: '1',
                padding: '0.75rem 1.5rem',
                background: 'rgb(168, 85, 247)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgb(147, 51, 234)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgb(168, 85, 247)'}
            >
              <RefreshCw size={18} />
              Resume Processing
            </button>

            <button
              onClick={() => {
                if (window.confirm('Start fresh? This will discard previous progress.')) {
                  setShowResumeOption(false);
                  setResumableProgress(null);
                }
              }}
              style={{
                flex: '1',
                padding: '0.75rem 1.5rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
            >
              Start Fresh
            </button>
          </div>
        </div>
      )}

      {/* Progress Display */}
      {chunking && progress && (
        <>
          {/* Summary Card - Modular */}
          {filesInfo.length > 0 && (
            <div style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    📊 Conversion Overview
                  </h3>

                  {/* 1. Files to Convert */}
                  <div style={{
                    padding: '0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '6px',
                    marginBottom: '0.75rem',
                    borderLeft: '3px solid var(--accent-primary)',
                  }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                      📄 Files to Convert
                    </div>
                    {filesInfo.map((file, idx) => {
                      const fileType = file.fileName.toLowerCase().endsWith('.pdf') ? 'PDF' :
                                      file.fileName.toLowerCase().endsWith('.xlsx') || file.fileName.toLowerCase().endsWith('.xls') ? 'Excel' :
                                      'Document';
                      return (
                        <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: idx < filesInfo.length - 1 ? '0.25rem' : 0 }}>
                          {fileType}: <strong style={{ color: 'var(--text-primary)' }}>{file.fileName}</strong> ({file.totalPages} pages)
                        </div>
                      );
                    })}
                  </div>

                  {/* 2. Files to Split */}
                  {filesInfo.some(f => f.isSplit) && (
                    <div style={{
                      padding: '0.75rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '6px',
                      marginBottom: '0.75rem',
                      borderLeft: '3px solid rgb(251, 146, 60)',
                    }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                        📦 Files to Split
                      </div>
                      {filesInfo.filter(f => f.isSplit).map((file, idx) => (
                        <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: idx < filesInfo.filter(f => f.isSplit).length - 1 ? '0.25rem' : 0 }}>
                          {file.fileName} → <strong style={{ color: 'var(--text-primary)' }}>~100 pages parts, {file.totalParts} parts total</strong>
                        </div>
                      ))}
                      <div style={{ fontSize: '0.7rem', fontStyle: 'italic', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                        (Prevents memory issues during conversion)
                      </div>
                    </div>
                  )}

                  {/* 3. Files Done */}
                  <div style={{
                    padding: '0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '6px',
                    marginBottom: '0.75rem',
                    borderLeft: '3px solid rgb(34, 197, 94)',
                  }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem', fontWeight: '600' }}>
                      ✓ Files Done
                    </div>
                    {filesInfo.map((file, idx) => {
                      const completedParts = file.completedParts || (file.currentPart - 1) || 0;
                      const fileType = file.fileName.toLowerCase().endsWith('.pdf') ? 'PDF' :
                                      file.fileName.toLowerCase().endsWith('.xlsx') || file.fileName.toLowerCase().endsWith('.xls') ? 'Excel' :
                                      'Document';
                      return (
                        <div key={idx} style={{ marginBottom: idx < filesInfo.length - 1 ? '0.5rem' : 0 }}>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                            {fileType}: {file.isSplit ? `(${completedParts}/${file.totalParts} parts)` : (file.status === 'completed' || file.status === 'saved') ? '✓ Done' : 'In progress'}
                          </div>
                          {file.isSplit && (
                            <div style={{
                              width: '100%',
                              height: '4px',
                              background: 'var(--bg-tertiary)',
                              borderRadius: '2px',
                              overflow: 'hidden',
                            }}>
                              <div style={{
                                height: '100%',
                                width: `${(completedParts / file.totalParts) * 100}%`,
                                background: 'rgb(34, 197, 94)',
                                transition: 'width 0.5s ease',
                                borderRadius: '2px',
                              }} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* 4. Currently Converting */}
                  <div style={{
                    padding: '0.75rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '6px',
                    borderLeft: '3px solid rgb(59, 130, 246)',
                  }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem', fontWeight: '600' }}>
                      🔄 Currently Converting
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      {progress && progress.status === 'converting' && (
                        <>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'rgb(59, 130, 246)',
                            animation: 'pulse 1.5s ease-in-out infinite',
                          }} />
                          <span>
                            {(() => {
                              const currentFile = filesInfo.find(f => f.fileName === progress.file);
                              const fileType = progress.file.toLowerCase().endsWith('.pdf') ? 'PDF' :
                                              progress.file.toLowerCase().endsWith('.xlsx') || progress.file.toLowerCase().endsWith('.xls') ? 'Excel' :
                                              'Document';
                              if (currentFile && currentFile.isSplit) {
                                return `${fileType} part ${progress.current_chunk}/${currentFile.totalParts}`;
                              }
                              return `${fileType}: ${progress.file}`;
                            })()}
                          </span>
                        </>
                      )}
                      {progress && progress.status === 'chunking' && (
                        <>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'rgb(251, 146, 60)',
                            animation: 'pulse 1.5s ease-in-out infinite',
                          }} />
                          <span>Generating text chunks from converted data</span>
                        </>
                      )}
                      {progress && progress.status === 'saved' && (
                        <>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'rgb(34, 197, 94)',
                          }} />
                          <span>✓ Part saved successfully</span>
                        </>
                      )}
                      {(!progress || !progress.status || progress.status === 'initializing') && (
                        <>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--text-tertiary)',
                            animation: 'pulse 1.5s ease-in-out infinite',
                          }} />
                          <span>Preparing to start...</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Total Elapsed Time */}
                <div style={{
                  marginLeft: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  minWidth: '130px',
                }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                    Total Elapsed
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--accent-primary)', fontFamily: 'monospace' }}>
                    {Math.floor((totalElapsedTime + (progress.elapsed || 0)) / 60)}:{String((totalElapsedTime + (progress.elapsed || 0)) % 60).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>
                    min:sec
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Current Part Details Card - Only show during converting/chunking */}
          {(progress.status === 'converting' || progress.status === 'chunking') && (
            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.25rem',
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {progress.status === 'initializing' && '🚀 Initializing...'}
                {progress.status === 'processing' && '📄 Reading Document'}
                {progress.status === 'converting' && '⚙️ Converting Current Part'}
                {progress.status === 'converted' && '✓ Part Converted'}
                {progress.status === 'chunking' && '✂️ Generating Chunks'}
                {progress.status === 'chunked' && '✓ Chunking Complete'}
                {progress.status === 'completed' && '✓ Document Processed'}
                {progress.status === 'finalizing' && '✨ Finalizing'}
                {progress.status === 'saving' && '💾 Saving to Disk'}
                {progress.status === 'saved' && '✓ Part Saved'}
                {progress.status === 'error' && '❌ Error'}
                {conversionSummary && conversionSummary.isSplit && progress.current_chunk && (
                  <span style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    background: 'var(--accent-primary)',
                    borderRadius: '4px',
                    fontWeight: '600',
                  }}>
                    Part {progress.current_chunk}/{conversionSummary.totalParts}
                  </span>
                )}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {progress.status === 'initializing' && 'Setting up the chunking process...'}
                {progress.status === 'processing' && `Loading: ${progress.file}`}
                {progress.status === 'converting' && (
                  <>
                    Processing {progress.total_pages > 0 ? `${progress.total_pages}-page` : ''} PDF: {progress.file}
                    {progress.total_chunks > 1 && progress.current_chunk && (
                      <span style={{ display: 'block', marginTop: '0.25rem', color: 'rgb(168, 85, 247)', fontWeight: '600', fontSize: '0.85rem' }}>
                        📦 Part {progress.current_chunk} of {progress.total_chunks} ({progress.chunk_pages || 0} pages in this part)
                      </span>
                    )}
                    {progress.heartbeat && progress.elapsed && (
                      <span style={{ display: 'block', marginTop: '0.25rem', color: 'var(--accent-primary)', fontWeight: '500' }}>
                        ⏱️ Part elapsed: {Math.floor(progress.elapsed / 60)}m {progress.elapsed % 60}s
                        {progress.device && (
                          <span style={{ display: 'block', fontSize: '0.7rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
                            {progress.device === 'mps' && '🚀 Using Apple Silicon GPU'}
                            {progress.device === 'cuda' && '🚀 Using NVIDIA GPU (CUDA)'}
                            {progress.device === 'cpu' && '⚙️ Using CPU (no GPU acceleration)'}
                            {progress.cpu_percent > 0 && ` • CPU: ${progress.cpu_percent}%`}
                            {progress.gpu_percent !== null && progress.gpu_percent !== undefined && ` • GPU: ${progress.gpu_percent}%`}
                            {progress.memory_mb > 0 && ` • RAM: ${Math.round(progress.memory_mb)}MB`}
                            {progress.is_active && ' • ✓ Active'}
                            {progress.device === 'mps' && !progress.gpu_percent && (
                              <span style={{ display: 'block', fontSize: '0.65rem', fontStyle: 'italic', color: 'var(--text-tertiary)', marginTop: '0.15rem' }}>
                                Note: GPU% visible in Activity Monitor (not accessible programmatically on macOS)
                              </span>
                            )}
                          </span>
                        )}
                      </span>
                    )}
                    {!progress.heartbeat && (
                      <span style={{ display: 'block', marginTop: '0.25rem', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                        Analyzing layout, tables, and figures...
                      </span>
                    )}
                  </>
                )}
                {progress.status === 'converted' && (
                  <>
                    ✓ Successfully converted {progress.total_pages}-page PDF
                    {progress.total_chunks > 1 && progress.current_chunk && (
                      <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
                        Part {progress.current_chunk}/{progress.total_chunks} complete
                      </span>
                    )}
                  </>
                )}
                {progress.status === 'chunking' && (
                  <>
                    Generating chunks: {progress.chunks_so_far || 0} chunks created so far
                    {progress.total_chunks > 1 && progress.current_chunk && (
                      <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
                        From part {progress.current_chunk}/{progress.total_chunks}
                      </span>
                    )}
                  </>
                )}
                {progress.status === 'saved' && (
                  <>
                    💾 Saved {progress.chunks_from_this_part || 0} chunks from part {progress.current_chunk}/{progress.total_chunks}
                    <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'rgb(34, 197, 94)', fontWeight: '500' }}>
                      ✓ Total: {progress.total_chunks_so_far || 0} chunks saved to disk
                    </span>
                  </>
                )}
                {progress.status === 'completed' && `✓ All processing complete! ${progress.total_chunks || progress.total_chunks_so_far || 0} total chunks`}
                {progress.status === 'error' && `Error processing: ${progress.file}`}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                {progress.total_chunks > 1 && progress.current_chunk ?
                  `${progress.current_chunk}/${progress.total_chunks}` :
                  progress.status === 'converting' ? '🔄' :
                  progress.status === 'chunking' ? '✂️' :
                  progress.status === 'saved' ? '💾' :
                  '📄'}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {progress.total_chunks > 1 ? 'Parts' :
                 progress.status === 'converting' ? 'Converting' :
                 progress.status === 'chunking' ? 'Chunking' :
                 progress.status === 'saved' ? 'Saved' :
                 'Processing'}
              </div>
            </div>
          </div>

          {/* Conversion Machine Animation - Modern & Colorful */}
          <div style={{
            width: '100%',
            height: '90px',
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            overflow: 'hidden',
          }}>
            {/* Floating input shapes - Complex colorful shapes going INTO machine */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}>
              {/* Hexagon - Purple */}
              <div style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: 'linear-gradient(135deg, rgb(168, 85, 247), rgb(147, 51, 234))',
                opacity: 0.85,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animation: 'floatToMachine 6s ease-in-out 0s infinite',
                boxShadow: '0 2px 8px rgba(168, 85, 247, 0.4)',
              }} />
              {/* Circle - Blue */}
              <div style={{
                position: 'absolute',
                width: '18px',
                height: '18px',
                background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(37, 99, 235))',
                opacity: 0.85,
                borderRadius: '50%',
                animation: 'floatToMachine 6s ease-in-out 1.5s infinite',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)',
              }} />
              {/* Triangle - Green */}
              <div style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(22, 163, 74))',
                opacity: 0.85,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                animation: 'floatToMachine 6s ease-in-out 3s infinite',
                boxShadow: '0 2px 8px rgba(34, 197, 94, 0.4)',
              }} />
              {/* Pentagon - Orange */}
              <div style={{
                position: 'absolute',
                width: '19px',
                height: '19px',
                background: 'linear-gradient(135deg, rgb(251, 146, 60), rgb(249, 115, 22))',
                opacity: 0.85,
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                animation: 'floatToMachine 6s ease-in-out 4.5s infinite',
                boxShadow: '0 2px 8px rgba(251, 146, 60, 0.4)',
              }} />
            </div>

            {/* Conversion Machine - Animated gear with glow */}
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))',
              border: '2px solid var(--accent-primary)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}>
              <div style={{
                fontSize: '1.5rem',
                animation: 'spin 3s linear infinite',
              }}>⚙️</div>
            </div>

            {/* Floating output squares - Simple uniform squares going OUT from machine */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              pointerEvents: 'none',
            }}>
              {/* Output square 1 - Cyan */}
              <div style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                background: 'rgb(34, 211, 238)',
                opacity: 0.8,
                borderRadius: '2px',
                animation: 'floatToPile 5s ease-in-out 0s infinite',
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)',
              }} />
              {/* Output square 2 - Cyan */}
              <div style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                background: 'rgb(34, 211, 238)',
                opacity: 0.8,
                borderRadius: '2px',
                animation: 'floatToPile 5s ease-in-out 1.5s infinite',
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)',
              }} />
              {/* Output square 3 - Cyan */}
              <div style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                background: 'rgb(34, 211, 238)',
                opacity: 0.8,
                borderRadius: '2px',
                animation: 'floatToPile 5s ease-in-out 3s infinite',
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)',
              }} />
              {/* Output square 4 - Cyan */}
              <div style={{
                position: 'absolute',
                width: '14px',
                height: '14px',
                background: 'rgb(34, 211, 238)',
                opacity: 0.8,
                borderRadius: '2px',
                animation: 'floatToPile 5s ease-in-out 4.5s infinite',
                boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)',
              }} />
            </div>

            {/* Output Pile - Growing structure with cyan color */}
            <div style={{
              position: 'absolute',
              right: '1.5rem',
              bottom: '1rem',
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              gap: '2px',
            }}>
              {/* Build pile based on progress */}
              {Array.from({ length: Math.min(Math.floor((progress.elapsed || 0) / 5), 8) }).map((_, i) => (
                <div
                  key={`pile-${i}`}
                  style={{
                    display: 'flex',
                    gap: '2px',
                    animation: `pileAppear 0.3s ease-out ${i * 0.2}s both`,
                  }}
                >
                  {/* Create rows with varying widths for structure effect */}
                  {Array.from({ length: Math.min(3 - (i % 2), 3) }).map((_, j) => (
                    <div
                      key={`block-${i}-${j}`}
                      style={{
                        width: '12px',
                        height: '12px',
                        background: 'rgb(34, 211, 238)',
                        opacity: 0.7,
                        borderRadius: '1px',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                        boxShadow: '0 1px 4px rgba(34, 211, 238, 0.3)',
                      }}
                    />
                  ))}
                </div>
              ))}
              {/* Counter below pile */}
              <div style={{
                fontSize: '0.65rem',
                color: 'rgb(34, 211, 238)',
                marginTop: '0.5rem',
                textAlign: 'center',
                fontWeight: '600',
              }}>
                {progress.total_chunks_so_far || 0}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes floatToMachine {
              0% {
                left: 5%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 0.4;
              }
              50% {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0.8) rotate(180deg);
                opacity: 0.3;
              }
              90% {
                opacity: 0.1;
              }
              100% {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0.3) rotate(360deg);
                opacity: 0;
              }
            }

            @keyframes floatToPile {
              0% {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0.6);
                opacity: 0;
              }
              15% {
                opacity: 0.5;
              }
              50% {
                left: 75%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1);
              }
              85% {
                opacity: 0.5;
              }
              100% {
                left: 85%;
                top: 70%;
                transform: translate(-50%, -50%) scale(0.8);
                opacity: 0;
              }
            }

            @keyframes pileAppear {
              0% {
                transform: translateY(-10px) scale(0.8);
                opacity: 0;
              }
              100% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }

            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(1.1); }
            }

            .animate-spin {
              animation: spin 1s linear infinite;
            }
          `}</style>
        </div>
          )}
        </>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={onBack}
          disabled={chunking}
          style={{
            padding: '0.875rem 2rem',
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: FONT_WEIGHTS.semibold,
            fontSize: TEXT_SIZES.buttonLarge,
            cursor: chunking ? 'not-allowed' : 'pointer',
            opacity: chunking ? 0.5 : 1,
          }}
        >
          Back
        </button>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Stop Button - only show when chunking */}
          {chunking && !stopping && (
            <button
              onClick={handleStopChunking}
              style={{
                padding: '0.875rem 1.5rem',
                background: 'linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38))',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgb(220, 38, 38), rgb(185, 28, 28))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38))';
              }}
            >
              <AlertTriangle size={18} />
              Stop Processing
            </button>
          )}

          {stopping && (
            <div style={{
              padding: '0.875rem 1.5rem',
              background: 'var(--bg-tertiary)',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              fontSize: TEXT_SIZES.buttonLarge,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Loader size={18} className="animate-spin" />
              Terminating process...
            </div>
          )}

          {/* Open File Button - show when completed */}
          {jobStatus === 'completed' && (
            <button
              onClick={async () => {
                try {
                  const response = await fetch(`/api/projects/${project.id}/open-chunks-file`);
                  const data = await response.json();
                  if (!data.success) {
                    alert('Failed to open file: ' + data.error);
                  }
                } catch (error) {
                  alert('Failed to open file: ' + error.message);
                }
              }}
              style={{
                padding: '0.875rem 1.5rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-tertiary)';
              }}
            >
              📂 Open Chunks File
            </button>
          )}

          {jobStatus === 'completed' ? (
            <button
              onClick={() => onComplete({
                chunkingMethod: existingJob?.method || selectedMethod,
                chunks: existingJob?.chunks || { chunks: [] }
              })}
              style={{
                padding: '0.875rem 2rem',
                background: 'var(--accent-primary)',
                border: 'none',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent-primary)';
              }}
            >
              Next: Preview Chunks
            </button>
          ) : (
            <button
              onClick={() => handleStartChunking(false)}
              disabled={chunking}
              style={{
                padding: '0.875rem 2rem',
                background: chunking ? 'var(--bg-tertiary)' : 'var(--accent-primary)',
                border: 'none',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: FONT_WEIGHTS.semibold,
                fontSize: TEXT_SIZES.buttonLarge,
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ChunkingMethodStep;

