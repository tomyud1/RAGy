import settingsService from './server/services/settings.service.js';

async function testMoonshotModels() {
  const apiKey = await settingsService.getApiKey('moonshot');

  console.log('Testing Moonshot API with different model names...\n');
  console.log('API key length:', apiKey.length);
  console.log('API key format check:', apiKey.startsWith('sk-'), '\n');

  const modelsToTry = [
    'moonshot-v1-8k',
    'moonshot-v1-32k',
    'moonshot-v1-128k',
    'kimi-k2-turbo-preview',
    'kimi-k2',
  ];

  // First, try to list available models
  console.log('Attempting to list available models...\n');
  try {
    const response = await fetch('https://api.moonshot.ai/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    console.log('Models endpoint status:', response.status);
    if (response.ok) {
      const data = await response.json();
      console.log('Available models:', JSON.stringify(data, null, 2));
    } else {
      const error = await response.text();
      console.log('Error:', error);
    }
  } catch (error) {
    console.error('Failed to fetch models:', error.message);
  }

  console.log('\n' + '='.repeat(60) + '\n');

  // Try a simple non-streaming request with each model
  for (const model of modelsToTry) {
    console.log(`Testing model: ${model}`);
    try {
      const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'user', content: 'Hi' },
          ],
          max_tokens: 10,
        }),
      });

      console.log(`  Status: ${response.status}`);
      if (response.ok) {
        console.log('  ✓ SUCCESS! This model works.\n');
        const data = await response.json();
        console.log('  Response:', data.choices[0].message.content);
        break;
      } else {
        const error = await response.text();
        console.log(`  ✗ Failed: ${error.substring(0, 100)}`);
      }
    } catch (error) {
      console.log(`  ✗ Error: ${error.message}`);
    }
    console.log('');
  }
}

testMoonshotModels().catch(console.error);
