/**
 * Error Handler Middleware Tests
 */

import { describe, it, expect, vi } from 'vitest';
import {
  AppError,
  BadRequestError,
  NotFoundError,
  ValidationError,
  asyncHandler,
  errorHandler,
} from '../../../server/middleware/error-handler.js';

describe('Custom Error Classes', () => {
  it('should create AppError with correct properties', () => {
    const error = new AppError('Test error', 500, 'TEST_ERROR');
    
    expect(error.message).toBe('Test error');
    expect(error.statusCode).toBe(500);
    expect(error.code).toBe('TEST_ERROR');
    expect(error.isOperational).toBe(true);
  });

  it('should create BadRequestError with status 400', () => {
    const error = new BadRequestError('Invalid input');
    
    expect(error.statusCode).toBe(400);
    expect(error.code).toBe('BAD_REQUEST');
  });

  it('should create NotFoundError with status 404', () => {
    const error = new NotFoundError('Resource not found');
    
    expect(error.statusCode).toBe(404);
    expect(error.code).toBe('NOT_FOUND');
  });

  it('should create ValidationError with details', () => {
    const details = [{ field: 'name', message: 'Required' }];
    const error = new ValidationError('Validation failed', details);
    
    expect(error.statusCode).toBe(422);
    expect(error.code).toBe('VALIDATION_ERROR');
    expect(error.details).toEqual(details);
  });
});

describe('asyncHandler', () => {
  it('should pass successful results through', async () => {
    const mockHandler = vi.fn().mockResolvedValue('success');
    const mockReq = {};
    const mockRes = {};
    const mockNext = vi.fn();

    const wrapped = asyncHandler(mockHandler);
    await wrapped(mockReq, mockRes, mockNext);

    expect(mockHandler).toHaveBeenCalledWith(mockReq, mockRes, mockNext);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should catch errors and pass to next', async () => {
    const testError = new Error('Test error');
    const mockHandler = vi.fn().mockRejectedValue(testError);
    const mockReq = {};
    const mockRes = {};
    const mockNext = vi.fn();

    const wrapped = asyncHandler(mockHandler);
    await wrapped(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(testError);
  });
});

describe('errorHandler middleware', () => {
  const mockRes = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn(),
  };
  const mockReq = { path: '/test', method: 'GET' };
  const mockNext = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle AppError correctly', () => {
    const error = new NotFoundError('Item not found');
    
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      error: 'Item not found',
      code: 'NOT_FOUND',
    });
  });

  it('should handle ValidationError with details', () => {
    const details = [{ path: 'name', message: 'Required' }];
    const error = new ValidationError('Validation failed', details);
    
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(422);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details,
    });
  });

  it('should handle unknown errors in production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const error = new Error('Sensitive error message');
    
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({
      success: false,
      error: 'An unexpected error occurred',
      code: 'INTERNAL_ERROR',
    }));

    process.env.NODE_ENV = originalEnv;
  });
});

