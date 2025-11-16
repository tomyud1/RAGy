# Users

Users
Manage users and their role in an organization.
List users
GET
 
https://api.openai.com/v1/organization/users
Lists all of the users in the organization.
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
emails
array
Optional
Filter by the email address of users.
limit
integer
Optional
Defaults to 20
A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
Returns
A list of User objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/users?after=user_abc&limit=20 \
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
            "object": "organization.user",
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
Modify user
POST
 
https://api.openai.com/v1/organization/users/{user_id}
Modifies a user's role in the organization.
Path parameters
user_id
string
Required
The ID of the user.
Request body
role
string
Required
owner or reader
Returns
The updated User object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/users/user_abc \
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
    "object": "organization.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}
Retrieve user
GET
 
https://api.openai.com/v1/organization/users/{user_id}
Retrieves a user by their identifier.
Path parameters
user_id
string
Required
The ID of the user.
Returns
The User object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/users/user_abc \
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
    "object": "organization.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}
Delete user
DELETE
 
https://api.openai.com/v1/organization/users/{user_id}
Deletes a user from the organization.
Path parameters
user_id
string
Required
The ID of the user.
Returns
Confirmation of the deleted user

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/users/user_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
    "object": "organization.user.deleted",
    "id": "user_abc",
    "deleted": true
}
The user object
Represents an individual user within an organization.

added_at
integer
The Unix timestamp (in seconds) of when the user was added.
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
The object type, which is always organization.user
role
string
owner or reader
OBJECT The user object

1
2
3
4
5
6
7
8
{
    "object": "organization.user",
    "id": "user_abc",
    "name": "First Last",
    "email": "user@example.com",
    "role": "owner",
    "added_at": 1711471533
}