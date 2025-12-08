# Building RAGy on Windows

## Prerequisites

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose the **LTS version** (v20 or later)
   - Run the installer with default options

## Build Steps

1. **Copy the entire `RAGy` folder to your Windows PC**
   - Use Google Drive, USB, or any file transfer method
   - Make sure to copy the entire folder

2. **Open the `RAGy` folder on Windows**

3. **Double-click `build-windows.bat`**
   - This will:
     - Clean any old builds
     - Install all dependencies (with Windows-native binaries)
     - Build the Windows installer
   - **This takes 5-10 minutes** - be patient!

4. **Find your installer**
   - After the build completes, your installer will be at:
   - `release\RAGy-Setup-X.X.X.exe`

5. **Install and run RAGy!**

## Troubleshooting

### "Node.js is not installed"
- Download and install Node.js from https://nodejs.org/
- Restart your computer after installation
- Try again

### Build fails with errors
- Make sure you have at least 4GB of free disk space
- Try running Command Prompt as Administrator
- Run these commands manually:
  ```
  npm cache clean --force
  npm install
  npm run electron:build:win
  ```

### App won't start after installation
- Check the log file at: `C:\Users\<YourName>\AppData\Roaming\RAGy\logs\server.log`
- Make sure Windows Defender isn't blocking the app




