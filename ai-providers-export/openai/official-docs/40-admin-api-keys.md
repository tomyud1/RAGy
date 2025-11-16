# Admin API Keys

Admin API Keys
Admin API keys enable Organization Owners to programmatically manage various aspects of their organization, including users, projects, and API keys. These keys provide administrative capabilities, such as creating, updating, and deleting users; managing projects; and overseeing API key lifecycles.

Key Features of Admin API Keys:

User Management: Invite new users, update roles, and remove users from the organization.
Project Management: Create, update, archive projects, and manage user assignments within projects.
API Key Oversight: List, retrieve, and delete API keys associated with projects.
Only Organization Owners have the authority to create and utilize Admin API keys. To manage these keys, Organization Owners can navigate to the Admin Keys section of their API Platform dashboard.

For direct access to the Admin Keys management page, Organization Owners can use the following link:

https://platform.openai.com/settings/organization/admin-keys

It's crucial to handle Admin API keys with care due to their elevated permissions. Adhering to best practices, such as regular key rotation and assigning appropriate permissions, enhances security and ensures proper governance within the organization.
List all organization and project API keys.
GET
 
https://api.openai.com/v1/organization/admin_api_keys
List organization API keys
Query parameters
after
string or null
Optional
limit
integer
Optional
Defaults to 20
order
string
Optional
Defaults to asc
Returns
A list of admin and project API key objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/admin_api_keys?after=key_abc&limit=20 \
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
{
  "object": "list",
  "data": [
    {
      "object": "organization.admin_api_key",
      "id": "key_abc",
      "name": "Main Admin Key",
      "redacted_value": "sk-admin...def",
      "created_at": 1711471533,
      "last_used_at": 1711471534,
      "owner": {
        "type": "service_account",
        "object": "organization.service_account",
        "id": "sa_456",
        "name": "My Service Account",
        "created_at": 1711471533,
        "role": "member"
      }
    }
  ],
  "first_id": "key_abc",
  "last_id": "key_abc",
  "has_more": false
}
Create admin API key
POST
 
https://api.openai.com/v1/organization/admin_api_keys
Create an organization admin API key
Request body
name
string
Required
Returns
The created AdminApiKey object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/admin_api_keys \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "New Admin Key"
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
{
  "object": "organization.admin_api_key",
  "id": "key_xyz",
  "name": "New Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  },
  "value": "sk-admin-1234abcd"
}
Retrieve admin API key
GET
 
https://api.openai.com/v1/organization/admin_api_keys/{key_id}
Retrieve a single organization API key
Path parameters
key_id
string
Required
Returns
The requested AdminApiKey object.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/admin_api_keys/key_abc \
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
  "object": "organization.admin_api_key",
  "id": "key_abc",
  "name": "Main Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  }
}
Delete admin API key
DELETE
 
https://api.openai.com/v1/organization/admin_api_keys/{key_id}
Delete an organization admin API key
Path parameters
key_id
string
Required
Returns
A confirmation object indicating the key was deleted.

Example request
curl

1
2
3
curl -X DELETE https://api.openai.com/v1/organization/admin_api_keys/key_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json"
Response

1
2
3
4
5
{
  "id": "key_abc",
  "object": "organization.admin_api_key.deleted",
  "deleted": true
}
The admin API key object
Represents an individual Admin API key in an org.

created_at
integer
The Unix timestamp (in seconds) of when the API key was created
id
string
The identifier, which can be referenced in API endpoints
last_used_at
integer
The Unix timestamp (in seconds) of when the API key was last used
name
string
The name of the API key
object
string
The object type, which is always organization.admin_api_key
owner
object

Show properties
redacted_value
string
The redacted value of the API key
value
string
The value of the API key. Only shown on create.
OBJECT The admin API key object

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
  "object": "organization.admin_api_key",
  "id": "key_abc",
  "name": "Main Admin Key",
  "redacted_value": "sk-admin...xyz",
  "created_at": 1711471533,
  "last_used_at": 1711471534,
  "owner": {
    "type": "user",
    "object": "organization.user",
    "id": "user_123",
    "name": "John Doe",
    "created_at": 1711471533,
    "role": "owner"
  }
}