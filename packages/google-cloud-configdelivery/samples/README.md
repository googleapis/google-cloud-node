[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Config Delivery API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Config_delivery.abort_rollout](#config_delivery.abort_rollout)
  * [Config_delivery.create_fleet_package](#config_delivery.create_fleet_package)
  * [Config_delivery.create_release](#config_delivery.create_release)
  * [Config_delivery.create_resource_bundle](#config_delivery.create_resource_bundle)
  * [Config_delivery.create_variant](#config_delivery.create_variant)
  * [Config_delivery.delete_fleet_package](#config_delivery.delete_fleet_package)
  * [Config_delivery.delete_release](#config_delivery.delete_release)
  * [Config_delivery.delete_resource_bundle](#config_delivery.delete_resource_bundle)
  * [Config_delivery.delete_variant](#config_delivery.delete_variant)
  * [Config_delivery.get_fleet_package](#config_delivery.get_fleet_package)
  * [Config_delivery.get_release](#config_delivery.get_release)
  * [Config_delivery.get_resource_bundle](#config_delivery.get_resource_bundle)
  * [Config_delivery.get_rollout](#config_delivery.get_rollout)
  * [Config_delivery.get_variant](#config_delivery.get_variant)
  * [Config_delivery.list_fleet_packages](#config_delivery.list_fleet_packages)
  * [Config_delivery.list_releases](#config_delivery.list_releases)
  * [Config_delivery.list_resource_bundles](#config_delivery.list_resource_bundles)
  * [Config_delivery.list_rollouts](#config_delivery.list_rollouts)
  * [Config_delivery.list_variants](#config_delivery.list_variants)
  * [Config_delivery.resume_rollout](#config_delivery.resume_rollout)
  * [Config_delivery.suspend_rollout](#config_delivery.suspend_rollout)
  * [Config_delivery.update_fleet_package](#config_delivery.update_fleet_package)
  * [Config_delivery.update_release](#config_delivery.update_release)
  * [Config_delivery.update_resource_bundle](#config_delivery.update_resource_bundle)
  * [Config_delivery.update_variant](#config_delivery.update_variant)
  * [Config_delivery.abort_rollout](#config_delivery.abort_rollout)
  * [Config_delivery.create_fleet_package](#config_delivery.create_fleet_package)
  * [Config_delivery.create_release](#config_delivery.create_release)
  * [Config_delivery.create_resource_bundle](#config_delivery.create_resource_bundle)
  * [Config_delivery.create_variant](#config_delivery.create_variant)
  * [Config_delivery.delete_fleet_package](#config_delivery.delete_fleet_package)
  * [Config_delivery.delete_release](#config_delivery.delete_release)
  * [Config_delivery.delete_resource_bundle](#config_delivery.delete_resource_bundle)
  * [Config_delivery.delete_variant](#config_delivery.delete_variant)
  * [Config_delivery.get_fleet_package](#config_delivery.get_fleet_package)
  * [Config_delivery.get_release](#config_delivery.get_release)
  * [Config_delivery.get_resource_bundle](#config_delivery.get_resource_bundle)
  * [Config_delivery.get_rollout](#config_delivery.get_rollout)
  * [Config_delivery.get_variant](#config_delivery.get_variant)
  * [Config_delivery.list_fleet_packages](#config_delivery.list_fleet_packages)
  * [Config_delivery.list_releases](#config_delivery.list_releases)
  * [Config_delivery.list_resource_bundles](#config_delivery.list_resource_bundles)
  * [Config_delivery.list_rollouts](#config_delivery.list_rollouts)
  * [Config_delivery.list_variants](#config_delivery.list_variants)
  * [Config_delivery.resume_rollout](#config_delivery.resume_rollout)
  * [Config_delivery.suspend_rollout](#config_delivery.suspend_rollout)
  * [Config_delivery.update_fleet_package](#config_delivery.update_fleet_package)
  * [Config_delivery.update_release](#config_delivery.update_release)
  * [Config_delivery.update_resource_bundle](#config_delivery.update_resource_bundle)
  * [Config_delivery.update_variant](#config_delivery.update_variant)
  * [Config_delivery.abort_rollout](#config_delivery.abort_rollout)
  * [Config_delivery.create_fleet_package](#config_delivery.create_fleet_package)
  * [Config_delivery.create_release](#config_delivery.create_release)
  * [Config_delivery.create_resource_bundle](#config_delivery.create_resource_bundle)
  * [Config_delivery.create_variant](#config_delivery.create_variant)
  * [Config_delivery.delete_fleet_package](#config_delivery.delete_fleet_package)
  * [Config_delivery.delete_release](#config_delivery.delete_release)
  * [Config_delivery.delete_resource_bundle](#config_delivery.delete_resource_bundle)
  * [Config_delivery.delete_variant](#config_delivery.delete_variant)
  * [Config_delivery.get_fleet_package](#config_delivery.get_fleet_package)
  * [Config_delivery.get_release](#config_delivery.get_release)
  * [Config_delivery.get_resource_bundle](#config_delivery.get_resource_bundle)
  * [Config_delivery.get_rollout](#config_delivery.get_rollout)
  * [Config_delivery.get_variant](#config_delivery.get_variant)
  * [Config_delivery.list_fleet_packages](#config_delivery.list_fleet_packages)
  * [Config_delivery.list_releases](#config_delivery.list_releases)
  * [Config_delivery.list_resource_bundles](#config_delivery.list_resource_bundles)
  * [Config_delivery.list_rollouts](#config_delivery.list_rollouts)
  * [Config_delivery.list_variants](#config_delivery.list_variants)
  * [Config_delivery.resume_rollout](#config_delivery.resume_rollout)
  * [Config_delivery.suspend_rollout](#config_delivery.suspend_rollout)
  * [Config_delivery.update_fleet_package](#config_delivery.update_fleet_package)
  * [Config_delivery.update_release](#config_delivery.update_release)
  * [Config_delivery.update_resource_bundle](#config_delivery.update_resource_bundle)
  * [Config_delivery.update_variant](#config_delivery.update_variant)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Config_delivery.abort_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js`


-----




### Config_delivery.create_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js`


-----




### Config_delivery.create_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js`


-----




### Config_delivery.create_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js`


-----




### Config_delivery.create_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js`


-----




### Config_delivery.delete_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js`


-----




### Config_delivery.delete_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js`


-----




### Config_delivery.delete_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js`


-----




### Config_delivery.delete_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js`


-----




### Config_delivery.get_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js`


-----




### Config_delivery.get_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js`


-----




### Config_delivery.get_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js`


-----




### Config_delivery.get_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js`


-----




### Config_delivery.get_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js`


-----




### Config_delivery.list_fleet_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js`


-----




### Config_delivery.list_releases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js`


-----




### Config_delivery.list_resource_bundles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js`


-----




### Config_delivery.list_rollouts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js`


-----




### Config_delivery.list_variants

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js`


-----




### Config_delivery.resume_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js`


-----




### Config_delivery.suspend_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js`


-----




### Config_delivery.update_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js`


-----




### Config_delivery.update_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js`


-----




### Config_delivery.update_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js`


-----




### Config_delivery.update_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js`


-----




### Config_delivery.abort_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js`


-----




### Config_delivery.create_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js`


-----




### Config_delivery.create_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js`


-----




### Config_delivery.create_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js`


-----




### Config_delivery.create_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js`


-----




### Config_delivery.delete_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js`


-----




### Config_delivery.delete_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js`


-----




### Config_delivery.delete_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js`


-----




### Config_delivery.delete_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js`


-----




### Config_delivery.get_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js`


-----




### Config_delivery.get_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js`


-----




### Config_delivery.get_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js`


-----




### Config_delivery.get_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js`


-----




### Config_delivery.get_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js`


-----




### Config_delivery.list_fleet_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js`


-----




### Config_delivery.list_releases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js`


-----




### Config_delivery.list_resource_bundles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js`


-----




### Config_delivery.list_rollouts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js`


-----




### Config_delivery.list_variants

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js`


-----




### Config_delivery.resume_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js`


-----




### Config_delivery.suspend_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js`


-----




### Config_delivery.update_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js`


-----




### Config_delivery.update_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js`


-----




### Config_delivery.update_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js`


-----




### Config_delivery.update_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js`


-----




### Config_delivery.abort_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js`


-----




### Config_delivery.create_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js`


-----




### Config_delivery.create_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js`


-----




### Config_delivery.create_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js`


-----




### Config_delivery.create_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js`


-----




### Config_delivery.delete_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js`


-----




### Config_delivery.delete_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js`


-----




### Config_delivery.delete_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js`


-----




### Config_delivery.delete_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js`


-----




### Config_delivery.get_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js`


-----




### Config_delivery.get_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js`


-----




### Config_delivery.get_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js`


-----




### Config_delivery.get_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js`


-----




### Config_delivery.get_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js`


-----




### Config_delivery.list_fleet_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js`


-----




### Config_delivery.list_releases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js`


-----




### Config_delivery.list_resource_bundles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js`


-----




### Config_delivery.list_rollouts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js`


-----




### Config_delivery.list_variants

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js`


-----




### Config_delivery.resume_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js`


-----




### Config_delivery.suspend_rollout

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js`


-----




### Config_delivery.update_fleet_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js`


-----




### Config_delivery.update_release

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js`


-----




### Config_delivery.update_resource_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js`


-----




### Config_delivery.update_variant

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-configdelivery/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-configdelivery/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/concepts/fleet-packages
