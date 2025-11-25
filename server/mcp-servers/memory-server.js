import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup persistent storage directory
const dataDir = join(__dirname, '../../data/memory');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

// Initialize SQLite database
const dbPath = join(dataDir, 'memory.db');
const db = new Database(dbPath);

// Create memories table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS memories (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    metadata TEXT,
    stored_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
`);

console.error(`Memory database initialized at: ${dbPath}`);

// Create MCP server
const server = new Server(
  {
    name: 'ragy-memory-server',
    version: '2.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handle tool listing
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'store_memory',
        description: `Store important information in persistent memory that survives across conversations and server restarts.

Use this ONLY for:
- User preferences and settings (e.g., "user prefers bullet points", "user timezone is PST")
- Key facts about the user (e.g., "user is a tax accountant", "working on Project Apollo")
- Important context that applies across multiple conversations
- Reference data that you'll need to recall later

DO NOT use for:
- Information already in the current conversation (it's in the message history)
- Temporary working data (use conversation context instead)
- Every small detail (only store truly important facts)

Think: "Will I need to know this in a completely different conversation tomorrow?"`,
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'A unique, descriptive identifier for this memory (e.g., "user_profession", "project_name", "preferred_output_format")',
            },
            value: {
              type: 'string',
              description: 'The information to store',
            },
            metadata: {
              type: 'object',
              description: 'Optional metadata about this memory',
              properties: {
                category: { type: 'string', description: 'Category like: user_preference, user_info, project_context, reference_data' },
                importance: { type: 'string', enum: ['low', 'medium', 'high'] },
                notes: { type: 'string' },
              },
            },
          },
          required: ['key', 'value'],
        },
      },
      {
        name: 'retrieve_memory',
        description: 'Retrieve stored information from persistent memory. Use this to recall user preferences, important facts, or context from previous conversations.',
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'The unique identifier for the memory to retrieve',
            },
          },
          required: ['key'],
        },
      },
      {
        name: 'list_memories',
        description: 'List all stored memories with their keys and values. Use this to see what information has been stored about the user or their projects.',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Optional: filter by category (user_preference, user_info, project_context, reference_data)',
            },
          },
        },
      },
      {
        name: 'delete_memory',
        description: 'Delete a specific memory from storage when it is no longer needed or is outdated.',
        inputSchema: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'The unique identifier for the memory to delete',
            },
          },
          required: ['key'],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'store_memory': {
        const { key, value, metadata } = args;
        const now = new Date().toISOString();

        // Use INSERT OR REPLACE to handle both new and updated memories
        const stmt = db.prepare(`
          INSERT OR REPLACE INTO memories (key, value, metadata, stored_at, updated_at)
          VALUES (?, ?, ?, COALESCE((SELECT stored_at FROM memories WHERE key = ?), ?), ?)
        `);

        stmt.run(
          key,
          value,
          metadata ? JSON.stringify(metadata) : null,
          key,
          now,
          now
        );

        return {
          content: [
            {
              type: 'text',
              text: `Memory stored successfully with key: "${key}". This information will persist across conversations and server restarts.`,
            },
          ],
        };
      }

      case 'retrieve_memory': {
        const { key } = args;
        const stmt = db.prepare('SELECT * FROM memories WHERE key = ?');
        const row = stmt.get(key);

        if (!row) {
          return {
            content: [
              {
                type: 'text',
                text: `No memory found for key: "${key}"`,
              },
            ],
          };
        }

        const memory = {
          key: row.key,
          value: row.value,
          metadata: row.metadata ? JSON.parse(row.metadata) : {},
          storedAt: row.stored_at,
          updatedAt: row.updated_at,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(memory, null, 2),
            },
          ],
        };
      }

      case 'list_memories': {
        const { category } = args || {};

        let query = 'SELECT * FROM memories';
        let params = [];

        if (category) {
          query += ' WHERE json_extract(metadata, "$.category") = ?';
          params.push(category);
        }

        query += ' ORDER BY updated_at DESC';

        const stmt = db.prepare(query);
        const rows = stmt.all(...params);

        const memories = rows.map(row => ({
          key: row.key,
          value: row.value,
          metadata: row.metadata ? JSON.parse(row.metadata) : {},
          storedAt: row.stored_at,
          updatedAt: row.updated_at,
        }));

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(memories, null, 2),
            },
          ],
        };
      }

      case 'delete_memory': {
        const { key } = args;
        const stmt = db.prepare('DELETE FROM memories WHERE key = ?');
        const result = stmt.run(key);

        return {
          content: [
            {
              type: 'text',
              text: result.changes > 0
                ? `Memory with key "${key}" deleted successfully`
                : `No memory found for key: "${key}"`,
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.error('Shutting down memory server...');
  db.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.error('Shutting down memory server...');
  db.close();
  process.exit(0);
});

// Start server with stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('Memory MCP server running on stdio with persistent SQLite storage');
