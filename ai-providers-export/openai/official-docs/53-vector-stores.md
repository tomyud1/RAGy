# Vector stores

Vector stores
GET
 
https://api.openai.com/v1/organization/usage/vector_stores
Get vector stores usage details for the organization.
Query parameters
start_time
integer
Required
Start time (Unix seconds) of the query time range, inclusive.
bucket_width
string
Optional
Defaults to 1d
Width of each time bucket in response. Currently 1m, 1h and 1d are supported, default to 1d.
end_time
integer
Optional
End time (Unix seconds) of the query time range, exclusive.
group_by
array
Optional
Group the usage data by the specified fields. Support fields include project_id.
limit
integer
Optional
Specifies the number of buckets to return.

bucket_width=1d: default: 7, max: 31
bucket_width=1h: default: 24, max: 168
bucket_width=1m: default: 60, max: 1440
page
string
Optional
A cursor for use in pagination. Corresponding to the next_page field from the previous response.
project_ids
array
Optional
Return only usage for these projects.
Returns
A list of paginated, time bucketed Vector stores usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/vector_stores?start_time=1730419200&limit=1" \
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
    "object": "page",
    "data": [
        {
            "object": "bucket",
            "start_time": 1730419200,
            "end_time": 1730505600,
            "results": [
                {
                    "object": "organization.usage.vector_stores.result",
                    "usage_bytes": 1024,
                    "project_id": null
                }
            ]
        }
    ],
    "has_more": false,
    "next_page": null
}
Vector stores usage object
The aggregated vector stores usage details of the specific time bucket.

object
string
project_id
string
When group_by=project_id, this field provides the project ID of the grouped usage result.
usage_bytes
integer
The vector stores usage in bytes.
OBJECT Vector stores usage object

1
2
3
4
5
{
    "object": "organization.usage.vector_stores.result",
    "usage_bytes": 1024,
    "project_id": "proj_abc"
}
Code interpreter sessions
GET
 
https://api.openai.com/v1/organization/usage/code_interpreter_sessions
Get code interpreter sessions usage details for the organization.
Query parameters
start_time
integer
Required
Start time (Unix seconds) of the query time range, inclusive.
bucket_width
string
Optional
Defaults to 1d
Width of each time bucket in response. Currently 1m, 1h and 1d are supported, default to 1d.
end_time
integer
Optional
End time (Unix seconds) of the query time range, exclusive.
group_by
array
Optional
Group the usage data by the specified fields. Support fields include project_id.
limit
integer
Optional
Specifies the number of buckets to return.

bucket_width=1d: default: 7, max: 31
bucket_width=1h: default: 24, max: 168
bucket_width=1m: default: 60, max: 1440
page
string
Optional
A cursor for use in pagination. Corresponding to the next_page field from the previous response.
project_ids
array
Optional
Return only usage for these projects.
Returns
A list of paginated, time bucketed Code interpreter sessions usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/code_interpreter_sessions?start_time=1730419200&limit=1" \
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
    "object": "page",
    "data": [
        {
            "object": "bucket",
            "start_time": 1730419200,
            "end_time": 1730505600,
            "results": [
                {
                    "object": "organization.usage.code_interpreter_sessions.result",
                    "num_sessions": 1,
                    "project_id": null
                }
            ]
        }
    ],
    "has_more": false,
    "next_page": null
}
Code interpreter sessions usage object
The aggregated code interpreter sessions usage details of the specific time bucket.

num_sessions
integer
The number of code interpreter sessions.
object
string
project_id
string
When group_by=project_id, this field provides the project ID of the grouped usage result.
OBJECT Code interpreter sessions usage object

1
2
3
4
5
{
    "object": "organization.usage.code_interpreter_sessions.result",
    "num_sessions": 1,
    "project_id": "proj_abc"
}
Costs
GET
 
https://api.openai.com/v1/organization/costs
Get costs details for the organization.
Query parameters
start_time
integer
Required
Start time (Unix seconds) of the query time range, inclusive.
bucket_width
string
Optional
Defaults to 1d
Width of each time bucket in response. Currently only 1d is supported, default to 1d.
end_time
integer
Optional
End time (Unix seconds) of the query time range, exclusive.
group_by
array
Optional
Group the costs by the specified fields. Support fields include project_id, line_item and any combination of them.
limit
integer
Optional
Defaults to 7
A limit on the number of buckets to be returned. Limit can range between 1 and 180, and the default is 7.
page
string
Optional
A cursor for use in pagination. Corresponding to the next_page field from the previous response.
project_ids
array
Optional
Return only costs for these projects.
Returns
A list of paginated, time bucketed Costs objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/costs?start_time=1730419200&limit=1" \
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
{
    "object": "page",
    "data": [
        {
            "object": "bucket",
            "start_time": 1730419200,
            "end_time": 1730505600,
            "results": [
                {
                    "object": "organization.costs.result",
                    "amount": {
                        "value": 0.06,
                        "currency": "usd"
                    },
                    "line_item": null,
                    "project_id": null
                }
            ]
        }
    ],
    "has_more": false,
    "next_page": null
}
Costs object
The aggregated costs details of the specific time bucket.

amount
object
The monetary value in its associated currency.

Show properties
line_item
string
When group_by=line_item, this field provides the line item of the grouped costs result.
object
string
project_id
string
When group_by=project_id, this field provides the project ID of the grouped costs result.
OBJECT Costs object

1
2
3
4
5
6
7
8
9
{
    "object": "organization.costs.result",
    "amount": {
      "value": 0.06,
      "currency": "usd"
    },
    "line_item": "Image models",
    "project_id": "proj_abc"
}