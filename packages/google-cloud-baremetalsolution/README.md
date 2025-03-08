[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Bare Metal Solution API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-baremetalsolution)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bare-metal-solution.svg)](https://www.npmjs.org/package/@google-cloud/bare-metal-solution)




baremetalsolution client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-baremetalsolution/CHANGELOG.md).

* [Bare Metal Solution API Node.js Client API Reference][client-docs]
* [Bare Metal Solution API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-baremetalsolution](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-baremetalsolution)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Bare Metal Solution API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bare-metal-solution
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-baremetalsolution/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Bare_metal_solution.create_nfs_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_nfs_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_nfs_share.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.create_provisioning_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_provisioning_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_provisioning_config.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.create_s_s_h_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_s_s_h_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_s_s_h_key.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.create_volume_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_volume_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.create_volume_snapshot.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.delete_nfs_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_nfs_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_nfs_share.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.delete_s_s_h_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_s_s_h_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_s_s_h_key.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.delete_volume_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_volume_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.delete_volume_snapshot.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.detach_lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.detach_lun.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.detach_lun.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.disable_interactive_serial_console | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.disable_interactive_serial_console.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.disable_interactive_serial_console.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.enable_interactive_serial_console | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.enable_interactive_serial_console.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.enable_interactive_serial_console.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.evict_lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_lun.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_lun.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.evict_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.evict_volume.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_lun | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_lun.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_lun.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_network.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_nfs_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_nfs_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_nfs_share.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_provisioning_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_provisioning_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_provisioning_config.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.get_volume_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.get_volume_snapshot.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_instances.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_luns | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_luns.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_luns.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_network_usage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_network_usage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_network_usage.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_networks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_networks.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_nfs_shares | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_nfs_shares.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_nfs_shares.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_o_s_images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_o_s_images.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_o_s_images.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_provisioning_quotas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_provisioning_quotas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_provisioning_quotas.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_s_s_h_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_s_s_h_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_s_s_h_keys.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_volume_snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volume_snapshots.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volume_snapshots.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.list_volumes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volumes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.list_volumes.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.rename_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.rename_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_network.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.rename_nfs_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_nfs_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_nfs_share.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.rename_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.rename_volume.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.reset_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.reset_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.reset_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.resize_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.resize_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.resize_volume.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.restore_volume_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.restore_volume_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.restore_volume_snapshot.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.start_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.start_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.start_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.stop_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.stop_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.stop_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.submit_provisioning_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.submit_provisioning_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.submit_provisioning_config.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_instance.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.update_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_network.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.update_nfs_share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_nfs_share.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_nfs_share.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.update_provisioning_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_provisioning_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_provisioning_config.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Bare_metal_solution.update_volume | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_volume.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/generated/v2/bare_metal_solution.update_volume.js,packages/google-cloud-baremetalsolution/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-baremetalsolution/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-baremetalsolution/samples/quickstart.js,packages/google-cloud-baremetalsolution/samples/README.md) |



The [Bare Metal Solution API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bare-metal-solution@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bare-metal-solution/latest
[product-docs]: https://cloud.google.com/bare-metal
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=baremetalsolution.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
