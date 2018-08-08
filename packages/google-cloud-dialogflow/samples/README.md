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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

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
                         environment variables.                  [string] [required] [default: "gcloud-project-name"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6ac7bd60-96a7-11e8-aaf1-2be61153eaa1"]
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

### Create Knowledge Base

View the [source code][dialogflow_create_knowledge_base_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: " "]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6ada8210-96a7-11e8-976d-973c7437ad89"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_knowledge_base_1_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.createKnowledgeBase
[dialogflow_create_knowledge_base_1_code]: detect.v2beta1.js

### Get Knowledge Base

View the [source code][dialogflow_get_knowledge_base_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: " "]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6b0896f0-96a7-11e8-887a-616001c324e6"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_get_knowledge_base_2_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.getKnowledgeBase
[dialogflow_get_knowledge_base_2_code]: detect.v2beta1.js

### list Knowledge Base

View the [source code][dialogflow_list_knowledge_base_3_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: " "]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6b343ad0-96a7-11e8-95f2-b7b882c3fcf7"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_list_knowledge_base_3_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.listKnowledgeBase
[dialogflow_list_knowledge_base_3_code]: detect.v2beta1.js

### list Knowledge Base

View the [source code][dialogflow_delete_knowledge_base_4_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: " "]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6b664750-96a7-11e8-964b-33faeef2cfd7"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_knowledge_base_4_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.deleteKnowledgeBase
[dialogflow_delete_knowledge_base_4_code]: detect.v2beta1.js

### create Document

View the [source code][dialogflow_create_document_5_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6b956da0-96a7-11e8-97a8-b54ad1970c87"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_create_document_5_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.createDocument
[dialogflow_create_document_5_code]: detect.v2beta1.js

### list Documents

View the [source code][dialogflow_list_document_6_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6bc13890-96a7-11e8-8b0b-83307f7cce2b"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_list_document_6_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.listDocuments
[dialogflow_list_document_6_code]: detect.v2beta1.js

### Get Document

View the [source code][dialogflow_get_document_7_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6beeff50-96a7-11e8-8ef6-8539e2c9d79c"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_get_document_7_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.getDocument
[dialogflow_get_document_7_code]: detect.v2beta1.js

### delete Document

View the [source code][dialogflow_delete_document_8_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6c21cf20-96a7-11e8-b88c-7f18dc0d0283"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_delete_document_8_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.deleteDocument
[dialogflow_delete_document_8_code]: detect.v2beta1.js

### detect Intent with sentiment analysis

View the [source code][dialogflow_detect_intent_with_sentiment_analysis_9_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6c5a6b50-96a7-11e8-ad4b-9132adc141c0"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_with_sentiment_analysis_9_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentwithSentimentAnalysis
[dialogflow_detect_intent_with_sentiment_analysis_9_code]: detect.v2beta1.js

### detect Intent with text-to-speech response

View the [source code][dialogflow_detect_intent_with_texttospeech_response_10_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6c904860-96a7-11e8-b080-efb3798b7965"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_with_texttospeech_response_10_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentwithtexttospeechresponse
[dialogflow_detect_intent_with_texttospeech_response_10_code]: detect.v2beta1.js

### detect Intent with Knowledge Base

View the [source code][dialogflow_detect_intent_knowledge_11_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md)

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
               [choices: "AUDIO_ENCODING_LINEAR16", "AUDIO_ENCODING_FLAC", "AUDIO_ENCODING_MULAW", "AUDIO_ENCODING_AMR",
                  "AUDIO_ENCODING_AMR_WB", "AUDIO_ENCODING_OGG_OPUS", "AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE"] [default:
                                                                                              "AUDIO_ENCODING_LINEAR16"]
  --knowledgeBaseName, -k      The name of the knowledge base to search from          [string] [default: "TestKnowBase"]
  --knowledgeBaseFullName, -n  full path knowledge base                                                         [string]
  --languageCode, -l           The language code of the query. Defaults to "en-US".          [string] [default: "en-US"]
  --model, -o                  The Speech model to return response: possible models- 'video', 'phone_call',
                               'command_and_search', 'default'                          [string] [default: "phone_call"]
  --outputFile, -f                                                          [string] [default: "./resources/output.wav"]
  --projectId, -p              The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or
                               GOOGLE_CLOUD_PROJECT environment variables.  [string] [default: "gcloud-project-name"]
  --queries, -q                An array of text queries              [array] [required] [default: ["How do I sign up?"]]
  --sampleRateHertz, -r        The sample rate in Hz of the input audio. Only required if the input audio is in raw
                               format.                                                         [number] [default: 16000]
  --sessionId, -s              The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6cca6b30-96a7-11e8-9b46-71f050e4f2cf"]
  --help                       Show help                                                                       [boolean]

Examples:
  node detect.v2beta1.js createKnowledgeBase -k "newTestKnowledgeBase"
  node detect.v2beta1.js getKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js listKnowledgeBases
  node detect.v2beta1.js deleteKnowledgeBase -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js createDocument -n "KNOWLEDGEBASEFULLNAME" -p "URIHTMLPATHTODOC"
  node detect.v2beta1.js getDocument -n "KNOWLEDGEBASEFULLNAME" -d "FULLDOCUMENTID"
  node detect.v2beta1.js listDocuments -n "KNOWLEDGEBASEFULLNAME"
  node detect.v2beta1.js deleteDocument -d "FULLDOCUMENTID"
  node detect.v2beta1.js detectIntentwithTexttoSpeechResponse "How do I sign up?"
  node detect.v2beta1.js detectIntentKnowledge "how do i sign up?"
  node detect.v2beta1.js detectIntentandSentiment "Book a great room for six great folks!"
  node detect.v2beta1.js detectIntentwithModelSelection -i "./resources/book_a_room.wav" -l "en-US" -o "phone_call"

For more information, see https://cloud.google.com/conversation/docs
```

[dialogflow_detect_intent_knowledge_11_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.detectIntentknowledge
[dialogflow_detect_intent_knowledge_11_code]: detect.v2beta1.js

### Detect Intent (Audio)

View the [source code][dialogflow_detect_intent_audio_12_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

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
                         environment variables.                  [string] [required] [default: "gcloud-project-name"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6d22c460-96a7-11e8-8898-73a768ffb741"]
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

[dialogflow_detect_intent_audio_12_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_audio_12_code]: detect.js

### Detect Intent (Streaming)

View the [source code][dialogflow_detect_intent_streaming_13_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/detect.js,samples/README.md)

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
                         environment variables.                  [string] [required] [default: "gcloud-project-name"]
  --sessionId, -s        The identifier of the detect session. Defaults to a random UUID.
                                                              [string] [default: "6d5434a0-96a7-11e8-a573-1fed0528f24b"]
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

[dialogflow_detect_intent_streaming_13_docs]: https://dialogflow.com/docs/reference/api-v2/rpc/google.cloud.dialogflow.v2beta1#google.cloud.dialogflow.v2beta1.DetectIntentRequest
[dialogflow_detect_intent_streaming_13_code]: detect.js

### Create Entity

View the [source code][dialogflow_create_entity_14_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/resource.js,samples/README.md)

__Usage:__ `node resource.js --help`

```
resource.js <command>

Commands:
  resource.js setup-agent                                       Create entity types and intent for ordering pizzas.
  resource.js clear-agent                                       Delete all intents and entity types from an agent.
  resource.js show-agent                                        Show all intents and entity types from an agent.
  resource.js update-entity-type <entityTypeId>                 Update an entity type.
  resource.js update-intent <intentId>                          Update an intent.
  resource.js setup-session <sessionId>                         Create contexts and session entity types for a session.
                                                                It assumes the agents is set up by setup-agent command.
  resource.js show-session <sessionId>                          Show all contexts and session entity types in a session.
  resource.js clear-session <sessionId>                         Delete all contexts and session entity types.
  resource.js update-context <sessionId> <contextId>            Update a context.
  resource.js update-session-entity-type <sessionId>            Update a session entity type.
  <entityTypeName>
  resource.js restore-room-agent                                Restore the room booking Dialogflow agent

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p  The Project ID to use. Defaults to the value of the GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT
                   environment variables.                        [string] [required] [default: "gcloud-project-name"]
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
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/dialogflow/dialogflow-nodejs-client-v2&page=editor&open_in_editor=samples/README.md
