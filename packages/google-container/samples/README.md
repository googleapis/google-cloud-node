[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Kubernetes Engine Cluster Manager API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cluster_manager.cancel_operation](#cluster_manager.cancel_operation)
  * [Cluster_manager.check_autopilot_compatibility](#cluster_manager.check_autopilot_compatibility)
  * [Cluster_manager.complete_i_p_rotation](#cluster_manager.complete_i_p_rotation)
  * [Cluster_manager.complete_node_pool_upgrade](#cluster_manager.complete_node_pool_upgrade)
  * [Cluster_manager.create_cluster](#cluster_manager.create_cluster)
  * [Cluster_manager.create_node_pool](#cluster_manager.create_node_pool)
  * [Cluster_manager.delete_cluster](#cluster_manager.delete_cluster)
  * [Cluster_manager.delete_node_pool](#cluster_manager.delete_node_pool)
  * [Cluster_manager.fetch_cluster_upgrade_info](#cluster_manager.fetch_cluster_upgrade_info)
  * [Cluster_manager.fetch_node_pool_upgrade_info](#cluster_manager.fetch_node_pool_upgrade_info)
  * [Cluster_manager.get_cluster](#cluster_manager.get_cluster)
  * [Cluster_manager.get_j_s_o_n_web_keys](#cluster_manager.get_j_s_o_n_web_keys)
  * [Cluster_manager.get_node_pool](#cluster_manager.get_node_pool)
  * [Cluster_manager.get_operation](#cluster_manager.get_operation)
  * [Cluster_manager.get_server_config](#cluster_manager.get_server_config)
  * [Cluster_manager.list_clusters](#cluster_manager.list_clusters)
  * [Cluster_manager.list_node_pools](#cluster_manager.list_node_pools)
  * [Cluster_manager.list_operations](#cluster_manager.list_operations)
  * [Cluster_manager.list_usable_subnetworks](#cluster_manager.list_usable_subnetworks)
  * [Cluster_manager.rollback_node_pool_upgrade](#cluster_manager.rollback_node_pool_upgrade)
  * [Cluster_manager.set_addons_config](#cluster_manager.set_addons_config)
  * [Cluster_manager.set_labels](#cluster_manager.set_labels)
  * [Cluster_manager.set_legacy_abac](#cluster_manager.set_legacy_abac)
  * [Cluster_manager.set_locations](#cluster_manager.set_locations)
  * [Cluster_manager.set_logging_service](#cluster_manager.set_logging_service)
  * [Cluster_manager.set_maintenance_policy](#cluster_manager.set_maintenance_policy)
  * [Cluster_manager.set_master_auth](#cluster_manager.set_master_auth)
  * [Cluster_manager.set_monitoring_service](#cluster_manager.set_monitoring_service)
  * [Cluster_manager.set_network_policy](#cluster_manager.set_network_policy)
  * [Cluster_manager.set_node_pool_autoscaling](#cluster_manager.set_node_pool_autoscaling)
  * [Cluster_manager.set_node_pool_management](#cluster_manager.set_node_pool_management)
  * [Cluster_manager.set_node_pool_size](#cluster_manager.set_node_pool_size)
  * [Cluster_manager.start_i_p_rotation](#cluster_manager.start_i_p_rotation)
  * [Cluster_manager.update_cluster](#cluster_manager.update_cluster)
  * [Cluster_manager.update_master](#cluster_manager.update_master)
  * [Cluster_manager.update_node_pool](#cluster_manager.update_node_pool)
  * [Cluster_manager.cancel_operation](#cluster_manager.cancel_operation)
  * [Cluster_manager.check_autopilot_compatibility](#cluster_manager.check_autopilot_compatibility)
  * [Cluster_manager.complete_i_p_rotation](#cluster_manager.complete_i_p_rotation)
  * [Cluster_manager.complete_node_pool_upgrade](#cluster_manager.complete_node_pool_upgrade)
  * [Cluster_manager.create_cluster](#cluster_manager.create_cluster)
  * [Cluster_manager.create_node_pool](#cluster_manager.create_node_pool)
  * [Cluster_manager.delete_cluster](#cluster_manager.delete_cluster)
  * [Cluster_manager.delete_node_pool](#cluster_manager.delete_node_pool)
  * [Cluster_manager.fetch_cluster_upgrade_info](#cluster_manager.fetch_cluster_upgrade_info)
  * [Cluster_manager.fetch_node_pool_upgrade_info](#cluster_manager.fetch_node_pool_upgrade_info)
  * [Cluster_manager.get_cluster](#cluster_manager.get_cluster)
  * [Cluster_manager.get_j_s_o_n_web_keys](#cluster_manager.get_j_s_o_n_web_keys)
  * [Cluster_manager.get_node_pool](#cluster_manager.get_node_pool)
  * [Cluster_manager.get_operation](#cluster_manager.get_operation)
  * [Cluster_manager.get_server_config](#cluster_manager.get_server_config)
  * [Cluster_manager.list_clusters](#cluster_manager.list_clusters)
  * [Cluster_manager.list_locations](#cluster_manager.list_locations)
  * [Cluster_manager.list_node_pools](#cluster_manager.list_node_pools)
  * [Cluster_manager.list_operations](#cluster_manager.list_operations)
  * [Cluster_manager.list_usable_subnetworks](#cluster_manager.list_usable_subnetworks)
  * [Cluster_manager.rollback_node_pool_upgrade](#cluster_manager.rollback_node_pool_upgrade)
  * [Cluster_manager.set_addons_config](#cluster_manager.set_addons_config)
  * [Cluster_manager.set_labels](#cluster_manager.set_labels)
  * [Cluster_manager.set_legacy_abac](#cluster_manager.set_legacy_abac)
  * [Cluster_manager.set_locations](#cluster_manager.set_locations)
  * [Cluster_manager.set_logging_service](#cluster_manager.set_logging_service)
  * [Cluster_manager.set_maintenance_policy](#cluster_manager.set_maintenance_policy)
  * [Cluster_manager.set_master_auth](#cluster_manager.set_master_auth)
  * [Cluster_manager.set_monitoring_service](#cluster_manager.set_monitoring_service)
  * [Cluster_manager.set_network_policy](#cluster_manager.set_network_policy)
  * [Cluster_manager.set_node_pool_autoscaling](#cluster_manager.set_node_pool_autoscaling)
  * [Cluster_manager.set_node_pool_management](#cluster_manager.set_node_pool_management)
  * [Cluster_manager.set_node_pool_size](#cluster_manager.set_node_pool_size)
  * [Cluster_manager.start_i_p_rotation](#cluster_manager.start_i_p_rotation)
  * [Cluster_manager.update_cluster](#cluster_manager.update_cluster)
  * [Cluster_manager.update_master](#cluster_manager.update_master)
  * [Cluster_manager.update_node_pool](#cluster_manager.update_node_pool)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cluster_manager.cancel_operation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.cancel_operation.js`


-----




### Cluster_manager.check_autopilot_compatibility

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.check_autopilot_compatibility.js`


-----




### Cluster_manager.complete_i_p_rotation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.complete_i_p_rotation.js`


-----




### Cluster_manager.complete_node_pool_upgrade

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.complete_node_pool_upgrade.js`


-----




### Cluster_manager.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.create_cluster.js`


-----




### Cluster_manager.create_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.create_node_pool.js`


-----




### Cluster_manager.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.delete_cluster.js`


-----




### Cluster_manager.delete_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.delete_node_pool.js`


-----




### Cluster_manager.fetch_cluster_upgrade_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.fetch_cluster_upgrade_info.js`


-----




### Cluster_manager.fetch_node_pool_upgrade_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.fetch_node_pool_upgrade_info.js`


-----




### Cluster_manager.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.get_cluster.js`


-----




### Cluster_manager.get_j_s_o_n_web_keys

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.get_j_s_o_n_web_keys.js`


-----




### Cluster_manager.get_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.get_node_pool.js`


-----




### Cluster_manager.get_operation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_operation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_operation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.get_operation.js`


-----




### Cluster_manager.get_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.get_server_config.js`


-----




### Cluster_manager.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.list_clusters.js`


-----




### Cluster_manager.list_node_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.list_node_pools.js`


-----




### Cluster_manager.list_operations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_operations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_operations.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.list_operations.js`


-----




### Cluster_manager.list_usable_subnetworks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.list_usable_subnetworks.js`


-----




### Cluster_manager.rollback_node_pool_upgrade

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.rollback_node_pool_upgrade.js`


-----




### Cluster_manager.set_addons_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_addons_config.js`


-----




### Cluster_manager.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_labels.js`


-----




### Cluster_manager.set_legacy_abac

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_legacy_abac.js`


-----




### Cluster_manager.set_locations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_locations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_locations.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_locations.js`


-----




### Cluster_manager.set_logging_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_logging_service.js`


-----




### Cluster_manager.set_maintenance_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_maintenance_policy.js`


-----




### Cluster_manager.set_master_auth

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_master_auth.js`


-----




### Cluster_manager.set_monitoring_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_monitoring_service.js`


-----




### Cluster_manager.set_network_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_network_policy.js`


-----




### Cluster_manager.set_node_pool_autoscaling

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_autoscaling.js`


-----




### Cluster_manager.set_node_pool_management

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_management.js`


-----




### Cluster_manager.set_node_pool_size

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.set_node_pool_size.js`


-----




### Cluster_manager.start_i_p_rotation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.start_i_p_rotation.js`


-----




### Cluster_manager.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.update_cluster.js`


-----




### Cluster_manager.update_master

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_master.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_master.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.update_master.js`


-----




### Cluster_manager.update_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1/cluster_manager.update_node_pool.js`


-----




### Cluster_manager.cancel_operation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.cancel_operation.js`


-----




### Cluster_manager.check_autopilot_compatibility

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.check_autopilot_compatibility.js`


-----




### Cluster_manager.complete_i_p_rotation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.complete_i_p_rotation.js`


-----




### Cluster_manager.complete_node_pool_upgrade

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.complete_node_pool_upgrade.js`


-----




### Cluster_manager.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.create_cluster.js`


-----




### Cluster_manager.create_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.create_node_pool.js`


-----




### Cluster_manager.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.delete_cluster.js`


-----




### Cluster_manager.delete_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.delete_node_pool.js`


-----




### Cluster_manager.fetch_cluster_upgrade_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_cluster_upgrade_info.js`


-----




### Cluster_manager.fetch_node_pool_upgrade_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.fetch_node_pool_upgrade_info.js`


-----




### Cluster_manager.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.get_cluster.js`


-----




### Cluster_manager.get_j_s_o_n_web_keys

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.get_j_s_o_n_web_keys.js`


-----




### Cluster_manager.get_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.get_node_pool.js`


-----




### Cluster_manager.get_operation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.get_operation.js`


-----




### Cluster_manager.get_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.get_server_config.js`


-----




### Cluster_manager.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.list_clusters.js`


-----




### Cluster_manager.list_locations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.list_locations.js`


-----




### Cluster_manager.list_node_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.list_node_pools.js`


-----




### Cluster_manager.list_operations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.list_operations.js`


-----




### Cluster_manager.list_usable_subnetworks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.list_usable_subnetworks.js`


-----




### Cluster_manager.rollback_node_pool_upgrade

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.rollback_node_pool_upgrade.js`


-----




### Cluster_manager.set_addons_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_addons_config.js`


-----




### Cluster_manager.set_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_labels.js`


-----




### Cluster_manager.set_legacy_abac

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_legacy_abac.js`


-----




### Cluster_manager.set_locations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_locations.js`


-----




### Cluster_manager.set_logging_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_logging_service.js`


-----




### Cluster_manager.set_maintenance_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_maintenance_policy.js`


-----




### Cluster_manager.set_master_auth

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_master_auth.js`


-----




### Cluster_manager.set_monitoring_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_monitoring_service.js`


-----




### Cluster_manager.set_network_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_network_policy.js`


-----




### Cluster_manager.set_node_pool_autoscaling

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_autoscaling.js`


-----




### Cluster_manager.set_node_pool_management

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_management.js`


-----




### Cluster_manager.set_node_pool_size

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.set_node_pool_size.js`


-----




### Cluster_manager.start_i_p_rotation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.start_i_p_rotation.js`


-----




### Cluster_manager.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.update_cluster.js`


-----




### Cluster_manager.update_master

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.update_master.js`


-----




### Cluster_manager.update_node_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/generated/v1beta1/cluster_manager.update_node_pool.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-container/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-container/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-container/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/kubernetes-engine
