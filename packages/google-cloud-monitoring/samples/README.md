[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Monitoring: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Alert Policies](#alert-policies)
  * [Metrics](#metrics)
  * [Uptime Config](#uptime-config)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Alert Policies

View the [source code][alerts_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.js,samples/README.md)

__Usage:__ `node alerts.js --help`

```
alerts.js <command>

Commands:
  alerts.js backup <projectId>                          Save alert policies to a ./policies_backup.json file.
  alerts.js restore <projectId>                         Restore alert policies from a ./policies_backup.json file.
  alerts.js replace <alertPolicyName> <channelNames..>  Replace the notification channels of the specified alert policy.
  alerts.js disable <projectId> [filter]                Disables policies that match the given filter.
  alerts.js enable <projectId> [filter]                 Enables policies that match the given filter.
  alerts.js list <projectId>                            Lists alert policies in the specified project.

Options:
  --version          Show version number                                                                       [boolean]
  --alertPolicyName                                                                                             [string]
  --help             Show help                                                                                 [boolean]

Examples:
  node alerts.js backup my-project-id                           Backup policies.
  node alerts.js restore my-project-id                          Restore policies.
  node alerts.js replace                                        Replace the notification channels of the specified alert
  projects/my-project-id/alertPolicies/12345 channel-1          policy.
  channel-2 channel-3
  node alerts.js disable my-project-id "(NOT                    Disables policies that match the given filter.
  display_name.empty OR NOT description.empty) AND
  user_labels='active'"
  node alerts.js disable my-project-id "description:'cloud'"    Disables policies that match the given filter.
  node alerts.js disable my-project-id                          Disables policies that match the given filter.
  "display_name=monitoring.regex.full_match('Temp \d{4}')"
  node alerts.js enable my-project-id "(NOT display_name.empty  Enables policies that match the given filter.
  OR NOT description.empty) AND user_labels='active'"
  node alerts.js enable my-project-id "description:'cloud'"     Enables policies that match the given filter.
  node alerts.js enable my-project-id                           Enables policies that match the given filter.
  "display_name=monitoring.regex.full_match('Temp \d{4}')"

For more information, see https://cloud.google.com/monitoring/docs/
```

[alerts_0_docs]: https://cloud.google.com/monitoring/docs
[alerts_0_code]: alerts.js

### Metrics

View the [source code][metrics_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.js,samples/README.md)

__Usage:__ `node metrics.js --help`

```
metrics.js <command>

Commands:
  metrics.js create [projectId]                       Creates an example 'custom.googleapis.com/stores/daily_sales'
                                                      custom metric descriptor.
  metrics.js list [projectId]                         Lists metric descriptors.
  metrics.js get <metricId> [projectId]               Get a metric descriptor.
  metrics.js delete <metricId> [projectId]            Deletes a custom metric descriptor.
  metrics.js write [projectId]                        Writes example time series data to
                                                      'custom.googleapis.com/stores/daily_sales'.
  metrics.js read <filter> [projectId]                Reads time series data that matches the given filter.
  metrics.js read-fields [projectId]                  Reads headers of time series data that matches
                                                      'compute.googleapis.com/instance/cpu/utilization'.
  metrics.js read-aggregate [projectId]               Aggregates time series data that matches
                                                      'compute.googleapis.com/instance/cpu/utilization'.
  metrics.js read-reduce [projectId]                  Reduces time series data that matches
                                                      'compute.googleapis.com/instance/cpu/utilization'.
  metrics.js list-resources [projectId]               Lists monitored resource descriptors.
  metrics.js get-resource <resourceType> [projectId]  Get a monitored resource descriptor.

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p                                                              [string] [default: "nodejs-docs-samples"]
  --help           Show help                                                                                   [boolean]

Examples:
  node metrics.js create
  node metrics.js list
  node metrics.js get logging.googleapis.com/log_entry_count
  node metrics.js delete custom.googleapis.com/stores/daily_sales
  node metrics.js list-resources
  node metrics.js get-resource cloudsql_database
  node metrics.js write
  node metrics.js read 'metric.type="compute.googleapis.com/instance/cpu/utilization"'
  node metrics.js read-fields
  node metrics.js read-aggregate
  node metrics.js read-reduce

For more information, see https://cloud.google.com/monitoring/docs
```

[metrics_1_docs]: https://cloud.google.com/monitoring/docs
[metrics_1_code]: metrics.js

### Uptime Config

View the [source code][uptime_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/uptime.js,samples/README.md)

__Usage:__ `node uptime.js --help`

```
uptime.js <command>

Commands:
  uptime.js create <hostname> [projectId]             Creates an uptime check config.
  uptime.js list [projectId]                          Lists uptime check configs.
  uptime.js list-ips                                  Lists uptime check config IPs.
  uptime.js get <uptimeCheckConfigId> [projectId]     Gets an uptime check config.
  uptime.js delete <uptimeCheckConfigId> [projectId]  Deletes an uptime check config.

Options:
  --version        Show version number                                                                         [boolean]
  --projectId, -p                                                              [string] [default: "nodejs-docs-samples"]
  --help           Show help                                                                                   [boolean]

Examples:
  node uptime.js create mydomain.com                            Create an uptime check.
  node uptime.js list                                           List all uptime check configs.
  node uptime.js list "resource.type = gce_instance AND         List all uptime check configs for a specific GCE
  resource.label.instance_id = mongodb"                         instance.
  node uptime.js list-ips
  node uptime.js get My-Uptime-Check
  node uptime.js delete My-Uptime-Check

For more information, see https://cloud.google.com/monitoring/uptime-checks/
```

[uptime_2_docs]: https://cloud.google.com/monitoring/docs
[uptime_2_code]: uptime.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/README.md
