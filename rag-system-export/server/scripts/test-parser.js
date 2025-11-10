#!/usr/bin/env node

/**
 * Test RST parser to verify cleaning is working properly
 */

import rstParserService from '../services/ai/rst-parser.service.js';
import fs from 'fs/promises';
import path from 'path';

async function testParser() {
  console.log('\n🧪 RST Parser Test\n');
  console.log('═'.repeat(80));
  console.log();

  // Test files to check
  const testFiles = [
    'docs/godot-docs-html-stable/_sources/classes/class_transform2d.rst.txt',
    'docs/godot-docs-html-stable/_sources/classes/class_characterbody2d.rst.txt',
    'docs/godot-docs-html-stable/_sources/tutorials/scripting/gdscript/gdscript_basics.rst.txt'
  ];

  for (const filePath of testFiles) {
    const fullPath = path.join(process.cwd(), filePath);
    
    try {
      console.log(`\n📄 Testing: ${path.basename(filePath)}`);
      console.log('─'.repeat(80));
      
      // Read raw content
      const rawContent = await fs.readFile(fullPath, 'utf-8');
      
      // Show a sample of ORIGINAL content
      const originalSample = rawContent.substring(0, 800);
      console.log('\n❌ ORIGINAL (with RST markup):');
      console.log('┌' + '─'.repeat(78) + '┐');
      console.log(originalSample.split('\n').map(line => '│ ' + line.padEnd(77) + '│').slice(0, 15).join('\n'));
      console.log('└' + '─'.repeat(78) + '┘');
      
      // Clean the content
      const cleaned = rstParserService.cleanRSTMarkup(rawContent);
      
      // Show a sample of CLEANED content
      const cleanedSample = cleaned.substring(0, 800);
      console.log('\n✅ CLEANED (AI-ready):');
      console.log('┌' + '─'.repeat(78) + '┐');
      console.log(cleanedSample.split('\n').map(line => '│ ' + line.padEnd(77) + '│').slice(0, 15).join('\n'));
      console.log('└' + '─'.repeat(78) + '┘');
      
      // Show statistics
      console.log('\n📊 Statistics:');
      console.log(`  Original size: ${rawContent.length} chars`);
      console.log(`  Cleaned size: ${cleaned.length} chars`);
      console.log(`  Reduction: ${((1 - cleaned.length/rawContent.length) * 100).toFixed(1)}%`);
      
      // Check for common RST artifacts that should be removed
      const artifacts = {
        ':ref:`': (cleaned.match(/:ref:`/g) || []).length,
        ':doc:`': (cleaned.match(/:doc:`/g) || []).length,
        ':class:`': (cleaned.match(/:class:`/g) || []).length,
        '\\\ ': (cleaned.match(/\\\ /g) || []).length,
        '|const|': (cleaned.match(/\|const\|/g) || []).length,
        '**': (cleaned.match(/\*\*/g) || []).length,
      };
      
      console.log('\n🔍 Remaining RST Artifacts:');
      let hasArtifacts = false;
      Object.entries(artifacts).forEach(([artifact, count]) => {
        if (count > 0) {
          console.log(`  ⚠️  ${artifact}: ${count} occurrences`);
          hasArtifacts = true;
        }
      });
      
      if (!hasArtifacts) {
        console.log('  ✅ No RST artifacts found! Clean!');
      }
      
      console.log();
      
    } catch (error) {
      console.error(`❌ Error testing ${filePath}:`, error.message);
    }
  }
  
  console.log('\n' + '═'.repeat(80));
  console.log('🎯 Parser Test Complete!\n');
  console.log('Review the output above to verify:');
  console.log('  1. RST markup is removed (:ref:, :doc:, etc.)');
  console.log('  2. Method signatures are clean');
  console.log('  3. Text is readable and AI-friendly');
  console.log('  4. No major RST artifacts remain\n');
  console.log('If everything looks good, run: npm run rag:setup:clear\n');
}

testParser().catch(console.error);

