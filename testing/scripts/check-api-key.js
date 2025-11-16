import settingsService from './server/services/settings.service.js';

async function checkApiKey() {
  const apiKey = await settingsService.getApiKey('moonshot');

  console.log('API Key Analysis:');
  console.log('Length:', apiKey.length);
  console.log('First 10 chars:', apiKey.substring(0, 10));
  console.log('Last 10 chars:', apiKey.substring(apiKey.length - 10));
  console.log('\nSearching for problematic characters...\n');

  for (let i = 0; i < apiKey.length; i++) {
    const char = apiKey[i];
    const code = char.charCodeAt(0);

    // Check for non-ASCII or control characters
    if (code > 127 || code < 32) {
      console.log(`⚠️  Found at index ${i}:`);
      console.log(`   Character code: ${code}`);
      console.log(`   Character: ${JSON.stringify(char)}`);
      console.log(`   Context: "${apiKey.substring(Math.max(0, i - 5), i)}[HERE]${apiKey.substring(i + 1, Math.min(apiKey.length, i + 6))}"`);
      console.log('');
    }
  }

  // Check for common invisible characters
  const invisibleChars = [
    { name: 'Zero-width space', code: 8203, char: '\u200B' },
    { name: 'Line separator', code: 8232, char: '\u2028' },
    { name: 'Paragraph separator', code: 8233, char: '\u2029' },
    { name: 'Zero-width non-joiner', code: 8204, char: '\u200C' },
    { name: 'Zero-width joiner', code: 8205, char: '\u200D' },
  ];

  console.log('Common invisible characters:');
  for (const { name, code, char } of invisibleChars) {
    if (apiKey.includes(char)) {
      console.log(`❌ Found: ${name} (U+${code.toString(16).toUpperCase()})`);
    }
  }
}

checkApiKey().catch(console.error);
