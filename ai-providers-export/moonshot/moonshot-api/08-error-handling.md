# Error Handling

## Overview

Robust error handling is essential for building reliable applications with the Moonshot AI Kimi API. This guide covers common errors, how to handle them, and best practices for error recovery.

## HTTP Status Codes

### 2xx Success

| Code | Meaning | Action |
|------|---------|--------|
| 200 | OK | Request successful, process response |
| 201 | Created | Resource created successfully |

### 4xx Client Errors

| Code | Meaning | Common Causes | Action |
|------|---------|---------------|--------|
| 400 | Bad Request | Invalid JSON, missing required fields | Validate request format |
| 401 | Unauthorized | Invalid or missing API key | Check API key |
| 403 | Forbidden | API key lacks permissions | Check account status |
| 404 | Not Found | Invalid endpoint | Verify URL |
| 413 | Payload Too Large | Request exceeds size limit | Reduce request size |
| 422 | Unprocessable Entity | Validation error | Check parameter values |
| 429 | Too Many Requests | Rate limit exceeded | Implement retry with backoff |

### 5xx Server Errors

| Code | Meaning | Action |
|------|---------|--------|
| 500 | Internal Server Error | Retry after delay |
| 502 | Bad Gateway | Retry after delay |
| 503 | Service Unavailable | Retry after longer delay |
| 504 | Gateway Timeout | Retry with increased timeout |

## Error Response Format

```json
{
  "error": {
    "message": "Invalid API key provided",
    "type": "invalid_request_error",
    "code": "invalid_api_key"
  }
}
```

## Common Error Types

### 1. Authentication Errors (401)

**Cause**: Invalid, missing, or expired API key

```python
class AuthenticationError(Exception):
    """API authentication failed"""
    pass

def handle_auth_error(response):
    """Handle authentication errors"""
    if response.status_code == 401:
        error_data = response.json()
        message = error_data.get('error', {}).get('message', 'Authentication failed')
        
        # Don't retry - fix API key
        raise AuthenticationError(f"Authentication failed: {message}")
```

**Solution**:
- Verify API key is correct
- Check if key is properly formatted
- Ensure key hasn't been revoked
- Verify key has necessary permissions

### 2. Rate Limit Errors (429)

**Cause**: Exceeded requests per minute or tokens per minute

```python
import time

class RateLimitError(Exception):
    """Rate limit exceeded"""
    def __init__(self, message, retry_after=None):
        super().__init__(message)
        self.retry_after = retry_after

def handle_rate_limit(response):
    """Handle rate limit errors"""
    if response.status_code == 429:
        # Get retry-after header
        retry_after = response.headers.get('Retry-After', 60)
        
        try:
            retry_after = int(retry_after)
        except ValueError:
            retry_after = 60
        
        raise RateLimitError(
            f"Rate limit exceeded. Retry after {retry_after}s",
            retry_after=retry_after
        )

def retry_with_rate_limit(api_call, max_retries=3):
    """Retry API call with rate limit handling"""
    
    for attempt in range(max_retries):
        try:
            return api_call()
        
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise
            
            print(f"Rate limited. Waiting {e.retry_after}s...")
            time.sleep(e.retry_after)
            
            # Add extra buffer
            time.sleep(1)
```

**Solution**:
- Implement exponential backoff
- Respect Retry-After header
- Reduce request frequency
- Implement request queuing
- Consider upgrading account tier

### 3. Context Length Errors

**Cause**: Total tokens exceed model's context window

