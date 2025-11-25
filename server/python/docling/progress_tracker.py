"""
Progress tracking utilities for document conversion
"""

import os
import sys
import json
import time
import threading

try:
    import psutil
except ImportError:
    psutil = None


class ProgressTracker:
    """Thread-safe progress tracker for monitoring conversion progress"""
    
    def __init__(self):
        self.current_page = 0
        self.total_pages = 0
        self.lock = threading.Lock()
    
    def set_total(self, total):
        with self.lock:
            self.total_pages = total
    
    def update_page(self, page):
        with self.lock:
            self.current_page = page
    
    def get_progress(self):
        with self.lock:
            if self.total_pages == 0:
                return 0.0
            return (self.current_page / self.total_pages) * 100


def get_gpu_usage(device_type='unknown'):
    """Get GPU usage percentage - cross-platform best effort"""
    try:
        # For NVIDIA GPUs (CUDA)
        if device_type.startswith('cuda'):
            try:
                import pynvml
                pynvml.nvmlInit()
                handle = pynvml.nvmlDeviceGetHandleByIndex(0)
                utilization = pynvml.nvmlDeviceGetUtilizationRates(handle)
                return utilization.gpu
            except:
                pass

        # For Apple Silicon (MPS) - no direct API available
        # GPU usage visible in Activity Monitor but not programmatically accessible
        # without sudo/elevated permissions
        return None
    except:
        return None


def send_conversion_heartbeat(idx, total_files, filename, total_pages, interval=2, 
                               enrichments_enabled=0, device_type='unknown', process_start_time=None):
    """
    Send heartbeat updates during PDF conversion to show the process is active.

    Based on benchmarks: M3 Macs process ~1.26-1.5 seconds per page
    We use 1.5 seconds per page as conservative estimate for regular M3 (not Pro/Max)

    NOTE: Docling's converter.convert() is a black-box operation with no progress hooks.
    We can only show:
    1. That the process is running (not frozen)
    2. Elapsed time vs estimated time
    3. Estimated completion time

    Enrichments significantly increase processing time:
    - Each enrichment adds ~0.5-2 seconds per page
    - AI Image Descriptions can add 5-10 seconds per page with images
    """
    start_time = time.time()

    # Adjust time estimate based on enabled enrichments
    # Base: 1.5s/page, each enrichment adds time
    BASE_SECONDS_PER_PAGE = 1.5
    enrichment_multiplier = 1.0 + (enrichments_enabled * 0.5)
    if enrichments_enabled >= 5:
        enrichment_multiplier = 4.0

    SECONDS_PER_PAGE = BASE_SECONDS_PER_PAGE * enrichment_multiplier

    process = psutil.Process(os.getpid()) if psutil else None

    while getattr(threading.current_thread(), "do_run", True):
        time.sleep(interval)
        if not getattr(threading.current_thread(), "do_run", True):
            break

        elapsed = int(time.time() - start_time)

        # Note: We can't accurately estimate progress since Docling's convert() is a black box
        estimated_total_seconds = None
        remaining_seconds = None
        progress_percent = None

        # Get memory and CPU usage to prove process is active
        cpu_percent = 0
        memory_mb = 0
        
        if process:
            try:
                mem_info = process.memory_info()
                cpu_percent = process.cpu_percent(interval=0.1)
                memory_mb = mem_info.rss / 1024 / 1024

                # Also track child processes
                try:
                    children = process.children(recursive=True)
                    for child in children:
                        try:
                            child_mem = child.memory_info()
                            memory_mb += child_mem.rss / 1024 / 1024
                        except:
                            pass
                except:
                    pass
            except:
                pass

        gpu_percent = get_gpu_usage(device_type)

        # Send heartbeat to show we're alive
        progress = {
            "type": "progress",
            "current": idx,
            "total": total_files,
            "file": filename,
            "status": "converting",
            "total_pages": total_pages,
            "elapsed": elapsed,
            "estimated_total": estimated_total_seconds,
            "remaining": remaining_seconds,
            "percent": None,
            "heartbeat": True,
            "cpu_percent": round(cpu_percent, 1),
            "memory_mb": round(memory_mb, 1),
            "gpu_percent": round(gpu_percent, 1) if gpu_percent is not None else None,
            "is_active": cpu_percent > 0,
            "device": device_type,
            "total_elapsed": int(time.time() - process_start_time) if process_start_time else None
        }
        print(json.dumps(progress), file=sys.stderr, flush=True)
        sys.stderr.flush()

