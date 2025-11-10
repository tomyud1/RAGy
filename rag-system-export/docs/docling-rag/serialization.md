# Serialization

## Introduction

A document serializer is a Docling abstraction that processes a `DoclingDocument` and produces a textual representation. Docling also defines similar abstractions for document subcomponents like text, tables, pictures, and lists.

A serializer provider wraps the document serialization strategy, abstracting it from the document instance itself.

## Base Classes

Docling implements a serialization class hierarchy to provide both flexibility and built-in utility:

- Base types: `BaseDocSerializer`, `BaseTextSerializer`, `BaseTableSerializer`, and `BaseSerializerProvider`
- Concrete implementations like `MarkdownDocSerializer`

The most important method is `BaseDocSerializer.serialize()`, which "returns the textual representation, as well as relevant metadata on which document components contributed to that serialization."

You can review the complete interface specifications in the [docling-core repository](https://github.com/docling-project/docling-core/blob/main/docling_core/transforms/serializer/base.py).

## Use in DoclingDocument Export Methods

Docling provides predefined serializers for Markdown, HTML, and DocTags formats. The `DoclingDocument` export methods (such as `export_to_markdown()`) serve as convenient shortcuts that internally instantiate and delegate to the appropriate serializers.

## Examples

For practical examples of serializer usage, refer to the [serialization example](../../examples/serialization/).
