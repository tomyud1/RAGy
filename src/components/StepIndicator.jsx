import React from 'react';
import { Check } from 'lucide-react';

function StepIndicator({ steps, currentStep, maxStepReached, onStepClick }) {
  const handleStepClick = (index) => {
    // Allow clicking on any step up to the maximum reached step
    const maxReached = maxStepReached !== undefined ? maxStepReached : currentStep;
    if (index <= maxReached && onStepClick) {
      onStepClick(index);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: 'var(--bg-secondary)',
      borderRadius: '12px',
      border: '1px solid var(--border)',
      boxShadow: '0 2px 6px var(--shadow)',
    }}>
      {steps.map((step, index) => {
        const maxReached = maxStepReached !== undefined ? maxStepReached : currentStep;
        const isClickable = index <= maxReached;

        return (
          <React.Fragment key={step.id}>
            <div
              onClick={() => handleStepClick(index)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flex: 1,
                cursor: isClickable ? 'pointer' : 'default',
                transition: 'all 0.2s',
                padding: '0.5rem',
                borderRadius: '8px',
                margin: '-0.5rem',
              }}
              onMouseEnter={(e) => {
                if (isClickable) {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: index < currentStep ? 'var(--accent-primary)' :
                             index === currentStep ? 'var(--accent-primary)' :
                             'var(--bg-tertiary)',
                  border: index === currentStep ? '2px solid var(--accent-light)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  transition: 'all 0.3s',
                }}
              >
                {index < currentStep ? <Check size={18} /> : index + 1}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  color: index <= currentStep ? 'var(--text-primary)' : 'var(--text-muted)',
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  display: index === currentStep ? 'block' : 'none',
                }}>
                  {step.description}
                </div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div style={{
                width: '40px',
                height: '2px',
                background: index < currentStep ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                transition: 'all 0.3s',
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default StepIndicator;
