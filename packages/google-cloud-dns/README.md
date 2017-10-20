<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud DNS: Node.js Client

[![release level](https://img.shields.io/badge/release%20level-alpha-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-dns.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-dns)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-dns?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-dns)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dns/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dns)

> Node.js idiomatic client for [Cloud DNS][product-docs].

[Cloud DNS](https://cloud.google.com/dns/docs/) allows you to publish your domain names using Google&#x27;s infrastructure for production-quality, high-volume DNS services. Google&#x27;s global network of anycast name servers provide reliable, low-latency authoritative name lookups for your domains from anywhere in the world.

* [Cloud DNS Node.js Client API Reference][client-docs]
* [Cloud DNS Documentation][product-docs]

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

1.  Enable the Google Cloud DNS API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dns.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/dns

### Using the client library

```javascript
// Imports the Google Cloud client library
const DNS = require('@google-cloud/dns');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Creates a client
const dns = new DNS({
  projectId: projectId,
});

// Lists all zones in the current project
dns
  .getZones()
  .then(results => {
    const zones = results[0];

    console.log('Zones:');
    zones.forEach(zone => console.log(zone.name));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

## Samples

Samples are in the [`samples/`](https://github.com/blob/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| Zones | [source code](https://github.com/googleapis/nodejs-dns/blob/master/samples/zones.js) |

The [Cloud DNS Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dns/latest/
[product-docs]: https://cloud.google.com/dns/docs/
