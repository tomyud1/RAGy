import React, { useState, useRef } from 'react';
import { Upload, File, X, AlertCircle } from 'lucide-react';

function FileUploadStep({ project, files, onComplete }) {
  const [uploadedFiles, setUploadedFiles] = useState(files || []);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = async (files) => {
    setUploading(true);
    const formData = new FormData();
    
    files.forEach(file => {
      formData.append('files', file);
    });

    try {
      // Pass projectId as URL parameter for reliability
      const response = await fetch(`/api/upload?projectId=${project.id}`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }
      
      const data = await response.json();
      
      if (data.success && data.files) {
        setUploadedFiles([...uploadedFiles, ...data.files]);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert(`Failed to upload files: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveFile = async (fileId) => {
    try {
      const response = await fetch(`/api/upload/${fileId}?projectId=${project.id}`, { 
        method: 'DELETE' 
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete file');
      }
      
      setUploadedFiles(uploadedFiles.filter(f => f.id !== fileId));
      console.log(`File ${fileId} deleted successfully`);
    } catch (error) {
      console.error('Failed to remove file:', error);
      alert(`Failed to delete file: ${error.message}`);
    }
  };

  const handleContinue = () => {
    onComplete({ files: uploadedFiles });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '2rem' }}>
        Upload Your Documents
      </h2>

      {/* Drag and Drop Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        style={{
          border: dragActive ? '2px solid var(--accent-primary)' : '2px dashed var(--border)',
          borderRadius: '12px',
          padding: '3rem',
          textAlign: 'center',
          background: dragActive ? 'var(--bg-tertiary)' : 'var(--bg-primary)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginBottom: '2rem',
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Drop files here or click to browse
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Supports: PDF, DOCX, XLSX, PPTX, TXT, MD, Images (JPG, PNG), HTML, and more
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
          accept=".pdf,.docx,.doc,.xlsx,.xls,.pptx,.ppt,.txt,.md,.rst,.html,.htm,.jpg,.jpeg,.png,.gif,.bmp,.tiff,.tif"
        />
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            Uploaded Files ({uploadedFiles.length})
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <File size={24} style={{ color: 'var(--accent-primary)' }} />
                  <div>
                    <div style={{ fontWeight: '500' }}>{file.name}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      {formatFileSize(file.size)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFile(file.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-hover)';
                    e.currentTarget.style.color = 'var(--error)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button - Sticky at Bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.5rem',
        background: 'linear-gradient(to top, rgba(26, 26, 26, 0.98) 0%, rgba(26, 26, 26, 0.95) 80%, rgba(26, 26, 26, 0) 100%)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        zIndex: 100,
      }}>
        <button
          onClick={handleContinue}
          disabled={uploadedFiles.length === 0 || uploading}
          style={{
            padding: '0.875rem 2rem',
            background: uploadedFiles.length > 0 && !uploading ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: uploadedFiles.length > 0 && !uploading ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
          onMouseEnter={(e) => {
            if (uploadedFiles.length > 0 && !uploading) {
              e.currentTarget.style.background = 'var(--accent-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (uploadedFiles.length > 0 && !uploading) {
              e.currentTarget.style.background = 'var(--accent-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            }
          }}
        >
          {uploading ? 'Uploading...' : 'Continue to Chunking'}
        </button>
        <div style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <AlertCircle size={16} style={{ color: 'var(--accent-primary)' }} />
          <span><strong>Tip:</strong> Already have chunked data? Upload in the next step.</span>
        </div>
      </div>
    </div>
  );
}

export default FileUploadStep;

