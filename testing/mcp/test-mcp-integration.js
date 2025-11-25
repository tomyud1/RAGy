/**
 * Test script for MCP integration
 *
 * This script tests:
 * 1. MCP server initialization
 * 2. Tool listing
 * 3. Direct tool execution
 * 4. AI chat with tools (OpenAI and Anthropic)
 *
 * Usage:
 *   node test-mcp-integration.js
 */

import mcpClientManager from './server/mcp/mcp-client.js';
import aiWithToolsService from './server/services/ai-with-tools.service.js';
import settingsService from './server/services/settings.service.js';

console.log('='.repeat(60));
console.log('MCP Integration Test');
console.log('='.repeat(60));
console.log('');

async function runTests() {
  try {
    // Test 1: Initialize MCP
    console.log('[Test 1] Initializing MCP...');
    await mcpClientManager.initialize();
    console.log('✓ MCP initialized successfully\n');

    // Test 2: Get Status
    console.log('[Test 2] Getting MCP status...');
    const status = mcpClientManager.getStatus();
    console.log('Status:', JSON.stringify(status, null, 2));
    console.log('✓ Status retrieved\n');

    // Test 3: List Tools
    console.log('[Test 3] Listing available tools...');
    const tools = await mcpClientManager.getAllTools();
    console.log(`Found ${tools.length} tools:`);
    tools.forEach((tool) => {
      console.log(`  - ${tool.name}: ${tool.description}`);
      console.log(`    Server: ${tool._mcpServer}`);
    });
    console.log('✓ Tools listed\n');

    // Test 4: Direct Tool Execution
    console.log('[Test 4] Testing direct tool execution...');
    console.log('  Storing a memory...');
    const storeResult = await mcpClientManager.callTool('store_memory', {
      key: 'test_key',
      value: 'This is a test memory stored from the test script',
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'test-script',
        importance: 'high',
      },
    });
    console.log('  Store result:', storeResult.content[0].text);

    console.log('  Retrieving the memory...');
    const retrieveResult = await mcpClientManager.callTool('retrieve_memory', {
      key: 'test_key',
    });
    console.log('  Retrieve result:', retrieveResult.content[0].text);
    console.log('✓ Direct tool execution works\n');

    // Test 5: Check API Keys
    console.log('[Test 5] Checking API keys...');
    const hasOpenAI = !!(await settingsService.getApiKey('openai'));
    const hasAnthropic = !!(await settingsService.getApiKey('anthropic'));
    console.log(`  OpenAI API Key: ${hasOpenAI ? '✓ Found' : '✗ Not found'}`);
    console.log(`  Anthropic API Key: ${hasAnthropic ? '✓ Found' : '✗ Not found'}`);
    console.log('');

    // Test 6: AI with Tools (OpenAI)
    if (hasOpenAI) {
      console.log('[Test 6] Testing AI with tools (OpenAI GPT-4)...');
      console.log('  Sending message: "Store in memory that my favorite color is blue, then tell me what you stored"');
      let response = '';
      let toolCalls = [];

      await aiWithToolsService.generateResponseWithTools(
        'Store in memory that my favorite color is blue, then tell me what you stored',
        [], // no context
        'gpt-4o', // model
        (chunk, metadata) => {
          if (metadata?.type === 'content' && chunk) {
            response += chunk;
            process.stdout.write(chunk);
          } else if (metadata?.type === 'tool_call') {
            toolCalls.push({
              tool: metadata.tool_name,
              args: metadata.tool_args,
            });
            console.log(`\n  [Tool Call: ${metadata.tool_name}]`);
            console.log(`  Args:`, JSON.stringify(metadata.tool_args, null, 2));
          } else if (metadata?.type === 'tool_result') {
            console.log(`  [Tool Result: ${metadata.tool_name}]`);
            console.log(`  Result: ${metadata.result}`);
          }
        },
        [] // no conversation history
      );

      console.log('\n\n  Full response:', response);
      console.log(`  Tool calls made: ${toolCalls.length}`);
      console.log('✓ OpenAI with tools works\n');
    } else {
      console.log('[Test 6] Skipping OpenAI test (no API key)\n');
    }

    // Test 7: AI with Tools (Anthropic)
    if (hasAnthropic) {
      console.log('[Test 7] Testing AI with tools (Anthropic Claude)...');
      console.log('  Sending message: "What is my favorite color that you stored earlier?"');
      let response = '';
      let toolCalls = [];

      await aiWithToolsService.generateResponseWithTools(
        'What is my favorite color that you stored earlier?',
        [], // no context
        'claude-haiku-4-5', // model
        (chunk, metadata) => {
          if (metadata?.type === 'content' && chunk) {
            response += chunk;
            process.stdout.write(chunk);
          } else if (metadata?.type === 'tool_call') {
            toolCalls.push({
              tool: metadata.tool_name,
              args: metadata.tool_args,
            });
            console.log(`\n  [Tool Call: ${metadata.tool_name}]`);
            console.log(`  Args:`, JSON.stringify(metadata.tool_args, null, 2));
          } else if (metadata?.type === 'tool_result') {
            console.log(`  [Tool Result: ${metadata.tool_name}]`);
            console.log(`  Result: ${metadata.result}`);
          }
        },
        [] // no conversation history
      );

      console.log('\n\n  Full response:', response);
      console.log(`  Tool calls made: ${toolCalls.length}`);
      console.log('✓ Anthropic with tools works\n');
    } else {
      console.log('[Test 7] Skipping Anthropic test (no API key)\n');
    }

    // Cleanup
    console.log('[Cleanup] Deleting test memory...');
    await mcpClientManager.callTool('delete_memory', { key: 'test_key' });
    console.log('✓ Cleanup complete\n');

    // Shutdown
    console.log('[Shutdown] Closing MCP connections...');
    await mcpClientManager.shutdown();
    console.log('✓ MCP shut down\n');

    console.log('='.repeat(60));
    console.log('All tests completed successfully!');
    console.log('='.repeat(60));

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Test failed with error:');
    console.error(error);
    console.error('\nStack trace:');
    console.error(error.stack);

    // Try to shutdown MCP on error
    try {
      await mcpClientManager.shutdown();
    } catch (e) {
      // Ignore shutdown errors
    }

    process.exit(1);
  }
}

// Run tests
runTests();
