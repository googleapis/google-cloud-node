[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Security Command Center API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/security-center.svg)](https://www.npmjs.org/package/@google-cloud/security-center)

Security Command Center API client for Node.js

> Node.js idiomatic client for [Cloud Security Command Center][product-docs].

[Cloud Security Command Center](https://cloud.google.com/security-command-center/docs/) helps
security teams gather data, identify threats, and act on them before they result in business
damage or loss. It offers deep insight into application and data risk so that you can quickly
mitigate threats to your cloud resources and evaluate overall health. With Cloud Security
Command Center, you can view and monitor an inventory of your cloud assets, scan storage
systems for sensitive data, detect common web vulnerabilities, and review access rights
to your critical resources, all from a single, centralized dashboard.

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Security Command Center API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/securitycenter/latest)
* [Security Command Center API Documentation](https://cloud.google.com/security-command-center/docs/reference/rest)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Security Command Center API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/security-center
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch create resource value configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.batch_create_resource_value_configs.js) |
| bulk mute findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.bulk_mute_findings.js) |
| create big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_big_query_export.js) |
| create event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_event_threat_detection_custom_module.js) |
| create finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_finding.js) |
| create mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_mute_config.js) |
| create notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_notification_config.js) |
| create security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_security_health_analytics_custom_module.js) |
| create source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.create_source.js) |
| delete big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_big_query_export.js) |
| delete event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_event_threat_detection_custom_module.js) |
| delete mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_mute_config.js) |
| delete notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_notification_config.js) |
| delete resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_resource_value_config.js) |
| delete security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.delete_security_health_analytics_custom_module.js) |
| get big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_big_query_export.js) |
| get effective event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_effective_event_threat_detection_custom_module.js) |
| get effective security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_effective_security_health_analytics_custom_module.js) |
| get event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_event_threat_detection_custom_module.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_iam_policy.js) |
| get mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_mute_config.js) |
| get notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_notification_config.js) |
| get organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_organization_settings.js) |
| get resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_resource_value_config.js) |
| get security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_security_health_analytics_custom_module.js) |
| get simulation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_simulation.js) |
| get source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_source.js) |
| get valued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.get_valued_resource.js) |
| group assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_assets.js) |
| group findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.group_findings.js) |
| list assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_assets.js) |
| list attack paths | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_attack_paths.js) |
| list big query exports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_big_query_exports.js) |
| list descendant event threat detection custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_descendant_event_threat_detection_custom_modules.js) |
| list descendant security health analytics custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_descendant_security_health_analytics_custom_modules.js) |
| list effective event threat detection custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_effective_event_threat_detection_custom_modules.js) |
| list effective security health analytics custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_effective_security_health_analytics_custom_modules.js) |
| list event threat detection custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_event_threat_detection_custom_modules.js) |
| list findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_findings.js) |
| list mute configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_mute_configs.js) |
| list notification configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_notification_configs.js) |
| list resource value configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_resource_value_configs.js) |
| list security health analytics custom modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_security_health_analytics_custom_modules.js) |
| list sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_sources.js) |
| list valued resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.list_valued_resources.js) |
| run asset discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.run_asset_discovery.js) |
| set finding state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_finding_state.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_iam_policy.js) |
| set mute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.set_mute.js) |
| simulate security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.simulate_security_health_analytics_custom_module.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.test_iam_permissions.js) |
| update big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_big_query_export.js) |
| update event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_event_threat_detection_custom_module.js) |
| update external system | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_external_system.js) |
| update finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_finding.js) |
| update mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_mute_config.js) |
| update notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_notification_config.js) |
| update organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_organization_settings.js) |
| update resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_resource_value_config.js) |
| update security health analytics custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_health_analytics_custom_module.js) |
| update security marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_security_marks.js) |
| update source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.update_source.js) |
| validate event threat detection custom module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/security_center.validate_event_threat_detection_custom_module.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1/snippet_metadata_google.cloud.securitycenter.v1.json) |
| create finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_finding.js) |
| create source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.create_source.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_iam_policy.js) |
| get organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_organization_settings.js) |
| get source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.get_source.js) |
| group assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_assets.js) |
| group findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.group_findings.js) |
| list assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_assets.js) |
| list findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_findings.js) |
| list sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.list_sources.js) |
| run asset discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.run_asset_discovery.js) |
| set finding state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_finding_state.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.test_iam_permissions.js) |
| update finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_finding.js) |
| update organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_organization_settings.js) |
| update security marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_security_marks.js) |
| update source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/security_center.update_source.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1beta1/snippet_metadata_google.cloud.securitycenter.v1beta1.json) |
| create finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_finding.js) |
| create notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_notification_config.js) |
| create source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.create_source.js) |
| delete notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.delete_notification_config.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_iam_policy.js) |
| get notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_notification_config.js) |
| get organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_organization_settings.js) |
| get source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.get_source.js) |
| group assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_assets.js) |
| group findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.group_findings.js) |
| list assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_assets.js) |
| list findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_findings.js) |
| list notification configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_notification_configs.js) |
| list sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.list_sources.js) |
| run asset discovery | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.run_asset_discovery.js) |
| set finding state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_finding_state.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.test_iam_permissions.js) |
| update finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_finding.js) |
| update notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_notification_config.js) |
| update organization settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_organization_settings.js) |
| update security marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_security_marks.js) |
| update source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/security_center.update_source.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v1p1beta1/snippet_metadata_google.cloud.securitycenter.v1p1beta1.json) |
| batch create resource value configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.batch_create_resource_value_configs.js) |
| bulk mute findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.bulk_mute_findings.js) |
| create big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.create_big_query_export.js) |
| create finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.create_finding.js) |
| create mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.create_mute_config.js) |
| create notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.create_notification_config.js) |
| create source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.create_source.js) |
| delete big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.delete_big_query_export.js) |
| delete mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.delete_mute_config.js) |
| delete notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.delete_notification_config.js) |
| delete resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.delete_resource_value_config.js) |
| get big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_big_query_export.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_iam_policy.js) |
| get mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_mute_config.js) |
| get notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_notification_config.js) |
| get resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_resource_value_config.js) |
| get simulation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_simulation.js) |
| get source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_source.js) |
| get valued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.get_valued_resource.js) |
| group findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.group_findings.js) |
| list attack paths | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_attack_paths.js) |
| list big query exports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_big_query_exports.js) |
| list findings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_findings.js) |
| list mute configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_mute_configs.js) |
| list notification configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_notification_configs.js) |
| list resource value configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_resource_value_configs.js) |
| list sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_sources.js) |
| list valued resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.list_valued_resources.js) |
| set finding state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.set_finding_state.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.set_iam_policy.js) |
| set mute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.set_mute.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.test_iam_permissions.js) |
| update big query export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_big_query_export.js) |
| update external system | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_external_system.js) |
| update finding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_finding.js) |
| update mute config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_mute_config.js) |
| update notification config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_notification_config.js) |
| update resource value config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_resource_value_config.js) |
| update security marks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_security_marks.js) |
| update source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/security_center.update_source.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples/generated/v2/snippet_metadata_google.cloud.securitycenter.v2.json) |


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
For example, `npm install @google-cloud/security-center@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securitycenter.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycenter
