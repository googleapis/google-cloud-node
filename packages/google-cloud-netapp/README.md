[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [NetApp API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-netapp)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/netapp.svg)](https://www.npmjs.org/package/@google-cloud/netapp)




NetApp API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-netapp/CHANGELOG.md).

* [NetApp API Node.js Client API Reference][client-docs]
* [NetApp API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-netapp](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-netapp)

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
1.  [Enable the NetApp API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/netapp
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
 *  Required. Parent value
 */
// const parent = 'abc123'
/**
 *  The maximum number of items to return.
 */
// const pageSize = 1234
/**
 *  The next_page_token value to use if there are additional
 *  results to retrieve for this list request.
 */
// const pageToken = 'abc123'
/**
 *  Sort results. Supported values are "name", "name desc" or "" (unsorted).
 */
// const orderBy = 'abc123'
/**
 *  List filter.
 */
// const filter = 'abc123'

// Imports the Netapp library
const {NetAppClient} = require('@google-cloud/netapp').v1;

// Instantiates a client
const netappClient = new NetAppClient();

async function callListStoragePools() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await netappClient.listStoragePoolsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListStoragePools();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-netapp/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Net_app.create_active_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_active_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_active_directory.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_backup_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup_policy.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_backup_vault.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_kms_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_kms_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_kms_config.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_quota_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_quota_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_quota_rule.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_snapshot.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_storage_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_storage_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_storage_pool.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.create_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.create_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.create_volume.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_active_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_active_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_active_directory.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_backup_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup_policy.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_backup_vault.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_kms_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_kms_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_kms_config.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_quota_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_quota_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_quota_rule.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_snapshot.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_storage_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_storage_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_storage_pool.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.delete_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.delete_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.delete_volume.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.encrypt_volumes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.encrypt_volumes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.encrypt_volumes.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.establish_peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.establish_peering.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.establish_peering.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_active_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_active_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_active_directory.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_backup_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup_policy.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_backup_vault.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_kms_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_kms_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_kms_config.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_quota_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_quota_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_quota_rule.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_snapshot.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_storage_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_storage_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_storage_pool.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.get_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.get_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.get_volume.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_active_directories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_active_directories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_active_directories.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_backup_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_backup_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_backup_policies.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_backup_vaults | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_backup_vaults.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_backup_vaults.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_backups.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_kms_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_kms_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_kms_configs.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_quota_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_quota_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_quota_rules.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_replications | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_replications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_replications.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_snapshots.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_snapshots.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_storage_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_storage_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_storage_pools.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.list_volumes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.list_volumes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.list_volumes.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.resume_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.resume_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.resume_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.reverse_replication_direction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.reverse_replication_direction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.reverse_replication_direction.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.revert_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.revert_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.revert_volume.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.stop_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.stop_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.stop_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.switch_active_replica_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.switch_active_replica_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.switch_active_replica_zone.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.sync_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.sync_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.sync_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_active_directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_active_directory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_active_directory.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_backup_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup_policy.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_backup_vault.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_kms_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_kms_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_kms_config.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_quota_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_quota_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_quota_rule.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_replication | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_replication.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_replication.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_snapshot.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_storage_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_storage_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_storage_pool.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.update_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.update_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.update_volume.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.validate_directory_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.validate_directory_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.validate_directory_service.js,packages/google-cloud-netapp/samples/README.md) |
| Net_app.verify_kms_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/generated/v1/net_app.verify_kms_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/generated/v1/net_app.verify_kms_config.js,packages/google-cloud-netapp/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-netapp/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-netapp/samples/quickstart.js,packages/google-cloud-netapp/samples/README.md) |



The [NetApp API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/netapp@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/netapp/latest
[product-docs]: https://cloud.google.com/netapp/volumes/docs/discover/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=netapp.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
