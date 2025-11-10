import fs from 'fs/promises';
import path from 'path';

/**
 * Service for parsing RST (ReStructuredText) files from Godot documentation
 */
class RSTParserService {
  constructor() {
    this.docsBasePath = path.join(process.cwd(), 'docs/godot-docs-html-stable/_sources');
  }

  /**
   * Parse all RST files from the documentation
   * @returns {Promise<Array>} Array of parsed documents with metadata
   */
  async parseAllDocs() {
    console.log('🔍 Scanning documentation files...');
    const allDocs = [];

    const categories = [
      { name: 'classes', priority: 10 },
      { name: 'tutorials', priority: 9 },
      { name: 'getting_started', priority: 8 },
      { name: 'engine_details', priority: 5 },
      { name: 'about', priority: 3 },
      { name: 'community', priority: 2 }
    ];

    for (const category of categories) {
      const categoryPath = path.join(this.docsBasePath, category.name);
      try {
        const docs = await this.parseCategory(categoryPath, category);
        allDocs.push(...docs);
        console.log(`  ✓ ${category.name}: ${docs.length} documents`);
      } catch (error) {
        console.error(`  ✗ Error parsing ${category.name}:`, error.message);
      }
    }

    console.log(`\n📚 Total documents parsed: ${allDocs.length}`);
    return allDocs;
  }

  /**
   * Parse all RST files in a category directory
   */
  async parseCategory(categoryPath, category) {
    const docs = [];
    const files = await this.getAllRSTFiles(categoryPath);

    for (const filePath of files) {
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        const relativePath = path.relative(this.docsBasePath, filePath);
        const parsed = this.parseRSTFile(content, relativePath, category);
        docs.push(...parsed);
      } catch (error) {
        console.error(`    Error parsing ${filePath}:`, error.message);
      }
    }

