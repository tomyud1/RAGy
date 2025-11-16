# Tools and Function Calling

## Overview

One of the most powerful features of the Kimi-K2 API is its ability to integrate with external tools through function calling. The model can intelligently determine when to invoke tools based on the conversation context, extending its capabilities to meet diverse user needs.

**Source**: [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

## Key Features

### ✅ Intelligent Tool Selection

- Kimi automatically determines which tools to invoke based on dialogue context
- No manual orchestration required
- Seamless integration with external systems

### ⚡ Optimized for Efficiency

- **Default Behavior**: Direct tool invocation without exposing thought process
  - More concise responses
  - Significant token savings
  - Faster response times

- **Optional Verbose Mode**: Can be configured to reveal reasoning
  - Adjust prompts to see detailed thought process
  - Useful for debugging and understanding decisions
  - Customizable based on business requirements

## How It Works

### 1. Define Tools

Define available tools in your API request using a schema:

```json
{
  "model": "moonshot-v1-8k",
  "messages": [...],
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get the current weather for a location",
        "parameters": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            },
            "unit": {
              "type": "string",
              "enum": ["celsius", "fahrenheit"],
              "description": "The unit of temperature"
            }
          },
          "required": ["location"]
        }
      }
    }
  ]
}
```

### 2. Model Decides to Use Tool

When the user's query requires external data, the model returns a `tool_calls` response:

```json
{
  "id": "chatcmpl-123",
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": null,
        "tool_calls": [
          {
            "id": "call_abc123",
            "type": "function",
            "function": {
              "name": "get_weather",
              "arguments": "{\"location\": \"San Francisco, CA\", \"unit\": \"celsius\"}"
            }
          }
        ]
      },
      "finish_reason": "tool_calls"
    }
  ]
}
```

### 3. Execute Tool and Return Results

Execute the tool in your application and send the results back:

```json
{
  "model": "moonshot-v1-8k",
  "messages": [
    {"role": "user", "content": "What's the weather in San Francisco?"},
    {
      "role": "assistant",
      "content": null,
      "tool_calls": [
        {
          "id": "call_abc123",
          "type": "function",
          "function": {
            "name": "get_weather",
            "arguments": "{\"location\": \"San Francisco, CA\"}"
          }
        }
      ]
    },
    {
      "role": "tool",
      "tool_call_id": "call_abc123",
      "content": "{\"temperature\": 18, \"condition\": \"sunny\", \"unit\": \"celsius\"}"
    }
  ],
  "tools": [...]
}
```

### 4. Model Generates Final Response

The model uses the tool results to generate a natural language response:

```json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The weather in San Francisco is currently sunny with a temperature of 18°C."
      },
      "finish_reason": "stop"
    }
  ]
}
```

## Tool Schema Format

### Function Definition

```json
{
  "type": "function",
  "function": {
    "name": "function_name",
    "description": "Clear description of what the function does",
    "parameters": {
      "type": "object",
      "properties": {
        "param1": {
          "type": "string|number|boolean|object|array",
          "description": "Parameter description",
          "enum": []  // Optional: restrict to specific values
        }
      },
      "required": ["param1"]  // List of required parameters
    }
  }
}
```

### Supported Parameter Types

- `string`: Text values
- `number`: Numeric values (integers or floats)
- `boolean`: true/false values
- `object`: Nested objects
- `array`: Lists of values

## Tool Choice Control

Control how the model uses tools with the `tool_choice` parameter:

### Auto (Default)

Model decides whether and which tool to call:

```json
{
  "tool_choice": "auto"
}
```

### None

Model will not call any tools:

```json
{
  "tool_choice": "none"
}
```

### Specific Tool

Force the model to call a specific tool:

```json
{
  "tool_choice": {
    "type": "function",
    "function": {"name": "get_weather"}
  }
}
```

## Complete Example

### Python Implementation

```python
import requests
import json

def chat_with_tools(api_key):
    url = "https://api.moonshot.cn/v1/chat/completions"
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    # Define available tools
    tools = [
        {
            "type": "function",
            "function": {
                "name": "get_weather",
                "description": "Get current weather for a location",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "location": {
                            "type": "string",
                            "description": "City and state, e.g. San Francisco, CA"
                        },
                        "unit": {
                            "type": "string",
                            "enum": ["celsius", "fahrenheit"]
                        }
                    },
                    "required": ["location"]
                }
            }
        }
    ]
    
    # Initial user message
    messages = [
        {"role": "user", "content": "What's the weather like in Tokyo?"}
    ]
    
    # First API call
    response = requests.post(url, headers=headers, json={
        "model": "moonshot-v1-8k",
        "messages": messages,
        "tools": tools
    })
    
    result = response.json()
    assistant_message = result['choices'][0]['message']
    
    # Check if model wants to call a tool
    if assistant_message.get('tool_calls'):
        messages.append(assistant_message)
        
        # Execute each tool call
        for tool_call in assistant_message['tool_calls']:
            function_name = tool_call['function']['name']
            arguments = json.loads(tool_call['function']['arguments'])
            
            # Execute the actual function (implement this)
            tool_response = execute_function(function_name, arguments)
            
            # Add tool response to messages
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call['id'],
                "content": json.dumps(tool_response)
            })
        
        # Second API call with tool results
        response = requests.post(url, headers=headers, json={
            "model": "moonshot-v1-8k",
            "messages": messages,
            "tools": tools
        })
        
        result = response.json()
    
    return result['choices'][0]['message']['content']

def execute_function(name, arguments):
    """Execute the actual tool/function"""
    if name == "get_weather":
        # Implement actual weather API call here
        return {
            "temperature": 22,
            "condition": "partly cloudy",
            "unit": arguments.get("unit", "celsius")
        }
    return {}
```

### JavaScript/Node.js Implementation

```javascript
const axios = require('axios');

async function chatWithTools(apiKey) {
  const url = 'https://api.moonshot.cn/v1/chat/completions';
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  
  const tools = [
    {
      type: 'function',
      function: {
        name: 'get_weather',
        description: 'Get current weather for a location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'City and state, e.g. San Francisco, CA'
            },
            unit: {
              type: 'string',
              enum: ['celsius', 'fahrenheit']
            }
          },
          required: ['location']
        }
      }
    }
  ];
  
  let messages = [
    { role: 'user', content: "What's the weather like in Tokyo?" }
  ];
  
  // First API call
  let response = await axios.post(url, {
    model: 'moonshot-v1-8k',
    messages: messages,
    tools: tools
  }, { headers });
  
  let assistantMessage = response.data.choices[0].message;
  
  // Check if model wants to call a tool
  if (assistantMessage.tool_calls) {
    messages.push(assistantMessage);
    
    // Execute each tool call
    for (const toolCall of assistantMessage.tool_calls) {
      const functionName = toolCall.function.name;
      const args = JSON.parse(toolCall.function.arguments);
      
      // Execute the actual function
      const toolResponse = executeFunction(functionName, args);
      
      // Add tool response to messages
      messages.push({
        role: 'tool',
        tool_call_id: toolCall.id,
        content: JSON.stringify(toolResponse)
      });
    }
    
    // Second API call with tool results
    response = await axios.post(url, {
      model: 'moonshot-v1-8k',
      messages: messages,
      tools: tools
    }, { headers });
  }
  
  return response.data.choices[0].message.content;
}

function executeFunction(name, args) {
  if (name === 'get_weather') {
    // Implement actual weather API call here
    return {
      temperature: 22,
      condition: 'partly cloudy',
      unit: args.unit || 'celsius'
    };
  }
  return {};
}
```

## Multiple Tools Example

You can define multiple tools for the model to choose from:

```json
{
  "tools": [
    {
      "type": "function",
      "function": {
        "name": "get_weather",
        "description": "Get current weather",
        "parameters": {...}
      }
    },
    {
      "type": "function",
      "function": {
        "name": "search_database",
        "description": "Search internal database",
        "parameters": {...}
      }
    },
    {
      "type": "function",
      "function": {
        "name": "send_email",
        "description": "Send an email to a recipient",
        "parameters": {...}
      }
    }
  ]
}
```

## Best Practices

### 1. Clear Tool Descriptions

Write detailed, unambiguous descriptions:

```json
{
  "name": "calculate_total_price",
  "description": "Calculate the total price including tax and shipping. Input: base_price (number), tax_rate (0-1), shipping_cost (number). Returns: total price with 2 decimal places."
}
```

### 2. Validate Tool Outputs

Always validate tool outputs before sending back to the model:

```python
def execute_tool(name, args):
    try:
        result = call_external_api(name, args)
        # Validate result structure
        if not isinstance(result, dict):
            result = {"error": "Invalid response format"}
        return result
    except Exception as e:
        return {"error": str(e)}
```

### 3. Handle Tool Errors Gracefully

```json
{
  "role": "tool",
  "tool_call_id": "call_123",
  "content": "{\"error\": \"Weather service temporarily unavailable\", \"fallback\": \"Unable to fetch current weather data\"}"
}
```

### 4. Enable Verbose Mode for Debugging

To see the model's reasoning process during tool usage, adjust your system prompt:

```json
{
  "role": "system",
  "content": "You are a helpful assistant. When using tools, explain your reasoning step by step before and after tool invocation."
}
```

### 5. Token Optimization

- Keep tool descriptions concise but clear
- Use default behavior (no thought process) for production to save tokens
- Only request verbose mode when debugging or when transparency is required

## Common Use Cases

### 1. Database Queries

```json
{
  "name": "query_database",
  "description": "Query the product database",
  "parameters": {
    "type": "object",
    "properties": {
      "query": {"type": "string", "description": "SQL query"},
      "limit": {"type": "number", "description": "Max results"}
    }
  }
}
```

### 2. API Integrations

```json
{
  "name": "get_exchange_rate",
  "description": "Get currency exchange rate",
  "parameters": {
    "type": "object",
    "properties": {
      "from_currency": {"type": "string"},
      "to_currency": {"type": "string"}
    }
  }
}
```

### 3. File Operations

```json
{
  "name": "read_file",
  "description": "Read contents of a file",
  "parameters": {
    "type": "object",
    "properties": {
      "file_path": {"type": "string"},
      "encoding": {"type": "string", "enum": ["utf-8", "ascii"]}
    }
  }
}
```

### 4. Calculations

```json
{
  "name": "calculate_mortgage",
  "description": "Calculate monthly mortgage payment",
  "parameters": {
    "type": "object",
    "properties": {
      "principal": {"type": "number"},
      "rate": {"type": "number"},
      "years": {"type": "number"}
    }
  }
}
```

## Limitations and Considerations

- Tools must be stateless (or manage state externally)
- Tool execution happens in your application, not on Moonshot's servers
- Be mindful of tool execution time (may affect overall response time)
- Validate all tool inputs and outputs
- Implement proper error handling for tool failures

## Next Steps

- Explore [Context Caching](04-context-caching.md) to optimize repeated tool definitions
- Learn about [Streaming](05-streaming.md) with tool calls
- Review [Best Practices](06-best-practices.md) for production deployments

## References

- [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)
- [Official Documentation](https://platform.moonshot.ai/docs/overview)



