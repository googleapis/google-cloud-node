[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Commerce Consumer Procurement API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-commerce-consumer-procurement)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/procurement.svg)](https://www.npmjs.org/package/@google-cloud/procurement)




Cloud Commerce Consumer Procurement API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-commerce-consumer-procurement/CHANGELOG.md).

* [Cloud Commerce Consumer Procurement API Node.js Client API Reference][client-docs]
* [Cloud Commerce Consumer Procurement API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-commerce-consumer-procurement](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-commerce-consumer-procurement)

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
1.  [Enable the Cloud Commerce Consumer Procurement API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/procurement
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
 *  Required. The parent resource to query for orders.
 *  This field has the form `billingAccounts/{billing-account-id}`.
 */
// const parent = 'abc123'
/**
 *  The maximum number of entries requested.
 *  The default page size is 25 and the maximum page size is 200.
 */
// const pageSize = 1234
/**
 *  The token for fetching the next page.
 */
// const pageToken = 'abc123'
/**
 *  Filter that you can use to limit the list request.
 *  A query string that can match a selected set of attributes
 *  with string values. For example, `display_name=abc`.
 *  Supported query attributes are
 *  * `display_name`
 *  If the query contains special characters other than letters,
 *  underscore, or digits, the phrase must be quoted with double quotes. For
 *  example, `display_name="foo:bar"`, where the display name needs to be
 *  quoted because it contains special character colon.
 *  Queries can be combined with `OR`, and `NOT` to form more complex queries.
 *  You can also group them to force a desired evaluation order.
 *  For example, `display_name=abc OR display_name=def`.
 */
// const filter = 'abc123'

// Imports the Procurement library
const {ConsumerProcurementServiceClient} =
  require('@google-cloud/procurement').v1alpha1;

// Instantiates a client
const procurementClient = new ConsumerProcurementServiceClient();

async function callListOrders() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await procurementClient.listOrdersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListOrders();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-commerce-consumer-procurement/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Consumer_procurement_service.cancel_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.cancel_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.cancel_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.get_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.get_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.get_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.list_orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.list_orders.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.list_orders.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.modify_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.modify_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.modify_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.place_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.place_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/consumer_procurement_service.place_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| License_management_service.assign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.assign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.assign.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| License_management_service.enumerate_licensed_users | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.enumerate_licensed_users.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.enumerate_licensed_users.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| License_management_service.get_license_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.get_license_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.get_license_pool.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| License_management_service.unassign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.unassign.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.unassign.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| License_management_service.update_license_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.update_license_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1/license_management_service.update_license_pool.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.get_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.get_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.get_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.list_orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.list_orders.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.list_orders.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Consumer_procurement_service.place_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.place_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/generated/v1alpha1/consumer_procurement_service.place_order.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-commerce-consumer-procurement/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-commerce-consumer-procurement/samples/quickstart.js,packages/google-cloud-commerce-consumer-procurement/samples/README.md) |



The [Cloud Commerce Consumer Procurement API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/procurement@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/cloudcommerceconsumerprocurement/latest
[product-docs]: https://cloud.google.com/marketplace/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudcommerceconsumerprocurement.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
