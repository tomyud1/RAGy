/**
 * Middleware Exports
 * 
 * Usage:
 *   import { errorHandler, asyncHandler, ValidationError } from './middleware/index.js';
 *   import { validate, validateQuery, z } from './middleware/index.js';
 */

export {
  AppError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  RateLimitError,
  ServiceUnavailableError,
  asyncHandler,
  errorHandler,
  notFoundHandler,
} from './error-handler.js';

export {
  validate,
  validateQuery,
  validateParams,
  z,
} from './validate.js';

