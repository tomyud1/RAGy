import React from 'react';
import { CheckCircle } from 'lucide-react';

export function ProcessingSummary({ processingSummary, chunking }) {
  if (!processingSummary || chunking) return null;

  // Detect method
  const method = processingSummary.method || 'docling-hybrid';
  const methodName = method === 'paddleocr-vl' ? 'PaddleOCR-VL' : 'Docling Hybrid';
  const isPaddleOCR = method === 'paddleocr-vl';

  // Format conversion time
  const formatTime = (seconds) => {
    if (!seconds) return '0:00:00';
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const totalTime = processingSummary.total_conversion_time_seconds || processingSummary.total_time || 0;
  const formattedTime = processingSummary.total_conversion_time_formatted || formatTime(totalTime);

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))',
      border: '2px solid rgb(34, 197, 94)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <CheckCircle size={24} style={{ color: 'rgb(34, 197, 94)' }} />
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
            Chunking Complete
          </h3>
        </div>
        <div style={{
          padding: '0.5rem 1rem',
          background: 'var(--bg-primary)',
          borderRadius: '6px',
          border: '1px solid var(--border)',
          fontSize: '0.875rem',
          fontWeight: '600',
          color: 'var(--accent-primary)'
        }}>
          {methodName}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '1rem',
      }}>
        {/* Files Processed */}
        <div style={{
          background: 'var(--bg-primary)',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
            FILES PROCESSED
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
            {isPaddleOCR ? (
              // PaddleOCR format
              <div>
                {processingSummary.files_processed || 0} file{processingSummary.files_processed !== 1 ? 's' : ''}
                {processingSummary.total_pages > 0 && ` (${processingSummary.total_pages} pages)`}
              </div>
            ) : (
              // Docling format
              Object.entries(processingSummary.files_processed || {}).map(([type, info]) => (
                <div key={type} style={{ marginBottom: '0.25rem' }}>
                  {info.count} {type.toUpperCase()}{info.count > 1 ? 's' : ''}
                  {info.pages > 0 && ` (${info.pages} pages)`}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Conversion Time */}
        <div style={{
          background: 'var(--bg-primary)',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
            CONVERSION TIME
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>
            {formattedTime}
          </div>
          {isPaddleOCR && processingSummary.avg_time_per_page && (
            <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
              {processingSummary.avg_time_per_page.toFixed(1)}s avg/page
            </div>
          )}
        </div>

        {/* Output Files */}
        <div style={{
          background: 'var(--bg-primary)',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
            OUTPUT FILES
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
            {processingSummary.output_files?.images > 0 && (
              <div>{processingSummary.output_files.images} extracted images</div>
            )}
            {processingSummary.output_files?.markdown_files > 0 && (
              <div>{processingSummary.output_files.markdown_files} markdown file(s)</div>
            )}
          </div>
        </div>

        {/* Total Chunks */}
        <div style={{
          background: 'var(--bg-primary)',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
            TOTAL CHUNKS
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)' }}>
            {processingSummary.total_chunks?.toLocaleString() || '0'}
          </div>
        </div>

        {/* Hardware Info (PaddleOCR only) */}
        {isPaddleOCR && processingSummary.hardware && (
          <div style={{
            background: 'var(--bg-primary)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
              HARDWARE
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              {processingSummary.hardware}
            </div>
            {processingSummary.device && (
              <div style={{
                fontSize: '0.75rem',
                marginTop: '0.25rem',
                color: processingSummary.device === 'cpu' ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)'
              }}>
                {processingSummary.device === 'cpu' && '⚠️ CPU mode (slow)'}
                {processingSummary.device.includes('gpu') && '🚀 GPU accelerated'}
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{
        fontSize: '0.75rem',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
      }}>
        Completed at: {processingSummary.completed_at || new Date().toLocaleString()}
      </div>
    </div>
  );
}
