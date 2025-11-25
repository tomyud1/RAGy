import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { RAGService } from '../services/rag.service.js';
import { ProjectService } from '../services/project.service.js';
import fs from 'fs/promises';
import path from 'path';

// Create MCP server
const server = new Server(
  {
    name: 'ragy-rag-server',
    version: '1.0.0',
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
        name: 'search_documents',
        description: `Semantic search across the knowledge base using vector similarity. Use this to find relevant information based on meaning, not just keywords. Returns the most relevant document chunks with similarity scores.

MULTIPLE QUERIES: You can provide either a single query string OR an array of query strings. When using multiple queries, all queries will use the same search parameters (top_k, min_similarity, min_tokens). This is useful when you need to search for multiple related topics.

PARAMETERS: Unless the user explicitly requests different values, always use the DEFAULT parameters (top_k=15, min_similarity=0.55, min_tokens=null). Only override these if the user specifically asks for different values.

Examples:
- Single query: {"query": "heat transfer"}
- Multiple queries: {"query": ["heat transfer", "convection", "radiation"]}
- With custom parameters: {"query": "heat transfer", "top_k": 10, "min_similarity": 0.7}`,
        inputSchema: {
          type: 'object',
          properties: {
            project_id: {
              type: 'string',
              description: 'The project ID (will be provided automatically)',
            },
            vector_db_id: {
              type: 'string',
              description: 'The vector database ID to search in (will be provided automatically if one is selected)',
            },
            query: {
              oneOf: [
                { type: 'string' },
                { type: 'array', items: { type: 'string' } }
              ],
              description: 'Single search query string OR array of query strings. All queries will use the same parameters.',
            },
            top_k: {
              type: 'number',
              description: 'Number of results to return PER QUERY (default: 15, max: 20)',
              default: 15,
            },
            min_similarity: {
              type: 'number',
              description: 'Minimum similarity threshold 0-1 (default: 0.55). Higher values = more relevant but fewer results.',
              default: 0.55,
            },
            min_tokens: {
              type: 'number',
              description: 'Minimum token count for chunks (default: null/off). Use to filter out very short chunks.',
              default: null,
            },
          },
          required: ['project_id', 'query'],
        },
      },
      {
        name: 'grep_documents',
        description: 'Search for exact text matches across all document chunks. Use this when you need to find specific phrases, codes, names, or exact quotes. Case-insensitive by default.',
        inputSchema: {
          type: 'object',
          properties: {
            project_id: {
              type: 'string',
              description: 'The project ID (will be provided automatically)',
            },
            vector_db_id: {
              type: 'string',
              description: 'The vector database ID to search in (will be provided automatically if one is selected)',
            },
            pattern: {
              type: 'string',
              description: 'The exact text or phrase to search for',
            },
            case_sensitive: {
              type: 'boolean',
              description: 'Whether to match case exactly (default: false)',
              default: false,
            },
            max_results: {
              type: 'number',
              description: 'Maximum number of matching chunks to return (default: 10)',
              default: 10,
            },
          },
          required: ['project_id', 'pattern'],
        },
      },
      {
        name: 'list_available_documents',
        description: 'List all available vector databases (knowledge bases) for the current project. Shows what document collections are available to search.',
        inputSchema: {
          type: 'object',
          properties: {
            project_id: {
              type: 'string',
              description: 'The project ID (will be provided automatically)',
            },
          },
          required: ['project_id'],
        },
      },
      {
        name: 'get_vector_db_info',
        description: 'Get detailed information about a specific vector database, including model used, dimensions, total chunks, and metadata.',
        inputSchema: {
          type: 'object',
          properties: {
            project_id: {
              type: 'string',
              description: 'The project ID (will be provided automatically)',
            },
            vector_db_id: {
              type: 'string',
              description: 'The ID of the vector database to get info about',
            },
          },
          required: ['project_id', 'vector_db_id'],
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
      case 'search_documents': {
        const { project_id, vector_db_id, query, top_k = 15, min_similarity = 0.55, min_tokens = null } = args;

        // Validate we have a vector DB
        if (!vector_db_id) {
          return {
            content: [
              {
                type: 'text',
                text: 'No vector database selected. Use list_available_documents to see available knowledge bases, or ask the user to select one.',
              },
            ],
          };
        }

        // Normalize query to array
        const queries = Array.isArray(query) ? query : [query];
        const isMultipleQueries = Array.isArray(query);

        // Execute all queries
        const allResults = [];
        let totalQueryTime = 0;

        for (const q of queries) {
          // Perform semantic search
          const result = await RAGService.querySingleVectorDb(
            project_id,
            vector_db_id,
            q,
            Math.min(top_k, 20), // Cap at 20
            min_similarity
          );

          totalQueryTime += result.queryTime;

          // Filter by min_tokens if specified
          let filteredDocs = result.documents;
          if (min_tokens !== null && min_tokens > 0) {
            filteredDocs = result.documents.filter(doc => {
              // Estimate tokens (rough approximation: 1 token ≈ 4 characters)
              const estimatedTokens = Math.ceil(doc.text.length / 4);
              return estimatedTokens >= min_tokens;
            });
          }

          allResults.push({
            query: q,
            documents: filteredDocs,
            totalFound: result.documents.length,
            queryTime: result.queryTime,
          });
        }

        // Check if we got any results
        const totalDocs = allResults.reduce((sum, r) => sum + r.documents.length, 0);
        if (totalDocs === 0) {
          const failedQueries = allResults.map(r => `"${r.query}"`).join(', ');
          return {
            content: [
              {
                type: 'text',
                text: `No documents found matching ${failedQueries} with similarity >= ${min_similarity}. Try lowering the min_similarity threshold or rephrasing your queries.`,
              },
            ],
          };
        }

        // Format results
        let formattedOutput = '';

        if (isMultipleQueries) {
          // Format for multiple queries - group by query
          formattedOutput = allResults.map((queryResult, qIdx) => {
            if (queryResult.documents.length === 0) {
              return `\n=== Query ${qIdx + 1}: "${queryResult.query}" ===\nNo results found (${queryResult.totalFound} found before filtering)`;
            }

            const avgSim = queryResult.documents.reduce((sum, d) => sum + d.similarity, 0) / queryResult.documents.length;
            const header = `\n=== Query ${qIdx + 1}: "${queryResult.query}" ===\nFound ${queryResult.documents.length} chunks (avg similarity: ${(avgSim * 100).toFixed(1)}%, query time: ${queryResult.queryTime}ms)\n`;

            const results = queryResult.documents.map((doc, idx) => {
              const source = doc.metadata?.source || doc.metadata?.filename || 'Unknown';
              const page = doc.metadata?.page ? ` (page ${doc.metadata.page})` : '';
              const tokenCount = Math.ceil(doc.text.length / 4);
              return `[Result ${idx + 1}] Similarity: ${(doc.similarity * 100).toFixed(1)}% | ~${tokenCount} tokens
Source: ${source}${page}
Text: ${doc.text}
---`;
            }).join('\n');

            return header + results;
          }).join('\n\n');

          const summary = `Executed ${queries.length} queries, found ${totalDocs} total chunks (total query time: ${totalQueryTime}ms)`;
          formattedOutput = summary + '\n' + formattedOutput;
        } else {
          // Format for single query
          const queryResult = allResults[0];
          const avgSim = queryResult.documents.reduce((sum, d) => sum + d.similarity, 0) / queryResult.documents.length;
          const summary = `Found ${queryResult.documents.length} relevant chunks (avg similarity: ${(avgSim * 100).toFixed(1)}%, query time: ${queryResult.queryTime}ms)`;

          const results = queryResult.documents.map((doc, idx) => {
            const source = doc.metadata?.source || doc.metadata?.filename || 'Unknown';
            const page = doc.metadata?.page ? ` (page ${doc.metadata.page})` : '';
            const tokenCount = Math.ceil(doc.text.length / 4);
            return `
[Result ${idx + 1}] Similarity: ${(doc.similarity * 100).toFixed(1)}% | ~${tokenCount} tokens
Source: ${source}${page}
Text: ${doc.text}
---`;
          }).join('\n');

          formattedOutput = `${summary}\n${results}`;
        }

        return {
          content: [
            {
              type: 'text',
              text: formattedOutput,
            },
          ],
        };
      }

      case 'grep_documents': {
        const { project_id, vector_db_id, pattern, case_sensitive = false, max_results = 10 } = args;

        if (!vector_db_id) {
          return {
            content: [
              {
                type: 'text',
                text: 'No vector database selected. Use list_available_documents to see available knowledge bases.',
              },
            ],
          };
        }

        // Load metadata to search through
        const vectorDbDir = path.join(
          ProjectService.getVectorDbsPath(project_id),
          vector_db_id
        );
        const metadataPath = path.join(vectorDbDir, 'metadata.json');
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));

        // Search for exact text matches
        const searchPattern = case_sensitive ? pattern : pattern.toLowerCase();
        const matches = [];

        for (let i = 0; i < metadata.length; i++) {
          const chunk = metadata[i];
          const text = case_sensitive ? chunk.text : chunk.text.toLowerCase();

          if (text.includes(searchPattern)) {
            matches.push({
              index: i,
              text: chunk.text,
              metadata: chunk.metadata,
            });

            if (matches.length >= max_results) break;
          }
        }

        if (matches.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: `No exact matches found for "${pattern}". Try using search_documents for semantic search instead.`,
              },
            ],
          };
        }

        // Format results
        const formattedResults = matches.map((match, idx) => {
          const source = match.metadata?.source || match.metadata?.filename || 'Unknown';
          const page = match.metadata?.page ? ` (page ${match.metadata.page})` : '';

          // Highlight the matched text (show context around it)
          const text = match.text;
          const lowerText = case_sensitive ? text : text.toLowerCase();
          const matchIndex = lowerText.indexOf(searchPattern);

          // Show 100 chars before and after the match
          const start = Math.max(0, matchIndex - 100);
          const end = Math.min(text.length, matchIndex + searchPattern.length + 100);
          const contextText = (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');

          return `
[Match ${idx + 1}]
Source: ${source}${page}
Text: ${contextText}
---`;
        }).join('\n');

        const summary = `Found ${matches.length} exact matches for "${pattern}"`;

        return {
          content: [
            {
              type: 'text',
              text: `${summary}\n\n${formattedResults}`,
            },
          ],
        };
      }

      case 'list_available_documents': {
        const { project_id } = args;
        const vectorDbs = await ProjectService.getProjectVectorDbs(project_id);

        if (vectorDbs.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: 'No vector databases found for this project. The user needs to create one in the RAG System first.',
              },
            ],
          };
        }

        const formatted = vectorDbs.map((db, idx) => {
          return `${idx + 1}. ${db.name}
   ID: ${db.id}
   Model: ${db.modelName}
   Chunks: ${db.totalChunks || 'Unknown'}
   Created: ${new Date(db.createdAt).toLocaleDateString()}`;
        }).join('\n\n');

        return {
          content: [
            {
              type: 'text',
              text: `Available vector databases:\n\n${formatted}`,
            },
          ],
        };
      }

      case 'get_vector_db_info': {
        const { project_id, vector_db_id } = args;

        // Load config
        const vectorDbDir = path.join(
          ProjectService.getVectorDbsPath(project_id),
          vector_db_id
        );
        const configPath = path.join(vectorDbDir, 'config.json');
        const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));

        // Load metadata to count chunks
        const metadataPath = path.join(vectorDbDir, 'metadata.json');
        const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));

        // Get unique sources
        const sources = new Set();
        metadata.forEach(chunk => {
          const source = chunk.metadata?.source || chunk.metadata?.filename || 'Unknown';
          sources.add(source);
        });

        const info = `
Vector Database Information:
- Name: ${config.name || 'Unnamed'}
- Model: ${config.modelName} (${config.modelId})
- Dimensions: ${config.dimensions}
- Total Chunks: ${metadata.length}
- Unique Sources: ${sources.size}
- Created: ${new Date(config.createdAt).toLocaleString()}

Sources:
${Array.from(sources).map((s, i) => `  ${i + 1}. ${s}`).join('\n')}
`;

        return {
          content: [
            {
              type: 'text',
              text: info.trim(),
            },
          ],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    console.error(`[RAG MCP] Tool execution error:`, error);
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

// Start server with stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);

console.error('RAG MCP server running on stdio');
