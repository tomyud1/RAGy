# Realtime Beta client events

Realtime Beta client events
These are events that the OpenAI Realtime WebSocket server will accept from the client.
session.update
Send this event to update the session’s default configuration. The client may send this event at any time to update any field, except for voice. However, note that once a session has been initialized with a particular model, it can’t be changed to another model using session.update.

When the server receives a session.update, it will respond with a session.updated event showing the full, effective configuration. Only the fields that are present are updated. To clear a field like instructions, pass an empty string.

event_id
string
Optional client-generated ID used to identify this event.
session
object
A new Realtime session configuration, with an ephemeral key. Default TTL for keys is one minute.

Show properties
type
string
The event type, must be session.update.
OBJECT session.update

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
{
  "type": "session.update",
  "session": {
    "type": "realtime",
    "tools": [
      {
        "type": "function",
        "name": "display_color_palette",
        "description": "\nCall this function when a user asks for a color palette.\n",
        "parameters": {
          "type": "object",
          "strict": true,
          "properties": {
            "theme": {
              "type": "string",
              "description": "Description of the theme for the color scheme."
            },
            "colors": {
              "type": "array",
              "description": "Array of five hex color codes based on the theme.",
              "items": {
                "type": "string",
                "description": "Hex color code"
              }
            }
          },
          "required": [
            "theme",
            "colors"
          ]
        }
      }
    ],
    "tool_choice": "auto"
  },
  "event_id": "5fc543c4-f59c-420f-8fb9-68c45d1546a7",
  "timestamp": "2:30:32 PM"
}
input_audio_buffer.append
Send this event to append audio bytes to the input audio buffer. The audio buffer is temporary storage you can write to and later commit. In Server VAD mode, the audio buffer is used to detect speech and the server will decide when to commit. When Server VAD is disabled, you must commit the audio buffer manually.

The client may choose how much audio to place in each event up to a maximum of 15 MiB, for example streaming smaller chunks from the client may allow the VAD to be more responsive. Unlike made other client events, the server will not send a confirmation response to this event.

audio
string
Base64-encoded audio bytes. This must be in the format specified by the input_audio_format field in the session configuration.
event_id
string
Optional client-generated ID used to identify this event.
type
string
The event type, must be input_audio_buffer.append.
OBJECT input_audio_buffer.append

1
2
3
4
5
{
    "event_id": "event_456",
    "type": "input_audio_buffer.append",
    "audio": "Base64EncodedAudioData"
}
input_audio_buffer.commit
Send this event to commit the user input audio buffer, which will create a new user message item in the conversation. This event will produce an error if the input audio buffer is empty. When in Server VAD mode, the client does not need to send this event, the server will commit the audio buffer automatically.

Committing the input audio buffer will trigger input audio transcription (if enabled in session configuration), but it will not create a response from the model. The server will respond with an input_audio_buffer.committed event.

event_id
string
Optional client-generated ID used to identify this event.
type
string
The event type, must be input_audio_buffer.commit.
OBJECT input_audio_buffer.commit

1
2
3
4
{
    "event_id": "event_789",
    "type": "input_audio_buffer.commit"
}
input_audio_buffer.clear
Send this event to clear the audio bytes in the buffer. The server will respond with an input_audio_buffer.cleared event.

event_id
string
Optional client-generated ID used to identify this event.
type
string
The event type, must be input_audio_buffer.clear.
OBJECT input_audio_buffer.clear

1
2
3
4
{
    "event_id": "event_012",
    "type": "input_audio_buffer.clear"
}
conversation.item.create
Add a new Item to the Conversation's context, including messages, function calls, and function call responses. This event can be used both to populate a "history" of the conversation and to add new items mid-stream, but has the current limitation that it cannot populate assistant audio messages.

If successful, the server will respond with a conversation.item.created event, otherwise an error event will be sent.

event_id
string
Optional client-generated ID used to identify this event.
item
object
A single item within a Realtime conversation.

Show possible types
previous_item_id
string
The ID of the preceding item after which the new item will be inserted. If not set, the new item will be appended to the end of the conversation. If set to root, the new item will be added to the beginning of the conversation. If set to an existing ID, it allows an item to be inserted mid-conversation. If the ID cannot be found, an error will be returned and the item will not be added.
type
string
The event type, must be conversation.item.create.
OBJECT conversation.item.create

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
  "type": "conversation.item.create",
  "item": {
    "type": "message",
    "role": "user",
    "content": [
      {
        "type": "input_text",
        "text": "hi"
      }
    ]
  },
  "event_id": "b904fba0-0ec4-40af-8bbb-f908a9b26793",
}
conversation.item.retrieve
Send this event when you want to retrieve the server's representation of a specific item in the conversation history. This is useful, for example, to inspect user audio after noise cancellation and VAD. The server will respond with a conversation.item.retrieved event, unless the item does not exist in the conversation history, in which case the server will respond with an error.

event_id
string
Optional client-generated ID used to identify this event.
item_id
string
The ID of the item to retrieve.
type
string
The event type, must be conversation.item.retrieve.
OBJECT conversation.item.retrieve

