[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Monitoring: Node.js Client](https://github.com/googleapis/nodejs-monitoring)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/monitoring.svg)](https://www.npmjs.org/package/@google-cloud/monitoring)




[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from
Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation,
and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-monitoring/blob/main/CHANGELOG.md).

* [Stackdriver Monitoring Node.js Client API Reference][client-docs]
* [Stackdriver Monitoring Documentation][product-docs]
* [github.com/googleapis/nodejs-monitoring](https://github.com/googleapis/nodejs-monitoring)

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
1.  [Set up authentication with a service account][auth] so you can access the
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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-monitoring/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Alerts.backup Policies | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.backupPolicies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.backupPolicies.js,samples/README.md) |
| Alerts.delete Channels | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.deleteChannels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.deleteChannels.js,samples/README.md) |
| Alerts.enable Policies | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.enablePolicies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.enablePolicies.js,samples/README.md) |
| Alerts.list Policies | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.listPolicies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.listPolicies.js,samples/README.md) |
| Alerts.replace Channels | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.replaceChannels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.replaceChannels.js,samples/README.md) |
| Alerts.restore Policies | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/alerts.restorePolicies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/alerts.restorePolicies.js,samples/README.md) |
| Create Metric Descriptor | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.createDescriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.createDescriptor.js,samples/README.md) |
| Delete Metric Descriptor | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.deleteDescriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.deleteDescriptor.js,samples/README.md) |
| Get Metric Descriptor | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.getDescriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.getDescriptor.js,samples/README.md) |
| Get Monitored Resource Descriptor | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.getMonitoredResourceDescriptor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.getMonitoredResourceDescriptor.js,samples/README.md) |
| List Metric Descriptors | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.listDescriptors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.listDescriptors.js,samples/README.md) |
| List Monitored Resource Descriptors | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.listMonitoredResourceDescriptors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.listMonitoredResourceDescriptors.js,samples/README.md) |
| Read Time Series Aggregate | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.readTimeSeriesAggregate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesAggregate.js,samples/README.md) |
| Read Time Series Data | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.readTimeSeriesData.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesData.js,samples/README.md) |
| Read Time Series Fields | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.readTimeSeriesFields.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesFields.js,samples/README.md) |
| Read Time Series Reduce | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.readTimeSeriesReduce.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.readTimeSeriesReduce.js,samples/README.md) |
| Write Time Series Data | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/metrics.writeTimeSeriesData.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.writeTimeSeriesData.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Uptime | [source code](https://github.com/googleapis/nodejs-monitoring/blob/main/samples/uptime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/uptime.js,samples/README.md) |



The [Stackdriver Monitoring Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-monitoring/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-monitoring/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/monitoring/latest
[product-docs]: https://cloud.google.com/monitoring/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=monitoring.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
