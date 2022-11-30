[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Security Command Center: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Security_center.bulk_mute_findings](#security_center.bulk_mute_findings)
  * [Security_center.create_big_query_export](#security_center.create_big_query_export)
  * [Security_center.create_finding](#security_center.create_finding)
  * [Security_center.create_mute_config](#security_center.create_mute_config)
  * [Security_center.create_notification_config](#security_center.create_notification_config)
  * [Security_center.create_source](#security_center.create_source)
  * [Security_center.delete_big_query_export](#security_center.delete_big_query_export)
  * [Security_center.delete_mute_config](#security_center.delete_mute_config)
  * [Security_center.delete_notification_config](#security_center.delete_notification_config)
  * [Security_center.get_big_query_export](#security_center.get_big_query_export)
  * [Security_center.get_iam_policy](#security_center.get_iam_policy)
  * [Security_center.get_mute_config](#security_center.get_mute_config)
  * [Security_center.get_notification_config](#security_center.get_notification_config)
  * [Security_center.get_organization_settings](#security_center.get_organization_settings)
  * [Security_center.get_source](#security_center.get_source)
  * [Security_center.group_assets](#security_center.group_assets)
  * [Security_center.group_findings](#security_center.group_findings)
  * [Security_center.list_assets](#security_center.list_assets)
  * [Security_center.list_big_query_exports](#security_center.list_big_query_exports)
  * [Security_center.list_findings](#security_center.list_findings)
  * [Security_center.list_mute_configs](#security_center.list_mute_configs)
  * [Security_center.list_notification_configs](#security_center.list_notification_configs)
  * [Security_center.list_sources](#security_center.list_sources)
  * [Security_center.run_asset_discovery](#security_center.run_asset_discovery)
  * [Security_center.set_finding_state](#security_center.set_finding_state)
  * [Security_center.set_iam_policy](#security_center.set_iam_policy)
  * [Security_center.set_mute](#security_center.set_mute)
  * [Security_center.test_iam_permissions](#security_center.test_iam_permissions)
  * [Security_center.update_big_query_export](#security_center.update_big_query_export)
  * [Security_center.update_external_system](#security_center.update_external_system)
  * [Security_center.update_finding](#security_center.update_finding)
  * [Security_center.update_mute_config](#security_center.update_mute_config)
  * [Security_center.update_notification_config](#security_center.update_notification_config)
  * [Security_center.update_organization_settings](#security_center.update_organization_settings)
  * [Security_center.update_security_marks](#security_center.update_security_marks)
  * [Security_center.update_source](#security_center.update_source)
  * [Security_center.create_finding](#security_center.create_finding)
  * [Security_center.create_source](#security_center.create_source)
  * [Security_center.get_iam_policy](#security_center.get_iam_policy)
  * [Security_center.get_organization_settings](#security_center.get_organization_settings)
  * [Security_center.get_source](#security_center.get_source)
  * [Security_center.group_assets](#security_center.group_assets)
  * [Security_center.group_findings](#security_center.group_findings)
  * [Security_center.list_assets](#security_center.list_assets)
  * [Security_center.list_findings](#security_center.list_findings)
  * [Security_center.list_sources](#security_center.list_sources)
  * [Security_center.run_asset_discovery](#security_center.run_asset_discovery)
  * [Security_center.set_finding_state](#security_center.set_finding_state)
  * [Security_center.set_iam_policy](#security_center.set_iam_policy)
  * [Security_center.test_iam_permissions](#security_center.test_iam_permissions)
  * [Security_center.update_finding](#security_center.update_finding)
  * [Security_center.update_organization_settings](#security_center.update_organization_settings)
  * [Security_center.update_security_marks](#security_center.update_security_marks)
  * [Security_center.update_source](#security_center.update_source)
  * [Security_center.create_finding](#security_center.create_finding)
  * [Security_center.create_notification_config](#security_center.create_notification_config)
  * [Security_center.create_source](#security_center.create_source)
  * [Security_center.delete_notification_config](#security_center.delete_notification_config)
  * [Security_center.get_iam_policy](#security_center.get_iam_policy)
  * [Security_center.get_notification_config](#security_center.get_notification_config)
  * [Security_center.get_organization_settings](#security_center.get_organization_settings)
  * [Security_center.get_source](#security_center.get_source)
  * [Security_center.group_assets](#security_center.group_assets)
  * [Security_center.group_findings](#security_center.group_findings)
  * [Security_center.list_assets](#security_center.list_assets)
  * [Security_center.list_findings](#security_center.list_findings)
  * [Security_center.list_notification_configs](#security_center.list_notification_configs)
  * [Security_center.list_sources](#security_center.list_sources)
  * [Security_center.run_asset_discovery](#security_center.run_asset_discovery)
  * [Security_center.set_finding_state](#security_center.set_finding_state)
  * [Security_center.set_iam_policy](#security_center.set_iam_policy)
  * [Security_center.test_iam_permissions](#security_center.test_iam_permissions)
  * [Security_center.update_finding](#security_center.update_finding)
  * [Security_center.update_notification_config](#security_center.update_notification_config)
  * [Security_center.update_organization_settings](#security_center.update_organization_settings)
  * [Security_center.update_security_marks](#security_center.update_security_marks)
  * [Security_center.update_source](#security_center.update_source)
  * [Quickstart](#quickstart)
  * [Quickstart.test](#quickstart.test)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Security_center.bulk_mute_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js`


-----




### Security_center.create_big_query_export

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js`


-----




### Security_center.create_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js`


-----




### Security_center.create_mute_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js`


-----




### Security_center.create_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js`


-----




### Security_center.create_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js`


-----




### Security_center.delete_big_query_export

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js`


-----




### Security_center.delete_mute_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js`


-----




### Security_center.delete_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js`


-----




### Security_center.get_big_query_export

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js`


-----




### Security_center.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js`


-----




### Security_center.get_mute_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js`


-----




### Security_center.get_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js`


-----




### Security_center.get_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js`


-----




### Security_center.get_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js`


-----




### Security_center.group_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js`


-----




### Security_center.group_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js`


-----




### Security_center.list_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js`


-----




### Security_center.list_big_query_exports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js`


-----




### Security_center.list_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js`


-----




### Security_center.list_mute_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js`


-----




### Security_center.list_notification_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js`


-----




### Security_center.list_sources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js`


-----




### Security_center.run_asset_discovery

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js`


-----




### Security_center.set_finding_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js`


-----




### Security_center.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js`


-----




### Security_center.set_mute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js`


-----




### Security_center.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js`


-----




### Security_center.update_big_query_export

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js`


-----




### Security_center.update_external_system

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js`


-----




### Security_center.update_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js`


-----




### Security_center.update_mute_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js`


-----




### Security_center.update_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js`


-----




### Security_center.update_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js`


-----




### Security_center.update_security_marks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js`


-----




### Security_center.update_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js`


-----




### Security_center.create_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js`


-----




### Security_center.create_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js`


-----




### Security_center.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js`


-----




### Security_center.get_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js`


-----




### Security_center.get_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js`


-----




### Security_center.group_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js`


-----




### Security_center.group_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js`


-----




### Security_center.list_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js`


-----




### Security_center.list_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js`


-----




### Security_center.list_sources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js`


-----




### Security_center.run_asset_discovery

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js`


-----




### Security_center.set_finding_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js`


-----




### Security_center.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js`


-----




### Security_center.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js`


-----




### Security_center.update_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js`


-----




### Security_center.update_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js`


-----




### Security_center.update_security_marks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js`


-----




### Security_center.update_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js`


-----




### Security_center.create_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js`


-----




### Security_center.create_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js`


-----




### Security_center.create_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js`


-----




### Security_center.delete_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js`


-----




### Security_center.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js`


-----




### Security_center.get_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js`


-----




### Security_center.get_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js`


-----




### Security_center.get_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js`


-----




### Security_center.group_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js`


-----




### Security_center.group_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js`


-----




### Security_center.list_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js`


-----




### Security_center.list_findings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js`


-----




### Security_center.list_notification_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js`


-----




### Security_center.list_sources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js`


-----




### Security_center.run_asset_discovery

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js`


-----




### Security_center.set_finding_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js`


-----




### Security_center.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js`


-----




### Security_center.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js`


-----




### Security_center.update_finding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js`


-----




### Security_center.update_notification_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js`


-----




### Security_center.update_organization_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js`


-----




### Security_center.update_security_marks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js`


-----




### Security_center.update_source

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js [organization]`


-----




### Quickstart.test

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/test/quickstart.test.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/test/quickstart.test.js,samples/README.md)

__Usage:__


`node packages/google-cloud-securitycenter/samples/test/quickstart.test.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/security-command-center
