# Audio

Audio
Learn how to turn audio into text or text into audio.

Related guide: Speech to text
Create speech
POST
 
https://api.openai.com/v1/audio/speech
Generates audio from the input text.
Request body
input
string
Required
The text to generate audio for. The maximum length is 4096 characters.
model
string
Required
One of the available TTS models: tts-1, tts-1-hd or gpt-4o-mini-tts.
voice
string
Required
The voice to use when generating the audio. Supported voices are alloy, ash, ballad, coral, echo, fable, onyx, nova, sage, shimmer, and verse. Previews of the voices are available in the Text to speech guide.
instructions
string
Optional
Control the voice of your generated audio with additional instructions. Does not work with tts-1 or tts-1-hd.
response_format
string
Optional
Defaults to mp3
The format to audio in. Supported formats are mp3, opus, aac, flac, wav, and pcm.
speed
number
Optional
Defaults to 1
The speed of the generated audio. Select a value from 0.25 to 4.0. 1.0 is the default.
stream_format
string
Optional
Defaults to audio
The format to stream the audio in. Supported formats are sse and audio. sse is not supported for tts-1 or tts-1-hd.
Returns
The audio file content or a stream of audio events.

Default
SSE Stream Format
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
9
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4o-mini-tts",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
  }' \
  --output speech.mp3
Create transcription
POST
 
https://api.openai.com/v1/audio/transcriptions
Transcribes audio into the input language.
Request body
file
file
Required
The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
model
string
Required
ID of the model to use. The options are gpt-4o-transcribe, gpt-4o-mini-transcribe, whisper-1 (which is powered by our open source Whisper V2 model), and gpt-4o-transcribe-diarize.
chunking_strategy
"auto" or object
Optional
Controls how the audio is cut into chunks. When set to "auto", the server first normalizes loudness and then uses voice activity detection (VAD) to choose boundaries. server_vad object can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed as a single block. Required when using gpt-4o-transcribe-diarize for inputs longer than 30 seconds.

Show possible types
include[]
array
Optional
Additional information to include in the transcription response. logprobs will return the log probabilities of the tokens in the response to understand the model's confidence in the transcription. logprobs only works with response_format set to json and only with the models gpt-4o-transcribe and gpt-4o-mini-transcribe. This field is not supported when using gpt-4o-transcribe-diarize.
known_speaker_names[]
array
Optional
Optional list of speaker names that correspond to the audio samples provided in known_speaker_references[]. Each entry should be a short identifier (for example customer or agent). Up to 4 speakers are supported.
known_speaker_references[]
array
Optional
Optional list of audio samples (as data URLs) that contain known speaker references matching known_speaker_names[]. Each sample must be between 2 and 10 seconds, and can use any of the same input audio formats supported by file.
language
string
Optional
The language of the input audio. Supplying the input language in ISO-639-1 (e.g. en) format will improve accuracy and latency.
prompt
string
Optional
An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language. This field is not supported when using gpt-4o-transcribe-diarize.
response_format
string
Optional
Defaults to json
The format of the output, in one of these options: json, text, srt, verbose_json, vtt, or diarized_json. For gpt-4o-transcribe and gpt-4o-mini-transcribe, the only supported format is json. For gpt-4o-transcribe-diarize, the supported formats are json, text, and diarized_json, with diarized_json required to receive speaker annotations.
stream
boolean
Optional
Defaults to false
If set to true, the model response data will be streamed to the client as it is generated using server-sent events. See the Streaming section of the Speech-to-Text guide for more information.

Note: Streaming is not supported for the whisper-1 model and will be ignored.
temperature
number
Optional
Defaults to 0
The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
timestamp_granularities[]
array
Optional
Defaults to segment
The timestamp granularities to populate for this transcription. response_format must be set verbose_json to use timestamp granularities. Either or both of these options are supported: word, or segment. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency. This option is not available for gpt-4o-transcribe-diarize.
Returns
The transcription object, a diarized transcription object, a verbose transcription object, or a stream of transcript events.

