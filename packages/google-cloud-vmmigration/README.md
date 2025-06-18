[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Migrate for Compute Engine: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmmigration)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/vmmigration.svg)](https://www.npmjs.org/package/@google-cloud/vmmigration)




vmmigration client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmmigration/CHANGELOG.md).

* [Migrate for Compute Engine Node.js Client API Reference][client-docs]
* [Migrate for Compute Engine Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-vmmigration](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmmigration)

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
1.  [Enable the Migrate for Compute Engine API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/vmmigration
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent, which owns this collection of targets.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of targets to return. The service may return
 *  fewer than this value. If unspecified, at most 500 targets will be
 *  returned. The maximum value is 1000; values above 1000 will be coerced to
 *  1000.
 */
// const pageSize = 1234
/**
 *  Required. A page token, received from a previous `ListTargets` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListTargets` must
 *  match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. The filter request.
 */
// const filter = 'abc123'
/**
 *  Optional. the order by fields for the result.
 */
// const orderBy = 'abc123'

// Imports the Vmmigration library
const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

// Instantiates a client
const vmmigrationClient = new VmMigrationClient();

async function callListTargetProjects() {
  // Construct request
  const request = {
    parent,
    pageToken,
  };

  // Run request
  const iterable = await vmmigrationClient.listTargetProjectsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListTargetProjects();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmmigration/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Vm_migration.add_group_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.add_group_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.add_group_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.cancel_clone_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_clone_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_clone_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.cancel_cutover_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_cutover_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_cutover_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_clone_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_clone_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_clone_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_cutover_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_cutover_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_cutover_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_datacenter_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_datacenter_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_datacenter_connector.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_group.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_migrating_vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_migrating_vm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_migrating_vm.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_source.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_target_project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_target_project.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_target_project.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.create_utilization_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_utilization_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_utilization_report.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_datacenter_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_datacenter_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_datacenter_connector.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_group.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_migrating_vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_migrating_vm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_migrating_vm.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_source.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_target_project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_target_project.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_target_project.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.delete_utilization_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_utilization_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_utilization_report.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.fetch_inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.fetch_inventory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.fetch_inventory.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.finalize_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.finalize_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.finalize_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_clone_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_clone_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_clone_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_cutover_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_cutover_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_cutover_job.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_datacenter_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_datacenter_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_datacenter_connector.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_group.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_migrating_vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_migrating_vm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_migrating_vm.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_replication_cycle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_replication_cycle.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_replication_cycle.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_source.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_target_project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_target_project.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_target_project.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.get_utilization_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_utilization_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_utilization_report.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_clone_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_clone_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_clone_jobs.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_cutover_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_cutover_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_cutover_jobs.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_datacenter_connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_datacenter_connectors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_datacenter_connectors.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_groups.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_migrating_vms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_migrating_vms.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_migrating_vms.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_replication_cycles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_replication_cycles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_replication_cycles.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_sources.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_target_projects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_target_projects.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_target_projects.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.list_utilization_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_utilization_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_utilization_reports.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.pause_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.pause_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.pause_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.remove_group_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.remove_group_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.remove_group_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.resume_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.resume_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.resume_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.start_migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.start_migration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.start_migration.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.update_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_group.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.update_migrating_vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_migrating_vm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_migrating_vm.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.update_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_source.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.update_target_project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_target_project.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_target_project.js,packages/google-cloud-vmmigration/samples/README.md) |
| Vm_migration.upgrade_appliance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.upgrade_appliance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.upgrade_appliance.js,packages/google-cloud-vmmigration/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmmigration/samples/quickstart.js,packages/google-cloud-vmmigration/samples/README.md) |



The [Migrate for Compute Engine Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/vmmigration@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/vmmigration/latest
[product-docs]: https://cloud.google.com/migrate/compute-engine/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vmmigration.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
