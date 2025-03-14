[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Filestore: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-filestore)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/filestore.svg)](https://www.npmjs.org/package/@google-cloud/filestore)




file client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-filestore/CHANGELOG.md).

* [Filestore Node.js Client API Reference][client-docs]
* [Filestore Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-filestore](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-filestore)

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
1.  [Enable the Filestore API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/filestore
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'us-central1-a';

// Imports the Google Cloud Some API library
const {CloudFilestoreManagerClient} = require('@google-cloud/filestore');
const client = new CloudFilestoreManagerClient();
async function listInstances() {
  for await (const instance of client.listInstancesAsync({
    parent: `projects/${projectId}/locations/${location}`,
  })) {
    console.info(instance);
  }
}
listInstances();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-filestore/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_filestore_manager.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_backups.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_instances.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_snapshots.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_snapshots.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.promote_replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.promote_replica.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.promote_replica.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.restore_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.restore_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.restore_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.revert_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.revert_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.revert_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_share.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.create_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_share.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.delete_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_share.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.get_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_backups.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_instances.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_shares | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_shares.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_shares.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.list_snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_snapshots.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_snapshots.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.promote_replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.promote_replica.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.promote_replica.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.restore_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.restore_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.restore_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.revert_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.revert_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.revert_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_backup.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_instance.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_share.js,packages/google-cloud-filestore/samples/README.md) |
| Cloud_filestore_manager.update_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_snapshot.js,packages/google-cloud-filestore/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-filestore/samples/quickstart.js,packages/google-cloud-filestore/samples/README.md) |



The [Filestore Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/filestore@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/filestore/latest
[product-docs]: https://cloud.google.com/filestore/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=file.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
