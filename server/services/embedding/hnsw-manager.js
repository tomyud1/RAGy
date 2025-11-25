/**
 * HNSW Index Manager for Embedding Service
 * Handles vector index creation, saving, and loading
 */

import hnswlib from 'hnswlib-node';
import fs from 'fs/promises';
import path from 'path';

/**
 * Create a new HNSW index
 * @param {number} dimensions - Vector dimensions
 * @param {number} maxElements - Maximum number of elements
 * @returns {Object} HNSW index
 */
export function createIndex(dimensions, maxElements) {
  const index = new hnswlib.HierarchicalNSW('cosine', dimensions);
  index.initIndex(maxElements);
  return index;
}

/**
 * Add a point to the index
 * @param {Object} index - HNSW index
 * @param {Array} embedding - Embedding vector
 * @param {number} id - Point ID
 */
export function addPoint(index, embedding, id) {
  const embeddingArray = Array.isArray(embedding) ? embedding : Array.from(embedding);
  index.addPoint(embeddingArray, id);
}

/**
 * Save vector database to disk
 * @param {Object} index - HNSW index
 * @param {Array} metadata - Metadata array
 * @param {Object} config - Configuration object
 * @param {string} vectorDbDir - Directory path
 */
export async function saveVectorDb(index, metadata, config, vectorDbDir) {
  await fs.mkdir(vectorDbDir, { recursive: true });

  // Save index
  index.writeIndexSync(path.join(vectorDbDir, 'index.hnsw'));

  // Save metadata
  await fs.writeFile(
    path.join(vectorDbDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );

  // Save config
  await fs.writeFile(
    path.join(vectorDbDir, 'config.json'),
    JSON.stringify(config, null, 2)
  );
}

/**
 * Load a vector database from disk
 * @param {string} vectorDbDir - Directory path
 * @returns {Object} { index, metadata, config }
 */
export async function loadVectorDb(vectorDbDir) {
  // Load config first to get dimensions
  const configPath = path.join(vectorDbDir, 'config.json');
  const configData = await fs.readFile(configPath, 'utf-8');
  const config = JSON.parse(configData);

  // Load index
  const index = new hnswlib.HierarchicalNSW('cosine', config.dimensions);
  index.readIndexSync(path.join(vectorDbDir, 'index.hnsw'));

  // Load metadata
  const metadataPath = path.join(vectorDbDir, 'metadata.json');
  const metadataData = await fs.readFile(metadataPath, 'utf-8');
  const metadata = JSON.parse(metadataData);

  return { index, metadata, config };
}

/**
 * Query the index for nearest neighbors
 * @param {Object} index - HNSW index
 * @param {Array} queryVector - Query vector
 * @param {number} k - Number of neighbors
 * @returns {Object} { neighbors, distances }
 */
export function queryIndex(index, queryVector, k = 5) {
  const result = index.searchKnn(queryVector, k);
  return {
    neighbors: result.neighbors,
    distances: result.distances
  };
}

