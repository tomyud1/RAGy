import vectorDBService from './vector-db.service.js';
import rstParserService from './rst-parser.service.js';
import fs from 'fs/promises';
import path from 'path';

/**
 * RAG (Retrieval Augmented Generation) Service
 * Main orchestrator for document retrieval and context building
 */
class RAGService {
  constructor() {
    this.initialized = false;
    this.cacheFile = path.join(process.cwd(), 'data/godot_docs_cache.json');
    this.MAX_CONTEXT_TOKENS = 3000; // Maximum tokens from RAG per query
  }

  /**
   * Initialize the RAG system
   */
  async initialize() {
    if (this.initialized) {
      console.log('✓ RAG service already initialized');
      return;
    }

    console.log('🚀 Initializing RAG system...\n');
    
    // Initialize Vector Database
    await vectorDBService.initialize();

    // Check if we have documents in the database
    const stats = await vectorDBService.getStats();
    console.log(`📊 Current database: ${stats.totalDocuments} documents\n`);

    this.initialized = true;
  }

  /**
   * Populate the vector database with Godot documentation
   * This is a one-time setup operation
   */
  async populateDatabase(useCache = true) {
    console.log('=' .repeat(60));
    console.log('📚 POPULATING VECTOR DATABASE');
    console.log('=' .repeat(60));
    console.log();

    await this.initialize();

    // Check for cached parsed documents
    let documents = null;
    if (useCache) {
      documents = await this.loadCachedDocs();
    }

    if (!documents) {
      // Parse RST files
      console.log('📖 Parsing Godot documentation files...\n');
      documents = await rstParserService.parseAllDocs();
      
      // Get statistics
      const stats = rstParserService.getStats(documents);
      console.log('\n📊 Parsing Statistics:');
      console.log('─'.repeat(60));
      console.log(`  Total chunks: ${stats.total}`);
      console.log(`  Average chunk size: ${stats.averageChunkSize} characters`);
      console.log(`  Estimated tokens: ${stats.estimatedTokens.toLocaleString()}`);
      console.log('\n  By Category:');
      Object.entries(stats.byCategory).forEach(([cat, count]) => {
        console.log(`    ${cat}: ${count}`);
      });
      console.log('\n  By Document Type:');
      Object.entries(stats.byDocType).forEach(([type, count]) => {
        console.log(`    ${type}: ${count}`);
      });
      console.log('─'.repeat(60));
      console.log();

      // Save cache
      await this.saveCachedDocs(documents);
    }

    // Add to vector database
    const added = await vectorDBService.addDocuments(documents);

    console.log();
    console.log('=' .repeat(60));
    console.log('✅ DATABASE POPULATION COMPLETE');
    console.log('=' .repeat(60));
    console.log();

    return { documentsAdded: added, totalDocuments: documents.length };
  }

  /**
   * Retrieve relevant documentation for a query
   * @param {string} query - User's question or query
   * @param {object} options - Retrieval options
   * @returns {Promise<object>} Retrieved context with metadata
   */
  async retrieve(query, options = {}) {
    if (!this.initialized) {
      await this.initialize();
    }

    const {
      limit = 5,
      minSimilarity = 0.45, // Lower threshold - let AI filter relevance
      maxTokens = this.MAX_CONTEXT_TOKENS,
      category = null,
      docType = null
    } = options;

    // Check if query is Godot-related
    if (!this.isGodotQuery(query)) {
      return {
        documents: [],
        tokenCount: 0,
        isRelevant: false,
        reason: 'Query not related to Godot'
      };
    }

    // Query vector database
    const results = await vectorDBService.query(query, {
      limit: limit * 2, // Get more results, we'll filter by tokens
      minSimilarity,
      category,
      docType
    });

    // Select documents within token budget
    const selectedDocs = [];
    let currentTokens = 0;

    for (const doc of results) {
      const docTokens = vectorDBService.estimateTokens(doc.text);
      
      if (currentTokens + docTokens <= maxTokens) {
        selectedDocs.push(doc);
        currentTokens += docTokens;
      } else {
        break;
      }

      if (selectedDocs.length >= limit) {
        break;
      }
    }

    return {
      documents: selectedDocs,
      tokenCount: currentTokens,
      isRelevant: selectedDocs.length > 0,
      retrievedCount: results.length,
      selectedCount: selectedDocs.length
    };
  }

