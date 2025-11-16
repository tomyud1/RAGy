# Models

Models
List and describe the various models available in the API. You can refer to the Models documentation to understand what models are available and the differences between them.
List models
GET
 
https://api.openai.com/v1/models
Lists the currently available models, and provides basic information about each one such as the owner and availability.
Returns
A list of model objects.

Example request
curl

1
2
curl https://api.openai.com/v1/models \
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
{
  "object": "list",
  "data": [
    {
      "id": "model-id-0",
      "object": "model",
      "created": 1686935002,
      "owned_by": "organization-owner"
    },
    {
      "id": "model-id-1",
      "object": "model",
      "created": 1686935002,
      "owned_by": "organization-owner",
    },
    {
      "id": "model-id-2",
      "object": "model",
      "created": 1686935002,
      "owned_by": "openai"
    },
  ],
  "object": "list"
}
Retrieve model
GET
 
https://api.openai.com/v1/models/{model}
Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
Path parameters
model
string
Required
The ID of the model to use for this request
Returns
The model object matching the specified ID.

Example request
gpt-5
curl

1
2
curl https://api.openai.com/v1/models/gpt-5 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
6
{
  "id": "gpt-5",
  "object": "model",
  "created": 1686935002,
  "owned_by": "openai"
}
Delete a fine-tuned model
DELETE
 
https://api.openai.com/v1/models/{model}
Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
Path parameters
model
string
Required
The model to delete
Returns
Deletion status.

Example request
curl

1
2
3
curl https://api.openai.com/v1/models/ft:gpt-4o-mini:acemeco:suffix:abc123 \
  -X DELETE \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
{
  "id": "ft:gpt-4o-mini:acemeco:suffix:abc123",
  "object": "model",
  "deleted": true
}
The model object
Describes an OpenAI model offering that can be used with the API.

created
integer
The Unix timestamp (in seconds) when the model was created.
id
string
The model identifier, which can be referenced in the API endpoints.
object
string
The object type, which is always "model".
owned_by
string
The organization that owns the model.
OBJECT The model object

1
2
3
4
5
6
{
  "id": "gpt-5",
  "object": "model",
  "created": 1686935002,
  "owned_by": "openai"
}
Moderations
Given text and/or image inputs, classifies if those inputs are potentially harmful across several categories. Related guide: Moderations
Create moderation
POST
 
https://api.openai.com/v1/moderations
Classifies if text and/or image inputs are potentially harmful. Learn more in the moderation guide.
Request body
input
string or array
Required
Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models.

Show possible types
model
string
Optional
Defaults to omni-moderation-latest
The content moderation model you would like to use. Learn more in the moderation guide, and learn about available models here.
Returns
A moderation object.

Single string
Image and text
Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/moderations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "I want to kill them."
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
34
35
{
  "id": "modr-AB8CjOTu2jiq12hp1AQPfeqFWaORR",
  "model": "text-moderation-007",
  "results": [
    {
      "flagged": true,
      "categories": {
        "sexual": false,
        "hate": false,
        "harassment": true,
        "self-harm": false,
        "sexual/minors": false,
        "hate/threatening": false,
        "violence/graphic": false,
        "self-harm/intent": false,
        "self-harm/instructions": false,
        "harassment/threatening": true,
        "violence": true
      },
      "category_scores": {
        "sexual": 0.000011726012417057063,
        "hate": 0.22706663608551025,
        "harassment": 0.5215635299682617,
        "self-harm": 2.227119921371923e-6,
        "sexual/minors": 7.107352217872176e-8,
        "hate/threatening": 0.023547329008579254,
        "violence/graphic": 0.00003391829886822961,
        "self-harm/intent": 1.646940972932498e-6,
        "self-harm/instructions": 1.1198755256458526e-9,
        "harassment/threatening": 0.5694745779037476,
        "violence": 0.9971134662628174
      }
    }
  ]
}
The moderation object
Represents if a given text input is potentially harmful.

id
string
The unique identifier for the moderation request.
model
string
The model used to generate the moderation results.
results
array
A list of moderation objects.

