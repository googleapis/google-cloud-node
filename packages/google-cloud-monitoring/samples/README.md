<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Monitoring: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Metrics](#metrics)
  * [Uptime Config](#uptime-config)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Metrics

View the [source code][metrics_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.js,samples/README.md)

__Usage:__ `node metrics.js --help`

```
Commands:
  create [projectId]                       Creates an example 'custom.googleapis.com/stores/daily_sales' custom metric
                                           descriptor.
  list [projectId]                         Lists metric descriptors.
  get <metricId> [projectId]               Get a metric descriptor.
  delete <metricId> [projectId]            Deletes a custom metric descriptor.
  write [projectId]                        Writes example time series data to
                                           'custom.googleapis.com/stores/daily_sales'.
  read <filter> [projectId]                Reads time series data that matches the given filter.
  read-fields [projectId]                  Reads headers of time series data that matches
                                           'compute.googleapis.com/instance/cpu/utilization'.
  read-aggregate [projectId]               Aggregates time series data that matches
                                           'compute.googleapis.com/instance/cpu/utilization'.
  read-reduce [projectId]                  Reduces time series data that matches
                                           'compute.googleapis.com/instance/cpu/utilization'.
  list-resources [projectId]               Lists monitored resource descriptors.
  get-resource <resourceType> [projectId]  Get a monitored resource descriptor.

Options:
  --version        Show version number                                                                         [boolean]
  --help           Show help                                                                                   [boolean]
  --projectId, -p                                                                                               [string]

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

[metrics_0_docs]: https://cloud.google.com/monitoring/docs
[metrics_0_code]: metrics.js

### Uptime Config

View the [source code][uptime_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/uptime.js,samples/README.md)

__Usage:__ `node uptime.js --help`

```
Commands:
  create <gceInstanceId> [projectId]        Creates an uptime check config.
  list [projectId]                          Lists uptime check configs.
  list-ips                                  Lists uptime check config IPs.
  get <uptimeCheckConfigId> [projectId]     Gets an uptime check config.
  delete <uptimeCheckConfigId> [projectId]  Deletes an uptime check config.

Options:
  --version        Show version number                                                                         [boolean]
  --help           Show help                                                                                   [boolean]
  --projectId, -p                                                                                               [string]

Examples:
  node uptime.js create my-instance                             Create an uptime check for a "my-instance" GCE instance.
  node uptime.js list                                           List all uptime check configs.
  node uptime.js list "resource.type = gce_instance AND         List all uptime check configs for a specific GCE
  resource.label.instance_id = mongodb"                         instance.
  node uptime.js list-ips
  node uptime.js get My-Uptime-Check
  node uptime.js delete My-Uptime-Check

For more information, see https://cloud.google.com/monitoring/uptime-checks/
```

[uptime_1_docs]: https://cloud.google.com/monitoring/docs
[uptime_1_code]: uptime.js

[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/README.md
