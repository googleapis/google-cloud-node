[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Asset API: Node.js Client](https://github.com/googleapis/nodejs-asset)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-asset.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-asset)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-asset?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-asset)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-asset/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-asset)

The [Cloud Asset API](https://cloud.google.com/asset/docs) manages the history and inventory of cloud resources.


* [Using the client library](#using-the-client-library)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Using the client library

1.  [Select or create a Cloud Platform project][projects].

1.  [Enable billing for your project][billing].

1.  [Enable the Google Cloud Asset API API][enable_api].

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

1. Install the client library:

        npm install --save @google-cloud/asset

1. Try an example:

```javascript
// Imports the Google Cloud client library
const asset = require('@google-cloud/asset');

// eslint-disable-next-line
const client = new asset.AssetServiceClient({
  projectId: 'your-project-id',
  keyFilename: '/path/to/keyfile.json',
});

```


The [Cloud Asset API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-asset/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-asset/blob/master/LICENSE)

## What's Next

* [Cloud Asset API Documentation][product-docs]
* [Cloud Asset API Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-asset](https://github.com/googleapis/nodejs-asset)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

[client-docs]: https://cloud.google.com/nodejs/docs/reference/asset/latest/
[product-docs]: https://cloud.google.com/asset/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=asset.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