    return docs;
  }

  /**
   * Recursively get all RST files in a directory
   */
  async getAllRSTFiles(dirPath) {
    const files = [];
    
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          const subFiles = await this.getAllRSTFiles(fullPath);
          files.push(...subFiles);
        } else if (entry.isFile() && entry.name.endsWith('.rst.txt')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory doesn't exist or not accessible
    }

    return files;
  }

  /**
   * Clean RST markup to make it readable for AI
   */
  cleanRSTMarkup(content) {
    let cleaned = content;

    // Remove RST metadata and directives
    cleaned = cleaned
      .replace(/^:github_url:.*$/gm, '')
      .replace(/^\.\.\ DO NOT EDIT.*$/gm, '')
      .replace(/^\.\.\ Generated automatically.*$/gm, '')
      .replace(/^\.\.\ Generator:.*$/gm, '')
      .replace(/^\.\.\ XML source:.*$/gm, '')
      .replace(/^\.\.\ _[^:]+:.*$/gm, '') // Remove reference targets like .. _doc_gdscript:
      .replace(/\.\.\ rst-class::[^\n]*/g, '')
      .replace(/\.\.\ note::/g, 'Note:')
      .replace(/\.\.\ warning::/g, 'Warning:')
      .replace(/\.\.\ seealso::/g, 'See also:')
      .replace(/\.\.\ code-tab::/g, '')
      .replace(/\.\.\ code-block::/g, '')
      .replace(/\.\.\ tabs::/g, '')
      .replace(/\.\.\ video::[^\n]*/g, '') // Remove video directives
      .replace(/\.\.\ image::[^\n]*/g, '') // Remove image directives
      .replace(/\.\.\ figure::[^\n]*/g, '') // Remove figure directives
      .replace(/\.\.\s+[a-z_]+\s+replace::[^\n]*/gi, '') // Remove substitution definitions like .. virtual replace::
      // Remove video/image parameters
      .replace(/^\s*:alt:.*$/gm, '')
      .replace(/^\s*:autoplay:.*$/gm, '')
      .replace(/^\s*:loop:.*$/gm, '')
      .replace(/^\s*:muted:.*$/gm, '')
      .replace(/^\s*:align:.*$/gm, '')
      .replace(/^\s*:width:.*$/gm, '')
      .replace(/^\s*:height:.*$/gm, '')
      .replace(/^\s*:scale:.*$/gm, '')
      // Remove code tab language markers
      .replace(/^\s*gdscript\s+GDScript\s*$/gm, 'GDScript:')
      .replace(/^\s*csharp\s*$/gm, 'C#:')
      .replace(/^\s*cpp\s*$/gm, 'C++:');

    // Clean inline RST references and formatting
    cleaned = cleaned
      // Remove :ref:`text<target>` -> just "text"
      .replace(/:ref:`([^<]+)<[^>]+>`/g, '$1')
      // Remove :ref:`text` -> just "text"
      .replace(/:ref:`([^`]+)`/g, '$1')
      // Remove :doc:`text<target>` -> just "text"
      .replace(/:doc:`([^<]+)<[^>]+>`/g, '$1')
      // Remove :doc:`text` -> just "text"
      .replace(/:doc:`([^`]+)`/g, '$1')
      // Remove :class:`ClassName` -> just "ClassName"
      .replace(/:class:`([^`]+)`/g, '$1')
      // Remove :meth:`method` -> just "method"
      .replace(/:meth:`([^`]+)`/g, '$1')
      // Remove :attr:`attribute` -> just "attribute"
      .replace(/:attr:`([^`]+)`/g, '$1')
      // Remove |const| and other substitutions
      .replace(/\|const\|/g, 'const')
      .replace(/\|static\|/g, 'static')
      .replace(/\|virtual\|/g, 'virtual')
      // Remove escape characters for special RST syntax
      .replace(/\\\ /g, ' ')
      .replace(/\\ /g, ' ')
      // Clean up method signatures: **method**\ (\ params\ ) -> method(params)
      .replace(/\*\*([^*]+)\*\*\\\ \(\\\ ([^)]+)\\\ \)/g, '$1($2)')
      .replace(/\*\*([^*]+)\*\*\(/g, '$1(')
      // Remove inline code role like :code:`text` -> just "text"
      .replace(/:code:`([^`]+)`/g, '`$1`')
      // Convert double backticks to single (RST inline code)
      .replace(/``([^`]+)``/g, '`$1`')
      // Remove double single quotes (RST emphasis)
      .replace(/''([^']+)''/g, '$1')
      // Remove ** bold markers (but keep the text)
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      // Remove * italic markers
      .replace(/\*([^*]+)\*/g, '$1')
      // Remove backslash escapes from special characters
      .replace(/\\:/g, ':')
      .replace(/\\,/g, ',')
      .replace(/\\;/g, ';')
      .replace(/\\\//g, '/')
      .replace(/\\([`*_{}[\]()#+\-.!])/g, '$1')
      // Remove 🔗 link icons
      .replace(/:ref:`🔗`/g, '')
      .replace(/🔗/g, '')
      // Clean up multiple spaces
      .replace(/  +/g, ' ')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n');

    // Remove table directives
    cleaned = cleaned
      .replace(/\.\.\ table::/g, '')
      .replace(/:widths: auto/g, '')
      .replace(/\+[-=+]+\+/g, '') // Table borders
      .replace(/\|/g, ' '); // Table cell separators

    return cleaned.trim();
  }

  /**
   * Parse a single RST file and extract structured content
   */
  parseRSTFile(content, relativePath, category) {
    // Extract title (first heading)
    const titleMatch = content.match(/^([A-Za-z0-9_\s]+)\n={3,}/m);
    const title = titleMatch ? titleMatch[1].trim() : path.basename(relativePath, '.rst.txt');

    // Clean RST markup and format for AI consumption
    let cleanContent = this.cleanRSTMarkup(content);

    // Detect document type
    const docType = this.detectDocType(relativePath, content);

    // Extract sections
    const sections = this.extractSections(cleanContent);

    // Create chunks from sections
    const chunks = [];
    for (const section of sections) {
      const sectionChunks = this.chunkSection(section, {
        title,
        relativePath,
        category: category.name,
        priority: category.priority,
        docType
      });
      chunks.push(...sectionChunks);
    }

    return chunks;
  }

  /**
   * Detect the type of documentation
   */
  detectDocType(relativePath, content) {
    if (relativePath.includes('classes/')) return 'class_reference';
    if (relativePath.includes('tutorials/')) {
      if (content.includes('extends ') || content.includes('func ')) {
        return 'tutorial_with_code';
      }
      return 'tutorial';
    }
    if (relativePath.includes('getting_started/')) return 'getting_started';
    if (relativePath.includes('engine_details/')) return 'engine_details';
    return 'general';
  }

  /**
   * Extract sections from RST content using semantic boundaries
   * This creates naturally grouped chunks (methods, properties, tutorials)
   */
  extractSections(content) {
    const sections = [];
    const lines = content.split('\n');
    let i = 0;
    let currentSection = { title: 'Introduction', content: '', type: 'general' };

    while (i < lines.length) {
      const line = lines[i];
      const nextLine = lines[i + 1];

      // Detect headers (next line is underline: === or ---)
      // BUT: only if current line has actual text (not just a separator line)
      if (nextLine && /^[=-]{3,}$/.test(nextLine) && line.trim().length > 0 && !/^[=-]{3,}$/.test(line.trim())) {
        // Save previous section if it has content
        if (currentSection.content.trim()) {
          sections.push({ ...currentSection });
        }

        const headerText = line.trim();
        const underlineChar = nextLine[0];
        
        // Determine section type based on title and underline
        let sectionType = 'general';
        const lowerTitle = headerText.toLowerCase();
        
        if (underlineChar === '=') {
          sectionType = 'document_title';
        } else if (lowerTitle.includes('description')) {
          sectionType = 'description';
        } else if (lowerTitle.includes('method') || lowerTitle.includes('function')) {
          sectionType = 'methods';
        } else if (lowerTitle.includes('properties') || lowerTitle.includes('member')) {
          sectionType = 'properties';
        } else if (lowerTitle.includes('signal')) {
          sectionType = 'signals';
        } else if (lowerTitle.includes('constructor') || lowerTitle.includes('operator')) {
          sectionType = 'operators';
        } else if (lowerTitle.includes('tutorial') || lowerTitle.includes('example')) {
          sectionType = 'tutorial';
        }

        // Start new section
        currentSection = {
          title: headerText,
          content: '',
          type: sectionType
        };

        i += 2; // Skip header and underline
        continue;
      }

      // Add line to current section
      currentSection.content += line + '\n';
      i++;
    }

    // Add final section
    if (currentSection.content.trim()) {
      sections.push(currentSection);
    }

    return sections.length > 0 ? sections : [{ title: 'Content', content: '', type: 'general' }];
  }

  /**
   * Chunk a section semantically based on its type and natural boundaries
   */
  chunkSection(section, metadata) {
    const content = section.content.trim();
    if (!content || content.length < 50) return []; // Skip empty sections

    const maxChunkSize = 5000; // Allow larger chunks for semantic completeness
    
    // Strategy depends on section type
    let rawChunks = [];
    
    if (section.type === 'methods' || section.type === 'operators') {
      rawChunks = this.chunkByMethods(section);
    } else if (section.type === 'properties' || section.type === 'signals') {
      rawChunks = this.chunkByProperties(section);
    } else {
      // Keep sections together unless very large
      if (content.length <= maxChunkSize) {
        rawChunks = [{
          text: this.formatChunk(section.title, content),
          sectionType: section.type
        }];
      } else {
        rawChunks = this.chunkByParagraphs(section, maxChunkSize);
      }
    }

    // Add metadata to all chunks
    return rawChunks.map((chunk, index) => ({
      text: chunk.text,
      metadata: {
        ...metadata,
        section: section.title,
        sectionType: chunk.sectionType || section.type,
        chunkIndex: index,
        totalChunks: rawChunks.length,
        methodName: chunk.methodName
      }
    }));
  }

  /**
   * Split methods section by individual methods
   * Each method signature + description + examples = 1 chunk
   * Methods in Godot docs are separated by horizontal rules (-----)
   */
  chunkByMethods(section) {
    const chunks = [];
    const content = section.content;
    
    // Methods are separated by ----- horizontal rules (RST item separators)
    const methods = content.split(/\n-{3,}\n/).filter(m => m.trim().length > 50);
    
    if (methods.length <= 1) {
      // No clear separators or single method, return as is
      return [{
        text: this.formatChunk(section.title, content),
        sectionType: section.type
      }];
    }
    
    // Each method is a semantic chunk
    for (const method of methods) {
      const trimmed = method.trim();
      if (!trimmed || trimmed.length < 50) continue;
      
      // Try to extract method name from the signature
      // Pattern: methodName ( params ) or methodName( or just methodName
      const methodMatch = trimmed.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/m);
      const methodName = methodMatch ? methodMatch[1] : null;
      
      chunks.push({
        text: this.formatChunk(section.title, trimmed),
        sectionType: 'method',
        methodName: methodName
      });
    }
    
    return chunks.length > 0 ? chunks : [{
      text: this.formatChunk(section.title, content),
      sectionType: section.type
    }];
  }

  /**
   * Split properties/signals by individual items
   */
  chunkByProperties(section) {
    const content = section.content;
    
    // Properties often separated by blank lines
    const items = content.split(/\n\n+/).filter(p => p.trim().length > 50);
    
    // If few properties, keep together
    if (items.length <= 5 || content.length <= 5000) {
      return [{
        text: this.formatChunk(section.title, content),
        sectionType: section.type
      }];
    }

    // Split into groups of 3-5 properties for manageable chunks
    const chunks = [];
    const groupSize = 4;
    
    for (let i = 0; i < items.length; i += groupSize) {
      const group = items.slice(i, i + groupSize);
      const groupText = group.join('\n\n');
      chunks.push({
        text: this.formatChunk(section.title, groupText),
        sectionType: section.type
      });
    }
    
    return chunks;
  }

  /**
   * Fallback: chunk by paragraphs (keep code blocks together)
   */
  chunkByParagraphs(section, maxChunkSize) {
    const chunks = [];
    const paragraphs = section.content.split(/\n\n+/);
    let currentChunk = '';
    const minChunkSize = 500;

    for (const para of paragraphs) {
      const paraSize = para.length;

      if (currentChunk.length + paraSize > maxChunkSize && currentChunk.length > minChunkSize) {
        chunks.push({
          text: this.formatChunk(section.title, currentChunk.trim()),
          sectionType: section.type
        });

        currentChunk = para + '\n\n';
      } else {
        currentChunk += para + '\n\n';
      }
    }

    if (currentChunk.trim().length > minChunkSize) {
      chunks.push({
        text: this.formatChunk(section.title, currentChunk.trim()),
        sectionType: section.type
      });
    }

    return chunks.length > 0 ? chunks : [{
      text: this.formatChunk(section.title, section.content),
      sectionType: section.type
    }];
  }

  /**
   * Format a chunk with section title for better context
   */
  formatChunk(sectionTitle, content) {
    return `## ${sectionTitle}\n\n${content}`;
  }

  /**
   * Extract code examples from content
   */
  extractCodeExamples(content) {
    const codeBlocks = [];
    const codeRegex = /::\n\n((?:    .+\n?)+)/g;
    let match;

    while ((match = codeRegex.exec(content)) !== null) {
      const code = match[1]
        .split('\n')
        .map(line => line.slice(4)) // Remove indentation
        .join('\n')
        .trim();
      
      if (code) {
        codeBlocks.push(code);
      }
    }

    return codeBlocks;
  }

  /**
   * Get statistics about parsed documents
   */
  getStats(docs) {
    const stats = {
      total: docs.length,
      byCategory: {},
      byDocType: {},
      totalCharacters: 0,
      estimatedTokens: 0
    };

    for (const doc of docs) {
      const category = doc.metadata.category;
      const docType = doc.metadata.docType;

      stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
      stats.byDocType[docType] = (stats.byDocType[docType] || 0) + 1;
      stats.totalCharacters += doc.text.length;
    }

    stats.estimatedTokens = Math.ceil(stats.totalCharacters / 4);
    stats.averageChunkSize = Math.round(stats.totalCharacters / stats.total);

    return stats;
  }
}

export default new RSTParserService();

