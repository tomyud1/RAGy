# Context Caching

## Overview

Context Caching is a powerful feature offered by Moonshot AI that optimizes performance and reduces costs for applications with frequent requests involving large, repetitive initial contexts. By reusing cached content, you can achieve significant cost savings and improved response times.

**Sources**: 
- [Introduction to Context Caching](https://platform.moonshot.ai/blog/posts/introduction-to-context-caching)
- [Context Caching](https://platform.moonshot.ai/blog/posts/context-caching)

## Key Benefits

### 💰 Cost Savings

- **Up to 90% reduction** in API call costs
- Particularly effective for scenarios with large, repeated contexts
- Cached tokens are charged at a significantly lower rate

### ⚡ Performance Improvements

- **~83% decrease** in time to first token
- Substantially reduced API response times
- Faster user experience for repeated queries

### 📊 Use Case Optimization

Ideal for:
- Chat applications with long conversation histories
- Document Q&A systems with large reference documents
- Repeated analysis of the same codebase
- Applications with consistent system prompts and context

## How It Works

Context Caching works by storing frequently used prompt prefixes on Moonshot's servers. When you make subsequent requests with the same prefix, the cached version is reused instead of reprocessing the entire context.

### Caching Workflow

1. **First Request**: Full context is processed and cached
2. **Subsequent Requests**: Cached context is reused, only new content is processed
3. **Cache Hit**: Significant reduction in tokens processed and time
4. **Cache Expiration**: Cached content expires after a set time period

## When to Use Context Caching

### ✅ Ideal Scenarios

- **Long System Prompts**: Consistent instructions across requests
- **Large Reference Documents**: Same document queried multiple times
- **Conversation History**: Long chat histories referenced repeatedly
- **Tool Definitions**: Extensive tool schemas used in every request
- **Code Analysis**: Repeated queries about the same codebase
- **FAQ Systems**: Same knowledge base queried frequently

### ❌ Not Recommended For

- Single, one-off requests
- Highly dynamic contexts that change every request
- Short prompts (minimal benefit)
- Infrequent API calls

## Implementation Guide

### Basic Structure

Structure your messages to maximize caching benefits:

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {
      "role": "system",
      "content": "LARGE SYSTEM PROMPT THAT STAYS CONSTANT..."
    },
    {
      "role": "user",
      "content": "LARGE REFERENCE DOCUMENT OR CONTEXT..."
    },
    {
      "role": "user",
      "content": "Specific question that changes per request"
    }
  ]
}
```

### Example: Document Q&A System

```python
import requests

def query_document(api_key, document_text, question):
    """Query a large document with caching optimization"""
    
    url = "https://api.moonshot.cn/v1/chat/completions"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    # Structure messages for optimal caching
    messages = [
        {
            "role": "system",
            "content": "You are a helpful assistant that answers questions based on the provided document. Always cite specific parts of the document in your answers."
        },
        {
            "role": "user",
            "content": f"Reference Document:\n\n{document_text}"
        },
        {
            "role": "user",
            "content": f"Question: {question}"
        }
    ]
    
    response = requests.post(url, headers=headers, json={
        "model": "moonshot-v1-128k",  # Use larger model for long documents
        "messages": messages,
        "temperature": 0.3
    })
    
    return response.json()['choices'][0]['message']['content']

# Usage - subsequent calls will benefit from caching
document = "... 50,000 token document ..."
api_key = "YOUR_API_KEY"

# First call: Full processing + caching
answer1 = query_document(api_key, document, "What is the main topic?")

# Second call: Cache hit! Much faster and cheaper
answer2 = query_document(api_key, document, "What are the key findings?")

# Third call: Another cache hit!
answer3 = query_document(api_key, document, "Summarize the conclusions")
```

### Example: Chat with Tool Definitions

```javascript
const axios = require('axios');

// Large tool definitions that stay constant
const TOOL_DEFINITIONS = [
  {
    type: 'function',
    function: {
      name: 'search_database',
      description: 'Search the product database...',
      parameters: { /* complex schema */ }
    }
  },
  // ... 20 more tool definitions
];

async function chatWithCaching(apiKey, userMessage, conversationHistory = []) {
  const url = 'https://api.moonshot.cn/v1/chat/completions';
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  
  // Structure for caching: system + history + new message
  const messages = [
    {
      role: 'system',
      content: 'You are a helpful e-commerce assistant with access to various tools...'
    },
    ...conversationHistory,  // Cached if repeated
    {
      role: 'user',
      content: userMessage  // Only new part
    }
  ];
  
  const response = await axios.post(url, {
    model: 'moonshot-v1-32k',
    messages: messages,
    tools: TOOL_DEFINITIONS,  // These get cached too!
    temperature: 0.7
  }, { headers });
  
  return response.data.choices[0].message;
}

// Usage
const apiKey = 'YOUR_API_KEY';
let history = [];

// First call: Full processing + caching
let response1 = await chatWithCaching(apiKey, 'Show me laptops', history);
history.push({ role: 'user', content: 'Show me laptops' });
history.push(response1);

