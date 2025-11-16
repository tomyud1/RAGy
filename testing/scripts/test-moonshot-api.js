import settingsService from './server/services/settings.service.js';

async function testMoonshotAPI() {
  console.log('Testing Moonshot API...\n');

  // Get API key
  const apiKey = await settingsService.getApiKey('moonshot');

  if (!apiKey) {
    console.error('❌ No Moonshot API key found. Please configure it in settings.');
    process.exit(1);
  }

  console.log('✓ API key found (first 10 chars):', apiKey.substring(0, 10) + '...');
  console.log('\nAttempting to call Moonshot API with streaming...\n');

  const endpoint = 'https://api.moonshot.ai/v1/chat/completions';
  const model = 'kimi-k2-turbo-preview';

  console.log('Endpoint:', endpoint);
  console.log('Model:', model);
  console.log('\nSending request...\n');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Say hello in one sentence.' },
        ],
        temperature: 0.7,
        max_tokens: 100,
        stream: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    console.log('');

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error:', errorText);

      if (response.status === 401) {
        console.error('\n⚠️  Authentication failed. Check your API key at https://platform.moonshot.ai/');
      } else if (response.status === 429) {
        console.error('\n⚠️  Rate limited. Too many requests.');
      } else if (response.status === 404) {
        console.error('\n⚠️  Model not found. The model name might be incorrect.');
      }

      process.exit(1);
    }

    console.log('✓ Connection established. Streaming response:\n');
    console.log('─'.repeat(50));

    // Process streaming response
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    let chunkCount = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        console.log('\n' + '─'.repeat(50));
        console.log('\n✓ Stream completed successfully!');
        console.log('Total chunks received:', chunkCount);
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed === 'data: [DONE]') continue;
        if (!trimmed.startsWith('data: ')) continue;

        const dataStr = trimmed.slice(6);

        try {
          const evt = JSON.parse(dataStr);
          const delta = evt?.choices?.[0]?.delta;
          const finishReason = evt?.choices?.[0]?.finish_reason;

          if (delta?.content) {
            process.stdout.write(delta.content);
            chunkCount++;
          }

          if (finishReason && finishReason !== 'null') {
            console.log('\nFinish reason:', finishReason);
            break;
          }
        } catch (e) {
          console.warn('\n⚠️  Failed to parse SSE data:', dataStr.substring(0, 100));
        }
      }
    }

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('\n❌ Request timed out after 30 seconds');
    } else {
      console.error('\n❌ Request failed:', error.message);
      console.error('Error details:', error);
    }
    process.exit(1);
  }
}

testMoonshotAPI().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
