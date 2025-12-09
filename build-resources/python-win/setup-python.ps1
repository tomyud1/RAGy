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
Write-Host "[2/5] Installing Python packages from requirements.txt..." -ForegroundColor Green
Write-Host "  This may take 5-10 minutes (downloading torch, docling, etc.)" -ForegroundColor Yellow
Write-Host ""

# Clean up any corrupted paddle installations first
Write-Host "  Cleaning up any existing PaddlePaddle installations..." -ForegroundColor Yellow
& $PythonExe -m pip uninstall -y paddlepaddle paddlepaddle-gpu --no-warn-script-location 2>$null

# Try to install PaddlePaddle GPU version first (Windows-specific optimization)
Write-Host "  Attempting to install PaddlePaddle with GPU support..." -ForegroundColor Yellow
$gpuInstallOutput = & $PythonExe -m pip install "paddlepaddle-gpu>=3.0.0" --no-warn-script-location 2>&1
$gpuInstallSuccess = $LASTEXITCODE -eq 0

if ($gpuInstallSuccess) {
    Write-Host "  [√] PaddlePaddle GPU version installed!" -ForegroundColor Green
} else {
    Write-Host "  [!] GPU version installation failed" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  Error details:" -ForegroundColor Yellow
    Write-Host "  $gpuInstallOutput" -ForegroundColor White
    Write-Host ""
    Write-Host "  Installing CPU version instead..." -ForegroundColor Yellow

    # Clean up failed GPU install
    & $PythonExe -m pip uninstall -y paddlepaddle-gpu --no-warn-script-location 2>$null
}

# Install remaining packages from requirements.txt
Write-Host "  Installing remaining packages..." -ForegroundColor Yellow
& $PythonExe -m pip install -r $RequirementsFile --no-warn-script-location
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Failed to install required packages" -ForegroundColor Red
    Write-Host "Please check your internet connection and try again." -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host ""
Write-Host "[3/5] Verifying PaddlePaddle installation..." -ForegroundColor Green
$paddleCheck = & $PythonExe -c "import paddle; print('OK')" 2>&1
if ($paddleCheck -match "OK") {
    Write-Host "  [√] PaddlePaddle installed successfully" -ForegroundColor Green

    # Check if GPU version
    $isGpu = & $PythonExe -c "import paddle; print(paddle.is_compiled_with_cuda())" 2>&1
    if ($isGpu -match "True") {
        Write-Host "  [√] GPU support enabled!" -ForegroundColor Green
        $gpuCount = & $PythonExe -c "import paddle; print(paddle.device.cuda.device_count())" 2>&1
        Write-Host "  [√] Detected $gpuCount GPU(s)" -ForegroundColor Green
    } else {
        Write-Host "  [i] Using CPU version (no GPU acceleration)" -ForegroundColor Yellow
    }
} else {
    Write-Host "  [X] PaddlePaddle verification FAILED" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error details:" -ForegroundColor Yellow
    Write-Host $paddleCheck
    Write-Host ""
    Write-Host "Attempting to fix by reinstalling PaddlePaddle..." -ForegroundColor Yellow

    # Force reinstall
    & $PythonExe -m pip uninstall -y paddlepaddle paddlepaddle-gpu --no-warn-script-location 2>$null
    & $PythonExe -m pip install "paddlepaddle>=3.0.0" --force-reinstall --no-warn-script-location

    # Verify again
    $paddleCheck2 = & $PythonExe -c "import paddle; print('OK')" 2>&1
    if (-not ($paddleCheck2 -match "OK")) {
        Write-Host ""
        Write-Host "ERROR: PaddlePaddle still not working after reinstall" -ForegroundColor Red
        Write-Host "Please report this issue with the error message above." -ForegroundColor Yellow
        pause
        exit 1
    }
    Write-Host "  [√] Fixed! PaddlePaddle now working" -ForegroundColor Green
}

Write-Host ""
Write-Host "[4/5] Verifying PaddleOCR installation..." -ForegroundColor Green
$paddleocrCheck = & $PythonExe -c "from paddleocr import PaddleOCR; print('OK')" 2>&1
if ($paddleocrCheck -match "OK") {
    Write-Host "  [√] PaddleOCR verified" -ForegroundColor Green
} else {
    Write-Host "  [!] PaddleOCR check failed, but may work anyway" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "[5/5] Verifying other packages..." -ForegroundColor Green
$doclingCheck = & $PythonExe -c "import docling; print('OK')" 2>&1
if ($doclingCheck -match "OK") {
    Write-Host "  [√] Docling verified" -ForegroundColor Green
} else {
    Write-Host "  [X] Docling failed" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check GPU status one final time for summary
$finalGpuCheck = & $PythonExe -c "import paddle; print(paddle.is_compiled_with_cuda())" 2>&1
if ($finalGpuCheck -match "True") {
    Write-Host "[√] GPU Acceleration: ENABLED" -ForegroundColor Green
    Write-Host "    PaddleOCR will use your NVIDIA GPU for fast processing!" -ForegroundColor Green
} else {
    Write-Host "[!] GPU Acceleration: DISABLED (using CPU only)" -ForegroundColor Yellow
    Write-Host "    PaddleOCR will be much slower (~10x)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "    To enable GPU acceleration:" -ForegroundColor Cyan
    Write-Host "    1. Install CUDA 11.8 from: https://developer.nvidia.com/cuda-11-8-0-download-archive" -ForegroundColor White
    Write-Host "    2. Restart your computer" -ForegroundColor White
    Write-Host "    3. Delete: build-resources\python-win\.setup-complete" -ForegroundColor White
    Write-Host "    4. Run update-and-build.bat again" -ForegroundColor White
}

Write-Host ""
Write-Host "You can now build and run RAGy!" -ForegroundColor Green
Write-Host ""

# Create a marker file to indicate setup is complete
$MarkerFile = Join-Path $ScriptDir ".setup-complete"
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$MarkerContent = @"
Setup completed: $Timestamp
GPU Enabled: $($finalGpuCheck -match "True")
"@
$MarkerContent | Out-File -FilePath $MarkerFile -Force

Write-Host "Created marker file: .setup-complete" -ForegroundColor Green
Write-Host ""
Write-Host "TIP: To force a re-setup, delete: build-resources\python-win\.setup-complete" -ForegroundColor Cyan
Write-Host ""

pause
