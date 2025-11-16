# Certificates

Certificates
Beta
Manage Mutual TLS certificates across your organization and projects.

Learn more about Mutual TLS.
Upload certificate
POST
 
https://api.openai.com/v1/organization/certificates
Upload a certificate to the organization. This does not automatically activate the certificate.
Organizations can upload up to 50 certificates.
Request body
content
string
Required
The certificate content in PEM format
name
string
Optional
An optional name for the certificate
Returns
A single Certificate object.

Example request
curl

1
2
3
4
5
6
7
curl -X POST https://api.openai.com/v1/organization/certificates \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "name": "My Example Certificate",
  "certificate": "-----BEGIN CERTIFICATE-----\\nMIIDeT...\\n-----END CERTIFICATE-----"
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
{
  "object": "certificate",
  "id": "cert_abc",
  "name": "My Example Certificate",
  "created_at": 1234567,
  "certificate_details": {
    "valid_at": 12345667,
    "expires_at": 12345678
  }
}
Get certificate
GET
 
https://api.openai.com/v1/organization/certificates/{certificate_id}
Get a certificate that has been uploaded to the organization.
You can get a certificate regardless of whether it is active or not.
Path parameters
certificate_id
string
Required
Unique ID of the certificate to retrieve.
Query parameters
include
array
Optional
A list of additional fields to include in the response. Currently the only supported value is content to fetch the PEM content of the certificate.
Returns
A single Certificate object.

Example request
curl

1
2
curl "https://api.openai.com/v1/organization/certificates/cert_abc?include[]=content" \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY"
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
{
  "object": "certificate",
  "id": "cert_abc",
  "name": "My Example Certificate",
  "created_at": 1234567,
  "certificate_details": {
    "valid_at": 1234567,
    "expires_at": 12345678,
    "content": "-----BEGIN CERTIFICATE-----MIIDeT...-----END CERTIFICATE-----"
  }
}
Modify certificate
POST
 
https://api.openai.com/v1/organization/certificates/{certificate_id}
Modify a certificate. Note that only the name can be modified.
Request body
name
string
Required
The updated name for the certificate
Returns
The updated Certificate object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/certificates/cert_abc \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "name": "Renamed Certificate"
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
{
  "object": "certificate",
  "id": "cert_abc",
  "name": "Renamed Certificate",
  "created_at": 1234567,
  "certificate_details": {
    "valid_at": 12345667,
    "expires_at": 12345678
  }
}
Delete certificate
DELETE
 
https://api.openai.com/v1/organization/certificates/{certificate_id}
Delete a certificate from the organization.
The certificate must be inactive for the organization and all projects.
Returns
A confirmation object indicating the certificate was deleted.

Example request
curl

1
2
curl -X DELETE https://api.openai.com/v1/organization/certificates/cert_abc \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY"
Response

1
2
3
4
{
  "object": "certificate.deleted",
  "id": "cert_abc"
}
List organization certificates
GET
 
https://api.openai.com/v1/organization/certificates
List uploaded certificates for this organization.
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
A list of Certificate objects.

Example request
curl

1
2
curl https://api.openai.com/v1/organization/certificates \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY"
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
  "object": "list",
  "data": [
    {
      "object": "organization.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
  "first_id": "cert_abc",
  "last_id": "cert_abc",
  "has_more": false
}
List project certificates
GET
 
https://api.openai.com/v1/organization/projects/{project_id}/certificates
List certificates for this project.
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
order
string
Optional
Defaults to desc
Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
Returns
A list of Certificate objects.

Example request
curl

1
2
curl https://api.openai.com/v1/organization/projects/proj_abc/certificates \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY"
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
  "object": "list",
  "data": [
    {
      "object": "organization.project.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
  "first_id": "cert_abc",
  "last_id": "cert_abc",
  "has_more": false
}
Activate certificates for organization
POST
 
https://api.openai.com/v1/organization/certificates/activate
Activate certificates at the organization level.
You can atomically and idempotently activate up to 10 certificates at a time.
Request body
certificate_ids
array
Required
Returns
A list of Certificate objects that were activated.

Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/organization/certificates/activate \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "data": ["cert_abc", "cert_def"]
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
{
  "object": "organization.certificate.activation",
  "data": [
    {
      "object": "organization.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
    {
      "object": "organization.certificate",
      "id": "cert_def",
      "name": "My Example Certificate 2",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
}
Deactivate certificates for organization
POST
 
https://api.openai.com/v1/organization/certificates/deactivate
Deactivate certificates at the organization level.
You can atomically and idempotently deactivate up to 10 certificates at a time.
Request body
certificate_ids
array
Required
Returns
A list of Certificate objects that were deactivated.

Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/organization/certificates/deactivate \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "data": ["cert_abc", "cert_def"]
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
{
  "object": "organization.certificate.deactivation",
  "data": [
    {
      "object": "organization.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": false,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
    {
      "object": "organization.certificate",
      "id": "cert_def",
      "name": "My Example Certificate 2",
      "active": false,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
}
Activate certificates for project
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/certificates/activate
Activate certificates at the project level.
You can atomically and idempotently activate up to 10 certificates at a time.
Path parameters
project_id
string
Required
The ID of the project.
Request body
certificate_ids
array
Required
Returns
A list of Certificate objects that were activated.

Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/organization/projects/proj_abc/certificates/activate \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "data": ["cert_abc", "cert_def"]
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
{
  "object": "organization.project.certificate.activation",
  "data": [
    {
      "object": "organization.project.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
    {
      "object": "organization.project.certificate",
      "id": "cert_def",
      "name": "My Example Certificate 2",
      "active": true,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
}
Deactivate certificates for project
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/certificates/deactivate
Deactivate certificates at the project level. You can atomically and idempotently deactivate up to 10 certificates at a time.
Path parameters
project_id
string
Required
The ID of the project.
Request body
certificate_ids
array
Required
Returns
A list of Certificate objects that were deactivated.

Example request
curl

1
2
3
4
5
6
curl https://api.openai.com/v1/organization/projects/proj_abc/certificates/deactivate \
-H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
-H "Content-Type: application/json" \
-d '{
  "data": ["cert_abc", "cert_def"]
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
{
  "object": "organization.project.certificate.deactivation",
  "data": [
    {
      "object": "organization.project.certificate",
      "id": "cert_abc",
      "name": "My Example Certificate",
      "active": false,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
    {
      "object": "organization.project.certificate",
      "id": "cert_def",
      "name": "My Example Certificate 2",
      "active": false,
      "created_at": 1234567,
      "certificate_details": {
        "valid_at": 12345667,
        "expires_at": 12345678
      }
    },
  ],
}
The certificate object
Represents an individual certificate uploaded to the organization.

active
boolean
Whether the certificate is currently active at the specified scope. Not returned when getting details for a specific certificate.
certificate_details
object

Show properties
created_at
integer
The Unix timestamp (in seconds) of when the certificate was uploaded.
id
string
The identifier, which can be referenced in API endpoints
name
string
The name of the certificate.
object
string
The object type.

If creating, updating, or getting a specific certificate, the object type is certificate.
If listing, activating, or deactivating certificates for the organization, the object type is organization.certificate.
If listing, activating, or deactivating certificates for a project, the object type is organization.project.certificate.
OBJECT The certificate object

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
{
  "object": "certificate",
  "id": "cert_abc",
  "name": "My Certificate",
  "created_at": 1234567,
  "certificate_details": {
    "valid_at": 1234567,
    "expires_at": 12345678,
    "content": "-----BEGIN CERTIFICATE----- MIIGAjCCA...6znFlOW+ -----END CERTIFICATE-----"
  }
}