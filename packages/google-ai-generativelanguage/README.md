[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Generative Language API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-ai/generativelanguage.svg)](https://www.npmjs.org/package/@google-ai/generativelanguage)

Generative Language API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Generative Language API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/generativelanguage/latest)
* [Generative Language API Documentation](https://ai.google.dev/docs)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Generative Language API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-ai/generativelanguage
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch embed contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js) |
| count tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js) |
| embed content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js) |
| generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js) |
| stream generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.stream_generate_content.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/model_service.get_model.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/model_service.list_models.js) |
| ai | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/snippet_metadata_google.ai.generativelanguage.v1.json) |
| create cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.create_cached_content.js) |
| delete cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.delete_cached_content.js) |
| get cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.get_cached_content.js) |
| list cached contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.list_cached_contents.js) |
| update cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/cache_service.update_cached_content.js) |
| count message tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.count_message_tokens.js) |
| generate message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/discuss_service.generate_message.js) |
| create file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.create_file.js) |
| delete file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.delete_file.js) |
| get file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.get_file.js) |
| list files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/file_service.list_files.js) |
| batch embed contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.batch_embed_contents.js) |
| bidi generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.bidi_generate_content.js) |
| count tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.count_tokens.js) |
| embed content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.embed_content.js) |
| generate answer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_answer.js) |
| generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.generate_content.js) |
| stream generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/generative_service.stream_generate_content.js) |
| create tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.create_tuned_model.js) |
| delete tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.delete_tuned_model.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_model.js) |
| get tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.get_tuned_model.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_models.js) |
| list tuned models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.list_tuned_models.js) |
| update tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/model_service.update_tuned_model.js) |
| create permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.create_permission.js) |
| delete permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.delete_permission.js) |
| get permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.get_permission.js) |
| list permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.list_permissions.js) |
| transfer ownership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.transfer_ownership.js) |
| update permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/permission_service.update_permission.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/prediction_service.predict.js) |
| batch create chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_create_chunks.js) |
| batch delete chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_delete_chunks.js) |
| batch update chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.batch_update_chunks.js) |
| create chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_chunk.js) |
| create corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_corpus.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.create_document.js) |
| delete chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_chunk.js) |
| delete corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_corpus.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.delete_document.js) |
| get chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_chunk.js) |
| get corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_corpus.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.get_document.js) |
| list chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_chunks.js) |
| list corpora | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_corpora.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.list_documents.js) |
| query corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_corpus.js) |
| query document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.query_document.js) |
| update chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_chunk.js) |
| update corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_corpus.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/retriever_service.update_document.js) |
| ai | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/snippet_metadata_google.ai.generativelanguage.v1alpha.json) |
| batch embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.batch_embed_text.js) |
| count text tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.count_text_tokens.js) |
| embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.embed_text.js) |
| generate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1alpha/text_service.generate_text.js) |
| create cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.create_cached_content.js) |
| delete cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.delete_cached_content.js) |
| get cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.get_cached_content.js) |
| list cached contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.list_cached_contents.js) |
| update cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/cache_service.update_cached_content.js) |
| count message tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.count_message_tokens.js) |
| generate message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/discuss_service.generate_message.js) |
| create file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.create_file.js) |
| delete file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.delete_file.js) |
| download file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.download_file.js) |
| get file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.get_file.js) |
| list files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/file_service.list_files.js) |
| batch embed contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.batch_embed_contents.js) |
| bidi generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.bidi_generate_content.js) |
| count tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.count_tokens.js) |
| embed content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.embed_content.js) |
| generate answer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_answer.js) |
| generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.generate_content.js) |
| stream generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/generative_service.stream_generate_content.js) |
| create tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.create_tuned_model.js) |
| delete tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.delete_tuned_model.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_model.js) |
| get tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.get_tuned_model.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_models.js) |
| list tuned models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.list_tuned_models.js) |
| update tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/model_service.update_tuned_model.js) |
| create permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.create_permission.js) |
| delete permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.delete_permission.js) |
| get permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.get_permission.js) |
| list permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.list_permissions.js) |
| transfer ownership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.transfer_ownership.js) |
| update permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/permission_service.update_permission.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/prediction_service.predict.js) |
| predict long running | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/prediction_service.predict_long_running.js) |
| batch create chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_create_chunks.js) |
| batch delete chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_delete_chunks.js) |
| batch update chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.batch_update_chunks.js) |
| create chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_chunk.js) |
| create corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_corpus.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.create_document.js) |
| delete chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_chunk.js) |
| delete corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_corpus.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.delete_document.js) |
| get chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_chunk.js) |
| get corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_corpus.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.get_document.js) |
| list chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_chunks.js) |
| list corpora | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_corpora.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.list_documents.js) |
| query corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_corpus.js) |
| query document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.query_document.js) |
| update chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_chunk.js) |
| update corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_corpus.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/retriever_service.update_document.js) |
| ai | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/snippet_metadata_google.ai.generativelanguage.v1beta.json) |
| batch embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.batch_embed_text.js) |
| count text tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.count_text_tokens.js) |
| embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.embed_text.js) |
| generate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta/text_service.generate_text.js) |
| count message tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js) |
| generate message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js) |
| ai | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/snippet_metadata_google.ai.generativelanguage.v1beta2.json) |
| embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js) |
| generate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js) |
| count message tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.count_message_tokens.js) |
| generate message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/discuss_service.generate_message.js) |
| create tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.create_tuned_model.js) |
| delete tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.delete_tuned_model.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_model.js) |
| get tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.get_tuned_model.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_models.js) |
| list tuned models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.list_tuned_models.js) |
| update tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/model_service.update_tuned_model.js) |
| create permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.create_permission.js) |
| delete permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.delete_permission.js) |
| get permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.get_permission.js) |
| list permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.list_permissions.js) |
| transfer ownership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.transfer_ownership.js) |
| update permission | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/permission_service.update_permission.js) |
| ai | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/snippet_metadata_google.ai.generativelanguage.v1beta3.json) |
| batch embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.batch_embed_text.js) |
| count text tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.count_text_tokens.js) |
| embed text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.embed_text.js) |
| generate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta3/text_service.generate_text.js) |


## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-ai/generativelanguage@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=generativelanguage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage
