import { app, BrowserWindow, ipcMain, dialog, Menu, shell } from 'electron';
// electron-updater is CommonJS, so we need to use default import
import electronUpdater from 'electron-updater';
const { autoUpdater } = electronUpdater;
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn, fork } from 'child_process';
import { existsSync, writeFileSync, appendFileSync, mkdirSync } from 'fs';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Keep a global reference of the window object
let mainWindow = null;
let serverProcess = null;

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
const SERVER_PORT = 3001;

// Configure auto-updater
autoUpdater.autoDownload = false; // Don't auto-download, ask user first
autoUpdater.autoInstallOnAppQuit = true; // Install when app quits

// Auto-updater logging
autoUpdater.logger = console;

// Get the user data directory (writable on all platforms)
// Windows: C:\Users\<user>\AppData\Roaming\RAGy
// macOS: ~/Library/Application Support/RAGy
// Linux: ~/.config/RAGy
function getUserDataPath() {
  // In packaged app, use Electron's userData path
  // In dev, use ./data relative to project root
  if (isDev) {
    return join(__dirname, '..', 'data');
  }
  return app.getPath('userData');
}

// Helper to write logs to file (for debugging on Windows)
function getLogPath() {
  const logDir = join(getUserDataPath(), 'logs');
  try {
    if (!existsSync(logDir)) {
      mkdirSync(logDir, { recursive: true });
    }
  } catch (e) {
    // Ignore
  }
  return join(logDir, 'server.log');
}

function logToFile(message) {
  try {
    const timestamp = new Date().toISOString();
    const logPath = getLogPath();
    appendFileSync(logPath, `[${timestamp}] ${message}\n`);
  } catch (e) {
    // Ignore logging errors
  }
}

// Health check to verify server is running
function checkServerHealth(maxAttempts = 10, interval = 500) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const check = () => {
      attempts++;
      logToFile(`Health check attempt ${attempts}/${maxAttempts}`);

      const req = http.request({
        hostname: 'localhost',
        port: SERVER_PORT,
        path: '/api/health',
        method: 'GET',
        timeout: 2000
      }, (res) => {
        if (res.statusCode === 200) {
          logToFile('Server health check passed!');
          resolve(true);
        } else {
          retryOrFail();
        }
      });

      req.on('error', () => {
        retryOrFail();
      });

      req.on('timeout', () => {
        req.destroy();
        retryOrFail();
      });

      req.end();
    };

    const retryOrFail = () => {
      if (attempts < maxAttempts) {
        setTimeout(check, interval);
      } else {
        logToFile('Server health check failed after max attempts');
        reject(new Error('Server failed to start - health check failed'));
      }
    };

    check();
  });
}

