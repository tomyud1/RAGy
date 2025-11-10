# Confidence Scores Documentation

## Introduction

Confidence grades were introduced in v2.34.0 to assist users in evaluating conversion quality. They are accessible through the `confidence` field within the `ConversionResult` object that the document converter provides.

## Purpose

Document conversion can face challenges from intricate layouts, substandard scan quality, or difficult formatting. Confidence scores offer a measurable way to evaluate conversion quality. Each report includes:

- A **numerical score** (ranging from 0.0 to 1.0) indicating conversion accuracy
- A **quality grade** (poor, fair, good, excellent) for easy interpretation

The documentation emphasizes focusing on document-level grades (`mean_grade` and `low_grade`) rather than numerical scores, which serve informational purposes.

### Practical Applications

- Identifying documents needing manual review post-conversion
- Tailoring conversion pipelines to document types
- Establishing confidence thresholds for automated batch processing
- Early detection of conversion complications

## Key Concepts

### Scores Versus Grades

- **Scores**: Numerical values from 0.0–1.0, where higher indicates superior quality
- **Grades**: Categorical assessments (poor, fair, good, excellent) based on score thresholds

### Component Confidence Types

Four component metrics comprise each report:

- **Layout score**: Element recognition quality
- **OCR score**: Optical character recognition accuracy
- **Parse score**: 10th percentile digital text cell performance
- **Table score**: Table extraction quality (pending implementation)

### Aggregate Assessment

Two summary grades evaluate overall quality:

- **Mean grade**: Average of component scores
- **Low grade**: 5th percentile score highlighting problematic areas

### Calculation Levels

Confidence assessment occurs at:

- **Page level**: Individual metrics per page
- **Document level**: Whole-document averages derived from page-level data
