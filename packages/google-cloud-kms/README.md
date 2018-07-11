[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Key Management Service: Node.js Client](https://github.com/googleapis/nodejs-kms)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-kms.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-kms)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-kms?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-kms)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-kms/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-kms)

> Node.js idiomatic client for [Cloud KMS][product-docs].

[Cloud KMS](https://cloud.google.com/kms/docs/) allows you to keep encryption keys in one central cloud service, for direct use by other cloud resources and applications. With Cloud KMS you are the ultimate custodian of your data, you can manage encryption in the cloud the same way you do on-premises, and you have a provable and monitorable root of trust over your data.


* [Cloud KMS Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-kms](https://github.com/googleapis/nodejs-kms)
* [Cloud KMS Documentation][product-docs]

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

1.  Enable the Cloud Key Management Service API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudkms.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/kms


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-kms/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| KMS | [source code](https://github.com/googleapis/nodejs-kms/blob/master/samples/kms.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-kms&page=editor&open_in_editor=samples/kms.js,samples/README.md) |

The [Cloud KMS Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-kms/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-kms/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/kms/latest/
[product-docs]: https://cloud.google.com/kms/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
