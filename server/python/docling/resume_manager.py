"""
Resume/progress persistence for long-running conversions
"""

import sys
import json
import time
from pathlib import Path


def get_progress_file_path(output_file):
    """Get the path to the progress file for resuming"""
    output_path = Path(output_file)
    return output_path.parent / f".progress_{output_path.stem}.json"


def save_progress(output_file, completed_chunks, current_file_idx, total_files, config):
    """
    Save progress to disk for resuming later

    Args:
        output_file: Path to the output chunks file
        completed_chunks: List of completed chunk paths
        current_file_idx: Current file being processed
        total_files: Total number of files
        config: Configuration dict
    """
    progress_file = get_progress_file_path(output_file)
    progress_data = {
        "output_file": output_file,
        "completed_chunks": completed_chunks,
        "current_file_idx": current_file_idx,
        "total_files": total_files,
        "config": config,
        "timestamp": time.time()
    }
    try:
        with open(progress_file, 'w') as f:
            json.dump(progress_data, f, indent=2)
    except Exception as e:
        print(json.dumps({"error": f"Failed to save progress: {str(e)}"}), file=sys.stderr, flush=True)


def load_progress(output_file):
    """
    Load progress from disk if resuming

    Returns:
        Progress data dict or None if no progress exists
    """
    progress_file = get_progress_file_path(output_file)
    if not progress_file.exists():
        return None

    try:
        with open(progress_file, 'r') as f:
            progress_data = json.load(f)

        # Check if progress is recent (within 7 days)
        age_days = (time.time() - progress_data.get("timestamp", 0)) / 86400
        if age_days > 7:
            print(json.dumps({"info": "Progress file too old (>7 days), starting fresh"}), file=sys.stderr, flush=True)
            return None

        return progress_data
    except Exception as e:
        print(json.dumps({"error": f"Failed to load progress: {str(e)}"}), file=sys.stderr, flush=True)
        return None


def clear_progress(output_file):
    """Clear progress file after successful completion"""
    progress_file = get_progress_file_path(output_file)
    try:
        if progress_file.exists():
            progress_file.unlink()
    except:
        pass

