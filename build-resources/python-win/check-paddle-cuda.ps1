# Check PaddlePaddle CUDA Compatibility
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "PaddlePaddle CUDA Compatibility Check" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$PythonExe = Join-Path $ScriptDir "python.exe"

if (-Not (Test-Path $PythonExe)) {
    Write-Host "ERROR: python.exe not found" -ForegroundColor Red
    pause
    exit 1
}

# Check CUDA via nvidia-smi
Write-Host "[1/4] Checking NVIDIA GPU & CUDA..." -ForegroundColor Yellow
$nvidiaSmi = Get-Command nvidia-smi -ErrorAction SilentlyContinue
if ($nvidiaSmi) {
    Write-Host "  [√] NVIDIA driver detected" -ForegroundColor Green
    Write-Host ""
    Write-Host "  GPU Information:" -ForegroundColor Cyan
    & nvidia-smi --query-gpu=name,driver_version,cuda_version --format=csv,noheader
    Write-Host ""
} else {
    Write-Host "  [X] nvidia-smi not found - GPU drivers not installed" -ForegroundColor Red
    Write-Host ""
}

# Check CUDA Toolkit
Write-Host "[2/4] Checking CUDA Toolkit..." -ForegroundColor Yellow
$cudaPath = $env:CUDA_PATH
if ($cudaPath) {
    Write-Host "  [√] CUDA_PATH: $cudaPath" -ForegroundColor Green

    $nvccPath = Join-Path $cudaPath "bin\nvcc.exe"
    if (Test-Path $nvccPath) {
        $nvccVersion = & $nvccPath --version 2>&1 | Select-String "release"
        Write-Host "  [√] CUDA Version: $nvccVersion" -ForegroundColor Green
    }
} else {
    Write-Host "  [X] CUDA_PATH not set" -ForegroundColor Red
}
Write-Host ""

# Check PaddlePaddle installation
Write-Host "[3/4] Checking PaddlePaddle..." -ForegroundColor Yellow
$paddleVersion = & $PythonExe -c "import paddle; print(paddle.__version__)" 2>&1
if ($paddleVersion -notmatch "No module") {
    Write-Host "  [√] PaddlePaddle version: $paddleVersion" -ForegroundColor Green

    # Check if it's GPU or CPU version
    $isGpu = & $PythonExe -c "import paddle; print(paddle.is_compiled_with_cuda())" 2>&1
    if ($isGpu -match "True") {
        Write-Host "  [√] Compiled with CUDA: Yes" -ForegroundColor Green

        # Check GPU device count
        $gpuCount = & $PythonExe -c "import paddle; print(paddle.device.cuda.device_count())" 2>&1
        Write-Host "  [√] GPU devices detected: $gpuCount" -ForegroundColor Green

        # Check CUDA runtime version
        $cudaRuntime = & $PythonExe -c "import paddle; print(paddle.version.cuda())" 2>&1
        Write-Host "  [i] PaddlePaddle built for CUDA: $cudaRuntime" -ForegroundColor Cyan
    } else {
        Write-Host "  [!] Compiled with CUDA: No (CPU version)" -ForegroundColor Yellow
    }
} else {
    Write-Host "  [X] PaddlePaddle not installed" -ForegroundColor Red
}
Write-Host ""

# Check which paddle package is installed
Write-Host "[4/4] Checking installed PaddlePaddle package..." -ForegroundColor Yellow
$paddlePackages = & $PythonExe -m pip list 2>&1 | Select-String "paddle"
if ($paddlePackages) {
    Write-Host "  Installed packages:" -ForegroundColor Cyan
    $paddlePackages | ForEach-Object { Write-Host "    $_" -ForegroundColor White }
} else {
    Write-Host "  [X] No PaddlePaddle packages found" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Summary & Recommendations" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Analyze and provide recommendations
$systemCudaVersion = $null
if ($nvidiaSmi) {
    $cudaOutput = & nvidia-smi --query-gpu=cuda_version --format=csv,noheader 2>&1
    if ($cudaOutput -match "(\d+\.\d+)") {
        $systemCudaVersion = $matches[1]
    }
}

if ($systemCudaVersion) {
    $majorVersion = [int]$systemCudaVersion.Split('.')[0]

    Write-Host "Your System CUDA: $systemCudaVersion" -ForegroundColor Cyan
    Write-Host ""

    if ($majorVersion -eq 11) {
        Write-Host "[√] CUDA 11.x - Fully supported by PaddlePaddle!" -ForegroundColor Green
        Write-Host "    GPU acceleration should work." -ForegroundColor Green
    } elseif ($majorVersion -eq 12) {
        Write-Host "[√] CUDA 12.x - Supported by PaddlePaddle 3.x!" -ForegroundColor Green
        Write-Host "    GPU acceleration should work." -ForegroundColor Green
    } elseif ($majorVersion -ge 13) {
        Write-Host "[!] CUDA 13.x - NOT YET SUPPORTED by PaddlePaddle!" -ForegroundColor Yellow
        Write-Host "" -ForegroundColor Yellow
        Write-Host "    PaddlePaddle GPU currently supports:" -ForegroundColor Yellow
        Write-Host "    - CUDA 11.x (11.6, 11.7, 11.8)" -ForegroundColor Yellow
        Write-Host "    - CUDA 12.x (12.0, 12.1, 12.2)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "    SOLUTION:" -ForegroundColor Cyan
        Write-Host "    1. Uninstall CUDA 13.1" -ForegroundColor White
        Write-Host "    2. Install CUDA 11.8 (recommended):" -ForegroundColor White
        Write-Host "       https://developer.nvidia.com/cuda-11-8-0-download-archive" -ForegroundColor White
        Write-Host "    3. Restart your PC" -ForegroundColor White
        Write-Host "    4. Delete: build-resources\python-win\.setup-complete" -ForegroundColor White
        Write-Host "    5. Run: update-and-build.bat" -ForegroundColor White
    } else {
        Write-Host "[?] CUDA version unknown or too old" -ForegroundColor Yellow
    }
} else {
    Write-Host "[X] Could not detect CUDA version" -ForegroundColor Red
    Write-Host "    Make sure NVIDIA drivers and CUDA are installed." -ForegroundColor Yellow
}

Write-Host ""
pause
