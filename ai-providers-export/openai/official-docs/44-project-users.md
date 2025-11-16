# Project users

Project users
Manage users within a project, including adding, updating roles, and removing users.
List project users
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/users
Returns a list of users in the project.
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
A list of ProjectUser objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/users?after=user_abc&limit=20 \
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
{
    "object": "list",
    "data": [
        {
            "object": "organization.project.user",
            "id": "user_abc",
            "name": "First Last",
            "email": "user@example.com",
            "role": "owner",
            "added_at": 1711471533
        }
    ],
    "first_id": "user-abc",
    "last_id": "user-xyz",
    "has_more": false
}
Create project user
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/users
Adds a user to the project. Users must already be members of the organization to be added to a project.
Path parameters
project_id
string
Required
The ID of the project.
Request body
role
string
Required
owner or member
user_id
string
Required
The ID of the user.
Returns
The created ProjectUser object.

Example request
curl

1
2
3
4
5
6
7
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc/users \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "user_id": "user_abc",
      "role": "member"
  }'
Response

1
2
3
4
5
6
7
{
    "object": "organization.project.user",
    "id": "user_abc",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}
Retrieve project user
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/users/{user_id}
Retrieves a user in the project.
Path parameters
project_id
string
Required
The ID of the project.
user_id
string
Required
The ID of the user.
Returns
The ProjectUser object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/users/user_abc \
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
{
    "object": "organization.project.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}
Modify project user
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/users/{user_id}
Modifies a user's role in the project.
Path parameters
project_id
string
Required
The ID of the project.
user_id
string
Required
The ID of the user.
Request body
role
string
Required
owner or member
Returns
The updated ProjectUser object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc/users/user_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "role": "owner"
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
{
    "object": "organization.project.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}
Delete project user
DELETE
 
https://api.openai.com/v1/organization/projects/{project_id}/users/{user_id}
Deletes a user from the project.
Path parameters
project_id
string
Required
The ID of the project.
user_id
string
Required
The ID of the user.
Returns
Confirmation that project has been deleted or an error in case of an archived project, which has no users

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/projects/proj_abc/users/user_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
    "object": "organization.project.user.deleted",
    "id": "user_abc",
    "deleted": true
}
The project user object
Represents an individual user in a project.

added_at
integer
The Unix timestamp (in seconds) of when the project was added.
email
string
The email address of the user
id
string
The identifier, which can be referenced in API endpoints
name
string
The name of the user
object
string
The object type, which is always organization.project.user
role
string
owner or member
OBJECT The project user object

1
2
3
4
5
6
7
8
{
    "object": "organization.project.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}