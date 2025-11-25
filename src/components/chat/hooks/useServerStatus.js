import { useState, useEffect } from 'react';

/**
 * Custom hook for monitoring server status
 */
export function useServerStatus(pollingInterval = 5000) {
  const [serverStatus, setServerStatus] = useState('checking');

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/health', {
          method: 'GET',
          signal: AbortSignal.timeout(3000),
        });
        if (response.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('offline');
        }
      } catch (error) {
        setServerStatus('offline');
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, pollingInterval);
    return () => clearInterval(interval);
  }, [pollingInterval]);

  return serverStatus;
}

