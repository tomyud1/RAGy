#!/usr/bin/env node

/**
 * Monitor RAG setup progress
 */

import vectorDBService from '../services/ai/vector-db.service.js';

async function monitor() {
  console.log('\n📊 RAG Setup Monitor\n');
  console.log('Refreshing every 10 seconds... (Ctrl+C to exit)\n');
  
  const startTime = Date.now();
  
  const checkProgress = async () => {
    try {
      await vectorDBService.initialize();
      const stats = await vectorDBService.getStats();
      
      const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
      const docsPerMin = (stats.totalDocuments / elapsed).toFixed(0);
      
      console.clear();
      console.log('\n╔═══════════════════════════════════════════════════════════╗');
      console.log('║             📊 RAG SETUP PROGRESS                        ║');
      console.log('╚═══════════════════════════════════════════════════════════╝\n');
      console.log(`  Documents Processed: ${stats.totalDocuments.toLocaleString()} / 34,673`);
      console.log(`  Progress: ${((stats.totalDocuments / 34673) * 100).toFixed(1)}%`);
      console.log(`  Time Elapsed: ${elapsed} minutes`);
      console.log(`  Processing Rate: ~${docsPerMin} docs/min`);
      
      if (stats.totalDocuments > 0) {
        const remaining = 34673 - stats.totalDocuments;
        const etaMin = (remaining / docsPerMin).toFixed(1);
        console.log(`  ETA: ~${etaMin} minutes\n`);
        
        // Progress bar
        const barLength = 50;
        const filled = Math.round((stats.totalDocuments / 34673) * barLength);
        const bar = '█'.repeat(filled) + '░'.repeat(barLength - filled);
        console.log(`  [${bar}]`);
      }
      
      console.log('\n  Refreshing in 10 seconds... (Ctrl+C to exit)');
      
    } catch (error) {
      console.log('  ⏳ Waiting for setup to start...');
    }
  };
  
  // Initial check
  await checkProgress();
  
  // Check every 10 seconds
  setInterval(checkProgress, 10000);
}

monitor();

