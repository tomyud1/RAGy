// Quick script to retrieve the Gemini API key from settings
import SettingsService from '../server/services/settings.service.js';

async function getGeminiKey() {
  try {
    const apiKey = await SettingsService.getApiKey('gemini');
    if (apiKey && apiKey.trim() !== '') {
      console.log(apiKey);
    } else {
      console.error('No Gemini API key found in settings', { stream: 'stderr' });
      process.exit(1);
    }
  } catch (error) {
    console.error('Error retrieving API key:', error.message, { stream: 'stderr' });
    process.exit(1);
  }
}

getGeminiKey();



