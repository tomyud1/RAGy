# Error Codes Reference

## Overview

This document provides a reference for common error codes you may encounter when using the MiniMax-M2 API, along with their meanings and troubleshooting steps.

## HTTP Status Codes

### 200 OK
**Meaning**: Request successful

**Action**: No action needed - process the response

### 400 Bad Request
**Meaning**: The request was malformed or contains invalid parameters

**Common Causes**:
- Invalid JSON format
- Missing required parameters
- Invalid parameter values
- Incorrect model name

**Example**:
```json
{
  "error": {
    "message": "Invalid parameter: temperature must be between 0.0 and 1.0",
    "type": "invalid_request_error",
    "code": "invalid_parameter"
  }
}
```

**Troubleshooting**:
1. Validate your JSON format
2. Check all required parameters are present
3. Verify parameter values are within acceptable ranges
4. Confirm model name is correct (`"MiniMax-M2"` or `"MiniMax-M2-Stable"`)

**Example Fix**:
```python
# ❌ BAD - Invalid temperature
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=1.5  # Invalid! Must be in (0.0, 1.0]
)

# ✅ GOOD
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=1.0  # Valid
)
```

### 401 Unauthorized
**Meaning**: Authentication failed

**Common Causes**:
- Missing API key
- Invalid API key
- Expired API key
- API key format error

**Example**:
```json
{
  "error": {
    "message": "Invalid API key",
    "type": "authentication_error",
    "code": "invalid_api_key"
  }
}
```

**Troubleshooting**:
1. Verify API key is set correctly
2. Check for extra spaces or characters
3. Ensure environment variables are loaded
4. Regenerate API key if necessary

**Example Fix**:
```python
# ❌ BAD - Hardcoded/wrong API key
client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="wrong_key"
)

# ✅ GOOD - Use environment variable
import os
client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key=os.getenv("MINIMAX_API_KEY")
)
```

### 403 Forbidden
**Meaning**: You don't have permission to access this resource

**Common Causes**:
- API key doesn't have required permissions
- Account restrictions
- Geographic restrictions

**Troubleshooting**:
1. Check account status on MiniMax platform
2. Verify account has access to requested models
3. Contact support if issue persists

### 404 Not Found
**Meaning**: The requested resource doesn't exist

**Common Causes**:
- Incorrect API endpoint
- Wrong model name
- Typo in URL

**Example**:
```json
{
  "error": {
    "message": "Model not found",
    "type": "invalid_request_error",
    "code": "model_not_found"
  }
}
```

**Troubleshooting**:
1. Verify base URL is correct:
   - OpenAI format: `https://api.minimax.io/v1`
   - Anthropic format: `https://api.minimax.io/anthropic`
2. Check model name spelling
3. Ensure model exists and is available

**Example Fix**:
```python
# ❌ BAD - Wrong model name
response = client.chat.completions.create(
    model="MiniMax-2",  # Typo!
    messages=[{"role": "user", "content": "Hello"}]
)

# ✅ GOOD
response = client.chat.completions.create(
    model="MiniMax-M2",  # Correct
    messages=[{"role": "user", "content": "Hello"}]
)
```

### 429 Too Many Requests
**Meaning**: Rate limit exceeded

**Common Causes**:
- Too many requests in short time period
- Exceeded tokens per minute limit
- Concurrent request limit reached

**Example**:
```json
{
  "error": {
    "message": "Rate limit exceeded. Please retry after 60 seconds.",
    "type": "rate_limit_error",
    "code": "rate_limit_exceeded"
  }
}
```

**Troubleshooting**:
1. Implement exponential backoff
2. Reduce request frequency
3. Check rate limits on your account
4. Consider upgrading account tier

**Example Fix - Exponential Backoff**:
```python
import time
from openai import OpenAI, RateLimitError

def make_request_with_retry(client, messages, max_retries=5):
    """Make API request with exponential backoff"""
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="MiniMax-M2",
                messages=messages
            )
            return response
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise
            wait_time = 2 ** attempt  # Exponential backoff
            print(f"Rate limited. Waiting {wait_time}s...")
            time.sleep(wait_time)
```

### 500 Internal Server Error
**Meaning**: Server-side error

**Common Causes**:
- Temporary server issue
- Service outage
- Unexpected error on MiniMax's end

**Troubleshooting**:
1. Retry the request after a short delay
2. Check MiniMax status page
3. If persistent, contact support

**Example Fix**:
```python
from openai import OpenAI, APIError
import time

def make_request_with_retry(client, messages, max_retries=3):
    """Retry on server errors"""
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                model="MiniMax-M2",
                messages=messages
            )
        except APIError as e:
            if e.status_code >= 500 and attempt < max_retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise
```

### 503 Service Unavailable
**Meaning**: Service temporarily unavailable

**Common Causes**:
- Maintenance
- High load
- Temporary outage

**Troubleshooting**:
1. Wait and retry
2. Check status page
3. Implement retry logic

## Common Error Types

### Invalid Request Errors

#### Invalid Temperature
```json
{
  "error": {
    "message": "temperature must be in range (0.0, 1.0]",
    "type": "invalid_request_error",
    "code": "invalid_temperature"
  }
}
```

**Fix**: Use temperature between 0.0 (exclusive) and 1.0 (inclusive)

```python
# ✅ Valid temperatures
temperature=0.1  # OK
temperature=0.5  # OK
temperature=1.0  # OK

# ❌ Invalid temperatures
temperature=0.0  # Too low!
temperature=1.5  # Too high!
```

