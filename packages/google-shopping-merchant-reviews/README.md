[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Merchant API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-reviews)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-shopping/reviews.svg)](https://www.npmjs.org/package/@google-shopping/reviews)




Merchant API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-reviews/CHANGELOG.md).

* [Merchant API Node.js Client API Reference][client-docs]
* [Merchant API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-shopping-merchant-reviews](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-reviews)

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
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-shopping/reviews
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
 *  Required. The account to list product reviews for.
 *  Format: accounts/{account}
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of products to return. The service may return
 *  fewer than this value.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListProductReviews` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListProductReviews`
 *  must match the call that provided the page token.
 */
// const pageToken = 'abc123'

// Imports the Reviews library
const {ProductReviewsServiceClient} =
  require('@google-shopping/reviews').v1beta;

// Instantiates a client
const reviewsClient = new ProductReviewsServiceClient();

async function callListProductReviews() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = reviewsClient.listProductReviewsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListProductReviews();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-shopping-merchant-reviews/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Merchant_reviews_service.delete_merchant_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.delete_merchant_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.delete_merchant_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Merchant_reviews_service.get_merchant_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.get_merchant_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.get_merchant_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Merchant_reviews_service.insert_merchant_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.insert_merchant_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.insert_merchant_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Merchant_reviews_service.list_merchant_reviews | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.list_merchant_reviews.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/merchant_reviews_service.list_merchant_reviews.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Product_reviews_service.delete_product_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.delete_product_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.delete_product_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Product_reviews_service.get_product_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.get_product_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.get_product_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Product_reviews_service.insert_product_review | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.insert_product_review.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.insert_product_review.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Product_reviews_service.list_product_reviews | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.list_product_reviews.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/generated/v1beta/product_reviews_service.list_product_reviews.js,packages/google-shopping-merchant-reviews/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-shopping-merchant-reviews/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-shopping-merchant-reviews/samples/quickstart.js,packages/google-shopping-merchant-reviews/samples/README.md) |



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
For example, `npm install @google-shopping/reviews@legacy-8` installs client libraries
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
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
