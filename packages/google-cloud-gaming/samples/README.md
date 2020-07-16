[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Game Servers: Node.js Samples](https://github.com/googleapis/nodejs-game-servers)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Create_cluster](#create_cluster)
  * [Create_realm](#create_realm)
  * [Delete_cluster](#delete_cluster)
  * [Delete_realm](#delete_realm)
  * [Get_cluster](#get_cluster)
  * [Get_realm](#get_realm)
  * [List_clusters](#list_clusters)
  * [List_realms](#list_realms)
  * [Create Game Server Realm](#create-game-server-realm)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-game-servers#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Create_cluster

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/create_cluster.js,samples/README.md)

__Usage:__


`node samples/create_cluster.js <project_id> <location> <realmId> <clusterId> <gke_cluster_name>`


-----




### Create_realm

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/create_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/create_realm.js,samples/README.md)

__Usage:__


`node samples/create_realm.js <project_id> <location> <realmId>`


-----




### Create_deployment

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/create_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/create_deployment.js,samples/README.md)

__Usage:__


`node samples/create_deployment.js <project_id> <deploymentId>`


-----




### Delete_cluster

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/delete_cluster.js,samples/README.md)

__Usage:__


`node samples/delete_cluster.js <project_id> <location> <realmId> <clusterId>`


-----




### Delete_realm

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/delete_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/delete_realm.js,samples/README.md)

__Usage:__


`node samples/delete_realm.js <project_id> <location> <realmId>`


-----




### Delete_deployment

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/delete_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/delete_deployment.js,samples/README.md)

__Usage:__


`node samples/delete_deployment.js <project_id> <deploymentId>`


-----




### Get_cluster

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/get_cluster.js,samples/README.md)

__Usage:__


`node samples/get_cluster.js <project_id> <location> <realmId> <clusterId>`


-----




### Get_realm

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/get_realm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/get_realm.js,samples/README.md)

__Usage:__


`node samples/get_realm.js <project_id> <location> <realmId>`


-----




### Get_deployment

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/get_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/get_deployment.js,samples/README.md)

__Usage:__


`node samples/get_deployment.js <project_id> <deploymentId>`


-----




### List_clusters

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/list_clusters.js,samples/README.md)

__Usage:__


`node samples/list_clusters.js <project_id> <location> <realmId>`


-----




### List_realms

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/list_realms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/list_realms.js,samples/README.md)

__Usage:__


`node samples/list_realms.js <project_id> <location>`


-----




### List_deployments

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/list_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/list_deployments.js,samples/README.md)

__Usage:__


`node samples/list_deployments.js <project_id>`


-----




### Create Game Server Realm

Creates a new Realm within Cloud Game Servers

View the [source code](https://github.com/googleapis/nodejs-game-servers/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js <project_id> <location> <realmId>`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-game-servers&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/game-servers/
