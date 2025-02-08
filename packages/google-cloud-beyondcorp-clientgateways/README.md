[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [BeyondCorp API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-clientgateways)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/clientgateways.svg)](https://www.npmjs.org/package/@google-cloud/clientgateways)




BeyondCorp API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-clientgateways/CHANGELOG.md).

* [BeyondCorp API Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-cloud-beyondcorp-clientgateways](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-clientgateways)

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
1.  [Enable the BeyondCorp API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/clientgateways
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. Parent value for ListClientGatewaysRequest.
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server may return fewer items than
 *  requested. If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results.
 */
// const filter = 'abc123'
/**
 *  Optional. Hint for how to order the results.
 */
// const orderBy = 'abc123'

// Imports the Clientgateways library
const {ClientGatewaysServiceClient} =
  require('@google-cloud/clientgateways').v1;

// Instantiates a client
const clientgatewaysClient = new ClientGatewaysServiceClient();

async function callListClientGateways() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await clientgatewaysClient.listClientGatewaysAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListClientGateways();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-clientgateways/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Client_gateways_service.create_client_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.create_client_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.create_client_gateway.js,packages/google-cloud-beyondcorp-clientgateways/samples/README.md) |
| Client_gateways_service.delete_client_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.delete_client_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.delete_client_gateway.js,packages/google-cloud-beyondcorp-clientgateways/samples/README.md) |
| Client_gateways_service.get_client_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.get_client_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.get_client_gateway.js,packages/google-cloud-beyondcorp-clientgateways/samples/README.md) |
| Client_gateways_service.list_client_gateways | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.list_client_gateways.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-clientgateways/samples/generated/v1/client_gateways_service.list_client_gateways.js,packages/google-cloud-beyondcorp-clientgateways/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-clientgateways/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-clientgateways/samples/quickstart.js,packages/google-cloud-beyondcorp-clientgateways/samples/README.md) |



The [BeyondCorp API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
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
For example, `npm install @google-cloud/clientgateways@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/clientgateways/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=analyticshub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
