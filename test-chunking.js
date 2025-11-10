#!/usr/bin/env node
/**
 * Standalone testing script for Python chunking
 * Usage: node test-chunking.js <file_path> [max_tokens] [merge_peers]
 * 
 * Example: node test-chunking.js ./data/projects/xxx/raw-files/file8973.pdf 4096 true
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PYTHON_SCRIPT = path.join(__dirname, 'server/python/docling_chunker.py');

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node test-chunking.js <file_path> [max_tokens] [merge_peers]');
  console.error('');
  console.error('Arguments:');
  console.error('  file_path   - Path to the file to chunk (required)');
  console.error('  max_tokens  - Maximum tokens per chunk (default: 512)');
  console.error('  merge_peers - Merge consecutive chunks with same headers (default: true)');
  console.error('');
  console.error('Example:');
  console.error('  node test-chunking.js ./data/projects/xxx/raw-files/file8973.pdf 4096 true');
  process.exit(1);
}

const filePath = args[0];
const maxTokens = parseInt(args[1]) || 512;
const mergePeers = args[2] !== undefined ? args[2].toLowerCase() === 'true' : true;

// Validate file exists
async function validateFile(filePath) {
  try {
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      throw new Error(`${filePath} is not a file`);
    }
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    }
    throw error;
  }
}

// Create temporary directories
async function setupTempDirs() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'chunking-test-'));
  const inputDir = path.join(tempDir, 'input');
  const outputDir = path.join(tempDir, 'output');
  
  await fs.mkdir(inputDir, { recursive: true });
  await fs.mkdir(outputDir, { recursive: true });
  
  return { tempDir, inputDir, outputDir };
}

// Copy file to input directory
async function copyFileToInput(sourceFile, inputDir) {
  const fileName = path.basename(sourceFile);
  const destPath = path.join(inputDir, fileName);
  await fs.copyFile(sourceFile, destPath);
  return destPath;
}

// Format progress for display
function formatProgress(progress, isHeartbeat = false) {
  const { type, current, total, file, status, chunks, error, elapsed, percent, pages_done, total_pages, chunks_so_far } = progress;
  
  if (type !== 'progress') return null;
  
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const progressBar = '█'.repeat(Math.floor(percentage / 5)) + '░'.repeat(20 - Math.floor(percentage / 5));
  
  let statusIcon = '⏳';
  let statusText = status;
  
  switch (status) {
    case 'processing':
      statusIcon = '🔄';
      statusText = 'Processing';
      break;
    case 'converting':
      statusIcon = '⚙️';
      statusText = 'Converting';
      break;
    case 'converted':
      statusIcon = '✅';
      statusText = 'Converted';
      break;
    case 'chunking':
      statusIcon = '✂️';
      statusText = 'Chunking';
      break;
    case 'chunked':
      statusIcon = '✅';
      statusText = 'Chunked';
      break;
    case 'completed':
      statusIcon = '✅';
      statusText = 'Completed';
      break;
    case 'error':
      statusIcon = '❌';
      statusText = 'Error';
      break;
    case 'finalizing':
      statusIcon = '📦';
      statusText = 'Finalizing';
      break;
    case 'saving':
      statusIcon = '💾';
      statusText = 'Saving';
      break;
  }
  
  let output = isHeartbeat ? '\r' : '\n';
  output += `${statusIcon} [${current}/${total}] ${statusText}: ${file}`;
  
  // Show elapsed time and estimate for converting (heartbeat)
  if (status === 'converting' && elapsed !== undefined) {
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    
    if (total_pages > 0) {
      output += ` (${total_pages} pages, ${mins}m ${secs}s`;
      
      // Show remaining time estimate
      if (progress.remaining !== undefined && progress.remaining > 0) {
        const remMins = Math.floor(progress.remaining / 60);
        const remSecs = progress.remaining % 60;
        output += `, ~${remMins}m ${remSecs}s remaining`;
      }
      
      // Show percent estimate
      if (progress.percent !== undefined && progress.percent > 0) {
        output += ` - ${progress.percent}%`;
      }
      
      output += ')';
    } else {
      output += ` (${mins}m ${secs}s elapsed)`;
    }
  }
  
  // Show chunks_so_far for chunking status (inline for live updates)
  if (chunks_so_far !== undefined && status === 'chunking') {
    output += ` - ${chunks_so_far} chunks`;
  }
  
  if (!isHeartbeat && status !== 'chunking' && status !== 'converting') {
    output += `\n   Progress: [${progressBar}] ${percentage}%`;
    
    if (progress.chunks_so_far !== undefined && status === 'chunking') {
      output += `\n   Chunks generated so far: ${progress.chunks_so_far}`;
    } else if (chunks !== undefined) {
      output += `\n   Chunks generated: ${chunks}`;
    }
    
    if (total_pages && status === 'converted') {
      output += `\n   Converted ${total_pages} pages successfully`;
    }
    
    if (error) {
      output += `\n   Error: ${error}`;
    }
  } else if (status === 'chunking' && !isHeartbeat) {
    // For chunking, show on same line
    if (progress.chunks_so_far !== undefined) {
      output += ` (${progress.chunks_so_far} chunks so far)`;
    }
  }
  
  return output;
}

// Main function
async function main() {
  try {
    console.log('🧪 Chunking Test Script');
    console.log('='.repeat(50));
    console.log(`📁 File: ${filePath}`);
    console.log(`⚙️  Max Tokens: ${maxTokens}`);
    console.log(`🔗 Merge Peers: ${mergePeers}`);
    console.log('='.repeat(50));
    
    // Validate file
    await validateFile(filePath);
    console.log('✓ File validated');
    
    // Setup temporary directories
    const { tempDir, inputDir, outputDir } = await setupTempDirs();
    const outputFile = path.join(outputDir, 'chunks.json');
    
    console.log(`📂 Temp directory: ${tempDir}`);
    
    // Copy file to input directory
    await copyFileToInput(filePath, inputDir);
    console.log('✓ File copied to input directory');
    
    console.log('\n🚀 Starting chunking process...\n');
    
    // Spawn Python process
    const pythonProcess = spawn('python3', [
      '-u',  // Unbuffered output
      PYTHON_SCRIPT,
      inputDir,
      outputFile,
      maxTokens.toString(),
      mergePeers.toString()
    ], {
      env: { ...process.env, PYTHONUNBUFFERED: '1' }
    });
    
    let stdout = '';
    let stderr = '';
    let lastProgress = null;
    
    // Handle stdout (final result JSON)
    pythonProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    // Handle stderr (progress updates and logs)
    pythonProcess.stderr.on('data', (data) => {
      const lines = data.toString().split('\n');
      
      for (const line of lines) {
        if (!line.trim()) continue;
        
        try {
          // Try to parse as JSON progress update
          const progress = JSON.parse(line);
          
          if (progress.type === 'progress') {
            lastProgress = progress;
            const isHeartbeat = progress.heartbeat === true;
            const isConvertingHeartbeat = progress.status === 'converting' && isHeartbeat;
            const isChunkingProgress = progress.status === 'chunking' && !isHeartbeat;
            const formatted = formatProgress(progress, isHeartbeat);
            
            if (formatted) {
              if (isConvertingHeartbeat || isChunkingProgress) {
                // For converting heartbeat and chunking progress, update same line continuously
                process.stdout.write('\r\x1b[K'); // Clear line
                process.stdout.write(formatted);
              } else {
                // For regular progress, clear line and print full update
                process.stdout.write('\r\x1b[K'); // Clear line
                console.log(formatted);
              }
            }
          }
        } catch (e) {
          // Not JSON, regular log message
          stderr += line + '\n';
          // Only show non-urllib3 warnings
          if (!line.includes('urllib3') && !line.includes('NotOpenSSLWarning')) {
            // Clear heartbeat line first
            process.stdout.write('\r\x1b[K');
            console.log(`[Python Log]: ${line}`);
          }
        }
      }
    });
    
    // Handle process completion
    pythonProcess.on('close', async (code) => {
      console.log('\n' + '='.repeat(50));
      
      if (code !== 0) {
        console.error('❌ Chunking process failed!');
        console.error('Error output:', stderr);
        process.exit(1);
      }
      
      try {
        // Parse final result
        const result = JSON.parse(stdout.trim());
        
        if (!result.success) {
          console.error('❌ Chunking failed:', result.error);
          process.exit(1);
        }
        
        // Load and display chunk data
        const chunksData = JSON.parse(await fs.readFile(outputFile, 'utf-8'));
        
        console.log('✅ Chunking completed successfully!');
        console.log('');
        console.log('📊 Results:');
        console.log(`   Files processed: ${result.files_processed}`);
        console.log(`   Total chunks: ${chunksData.stats.total_chunks}`);
        console.log(`   Average tokens per chunk: ${chunksData.stats.avg_tokens}`);
        console.log(`   Output file: ${outputFile}`);
        console.log('');
        console.log('📝 Sample chunks:');
        
        // Show first 3 chunks as samples
        const samples = chunksData.chunks.slice(0, 3);
        samples.forEach((chunk, idx) => {
          const preview = chunk.text.substring(0, 100).replace(/\n/g, ' ');
          console.log(`\n   Chunk ${idx + 1}:`);
          console.log(`   Text: ${preview}${chunk.text.length > 100 ? '...' : ''}`);
          console.log(`   Tokens: ${chunk.tokens}`);
          console.log(`   Source: ${chunk.metadata?.source || 'unknown'}`);
        });
        
        if (chunksData.chunks.length > 3) {
          console.log(`\n   ... and ${chunksData.chunks.length - 3} more chunks`);
        }
        
        console.log('');
        console.log(`💾 Full results saved to: ${outputFile}`);
        console.log(`🗑️  Temp directory: ${tempDir} (will not be auto-deleted)`);
        
      } catch (error) {
        console.error('❌ Failed to parse results:', error.message);
        console.error('Stdout:', stdout);
        process.exit(1);
      }
    });
    
    pythonProcess.on('error', (error) => {
      console.error('❌ Failed to start Python process:', error.message);
      console.error('Make sure Python 3 is installed and docling_chunker.py exists');
      process.exit(1);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();

