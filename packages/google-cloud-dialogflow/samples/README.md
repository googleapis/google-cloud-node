<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Dialogflow: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Dialogflow](https://dialogflow.com/docs/reference/v2-agent-setup) is an enterprise-grade NLU platform that makes it easy for developers to design and integrate conversational user interfaces into mobile apps, web applications, devices, and bots.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Detect Intent (Text)](#detect-intent-text)
  * [Detect Intent (Audio)](#detect-intent-audio)
  * [Detect Intent (Streaming)](#detect-intent-streaming)
  * [Create Entity](#create-entity)
  * [Delete Entity](#delete-entity)
  * [Create Intent](#create-intent)
  * [Delete Intent](#delete-intent)
  * [Create Context](#create-context)
  * [Delete Context](#delete-context)
  * [Create Session Entity Type](#create-session-entity-type)
  * [Delete Session Entity Type](#delete-session-entity-type)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Detect Intent (Text)

View the [source code][dialogflow_detect_intent_text_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
Commands:
  text               Detects the intent for text queries.
  event <eventName>  Detects the intent for a client-generated event name.
  audio <filename>   Detects the intent for audio queries in a local file.
  stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                                                      [string] [required]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "1cae5170-c9b1-11e7-9e4c-49e4d13488bd"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --sampleRateHertz, -r  The sample rate in Hz of the input audio. Only required if the input audio is in raw format.
                                                                                                                [number]
  --help                 Show help                                                                             [boolean]

Examples:
  node detect.js text -q "hello" "book a room" "Mountain View" "today" "230pm" "half an hour" "two people" "A" "yes"
  node detect.js event order_pizza
  node detect.js audio resources/book_a_room.wav -r 16000
  node detect.js stream resources/mountain_view.wav -r 16000

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_text_0_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_text_0_code]: detect.js

### Detect Intent (Audio)

View the [source code][dialogflow_detect_intent_audio_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
Commands:
  text               Detects the intent for text queries.
  event <eventName>  Detects the intent for a client-generated event name.
  audio <filename>   Detects the intent for audio queries in a local file.
  stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                                                      [string] [required]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "1d06aaa0-c9b1-11e7-b23a-410947d8c553"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --sampleRateHertz, -r  The sample rate in Hz of the input audio. Only required if the input audio is in raw format.
                                                                                                                [number]
  --help                 Show help                                                                             [boolean]

Examples:
  node detect.js text -q "hello" "book a room" "Mountain View" "today" "230pm" "half an hour" "two people" "A" "yes"
  node detect.js event order_pizza
  node detect.js audio resources/book_a_room.wav -r 16000
  node detect.js stream resources/mountain_view.wav -r 16000

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_audio_1_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_audio_1_code]: detect.js

### Detect Intent (Streaming)

View the [source code][dialogflow_detect_intent_streaming_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
Commands:
  text               Detects the intent for text queries.
  event <eventName>  Detects the intent for a client-generated event name.
  audio <filename>   Detects the intent for audio queries in a local file.
  stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                                                      [string] [required]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "1d5fee30-c9b1-11e7-bcaa-25ee574cba8f"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --sampleRateHertz, -r  The sample rate in Hz of the input audio. Only required if the input audio is in raw format.
                                                                                                                [number]
  --help                 Show help                                                                             [boolean]

Examples:
  node detect.js text -q "hello" "book a room" "Mountain View" "today" "230pm" "half an hour" "two people" "A" "yes"
  node detect.js event order_pizza
  node detect.js audio resources/book_a_room.wav -r 16000
  node detect.js stream resources/mountain_view.wav -r 16000

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_streaming_2_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_streaming_2_code]: detect.js

### Create Entity

View the [source code][dialogflow_create_entity_3_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_entity_3_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.EntityTypes.CreateEntityType
[dialogflow_create_entity_3_code]: resource.js

### Delete Entity

View the [source code][dialogflow_delete_entity_4_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_entity_4_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.EntityTypes.DeleteEntityType
[dialogflow_delete_entity_4_code]: resource.js

### Create Intent

View the [source code][dialogflow_create_intent_5_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_intent_5_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intents.CreateIntent
[dialogflow_create_intent_5_code]: resource.js

### Delete Intent

View the [source code][dialogflow_delete_intent_6_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_intent_6_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intents.DeleteIntent
[dialogflow_delete_intent_6_code]: resource.js

### Create Context

View the [source code][dialogflow_create_context_7_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_context_7_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Contexts.CreateContext
[dialogflow_create_context_7_code]: resource.js

### Delete Context

View the [source code][dialogflow_delete_context_8_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_context_8_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Contexts.DeleteContext
[dialogflow_delete_context_8_code]: resource.js

### Create Session Entity Type

View the [source code][dialogflow_create_session_entity_type_9_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_session_entity_type_9_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.SessionEntityTypes.CreateSessionEntityType
[dialogflow_create_session_entity_type_9_code]: resource.js

### Delete Session Entity Type

View the [source code][dialogflow_delete_session_entity_type_10_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
Commands:
  setup-agent                                              Create entity types and intent for ordering pizzas.
  clear-agent                                              Delete all intents and entity types from an agent.
  show-agent                                               Show all intents and entity types from an agent.
  update-entity-type <entityTypeId>                        Update an entity type.
  update-intent <intentId>                                 Update an intent.
  setup-session <sessionId>                                Create contexts and session entity types for a session. It
                                                           assumes the agents is set up by setup-agent command.
  show-session <sessionId>                                 Show all contexts and session entity types in a session.
  clear-session <sessionId>                                Delete all contexts and session entity types.
  update-context <sessionId> <contextId>                   Update a context.
  update-session-entity-type <sessionId> <entityTypeName>  Update a session entity type.
  restore-room-agent                                       Restore the room booking Dialogflow agent

Options:
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                                            [string] [required]
  --force, -f      force operation without a prompt                                                            [boolean]
  --help           Show help                                                                                   [boolean]

Examples:
  node resource.js setup-agent
  node resource.js show-agent
  node resource.js clear-agent
  node resource.js update-entity-type "my-entity-type-id"
  node resource.js update-intent "my-intent-id"
  node resource.js setup-session "my-session-id"
  node resource.js show-session "my-session-id"
  node resource.js clear-session "my-session-id"
  node resource.js update-context "my-session-id" "my-context-id"
  node resource.js update-session-entity-type "my-session-id" "my-entity-type-name"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_session_entity_type_10_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.SessionEntityTypes.DeleteSessionEntityType
[dialogflow_delete_session_entity_type_10_code]: resource.js

[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/README.md
