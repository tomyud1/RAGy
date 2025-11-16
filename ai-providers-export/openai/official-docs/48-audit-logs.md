# Audit logs

Audit logs
Logs of user actions and configuration changes within this organization. To log events, an Organization Owner must activate logging in the Data Controls Settings. Once activated, for security reasons, logging cannot be deactivated.
List audit logs
GET
 
https://api.openai.com/v1/organization/audit_logs
List user actions and configuration changes within this organization.
Query parameters
actor_emails[]
array
Optional
Return only events performed by users with these emails.
actor_ids[]
array
Optional
Return only events performed by these actors. Can be a user ID, a service account ID, or an api key tracking ID.
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
before
string
Optional
A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
effective_at
object
Optional
Return only events whose effective_at (Unix seconds) is in this range.

Show properties
event_types[]
array
Optional
Return only events with a type in one of these values. For example, project.created. For all options, see the documentation for the audit log object.
limit
integer
Optional
Defaults to 20
A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
project_ids[]
array
Optional
Return only events for these projects.
resource_ids[]
array
Optional
Return only events performed on these targets. For example, a project ID updated.
Returns
A list of paginated Audit Log objects.

Example request
curl

1
2
3
curl https://api.openai.com/v1/organization/audit_logs \
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
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
{
    "object": "list",
    "data": [
        {
            "id": "audit_log-xxx_yyyymmdd",
            "type": "project.archived",
            "effective_at": 1722461446,
            "actor": {
                "type": "api_key",
                "api_key": {
                    "type": "user",
                    "user": {
                        "id": "user-xxx",
                        "email": "user@example.com"
                    }
                }
            },
            "project.archived": {
                "id": "proj_abc"
            },
        },
        {
            "id": "audit_log-yyy__20240101",
            "type": "api_key.updated",
            "effective_at": 1720804190,
            "actor": {
                "type": "session",
                "session": {
                    "user": {
                        "id": "user-xxx",
                        "email": "user@example.com"
                    },
                    "ip_address": "127.0.0.1",
                    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "ja3": "a497151ce4338a12c4418c44d375173e",
                    "ja4": "q13d0313h3_55b375c5d22e_c7319ce65786",
                    "ip_address_details": {
                      "country": "US",
                      "city": "San Francisco",
                      "region": "California",
                      "region_code": "CA",
                      "asn": "1234",
                      "latitude": "37.77490",
                      "longitude": "-122.41940"
                    }
                }
            },
            "api_key.updated": {
                "id": "key_xxxx",
                "data": {
                    "scopes": ["resource_2.operation_2"]
                }
            },
        }
    ],
    "first_id": "audit_log-xxx__20240101",
    "last_id": "audit_log_yyy__20240101",
    "has_more": true
}
The audit log object
A log of a user action or configuration change within this organization.

actor
object
The actor who performed the audit logged action.

Show properties
api_key.created
object
The details for events with this type.

Show properties
api_key.deleted
object
The details for events with this type.

Show properties
api_key.updated
object
The details for events with this type.

Show properties
certificate.created
object
The details for events with this type.

Show properties
certificate.deleted
object
The details for events with this type.

Show properties
certificate.updated
object
The details for events with this type.

Show properties
certificates.activated
object
The details for events with this type.

Show properties
certificates.deactivated
object
The details for events with this type.

Show properties
checkpoint.permission.created
object
The project and fine-tuned model checkpoint that the checkpoint permission was created for.

Show properties
checkpoint.permission.deleted
object
The details for events with this type.

Show properties
effective_at
integer
The Unix timestamp (in seconds) of the event.
external_key.registered
object
The details for events with this type.

Show properties
external_key.removed
object
The details for events with this type.

Show properties
group.created
object
The details for events with this type.

Show properties
group.deleted
object
The details for events with this type.

Show properties
group.updated
object
The details for events with this type.

Show properties
id
string
The ID of this log.
invite.accepted
object
The details for events with this type.

Show properties
invite.deleted
object
The details for events with this type.

Show properties
invite.sent
object
The details for events with this type.

Show properties
ip_allowlist.config.activated
object
The details for events with this type.

Show properties
ip_allowlist.config.deactivated
object
The details for events with this type.

Show properties
ip_allowlist.created
object
The details for events with this type.

Show properties
ip_allowlist.deleted
object
The details for events with this type.

Show properties
ip_allowlist.updated
object
The details for events with this type.

Show properties
login.failed
object
The details for events with this type.

Show properties
login.succeeded
object
This event has no additional fields beyond the standard audit log attributes.
logout.failed
object
The details for events with this type.

Show properties
logout.succeeded
object
This event has no additional fields beyond the standard audit log attributes.
organization.updated
object
The details for events with this type.

Show properties
project
object
The project that the action was scoped to. Absent for actions not scoped to projects. Note that any admin actions taken via Admin API keys are associated with the default project.

Show properties
project.archived
object
The details for events with this type.

Show properties
project.created
object
The details for events with this type.

Show properties
project.deleted
object
The details for events with this type.

Show properties
project.updated
object
The details for events with this type.

Show properties
rate_limit.deleted
object
The details for events with this type.

Show properties
rate_limit.updated
object
The details for events with this type.

Show properties
role.assignment.created
object
The details for events with this type.

Show properties
role.assignment.deleted
object
The details for events with this type.

Show properties
role.created
object
The details for events with this type.

Show properties
role.deleted
object
The details for events with this type.

Show properties
role.updated
object
The details for events with this type.

Show properties
scim.disabled
object
The details for events with this type.

Show properties
scim.enabled
object
The details for events with this type.

Show properties
service_account.created
object
The details for events with this type.

Show properties
service_account.deleted
object
The details for events with this type.

Show properties
service_account.updated
object
The details for events with this type.

Show properties
type
string
The event type.
user.added
object
The details for events with this type.

Show properties
user.deleted
object
The details for events with this type.

Show properties
user.updated
object
The details for events with this type.

Show properties
OBJECT The audit log object

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
{
    "id": "req_xxx_20240101",
    "type": "api_key.created",
    "effective_at": 1720804090,
    "actor": {
        "type": "session",
        "session": {
            "user": {
                "id": "user-xxx",
                "email": "user@example.com"
            },
            "ip_address": "127.0.0.1",
            "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
    },
    "api_key.created": {
        "id": "key_xxxx",
        "data": {
            "scopes": ["resource.operation"]
        }
    }
}