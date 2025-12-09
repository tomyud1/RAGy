import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Paths Configuration
 *
 * In development: Uses ./data relative to project root
 * In production (Electron): Uses data folder in app installation directory
 *
 * Priority:
 * 1. DATA_DIR environment variable (if set)
 * 2. Electron app path + /data (if packaged)
 * 3. Project root + /data (development)
 */

function getDataDirectory() {
  // 1. Check RAGY_DATA_DIR (set by Electron main process)
  if (process.env.RAGY_DATA_DIR) {
    console.log('[Paths] Using RAGY_DATA_DIR from Electron:', process.env.RAGY_DATA_DIR);
    const dataPath = process.env.RAGY_DATA_DIR;
    
    // Ensure data directory exists
    try {
      if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath, { recursive: true, mode: 0o755 });
        console.log('[Paths] Created data directory:', dataPath);
      }
      return dataPath;
    } catch (error) {
      console.error('[Paths] ERROR: Failed to create data directory:', error);
      console.error('[Paths] Path:', dataPath);
      throw error;
    }
  }

  // 2. Check DATA_DIR environment variable override (legacy/manual)
  if (process.env.DATA_DIR) {
    console.log('[Paths] Using DATA_DIR from environment:', process.env.DATA_DIR);
    return process.env.DATA_DIR;
  }

  // 3. Check if running in Electron (packaged) - for direct Electron process
  const isElectron = process.versions && process.versions.electron;
  const isPackaged = process.env.NODE_ENV === 'production' || process.mainModule?.filename?.includes('app.asar');

  if (isElectron && isPackaged) {
    // In packaged Electron app
    // Get the app installation directory
    // process.resourcesPath is like: D:\Programs\RAGy\resources
    // We want: D:\Programs\RAGy\data
    const appPath = process.resourcesPath || path.join(process.cwd(), '..');
    const appRootPath = path.dirname(appPath); // Go up one level from 'resources' to app root
    const dataPath = path.join(appRootPath, 'data');

    console.log('[Paths] Running in packaged Electron');
    console.log('[Paths] Resources path:', appPath);
    console.log('[Paths] App root path:', appRootPath);
    console.log('[Paths] Data directory:', dataPath);

    // Ensure data directory exists
    try {
      if (!fs.existsSync(dataPath)) {
        fs.mkdirSync(dataPath, { recursive: true, mode: 0o755 });
        console.log('[Paths] Created data directory:', dataPath);
      }
      return dataPath;
    } catch (error) {
      console.error('[Paths] ERROR: Failed to create data directory:', error);
      console.error('[Paths] This likely means the app does not have write permissions');
      console.error('[Paths] Please install the app to a writable location (not Program Files)');
      console.error('[Paths] Or run the installer as Administrator');

      // Show error to user
      throw new Error(
        `Cannot create data directory at: ${dataPath}\n\n` +
        `Please install RAGy to a location where you have write permissions,\n` +
        `such as D:\\Programs\\RAGy\\ instead of C:\\Program Files\\`
      );
    }
  }

  // 4. Development mode: use project root + /data
  const devDataPath = path.join(__dirname, '../../data');
  console.log('[Paths] Using development data directory:', devDataPath);

  // Ensure it exists
  if (!fs.existsSync(devDataPath)) {
    fs.mkdirSync(devDataPath, { recursive: true, mode: 0o755 });
  }

  return devDataPath;
}

// Initialize data directory
const DATA_DIR = getDataDirectory();

/**
 * Get the server root directory (where server files are located)
 * In development: /path/to/RAGy/server
 * In production: E:\program files\RAGy\resources\app\server
 */
function getServerRoot() {
  // Check if we're in a packaged Electron app
  // The key insight: in dev mode, __dirname will be in the project folder
  // In packaged mode, __dirname will be inside process.resourcesPath
  const isPackaged = process.resourcesPath && __dirname.includes(process.resourcesPath);

  console.log('[Paths] Detecting mode - isPackaged:', isPackaged, 'resourcesPath:', process.resourcesPath, '__dirname:', __dirname);

  if (!isPackaged) {
    // Development mode: server/config -> server
    const devRoot = path.join(__dirname, '..');
    console.log('[Paths] Development mode - server root:', devRoot);
    return devRoot;
  } else {
    // Production/Packaged mode: resources/app/server
    const serverRoot = path.join(process.resourcesPath, 'app', 'server');
    console.log('[Paths] Packaged mode - server root:', serverRoot);
    return serverRoot;
  }
}

// Export path getters
export const paths = {
  // Root data directory
  data: () => DATA_DIR,

  // Subdirectories
  projects: () => path.join(DATA_DIR, 'projects'),
  settings: () => path.join(DATA_DIR, 'settings'),
  uploads: () => path.join(DATA_DIR, 'uploads'),
  temp: () => path.join(DATA_DIR, 'temp'),
  memory: () => path.join(DATA_DIR, 'memory'),
  conversions: () => path.join(DATA_DIR, 'conversions'),  // All conversion outputs

  // Server directories
  serverRoot: () => getServerRoot(),
  pythonScripts: () => path.join(getServerRoot(), 'python'),

  // Helper to ensure a directory exists
  ensure: (dirPath) => {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true, mode: 0o755 });
    }
    return dirPath;
  },
};

// Ensure all standard directories exist
paths.ensure(paths.projects());
paths.ensure(paths.settings());
paths.ensure(paths.uploads());
paths.ensure(paths.temp());
paths.ensure(paths.conversions());

console.log('[Paths] Configuration initialized');
console.log('[Paths] Data directory:', paths.data());
console.log('[Paths] Projects:', paths.projects());
console.log('[Paths] Settings:', paths.settings());

export default paths;
