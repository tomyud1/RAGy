# Setup Python Dependencies for RAGy
# Run this script ONCE on Windows to install all Python packages

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "RAGy Python Setup Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Get the directory where this script is located
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $ScriptDir "python.exe"
$GetPipScript = Join-Path $ScriptDir "get-pip.py"

Write-Host "Python location: $PythonExe" -ForegroundColor Yellow
Write-Host ""

# Check if python.exe exists
if (-Not (Test-Path $PythonExe)) {
    Write-Host "ERROR: python.exe not found at $PythonExe" -ForegroundColor Red
    exit 1
}

# Install pip
Write-Host "[1/2] Installing pip..." -ForegroundColor Green
& $PythonExe $GetPipScript --no-warn-script-location
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install pip" -ForegroundColor Red
    exit 1
}
Write-Host "  √ pip installed successfully" -ForegroundColor Green
Write-Host ""

# Install requirements
$RequirementsFile = Join-Path (Split-Path $ScriptDir -Parent | Split-Path -Parent) "server\python\requirements.txt"
Write-Host "[2/2] Installing Python packages from requirements.txt..." -ForegroundColor Green
Write-Host "  This may take 5-10 minutes (downloading torch, docling, etc.)" -ForegroundColor Yellow
Write-Host ""

& $PythonExe -m pip install -r $RequirementsFile --no-warn-script-location
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install requirements" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Python and all dependencies are now installed." -ForegroundColor Green
Write-Host "You can now build and run RAGy." -ForegroundColor Green
Write-Host ""

# Create a marker file to indicate setup is complete
$MarkerFile = Join-Path $ScriptDir ".setup-complete"
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
"Setup completed: $Timestamp" | Out-File -FilePath $MarkerFile -Force
Write-Host "Created marker file: .setup-complete" -ForegroundColor Green
Write-Host ""
Write-Host "NOTE: To force a re-setup (if requirements.txt changes)," -ForegroundColor Yellow
Write-Host "      delete this file: build-resources\python-win\.setup-complete" -ForegroundColor Yellow
Write-Host ""

pause
