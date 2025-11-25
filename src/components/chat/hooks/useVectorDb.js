import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing vector database selection
 */
export function useVectorDb(projectId) {
  const [vectorDbs, setVectorDbs] = useState([]);
  const [selectedVectorDb, setSelectedVectorDb] = useState(() => {
    return localStorage.getItem(`ragy-vectordb-${projectId}`) || null;
  });
  const [vectorDbStatus, setVectorDbStatus] = useState('none');

  // Save selected vector DB to localStorage
  useEffect(() => {
    if (selectedVectorDb) {
      localStorage.setItem(`ragy-vectordb-${projectId}`, selectedVectorDb);
    } else {
      localStorage.removeItem(`ragy-vectordb-${projectId}`);
    }
  }, [selectedVectorDb, projectId]);

  // Load vector databases for the project
  useEffect(() => {
    const loadVectorDbs = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/projects/${projectId}/vector-dbs`);
        if (response.ok) {
          const data = await response.json();
          const dbs = data.vectorDbs || [];
          setVectorDbs(dbs);

          if (selectedVectorDb) {
            const dbExists = dbs.some(db => db.id === selectedVectorDb);
            if (dbExists) {
              setVectorDbStatus('loaded');
            } else {
              setSelectedVectorDb(null);
              setVectorDbStatus('none');
            }
          } else {
            setVectorDbStatus('none');
          }
        }
      } catch (error) {
        console.error('Failed to load vector databases:', error);
        setVectorDbStatus('error');
      }
    };

    loadVectorDbs();
  }, [projectId, selectedVectorDb]);

  const handleVectorDbSelect = useCallback((dbId) => {
    setSelectedVectorDb(dbId);
    setVectorDbStatus(dbId ? 'loaded' : 'none');
  }, []);

  const handleLoadFromDisk = useCallback(async () => {
    try {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.faiss,.index';
      input.multiple = false;

      input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('vectorDb', file);
        formData.append('projectId', projectId);

        try {
          const response = await fetch('http://localhost:3001/api/projects/upload-vector-db', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const dbsResponse = await fetch(`http://localhost:3001/api/projects/${projectId}/vector-dbs`);
            if (dbsResponse.ok) {
              const data = await dbsResponse.json();
              const dbs = data.vectorDbs || [];
              setVectorDbs(dbs);
              alert('Vector database loaded successfully! Select it from the dropdown to use it.');
            }
          } else {
            const error = await response.json();
            alert(`Failed to load vector database: ${error.error || 'Unknown error'}`);
            setVectorDbStatus('error');
          }
        } catch (error) {
          console.error('Failed to upload vector database:', error);
          alert('Failed to upload vector database');
          setVectorDbStatus('error');
        }
      };

      input.click();
    } catch (error) {
      console.error('Failed to load from disk:', error);
      setVectorDbStatus('error');
    }
  }, [projectId]);

  return {
    vectorDbs,
    selectedVectorDb,
    vectorDbStatus,
    handleVectorDbSelect,
    handleLoadFromDisk,
  };
}

