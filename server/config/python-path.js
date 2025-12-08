import path from 'path';
import { existsSync } from 'fs';

/**
 * Get the correct Python executable path based on environment
 *
 * In development: Uses system Python (python3)
 * In production (Electron): Uses bundled Python from resources/python/
 */

function getPythonPath() {
  // Check if running in packaged mode (via environment variable from Electron)
  const isPackagedViaEnv = process.env.RAGY_IS_PACKAGED === '1';
  const resourcesPath = process.env.RAGY_RESOURCES_PATH;
  
  // Also check direct Electron detection (for when server runs in Electron process directly)
  const isElectron = process.versions && process.versions.electron;
  const isPackagedDirect = process.env.NODE_ENV === 'production' || process.mainModule?.filename?.includes('app.asar');

  const isPackaged = isPackagedViaEnv || (isElectron && isPackagedDirect);
  const effectiveResourcesPath = resourcesPath || process.resourcesPath;

  if (isPackaged && effectiveResourcesPath) {
    // In packaged Electron app
    console.log('[Python Path] Running in packaged mode');
    console.log('[Python Path] Resources path:', effectiveResourcesPath);

    const platform = process.platform;
    let pythonPath;

    if (platform === 'win32') {
      // Windows: D:\Programs\RAGy\resources\python\python.exe
      pythonPath = path.join(effectiveResourcesPath, 'python', 'python.exe');
    } else if (platform === 'darwin') {
      // macOS: /Applications/RAGy.app/Contents/Resources/python/bin/python3
      pythonPath = path.join(effectiveResourcesPath, 'python', 'bin', 'python3');
    } else {
      // Linux: /opt/RAGy/resources/python/bin/python3
      pythonPath = path.join(effectiveResourcesPath, 'python', 'bin', 'python3');
    }

    console.log('[Python Path] Bundled Python path:', pythonPath);

    // Check if bundled Python exists
    if (existsSync(pythonPath)) {
      console.log('[Python Path] Using bundled Python');
      return pythonPath;
    } else {
      console.warn('[Python Path] WARNING: Bundled Python not found at:', pythonPath);
      console.warn('[Python Path] Falling back to system Python');
      console.warn('[Python Path] This likely means Python was not properly bundled');

      // Fallback to system Python
      return platform === 'win32' ? 'python' : 'python3';
    }
  }

  // Development mode: use system Python
  const devPython = process.platform === 'win32' ? 'python' : 'python3';
  console.log('[Python Path] Using system Python:', devPython);
  return devPython;
}

// Export as default and named export
const pythonPath = getPythonPath();

export { pythonPath };
export default pythonPath;
