<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Monitoring: Node.js Samples

[![Build](https://storage.googleapis.com/.svg)]()

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Metrics](#metrics)
  * [Uptime Config](#uptime-config)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With **npm**:

        npm install

    With **yarn**:

        yarn install

[prereq]: ../README.md#prerequisites
[run]: ../README.md#how-to-run-a-sample

## Samples

### Metrics

View the [documentation][metrics_0_docs] or the [source code][metrics_0_code].

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

View the [documentation][uptime_1_docs] or the [source code][uptime_1_code].

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
  node uptime.js list-ips
  node uptime.js get My-Uptime-Check
  node uptime.js delete My-Uptime-Check

For more information, see https://cloud.google.com/monitoring/uptime-checks/
```

[uptime_1_docs]: https://cloud.google.com/monitoring/docs
[uptime_1_code]: uptime.js


## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
