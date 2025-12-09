# GPU Support for PaddleOCR on Windows

PaddleOCR-VL can use your NVIDIA GPU for **5-10x faster processing** compared to CPU.

## Requirements

- **NVIDIA GPU** with CUDA support (RTX 20xx, 30xx, 40xx, etc.)
- **CUDA Toolkit** 11.8 or 12.x (**NOT 13.x - not supported yet**)
- **NVIDIA GPU Drivers** (latest recommended)

⚠️ **IMPORTANT**: PaddlePaddle does NOT support CUDA 13.x yet. You must use CUDA 11.8 or 12.x.

## Quick Setup

### 1. Check if CUDA is Available

Run this script to check your GPU, CUDA, and PaddlePaddle compatibility:

```bash
cd build-resources/python-win
.\check-paddle-cuda.ps1
```

This will tell you:
- ✅ If NVIDIA GPU is detected
- ✅ If CUDA is installed and which version
- ✅ If PaddlePaddle can use your CUDA version
- ⚠️ If your CUDA version is incompatible (like CUDA 13.x)

### 2. Install CUDA (if needed)

If CUDA is not installed:

1. **Download CUDA Toolkit**:
   - Recommended: [CUDA 11.8](https://developer.nvidia.com/cuda-11-8-0-download-archive) (most compatible)
   - Alternative: [CUDA 12.x](https://developer.nvidia.com/cuda-downloads) (newer)

2. **Run the installer**:
   - Use "Express Installation" for simplicity
   - This will install CUDA and update your GPU drivers
   - Restart your computer after installation

3. **Verify installation**:
   ```bash
   nvidia-smi
   ```
   Should show your GPU info and CUDA version

### 3. Force Python Package Re-installation

The build script only runs setup once (for speed). To reinstall with GPU support:

1. **Delete the setup marker**:
   ```bash
   del build-resources\python-win\.setup-complete
   ```

2. **Run the build script**:
   ```bash
   update-and-build.bat
   ```

The script will now install `paddlepaddle-gpu` instead of the CPU version.

## Troubleshooting

### "CUDA not found" during installation

**Cause**: CUDA Toolkit not installed or not in PATH

**Fix**:
1. Install CUDA Toolkit (see Step 2 above)
2. Restart your computer
3. Delete `.setup-complete` and run `update-and-build.bat` again

### Still shows "device: cpu" in the app

**Possible causes**:
1. CUDA installation incomplete - Try reinstalling CUDA
2. GPU drivers outdated - Update from [NVIDIA website](https://www.nvidia.com/download/index.aspx)
3. PaddlePaddle CPU version installed - Delete `.setup-complete` and rebuild

**To verify GPU is working**:
```bash
cd build-resources\python-win
.\python.exe -c "import paddle; print('GPU Available:', paddle.is_compiled_with_cuda()); print('GPU Count:', paddle.device.cuda.device_count())"
```

Should show:
```
GPU Available: True
GPU Count: 1
```

### Installation falls back to CPU version

If you see this warning during setup:
```
WARNING: GPU version installation failed (CUDA may not be installed)
Attempting to install CPU version of PaddlePaddle as fallback...
```

This means:
- CUDA is not installed, OR
- CUDA version is incompatible

**Fix**: Install CUDA 11.8 (most compatible version)

## Performance Comparison

| Hardware | Processing Speed | 1000-page PDF |
|----------|------------------|---------------|
| **CPU Only** | ~1-2 pages/sec | ~8-16 minutes |
| **RTX 4070** | ~10-20 pages/sec | ~1-2 minutes |
| **RTX 4090** | ~20-30 pages/sec | ~30-60 seconds |

*Speeds vary based on PDF complexity and batch size settings*

## Notes

- GPU acceleration **only works with PaddleOCR-VL** chunking method
- Docling uses a different framework (doesn't benefit from CUDA in the same way)
- First run may be slower as GPU warms up and caches models
- Larger batch sizes (up to 10) work better with GPUs
