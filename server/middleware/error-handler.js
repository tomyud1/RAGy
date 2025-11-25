/**
 * Centralized Error Handling Middleware
 * =====================================
 * 
 * This module provides consistent error handling across all API routes.
 * 
 * USAGE FOR DEVELOPERS:
 * ---------------------
 * 
 * 1. Import the error classes and handler:
 *    import { AppError, NotFoundError, ValidationError, errorHandler, asyncHandler } from '../middleware/error-handler.js';
 * 
 * 2. Wrap async route handlers with asyncHandler:
 *    router.get('/items', asyncHandler(async (req, res) => {
 *      const items = await getItems();
 *      res.json(items);
 *    }));
 * 
 * 3. Throw custom errors when needed:
 *    if (!item) throw new NotFoundError('Item not found');
 *    if (!req.body.name) throw new ValidationError('Name is required');
 * 
 * 4. Register error handler LAST in your Express app:
 *    app.use(errorHandler);
 */

/**
 * Base Application Error
 * Extend this for custom error types
 */
export class AppError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true; // Distinguishes from programming errors

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * 400 Bad Request - Invalid input
 */
export class BadRequestError extends AppError {
  constructor(message = 'Bad request') {
    super(message, 400, 'BAD_REQUEST');
  }
}

/**
 * 401 Unauthorized - Authentication required
 */
export class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required') {
    super(message, 401, 'UNAUTHORIZED');
  }
}

/**
 * 403 Forbidden - Permission denied
 */
export class ForbiddenError extends AppError {
  constructor(message = 'Permission denied') {
    super(message, 403, 'FORBIDDEN');
  }
}

/**
 * 404 Not Found - Resource doesn't exist
 */
export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
  }
}

/**
 * 422 Validation Error - Input validation failed
 */
export class ValidationError extends AppError {
  constructor(message = 'Validation failed', details = null) {
    super(message, 422, 'VALIDATION_ERROR');
    this.details = details;
  }
}

/**
 * 429 Rate Limit Error - Too many requests
 */
export class RateLimitError extends AppError {
  constructor(message = 'Too many requests', retryAfter = 60) {
    super(message, 429, 'RATE_LIMIT');
    this.retryAfter = retryAfter;
  }
}

/**
 * 503 Service Unavailable - External service down
 */
export class ServiceUnavailableError extends AppError {
  constructor(message = 'Service temporarily unavailable') {
    super(message, 503, 'SERVICE_UNAVAILABLE');
  }
}

/**
 * Async Handler Wrapper
 * Wraps async route handlers to catch errors automatically
 * 
 * Usage:
 *   router.get('/path', asyncHandler(async (req, res) => { ... }));
 */
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Log error details for debugging
 */
function logError(error, req) {
  const errorInfo = {
    message: error.message,
    code: error.code,
    statusCode: error.statusCode,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
  };

  // Only log stack trace in development
  if (process.env.NODE_ENV === 'development') {
    errorInfo.stack = error.stack;
  }

  // Log to console (in production, you'd send to a logging service)
  console.error('[ERROR]', JSON.stringify(errorInfo, null, 2));
}

/**
 * Main Error Handler Middleware
 * MUST be registered LAST after all routes
 * 
 * Usage:
 *   // At the end of your Express app setup:
 *   app.use(errorHandler);
 */
export const errorHandler = (err, req, res, next) => {
  // Log the error
  logError(err, req);

  // Handle known operational errors
  if (err instanceof AppError) {
    const response = {
      success: false,
      error: err.message,
      code: err.code,
    };

    // Include validation details if present
    if (err.details) {
      response.details = err.details;
    }

    // Include retry-after header for rate limits
    if (err instanceof RateLimitError) {
      res.setHeader('Retry-After', err.retryAfter);
    }

    return res.status(err.statusCode).json(response);
  }

  // Handle Zod validation errors
  if (err.name === 'ZodError') {
    return res.status(422).json({
      success: false,
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: err.errors,
    });
  }

  // Handle multer errors (file upload)
  if (err.name === 'MulterError') {
    return res.status(400).json({
      success: false,
      error: `File upload error: ${err.message}`,
      code: 'UPLOAD_ERROR',
    });
  }

  // Handle unknown errors
  const isDev = process.env.NODE_ENV === 'development';
  
  return res.status(500).json({
    success: false,
    error: isDev ? err.message : 'An unexpected error occurred',
    code: 'INTERNAL_ERROR',
    ...(isDev && { stack: err.stack }),
  });
};

/**
 * 404 Handler for unmatched routes
 * Register BEFORE the error handler
 * 
 * Usage:
 *   app.use(notFoundHandler);
 *   app.use(errorHandler);
 */
export const notFoundHandler = (req, res, next) => {
  next(new NotFoundError(`Route not found: ${req.method} ${req.path}`));
};

