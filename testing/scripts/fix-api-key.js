import settingsService from './server/services/settings.service.js';

async function fixApiKeys() {
  console.log('Loading API keys...\n');

  const apiKeys = await settingsService.loadApiKeys();

  console.log('Original API keys:');
  for (const [provider, key] of Object.entries(apiKeys)) {
    if (key) {
      console.log(`  ${provider}: ${key.length} chars, first 10: ${key.substring(0, 10)}...`);
    }
  }

  console.log('\nCleaning API keys (removing invisible Unicode characters)...\n');

  const cleanedKeys = {};
  let hadChanges = false;

  for (const [provider, key] of Object.entries(apiKeys)) {
    if (key) {
      // Remove all invisible/control characters and trim
      const cleaned = key
        .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\u2028-\u2029\uFEFF]/g, '')
        .trim();

      if (cleaned !== key) {
        console.log(`✓ Cleaned ${provider} key:`);
        console.log(`  Original length: ${key.length}`);
        console.log(`  Cleaned length: ${cleaned.length}`);
        console.log(`  Removed ${key.length - cleaned.length} invisible character(s)\n`);
        hadChanges = true;
      }

      cleanedKeys[provider] = cleaned;
    } else {
      cleanedKeys[provider] = key;
    }
  }

  if (hadChanges) {
    console.log('Saving cleaned API keys...');
    await settingsService.saveApiKeys(cleanedKeys);
    console.log('✓ API keys saved successfully!\n');
  } else {
    console.log('✓ No changes needed. API keys are clean.\n');
  }

  console.log('Final API keys:');
  for (const [provider, key] of Object.entries(cleanedKeys)) {
    if (key) {
      console.log(`  ${provider}: ${key.length} chars, first 10: ${key.substring(0, 10)}...`);
    }
  }
}

fixApiKeys().catch(console.error);
