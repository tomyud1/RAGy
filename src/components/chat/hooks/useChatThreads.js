import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing chat threads
 * Handles thread CRUD operations and persistence
 */
export function useChatThreads(projectId) {
  const [chatThreads, setChatThreads] = useState([]);
  const [currentThreadId, setCurrentThreadId] = useState(() => {
    return localStorage.getItem(`ragy-thread-${projectId}`) || null;
  });

  // Save current thread ID to localStorage
  useEffect(() => {
    if (currentThreadId) {
      localStorage.setItem(`ragy-thread-${projectId}`, currentThreadId);
    } else {
      localStorage.removeItem(`ragy-thread-${projectId}`);
    }
  }, [currentThreadId, projectId]);

  const loadChatHistory = useCallback(async (threadId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/history/${threadId}`);
      if (response.ok) {
        const history = await response.json();
        return history.messages || [];
      }
      return [];
    } catch (error) {
      console.error('Failed to load chat history:', error);
      return [];
    }
  }, []);

  const createNewThread = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/threads/${projectId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const newThread = await response.json();
        setChatThreads(prevThreads => [...prevThreads, newThread]);
        setCurrentThreadId(newThread.id);
        return newThread;
      }
      return null;
    } catch (error) {
      console.error('Failed to create chat thread:', error);
      return null;
    }
  }, [projectId]);

  const deleteThread = useCallback(async (threadId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/threads/${threadId}?projectId=${projectId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setChatThreads(prevThreads => {
          const updatedThreads = prevThreads.filter(t => t.id !== threadId);

          if (currentThreadId === threadId) {
            if (updatedThreads.length > 0) {
              const newThread = updatedThreads[updatedThreads.length - 1];
              setCurrentThreadId(newThread.id);
            } else {
              setCurrentThreadId(null);
            }
          }

          return updatedThreads;
        });
        return true;
      } else {
        const error = await response.json();
        console.error('Failed to delete thread:', error);
        alert(`Failed to delete chat thread: ${error.error || 'Unknown error'}`);
        return false;
      }
    } catch (error) {
      console.error('Failed to delete thread:', error);
      alert('Failed to delete chat thread');
      return false;
    }
  }, [projectId, currentThreadId]);

  const loadThreads = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/chat/threads/${projectId}`);
      if (response.ok) {
        const threads = await response.json();
        setChatThreads(threads);

        if (threads.length > 0) {
          if (currentThreadId && threads.some(t => t.id === currentThreadId)) {
            return { threads, selectedId: currentThreadId };
          } else {
            const lastThread = threads[threads.length - 1];
            setCurrentThreadId(lastThread.id);
            return { threads, selectedId: lastThread.id };
          }
        } else {
          return { threads: [], selectedId: null, needsNewThread: true };
        }
      }
      return { threads: [], selectedId: null, needsNewThread: true };
    } catch (error) {
      console.error('Failed to load chat threads:', error);
      return { threads: [], selectedId: null, needsNewThread: true };
    }
  }, [projectId, currentThreadId]);

  return {
    chatThreads,
    currentThreadId,
    setCurrentThreadId,
    loadChatHistory,
    createNewThread,
    deleteThread,
    loadThreads,
  };
}

