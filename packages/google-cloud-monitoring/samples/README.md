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
