# Invites

Invites
Invite and manage invitations for an organization.
List invites
GET
 
https://api.openai.com/v1/organization/invites
Returns a list of invites in the organization.
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
A list of Invite objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/invites?after=invite-abc&limit=20 \
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
{
  "object": "list",
  "data": [
    {
      "object": "organization.invite",
      "id": "invite-abc",
      "email": "user@example.com",
      "role": "owner",
      "status": "accepted",
      "invited_at": 1711471533,
      "expires_at": 1711471533,
      "accepted_at": 1711471533
    }
  ],
  "first_id": "invite-abc",
  "last_id": "invite-abc",
  "has_more": false
}
Create invite
POST
 
https://api.openai.com/v1/organization/invites
Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.
Request body
email
string
Required
Send an email to this address
role
string
Required
owner or reader
projects
array
Optional
An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior.

Show properties
Returns
The created Invite object.

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
curl -X POST https://api.openai.com/v1/organization/invites \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "email": "anotheruser@example.com",
      "role": "reader",
      "projects": [
        {
          "id": "project-xyz",
          "role": "member"
        },
        {
          "id": "project-abc",
          "role": "owner"
        }
      ]
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
{
  "object": "organization.invite",
  "id": "invite-def",
  "email": "anotheruser@example.com",
  "role": "reader",
  "status": "pending",
  "invited_at": 1711471533,
  "expires_at": 1711471533,
  "accepted_at": null,
  "projects": [
    {
      "id": "project-xyz",
      "role": "member"
    },
    {
      "id": "project-abc",
      "role": "owner"
    }
  ]
}
Retrieve invite
GET
 
https://api.openai.com/v1/organization/invites/{invite_id}
Retrieves an invite.
Path parameters
invite_id
string
Required
The ID of the invite to retrieve.
Returns
The Invite object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/invites/invite-abc \
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
{
    "object": "organization.invite",
    "id": "invite-abc",
    "email": "user@example.com",
    "role": "owner",
    "status": "accepted",
    "invited_at": 1711471533,
    "expires_at": 1711471533,
    "accepted_at": 1711471533
}
Delete invite
DELETE
 
https://api.openai.com/v1/organization/invites/{invite_id}
Delete an invite. If the invite has already been accepted, it cannot be deleted.
Path parameters
invite_id
string
Required
The ID of the invite to delete.
Returns
Confirmation that the invite has been deleted

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/invites/invite-abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
    "object": "organization.invite.deleted",
    "id": "invite-abc",
    "deleted": true
}
The invite object
Represents an individual invite to the organization.

accepted_at
integer
The Unix timestamp (in seconds) of when the invite was accepted.
email
string
The email address of the individual to whom the invite was sent
expires_at
integer
The Unix timestamp (in seconds) of when the invite expires.
id
string
The identifier, which can be referenced in API endpoints
invited_at
integer
The Unix timestamp (in seconds) of when the invite was sent.
object
string
The object type, which is always organization.invite
projects
array
The projects that were granted membership upon acceptance of the invite.

Show properties
role
string
owner or reader
status
string
accepted,expired, or pending
OBJECT The invite object

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
  "object": "organization.invite",
  "id": "invite-abc",
  "email": "user@example.com",
  "role": "owner",
  "status": "accepted",
  "invited_at": 1711471533,
  "expires_at": 1711471533,
  "accepted_at": 1711471533,
  "projects": [
    {
      "id": "project-xyz",
      "role": "member"
    }
  ]
}