# Docling Document

## Overview

Docling v2 introduces `DoclingDocument`, a unified document representation format built on Pydantic datatypes. This format can express common document features including "Text, Tables, Pictures, and more" along with document hierarchy, layout information, and provenance data.

The Pydantic type definitions are located in the `docling_core.types.doc` module, with source code available in the docling-core repository.

## Example Document Structures

### Basic Structure

`DoclingDocument` organizes content into two categories:

**Content Items** (stored as lists):
- `texts`: Text-based items (paragraphs, headings, equations) inheriting from `TextItem`
- `tables`: Table data as `TableItem` instances
- `pictures`: Image data as `PictureItem` instances
- `key_value_items`: Key-value pairs

**Content Structure** (tree-based):
- `body`: Root node for main document body
- `furniture`: Root node for headers, footers, and non-body items
- `groups`: Containers for content items (lists, chapters)

All items inherit from `DocItem` or `NodeItem` and reference relationships through JSON pointers. The document's reading order is determined by the `body` tree structure and child ordering within each item.

### Grouping

Content can be organized hierarchically beneath headings. For example, items under a heading become nested children, while groups containing list elements are stored in the top-level `groups` field, allowing flexible document organization beyond simple linear structures.
