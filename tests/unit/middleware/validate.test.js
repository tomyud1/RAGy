/**
 * Validation Middleware Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { validate, validateQuery, z } from '../../../server/middleware/validate.js';

describe('validate middleware', () => {
  const schema = z.object({
    name: z.string().min(1),
    age: z.number().optional(),
  });

  it('should pass valid body through', () => {
    const mockReq = { body: { name: 'Test' } };
    const mockRes = {};
    const mockNext = vi.fn();

    validate(schema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith();
    expect(mockReq.body).toEqual({ name: 'Test' });
  });

  it('should strip extra fields', () => {
    const mockReq = { body: { name: 'Test', extraField: 'ignored' } };
    const mockRes = {};
    const mockNext = vi.fn();

    validate(schema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith();
    expect(mockReq.body.extraField).toBeUndefined();
  });

  it('should fail on invalid body', () => {
    const mockReq = { body: { name: '' } }; // Empty string fails min(1)
    const mockRes = {};
    const mockNext = vi.fn();

    validate(schema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalled();
    const error = mockNext.mock.calls[0][0];
    expect(error.statusCode).toBe(422);
    expect(error.code).toBe('VALIDATION_ERROR');
  });
});

describe('validateQuery middleware', () => {
  const schema = z.object({
    page: z.coerce.number().min(1).default(1),
    limit: z.coerce.number().min(1).max(100).default(10),
  });

  it('should validate and transform query params', () => {
    const mockReq = { query: { page: '2', limit: '20' } };
    const mockRes = {};
    const mockNext = vi.fn();

    validateQuery(schema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith();
    expect(mockReq.query).toEqual({ page: 2, limit: 20 });
  });

  it('should apply defaults for missing params', () => {
    const mockReq = { query: {} };
    const mockRes = {};
    const mockNext = vi.fn();

    validateQuery(schema)(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith();
    expect(mockReq.query).toEqual({ page: 1, limit: 10 });
  });
});

