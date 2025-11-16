# Best Practices

## Overview

This guide provides best practices for using the Moonshot AI Kimi API effectively in production environments. Following these guidelines will help you build robust, efficient, and cost-effective applications.

## API Key Management

### Security

**DO:**
- Store API keys in environment variables or secure vaults
- Use different keys for development, staging, and production
- Rotate keys regularly (e.g., quarterly)
- Implement key-based access logging

**DON'T:**
- Hard-code keys in source code
- Commit keys to version control
- Expose keys in client-side code
- Share keys across teams or projects

### Implementation

```python
# Good: Environment variables
import os
api_key = os.environ.get('MOONSHOT_API_KEY')

# Good: Configuration file (not in version control)
from config import MOONSHOT_API_KEY

# Bad: Hard-coded
api_key = "sk-1234567890abcdef"  # NEVER DO THIS
```

```javascript
// Good: Environment variables (Node.js)
const apiKey = process.env.MOONSHOT_API_KEY;

// Good: Server-side proxy for frontend
app.post('/api/chat', async (req, res) => {
  const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
    headers: { 'Authorization': `Bearer ${process.env.MOONSHOT_API_KEY}` },
    body: JSON.stringify(req.body)
  });
  res.json(await response.json());
});
```

## Token Optimization

### 1. Choose the Right Model

Select model size based on actual context needs:

```python
def select_model(context_length):
    """Choose appropriate model based on context"""
    if context_length < 6000:
        return "moonshot-v1-8k"
    elif context_length < 30000:
        return "moonshot-v1-32k"
    else:
        return "moonshot-v1-128k"

# Usage
text = "..."
token_count = estimate_tokens(text)
model = select_model(token_count)
```

### 2. Use Context Caching

Structure requests to maximize cache hits:

```python
# Good: Cacheable structure
messages = [
    {"role": "system", "content": CONSTANT_SYSTEM_PROMPT},
    {"role": "user", "content": LARGE_REFERENCE_DOC},
    {"role": "user", "content": variable_query}
]

# Bad: Random order, frequent changes
messages = [
    {"role": "user", "content": f"{timestamp} - {random_id}"},
    {"role": "system", "content": slightly_modified_prompt},
    {"role": "user", "content": LARGE_REFERENCE_DOC}
]
```

### 3. Manage Conversation History

Trim conversation history to stay within token limits:

```python
def trim_conversation_history(messages, max_tokens=6000):
    """Keep only recent messages within token limit"""
    
    # Always keep system message
    system_messages = [m for m in messages if m['role'] == 'system']
    other_messages = [m for m in messages if m['role'] != 'system']
    
    # Estimate tokens
    total_tokens = sum(estimate_tokens(m['content']) for m in messages)
    
    # Remove oldest messages if needed
    while total_tokens > max_tokens and len(other_messages) > 2:
        removed = other_messages.pop(0)
        total_tokens -= estimate_tokens(removed['content'])
    
    return system_messages + other_messages
```

### 4. Summarize Long Contexts

```python
def summarize_and_continue(api_key, conversation_history):
    """Summarize old conversation to save tokens"""
    
    if len(conversation_history) > 20:
        # Summarize first 15 messages
        old_messages = conversation_history[:15]
        recent_messages = conversation_history[15:]
        
        # Get summary
        summary = get_summary(api_key, old_messages)
        
        # Reconstruct with summary
        return [
            {"role": "system", "content": f"Previous conversation summary: {summary}"},
            *recent_messages
        ]
    
    return conversation_history
```

## Error Handling

### Comprehensive Error Handling

```python
import time
import requests
from requests.exceptions import RequestException, Timeout, ConnectionError

def robust_api_call(api_key, messages, max_retries=3, base_delay=1):
    """API call with comprehensive error handling"""
    
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
                timeout=30
            )
            
            # Handle HTTP errors
            if response.status_code == 429:
                # Rate limit - wait longer
                wait_time = base_delay * (2 ** attempt) * 2
                print(f"Rate limited. Waiting {wait_time}s...")
                time.sleep(wait_time)
                continue
            
            elif response.status_code == 500:
                # Server error - retry with backoff
                wait_time = base_delay * (2 ** attempt)
                print(f"Server error. Retrying in {wait_time}s...")
                time.sleep(wait_time)
                continue
            
            elif response.status_code == 401:
                # Auth error - don't retry
                raise ValueError("Invalid API key")
            
            elif response.status_code != 200:
                # Other errors
                error_data = response.json()
                raise Exception(f"API error: {error_data}")
            
            # Success
            return response.json()
        
        except Timeout:
            if attempt == max_retries - 1:
                raise
            print(f"Timeout. Retrying... ({attempt + 1}/{max_retries})")
            time.sleep(base_delay * (2 ** attempt))
        
        except ConnectionError:
            if attempt == max_retries - 1:
                raise
            print(f"Connection error. Retrying... ({attempt + 1}/{max_retries})")
            time.sleep(base_delay * (2 ** attempt))
        
        except RequestException as e:
            # Other request errors
            if attempt == max_retries - 1:
                raise
            print(f"Request failed: {e}. Retrying...")
            time.sleep(base_delay * (2 ** attempt))
    
    raise Exception("Max retries exceeded")

# Usage
try:
    result = robust_api_call(api_key, messages)
    print(result['choices'][0]['message']['content'])
except Exception as e:
    print(f"Failed to get response: {e}")
```