#### Invalid Messages Format
```json
{
  "error": {
    "message": "messages must be a non-empty array",
    "type": "invalid_request_error",
    "code": "invalid_messages"
  }
}
```

**Fix**: Ensure messages array is properly formatted

```python
# ❌ BAD - Empty messages
messages = []

# ❌ BAD - Wrong format
messages = "Hello"

# ✅ GOOD
messages = [
    {"role": "user", "content": "Hello"}
]
```

#### Context Length Exceeded
```json
{
  "error": {
    "message": "This model's maximum context length is 204800 tokens",
    "type": "invalid_request_error",
    "code": "context_length_exceeded"
  }
}
```

**Fix**: Reduce input size or conversation history

```python
# Truncate conversation history
def truncate_messages(messages, max_messages=20):
    """Keep only recent messages to stay within context limit"""
    if len(messages) > max_messages:
        return messages[-max_messages:]
    return messages

messages = truncate_messages(conversation_history)
```

### Authentication Errors

#### Missing API Key
```json
{
  "error": {
    "message": "No API key provided",
    "type": "authentication_error",
    "code": "missing_api_key"
  }
}
```

**Fix**: Provide API key

```python
import os

# ✅ Correct
api_key = os.getenv("MINIMAX_API_KEY")
if not api_key:
    raise ValueError("MINIMAX_API_KEY environment variable not set")

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key=api_key
)
```

## Error Handling Best Practices

### Complete Error Handling Example

```python
import os
import time
from openai import OpenAI, APIError, RateLimitError, AuthenticationError

def make_api_request(messages, max_retries=3):
    """
    Make API request with comprehensive error handling
    """
    client = OpenAI(
        base_url="https://api.minimax.io/v1",
        api_key=os.getenv("MINIMAX_API_KEY")
    )
    
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="MiniMax-M2",
                messages=messages,
                temperature=1.0,
                max_tokens=1000
            )
            return response
            
        except AuthenticationError as e:
            # Don't retry auth errors
            print(f"❌ Authentication failed: {e}")
            raise
            
        except RateLimitError as e:
            # Exponential backoff for rate limits
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt
                print(f"⏳ Rate limited. Waiting {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"❌ Rate limit exceeded after {max_retries} attempts")
                raise
                
        except APIError as e:
            # Retry server errors
            if e.status_code >= 500 and attempt < max_retries - 1:
                wait_time = 2 ** attempt
                print(f"⏳ Server error. Retrying in {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"❌ API error: {e}")
                raise
                
        except Exception as e:
            # Unexpected errors
            print(f"❌ Unexpected error: {e}")
            raise
    
    return None

# Usage
try:
    response = make_api_request([
        {"role": "user", "content": "Hello!"}
    ])
    print(response.choices[0].message.content)
except Exception as e:
    print(f"Failed to get response: {e}")
```

### Logging Errors

```python
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def make_request_with_logging(client, messages):
    """Make request with detailed logging"""
    try:
        logging.info("Making API request...")
        response = client.chat.completions.create(
            model="MiniMax-M2",
            messages=messages
        )
        logging.info("Request successful")
        return response
        
    except AuthenticationError as e:
        logging.error(f"Authentication error: {e}")
        raise
        
    except RateLimitError as e:
        logging.warning(f"Rate limit hit: {e}")
        raise
        
    except APIError as e:
        logging.error(f"API error (status {e.status_code}): {e}")
        raise
        
    except Exception as e:
        logging.error(f"Unexpected error: {e}", exc_info=True)
        raise
```

## Debugging Tips

### 1. Enable Verbose Logging

```python
import logging

# Enable debug logging for HTTP requests
logging.basicConfig(level=logging.DEBUG)
```

### 2. Inspect Request/Response

```python
# Print request details
print(f"Model: {model}")
print(f"Messages: {messages}")
print(f"Temperature: {temperature}")

# Print response details
print(f"Status: {response.status_code if hasattr(response, 'status_code') else 'OK'}")
print(f"Response: {response}")
```

### 3. Validate Parameters Before Sending

```python
def validate_request(model, messages, temperature=1.0):
    """Validate request parameters before sending"""
    # Check model name
    valid_models = ["MiniMax-M2", "MiniMax-M2-Stable"]
    if model not in valid_models:
        raise ValueError(f"Invalid model: {model}. Must be one of {valid_models}")
    
    # Check messages
    if not messages or not isinstance(messages, list):
        raise ValueError("messages must be a non-empty list")
    
    # Check temperature
    if not (0.0 < temperature <= 1.0):
        raise ValueError(f"temperature must be in (0.0, 1.0], got {temperature}")
    
    return True

# Use validation
validate_request("MiniMax-M2", messages, temperature=1.0)
```

## Getting Additional Help

If you encounter errors not covered here:

1. **Check Official Documentation**: https://platform.minimax.io/docs/
2. **Review API Status**: Check for ongoing issues
3. **Contact Support**: Reach out to MiniMax support with:
   - Error message
   - Request details (without sensitive data)
   - Timestamp
   - Account ID

## Related Documentation

- [Authentication](./06-authentication.md)
- [Compatible Anthropic API](./02-compatible-anthropic-api.md)
- [Compatible OpenAI API](./03-compatible-openai-api.md)

## Source

Documentation compiled from MiniMax API documentation and common error patterns.




