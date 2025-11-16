# Container Files

Container Files
Create and manage container files for use with the Code Interpreter tool.
Create container file
POST
 
https://api.openai.com/v1/containers/{container_id}/files
Create a Container File
You can send either a multipart/form-data request with the raw file content, or a JSON request with a file ID.
Path parameters
container_id
string
Required
Request body
file
file
Optional
The File object (not file name) to be uploaded.
file_id
string
Optional
Name of the file to create.
Returns
The created container file object.

Example request
curl

1
2
3
curl https://api.openai.com/v1/containers/cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F file="@example.txt"
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
{
  "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
  "object": "container.file",
  "created_at": 1747848842,
  "bytes": 880,
  "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
  "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
  "source": "user"
}
List container files
GET
 
https://api.openai.com/v1/containers/{container_id}/files
List Container files
Path parameters
container_id
string
Required
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
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
a list of container file objects.

Example request
curl

1
2
curl https://api.openai.com/v1/containers/cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04/files \
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
{
    "object": "list",
    "data": [
        {
            "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
            "object": "container.file",
            "created_at": 1747848842,
            "bytes": 880,
            "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
            "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
            "source": "user"
        }
    ],
    "first_id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "has_more": false,
    "last_id": "cfile_682e0e8a43c88191a7978f477a09bdf5"
}
Retrieve container file
GET
 
https://api.openai.com/v1/containers/{container_id}/files/{file_id}
Retrieve Container File
Path parameters
container_id
string
Required
file_id
string
Required
Returns
The container file object.

Example request
curl

1
2
curl https://api.openai.com/v1/containers/container_123/files/file_456 \
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
{
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file",
    "created_at": 1747848842,
    "bytes": 880,
    "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
    "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
    "source": "user"
}
Retrieve container file content
GET
 
https://api.openai.com/v1/containers/{container_id}/files/{file_id}/content
Retrieve Container File Content
Path parameters
container_id
string
Required
file_id
string
Required
Returns
The contents of the container file.

Example request
curl

1
2
curl https://api.openai.com/v1/containers/container_123/files/cfile_456/content \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

<binary content of the file>
Delete a container file
DELETE
 
https://api.openai.com/v1/containers/{container_id}/files/{file_id}
Delete Container File
Path parameters
container_id
string
Required
file_id
string
Required
Returns
Deletion Status

Example request
curl

1
2
curl -X DELETE https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863/files/cfile_682e0e8a43c88191a7978f477a09bdf5 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
{
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file.deleted",
    "deleted": true
}
The container file object
bytes
integer
Size of the file in bytes.
container_id
string
The container this file belongs to.
created_at
integer
Unix timestamp (in seconds) when the file was created.
id
string
Unique identifier for the file.
object
string
The type of this object (container.file).
path
string
Path of the file in the container.
source
string
Source of the file (e.g., user, assistant).
OBJECT The container file object

1
2
3
4
5
6
7
8
9
{
    "id": "cfile_682e0e8a43c88191a7978f477a09bdf5",
    "object": "container.file",
    "created_at": 1747848842,
    "bytes": 880,
    "container_id": "cntr_682e0e7318108198aa783fd921ff305e08e78805b9fdbb04",
    "path": "/mnt/data/88e12fa445d32636f190a0b33daed6cb-tsconfig.json",
    "source": "user"
}