[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Scheduler: Node.js Client](https://github.com/googleapis/nodejs-scheduler)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-scheduler.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-scheduler)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-scheduler/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-scheduler)

[Cloud Scheduler](https://cloud.google.com/scheduler/docs/) is a fully managed enterprise-grade cron job scheduler. It allows you to schedule virtually any job, including batch, big data jobs, cloud infrastructure operations, and more. You can automate everything, including retries in case of failure to reduce manual toil and intervention. Cloud Scheduler even acts as a single pane of glass, allowing you to manage all your automation tasks from one place.


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

        npm install --save @google-cloud/scheduler

1. Try an example:

```javascript
// Imports the Google Cloud client library
const scheduler = require('@google-cloud/scheduler');
```


The [Cloud Scheduler Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-scheduler/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-scheduler/blob/master/LICENSE)

## What's Next

* [Cloud Scheduler Documentation][product-docs]
* [Cloud Scheduler Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-scheduler](https://github.com/googleapis/nodejs-scheduler)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

[client-docs]: https://cloud.google.com/nodejs/docs/reference/scheduler/latest/
[product-docs]: https://cloud.google.com/scheduler/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=
[auth]: https://cloud.google.com/docs/authentication/getting-started
