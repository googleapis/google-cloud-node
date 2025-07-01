[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Analytics API with Gemini: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-geminidataanalytics)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/geminidataanalytics.svg)](https://www.npmjs.org/package/@google-cloud/geminidataanalytics)




Data Analytics API with Gemini client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-geminidataanalytics/CHANGELOG.md).

* [Data Analytics API with Gemini Node.js Client API Reference][client-docs]
* [Data Analytics API with Gemini Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-geminidataanalytics](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-geminidataanalytics)

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
1.  [Enable the Data Analytics API with Gemini API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/geminidataanalytics
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
 *  Required. Parent value for ListDataAgentsRequest.
 */
// const parent = 'abc123'
/**
 *  Optional. Server may return fewer items than requested.
 *  If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListDataAgents` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListDataAgents` must
 *  match the call that provided the page token. The service may return fewer
 *  than this value.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results. See AIP-160 (https://google.aip.dev/160) for
 *  syntax.
 */
// const filter = 'abc123'
/**
 *  Optional. User specification for how to order the results.
 */
// const orderBy = 'abc123'
/**
 *  Optional. If true, the list results will include soft-deleted DataAgents.
 *  Defaults to false.
 */
// const showDeleted = true

// Imports the Geminidataanalytics library
const {DataAgentServiceClient} = require('@google-cloud/geminidataanalytics').v1beta;

// Instantiates a client
const geminidataanalyticsClient = new DataAgentServiceClient();

async function callListDataAgents() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = geminidataanalyticsClient.listDataAgentsAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListDataAgents();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-geminidataanalytics/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Context_retrieval_service.retrieve_big_query_recent_relevant_tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_recent_relevant_tables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_recent_relevant_tables.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_context.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_context.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_suggested_descriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_suggested_descriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/context_retrieval_service.retrieve_big_query_table_suggested_descriptions.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.create_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.create_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.create_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.delete_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.delete_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.delete_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.get_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.get_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.get_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.list_data_agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.list_data_agents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.list_data_agents.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.update_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.update_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_agent_service.update_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.chat | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.chat.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.chat.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.create_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.create_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.create_conversation.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.get_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.get_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.get_conversation.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.list_conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.list_conversations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.list_conversations.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.list_messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.list_messages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1alpha/data_chat_service.list_messages.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_recent_relevant_tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_recent_relevant_tables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_recent_relevant_tables.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_context.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_context.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_contexts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_contexts.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_contexts_from_recent_tables.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_suggested_descriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_suggested_descriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_suggested_descriptions.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Context_retrieval_service.retrieve_big_query_table_suggested_examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_suggested_examples.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/context_retrieval_service.retrieve_big_query_table_suggested_examples.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.create_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.create_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.create_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.delete_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.delete_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.delete_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.get_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.get_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.get_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.get_iam_policy.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.list_accessible_data_agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.list_accessible_data_agents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.list_accessible_data_agents.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.list_data_agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.list_data_agents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.list_data_agents.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.set_iam_policy.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_agent_service.update_data_agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.update_data_agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_agent_service.update_data_agent.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.chat | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.chat.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.chat.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.create_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.create_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.create_conversation.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.get_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.get_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.get_conversation.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.list_conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.list_conversations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.list_conversations.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Data_chat_service.list_messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.list_messages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/generated/v1beta/data_chat_service.list_messages.js,packages/google-cloud-geminidataanalytics/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-geminidataanalytics/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-geminidataanalytics/samples/quickstart.js,packages/google-cloud-geminidataanalytics/samples/README.md) |



The [Data Analytics API with Gemini Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/geminidataanalytics@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/geminidataanalytics/latest
[product-docs]: https://cloud.google.com/gemini/docs/conversational-analytics-api/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=geminidataanalytics.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
