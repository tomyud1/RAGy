# RAGy Security Guide

## API Key Security

### Overview

RAGy handles API keys for multiple AI providers. This document explains how keys are stored, transmitted, and best practices for security.

### How API Keys Are Stored

RAGy provides **two methods** for storing API keys:

#### 1. Settings UI (Recommended for Personal Use)
- Keys entered in Settings → AI Providers are stored in `data/settings/api-keys.enc`
- Keys are encrypted using AES-256 encryption
- The encryption key is derived from a machine-specific identifier
- Keys are stored locally on your machine only

#### 2. Environment Variables (Recommended for Deployment)
- Set keys in a `.env` file or system environment
- Never commit `.env` files to version control
- Use secret management services in production (AWS Secrets Manager, Vault, etc.)

### Security Best Practices

#### Development
1. **Copy `.env.example` to `.env`** - Never modify `.env.example` directly
2. **Add `.env` to `.gitignore`** - Already configured in this project
3. **Use minimal permissions** - Create API keys with only required scopes
4. **Rotate keys regularly** - Especially after team member departures

#### Production Deployment
1. **Use secret management services:**
   - AWS Secrets Manager
   - Google Secret Manager
   - HashiCorp Vault
   - Azure Key Vault

2. **Never hardcode keys** - Always use environment variables

3. **Use separate keys for environments:**
   - Development keys (low quotas, can be revoked easily)
   - Production keys (higher quotas, stricter access control)

4. **Monitor usage:**
   - Set up billing alerts
   - Monitor for unusual patterns
   - Enable audit logging

### Electron App Distribution

When distributing RAGy as an Electron app:

1. **DO NOT embed API keys** in the distributed binary
2. **Users provide their own keys** via the Settings UI
3. **Keys stay on user's machine** - Never transmitted to your servers
4. **Encryption at rest** - Keys are encrypted in local storage

### API Key Transmission

- Keys are only sent to their respective AI provider APIs
- All API calls use HTTPS
- Keys are never logged or stored in plain text
- Keys are never sent to RAGy servers (there are none - it's a local app)

### What to Do If a Key Is Compromised

1. **Immediately revoke the key** at the provider's console:
   - OpenAI: https://platform.openai.com/api-keys
   - Anthropic: https://console.anthropic.com/account/keys
   - Google: https://console.cloud.google.com/apis/credentials
   - Moonshot: https://platform.moonshot.ai/

2. **Generate a new key** with the same permissions

3. **Update your configuration** (`.env` or Settings UI)

4. **Review usage logs** for unauthorized activity

### Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key | No* |
| `ANTHROPIC_API_KEY` | Anthropic API key | No* |
| `GEMINI_API_KEY` | Google Gemini API key | No* |
| `MOONSHOT_API_KEY` | Moonshot API key | No* |
| `NODE_ENV` | Environment (development/production) | No |
| `PORT` | Server port (default: 3001) | No |

*At least one AI provider key is needed for chat functionality.

### Questions?

If you have security concerns or find a vulnerability, please:
1. **Do not open a public issue**
2. Contact the maintainers directly
3. Allow time for a fix before disclosure

