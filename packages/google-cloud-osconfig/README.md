[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [OS Config API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-osconfig)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/os-config.svg)](https://www.npmjs.org/package/@google-cloud/os-config)




Osconfig client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-osconfig/CHANGELOG.md).

* [OS Config API Node.js Client API Reference][client-docs]
* [OS Config API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-osconfig](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-osconfig)

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
1.  [Enable the OS Config API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/os-config
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {OsConfigServiceClient} = require('@google-cloud/os-config');

// Creates a client
const client = new OsConfigServiceClient();

// project = 'my-project' // Project to list deployments for.

async function listPatchDeployments() {
  const [deployments] = await client.listPatchDeployments({
    parent: `projects/${project}`,
  });
  console.info(`found ${deployments.length} deployments:`);
  console.info(deployments);
}
const listPatchDeploymentsResponse = listPatchDeployments();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-osconfig/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Os_config_service.cancel_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.create_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.delete_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.execute_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.get_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.get_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_job_instance_details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.pause_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.resume_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.update_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.create_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.delete_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_o_s_policy_assignment_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_vulnerability_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_inventories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignment_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignment_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_vulnerability_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.update_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.create_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.delete_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_instance_o_s_policies_compliance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_o_s_policy_assignment_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.get_vulnerability_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_instance_o_s_policies_compliances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_inventories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignment_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignment_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_o_s_policy_assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.list_vulnerability_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_zonal_service.update_o_s_policy_assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.cancel_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.create_guest_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.create_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.delete_guest_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.delete_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.execute_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.get_guest_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.get_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.get_patch_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_guest_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_job_instance_details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.list_patch_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.lookup_effective_guest_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.pause_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.resume_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.update_guest_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js,packages/google-cloud-osconfig/samples/README.md) |
| Os_config_service.update_patch_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js,packages/google-cloud-osconfig/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/quickstart.js,packages/google-cloud-osconfig/samples/README.md) |



The [OS Config API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/os-config@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/os-config/latest
[product-docs]: https://cloud.google.com/compute/docs/os-patch-management
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=osconfig.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
