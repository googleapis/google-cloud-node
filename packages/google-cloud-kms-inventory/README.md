[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [KMS Inventory API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms-inventory)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/kms-inventory.svg)](https://www.npmjs.org/package/@google-cloud/kms-inventory)




Inventory client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms-inventory/CHANGELOG.md).

* [KMS Inventory API Node.js Client API Reference][client-docs]
* [KMS Inventory API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-kms-inventory](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms-inventory)

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
1.  [Enable the KMS Inventory API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/kms-inventory
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The Google Cloud project for which to retrieve key metadata, in
 *  the format `projects/*`
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of keys to return. The service may return
 *  fewer than this value. If unspecified, at most 1000 keys will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  Optional. Pass this into a subsequent request in order to receive the next
 *  page of results.
 */
// const pageToken = 'abc123'

// Imports the Inventory library
const {KeyDashboardServiceClient} = require('@google-cloud/kms-inventory').v1;

// Instantiates a client
const inventoryClient = new KeyDashboardServiceClient();

async function callListCryptoKeys() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const [response] = await inventoryClient.listCryptoKeys(request, {
    maxResults: 1,
    autoPaginate: false,
  });
  console.log(response);
}

callListCryptoKeys();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-kms-inventory/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Key_dashboard_service.list_crypto_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms-inventory/samples/generated/v1/key_dashboard_service.list_crypto_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms-inventory/samples/generated/v1/key_dashboard_service.list_crypto_keys.js,packages/google-cloud-kms-inventory/samples/README.md) |
| Key_tracking_service.get_protected_resources_summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms-inventory/samples/generated/v1/key_tracking_service.get_protected_resources_summary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms-inventory/samples/generated/v1/key_tracking_service.get_protected_resources_summary.js,packages/google-cloud-kms-inventory/samples/README.md) |
| Key_tracking_service.search_protected_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms-inventory/samples/generated/v1/key_tracking_service.search_protected_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms-inventory/samples/generated/v1/key_tracking_service.search_protected_resources.js,packages/google-cloud-kms-inventory/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms-inventory/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-kms-inventory/samples/quickstart.js,packages/google-cloud-kms-inventory/samples/README.md) |



The [KMS Inventory API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/kms-inventory@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/kmsinventory/latest
[product-docs]: https://cloud.google.com/kms/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=kmsinventory.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
