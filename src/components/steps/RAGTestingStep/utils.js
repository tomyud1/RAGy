/**
 * Format time in seconds to human-readable string
 */
export function formatTime(seconds) {
  if (!seconds) return 'N/A';
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}m ${secs}s`;
}

/**
 * Get color based on similarity score
 */
export function getSimilarityColor(similarity) {
  if (similarity >= 0.8) return '#22c55e';
  if (similarity >= 0.6) return '#eab308';
  return '#ef4444';
}

