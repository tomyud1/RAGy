import { useState, useCallback } from 'react';
import { API_BASE } from '../../../../constants/api';

/**
 * Custom hook for managing RAG search operations
 */
export function useSearch(projectId) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const [expandedResult, setExpandedResult] = useState(null);

  // Search parameters
  const [topK, setTopK] = useState(5);
  const [minSimilarity, setMinSimilarity] = useState(0.55);
  const [minTokens, setMinTokens] = useState(0);

  const handleSearch = useCallback(async (selectedDbs) => {
    if (!query.trim() || selectedDbs.length === 0) return;
    
    setSearching(true);
    
    try {
      const response = await fetch(`${API_BASE}/api/rag/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query.trim(),
          projectId,
          vectorDbIds: selectedDbs,
          topK,
          minSimilarity,
          minTokens,
        }),
      });
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
      alert('Search failed. Please try again.');
    } finally {
      setSearching(false);
    }
  }, [query, projectId, topK, minSimilarity, minTokens]);

  const clearResults = useCallback(() => {
    setResults(null);
    setExpandedResult(null);
  }, []);

  return {
    query,
    setQuery,
    results,
    searching,
    expandedResult,
    setExpandedResult,
    topK,
    setTopK,
    minSimilarity,
    setMinSimilarity,
    minTokens,
    setMinTokens,
    handleSearch,
    clearResults,
  };
}

