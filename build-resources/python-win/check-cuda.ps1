# Check if CUDA is installed and available
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "CUDA Detection Tool" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check for nvidia-smi
$nvidiaSmi = Get-Command nvidia-smi -ErrorAction SilentlyContinue
if ($nvidiaSmi) {
    Write-Host "[√] NVIDIA GPU driver detected" -ForegroundColor Green
    Write-Host ""

    # Run nvidia-smi to show GPU info
    Write-Host "GPU Information:" -ForegroundColor Yellow
    & nvidia-smi --query-gpu=name,driver_version,cuda_version --format=csv,noheader
    Write-Host ""
} else {
    Write-Host "[X] No NVIDIA GPU driver found" -ForegroundColor Red
    Write-Host ""
    Write-Host "    Install NVIDIA GPU drivers from:" -ForegroundColor Yellow
    Write-Host "    https://www.nvidia.com/download/index.aspx" -ForegroundColor Yellow
    Write-Host ""
    pause
    exit 1
}

# Check for CUDA installation
$cudaPath = $env:CUDA_PATH
if ($cudaPath) {
    Write-Host "[√] CUDA Toolkit installed at: $cudaPath" -ForegroundColor Green

    # Try to get CUDA version
    $nvccPath = Join-Path $cudaPath "bin\nvcc.exe"
    if (Test-Path $nvccPath) {
        Write-Host ""
        Write-Host "CUDA Version:" -ForegroundColor Yellow
        & $nvccPath --version | Select-String "release"
    }
} else {
    Write-Host "[!] CUDA Toolkit not found in environment" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "    PaddlePaddle GPU requires CUDA 11.8 or 12.x" -ForegroundColor Yellow
    Write-Host "    Download from: https://developer.nvidia.com/cuda-downloads" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "    Recommended: CUDA 11.8 (most compatible)" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "  1. If CUDA is not installed, download and install it" -ForegroundColor White
Write-Host "  2. Delete the file: build-resources\python-win\.setup-complete" -ForegroundColor White
Write-Host "  3. Run update-and-build.bat again (will reinstall with GPU support)" -ForegroundColor White
Write-Host ""

pause
