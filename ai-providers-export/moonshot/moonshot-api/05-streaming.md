# Streaming Responses

## Overview

Streaming allows you to receive responses from the Kimi API in real-time as they are generated, rather than waiting for the complete response. This creates a more responsive user experience, especially for longer responses.

## Benefits of Streaming

- **Improved UX**: Users see responses appear immediately
- **Reduced Perceived Latency**: Feels faster even if total time is similar
- **Early Insights**: Start processing partial responses
- **Better for Long Responses**: Display content as it generates

## Enabling Streaming

Set the `stream` parameter to `true` in your request:

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {"role": "user", "content": "Write a long essay about AI"}
  ],
  "stream": true
}
```

## Response Format

### Server-Sent Events (SSE)

Streaming uses Server-Sent Events (SSE) format. Each event is a chunk of the response:

```
data: {"id":"chatcmpl-123","choices":[{"index":0,"delta":{"role":"assistant"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","choices":[{"index":0,"delta":{"content":"Hello"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","choices":[{"index":0,"delta":{"content":" there"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","choices":[{"index":0,"delta":{"content":"!"},"finish_reason":"stop"}]}

data: [DONE]
```

### Delta Object Structure

Each streaming chunk contains a `delta` object:

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion.chunk",
  "created": 1699999999,
  "model": "moonshot-v1-8k",
  "choices": [
    {
      "index": 0,
      "delta": {
        "content": "partial text"
      },
      "finish_reason": null
    }
  ]
}
```

## Implementation Examples

### Python with Requests

```python
import requests
import json

def stream_chat(api_key, message):
    """Stream chat completions"""
    
    url = "https://api.moonshot.cn/v1/chat/completions"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    data = {
        "model": "moonshot-v1-8k",
        "messages": [{"role": "user", "content": message}],
        "stream": True
    }
    
    # Use stream=True in requests
    response = requests.post(url, headers=headers, json=data, stream=True)
    
    full_content = ""
    
    for line in response.iter_lines():
        if line:
            line = line.decode('utf-8')
            
            # Remove 'data: ' prefix
            if line.startswith('data: '):
                line = line[6:]
            
            # Check for end of stream
            if line == '[DONE]':
                break
            
            try:
                chunk = json.loads(line)
                delta = chunk['choices'][0]['delta']
                
                if 'content' in delta:
                    content = delta['content']
                    full_content += content
                    print(content, end='', flush=True)
                
                # Check if finished
                if chunk['choices'][0].get('finish_reason') == 'stop':
                    break
                    
            except json.JSONDecodeError:
                continue
    
    print()  # New line after streaming
    return full_content

# Usage
api_key = "YOUR_API_KEY"
result = stream_chat(api_key, "Write a short story about a robot")
```

### Python with SSE Client

```python
import sseclient
import requests
import json

def stream_chat_with_sse(api_key, message):
    """Stream using SSE client library"""
    
    url = "https://api.moonshot.cn/v1/chat/completions"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    data = {
        "model": "moonshot-v1-8k",
        "messages": [{"role": "user", "content": message}],
        "stream": True
    }
    
    response = requests.post(url, headers=headers, json=data, stream=True)
    client = sseclient.SSEClient(response)
    
    full_content = ""
    
    for event in client.events():
        if event.data == '[DONE]':
            break
        
        try:
            chunk = json.loads(event.data)
            delta = chunk['choices'][0]['delta']
            
            if 'content' in delta:
                content = delta['content']
                full_content += content
                yield content  # Generator for incremental processing
                
        except json.JSONDecodeError:
            continue
    
    return full_content

# Usage
api_key = "YOUR_API_KEY"
for chunk in stream_chat_with_sse(api_key, "Explain quantum computing"):
    print(chunk, end='', flush=True)
```

### JavaScript/Node.js

```javascript
const axios = require('axios');

async function streamChat(apiKey, message) {
  const url = 'https://api.moonshot.cn/v1/chat/completions';
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  
  const data = {
    model: 'moonshot-v1-8k',
    messages: [{ role: 'user', content: message }],
    stream: true
  };
  
  try {
    const response = await axios.post(url, data, {
      headers,
      responseType: 'stream'
    });
    
    let fullContent = '';
    
    response.data.on('data', (chunk) => {
      const lines = chunk.toString().split('\n').filter(line => line.trim());
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          
          if (data === '[DONE]') {
            console.log('\n--- Stream Complete ---');
            return;
          }
          
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices[0].delta;
            
            if (delta.content) {
              fullContent += delta.content;
              process.stdout.write(delta.content);
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    });
    
    response.data.on('end', () => {
      console.log('\n--- Stream Ended ---');
    });
    
    response.data.on('error', (error) => {
      console.error('Stream error:', error);
    });
    
  } catch (error) {
    console.error('Request failed:', error.message);
  }
}

// Usage
const apiKey = 'YOUR_API_KEY';
streamChat(apiKey, 'Write a haiku about programming');
```

### JavaScript/Browser (Fetch API)

```javascript
async function streamChatInBrowser(apiKey, message) {
  const url = 'https://api.moonshot.cn/v1/chat/completions';
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'moonshot-v1-8k',
      messages: [{ role: 'user', content: message }],
      stream: true
    })
  });
  
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullContent = '';
  
  while (true) {
    const { done, value } = await reader.read();
    
    if (done) break;
    
    const chunk = decoder.decode(value);
    const lines = chunk.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        
        if (data === '[DONE]') {
          console.log('Stream complete');
          return fullContent;
        }
        
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices[0].delta;
          
          if (delta.content) {
            fullContent += delta.content;
            // Update UI with new content
            document.getElementById('output').textContent += delta.content;
          }
        } catch (e) {
          // Skip invalid JSON
        }
      }
    }
  }
  
  return fullContent;
}

// Usage
streamChatInBrowser('YOUR_API_KEY', 'Tell me a joke')
  .then(result => console.log('Final result:', result));
```

## Streaming with Tool Calls

When streaming with tool calls, the flow is different:

```python
def stream_with_tools(api_key, message, tools):
    """Stream responses with tool calling support"""
    
    url = "https://api.moonshot.cn/v1/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    data = {
        "model": "moonshot-v1-8k",
        "messages": [{"role": "user", "content": message}],
        "tools": tools,
        "stream": True
    }
    
    response = requests.post(url, headers=headers, json=data, stream=True)
    
    tool_calls = []
    current_tool_call = None
    
    for line in response.iter_lines():
        if line:
            line = line.decode('utf-8')
            if line.startswith('data: '):
                line = line[6:]
            
            if line == '[DONE]':
                break
            
            try:
                chunk = json.loads(line)
                delta = chunk['choices'][0]['delta']
                
                # Handle tool call deltas
                if 'tool_calls' in delta:
                    for tool_call_delta in delta['tool_calls']:
                        index = tool_call_delta.get('index', 0)
                        
                        # Initialize tool call if needed
                        while len(tool_calls) <= index:
                            tool_calls.append({
                                'id': '',
                                'type': 'function',
                                'function': {'name': '', 'arguments': ''}
                            })
                        
                        # Update tool call
                        if 'id' in tool_call_delta:
                            tool_calls[index]['id'] = tool_call_delta['id']
                        
                        if 'function' in tool_call_delta:
                            if 'name' in tool_call_delta['function']:
                                tool_calls[index]['function']['name'] += tool_call_delta['function']['name']
                            if 'arguments' in tool_call_delta['function']:
                                tool_calls[index]['function']['arguments'] += tool_call_delta['function']['arguments']
                
                # Handle content
                if 'content' in delta and delta['content']:
                    print(delta['content'], end='', flush=True)
                
            except json.JSONDecodeError:
                continue
    
    return tool_calls

# Usage
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get weather",
            "parameters": {"type": "object", "properties": {"location": {"type": "string"}}}
        }
    }
]

tool_calls = stream_with_tools("YOUR_API_KEY", "What's the weather in Tokyo?", tools)
print("\nTool calls:", tool_calls)
```

## Best Practices

### 1. Handle Incomplete JSON

Streaming chunks may contain incomplete JSON. Buffer and parse carefully:

```python
buffer = ""

for chunk in stream:
    buffer += chunk
    
    # Try to parse complete JSON objects
    while '\n' in buffer:
        line, buffer = buffer.split('\n', 1)
        try:
            data = json.loads(line)
            process_chunk(data)
        except json.JSONDecodeError:
            continue
```

### 2. Implement Timeout

Add timeouts to prevent hanging:

```python
import time

def stream_with_timeout(api_key, message, timeout=30):
    start_time = time.time()
    
    for chunk in stream_response():
        if time.time() - start_time > timeout:
            raise TimeoutError("Stream timeout")
        
        yield chunk
```

### 3. Error Handling

Handle stream interruptions gracefully:

```python
def robust_streaming(api_key, message, max_retries=3):
    """Streaming with retry logic"""
    
    for attempt in range(max_retries):
        try:
            for chunk in stream_chat(api_key, message):
                yield chunk
            return
        except Exception as e:
            if attempt == max_retries - 1:
                raise
            print(f"Stream error, retrying... ({attempt + 1}/{max_retries})")
            time.sleep(2 ** attempt)  # Exponential backoff
```

### 4. UI Updates

Throttle UI updates for performance:

```javascript
let buffer = '';
let updateScheduled = false;

function handleStreamChunk(content) {
  buffer += content;
  
  if (!updateScheduled) {
    updateScheduled = true;
    requestAnimationFrame(() => {
      document.getElementById('output').textContent += buffer;
      buffer = '';
      updateScheduled = false;
    });
  }
}
```

### 5. Track Usage

Accumulate tokens from streaming chunks:

```python
def stream_with_usage_tracking(api_key, message):
    total_tokens = 0
    
    for chunk in stream_chat(api_key, message):
        # Some implementations include usage in final chunk
        if 'usage' in chunk:
            total_tokens = chunk['usage']['total_tokens']
        
        yield chunk
    
    print(f"\nTotal tokens used: {total_tokens}")
```

## Complete Example: Chat UI

```javascript
class StreamingChatUI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.messagesDiv = document.getElementById('messages');
  }
  
  async sendMessage(userMessage) {
    // Add user message to UI
    this.addMessage('user', userMessage);
    
    // Create assistant message container
    const assistantDiv = this.addMessage('assistant', '');
    
    try {
      // Stream response
      const fullResponse = await this.streamResponse(
        userMessage,
        (chunk) => {
          assistantDiv.textContent += chunk;
          assistantDiv.scrollIntoView({ behavior: 'smooth' });
        }
      );
      
      console.log('Complete response:', fullResponse);
      
    } catch (error) {
      assistantDiv.textContent = 'Error: ' + error.message;
      assistantDiv.classList.add('error');
    }
  }
  
  async streamResponse(message, onChunk) {
    const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'moonshot-v1-8k',
        messages: [{ role: 'user', content: message }],
        stream: true
      })
    });
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim());
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return fullContent;
          
          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0].delta.content;
            
            if (content) {
              fullContent += content;
              onChunk(content);
            }
          } catch (e) {}
        }
      }
    }
    
    return fullContent;
  }
  
  addMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.textContent = content;
    this.messagesDiv.appendChild(messageDiv);
    return messageDiv;
  }
}

// Usage
const chatUI = new StreamingChatUI('YOUR_API_KEY');
chatUI.sendMessage('Tell me about the solar system');
```

## Streaming vs Non-Streaming

### When to Use Streaming

- **Interactive chat interfaces**: Real-time user experience
- **Long responses**: Keep users engaged
- **Progressive processing**: Start processing before complete
- **Typewriter effect**: Desired UX pattern

### When to Use Non-Streaming

- **Batch processing**: No user waiting
- **Simple integrations**: Easier implementation
- **Complete response needed**: Processing requires full text
- **Error handling priority**: Simpler retry logic

## Performance Considerations

- Streaming doesn't reduce total time, just perceived latency
- May use slightly more bandwidth (HTTP overhead)
- Requires more complex client implementation
- Can improve UX significantly for interactive applications

## Next Steps

- Review [Best Practices](06-best-practices.md)
- Learn about [Error Handling](08-error-handling.md)
- Explore [Rate Limits](07-pricing-rate-limits.md)

## References

- [Official Documentation](https://platform.moonshot.ai/docs/overview)
- [SSE Specification](https://html.spec.whatwg.org/multipage/server-sent-events.html)