### Specific Error Types

```python
class MoonshotAPIError(Exception):
    """Base exception for Moonshot API errors"""
    pass

class RateLimitError(MoonshotAPIError):
    """Rate limit exceeded"""
    pass

class AuthenticationError(MoonshotAPIError):
    """Invalid API key"""
    pass

class ServerError(MoonshotAPIError):
    """Server-side error"""
    pass

def handle_api_response(response):
    """Handle different error types appropriately"""
    
    if response.status_code == 200:
        return response.json()
    
    elif response.status_code == 429:
        retry_after = response.headers.get('Retry-After', 60)
        raise RateLimitError(f"Rate limit exceeded. Retry after {retry_after}s")
    
    elif response.status_code == 401:
        raise AuthenticationError("Invalid API key")
    
    elif response.status_code >= 500:
        raise ServerError(f"Server error: {response.status_code}")
    
    else:
        raise MoonshotAPIError(f"API error: {response.status_code}")
```

## Rate Limiting

### Implement Client-Side Rate Limiting

```python
import time
from collections import deque
from threading import Lock

class RateLimiter:
    """Token bucket rate limiter"""
    
    def __init__(self, requests_per_minute=60):
        self.requests_per_minute = requests_per_minute
        self.requests = deque()
        self.lock = Lock()
    
    def wait_if_needed(self):
        """Wait if rate limit would be exceeded"""
        with self.lock:
            now = time.time()
            
            # Remove requests older than 1 minute
            while self.requests and now - self.requests[0] > 60:
                self.requests.popleft()
            
            # Check if at limit
            if len(self.requests) >= self.requests_per_minute:
                # Calculate wait time
                oldest = self.requests[0]
                wait_time = 60 - (now - oldest)
                
                if wait_time > 0:
                    print(f"Rate limit reached. Waiting {wait_time:.1f}s...")
                    time.sleep(wait_time)
                    now = time.time()
                    
                    # Clean old requests again
                    while self.requests and now - self.requests[0] > 60:
                        self.requests.popleft()
            
            # Record this request
            self.requests.append(now)

# Usage
limiter = RateLimiter(requests_per_minute=50)

def make_api_call(api_key, messages):
    limiter.wait_if_needed()
    return robust_api_call(api_key, messages)
```

## Prompt Engineering

### System Prompts

Craft clear, specific system prompts:

```python
# Good: Specific, clear instructions
system_prompt = """You are a helpful Python coding assistant.

Guidelines:
1. Provide clear, well-commented code
2. Follow PEP 8 style guidelines
3. Explain complex logic
4. Suggest best practices
5. Include error handling

Always format code with proper syntax highlighting."""

# Bad: Vague, general
system_prompt = "You are helpful."
```

### User Prompts

Structure prompts for best results:

```python
# Good: Structured, specific
user_prompt = """Task: Implement a binary search function

Requirements:
- Input: sorted list and target value
- Output: index of target or -1 if not found
- Use iterative approach (not recursive)
- Include docstring and type hints
- Add example usage

Please provide the complete implementation."""

# Bad: Unclear, vague
user_prompt = "Write binary search code"
```

### Temperature Selection

Choose appropriate temperature for use case:

```python
def get_temperature_for_task(task_type):
    """Select temperature based on task"""
    
    temperatures = {
        'code_generation': 0.2,      # Deterministic, correct
        'factual_qa': 0.3,            # Accurate, consistent
        'general_chat': 0.7,          # Balanced
        'creative_writing': 1.0,      # Creative, varied
        'brainstorming': 1.2          # Very creative
    }
    
    return temperatures.get(task_type, 0.7)
```

## Tool Usage Optimization

### Efficient Tool Definitions

```python
# Good: Clear, concise, well-structured
weather_tool = {
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current weather and forecast. Returns temperature, conditions, and 3-day forecast.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name or 'city, country' (e.g., 'Tokyo' or 'Paris, France')"
                },
                "units": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"],
                    "description": "Temperature units",
                    "default": "celsius"
                }
            },
            "required": ["location"]
        }
    }
}

# Bad: Vague, ambiguous
weather_tool = {
    "type": "function",
    "function": {
        "name": "weather",
        "description": "weather info",
        "parameters": {"type": "object", "properties": {"loc": {"type": "string"}}}
    }
}
```

### Default Behavior (No Thought Process)

For production efficiency, use default tool behavior:

```python
# Default: Direct tool invocation (efficient, saves tokens)
response = make_api_call(api_key, messages, tools)

# No special configuration needed - model will directly call tools
```

### Enable Thought Process for Debugging

When debugging, configure to see reasoning:

```python
# For debugging: See thought process
messages = [
    {
        "role": "system",
        "content": "When using tools, explain your reasoning step by step before and after tool invocation."
    },
    {"role": "user", "content": user_query}
]
```

