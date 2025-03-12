[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Merchant API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-lfp)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-shopping/lfp.svg)](https://www.npmjs.org/package/@google-shopping/lfp)




Merchant API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-lfp/CHANGELOG.md).

* [Merchant API Node.js Client API Reference][client-docs]
* [Merchant API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-shopping-merchant-lfp](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-lfp)

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
1.  [Enable the Merchant API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-shopping/lfp
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
 *  Required. The LFP partner.
 *  Format: `accounts/{account}`
 */
// const parent = 'abc123'
/**
 *  Required. The Merchant Center id of the merchant to list stores for.
 */
// const targetAccount = 1234
/**
 *  Optional. The maximum number of `LfpStore` resources for the given account
 *  to return. The service returns fewer than this value if the number of
 *  stores for the given account is less than the `pageSize`. The default value
 *  is 250. The maximum value is 1000; If a value higher than the maximum is
 *  specified, then the `pageSize` will default to the maximum.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListLfpStoresRequest`
 *  call. Provide the page token to retrieve the subsequent page. When
 *  paginating, all other parameters provided to `ListLfpStoresRequest` must
 *  match the call that provided the page token. The token returned as
 *  nextPageToken google.shopping.merchant.lfp.v1beta.ListLfpStoresResponse.next_page_token
 *  in the response to the previous request.
 */
// const pageToken = 'abc123'

// Imports the Lfp library
const {LfpStoreServiceClient} = require('@google-shopping/lfp').v1beta;

// Instantiates a client
const lfpClient = new LfpStoreServiceClient();

async function callListLfpStores() {
  // Construct request
  const request = {
    parent,
    targetAccount,
  };

  // Run request
  const iterable = lfpClient.listLfpStoresAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListLfpStores();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-lfp/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Lfp_inventory_service.insert_lfp_inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_inventory_service.insert_lfp_inventory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_inventory_service.insert_lfp_inventory.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Lfp_sale_service.insert_lfp_sale | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_sale_service.insert_lfp_sale.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_sale_service.insert_lfp_sale.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Lfp_store_service.delete_lfp_store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.delete_lfp_store.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.delete_lfp_store.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Lfp_store_service.get_lfp_store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.get_lfp_store.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.get_lfp_store.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Lfp_store_service.insert_lfp_store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.insert_lfp_store.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.insert_lfp_store.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Lfp_store_service.list_lfp_stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.list_lfp_stores.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/generated/v1beta/lfp_store_service.list_lfp_stores.js,packages/google-shopping-merchant-lfp/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-lfp/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-lfp/samples/quickstart.js,packages/google-shopping-merchant-lfp/samples/README.md) |



The [Merchant API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-shopping/lfp@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/merchantapi/latest
[product-docs]: https://developers.google.com/merchant/api
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=merchantapi.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
