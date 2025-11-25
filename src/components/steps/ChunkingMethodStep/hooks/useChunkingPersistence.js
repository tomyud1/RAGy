import { useEffect } from 'react';

export function useChunkingPersistence({ project, chunking, progress, conversionStartTime, setProgress }) {
  // Persist state to localStorage for page refresh recovery
  useEffect(() => {
    const persistKey = `chunking_state_${project.id}`;
    if (chunking && progress) {
      localStorage.setItem(persistKey, JSON.stringify({
        chunking: true,
        progress: progress,
        timestamp: Date.now()
      }));
    } else {
      localStorage.removeItem(persistKey);
    }
  }, [chunking, progress, project.id]);

  // Auto-update timer display every second when conversion is running
  useEffect(() => {
    if (!conversionStartTime || !chunking) return;

    const intervalId = setInterval(() => {
      // Force re-render to update the elapsed time display
      setProgress(prev => ({ ...prev }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [conversionStartTime, chunking, setProgress]);

  // Restore state from localStorage on mount
  useEffect(() => {
    const persistKey = `chunking_state_${project.id}`;
    const saved = localStorage.getItem(persistKey);
    if (saved) {
      try {
        const state = JSON.parse(saved);
        // Only restore if less than 24 hours old
        if (Date.now() - state.timestamp < 86400000) {
          setProgress(state.progress);
        } else {
          localStorage.removeItem(persistKey);
        }
      } catch (e) {
        localStorage.removeItem(persistKey);
      }
    }
  }, [project.id, setProgress]);
}
