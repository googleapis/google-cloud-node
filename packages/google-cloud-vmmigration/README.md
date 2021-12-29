[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Migrate for Compute Engine: Node.js Client](https://github.com/googleapis/nodejs-vmmigration)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/vmmigration.svg)](https://www.npmjs.org/package/@google-cloud/vmmigration)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-vmmigration/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-vmmigration)




vmmigration client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-vmmigration/blob/main/CHANGELOG.md).

* [Migrate for Compute Engine Node.js Client API Reference][client-docs]
* [Migrate for Compute Engine Documentation][product-docs]
* [github.com/googleapis/nodejs-vmmigration](https://github.com/googleapis/nodejs-vmmigration)

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
1.  [Enable the Migrate for Compute Engine API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/vmmigration
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent, which owns this collection of targets.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of targets to return. The service may return
 *  fewer than this value. If unspecified, at most 500 targets will be
 *  returned. The maximum value is 1000; values above 1000 will be coerced to
 *  1000.
 */
// const pageSize = 1234
/**
 *  Required. A page token, received from a previous `ListTargets` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListTargets` must
 *  match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. The filter request.
 */
// const filter = 'abc123'
/**
 *  Optional. the order by fields for the result.
 */
// const orderBy = 'abc123'

// Imports the Vmmigration library
const {VmMigrationClient} = require('@google-cloud/vmmigration').v1;

// Instantiates a client
const vmmigrationClient = new VmMigrationClient();

async function callListTargetProjects() {
  // Construct request
  const request = {
    parent,
    pageToken,
  };

  // Run request
  const iterable = await vmmigrationClient.listTargetProjectsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListTargetProjects();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-vmmigration/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-vmmigration/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vmmigration&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Migrate for Compute Engine Node.js Client API Reference][client-docs] documentation
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




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-vmmigration/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-vmmigration/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/vmmigration/latest
[product-docs]: https://cloud.google.com/migrate/compute-engine/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vmmigration.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
