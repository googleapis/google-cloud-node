[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Security Command Center: Node.js Client](https://github.com/googleapis/nodejs-security-center)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/security-center.svg)](https://www.npmjs.org/package/@google-cloud/security-center)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-security-center/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-security-center)




> Node.js idiomatic client for [Cloud Security Command Center][product-docs].

[Cloud Security Command Center](https://cloud.google.com/security-command-center/docs/) helps
security teams gather data, identify threats, and act on them before they result in business
damage or loss. It offers deep insight into application and data risk so that you can quickly
mitigate threats to your cloud resources and evaluate overall health. With Cloud Security
Command Center, you can view and monitor an inventory of your cloud assets, scan storage
systems for sensitive data, detect common web vulnerabilities, and review access rights
to your critical resources, all from a single, centralized dashboard.


* [Google Cloud Security Command Center Node.js Client API Reference][client-docs]
* [Google Cloud Security Command Center Documentation][product-docs]
* [github.com/googleapis/nodejs-security-center](https://github.com/googleapis/nodejs-security-center)

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
1.  [Enable the Google Cloud Security Command Center API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/security-center
```


### Using the client library

```javascript
  const sc = require('@google-cloud/security-center');

  // Create a client
  const client = new sc.SecurityCenterClient();

  async function quickstart() {
    // TODO(developer): choose the organization to use
    // const organization = 'your-organization';
    const [source] = await client.createSource({
      parent: client.organizationPath(organization),
      source: {},
    });
    // The newly created source.
    console.log('Source created.');
    console.log(source);
  }
  quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-security-center/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-security-center/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-security-center&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Security Command Center Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-security-center/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-security-center/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/security-center/latest
[product-docs]: https://cloud.google.com/security-command-center
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securitycenter.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