// Start the Node.js backend server
function startServer() {
  return new Promise((resolve, reject) => {
    // Clear previous log
    try {
      writeFileSync(getLogPath(), `=== RAGy Server Log ===\nStarted: ${new Date().toISOString()}\n\n`);
    } catch (e) { }

    // In production, server is bundled to dist/server.mjs (no ASAR)
    const serverPath = isDev
      ? join(__dirname, '../server/server.js')
      : join(process.resourcesPath, 'app', 'dist', 'server.mjs');

    console.log('[Electron] Starting server from:', serverPath);
    logToFile(`Starting server from: ${serverPath}`);
    logToFile(`Is development: ${isDev}`);
    logToFile(`Resources path: ${process.resourcesPath}`);
    logToFile(`Exec path: ${process.execPath}`);

    if (!existsSync(serverPath)) {
      const error = `Server file not found at: ${serverPath}`;
      console.error('[Electron]', error);
      logToFile(`ERROR: ${error}`);
      reject(new Error('Server file not found'));
      return;
    }

    // Calculate paths
    // Use user data directory for all user data (writable without admin)
    const dataPath = getUserDataPath();
    const serverCwd = isDev
      ? join(__dirname, '..')
      : join(process.resourcesPath, 'app');

    logToFile(`User data path: ${dataPath}`);
    logToFile(`Server CWD: ${serverCwd}`);

    // Ensure data directory exists
    try {
      if (!existsSync(dataPath)) {
        mkdirSync(dataPath, { recursive: true });
        logToFile(`Created data directory: ${dataPath}`);
      }
    } catch (e) {
      logToFile(`Warning: Could not create data directory: ${e.message}`);
    }

    serverProcess = spawn(process.execPath, ['--expose-gc', serverPath], {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: {
        ...process.env,
        PORT: String(SERVER_PORT),
        ELECTRON_RUN_AS_NODE: '1',
        RAGY_DATA_DIR: dataPath,
        RAGY_RESOURCES_PATH: process.resourcesPath || '',
        RAGY_IS_PACKAGED: isDev ? '0' : '1'
      },
      cwd: serverCwd
    });

    let serverOutput = '';
    let serverErrors = '';

    serverProcess.stdout.on('data', (data) => {
      const text = data.toString();
      serverOutput += text;
      console.log('[Server]', text.trim());
      logToFile(`[stdout] ${text.trim()}`);
    });

    serverProcess.stderr.on('data', (data) => {
      const text = data.toString();
      serverErrors += text;
      console.error('[Server Error]', text.trim());
      logToFile(`[stderr] ${text.trim()}`);
    });

    serverProcess.on('error', (error) => {
      console.error('[Electron] Failed to start server:', error);
      logToFile(`Process error: ${error.message}`);
      reject(error);
    });

    serverProcess.on('exit', (code, signal) => {
      const msg = `Server process exited with code ${code}, signal ${signal}`;
      console.log('[Electron]', msg);
      logToFile(msg);

      // If server exits early, it's an error
      if (code !== 0 && code !== null) {
        logToFile(`Server crashed! Last stderr: ${serverErrors.slice(-1000)}`);
      }
    });

    // Wait for server to be ready with health check
    logToFile('Waiting for server to be ready...');

    setTimeout(async () => {
      try {
        await checkServerHealth(15, 500); // 15 attempts, 500ms apart = 7.5 seconds max
        console.log('[Electron] Server is running on port', SERVER_PORT);
        logToFile('Server is ready!');
        resolve();
      } catch (error) {
        console.error('[Electron] Server health check failed:', error);
        logToFile(`Health check failed: ${error.message}`);
        logToFile(`Server stdout: ${serverOutput.slice(-2000)}`);
        logToFile(`Server stderr: ${serverErrors.slice(-2000)}`);

        // Show error dialog to user
        dialog.showErrorBox(
          'Server Failed to Start',
          `The RAGy server could not start.\n\n` +
          `Check the log file at:\n${getLogPath()}\n\n` +
          `Error: ${serverErrors.slice(-500) || 'Unknown error'}`
        );
        reject(error);
      }
    }, 1000);
  });
}

// Auto-updater event handlers
function setupAutoUpdater() {
  // Checking for update
  autoUpdater.on('checking-for-update', () => {
    console.log('[AutoUpdater] Checking for updates...');
    sendStatusToWindow('Checking for updates...');
  });

  // Update available
  autoUpdater.on('update-available', (info) => {
    console.log('[AutoUpdater] Update available:', info.version);
    sendStatusToWindow(`Update available: ${info.version}`);

    // Send to renderer for UI notification
    if (mainWindow) {
      mainWindow.webContents.send('update-available', {
        version: info.version,
        releaseDate: info.releaseDate,
        releaseNotes: info.releaseNotes,
      });
    }
  });

  // No update available
  autoUpdater.on('update-not-available', (info) => {
    console.log('[AutoUpdater] No updates available. Current version:', info.version);
    sendStatusToWindow('App is up to date');

    if (mainWindow) {
      mainWindow.webContents.send('update-not-available', { version: info.version });
    }
  });

  // Update error
  autoUpdater.on('error', (error) => {
    console.error('[AutoUpdater] Error:', error);
    sendStatusToWindow(`Update error: ${error.message}`);

    if (mainWindow) {
      mainWindow.webContents.send('update-error', { message: error.message });
    }
  });

  // Download progress
  autoUpdater.on('download-progress', (progress) => {
    const message = `Downloaded ${Math.round(progress.percent)}%`;
    console.log('[AutoUpdater]', message, `(${progress.transferred}/${progress.total})`);
    sendStatusToWindow(message);

    if (mainWindow) {
      mainWindow.webContents.send('download-progress', {
        percent: progress.percent,
        transferred: progress.transferred,
        total: progress.total,
      });
    }
  });

  // Update downloaded
  autoUpdater.on('update-downloaded', (info) => {
    console.log('[AutoUpdater] Update downloaded:', info.version);
    sendStatusToWindow('Update downloaded - will install on app restart');

    if (mainWindow) {
      mainWindow.webContents.send('update-downloaded', {
        version: info.version,
      });
    }

    // Show dialog to install now or later
    dialog.showMessageBox(mainWindow, {
      type: 'info',
      title: 'Update Ready',
      message: `Version ${info.version} has been downloaded.`,
      detail: 'The update will be installed when you restart the application. Would you like to restart now?',
      buttons: ['Restart Now', 'Later'],
      defaultId: 0,
      cancelId: 1,
    }).then((result) => {
      if (result.response === 0) {
        // User chose to restart now
        autoUpdater.quitAndInstall(false, true);
      }
    });
  });
}

