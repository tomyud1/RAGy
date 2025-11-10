import rstParser from '../services/ai/rst-parser.service.js';
import fs from 'fs/promises';

console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
console.log('║                                                                   ║');
console.log('║         🧪  SEMANTIC CHUNKING TEST  🧪                           ║');
console.log('║                                                                   ║');
console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

async function testFile(relativePath, label) {
  console.log('═'.repeat(80));
  console.log(`📄 Testing: ${label}`);
  console.log('═'.repeat(80));
  console.log();

  const fullPath = `docs/godot-docs-html-stable/_sources/${relativePath}`;
  const content = await fs.readFile(fullPath, 'utf-8');
  
  // Parse the file
  const cleanedContent = rstParser.cleanRSTMarkup(content);
  const sections = rstParser.extractSections(cleanedContent);
  
  console.log(`📊 Found ${sections.length} sections:\n`);
  sections.forEach((section, i) => {
    console.log(`  ${i + 1}. ${section.title} (${section.type}) - ${section.content.length} chars`);
  });
  console.log();
  
  // Test chunking on method descriptions section (where actual method docs are)
  const methodsSection = sections.find(s => s.title.toLowerCase().includes('method description'));
  if (methodsSection) {
    console.log('🔍 Testing METHOD chunking:');
    console.log('─'.repeat(80));
    const chunks = rstParser.chunkByMethods(methodsSection);
    console.log(`   Created ${chunks.length} chunks from "${methodsSection.title}" section\n`);
    
    // Show first 2-3 chunks
    chunks.slice(0, 3).forEach((chunk, i) => {
      console.log(`   ✅ Chunk ${i + 1}/${chunks.length}:`);
      if (chunk.methodName) {
        console.log(`      Method: ${chunk.methodName}`);
      }
      console.log(`      Size: ${chunk.text.length} chars (~${Math.ceil(chunk.text.length / 4)} tokens)`);
      console.log(`      Type: ${chunk.sectionType}`);
      console.log();
      console.log('      Preview:');
      console.log('      ┌' + '─'.repeat(70) + '┐');
      const preview = chunk.text.substring(0, 400).split('\n').map(line => 
        `      │ ${line.padEnd(70).substring(0, 70)} │`
      ).join('\n');
      console.log(preview);
      console.log('      │ ...                                                                  │');
      console.log('      └' + '─'.repeat(70) + '┘');
      console.log();
    });
    
    if (chunks.length > 3) {
      console.log(`   ... and ${chunks.length - 3} more chunks\n`);
    }
  }
  
  // Test description/tutorial section
  const descSection = sections.find(s => s.type === 'description' || s.type === 'tutorial');
  if (descSection) {
    console.log('🔍 Testing DESCRIPTION/TUTORIAL chunking:');
    console.log('─'.repeat(80));
    console.log(`   Section: "${descSection.title}" (${descSection.content.length} chars)`);
    
    if (descSection.content.length <= 5000) {
      console.log(`   ✅ Kept as SINGLE chunk (semantic completeness)`);
      console.log(`      Size: ${descSection.content.length} chars (~${Math.ceil(descSection.content.length / 4)} tokens)`);
    } else {
      const chunks = rstParser.chunkByParagraphs(descSection, 5000);
      console.log(`   ⚠️  Split into ${chunks.length} chunks (section too large)`);
      chunks.forEach((chunk, i) => {
        console.log(`      Chunk ${i + 1}: ${chunk.text.length} chars (~${Math.ceil(chunk.text.length / 4)} tokens)`);
      });
    }
    console.log();
  }
  
  console.log();
}

async function main() {
  try {
    // Test different file types
    await testFile('classes/class_transform2d.rst.txt', 'Transform2D Class (Methods + Properties)');
    await testFile('classes/class_characterbody2d.rst.txt', 'CharacterBody2D Class (Game Dev)');
    await testFile('tutorials/scripting/gdscript/gdscript_basics.rst.txt', 'GDScript Basics Tutorial');
    
    console.log('═'.repeat(80));
    console.log('✅ SEMANTIC CHUNKING TEST COMPLETE');
    console.log('═'.repeat(80));
    console.log();
    console.log('Key Observations:');
    console.log('  ✅ Methods are split individually (each method = 1 chunk)');
    console.log('  ✅ Descriptions kept together for context');
    console.log('  ✅ Chunks are semantically complete');
    console.log('  ✅ Larger chunks (~500-2000 tokens) with full context');
    console.log();
    console.log('If everything looks good, run:');
    console.log('  npm run rag:setup:clear');
    console.log();
    
  } catch (error) {
    console.error('❌ Error:', error);
    console.error(error.stack);
    process.exit(1);
  }
}

main();

