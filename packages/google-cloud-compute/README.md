<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Compute Engine: Node.js Client](https://github.com/googleapis/nodejs-compute)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-compute.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-compute)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-compute?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-compute)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-compute/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-compute)

> Node.js idiomatic client for [Compute Engine][product-docs].

[Compute Engine](https://cloud.google.com/compute/docs/) lets you create and run virtual machines on Google infrastructure. Compute Engine offers scale, performance, and value that allows you to easily launch large compute clusters on Google&#x27;s infrastructure. There are no upfront investments and you can run thousands of virtual CPUs on a system that has been designed to be fast, and to offer strong consistency of performance.


* [Compute Engine Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-compute](https://github.com/googleapis/nodejs-compute)
* [Compute Engine Documentation][product-docs]

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

1.  Enable the Google Compute Engine API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=compute.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/compute

### Using the client library

```javascript
// Imports the Google Cloud client library
const Compute = require('@google-cloud/compute');

// Creates a client
const compute = new Compute();

// Create a new VM using the latest OS image of your choice.
const zone = compute.zone('us-central1-a');
const name = 'ubuntu-http';

zone
  .createVM(name, {os: 'ubuntu'}, data => {
    // `operation` lets you check the status of long-running tasks.
    const vm = data[0];
    const operation = data[1];
    return operation.promise();
  })
  .then(() => {
    // Virtual machine created!
  })
  .catch(err => {
    console.error('ERROR:', err);
  });;
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-compute/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Virtual Machines | [source code](https://github.com/googleapis/nodejs-compute/blob/master/samples/vms.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/vms.js,samples/README.md) |

The [Compute Engine Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-compute/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-compute/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/compute/latest/
[product-docs]: https://cloud.google.com/compute/docs/
[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
