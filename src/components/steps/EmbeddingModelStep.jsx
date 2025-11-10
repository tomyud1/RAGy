import React, { useState } from 'react';
import { Cpu, Info, ArrowRight } from 'lucide-react';
import { TEXT_SIZES, FONT_WEIGHTS } from '../../constants/ui';

const EMBEDDING_MODELS = [
  {
    id: 'all-MiniLM-L6-v2',
    name: 'all-MiniLM-L6-v2',
    dimensions: 384,
    description: 'Fast and efficient. Great for most use cases.',
    speed: 'Fast',
    quality: 'Good',
    recommended: true,
  },
  {
    id: 'bge-base-en-v1.5',
    name: 'BGE-Base-EN-v1.5',
    dimensions: 768,
    description: 'Higher quality embeddings. Better semantic understanding.',
    speed: 'Medium',
    quality: 'Excellent',
    recommended: false,
  },
  {
    id: 'all-mpnet-base-v2',
    name: 'all-mpnet-base-v2',
    dimensions: 768,
    description: 'Balanced quality and speed. Good for complex documents.',
    speed: 'Medium',
    quality: 'Very Good',
    recommended: false,
  },
];

function EmbeddingModelStep({ project, chunks, hasExistingVectorDbs, onComplete, onBack, onSkipToTesting }) {
  const [selectedModel, setSelectedModel] = useState('all-MiniLM-L6-v2');

  const handleContinue = () => {
    onComplete({ embeddingModel: selectedModel });
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Choose Embedding Model
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Select the model to generate embeddings for your chunks
      </p>

      {/* Model Selection */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {EMBEDDING_MODELS.map((model) => (
          <div
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            style={{
              padding: '1.5rem',
              background: selectedModel === model.id ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
              border: selectedModel === model.id ? '2px solid var(--accent-primary)' : '1px solid var(--border)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              if (selectedModel !== model.id) {
                e.currentTarget.style.borderColor = 'var(--accent-light)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedModel !== model.id) {
                e.currentTarget.style.borderColor = 'var(--border)';
              }
            }}
          >
            {model.recommended && (
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
                border: selectedModel === model.id ? '6px solid var(--accent-primary)' : '2px solid var(--border)',
                flexShrink: 0,
                marginTop: '0.25rem',
              }} />
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Cpu size={20} style={{ color: 'var(--accent-primary)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                    {model.name}
                  </h3>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {model.description}
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  fontSize: '0.875rem',
                }}>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Dimensions:</span>
                    <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>{model.dimensions}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Speed:</span>
                    <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>{model.speed}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-secondary)' }}>Quality:</span>
                    <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>{model.quality}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div style={{
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '2rem',
        fontSize: '0.875rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
          <Info size={20} style={{ color: 'var(--accent-primary)', marginTop: '0.125rem', flexShrink: 0 }} />
          <div>
            <strong>Need to test different models?</strong>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
              You can create multiple vector databases with different embedding models and compare them 
              in the testing phase. Your chunks are saved, so you won't need to chunk again.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
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
          Back
        </button>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          {hasExistingVectorDbs && onSkipToTesting && (
              <button
                onClick={onSkipToTesting}
                style={{
                  padding: '0.875rem 2rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--accent-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: TEXT_SIZES.buttonLarge,
                  fontWeight: FONT_WEIGHTS.semibold,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                }}
              >
                Skip to Testing
                <ArrowRight size={18} />
              </button>
          )}
          
          <button
            onClick={handleContinue}
            style={{
              padding: '0.875rem 2rem',
              background: 'var(--accent-primary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: TEXT_SIZES.buttonLarge,
              fontWeight: FONT_WEIGHTS.semibold,
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
            Start Embedding
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmbeddingModelStep;

