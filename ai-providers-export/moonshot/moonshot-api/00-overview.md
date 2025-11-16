# Moonshot AI - Kimi API Overview

## Introduction

Moonshot AI provides the Kimi API, which offers advanced language model capabilities for developers. The API enables integration of powerful AI functionality into applications through a RESTful API interface.

**Official Documentation**: [https://platform.moonshot.ai/docs/overview](https://platform.moonshot.ai/docs/overview)

## Available Models

### Kimi-K2

The latest and most advanced model from Moonshot AI, offering:
- Enhanced reasoning capabilities
- Improved tool usage
- More efficient token usage
- Context caching support

### Kimi-K1.5

Previous generation model, still available for use.

## Key Capabilities

### ✅ Tool Use / Function Calling

The Kimi-K2 API fully supports external tool integration:

- Users can specify external tools within conversations to perform specific tasks
- The model intelligently determines which external tools to invoke based on dialogue context
- By default, the model directly calls tools without returning the thought process (more concise, saves tokens)
- Users can adjust prompts to have the model return detailed thought processes if desired
- This feature extends the API's capabilities to meet diverse user needs

**Source**: [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

### ⚠️ Thinking Process

The API provides flexibility in exposing the model's reasoning:

- **Default Behavior**: Direct execution without exposing internal thought process
  - Results in streamlined, efficient responses
  - Saves tokens and reduces costs
  - Faster response times
  
- **Optional Behavior**: Can be configured to reveal thought process
  - Adjust prompts to elicit detailed reasoning steps
  - Useful for debugging or understanding model decisions
  - Allows customization based on specific business requirements

**Source**: [Kimi API Update - Amazon Cloud China Summit](https://platform.moonshot.ai/blog/posts/kimi-api-update-amazon-cloud-china-summit)

### ❌ Image Input

**NOT SUPPORTED**: The Kimi-K2 API currently does not support image inputs.

- API is designed to process and generate text-based content only
- Primarily focuses on text-based interactions and tool integrations

## Key Features

### Context Caching

Moonshot AI offers Context Caching to optimize performance and reduce costs:

- Particularly beneficial for scenarios with frequent requests and repeated large initial contexts
- Reuses cached content to improve efficiency
- **Cost Savings**: Up to 90% reduction in API call costs
- **Performance**: Approximately 83% decrease in time to first token
- Significantly improves overall response times

**Sources**: 
- [Introduction to Context Caching](https://platform.moonshot.ai/blog/posts/introduction-to-context-caching)
- [Context Caching](https://platform.moonshot.ai/blog/posts/context-caching)

### Structured Output

The API excels at handling complex queries and providing structured outputs:

- Accurate JSON response generation
- Beneficial for tasks requiring precise data extraction
- Structured information processing

**Source**: [Kimi Latest Updates](https://platform.moonshot.ai/blog/posts/kimi-latest)

## API Structure

The Kimi API follows an OpenAI-compatible structure, making it easy to integrate for developers familiar with OpenAI's API format.

### Base URL

```
https://api.moonshot.cn
```

### Authentication

Uses Bearer token authentication:

```
Authorization: Bearer YOUR_API_KEY
```

## Use Cases

The Kimi API is suitable for:

- **Conversational AI**: Chatbots, virtual assistants
- **Content Generation**: Article writing, creative content
- **Data Processing**: Structured data extraction, JSON generation
- **Tool Integration**: Applications requiring external tool invocation
- **Long Context Processing**: Applications with repeated large contexts (with Context Caching)

## Getting Started

1. Visit [https://platform.moonshot.ai](https://platform.moonshot.ai) to create an account
2. Obtain your API key from the platform dashboard
3. Review the API documentation at [https://platform.moonshot.ai/docs/overview](https://platform.moonshot.ai/docs/overview)
4. Start making API calls using the chat completions endpoint

## Important Notes

- The API is primarily text-based - no image processing capabilities
- Tool usage is highly optimized for efficiency
- Context caching can significantly reduce costs for specific use cases
- Default behavior prioritizes conciseness and token efficiency
- Prompts can be customized to adjust response verbosity and thought process visibility

## Next Steps

- Review the [Getting Started Guide](01-getting-started.md)
- Explore [Chat Completions API](02-chat-completions.md)
- Learn about [Tool Usage](03-tools-function-calling.md)
- Understand [Context Caching](04-context-caching.md)