1
2
3
4
5
{
    "event_id": "event_901",
    "type": "conversation.item.retrieve",
    "item_id": "msg_003"
}
conversation.item.truncate
Send this event to truncate a previous assistant message’s audio. The server will produce audio faster than realtime, so this event is useful when the user interrupts to truncate audio that has already been sent to the client but not yet played. This will synchronize the server's understanding of the audio with the client's playback.

Truncating audio will delete the server-side text transcript to ensure there is not text in the context that hasn't been heard by the user.

If successful, the server will respond with a conversation.item.truncated event.

audio_end_ms
integer
Inclusive duration up to which audio is truncated, in milliseconds. If the audio_end_ms is greater than the actual audio duration, the server will respond with an error.
content_index
integer
The index of the content part to truncate. Set this to 0.
event_id
string
Optional client-generated ID used to identify this event.
item_id
string
The ID of the assistant message item to truncate. Only assistant message items can be truncated.
type
string
The event type, must be conversation.item.truncate.
OBJECT conversation.item.truncate

1
2
3
4
5
6
7
{
    "event_id": "event_678",
    "type": "conversation.item.truncate",
    "item_id": "msg_002",
    "content_index": 0,
    "audio_end_ms": 1500
}
conversation.item.delete
Send this event when you want to remove any item from the conversation history. The server will respond with a conversation.item.deleted event, unless the item does not exist in the conversation history, in which case the server will respond with an error.

event_id
string
Optional client-generated ID used to identify this event.
item_id
string
The ID of the item to delete.
type
string
The event type, must be conversation.item.delete.
OBJECT conversation.item.delete

1
2
3
4
5
{
    "event_id": "event_901",
    "type": "conversation.item.delete",
    "item_id": "msg_003"
}
response.create
This event instructs the server to create a Response, which means triggering model inference. When in Server VAD mode, the server will create Responses automatically.

A Response will include at least one Item, and may have two, in which case the second will be a function call. These Items will be appended to the conversation history.

The server will respond with a response.created event, events for Items and content created, and finally a response.done event to indicate the Response is complete.

The response.create event can optionally include inference configuration like instructions, and temperature. These fields will override the Session's configuration for this Response only.

Responses can be created out-of-band of the default Conversation, meaning that they can have arbitrary input, and it's possible to disable writing the output to the Conversation. Only one Response can write to the default Conversation at a time, but otherwise multiple Responses can be created in parallel.

Clients can set conversation to none to create a Response that does not write to the default Conversation. Arbitrary input can be provided with the input field, which is an array accepting raw Items and references to existing Items.

event_id
string
Optional client-generated ID used to identify this event.
response
object
Create a new Realtime response with these parameters

Show properties
type
string
The event type, must be response.create.
OBJECT response.create

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
// Trigger a response with the default Conversation and no special parameters
{
  "type": "response.create",
}

// Trigger an out-of-band response that does not write to the default Conversation
{
  "type": "response.create",
  "response": {
    "instructions": "Provide a concise answer.",
    "tools": [], // clear any session tools
    "conversation": "none",
    "output_modalities": ["text"],
    "input": [
      {
        "type": "item_reference",
        "id": "item_12345",
      },
      {
        "type": "message",
        "role": "user",
        "content": [
          {
            "type": "input_text",
            "text": "Summarize the above message in one sentence."
          }
        ]
      }
    ],
  }
}
response.cancel
Send this event to cancel an in-progress response. The server will respond with a response.done event with a status of response.status=cancelled. If there is no response to cancel, the server will respond with an error.

event_id
string
Optional client-generated ID used to identify this event.
response_id
string
A specific response ID to cancel - if not provided, will cancel an in-progress response in the default conversation.
type
string
The event type, must be response.cancel.
OBJECT response.cancel

1
2
3
4
{
    "event_id": "event_567",
    "type": "response.cancel"
}
transcription_session.update
Send this event to update a transcription session.

event_id
string
Optional client-generated ID used to identify this event.
session
object
Realtime transcription session object configuration.

Show properties
type
string
The event type, must be transcription_session.update.
OBJECT transcription_session.update

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
  "type": "transcription_session.update",
  "session": {
    "input_audio_format": "pcm16",
    "input_audio_transcription": {
      "model": "gpt-4o-transcribe",
      "prompt": "",
      "language": ""
    },
    "turn_detection": {
      "type": "server_vad",
      "threshold": 0.5,
      "prefix_padding_ms": 300,
      "silence_duration_ms": 500,
      "create_response": true,
    },
    "input_audio_noise_reduction": {
      "type": "near_field"
    },
    "include": [
      "item.input_audio_transcription.logprobs",
    ]
  }
}
output_audio_buffer.clear
WebRTC Only: Emit to cut off the current audio response. This will trigger the server to stop generating audio and emit a output_audio_buffer.cleared event. This event should be preceded by a response.cancel client event to stop the generation of the current response. Learn more.

event_id
string
The unique ID of the client event used for error handling.
type
string
The event type, must be output_audio_buffer.clear.
OBJECT output_audio_buffer.clear

1
2
3
4
{
    "event_id": "optional_client_event_id",
    "type": "output_audio_buffer.clear"
}