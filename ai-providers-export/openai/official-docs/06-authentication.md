# Authentication

Authentication
The OpenAI API uses API keys for authentication. Create, manage, and learn more about API keys in your organization settings.

Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps). API keys should be securely loaded from an environment variable or key management service on the server.

API keys should be provided via HTTP Bearer authentication.


Authorization: Bearer OPENAI_API_KEY
If you belong to multiple organizations or access projects through a legacy user API key, pass a header to specify which organization and project to use for an API request:


1
2
3
4
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Organization: org-UFFuGDcw5KkCK3uPVjfV98ko" \
  -H "OpenAI-Project: $PROJECT_ID"
Usage from these API requests counts as usage for the specified organization and project.Organization IDs can be found on your organization settings page. Project IDs can be found on your general settings page by selecting the specific project.