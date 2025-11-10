#!/usr/bin/env node

/**
 * Interactive test script for RAG system
 * Allows testing document retrieval with various queries
 */

import ragService from '../services/ai/rag.service.js';
import vectorDBService from '../services/ai/vector-db.service.js';
import readline from 'readline';

// Predefined test queries
const TEST_QUERIES = [
  {
    id: 1,
    query: "How do I make a character jump?",
    expected: "CharacterBody2D, velocity, physics"
  },
  {
    id: 2,
    query: "How do I detect when two objects collide?",
    expected: "Area2D, body_entered, collision"
  },
  {
    id: 3,
    query: "What is a signal in GDScript?",
    expected: "signal, emit, connect"
  },
  {
    id: 4,
    query: "How do I load a scene?",
    expected: "load, instantiate, add_child"
  },
  {
    id: 5,
    query: "How do I get player input?",
    expected: "Input, is_action_pressed, InputEvent"
  },
  {
    id: 6,
    query: "What is @onready in GDScript?",
    expected: "@onready, annotation, node"
  },
  {
    id: 7,
    query: "How do I move a sprite?",
    expected: "position, Vector2, transform"
  },
  {
    id: 8,
    query: "What's the weather like today?",
    expected: "NONE - not Godot related"
  }
];

class RAGTester {
  constructor() {
    this.rl = null;
    this.testResults = [];
  }

