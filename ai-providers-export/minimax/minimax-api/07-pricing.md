# Pricing

## Overview

MiniMax-M2 offers competitive pricing for text generation with a transparent token-based billing model.

## Text Generation Pricing

### MiniMax-M2 and MiniMax-M2-Stable

| Metric | Price |
|--------|-------|
| **Input Tokens** | $0.30 per 1 million tokens |
| **Output Tokens** | $1.20 per 1 million tokens |

### Pricing Breakdown

- **Input Price**: $0.3 / 1M tokens
  - Cost per 1,000 tokens: $0.0003
  - Cost per token: $0.0000003
  
- **Output Price**: $1.2 / 1M tokens
  - Cost per 1,000 tokens: $0.0012
  - Cost per token: $0.0000012

## 🎉 Promotional Offer

**FREE MiniMax-M2 Model API Calls**

- **Duration**: Until November 10, 2025, at 24:00 (UTC-0)
- **Coverage**: Both input and output tokens
- **Models**: MiniMax-M2 and MiniMax-M2-Stable

**Note**: Take advantage of this promotional period to test and integrate MiniMax-M2 into your applications at no cost!

## Cost Estimation Examples

### Example 1: Simple Chat

```
Input: "What is quantum computing?" (4 tokens)
Output: A 200-word explanation (~300 tokens)

Cost calculation:
- Input cost: 4 tokens × $0.0000003 = $0.0000012
- Output cost: 300 tokens × $0.0000012 = $0.00036
- Total: $0.0003612 (≈ $0.00036)
```

### Example 2: Code Analysis (Large Context)

```
Input: 10,000 tokens of code + question
Output: 1,000 tokens of analysis and suggestions

Cost calculation:
- Input cost: 10,000 × $0.0000003 = $0.003
- Output cost: 1,000 × $0.0000012 = $0.0012
- Total: $0.0042
```

### Example 3: Document Processing

```
Input: 50,000 token document + instructions
Output: 5,000 token summary

Cost calculation:
- Input cost: 50,000 × $0.0000003 = $0.015
- Output cost: 5,000 × $0.0000012 = $0.006
- Total: $0.021
```

### Example 4: Long Conversation (10 turns)

```
Average per turn:
- Input: 500 tokens (including history)
- Output: 200 tokens

10 turns:
- Total input: 5,000 tokens
- Total output: 2,000 tokens

Cost calculation:
- Input cost: 5,000 × $0.0000003 = $0.0015
- Output cost: 2,000 × $0.0000012 = $0.0024
- Total: $0.0039 (≈ $0.004)
```

## Token Counting

### What Counts as a Token?

Tokens are pieces of text. The exact tokenization depends on the model's tokenizer, but as a rough guide:

- **English**: ~4 characters per token (on average)
- **Code**: Varies, but typically 3-4 characters per token
- **Other languages**: May vary (Chinese, Japanese typically use more tokens)

### Examples

| Text | Approximate Tokens |
|------|-------------------|
| "Hello, world!" | 4 tokens |
| "The quick brown fox jumps over the lazy dog" | 10 tokens |
| A typical paragraph (100 words) | ~130 tokens |
| A page of text (500 words) | ~650 tokens |
| A short code function (20 lines) | ~200-300 tokens |

### Token Estimation Tools

To accurately count tokens, use:

1. **Tiktoken** (Python library):
```python
import tiktoken

def count_tokens(text, model="gpt-4"):
    encoding = tiktoken.encoding_for_model(model)
    return len(encoding.encode(text))

text = "Hello, how are you?"
print(f"Tokens: {count_tokens(text)}")
```

2. **OpenAI Tokenizer** (online): https://platform.openai.com/tokenizer

**Note**: MiniMax-M2 may use a slightly different tokenizer, but these tools provide good estimates.

## Billing Details

### What's Included in Token Count?

#### Input Tokens Include:
- System prompt
- User messages
- Assistant messages (in conversation history)
- Tool/function definitions
- Tool results
- Thinking content (when preserved in history)

#### Output Tokens Include:
- Assistant's response text
- Thinking/reasoning content
- Tool call arguments
- All generated content

### Multi-turn Conversations

As conversations grow, more tokens are used per request due to accumulated context:

```
Turn 1:
- Input: 50 tokens (system + user message)
- Output: 100 tokens

Turn 2:
- Input: 150 tokens (system + turn 1 + user message 2)
- Output: 80 tokens

Turn 3:
- Input: 230 tokens (system + turn 1 + turn 2 + user message 3)
- Output: 120 tokens

Total cost increases with conversation length!
```

## Cost Optimization Tips

### 1. Manage Context Window

Don't include unnecessary context:

```python
# ❌ BAD - Sending entire conversation history every time
messages = full_conversation_history  # Could be 100+ turns!

# ✅ GOOD - Keep only recent relevant context
messages = conversation_history[-10:]  # Last 10 turns only
```

