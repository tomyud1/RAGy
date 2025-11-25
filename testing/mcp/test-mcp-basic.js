/**
 * Basic MCP test - tests MCP infrastructure without AI calls
 */

import mcpClientManager from './server/mcp/mcp-client.js';

console.log('Testing MCP infrastructure...\n');

async function runBasicTests() {
  try {
    // Test 1: Initialize
    console.log('[1] Initializing MCP...');
    await mcpClientManager.initialize();
    console.log('✓ MCP initialized\n');

    // Test 2: Get Status
    console.log('[2] Getting status...');
    const status = mcpClientManager.getStatus();
    console.log('Status:', JSON.stringify(status, null, 2));
    console.log('✓ Status retrieved\n');

    // Test 3: List Tools
    console.log('[3] Listing tools...');
    const tools = await mcpClientManager.getAllTools();
    console.log(`Found ${tools.length} tools:`);
    tools.forEach((tool) => {
      console.log(`  • ${tool.name}`);
      console.log(`    Description: ${tool.description}`);
      console.log(`    Server: ${tool._mcpServer}`);
      console.log('');
    });
    console.log('✓ Tools listed\n');

    // Test 4: Test Memory Tool
    console.log('[4] Testing memory tools...');

    console.log('  Storing memory...');
    const storeResult = await mcpClientManager.callTool('store_memory', {
      key: 'test_key',
      value: 'Test value from basic test',
      metadata: { source: 'test' },
    });
    console.log('  Result:', storeResult.content[0].text);

    console.log('  Retrieving memory...');
    const retrieveResult = await mcpClientManager.callTool('retrieve_memory', {
      key: 'test_key',
    });
    console.log('  Result:', retrieveResult.content[0].text);

    console.log('  Listing all memories...');
    const listResult = await mcpClientManager.callTool('list_memories', {});
    console.log('  Result:', listResult.content[0].text);

    console.log('  Deleting memory...');
    const deleteResult = await mcpClientManager.callTool('delete_memory', {
      key: 'test_key',
    });
    console.log('  Result:', deleteResult.content[0].text);

    console.log('✓ Memory tools work\n');

    // Test 5: Test tool format conversion
    console.log('[5] Testing tool format conversion...');

    const openaiTools = await mcpClientManager.getToolsForOpenAI();
    console.log('OpenAI format sample:');
    console.log(JSON.stringify(openaiTools[0], null, 2));
    console.log('');

    const anthropicTools = await mcpClientManager.getToolsForAnthropic();
    console.log('Anthropic format sample:');
    console.log(JSON.stringify(anthropicTools[0], null, 2));
    console.log('✓ Format conversion works\n');

    // Cleanup
    console.log('[6] Shutting down...');
    await mcpClientManager.shutdown();
    console.log('✓ Shutdown complete\n');

    console.log('='.repeat(60));
    console.log('✓ All basic tests passed!');
    console.log('='.repeat(60));

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Test failed:');
    console.error(error);
    console.error('\nStack:');
    console.error(error.stack);

    try {
      await mcpClientManager.shutdown();
    } catch (e) {
      // Ignore
    }

    process.exit(1);
  }
}

runBasicTests();
