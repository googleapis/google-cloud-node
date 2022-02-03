[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Datastream: Node.js Client](https://github.com/googleapis/nodejs-datastream)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datastream.svg)](https://www.npmjs.org/package/@google-cloud/datastream)




datastream client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-datastream/blob/main/CHANGELOG.md).

* [Datastream Node.js Client API Reference][client-docs]
* [Datastream Documentation][product-docs]
* [github.com/googleapis/nodejs-datastream](https://github.com/googleapis/nodejs-datastream)

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
1.  [Enable the Datastream API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/datastream
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent that owns the collection of connection profiles.
 */
// const parent = 'abc123'
/**
 *  Maximum number of connection profiles to return.
 *  If unspecified, at most 50 connection profiles will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  Page token received from a previous `ListConnectionProfiles` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListConnectionProfiles`
 *  must match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Filter request.
 */
// const filter = 'abc123'
/**
 *  Order by fields for the result.
 */
// const orderBy = 'abc123'

// Imports the Datastream library
const {DatastreamClient} = require('@google-cloud/datastream').v1;

// Instantiates a client
const datastreamClient = new DatastreamClient();

async function listConnectionProfiles() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await datastreamClient.listConnectionProfilesAsync(
    request
  );
  for await (const response of iterable) {
    console.log(response);
  }
}

listConnectionProfiles();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-datastream/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-datastream/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datastream&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Datastream Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/datastream@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-datastream/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-datastream/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datastream/latest
[product-docs]: https://cloud.google.com/datastream/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datastream.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
