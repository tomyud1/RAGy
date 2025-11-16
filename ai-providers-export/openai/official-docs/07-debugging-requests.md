# Debugging requests

Debugging requests
In addition to error codes returned from API responses, you can inspect HTTP response headers containing the unique ID of a particular API request or information about rate limiting applied to your requests. Below is an incomplete list of HTTP headers returned with API responses:

API meta information

openai-organization: The organization associated with the request
openai-processing-ms: Time taken processing your API request
openai-version: REST API version used for this request (currently 2020-10-01)
x-request-id: Unique identifier for this API request (used in troubleshooting)
Rate limiting information

x-ratelimit-limit-requests
x-ratelimit-limit-tokens
x-ratelimit-remaining-requests
x-ratelimit-remaining-tokens
x-ratelimit-reset-requests
x-ratelimit-reset-tokens
OpenAI recommends logging request IDs in production deployments for more efficient troubleshooting with our support team, should the need arise. Our official SDKs provide a property on top-level response objects containing the value of the x-request-id header.