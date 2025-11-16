# Realtime Beta session tokens

Realtime Beta session tokens
REST API endpoint to generate ephemeral session tokens for use in client-side applications.
Create session
POST
 
https://api.openai.com/v1/realtime/sessions
Create an ephemeral API token for use in client-side applications with the Realtime API. Can be configured with the same session parameters as the session.update client event.
It responds with a session object, plus a client_secret key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API.
Request body
client_secret
object
Required
Ephemeral key returned by the API.

Show properties
input_audio_format
string
Optional
The format of input audio. Options are pcm16, g711_ulaw, or g711_alaw.
input_audio_transcription
object
Optional
Configuration for input audio transcription, defaults to off and can be set to null to turn off once on. Input audio transcription is not native to the model, since the model consumes audio directly. Transcription runs asynchronously and should be treated as rough guidance rather than the representation understood by the model.

Show properties
instructions
string
Optional
The default system instructions (i.e. system message) prepended to model calls. This field allows the client to guide the model on desired responses. The model can be instructed on response content and format, (e.g. "be extremely succinct", "act friendly", "here are examples of good responses") and on audio behavior (e.g. "talk quickly", "inject emotion into your voice", "laugh frequently"). The instructions are not guaranteed to be followed by the model, but they provide guidance to the model on the desired behavior. Note that the server sets default instructions which will be used if this field is not set and are visible in the session.created event at the start of the session.
max_response_output_tokens
integer or "inf"
Optional
Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or inf for the maximum available tokens for a given model. Defaults to inf.
modalities
Optional
The set of modalities the model can respond with. To disable audio, set this to ["text"].
output_audio_format
string
Optional
The format of output audio. Options are pcm16, g711_ulaw, or g711_alaw.
prompt
object
Optional
Reference to a prompt template and its variables. Learn more.

Show properties
speed
number
Optional
Defaults to 1
The speed of the model's spoken response. 1.0 is the default speed. 0.25 is the minimum speed. 1.5 is the maximum speed. This value can only be changed in between model turns, not while a response is in progress.
temperature
number
Optional
Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
tool_choice
string
Optional
How the model chooses tools. Options are auto, none, required, or specify a function.
tools
array
Optional
Tools (functions) available to the model.

Show properties
tracing
"auto" or object
Optional
Configuration options for tracing. Set to null to disable tracing. Once tracing is enabled for a session, the configuration cannot be modified.

auto will create a trace for the session with default values for the workflow name, group id, and metadata.

Show possible types
truncation
string or object
Optional
Controls how the realtime conversation is truncated prior to model inference. The default is auto.

Show possible types
turn_detection
object
Optional
Configuration for turn detection. Can be set to null to turn off. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.

Show properties
voice
string
Optional
The voice the model uses to respond. Voice cannot be changed during the session once the model has responded with audio at least once. Current voice options are alloy, ash, ballad, coral, echo, sage, shimmer, and verse.
Returns
The created Realtime session object, plus an ephemeral key

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
curl -X POST https://api.openai.com/v1/realtime/sessions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-realtime",
    "modalities": ["audio", "text"],
    "instructions": "You are a friendly assistant."
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
{
  "id": "sess_001",
  "object": "realtime.session",
  "model": "gpt-realtime-2025-08-25",
  "modalities": ["audio", "text"],
  "instructions": "You are a friendly assistant.",
  "voice": "alloy",
  "input_audio_format": "pcm16",
  "output_audio_format": "pcm16",
  "input_audio_transcription": {
      "model": "whisper-1"
  },
  "turn_detection": null,
  "tools": [],
  "tool_choice": "none",
  "temperature": 0.7,
  "max_response_output_tokens": 200,
  "speed": 1.1,
  "tracing": "auto",
  "client_secret": {
    "value": "ek_abc123", 
    "expires_at": 1234567890
  }
}
Create transcription session
POST
 
https://api.openai.com/v1/realtime/transcription_sessions
Create an ephemeral API token for use in client-side applications with the Realtime API specifically for realtime transcriptions. Can be configured with the same session parameters as the transcription_session.update client event.
It responds with a session object, plus a client_secret key which contains a usable ephemeral API token that can be used to authenticate browser clients for the Realtime API.
Request body
include
array
Optional
The set of items to include in the transcription. Current available items are: item.input_audio_transcription.logprobs
input_audio_format
string
Optional
Defaults to pcm16
The format of input audio. Options are pcm16, g711_ulaw, or g711_alaw. For pcm16, input audio must be 16-bit PCM at a 24kHz sample rate, single channel (mono), and little-endian byte order.
input_audio_noise_reduction
object
Optional
Defaults to null
Configuration for input audio noise reduction. This can be set to null to turn off. Noise reduction filters audio added to the input audio buffer before it is sent to VAD and the model. Filtering the audio can improve VAD and turn detection accuracy (reducing false positives) and model performance by improving perception of the input audio.

