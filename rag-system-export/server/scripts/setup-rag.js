#!/usr/bin/env node

/**
 * Setup script for RAG (Retrieval Augmented Generation) system
 * Populates the vector database with Godot documentation
 */

import ragService from '../services/ai/rag.service.js';

async function main() {
  console.log();
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║                                                           ║');
  console.log('║         🤖  GODOT RAG SYSTEM SETUP  🎮                   ║');
  console.log('║                                                           ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log();

  const args = process.argv.slice(2);
  const shouldClear = args.includes('--clear');
  const noCache = args.includes('--no-cache');

  try {
    // Clear database if requested
    if (shouldClear) {
      console.log('🗑️  Clearing existing database...\n');
      await ragService.clearAll();
      console.log();
    }

    // Populate database
    const startTime = Date.now();
    const result = await ragService.populateDatabase(!noCache);
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Show final stats
    console.log('📊 Final Statistics:');
    console.log('─'.repeat(60));
    console.log(`  Documents added: ${result.documentsAdded}`);
    console.log(`  Total documents: ${result.totalDocuments}`);
    console.log(`  Time taken: ${duration}s`);
    console.log('─'.repeat(60));
    console.log();

    // Verify database
    const stats = await ragService.getStatistics();
    console.log('✅ Verification:');
    console.log(`  Database contains ${stats.totalDocuments} documents`);
    console.log(`  Collection: ${stats.collectionName}`);
    console.log(`  Embedding model: ${stats.model}`);
    console.log();

    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║                                                           ║');
    console.log('║              ✨  SETUP COMPLETE!  ✨                      ║');
    console.log('║                                                           ║');
    console.log('║  The RAG system is ready to enhance AI responses with    ║');
    console.log('║  relevant Godot documentation.                            ║');
    console.log('║                                                           ║');
    console.log('║  Next steps:                                              ║');
    console.log('║  1. Run test-rag.js to test retrieval                     ║');
    console.log('║  2. Integrate into your message flow                      ║');
    console.log('║                                                           ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log();

    process.exit(0);
  } catch (error) {
    console.error();
    console.error('❌ Setup failed:', error);
    console.error();
    console.error('Error details:', error.stack);
    process.exit(1);
  }
}

// Show usage if --help
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log();
  console.log('Godot RAG System Setup');
  console.log();
  console.log('Usage: node setup-rag.js [options]');
  console.log();
  console.log('Options:');
  console.log('  --clear      Clear existing database before populating');
  console.log('  --no-cache   Ignore cached parsed documents and re-parse');
  console.log('  --help, -h   Show this help message');
  console.log();
  console.log('Examples:');
  console.log('  node setup-rag.js                # Normal setup (use cache if available)');
  console.log('  node setup-rag.js --clear        # Clear and rebuild database');
  console.log('  node setup-rag.js --no-cache     # Force re-parse all documents');
  console.log();
  process.exit(0);
}

// Run the setup
main();