### 2. Use Summarization

For long conversations, periodically summarize:

```python
def summarize_conversation(messages):
    """Summarize old messages to save tokens"""
    if len(messages) > 20:
        # Summarize first 15 messages
        summary_prompt = "Summarize this conversation briefly:"
        # ... get summary ...
        # Replace old messages with summary
        messages = [summary_message] + messages[-5:]
    return messages
```

### 3. Optimize System Prompts

```python
# ❌ BAD - Verbose system prompt (100 tokens)
system = """You are an extremely helpful, kind, and thoughtful assistant who 
always provides detailed, comprehensive answers with lots of examples..."""

# ✅ GOOD - Concise system prompt (20 tokens)
system = "You are a helpful assistant. Be clear and concise."
```

### 4. Use Streaming Wisely

Streaming doesn't save costs, but it improves UX and allows early termination:

```python
stream = client.chat.completions.create(
    model="MiniMax-M2",
    messages=messages,
    stream=True,
    max_tokens=500  # Limit output length
)

# Can stop early if needed
for i, chunk in enumerate(stream):
    if i > 100:  # Stop after 100 chunks
        break
```

### 5. Set Reasonable max_tokens

```python
# ✅ Set appropriate limits
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=messages,
    max_tokens=500  # Prevent unexpectedly long outputs
)
```

### 6. Cache When Possible

If using the same context multiple times, consider caching:

```python
# Reuse the same system prompt and base context
base_context = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": documentation}
]

# Add new user queries to the cached context
def ask_question(question):
    messages = base_context + [{"role": "user", "content": question}]
    # Make request...
```

## Monitoring Usage

### Check Usage on Platform

1. Log in to [MiniMax Platform](https://platform.minimax.io/)
2. Navigate to **Usage** or **Dashboard**
3. View:
   - Total API calls
   - Total tokens used (input/output)
   - Current costs
   - Usage trends

### Implement Logging

Track usage in your application:

```python
import logging

def track_api_usage(response):
    """Log token usage from API response"""
    usage = response.usage
    cost = (usage.prompt_tokens * 0.0000003 + 
            usage.completion_tokens * 0.0000012)
    
    logging.info(f"API Call - Input: {usage.prompt_tokens} tokens, "
                f"Output: {usage.completion_tokens} tokens, "
                f"Cost: ${cost:.6f}")
    
    return cost

# Use it
response = client.chat.completions.create(...)
cost = track_api_usage(response)
```

### Set Budget Alerts

On the MiniMax platform, you can:
- Set monthly budget limits
- Receive email alerts at thresholds (e.g., 50%, 80%, 100%)
- Automatically pause API access if budget exceeded

## Payment Methods

Accepted payment methods:
- Credit cards (Visa, Mastercard, American Express)
- Debit cards
- Other methods (check platform for availability)

## Billing Cycle

- **Billing period**: Monthly
- **Invoice date**: First day of each month
- **Payment due**: Within billing terms (check your account)
- **Usage tracking**: Real-time

## Comparison with Other Models

| Model | Input ($/1M tokens) | Output ($/1M tokens) | Context Window |
|-------|-------------------|---------------------|----------------|
| **MiniMax-M2** | **$0.30** | **$1.20** | **204,800** |
| GPT-4 Turbo | $10.00 | $30.00 | 128,000 |
| GPT-3.5 Turbo | $0.50 | $1.50 | 16,385 |
| Claude 3 Opus | $15.00 | $75.00 | 200,000 |
| Claude 3 Sonnet | $3.00 | $15.00 | 200,000 |
| Claude 3.5 Sonnet | $3.00 | $15.00 | 200,000 |

**MiniMax-M2 offers excellent value with a large context window at competitive pricing!**

## Enterprise Pricing

For enterprise customers with high volume needs:
- Custom pricing available
- Dedicated support
- SLA guarantees
- Priority access

Contact MiniMax sales team for enterprise pricing.

## FAQ

### Q: Am I charged for thinking tokens?

**A**: Yes, thinking/reasoning tokens are counted as output tokens.

### Q: Are tool definitions counted as tokens?

**A**: Yes, tool definitions are counted as input tokens on each request where they're included.

### Q: What happens if I exceed my budget?

**A**: Depending on your settings, API access may be paused or you may be charged for overages.

### Q: Can I get a refund?

**A**: Refund policies vary. Check the Terms of Service or contact support.

### Q: Is there a free tier?

**A**: Currently, there's a promotional free period until November 10, 2025. After that, check the platform for any free tier offerings.

## Related Documentation

- [Authentication](./06-authentication.md)
- [Text Generation API Introduction](./01-text-generation-intro.md)
- [Compatible Anthropic API](./02-compatible-anthropic-api.md)

## Source

Documentation compiled from: https://platform.minimax.io/docs/guides/pricing