Default
Diarization
Streaming
Logprobs
Word timestamps
Segment timestamps
Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F file="@/path/to/file/audio.mp3" \
  -F model="gpt-4o-transcribe"
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
{
  "text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger. This is a place where you can get to do that.",
  "usage": {
    "type": "tokens",
    "input_tokens": 14,
    "input_token_details": {
      "text_tokens": 0,
      "audio_tokens": 14
    },
    "output_tokens": 45,
    "total_tokens": 59
  }
}
Create translation
POST
 
https://api.openai.com/v1/audio/translations
Translates audio into English.
Request body
file
file
Required
The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
model
string or "whisper-1"
Required
ID of the model to use. Only whisper-1 (which is powered by our open source Whisper V2 model) is currently available.
prompt
string
Optional
An optional text to guide the model's style or continue a previous audio segment. The prompt should be in English.
response_format
string
Optional
Defaults to json
The format of the output, in one of these options: json, text, srt, verbose_json, or vtt.
temperature
number
Optional
Defaults to 0
The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
Returns
The translated text.

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/audio/translations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: multipart/form-data" \
  -F file="@/path/to/file/german.m4a" \
  -F model="whisper-1"
Response

1
2
3
{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you heading today?"
}
The transcription object (JSON)
Represents a transcription response returned by model, based on the provided input.

logprobs
array
The log probabilities of the tokens in the transcription. Only returned with the models gpt-4o-transcribe and gpt-4o-mini-transcribe if logprobs is added to the include array.

Show properties
text
string
The transcribed text.
usage
object
Token usage statistics for the request.

Show possible types
OBJECT The transcription object (JSON)

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
{
  "text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger. This is a place where you can get to do that.",
  "usage": {
    "type": "tokens",
    "input_tokens": 14,
    "input_token_details": {
      "text_tokens": 10,
      "audio_tokens": 4
    },
    "output_tokens": 101,
    "total_tokens": 115
  }
}
The transcription object (Diarized JSON)
Represents a diarized transcription response returned by the model, including the combined transcript and speaker-segment annotations.

duration
number
Duration of the input audio in seconds.
segments
array
Segments of the transcript annotated with timestamps and speaker labels.

Show properties
task
string
The type of task that was run. Always transcribe.
text
string
The concatenated transcript text for the entire audio input.
usage
object
Token or duration usage statistics for the request.

Show possible types
OBJECT The transcription object (Diarized JSON)

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
  "task": "transcribe",
  "duration": 42.7,
  "text": "Agent: Thanks for calling OpenAI support.\nCustomer: Hi, I need help with diarization.",
  "segments": [
    {
      "type": "transcript.text.segment",
      "id": "seg_001",
      "start": 0.0,
      "end": 5.2,
      "text": "Thanks for calling OpenAI support.",
      "speaker": "agent"
    },
    {
      "type": "transcript.text.segment",
      "id": "seg_002",
      "start": 5.2,
      "end": 12.8,
      "text": "Hi, I need help with diarization.",
      "speaker": "A"
    }
  ],
  "usage": {
    "type": "duration",
    "seconds": 43
  }
}
The transcription object (Verbose JSON)
Represents a verbose json transcription response returned by model, based on the provided input.

duration
number
The duration of the input audio.
language
string
The language of the input audio.
segments
array
Segments of the transcribed text and their corresponding details.

Show properties
text
string
The transcribed text.
usage
object
Usage statistics for models billed by audio input duration.

Show properties
words
array
Extracted words and their corresponding timestamps.

Show properties
OBJECT The transcription object (Verbose JSON)

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
  "task": "transcribe",
  "language": "english",
  "duration": 8.470000267028809,
  "text": "The beach was a popular spot on a hot summer day. People were swimming in the ocean, building sandcastles, and playing beach volleyball.",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 3.319999933242798,
      "text": " The beach was a popular spot on a hot summer day.",
      "tokens": [
        50364, 440, 7534, 390, 257, 3743, 4008, 322, 257, 2368, 4266, 786, 13, 50530
      ],
      "temperature": 0.0,
      "avg_logprob": -0.2860786020755768,
      "compression_ratio": 1.2363636493682861,
      "no_speech_prob": 0.00985979475080967
    },
    ...
  ],
  "usage": {
    "type": "duration",
    "seconds": 9
  }
}
Stream Event (speech.audio.delta)
Emitted for each chunk of audio data generated during speech synthesis.

