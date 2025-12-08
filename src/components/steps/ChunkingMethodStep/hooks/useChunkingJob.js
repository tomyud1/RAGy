import { useEffect } from 'react';
import { API_BASE, WS_BASE } from '../../../../constants/api';

export function useChunkingJob({
  project,
  files,
  state,
  onProjectDataUpdate
}) {
  const {
    setJobStatus,
    setExistingJob,
    setChunking,
    setProgress,
    setResumableProgress,
    setShowResumeOption,
    setStopping,
    setConversionStartTime,
    setConversionSummary,
    setFilesInfo,
    setProcessingSummary,
    conversionSummary,
    conversionStartTime,
    existingJob,
    selectedMethod,
    maxTokens,
    enableFormula,
    enablePictureClassification,
    enablePictureDescription,
    pictureDescriptionMaxTokens,
    visionModel,
    visionBackend,
    conversionOutputFolder,
    enableCodeEnrichment,
    enableOcr,
    enableTableStructure,
    visionBatchSize,
    processingBatchSize,
    batchSize,
  } = state;

  const checkExistingJob = async () => {
    try {
      setJobStatus('checking');

      const response = await fetch(`${API_BASE}/api/chunking/status/${project.id}`);
      const data = await response.json();

      if (data.success && data.job) {
        const job = data.job;
        setExistingJob(job);

        if (job.status === 'in-progress') {
          setJobStatus('resuming');
          setChunking(true);
          setProgress(job.progress);

          // Restore UI state from saved progress
          if (job.progress) {
            // Restore conversion start time (estimate from elapsed if available)
            if (job.progress.total_elapsed) {
              const estimatedStartTime = Date.now() - (job.progress.total_elapsed * 1000);
              setConversionStartTime(estimatedStartTime);
            } else {
              setConversionStartTime(Date.now()); // Fallback: start counting from now
            }

            // Restore files info if available
            if (job.progress.file && job.progress.total_pages) {
              const baseFileName = job.progress.file.replace(/_chunk\d+_.*\.pdf$/, '.pdf');
              setFilesInfo([{
                fileName: baseFileName,
                totalPages: job.progress.total_pages,
                totalParts: job.progress.total_chunks || 1,
                isSplit: (job.progress.total_chunks || 1) > 1,
                completedParts: job.progress.completed_parts || 0,
              }]);

              setConversionSummary({
                totalPages: job.progress.total_pages,
                fileName: job.progress.file,
                totalParts: job.progress.total_chunks || 1,
                isSplit: (job.progress.total_chunks || 1) > 1,
              });
            }
          }

          reconnectToJob(job.jobId);
        } else if (job.status === 'completed') {
          setJobStatus('completed');
        } else if (job.status === 'failed') {
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
      const response = await fetch(`${API_BASE}/api/chunking/check-resumable/${project.id}`);
      const data = await response.json();

      if (data.success && data.resumable) {
        setResumableProgress(data);
        setShowResumeOption(true);
      }
    } catch (error) {
      console.error('Failed to check resumable progress:', error);
    }
  };

  const handleWebSocketMessage = (message) => {
    if (message.type === 'chunking-progress') {
      const progressData = message.data;

      if (!progressData.heartbeat && progressData.file && progressData.total_pages) {
        const baseFileName = progressData.file.replace(/_chunk\d+_.*\.pdf$/, '.pdf');

        setFilesInfo(prev => {
          const existing = prev.find(f => f.fileName === baseFileName);

          if (!existing) {
            return [...prev, {
              fileName: baseFileName,
              totalPages: progressData.total_pages,
              totalParts: progressData.total_chunks || 1,
              isSplit: (progressData.total_chunks || 1) > 1,
              completedParts: 0,
            }];
          }

          if (progressData.status === 'saved' || progressData.status === 'completed') {
            return prev.map(f =>
              f.fileName === baseFileName
                ? {
                    ...f,
                    completedParts: progressData.completed_parts || (progressData.current_chunk || f.completedParts),
                  }
                : f
            );
          }

          return prev;
        });

        if (!conversionSummary) {
          setConversionSummary({
            totalPages: progressData.total_pages,
            fileName: progressData.file,
            totalParts: progressData.total_chunks || 1,
            isSplit: (progressData.total_chunks || 1) > 1,
          });
        }
      }

      if (!conversionStartTime) {
        setConversionStartTime(Date.now());
      }

      setProgress(progressData);
    } else if (message.type === 'chunking-complete') {
      console.log('Chunking complete! Data:', message.data);
      setChunking(false);
      setStopping(false);
      setJobStatus('completed');
      setExistingJob({
        ...existingJob,
        status: 'completed',
        chunks: message.data.chunks,
        method: message.data.method || selectedMethod
      });

      // Store the processing summary if available
      if (message.data.processing_summary) {
        setProcessingSummary({
          ...message.data.processing_summary,
          method: message.data.method || selectedMethod,
          total_time: conversionStartTime ? Math.floor((Date.now() - conversionStartTime) / 1000) : message.data.processing_summary.total_conversion_time_seconds
        });
      }

      if (onProjectDataUpdate) {
        onProjectDataUpdate();
      }
    } else if (message.type === 'chunking-error') {
      console.error('Chunking error:', message.data);
      setChunking(false);
      setStopping(false);
      setJobStatus('failed');
      alert('Chunking failed: ' + (message.data.error || 'Unknown error'));
    }
  };

  const reconnectToJob = (jobId) => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);

    ws.onopen = () => {
      console.log('Reconnected to WebSocket');
      ws.send(JSON.stringify({ type: 'subscribe', jobId }));
      setJobStatus(null);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('WebSocket message received:', message);
      handleWebSocketMessage(message);

      if (message.type === 'chunking-complete' || message.type === 'chunking-error') {
        ws.close();
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      ws.close();
      setChunking(false);
      setStopping(false);
      setJobStatus('failed');
    };

    return ws;
  };

  const handleStopChunking = async () => {
    if (!window.confirm('Stop processing immediately? All completed parts have been saved and you can resume later. The current processing part will be discarded.')) {
      return;
    }

    setStopping(true);
    try {
      const response = await fetch(`${API_BASE}/api/chunking/stop/${project.id}`, {
        method: 'POST'
      });
      const data = await response.json();

      if (data.success) {
        setChunking(false);
        setStopping(false);
        setJobStatus(null);
        setProgress(null);
        setConversionStartTime(null);
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

    if (!resume) {
      setConversionStartTime(Date.now());
      setConversionSummary(null);
      setFilesInfo([]);
      setProcessingSummary(null);
    } else if (!conversionStartTime) {
      setConversionStartTime(Date.now());
    }

    if (resume) {
      setShowResumeOption(false);
    }

    setProgress({
      type: 'progress',
      current: 0,
      total: files.length,
      file: resume ? 'Resuming from previous progress...' : 'Initializing chunking process...',
      status: 'initializing'
    });

    try {
      // Use hardcoded WebSocket URL for Electron compatibility (file:// protocol has no host)
      const ws = new WebSocket(`${WS_BASE}/ws`);

      await new Promise((resolve, reject) => {
        ws.onopen = () => {
          console.log('[Frontend] WebSocket connected');
          resolve();
        };
        ws.onerror = (error) => {
          console.error('[Frontend] WebSocket connection failed:', error);
          reject(new Error('Failed to connect to server'));
        };
        setTimeout(() => reject(new Error('WebSocket connection timeout')), 5000);
      });

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log('[Frontend] WebSocket message received:', message);
        handleWebSocketMessage(message);

        if (message.type === 'chunking-complete' || message.type === 'chunking-error') {
          ws.close();
        }
      };

      ws.onerror = (error) => {
        console.error('[Frontend] WebSocket error:', error);
        ws.close();
        setChunking(false);
        setJobStatus('failed');
        alert('Connection error. Please try again.');
      };

      console.log('[Frontend] Sending chunking request to server...', { resume });
      const response = await fetch(`${API_BASE}/api/chunking/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId: project.id,
          method: selectedMethod,
          resume: resume,
          config: {
            maxTokens,
            mergePeers: true,
            enableFormula,
            enablePictureClassification,
            enablePictureDescription,
            pictureDescriptionMaxTokens,
            visionModel,
            visionBackend,
            conversionOutputFolder,
            enableCodeEnrichment,
            enableOcr,
            enableTableStructure,
            visionBatchSize,
            processingBatchSize,
            batchSize,
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
      console.log('[Frontend] Subscribing to job:', jobId);
      ws.send(JSON.stringify({ type: 'subscribe', jobId }));

    } catch (error) {
      console.error('Chunking failed:', error);
      alert('Chunking failed: ' + error.message);
      setChunking(false);
      setJobStatus('failed');
    }
  };

  const handleUploadChunkedFile = async (e, onComplete) => {
    const file = e.target.files?.[0];
    if (!file) return;

    state.setUploadingChunked(true);
    const formData = new FormData();
    formData.append('chunkedFile', file);
    formData.append('projectId', project.id);

    try {
      const response = await fetch(`${API_BASE}/api/chunking/upload`, {
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
      state.setUploadingChunked(false);
    }
  };

  const handleChunkAgain = async () => {
    // Check if the same method is selected as last time
    const lastMethod = existingJob?.method;
    const isSameMethod = lastMethod === selectedMethod;

    // If same method, show warning and ask for confirmation
    if (isSameMethod) {
      const confirmed = window.confirm(
        `You are about to re-chunk using the same method (${selectedMethod}). This will overwrite the existing results for this method.\n\nAre you sure you want to continue?`
      );

      if (!confirmed) {
        return; // User cancelled
      }
    }

    try {
      // Clear the method-specific results
      const response = await fetch(`${API_BASE}/api/chunking/clear-method-results/${project.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method: selectedMethod })
      });

      const data = await response.json();

      if (!data.success) {
        alert('Failed to clear previous results: ' + data.error);
        return;
      }

      console.log(`Cleared ${selectedMethod} results:`, data.deletedFolder);

      // Clear the UI state
      setJobStatus(null);
      setExistingJob(null);
      setProcessingSummary(null);
      setProgress(null);
      setConversionSummary(null);
      setFilesInfo([]);
      setResumableProgress(null);
      setShowResumeOption(false);

      // Start chunking with the selected method
      handleStartChunking(false);
    } catch (error) {
      console.error('Failed to chunk again:', error);
      alert('Failed to start re-chunking: ' + error.message);
    }
  };

  // Load last chunking summary on mount
  useEffect(() => {
    const loadLastSummary = async () => {
      if (project.lastChunkingSummary) {
        setProcessingSummary(project.lastChunkingSummary);
      } else {
        try {
          const response = await fetch(`${API_BASE}/api/projects/${project.id}/chunks`);
          const data = await response.json();
          if (data && data.processing_summary) {
            setProcessingSummary(data.processing_summary);
          }
        } catch (error) {
          // No chunks yet
        }
      }
    };

    loadLastSummary();
  }, [project.id, project.lastChunkingSummary, setProcessingSummary]);

  // Load processing summary when job completes
  useEffect(() => {
    const loadProcessingSummary = async () => {
      if (state.jobStatus === 'completed') {
        try {
          const response = await fetch(`${API_BASE}/api/projects/${project.id}/chunks`);
          const data = await response.json();
          if (data && data.processing_summary) {
            setProcessingSummary(data.processing_summary);
          }
        } catch (error) {
          console.error('Failed to load processing summary:', error);
        }
      }
    };

    loadProcessingSummary();
  }, [state.jobStatus, project.id, setProcessingSummary]);

  // Check for existing job and resumable progress on mount
  useEffect(() => {
    checkExistingJob();
    checkResumable();
  }, [project.id]);

  return {
    handleStartChunking,
    handleStopChunking,
    handleUploadChunkedFile,
    handleChunkAgain,
    checkResumable,
  };
}