```python
class ContextLengthError(Exception):
    """Context length exceeded"""
    pass

def handle_context_length_error(response):
    """Handle context length errors"""
    if response.status_code == 400:
        error_data = response.json()
        error_message = error_data.get('error', {}).get('message', '')
        
        if 'context' in error_message.lower() or 'token' in error_message.lower():
            raise ContextLengthError(
                f"Context length exceeded: {error_message}"
            )

def handle_long_context(api_key, messages, model="moonshot-v1-8k"):
    """Handle potentially long contexts"""
    
    # Estimate tokens
    estimated_tokens = estimate_message_tokens(messages)
    
    # Model limits
    limits = {
        "moonshot-v1-8k": 8000,
        "moonshot-v1-32k": 32000,
        "moonshot-v1-128k": 128000
    }
    
    limit = limits.get(model, 8000)
    
    if estimated_tokens > limit * 0.9:  # 90% of limit
        # Try larger model
        if model == "moonshot-v1-8k":
            print("Context too large, switching to moonshot-v1-32k")
            return make_api_call(api_key, messages, model="moonshot-v1-32k")
        elif model == "moonshot-v1-32k":
            print("Context too large, switching to moonshot-v1-128k")
            return make_api_call(api_key, messages, model="moonshot-v1-128k")
        else:
            # Trim messages
            print("Context too large, trimming history")
            trimmed = trim_conversation_history(messages, max_tokens=limit * 0.8)
            return make_api_call(api_key, trimmed, model=model)
    
    return make_api_call(api_key, messages, model=model)
```

**Solution**:
- Use larger context model
- Trim conversation history
- Summarize old messages
- Split into multiple requests

### 4. Timeout Errors

**Cause**: Request takes too long to complete

```python
import requests
from requests.exceptions import Timeout

class TimeoutError(Exception):
    """Request timeout"""
    pass

def request_with_timeout(api_key, messages, timeout=30, max_retries=3):
    """Make request with timeout handling"""
    
    url = "https://api.moonshot.cn/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    for attempt in range(max_retries):
        try:
            response = requests.post(
                url,
                headers=headers,
                json={"model": "moonshot-v1-8k", "messages": messages},
                timeout=timeout
            )
            return response.json()
        
        except Timeout:
            if attempt == max_retries - 1:
                raise TimeoutError(f"Request timed out after {timeout}s")
            
            # Increase timeout for retry
            timeout = timeout * 1.5
            print(f"Timeout. Retrying with {timeout}s timeout...")
```

**Solution**:
- Increase timeout value
- Retry with longer timeout
- Reduce request complexity
- Use streaming for long responses

### 5. Server Errors (5xx)

**Cause**: Temporary server-side issues

```python
class ServerError(Exception):
    """Server-side error"""
    pass

def handle_server_error(response):
    """Handle server errors"""
    if response.status_code >= 500:
        error_data = response.json() if response.content else {}
        message = error_data.get('error', {}).get('message', 'Server error')
        
        raise ServerError(
            f"Server error ({response.status_code}): {message}"
        )

def retry_on_server_error(api_call, max_retries=3, base_delay=2):
    """Retry on server errors"""
    
    for attempt in range(max_retries):
        try:
            return api_call()
        
        except ServerError as e:
            if attempt == max_retries - 1:
                raise
            
            # Exponential backoff
            wait_time = base_delay * (2 ** attempt)
            print(f"Server error. Retrying in {wait_time}s... ({attempt + 1}/{max_retries})")
            time.sleep(wait_time)
```

**Solution**:
- Retry with exponential backoff
- Wait longer between retries
- Check API status page
- Contact support if persistent

### 6. Validation Errors (400, 422)

**Cause**: Invalid request parameters

```python
class ValidationError(Exception):
    """Request validation failed"""
    pass

def handle_validation_error(response):
    """Handle validation errors"""
    if response.status_code in [400, 422]:
        error_data = response.json()
        error = error_data.get('error', {})
        message = error.get('message', 'Validation failed')
        
        # Don't retry - fix the request
        raise ValidationError(f"Validation error: {message}")

def validate_request(messages, model="moonshot-v1-8k", temperature=0.7):
    """Validate request parameters before sending"""
    
    # Validate messages
    if not messages:
        raise ValidationError("Messages array cannot be empty")
    
    for i, message in enumerate(messages):
        if 'role' not in message:
            raise ValidationError(f"Message {i} missing 'role' field")
        
        if 'content' not in message:
            raise ValidationError(f"Message {i} missing 'content' field")
        
        if message['role'] not in ['system', 'user', 'assistant', 'tool']:
            raise ValidationError(f"Message {i} has invalid role: {message['role']}")
    
    # Validate temperature
    if not 0.0 <= temperature <= 2.0:
        raise ValidationError(f"Temperature must be between 0.0 and 2.0, got {temperature}")
    
    # Validate model
    valid_models = ["moonshot-v1-8k", "moonshot-v1-32k", "moonshot-v1-128k"]
    if model not in valid_models:
        raise ValidationError(f"Invalid model: {model}")
    
    return True
```

