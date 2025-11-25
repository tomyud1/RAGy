/**
 * AI Service Tests
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AIService } from '../../../server/services/ai/index.js';

describe('AIService', () => {
  describe('getProviderForModel', () => {
    const service = new AIService();

    it('should return openai for gpt models', () => {
      expect(service.getProviderForModel('gpt-5')).toBe('openai');
      expect(service.getProviderForModel('gpt-4')).toBe('openai');
    });

    it('should return anthropic for claude models', () => {
      expect(service.getProviderForModel('claude-opus-4-5')).toBe('anthropic');
      expect(service.getProviderForModel('claude-sonnet-4-5')).toBe('anthropic');
    });

    it('should return moonshot for kimi models', () => {
      expect(service.getProviderForModel('kimi-k2')).toBe('moonshot');
    });

    it('should return gemini for gemini models', () => {
      expect(service.getProviderForModel('gemini-2.5-flash')).toBe('gemini');
    });

    it('should default to openai for unknown models', () => {
      expect(service.getProviderForModel('unknown-model')).toBe('openai');
    });
  });

  describe('buildContextPrompt', () => {
    const service = new AIService();

    it('should return empty string for no context', () => {
      expect(service.buildContextPrompt(null)).toBe('');
      expect(service.buildContextPrompt([])).toBe('');
    });

    it('should format context properly', () => {
      const context = [
        { source: 'doc1.pdf', text: 'First chunk' },
        { source: 'doc2.pdf', text: 'Second chunk' },
      ];

      const result = service.buildContextPrompt(context);

      expect(result).toContain('Source 1: doc1.pdf');
      expect(result).toContain('First chunk');
      expect(result).toContain('Source 2: doc2.pdf');
      expect(result).toContain('Second chunk');
    });
  });
});