Show properties
input_audio_transcription
object
Optional
Configuration for input audio transcription. The client can optionally set the language and prompt for transcription, these offer additional guidance to the transcription service.

Show properties
turn_detection
object
Optional
Configuration for turn detection. Can be set to null to turn off. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.

Show properties
Returns
The created Realtime transcription session object, plus an ephemeral key

Example request
curl

1
2
3
4
curl -X POST https://api.openai.com/v1/realtime/transcription_sessions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
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
{
  "id": "sess_BBwZc7cFV3XizEyKGDCGL",
  "object": "realtime.transcription_session",
  "modalities": ["audio", "text"],
  "turn_detection": {
    "type": "server_vad",
    "threshold": 0.5,
    "prefix_padding_ms": 300,
    "silence_duration_ms": 200
  },
  "input_audio_format": "pcm16",
  "input_audio_transcription": {
    "model": "gpt-4o-transcribe",
    "language": null,
    "prompt": ""
  },
  "client_secret": null
}
The session object
A Realtime session configuration object.

audio
object
Configuration for input and output audio for the session.

Show properties
expires_at
integer
Expiration timestamp for the session, in seconds since epoch.
id
string
Unique identifier for the session that looks like sess_1234567890abcdef.
include
array
Additional fields to include in server outputs.

null.
instructions
string
The default system instructions (i.e. system message) prepended to model calls. This field allows the client to guide the model on desired responses. The model can be instructed on response content and format, (e.g. "be extremely succinct", "act friendly", "here are examples of good responses") and on audio behavior (e.g. "talk quickly", "inject emotion into your voice", "laugh frequently"). The instructions are not guaranteed to be followed by the model, but they provide guidance to the model on the desired behavior.

Note that the server sets default instructions which will be used if this field is not set and are visible in the session.created event at the start of the session.
max_output_tokens
integer or "inf"
Maximum number of output tokens for a single assistant response, inclusive of tool calls. Provide an integer between 1 and 4096 to limit output tokens, or inf for the maximum available tokens for a given model. Defaults to inf.
model
string
The Realtime model used for this session.
object
string
The object type. Always realtime.session.
output_modalities
The set of modalities the model can respond with. To disable audio, set this to ["text"].
tool_choice
string
How the model chooses tools. Options are auto, none, required, or specify a function.
tools
array
Tools (functions) available to the model.

Show properties
tracing
"auto" or object
Configuration options for tracing. Set to null to disable tracing. Once tracing is enabled for a session, the configuration cannot be modified.

auto will create a trace for the session with default values for the workflow name, group id, and metadata.

Show possible types
turn_detection
object
Configuration for turn detection. Can be set to null to turn off. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.

Show properties
OBJECT The session object

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
{
  "id": "sess_001",
  "object": "realtime.session",
  "expires_at": 1742188264,
  "model": "gpt-realtime",
  "output_modalities": ["audio"],
  "instructions": "You are a friendly assistant.",
  "tools": [],
  "tool_choice": "none",
  "max_output_tokens": "inf",
  "tracing": "auto",
  "truncation": "auto",
  "prompt": null,
  "audio": {
    "input": {
      "format": {
        "type": "audio/pcm",
        "rate": 24000
      },
      "transcription": { "model": "whisper-1" },
      "noise_reduction": null,
      "turn_detection": null
    },
    "output": {
      "format": {
        "type": "audio/pcm",
        "rate": 24000
      },
      "voice": "alloy",
      "speed": 1.0
    }
  }
}
The transcription session object
A new Realtime transcription session configuration.

When a session is created on the server via REST API, the session object also contains an ephemeral key. Default TTL for keys is 10 minutes. This property is not present when a session is updated via the WebSocket API.

client_secret
object
Ephemeral key returned by the API. Only present when the session is created on the server via REST API.

Show properties
input_audio_format
string
The format of input audio. Options are pcm16, g711_ulaw, or g711_alaw.
input_audio_transcription
object
Configuration of the transcription model.

Show properties
modalities
The set of modalities the model can respond with. To disable audio, set this to ["text"].
turn_detection
object
Configuration for turn detection. Can be set to null to turn off. Server VAD means that the model will detect the start and end of speech based on audio volume and respond at the end of user speech.

Show properties
OBJECT The transcription session object

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
  "id": "sess_BBwZc7cFV3XizEyKGDCGL",
  "object": "realtime.transcription_session",
  "expires_at": 1742188264,
  "modalities": ["audio", "text"],
  "turn_detection": {
    "type": "server_vad",
    "threshold": 0.5,
    "prefix_padding_ms": 300,
    "silence_duration_ms": 200
  },
  "input_audio_format": "pcm16",
  "input_audio_transcription": {
    "model": "gpt-4o-transcribe",
    "language": null,
    "prompt": ""
  },
  "client_secret": null
}