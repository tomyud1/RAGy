#!/usr/bin/env python3
"""
Test to show what semantic chunking produces
"""

import os
import json
from pathlib import Path
from datetime import datetime

def test_chunking():
    from docling.document_converter import DocumentConverter, PdfFormatOption
    from docling.datamodel.base_models import InputFormat
    from docling.datamodel.pipeline_options import PdfPipelineOptions
    from docling.chunking import HybridChunker

    # Use existing output folder
    output_dir = Path("/Users/tomeryud/projects/RAGy/testing/outputs/gemini_test_20251113_211916")

    print(f"\n📁 Adding chunking output to: {output_dir}")

    test_pdf = Path("/Users/tomeryud/projects/RAGy/data/projects/f10f8e49-05b1-4494-ad40-5969a096a480/raw-files/.chunks_file8973/file8973_chunk001_p1-10.pdf")

    # Convert (without Gemini)
    print("\n📄 Converting PDF...")
    pipeline_options = PdfPipelineOptions()
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(pipeline_options=pipeline_options)
        }
    )
    result = converter.convert(test_pdf)
    doc = result.document
    print("  ✅ Conversion complete")

    # Semantic chunking
    print("\n🔪 Running semantic chunking...")
    chunker = HybridChunker(
        tokenizer="bert-base-uncased",
        max_tokens=512,
        merge_peers=True
    )

    chunks = list(chunker.chunk(doc))
    print(f"  ✅ Created {len(chunks)} semantic chunks")

    # Save chunks
    chunks_data = []
    for i, chunk in enumerate(chunks, 1):
        chunk_info = {
            "chunk_num": i,
            "text": chunk.text,
            "text_length": len(chunk.text),
            "meta": str(chunk.meta) if hasattr(chunk, 'meta') else None,
        }
        chunks_data.append(chunk_info)

    # Save as JSON
    chunks_file = output_dir / "semantic_chunks.json"
    with open(chunks_file, 'w') as f:
        json.dump(chunks_data, f, indent=2)
    print(f"\n✅ Saved chunks to: {chunks_file.name}")

    # Save as readable text
    chunks_txt = output_dir / "semantic_chunks.txt"
    with open(chunks_txt, 'w') as f:
        f.write("=" * 80 + "\n")
        f.write("SEMANTIC CHUNKS - Docling HybridChunker\n")
        f.write("=" * 80 + "\n\n")
        f.write(f"Total chunks: {len(chunks)}\n")
        f.write(f"Chunker settings: tokenizer=bert-base-uncased, max_tokens=512\n\n")

        for i, chunk in enumerate(chunks, 1):
            f.write("=" * 80 + "\n")
            f.write(f"CHUNK {i}/{len(chunks)}\n")
            f.write("=" * 80 + "\n")
            f.write(f"Length: {len(chunk.text)} characters\n")
            f.write("-" * 80 + "\n")
            f.write(chunk.text)
            f.write("\n\n")

    print(f"✅ Saved readable chunks to: {chunks_txt.name}")

    # Summary
    print("\n" + "=" * 60)
    print("CHUNKING SUMMARY")
    print("=" * 60)
    print(f"Total chunks: {len(chunks)}")
    print(f"Avg chunk size: {sum(len(c.text) for c in chunks) // len(chunks)} chars")
    print(f"Smallest chunk: {min(len(c.text) for c in chunks)} chars")
    print(f"Largest chunk: {max(len(c.text) for c in chunks)} chars")
    print("")
    print("NOTE: If image descriptions existed, they would be")
    print("      included in these chunks automatically.")
    print("=" * 60)

if __name__ == "__main__":
    test_chunking()
