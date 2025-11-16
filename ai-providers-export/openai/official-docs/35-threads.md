# Threads

Threads
Beta
Create threads that assistants can interact with.

Related guide: Assistants
Create thread
Beta
POST
 
https://api.openai.com/v1/threads
Create a thread.
Request body
messages
array
Optional
A list of messages to start the thread with.

Show properties
metadata
map
Optional
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
tool_resources
object
Optional
A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

Show properties
Returns
A thread object.

Empty
Messages
Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/threads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -d ''
Response

1
2
3
4
5
6
7
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699012949,
  "metadata": {},
  "tool_resources": {}
}
Retrieve thread
Beta
GET
 
https://api.openai.com/v1/threads/{thread_id}
Retrieves a thread.
Path parameters
thread_id
string
Required
The ID of the thread to retrieve.
Returns
The thread object matching the specified ID.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2"
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
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699014083,
  "metadata": {},
  "tool_resources": {
    "code_interpreter": {
      "file_ids": []
    }
  }
}
Modify thread
Beta
POST
 
https://api.openai.com/v1/threads/{thread_id}
Modifies a thread.
Path parameters
thread_id
string
Required
The ID of the thread to modify. Only the metadata can be modified.
Request body
metadata
map
Optional
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
tool_resources
object
Optional
A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

Show properties
Returns
The modified thread object matching the specified ID.

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
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -d '{
      "metadata": {
        "modified": "true",
        "user": "abc123"
      }
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
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1699014083,
  "metadata": {
    "modified": "true",
    "user": "abc123"
  },
  "tool_resources": {}
}
Delete thread
Beta
DELETE
 
https://api.openai.com/v1/threads/{thread_id}
Delete a thread.
Path parameters
thread_id
string
Required
The ID of the thread to delete.
Returns
Deletion status

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/threads/thread_abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Beta: assistants=v2" \
  -X DELETE
Response

1
2
3
4
5
{
  "id": "thread_abc123",
  "object": "thread.deleted",
  "deleted": true
}
The thread object
Beta
Represents a thread that contains messages.

created_at
integer
The Unix timestamp (in seconds) for when the thread was created.
id
string
The identifier, which can be referenced in API endpoints.
metadata
map
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
object
string
The object type, which is always thread.
tool_resources
object
A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the code_interpreter tool requires a list of file IDs, while the file_search tool requires a list of vector store IDs.

Show properties
OBJECT The thread object

1
2
3
4
5
6
{
  "id": "thread_abc123",
  "object": "thread",
  "created_at": 1698107661,
  "metadata": {}
}