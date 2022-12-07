[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Security Command Center: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/security-center.svg)](https://www.npmjs.org/package/@google-cloud/security-center)




Cloud Security Command Center API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycenter/CHANGELOG.md).

* [Google Cloud Security Command Center Node.js Client API Reference][client-docs]
* [Google Cloud Security Command Center Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-securitycenter](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycenter)

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
1.  [Enable the Google Cloud Security Command Center API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/security-center
```


### Using the client library

```javascript
const sc = require('@google-cloud/security-center');

// Create a client
const client = new sc.SecurityCenterClient();

async function quickstart() {
  // TODO(developer): choose the organization to use
  // const organization = 'your-organization';
  const [source] = await client.createSource({
    parent: client.organizationPath(organization),
    source: {},
  });
  // The newly created source.
  console.log('Source created.');
  console.log(source);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Security_center.bulk_mute_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js,samples/README.md) |
| Security_center.create_big_query_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js,samples/README.md) |
| Security_center.create_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js,samples/README.md) |
| Security_center.create_mute_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js,samples/README.md) |
| Security_center.create_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js,samples/README.md) |
| Security_center.create_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js,samples/README.md) |
| Security_center.delete_big_query_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js,samples/README.md) |
| Security_center.delete_mute_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js,samples/README.md) |
| Security_center.delete_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js,samples/README.md) |
| Security_center.get_big_query_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js,samples/README.md) |
| Security_center.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js,samples/README.md) |
| Security_center.get_mute_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js,samples/README.md) |
| Security_center.get_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js,samples/README.md) |
| Security_center.get_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js,samples/README.md) |
| Security_center.get_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js,samples/README.md) |
| Security_center.group_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js,samples/README.md) |
| Security_center.group_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js,samples/README.md) |
| Security_center.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js,samples/README.md) |
| Security_center.list_big_query_exports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js,samples/README.md) |
| Security_center.list_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js,samples/README.md) |
| Security_center.list_mute_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js,samples/README.md) |
| Security_center.list_notification_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js,samples/README.md) |
| Security_center.list_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js,samples/README.md) |
| Security_center.run_asset_discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js,samples/README.md) |
| Security_center.set_finding_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js,samples/README.md) |
| Security_center.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js,samples/README.md) |
| Security_center.set_mute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js,samples/README.md) |
| Security_center.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js,samples/README.md) |
| Security_center.update_big_query_export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js,samples/README.md) |
| Security_center.update_external_system | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js,samples/README.md) |
| Security_center.update_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js,samples/README.md) |
| Security_center.update_mute_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js,samples/README.md) |
| Security_center.update_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js,samples/README.md) |
| Security_center.update_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js,samples/README.md) |
| Security_center.update_security_marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js,samples/README.md) |
| Security_center.update_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js,samples/README.md) |
| Security_center.create_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js,samples/README.md) |
| Security_center.create_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js,samples/README.md) |
| Security_center.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js,samples/README.md) |
| Security_center.get_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js,samples/README.md) |
| Security_center.get_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js,samples/README.md) |
| Security_center.group_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js,samples/README.md) |
| Security_center.group_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js,samples/README.md) |
| Security_center.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js,samples/README.md) |
| Security_center.list_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js,samples/README.md) |
| Security_center.list_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js,samples/README.md) |
| Security_center.run_asset_discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js,samples/README.md) |
| Security_center.set_finding_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js,samples/README.md) |
| Security_center.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js,samples/README.md) |
| Security_center.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js,samples/README.md) |
| Security_center.update_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js,samples/README.md) |
| Security_center.update_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js,samples/README.md) |
| Security_center.update_security_marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js,samples/README.md) |
| Security_center.update_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js,samples/README.md) |
| Security_center.create_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js,samples/README.md) |
| Security_center.create_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js,samples/README.md) |
| Security_center.create_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js,samples/README.md) |
| Security_center.delete_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js,samples/README.md) |
| Security_center.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js,samples/README.md) |
| Security_center.get_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js,samples/README.md) |
| Security_center.get_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js,samples/README.md) |
| Security_center.get_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js,samples/README.md) |
| Security_center.group_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js,samples/README.md) |
| Security_center.group_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js,samples/README.md) |
| Security_center.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js,samples/README.md) |
| Security_center.list_findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js,samples/README.md) |
| Security_center.list_notification_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js,samples/README.md) |
| Security_center.list_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js,samples/README.md) |
| Security_center.run_asset_discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js,samples/README.md) |
| Security_center.set_finding_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js,samples/README.md) |
| Security_center.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js,samples/README.md) |
| Security_center.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js,samples/README.md) |
| Security_center.update_finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js,samples/README.md) |
| Security_center.update_notification_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js,samples/README.md) |
| Security_center.update_organization_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js,samples/README.md) |
| Security_center.update_security_marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js,samples/README.md) |
| Security_center.update_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/quickstart.js,samples/README.md) |
| Quickstart.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/test/quickstart.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycenter/samples/test/quickstart.test.js,samples/README.md) |



The [Google Cloud Security Command Center Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google-cloud/security-center@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/security-center/latest
[product-docs]: https://cloud.google.com/security-command-center
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securitycenter.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
