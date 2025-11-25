import React, { useState, useEffect, useRef } from 'react';
import { ConversionAnimation } from './ConversionAnimation';

export function ProgressDisplay({ chunking, progress, filesInfo, conversionStartTime }) {
  const [currentPageStartTime, setCurrentPageStartTime] = useState(null);
  const [currentPageElapsed, setCurrentPageElapsed] = useState(0);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [pageTimings, setPageTimings] = useState([]); // Track page conversion times (completed + in-progress)
  const [showPageTimings, setShowPageTimings] = useState(false); // Toggle for page timings
  const [currentProcessingPage, setCurrentProcessingPage] = useState(null); // Track which page is currently processing
  const lastPageRef = useRef(null);
  const timerRef = useRef(null);

  // Update total elapsed from backend progress (if available) or calculate locally
  useEffect(() => {
    if (chunking && progress && progress.total_elapsed !== undefined) {
      // Use backend-provided total_elapsed (PaddleOCR-VL sends this)
      setTotalElapsed(progress.total_elapsed);
    } else if (chunking && conversionStartTime) {
      // Fallback: calculate from conversionStartTime (for other methods)
      setTotalElapsed(Math.floor((Date.now() - conversionStartTime) / 1000));

      // Update every second
      timerRef.current = setInterval(() => {
        setTotalElapsed(Math.floor((Date.now() - conversionStartTime) / 1000));
      }, 1000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [chunking, conversionStartTime, progress?.total_elapsed]);

  // Track per-page timing
  useEffect(() => {
    if (!progress) return;

    // Check if we're on a new page (ONLY during actual processing, not pdf_to_images conversion)
    const currentPage = progress.page;
    const isActualProcessing = progress.status === 'processing' && !progress.phase;

    if (currentPage && currentPage !== lastPageRef.current && isActualProcessing) {
      // New page started
      lastPageRef.current = currentPage;
      setCurrentPageStartTime(Date.now());
      setCurrentPageElapsed(0);
      setCurrentProcessingPage({ page: currentPage, file: progress.file, totalPages: progress.total_pages, startTime: Date.now() });

      // Add in-progress page to list
      setPageTimings(prev => {
        // Remove if already exists (shouldn't happen, but safety)
        const filtered = prev.filter(t => !(t.page === currentPage && t.file === progress.file));
        return [...filtered, {
          page: currentPage,
          totalPages: progress.total_pages,
          file: progress.file,
          time: 0,
          inProgress: true,
          startTime: Date.now()
        }].sort((a, b) => a.page - b.page); // Sort by page number ascending
      });
    }

    // Store completed page timing
    if (progress.page_time_seconds && progress.page && progress.file) {
      setPageTimings(prev => {
        // Remove in-progress version, add completed version
        const filtered = prev.filter(t => !(t.page === progress.page && t.file === progress.file));
        return [...filtered, {
          page: progress.page,
          totalPages: progress.total_pages,
          file: progress.file,
          time: progress.page_time_seconds,
          inProgress: false
        }].sort((a, b) => a.page - b.page); // Sort by page number ascending
      });

      // Clear current processing page if it matches
      if (currentProcessingPage && currentProcessingPage.page === progress.page && currentProcessingPage.file === progress.file) {
        setCurrentProcessingPage(null);
      }
    }

    // Update elapsed time for current page
    if (currentPageStartTime && (progress.status === 'processing' || progress.status === 'converting')) {
      const interval = setInterval(() => {
        setCurrentPageElapsed(Math.floor((Date.now() - currentPageStartTime) / 1000));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress, progress?.page, currentPageStartTime]);

  if (!chunking || !progress) return null;

  return (
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
              <InfoSection
                title="📄 Files to Convert"
                borderColor="var(--accent-primary)"
              >
                {filesInfo.map((file, idx) => {
                  const fileType = getFileType(file.fileName);
                  return (
                    <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: idx < filesInfo.length - 1 ? '0.25rem' : 0 }}>
                      {fileType}: <strong style={{ color: 'var(--text-primary)' }}>{file.fileName}</strong> ({file.totalPages} pages)
                    </div>
                  );
                })}
              </InfoSection>

              {/* 2. Files to Split */}
              {filesInfo.some(f => f.isSplit) && (
                <InfoSection
                  title="📦 Files to Split"
                  borderColor="rgb(251, 146, 60)"
                >
                  {filesInfo.filter(f => f.isSplit).map((file, idx) => {
                    const pagesPerPart = Math.round(file.totalPages / file.totalParts);
                    return (
                      <div key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: idx < filesInfo.filter(f => f.isSplit).length - 1 ? '0.25rem' : 0 }}>
                        {file.fileName} → <strong style={{ color: 'var(--text-primary)' }}>~{pagesPerPart} pages per part, {file.totalParts} parts total</strong>
                      </div>
                    );
                  })}
                  <div style={{ fontSize: '0.7rem', fontStyle: 'italic', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                    (Prevents memory issues during conversion)
                  </div>
                </InfoSection>
              )}

              {/* 3. Files Done */}
              <InfoSection
                title="✓ Files Done"
                borderColor="rgb(34, 197, 94)"
              >
                {filesInfo.map((file, idx) => {
                  const completedParts = file.completedParts || 0;
                  const fileType = getFileType(file.fileName);
                  const isDone = file.isSplit ? (completedParts === file.totalParts) : (completedParts > 0);
                  return (
                    <div key={idx} style={{ marginBottom: idx < filesInfo.length - 1 ? '0.25rem' : 0 }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {fileType}: {file.isSplit ? `${completedParts}/${file.totalParts} parts` : (isDone ? '✓ Done' : 'In progress')}
                      </div>
                    </div>
                  );
                })}
              </InfoSection>

              {/* 4. Currently Converting - Collapsible */}
              <InfoSection
                title="🔄 Currently Converting"
                borderColor="rgb(59, 130, 246)"
                isLast
                isCollapsible
                isExpanded={showPageTimings}
                onToggle={() => setShowPageTimings(!showPageTimings)}
                badge={pageTimings.length > 0 ? `${pageTimings.filter(t => !t.inProgress).length}/${pageTimings.length} pages` : null}
              >
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  {progress && (progress.status === 'converting' || progress.status === 'processing' || progress.status === 'starting') && (
                    <>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'rgb(59, 130, 246)',
                        animation: 'pulse 1.5s ease-in-out infinite',
                      }} />
                      <span>
                        {progress.page && (progress.status === 'processing' || progress.status === 'converting' || progress.status === 'starting')
                          ? `Page ${progress.page}/${progress.total_pages || '?'} of ${progress.file}`
                          : getCurrentFileDisplay(progress, filesInfo)}
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

                {/* Page Timings List - Shows when expanded */}
                {showPageTimings && pageTimings.length > 0 && (
                  <div style={{
                    marginTop: '0.75rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border)',
                    maxHeight: '300px',
                    overflowY: 'auto'
                  }}>
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span>Page Conversion Times:</span>
                      <span style={{ fontSize: '0.65rem', fontWeight: '400' }}>
                        🔵 In Progress • ⚠️ Slow (&gt;60s)
                      </span>
                    </div>
                    {pageTimings.map((timing, idx) => {
                      const isSlow = timing.time > 60; // Flag pages taking >60 seconds
                      const isInProgress = timing.inProgress;
                      const currentTime = isInProgress ? Math.floor((Date.now() - timing.startTime) / 1000) : timing.time;

                      return (
                        <PageTimingItem
                          key={`${timing.file}-${timing.page}`}
                          timing={timing}
                          isSlow={isSlow}
                          isInProgress={isInProgress}
                          currentTime={currentTime}
                          currentFile={progress?.file}
                        />
                      );
                    })}
                  </div>
                )}
                {showPageTimings && pageTimings.length === 0 && (
                  <div style={{
                    marginTop: '0.75rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border)',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    fontStyle: 'italic'
                  }}>
                    No page timings recorded yet. Timings will appear as pages are processed.
                  </div>
                )}
              </InfoSection>
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
                {`${Math.floor(totalElapsed / 60)}:${String(totalElapsed % 60).padStart(2, '0')}`}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>
                min:sec
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Current Part Details Card - Only show during converting/chunking/processing */}
      {(progress.status === 'converting' || progress.status === 'chunking' || progress.status === 'processing' || progress.status === 'starting') && (
        <CurrentPartDetails progress={progress} currentPageElapsed={currentPageElapsed} />
      )}

      {/* Conversion Animation */}
      <ConversionAnimation progress={progress} />
    </>
  );
}

function PageTimingItem({ timing, isSlow, isInProgress, currentTime, currentFile }) {
  const [liveTime, setLiveTime] = useState(currentTime);

  // Update live time for in-progress pages
  useEffect(() => {
    if (isInProgress && timing.startTime) {
      const interval = setInterval(() => {
        setLiveTime(Math.floor((Date.now() - timing.startTime) / 1000));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setLiveTime(currentTime);
    }
  }, [isInProgress, timing.startTime, currentTime]);

  return (
    <div style={{
      fontSize: '0.75rem',
      padding: '0.4rem',
      marginBottom: '0.25rem',
      background: isInProgress ? 'rgba(59, 130, 246, 0.1)' : (isSlow ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-primary)'),
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderLeft: isInProgress ? '2px solid rgb(59, 130, 246)' : (isSlow ? '2px solid rgb(239, 68, 68)' : 'none')
    }}>
      <span style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {isInProgress && (
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgb(59, 130, 246)',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />
        )}
        Page {timing.page}/{timing.totalPages} {timing.file !== currentFile && `(${timing.file})`}
      </span>
      <span style={{
        fontWeight: '600',
        color: isInProgress ? 'rgb(59, 130, 246)' : (isSlow ? 'rgb(239, 68, 68)' : 'var(--accent-primary)'),
        fontFamily: 'monospace'
      }}>
        {liveTime.toFixed(isInProgress ? 0 : 2)}s {isSlow && !isInProgress && '⚠️'} {isInProgress && '⏱️'}
      </span>
    </div>
  );
}

function InfoSection({ title, borderColor, children, isLast, isCollapsible, isExpanded, onToggle, badge }) {
  return (
    <div style={{
      padding: '0.75rem',
      background: 'var(--bg-secondary)',
      borderRadius: '6px',
      marginBottom: isLast ? 0 : '0.75rem',
      borderLeft: `3px solid ${borderColor}`,
    }}>
      <div
        style={{
          fontSize: '0.7rem',
          color: 'var(--text-tertiary)',
          marginBottom: '0.5rem',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: isCollapsible ? 'pointer' : 'default',
          userSelect: 'none'
        }}
        onClick={isCollapsible ? onToggle : undefined}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {title}
          {badge && (
            <span style={{
              fontSize: '0.65rem',
              padding: '0.15rem 0.4rem',
              background: borderColor,
              color: 'white',
              borderRadius: '10px',
              fontWeight: '600'
            }}>
              {badge}
            </span>
          )}
        </div>
        {isCollapsible && (
          <span style={{
            fontSize: '0.9rem',
            transition: 'transform 0.2s',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>
            ▼
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function CurrentPartDetails({ progress, currentPageElapsed }) {
  return (
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
            {getStatusTitle(progress)}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            {getStatusDescription(progress)}
          </p>
          {/* Per-page timer - show for processing, converting (including batch processing) */}
          {progress.page && currentPageElapsed > 0 && (progress.status === 'processing' || progress.status === 'converting') && (
            <div style={{
              marginTop: '0.5rem',
              padding: '0.5rem',
              background: 'var(--bg-secondary)',
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Page Time: </span>
              <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--accent-primary)', fontFamily: 'monospace' }}>
                {Math.floor(currentPageElapsed / 60)}:{String(currentPageElapsed % 60).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
            {getStatusIcon(progress)}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            {getStatusLabel(progress)}
          </div>
        </div>
      </div>
    </div>
  );
}

function getFileType(fileName) {
  if (fileName.toLowerCase().endsWith('.pdf')) return 'PDF';
  if (fileName.toLowerCase().endsWith('.xlsx') || fileName.toLowerCase().endsWith('.xls')) return 'Excel';
  return 'Document';
}

function getCurrentFileDisplay(progress, filesInfo) {
  const currentFile = filesInfo.find(f => f.fileName === progress.file);
  const fileType = getFileType(progress.file);
  if (currentFile && currentFile.isSplit) {
    return `${fileType} part ${progress.current_chunk}/${currentFile.totalParts}`;
  }
  return `${fileType}: ${progress.file}`;
}

function getStatusTitle(progress) {
  const icons = {
    initializing: '🚀 Initializing...',
    starting: '📄 Starting Processing',
    processing: '⚙️ Processing Page',
    converting: '⚙️ Converting Current Part',
    converted: '✓ Part Converted',
    chunking: '✂️ Generating Chunks',
    chunked: '✓ Chunking Complete',
    completed: '✓ Document Processed',
    finalizing: '✨ Finalizing',
    saving: '💾 Saving to Disk',
    saved: '✓ Part Saved',
    error: '❌ Error'
  };

  const title = icons[progress.status] || '';
  if (progress.total_chunks > 1 && progress.current_chunk) {
    return (
      <>
        {title}
        <span style={{
          fontSize: '0.75rem',
          padding: '0.25rem 0.5rem',
          background: 'var(--accent-primary)',
          borderRadius: '4px',
          fontWeight: '600',
        }}>
          Part {progress.current_chunk}/{progress.total_chunks}
        </span>
      </>
    );
  }
  return title;
}

function getStatusDescription(progress) {
  if (progress.status === 'initializing') return 'Setting up the chunking process...';
  if (progress.status === 'starting') {
    return (
      <>
        Starting to process: {progress.file}
        {progress.device && (
          <span style={{
            display: 'block',
            marginTop: '0.25rem',
            fontSize: '0.7rem',
            color: progress.device === 'cpu' ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)'
          }}>
            {progress.device === 'mps' && '🚀 Using Apple Silicon GPU'}
            {progress.device === 'cuda' && '🚀 Using NVIDIA GPU (CUDA)'}
            {progress.device === 'cpu' && '⚠️ Using CPU (SLOW - No GPU acceleration)'}
            {progress.device === 'gpu:0' && '🚀 Using NVIDIA GPU'}
            {progress.hardware && ` • ${progress.hardware}`}
          </span>
        )}
      </>
    );
  }
  if (progress.status === 'processing') {
    return (
      <>
        Processing page {progress.page || '?'} of {progress.total_pages || '?'}: {progress.file}
        {progress.device && (
          <span style={{
            display: 'block',
            marginTop: '0.25rem',
            fontSize: '0.7rem',
            color: progress.device === 'cpu' ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)'
          }}>
            {progress.device === 'mps' && '🚀 Using Apple Silicon GPU'}
            {progress.device === 'cuda' && '🚀 Using NVIDIA GPU (CUDA)'}
            {progress.device === 'cpu' && '⚠️ Using CPU (SLOW - No GPU acceleration)'}
            {progress.device === 'gpu:0' && '🚀 Using NVIDIA GPU'}
            {progress.hardware && ` • ${progress.hardware}`}
          </span>
        )}
      </>
    );
  }
  if (progress.status === 'converting') {
    return (
      <>
        {progress.phase === 'pdf_to_images' && progress.page ? (
          <>Converting PDF to images: Page {progress.page}/{progress.total_pages} of {progress.file}</>
        ) : progress.page ? (
          <>Converting: Page {progress.page}/{progress.total_pages} of {progress.file}</>
        ) : (
          <>Processing {progress.total_pages > 0 ? `${progress.total_pages}-page` : ''} PDF: {progress.file}</>
        )}
        {progress.current_batch && progress.total_batches && (
          <span style={{ display: 'block', marginTop: '0.25rem', color: 'rgb(168, 85, 247)', fontWeight: '600', fontSize: '0.85rem' }}>
            📦 Batch {progress.current_batch} of {progress.total_batches} (pages {progress.pages})
          </span>
        )}
        {progress.total_chunks > 1 && progress.current_chunk && (
          <span style={{ display: 'block', marginTop: '0.25rem', color: 'rgb(168, 85, 247)', fontWeight: '600', fontSize: '0.85rem' }}>
            📦 Part {progress.current_chunk} of {progress.total_chunks} ({progress.chunk_pages || 0} pages in this part)
          </span>
        )}
        {progress.heartbeat && progress.elapsed && (
          <span style={{ display: 'block', marginTop: '0.25rem', color: 'var(--accent-primary)', fontWeight: '500' }}>
            ⏱️ Part elapsed: {Math.floor(progress.elapsed / 60)}m {progress.elapsed % 60}s
            {progress.device && (
              <span style={{
                display: 'block',
                fontSize: '0.7rem',
                marginTop: '0.25rem',
                color: progress.device === 'cpu' ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)'
              }}>
                {progress.device === 'mps' && '🚀 Using Apple Silicon GPU'}
                {progress.device === 'cuda' && '🚀 Using NVIDIA GPU (CUDA)'}
                {progress.device === 'cpu' && '⚠️ Using CPU (SLOW - No GPU acceleration)'}
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
        {!progress.heartbeat && progress.device && (
          <span style={{
            display: 'block',
            marginTop: '0.25rem',
            fontSize: '0.7rem',
            color: progress.device === 'cpu' ? 'rgb(239, 68, 68)' : 'var(--text-tertiary)'
          }}>
            {progress.device === 'mps' && '🚀 Using Apple Silicon GPU'}
            {progress.device === 'cuda' && '🚀 Using NVIDIA GPU (CUDA)'}
            {progress.device === 'cpu' && '⚠️ Using CPU (SLOW - No GPU acceleration)'}
            {progress.device === 'gpu:0' && '🚀 Using NVIDIA GPU'}
            {progress.hardware && ` • ${progress.hardware}`}
          </span>
        )}
        {!progress.heartbeat && !progress.device && (
          <span style={{ display: 'block', marginTop: '0.25rem', fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
            Analyzing layout, tables, and figures...
          </span>
        )}
      </>
    );
  }
  if (progress.status === 'converted') {
    return (
      <>
        ✓ Successfully converted {progress.total_pages}-page PDF
        {progress.total_chunks > 1 && progress.current_chunk && (
          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
            Part {progress.current_chunk}/{progress.total_chunks} complete
          </span>
        )}
      </>
    );
  }
  if (progress.status === 'chunking') {
    return (
      <>
        Generating chunks: {progress.chunks_so_far || 0} chunks created so far
        {progress.total_chunks > 1 && progress.current_chunk && (
          <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--text-tertiary)' }}>
            From part {progress.current_chunk}/{progress.total_chunks}
          </span>
        )}
      </>
    );
  }
  if (progress.status === 'saved') {
    return (
      <>
        💾 Saved {progress.chunks_from_this_part || 0} chunks from part {progress.current_chunk}/{progress.total_chunks}
        <span style={{ display: 'block', fontSize: '0.75rem', marginTop: '0.25rem', color: 'rgb(34, 197, 94)', fontWeight: '500' }}>
          ✓ Total: {progress.total_chunks_so_far || 0} chunks saved to disk
        </span>
      </>
    );
  }
  if (progress.status === 'completed') return `✓ All processing complete! ${progress.total_chunks || progress.total_chunks_so_far || 0} total chunks`;
  if (progress.status === 'error') return `Error processing: ${progress.file}`;
  return '';
}

function getStatusIcon(progress) {
  if (progress.total_chunks > 1 && progress.current_chunk) {
    return `${progress.current_chunk}/${progress.total_chunks}`;
  }
  if (progress.status === 'converting') return '🔄';
  if (progress.status === 'chunking') return '✂️';
  if (progress.status === 'saved') return '💾';
  return '📄';
}

function getStatusLabel(progress) {
  if (progress.total_chunks > 1) return 'Parts';
  if (progress.status === 'converting') return 'Converting';
  if (progress.status === 'chunking') return 'Chunking';
  if (progress.status === 'saved') return 'Saved';
  return 'Processing';
}