**Solution**:
- Validate parameters before sending
- Check API documentation
- Ensure proper JSON formatting
- Verify all required fields present

## Comprehensive Error Handler

```python
import requests
import time
from requests.exceptions import Timeout, ConnectionError, RequestException

class MoonshotAPIError(Exception):
    """Base exception for Moonshot API errors"""
    pass

class APIErrorHandler:
    """Comprehensive API error handler"""
    
    def __init__(self, max_retries=3, base_delay=1):
        self.max_retries = max_retries
        self.base_delay = base_delay
    
    def make_request(self, api_key, messages, model="moonshot-v1-8k", **kwargs):
        """Make API request with comprehensive error handling"""
        
        url = "https://api.moonshot.cn/v1/chat/completions"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        }
        
        # Validate before sending
        try:
            validate_request(messages, model)
        except ValidationError as e:
            print(f"❌ Validation error: {e}")
            raise
        
        # Retry loop
        for attempt in range(self.max_retries):
            try:
                response = requests.post(
                    url,
                    headers=headers,
                    json={
                        "model": model,
                        "messages": messages,
                        **kwargs
                    },
                    timeout=30
                )
                
                return self._handle_response(response)
            
            except Timeout:
                if attempt == self.max_retries - 1:
                    print("❌ Request timed out after multiple retries")
                    raise MoonshotAPIError("Request timeout")
                
                wait_time = self.base_delay * (2 ** attempt)
                print(f"⏱️ Timeout. Retrying in {wait_time}s... ({attempt + 1}/{self.max_retries})")
                time.sleep(wait_time)
            
            except ConnectionError:
                if attempt == self.max_retries - 1:
                    print("❌ Connection failed after multiple retries")
                    raise MoonshotAPIError("Connection failed")
                
                wait_time = self.base_delay * (2 ** attempt)
                print(f"🔌 Connection error. Retrying in {wait_time}s...")
                time.sleep(wait_time)
            
            except RequestException as e:
                print(f"❌ Request exception: {e}")
                raise MoonshotAPIError(f"Request failed: {e}")
    
    def _handle_response(self, response):
        """Handle API response"""
        
        # Success
        if response.status_code == 200:
            return response.json()
        
        # Authentication error
        elif response.status_code == 401:
            print("❌ Authentication failed - check API key")
            raise MoonshotAPIError("Invalid API key")
        
        # Rate limit
        elif response.status_code == 429:
            retry_after = response.headers.get('Retry-After', 60)
            print(f"⏱️ Rate limited. Need to wait {retry_after}s")
            raise RateLimitError(f"Rate limit exceeded", retry_after=int(retry_after))
        
        # Validation error
        elif response.status_code in [400, 422]:
            error_data = response.json()
            message = error_data.get('error', {}).get('message', 'Validation failed')
            print(f"❌ Validation error: {message}")
            raise ValidationError(message)
        
        # Server error (retriable)
        elif response.status_code >= 500:
            print(f"❌ Server error: {response.status_code}")
            raise ServerError(f"Server error: {response.status_code}")
        
        # Other error
        else:
            error_data = response.json() if response.content else {}
            message = error_data.get('error', {}).get('message', 'Unknown error')
            print(f"❌ API error ({response.status_code}): {message}")
            raise MoonshotAPIError(f"API error ({response.status_code}): {message}")

# Usage
handler = APIErrorHandler(max_retries=3)

try:
    result = handler.make_request(
        api_key="YOUR_API_KEY",
        messages=[
            {"role": "user", "content": "Hello"}
        ],
        temperature=0.7
    )
    print(result['choices'][0]['message']['content'])

except MoonshotAPIError as e:
    print(f"Failed to get response: {e}")
```

## Error Logging

### Basic Logging

