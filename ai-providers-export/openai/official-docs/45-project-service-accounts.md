# Project service accounts

Project service accounts
Manage service accounts within a project. A service account is a bot user that is not associated with a user. If a user leaves an organization, their keys and membership in projects will no longer work. Service accounts do not have this limitation. However, service accounts can also be deleted from a project.
List project service accounts
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/service_accounts
Returns a list of service accounts in the project.
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
A list of ProjectServiceAccount objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/service_accounts?after=custom_id&limit=20 \
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
{
    "object": "list",
    "data": [
        {
            "object": "organization.project.service_account",
            "id": "svc_acct_abc",
            "name": "Service Account",
            "role": "owner",
            "created_at": 1711471533
        }
    ],
    "first_id": "svc_acct_abc",
    "last_id": "svc_acct_xyz",
    "has_more": false
}
Create project service account
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/service_accounts
Creates a new service account in the project. This also returns an unredacted API key for the service account.
Path parameters
project_id
string
Required
The ID of the project.
Request body
name
string
Required
The name of the service account being created.
Returns
The created ProjectServiceAccount object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc/service_accounts \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Production App"
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
    "object": "organization.project.service_account",
    "id": "svc_acct_abc",
    "name": "Production App",
    "role": "member",
    "created_at": 1711471533,
    "api_key": {
        "object": "organization.project.service_account.api_key",
        "value": "sk-abcdefghijklmnop123",
        "name": "Secret Key",
        "created_at": 1711471533,
        "id": "key_abc"
    }
}
Retrieve project service account
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/service_accounts/{service_account_id}
Retrieves a service account in the project.
Path parameters
project_id
string
Required
The ID of the project.
service_account_id
string
Required
The ID of the service account.
Returns
The ProjectServiceAccount object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc/service_accounts/svc_acct_abc \
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
{
    "object": "organization.project.service_account",
    "id": "svc_acct_abc",
    "name": "Service Account",
    "role": "owner",
    "created_at": 1711471533
}
Delete project service account
DELETE
 
https://api.openai.com/v1/organization/projects/{project_id}/service_accounts/{service_account_id}
Deletes a service account from the project.
Path parameters
project_id
string
Required
The ID of the project.
service_account_id
string
Required
The ID of the service account.
Returns
Confirmation of service account being deleted, or an error in case of an archived project, which has no service accounts

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/projects/proj_abc/service_accounts/svc_acct_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
    "object": "organization.project.service_account.deleted",
    "id": "svc_acct_abc",
    "deleted": true
}
The project service account object
Represents an individual service account in a project.

created_at
integer
The Unix timestamp (in seconds) of when the service account was created
id
string
The identifier, which can be referenced in API endpoints
name
string
The name of the service account
object
string
The object type, which is always organization.project.service_account
role
string
owner or member
OBJECT The project service account object

1
2
3
4
5
6
7
{
    "object": "organization.project.service_account",
    "id": "svc_acct_abc",
    "name": "Service Account",
    "role": "owner",
    "created_at": 1711471533
}