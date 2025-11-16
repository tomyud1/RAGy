#!/usr/bin/env node
/**
 * Quick test script to check if formula extraction is working
 * Analyzes chunks.json to see if formulas were properly extracted
 */

const fs = require('fs');
const path = require('path');

const chunksPath = process.argv[2] || './data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/chunked-data/chunks.json';

console.log('📊 Analyzing chunks for formula extraction...\n');
console.log('File:', chunksPath, '\n');

try {
  const data = JSON.parse(fs.readFileSync(chunksPath, 'utf8'));
  
  console.log('Configuration:');
  console.log('  Method:', data.method || 'unknown');
  console.log('  Config:', JSON.stringify(data.config || {}, null, 2));
  console.log('');
  
  const chunks = data.chunks || [];
  console.log(`Total chunks: ${chunks.length}\n`);
  
  // Check for formula issues
  const withUndecodedFormulas = chunks.filter(c => c.text.includes('<!-- formula-not-decoded -->'));
  const withLatex = chunks.filter(c => c.text.match(/\\[a-z]+\{|\\frac|\\sqrt|\\int|\\sum/i));
  const withMathSymbols = chunks.filter(c => c.text.match(/[∫∑∏√π∞±≤≥≈≠]/));
  
  console.log('Formula Detection Results:');
  console.log('─────────────────────────────────');
  console.log(`❌ Undecoded formulas: ${withUndecodedFormulas.length} (${(withUndecodedFormulas.length / chunks.length * 100).toFixed(1)}%)`);
  console.log(`✅ LaTeX formulas: ${withLatex.length} (${(withLatex.length / chunks.length * 100).toFixed(1)}%)`);
  console.log(`📐 Math symbols: ${withMathSymbols.length} (${(withMathSymbols.length / chunks.length * 100).toFixed(1)}%)`);
  console.log('');
  
  // Sample LaTeX formulas if found
  if (withLatex.length > 0) {
    console.log('✅ SUCCESS! LaTeX formulas detected. Sample chunks:\n');
    withLatex.slice(0, 3).forEach((chunk, i) => {
      const latexMatch = chunk.text.match(/\\[a-z]+\{[^}]*\}|\\frac\{[^}]*\}\{[^}]*\}|\\sqrt\{[^}]*\}/i);
      console.log(`Example ${i + 1}: "${latexMatch ? latexMatch[0] : 'N/A'}"`);
      console.log(`  From: ${chunk.text.substring(0, 100)}...`);
      console.log('');
    });
  } else if (withUndecodedFormulas.length > 0) {
    console.log('❌ ISSUE: Formulas still not decoded. Sample problems:\n');
    withUndecodedFormulas.slice(0, 2).forEach((chunk, i) => {
      console.log(`Problem ${i + 1}:`);
      console.log(`  ${chunk.text.substring(0, 200)}...`);
      console.log('');
    });
    console.log('💡 SOLUTION: Formula enrichment might not be enabled.');
    console.log('   Check that do_formula_enrichment=True in the Python script.\n');
  } else {
    console.log('⚠️  No formulas detected (neither undecoded nor LaTeX).');
    console.log('   This might be normal if your document has no equations.\n');
  }
  
  // Token stats
  const tokenCounts = chunks.map(c => c.tokens);
  tokenCounts.sort((a, b) => a - b);
  
  console.log('Token Distribution:');
  console.log('─────────────────────────────────');
  console.log(`  Min: ${tokenCounts[0]}`);
  console.log(`  Median: ${tokenCounts[Math.floor(tokenCounts.length / 2)]}`);
  console.log(`  Max: ${tokenCounts[tokenCounts.length - 1]}`);
  console.log('');
  
  // Overall assessment
  console.log('Overall Assessment:');
  console.log('─────────────────────────────────');
  
  const formulaExtractionWorking = withLatex.length > 0 && withUndecodedFormulas.length === 0;
  const formulaExtractionPartial = withLatex.length > 0 && withUndecodedFormulas.length > 0;
  const formulaExtractionFailed = withLatex.length === 0 && withUndecodedFormulas.length > 0;
  
  if (formulaExtractionWorking) {
    console.log('✅ EXCELLENT: Formula extraction is working perfectly!');
    console.log('   All formulas have been converted to LaTeX.');
  } else if (formulaExtractionPartial) {
    console.log('⚠️  PARTIAL: Some formulas extracted, but others failed.');
    console.log('   This might be normal for complex formulas.');
  } else if (formulaExtractionFailed) {
    console.log('❌ FAILED: Formula enrichment not working.');
    console.log('   Re-run chunking with formula enrichment enabled.');
  } else {
    console.log('ℹ️  No formulas detected in document.');
  }
  
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}


