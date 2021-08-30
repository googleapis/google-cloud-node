[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Monitoring: Node.js Samples](https://github.com/googleapis/nodejs-monitoring)

[![Open in Cloud Shell][shell_img]][shell_link]

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from
Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation,
and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Alerts.backup Policies](#alerts.backup-policies)
  * [Alerts.delete Channels](#alerts.delete-channels)
  * [Alerts.enable Policies](#alerts.enable-policies)
  * [Alerts.list Policies](#alerts.list-policies)
  * [Alerts.replace Channels](#alerts.replace-channels)
  * [Alerts.restore Policies](#alerts.restore-policies)
  * [Create Metric Descriptor](#create-metric-descriptor)
  * [Delete Metric Descriptor](#delete-metric-descriptor)
  * [Get Metric Descriptor](#get-metric-descriptor)
  * [Get Monitored Resource Descriptor](#get-monitored-resource-descriptor)
  * [List Metric Descriptors](#list-metric-descriptors)
  * [List Monitored Resource Descriptors](#list-monitored-resource-descriptors)
  * [Read Time Series Aggregate](#read-time-series-aggregate)
  * [Read Time Series Data](#read-time-series-data)
  * [Read Time Series Fields](#read-time-series-fields)
  * [Read Time Series Reduce](#read-time-series-reduce)
  * [Write Time Series Data](#write-time-series-data)
  * [Quickstart](#quickstart)
  * [Uptime](#uptime)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-monitoring#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Alerts.backup Policies

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.backupPolicies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.backupPolicies.js,samples/README.md)

__Usage:__


`node samples/alerts.backupPolicies.js`


-----




### Alerts.delete Channels

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.deleteChannels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.deleteChannels.js,samples/README.md)

__Usage:__


`node samples/alerts.deleteChannels.js`


-----




### Alerts.enable Policies

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.enablePolicies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.enablePolicies.js,samples/README.md)

__Usage:__


`node samples/alerts.enablePolicies.js`


-----




### Alerts.list Policies

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.listPolicies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.listPolicies.js,samples/README.md)

__Usage:__


`node samples/alerts.listPolicies.js`


-----




### Alerts.replace Channels

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.replaceChannels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.replaceChannels.js,samples/README.md)

__Usage:__


`node samples/alerts.replaceChannels.js`


-----




### Alerts.restore Policies

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/alerts.restorePolicies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.restorePolicies.js,samples/README.md)

__Usage:__


`node samples/alerts.restorePolicies.js`


-----




### Create Metric Descriptor

Creates an example 'custom.googleapis.com/stores/daily_sales' custom metric descriptor.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.createDescriptor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.createDescriptor.js,samples/README.md)

__Usage:__


`node metrics.createDescriptor.js your-project-id`


-----




### Delete Metric Descriptor

Deletes a custom metric descriptor.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.deleteDescriptor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.deleteDescriptor.js,samples/README.md)

__Usage:__


`node metrics.deleteDescriptor.js your-project-id custom.googleapis.com/stores/daily_sales`


-----




### Get Metric Descriptor

Gets a custom metric descriptor

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.getDescriptor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.getDescriptor.js,samples/README.md)

__Usage:__


`node metrics.getDescriptor.js your-project-id custom.googleapis.com/your/id`


-----




### Get Monitored Resource Descriptor

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.getMonitoredResourceDescriptor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.getMonitoredResourceDescriptor.js,samples/README.md)

__Usage:__


`node metrics.getMonitoredResourceDescriptor.js your-project-id some-resource-type`


-----




### List Metric Descriptors

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.listDescriptors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.listDescriptors.js,samples/README.md)

__Usage:__


`node metrics.listDescriptors.js your-project-id`


-----




### List Monitored Resource Descriptors

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.listMonitoredResourceDescriptors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.listMonitoredResourceDescriptors.js,samples/README.md)

__Usage:__


`node metrics.listMonitoredResourceDescriptors.js your-project-id`


-----




### Read Time Series Aggregate

Aggregates time series data that matches 'compute.googleapis.com/instance/cpu/utilization'.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.readTimeSeriesAggregate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesAggregate.js,samples/README.md)

__Usage:__


`node metrics.readTimeSeriesAggregate.js your-project-id`


-----




### Read Time Series Data

Reads time series data that matches the given filter.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.readTimeSeriesData.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesData.js,samples/README.md)

__Usage:__


`node metrics.readTimeSeriesData.js your-project-id 'metric.type="compute.googleapis.com/instance/cpu/utilization"'`


-----




### Read Time Series Fields

Reads headers of time series data that matches 'compute.googleapis.com/instance/cpu/utilization'.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.readTimeSeriesFields.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesFields.js,samples/README.md)

__Usage:__


`node metrics.readTimeSeriesFields.js your-project-id`


-----




### Read Time Series Reduce

Reduces time series data that matches 'compute.googleapis.com/instance/cpu/utilization'.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.readTimeSeriesReduce.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesReduce.js,samples/README.md)

__Usage:__


`node metrics.readTimeSeriesReduce.js your-project-id`


-----




### Write Time Series Data

Writes example time series data to 'custom.googleapis.com/stores/daily_sales'.

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.writeTimeSeriesData.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.writeTimeSeriesData.js,samples/README.md)

__Usage:__


`node metrics.writeTimeSeriesData.js your-project-id`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Uptime

View the [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/uptime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/uptime.js,samples/README.md)

__Usage:__


`node samples/uptime.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/monitoring/docs
