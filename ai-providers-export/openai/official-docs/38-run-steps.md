# Run steps

Run steps
Beta
Represents the steps (model and tool calls) taken during the run.

Related guide: Assistants
List run steps
Beta
GET
 
https://api.openai.com/v1/threads/{thread_id}/runs/{run_id}/steps
Returns a list of run steps belonging to a run.
Path parameters
run_id
string
Required
The ID of the run the run steps belong to.
thread_id
string
Required
The ID of the thread the run and run steps belong to.
Query parameters
after
string
Optional
A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
before
string
Optional
A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
include[]
array
Optional
A list of additional fields to include in the response. Currently the only supported value is step_details.tool_calls[*].file_search.results[*].content to fetch the file search result content.

See the file search tool documentation for more information.
limit
integer
Optional
Defaults to 20
A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
order
string
Optional
Defaults to desc
Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
Returns
A list of run step objects.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/runs/run_abc123/steps \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
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
{
  "object": "list",
  "data": [
    {
      "id": "step_abc123",
      "object": "thread.run.step",
      "created_at": 1699063291,
      "run_id": "run_abc123",
      "assistant_id": "asst_abc123",
      "thread_id": "thread_abc123",
      "type": "message_creation",
      "status": "completed",
      "cancelled_at": null,
      "completed_at": 1699063291,
      "expired_at": null,
      "failed_at": null,
      "last_error": null,
      "step_details": {
        "type": "message_creation",
        "message_creation": {
          "message_id": "msg_abc123"
        }
      },
      "usage": {
        "prompt_tokens": 123,
        "completion_tokens": 456,
        "total_tokens": 579
      }
    }
  ],
  "first_id": "step_abc123",
  "last_id": "step_abc456",
  "has_more": false
}
Retrieve run step
Beta
GET
 
https://api.openai.com/v1/threads/{thread_id}/runs/{run_id}/steps/{step_id}
Retrieves a run step.
Path parameters
run_id
string
Required
The ID of the run to which the run step belongs.
step_id
string
Required
The ID of the run step to retrieve.
thread_id
string
Required
The ID of the thread to which the run and run step belongs.
Query parameters
include[]
array
Optional
A list of additional fields to include in the response. Currently the only supported value is step_details.tool_calls[*].file_search.results[*].content to fetch the file search result content.

See the file search tool documentation for more information.
Returns
The run step object matching the specified ID.

Example request
curl

1
2
3
4
curl https://api.openai.com/v1/threads/thread_abc123/runs/run_abc123/steps/step_abc123 \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -H "OpenAI-Beta: assistants=v2"
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
{
  "id": "step_abc123",
  "object": "thread.run.step",
  "created_at": 1699063291,
  "run_id": "run_abc123",
  "assistant_id": "asst_abc123",
  "thread_id": "thread_abc123",
  "type": "message_creation",
  "status": "completed",
  "cancelled_at": null,
  "completed_at": 1699063291,
  "expired_at": null,
  "failed_at": null,
  "last_error": null,
  "step_details": {
    "type": "message_creation",
    "message_creation": {
      "message_id": "msg_abc123"
    }
  },
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 456,
    "total_tokens": 579
  }
}
The run step object
Beta
Represents a step in execution of a run.

assistant_id
string
The ID of the assistant associated with the run step.
cancelled_at
integer
The Unix timestamp (in seconds) for when the run step was cancelled.
completed_at
integer
The Unix timestamp (in seconds) for when the run step completed.
created_at
integer
The Unix timestamp (in seconds) for when the run step was created.
expired_at
integer
The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired.
failed_at
integer
The Unix timestamp (in seconds) for when the run step failed.
id
string
The identifier of the run step, which can be referenced in API endpoints.
last_error
object
The last error associated with this run step. Will be null if there are no errors.

Show properties
metadata
map
Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format, and querying for objects via API or the dashboard.

Keys are strings with a maximum length of 64 characters. Values are strings with a maximum length of 512 characters.
object
string
The object type, which is always thread.run.step.
run_id
string
The ID of the run that this run step is a part of.
status
string
The status of the run step, which can be either in_progress, cancelled, failed, completed, or expired.
step_details
object
The details of the run step.

Show possible types
thread_id
string
The ID of the thread that was run.
type
string
The type of run step, which can be either message_creation or tool_calls.
usage
object
Usage statistics related to the run step. This value will be null while the run step's status is in_progress.

