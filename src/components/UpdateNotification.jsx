import React, { useState, useEffect } from 'react';
import { Download, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';

function UpdateNotification() {
  const [updateInfo, setUpdateInfo] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only run in Electron
    if (!window.electronAPI) return;

    // Listen for update events
    window.electronAPI.onUpdateAvailable((info) => {
      console.log('[Update] Available:', info);
      setUpdateInfo(info);
      setDismissed(false);
    });

    window.electronAPI.onDownloadProgress((progress) => {
      console.log('[Update] Progress:', progress.percent);
      setDownloadProgress(progress.percent);
    });

    window.electronAPI.onUpdateDownloaded((info) => {
      console.log('[Update] Downloaded:', info);
      setDownloaded(true);
      setDownloading(false);
    });

    window.electronAPI.onUpdateError((err) => {
      console.error('[Update] Error:', err);
      setError(err.message);
      setDownloading(false);
    });

    // Check for updates on mount
    window.electronAPI.checkForUpdates().then((result) => {
      console.log('[Update] Check result:', result);
    });
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    try {
      await window.electronAPI.downloadUpdate();
    } catch (err) {
      setError(err.message);
      setDownloading(false);
    }
  };

  const handleInstall = () => {
    window.electronAPI.quitAndInstall();
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  // Don't show if not in Electron or no update available or dismissed
  if (!window.electronAPI || !updateInfo || dismissed) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
      border: '1px solid var(--accent-primary)',
      borderRadius: '12px',
      padding: '1.25rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      zIndex: 9999,
      maxWidth: '360px',
      animation: 'slideIn 0.3s ease-out',
    }}>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {downloaded ? (
            <CheckCircle size={20} style={{ color: 'rgb(34, 197, 94)' }} />
          ) : error ? (
            <AlertCircle size={20} style={{ color: 'rgb(239, 68, 68)' }} />
          ) : (
            <Download size={20} style={{ color: 'var(--accent-primary)' }} />
          )}
          <span style={{ fontWeight: '600', fontSize: '1rem' }}>
            {downloaded ? 'Update Ready!' : error ? 'Update Error' : 'Update Available'}
          </span>
        </div>
        <button
          onClick={handleDismiss}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
        {downloaded 
          ? `Version ${updateInfo.version} is ready to install. Restart the app to apply the update.`
          : error
          ? error
          : `A new version (${updateInfo.version}) is available.`
        }
      </p>

      {/* Progress bar */}
      {downloading && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{
            height: '6px',
            background: 'var(--bg-primary)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${downloadProgress}%`,
              background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-light))',
              borderRadius: '3px',
              transition: 'width 0.3s ease',
            }} />
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem', textAlign: 'center' }}>
            Downloading... {Math.round(downloadProgress)}%
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {downloaded ? (
          <button
            onClick={handleInstall}
            style={{
              flex: 1,
              padding: '0.625rem 1rem',
              background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(22, 163, 74))',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontWeight: '600',
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <CheckCircle size={16} />
            Restart & Install
          </button>
        ) : error ? (
          <button
            onClick={handleDownload}
            style={{
              flex: 1,
              padding: '0.625rem 1rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontWeight: '500',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Retry Download
          </button>
        ) : downloading ? (
          <button
            disabled
            style={{
              flex: 1,
              padding: '0.625rem 1rem',
              background: 'var(--bg-tertiary)',
              border: 'none',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              fontWeight: '500',
              fontSize: '0.875rem',
              cursor: 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <Loader size={16} className="animate-spin" />
            Downloading...
          </button>
        ) : (
          <>
            <button
              onClick={handleDismiss}
              style={{
                padding: '0.625rem 1rem',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              Later
            </button>
            <button
              onClick={handleDownload}
              style={{
                flex: 1,
                padding: '0.625rem 1rem',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <Download size={16} />
              Download Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UpdateNotification;



