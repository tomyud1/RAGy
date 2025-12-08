@echo off
echo ============================================
echo RAGy Windows Build Script
echo ============================================
echo.

:: IMPORTANT: Change to the directory where this script is located
cd /d "%~dp0"
echo Working directory: %CD%
echo.

:: Check if package.json exists
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Make sure you extracted the zip file and are running this script
    echo from inside the RAGy-Windows-Build folder.
    pause
    exit /b 1
)

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    echo Download the LTS version ^(v20 or later^)
    pause
    exit /b 1
)

:: Show Node version
echo Node.js version:
node --version
echo.
echo npm version:
call npm --version
echo.

:: Clean previous builds
echo Cleaning previous builds...
if exist "release" rmdir /s /q release 2>nul
echo.

:: Install dependencies (this compiles native modules for Windows)
echo Installing dependencies ^(this may take several minutes^)...
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: npm install failed!
    echo.
    echo Try running these commands manually:
    echo   cd /d "%CD%"
    echo   npm install
    echo.
    pause
    exit /b 1
)
echo.

:: Build the Windows app
echo Building RAGy for Windows...
echo.
call npm run electron:build:win
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo ============================================
echo BUILD COMPLETE!
echo ============================================
echo.
echo Your installer is at:
dir /b release\*.exe 2>nul
echo.
echo Full path: %CD%\release\
echo.
echo You can now run the installer!
echo.
pause