Show properties
OBJECT The run step object

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
{
  "id": "step_abc123",
  "object": "thread.run.step",
  "created_at": 1699063291,
  "run_id": "run_abc123",
  "assistant_id": "asst_abc123",
  "thread_id": "thread_abc123",
  "type": "message_creation",
  "status": "completed",
  "cancelled_at": null,
  "completed_at": 1699063291,
  "expired_at": null,
  "failed_at": null,
  "last_error": null,
  "step_details": {
    "type": "message_creation",
    "message_creation": {
      "message_id": "msg_abc123"
    }
  },
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 456,
    "total_tokens": 579
  }
}
Streaming
Beta
Stream the result of executing a Run or resuming a Run after submitting tool outputs. You can stream events from the Create Thread and Run, Create Run, and Submit Tool Outputs endpoints by passing "stream": true. The response will be a Server-Sent events stream. Our Node and Python SDKs provide helpful utilities to make streaming easy. Reference the Assistants API quickstart to learn more.
The message delta object
Beta
Represents a message delta i.e. any changed fields on a message during streaming.

delta
object
The delta containing the fields that have changed on the Message.

Show properties
id
string
The identifier of the message, which can be referenced in API endpoints.
object
string
The object type, which is always thread.message.delta.
OBJECT The message delta object

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
  "id": "msg_123",
  "object": "thread.message.delta",
  "delta": {
    "content": [
      {
        "index": 0,
        "type": "text",
        "text": { "value": "Hello", "annotations": [] }
      }
    ]
  }
}
The run step delta object
Beta
Represents a run step delta i.e. any changed fields on a run step during streaming.

delta
object
The delta containing the fields that have changed on the run step.

Show properties
id
string
The identifier of the run step, which can be referenced in API endpoints.
object
string
The object type, which is always thread.run.step.delta.
OBJECT The run step delta object

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
  "id": "step_123",
  "object": "thread.run.step.delta",
  "delta": {
    "step_details": {
      "type": "tool_calls",
      "tool_calls": [
        {
          "index": 0,
          "id": "call_123",
          "type": "code_interpreter",
          "code_interpreter": { "input": "", "outputs": [] }
        }
      ]
    }
  }
}
Assistant stream events
Beta
Represents an event emitted when streaming a Run.

Each event in a server-sent events stream has an event and data property:


event: thread.created
data: {"id": "thread_123", "object": "thread", ...}
We emit events whenever a new object is created, transitions to a new state, or is being streamed in parts (deltas). For example, we emit thread.run.created when a new run is created, thread.run.completed when a run completes, and so on. When an Assistant chooses to create a message during a run, we emit a thread.message.created event, a thread.message.in_progress event, many thread.message.delta events, and finally a thread.message.completed event.

We may add additional events over time, so we recommend handling unknown events gracefully in your code. See the Assistants API quickstart to learn how to integrate the Assistants API with streaming.

done
data is [DONE]
Occurs when a stream ends.
error
data is an error
Occurs when an error occurs. This can happen due to an internal server error or a timeout.
thread.created
data is a thread
Occurs when a new thread is created.
thread.message.completed
data is a message
Occurs when a message is completed.
thread.message.created
data is a message
Occurs when a message is created.
thread.message.delta
data is a message delta
Occurs when parts of a Message are being streamed.
thread.message.in_progress
data is a message
Occurs when a message moves to an in_progress state.
thread.message.incomplete
data is a message
Occurs when a message ends before it is completed.
thread.run.cancelled
data is a run
Occurs when a run is cancelled.
thread.run.cancelling
data is a run
Occurs when a run moves to a cancelling status.
thread.run.completed
data is a run
Occurs when a run is completed.
thread.run.created
data is a run
Occurs when a new run is created.
thread.run.expired
data is a run
Occurs when a run expires.
thread.run.failed
data is a run
Occurs when a run fails.
thread.run.in_progress
data is a run
Occurs when a run moves to an in_progress status.
thread.run.incomplete
data is a run
Occurs when a run ends with status incomplete.
thread.run.queued
data is a run
Occurs when a run moves to a queued status.
thread.run.requires_action
data is a run
Occurs when a run moves to a requires_action status.
thread.run.step.cancelled
data is a run step
Occurs when a run step is cancelled.
thread.run.step.completed
data is a run step
Occurs when a run step is completed.
thread.run.step.created
data is a run step
Occurs when a run step is created.
thread.run.step.delta
data is a run step delta
Occurs when parts of a run step are being streamed.
thread.run.step.expired
data is a run step
Occurs when a run step expires.
thread.run.step.failed
data is a run step
Occurs when a run step fails.
thread.run.step.in_progress
data is a run step
Occurs when a run step moves to an in_progress state.