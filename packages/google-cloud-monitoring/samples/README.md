<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Monitoring Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-monitoring.svg)]()

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Metrics](#metrics)
  * [Listing resources](#listing-resources)
  * [Custom metrics](#custom-metrics)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With `npm`:

        npm install

    With `yarn`:

        yarn install

[prereq]: ../README.md#prerequisities
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

### Listing resources


View the [documentation][list_1_docs] or the [source code][list_1_code].

`list_resources.js` is a command-line program to demonstrate connecting to the
Google Monitoring API to retrieve API data.

__Usage:__ `node list_resources <YOUR_PROJECT_ID>`

```
node list_resources my-cool-project
```

[list_1_docs]: https://cloud.google.com/monitoring/demos/#hello-world
[list_1_code]: list_resources.js

### Custom metrics


View the [documentation][metrics_2_docs] or the [source code][metrics_2_code].

`create_custom_metric.js` demonstrates how to create a custom metric, write a
timeseries value to it, and read it back.

__Usage:__ `node create_custom_metric <YOUR_PROJECT_ID>`

```
node create_custom_metric my-cool-project
```

[metrics_2_docs]: https://cloud.google.com/monitoring/demos/#custom_metrics
[metrics_2_code]: create_custom_metric.js

## Running the tests

1.  Set the `GCLOUD_PROJECT` and `GOOGLE_APPLICATION_CREDENTIALS` environment
    variables.

1.  Run the tests:

    With `npm`:

        npm test

    With `yarn`:

        yarn test
