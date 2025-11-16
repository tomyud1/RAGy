# M2 Tool Use & Interleaved Thinking

## Overview

MiniMax-M2 supports **function calling** (tool use) and **interleaved thinking**, allowing AI models to:
- Call external functions to extend their capabilities
- Show step-by-step reasoning process
- Make informed decisions based on external data
- Perform complex multi-step tasks

## Interleaved Thinking

### What is Interleaved Thinking?

Interleaved thinking is MiniMax-M2's ability to:
1. **Reason step-by-step** while maintaining context
2. **Show its thought process** explicitly
3. **Integrate thinking with actions** (tool calls)
4. **Maintain continuity** across conversation turns

### Benefits

- **Transparency**: See how the model arrives at conclusions
- **Debugging**: Understand why certain decisions were made
- **Improved accuracy**: Step-by-step reasoning reduces errors
- **Better context**: Thinking preserved across turns maintains coherence

### Accessing Thinking Content

#### With Anthropic API (Recommended)

```python
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key="your_api_key"
)

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
                    "text": "What's the square root of 144?"
                }
            ]
        }
    ]
)

# Separate thinking and text blocks
for block in message.content:
    if block.type == "thinking":
        print(f"Model's Reasoning:\n{block.thinking}\n")
    elif block.type == "text":
        print(f"Final Answer:\n{block.text}\n")
```

#### With OpenAI API

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="your_api_key"
)

response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What's the square root of 144?"},
    ],
    extra_body={"reasoning_split": True},
)

print(f"Model's Reasoning:\n{response.choices[0].message.reasoning_details[0]['text']}\n")
print(f"Final Answer:\n{response.choices[0].message.content}\n")
```

## Function Calling / Tool Use

### Overview

Function calling allows MiniMax-M2 to:
- Invoke external APIs
- Retrieve real-time data
- Perform calculations
- Execute custom functions
- Integrate with external systems

### Basic Function Calling

#### With Anthropic API

```python
import anthropic

client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key="your_api_key"
)

# Define tools
tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather in a given location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g., San Francisco, CA"
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
]

# Make request with tools
message = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    tools=tools,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "What's the weather like in Tokyo?"
                }
            ]
        }
    ]
)

# Check if model wants to use a tool
for block in message.content:
    if block.type == "tool_use":
        print(f"Tool: {block.name}")
        print(f"Arguments: {block.input}")
        
        # Execute the function (your implementation)
        weather_result = get_weather(**block.input)
        
        # Continue conversation with tool result
        # ... (see full example below)
```

#### With OpenAI API

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.minimax.io/v1",
    api_key="your_api_key"
)

# Define tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g., San Francisco, CA"
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

# Make request with tools
response = client.chat.completions.create(
    model="MiniMax-M2",
    messages=[
        {"role": "user", "content": "What's the weather like in Tokyo?"}
    ],
    tools=tools
)

# Check if model wants to use a tool
message = response.choices[0].message
if message.tool_calls:
    for tool_call in message.tool_calls:
        print(f"Tool: {tool_call.function.name}")
        print(f"Arguments: {tool_call.function.arguments}")
        
        # Execute the function (your implementation)
        # ... (see full example below)
```

### Complete Tool Use Example

Here's a complete example with tool execution and response:

```python
import anthropic
import json

client = anthropic.Anthropic(
    base_url="https://api.minimax.io/anthropic",
    api_key="your_api_key"
)

# Define tools
tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather in a given location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g., San Francisco, CA"
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
]

# Your actual function implementation
def get_weather(location, unit="celsius"):
    # In production, call a real weather API
    return {
        "location": location,
        "temperature": 22,
        "unit": unit,
        "condition": "sunny"
    }

# Initial request
messages = [
    {
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "What's the weather like in Tokyo?"
            }
        ]
    }
]

response = client.messages.create(
    model="MiniMax-M2",
    max_tokens=1000,
    tools=tools,
    messages=messages
)

# Process response
while response.stop_reason == "tool_use":
    # Add assistant's response to history
    messages.append({
        "role": "assistant",
        "content": response.content
    })
    
    # Execute each tool call
    tool_results = []
    for block in response.content:
        if block.type == "tool_use":
            print(f"\n🔧 Tool Call: {block.name}")
            print(f"Arguments: {block.input}")
            
            # Execute the function
            if block.name == "get_weather":
                result = get_weather(**block.input)
            
            print(f"Result: {result}")
            
            # Add tool result
            tool_results.append({
                "type": "tool_result",
                "tool_use_id": block.id,
                "content": json.dumps(result)
            })
    
    # Add tool results to conversation
    messages.append({
        "role": "user",
        "content": tool_results
    })
    
    # Continue conversation
    response = client.messages.create(
        model="MiniMax-M2",
        max_tokens=1000,
        tools=tools,
        messages=messages
    )

# Final response
print("\n💬 Final Response:")
for block in response.content:
    if block.type == "text":
        print(block.text)
```

