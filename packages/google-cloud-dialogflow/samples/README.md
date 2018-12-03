[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Dialogflow: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Dialogflow](https://dialogflow.com/docs/reference/v2-agent-setup) is an enterprise-grade NLU platform that makes it easy for developers to design and integrate conversational user interfaces into mobile apps, web applications, devices, and bots.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Detect Intent (Text)](#detect-intent-text)
  * [Create Knowledge Base](#create-knowledge-base)
  * [Get Knowledge Base](#get-knowledge-base)
  * [list Knowledge Base](#list-knowledge-base)
  * [list Knowledge Base](#list-knowledge-base)
  * [create Document](#create-document)
  * [list Documents](#list-documents)
  * [Get Document](#get-document)
  * [delete Document](#delete-document)
  * [detect Intent with sentiment analysis](#detect-intent-with-sentiment-analysis)
  * [detect Intent with text-to-speech response](#detect-intent-with-text-to-speech-response)
  * [detect Intent with Knowledge Base](#detect-intent-with-knowledge-base)
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
detect.js <command>

Commands:
  detect.js text               Detects the intent for text queries.
  detect.js event <eventName>  Detects the intent for a client-generated event name.
  detect.js audio <filename>   Detects the intent for audio queries in a local file.
  detect.js stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --version              Show version number                                                                   [boolean]
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                           [string] [required] [default: "long-door-651"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "771eeb10-f741-11e8-94a4-b5ec7b7b0aef"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
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

### Create Knowledge Base

View the [source code][dialogflow_create_knowledge_base_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "773706f0-f741-11e8-a47e-3f6aff6be35a"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_knowledge_base_1_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.createKnowledgeBase
[dialogflow_create_knowledge_base_1_code]: detect.v2beta1.js

### Get Knowledge Base

View the [source code][dialogflow_get_knowledge_base_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "775452f0-f741-11e8-aab8-b595388c71f5"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_get_knowledge_base_2_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.getKnowledgeBase
[dialogflow_get_knowledge_base_2_code]: detect.v2beta1.js

### list Knowledge Base

View the [source code][dialogflow_list_knowledge_base_3_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "77719ef0-f741-11e8-817d-73ea6fdea7fd"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_list_knowledge_base_3_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.listKnowledgeBase
[dialogflow_list_knowledge_base_3_code]: detect.v2beta1.js

### list Knowledge Base

View the [source code][dialogflow_delete_knowledge_base_4_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "778f3910-f741-11e8-b1ce-213df77e3c62"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_knowledge_base_4_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.deleteKnowledgeBase
[dialogflow_delete_knowledge_base_4_code]: detect.v2beta1.js

### create Document

View the [source code][dialogflow_create_document_5_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "77acfa40-f741-11e8-89ae-6dc7503a2285"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_document_5_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.createDocument
[dialogflow_create_document_5_code]: detect.v2beta1.js

### list Documents

View the [source code][dialogflow_list_document_6_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "77ca6d50-f741-11e8-9d40-21394701053b"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_list_document_6_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.listDocuments
[dialogflow_list_document_6_code]: detect.v2beta1.js

### Get Document

View the [source code][dialogflow_get_document_7_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "77e71d10-f741-11e8-b563-9f48199882cd"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_get_document_7_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.getDocument
[dialogflow_get_document_7_code]: detect.v2beta1.js

### delete Document

View the [source code][dialogflow_delete_document_8_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "78041af0-f741-11e8-a03f-0194732cea0b"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_document_8_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.deleteDocument
[dialogflow_delete_document_8_code]: detect.v2beta1.js

### detect Intent with sentiment analysis

View the [source code][dialogflow_detect_intent_with_sentiment_analysis_9_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "7820f1c0-f741-11e8-b3e0-a718ce4e909f"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_with_sentiment_analysis_9_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentwithSentimentAnalysis
[dialogflow_detect_intent_with_sentiment_analysis_9_code]: detect.v2beta1.js

### detect Intent with text-to-speech response

View the [source code][dialogflow_detect_intent_with_texttospeech_response_10_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "783e3dc0-f741-11e8-bdb1-894d84c3819b"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_with_texttospeech_response_10_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentwithtexttospeechresponse
[dialogflow_detect_intent_with_texttospeech_response_10_code]: detect.v2beta1.js

### detect Intent with Knowledge Base

View the [source code][dialogflow_detect_intent_knowledge_11_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

__Usage:__ `node detect.v2beta1.js --help`

```
detect.v2beta1.js <command>

Commands:
  detect.v2beta1.js createKnowledgeBase                   Creates a new knowledge base
  detect.v2beta1.js getKnowledgeBase                      Gets Knowledge base by Knowledge Base Name
  detect.v2beta1.js listKnowledgeBases                    Lists all knowledge bases present by ProjectId
  detect.v2beta1.js deleteKnowledgeBase                   Deletes a knowledge base
  detect.v2beta1.js createDocument                        Creates a new document for this knowledge base
  detect.v2beta1.js getDocument                           Gets a specific document from the knowledge base
  detect.v2beta1.js listDocuments                         Lists all the documents belonging to a knowledge base
  detect.v2beta1.js deleteDocument                        Deletes a specific document from a knowledge base
  detect.v2beta1.js detectIntentwithTexttoSpeechResponse  Detects the intent of text input, outputs .wav file to target
                                                          location
  detect.v2beta1.js detectIntentKnowledge                 Detects anwsers from knowledge base queries
  detect.v2beta1.js detectIntentandSentiment              Detects sentiment with detect Intent query
  detect.v2beta1.js detectIntentwithModelSelection        Returns result of detect intent with model selection on an
                                                          audio file as input

Options:
  --version                    Show version number                                                             [boolean]
  --audioFilePath, -i          Audio File to send to Detect Intent with Model Selection
                                                                       [string] [default: "./resources/book_a_room.wav"]
  --documentId, -d             Full path of document in knowledge base                                          [string]
  --documentName, -m           Name of Document to Create                                  [string] [default: "testDoc"]
  --documentPath, -z           uri of document to be added                                                      [string]
  --encoding, -e               The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from     [string] [default: "TestKnowledgeBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --knowledgeBaseId, -b        specific Id string for knowledge base                                            [string]
  --knowledgeTypes, -t         The Knowledge type of the Document.                             [string] [default: "FAQ"]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --mimeType, -y               The mime_type of the Document                             [string] [default: "text/html"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.           [string] [default: "long-door-651"]
  --query, -q                  An array of text queries         [array] [required] [default: "Where is my data stored?"]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "785b3ba0-f741-11e8-b597-d1212baba1db"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC" -m "MyDoc"
  node detect.v2beta1.js getDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge -q "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_knowledge_11_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentknowledge
[dialogflow_detect_intent_knowledge_11_code]: detect.v2beta1.js

### Detect Intent (Audio)

View the [source code][dialogflow_detect_intent_audio_12_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
detect.js <command>

Commands:
  detect.js text               Detects the intent for text queries.
  detect.js event <eventName>  Detects the intent for a client-generated event name.
  detect.js audio <filename>   Detects the intent for audio queries in a local file.
  detect.js stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --version              Show version number                                                                   [boolean]
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                           [string] [required] [default: "long-door-651"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "787e05e0-f741-11e8-b4e5-89608794b500"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
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

[dialogflow_detect_intent_audio_12_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_audio_12_code]: detect.js

### Detect Intent (Streaming)

View the [source code][dialogflow_detect_intent_streaming_13_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md)

__Usage:__ `node detect.js --help`

```
detect.js <command>

Commands:
  detect.js text               Detects the intent for text queries.
  detect.js event <eventName>  Detects the intent for a client-generated event name.
  detect.js audio <filename>   Detects the intent for audio queries in a local file.
  detect.js stream <filename>  Detects the intent in a local audio file by streaming it to the Conversation API.

Options:
  --version              Show version number                                                                   [boolean]
  --projectId, -p        The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                         environment variables.                           [string] [required] [default: "long-door-651"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "789b2ad0-f741-11e8-9262-d55682d3ece0"]
  --languageCode, -l     The language code of the query. Defaults to "en-US".                [string] [default: "en-US"]
  --encoding, -e         The encoding of the input audio.
              [choices: "AUDIO_ENCODING_LINEAR_16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                             "AUDIO_ENCODING_LINEAR_16"]
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

[dialogflow_detect_intent_streaming_13_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_streaming_13_code]: detect.js

### Create Entity

View the [source code][dialogflow_create_entity_14_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_create_entity_14_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.EntityTypes.CreateEntityType
[dialogflow_create_entity_14_code]: resource.js

### Delete Entity

View the [source code][dialogflow_delete_entity_15_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_delete_entity_15_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.EntityTypes.DeleteEntityType
[dialogflow_delete_entity_15_code]: resource.js

### Create Intent

View the [source code][dialogflow_create_intent_16_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_create_intent_16_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intents.CreateIntent
[dialogflow_create_intent_16_code]: resource.js

### Delete Intent

View the [source code][dialogflow_delete_intent_17_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_delete_intent_17_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Intents.DeleteIntent
[dialogflow_delete_intent_17_code]: resource.js

### Create Context

View the [source code][dialogflow_create_context_18_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_create_context_18_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Contexts.CreateContext
[dialogflow_create_context_18_code]: resource.js

### Delete Context

View the [source code][dialogflow_delete_context_19_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_delete_context_19_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.Contexts.DeleteContext
[dialogflow_delete_context_19_code]: resource.js

### Create Session Entity Type

View the [source code][dialogflow_create_session_entity_type_20_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_create_session_entity_type_20_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.SessionEntityTypes.CreateSessionEntityType
[dialogflow_create_session_entity_type_20_code]: resource.js

### Delete Session Entity Type

View the [source code][dialogflow_delete_session_entity_type_21_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js create-entity-type          Create entity type
  resource.js list-entity-types           List entity types
  resource.js delete-entity-type          Delete entity type
  resource.js create-entity               Create Entity
  resource.js list-entities               List entities
  resource.js delete-entity               Delete entity
  resource.js create-context              Create Context
  resource.js list-contexts               List Intents
  resource.js delete-context              Delete Context
  resource.js create-intent               Create Intent
  resource.js list-intents                List Intent
  resource.js delete-intent               Delete Intent
  resource.js create-session-entity-type  Create entity type
  resource.js list-session-entity-types   List entity types
  resource.js delete-session-entity-type  Delete entity type

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                                 [string] [required] [default: "long-door-651"]
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

[dialogflow_delete_session_entity_type_21_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.SessionEntityTypes.DeleteSessionEntityType
[dialogflow_delete_session_entity_type_21_code]: resource.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/README.md
