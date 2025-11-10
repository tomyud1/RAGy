# Jobkit Documentation

## Overview

Docling's document conversion capabilities can be executed as distributed jobs using [Docling Jobkit](https://github.com/docling-project/docling-jobkit). This library enables pipeline execution through Kubeflow, Ray, or local processing, along with connectors for document import/export.

## Key Capabilities

The Jobkit library provides:

- **Pipeline execution** options for Kubeflow pipelines, Ray, or local job processing
- **Document connectors** supporting HTTP endpoints, S3, and Google Drive for data movement

## Usage via CLI

Local execution is available through the command line:

```
uv run docling-jobkit-local [configuration-file-path]
```

### Configuration Structure

The configuration file specifies three main sections:

1. **Conversion options** - Docling settings (e.g., OCR parameters)
2. **Source configuration** - Input document location
3. **Target configuration** - Output destination

### Example Configuration

```yaml
options:
  do_ocr: false

sources:
  - kind: google_drive
    path_id: 1X6B3j7GWlHfIPSF9VUkasN-z49yo1sGFA9xv55L2hSE
    token_path: "./dev/google_drive/google_drive_token.json"
    credentials_path: "./dev/google_drive/google_drive_credentials.json"

target:
  kind: s3
  endpoint: localhost:9000
  verify_ssl: false
  bucket: docling-target
  access_key: minioadmin
  secret_key: minioadmin
```

## Supported Connectors

Currently available connectors include HTTP endpoints, S3, and Google Drive.

## Google Drive Configuration

### Prerequisites

**Step 1: Enable Google Drive API**
- Access the [Google Cloud Console](https://console.cloud.google.com/)
- Search for and enable the Google Drive API

**Step 2: Create OAuth Credentials**
- Navigate to APIs & Services > Credentials
- Create a new OAuth client ID for desktop application
- Download and save the credentials JSON as `google_drive_credentials.json`

**Step 3: Add Test Users**
- Go to OAuth consent screen settings
- Register your email address as a test user

**Step 4: Update Configuration**
- Set `credentials_path` pointing to your downloaded credentials file
- Set `path_id` extracted from your Google Drive URL:
  - **Folders:** Extract ID from `https://drive.google.com/drive/folders/[ID]`
  - **Files:** Extract ID from `https://docs.google.com/document/d/[ID]/edit`

**Step 5: Authenticate**
- Run the CLI with your configuration file
- Complete browser-based authentication when prompted
- A token file is generated and reused for subsequent executions
