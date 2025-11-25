import React from 'react';
import { Search, Upload } from 'lucide-react';

import { useVectorDbs, useSearch } from './hooks';
import {
  VectorDbList,
  SearchParams,
  SearchResults,
  DeleteConfirmModal,
} from './components';

/**
 * RAG Testing Step - Refactored with hooks and components
 */
function RAGTestingStep({ project, onBack }) {
  const {
    availableDbs,
    selectedDbs,
    deleteConfirm,
    setDeleteConfirm,
    toggleDbSelection,
    handleImportVectorDb,
    handleDeleteDb,
  } = useVectorDbs(project.id);

  const {
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
  } = useSearch(project.id);

  const onImport = async (e) => {
    const file = e.target.files?.[0];
    const result = await handleImportVectorDb(file);
    if (!result.success) {
      alert('Failed to import vector database: ' + result.error);
    }
  };

  const onDelete = async () => {
    const result = await handleDeleteDb(deleteConfirm.dbId);
    if (!result.success) {
      alert('Failed to delete vector database: ' + result.error);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Test RAG System
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Query your vector databases and compare results
      </p>

      {/* Vector Database Selection */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Available Vector Databases ({availableDbs.length})
          </h3>
          
          <label style={{
            padding: '0.5rem 1rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.875rem',
          }}>
            <Upload size={16} />
            Import DB
            <input
              type="file"
              accept=".hnsw,.json"
              onChange={onImport}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <VectorDbList
          availableDbs={availableDbs}
          selectedDbs={selectedDbs}
          toggleDbSelection={toggleDbSelection}
          setDeleteConfirm={setDeleteConfirm}
        />
      </div>

      {/* Search Section */}
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
          Search Query
        </h3>

        {/* Search Parameters */}
        <SearchParams
          topK={topK}
          setTopK={setTopK}
          minSimilarity={minSimilarity}
          setMinSimilarity={setMinSimilarity}
          minTokens={minTokens}
          setMinTokens={setMinTokens}
        />

        {/* Query Input */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query..."
            style={{
              flex: 1,
              padding: '1rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical',
              minHeight: '100px',
            }}
          />
          <button
            onClick={() => handleSearch(selectedDbs)}
            disabled={!query.trim() || selectedDbs.length === 0 || searching}
            style={{
              padding: '1rem 2rem',
              background: selectedDbs.length === 0 ? 'var(--text-muted)' : 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: selectedDbs.length === 0 ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '600',
              opacity: searching ? 0.7 : 1,
            }}
          >
            <Search size={20} />
            {searching ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {/* Search Results */}
      <SearchResults
        results={results}
        expandedResult={expandedResult}
        setExpandedResult={setExpandedResult}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        deleteConfirm={deleteConfirm}
        onConfirm={onDelete}
        onCancel={() => setDeleteConfirm(null)}
      />

      {/* Back Button */}
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={onBack}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          ← Back to Embedding
        </button>
      </div>
    </div>
  );
}

export default RAGTestingStep;

