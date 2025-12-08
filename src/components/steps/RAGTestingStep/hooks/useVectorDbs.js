import { useState, useEffect, useCallback } from 'react';
import { API_BASE } from '../../../../constants/api';

/**
 * Custom hook for managing vector database operations
 */
export function useVectorDbs(projectId) {
  const [availableDbs, setAvailableDbs] = useState([]);
  const [selectedDbs, setSelectedDbs] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadVectorDbs = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE}/api/projects/${projectId}/vector-dbs`);
      const data = await response.json();
      setAvailableDbs(data.vectorDbs || []);
      
      // Select all by default
      setSelectedDbs((data.vectorDbs || []).map(db => db.id));
    } catch (error) {
      console.error('Failed to load vector databases:', error);
    }
  }, [projectId]);

  useEffect(() => {
    loadVectorDbs();
  }, [loadVectorDbs]);

  const toggleDbSelection = useCallback((dbId) => {
    setSelectedDbs(prev =>
      prev.includes(dbId)
        ? prev.filter(id => id !== dbId)
        : [...prev, dbId]
    );
  }, []);

  const handleImportVectorDb = useCallback(async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('vectorDb', file);
    formData.append('projectId', projectId);

    try {
      const response = await fetch(`${API_BASE}/api/vector-db/import`, {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        await loadVectorDbs();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Failed to import:', error);
      return { success: false, error: 'Failed to import vector database' };
    }
  }, [projectId, loadVectorDbs]);

  const handleDeleteDb = useCallback(async (dbId) => {
    try {
      const response = await fetch(`${API_BASE}/api/projects/${projectId}/vector-dbs/${dbId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setDeleteConfirm(null);
        await loadVectorDbs();
        return { success: true };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Failed to delete:', error);
      return { success: false, error: 'Failed to delete vector database' };
    }
  }, [projectId, loadVectorDbs]);

  return {
    availableDbs,
    selectedDbs,
    deleteConfirm,
    setDeleteConfirm,
    toggleDbSelection,
    handleImportVectorDb,
    handleDeleteDb,
    loadVectorDbs,
  };
}

