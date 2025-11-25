import { contextBridge, ipcRenderer } from 'electron';

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
});

// Log that preload script has loaded
console.log('[Electron Preload] Preload script loaded successfully');
console.log('[Electron Preload] Platform:', process.platform);
