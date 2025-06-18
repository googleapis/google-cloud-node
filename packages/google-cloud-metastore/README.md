[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataproc Metastore: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-metastore)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataproc-metastore.svg)](https://www.npmjs.org/package/@google-cloud/dataproc-metastore)




Metastore client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-metastore/CHANGELOG.md).

* [Dataproc Metastore Node.js Client API Reference][client-docs]
* [Dataproc Metastore Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-metastore](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-metastore)

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
1.  [Enable the Dataproc Metastore API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataproc-metastore
```


### Using the client library

```javascript

// Imports the Google Cloud client library
const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'
// const location = 'my-location'

// Creates a client
const client = new DataprocMetastoreClient();

async function listServices() {
  const [services] = await client.listServices({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(services);
}
listServices();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-metastore/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Dataproc_metastore.alter_metadata_resource_location | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.alter_metadata_resource_location.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.alter_metadata_resource_location.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.export_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.export_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.export_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_backups.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_metadata_imports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_metadata_imports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_metadata_imports.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_services.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.move_table_to_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.move_table_to_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.move_table_to_database.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.query_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.query_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.query_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.restore_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.restore_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.restore_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.create_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.create_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.create_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.delete_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.delete_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.delete_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.get_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.get_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.get_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.list_federations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.list_federations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.list_federations.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.update_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.update_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.update_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.alter_metadata_resource_location | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.alter_metadata_resource_location.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.alter_metadata_resource_location.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.export_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.export_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.export_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_backups.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_metadata_imports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_metadata_imports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_metadata_imports.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_services.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.move_table_to_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.move_table_to_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.move_table_to_database.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.query_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.query_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.query_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.remove_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.remove_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.remove_iam_policy.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.restore_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.restore_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.restore_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.create_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.create_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.create_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.delete_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.delete_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.delete_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.get_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.get_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.get_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.list_federations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.list_federations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.list_federations.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.update_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.update_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.update_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.alter_metadata_resource_location | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.alter_metadata_resource_location.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.alter_metadata_resource_location.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.export_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.export_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.export_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_backup.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_backups.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_metadata_imports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_metadata_imports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_metadata_imports.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_services.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.move_table_to_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.move_table_to_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.move_table_to_database.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.query_metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.query_metadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.query_metadata.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.remove_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.remove_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.remove_iam_policy.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.restore_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.restore_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.restore_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_metadata_import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_metadata_import.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_metadata_import.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_service.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.create_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.create_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.create_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.delete_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.delete_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.delete_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.get_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.get_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.get_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.list_federations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.list_federations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.list_federations.js,packages/google-cloud-metastore/samples/README.md) |
| Dataproc_metastore_federation.update_federation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.update_federation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.update_federation.js,packages/google-cloud-metastore/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/quickstart.js,packages/google-cloud-metastore/samples/README.md) |



The [Dataproc Metastore Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dataproc-metastore@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dataproc-metastore/latest
[product-docs]: https://cloud.google.com/dataproc-metastore/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=metastore.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
