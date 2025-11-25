import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * MCP Client Manager
 * Handles connections to MCP servers and tool execution
 */
class MCPClientManager {
  constructor() {
    this.clients = new Map(); // serverName -> { client, transport, process }
    this.initialized = false;
  }

  /**
   * Initialize all MCP servers
   */
  async initialize() {
    if (this.initialized) {
      console.log('[MCP] Already initialized');
      return;
    }

    console.log('[MCP] Initializing MCP clients...');

    // Initialize memory server
    try {
      await this.connectToServer('memory', {
        command: 'node',
        args: [path.join(__dirname, '../mcp-servers/memory-server.js')],
      });
      console.log('[MCP] Memory server connected successfully');
    } catch (error) {
      console.error('[MCP] Failed to connect to memory server:', error);
      throw error;
    }

    // Initialize RAG server
    try {
      await this.connectToServer('rag', {
        command: 'node',
        args: [path.join(__dirname, '../mcp-servers/rag-server.js')],
      });
      console.log('[MCP] RAG server connected successfully');
    } catch (error) {
      console.error('[MCP] Failed to connect to RAG server:', error);
      throw error;
    }

    this.initialized = true;
    console.log('[MCP] All MCP servers initialized successfully');
  }

  /**
   * Connect to an MCP server
   */
  async connectToServer(serverName, config) {
    if (this.clients.has(serverName)) {
      console.log(`[MCP] Server "${serverName}" already connected`);
      return this.clients.get(serverName).client;
    }

    console.log(`[MCP] Connecting to "${serverName}" server...`);

    const client = new Client(
      {
        name: 'ragy-chat-client',
        version: '1.0.0',
      },
      {
        capabilities: {},
      }
    );

    const transport = new StdioClientTransport({
      command: config.command,
      args: config.args,
    });

    await client.connect(transport);

    this.clients.set(serverName, {
      client,
      transport,
      config,
    });

    console.log(`[MCP] Successfully connected to "${serverName}" server`);
    return client;
  }

  /**
   * Get all available tools from all connected servers
   */
  async getAllTools() {
    const allTools = [];

    for (const [serverName, { client }] of this.clients) {
      try {
        const response = await client.listTools();
        const tools = response.tools || [];

        // Add server name to each tool for routing
        const toolsWithServer = tools.map((tool) => ({
          ...tool,
          _mcpServer: serverName,
        }));

        allTools.push(...toolsWithServer);
      } catch (error) {
        console.error(`[MCP] Failed to list tools from "${serverName}":`, error);
      }
    }

    return allTools;
  }

  /**
   * Convert MCP tools to OpenAI function calling format
   */
  async getToolsForOpenAI() {
    const mcpTools = await this.getAllTools();

    return mcpTools.map((tool) => ({
      type: 'function',
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.inputSchema,
        _mcpServer: tool._mcpServer, // Keep for routing
      },
    }));
  }

  /**
   * Convert MCP tools to Anthropic tool use format
   */
  async getToolsForAnthropic() {
    const mcpTools = await this.getAllTools();

    return mcpTools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      input_schema: tool.inputSchema,
      _mcpServer: tool._mcpServer, // Keep for routing
    }));
  }

  /**
   * Execute a tool call
   */
  async callTool(toolName, args, serverName = null) {
    // If server name not provided, find it from the tool
    if (!serverName) {
      const allTools = await this.getAllTools();
      const tool = allTools.find((t) => t.name === toolName);
      if (!tool) {
        throw new Error(`Tool "${toolName}" not found`);
      }
      serverName = tool._mcpServer;
    }

    const serverInfo = this.clients.get(serverName);
    if (!serverInfo) {
      throw new Error(`MCP server "${serverName}" not connected`);
    }

    console.log(`[MCP] Calling tool "${toolName}" on "${serverName}" server with args:`, args);

    try {
      const response = await serverInfo.client.callTool({
        name: toolName,
        arguments: args,
      });

      console.log(`[MCP] Tool "${toolName}" executed successfully`);
      return response;
    } catch (error) {
      console.error(`[MCP] Tool execution failed:`, error);
      throw error;
    }
  }

  /**
   * Shutdown all connections
   */
  async shutdown() {
    console.log('[MCP] Shutting down all MCP clients...');

    for (const [serverName, { client, transport }] of this.clients) {
      try {
        await client.close();
        console.log(`[MCP] Closed connection to "${serverName}"`);
      } catch (error) {
        console.error(`[MCP] Error closing "${serverName}":`, error);
      }
    }

    this.clients.clear();
    this.initialized = false;
    console.log('[MCP] All MCP clients shut down');
  }

  /**
   * Get connection status
   */
  getStatus() {
    return {
      initialized: this.initialized,
      connectedServers: Array.from(this.clients.keys()),
      totalServers: this.clients.size,
    };
  }
}

// Create singleton instance
const mcpClientManager = new MCPClientManager();

export default mcpClientManager;
