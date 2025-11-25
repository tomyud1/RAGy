#!/usr/bin/env python3
"""Quick test to verify chunks tracking logic"""

from pathlib import Path

# Simulate what happens during conversion
chunks_by_document = {}

# Simulate processing 3 PDF chunks
test_chunks = [
    ("conversions/.chunks_file8973/file8973_chunk001_p1-10.pdf", 5),
    ("conversions/.chunks_file8973/file8973_chunk002_p11-20.pdf", 7),
    ("conversions/.chunks_file8973/file8973_chunk003_p21-30.pdf", 6),
]

for chunk_path, num_chunks in test_chunks:
    chunk_base_name = Path(chunk_path).stem
    print(f"Processing: {chunk_path}")
    print(f"  → chunk_base_name: '{chunk_base_name}'")

    if chunk_base_name not in chunks_by_document:
        chunks_by_document[chunk_base_name] = {
            "chunks": [],
            "original_document": "file8973.pdf"
        }

    # Simulate adding chunks
    chunks_by_document[chunk_base_name]["chunks"].extend([f"chunk_{i}" for i in range(num_chunks)])
    print(f"  → Added {num_chunks} chunks")
    print()

print("="*60)
print("Final chunks_by_document dict:")
print("="*60)
for key, value in chunks_by_document.items():
    print(f"Key: '{key}'")
    print(f"  Original doc: {value['original_document']}")
    print(f"  Num chunks: {len(value['chunks'])}")
    print()

print("="*60)
print(f"Total keys in dict: {len(chunks_by_document)}")
print(f"Keys: {list(chunks_by_document.keys())}")
