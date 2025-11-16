# Images

Images
GET
 
https://api.openai.com/v1/organization/usage/images
Get images usage details for the organization.
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
Group the usage data by the specified fields. Support fields include project_id, user_id, api_key_id, model, size, source or any combination of them.
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
sizes
array
Optional
Return only usages for these image sizes. Possible values are 256x256, 512x512, 1024x1024, 1792x1792, 1024x1792 or any combination of them.
sources
array
Optional
Return only usages for these sources. Possible values are image.generation, image.edit, image.variation or any combination of them.
user_ids
array
Optional
Return only usage for these users.
Returns
A list of paginated, time bucketed Images usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/images?start_time=1730419200&limit=1" \
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
{
    "object": "page",
    "data": [
        {
            "object": "bucket",
            "start_time": 1730419200,
            "end_time": 1730505600,
            "results": [
                {
                    "object": "organization.usage.images.result",
                    "images": 2,
                    "num_model_requests": 2,
                    "size": null,
                    "source": null,
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
Images usage object
The aggregated images usage details of the specific time bucket.

api_key_id
string
When group_by=api_key_id, this field provides the API key ID of the grouped usage result.
images
integer
The number of images processed.
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
size
string
When group_by=size, this field provides the image size of the grouped usage result.
source
string
When group_by=source, this field provides the source of the grouped usage result, possible values are image.generation, image.edit, image.variation.
user_id
string
When group_by=user_id, this field provides the user ID of the grouped usage result.
OBJECT Images usage object

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
    "object": "organization.usage.images.result",
    "images": 2,
    "num_model_requests": 2,
    "size": "1024x1024",
    "source": "image.generation",
    "project_id": "proj_abc",
    "user_id": "user-abc",
    "api_key_id": "key_abc",
    "model": "dall-e-3"
}
Audio speeches
GET
 
https://api.openai.com/v1/organization/usage/audio_speeches
Get audio speeches usage details for the organization.
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
A list of paginated, time bucketed Audio speeches usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/audio_speeches?start_time=1730419200&limit=1" \
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
                    "object": "organization.usage.audio_speeches.result",
                    "characters": 45,
                    "num_model_requests": 1,
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
Audio speeches usage object
The aggregated audio speeches usage details of the specific time bucket.

api_key_id
string
When group_by=api_key_id, this field provides the API key ID of the grouped usage result.
characters
integer
The number of characters processed.
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
OBJECT Audio speeches usage object

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
    "object": "organization.usage.audio_speeches.result",
    "characters": 45,
    "num_model_requests": 1,
    "project_id": "proj_abc",
    "user_id": "user-abc",
    "api_key_id": "key_abc",
    "model": "tts-1"
}
Audio transcriptions
GET
 
https://api.openai.com/v1/organization/usage/audio_transcriptions
Get audio transcriptions usage details for the organization.
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
A list of paginated, time bucketed Audio transcriptions usage objects.

Example request
curl

1
2
3
curl "https://api.openai.com/v1/organization/usage/audio_transcriptions?start_time=1730419200&limit=1" \
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
                    "object": "organization.usage.audio_transcriptions.result",
                    "seconds": 20,
                    "num_model_requests": 1,
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
Audio transcriptions usage object
The aggregated audio transcriptions usage details of the specific time bucket.

api_key_id
string
When group_by=api_key_id, this field provides the API key ID of the grouped usage result.
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
seconds
integer
The number of seconds processed.
user_id
string
When group_by=user_id, this field provides the user ID of the grouped usage result.
OBJECT Audio transcriptions usage object

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
    "object": "organization.usage.audio_transcriptions.result",
    "seconds": 10,
    "num_model_requests": 1,
    "project_id": "proj_abc",
    "user_id": "user-abc",
    "api_key_id": "key_abc",
    "model": "tts-1"
}