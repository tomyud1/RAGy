#!/usr/bin/env node
/**
 * Helper script to run Python tests with Gemini API key from settings
 */

import { spawn } from 'child_process';
import settingsService from './server/services/settings.service.js';

async function main() {
  console.log('Loading Gemini API key from settings...\n');

  const apiKey = await settingsService.getApiKey('gemini');

  if (!apiKey || apiKey.trim() === '') {
    console.error('❌ Gemini API key not found in settings!');
    console.error('   Please add your Gemini API key in Settings → AI Providers');
    process.exit(1);
  }

  console.log(`✓ API key loaded (starts with: ${apiKey.substring(0, 10)}...)\n`);
  console.log('Running Python test script...\n');
  console.log('='.repeat(60) + '\n');

  // Run Python test with API key in environment
  const pythonProcess = spawn('python3', ['test_gemini_api_fix.py'], {
    env: {
      ...process.env,
      GEMINI_API_KEY: apiKey
    },
    stdio: 'inherit'
  });

  pythonProcess.on('close', (code) => {
    console.log('\n' + '='.repeat(60));
    if (code === 0) {
      console.log('\n✅ Test completed successfully!');
    } else {
      console.log(`\n⚠️  Test exited with code ${code}`);
    }
    process.exit(code);
  });

  pythonProcess.on('error', (error) => {
    console.error('Failed to run test:', error);
    process.exit(1);
  });
}

main();
