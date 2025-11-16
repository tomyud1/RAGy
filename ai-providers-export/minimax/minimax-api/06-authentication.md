# Authentication & Getting Started

## Overview

To use the MiniMax-M2 API, you need two pieces of information:

1. **GroupID**: A unique identifier linked to your account's privileges, billing, and usage
2. **API Key**: A secret key for secure API authentication

## Obtaining Your Credentials

### Step 1: Access the MiniMax Developer Platform

Navigate to: [https://platform.minimax.io/](https://platform.minimax.io/)

### Step 2: Find Your GroupID

1. Log in to your account
2. Click on the **Account** tab
3. Select **Your Profile**
4. Locate and copy your **GroupID**

### Step 3: Create an API Key

1. In the Account section, navigate to **API Keys**
2. Click **Create New Secret Key**
3. Give your key a descriptive name (optional)
4. Copy the API key immediately
5. **Store it securely** - it won't be displayed again!

## Security Best Practices

### 1. Never Expose Your API Key

❌ **DON'T** hardcode API keys in your code:

```python
# ❌ BAD - API key exposed in code
client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="sk-1234567890abcdef"  # NEVER DO THIS!
)
```

✅ **DO** use environment variables:

```python
# ✅ GOOD - API key from environment
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key=os.environ.get("MINIMAX_API_KEY")
)
```

### 2. Use Environment Variables

#### On Linux/Mac

Add to your `~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`:

```bash
export MINIMAX_API_KEY="your_api_key_here"
export MINIMAX_GROUP_ID="your_group_id_here"
```

Then reload:

```bash
source ~/.bashrc  # or ~/.zshrc
```

#### On Windows

Using Command Prompt:

```cmd
setx MINIMAX_API_KEY "your_api_key_here"
setx MINIMAX_GROUP_ID "your_group_id_here"
```

Using PowerShell:

```powershell
[System.Environment]::SetEnvironmentVariable('MINIMAX_API_KEY', 'your_api_key_here', 'User')
[System.Environment]::SetEnvironmentVariable('MINIMAX_GROUP_ID', 'your_group_id_here', 'User')
```

### 3. Use .env Files (Recommended)

Create a `.env` file in your project root:

```bash
# .env
MINIMAX_API_KEY=your_api_key_here
MINIMAX_GROUP_ID=your_group_id_here
```

**Important**: Add `.env` to your `.gitignore`:

```bash
# .gitignore
.env
```

Load environment variables using a library:

#### Python (python-dotenv)

```bash
pip install python-dotenv
```

```python
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

api_key = os.getenv("MINIMAX_API_KEY")
group_id = os.getenv("MINIMAX_GROUP_ID")
```

#### Node.js (dotenv)

```bash
npm install dotenv
```

```javascript
require('dotenv').config();

const apiKey = process.env.MINIMAX_API_KEY;
const groupId = process.env.MINIMAX_GROUP_ID;
```

### 4. Rotate Keys Regularly

- Generate new API keys periodically
- Delete old/unused keys
- Use different keys for different environments (dev, staging, prod)

### 5. Monitor Usage

- Regularly check your API usage on the platform
- Set up alerts for unusual activity
- Review access logs

## Quick Start Examples

### Python with Anthropic SDK (Recommended)

```python
import os
from dotenv import load_dotenv
import anthropic

# Load environment variables
load_dotenv()

# Initialize client
client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key=os.getenv("MINIMAX_API_KEY")
)

# Make a request
message = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    system="You are a helpful assistant.",
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Hello! Tell me about MiniMax-M2."
                }
            ]
        }
    ]
)

# Print response
for block in message.content:
    if block.type == "text":
        print(block.text)
```

### Python with OpenAI SDK

```python
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

# Initialize client
client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key=os.getenv("MINIMAX_API_KEY")
)

# Make a request
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello! Tell me about MiniMax-M2."}
    ]
)

# Print response
print(response.choices[0].message.content)
```

### Node.js with OpenAI SDK

```javascript
require('dotenv').config();
const OpenAI = require('openai');

// Initialize client
const client = new OpenAI({
    baseURL: 'https://api.minimax.io/v1',
    apiKey: process.env.MINIMAX_API_KEY
});

// Make a request
async function main() {
    const response = await client.chat.completions.create({
        model: 'MiniMax-M2',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Hello! Tell me about MiniMax-M2.' }
        ]
    });
    
    console.log(response.choices[0].message.content);
}

main();
```

### cURL (Direct HTTP)

```bash
curl -X POST "https://api.minimax.io/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $MINIMAX_API_KEY" \
  -d '{
    "model": "MiniMax-M2",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello! Tell me about MiniMax-M2."
      }
    ]
  }'
```

## API Endpoints

### Anthropic-Compatible Endpoint (Recommended)

```
Base URL: https://api.minimax.io/anthropic
```

Endpoints:
- `POST /v1/messages` - Create a message

### OpenAI-Compatible Endpoint

```
Base URL: https://api.minimax.io/v1
```

Endpoints:
- `POST /chat/completions` - Create a chat completion

## Authentication Headers

### OpenAI-Compatible API

```http
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Anthropic-Compatible API

```http
x-api-key: YOUR_API_KEY
Content-Type: application/json
anthropic-version: 2023-06-01
```

When using the SDK, these headers are automatically set.

## Testing Your Setup

### Quick Test Script (Python)

```python
import os
from openai import OpenAI

def test_minimax_connection():
    """Test if MiniMax API credentials are working"""
    try:
        client = OpenAI(
            base_url="https://api.minimax.io/v1",
            api_key=os.getenv("MINIMAX_API_KEY")
        )
        
        response = client.chat.completions.create(
            model="MiniMax-M2",
            messages=[{"role": "user", "content": "Hello!"}],
            max_tokens=50
        )
        
        print("✅ Connection successful!")
        print(f"Response: {response.choices[0].message.content}")
        return True
    except Exception as e:
        print(f"❌ Connection failed: {e}")
        return False

if __name__ == "__main__":
    test_minimax_connection()
```

## Troubleshooting

### Common Errors

#### 1. Invalid API Key

```
Error: 401 Unauthorized
```

**Solution**: 
- Verify your API key is correct
- Ensure no extra spaces or characters
- Check if the key has been revoked

#### 2. Missing API Key

```
Error: API key not provided
```

**Solution**:
- Make sure environment variable is set
- Check the variable name matches what your code expects
- Reload environment variables if just set

#### 3. Rate Limit Exceeded

```
Error: 429 Too Many Requests
```

**Solution**:
- Wait before making more requests
- Implement exponential backoff
- Check your rate limits on the platform

#### 4. Invalid Model Name

```
Error: Model not found
```

**Solution**:
- Use `"MiniMax-M2"` or `"MiniMax-M2-Stable"`
- Check for typos in model name

## Rate Limits

Rate limits are applied per API key and GroupID. Current limits:

- **Requests per minute**: Varies by account type
- **Tokens per minute**: Varies by account type

Check your specific limits on the [MiniMax Platform](https://platform.minimax.io/).

## Account Management

### View Usage

1. Log in to [MiniMax Platform](https://platform.minimax.io/)
2. Navigate to **Usage** or **Dashboard**
3. View your:
   - API calls
   - Token usage
   - Costs

### Manage API Keys

1. Navigate to **Account** → **API Keys**
2. View all your keys
3. Create new keys
4. Delete old/compromised keys

### Billing

1. Navigate to **Billing** section
2. View current usage and costs
3. Update payment methods
4. View invoices

## Next Steps

Now that you're authenticated, explore:

- [Text Generation API Introduction](./01-text-generation-intro.md)
- [Compatible Anthropic API](./02-compatible-anthropic-api.md)
- [Compatible OpenAI API](./03-compatible-openai-api.md)
- [M2 Tool Use & Interleaved Thinking](./04-tool-use-and-thinking.md)

## Source

Documentation compiled from: https://platform.minimax.io/docs/guides/quickstart




