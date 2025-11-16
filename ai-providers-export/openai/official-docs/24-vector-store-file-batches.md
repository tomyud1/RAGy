# Vector store file batches

Vector store file batches
Vector store file batches represent operations to add multiple files to a vector store. Related guide: File Search
Create vector store file batch
POST
 
https://api.openai.com/v1/vector_stores/{vector_store_id}/file_batches
Create a vector store file batch.
Path parameters
vector_store_id
string
Required
The ID of the vector store for which to create a File Batch.
Request body
file_ids
array
Required
A list of File IDs that the vector store should use. Useful for tools like file_search that can access files.
attributes
map
Optional
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard. Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters, booleans, or numbers.
chunking_strategy
object
Optional
The chunking strategy used to chunk the file(s). If not set, will use the auto strategy.

Show possible types
Returns
A vector store file batch object.

Example request
curl

1
2
3
4
5
6
7
curl https://api.openai.com/v1/vector_stores/vs_abc123/file_batches \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json \
    -H "OpenAI-Beta: assistants=v2" \
    -d '{
      "file_ids": ["file-abc123", "file-abc456"]
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
{
  "id": "vsfb_abc123",
  "object": "vector_store.file_batch",
  "created_at": 1699061776,
  "vector_store_id": "vs_abc123",
  "status": "in_progress",
  "file_counts": {
    "in_progress": 1,
    "completed": 1,
    "failed": 0,
    "cancelled": 0,
    "total": 0,
  }
}
Retrieve vector store file batch
GET
 
https://api.openai.com/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}
Retrieves a vector store file batch.
Path parameters
batch_id
string
Required
The ID of the file batch being retrieved.
vector_store_id
string
Required
The ID of the vector store that the file batch belongs to.
Returns
The vector store file batch object.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/vector_stores/vs_abc123/files_batches/vsfb_abc123 \
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
{
  "id": "vsfb_abc123",
  "object": "vector_store.file_batch",
  "created_at": 1699061776,
  "vector_store_id": "vs_abc123",
  "status": "in_progress",
  "file_counts": {
    "in_progress": 1,
    "completed": 1,
    "failed": 0,
    "cancelled": 0,
    "total": 0,
  }
}
Cancel vector store file batch
POST
 
https://api.openai.com/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel
Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible.
Path parameters
batch_id
string
Required
The ID of the file batch to cancel.
vector_store_id
string
Required
The ID of the vector store that the file batch belongs to.
Returns
The modified vector store file batch object.

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/vector_stores/vs_abc123/files_batches/vsfb_abc123/cancel \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2" \
  -X POST
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
{
  "id": "vsfb_abc123",
  "object": "vector_store.file_batch",
  "created_at": 1699061776,
  "vector_store_id": "vs_abc123",
  "status": "in_progress",
  "file_counts": {
    "in_progress": 12,
    "completed": 3,
    "failed": 0,
    "cancelled": 0,
    "total": 15,
  }
}
List vector store files in a batch
GET
 
https://api.openai.com/v1/vector_stores/{vector_store_id}/file_batches/{batch_id}/files
Returns a list of vector store files in a batch.
Path parameters
batch_id
string
Required
The ID of the file batch that the files belong to.
vector_store_id
string
Required
The ID of the vector store that the files belong to.
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
before
string
Optional
A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
filter
string
Optional
Filter by file status. One of in_progress, completed, failed, cancelled.
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
A list of vector store file objects.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/vector_stores/vs_abc123/files_batches/vsfb_abc123/files \
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
{
  "object": "list",
  "data": [
    {
      "id": "file-abc123",
      "object": "vector_store.file",
      "created_at": 1699061776,
      "vector_store_id": "vs_abc123"
    },
    {
      "id": "file-abc456",
      "object": "vector_store.file",
      "created_at": 1699061776,
      "vector_store_id": "vs_abc123"
    }
  ],
  "first_id": "file-abc123",
  "last_id": "file-abc456",
  "has_more": false
}
The vector store files batch object
Beta
A batch of files attached to a vector store.

created_at
integer
The Unix timestamp (in seconds) for when the vector store files batch was created.
file_counts
object

Show properties
id
string
The identifier, which can be referenced in API endpoints.
object
string
The object type, which is always vector_store.file_batch.
status
string
The status of the vector store files batch, which can be either in_progress, completed, cancelled or failed.
vector_store_id
string
The ID of the vector store that the File is attached to.
OBJECT The vector store files batch object

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
{
  "id": "vsfb_123",
  "object": "vector_store.files_batch",
  "created_at": 1698107661,
  "vector_store_id": "vs_abc123",
  "status": "completed",
  "file_counts": {
    "in_progress": 0,
    "completed": 100,
    "failed": 0,
    "cancelled": 0,
    "total": 100
  }
}