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

echo [2/3] Installing Dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo.

echo [3/3] Building and Publishing...
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