## Best Practices

### 1. Always Preserve Full Context

**Critical**: Preserve the complete assistant response (including thinking and tool calls) in conversation history:

```python
# ✅ CORRECT - Anthropic API
messages.append({
    "role": "assistant",
    "content": response.content  # Full list with all blocks
})

# ✅ CORRECT - OpenAI API
response_message = response.choices[0].message
messages.append({
    "role": "assistant",
    "content": response_message.content,
    "tool_calls": response_message.tool_calls
})
```

### 2. Handle Tool Execution Safely

```python
def execute_tool_safely(tool_name, arguments):
    try:
        if tool_name == "get_weather":
            return get_weather(**arguments)
        elif tool_name == "calculate":
            return calculate(**arguments)
        else:
            return {"error": f"Unknown tool: {tool_name}"}
    except Exception as e:
        return {"error": str(e)}
```

### 3. Validate Tool Arguments

```python
def validate_arguments(tool_name, arguments):
    if tool_name == "get_weather":
        if "location" not in arguments:
            raise ValueError("Missing required argument: location")
        if "unit" in arguments and arguments["unit"] not in ["celsius", "fahrenheit"]:
            raise ValueError("Invalid unit value")
    return True
```

### 4. Provide Clear Tool Descriptions

Make tool descriptions clear and specific:

```python
# ✅ GOOD
{
    "name": "get_weather",
    "description": "Get the current weather in a given location. Returns temperature, condition, humidity, and wind speed.",
    ...
}

# ❌ BAD
{
    "name": "get_weather",
    "description": "Weather",
    ...
}
```

### 5. Use Appropriate Temperature Settings

- **With tools**: `temperature=1.0` (recommended)
- **Without tools**: Adjust based on creativity needs

## Use Cases

### 1. Data Retrieval
- Weather information
- Stock prices
- Database queries
- API data fetching

### 2. Calculations
- Mathematical operations
- Unit conversions
- Statistical analysis
- Financial calculations

### 3. External System Integration
- Calendar management
- Email sending
- File operations
- System commands

### 4. Multi-step Tasks
- Research with multiple sources
- Complex problem solving
- Workflow automation
- Decision trees

## Performance Tips

1. **Keep tool descriptions concise** but informative
2. **Limit the number of tools** (5-10 is optimal)
3. **Use typed parameters** to guide the model
4. **Provide examples** in tool descriptions when helpful
5. **Cache tool definitions** if making multiple requests

## Error Handling

```python
try:
    response = client.messages.create(
        model="MiniMax-M2",
        max_tokens=1000,
        tools=tools,
        messages=messages
    )
except anthropic.APIError as e:
    print(f"API Error: {e}")
    # Handle API errors
except Exception as e:
    print(f"Unexpected error: {e}")
    # Handle other errors
```

## Limitations

- **Tool execution**: You must implement and execute the actual tool functions
- **Security**: Validate and sanitize all tool inputs/outputs
- **Rate limits**: Tool calls count toward token usage
- **Context window**: Tool definitions and results use token space

## Related Documentation

- [Compatible Anthropic API](./02-compatible-anthropic-api.md)
- [Compatible OpenAI API](./03-compatible-openai-api.md)
- [M2 for AI Coding Tools](./05-ai-coding-tools.md)

## Source

Documentation compiled from: https://platform.minimax.io/docs/api-reference/text-m2-function-call-refer




