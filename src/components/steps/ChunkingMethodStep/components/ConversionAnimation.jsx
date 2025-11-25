import React from 'react';
import '../styles/animations.css';

export function ConversionAnimation({ progress }) {
  return (
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
        {/* Output squares - Cyan */}
        {[0, 1.5, 3, 4.5].map((delay, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '14px',
              height: '14px',
              background: 'rgb(34, 211, 238)',
              opacity: 0.8,
              borderRadius: '2px',
              animation: `floatToPile 5s ease-in-out ${delay}s infinite`,
              boxShadow: '0 2px 6px rgba(34, 211, 238, 0.4)',
            }}
          />
        ))}
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
  );
}
