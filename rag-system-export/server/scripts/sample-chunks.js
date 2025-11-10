import rstParser from '../services/ai/rst-parser.service.js';
import fs from 'fs/promises';
import path from 'path';

console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
console.log('║                                                                   ║');
console.log('║         📖  RANDOM CHUNK SAMPLES  📖                             ║');
console.log('║                                                                   ║');
console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

async function showChunkSample(filePath, label) {
  console.log('═'.repeat(80));
  console.log(`📄 ${label}`);
  console.log('═'.repeat(80));
  console.log();

  const content = await fs.readFile(filePath, 'utf-8');
  const cleaned = rstParser.cleanRSTMarkup(content);
  const sections = rstParser.extractSections(cleaned);
  
  // Get all chunks from all sections
  const allChunks = [];
  for (const section of sections) {
    const chunks = rstParser.chunkSection(section, {
      title: label,
      relativePath: path.basename(filePath),
      category: 'test',
      docType: 'test'
    });
    allChunks.push(...chunks);
  }
  
  console.log(`📊 Total chunks created: ${allChunks.length}\n`);
  
  // Pick 3 random chunks
  const randomIndices = [];
  while (randomIndices.length < Math.min(3, allChunks.length)) {
    const rand = Math.floor(Math.random() * allChunks.length);
    if (!randomIndices.includes(rand)) {
      randomIndices.push(rand);
    }
  }
  
  randomIndices.forEach((index, i) => {
    const chunk = allChunks[index];
    const tokens = Math.ceil(chunk.text.length / 4);
    
    console.log(`┌${'─'.repeat(78)}┐`);
    console.log(`│ SAMPLE ${i + 1}/3: Chunk ${index + 1}/${allChunks.length}`.padEnd(79) + '│');
    console.log(`│ Section: ${chunk.metadata.section}`.padEnd(79) + '│');
    console.log(`│ Type: ${chunk.metadata.sectionType || 'general'}`.padEnd(79) + '│');
    if (chunk.metadata.methodName) {
      console.log(`│ Method: ${chunk.metadata.methodName}()`.padEnd(79) + '│');
    }
    console.log(`│ Size: ${chunk.text.length} chars (~${tokens} tokens)`.padEnd(79) + '│');
    console.log(`└${'─'.repeat(78)}┘`);
    console.log();
    console.log('FULL CONTENT:');
    console.log('─'.repeat(80));
    console.log(chunk.text);
    console.log('─'.repeat(80));
    console.log();
  });
}

async function main() {
  try {
    const basePath = 'docs/godot-docs-html-stable/_sources';
    
    // Sample 1: Class reference (methods heavy)
    await showChunkSample(
      path.join(basePath, 'classes/class_characterbody2d.rst.txt'),
      'CharacterBody2D (Class Reference with Methods)'
    );
    
    // Sample 2: Tutorial with code examples
    await showChunkSample(
      path.join(basePath, 'tutorials/2d/2d_movement.rst.txt'),
      '2D Movement Tutorial (Code Examples)'
    );
    
    // Sample 3: GDScript reference
    await showChunkSample(
      path.join(basePath, 'tutorials/scripting/gdscript/gdscript_basics.rst.txt'),
      'GDScript Basics (Language Reference)'
    );
    
    console.log('═'.repeat(80));
    console.log('✅ SAMPLE REVIEW COMPLETE');
    console.log('═'.repeat(80));
    console.log();
    console.log('Check the samples above:');
    console.log('  ✅ Are they readable and clean?');
    console.log('  ✅ Do they contain complete information?');
    console.log('  ✅ Are method signatures clear?');
    console.log('  ✅ Are code examples intact?');
    console.log('  ✅ Is the size appropriate (~50-500 tokens)?');
    console.log();
    console.log('If everything looks good, run: npm run rag:setup:clear');
    console.log();
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 'ENOENT') {
      console.error('\n💡 File not found. Trying alternative files...\n');
      
      // Try simpler files
      const basePath = 'docs/godot-docs-html-stable/_sources';
      await showChunkSample(
        path.join(basePath, 'classes/class_vector2.rst.txt'),
        'Vector2 (Math Class)'
      );
      await showChunkSample(
        path.join(basePath, 'classes/class_node.rst.txt'),
        'Node (Base Class)'
      );
    } else {
      console.error(error.stack);
    }
  }
}

main();

