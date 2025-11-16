# Available Models

## Overview

Moonshot AI offers several Kimi models with different context lengths to suit various use cases. This guide helps you choose the right model for your needs.

## Model Lineup

### moonshot-v1-8k

**Context Length**: 8,192 tokens (~6,000 words)

**Best For:**
- Short conversations
- Quick questions and answers
- Simple tasks
- Real-time chat applications
- Cost-sensitive applications

**Characteristics:**
- Fastest response times
- Most cost-effective
- Lower memory requirements
- Suitable for mobile applications

**Use Cases:**
```python
# Quick Q&A
messages = [
    {"role": "user", "content": "What is the capital of France?"}
]

# Short conversations
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help?"},
    {"role": "user", "content": "Tell me a joke"}
]

# Simple code generation
messages = [
    {"role": "user", "content": "Write a Python function to calculate factorial"}
]
```

### moonshot-v1-32k

**Context Length**: 32,768 tokens (~24,000 words)

**Best For:**
- Extended conversations
- Medium-length documents
- Code review
- Multi-turn dialogues
- Document summarization

**Characteristics:**
- Good balance of context and cost
- Handles moderate complexity
- Suitable for most applications
- Recommended for general use

**Use Cases:**
```python
# Document analysis
document = "... 15,000 token document ..."
messages = [
    {"role": "system", "content": "You are a document analyst."},
    {"role": "user", "content": f"Analyze this document:\n\n{document}"},
    {"role": "assistant", "content": "Here's my analysis..."},
    {"role": "user", "content": "What are the key findings?"}
]

# Code review
code = "... 5,000 token codebase ..."
messages = [
    {"role": "user", "content": f"Review this code:\n\n{code}"}
]

# Extended conversation
# Multiple back-and-forth exchanges with context
```

### moonshot-v1-128k

**Context Length**: 131,072 tokens (~98,000 words)

**Best For:**
- Large documents
- Extensive codebases
- Long conversations
- Research papers
- Books
- Comprehensive analysis

**Characteristics:**
- Handles very large contexts
- Highest cost per token
- Longer processing times
- Ideal for complex tasks

**Use Cases:**
```python
# Analyze entire book
book_content = "... 80,000 token book ..."
messages = [
    {"role": "user", "content": f"Summarize this book:\n\n{book_content}"}
]

# Comprehensive codebase analysis
codebase = "... 50,000 token codebase ..."
messages = [
    {"role": "user", "content": f"Analyze this codebase:\n\n{codebase}"}
]

# Very long conversation history
# Maintains context across many exchanges
```

## Model Comparison

| Feature | 8k | 32k | 128k |
|---------|-----|------|------|
| **Context Tokens** | 8,192 | 32,768 | 131,072 |
| **Approximate Words** | ~6,000 | ~24,000 | ~98,000 |
| **Response Speed** | Fast | Medium | Slower |
| **Cost** | Lowest | Medium | Highest |
| **Best For** | Quick tasks | General use | Large contexts |

## Choosing the Right Model

### Decision Flow

```python
def choose_model(text_length, conversation_turns):
    """Choose appropriate model based on requirements"""
    
    # Estimate total tokens
    estimated_tokens = estimate_tokens(text_length)
    
    # Add overhead for conversation
    estimated_tokens += conversation_turns * 100
    
    # Add buffer for completion
    estimated_tokens += 1000
    
    # Choose model
    if estimated_tokens < 6000:
        return "moonshot-v1-8k"
    elif estimated_tokens < 28000:
        return "moonshot-v1-32k"
    else:
        return "moonshot-v1-128k"

# Usage examples
model = choose_model("Short question", conversation_turns=1)
# Returns: "moonshot-v1-8k"

model = choose_model("Medium article" * 100, conversation_turns=5)
# Returns: "moonshot-v1-32k"

model = choose_model("Very long document" * 1000, conversation_turns=10)
# Returns: "moonshot-v1-128k"
```

### Guidelines

**Use 8k When:**
- Single message or very short conversations
- Quick factual questions
- Simple code generation
- Real-time applications
- Cost is a primary concern

**Use 32k When:**
- Multi-turn conversations (5-10 turns)
- Medium documents (articles, blog posts)
- Code files or small projects
- Balanced cost and capability needed

**Use 128k When:**
- Long documents (research papers, reports)
- Entire codebases
- Books or extensive content
- Very long conversation histories
- Context preservation is critical

## Model Capabilities

### All Models Support

- ✅ **Tool/Function Calling**: All models can invoke external tools
- ✅ **Streaming**: Real-time response streaming
- ✅ **Context Caching**: Optimize costs with repeated contexts
- ✅ **JSON Mode**: Structured output generation
- ✅ **Temperature Control**: Adjust creativity (0.0 - 2.0)
- ✅ **Stop Sequences**: Control response termination
- ✅ **Multi-turn Conversations**: Maintain dialogue context

### What Models DON'T Support

- ❌ **Image Input**: No vision/image processing capabilities
- ❌ **Audio Input**: No audio processing
- ❌ **Video Input**: No video processing

## Cost Considerations

### Example Costs

Assuming hypothetical pricing (check official pricing):

