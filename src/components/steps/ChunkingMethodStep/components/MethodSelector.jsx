import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { CHUNKING_METHODS } from '../constants';
import { EnrichmentOptions } from './EnrichmentOptions';
import { PerformanceSettings } from './PerformanceSettings';
import { PaddleOCRConfig } from './PaddleOCRConfig';

export function MethodSelector({ state }) {
  const {
    selectedMethod,
    setSelectedMethod,
    maxTokens,
    setMaxTokens,
    batchSize,
    setBatchSize,
  } = state;

  return (
    <>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.25rem' }}>
        Choose Chunking Method
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
        Select how you want to split your documents into chunks for the vector database
      </p>

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
                  {method.id === 'docling-hybrid' && (
                    <Tooltip text="The HybridChunker combines document structure awareness with token-based splitting. It first divides oversized chunks, then merges small consecutive chunks with matching headers to maintain context.">
                      <Info size={18} style={{ color: 'var(--accent-primary)', cursor: 'help' }} />
                    </Tooltip>
                  )}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                  {method.description}
                </p>

                {method.id === 'docling-hybrid' && (
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
                )}

                {/* Docling-specific Configuration */}
                {selectedMethod === 'docling-hybrid' && method.id === 'docling-hybrid' && (
                  <>
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
                        {[512, 1024, 2048, 4096].map((value) => (
                          <button
                            key={value}
                            onClick={(e) => { e.stopPropagation(); setMaxTokens(value); }}
                            style={{
                              padding: '0.4rem 0.75rem',
                              background: maxTokens === value ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                              border: '1px solid var(--border)',
                              borderRadius: '6px',
                              color: 'var(--text-primary)',
                              fontSize: '0.8rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                            }}
                          >
                            {value}
                          </button>
                        ))}
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

                    <EnrichmentOptions state={state} />
                    <PerformanceSettings state={state} />
                  </>
                )}

                {/* PaddleOCR-VL Configuration */}
                {selectedMethod === 'paddleocr-vl' && method.id === 'paddleocr-vl' && (
                  <PaddleOCRConfig batchSize={batchSize} setBatchSize={setBatchSize} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