  async initialize() {
    console.log();
    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║                                                           ║');
    console.log('║         🧪  GODOT RAG TESTING ENVIRONMENT  🔬            ║');
    console.log('║                                                           ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log();

    console.log('🔧 Initializing RAG system...');
    await ragService.initialize();

    const stats = await ragService.getStatistics();
    console.log();
    console.log('📊 Database Statistics:');
    console.log('─'.repeat(60));
    console.log(`  Total documents: ${stats.totalDocuments}`);
    console.log(`  Collection: ${stats.collectionName}`);
    console.log(`  Model: ${stats.model}`);
    console.log('─'.repeat(60));
    console.log();

    if (stats.totalDocuments === 0) {
      console.log('⚠️  Warning: Database is empty!');
      console.log('   Run "node setup-rag.js" first to populate the database.');
      console.log();
      process.exit(1);
    }
  }

  async testQuery(query, options = {}) {
    const startTime = Date.now();
    
    console.log('\n' + '═'.repeat(60));
    console.log(`🔍 Query: "${query}"`);
    console.log('═'.repeat(60));

    // Retrieve relevant documents
    const result = await ragService.retrieve(query, options);
    const endTime = Date.now();
    const duration = endTime - startTime;

    // Display results
    console.log();
    console.log('📊 Retrieval Results:');
    console.log('─'.repeat(60));
    console.log(`  Retrieved: ${result.retrievedCount} documents`);
    console.log(`  Selected: ${result.selectedCount} documents`);
    console.log(`  Token count: ${result.tokenCount}`);
    console.log(`  Time taken: ${duration}ms`);
    console.log(`  Relevant: ${result.isRelevant ? '✅ Yes' : '❌ No'}`);
    if (!result.isRelevant) {
      console.log(`  Reason: ${result.reason}`);
    }
    console.log('─'.repeat(60));

    if (result.documents.length > 0) {
      console.log();
      console.log('📄 Retrieved Documents:');
      console.log();

      result.documents.forEach((doc, index) => {
        const meta = doc.metadata;
        console.log(`  [${index + 1}] ${meta.title}`);
        console.log(`      Section: ${meta.section || 'N/A'}`);
        console.log(`      Category: ${meta.category} | Type: ${meta.docType}`);
        console.log(`      Similarity: ${(doc.similarity * 100).toFixed(1)}%`);
        const docTokens = vectorDBService.estimateTokens(doc.text);
        console.log(`      Tokens: ~${docTokens}`);
        
        // Show preview
        const preview = doc.text.substring(0, 150).replace(/\n/g, ' ');
        console.log(`      Preview: ${preview}...`);
        console.log();
      });

      // Show formatted context
      if (options.showContext) {
        console.log('📝 Formatted Context:');
        console.log('─'.repeat(60));
        const context = ragService.buildContext(result.documents);
        console.log(context);
        console.log('─'.repeat(60));
      }
    } else {
      console.log('\n  No relevant documents found.');
    }

    console.log();

    return {
      query,
      ...result,
      duration
    };
  }

  async runPredefinedTests() {
    console.log('🎯 Running predefined test queries...\n');
    console.log('This will test common Godot questions and edge cases.\n');

    for (const test of TEST_QUERIES) {
      console.log(`\nTest ${test.id}/${TEST_QUERIES.length}`);
      console.log(`Expected keywords: ${test.expected}`);
      
      const result = await this.testQuery(test.query, {
        limit: 5,
        minSimilarity: 0.45
      });

      this.testResults.push(result);

      // Brief pause between tests
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.showTestSummary();
  }

  showTestSummary() {
    console.log();
    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║                                                           ║');
    console.log('║                   TEST SUMMARY                            ║');
    console.log('║                                                           ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log();

    const totalTests = this.testResults.length;
    const successfulRetrievals = this.testResults.filter(r => r.selectedCount > 0).length;
    const avgDuration = this.testResults.reduce((sum, r) => sum + r.duration, 0) / totalTests;
    const avgTokens = this.testResults.reduce((sum, r) => sum + r.tokenCount, 0) / totalTests;
    const avgDocs = this.testResults.reduce((sum, r) => sum + r.selectedCount, 0) / totalTests;

    console.log('📊 Overall Statistics:');
    console.log('─'.repeat(60));
    console.log(`  Total queries: ${totalTests}`);
    console.log(`  Successful retrievals: ${successfulRetrievals} (${(successfulRetrievals/totalTests*100).toFixed(0)}%)`);
    console.log(`  Average duration: ${avgDuration.toFixed(0)}ms`);
    console.log(`  Average tokens: ${avgTokens.toFixed(0)}`);
    console.log(`  Average docs per query: ${avgDocs.toFixed(1)}`);
    console.log('─'.repeat(60));
    console.log();

    // Show individual results
    console.log('📋 Individual Results:');
    console.log();
    this.testResults.forEach((result, index) => {
      const status = result.selectedCount > 0 ? '✅' : '❌';
      console.log(`  ${status} ${index + 1}. "${result.query}"`);
      console.log(`     Retrieved: ${result.selectedCount} docs, ${result.tokenCount} tokens, ${result.duration}ms`);
    });
    console.log();
  }

  async startInteractiveMode() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '\n🔍 Enter query (or "help" for commands): '
    });

    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║                                                           ║');
    console.log('║              INTERACTIVE MODE ACTIVATED                   ║');
    console.log('║                                                           ║');
    console.log('║  Enter queries to test the RAG retrieval system.         ║');
    console.log('║  Type "help" to see available commands.                   ║');
    console.log('║                                                           ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');

    this.rl.prompt();

    this.rl.on('line', async (line) => {
      const input = line.trim();

      if (!input) {
        this.rl.prompt();
        return;
      }

      // Handle commands
      if (input === 'exit' || input === 'quit') {
        console.log('\n👋 Goodbye!\n');
        this.rl.close();
        process.exit(0);
      }

      if (input === 'help') {
        this.showHelp();
        this.rl.prompt();
        return;
      }

      if (input === 'stats') {
        const stats = await ragService.getStatistics();
        console.log('\n📊 Database Statistics:');
        console.log(`  Total documents: ${stats.totalDocuments}`);
        console.log(`  Collection: ${stats.collectionName}`);
        console.log(`  Model: ${stats.model}`);
        this.rl.prompt();
        return;
      }

      if (input === 'tests') {
        this.rl.pause();
        await this.runPredefinedTests();
        this.rl.resume();
        this.rl.prompt();
        return;
      }

      if (input.startsWith('context ')) {
        const query = input.substring(8);
        await this.testQuery(query, { limit: 5, showContext: true });
        this.rl.prompt();
        return;
      }

      // Regular query
      await this.testQuery(input, { limit: 5 });
      this.rl.prompt();
    });

    this.rl.on('close', () => {
      console.log('\n👋 Goodbye!\n');
      process.exit(0);
    });
  }

  showHelp() {
    console.log();
    console.log('Available Commands:');
    console.log('─'.repeat(60));
    console.log('  <query>          Test retrieval for your query');
    console.log('  context <query>  Show full formatted context for query');
    console.log('  tests            Run predefined test suite');
    console.log('  stats            Show database statistics');
    console.log('  help             Show this help message');
    console.log('  exit / quit      Exit the program');
    console.log('─'.repeat(60));
    console.log();
    console.log('Examples:');
    console.log('  How do I make a character jump?');
    console.log('  context What is a signal?');
    console.log('  tests');
    console.log();
  }
}

// Main execution
async function main() {
  const tester = new RAGTester();
  await tester.initialize();

  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log('Godot RAG Testing Environment');
    console.log();
    console.log('Usage: node test-rag.js [options]');
    console.log();
    console.log('Options:');
    console.log('  --tests          Run predefined test suite and exit');
    console.log('  --interactive    Start interactive mode (default)');
    console.log('  --help, -h       Show this help message');
    console.log();
    process.exit(0);
  }

  if (args.includes('--tests')) {
    await tester.runPredefinedTests();
    process.exit(0);
  }

  // Default: interactive mode
  await tester.startInteractiveMode();
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error);
  console.error(error.stack);
  process.exit(1);
});