audio
string
A chunk of Base64-encoded audio data.
type
string
The type of the event. Always speech.audio.delta.
OBJECT Stream Event (speech.audio.delta)

1
2
3
4
{
  "type": "speech.audio.delta",
  "audio": "base64-encoded-audio-data"
}
Stream Event (speech.audio.done)
Emitted when the speech synthesis is complete and all audio has been streamed.

type
string
The type of the event. Always speech.audio.done.
usage
object
Token usage statistics for the request.

Show properties
OBJECT Stream Event (speech.audio.done)

1
2
3
4
5
6
7
8
{
  "type": "speech.audio.done",
  "usage": {
    "input_tokens": 14,
    "output_tokens": 101,
    "total_tokens": 115
  }
}
Stream Event (transcript.text.delta)
Emitted when there is an additional text delta. This is also the first event emitted when the transcription starts. Only emitted when you create a transcription with the Stream parameter set to true.

delta
string
The text delta that was additionally transcribed.
logprobs
array
The log probabilities of the delta. Only included if you create a transcription with the include[] parameter set to logprobs.

Show properties
segment_id
string
Identifier of the diarized segment that this delta belongs to. Only present when using gpt-4o-transcribe-diarize.
type
string
The type of the event. Always transcript.text.delta.
OBJECT Stream Event (transcript.text.delta)

1
2
3
4
{
  "type": "transcript.text.delta",
  "delta": " wonderful"
}
Stream Event (transcript.text.segment)
Emitted when a diarized transcription returns a completed segment with speaker information. Only emitted when you create a transcription with stream set to true and response_format set to diarized_json.

end
number
End timestamp of the segment in seconds.
id
string
Unique identifier for the segment.
speaker
string
Speaker label for this segment.
start
number
Start timestamp of the segment in seconds.
text
string
Transcript text for this segment.
type
string
The type of the event. Always transcript.text.segment.
OBJECT Stream Event (transcript.text.segment)

1
2
3
4
5
6
7
8
{
  "type": "transcript.text.segment",
  "id": "seg_002",
  "start": 5.2,
  "end": 12.8,
  "text": "Hi, I need help with diarization.",
  "speaker": "A"
}
Stream Event (transcript.text.done)
Emitted when the transcription is complete. Contains the complete transcription text. Only emitted when you create a transcription with the Stream parameter set to true.

logprobs
array
The log probabilities of the individual tokens in the transcription. Only included if you create a transcription with the include[] parameter set to logprobs.

Show properties
text
string
The text that was transcribed.
type
string
The type of the event. Always transcript.text.done.
usage
object
Usage statistics for models billed by token usage.

Show properties
OBJECT Stream Event (transcript.text.done)

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
  "type": "transcript.text.done",
  "text": "I see skies of blue and clouds of white, the bright blessed days, the dark sacred nights, and I think to myself, what a wonderful world.",
  "usage": {
    "type": "tokens",
    "input_tokens": 14,
    "input_token_details": {
      "text_tokens": 10,
      "audio_tokens": 4
    },
    "output_tokens": 31,
    "total_tokens": 45
  }
}
Images
Given a prompt and/or an input image, the model will generate a new image. Related guide: Image generation
Create image
POST
 
https://api.openai.com/v1/images/generations
Creates an image given a prompt. Learn more.
Request body
prompt
string
Required
A text description of the desired image(s). The maximum length is 32000 characters for gpt-image-1, 1000 characters for dall-e-2 and 4000 characters for dall-e-3.
background
string or null
Optional
Defaults to auto
Allows to set transparency for the background of the generated image(s). This parameter is only supported for gpt-image-1. Must be one of transparent, opaque or auto (default value). When auto is used, the model will automatically determine the best background for the image.