// Second call: Benefits from cached system prompt and tool definitions
let response2 = await chatWithCaching(apiKey, 'Filter by price under $1000', history);
```

## Cache Management

### Cache Lifespan

- Cached content typically expires after a period of inactivity
- Exact expiration time may vary based on usage patterns
- Making requests more frequently keeps the cache warm

### Cache Keys

The cache key is determined by:
- Model name
- Message content (in order)
- Tool definitions (if present)
- System parameters

Changes to any of these will result in a cache miss.

### Optimizing Cache Hits

1. **Consistent Ordering**: Keep message order consistent
2. **Stable Content**: Don't modify cached portions unnecessarily
3. **Batch Similar Requests**: Group similar queries together
4. **Appropriate Model**: Choose model size based on cache needs

## Cost Analysis

### Without Context Caching

```
Request 1: 50,000 prompt tokens × $X per token = $Y
Request 2: 50,000 prompt tokens × $X per token = $Y
Request 3: 50,000 prompt tokens × $X per token = $Y
Total: 150,000 tokens = 3 × $Y
```

### With Context Caching

```
Request 1: 50,000 tokens processed + cached = $Y
Request 2: 50,000 cached tokens × $X_cached + 500 new tokens × $X = $Y/10
Request 3: 50,000 cached tokens × $X_cached + 500 new tokens × $X = $Y/10
Total: Much lower cost!
```

## Monitoring Cache Performance

Track these metrics to optimize caching:

```python
def analyze_cache_performance(response):
    """Extract cache performance metrics from response"""
    usage = response.get('usage', {})
    
    total_tokens = usage.get('total_tokens', 0)
    prompt_tokens = usage.get('prompt_tokens', 0)
    cached_tokens = usage.get('cached_tokens', 0)  # May vary by implementation
    
    if cached_tokens:
        cache_hit_rate = cached_tokens / prompt_tokens * 100
        print(f"Cache Hit Rate: {cache_hit_rate:.1f}%")
        print(f"Cached Tokens: {cached_tokens}")
        print(f"New Tokens: {prompt_tokens - cached_tokens}")
    
    return {
        'total_tokens': total_tokens,
        'cached_tokens': cached_tokens,
        'cache_hit_rate': cache_hit_rate if cached_tokens else 0
    }
```

## Best Practices

### 1. Structure Requests for Caching

Place constant content at the beginning:

```python
# Good: Cacheable structure
messages = [
    {"role": "system", "content": "CONSTANT_SYSTEM_PROMPT"},
    {"role": "user", "content": "LARGE_CONSTANT_DOCUMENT"},
    {"role": "user", "content": "variable_question"}
]

# Bad: Cache unfriendly
messages = [
    {"role": "user", "content": f"Question: {variable_question}"},
    {"role": "user", "content": "LARGE_CONSTANT_DOCUMENT"}
]
```

### 2. Minimize Cache-Breaking Changes

```python
# Good: Append to conversation
messages.append({"role": "user", "content": new_message})

# Bad: Reconstructing messages each time with variations
messages = build_messages_from_scratch()  # May break caching
```

### 3. Use Appropriate Models

```python
# For caching to be worthwhile, use models that support long contexts
cache_friendly_models = [
    "moonshot-v1-32k",   # Good for moderate contexts
    "moonshot-v1-128k"   # Best for very large contexts
]
```

### 4. Batch Related Queries

```python
# Good: Sequential queries with same context
questions = ["Question 1?", "Question 2?", "Question 3?"]
for question in questions:
    answer = query_document(api_key, large_document, question)
    # Each call benefits from caching

# Bad: Interspersing different documents
query_document(api_key, doc1, "Question 1?")
query_document(api_key, doc2, "Question 2?")  # Cache miss
query_document(api_key, doc1, "Question 3?")  # Cache miss (doc1 evicted)
```

### 5. Consider Cache Warmup

For critical applications, implement cache warmup:

```python
def warmup_cache(api_key, common_contexts):
    """Pre-warm the cache with common contexts"""
    for context in common_contexts:
        # Make a simple query to populate cache
        query_document(api_key, context, "Summarize this document briefly.")
```

## Limitations

- Cache size limits may apply
- Cache expiration based on inactivity
- Not all model features may support caching equally
- Cache hits require exact matching of cached content

## Real-World Example: Customer Support Bot

```python
class CustomerSupportBot:
    def __init__(self, api_key, knowledge_base):
        self.api_key = api_key
        self.knowledge_base = knowledge_base  # Large, constant document
        self.system_prompt = """You are a customer support assistant.
        Use the knowledge base provided to answer customer questions.
        Always be polite and helpful..."""
        
    def answer_question(self, question, conversation_history=[]):
        """Answer with optimal caching"""
        
        messages = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": f"Knowledge Base:\n{self.knowledge_base}"},
            *conversation_history,
            {"role": "user", "content": question}
        ]
        
        response = requests.post(
            "https://api.moonshot.cn/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            },
            json={
                "model": "moonshot-v1-32k",
                "messages": messages
            }
        )
        
        return response.json()['choices'][0]['message']['content']

# Usage
bot = CustomerSupportBot(api_key="YOUR_KEY", knowledge_base=kb_text)

# All these benefit from caching the knowledge base
answer1 = bot.answer_question("How do I reset my password?")
answer2 = bot.answer_question("What are your business hours?")
answer3 = bot.answer_question("How do I contact support?")
```

## Next Steps

- Review [Best Practices](06-best-practices.md) for production optimization
- Learn about [Streaming](05-streaming.md) responses
- Explore [Pricing](07-pricing-rate-limits.md) details

## References

- [Introduction to Context Caching](https://platform.moonshot.ai/blog/posts/introduction-to-context-caching)
- [Context Caching Best Practices](https://platform.moonshot.ai/blog/posts/context-caching)
- [Official Documentation](https://platform.moonshot.ai/docs/overview)



