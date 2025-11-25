/**
 * SSE Stream Parser Utilities
 * Common functionality for parsing Server-Sent Events streams
 */

/**
 * Parse SSE lines from a buffer
 * @param {string} buffer - Raw text buffer
 * @returns {Object} - { events: Array, remaining: string }
 */
export function parseSSEBuffer(buffer) {
  const lines = buffer.split('\n');
  const remaining = lines.pop() || '';
  const events = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === 'data: [DONE]') continue;
    if (!trimmed.startsWith('data: ')) continue;

    const dataStr = trimmed.slice(6);
    try {
      events.push(JSON.parse(dataStr));
    } catch (e) {
      console.warn('Failed to parse SSE data:', dataStr);
    }
  }

  return { events, remaining };
}

/**
 * Create a stream reader helper
 * @param {ReadableStream} body - Response body stream
 * @returns {AsyncGenerator} - Yields parsed events
 */
export async function* createStreamReader(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const { events, remaining } = parseSSEBuffer(buffer);
      buffer = remaining;

      for (const event of events) {
        yield event;
      }
    }
  } finally {
    reader.releaseLock();
  }
}