Show properties
OBJECT The moderation object

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
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
{
  "id": "modr-0d9740456c391e43c445bf0f010940c7",
  "model": "omni-moderation-latest",
  "results": [
    {
      "flagged": true,
      "categories": {
        "harassment": true,
        "harassment/threatening": true,
        "sexual": false,
        "hate": false,
        "hate/threatening": false,
        "illicit": false,
        "illicit/violent": false,
        "self-harm/intent": false,
        "self-harm/instructions": false,
        "self-harm": false,
        "sexual/minors": false,
        "violence": true,
        "violence/graphic": true
      },
      "category_scores": {
        "harassment": 0.8189693396524255,
        "harassment/threatening": 0.804985420696006,
        "sexual": 1.573112165348997e-6,
        "hate": 0.007562942636942845,
        "hate/threatening": 0.004208854591835476,
        "illicit": 0.030535955153511665,
        "illicit/violent": 0.008925306722380033,
        "self-harm/intent": 0.00023023930975076432,
        "self-harm/instructions": 0.0002293869201073356,
        "self-harm": 0.012598046106750154,
        "sexual/minors": 2.212566909570261e-8,
        "violence": 0.9999992735124786,
        "violence/graphic": 0.843064871157054
      },
      "category_applied_input_types": {
        "harassment": [
          "text"
        ],
        "harassment/threatening": [
          "text"
        ],
        "sexual": [
          "text",
          "image"
        ],
        "hate": [
          "text"
        ],
        "hate/threatening": [
          "text"
        ],
        "illicit": [
          "text"
        ],
        "illicit/violent": [
          "text"
        ],
        "self-harm/intent": [
          "text",
          "image"
        ],
        "self-harm/instructions": [
          "text",
          "image"
        ],
        "self-harm": [
          "text",
          "image"
        ],
        "sexual/minors": [
          "text"
        ],
        "violence": [
          "text",
          "image"
        ],
        "violence/graphic": [
          "text",
          "image"
        ]
      }
    }
  ]
}
Vector stores
Vector stores power semantic search for the Retrieval API and the file_search tool in the Responses and Assistants APIs.

Related guide: File Search
Create vector store
POST
 
https://api.openai.com/v1/vector_stores
Create a vector store.
Request body
chunking_strategy
object
Optional
The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. Only applicable if file_ids is non-empty.

Show possible types
description
string
Optional
A description for the vector store. Can be used to describe the vector store's purpose.
expires_after
object
Optional
The expiration policy for a vector store.

Show properties
file_ids
array
Optional
A list of File IDs that the vector store should use. Useful for tools like file_search that can access files.
metadata
map
Optional
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
name
string
Optional
The name of the vector store.
Returns
A vector store object.

Example request
curl

1
2
3
4
5
6
7
curl https://api.openai.com/v1/vector_stores \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2" \
  -d '{
    "name": "Support FAQ"
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
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776,
  "name": "Support FAQ",
  "description": "Contains commonly asked questions and answers, organized by topic.",
  "bytes": 139920,
  "file_counts": {
    "in_progress": 0,
    "completed": 3,
    "failed": 0,
    "cancelled": 0,
    "total": 3
  }
}
List vector stores
GET
 
https://api.openai.com/v1/vector_stores
Returns a list of vector stores.
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
before
string
Optional
A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
limit
integer
Optional
Defaults to 20
A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
order
string
Optional
Defaults to desc
Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
Returns
A list of vector store objects.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/vector_stores \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
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
34
35
36
37
38
{
  "object": "list",
  "data": [
    {
      "id": "vs_abc123",
      "object": "vector_store",
      "created_at": 1699061776,
      "name": "Support FAQ",
      "description": "Contains commonly asked questions and answers, organized by topic.",
      "bytes": 139920,
      "file_counts": {
        "in_progress": 0,
        "completed": 3,
        "failed": 0,
        "cancelled": 0,
        "total": 3
      }
    },
    {
      "id": "vs_abc456",
      "object": "vector_store",
      "created_at": 1699061776,
      "name": "Support FAQ v2",
      "description": null,
      "bytes": 139920,
      "file_counts": {
        "in_progress": 0,
        "completed": 3,
        "failed": 0,
        "cancelled": 0,
        "total": 3
      }
    }
  ],
  "first_id": "vs_abc123",
  "last_id": "vs_abc456",
  "has_more": false
}
Retrieve vector store
GET
 
https://api.openai.com/v1/vector_stores/{vector_store_id}
Retrieves a vector store.
Path parameters
vector_store_id
string
Required
The ID of the vector store to retrieve.
Returns
The vector store object matching the specified ID.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
Response