If transparent, the output format needs to support transparency, so it should be set to either png (default value) or webp.
model
string
Optional
Defaults to dall-e-2
The model to use for image generation. One of dall-e-2, dall-e-3, or gpt-image-1. Defaults to dall-e-2 unless a parameter specific to gpt-image-1 is used.
moderation
string or null
Optional
Defaults to auto
Control the content-moderation level for images generated by gpt-image-1. Must be either low for less restrictive filtering or auto (default value).
n
integer or null
Optional
Defaults to 1
The number of images to generate. Must be between 1 and 10. For dall-e-3, only n=1 is supported.
output_compression
integer or null
Optional
Defaults to 100
The compression level (0-100%) for the generated images. This parameter is only supported for gpt-image-1 with the webp or jpeg output formats, and defaults to 100.
output_format
string or null
Optional
Defaults to png
The format in which the generated images are returned. This parameter is only supported for gpt-image-1. Must be one of png, jpeg, or webp.
partial_images
integer
Optional
Defaults to 0
The number of partial images to generate. This parameter is used for streaming responses that return partial images. Value must be between 0 and 3. When set to 0, the response will be a single image sent in one streaming event.

Note that the final image may be sent before the full number of partial images are generated if the full image is generated more quickly.
quality
string or null
Optional
Defaults to auto
The quality of the image that will be generated.

auto (default value) will automatically select the best quality for the given model.
high, medium and low are supported for gpt-image-1.
hd and standard are supported for dall-e-3.
standard is the only option for dall-e-2.
response_format
string or null
Optional
Defaults to url
The format in which generated images with dall-e-2 and dall-e-3 are returned. Must be one of url or b64_json. URLs are only valid for 60 minutes after the image has been generated. This parameter isn't supported for gpt-image-1 which will always return base64-encoded images.
size
string or null
Optional
Defaults to auto
The size of the generated images. Must be one of 1024x1024, 1536x1024 (landscape), 1024x1536 (portrait), or auto (default value) for gpt-image-1, one of 256x256, 512x512, or 1024x1024 for dall-e-2, and one of 1024x1024, 1792x1024, or 1024x1792 for dall-e-3.
stream
boolean or null
Optional
Defaults to false
Generate the image in streaming mode. Defaults to false. See the Image generation guide for more information. This parameter is only supported for gpt-image-1.
style
string or null
Optional
Defaults to vivid
The style of the generated images. This parameter is only supported for dall-e-3. Must be one of vivid or natural. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.
user
string
Optional
A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.
Returns
Returns an image object.

Generate image
Streaming
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
9
curl https://api.openai.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-image-1",
    "prompt": "A cute baby sea otter",
    "n": 1,
    "size": "1024x1024"
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
  "created": 1713833628,
  "data": [
    {
      "b64_json": "..."
    }
  ],
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
Create image edit
POST
 
https://api.openai.com/v1/images/edits
Creates an edited or extended image given one or more source images and a prompt. This endpoint only supports gpt-image-1 and dall-e-2.
Request body
image
string or array
Required
The image(s) to edit. Must be a supported image file or an array of images.

For gpt-image-1, each image should be a png, webp, or jpg file less than 50MB. You can provide up to 16 images.

For dall-e-2, you can only provide one image, and it should be a square png file less than 4MB.
prompt
string
Required
A text description of the desired image(s). The maximum length is 1000 characters for dall-e-2, and 32000 characters for gpt-image-1.
background
string or null
Optional
Defaults to auto
Allows to set transparency for the background of the generated image(s). This parameter is only supported for gpt-image-1. Must be one of transparent, opaque or auto (default value). When auto is used, the model will automatically determine the best background for the image.

If transparent, the output format needs to support transparency, so it should be set to either png (default value) or webp.
input_fidelity
string
Optional
Defaults to low
Control how much effort the model will exert to match the style and features, especially facial features, of input images. This parameter is only supported for gpt-image-1. Unsupported for gpt-image-1-mini. Supports high and low. Defaults to low.
mask
file
Optional
An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where image should be edited. If there are multiple images provided, the mask will be applied on the first image. Must be a valid PNG file, less than 4MB, and have the same dimensions as image.
model
string
Optional
Defaults to dall-e-2
The model to use for image generation. Only dall-e-2 and gpt-image-1 are supported. Defaults to dall-e-2 unless a parameter specific to gpt-image-1 is used.
n
integer or null
Optional
Defaults to 1
The number of images to generate. Must be between 1 and 10.
output_compression
integer or null
Optional
Defaults to 100
The compression level (0-100%) for the generated images. This parameter is only supported for gpt-image-1 with the webp or jpeg output formats, and defaults to 100.
output_format
string or null
Optional
Defaults to png
The format in which the generated images are returned. This parameter is only supported for gpt-image-1. Must be one of png, jpeg, or webp. The default value is png.
partial_images
integer
Optional
Defaults to 0
The number of partial images to generate. This parameter is used for streaming responses that return partial images. Value must be between 0 and 3. When set to 0, the response will be a single image sent in one streaming event.

