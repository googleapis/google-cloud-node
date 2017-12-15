<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Container Engine: Node.js Client](https://github.com/googleapis/nodejs-cloud-container)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-cloud-container.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-cloud-container)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-cloud-container?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-cloud-container)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-cloud-container/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-cloud-container)

> Node.js idiomatic client for [Container Engine][product-docs].

[Container Engine](https://cloud.google.com/container-engine/docs/) let&#x27;s you run Docker containers on Google Cloud Platform, powered by Kubernetes.


* [Container Engine Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-cloud-container](https://github.com/googleapis/nodejs-cloud-container)
* [Container Engine Documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Container Engine API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/container



The [Container Engine Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-cloud-container/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-cloud-container/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/container/latest/
[product-docs]: https://cloud.google.com/container-engine/docs/
[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
