import express from 'express';
import settingsService from '../services/settings.service.js';

const router = express.Router();

// Get API keys (returns masked keys for display)
router.get('/api-keys', async (req, res) => {
  try {
    const apiKeys = await settingsService.loadApiKeys();

    // Mask the keys for security (only show last 4 characters)
    const maskedKeys = {};
    for (const [provider, key] of Object.entries(apiKeys)) {
      if (key && key.length > 4) {
        maskedKeys[provider] = '•'.repeat(key.length - 4) + key.slice(-4);
      } else {
        maskedKeys[provider] = '';
      }
    }

    res.json(maskedKeys);
  } catch (error) {
    console.error('Failed to get API keys:', error);
    res.status(500).json({ error: 'Failed to retrieve API keys' });
  }
});

// Save API keys
router.post('/api-keys', async (req, res) => {
  try {
    const apiKeys = req.body;

    // Validate the structure
    if (!apiKeys || typeof apiKeys !== 'object') {
      return res.status(400).json({ error: 'Invalid API keys format' });
    }

    // Only update keys that are not masked (i.e., newly set)
    const currentKeys = await settingsService.loadApiKeys();
    const updatedKeys = { ...currentKeys };

    for (const [provider, key] of Object.entries(apiKeys)) {
      // If the key doesn't start with bullet points, it's a new/updated key
      if (key && !key.startsWith('•')) {
        // Sanitize the key: remove invisible Unicode characters and trim whitespace
        // This handles copy-paste from websites that may include hidden characters
        const sanitizedKey = key
          .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\u2028-\u2029\uFEFF]/g, '')
          .trim();

        updatedKeys[provider] = sanitizedKey;
      }
    }

    await settingsService.saveApiKeys(updatedKeys);
    res.json({ success: true });
  } catch (error) {
    console.error('Failed to save API keys:', error);
    res.status(500).json({ error: 'Failed to save API keys' });
  }
});

export default router;
