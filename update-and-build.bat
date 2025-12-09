@echo off
setlocal enabledelayedexpansion

echo ============================================
echo RAGy Windows Auto-Update and Build
echo ============================================
echo.
cd /d "%~dp0"

REM Load GitHub token from token.txt if it exists
if exist "token.txt" (
    set /p GH_TOKEN=<token.txt
    echo Token loaded from token.txt
) else (
    echo WARNING: token.txt not found
)
echo.

echo [1/3] Updating Source Code...
echo Resetting local changes...
git reset --hard
if errorlevel 1 (
    echo ERROR: Git reset failed
    pause
    exit /b 1
)

echo Pulling latest changes...
git pull origin main
if errorlevel 1 (
    echo ERROR: Git pull failed
    pause
    exit /b 1
)
echo.

echo [2/4] Installing Dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo.

echo [3/4] Checking Python Setup...
if not exist "build-resources\python-win\.setup-complete" (
    echo Python packages not installed yet. Running setup...
    echo This is a one-time setup and will take 5-10 minutes.
    echo.
    cd build-resources\python-win
    PowerShell -ExecutionPolicy Bypass -File .\setup-python.ps1
    if errorlevel 1 (
        echo ERROR: Python setup failed
        cd ..\..
        pause
        exit /b 1
    )
    cd ..\..
    echo Python setup complete!
    echo.
) else (
    echo Python packages already installed (skipping setup)
    echo   TIP: To enable GPU support, see docs\GPU_SETUP_WINDOWS.md
    echo.
)

echo [4/4] Building and Publishing...
call npm run electron:build:win
if errorlevel 1 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo BUILD COMPLETE
pause
endlocal
