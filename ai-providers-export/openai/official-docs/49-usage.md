# Usage

Usage
The Usage API provides detailed insights into your activity across the OpenAI API. It also includes a separate Costs endpoint, which offers visibility into your spend, breaking down consumption by invoice line items and project IDs.

While the Usage API delivers granular usage data, it may not always reconcile perfectly with the Costs due to minor differences in how usage and spend are recorded. For financial purposes, we recommend using the Costs endpoint or the Costs tab in the Usage Dashboard, which will reconcile back to your billing invoice.
Completions
GET
 
https://api.openai.com/v1/organization/usage/completions
Get completions usage details for the organization.
Query parameters
start_time
integer
Required
Start time (Unix seconds) of the query time range, inclusive.
api_key_ids
array
Optional
Return only usage for these API keys.
batch
boolean
Optional
If true, return batch jobs only. If false, return non-batch jobs only. By default, return both.
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
Group the usage data by the specified fields. Support fields include project_id, user_id, api_key_id, model, batch or any combination of them.
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
A list of paginated, time bucketed Completions usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/completions?start_time=1730419200&limit=1" \
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
{
    "object": "page",
    "data": [
        {
            "object": "bucket",
            "start_time": 1730419200,
            "end_time": 1730505600,
            "results": [
                {
                    "object": "organization.usage.completions.result",
                    "input_tokens": 1000,
                    "output_tokens": 500,
                    "input_cached_tokens": 800,
                    "input_audio_tokens": 0,
                    "output_audio_tokens": 0,
                    "num_model_requests": 5,
                    "project_id": null,
                    "user_id": null,
                    "api_key_id": null,
                    "model": null,
                    "batch": null
                }
            ]
        }
    ],
    "has_more": true,
    "next_page": "page_AAAAAGdGxdEiJdKOAAAAAGcqsYA="
}
Completions usage object
The aggregated completions usage details of the specific time bucket.

api_key_id
string
When group_by=api_key_id, this field provides the API key ID of the grouped usage result.
batch
boolean
When group_by=batch, this field tells whether the grouped usage result is batch or not.
input_audio_tokens
integer
The aggregated number of audio input tokens used, including cached tokens.
input_cached_tokens
integer
The aggregated number of text input tokens that has been cached from previous requests. For customers subscribe to scale tier, this includes scale tier tokens.
input_tokens
integer
The aggregated number of text input tokens used, including cached tokens. For customers subscribe to scale tier, this includes scale tier tokens.
model
string
When group_by=model, this field provides the model name of the grouped usage result.
num_model_requests
integer
The count of requests made to the model.
object
string
output_audio_tokens
integer
The aggregated number of audio output tokens used.
output_tokens
integer
The aggregated number of text output tokens used. For customers subscribe to scale tier, this includes scale tier tokens.
project_id
string
When group_by=project_id, this field provides the project ID of the grouped usage result.
user_id
string
When group_by=user_id, this field provides the user ID of the grouped usage result.
OBJECT Completions usage object

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
    "object": "organization.usage.completions.result",
    "input_tokens": 5000,
    "output_tokens": 1000,
    "input_cached_tokens": 4000,
    "input_audio_tokens": 300,
    "output_audio_tokens": 200,
    "num_model_requests": 5,
    "project_id": "proj_abc",
    "user_id": "user-abc",
    "api_key_id": "key_abc",
    "model": "gpt-4o-mini-2024-07-18",
    "batch": false
}