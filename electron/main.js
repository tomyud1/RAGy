import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { spawn } from 'child_process';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Keep a global reference of the window object
let mainWindow = null;
let serverProcess = null;

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
const SERVER_PORT = 3001;

// Start the Node.js backend server
function startServer() {
  return new Promise((resolve, reject) => {
    const serverPath = isDev
      ? join(__dirname, '../server/server.js')
      : join(process.resourcesPath, 'server/server.js');

    console.log('[Electron] Starting server from:', serverPath);
    console.log('[Electron] Is development:', isDev);

    if (!existsSync(serverPath)) {
      console.error('[Electron] Server file not found at:', serverPath);
      reject(new Error('Server file not found'));
      return;
    }

    // Start the server process
    serverProcess = spawn('node', ['--expose-gc', serverPath], {
      stdio: 'inherit',
      env: { ...process.env, PORT: SERVER_PORT },
    });

    serverProcess.on('error', (error) => {
      console.error('[Electron] Failed to start server:', error);
      reject(error);
    });

    serverProcess.on('exit', (code) => {
      console.log(`[Electron] Server process exited with code ${code}`);
    });

    // Wait a bit for server to start
    setTimeout(() => {
      console.log('[Electron] Server should be running on port', SERVER_PORT);
      resolve();
    }, 2000);
  });
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
      sandbox: true,
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
    // In production, load the built files
    const indexPath = join(__dirname, '../dist/index.html');
    mainWindow.loadFile(indexPath);
  }

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle navigation (for security)
  mainWindow.webContents.on('will-navigate', (event, url) => {
    // Allow navigation only to localhost in dev or file protocol in production
    if (isDev && !url.startsWith('http://localhost:5173')) {
      event.preventDefault();
    } else if (!isDev && !url.startsWith('file://')) {
      event.preventDefault();
    }
  });

  // Handle external links (open in default browser)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      require('electron').shell.openExternal(url);
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

// App initialization
app.whenReady().then(async () => {
  console.log('[Electron] App is ready');
  console.log('[Electron] User data path:', app.getPath('userData'));
  console.log('[Electron] App version:', app.getVersion());

  try {
    // Start the backend server
    await startServer();

    // Create the window
    createWindow();
  } catch (error) {
    console.error('[Electron] Failed to initialize:', error);
    dialog.showErrorBox(
      'Initialization Error',
      `Failed to start the application: ${error.message}`
    );
    app.quit();
  }
});
