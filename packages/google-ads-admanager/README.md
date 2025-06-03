[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Ad Manager API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ads-admanager)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-ads/admanager.svg)](https://www.npmjs.org/package/@google-ads/admanager)




Google Ad Manager API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ads-admanager/CHANGELOG.md).

* [Google Ad Manager API Node.js Client API Reference][client-docs]
* [Google Ad Manager API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-ads-admanager](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ads-admanager)

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
1.  [Enable the Google Ad Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-ads/admanager
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
 *  Required. The parent, which owns this collection of AdUnitSizes.
 *  Format: `networks/{network_code}`
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of AdUnitSizes to return. The service may
 *  return fewer than this value. If unspecified, at most 50 ad unit sizes will
 *  be returned. The maximum value is 1000; values above 1000 will be coerced
 *  to 1000.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListAdUnitSizes` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListAdUnitSizes` must
 *  match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Expression to filter the response.
 *  See syntax details at
 *  https://developers.google.com/ad-manager/api/beta/filters
 */
// const filter = 'abc123'
/**
 *  Optional. Expression to specify sorting order.
 *  See syntax details at
 *  https://developers.google.com/ad-manager/api/beta/filters#order
 */
// const orderBy = 'abc123'
/**
 *  Optional. Number of individual resources to skip while paginating.
 */
// const skip = 1234

// Imports the Admanager library
const {AdUnitServiceClient} = require('@google-ads/admanager').v1;

// Instantiates a client
const admanagerClient = new AdUnitServiceClient();

async function callListAdUnitSizes() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = admanagerClient.listAdUnitSizesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListAdUnitSizes();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ads-admanager/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Ad_unit_service.get_ad_unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js,packages/google-ads-admanager/samples/README.md) |
| Ad_unit_service.list_ad_unit_sizes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js,packages/google-ads-admanager/samples/README.md) |
| Ad_unit_service.list_ad_units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js,packages/google-ads-admanager/samples/README.md) |
| Company_service.get_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js,packages/google-ads-admanager/samples/README.md) |
| Company_service.list_companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js,packages/google-ads-admanager/samples/README.md) |
| Custom_field_service.get_custom_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js,packages/google-ads-admanager/samples/README.md) |
| Custom_field_service.list_custom_fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js,packages/google-ads-admanager/samples/README.md) |
| Custom_targeting_key_service.get_custom_targeting_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js,packages/google-ads-admanager/samples/README.md) |
| Custom_targeting_key_service.list_custom_targeting_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js,packages/google-ads-admanager/samples/README.md) |
| Custom_targeting_value_service.get_custom_targeting_value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js,packages/google-ads-admanager/samples/README.md) |
| Custom_targeting_value_service.list_custom_targeting_values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.batch_create_entity_signals_mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.batch_update_entity_signals_mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.create_entity_signals_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.get_entity_signals_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.list_entity_signals_mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js,packages/google-ads-admanager/samples/README.md) |
| Entity_signals_mapping_service.update_entity_signals_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js,packages/google-ads-admanager/samples/README.md) |
| Network_service.get_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js,packages/google-ads-admanager/samples/README.md) |
| Network_service.list_networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js,packages/google-ads-admanager/samples/README.md) |
| Order_service.get_order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js,packages/google-ads-admanager/samples/README.md) |
| Order_service.list_orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js,packages/google-ads-admanager/samples/README.md) |
| Placement_service.get_placement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js,packages/google-ads-admanager/samples/README.md) |
| Placement_service.list_placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.create_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.fetch_report_result_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.get_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.list_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.run_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js,packages/google-ads-admanager/samples/README.md) |
| Report_service.update_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js,packages/google-ads-admanager/samples/README.md) |
| Role_service.get_role | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js,packages/google-ads-admanager/samples/README.md) |
| Role_service.list_roles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js,packages/google-ads-admanager/samples/README.md) |
| Taxonomy_category_service.get_taxonomy_category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js,packages/google-ads-admanager/samples/README.md) |
| Taxonomy_category_service.list_taxonomy_categories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js,packages/google-ads-admanager/samples/README.md) |
| User_service.get_user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js,packages/google-ads-admanager/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/quickstart.js,packages/google-ads-admanager/samples/README.md) |



The [Google Ad Manager API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-ads/admanager@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/admanager/latest
[product-docs]: https://developers.google.com/ad-manager/api/beta
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=admanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
