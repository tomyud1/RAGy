const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Directory selection
  selectDirectory: () => ipcRenderer.invoke('select-directory'),

  // App information
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),

  // Platform detection
  platform: process.platform,
  isElectron: true,

  // Auto-updater
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  downloadUpdate: () => ipcRenderer.invoke('download-update'),
  quitAndInstall: () => ipcRenderer.invoke('quit-and-install'),

  // Auto-updater event listeners
  onUpdateAvailable: (callback) => {
    ipcRenderer.on('update-available', (event, info) => callback(info));
  },
  onUpdateNotAvailable: (callback) => {
    ipcRenderer.on('update-not-available', (event, info) => callback(info));
  },
  onUpdateDownloaded: (callback) => {
    ipcRenderer.on('update-downloaded', (event, info) => callback(info));
  },
  onDownloadProgress: (callback) => {
    ipcRenderer.on('download-progress', (event, progress) => callback(progress));
  },
  onUpdateError: (callback) => {
    ipcRenderer.on('update-error', (event, error) => callback(error));
  },
  onUpdateStatus: (callback) => {
    ipcRenderer.on('update-status', (event, status) => callback(status));
  },
});

// Log that preload script has loaded
console.log('[Electron Preload] Preload script loaded successfully');
console.log('[Electron Preload] Platform:', process.platform);
