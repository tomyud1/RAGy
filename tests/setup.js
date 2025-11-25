/**
 * Test Setup File
 * ================
 * 
 * This file runs before all tests.
 * Use it to set up global mocks, polyfills, and test utilities.
 */

import { vi } from 'vitest';

// Mock fetch for Node.js tests
global.fetch = vi.fn();

// Mock console methods in tests to reduce noise
// Uncomment if you want cleaner test output:
// global.console = {
//   ...console,
//   log: vi.fn(),
//   warn: vi.fn(),
//   error: vi.fn(),
// };

// Clean up after each test
afterEach(() => {
  vi.clearAllMocks();
});

