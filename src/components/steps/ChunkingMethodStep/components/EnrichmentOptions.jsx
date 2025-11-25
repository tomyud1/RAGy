import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

export function EnrichmentOptions({ state }) {
  const {
    enableFormula,
    setEnableFormula,
    enablePictureClassification,
    setEnablePictureClassification,
    enablePictureDescription,
    setEnablePictureDescription,
    pictureDescriptionMaxTokens,
    setPictureDescriptionMaxTokens,
    visionModel,
    setVisionModel,
    visionBackend,
    setVisionBackend,
    enableCodeEnrichment,
    setEnableCodeEnrichment,
    enableOcr,
    setEnableOcr,
    enableTableStructure,
    setEnableTableStructure,
  } = state;

  return (
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
      <EnrichmentCheckbox
        checked={enableFormula}
        onChange={setEnableFormula}
        icon="📐"
        title="Formula Extraction"
        badge="RECOMMENDED"
        description="Extract LaTeX representations from mathematical equations. Essential for technical documents."
      />

      {/* Picture Classification */}
      <EnrichmentCheckbox
        checked={enablePictureClassification}
        onChange={setEnablePictureClassification}
        icon="🖼️"
        title="Picture Classification"
        description="Classify images as charts, diagrams, logos, or signatures. Useful for document analysis."
      />

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
          marginBottom: '0.5rem',
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
            ⚠️ <strong>Warning:</strong> Can take 3-6+ hours for large PDFs ({'>'}500 pages). Not recommended for documents with many images. Use "Fast Mode" preset instead.
          </div>
          <div style={{
            fontSize: '0.65rem',
            color: 'var(--text-tertiary)',
            background: 'var(--bg-primary)',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid var(--border)'
          }}>
            <strong>Hardware Requirements:</strong><br />
            • <strong>Minimum:</strong> 4GB RAM, CPU (slow)<br />
            • <strong>Recommended:</strong> 8GB+ RAM, Apple Silicon (M1/M2/M3) or NVIDIA GPU<br />
            • <strong>Model Size:</strong> 256MB (auto-downloaded on first use)<br />
            • <strong>Speed:</strong> ~2-5s per image (GPU) vs ~10-20s per image (CPU)
          </div>
          {enablePictureDescription && (
            <>
              {/* Vision Model Selector */}
              <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Vision Model
                  <Tooltip text="SmolVLM: Free, runs locally on your machine. Fast on Apple Silicon with MLX. Gemini 2.0 Flash: Cloud API, requires internet and API key. Higher quality descriptions but costs money per image.">
                    <span style={{ marginLeft: '0.5rem', cursor: 'help', color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>ⓘ</span>
                  </Tooltip>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[
                    { value: 'smolvlm', label: 'SmolVLM (Local)', emoji: '💻' },
                    { value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash', emoji: '☁️' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={(e) => { e.stopPropagation(); setVisionModel(option.value); }}
                      style={{
                        padding: '0.35rem 0.75rem',
                        background: visionModel === option.value ? 'var(--accent-primary)' : 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        color: 'var(--text-primary)',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                        fontWeight: visionModel === option.value ? '600' : '400',
                      }}
                    >
                      {option.emoji} {option.label}
                    </button>
                  ))}
                </div>
                {visionModel === 'gemini-2.0-flash' && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    background: 'rgba(255, 193, 7, 0.1)',
                    border: '1px solid rgba(255, 193, 7, 0.3)',
                    borderRadius: '4px'
                  }}>
                    <p style={{ fontSize: '0.65rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.4' }}>
                      <strong>⚠️ API Costs:</strong> Gemini 2.0 Flash Exp is currently free (experimental), but may transition to paid. Standard Gemini 2.5 Flash costs $0.30 per 1M tokens (~$0.0003 per image for detailed descriptions). Requires Gemini API key in Settings.
                    </p>
                  </div>
                )}
              </div>

              {/* SmolVLM Backend Selector */}
              {visionModel === 'smolvlm' && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                    SmolVLM Backend
                    <Tooltip text="Transformers: Universal, works on any hardware (CPU, GPU, M-series). MLX: Optimized for Apple Silicon (M1/M2/M3), 1.5-2x faster. Auto: Detects your hardware and selects the best option.">
                      <span style={{ marginLeft: '0.5rem', cursor: 'help', color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>ⓘ</span>
                    </Tooltip>
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {[
                      { value: 'auto', label: 'Auto-detect', emoji: '🎯' },
                      { value: 'transformers', label: 'Transformers', emoji: '🔧' },
                      { value: 'mlx', label: 'MLX (Apple)', emoji: '⚡' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={(e) => { e.stopPropagation(); setVisionBackend(option.value); }}
                        style={{
                          padding: '0.35rem 0.75rem',
                          background: visionBackend === option.value ? 'var(--accent-primary)' : 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                          color: 'var(--text-primary)',
                          fontSize: '0.7rem',
                          cursor: 'pointer',
                          fontWeight: visionBackend === option.value ? '600' : '400',
                        }}
                      >
                        {option.emoji} {option.label}
                      </button>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginTop: '0.5rem', marginBottom: 0 }}>
                    {visionBackend === 'mlx' && '⚡ MLX is 1.5-2x faster on Apple Silicon (M1/M2/M3). Fallback to Transformers if MLX fails.'}
                    {visionBackend === 'transformers' && '🔧 Works on all hardware. Reliable and well-tested.'}
                    {visionBackend === 'auto' && '🎯 Recommended: Auto-detects best backend for your hardware.'}
                  </p>
                </div>
              )}

              {/* Max Tokens per Image */}
              <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: '600', display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Max Tokens per Image
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[50, 100, 200, 300, 400, 500, 800].map((value) => (
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
                  {visionModel === 'smolvlm' ?
                    'Lower = faster processing, higher = more detailed descriptions. Recommended: 100-200 for balance, 300-500 for detail, 800 for maximum detail (slowest).' :
                    'Token limit for Gemini descriptions. Gemini typically provides richer details even at lower token counts.'
                  }
                </p>
              </div>
            </>
          )}
        </div>
      </label>

      {/* Code Enrichment */}
      <EnrichmentCheckbox
        checked={enableCodeEnrichment}
        onChange={setEnableCodeEnrichment}
        icon="💻"
        title="Code Enrichment"
        description="Extract and format code blocks with syntax preservation. Useful for technical documentation."
      />

      {/* OCR */}
      <EnrichmentCheckbox
        checked={enableOcr}
        onChange={setEnableOcr}
        icon="🔍"
        title="OCR (Text Recognition)"
        badge="RECOMMENDED"
        description="Extract text from scanned documents and images. Essential for PDFs that contain images of text."
      />

      {/* Table Structure */}
      <EnrichmentCheckbox
        checked={enableTableStructure}
        onChange={setEnableTableStructure}
        icon="📊"
        title="Table Structure"
        badge="RECOMMENDED"
        description="Extract and preserve table structure with cells, rows, and columns. Essential for data-rich documents."
        isLast
      />
    </div>
  );
}

function EnrichmentCheckbox({ checked, onChange, icon, title, badge, description, isLast }) {
  return (
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
        marginBottom: isLast ? 0 : '0.5rem',
        border: checked ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
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
          <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>{icon} {title}</span>
          {badge && (
            <span style={{
              padding: '0.125rem 0.5rem',
              background: 'var(--accent-primary)',
              borderRadius: '4px',
              fontSize: '0.65rem',
              fontWeight: '600',
            }}>{badge}</span>
          )}
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
          {description}
        </p>
      </div>
    </label>
  );
}
