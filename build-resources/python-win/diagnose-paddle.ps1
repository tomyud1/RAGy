# Diagnose PaddlePaddle Installation
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "PaddlePaddle Diagnostic Tool" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $ScriptDir "python.exe"

if (-Not (Test-Path $PythonExe)) {
    Write-Host "ERROR: python.exe not found" -ForegroundColor Red
    exit 1
}

Write-Host "[1/3] Checking if PaddlePaddle is installed..." -ForegroundColor Yellow
Write-Host ""

# Check if paddlepaddle is installed
$paddleCheck = & $PythonExe -c "import sys; sys.exit(0 if 'paddle' in sys.modules or __import__('importlib').util.find_spec('paddle') else 1)" 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "  [√] PaddlePaddle is installed" -ForegroundColor Green

    Write-Host ""
    Write-Host "[2/3] Checking PaddlePaddle version..." -ForegroundColor Yellow
    & $PythonExe -c "import paddle; print(f'  Version: {paddle.__version__}')" 2>&1

    Write-Host ""
    Write-Host "[3/3] Checking GPU support..." -ForegroundColor Yellow
    & $PythonExe -c "import paddle; print(f'  CUDA Available: {paddle.is_compiled_with_cuda()}'); print(f'  GPU Count: {paddle.device.cuda.device_count() if paddle.is_compiled_with_cuda() else 0}')" 2>&1
} else {
    Write-Host "  [X] PaddlePaddle is NOT installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "  Attempting to import paddle for detailed error:" -ForegroundColor Yellow
    & $PythonExe -c "import paddle" 2>&1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Installed Python Packages:" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
& $PythonExe -m pip list | Select-String -Pattern "paddle"

Write-Host ""
pause
