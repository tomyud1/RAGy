/**
 * Request Validation Middleware using Zod
 * ========================================
 * 
 * This module provides request validation using Zod schemas.
 * 
 * USAGE FOR DEVELOPERS:
 * ---------------------
 * 
 * 1. Define a Zod schema:
 *    import { z } from 'zod';
 *    
 *    const createProjectSchema = z.object({
 *      name: z.string().min(1).max(100),
 *      description: z.string().optional(),
 *    });
 * 
 * 2. Use the validate middleware in your route:
 *    import { validate } from '../middleware/validate.js';
 *    
 *    router.post('/', validate(createProjectSchema), async (req, res) => {
 *      // req.body is now validated and typed
 *      const { name, description } = req.body;
 *    });
 * 
 * 3. Available validators:
 *    - validate(schema) - validates req.body
 *    - validateQuery(schema) - validates req.query
 *    - validateParams(schema) - validates req.params
 */

import { z } from 'zod';
import { ValidationError } from './error-handler.js';

/**
 * Create a validation middleware for request body
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @returns {Function} Express middleware
 */
export function validate(schema) {
  return (req, res, next) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const details = error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message,
        }));
        next(new ValidationError('Request validation failed', details));
      } else {
        next(error);
      }
    }
  };
}

/**
 * Create a validation middleware for query parameters
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @returns {Function} Express middleware
 */
export function validateQuery(schema) {
  return (req, res, next) => {
    try {
      req.query = schema.parse(req.query);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const details = error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message,
        }));
        next(new ValidationError('Query validation failed', details));
      } else {
        next(error);
      }
    }
  };
}

/**
 * Create a validation middleware for URL parameters
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @returns {Function} Express middleware
 */
export function validateParams(schema) {
  return (req, res, next) => {
    try {
      req.params = schema.parse(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const details = error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message,
        }));
        next(new ValidationError('URL parameter validation failed', details));
      } else {
        next(error);
      }
    }
  };
}

// Re-export Zod for convenience
export { z };

