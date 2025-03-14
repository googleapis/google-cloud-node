[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AI Platform Notebooks: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-notebooks)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/notebooks.svg)](https://www.npmjs.org/package/@google-cloud/notebooks)




Notebooks client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-notebooks/CHANGELOG.md).

* [AI Platform Notebooks Node.js Client API Reference][client-docs]
* [AI Platform Notebooks Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-notebooks](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-notebooks)

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
1.  [Enable the AI Platform Notebooks API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/notebooks
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'global';

// Imports the Google Cloud Some API library
const {NotebookServiceClient} = require('@google-cloud/notebooks');
const client = new NotebookServiceClient();
async function listInstances() {
  const [instances] = await client.listInstances({
    parent: `projects/${projectId}/locations/${location}`,
  });
  for (const instance of instances) {
    console.info(`instance: ${instance.name}`);
  }
}
listInstances();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-notebooks/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Managed_notebook_service.create_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.delete_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.diagnose_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.get_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.list_runtimes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.refresh_runtime_token_internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.report_runtime_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.reset_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.start_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.stop_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.switch_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.update_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Managed_notebook_service.upgrade_runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.diagnose_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_instance_health | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.is_instance_upgradeable | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_schedules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.register_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.report_instance_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.reset_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.rollback_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_accelerator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_machine_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.start_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.stop_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.trigger_schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.update_instance_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.update_instance_metadata_items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.update_shielded_instance_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.upgrade_instance_internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.is_instance_upgradeable | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.register_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.report_instance_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.reset_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_accelerator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.set_instance_machine_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.start_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.stop_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.upgrade_instance_internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.check_instance_upgradability | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.diagnose_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.reset_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.rollback_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.start_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.stop_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Notebook_service.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js,packages/google-cloud-notebooks/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/quickstart.js,packages/google-cloud-notebooks/samples/README.md) |



The [AI Platform Notebooks Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/notebooks@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/notebooks/latest
[product-docs]: https://cloud.google.com/ai-platform/notebooks/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=notebooks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
