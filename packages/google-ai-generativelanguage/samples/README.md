[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Generative Language API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Generative_service.batch_embed_contents](#generative_service.batch_embed_contents)
  * [Generative_service.count_tokens](#generative_service.count_tokens)
  * [Generative_service.embed_content](#generative_service.embed_content)
  * [Generative_service.generate_content](#generative_service.generate_content)
  * [Generative_service.stream_generate_content](#generative_service.stream_generate_content)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Cache_service.create_cached_content](#cache_service.create_cached_content)
  * [Cache_service.delete_cached_content](#cache_service.delete_cached_content)
  * [Cache_service.get_cached_content](#cache_service.get_cached_content)
  * [Cache_service.list_cached_contents](#cache_service.list_cached_contents)
  * [Cache_service.update_cached_content](#cache_service.update_cached_content)
  * [Discuss_service.count_message_tokens](#discuss_service.count_message_tokens)
  * [Discuss_service.generate_message](#discuss_service.generate_message)
  * [File_service.create_file](#file_service.create_file)
  * [File_service.delete_file](#file_service.delete_file)
  * [File_service.get_file](#file_service.get_file)
  * [File_service.list_files](#file_service.list_files)
  * [Generative_service.batch_embed_contents](#generative_service.batch_embed_contents)
  * [Generative_service.bidi_generate_content](#generative_service.bidi_generate_content)
  * [Generative_service.count_tokens](#generative_service.count_tokens)
  * [Generative_service.embed_content](#generative_service.embed_content)
  * [Generative_service.generate_answer](#generative_service.generate_answer)
  * [Generative_service.generate_content](#generative_service.generate_content)
  * [Generative_service.stream_generate_content](#generative_service.stream_generate_content)
  * [Model_service.create_tuned_model](#model_service.create_tuned_model)
  * [Model_service.delete_tuned_model](#model_service.delete_tuned_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.get_tuned_model](#model_service.get_tuned_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.list_tuned_models](#model_service.list_tuned_models)
  * [Model_service.update_tuned_model](#model_service.update_tuned_model)
  * [Permission_service.create_permission](#permission_service.create_permission)
  * [Permission_service.delete_permission](#permission_service.delete_permission)
  * [Permission_service.get_permission](#permission_service.get_permission)
  * [Permission_service.list_permissions](#permission_service.list_permissions)
  * [Permission_service.transfer_ownership](#permission_service.transfer_ownership)
  * [Permission_service.update_permission](#permission_service.update_permission)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Retriever_service.batch_create_chunks](#retriever_service.batch_create_chunks)
  * [Retriever_service.batch_delete_chunks](#retriever_service.batch_delete_chunks)
  * [Retriever_service.batch_update_chunks](#retriever_service.batch_update_chunks)
  * [Retriever_service.create_chunk](#retriever_service.create_chunk)
  * [Retriever_service.create_corpus](#retriever_service.create_corpus)
  * [Retriever_service.create_document](#retriever_service.create_document)
  * [Retriever_service.delete_chunk](#retriever_service.delete_chunk)
  * [Retriever_service.delete_corpus](#retriever_service.delete_corpus)
  * [Retriever_service.delete_document](#retriever_service.delete_document)
  * [Retriever_service.get_chunk](#retriever_service.get_chunk)
  * [Retriever_service.get_corpus](#retriever_service.get_corpus)
  * [Retriever_service.get_document](#retriever_service.get_document)
  * [Retriever_service.list_chunks](#retriever_service.list_chunks)
  * [Retriever_service.list_corpora](#retriever_service.list_corpora)
  * [Retriever_service.list_documents](#retriever_service.list_documents)
  * [Retriever_service.query_corpus](#retriever_service.query_corpus)
  * [Retriever_service.query_document](#retriever_service.query_document)
  * [Retriever_service.update_chunk](#retriever_service.update_chunk)
  * [Retriever_service.update_corpus](#retriever_service.update_corpus)
  * [Retriever_service.update_document](#retriever_service.update_document)
  * [Text_service.batch_embed_text](#text_service.batch_embed_text)
  * [Text_service.count_text_tokens](#text_service.count_text_tokens)
  * [Text_service.embed_text](#text_service.embed_text)
  * [Text_service.generate_text](#text_service.generate_text)
  * [Cache_service.create_cached_content](#cache_service.create_cached_content)
  * [Cache_service.delete_cached_content](#cache_service.delete_cached_content)
  * [Cache_service.get_cached_content](#cache_service.get_cached_content)
  * [Cache_service.list_cached_contents](#cache_service.list_cached_contents)
  * [Cache_service.update_cached_content](#cache_service.update_cached_content)
  * [Discuss_service.count_message_tokens](#discuss_service.count_message_tokens)
  * [Discuss_service.generate_message](#discuss_service.generate_message)
  * [File_service.create_file](#file_service.create_file)
  * [File_service.delete_file](#file_service.delete_file)
  * [File_service.get_file](#file_service.get_file)
  * [File_service.list_files](#file_service.list_files)
  * [Generative_service.batch_embed_contents](#generative_service.batch_embed_contents)
  * [Generative_service.count_tokens](#generative_service.count_tokens)
  * [Generative_service.embed_content](#generative_service.embed_content)
  * [Generative_service.generate_answer](#generative_service.generate_answer)
  * [Generative_service.generate_content](#generative_service.generate_content)
  * [Generative_service.stream_generate_content](#generative_service.stream_generate_content)
  * [Model_service.create_tuned_model](#model_service.create_tuned_model)
  * [Model_service.delete_tuned_model](#model_service.delete_tuned_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.get_tuned_model](#model_service.get_tuned_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.list_tuned_models](#model_service.list_tuned_models)
  * [Model_service.update_tuned_model](#model_service.update_tuned_model)
  * [Permission_service.create_permission](#permission_service.create_permission)
  * [Permission_service.delete_permission](#permission_service.delete_permission)
  * [Permission_service.get_permission](#permission_service.get_permission)
  * [Permission_service.list_permissions](#permission_service.list_permissions)
  * [Permission_service.transfer_ownership](#permission_service.transfer_ownership)
  * [Permission_service.update_permission](#permission_service.update_permission)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Retriever_service.batch_create_chunks](#retriever_service.batch_create_chunks)
  * [Retriever_service.batch_delete_chunks](#retriever_service.batch_delete_chunks)
  * [Retriever_service.batch_update_chunks](#retriever_service.batch_update_chunks)
  * [Retriever_service.create_chunk](#retriever_service.create_chunk)
  * [Retriever_service.create_corpus](#retriever_service.create_corpus)
  * [Retriever_service.create_document](#retriever_service.create_document)
  * [Retriever_service.delete_chunk](#retriever_service.delete_chunk)
  * [Retriever_service.delete_corpus](#retriever_service.delete_corpus)
  * [Retriever_service.delete_document](#retriever_service.delete_document)
  * [Retriever_service.get_chunk](#retriever_service.get_chunk)
  * [Retriever_service.get_corpus](#retriever_service.get_corpus)
  * [Retriever_service.get_document](#retriever_service.get_document)
  * [Retriever_service.list_chunks](#retriever_service.list_chunks)
  * [Retriever_service.list_corpora](#retriever_service.list_corpora)
  * [Retriever_service.list_documents](#retriever_service.list_documents)
  * [Retriever_service.query_corpus](#retriever_service.query_corpus)
  * [Retriever_service.query_document](#retriever_service.query_document)
  * [Retriever_service.update_chunk](#retriever_service.update_chunk)
  * [Retriever_service.update_corpus](#retriever_service.update_corpus)
  * [Retriever_service.update_document](#retriever_service.update_document)
  * [Text_service.batch_embed_text](#text_service.batch_embed_text)
  * [Text_service.count_text_tokens](#text_service.count_text_tokens)
  * [Text_service.embed_text](#text_service.embed_text)
  * [Text_service.generate_text](#text_service.generate_text)
  * [Discuss_service.count_message_tokens](#discuss_service.count_message_tokens)
  * [Discuss_service.generate_message](#discuss_service.generate_message)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Text_service.embed_text](#text_service.embed_text)
  * [Text_service.generate_text](#text_service.generate_text)
  * [Discuss_service.count_message_tokens](#discuss_service.count_message_tokens)
  * [Discuss_service.generate_message](#discuss_service.generate_message)
  * [Model_service.create_tuned_model](#model_service.create_tuned_model)
  * [Model_service.delete_tuned_model](#model_service.delete_tuned_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.get_tuned_model](#model_service.get_tuned_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.list_tuned_models](#model_service.list_tuned_models)
  * [Model_service.update_tuned_model](#model_service.update_tuned_model)
  * [Permission_service.create_permission](#permission_service.create_permission)
  * [Permission_service.delete_permission](#permission_service.delete_permission)
  * [Permission_service.get_permission](#permission_service.get_permission)
  * [Permission_service.list_permissions](#permission_service.list_permissions)
  * [Permission_service.transfer_ownership](#permission_service.transfer_ownership)
  * [Permission_service.update_permission](#permission_service.update_permission)
  * [Text_service.batch_embed_text](#text_service.batch_embed_text)
  * [Text_service.count_text_tokens](#text_service.count_text_tokens)
  * [Text_service.embed_text](#text_service.embed_text)
  * [Text_service.generate_text](#text_service.generate_text)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Generative_service.batch_embed_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js`


-----




### Generative_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js`


-----




### Generative_service.embed_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js`


-----




### Generative_service.generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js`


-----




### Generative_service.stream_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.stream_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.stream_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/generative_service.stream_generate_content.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/model_service.get_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1/model_service.list_models.js`


-----




### Cache_service.create_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.create_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.create_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.create_cached_content.js`


-----




### Cache_service.delete_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.delete_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.delete_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.delete_cached_content.js`


-----




### Cache_service.get_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.get_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.get_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.get_cached_content.js`


-----




### Cache_service.list_cached_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.list_cached_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.list_cached_contents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.list_cached_contents.js`


-----




### Cache_service.update_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.update_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.update_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.update_cached_content.js`


-----




### Discuss_service.count_message_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.count_message_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.count_message_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.count_message_tokens.js`


-----




### Discuss_service.generate_message

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.generate_message.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.generate_message.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.generate_message.js`


-----




### File_service.create_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.create_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.create_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.create_file.js`


-----




### File_service.delete_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.delete_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.delete_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.delete_file.js`


-----




### File_service.get_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.get_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.get_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.get_file.js`


-----




### File_service.list_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.list_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.list_files.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.list_files.js`


-----




### Generative_service.batch_embed_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.batch_embed_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.batch_embed_contents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.batch_embed_contents.js`


-----




### Generative_service.bidi_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.bidi_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.bidi_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.bidi_generate_content.js`


-----




### Generative_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.count_tokens.js`


-----




### Generative_service.embed_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.embed_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.embed_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.embed_content.js`


-----




### Generative_service.generate_answer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_answer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_answer.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_answer.js`


-----




### Generative_service.generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_content.js`


-----




### Generative_service.stream_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.stream_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.stream_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.stream_generate_content.js`


-----




### Model_service.create_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.create_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.create_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.create_tuned_model.js`


-----




### Model_service.delete_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.delete_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.delete_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.delete_tuned_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_model.js`


-----




### Model_service.get_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_tuned_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_models.js`


-----




### Model_service.list_tuned_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_tuned_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_tuned_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_tuned_models.js`


-----




### Model_service.update_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.update_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.update_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.update_tuned_model.js`


-----




### Permission_service.create_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.create_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.create_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.create_permission.js`


-----




### Permission_service.delete_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.delete_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.delete_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.delete_permission.js`


-----




### Permission_service.get_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.get_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.get_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.get_permission.js`


-----




### Permission_service.list_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.list_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.list_permissions.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.list_permissions.js`


-----




### Permission_service.transfer_ownership

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.transfer_ownership.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.transfer_ownership.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.transfer_ownership.js`


-----




### Permission_service.update_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.update_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.update_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.update_permission.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/prediction_service.predict.js`


-----




### Retriever_service.batch_create_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_create_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_create_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_create_chunks.js`


-----




### Retriever_service.batch_delete_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_delete_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_delete_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_delete_chunks.js`


-----




### Retriever_service.batch_update_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_update_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_update_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_update_chunks.js`


-----




### Retriever_service.create_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_chunk.js`


-----




### Retriever_service.create_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_corpus.js`


-----




### Retriever_service.create_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_document.js`


-----




### Retriever_service.delete_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_chunk.js`


-----




### Retriever_service.delete_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_corpus.js`


-----




### Retriever_service.delete_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_document.js`


-----




### Retriever_service.get_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_chunk.js`


-----




### Retriever_service.get_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_corpus.js`


-----




### Retriever_service.get_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_document.js`


-----




### Retriever_service.list_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_chunks.js`


-----




### Retriever_service.list_corpora

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_corpora.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_corpora.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_corpora.js`


-----




### Retriever_service.list_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_documents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_documents.js`


-----




### Retriever_service.query_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_corpus.js`


-----




### Retriever_service.query_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_document.js`


-----




### Retriever_service.update_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_chunk.js`


-----




### Retriever_service.update_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_corpus.js`


-----




### Retriever_service.update_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_document.js`


-----




### Text_service.batch_embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.batch_embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.batch_embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.batch_embed_text.js`


-----




### Text_service.count_text_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.count_text_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.count_text_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.count_text_tokens.js`


-----




### Text_service.embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.embed_text.js`


-----




### Text_service.generate_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.generate_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.generate_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.generate_text.js`


-----




### Cache_service.create_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.create_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.create_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.create_cached_content.js`


-----




### Cache_service.delete_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.delete_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.delete_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.delete_cached_content.js`


-----




### Cache_service.get_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.get_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.get_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.get_cached_content.js`


-----




### Cache_service.list_cached_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.list_cached_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.list_cached_contents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.list_cached_contents.js`


-----




### Cache_service.update_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.update_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.update_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.update_cached_content.js`


-----




### Discuss_service.count_message_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.count_message_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.count_message_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.count_message_tokens.js`


-----




### Discuss_service.generate_message

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.generate_message.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.generate_message.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.generate_message.js`


-----




### File_service.create_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.create_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.create_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.create_file.js`


-----




### File_service.delete_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.delete_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.delete_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.delete_file.js`


-----




### File_service.get_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.get_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.get_file.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.get_file.js`


-----




### File_service.list_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.list_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.list_files.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.list_files.js`


-----




### Generative_service.batch_embed_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.batch_embed_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.batch_embed_contents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.batch_embed_contents.js`


-----




### Generative_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.count_tokens.js`


-----




### Generative_service.embed_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.embed_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.embed_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.embed_content.js`


-----




### Generative_service.generate_answer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_answer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_answer.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_answer.js`


-----




### Generative_service.generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_content.js`


-----




### Generative_service.stream_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.stream_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.stream_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.stream_generate_content.js`


-----




### Model_service.create_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.create_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.create_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.create_tuned_model.js`


-----




### Model_service.delete_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.delete_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.delete_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.delete_tuned_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_model.js`


-----




### Model_service.get_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_tuned_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_models.js`


-----




### Model_service.list_tuned_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_tuned_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_tuned_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_tuned_models.js`


-----




### Model_service.update_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.update_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.update_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.update_tuned_model.js`


-----




### Permission_service.create_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.create_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.create_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.create_permission.js`


-----




### Permission_service.delete_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.delete_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.delete_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.delete_permission.js`


-----




### Permission_service.get_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.get_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.get_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.get_permission.js`


-----




### Permission_service.list_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.list_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.list_permissions.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.list_permissions.js`


-----




### Permission_service.transfer_ownership

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.transfer_ownership.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.transfer_ownership.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.transfer_ownership.js`


-----




### Permission_service.update_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.update_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.update_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.update_permission.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/prediction_service.predict.js`


-----




### Retriever_service.batch_create_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_create_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_create_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_create_chunks.js`


-----




### Retriever_service.batch_delete_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_delete_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_delete_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_delete_chunks.js`


-----




### Retriever_service.batch_update_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_update_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_update_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_update_chunks.js`


-----




### Retriever_service.create_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_chunk.js`


-----




### Retriever_service.create_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_corpus.js`


-----




### Retriever_service.create_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_document.js`


-----




### Retriever_service.delete_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_chunk.js`


-----




### Retriever_service.delete_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_corpus.js`


-----




### Retriever_service.delete_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_document.js`


-----




### Retriever_service.get_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_chunk.js`


-----




### Retriever_service.get_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_corpus.js`


-----




### Retriever_service.get_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_document.js`


-----




### Retriever_service.list_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_chunks.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_chunks.js`


-----




### Retriever_service.list_corpora

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_corpora.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_corpora.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_corpora.js`


-----




### Retriever_service.list_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_documents.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_documents.js`


-----




### Retriever_service.query_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_corpus.js`


-----




### Retriever_service.query_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_document.js`


-----




### Retriever_service.update_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_chunk.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_chunk.js`


-----




### Retriever_service.update_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_corpus.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_corpus.js`


-----




### Retriever_service.update_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_document.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_document.js`


-----




### Text_service.batch_embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.batch_embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.batch_embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.batch_embed_text.js`


-----




### Text_service.count_text_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.count_text_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.count_text_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.count_text_tokens.js`


-----




### Text_service.embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.embed_text.js`


-----




### Text_service.generate_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.generate_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.generate_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.generate_text.js`


-----




### Discuss_service.count_message_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js`


-----




### Discuss_service.generate_message

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js`


-----




### Text_service.embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js`


-----




### Text_service.generate_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js`


-----




### Discuss_service.count_message_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.count_message_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.count_message_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.count_message_tokens.js`


-----




### Discuss_service.generate_message

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.generate_message.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.generate_message.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.generate_message.js`


-----




### Model_service.create_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.create_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.create_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.create_tuned_model.js`


-----




### Model_service.delete_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.delete_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.delete_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.delete_tuned_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_model.js`


-----




### Model_service.get_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_tuned_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_models.js`


-----




### Model_service.list_tuned_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_tuned_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_tuned_models.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_tuned_models.js`


-----




### Model_service.update_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.update_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.update_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.update_tuned_model.js`


-----




### Permission_service.create_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.create_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.create_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.create_permission.js`


-----




### Permission_service.delete_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.delete_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.delete_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.delete_permission.js`


-----




### Permission_service.get_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.get_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.get_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.get_permission.js`


-----




### Permission_service.list_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.list_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.list_permissions.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.list_permissions.js`


-----




### Permission_service.transfer_ownership

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.transfer_ownership.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.transfer_ownership.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.transfer_ownership.js`


-----




### Permission_service.update_permission

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.update_permission.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.update_permission.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.update_permission.js`


-----




### Text_service.batch_embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.batch_embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.batch_embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.batch_embed_text.js`


-----




### Text_service.count_text_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.count_text_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.count_text_tokens.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.count_text_tokens.js`


-----




### Text_service.embed_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.embed_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.embed_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.embed_text.js`


-----




### Text_service.generate_text

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.generate_text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.generate_text.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.generate_text.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-ai-generativelanguage/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://developers.generativeai.google/
