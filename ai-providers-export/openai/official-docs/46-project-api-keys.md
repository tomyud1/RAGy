# Project API keys

Project API keys
Manage API keys for a given project. Supports listing and deleting keys for users. This API does not allow issuing keys for users, as users need to authorize themselves to generate keys.
List project API keys
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/api_keys
Returns a list of API keys in the project.
Path parameters
project_id
string
Required
The ID of the project.
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
Returns
A list of ProjectApiKey objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/api_keys?after=key_abc&limit=20 \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
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
{
    "object": "list",
    "data": [
        {
            "object": "organization.project.api_key",
            "redacted_value": "sk-abc...def",
            "name": "My API Key",
            "created_at": 1711471533,
            "last_used_at": 1711471534,
            "id": "key_abc",
            "owner": {
                "type": "user",
                "user": {
                    "object": "organization.project.user",
                    "id": "user_abc",
                    "name": "First Last",
                    "email": "user@example.com",
                    "role": "owner",
                    "added_at": 1711471533
                }
            }
        }
    ],
    "first_id": "key_abc",
    "last_id": "key_xyz",
    "has_more": false
}
Retrieve project API key
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/api_keys/{key_id}
Retrieves an API key in the project.
Path parameters
key_id
string
Required
The ID of the API key.
project_id
string
Required
The ID of the project.
Returns
The ProjectApiKey object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/api_keys/key_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
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
{
    "object": "organization.project.api_key",
    "redacted_value": "sk-abc...def",
    "name": "My API Key",
    "created_at": 1711471533,
    "last_used_at": 1711471534,
    "id": "key_abc",
    "owner": {
        "type": "user",
        "user": {
            "object": "organization.project.user",
            "id": "user_abc",
            "name": "First Last",
            "email": "user@example.com",
            "role": "owner",
            "added_at": 1711471533
        }
    }
}
Delete project API key
DELETE
 
https://api.openai.com/v1/organization/projects/{project_id}/api_keys/{key_id}
Deletes an API key from the project.
Path parameters
key_id
string
Required
The ID of the API key.
project_id
string
Required
The ID of the project.
Returns
Confirmation of the key's deletion or an error if the key belonged to a service account

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/projects/proj_abc/api_keys/key_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
    "object": "organization.project.api_key.deleted",
    "id": "key_abc",
    "deleted": true
}
The project API key object
Represents an individual API key in a project.

created_at
integer
The Unix timestamp (in seconds) of when the API key was created
id
string
The identifier, which can be referenced in API endpoints
last_used_at
integer
The Unix timestamp (in seconds) of when the API key was last used.
name
string
The name of the API key
object
string
The object type, which is always organization.project.api_key
owner
object

Show properties
redacted_value
string
The redacted value of the API key
OBJECT The project API key object

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
{
    "object": "organization.project.api_key",
    "redacted_value": "sk-abc...def",
    "name": "My API Key",
    "created_at": 1711471533,
    "last_used_at": 1711471534,
    "id": "key_abc",
    "owner": {
        "type": "user",
        "user": {
            "object": "organization.project.user",
            "id": "user_abc",
            "name": "First Last",
            "email": "user@example.com",
            "role": "owner",
            "created_at": 1711471533
        }
    }
}