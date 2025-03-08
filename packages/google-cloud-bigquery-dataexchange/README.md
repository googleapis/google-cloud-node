[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Analytics Hub API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-dataexchange)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-data-exchange.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-data-exchange)




analyticshub client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-dataexchange/CHANGELOG.md).

* [Analytics Hub API Node.js Client API Reference][client-docs]
* [Analytics Hub API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-bigquery-dataexchange](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-dataexchange)

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
1.  [Enable the Analytics Hub API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigquery-data-exchange
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent resource path of the DataExchanges.
 *  e.g. `projects/myproject/locations/US`.
 */
// const parent = 'abc123'
/**
 *  The maximum number of results to return in a single response page. Leverage
 *  the page tokens to iterate through the entire collection.
 */
// const pageSize = 1234
/**
 *  Page token, returned by a previous call, to request the next page of
 *  results.
 */
// const pageToken = 'abc123'

// Imports the Dataexchange library
const {AnalyticsHubServiceClient} =
  require('@google-cloud/bigquery-data-exchange').v1beta1;

// Instantiates a client
const dataexchangeClient = new AnalyticsHubServiceClient();

async function callListDataExchanges() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await dataexchangeClient.listDataExchangesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDataExchanges();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-dataexchange/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Analytics_hub_service.create_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.create_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.create_data_exchange.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.create_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.create_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.create_listing.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.delete_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.delete_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.delete_data_exchange.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.delete_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.delete_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.delete_listing.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.get_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_data_exchange.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_iam_policy.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.get_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.get_listing.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.list_data_exchanges | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_data_exchanges.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_data_exchanges.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.list_listings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_listings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_listings.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.list_org_data_exchanges | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_org_data_exchanges.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.list_org_data_exchanges.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.set_iam_policy.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.subscribe_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.subscribe_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.subscribe_listing.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.test_iam_permissions.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.update_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.update_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.update_data_exchange.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Analytics_hub_service.update_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.update_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/generated/v1beta1/analytics_hub_service.update_listing.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-dataexchange/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-dataexchange/samples/quickstart.js,packages/google-cloud-bigquery-dataexchange/samples/README.md) |



The [Analytics Hub API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bigquery-data-exchange@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigquery-data-exchange/latest
[product-docs]: https://cloud.google.com/analytics-hub
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerydatapolicy.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
