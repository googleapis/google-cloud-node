<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Monitoring: Node.js Client](https://github.com/googleapis/nodejs-monitoring)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-monitoring.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-monitoring)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-monitoring?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-monitoring)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-monitoring/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-monitoring)

> Node.js idiomatic client for [Monitoring][product-docs].

[Stackdriver Monitoring](https://cloud.google.com/monitoring/docs) collects metrics, events, and metadata from Google Cloud Platform, Amazon Web Services (AWS), hosted uptime probes, application instrumentation, and a variety of common application components including Cassandra, Nginx, Apache Web Server, Elasticsearch and many others.


* [Monitoring Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-monitoring](https://github.com/googleapis/nodejs-monitoring)
* [Monitoring Documentation][product-docs]

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

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Stackdriver Monitoring API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=monitoring.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/monitoring

### Using the client library

```javascript
// Imports the Google Cloud client library
const monitoring = require('@google-cloud/monitoring');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Creates a client
const client = new monitoring.MetricServiceClient();

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
client
  .createTimeSeries(request)
  .then(results => {
    console.log(`Done writing time series data.`, results[0]);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-monitoring/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Metrics | [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/metrics.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/metrics.js,samples/README.md) |
| Uptime Config | [source code](https://github.com/googleapis/nodejs-monitoring/blob/master/samples/uptime.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-monitoring&page=editor&open_in_editor=samples/uptime.js,samples/README.md) |

The [Monitoring Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-monitoring/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-monitoring/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/monitoring/latest/
[product-docs]: https://cloud.google.com/monitoring/docs
[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
