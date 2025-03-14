[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Analytics Hub API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-analyticshub)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-analyticshub.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-analyticshub)




Analytics Hub API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-analyticshub/CHANGELOG.md).

* [Analytics Hub API Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-cloud-bigquery-analyticshub](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-analyticshub)

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
npm install @google-cloud/bigquery-analyticshub
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
 *  Required. The parent resource path of the listing.
 *  e.g. `projects/myproject/locations/US/dataExchanges/123`.
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

// Imports the Analyticshub library
const {AnalyticsHubServiceClient} =
  require('@google-cloud/bigquery-analyticshub').v1;

// Instantiates a client
const analyticshubClient = new AnalyticsHubServiceClient();

async function callListListings() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await analyticshubClient.listListingsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListListings();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-analyticshub/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Analytics_hub_service.create_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.create_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.create_data_exchange.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.create_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.create_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.create_listing.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.delete_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_data_exchange.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.delete_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_listing.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.delete_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.delete_subscription.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.get_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_data_exchange.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_iam_policy.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.get_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_listing.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.get_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.get_subscription.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.list_data_exchanges | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_data_exchanges.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_data_exchanges.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.list_listings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_listings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_listings.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.list_org_data_exchanges | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_org_data_exchanges.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_org_data_exchanges.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.list_shared_resource_subscriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_shared_resource_subscriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_shared_resource_subscriptions.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.list_subscriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_subscriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.list_subscriptions.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.refresh_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.refresh_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.refresh_subscription.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.revoke_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.revoke_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.revoke_subscription.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.set_iam_policy.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.subscribe_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.subscribe_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.subscribe_data_exchange.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.subscribe_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.subscribe_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.subscribe_listing.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.test_iam_permissions.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.update_data_exchange | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.update_data_exchange.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.update_data_exchange.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Analytics_hub_service.update_listing | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.update_listing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/generated/v1/analytics_hub_service.update_listing.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-analyticshub/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-analyticshub/samples/quickstart.js,packages/google-cloud-bigquery-analyticshub/samples/README.md) |



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
For example, `npm install @google-cloud/bigquery-analyticshub@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/analyticshub/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=google.cloud.bigquery.analyticshub.v1
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
