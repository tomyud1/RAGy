/**
 * Embedding Models Configuration
 */

export const EMBEDDING_MODELS = {
  'all-MiniLM-L6-v2': {
    name: 'Xenova/all-MiniLM-L6-v2',
    dimensions: 384,
  },
  'bge-base-en-v1.5': {
    name: 'Xenova/bge-base-en-v1.5',
    dimensions: 768,
  },
  'all-mpnet-base-v2': {
    name: 'Xenova/all-mpnet-base-v2',
    dimensions: 768,
  },
};

/**
 * Get model configuration
 * @param {string} modelId - Model ID
 * @returns {Object|null} Model config or null
 */
export function getModelConfig(modelId) {
  return EMBEDDING_MODELS[modelId] || null;
}

/**
 * Get all available models
 * @returns {Array} Array of model configs with IDs
 */
export function getAvailableModels() {
  return Object.entries(EMBEDDING_MODELS).map(([id, config]) => ({
    id,
    ...config
  }));
}

