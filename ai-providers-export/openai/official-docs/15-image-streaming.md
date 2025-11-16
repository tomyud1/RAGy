# Image Streaming

Image Streaming
Stream image generation and editing in real time with server-sent events. Learn more about image streaming.
image_generation.partial_image
Emitted when a partial image is available during image generation streaming.

b64_json
string
Base64-encoded partial image data, suitable for rendering as an image.
background
string
The background setting for the requested image.
created_at
integer
The Unix timestamp when the event was created.
output_format
string
The output format for the requested image.
partial_image_index
integer
0-based index for the partial image (streaming).
quality
string
The quality setting for the requested image.
size
string
The size of the requested image.
type
string
The type of the event. Always image_generation.partial_image.
OBJECT image_generation.partial_image

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
  "type": "image_generation.partial_image",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "partial_image_index": 0
}
image_generation.completed
Emitted when image generation has completed and the final image is available.

b64_json
string
Base64-encoded image data, suitable for rendering as an image.
background
string
The background setting for the generated image.
created_at
integer
The Unix timestamp when the event was created.
output_format
string
The output format for the generated image.
quality
string
The quality setting for the generated image.
size
string
The size of the generated image.
type
string
The type of the event. Always image_generation.completed.
usage
object
For gpt-image-1 only, the token usage information for the image generation.

Show properties
OBJECT image_generation.completed

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
  "type": "image_generation.completed",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "usage": {
    "total_tokens": 100,
    "input_tokens": 50,
    "output_tokens": 50,
    "input_tokens_details": {
      "text_tokens": 10,
      "image_tokens": 40
    }
  }
}
image_edit.partial_image
Emitted when a partial image is available during image editing streaming.

b64_json
string
Base64-encoded partial image data, suitable for rendering as an image.
background
string
The background setting for the requested edited image.
created_at
integer
The Unix timestamp when the event was created.
output_format
string
The output format for the requested edited image.
partial_image_index
integer
0-based index for the partial image (streaming).
quality
string
The quality setting for the requested edited image.
size
string
The size of the requested edited image.
type
string
The type of the event. Always image_edit.partial_image.
OBJECT image_edit.partial_image

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
  "type": "image_edit.partial_image",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "partial_image_index": 0
}
image_edit.completed
Emitted when image editing has completed and the final image is available.

b64_json
string
Base64-encoded final edited image data, suitable for rendering as an image.
background
string
The background setting for the edited image.
created_at
integer
The Unix timestamp when the event was created.
output_format
string
The output format for the edited image.
quality
string
The quality setting for the edited image.
size
string
The size of the edited image.
type
string
The type of the event. Always image_edit.completed.
usage
object
For gpt-image-1 only, the token usage information for the image generation.

Show properties
OBJECT image_edit.completed

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
  "type": "image_edit.completed",
  "b64_json": "...",
  "created_at": 1620000000,
  "size": "1024x1024",
  "quality": "high",
  "background": "transparent",
  "output_format": "png",
  "usage": {
    "total_tokens": 100,
    "input_tokens": 50,
    "output_tokens": 50,
    "input_tokens_details": {
      "text_tokens": 10,
      "image_tokens": 40
    }
  }
}
Embeddings
Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms. Related guide: Embeddings
Create embeddings
POST
 
https://api.openai.com/v1/embeddings
Creates an embedding vector representing the input text.
Request body
input
string or array
Required
Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for all embedding models), cannot be an empty string, and any array must be 2048 dimensions or less. Example Python code for counting tokens. In addition to the per-input token limit, all embedding models enforce a maximum of 300,000 tokens summed across all inputs in a single request.
model
string
Required
ID of the model to use. You can use the List models API to see all of your available models, or see our Model overview for descriptions of them.
dimensions
integer
Optional
The number of dimensions the resulting output embeddings should have. Only supported in text-embedding-3 and later models.
encoding_format
string
Optional
Defaults to float
The format to return the embeddings in. Can be either float or 
base64
.
user
string
Optional
A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.
Returns
A list of embedding objects.

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
curl https://api.openai.com/v1/embeddings \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "The food was delicious and the waiter...",
    "model": "text-embedding-ada-002",
    "encoding_format": "float"
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
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [
        0.0023064255,
        -0.009327292,
        .... (1536 floats total for ada-002)
        -0.0028842222,
      ],
      "index": 0
    }
  ],
  "model": "text-embedding-ada-002",
  "usage": {
    "prompt_tokens": 8,
    "total_tokens": 8
  }
}
The embedding object
Represents an embedding vector returned by embedding endpoint.

embedding
array
The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the embedding guide.
index
integer
The index of the embedding in the list of embeddings.
object
string
The object type, which is always "embedding".
OBJECT The embedding object

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
  "object": "embedding",
  "embedding": [
    0.0023064255,
    -0.009327292,
    .... (1536 floats total for ada-002)
    -0.0028842222,
  ],
  "index": 0
}