Note that the final image may be sent before the full number of partial images are generated if the full image is generated more quickly.
quality
string or null
Optional
Defaults to auto
The quality of the image that will be generated. high, medium and low are only supported for gpt-image-1. dall-e-2 only supports standard quality. Defaults to auto.
response_format
string or null
Optional
Defaults to url
The format in which the generated images are returned. Must be one of url or b64_json. URLs are only valid for 60 minutes after the image has been generated. This parameter is only supported for dall-e-2, as gpt-image-1 will always return base64-encoded images.
size
string or null
Optional
Defaults to 1024x1024
The size of the generated images. Must be one of 1024x1024, 1536x1024 (landscape), 1024x1536 (portrait), or auto (default value) for gpt-image-1, and one of 256x256, 512x512, or 1024x1024 for dall-e-2.
stream
boolean or null
Optional
Defaults to false
Edit the image in streaming mode. Defaults to false. See the Image generation guide for more information.
user
string
Optional
A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.
Returns
Returns an image object.

Edit image
Streaming
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
9
10
curl -s -D >(grep -i x-request-id >&2) \
  -o >(jq -r '.data[0].b64_json' | base64 --decode > gift-basket.png) \
  -X POST "https://api.openai.com/v1/images/edits" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "model=gpt-image-1" \
  -F "image[]=@body-lotion.png" \
  -F "image[]=@bath-bomb.png" \
  -F "image[]=@incense-kit.png" \
  -F "image[]=@soap.png" \
  -F 'prompt=Create a lovely gift basket with these four items in it'
Create image variation
POST
 
https://api.openai.com/v1/images/variations
Creates a variation of a given image. This endpoint only supports dall-e-2.
Request body
image
file
Required
The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
model
string or "dall-e-2"
Optional
Defaults to dall-e-2
The model to use for image generation. Only dall-e-2 is supported at this time.
n
integer or null
Optional
Defaults to 1
The number of images to generate. Must be between 1 and 10.
response_format
string or null
Optional
Defaults to url
The format in which the generated images are returned. Must be one of url or b64_json. URLs are only valid for 60 minutes after the image has been generated.
size
string or null
Optional
Defaults to 1024x1024
The size of the generated images. Must be one of 256x256, 512x512, or 1024x1024.
user
string
Optional
A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Learn more.
Returns
Returns a list of image objects.

Example request
curl

1
2
3
4
5
curl https://api.openai.com/v1/images/variations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F image="@otter.png" \
  -F n=2 \
  -F size="1024x1024"
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
  "created": 1589478378,
  "data": [
    {
      "url": "https://..."
    },
    {
      "url": "https://..."
    }
  ]
}
The image generation response
The response from the image generation endpoint.

background
string
The background parameter used for the image generation. Either transparent or opaque.
created
integer
The Unix timestamp (in seconds) of when the image was created.
data
array
The list of generated images.

Show properties
output_format
string
The output format of the image generation. Either png, webp, or jpeg.
quality
string
The quality of the image generated. Either low, medium, or high.
size
string
The size of the image generated. Either 1024x1024, 1024x1536, or 1536x1024.
usage
object
For gpt-image-1 only, the token usage information for the image generation.

Show properties
OBJECT The image generation response

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
{
  "created": 1713833628,
  "data": [
    {
      "b64_json": "..."
    }
  ],
  "background": "transparent",
  "output_format": "png",
  "size": "1024x1024",
  "quality": "high",
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