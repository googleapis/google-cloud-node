[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Config Delivery API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-configdelivery)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/configdelivery.svg)](https://www.npmjs.org/package/@google-cloud/configdelivery)




Config Delivery API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-configdelivery/CHANGELOG.md).

* [Config Delivery API Node.js Client API Reference][client-docs]
* [Config Delivery API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-configdelivery](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-configdelivery)

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
1.  [Enable the Config Delivery API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/configdelivery
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
 *  Required. Parent value for ListRolloutsRequest
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server may return fewer items than
 *  requested. If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results
 */
// const filter = 'abc123'
/**
 *  Optional. Hint for how to order the results
 */
// const orderBy = 'abc123'

// Imports the Configdelivery library
const {ConfigDeliveryClient} = require('@google-cloud/configdelivery').v1;

// Instantiates a client
const configdeliveryClient = new ConfigDeliveryClient();

async function callListRollouts() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = configdeliveryClient.listRolloutsAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListRollouts();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-configdelivery/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Config_delivery.abort_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_fleet_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_resource_bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.resume_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.suspend_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.abort_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_fleet_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_resource_bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.resume_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.suspend_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.abort_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.create_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.delete_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.get_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_fleet_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_resource_bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.list_variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.resume_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.suspend_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_fleet_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_resource_bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js,packages/google-cloud-configdelivery/samples/README.md) |
| Config_delivery.update_variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js,packages/google-cloud-configdelivery/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/quickstart.js,packages/google-cloud-configdelivery/samples/README.md) |



The [Config Delivery API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/configdelivery@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/configdelivery/latest
[product-docs]: https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/concepts/fleet-packages
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=configdelivery.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
