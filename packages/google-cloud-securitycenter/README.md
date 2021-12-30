[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Security Command Center: Node.js Client](https://github.com/googleapis/nodejs-security-center)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/security-center.svg)](https://www.npmjs.org/package/@google-cloud/security-center)




> Node.js idiomatic client for [Cloud Security Command Center][product-docs].

[Cloud Security Command Center](https://cloud.google.com/security-command-center/docs/) helps
security teams gather data, identify threats, and act on them before they result in business
damage or loss. It offers deep insight into application and data risk so that you can quickly
mitigate threats to your cloud resources and evaluate overall health. With Cloud Security
Command Center, you can view and monitor an inventory of your cloud assets, scan storage
systems for sensitive data, detect common web vulnerabilities, and review access rights
to your critical resources, all from a single, centralized dashboard.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-security-center/blob/main/CHANGELOG.md).

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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-security-center/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-security-center/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-security-center&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Security Command Center Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-security-center/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-security-center/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/security-center/latest
[product-docs]: https://cloud.google.com/security-command-center
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securitycenter.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
