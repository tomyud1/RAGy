# Embeddings

Embeddings
GET
 
https://api.openai.com/v1/organization/usage/embeddings
Get embeddings usage details for the organization.
Query parameters
start_time
integer
Required
Start time (Unix seconds) of the query time range, inclusive.
api_key_ids
array
Optional
Return only usage for these API keys.
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
Group the usage data by the specified fields. Support fields include project_id, user_id, api_key_id, model or any combination of them.
limit
integer
Optional
Specifies the number of buckets to return.

bucket_width=1d: default: 7, max: 31
bucket_width=1h: default: 24, max: 168
bucket_width=1m: default: 60, max: 1440
models
array
Optional
Return only usage for these models.
page
string
Optional
A cursor for use in pagination. Corresponding to the next_page field from the previous response.
project_ids
array
Optional
Return only usage for these projects.
user_ids
array
Optional
Return only usage for these users.
Returns
A list of paginated, time bucketed Embeddings usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/embeddings?start_time=1730419200&limit=1" \
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
                    "object": "organization.usage.embeddings.result",
                    "input_tokens": 16,
                    "num_model_requests": 2,
                    "project_id": null,
                    "user_id": null,
                    "api_key_id": null,
                    "model": null
                }
            ]
        }
    ],
    "has_more": false,
    "next_page": null
}
Embeddings usage object
The aggregated embeddings usage details of the specific time bucket.

api_key_id
string
When group_by=api_key_id, this field provides the API key ID of the grouped usage result.
input_tokens
integer
The aggregated number of input tokens used.
model
string
When group_by=model, this field provides the model name of the grouped usage result.
num_model_requests
integer
The count of requests made to the model.
object
string
project_id
string
When group_by=project_id, this field provides the project ID of the grouped usage result.
user_id
string
When group_by=user_id, this field provides the user ID of the grouped usage result.
OBJECT Embeddings usage object

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
    "object": "organization.usage.embeddings.result",
    "input_tokens": 20,
    "num_model_requests": 2,
    "project_id": "proj_abc",
    "user_id": "user-abc",
    "api_key_id": "key_abc",
    "model": "text-embedding-ada-002-v2"
}