  /**
   * Build RAG context string for AI
   * @param {Array} documents - Retrieved documents
   * @returns {string} Formatted context string
   */
  buildContext(documents) {
    if (!documents || documents.length === 0) {
      return '';
    }

    let context = '# Godot Engine Documentation Reference\n\n';
    context += 'The following documentation is relevant to the user\'s question:\n\n';
    context += '─' .repeat(60) + '\n\n';

    documents.forEach((doc, index) => {
      const metadata = doc.metadata;
      context += `## Reference ${index + 1}: ${metadata.title}`;
      
      if (metadata.section && metadata.section !== metadata.title) {
        context += ` - ${metadata.section}`;
      }
      
      context += `\n`;
      context += `**Category**: ${metadata.category} | **Type**: ${metadata.docType} | **Relevance**: ${(doc.similarity * 100).toFixed(0)}%\n\n`;
      context += doc.text;
      context += '\n\n' + '─' .repeat(60) + '\n\n';
    });

    context += '\nUse the above documentation to provide accurate, well-informed answers about Godot Engine.\n';
    
    return context;
  }

  /**
   * Check if a query is related to Godot
   */
  isGodotQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // Godot-specific keywords
    const godotKeywords = [
      'godot', 'gdscript', 'node', 'scene', 'signal', 'extends', 'func',
      '@onready', '@export', 'characterbody', 'area2d', 'sprite2d', 
      'rigidbody', 'move_and_slide', 'collision', 'physics', 'tscn',
      'canvas', 'viewport', 'tree', '_ready', '_process', '_physics_process',
      'input.', 'vector2', 'vector3', 'transform', 'global_position'
    ];

    // Game development keywords (likely Godot-related in this context)
    const gameDevKeywords = [
      'player', 'enemy', 'movement', 'jump', 'velocity', 'animation',
      'health', 'damage', 'collision', 'spawn', 'instantiate', 'scene tree',
      'character', 'sprite', 'object', 'load', 'input', 'move', 'detect'
    ];

    // Check for Godot keywords
    const hasGodotKeyword = godotKeywords.some(keyword => lowerQuery.includes(keyword));
    if (hasGodotKeyword) return true;

    // Check for game dev keywords (be more conservative with these)
    const gameDevCount = gameDevKeywords.filter(keyword => lowerQuery.includes(keyword)).length;
    if (gameDevCount >= 2) return true;

    // Check if asking about code/programming
    const codingIndicators = ['how do i', 'how to', 'function', 'method', 'class', 'code', 'script'];
    const hasCodingIndicator = codingIndicators.some(indicator => lowerQuery.includes(indicator));
    
    // If asking about coding and mentions game concepts, likely Godot
    if (hasCodingIndicator && gameDevCount >= 1) return true;

    return false;
  }

  /**
   * Get detailed statistics about the RAG system
   */
  async getStatistics() {
    if (!this.initialized) {
      await this.initialize();
    }

    return await vectorDBService.getStats();
  }

  /**
   * Save parsed documents to cache
   */
  async saveCachedDocs(documents) {
    try {
      const cacheDir = path.dirname(this.cacheFile);
      await fs.mkdir(cacheDir, { recursive: true });
      await fs.writeFile(this.cacheFile, JSON.stringify(documents, null, 2));
      console.log(`💾 Cached ${documents.length} documents to ${this.cacheFile}`);
    } catch (error) {
      console.error('Error saving cache:', error);
    }
  }

  /**
   * Load parsed documents from cache
   */
  async loadCachedDocs() {
    try {
      const data = await fs.readFile(this.cacheFile, 'utf-8');
      const documents = JSON.parse(data);
      console.log(`📦 Loaded ${documents.length} documents from cache`);
      return documents;
    } catch (error) {
      console.log('📭 No cache found, will parse from source');
      return null;
    }
  }

  /**
   * Clear cache and database (for fresh rebuild)
   */
  async clearAll() {
    console.log('🗑️  Clearing RAG system...');
    
    // Clear database
    await vectorDBService.clearAll();
    
    // Clear cache
    try {
      await fs.unlink(this.cacheFile);
      console.log('✓ Cache cleared');
    } catch (error) {
      // Cache file doesn't exist, that's fine
    }

    console.log('✅ RAG system cleared');
  }
}

export default new RAGService();

