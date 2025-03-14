[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [GDC Hardware Management API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gdchardwaremanagement)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/gdchardwaremanagement.svg)](https://www.npmjs.org/package/@google-cloud/gdchardwaremanagement)




GDC Hardware Management API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gdchardwaremanagement/CHANGELOG.md).

* [GDC Hardware Management API Node.js Client API Reference][client-docs]
* [GDC Hardware Management API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-gdchardwaremanagement](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gdchardwaremanagement)

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
1.  [Enable the GDC Hardware Management API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/gdchardwaremanagement
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
 *  Required. The project and location to list SKUs in.
 *  Format: `projects/{project}/locations/{location}`
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
 *  Optional. Filtering condition. See AIP-160 (https://google.aip.dev/160).
 */
// const filter = 'abc123'
/**
 *  Optional. Hint for how to order the results.
 */
// const orderBy = 'abc123'

// Imports the Gdchardwaremanagement library
const {GDCHardwareManagementClient} =
  require('@google-cloud/gdchardwaremanagement').v1alpha;

// Instantiates a client
const gdchardwaremanagementClient = new GDCHardwareManagementClient();

async function callListSkus() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = gdchardwaremanagementClient.listSkusAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListSkus();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gdchardwaremanagement/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| G_d_c_hardware_management.create_comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_comment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_comment.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.create_hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.create_hardware_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_hardware_group.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.create_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_order.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.create_site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_site.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_site.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.create_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.create_zone.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.delete_hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.delete_hardware_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_hardware_group.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.delete_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_order.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.delete_site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_site.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_site.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.delete_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.delete_zone.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_change_log_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_change_log_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_change_log_entry.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_comment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_comment.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_hardware_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_hardware_group.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_order.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_site.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_site.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_sku | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_sku.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_sku.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.get_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.get_zone.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_change_log_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_change_log_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_change_log_entries.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_comments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_comments.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_hardware_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_hardware_groups.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_orders.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_orders.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_sites.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_sites.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_skus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_skus.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.list_zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_zones.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.list_zones.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.record_action_on_comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.record_action_on_comment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.record_action_on_comment.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.signal_zone_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.signal_zone_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.signal_zone_state.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.submit_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.submit_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.submit_order.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.update_hardware | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.update_hardware_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_hardware_group.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.update_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_order.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.update_site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_site.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_site.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| G_d_c_hardware_management.update_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/generated/v1alpha/g_d_c_hardware_management.update_zone.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gdchardwaremanagement/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gdchardwaremanagement/samples/quickstart.js,packages/google-cloud-gdchardwaremanagement/samples/README.md) |



The [GDC Hardware Management API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/gdchardwaremanagement@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/gdchardwaremanagement/latest
[product-docs]: https://cloud.google.com/distributed-cloud/edge/latest/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gdchardwaremanagement.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
