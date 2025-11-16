#!/usr/bin/env python3
"""
GPU-Accelerated Embedding Service for RAGy
Supports: MPS (Apple Silicon), CUDA (NVIDIA), ROCm (AMD), CPU fallback
"""

import sys
import json
import argparse
import gc
import numpy as np
import torch
from sentence_transformers import SentenceTransformer
from typing import List, Dict, Optional

class EmbeddingService:
    """GPU-accelerated embedding generation service"""

    # Supported embedding models
    MODELS = {
        'all-MiniLM-L6-v2': {
            'name': 'sentence-transformers/all-MiniLM-L6-v2',
            'dimensions': 384,
        },
        'bge-base-en-v1.5': {
            'name': 'BAAI/bge-base-en-v1.5',
            'dimensions': 768,
        },
        'all-mpnet-base-v2': {
            'name': 'sentence-transformers/all-mpnet-base-v2',
            'dimensions': 768,
        },
    }

    def __init__(self, model_id: str, device_preference: str = 'auto'):
        """
        Initialize embedding service

        Args:
            model_id: Model identifier (e.g., 'all-MiniLM-L6-v2')
            device_preference: 'auto', 'metal', 'cuda', 'rocm', or 'cpu'
        """
        self.model_id = model_id
        self.device_preference = device_preference
        self.device = self._detect_device()
        self.model_config = self.MODELS.get(model_id)

        if not self.model_config:
            raise ValueError(f"Unknown model: {model_id}")

        self._log_info({
            'type': 'initialization',
            'model': model_id,
            'device_preference': device_preference,
            'device_detected': str(self.device),
            'model_name': self.model_config['name'],
            'dimensions': self.model_config['dimensions']
        })

        # Load model
        self.model = self._load_model()

    def _detect_device(self) -> torch.device:
        """Detect and select the best available device"""

        # If user specified a device, try to use it
        if self.device_preference == 'metal':
            if torch.backends.mps.is_available():
                self._log_info({
                    'type': 'device_selection',
                    'device': 'mps',
                    'hardware': 'Apple Silicon GPU (Metal)',
                    'expected_speedup': '2-4x vs CPU'
                })
                return torch.device('mps')
            else:
                self._log_warning({
                    'type': 'device_unavailable',
                    'requested': 'metal',
                    'reason': 'MPS not available on this system',
                    'fallback': 'cpu'
                })
                return torch.device('cpu')

        elif self.device_preference == 'cuda':
            if torch.cuda.is_available():
                device = torch.device('cuda')
                self._log_info({
                    'type': 'device_selection',
                    'device': 'cuda',
                    'hardware': f'NVIDIA GPU ({torch.cuda.get_device_name(0)})',
                    'expected_speedup': '3-10x vs CPU',
                    'cuda_version': torch.version.cuda
                })
                return device
            else:
                self._log_warning({
                    'type': 'device_unavailable',
                    'requested': 'cuda',
                    'reason': 'CUDA not available on this system',
                    'fallback': 'cpu'
                })
                return torch.device('cpu')

        elif self.device_preference == 'cpu':
            self._log_info({
                'type': 'device_selection',
                'device': 'cpu',
                'hardware': 'CPU only',
                'note': 'User requested CPU mode'
            })
            return torch.device('cpu')

        # Auto-detect best available device
        elif self.device_preference == 'auto':
            # Try MPS (Apple Silicon)
            if torch.backends.mps.is_available():
                self._log_info({
                    'type': 'device_selection',
                    'device': 'mps',
                    'hardware': 'Apple Silicon GPU (Metal)',
                    'expected_speedup': '2-4x vs CPU',
                    'mode': 'auto-detected'
                })
                return torch.device('mps')

            # Try CUDA (NVIDIA)
            elif torch.cuda.is_available():
                device = torch.device('cuda')
                self._log_info({
                    'type': 'device_selection',
                    'device': 'cuda',
                    'hardware': f'NVIDIA GPU ({torch.cuda.get_device_name(0)})',
                    'expected_speedup': '3-10x vs CPU',
                    'cuda_version': torch.version.cuda,
                    'mode': 'auto-detected'
                })
                return device

            # Fallback to CPU
            else:
                self._log_warning({
                    'type': 'device_selection',
                    'device': 'cpu',
                    'hardware': 'CPU only',
                    'warning': 'No GPU acceleration available - processing will be slower',
                    'suggestion': 'Install PyTorch with CUDA/ROCm support for GPU acceleration'
                })
                return torch.device('cpu')

        else:
            self._log_warning({
                'type': 'device_selection',
                'device': 'cpu',
                'warning': f'Unknown device preference: {self.device_preference}',
                'fallback': 'cpu'
            })
            return torch.device('cpu')

    def _load_model(self) -> SentenceTransformer:
        """Load the sentence transformer model"""
        try:
            self._log_info({
                'type': 'model_loading',
                'status': 'started',
                'model': self.model_config['name']
            })

            model = SentenceTransformer(self.model_config['name'])
            model = model.to(self.device)

            self._log_info({
                'type': 'model_loading',
                'status': 'completed',
                'model': self.model_config['name'],
                'device': str(self.device)
            })

            return model
        except Exception as e:
            self._log_error({
                'type': 'model_loading',
                'status': 'failed',
                'error': str(e)
            })
            raise

    def generate_embeddings(self, texts: List[str], batch_size: int = 32) -> List[List[float]]:
        """
        Generate embeddings for a list of texts

        Args:
            texts: List of text strings to embed
            batch_size: Batch size for processing

        Returns:
            List of embedding vectors
        """
        try:
            self._log_info({
                'type': 'embedding_generation',
                'status': 'started',
                'num_texts': len(texts),
                'batch_size': batch_size
            })

            # Generate embeddings with memory optimization
            embeddings = self.model.encode(
                texts,
                batch_size=batch_size,
                show_progress_bar=False,
                convert_to_numpy=True,
                normalize_embeddings=True  # Normalize for cosine similarity
            )

            # Convert to list of lists
            embeddings_list = embeddings.tolist()

            # Clear GPU cache if using GPU to free memory
            if self.device.type in ['mps', 'cuda']:
                if self.device.type == 'cuda':
                    torch.cuda.empty_cache()
                elif self.device.type == 'mps':
                    try:
                        torch.mps.empty_cache()
                    except:
                        pass  # MPS cache clearing not available in all versions

            # Clear numpy array to free memory
            del embeddings

            # Force Python garbage collection to free memory immediately
            gc.collect()

            self._log_info({
                'type': 'embedding_generation',
                'status': 'completed',
                'num_embeddings': len(embeddings_list),
                'dimensions': len(embeddings_list[0]) if embeddings_list else 0
            })

            return embeddings_list

        except Exception as e:
            self._log_error({
                'type': 'embedding_generation',
                'status': 'failed',
                'error': str(e)
            })
            raise

    def generate_single_embedding(self, text: str) -> List[float]:
        """Generate embedding for a single text"""
        embeddings = self.generate_embeddings([text], batch_size=1)
        return embeddings[0]

    @staticmethod
    def get_available_devices() -> Dict:
        """Get information about available devices"""
        devices = {
            'cpu': {
                'available': True,
                'name': 'CPU',
                'description': 'CPU processing (slowest, always available)'
            }
        }

        # Check for MPS (Apple Silicon)
        if torch.backends.mps.is_available():
            devices['metal'] = {
                'available': True,
                'name': 'Apple Silicon (Metal)',
                'description': 'Apple M-series GPU acceleration (2-4x faster)'
            }
        else:
            devices['metal'] = {
                'available': False,
                'name': 'Apple Silicon (Metal)',
                'description': 'Not available on this system'
            }

        # Check for CUDA (NVIDIA)
        if torch.cuda.is_available():
            devices['cuda'] = {
                'available': True,
                'name': f'NVIDIA GPU ({torch.cuda.get_device_name(0)})',
                'description': f'CUDA acceleration (3-10x faster)',
                'cuda_version': torch.version.cuda
            }
        else:
            devices['cuda'] = {
                'available': False,
                'name': 'NVIDIA GPU (CUDA)',
                'description': 'Not available on this system'
            }

        # Add auto option
        devices['auto'] = {
            'available': True,
            'name': 'Auto-detect',
            'description': 'Automatically select the best available device'
        }

        return devices

    @staticmethod
    def _log_info(data: Dict):
        """Log info message to stderr"""
        print(json.dumps({'level': 'info', **data}), file=sys.stderr, flush=True)

    @staticmethod
    def _log_warning(data: Dict):
        """Log warning message to stderr"""
        print(json.dumps({'level': 'warning', **data}), file=sys.stderr, flush=True)

    @staticmethod
    def _log_error(data: Dict):
        """Log error message to stderr"""
        print(json.dumps({'level': 'error', **data}), file=sys.stderr, flush=True)


def main():
    """Main entry point for CLI usage"""
    parser = argparse.ArgumentParser(description='GPU-Accelerated Embedding Service')
    parser.add_argument('command', choices=['embed', 'devices', 'stream'], help='Command to execute')
    parser.add_argument('--model', default='all-MiniLM-L6-v2', help='Model ID')
    parser.add_argument('--device', default='auto', choices=['auto', 'metal', 'cuda', 'cpu'],
                       help='Device preference')
    parser.add_argument('--batch-size', type=int, default=32, help='Batch size')
    parser.add_argument('--texts', nargs='*', help='Texts to embed (for testing)')

    args = parser.parse_args()

    try:
        if args.command == 'devices':
            # Return available devices
            devices = EmbeddingService.get_available_devices()
            print(json.dumps({'success': True, 'devices': devices}))

        elif args.command == 'embed':
            # Read texts from stdin if not provided
            if args.texts:
                texts = args.texts
            else:
                input_data = json.loads(sys.stdin.read())
                texts = input_data.get('texts', [])

            if not texts:
                raise ValueError("No texts provided")

            # Initialize service and generate embeddings
            service = EmbeddingService(args.model, args.device)
            embeddings = service.generate_embeddings(texts, args.batch_size)

            # Return results
            result = {
                'success': True,
                'embeddings': embeddings,
                'dimensions': len(embeddings[0]) if embeddings else 0,
                'count': len(embeddings),
                'device': str(service.device),
                'model': args.model
            }
            print(json.dumps(result))

        elif args.command == 'stream':
            # Streaming mode: load model once, process texts as they come
            service = EmbeddingService(args.model, args.device)

            # Signal ready
            print(json.dumps({'type': 'ready', 'device': str(service.device)}), flush=True)

            # Read texts line by line and stream embeddings back
            for line in sys.stdin:
                try:
                    data = json.loads(line.strip())

                    if data.get('type') == 'process':
                        texts = data.get('texts', [])
                        if not texts:
                            continue

                        # Process in batches for GPU efficiency, stream results immediately
                        batch_size = args.batch_size
                        for i in range(0, len(texts), batch_size):
                            batch = texts[i:i + batch_size]
                            embeddings = service.generate_embeddings(batch, batch_size)

                            # Stream each embedding as soon as batch completes
                            for j, embedding in enumerate(embeddings):
                                result = {
                                    'type': 'embedding',
                                    'index': i + j,
                                    'embedding': embedding
                                }
                                print(json.dumps(result), flush=True)

                            # Clear batch from memory
                            del embeddings
                            del batch

                            # Periodic garbage collection
                            if i % 100 == 0 and i > 0:
                                gc.collect()

                    elif data.get('type') == 'shutdown':
                        break

                except json.JSONDecodeError:
                    continue
                except Exception as e:
                    error_msg = {
                        'type': 'error',
                        'error': str(e)
                    }
                    print(json.dumps(error_msg), flush=True)

    except Exception as e:
        error_result = {
            'success': False,
            'error': str(e),
            'type': type(e).__name__
        }
        print(json.dumps(error_result))
        sys.exit(1)


if __name__ == '__main__':
    main()
