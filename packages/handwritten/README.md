<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Error Reporting: Node.js Client

[![Greenkeeper badge](https://badges.greenkeeper.io/googleapis/nodejs-error-reporting.svg)](https://greenkeeper.io/)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-error-reporting.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-error-reporting)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-error-reporting?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-error-reporting)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-error-reporting/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-error-reporting)

> Node.js idiomatic client for [Error Reporting][product-docs].

[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/docs/) aggregates and displays errors produced in your running cloud services.

* [Error Reporting Node.js Client API Reference][client-docs]
* [Error Reporting Documentation][product-docs]

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

1.  Enable the Stackdriver Error Reporting API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouderrorreporting.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/error-reporting

### Using the client library

```javascript
  // Imports the Google Cloud client library

  // Node 6+
  const {ErrorReporting} = require('@google-cloud/error-reporting');

  // Node 4+
  // const ErrorReporting = require('@google-cloud/error-reporting').ErrorReporting;

  // Using ES6 style imports via TypeScript or Babel
  // import {ErrorReporting} from '@google-cloud/error-reporting';

  // Instantiates a client
  const errors = new ErrorReporting();

  // Reports a simple error
  errors.report('Something broke!');
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| Examples | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/snippets.js) |

The [Error Reporting Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/error-reporting/latest/
[product-docs]: https://cloud.google.com/error-reporting/docs/
