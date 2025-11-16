# Pricing and Rate Limits

## Overview

Understanding pricing and rate limits is essential for building cost-effective and reliable applications with the Moonshot AI Kimi API. This guide covers pricing models, rate limits, and strategies for optimization.

## Pricing Model

### Token-Based Pricing

The Kimi API uses token-based pricing:

- **Prompt Tokens**: Tokens in your input (messages, system prompts, tool definitions)
- **Completion Tokens**: Tokens in the API's response
- **Cached Tokens**: Tokens reused from context cache (significantly discounted)

### Pricing Structure

Pricing varies by model and usage:

| Model | Context Size | Input Price | Output Price | Use Case |
|-------|--------------|-------------|--------------|----------|
| moonshot-v1-8k | 8K tokens | Standard | Standard | Short conversations |
| moonshot-v1-32k | 32K tokens | Standard | Standard | Medium contexts |
| moonshot-v1-128k | 128K tokens | Higher | Higher | Large documents |

**Note**: For exact pricing, please refer to the [official Moonshot AI pricing page](https://platform.moonshot.ai/docs/overview).

### Context Caching Pricing

Cached tokens are charged at a significantly reduced rate:

- **First Request**: Full price for all tokens + caching cost
- **Subsequent Requests**: 
  - Cached tokens: ~10% of normal price
  - New tokens: Full price

**Cost Savings**: Up to 90% reduction for cached content

**Source**: [Context Caching Best Practices](https://platform.moonshot.ai/blog/posts/context-caching)

## Token Estimation

### What is a Token?

- Tokens are pieces of words
- 1 token ≈ 4 characters in English
- 1 token ≈ 1.5-2 characters in Chinese
- 100 tokens ≈ 75 words (English)

### Token Counting

```python
def estimate_tokens(text, chars_per_token=4):
    """Rough estimation of token count"""
    return len(text) // chars_per_token

def estimate_message_tokens(messages):
    """Estimate tokens for message array"""
    total = 0
    
    for message in messages:
        # Content tokens
        total += estimate_tokens(message['content'])
        
        # Overhead tokens (role, formatting)
        total += 4
    
    # Conversation overhead
    total += 3
    
    return total

# Example
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What is machine learning?"}
]

estimated = estimate_message_tokens(messages)
print(f"Estimated tokens: {estimated}")
```

### More Accurate Token Counting

For precise token counting, use a tokenizer library:

```python
# Note: Moonshot may have their own tokenizer
# This is a general example using tiktoken for OpenAI compatibility

import tiktoken

def count_tokens_precisely(text, model="gpt-3.5-turbo"):
    """Count tokens using tokenizer"""
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

def count_message_tokens(messages, model="gpt-3.5-turbo"):
    """Count tokens in message array"""
    encoding = tiktoken.encoding_for_model(model)
    
    total_tokens = 0
    
    for message in messages:
        total_tokens += 4  # Every message has overhead
        for key, value in message.items():
            total_tokens += len(encoding.encode(value))
    
    total_tokens += 2  # Reply priming
    
    return total_tokens
```

## Rate Limits

### Types of Rate Limits

1. **Requests Per Minute (RPM)**: Maximum API calls per minute
2. **Tokens Per Minute (TPM)**: Maximum tokens processed per minute
3. **Concurrent Requests**: Maximum simultaneous requests

### Typical Rate Limits

Rate limits vary by account type and subscription tier. Common limits:

| Tier | RPM | TPM | Concurrent |
|------|-----|-----|------------|
| Free | 20 | 40,000 | 2 |
| Basic | 60 | 150,000 | 5 |
| Pro | 200 | 500,000 | 10 |
| Enterprise | Custom | Custom | Custom |

**Note**: Check your account dashboard for exact limits.

### HTTP Headers

Rate limit information is included in response headers:

```
X-RateLimit-Limit-Requests: 60
X-RateLimit-Remaining-Requests: 45
X-RateLimit-Reset-Requests: 2024-01-01T12:00:00Z

X-RateLimit-Limit-Tokens: 150000
X-RateLimit-Remaining-Tokens: 120000
X-RateLimit-Reset-Tokens: 2024-01-01T12:00:00Z
```

### Monitoring Rate Limits

```python
def make_request_with_rate_limit_check(api_key, messages):
    """Make request and check rate limits"""
    
    response = requests.post(
        "https://api.moonshot.cn/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        },
        json={"model": "moonshot-v1-8k", "messages": messages}
    )
    
    # Check rate limit headers
    if response.status_code == 200:
        headers = response.headers
        
        remaining_requests = headers.get('X-RateLimit-Remaining-Requests')
        remaining_tokens = headers.get('X-RateLimit-Remaining-Tokens')
        
        if remaining_requests:
            print(f"Remaining requests: {remaining_requests}")
        if remaining_tokens:
            print(f"Remaining tokens: {remaining_tokens}")
        
        # Warn if getting close to limit
        if remaining_requests and int(remaining_requests) < 10:
            print("⚠️ Warning: Approaching request rate limit!")
        
        if remaining_tokens and int(remaining_tokens) < 10000:
            print("⚠️ Warning: Approaching token rate limit!")
    
    elif response.status_code == 429:
        # Rate limit exceeded
        retry_after = response.headers.get('Retry-After', 60)
        print(f"❌ Rate limit exceeded. Retry after {retry_after} seconds")
        raise RateLimitError(f"Rate limit exceeded. Retry after {retry_after}s")
    
    return response.json()
```

## Handling Rate Limits

### Strategy 1: Exponential Backoff

```python
import time
import random

def exponential_backoff_request(api_key, messages, max_retries=5):
    """Request with exponential backoff"""
    
    for attempt in range(max_retries):
        try:
            response = make_api_call(api_key, messages)
            return response
        
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise
            
            # Calculate wait time with jitter
            wait_time = (2 ** attempt) + random.uniform(0, 1)
            print(f"Rate limited. Waiting {wait_time:.1f}s before retry {attempt + 1}/{max_retries}")
            time.sleep(wait_time)
    
    raise Exception("Max retries exceeded")
```

### Strategy 2: Token Bucket

```python
import time
from threading import Lock

class TokenBucket:
    """Token bucket rate limiter"""
    
    def __init__(self, requests_per_minute, tokens_per_minute):
        self.rpm = requests_per_minute
        self.tpm = tokens_per_minute
        
        self.request_tokens = requests_per_minute
        self.token_tokens = tokens_per_minute
        
        self.last_update = time.time()
        self.lock = Lock()
    
    def consume(self, estimated_tokens):
        """Try to consume tokens, wait if necessary"""
        
        with self.lock:
            now = time.time()
            
            # Refill tokens based on time passed
            time_passed = now - self.last_update
            self.last_update = now
            
            # Refill requests
            refill_amount = (time_passed / 60) * self.rpm
            self.request_tokens = min(self.rpm, self.request_tokens + refill_amount)
            
            # Refill token budget
            token_refill = (time_passed / 60) * self.tpm
            self.token_tokens = min(self.tpm, self.token_tokens + token_refill)
            
            # Check if we have enough tokens
            if self.request_tokens < 1:
                wait_time = (1 - self.request_tokens) / self.rpm * 60
                print(f"Request rate limit. Waiting {wait_time:.1f}s")
                time.sleep(wait_time)
                return self.consume(estimated_tokens)
            
            if self.token_tokens < estimated_tokens:
                wait_time = (estimated_tokens - self.token_tokens) / self.tpm * 60
                print(f"Token rate limit. Waiting {wait_time:.1f}s")
                time.sleep(wait_time)
                return self.consume(estimated_tokens)
            
            # Consume tokens
            self.request_tokens -= 1
            self.token_tokens -= estimated_tokens
            
            return True

# Usage
bucket = TokenBucket(requests_per_minute=60, tokens_per_minute=150000)

def rate_limited_request(api_key, messages):
    estimated = estimate_message_tokens(messages) + 500  # +500 for completion
    bucket.consume(estimated)
    return make_api_call(api_key, messages)
```

### Strategy 3: Request Queue

```python
import queue
import threading
import time

class RequestQueue:
    """Queue-based rate limiter"""
    
    def __init__(self, requests_per_minute=60):
        self.queue = queue.Queue()
        self.rpm = requests_per_minute
        self.running = True
        
        # Start worker thread
        self.worker = threading.Thread(target=self._process_queue)
        self.worker.daemon = True
        self.worker.start()
    
    def _process_queue(self):
        """Process queued requests at controlled rate"""
        
        while self.running:
            try:
                # Wait for item (with timeout)
                api_call, callback = self.queue.get(timeout=1)
                
                # Execute request
                try:
                    result = api_call()
                    callback(result, None)
                except Exception as e:
                    callback(None, e)
                
                # Rate limiting delay
                time.sleep(60 / self.rpm)
                
            except queue.Empty:
                continue
    
    def enqueue(self, api_call, callback):
        """Add request to queue"""
        self.queue.put((api_call, callback))
    
    def stop(self):
        """Stop processing"""
        self.running = False
        self.worker.join()

# Usage
request_queue = RequestQueue(requests_per_minute=50)

def handle_result(result, error):
    if error:
        print(f"Error: {error}")
    else:
        print(f"Result: {result['choices'][0]['message']['content']}")

# Enqueue requests
for i in range(100):
    api_call = lambda: make_api_call(api_key, [{"role": "user", "content": f"Question {i}"}])
    request_queue.enqueue(api_call, handle_result)
```

## Cost Optimization Strategies

### 1. Use Appropriate Model

```python
def select_cost_effective_model(text):
    """Choose cheapest model that meets needs"""
    
    token_count = estimate_tokens(text)
    
    if token_count < 6000:
        return "moonshot-v1-8k"  # Cheapest
    elif token_count < 30000:
        return "moonshot-v1-32k"  # Moderate
    else:
        return "moonshot-v1-128k"  # Most expensive
```

### 2. Leverage Context Caching

```python
def cost_optimized_query(api_key, large_context, query):
    """Structure for maximum cache benefit"""
    
    # Keep context constant for caching
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Context:\n{large_context}"},
        {"role": "user", "content": query}  # Only this changes
    ]
    
    # Subsequent calls will be ~90% cheaper!
    return make_api_call(api_key, messages, model="moonshot-v1-32k")
```

### 3. Limit Completion Length

```python
def cost_controlled_request(api_key, messages, max_budget_tokens=1000):
    """Limit response length to control costs"""
    
    prompt_tokens = estimate_message_tokens(messages)
    max_completion = max_budget_tokens - prompt_tokens
    
    if max_completion < 50:
        raise ValueError("Not enough token budget for meaningful response")
    
    return make_api_call(
        api_key,
        messages,
        max_tokens=max_completion
    )
```

### 4. Batch Similar Requests

```python
def batch_questions(api_key, context, questions):
    """Process multiple questions efficiently"""
    
    # First request: Cache the context
    results = []
    
    for i, question in enumerate(questions):
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Context:\n{context}"},
            {"role": "user", "content": question}
        ]
        
        # First call caches context
        # Subsequent calls benefit from cache (~90% cheaper on context)
        result = make_api_call(api_key, messages)
        results.append(result)
        
        print(f"Processed {i+1}/{len(questions)}")
        
        # Small delay to avoid rate limits
        if i < len(questions) - 1:
            time.sleep(0.1)
    
    return results
```

### 5. Implement Per-User Quotas

```python
class UserQuotaManager:
    """Manage per-user token quotas"""
    
    def __init__(self):
        self.user_usage = {}
    
    def check_quota(self, user_id, estimated_tokens, daily_limit=100000):
        """Check if user has quota"""
        
        today = datetime.now().date()
        key = f"{user_id}:{today}"
        
        current_usage = self.user_usage.get(key, 0)
        
        if current_usage + estimated_tokens > daily_limit:
            remaining = daily_limit - current_usage
            raise QuotaExceededError(
                f"Daily quota exceeded. Used: {current_usage}, "
                f"Remaining: {remaining}, Requested: {estimated_tokens}"
            )
        
        return True
    
    def record_usage(self, user_id, tokens_used):
        """Record token usage"""
        
        today = datetime.now().date()
        key = f"{user_id}:{today}"
        
        self.user_usage[key] = self.user_usage.get(key, 0) + tokens_used
    
    def get_usage(self, user_id):
        """Get user's usage for today"""
        
        today = datetime.now().date()
        key = f"{user_id}:{today}"
        
        return self.user_usage.get(key, 0)

# Usage
quota_manager = UserQuotaManager()

def user_request(user_id, api_key, messages):
    estimated = estimate_message_tokens(messages) + 500
    
    # Check quota
    quota_manager.check_quota(user_id, estimated)
    
    # Make request
    response = make_api_call(api_key, messages)
    
    # Record actual usage
    actual_tokens = response['usage']['total_tokens']
    quota_manager.record_usage(user_id, actual_tokens)
    
    return response
```

## Cost Monitoring

### Track Costs

```python
class CostTracker:
    """Track API costs"""
    
    def __init__(self, price_per_1k_input=0.001, price_per_1k_output=0.002):
        self.price_input = price_per_1k_input
        self.price_output = price_per_1k_output
        self.total_cost = 0
        self.requests = []
    
    def calculate_cost(self, response):
        """Calculate cost for a response"""
        
        usage = response.get('usage', {})
        prompt_tokens = usage.get('prompt_tokens', 0)
        completion_tokens = usage.get('completion_tokens', 0)
        
        input_cost = (prompt_tokens / 1000) * self.price_input
        output_cost = (completion_tokens / 1000) * self.price_output
        total_cost = input_cost + output_cost
        
        self.total_cost += total_cost
        
        self.requests.append({
            'timestamp': datetime.now(),
            'prompt_tokens': prompt_tokens,
            'completion_tokens': completion_tokens,
            'cost': total_cost
        })
        
        return total_cost
    
    def get_total_cost(self):
        """Get total cost"""
        return self.total_cost
    
    def get_daily_cost(self):
        """Get today's cost"""
        today = datetime.now().date()
        daily_cost = sum(
            r['cost'] for r in self.requests
            if r['timestamp'].date() == today
        )
        return daily_cost

# Usage
tracker = CostTracker()

response = make_api_call(api_key, messages)
cost = tracker.calculate_cost(response)
print(f"Request cost: ${cost:.4f}")
print(f"Total cost: ${tracker.get_total_cost():.4f}")
```

## Best Practices

1. **Monitor Usage**: Track tokens and costs in real-time
2. **Set Budgets**: Implement per-user and total quotas
3. **Optimize Prompts**: Keep prompts concise but clear
4. **Use Caching**: Structure requests for maximum cache benefit
5. **Choose Right Model**: Don't use 128k model for 1k contexts
6. **Limit Completions**: Set reasonable max_tokens
7. **Batch Requests**: Group similar queries for cache benefits
8. **Handle Rate Limits**: Implement proper retry logic
9. **Alert on Anomalies**: Set up alerts for unusual usage
10. **Regular Audits**: Review and optimize usage patterns

## Next Steps

- Review [Best Practices](06-best-practices.md)
- Explore [Context Caching](04-context-caching.md)
- Check [Error Handling](08-error-handling.md)

## References

- [Official Documentation](https://platform.moonshot.ai/docs/overview)
- [Context Caching](https://platform.moonshot.ai/blog/posts/context-caching)



