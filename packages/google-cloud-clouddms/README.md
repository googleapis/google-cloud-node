[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Database Migration Service: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-clouddms)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dms.svg)](https://www.npmjs.org/package/@google-cloud/dms)




Cloud Database Migration API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-clouddms/CHANGELOG.md).

* [Cloud Database Migration Service Node.js Client API Reference][client-docs]
* [Cloud Database Migration Service Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-clouddms](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-clouddms)

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
1.  [Enable the Cloud Database Migration Service API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dms
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {DataMigrationServiceClient} = require('@google-cloud/dms');

// const parent = 'projects/my-project', // Project to list service usage for.

// Creates a client
const client = new DataMigrationServiceClient();
async function listMigrationJobs() {
  for await (const migration of client.listMigrationJobsAsync({
    parent: `projects/${projectId}/locations/${location}`,
  })) {
    console.info(`${migration.name} ${migration.state}`);
  }
}
listMigrationJobs();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-clouddms/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_migration_service.apply_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.apply_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.apply_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.commit_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.commit_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.commit_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.convert_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.convert_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.convert_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.create_connection_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_connection_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_connection_profile.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.create_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.create_mapping_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_mapping_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_mapping_rule.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.create_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.create_private_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_private_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_private_connection.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.delete_connection_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_connection_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_connection_profile.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.delete_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.delete_mapping_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_mapping_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_mapping_rule.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.delete_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.delete_private_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_private_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_private_connection.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.describe_conversion_workspace_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_conversion_workspace_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_conversion_workspace_revisions.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.describe_database_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_database_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_database_entities.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.fetch_static_ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.fetch_static_ips.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.fetch_static_ips.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.generate_ssh_script | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_ssh_script.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_ssh_script.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.generate_tcp_proxy_script | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_tcp_proxy_script.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_tcp_proxy_script.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.get_connection_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_connection_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_connection_profile.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.get_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.get_mapping_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_mapping_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_mapping_rule.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.get_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.get_private_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_private_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_private_connection.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.import_mapping_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.import_mapping_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.import_mapping_rules.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.list_connection_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_connection_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_connection_profiles.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.list_conversion_workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_conversion_workspaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_conversion_workspaces.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.list_mapping_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_mapping_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_mapping_rules.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.list_migration_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_migration_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_migration_jobs.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.list_private_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_private_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_private_connections.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.promote_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.promote_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.promote_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.restart_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.restart_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.restart_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.resume_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.resume_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.resume_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.rollback_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.rollback_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.rollback_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.search_background_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.search_background_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.search_background_jobs.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.seed_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.seed_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.seed_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.start_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.start_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.start_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.stop_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.stop_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.stop_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.update_connection_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_connection_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_connection_profile.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.update_conversion_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_conversion_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_conversion_workspace.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.update_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Data_migration_service.verify_migration_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.verify_migration_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.verify_migration_job.js,packages/google-cloud-clouddms/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-clouddms/samples/quickstart.js,packages/google-cloud-clouddms/samples/README.md) |



The [Cloud Database Migration Service Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dms@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dms/latest
[product-docs]: https://cloud.google.com/database-migration/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datamigration.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
