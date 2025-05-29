[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Monitoring: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-monitoring)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/monitoring.svg)](https://www.npmjs.org/package/@google-cloud/monitoring)




Stackdriver Monitoring API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-monitoring/CHANGELOG.md).

* [Stackdriver Monitoring Node.js Client API Reference][client-docs]
* [Stackdriver Monitoring Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-monitoring](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-monitoring)

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
1.  [Enable the Stackdriver Monitoring API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/monitoring
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const monitoring = require('@google-cloud/monitoring');

async function quickstart() {
  // Creates a client
  const client = new monitoring.MetricServiceClient();

  // TODO(developer): Uncomment and set the following variables
  // const projectId = "PROJECT_ID"

  // Prepares an individual data point
  const dataPoint = {
    interval: {
      endTime: {
        seconds: Date.now() / 1000,
      },
    },
    value: {
      // The amount of sales
      doubleValue: 123.45,
    },
  };

  // Prepares the time series request
  const request = {
    name: client.projectPath(projectId),
    timeSeries: [
      {
        // Ties the data point to a custom metric
        metric: {
          type: 'custom.googleapis.com/stores/daily_sales',
          labels: {
            store_id: 'Pittsburgh',
          },
        },
        resource: {
          type: 'global',
          labels: {
            project_id: projectId,
          },
        },
        points: [dataPoint],
      },
    ],
  };

  // Writes time series data
  const [result] = await client.createTimeSeries(request);
  console.log('Done writing time series data.', result);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-monitoring/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Alert_policy_service.create_alert_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.create_alert_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.create_alert_policy.js,packages/google-cloud-monitoring/samples/README.md) |
| Alert_policy_service.delete_alert_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.delete_alert_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.delete_alert_policy.js,packages/google-cloud-monitoring/samples/README.md) |
| Alert_policy_service.get_alert_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.get_alert_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.get_alert_policy.js,packages/google-cloud-monitoring/samples/README.md) |
| Alert_policy_service.list_alert_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.list_alert_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.list_alert_policies.js,packages/google-cloud-monitoring/samples/README.md) |
| Alert_policy_service.update_alert_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.update_alert_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/alert_policy_service.update_alert_policy.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.create_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.create_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.create_group.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.delete_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.delete_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.delete_group.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.get_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.get_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.get_group.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.list_group_members | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.list_group_members.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.list_group_members.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.list_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.list_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.list_groups.js,packages/google-cloud-monitoring/samples/README.md) |
| Group_service.update_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/group_service.update_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/group_service.update_group.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.create_metric_descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_metric_descriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_metric_descriptor.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.create_service_time_series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_service_time_series.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_service_time_series.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.create_time_series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_time_series.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.create_time_series.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.delete_metric_descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.delete_metric_descriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.delete_metric_descriptor.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.get_metric_descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.get_metric_descriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.get_metric_descriptor.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.get_monitored_resource_descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.get_monitored_resource_descriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.get_monitored_resource_descriptor.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.list_metric_descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_metric_descriptors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_metric_descriptors.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.list_monitored_resource_descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_monitored_resource_descriptors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_monitored_resource_descriptors.js,packages/google-cloud-monitoring/samples/README.md) |
| Metric_service.list_time_series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_time_series.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/metric_service.list_time_series.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.create_notification_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.create_notification_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.create_notification_channel.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.delete_notification_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.delete_notification_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.delete_notification_channel.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.get_notification_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.get_notification_channel_descriptor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_descriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_descriptor.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.get_notification_channel_verification_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_verification_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.get_notification_channel_verification_code.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.list_notification_channel_descriptors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.list_notification_channel_descriptors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.list_notification_channel_descriptors.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.list_notification_channels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.list_notification_channels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.list_notification_channels.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.send_notification_channel_verification_code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.send_notification_channel_verification_code.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.send_notification_channel_verification_code.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.update_notification_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.update_notification_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.update_notification_channel.js,packages/google-cloud-monitoring/samples/README.md) |
| Notification_channel_service.verify_notification_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.verify_notification_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/notification_channel_service.verify_notification_channel.js,packages/google-cloud-monitoring/samples/README.md) |
| Query_service.query_time_series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/query_service.query_time_series.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/query_service.query_time_series.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.create_service.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.create_service_level_objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.create_service_level_objective.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.create_service_level_objective.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.delete_service.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.delete_service_level_objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.delete_service_level_objective.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.delete_service_level_objective.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.get_service.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.get_service_level_objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.get_service_level_objective.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.get_service_level_objective.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.list_service_level_objectives | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.list_service_level_objectives.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.list_service_level_objectives.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.list_services.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.update_service.js,packages/google-cloud-monitoring/samples/README.md) |
| Service_monitoring_service.update_service_level_objective | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.update_service_level_objective.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/service_monitoring_service.update_service_level_objective.js,packages/google-cloud-monitoring/samples/README.md) |
| Snooze_service.create_snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/snooze_service.create_snooze.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/snooze_service.create_snooze.js,packages/google-cloud-monitoring/samples/README.md) |
| Snooze_service.get_snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/snooze_service.get_snooze.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/snooze_service.get_snooze.js,packages/google-cloud-monitoring/samples/README.md) |
| Snooze_service.list_snoozes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/snooze_service.list_snoozes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/snooze_service.list_snoozes.js,packages/google-cloud-monitoring/samples/README.md) |
| Snooze_service.update_snooze | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/snooze_service.update_snooze.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/snooze_service.update_snooze.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.create_uptime_check_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.create_uptime_check_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.create_uptime_check_config.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.delete_uptime_check_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.delete_uptime_check_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.delete_uptime_check_config.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.get_uptime_check_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.get_uptime_check_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.get_uptime_check_config.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.list_uptime_check_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_configs.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.list_uptime_check_ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_ips.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.list_uptime_check_ips.js,packages/google-cloud-monitoring/samples/README.md) |
| Uptime_check_service.update_uptime_check_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.update_uptime_check_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/generated/v3/uptime_check_service.update_uptime_check_config.js,packages/google-cloud-monitoring/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-monitoring/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-monitoring/samples/quickstart.js,packages/google-cloud-monitoring/samples/README.md) |



The [Stackdriver Monitoring Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/monitoring@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/monitoring/latest
[product-docs]: https://cloud.google.com/monitoring/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=monitoring.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
