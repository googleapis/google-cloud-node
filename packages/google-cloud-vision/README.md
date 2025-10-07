[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Vision API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/vision.svg)](https://www.npmjs.org/package/@google-cloud/vision)

Cloud Vision API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Vision API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/vision/latest)


Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Vision API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/vision
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| async batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_files.js) |
| async batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.async_batch_annotate_images.js) |
| batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_files.js) |
| batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/image_annotator.batch_annotate_images.js) |
| add product to product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.add_product_to_product_set.js) |
| create product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_product.js) |
| create product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_product_set.js) |
| create reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.create_reference_image.js) |
| delete product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_product.js) |
| delete product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_product_set.js) |
| delete reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.delete_reference_image.js) |
| get product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_product.js) |
| get product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_product_set.js) |
| get reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.get_reference_image.js) |
| import product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.import_product_sets.js) |
| list product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_product_sets.js) |
| list products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_products.js) |
| list products in product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_products_in_product_set.js) |
| list reference images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.list_reference_images.js) |
| purge products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.purge_products.js) |
| remove product from product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.remove_product_from_product_set.js) |
| update product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.update_product.js) |
| update product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/product_search.update_product_set.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1/snippet_metadata_google.cloud.vision.v1.json) |
| batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p1beta1/image_annotator.batch_annotate_images.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p1beta1/snippet_metadata_google.cloud.vision.v1p1beta1.json) |
| async batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.async_batch_annotate_files.js) |
| batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p2beta1/image_annotator.batch_annotate_images.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p2beta1/snippet_metadata_google.cloud.vision.v1p2beta1.json) |
| async batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.async_batch_annotate_files.js) |
| batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/image_annotator.batch_annotate_images.js) |
| add product to product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.add_product_to_product_set.js) |
| create product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product.js) |
| create product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_product_set.js) |
| create reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.create_reference_image.js) |
| delete product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product.js) |
| delete product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_product_set.js) |
| delete reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.delete_reference_image.js) |
| get product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product.js) |
| get product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_product_set.js) |
| get reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.get_reference_image.js) |
| import product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.import_product_sets.js) |
| list product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_product_sets.js) |
| list products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products.js) |
| list products in product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_products_in_product_set.js) |
| list reference images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.list_reference_images.js) |
| remove product from product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.remove_product_from_product_set.js) |
| update product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product.js) |
| update product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/product_search.update_product_set.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p3beta1/snippet_metadata_google.cloud.vision.v1p3beta1.json) |
| async batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_files.js) |
| async batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.async_batch_annotate_images.js) |
| batch annotate files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_files.js) |
| batch annotate images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/image_annotator.batch_annotate_images.js) |
| add product to product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.add_product_to_product_set.js) |
| create product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product.js) |
| create product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_product_set.js) |
| create reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.create_reference_image.js) |
| delete product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product.js) |
| delete product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_product_set.js) |
| delete reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.delete_reference_image.js) |
| get product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product.js) |
| get product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_product_set.js) |
| get reference image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.get_reference_image.js) |
| import product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.import_product_sets.js) |
| list product sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_product_sets.js) |
| list products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products.js) |
| list products in product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_products_in_product_set.js) |
| list reference images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.list_reference_images.js) |
| purge products | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.purge_products.js) |
| remove product from product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.remove_product_from_product_set.js) |
| update product | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product.js) |
| update product set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/product_search.update_product_set.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples/generated/v1p4beta1/snippet_metadata_google.cloud.vision.v1p4beta1.json) |


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
For example, `npm install @google-cloud/vision@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vision