```python
# Example calculation (not official prices)
def estimate_cost(prompt_tokens, completion_tokens, model):
    """Estimate cost for request"""
    
    # Hypothetical prices per 1K tokens
    prices = {
        "moonshot-v1-8k": {"input": 0.0010, "output": 0.0020},
        "moonshot-v1-32k": {"input": 0.0015, "output": 0.0030},
        "moonshot-v1-128k": {"input": 0.0025, "output": 0.0050}
    }
    
    model_price = prices.get(model, prices["moonshot-v1-8k"])
    
    input_cost = (prompt_tokens / 1000) * model_price["input"]
    output_cost = (completion_tokens / 1000) * model_price["output"]
    
    return input_cost + output_cost

# Example: Short conversation
cost = estimate_cost(100, 200, "moonshot-v1-8k")
print(f"8k model: ${cost:.4f}")

# Example: Long document
cost = estimate_cost(50000, 1000, "moonshot-v1-128k")
print(f"128k model: ${cost:.4f}")
```

### Cost Optimization

```python
def cost_optimized_model_selection(text, required_output_length):
    """Choose most cost-effective model"""
    
    input_tokens = estimate_tokens(text)
    
    # Add safety margin
    total_needed = input_tokens + required_output_length + 500
    
    # Choose smallest model that fits
    if total_needed < 7500:  # Leave 10% buffer
        return "moonshot-v1-8k", "Most cost-effective"
    elif total_needed < 30000:
        return "moonshot-v1-32k", "Balanced choice"
    else:
        return "moonshot-v1-128k", "Required for context"

# Usage
document = "... large text ..."
model, reason = cost_optimized_model_selection(document, required_output_length=500)
print(f"Selected: {model} - {reason}")
```

## Performance Characteristics

### Response Times

Typical response times (approximate):

| Model | Simple Query | Medium Query | Complex Query |
|-------|--------------|--------------|---------------|
| 8k | 1-2s | 2-4s | 4-8s |
| 32k | 2-3s | 4-6s | 8-15s |
| 128k | 3-5s | 6-10s | 15-30s |

**Note**: Times vary based on:
- Server load
- Query complexity
- Response length
- Network latency
- Streaming vs non-streaming

### Optimization Tips

```python
def optimize_for_speed(messages, max_acceptable_latency=5):
    """Optimize model choice for speed"""
    
    tokens = estimate_message_tokens(messages)
    
    # For low latency requirements
    if max_acceptable_latency < 3:
        if tokens < 6000:
            return "moonshot-v1-8k"
        else:
            return None, "Context too large for low latency requirement"
    
    # For moderate latency
    elif max_acceptable_latency < 8:
        if tokens < 28000:
            return "moonshot-v1-32k"
        else:
            return None, "Context too large for moderate latency requirement"
    
    # For any latency
    else:
        return choose_model(sum(len(m['content']) for m in messages), len(messages))
```

## Model-Specific Best Practices

### For 8k Model

```python
# Keep context minimal
messages = [
    {"role": "system", "content": "Brief system prompt"},
    {"role": "user", "content": "Concise user message"}
]

# Trim conversation history frequently
def trim_for_8k(messages):
    """Keep only last few exchanges"""
    system = [m for m in messages if m['role'] == 'system']
    recent = [m for m in messages if m['role'] != 'system'][-4:]  # Last 2 exchanges
    return system + recent
```

### For 32k Model

```python
# Balance context and efficiency
messages = [
    {"role": "system", "content": "Detailed system prompt"},
    {"role": "user", "content": "Medium-length document"},
    {"role": "assistant", "content": "Previous analysis"},
    {"role": "user", "content": "Follow-up question"}
]

# Trim when approaching limit
def trim_for_32k(messages):
    """Keep important context"""
    if estimate_message_tokens(messages) > 28000:
        # Keep system + summarize middle + keep recent
        return smart_trim(messages, target=25000)
    return messages
```

### For 128k Model

```python
# Utilize full context
messages = [
    {"role": "system", "content": "Comprehensive system prompt"},
    {"role": "user", "content": "Entire document or codebase"},
    *previous_conversation,  # Keep full history
    {"role": "user", "content": "Latest question"}
]

# Only trim if absolutely necessary
def trim_for_128k(messages):
    """Use full context, trim only if exceeded"""
    if estimate_message_tokens(messages) > 120000:
        return smart_trim(messages, target=115000)
    return messages
```

## Migration Between Models

### Automatic Model Upgrade

```python
def auto_select_model(messages):
    """Automatically select and upgrade model as needed"""
    
    tokens = estimate_message_tokens(messages)
    
    try:
        # Try cheapest appropriate model first
        if tokens < 6000:
            return make_api_call(api_key, messages, model="moonshot-v1-8k")
        elif tokens < 28000:
            return make_api_call(api_key, messages, model="moonshot-v1-32k")
        else:
            return make_api_call(api_key, messages, model="moonshot-v1-128k")
    
    except ContextLengthError:
        # Automatically upgrade if context exceeded
        if tokens < 28000:
            print("Upgrading to 32k model...")
            return make_api_call(api_key, messages, model="moonshot-v1-32k")
        else:
            print("Upgrading to 128k model...")
            return make_api_call(api_key, messages, model="moonshot-v1-128k")
```

## Summary

| Scenario | Recommended Model | Reason |
|----------|------------------|--------|
| Chat bot | 8k or 32k | Short interactions |
| Document Q&A | 32k or 128k | Depends on doc size |
| Code generation | 8k | Usually short |
| Code review | 32k | Moderate files |
| Codebase analysis | 128k | Large projects |
| Customer support | 8k | Quick responses |
| Research assistant | 128k | Large documents |
| General assistant | 32k | Balanced needs |

## Next Steps

- Review [Pricing and Rate Limits](07-pricing-rate-limits.md)
- Learn about [Context Caching](04-context-caching.md)
- Explore [Best Practices](06-best-practices.md)

## References

- [Official Documentation](https://platform.moonshot.ai/docs/overview)
- [Chat Completions API](02-chat-completions.md)