1
2
3
4
5
{
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776
}
Modify vector store
POST
 
https://api.openai.com/v1/vector_stores/{vector_store_id}
Modifies a vector store.
Path parameters
vector_store_id
string
Required
The ID of the vector store to modify.
Request body
expires_after
object or null
Optional
The expiration policy for a vector store.

Show properties
metadata
map
Optional
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
name
string or null
Optional
The name of the vector store.
Returns
The modified vector store object.

Example request
curl

1
2
3
4
5
6
7
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
  -d '{
    "name": "Support FAQ"
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
  "id": "vs_abc123",
  "object": "vector_store",
  "created_at": 1699061776,
  "name": "Support FAQ",
  "description": "Contains commonly asked questions and answers, organized by topic.",
  "bytes": 139920,
  "file_counts": {
    "in_progress": 0,
    "completed": 3,
    "failed": 0,
    "cancelled": 0,
    "total": 3
  }
}
Delete vector store
DELETE
 
https://api.openai.com/v1/vector_stores/{vector_store_id}
Delete a vector store.
Path parameters
vector_store_id
string
Required
The ID of the vector store to delete.
Returns
Deletion status

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/vector_stores/vs_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2" \
  -X DELETE
Response

1
2
3
4
5
{
  id: "vs_abc123",
  object: "vector_store.deleted",
  deleted: true
}
Search vector store
POST
 
https://api.openai.com/v1/vector_stores/{vector_store_id}/search
Search a vector store for relevant chunks based on a query and file attributes filter.
Path parameters
vector_store_id
string
Required
The ID of the vector store to search.
Request body
query
string or array
Required
A query string for a search
filters
object
Optional
A filter to apply based on file attributes.

Show possible types
max_num_results
integer
Optional
Defaults to 10
The maximum number of results to return. This number should be between 1 and 50 inclusive.
ranking_options
object
Optional
Ranking options for search.

Show properties
rewrite_query
boolean
Optional
Defaults to false
Whether to rewrite the natural language query for vector search.
Returns
A page of search results from the vector store.

Example request
curl

1
2
3
4
5
curl -X POST \
https://api.openai.com/v1/vector_stores/vs_abc123/search \
-H "Authorization: Bearer $OPENAI_API_KEY" \
-H "Content-Type: application/json" \
-d '{"query": "What is the return policy?", "filters": {...}}'
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
34
35
36
37
38
{
  "object": "vector_store.search_results.page",
  "search_query": "What is the return policy?",
  "data": [
    {
      "file_id": "file_123",
      "filename": "document.pdf",
      "score": 0.95,
      "attributes": {
        "author": "John Doe",
        "date": "2023-01-01"
      },
      "content": [
        {
          "type": "text",
          "text": "Relevant chunk"
        }
      ]
    },
    {
      "file_id": "file_456",
      "filename": "notes.txt",
      "score": 0.89,
      "attributes": {
        "author": "Jane Smith",
        "date": "2023-01-02"
      },
      "content": [
        {
          "type": "text",
          "text": "Sample text content from the vector store."
        }
      ]
    }
  ],
  "has_more": false,
  "next_page": null
}
The vector store object
A vector store is a collection of processed files can be used by the file_search tool.

created_at
integer
The Unix timestamp (in seconds) for when the vector store was created.
expires_after
object
The expiration policy for a vector store.

Show properties
expires_at
integer
The Unix timestamp (in seconds) for when the vector store will expire.
file_counts
object

Show properties
id
string
The identifier, which can be referenced in API endpoints.
last_active_at
integer
The Unix timestamp (in seconds) for when the vector store was last active.
metadata
map
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
name
string
The name of the vector store.
object
string
The object type, which is always vector_store.
status
string
The status of the vector store, which can be either expired, in_progress, or completed. A status of completed indicates that the vector store is ready for use.
usage_bytes
integer
The total number of bytes used by the files in the vector store.
OBJECT The vector store object

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
{
  "id": "vs_123",
  "object": "vector_store",
  "created_at": 1698107661,
  "usage_bytes": 123456,
  "last_active_at": 1698107661,
  "name": "my_vector_store",
  "status": "completed",
  "file_counts": {
    "in_progress": 0,
    "completed": 100,
    "cancelled": 0,
    "failed": 0,
    "total": 100
  },
  "last_used_at": 1698107661
}