/**
 * Hardware Detection for Embedding Service
 * Detects available GPU/CPU acceleration
 */

import os from 'os';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { paths } from '../../config/paths.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Detect hardware capabilities
 * @returns {Object} Hardware info
 */
export function detectHardware() {
  const platform = os.platform();
  const cpuInfo = os.cpus()[0]?.model || 'Unknown CPU';

  // Detect Apple Silicon (M-series)
  if (platform === 'darwin' && cpuInfo.includes('Apple')) {
    const match = cpuInfo.match(/Apple (M\d+\s?\w*)/);
    const chipName = match ? match[1] : 'Apple Silicon';
    return {
      type: 'mps',
      name: chipName,
      description: `Leveraging your ${chipName} Neural Engine for fast embedding generation`
    };
  }

  // Fallback to CPU with WASM/SIMD
  return {
    type: 'cpu',
    name: cpuInfo,
    description: `Using CPU acceleration with WebAssembly (${os.cpus().length} cores)`
  };
}

/**
 * Get fallback device info when Python service is unavailable
 * @returns {Object} Device info
 */
export function getFallbackDevices() {
  const platform = os.platform();
  const cpuInfo = os.cpus()[0]?.model || 'Unknown CPU';

  const devices = {
    auto: {
      available: true,
      name: 'Auto-detect',
      description: 'Automatically select the best available device'
    },
    cpu: {
      available: true,
      name: 'CPU',
      description: `CPU processing with WebAssembly (${os.cpus().length} cores)`
    }
  };

  // Detect Apple Silicon
  if (platform === 'darwin' && cpuInfo.includes('Apple')) {
    const match = cpuInfo.match(/Apple (M\d+\s?\w*)/);
    const chipName = match ? match[1] : 'Apple Silicon';
    devices.metal = {
      available: true,
      name: chipName,
      description: 'Apple GPU acceleration (2-4x faster) - requires Python backend'
    };
  } else {
    devices.metal = {
      available: false,
      name: 'Apple Silicon (Metal)',
      description: 'Not available on this system'
    };
  }

  devices.cuda = {
    available: false,
    name: 'NVIDIA GPU (CUDA)',
    description: 'Not detected - requires Python backend with CUDA support'
  };

  return devices;
}

/**
 * Get available devices from Python backend
 * @returns {Promise<Object>} Device info
 */
export async function getAvailableDevices() {
  try {
    const pythonScript = path.join(paths.pythonScripts(), 'embedding_service.py');
    const result = await runPythonCommand(pythonScript, ['devices']);

    if (result.success) {
      return result.devices;
    }

    console.warn('[Embedding] Failed to get devices from Python service, using fallback');
    return getFallbackDevices();
  } catch (error) {
    console.error('[Embedding] Error getting available devices:', error);
    return getFallbackDevices();
  }
}

/**
 * Run a Python command and parse JSON result
 * @param {string} scriptPath - Path to Python script
 * @param {Array} args - Command arguments
 * @returns {Promise<Object>} Parsed result
 */
export function runPythonCommand(scriptPath, args = []) {
  return new Promise((resolve, reject) => {
    const python = spawn('python3', [scriptPath, ...args]);
    let stdout = '';
    let stderr = '';

    python.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    python.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    python.on('close', (code) => {
      if (code === 0) {
        try {
          const result = JSON.parse(stdout);
          resolve(result);
        } catch (error) {
          reject(new Error(`Failed to parse Python output: ${stdout}`));
        }
      } else {
        reject(new Error(`Python process exited with code ${code}: ${stderr}`));
      }
    });

    python.on('error', (error) => {
      reject(new Error(`Failed to start Python process: ${error.message}`));
    });
  });
}

