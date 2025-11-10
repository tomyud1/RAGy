# Chunking - Docling Documentation

## Introduction

Chunking in Docling refers to the process of breaking down a `DoclingDocument` into smaller, manageable pieces of content. The documentation describes two fundamental approaches:

1. **Post-processing approach**: Export the document to Markdown or similar formats, then apply custom chunking logic
2. **Native chunking**: Use Docling's built-in chunkers that operate directly on `DoclingDocument` objects

A chunker is defined as "a Docling abstraction that, given a [`DoclingDocument`], returns a stream of chunks, each of which captures some part of the document as a string accompanied by respective metadata."

Docling provides a class hierarchy with a base type and specific implementations to balance flexibility with practical utility.

## Base Chunker

The `BaseChunker` is the foundational interface that all chunkers implement. It requires two core methods:

- **`chunk()`**: Returns an iterator of chunks for a provided document
- **`contextualize()`**: Delivers metadata-enriched serialization of chunks, typically for embedding or generation models

This interface enables integration with popular AI frameworks like LlamaIndex, allowing developers to use built-in, custom, or third-party implementations interchangeably.

## Hybrid Chunker

The `HybridChunker` combines hierarchical document structure with tokenization awareness. It operates in two passes:

1. **Splitting phase**: Divides oversized chunks based on token limits
2. **Merging phase**: Consolidates undersized consecutive chunks with matching headers and captions (optional via `merge_peers` parameter)

Users can install it via `docling` package or configure `docling-core` with appropriate extras for HuggingFace or OpenAI tokenizers.

## Hierarchical Chunker

The `HierarchicalChunker` leverages document structure information to create individual chunks per detected element. It automatically merges list items by default and preserves relevant metadata including headers and captions.
