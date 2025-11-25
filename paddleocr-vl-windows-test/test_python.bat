@echo off
echo ================================================================================
echo Python Diagnostic Test
echo ================================================================================
echo.
echo Testing if Python is installed and working...
echo.

python --version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Python not found!
    echo Please install Python from https://www.python.org/downloads/
    echo Make sure to check "Add Python to PATH" during installation
    pause
    exit /b 1
)

echo.
echo Python found! Testing script...
echo.

python -c "print('Python is working!'); print('Current directory:', __import__('os').getcwd())"

echo.
echo Checking for test_document.pdf...
if exist test_document.pdf (
    echo [OK] test_document.pdf found!
) else (
    echo [ERROR] test_document.pdf NOT found!
)

echo.
echo Checking Python packages...
python -m pip --version

echo.
echo ================================================================================
echo Diagnostic complete!
echo ================================================================================
pause