## Monitoring and Logging

### Track API Usage

```python
import logging
from datetime import datetime

class APIMonitor:
    """Monitor API usage and performance"""
    
    def __init__(self):
        self.logger = logging.getLogger('moonshot_api')
        self.requests = []
    
    def log_request(self, messages, response, duration):
        """Log API request details"""
        
        usage = response.get('usage', {})
        
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'model': response.get('model'),
            'prompt_tokens': usage.get('prompt_tokens', 0),
            'completion_tokens': usage.get('completion_tokens', 0),
            'total_tokens': usage.get('total_tokens', 0),
            'duration': duration,
            'finish_reason': response['choices'][0].get('finish_reason')
        }
        
        self.requests.append(log_entry)
        self.logger.info(f"API request: {log_entry}")
    
    def get_stats(self):
        """Get usage statistics"""
        if not self.requests:
            return {}
        
        total_tokens = sum(r['total_tokens'] for r in self.requests)
        avg_duration = sum(r['duration'] for r in self.requests) / len(self.requests)
        
        return {
            'total_requests': len(self.requests),
            'total_tokens': total_tokens,
            'avg_tokens_per_request': total_tokens / len(self.requests),
            'avg_duration': avg_duration
        }

# Usage
monitor = APIMonitor()

start = time.time()
response = make_api_call(api_key, messages)
duration = time.time() - start

monitor.log_request(messages, response, duration)
```

## Testing

### Unit Tests

```python
import unittest
from unittest.mock import patch, Mock

class TestMoonshotAPI(unittest.TestCase):
    
    @patch('requests.post')
    def test_successful_request(self, mock_post):
        """Test successful API request"""
        
        # Mock response
        mock_response = Mock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            'choices': [{'message': {'content': 'Test response'}}]
        }
        mock_post.return_value = mock_response
        
        # Test
        result = robust_api_call('test_key', [{'role': 'user', 'content': 'test'}])
        
        self.assertEqual(result['choices'][0]['message']['content'], 'Test response')
    
    @patch('requests.post')
    def test_rate_limit_retry(self, mock_post):
        """Test rate limit handling"""
        
        # Mock rate limit then success
        mock_response_1 = Mock()
        mock_response_1.status_code = 429
        
        mock_response_2 = Mock()
        mock_response_2.status_code = 200
        mock_response_2.json.return_value = {'choices': [{'message': {'content': 'Success'}}]}
        
        mock_post.side_effect = [mock_response_1, mock_response_2]
        
        # Test
        result = robust_api_call('test_key', [{'role': 'user', 'content': 'test'}])
        
        self.assertEqual(result['choices'][0]['message']['content'], 'Success')
        self.assertEqual(mock_post.call_count, 2)
```

## Production Checklist

### Before Deployment

- [ ] API keys stored securely (environment variables, vault)
- [ ] Error handling implemented for all API calls
- [ ] Rate limiting configured appropriately
- [ ] Retry logic with exponential backoff
- [ ] Request timeouts set
- [ ] Logging and monitoring in place
- [ ] Token usage optimization
- [ ] Context caching configured (if applicable)
- [ ] Tool definitions tested and validated
- [ ] Fallback strategies for API failures
- [ ] Cost monitoring and alerting
- [ ] User input validation and sanitization
- [ ] Response validation before use

### Monitoring Metrics

Track these metrics in production:

- Total API requests
- Average response time
- Token usage (prompt, completion, total)
- Error rates by type
- Rate limit hits
- Cache hit rates (if using caching)
- Cost per request
- User satisfaction metrics

## Cost Optimization

### Strategies

1. **Use Context Caching**: Up to 90% cost reduction
2. **Choose Right Model**: Don't use 128k for 1k contexts
3. **Optimize Prompts**: Shorter prompts = lower cost
4. **Batch Similar Requests**: Maximize cache benefits
5. **Set max_tokens**: Prevent runaway costs
6. **Monitor Usage**: Track and alert on high usage
7. **Implement Quotas**: Per-user or per-session limits

```python
def cost_optimized_request(api_key, messages, task_complexity='simple'):
    """Make cost-optimized API request"""
    
    # Select model based on complexity
    model = {
        'simple': 'moonshot-v1-8k',
        'moderate': 'moonshot-v1-32k',
        'complex': 'moonshot-v1-128k'
    }[task_complexity]
    
    # Set appropriate max_tokens
    max_tokens = {
        'simple': 500,
        'moderate': 1500,
        'complex': 3000
    }[task_complexity]
    
    # Trim history to save tokens
    trimmed_messages = trim_conversation_history(messages)
    
    return make_api_call(
        api_key,
        trimmed_messages,
        model=model,
        max_tokens=max_tokens
    )
```

## Next Steps

- Review [Error Handling](08-error-handling.md)
- Explore [Pricing and Rate Limits](07-pricing-rate-limits.md)
- Check [API Reference](02-chat-completions.md)

## References

- [Official Documentation](https://platform.moonshot.ai/docs/overview)
- [Context Caching](04-context-caching.md)
- [Tool Usage](03-tools-function-calling.md)



