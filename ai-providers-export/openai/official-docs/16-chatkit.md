# ChatKit

ChatKit
Beta
Manage ChatKit sessions, threads, and file uploads for internal integrations.
Create ChatKit session
Beta
POST
 
https://api.openai.com/v1/chatkit/sessions
Create a ChatKit session
Request body
user
string
Required
A free-form string that identifies your end user; ensures this Session can access other objects that have the same user scope.
workflow
object
Required
Workflow that powers the session.

Show properties
chatkit_configuration
object
Optional
Optional overrides for ChatKit runtime configuration features

Show properties
expires_after
object
Optional
Optional override for session expiration timing in seconds from creation. Defaults to 10 minutes.

Show properties
rate_limits
object
Optional
Optional override for per-minute request limits. When omitted, defaults to 10.

Show properties
Returns
Returns a ChatKit session object.

Example request
curl

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
curl https://api.openai.com/v1/chatkit/sessions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -d '{
    "workflow": {
      "id": "workflow_alpha",
      "version": "2024-10-01"
    },
    "scope": {
      "project": "alpha",
      "environment": "staging"
    },
    "expires_after": 1800,
    "max_requests_per_1_minute": 60,
    "max_requests_per_session": 500
  }'
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
{
  "client_secret": "chatkit_token_123",
  "expires_after": 1800,
  "workflow": {
    "id": "workflow_alpha",
    "version": "2024-10-01"
  },
  "scope": {
    "project": "alpha",
    "environment": "staging"
  },
  "max_requests_per_1_minute": 60,
  "max_requests_per_session": 500,
  "status": "active"
}
Cancel chat session
Beta
POST
 
https://api.openai.com/v1/chatkit/sessions/{session_id}/cancel
Cancel a ChatKit session
Path parameters
session_id
string
Required
Unique identifier for the ChatKit session to cancel.
Returns
Returns the chat session after it has been cancelled. Cancelling prevents new requests from using the issued client secret.

Example request
curl

1
2
3
4
curl -X POST \
  https://api.openai.com/v1/chatkit/sessions/cksess_123/cancel \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
{
  "id": "cksess_123",
  "object": "chatkit.session",
  "workflow": {
    "id": "workflow_alpha",
    "version": "1"
  },
  "scope": {
    "customer_id": "cust_456"
  },
  "max_requests_per_1_minute": 30,
  "ttl_seconds": 900,
  "status": "cancelled",
  "cancelled_at": 1712345678
}
Upload file to ChatKit
Beta
POST
 
https://api.openai.com/v1/chatkit/files
Upload a ChatKit file
Request body
file
file
Required
Binary file contents to store with the ChatKit session. Supports PDFs and PNG, JPG, JPEG, GIF, or WEBP images.
Returns
Returns metadata for the uploaded file part that can be attached to ChatKit threads.

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/chatkit/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -F "file=@transcript.pdf" \
  -F "fileId=file-abc123"
Response

1
2
3
4
5
6
7
8
{
  "file": {
    "id": "file-abc123",
    "type": "file",
    "name": "transcript.pdf",
    "mimeType": "application/pdf"
  }
}
List ChatKit threads
Beta
GET
 
https://api.openai.com/v1/chatkit/threads
List ChatKit threads
Query parameters
after
string
Optional
List items created after this thread item ID. Defaults to null for the first page.
before
string
Optional
List items created before this thread item ID. Defaults to null for the newest results.
limit
integer
Optional
Maximum number of thread items to return. Defaults to 20.
order
string
Optional
Sort order for results by creation time. Defaults to desc.
user
string
Optional
Filter threads that belong to this user identifier. Defaults to null to return all users.
Returns
Returns a paginated list of ChatKit threads accessible to the request scope.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/chatkit/threads?limit=2&order=desc" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
{
  "data": [
    {
      "id": "cthr_abc123",
      "object": "chatkit.thread",
      "title": "Customer escalation"
    },
    {
      "id": "cthr_def456",
      "object": "chatkit.thread",
      "title": "Demo feedback"
    }
  ],
  "has_more": false,
  "object": "list"
}
Retrieve ChatKit thread
Beta
GET
 
https://api.openai.com/v1/chatkit/threads/{thread_id}
Retrieve a ChatKit thread
Path parameters
thread_id
string
Required
Identifier of the ChatKit thread to retrieve.
Returns
Returns a Thread object.

Example request
curl

