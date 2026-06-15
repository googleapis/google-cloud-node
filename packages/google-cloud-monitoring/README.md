[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Monitoring API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/monitoring.svg)](https://www.npmjs.org/package/@google-cloud/monitoring)

Cloud Monitoring API client for Node.js

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from
Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation,
and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Monitoring API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/monitoring/latest)


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
1.  [Enable the Cloud Monitoring API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/monitoring
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create alert policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/alert_policy_service.create_alert_policy.js) |
| delete alert policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/alert_policy_service.delete_alert_policy.js) |
| get alert policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/alert_policy_service.get_alert_policy.js) |
| list alert policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/alert_policy_service.list_alert_policies.js) |
| update alert policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/alert_policy_service.update_alert_policy.js) |
| create group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.create_group.js) |
| delete group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.delete_group.js) |
| get group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.get_group.js) |
| list group members | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.list_group_members.js) |
| list groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.list_groups.js) |
| update group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/group_service.update_group.js) |
| create metric descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.create_metric_descriptor.js) |
| create service time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.create_service_time_series.js) |
| create time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.create_time_series.js) |
| delete metric descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.delete_metric_descriptor.js) |
| get metric descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.get_metric_descriptor.js) |
| get monitored resource descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.get_monitored_resource_descriptor.js) |
| list metric descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.list_metric_descriptors.js) |
| list monitored resource descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.list_monitored_resource_descriptors.js) |
| list time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/metric_service.list_time_series.js) |
| create notification channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.create_notification_channel.js) |
| delete notification channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.delete_notification_channel.js) |
| get notification channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel.js) |
| get notification channel descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_descriptor.js) |
| get notification channel verification code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_verification_code.js) |
| list notification channel descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.list_notification_channel_descriptors.js) |
| list notification channels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.list_notification_channels.js) |
| send notification channel verification code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.send_notification_channel_verification_code.js) |
| update notification channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.update_notification_channel.js) |
| verify notification channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/notification_channel_service.verify_notification_channel.js) |
| query time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/query_service.query_time_series.js) |
| create service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.create_service.js) |
| create service level objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.create_service_level_objective.js) |
| delete service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.delete_service.js) |
| delete service level objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.delete_service_level_objective.js) |
| get service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.get_service.js) |
| get service level objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.get_service_level_objective.js) |
| list service level objectives | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.list_service_level_objectives.js) |
| list services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.list_services.js) |
| update service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.update_service.js) |
| update service level objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/service_monitoring_service.update_service_level_objective.js) |
| create snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/snooze_service.create_snooze.js) |
| get snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/snooze_service.get_snooze.js) |
| list snoozes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/snooze_service.list_snoozes.js) |
| update snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/snooze_service.update_snooze.js) |
| create uptime check config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.create_uptime_check_config.js) |
| delete uptime check config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.delete_uptime_check_config.js) |
| get uptime check config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.get_uptime_check_config.js) |
| list uptime check configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_configs.js) |
| list uptime check ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_ips.js) |
| update uptime check config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples/generated/v3/uptime_check_service.update_uptime_check_config.js) |


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
For example, `npm install @google-cloud/monitoring@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=monitoring.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-monitoring
