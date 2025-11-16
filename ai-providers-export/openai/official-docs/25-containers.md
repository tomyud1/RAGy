# Containers

Containers
Create and manage containers for use with the Code Interpreter tool.
Create container
POST
 
https://api.openai.com/v1/containers
Create Container
Request body
name
string
Required
Name of the container to create.
expires_after
object
Optional
Container expiration time in seconds relative to the 'anchor' time.

Show properties
file_ids
array
Optional
IDs of files to copy to the container.
Returns
The created container object.

Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/containers \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "My Container"
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
{
    "id": "cntr_682e30645a488191b6363a0cbefc0f0a025ec61b66250591",
    "object": "container",
    "created_at": 1747857508,
    "status": "running",
    "expires_after": {
        "anchor": "last_active_at",
        "minutes": 20
    },
    "last_active_at": 1747857508,
    "name": "My Container"
}
List containers
GET
 
https://api.openai.com/v1/containers
List Containers
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
a list of container objects.

Example request
curl

1
2
curl https://api.openai.com/v1/containers \
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
{
  "object": "list",
  "data": [
    {
        "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
        "object": "container",
        "created_at": 1747844794,
        "status": "running",
        "expires_after": {
            "anchor": "last_active_at",
            "minutes": 20
        },
        "last_active_at": 1747844794,
        "name": "My Container"
    }
  ],
  "first_id": "container_123",
  "last_id": "container_123",
  "has_more": false
}
Retrieve container
GET
 
https://api.openai.com/v1/containers/{container_id}
Retrieve Container
Path parameters
container_id
string
Required
Returns
The container object.

Example request
curl

1
2
curl https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863 \
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
{
    "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
    "object": "container",
    "created_at": 1747844794,
    "status": "running",
    "expires_after": {
        "anchor": "last_active_at",
        "minutes": 20
    },
    "last_active_at": 1747844794,
    "name": "My Container"
}
Delete a container
DELETE
 
https://api.openai.com/v1/containers/{container_id}
Delete Container
Path parameters
container_id
string
Required
The ID of the container to delete.
Returns
Deletion Status

Example request
curl

1
2
curl -X DELETE https://api.openai.com/v1/containers/cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863 \
  -H "Authorization: Bearer $OPENAI_API_KEY"
Response

1
2
3
4
5
{
    "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
    "object": "container.deleted",
    "deleted": true
}
The container object
created_at
integer
Unix timestamp (in seconds) when the container was created.
expires_after
object
The container will expire after this time period. The anchor is the reference point for the expiration. The minutes is the number of minutes after the anchor before the container expires.

Show properties
id
string
Unique identifier for the container.
name
string
Name of the container.
object
string
The type of this object.
status
string
Status of the container (e.g., active, deleted).
OBJECT The container object

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
{
   "id": "cntr_682dfebaacac8198bbfe9c2474fb6f4a085685cbe3cb5863",
   "object": "container",
   "created_at": 1747844794,
   "status": "running",
   "expires_after": {
     "anchor": "last_active_at",
     "minutes": 20
   },
   "last_active_at": 1747844794,
   "name": "My Container"
}