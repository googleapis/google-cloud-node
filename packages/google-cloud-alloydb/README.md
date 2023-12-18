[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AlloyDB API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-alloydb)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/alloydb.svg)](https://www.npmjs.org/package/@google-cloud/alloydb)




AlloyDB API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-alloydb/CHANGELOG.md).

* [AlloyDB API Node.js Client API Reference][client-docs]
* [AlloyDB API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-alloydb](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-alloydb)

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
1.  [Enable the AlloyDB API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/alloydb
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
 *  Required. The name of the parent resource. The required format is:
 *   * projects/{project}/locations/{location}
 *  Regardless of the parent specified here, as long it is contains a valid
 *  project and location, the service will return a static list of supported
 *  flags resources. Note that we do not yet support region-specific
 *  flags.
 */
// const parent = 'abc123'
/**
 *  Requested page size. Server may return fewer items than requested.
 *  If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'

// Imports the Alloydb library
const {AlloyDBAdminClient} = require('@google-cloud/alloydb').v1alpha;

// Instantiates a client
const alloydbClient = new AlloyDBAdminClient();

async function callListSupportedDatabaseFlags() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await alloydbClient.listSupportedDatabaseFlagsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListSupportedDatabaseFlags();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-alloydb/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Alloy_d_b_admin.batch_create_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.batch_create_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.batch_create_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.failover_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.failover_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.failover_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.generate_client_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.generate_client_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.generate_client_certificate.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_connection_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_connection_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_connection_info.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.inject_fault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.inject_fault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.inject_fault.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_backups.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_clusters.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_supported_database_flags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_supported_database_flags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_supported_database_flags.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_users.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_users.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.promote_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.promote_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.promote_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restart_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restart_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restart_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restore_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restore_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restore_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.batch_create_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.batch_create_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.batch_create_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.failover_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.failover_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.failover_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.generate_client_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.generate_client_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.generate_client_certificate.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_connection_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_connection_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_connection_info.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.inject_fault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.inject_fault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.inject_fault.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_backups.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_clusters.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_databases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_databases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_databases.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_supported_database_flags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_supported_database_flags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_supported_database_flags.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_users.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_users.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.promote_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.promote_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.promote_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restart_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restart_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restart_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restore_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restore_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restore_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.batch_create_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.batch_create_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.batch_create_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_secondary_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.create_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.delete_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.failover_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.failover_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.failover_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.generate_client_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.generate_client_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.generate_client_certificate.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_connection_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_connection_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_connection_info.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.get_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.inject_fault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.inject_fault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.inject_fault.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_backups.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_clusters.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_instances.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_supported_database_flags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_supported_database_flags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_supported_database_flags.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.list_users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_users.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_users.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.promote_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.promote_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.promote_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restart_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restart_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restart_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.restore_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restore_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restore_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_backup.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_cluster.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_instance.js,packages/google-cloud-alloydb/samples/README.md) |
| Alloy_d_b_admin.update_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_user.js,packages/google-cloud-alloydb/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/quickstart.js,packages/google-cloud-alloydb/samples/README.md) |



The [AlloyDB API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/alloydb@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/alloydb/latest
[product-docs]: https://cloud.google.com/alloydb/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=alloydb.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
