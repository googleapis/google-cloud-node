[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Composer: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-orchestration-airflow-service)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/orchestration-airflow.svg)](https://www.npmjs.org/package/@google-cloud/orchestration-airflow)




orchestration-airflow client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-orchestration-airflow-service/CHANGELOG.md).

* [Cloud Composer Node.js Client API Reference][client-docs]
* [Cloud Composer Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-orchestration-airflow-service](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-orchestration-airflow-service)

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
1.  [Enable the Cloud Composer API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/orchestration-airflow
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
// eslint-disable-next-line node/no-missing-require
const {ImageVersionsClient} = require('@google-cloud/orchestration-airflow');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
// eslint-disable-next-line no-unused-vars
const client = new ImageVersionsClient();

async function listImageVersions() {
  const [versions] = await client.listImageVersions({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(versions);
}
listImageVersions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-orchestration-airflow-service/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Environments.check_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.check_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.check_upgrade.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.database_failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.database_failover.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.database_failover.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.execute_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.execute_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.execute_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.fetch_database_properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.fetch_database_properties.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.fetch_database_properties.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_environments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_environments.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_user_workloads_config_maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_config_maps.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_config_maps.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_user_workloads_secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_secrets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_secrets.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_workloads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_workloads.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.load_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.load_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.load_snapshot.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.poll_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.poll_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.poll_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.save_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.save_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.save_snapshot.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.stop_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.stop_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.stop_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Image_versions.list_image_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/image_versions.list_image_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1/image_versions.list_image_versions.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.check_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.check_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.check_upgrade.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.create_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.database_failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.database_failover.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.database_failover.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.delete_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.execute_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.execute_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.execute_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.fetch_database_properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.fetch_database_properties.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.fetch_database_properties.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.get_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_environments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_environments.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_user_workloads_config_maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_config_maps.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_config_maps.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_user_workloads_secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_secrets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_secrets.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.list_workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_workloads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_workloads.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.load_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.load_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.load_snapshot.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.poll_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.poll_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.poll_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.restart_web_server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.restart_web_server.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.restart_web_server.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.save_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.save_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.save_snapshot.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.stop_airflow_command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.stop_airflow_command.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.stop_airflow_command.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_environment.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_user_workloads_config_map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_config_map.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_config_map.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Environments.update_user_workloads_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_secret.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Image_versions.list_image_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/image_versions.list_image_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/image_versions.list_image_versions.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-orchestration-airflow-service/samples/quickstart.js,packages/google-cloud-orchestration-airflow-service/samples/README.md) |



The [Cloud Composer Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/orchestration-airflow@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/orchestration-airflow/latest
[product-docs]: https://cloud.google.com/composer/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=composer.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
