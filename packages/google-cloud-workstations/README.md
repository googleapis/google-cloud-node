[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Workstations API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workstations)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/workstations.svg)](https://www.npmjs.org/package/@google-cloud/workstations)




Cloud Workstations API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workstations/CHANGELOG.md).

* [Cloud Workstations API Node.js Client API Reference][client-docs]
* [Cloud Workstations API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-workstations](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workstations)

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
1.  [Enable the Cloud Workstations API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/workstations
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
 *  Required. Parent resource name.
 */
// const parent = 'abc123'
/**
 *  Maximum number of items to return.
 */
// const pageSize = 1234
/**
 *  next_page_token value returned from a previous List request, if any.
 */
// const pageToken = 'abc123'

// Imports the Workstations library
const {WorkstationsClient} = require('@google-cloud/workstations').v1beta;

// Instantiates a client
const workstationsClient = new WorkstationsClient();

async function callListWorkstations() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await workstationsClient.listWorkstationsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListWorkstations();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workstations/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Workstations.create_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.create_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.create_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.create_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.delete_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.generate_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.generate_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.generate_access_token.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.get_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_usable_workstation_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.list_usable_workstation_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.list_usable_workstation_configs.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_usable_workstations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.list_usable_workstations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.list_usable_workstations.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstation_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstation_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstation_clusters.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstation_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstation_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstation_configs.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.list_workstations.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.start_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.start_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.start_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.stop_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.stop_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.stop_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1/workstations.update_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.create_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.create_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.create_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.create_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.delete_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.delete_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.generate_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.generate_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.generate_access_token.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.get_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.get_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_usable_workstation_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_usable_workstation_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_usable_workstation_configs.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_usable_workstations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_usable_workstations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_usable_workstations.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstation_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstation_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstation_clusters.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstation_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstation_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstation_configs.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.list_workstations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.list_workstations.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.start_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.start_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.start_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.stop_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.stop_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.stop_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation_cluster.js,packages/google-cloud-workstations/samples/README.md) |
| Workstations.update_workstation_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/generated/v1beta/workstations.update_workstation_config.js,packages/google-cloud-workstations/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workstations/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workstations/samples/quickstart.js,packages/google-cloud-workstations/samples/README.md) |



The [Cloud Workstations API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/workstations@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/workstations/latest
[product-docs]: https://cloud.google.com/workstations/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=workstations.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
