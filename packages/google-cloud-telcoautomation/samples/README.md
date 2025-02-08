[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Telco Automation API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Telco_automation.apply_deployment](#telco_automation.apply_deployment)
  * [Telco_automation.apply_hydrated_deployment](#telco_automation.apply_hydrated_deployment)
  * [Telco_automation.approve_blueprint](#telco_automation.approve_blueprint)
  * [Telco_automation.compute_deployment_status](#telco_automation.compute_deployment_status)
  * [Telco_automation.create_blueprint](#telco_automation.create_blueprint)
  * [Telco_automation.create_deployment](#telco_automation.create_deployment)
  * [Telco_automation.create_edge_slm](#telco_automation.create_edge_slm)
  * [Telco_automation.create_orchestration_cluster](#telco_automation.create_orchestration_cluster)
  * [Telco_automation.delete_blueprint](#telco_automation.delete_blueprint)
  * [Telco_automation.delete_edge_slm](#telco_automation.delete_edge_slm)
  * [Telco_automation.delete_orchestration_cluster](#telco_automation.delete_orchestration_cluster)
  * [Telco_automation.discard_blueprint_changes](#telco_automation.discard_blueprint_changes)
  * [Telco_automation.discard_deployment_changes](#telco_automation.discard_deployment_changes)
  * [Telco_automation.get_blueprint](#telco_automation.get_blueprint)
  * [Telco_automation.get_deployment](#telco_automation.get_deployment)
  * [Telco_automation.get_edge_slm](#telco_automation.get_edge_slm)
  * [Telco_automation.get_hydrated_deployment](#telco_automation.get_hydrated_deployment)
  * [Telco_automation.get_orchestration_cluster](#telco_automation.get_orchestration_cluster)
  * [Telco_automation.get_public_blueprint](#telco_automation.get_public_blueprint)
  * [Telco_automation.list_blueprint_revisions](#telco_automation.list_blueprint_revisions)
  * [Telco_automation.list_blueprints](#telco_automation.list_blueprints)
  * [Telco_automation.list_deployment_revisions](#telco_automation.list_deployment_revisions)
  * [Telco_automation.list_deployments](#telco_automation.list_deployments)
  * [Telco_automation.list_edge_slms](#telco_automation.list_edge_slms)
  * [Telco_automation.list_hydrated_deployments](#telco_automation.list_hydrated_deployments)
  * [Telco_automation.list_orchestration_clusters](#telco_automation.list_orchestration_clusters)
  * [Telco_automation.list_public_blueprints](#telco_automation.list_public_blueprints)
  * [Telco_automation.propose_blueprint](#telco_automation.propose_blueprint)
  * [Telco_automation.reject_blueprint](#telco_automation.reject_blueprint)
  * [Telco_automation.remove_deployment](#telco_automation.remove_deployment)
  * [Telco_automation.rollback_deployment](#telco_automation.rollback_deployment)
  * [Telco_automation.search_blueprint_revisions](#telco_automation.search_blueprint_revisions)
  * [Telco_automation.search_deployment_revisions](#telco_automation.search_deployment_revisions)
  * [Telco_automation.update_blueprint](#telco_automation.update_blueprint)
  * [Telco_automation.update_deployment](#telco_automation.update_deployment)
  * [Telco_automation.update_hydrated_deployment](#telco_automation.update_hydrated_deployment)
  * [Telco_automation.apply_deployment](#telco_automation.apply_deployment)
  * [Telco_automation.apply_hydrated_deployment](#telco_automation.apply_hydrated_deployment)
  * [Telco_automation.approve_blueprint](#telco_automation.approve_blueprint)
  * [Telco_automation.compute_deployment_status](#telco_automation.compute_deployment_status)
  * [Telco_automation.create_blueprint](#telco_automation.create_blueprint)
  * [Telco_automation.create_deployment](#telco_automation.create_deployment)
  * [Telco_automation.create_edge_slm](#telco_automation.create_edge_slm)
  * [Telco_automation.create_orchestration_cluster](#telco_automation.create_orchestration_cluster)
  * [Telco_automation.delete_blueprint](#telco_automation.delete_blueprint)
  * [Telco_automation.delete_edge_slm](#telco_automation.delete_edge_slm)
  * [Telco_automation.delete_orchestration_cluster](#telco_automation.delete_orchestration_cluster)
  * [Telco_automation.discard_blueprint_changes](#telco_automation.discard_blueprint_changes)
  * [Telco_automation.discard_deployment_changes](#telco_automation.discard_deployment_changes)
  * [Telco_automation.get_blueprint](#telco_automation.get_blueprint)
  * [Telco_automation.get_deployment](#telco_automation.get_deployment)
  * [Telco_automation.get_edge_slm](#telco_automation.get_edge_slm)
  * [Telco_automation.get_hydrated_deployment](#telco_automation.get_hydrated_deployment)
  * [Telco_automation.get_orchestration_cluster](#telco_automation.get_orchestration_cluster)
  * [Telco_automation.get_public_blueprint](#telco_automation.get_public_blueprint)
  * [Telco_automation.list_blueprint_revisions](#telco_automation.list_blueprint_revisions)
  * [Telco_automation.list_blueprints](#telco_automation.list_blueprints)
  * [Telco_automation.list_deployment_revisions](#telco_automation.list_deployment_revisions)
  * [Telco_automation.list_deployments](#telco_automation.list_deployments)
  * [Telco_automation.list_edge_slms](#telco_automation.list_edge_slms)
  * [Telco_automation.list_hydrated_deployments](#telco_automation.list_hydrated_deployments)
  * [Telco_automation.list_orchestration_clusters](#telco_automation.list_orchestration_clusters)
  * [Telco_automation.list_public_blueprints](#telco_automation.list_public_blueprints)
  * [Telco_automation.propose_blueprint](#telco_automation.propose_blueprint)
  * [Telco_automation.reject_blueprint](#telco_automation.reject_blueprint)
  * [Telco_automation.remove_deployment](#telco_automation.remove_deployment)
  * [Telco_automation.rollback_deployment](#telco_automation.rollback_deployment)
  * [Telco_automation.search_blueprint_revisions](#telco_automation.search_blueprint_revisions)
  * [Telco_automation.search_deployment_revisions](#telco_automation.search_deployment_revisions)
  * [Telco_automation.update_blueprint](#telco_automation.update_blueprint)
  * [Telco_automation.update_deployment](#telco_automation.update_deployment)
  * [Telco_automation.update_hydrated_deployment](#telco_automation.update_hydrated_deployment)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Telco_automation.apply_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_deployment.js`


-----




### Telco_automation.apply_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.apply_hydrated_deployment.js`


-----




### Telco_automation.approve_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.approve_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.approve_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.approve_blueprint.js`


-----




### Telco_automation.compute_deployment_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.compute_deployment_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.compute_deployment_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.compute_deployment_status.js`


-----




### Telco_automation.create_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_blueprint.js`


-----




### Telco_automation.create_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_deployment.js`


-----




### Telco_automation.create_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_edge_slm.js`


-----




### Telco_automation.create_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.create_orchestration_cluster.js`


-----




### Telco_automation.delete_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_blueprint.js`


-----




### Telco_automation.delete_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_edge_slm.js`


-----




### Telco_automation.delete_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.delete_orchestration_cluster.js`


-----




### Telco_automation.discard_blueprint_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_blueprint_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_blueprint_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_blueprint_changes.js`


-----




### Telco_automation.discard_deployment_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_deployment_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_deployment_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.discard_deployment_changes.js`


-----




### Telco_automation.get_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_blueprint.js`


-----




### Telco_automation.get_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_deployment.js`


-----




### Telco_automation.get_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_edge_slm.js`


-----




### Telco_automation.get_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_hydrated_deployment.js`


-----




### Telco_automation.get_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_orchestration_cluster.js`


-----




### Telco_automation.get_public_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_public_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_public_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.get_public_blueprint.js`


-----




### Telco_automation.list_blueprint_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprint_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprint_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprint_revisions.js`


-----




### Telco_automation.list_blueprints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_blueprints.js`


-----




### Telco_automation.list_deployment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployment_revisions.js`


-----




### Telco_automation.list_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_deployments.js`


-----




### Telco_automation.list_edge_slms

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_edge_slms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_edge_slms.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_edge_slms.js`


-----




### Telco_automation.list_hydrated_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_hydrated_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_hydrated_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_hydrated_deployments.js`


-----




### Telco_automation.list_orchestration_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_orchestration_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_orchestration_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_orchestration_clusters.js`


-----




### Telco_automation.list_public_blueprints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_public_blueprints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_public_blueprints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.list_public_blueprints.js`


-----




### Telco_automation.propose_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.propose_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.propose_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.propose_blueprint.js`


-----




### Telco_automation.reject_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.reject_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.reject_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.reject_blueprint.js`


-----




### Telco_automation.remove_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.remove_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.remove_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.remove_deployment.js`


-----




### Telco_automation.rollback_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.rollback_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.rollback_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.rollback_deployment.js`


-----




### Telco_automation.search_blueprint_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_blueprint_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_blueprint_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_blueprint_revisions.js`


-----




### Telco_automation.search_deployment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_deployment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_deployment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.search_deployment_revisions.js`


-----




### Telco_automation.update_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_blueprint.js`


-----




### Telco_automation.update_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_deployment.js`


-----




### Telco_automation.update_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1/telco_automation.update_hydrated_deployment.js`


-----




### Telco_automation.apply_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_deployment.js`


-----




### Telco_automation.apply_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.apply_hydrated_deployment.js`


-----




### Telco_automation.approve_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.approve_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.approve_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.approve_blueprint.js`


-----




### Telco_automation.compute_deployment_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.compute_deployment_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.compute_deployment_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.compute_deployment_status.js`


-----




### Telco_automation.create_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_blueprint.js`


-----




### Telco_automation.create_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_deployment.js`


-----




### Telco_automation.create_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_edge_slm.js`


-----




### Telco_automation.create_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.create_orchestration_cluster.js`


-----




### Telco_automation.delete_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_blueprint.js`


-----




### Telco_automation.delete_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_edge_slm.js`


-----




### Telco_automation.delete_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.delete_orchestration_cluster.js`


-----




### Telco_automation.discard_blueprint_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_blueprint_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_blueprint_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_blueprint_changes.js`


-----




### Telco_automation.discard_deployment_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_deployment_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_deployment_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.discard_deployment_changes.js`


-----




### Telco_automation.get_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_blueprint.js`


-----




### Telco_automation.get_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_deployment.js`


-----




### Telco_automation.get_edge_slm

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_edge_slm.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_edge_slm.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_edge_slm.js`


-----




### Telco_automation.get_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_hydrated_deployment.js`


-----




### Telco_automation.get_orchestration_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_orchestration_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_orchestration_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_orchestration_cluster.js`


-----




### Telco_automation.get_public_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_public_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_public_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.get_public_blueprint.js`


-----




### Telco_automation.list_blueprint_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprint_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprint_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprint_revisions.js`


-----




### Telco_automation.list_blueprints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_blueprints.js`


-----




### Telco_automation.list_deployment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployment_revisions.js`


-----




### Telco_automation.list_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_deployments.js`


-----




### Telco_automation.list_edge_slms

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_edge_slms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_edge_slms.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_edge_slms.js`


-----




### Telco_automation.list_hydrated_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_hydrated_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_hydrated_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_hydrated_deployments.js`


-----




### Telco_automation.list_orchestration_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_orchestration_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_orchestration_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_orchestration_clusters.js`


-----




### Telco_automation.list_public_blueprints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_public_blueprints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_public_blueprints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.list_public_blueprints.js`


-----




### Telco_automation.propose_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.propose_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.propose_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.propose_blueprint.js`


-----




### Telco_automation.reject_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.reject_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.reject_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.reject_blueprint.js`


-----




### Telco_automation.remove_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.remove_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.remove_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.remove_deployment.js`


-----




### Telco_automation.rollback_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.rollback_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.rollback_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.rollback_deployment.js`


-----




### Telco_automation.search_blueprint_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_blueprint_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_blueprint_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_blueprint_revisions.js`


-----




### Telco_automation.search_deployment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_deployment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_deployment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.search_deployment_revisions.js`


-----




### Telco_automation.update_blueprint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_blueprint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_blueprint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_blueprint.js`


-----




### Telco_automation.update_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_deployment.js`


-----




### Telco_automation.update_hydrated_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_hydrated_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_hydrated_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/generated/v1alpha1/telco_automation.update_hydrated_deployment.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-telcoautomation/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-telcoautomation/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-telcoautomation/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/telecom-network-automation
