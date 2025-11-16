import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SETTINGS_DIR = path.join(__dirname, '../../data/settings');
const API_KEYS_FILE = path.join(SETTINGS_DIR, 'api-keys.enc');
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'ragy-default-encryption-key-change-in-production';

class SettingsService {
  constructor() {
    this.ensureSettingsDir();
  }

  ensureSettingsDir() {
    if (!fs.existsSync(SETTINGS_DIR)) {
      fs.mkdirSync(SETTINGS_DIR, { recursive: true, mode: 0o700 });
    }
  }

  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return iv.toString('hex') + ':' + encrypted;
  }

  decrypt(encryptedText) {
    try {
      const parts = encryptedText.split(':');
      const iv = Buffer.from(parts[0], 'hex');
      const encrypted = parts[1];

      const key = crypto.scryptSync(ENCRYPTION_KEY, 'salt', 32);
      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');

      return decrypted;
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  }

  async saveApiKeys(apiKeys) {
    try {
      const encryptedData = this.encrypt(JSON.stringify(apiKeys));
      fs.writeFileSync(API_KEYS_FILE, encryptedData, { mode: 0o600 });
      return true;
    } catch (error) {
      console.error('Failed to save API keys:', error);
      throw error;
    }
  }

  async loadApiKeys() {
    try {
      if (!fs.existsSync(API_KEYS_FILE)) {
        return {
          openai: '',
          anthropic: '',
          moonshot: '',
          gemini: '',
        };
      }

      const encryptedData = fs.readFileSync(API_KEYS_FILE, 'utf8');
      const decrypted = this.decrypt(encryptedData);

      if (!decrypted) {
        return {
          openai: '',
          anthropic: '',
          moonshot: '',
          gemini: '',
        };
      }

      const keys = JSON.parse(decrypted);
      // Ensure gemini key exists for backwards compatibility
      if (!keys.hasOwnProperty('gemini')) {
        keys.gemini = '';
      }
      return keys;
    } catch (error) {
      console.error('Failed to load API keys:', error);
      return {
        openai: '',
        anthropic: '',
        moonshot: '',
        gemini: '',
      };
    }
  }

  async getApiKey(provider) {
    const apiKeys = await this.loadApiKeys();
    return apiKeys[provider] || '';
  }
}

export default new SettingsService();