```python
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('moonshot_api.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger('moonshot_api')

def logged_api_call(api_key, messages):
    """API call with logging"""
    
    logger.info(f"Making API request with {len(messages)} messages")
    
    try:
        response = make_api_call(api_key, messages)
        logger.info(f"Request successful. Tokens used: {response['usage']['total_tokens']}")
        return response
    
    except RateLimitError as e:
        logger.warning(f"Rate limit exceeded: {e}")
        raise
    
    except AuthenticationError as e:
        logger.error(f"Authentication failed: {e}")
        raise
    
    except MoonshotAPIError as e:
        logger.error(f"API error: {e}")
        raise
    
    except Exception as e:
        logger.exception(f"Unexpected error: {e}")
        raise
```

### Structured Logging

```python
import json
from datetime import datetime

class StructuredLogger:
    """Structured JSON logging"""
    
    def __init__(self, log_file='api_logs.jsonl'):
        self.log_file = log_file
    
    def log_request(self, messages, response=None, error=None, duration=None):
        """Log request in structured format"""
        
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'message_count': len(messages),
            'duration': duration
        }
        
        if response:
            log_entry['status'] = 'success'
            log_entry['model'] = response.get('model')
            log_entry['usage'] = response.get('usage')
        
        if error:
            log_entry['status'] = 'error'
            log_entry['error_type'] = type(error).__name__
            log_entry['error_message'] = str(error)
        
        # Write to file
        with open(self.log_file, 'a') as f:
            f.write(json.dumps(log_entry) + '\n')

# Usage
logger = StructuredLogger()

start_time = time.time()
try:
    response = make_api_call(api_key, messages)
    duration = time.time() - start_time
    logger.log_request(messages, response=response, duration=duration)
except Exception as e:
    duration = time.time() - start_time
    logger.log_request(messages, error=e, duration=duration)
    raise
```

## Fallback Strategies

### 1. Graceful Degradation

```python
def get_response_with_fallback(api_key, messages):
    """Try multiple strategies"""
    
    strategies = [
        # Strategy 1: Full context
        lambda: make_api_call(api_key, messages, model="moonshot-v1-8k"),
        
        # Strategy 2: Trimmed context
        lambda: make_api_call(api_key, trim_conversation_history(messages), model="moonshot-v1-8k"),
        
        # Strategy 3: Only last message
        lambda: make_api_call(api_key, messages[-2:], model="moonshot-v1-8k"),
    ]
    
    for i, strategy in enumerate(strategies, 1):
        try:
            print(f"Trying strategy {i}...")
            return strategy()
        except Exception as e:
            print(f"Strategy {i} failed: {e}")
            if i == len(strategies):
                raise
            continue
```

### 2. Default Responses

```python
DEFAULT_RESPONSES = {
    'greeting': "Hello! How can I help you today?",
    'error': "I apologize, but I'm having trouble processing your request right now. Please try again later.",
    'rate_limit': "I'm experiencing high demand right now. Please try again in a moment."
}

def get_response_or_default(api_key, messages, intent='general'):
    """Get response or return default"""
    
    try:
        response = make_api_call(api_key, messages)
        return response['choices'][0]['message']['content']
    
    except RateLimitError:
        return DEFAULT_RESPONSES['rate_limit']
    
    except MoonshotAPIError:
        return DEFAULT_RESPONSES['error']
    
    except Exception:
        return DEFAULT_RESPONSES.get(intent, DEFAULT_RESPONSES['error'])
```

## Best Practices

1. **Always Handle Errors**: Never let exceptions crash your application
2. **Log Everything**: Comprehensive logging helps debugging
3. **Implement Retries**: Use exponential backoff for transient errors
4. **Validate Early**: Catch errors before making API calls
5. **Monitor Errors**: Track error rates and types
6. **User-Friendly Messages**: Don't expose technical errors to users
7. **Fallback Strategies**: Have backup plans for failures
8. **Set Timeouts**: Prevent hanging requests
9. **Rate Limit Handling**: Respect API limits
10. **Test Error Paths**: Test how your app handles errors

## Next Steps

- Review [Best Practices](06-best-practices.md)
- Learn about [Rate Limits](07-pricing-rate-limits.md)
- Explore [Streaming](05-streaming.md)

## References

- [Official Documentation](https://platform.moonshot.ai/docs/overview)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)



