import fs from 'fs/promises';
import path from 'path';

/**
 * Migrate old vector database format to new multi-model format
 * 
 * OLD FORMAT:
 * - data/godot_vector.index
 * - data/godot_docs_metadata.json
 * 
 * NEW FORMAT:
 * - data/vector_db/index.hnsw
 * - data/vector_db/metadata.json
 * - data/vector_db/config.json
 */
async function migrateVectorDB() {
  console.log('\n╔═══════════════════════════════════════════════════════════════════╗');
  console.log('║                                                                   ║');
  console.log('║         📦  VECTOR DATABASE MIGRATION  📦                        ║');
  console.log('║                                                                   ║');
  console.log('╚═══════════════════════════════════════════════════════════════════╝\n');

  const oldIndexPath = path.join(process.cwd(), 'data/godot_vector.index');
  const oldMetadataPath = path.join(process.cwd(), 'data/godot_docs_metadata.json');
  
  const newDir = path.join(process.cwd(), 'data/vector_db');
  const newIndexPath = path.join(newDir, 'index.hnsw');
  const newMetadataPath = path.join(newDir, 'metadata.json');
  const newConfigPath = path.join(newDir, 'config.json');

  try {
    // Check if old files exist
    console.log('🔍 Checking for old vector database...');
    
    const oldIndexExists = await fs.access(oldIndexPath).then(() => true).catch(() => false);
    const oldMetadataExists = await fs.access(oldMetadataPath).then(() => true).catch(() => false);

    if (!oldIndexExists || !oldMetadataExists) {
      console.log('❌ Old vector database not found.');
      console.log('   Expected files:');
      console.log(`   - ${oldIndexPath}`);
      console.log(`   - ${oldMetadataPath}\n`);
      console.log('Please run: npm run rag:setup:clear\n');
      process.exit(1);
    }

    console.log('✅ Found old vector database\n');

    // Check if new format already exists
    const newIndexExists = await fs.access(newIndexPath).then(() => true).catch(() => false);
    
    if (newIndexExists) {
      console.log('⚠️  New format already exists at data/vector_db/');
      console.log('   Migration not needed.\n');
      process.exit(0);
    }

    // Create new directory
    console.log('📁 Creating new directory structure...');
    await fs.mkdir(newDir, { recursive: true });
    console.log(`   ✅ Created: ${newDir}\n`);

    // Copy index file
    console.log('📋 Copying index file...');
    await fs.copyFile(oldIndexPath, newIndexPath);
    console.log(`   ✅ Copied: godot_vector.index → index.hnsw\n`);

    // Copy metadata file
    console.log('📋 Copying metadata file...');
    await fs.copyFile(oldMetadataPath, newMetadataPath);
    console.log(`   ✅ Copied: godot_docs_metadata.json → metadata.json\n`);

    // Create config file
    console.log('⚙️  Creating config file...');
    const metadata = JSON.parse(await fs.readFile(newMetadataPath, 'utf-8'));
    const config = {
      model: 'Xenova/all-MiniLM-L6-v2',
      dimension: 384,
      totalDocuments: metadata.length,
      createdAt: new Date().toISOString(),
      distanceMetric: 'cosine',
      migratedFrom: 'original-vector-db'
    };
    await fs.writeFile(newConfigPath, JSON.stringify(config, null, 2));
    console.log(`   ✅ Created: config.json\n`);

    console.log('═'.repeat(80));
    console.log('🎉 MIGRATION COMPLETE!\n');
    console.log('Your vector database has been migrated to the new format:');
    console.log(`   📂 ${newDir}/`);
    console.log(`      ├── index.hnsw (${(await fs.stat(newIndexPath)).size.toLocaleString()} bytes)`);
    console.log(`      ├── metadata.json (${(await fs.stat(newMetadataPath)).size.toLocaleString()} bytes)`);
    console.log(`      └── config.json (${(await fs.stat(newConfigPath)).size.toLocaleString()} bytes)`);
    console.log(`\n   Total documents: ${metadata.length.toLocaleString()}\n`);
    console.log('Next steps:');
    console.log('  1. Restart the server: npm run server');
    console.log('  2. Open RAG tester: http://localhost:3001/rag-tester.html');
    console.log('  3. (Optional) Generate more models: npm run rag:embed:bge');
    console.log('═'.repeat(80) + '\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

migrateVectorDB();

