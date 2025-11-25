/**
 * Rate Limiter with Exponential Backoff
 * Handles API rate limiting with automatic retries
 */

/**
 * Sleep for a given number of milliseconds
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Execute a function with exponential backoff retry
 * @param {Function} fn - Async function to execute
 * @param {Object} options - Retry options
 * @returns {Promise<any>} - Result of fn
 */
export async function withRetry(fn, options = {}) {
  const {
    maxRetries = 10,
    initialBackoffMs = 2000,
    maxBackoffMs = 60000,
    onRetry = null,
  } = options;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn(attempt);
    } catch (error) {
      // Check if it's a rate limit error
      const isRateLimit = error.status === 429 || 
                          error.message?.includes('rate limit') ||
                          error.message?.includes('429');

      if (!isRateLimit || attempt === maxRetries) {
        throw error;
      }

      const waitTime = Math.min(
        initialBackoffMs * Math.pow(2, attempt - 1),
        maxBackoffMs
      );

      if (onRetry) {
        onRetry({
          attempt,
          maxRetries,
          waitTimeMs: waitTime,
          error,
        });
      }

      console.log(`Rate limited. Attempt ${attempt}/${maxRetries}. Waiting ${waitTime}ms...`);
      await sleep(waitTime);
    }
  }
}

/**
 * Create a rate limiter for a specific provider
 * @param {Object} config - Rate limit configuration
 * @returns {Object} - Rate limiter instance
 */
export function createRateLimiter(config = {}) {
  const { requestsPerMinute = 60 } = config;
  const timestamps = [];

  return {
    /**
     * Wait if necessary to respect rate limits
     */
    async throttle() {
      const now = Date.now();
      const windowStart = now - 60000; // 1 minute window
      
      // Remove old timestamps
      while (timestamps.length > 0 && timestamps[0] < windowStart) {
        timestamps.shift();
      }

      if (timestamps.length >= requestsPerMinute) {
        const oldestTimestamp = timestamps[0];
        const waitTime = 60000 - (now - oldestTimestamp) + 100; // +100ms buffer
        
        if (waitTime > 0) {
          console.log(`Rate limit: waiting ${Math.round(waitTime / 1000)}s`);
          await sleep(waitTime);
        }
      }

      timestamps.push(Date.now());
    },
  };
}

