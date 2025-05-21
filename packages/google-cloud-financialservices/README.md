[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Financial Services API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-financialservices)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/financialservices.svg)](https://www.npmjs.org/package/@google-cloud/financialservices)




Financial Services API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-financialservices/CHANGELOG.md).

* [Financial Services API Node.js Client API Reference][client-docs]
* [Financial Services API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-financialservices](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-financialservices)

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
1.  [Enable the Financial Services API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/financialservices
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
 *  Required. The parent of the Instance is the location for that Instance.
 *  Every location has exactly one instance.
 */
// const parent = 'abc123'
/**
 *  The number of resources to be included in the response. The response
 *  contains a next_page_token, which can be used to retrieve the next page of
 *  resources.
 */
// const pageSize = 1234
/**
 *  In case of paginated results, this is the token that was returned in the
 *  previous ListInstancesResponse. It should be copied here to retrieve the
 *  next page of resources. This will be empty for the first instance of
 *  ListInstancesRequest.
 */
// const pageToken = 'abc123'
/**
 *  Specify a filter to narrow search results.
 */
// const filter = 'abc123'
/**
 *  Specify a field to use for ordering.
 */
// const orderBy = 'abc123'

// Imports the Financialservices library
const {AMLClient} = require('@google-cloud/financialservices').v1;

// Instantiates a client
const financialservicesClient = new AMLClient();

async function callListInstances() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = financialservicesClient.listInstancesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListInstances();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-financialservices/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| A_m_l.create_backtest_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_backtest_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_backtest_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_dataset.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.create_engine_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_engine_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_engine_config.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_instance.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.create_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_model.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.create_prediction_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_prediction_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.create_prediction_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_backtest_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_backtest_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_backtest_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_dataset.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_engine_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_engine_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_engine_config.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_instance.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_model.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.delete_prediction_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_prediction_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.delete_prediction_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.export_backtest_result_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_backtest_result_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_backtest_result_metadata.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.export_engine_config_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_engine_config_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_engine_config_metadata.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.export_model_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_model_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_model_metadata.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.export_prediction_result_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_prediction_result_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_prediction_result_metadata.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.export_registered_parties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_registered_parties.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.export_registered_parties.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_backtest_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_backtest_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_backtest_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_dataset.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_engine_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_config.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_engine_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_engine_version.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_instance.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_model.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.get_prediction_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_prediction_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.get_prediction_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.import_registered_parties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.import_registered_parties.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.import_registered_parties.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_backtest_results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_backtest_results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_backtest_results.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_datasets.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_engine_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_configs.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_engine_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_engine_versions.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_instances.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_models.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.list_prediction_results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_prediction_results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.list_prediction_results.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_backtest_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_backtest_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_backtest_result.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_dataset.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_engine_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_engine_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_engine_config.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_instance.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_model.js,packages/google-cloud-financialservices/samples/README.md) |
| A_m_l.update_prediction_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_prediction_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/generated/v1/a_m_l.update_prediction_result.js,packages/google-cloud-financialservices/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-financialservices/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-financialservices/samples/quickstart.js,packages/google-cloud-financialservices/samples/README.md) |



The [Financial Services API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/financialservices@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/financialservices/latest
[product-docs]: https://cloud.google.com/financial-services/anti-money-laundering/docs/concepts/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=financialservices.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