function sendStatusToWindow(text) {
  console.log('[AutoUpdater Status]', text);
  if (mainWindow) {
    mainWindow.webContents.send('update-status', { message: text });
  }
}

// Create the main application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'RAGy',
    backgroundColor: '#1a1a1a',
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false, // Disable sandbox to allow file:// protocol access
    },
  });

  // Remove the menu bar (optional - can keep if you want File/Edit/View menus)
  mainWindow.setMenuBarVisibility(false);

  // Load the app
  if (isDev) {
    // In development, load from Vite dev server
    mainWindow.loadURL('http://localhost:5173');
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load from packaged dist folder
    const indexPath = join(__dirname, '..', 'dist', 'index.html');
    console.log('[Electron] Loading index.html from:', indexPath);
    console.log('[Electron] __dirname:', __dirname);
    console.log('[Electron] File exists:', existsSync(indexPath));

    mainWindow.loadFile(indexPath).catch(err => {
      console.error('[Electron] Failed to load index.html:', err);
      logToFile(`Failed to load index.html: ${err.message}`);
      dialog.showErrorBox('Load Error', `Failed to load app: ${err.message}\n\nPath: ${indexPath}`);
    });
  }

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle navigation (for security)
  mainWindow.webContents.on('will-navigate', (event, url) => {
    // Allow navigation only to localhost in dev or file:// protocol in production
    if (isDev && !url.startsWith('http://localhost:5173')) {
      event.preventDefault();
    } else if (!isDev && !url.startsWith('file://')) {
      event.preventDefault();
    }
  });

  // Handle external links (open in default browser)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS, keep the app running until user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create window when dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Clean up server process when app quits
app.on('before-quit', () => {
  if (serverProcess) {
    console.log('[Electron] Killing server process');
    serverProcess.kill();
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('[Electron] Uncaught exception:', error);
  dialog.showErrorBox('Error', `An error occurred: ${error.message}`);
});

// IPC Handlers for communication between renderer and main process
ipcMain.handle('select-directory', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory', 'createDirectory'],
    title: 'Select Data Directory',
  });

  if (result.canceled) {
    return null;
  }

  return result.filePaths[0];
});

ipcMain.handle('get-app-path', () => {
  return app.getPath('userData');
});

ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

// Auto-updater IPC handlers
ipcMain.handle('check-for-updates', async () => {
  if (isDev) {
    console.log('[AutoUpdater] Skipping update check in development mode');
    return { available: false, reason: 'development' };
  }

  try {
    const result = await autoUpdater.checkForUpdates();
    return {
      available: result.updateInfo.version !== app.getVersion(),
      currentVersion: app.getVersion(),
      latestVersion: result.updateInfo.version,
    };
  } catch (error) {
    console.error('[AutoUpdater] Check failed:', error);
    return { available: false, error: error.message };
  }
});

ipcMain.handle('download-update', async () => {
  if (isDev) {
    return { success: false, reason: 'development' };
  }

  try {
    await autoUpdater.downloadUpdate();
    return { success: true };
  } catch (error) {
    console.error('[AutoUpdater] Download failed:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('quit-and-install', () => {
  autoUpdater.quitAndInstall(false, true);
});

// App initialization
app.whenReady().then(async () => {
  console.log('[Electron] App is ready');
  console.log('[Electron] User data path:', app.getPath('userData'));
  console.log('[Electron] RAGy data will be stored at:', getUserDataPath());
  console.log('[Electron] App version:', app.getVersion());

  try {
    // Setup auto-updater
    setupAutoUpdater();

    // Start the backend server
    await startServer();

    // Create the window
    createWindow();

    // Check for updates on startup (only in production)
    if (!isDev) {
      setTimeout(() => {
        console.log('[AutoUpdater] Checking for updates on startup...');
        autoUpdater.checkForUpdates().catch((err) => {
          console.error('[AutoUpdater] Startup check failed:', err);
        });
      }, 5000); // Wait 5 seconds after startup
    }
  } catch (error) {
    console.error('[Electron] Failed to initialize:', error);
    dialog.showErrorBox(
      'Initialization Error',
      `Failed to start the application: ${error.message}`
    );
    app.quit();
  }
});
