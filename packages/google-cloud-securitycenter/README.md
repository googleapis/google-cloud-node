[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Security Command Center: Node.js Client](https://github.com/googleapis/nodejs-security-center)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/security-center.svg)](https://www.npmjs.org/package/@google-cloud/security-center)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-security-center/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-security-center)

[Cloud Security Command Center](https://cloud.google.com/security-center/docs/) helps security teams gather data, identify threats, and act on them before they result in business damage or loss. It offers deep insight into application and data risk so that you can quickly mitigate threats to your cloud resources and evaluate overall health. With Cloud Security Command Center, you can view and monitor an inventory of your cloud assets, scan storage systems for sensitive data, detect common web vulnerabilities, and review access rights to your critical resources, all from a single, centralized dashboard.


* [Using the client library](#using-the-client-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Using the client library

1.  [Select or create a Cloud Platform project][projects].

1.  [Enable billing for your project][billing].

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

1. Install the client library:

        npm install --save @google-cloud/security-center

1. Try an example:

```javascript
// Imports the Google Cloud client library
const sc = require('@google-cloud/securitycenter');
```


The [Cloud Security Command Center Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-security-center/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-security-center/blob/master/LICENSE)

## What's Next

* [Cloud Security Command Center Documentation][product-docs]
* [Cloud Security Command Center Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-security-center](https://github.com/googleapis/nodejs-security-center)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

[client-docs]: https://cloud.google.com/nodejs/docs/reference/securitycenter/latest/
[product-docs]: https://cloud.google.com/security-center/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=
[auth]: https://cloud.google.com/docs/authentication/getting-started

