# Emergency Fix Script for Corrupted PaddlePaddle Installation
# Run this if PaddleOCR is not working

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "PaddlePaddle Emergency Fix" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $ScriptDir "python.exe"

if (-Not (Test-Path $PythonExe)) {
    Write-Host "ERROR: python.exe not found" -ForegroundColor Red
    pause
    exit 1
}

Write-Host "[1/3] Completely removing PaddlePaddle..." -ForegroundColor Yellow
& $PythonExe -m pip uninstall -y paddlepaddle paddlepaddle-gpu 2>&1 | Out-Null
Write-Host "  [√] Removed" -ForegroundColor Green

Write-Host ""
Write-Host "[2/3] Reinstalling PaddlePaddle (CPU version)..." -ForegroundColor Yellow
& $PythonExe -m pip install "paddlepaddle>=3.0.0" --force-reinstall --no-cache-dir --no-warn-script-location
if ($LASTEXITCODE -ne 0) {
    Write-Host "  [X] Installation failed!" -ForegroundColor Red
    pause
    exit 1
}
Write-Host "  [√] Installed" -ForegroundColor Green

Write-Host ""
Write-Host "[3/3] Verifying..." -ForegroundColor Yellow
$paddleCheck = & $PythonExe -c "import paddle; print('Version:', paddle.__version__); print('CUDA:', paddle.is_compiled_with_cuda())" 2>&1

if ($paddleCheck -match "Version:") {
    Write-Host "  [√] PaddlePaddle is working!" -ForegroundColor Green
    Write-Host ""
    Write-Host $paddleCheck
    Write-Host ""
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host "  Fix Complete!" -ForegroundColor Green
    Write-Host "==================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "PaddleOCR should now work in RAGy." -ForegroundColor Green
} else {
    Write-Host "  [X] Still not working" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error:" -ForegroundColor Yellow
    Write-Host $paddleCheck
    Write-Host ""
    Write-Host "Please report this issue with the error above." -ForegroundColor Yellow
}

Write-Host ""
pause
