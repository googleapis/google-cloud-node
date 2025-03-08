[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Asset Inventory: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-asset)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/asset.svg)](https://www.npmjs.org/package/@google-cloud/asset)




Cloud Asset API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-asset/CHANGELOG.md).

* [Cloud Asset Inventory Node.js Client API Reference][client-docs]
* [Cloud Asset Inventory Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-asset](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-asset)

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
1.  [Enable the Cloud Asset Inventory API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/asset
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table';
// const contentType = 'RESOURCE';

const util = require('util');
const {v1} = require('@google-cloud/asset');
const client = new v1.AssetServiceClient();

const projectResource = `projects/${projectId}`;
// TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket':
//   const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table';
// Or simply use empty string to list all types of assets:
//   const assetTypes = '';
const assetTypesList = assetTypes ? assetTypes.split(',') : [];

async function listAssets() {
  const request = {
    parent: projectResource,
    assetTypes: assetTypesList,
    contentType: contentType,
    // (Optional) Add readTime parameter to list assets at the given time instead of current time:
    //   readTime: { seconds: 1593988758 },
  };

  // Call cloud.assets.v1.ListAssets API.
  const result = await client.listAssets(request);
  // Handle the response.
  console.log(util.inspect(result, {depth: null}));
}
listAssets();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-asset/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Asset_service.analyze_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_iam_policy.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_iam_policy_longrunning | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_iam_policy_longrunning.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_iam_policy_longrunning.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_move | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_move.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_move.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_org_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policies.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_org_policy_governed_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policy_governed_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policy_governed_assets.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_org_policy_governed_containers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policy_governed_containers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.analyze_org_policy_governed_containers.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.batch_get_assets_history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.batch_get_assets_history.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.batch_get_assets_history.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.batch_get_effective_iam_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.batch_get_effective_iam_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.batch_get_effective_iam_policies.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.create_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.create_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.create_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.create_saved_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.create_saved_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.create_saved_query.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.delete_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.delete_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.delete_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.delete_saved_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.delete_saved_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.delete_saved_query.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.export_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.export_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.export_assets.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.get_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.get_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.get_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.get_saved_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.get_saved_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.get_saved_query.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.list_assets.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.list_feeds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.list_feeds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.list_feeds.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.list_saved_queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.list_saved_queries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.list_saved_queries.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.query_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.query_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.query_assets.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.search_all_iam_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.search_all_iam_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.search_all_iam_policies.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.search_all_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.search_all_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.search_all_resources.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.update_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.update_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.update_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.update_saved_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1/asset_service.update_saved_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1/asset_service.update_saved_query.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.search_all_iam_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p1beta1/asset_service.search_all_iam_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p1beta1/asset_service.search_all_iam_policies.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.search_all_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p1beta1/asset_service.search_all_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p1beta1/asset_service.search_all_resources.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.create_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.create_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.create_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.delete_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.delete_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.delete_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.get_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.get_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.get_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.list_feeds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.list_feeds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.list_feeds.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.update_feed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.update_feed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p2beta1/asset_service.update_feed.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.analyze_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p4beta1/asset_service.analyze_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p4beta1/asset_service.analyze_iam_policy.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.export_iam_policy_analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p4beta1/asset_service.export_iam_policy_analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p4beta1/asset_service.export_iam_policy_analysis.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p5beta1/asset_service.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p5beta1/asset_service.list_assets.js,packages/google-cloud-asset/samples/README.md) |
| Asset_service.export_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/generated/v1p7beta1/asset_service.export_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/generated/v1p7beta1/asset_service.export_assets.js,packages/google-cloud-asset/samples/README.md) |
| List Assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-asset/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-asset/samples/quickstart.js,packages/google-cloud-asset/samples/README.md) |



The [Cloud Asset Inventory Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/asset@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/asset/latest
[product-docs]: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudasset.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
