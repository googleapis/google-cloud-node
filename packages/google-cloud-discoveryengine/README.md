[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Discovery Engine API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-discoveryengine)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/discoveryengine.svg)](https://www.npmjs.org/package/@google-cloud/discoveryengine)




Discovery Engine API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-discoveryengine/CHANGELOG.md).

* [Discovery Engine API Node.js Client API Reference][client-docs]
* [Discovery Engine API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-discoveryengine](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-discoveryengine)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Discovery Engine API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/discoveryengine
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent branch resource name, such as
 *  `projects/{project}/locations/{location}/dataStores/{data_store}/branches/{branch}`.
 *  Use `default_branch` as the branch ID, to list documents under the default
 *  branch.
 *  If the caller does not have permission to list Documents  s under this
 *  branch, regardless of whether or not this branch exists, a
 *  PERMISSION_DENIED error is returned.
 */
// const parent = 'abc123'
/**
 *  Maximum number of Document google.cloud.discoveryengine.v1beta.Document s
 *  to return. If unspecified, defaults to 100. The maximum allowed value is
 *  1000. Values above 1000 will be coerced to 1000.
 *  If this field is negative, an INVALID_ARGUMENT error is returned.
 */
// const pageSize = 1234
/**
 *  A page token
 *  ListDocumentsResponse.next_page_token google.cloud.discoveryengine.v1beta.ListDocumentsResponse.next_page_token,
 *  received from a previous
 *  DocumentService.ListDocuments google.cloud.discoveryengine.v1beta.DocumentService.ListDocuments
 *  call. Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to
 *  DocumentService.ListDocuments google.cloud.discoveryengine.v1beta.DocumentService.ListDocuments
 *  must match the call that provided the page token. Otherwise, an
 *  INVALID_ARGUMENT error is returned.
 */
// const pageToken = 'abc123'

// Imports the Discoveryengine library
const {DocumentServiceClient} =
  require('@google-cloud/discoveryengine').v1beta;

// Instantiates a client
const discoveryengineClient = new DocumentServiceClient();

async function callListDocuments() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await discoveryengineClient.listDocumentsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDocuments();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-discoveryengine/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Completion_service.complete_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.converse_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.create_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.delete_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.get_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.list_conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.update_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.create_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.delete_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.get_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.import_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.list_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.purge_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.update_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.create_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.delete_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.get_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.list_schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.update_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Search_service.search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.collect_user_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.import_user_events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.write_user_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Completion_service.complete_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.converse_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.create_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.delete_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.get_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.list_conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Conversational_search_service.update_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.create_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.delete_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.get_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.import_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.list_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.purge_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Document_service.update_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Recommendation_service.recommend | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.create_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.delete_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.get_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.list_schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Schema_service.update_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Search_service.search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.collect_user_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.import_user_events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js,packages/google-cloud-discoveryengine/samples/README.md) |
| User_event_service.write_user_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js,packages/google-cloud-discoveryengine/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/quickstart.js,packages/google-cloud-discoveryengine/samples/README.md) |



The [Discovery Engine API Node.js Client API Reference][client-docs] documentation
also contains samples.

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
For example, `npm install @google-cloud/discoveryengine@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/discoveryengine/latest
[product-docs]: cloud.google.com/discovery-engine/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=discoveryengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
