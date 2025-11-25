"""
Vision backend detection utilities
"""

import platform


def detect_vision_backend(preferred='auto'):
    """
    Detect the best vision backend based on hardware
    
    Args:
        preferred: 'auto', 'transformers', or 'mlx'
    
    Returns:
        'transformers' or 'mlx'
    """
    if preferred == 'transformers':
        return 'transformers'
    
    if preferred == 'mlx':
        # Check if MLX is available and we're on Apple Silicon
        try:
            import mlx.core as mx
            import mlx_vlm
            if platform.machine() == 'arm64' and platform.system() == 'Darwin':
                return 'mlx'
        except ImportError:
            pass
        return 'transformers'  # Fallback
    
    # Auto-detect
    if platform.machine() == 'arm64' and platform.system() == 'Darwin':
        try:
            import mlx.core as mx
            import mlx_vlm
            return 'mlx'
        except ImportError:
            return 'transformers'
    
    return 'transformers'

