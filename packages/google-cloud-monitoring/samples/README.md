<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Monitoring Node.js samples

[Stackdriver Monitoring][monitoring_docs] collects metrics, events, and metadata
from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes,
application instrumentation, and a variety of common application components
including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

[monitoring_docs]: https://cloud.google.com/monitoring/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Listing resources](#listing-resources)
  * [Custom metrics](#custom-metrics)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Metrics

View the [documentation][metrics_docs] or the [source code][metrics_code].

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
  --help           Show help                                                                                   [boolean]
  --projectId, -p                                                                                               [string]

Examples:
  node metrics.js create
  node metrics.js list
  node metrics.js get logging.googleapis.com/log_entry_count
  node metrics.js delete
  custom.googleapis.com/stores/daily_sales
  node metrics.js list-resources
  node metrics.js get-resource cloudsql_database
  node metrics.js write
  node metrics.js read
  'metric.type="compute.googleapis.com/instance/cpu/utilizatio
  n"'
  node metrics.js read-fields
  node metrics.js read-aggregate
  node metrics.js read-reduce

For more information, see https://cloud.google.com/monitoring/docs
```

[metrics_docs]: https://cloud.google.com/monitoring/docs
[metrics_code]: metrics.js

### List resources

`list_resources.js` is a command-line program to demonstrate connecting to the Google
Monitoring API to retrieve API data.

View the [documentation][list_docs] or the [source code][list_code].

__Run the sample:__

    node list_resources <your-project-id>

[list_docs]: https://cloud.google.com/monitoring/demos/#hello-world
[list_code]: list_resources.js

### Custom metric

`create_custom_metric.js` demonstrates how to create a custom metric, write a timeseries value to it,
and read it back.

View the [documentation][custom_docs] or the [source code][custom_code].

__Run the sample:__

    node create_custom_metric <your-project-id>

[custom_docs]: https://cloud.google.com/monitoring/demos/#custom_metrics
[custom_code]: create_custom_metric.js
