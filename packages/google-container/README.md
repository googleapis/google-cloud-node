[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Kubernetes Engine Cluster Manager API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-container)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/container.svg)](https://www.npmjs.org/package/@google-cloud/container)




Google Container Engine API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-container/CHANGELOG.md).

* [Kubernetes Engine Cluster Manager API Node.js Client API Reference][client-docs]
* [Kubernetes Engine Cluster Manager API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-container](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-container)

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
1.  [Enable the Kubernetes Engine Cluster Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/container
```


### Using the client library

```javascript
async function main() {
  const container = require('@google-cloud/container');

  // Create the Cluster Manager Client
  const client = new container.v1.ClusterManagerClient();

  async function quickstart() {
    const zone = 'us-central1-a';
    const projectId = await client.getProjectId();
    const request = {
      projectId: projectId,
      zone: zone,
    };

    const [response] = await client.listClusters(request);
    console.log('Clusters: ', response);
  }
  quickstart();
}

main().catch(console.error);

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-container/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cluster_manager.cancel_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js,packages/google-container/samples/README.md) |
| Cluster_manager.check_autopilot_compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js,packages/google-container/samples/README.md) |
| Cluster_manager.complete_i_p_rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js,packages/google-container/samples/README.md) |
| Cluster_manager.complete_node_pool_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js,packages/google-container/samples/README.md) |
| Cluster_manager.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.create_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.delete_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.fetch_cluster_upgrade_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js,packages/google-container/samples/README.md) |
| Cluster_manager.fetch_node_pool_upgrade_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_j_s_o_n_web_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_operation.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_node_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_operations.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_usable_subnetworks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js,packages/google-container/samples/README.md) |
| Cluster_manager.rollback_node_pool_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_addons_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_labels.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_legacy_abac | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_locations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_locations.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_logging_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_maintenance_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_master_auth | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_monitoring_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_autoscaling | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_management | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js,packages/google-container/samples/README.md) |
| Cluster_manager.start_i_p_rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_master.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_master.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.cancel_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js,packages/google-container/samples/README.md) |
| Cluster_manager.check_autopilot_compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js,packages/google-container/samples/README.md) |
| Cluster_manager.complete_i_p_rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js,packages/google-container/samples/README.md) |
| Cluster_manager.complete_node_pool_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js,packages/google-container/samples/README.md) |
| Cluster_manager.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.create_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.delete_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.fetch_cluster_upgrade_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js,packages/google-container/samples/README.md) |
| Cluster_manager.fetch_node_pool_upgrade_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_j_s_o_n_web_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js,packages/google-container/samples/README.md) |
| Cluster_manager.get_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_node_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js,packages/google-container/samples/README.md) |
| Cluster_manager.list_usable_subnetworks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js,packages/google-container/samples/README.md) |
| Cluster_manager.rollback_node_pool_upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_addons_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_legacy_abac | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_locations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_logging_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_maintenance_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_master_auth | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_monitoring_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_autoscaling | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_management | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js,packages/google-container/samples/README.md) |
| Cluster_manager.set_node_pool_size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js,packages/google-container/samples/README.md) |
| Cluster_manager.start_i_p_rotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js,packages/google-container/samples/README.md) |
| Cluster_manager.update_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js,packages/google-container/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/quickstart.js,packages/google-container/samples/README.md) |



The [Kubernetes Engine Cluster Manager API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/container@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/container/latest
[product-docs]: https://cloud.google.com/kubernetes-engine
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
