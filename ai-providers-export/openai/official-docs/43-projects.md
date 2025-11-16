# Projects

Projects
Manage the projects within an orgnanization includes creation, updating, and archiving or projects. The Default project cannot be archived.
List projects
GET
 
https://api.openai.com/v1/organization/projects
Returns a list of projects.
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
include_archived
boolean
Optional
Defaults to false
If true returns all projects including those that have been archived. Archived projects are not included by default.
limit
integer
Optional
Defaults to 20
A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
Returns
A list of Project objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects?after=proj_abc&limit=20&include_archived=false \
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
            "id": "proj_abc",
            "object": "organization.project",
            "name": "Project example",
            "created_at": 1711471533,
            "archived_at": null,
            "status": "active"
        }
    ],
    "first_id": "proj-abc",
    "last_id": "proj-xyz",
    "has_more": false
}
Create project
POST
 
https://api.openai.com/v1/organization/projects
Create a new project in the organization. Projects can be created and archived, but cannot be deleted.
Request body
name
string
Required
The friendly name of the project, this name appears in reports.
geography
string
Optional
Create the project with the specified data residency region. Your organization must have access to Data residency functionality in order to use. See data residency controls to review the functionality and limitations of setting this field.
Returns
The created Project object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/projects \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Project ABC"
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
    "id": "proj_abc",
    "object": "organization.project",
    "name": "Project ABC",
    "created_at": 1711471533,
    "archived_at": null,
    "status": "active"
}
Retrieve project
GET
 
https://api.openai.com/v1/organization/projects/{project_id}
Retrieves a project.
Path parameters
project_id
string
Required
The ID of the project.
Returns
The Project object matching the specified ID.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/projects/proj_abc \
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
    "id": "proj_abc",
    "object": "organization.project",
    "name": "Project example",
    "created_at": 1711471533,
    "archived_at": null,
    "status": "active"
}
Modify project
POST
 
https://api.openai.com/v1/organization/projects/{project_id}
Modifies a project in the organization.
Path parameters
project_id
string
Required
The ID of the project.
Request body
name
string
Required
The updated name of the project, this name appears in reports.
Returns
The updated Project object.

Example request
curl

1
2
3
4
5
6
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc \
  -H "Authorization: Bearer $OPENAI_ADMIN_KEY" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Project DEF"
  }'
Archive project
POST
 
https://api.openai.com/v1/organization/projects/{project_id}/archive
Archives a project in the organization. Archived projects cannot be used or updated.
Path parameters
project_id
string
Required
The ID of the project.
Returns
The archived Project object.

Example request
curl

1
2
3
curl -X POST https://api.openai.com/v1/organization/projects/proj_abc/archive \
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
    "id": "proj_abc",
    "object": "organization.project",
    "name": "Project DEF",
    "created_at": 1711471533,
    "archived_at": 1711471533,
    "status": "archived"
}
The project object
Represents an individual project.

archived_at
integer
The Unix timestamp (in seconds) of when the project was archived or null.
created_at
integer
The Unix timestamp (in seconds) of when the project was created.
id
string
The identifier, which can be referenced in API endpoints
name
string
The name of the project. This appears in reporting.
object
string
The object type, which is always organization.project
status
string
active or archived
OBJECT The project object

1
2
3
4
5
6
7
8
{
    "id": "proj_abc",
    "object": "organization.project",
    "name": "Project example",
    "created_at": 1711471533,
    "archived_at": null,
    "status": "active"
}