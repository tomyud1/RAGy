import { useState, useRef, useEffect } from 'react';
import { Database, ChevronDown, Upload, FolderOpen } from 'lucide-react';
import './VectorDbSelector.css';

const VectorDbSelector = ({
  vectorDbs,
  selectedVectorDb,
  onVectorDbSelect,
  onLoadFromDisk,
  dbStatus,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentDb = vectorDbs.find(db => db.id === selectedVectorDb);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusClass = () => {
    if (dbStatus === 'loaded') return 'status-loaded';
    if (dbStatus === 'error') return 'status-error';
    return 'status-none';
  };

  return (
    <div className="vectordb-selector" ref={dropdownRef}>
      <button
        className={`vectordb-selector-btn ${getStatusClass()}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Database size={16} />
        <span>{currentDb ? `${currentDb.modelId} (${currentDb.chunkCount} chunks)` : 'None'}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="vectordb-dropdown">
          <div className="vectordb-dropdown-header">
            <span>Vector Databases</span>
          </div>

          <div className="vectordb-list">
            {/* None option - always show this */}
            <div
              className={`vectordb-item ${!selectedVectorDb ? 'active' : ''}`}
            >
              <button
                className="vectordb-item-btn"
                onClick={() => {
                  onVectorDbSelect(null);
                  setIsOpen(false);
                }}
              >
                <Database size={14} />
                <div className="vectordb-info">
                  <span className="vectordb-name">None</span>
                  <span className="vectordb-meta">
                    Chat without document search
                  </span>
                </div>
              </button>
            </div>

            {/* Available vector databases */}
            {vectorDbs.length === 0 ? (
              <div className="vectordb-empty">No vector databases available</div>
            ) : (
              vectorDbs.map(db => (
                <div
                  key={db.id}
                  className={`vectordb-item ${db.id === selectedVectorDb ? 'active' : ''}`}
                >
                  <button
                    className="vectordb-item-btn"
                    onClick={() => {
                      onVectorDbSelect(db.id);
                      setIsOpen(false);
                    }}
                  >
                    <Database size={14} />
                    <div className="vectordb-info">
                      <span className="vectordb-name">{db.modelId}</span>
                      <span className="vectordb-meta">
                        {db.chunkCount} chunks • {db.dimensions}D
                      </span>
                    </div>
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="vectordb-actions">
            <button
              className="load-from-disk-btn"
              onClick={() => {
                onLoadFromDisk();
                setIsOpen(false);
              }}
              title="Load from disk"
            >
              <FolderOpen size={16} />
              <span>Load from Disk</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VectorDbSelector;
