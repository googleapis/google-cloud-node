[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Game Servers: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Game_server_clusters_service.create_game_server_cluster](#game_server_clusters_service.create_game_server_cluster)
  * [Game_server_clusters_service.delete_game_server_cluster](#game_server_clusters_service.delete_game_server_cluster)
  * [Game_server_clusters_service.get_game_server_cluster](#game_server_clusters_service.get_game_server_cluster)
  * [Game_server_clusters_service.list_game_server_clusters](#game_server_clusters_service.list_game_server_clusters)
  * [Game_server_clusters_service.preview_create_game_server_cluster](#game_server_clusters_service.preview_create_game_server_cluster)
  * [Game_server_clusters_service.preview_delete_game_server_cluster](#game_server_clusters_service.preview_delete_game_server_cluster)
  * [Game_server_clusters_service.preview_update_game_server_cluster](#game_server_clusters_service.preview_update_game_server_cluster)
  * [Game_server_clusters_service.update_game_server_cluster](#game_server_clusters_service.update_game_server_cluster)
  * [Game_server_configs_service.create_game_server_config](#game_server_configs_service.create_game_server_config)
  * [Game_server_configs_service.delete_game_server_config](#game_server_configs_service.delete_game_server_config)
  * [Game_server_configs_service.get_game_server_config](#game_server_configs_service.get_game_server_config)
  * [Game_server_configs_service.list_game_server_configs](#game_server_configs_service.list_game_server_configs)
  * [Game_server_deployments_service.create_game_server_deployment](#game_server_deployments_service.create_game_server_deployment)
  * [Game_server_deployments_service.delete_game_server_deployment](#game_server_deployments_service.delete_game_server_deployment)
  * [Game_server_deployments_service.fetch_deployment_state](#game_server_deployments_service.fetch_deployment_state)
  * [Game_server_deployments_service.get_game_server_deployment](#game_server_deployments_service.get_game_server_deployment)
  * [Game_server_deployments_service.get_game_server_deployment_rollout](#game_server_deployments_service.get_game_server_deployment_rollout)
  * [Game_server_deployments_service.list_game_server_deployments](#game_server_deployments_service.list_game_server_deployments)
  * [Game_server_deployments_service.preview_game_server_deployment_rollout](#game_server_deployments_service.preview_game_server_deployment_rollout)
  * [Game_server_deployments_service.update_game_server_deployment](#game_server_deployments_service.update_game_server_deployment)
  * [Game_server_deployments_service.update_game_server_deployment_rollout](#game_server_deployments_service.update_game_server_deployment_rollout)
  * [Realms_service.create_realm](#realms_service.create_realm)
  * [Realms_service.delete_realm](#realms_service.delete_realm)
  * [Realms_service.get_realm](#realms_service.get_realm)
  * [Realms_service.list_realms](#realms_service.list_realms)
  * [Realms_service.preview_realm_update](#realms_service.preview_realm_update)
  * [Realms_service.update_realm](#realms_service.update_realm)
  * [Game_server_clusters_service.create_game_server_cluster](#game_server_clusters_service.create_game_server_cluster)
  * [Game_server_clusters_service.delete_game_server_cluster](#game_server_clusters_service.delete_game_server_cluster)
  * [Game_server_clusters_service.get_game_server_cluster](#game_server_clusters_service.get_game_server_cluster)
  * [Game_server_clusters_service.list_game_server_clusters](#game_server_clusters_service.list_game_server_clusters)
  * [Game_server_clusters_service.preview_create_game_server_cluster](#game_server_clusters_service.preview_create_game_server_cluster)
  * [Game_server_clusters_service.preview_delete_game_server_cluster](#game_server_clusters_service.preview_delete_game_server_cluster)
  * [Game_server_clusters_service.preview_update_game_server_cluster](#game_server_clusters_service.preview_update_game_server_cluster)
  * [Game_server_clusters_service.update_game_server_cluster](#game_server_clusters_service.update_game_server_cluster)
  * [Game_server_configs_service.create_game_server_config](#game_server_configs_service.create_game_server_config)
  * [Game_server_configs_service.delete_game_server_config](#game_server_configs_service.delete_game_server_config)
  * [Game_server_configs_service.get_game_server_config](#game_server_configs_service.get_game_server_config)
  * [Game_server_configs_service.list_game_server_configs](#game_server_configs_service.list_game_server_configs)
  * [Game_server_deployments_service.create_game_server_deployment](#game_server_deployments_service.create_game_server_deployment)
  * [Game_server_deployments_service.delete_game_server_deployment](#game_server_deployments_service.delete_game_server_deployment)
  * [Game_server_deployments_service.fetch_deployment_state](#game_server_deployments_service.fetch_deployment_state)
  * [Game_server_deployments_service.get_game_server_deployment](#game_server_deployments_service.get_game_server_deployment)
  * [Game_server_deployments_service.get_game_server_deployment_rollout](#game_server_deployments_service.get_game_server_deployment_rollout)
  * [Game_server_deployments_service.list_game_server_deployments](#game_server_deployments_service.list_game_server_deployments)
  * [Game_server_deployments_service.preview_game_server_deployment_rollout](#game_server_deployments_service.preview_game_server_deployment_rollout)
  * [Game_server_deployments_service.update_game_server_deployment](#game_server_deployments_service.update_game_server_deployment)
  * [Game_server_deployments_service.update_game_server_deployment_rollout](#game_server_deployments_service.update_game_server_deployment_rollout)
  * [Realms_service.create_realm](#realms_service.create_realm)
  * [Realms_service.delete_realm](#realms_service.delete_realm)
  * [Realms_service.get_realm](#realms_service.get_realm)
  * [Realms_service.list_realms](#realms_service.list_realms)
  * [Realms_service.preview_realm_update](#realms_service.preview_realm_update)
  * [Realms_service.update_realm](#realms_service.update_realm)
  * [Create Game Server Realm](#create-game-server-realm)
  * [Quickstart](#quickstart)
  * [Quickstart.test](#quickstart.test)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Game_server_clusters_service.create_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.create_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.create_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.create_game_server_cluster.js`


-----




### Game_server_clusters_service.delete_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.delete_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.delete_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.delete_game_server_cluster.js`


-----




### Game_server_clusters_service.get_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.get_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.get_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.get_game_server_cluster.js`


-----




### Game_server_clusters_service.list_game_server_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.list_game_server_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.list_game_server_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.list_game_server_clusters.js`


-----




### Game_server_clusters_service.preview_create_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_create_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_create_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_create_game_server_cluster.js`


-----




### Game_server_clusters_service.preview_delete_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_delete_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_delete_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_delete_game_server_cluster.js`


-----




### Game_server_clusters_service.preview_update_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_update_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_update_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.preview_update_game_server_cluster.js`


-----




### Game_server_clusters_service.update_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.update_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.update_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_clusters_service.update_game_server_cluster.js`


-----




### Game_server_configs_service.create_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.create_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.create_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.create_game_server_config.js`


-----




### Game_server_configs_service.delete_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.delete_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.delete_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.delete_game_server_config.js`


-----




### Game_server_configs_service.get_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.get_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.get_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.get_game_server_config.js`


-----




### Game_server_configs_service.list_game_server_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.list_game_server_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.list_game_server_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_configs_service.list_game_server_configs.js`


-----




### Game_server_deployments_service.create_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.create_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.create_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.create_game_server_deployment.js`


-----




### Game_server_deployments_service.delete_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.delete_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.delete_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.delete_game_server_deployment.js`


-----




### Game_server_deployments_service.fetch_deployment_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.fetch_deployment_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.fetch_deployment_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.fetch_deployment_state.js`


-----




### Game_server_deployments_service.get_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment.js`


-----




### Game_server_deployments_service.get_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.get_game_server_deployment_rollout.js`


-----




### Game_server_deployments_service.list_game_server_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.list_game_server_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.list_game_server_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.list_game_server_deployments.js`


-----




### Game_server_deployments_service.preview_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.preview_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.preview_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.preview_game_server_deployment_rollout.js`


-----




### Game_server_deployments_service.update_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment.js`


-----




### Game_server_deployments_service.update_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/game_server_deployments_service.update_game_server_deployment_rollout.js`


-----




### Realms_service.create_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.create_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.create_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.create_realm.js`


-----




### Realms_service.delete_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.delete_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.delete_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.delete_realm.js`


-----




### Realms_service.get_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.get_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.get_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.get_realm.js`


-----




### Realms_service.list_realms

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.list_realms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.list_realms.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.list_realms.js`


-----




### Realms_service.preview_realm_update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.preview_realm_update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.preview_realm_update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.preview_realm_update.js`


-----




### Realms_service.update_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1/realms_service.update_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1/realms_service.update_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1/realms_service.update_realm.js`


-----




### Game_server_clusters_service.create_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.create_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.create_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.create_game_server_cluster.js`


-----




### Game_server_clusters_service.delete_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.delete_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.delete_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.delete_game_server_cluster.js`


-----




### Game_server_clusters_service.get_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.get_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.get_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.get_game_server_cluster.js`


-----




### Game_server_clusters_service.list_game_server_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.list_game_server_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.list_game_server_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.list_game_server_clusters.js`


-----




### Game_server_clusters_service.preview_create_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_create_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_create_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_create_game_server_cluster.js`


-----




### Game_server_clusters_service.preview_delete_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_delete_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_delete_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_delete_game_server_cluster.js`


-----




### Game_server_clusters_service.preview_update_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_update_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_update_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.preview_update_game_server_cluster.js`


-----




### Game_server_clusters_service.update_game_server_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.update_game_server_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.update_game_server_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_clusters_service.update_game_server_cluster.js`


-----




### Game_server_configs_service.create_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.create_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.create_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.create_game_server_config.js`


-----




### Game_server_configs_service.delete_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.delete_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.delete_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.delete_game_server_config.js`


-----




### Game_server_configs_service.get_game_server_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.get_game_server_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.get_game_server_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.get_game_server_config.js`


-----




### Game_server_configs_service.list_game_server_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.list_game_server_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.list_game_server_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_configs_service.list_game_server_configs.js`


-----




### Game_server_deployments_service.create_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.create_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.create_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.create_game_server_deployment.js`


-----




### Game_server_deployments_service.delete_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.delete_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.delete_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.delete_game_server_deployment.js`


-----




### Game_server_deployments_service.fetch_deployment_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.fetch_deployment_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.fetch_deployment_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.fetch_deployment_state.js`


-----




### Game_server_deployments_service.get_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment.js`


-----




### Game_server_deployments_service.get_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.get_game_server_deployment_rollout.js`


-----




### Game_server_deployments_service.list_game_server_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.list_game_server_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.list_game_server_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.list_game_server_deployments.js`


-----




### Game_server_deployments_service.preview_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.preview_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.preview_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.preview_game_server_deployment_rollout.js`


-----




### Game_server_deployments_service.update_game_server_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment.js`


-----




### Game_server_deployments_service.update_game_server_deployment_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/game_server_deployments_service.update_game_server_deployment_rollout.js`


-----




### Realms_service.create_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.create_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.create_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.create_realm.js`


-----




### Realms_service.delete_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.delete_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.delete_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.delete_realm.js`


-----




### Realms_service.get_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.get_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.get_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.get_realm.js`


-----




### Realms_service.list_realms

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.list_realms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.list_realms.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.list_realms.js`


-----




### Realms_service.preview_realm_update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.preview_realm_update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.preview_realm_update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.preview_realm_update.js`


-----




### Realms_service.update_realm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/generated/v1beta/realms_service.update_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/generated/v1beta/realms_service.update_realm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/generated/v1beta/realms_service.update_realm.js`


-----




### Create Game Server Realm

Creates a new Realm within Cloud Game Servers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js <project_id> <location> <realmId>`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/test/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/test/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/test/quickstart.js`


-----




### Quickstart.test

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gaming/samples/test/quickstart.test.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gaming/samples/test/quickstart.test.js,samples/README.md)

__Usage:__


`node packages/google-cloud-gaming/samples/test/quickstart.test.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/game-servers/