1
2
3
curl https://api.openai.com/v1/chatkit/threads/cthr_abc123 \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
{
  "id": "cthr_abc123",
  "object": "chatkit.thread",
  "title": "Customer escalation",
  "items": {
    "data": [
      {
        "id": "cthi_user_001",
        "object": "chatkit.thread_item",
        "type": "user_message",
        "content": [
          {
            "type": "input_text",
            "text": "I need help debugging an onboarding issue."
          }
        ],
        "attachments": []
      },
      {
        "id": "cthi_assistant_002",
        "object": "chatkit.thread_item",
        "type": "assistant_message",
        "content": [
          {
            "type": "output_text",
            "text": "Let's start by confirming the workflow version you deployed."
          }
        ]
      }
    ],
    "has_more": false
  }
}
Delete ChatKit thread
Beta
DELETE
 
https://api.openai.com/v1/chatkit/threads/{thread_id}
Delete a ChatKit thread
Path parameters
thread_id
string
Required
Identifier of the ChatKit thread to delete.
Returns
Returns a confirmation object for the deleted thread.

Example request
node.js

1
2
3
4
5
6
7
import OpenAI from 'openai';

const client = new OpenAI();

const thread = await client.beta.chat_kit.threads.delete('cthr_123');

console.log(thread.id);
List ChatKit thread items
Beta
GET
 
https://api.openai.com/v1/chatkit/threads/{thread_id}/items
List ChatKit thread items
Path parameters
thread_id
string
Required
Identifier of the ChatKit thread whose items are requested.
Query parameters
after
string
Optional
List items created after this thread item ID. Defaults to null for the first page.
before
string
Optional
List items created before this thread item ID. Defaults to null for the newest results.
limit
integer
Optional
Maximum number of thread items to return. Defaults to 20.
order
string
Optional
Sort order for results by creation time. Defaults to desc.
Returns
Returns a list of thread items for the specified thread.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/chatkit/threads/cthr_abc123/items?limit=3" \
  -H "OpenAI-Beta: chatkit_beta=v1" \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
{
  "data": [
    {
      "id": "cthi_user_001",
      "object": "chatkit.thread_item",
      "type": "user_message",
      "content": [
        {
          "type": "input_text",
          "text": "I need help debugging an onboarding issue."
        }
      ],
      "attachments": []
    },
    {
      "id": "cthi_assistant_002",
      "object": "chatkit.thread_item",
      "type": "assistant_message",
      "content": [
        {
          "type": "output_text",
          "text": "Let's start by confirming the workflow version you deployed."
        }
      ]
    }
  ],
  "has_more": false,
  "object": "list"
}
The chat session object
Represents a ChatKit session and its resolved configuration.

chatkit_configuration
object
Resolved ChatKit feature configuration for the session.

Show properties
client_secret
string
Ephemeral client secret that authenticates session requests.
expires_at
integer
Unix timestamp (in seconds) for when the session expires.
id
string
Identifier for the ChatKit session.
max_requests_per_1_minute
integer
Convenience copy of the per-minute request limit.
object
string
Type discriminator that is always chatkit.session.
rate_limits
object
Resolved rate limit values.

Show properties
status
string
Current lifecycle state of the session.
user
string
User identifier associated with the session.
workflow
object
Workflow metadata for the session.

Show properties
OBJECT The chat session object

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
{
  "id": "cksess_123",
  "object": "chatkit.session",
  "client_secret": "ek_token_123",
  "expires_at": 1712349876,
  "workflow": {
    "id": "workflow_alpha",
    "version": "2024-10-01"
  },
  "user": "user_789",
  "rate_limits": {
    "max_requests_per_1_minute": 60
  },
  "max_requests_per_1_minute": 60,
  "status": "cancelled",
  "chatkit_configuration": {
    "automatic_thread_titling": {
      "enabled": true
    },
    "file_upload": {
      "enabled": true,
      "max_file_size": 16,
      "max_files": 20
    },
    "history": {
      "enabled": true,
      "recent_threads": 10
    }
  }
}
The thread object
Represents a ChatKit thread and its current status.

created_at
integer
Unix timestamp (in seconds) for when the thread was created.
id
string
Identifier of the thread.
object
string
Type discriminator that is always chatkit.thread.
status
object
Current status for the thread. Defaults to active for newly created threads.

Show possible types
title
string
Optional human-readable title for the thread. Defaults to null when no title has been generated.
user
string
Free-form string that identifies your end user who owns the thread.
OBJECT The thread object

1
2
3
4
5
6
7
8
9
10
{
  "id": "cthr_def456",
  "object": "chatkit.thread",
  "created_at": 1712345600,
  "title": "Demo feedback",
  "status": {
    "type": "active"
  },
  "user": "user_456"
}
Thread Items
A paginated list of thread items rendered for the ChatKit API.

data
array
A list of items

Show possible types
first_id
string
The ID of the first item in the list.
has_more
boolean
Whether there are more items available.
last_id
string
The ID of the last item in the list.
object
string
The type of object returned, must be list.