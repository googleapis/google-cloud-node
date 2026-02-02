[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Ad Manager API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-ads/admanager.svg)](https://www.npmjs.org/package/@google-ads/admanager)

Google Ad Manager API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Google Ad Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/admanager/latest)
* [Google Ad Manager API Documentation](https://developers.google.com/ad-manager/api/beta)

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
1.  [Enable the Google Ad Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-ads/admanager
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create ad break | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.create_ad_break.js) |
| delete ad break | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.delete_ad_break.js) |
| get ad break | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.get_ad_break.js) |
| list ad breaks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.list_ad_breaks.js) |
| update ad break | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.update_ad_break.js) |
| batch allow ad review center ads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_review_center_ad_service.batch_allow_ad_review_center_ads.js) |
| batch block ad review center ads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_review_center_ad_service.batch_block_ad_review_center_ads.js) |
| search ad review center ads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_review_center_ad_service.search_ad_review_center_ads.js) |
| batch activate ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.batch_activate_ad_units.js) |
| batch archive ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.batch_archive_ad_units.js) |
| batch create ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.batch_create_ad_units.js) |
| batch deactivate ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.batch_deactivate_ad_units.js) |
| batch update ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.batch_update_ad_units.js) |
| create ad unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.create_ad_unit.js) |
| get ad unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js) |
| list ad unit sizes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js) |
| list ad units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js) |
| update ad unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.update_ad_unit.js) |
| get application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/application_service.get_application.js) |
| list applications | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/application_service.list_applications.js) |
| get audience segment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/audience_segment_service.get_audience_segment.js) |
| list audience segments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/audience_segment_service.list_audience_segments.js) |
| get bandwidth group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.get_bandwidth_group.js) |
| list bandwidth groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.list_bandwidth_groups.js) |
| get browser language | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/browser_language_service.get_browser_language.js) |
| list browser languages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/browser_language_service.list_browser_languages.js) |
| get browser | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/browser_service.get_browser.js) |
| list browsers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/browser_service.list_browsers.js) |
| get cms metadata key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/cms_metadata_key_service.get_cms_metadata_key.js) |
| list cms metadata keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/cms_metadata_key_service.list_cms_metadata_keys.js) |
| get cms metadata value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/cms_metadata_value_service.get_cms_metadata_value.js) |
| list cms metadata values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/cms_metadata_value_service.list_cms_metadata_values.js) |
| get company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js) |
| list companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js) |
| batch create contacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.batch_create_contacts.js) |
| batch update contacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.batch_update_contacts.js) |
| create contact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.create_contact.js) |
| get contact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.get_contact.js) |
| list contacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.list_contacts.js) |
| update contact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/contact_service.update_contact.js) |
| get content bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_bundle_service.get_content_bundle.js) |
| list content bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_bundle_service.list_content_bundles.js) |
| get content label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_label_service.get_content_label.js) |
| list content labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_label_service.list_content_labels.js) |
| get content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_service.get_content.js) |
| list content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/content_service.list_content.js) |
| get creative template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/creative_template_service.get_creative_template.js) |
| list creative templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/creative_template_service.list_creative_templates.js) |
| batch activate custom fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.batch_activate_custom_fields.js) |
| batch create custom fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.batch_create_custom_fields.js) |
| batch deactivate custom fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.batch_deactivate_custom_fields.js) |
| batch update custom fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.batch_update_custom_fields.js) |
| create custom field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.create_custom_field.js) |
| get custom field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js) |
| list custom fields | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js) |
| update custom field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.update_custom_field.js) |
| batch activate custom targeting keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.batch_activate_custom_targeting_keys.js) |
| batch create custom targeting keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.batch_create_custom_targeting_keys.js) |
| batch deactivate custom targeting keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.batch_deactivate_custom_targeting_keys.js) |
| batch update custom targeting keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.batch_update_custom_targeting_keys.js) |
| create custom targeting key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.create_custom_targeting_key.js) |
| get custom targeting key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js) |
| list custom targeting keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js) |
| update custom targeting key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.update_custom_targeting_key.js) |
| get custom targeting value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js) |
| list custom targeting values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js) |
| get device capability | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_capability_service.get_device_capability.js) |
| list device capabilities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_capability_service.list_device_capabilities.js) |
| get device category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_category_service.get_device_category.js) |
| list device categories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_category_service.list_device_categories.js) |
| get device manufacturer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_manufacturer_service.get_device_manufacturer.js) |
| list device manufacturers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_manufacturer_service.list_device_manufacturers.js) |
| batch create entity signals mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js) |
| batch update entity signals mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js) |
| create entity signals mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js) |
| get entity signals mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js) |
| list entity signals mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js) |
| update entity signals mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js) |
| get geo target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/geo_target_service.get_geo_target.js) |
| list geo targets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/geo_target_service.list_geo_targets.js) |
| get line item | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/line_item_service.get_line_item.js) |
| list line items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/line_item_service.list_line_items.js) |
| get mobile carrier | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_carrier_service.get_mobile_carrier.js) |
| list mobile carriers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_carrier_service.list_mobile_carriers.js) |
| get mobile device | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_device_service.get_mobile_device.js) |
| list mobile devices | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_device_service.list_mobile_devices.js) |
| get mobile device submodel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_device_submodel_service.get_mobile_device_submodel.js) |
| list mobile device submodels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/mobile_device_submodel_service.list_mobile_device_submodels.js) |
| get network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js) |
| list networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js) |
| get operating system | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_service.get_operating_system.js) |
| list operating systems | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_service.list_operating_systems.js) |
| get operating system version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.get_operating_system_version.js) |
| list operating system versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.list_operating_system_versions.js) |
| get order | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js) |
| list orders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js) |
| batch activate placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.batch_activate_placements.js) |
| batch archive placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.batch_archive_placements.js) |
| batch create placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.batch_create_placements.js) |
| batch deactivate placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.batch_deactivate_placements.js) |
| batch update placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.batch_update_placements.js) |
| create placement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.create_placement.js) |
| get placement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js) |
| list placements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js) |
| update placement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.update_placement.js) |
| create private auction deal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.create_private_auction_deal.js) |
| get private auction deal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.get_private_auction_deal.js) |
| list private auction deals | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.list_private_auction_deals.js) |
| update private auction deal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.update_private_auction_deal.js) |
| create private auction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.create_private_auction.js) |
| get private auction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.get_private_auction.js) |
| list private auctions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.list_private_auctions.js) |
| update private auction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.update_private_auction.js) |
| get programmatic buyer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.get_programmatic_buyer.js) |
| list programmatic buyers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.list_programmatic_buyers.js) |
| create report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js) |
| fetch report result rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js) |
| get report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js) |
| list reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js) |
| run report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js) |
| update report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js) |
| get role | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js) |
| list roles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js) |
| batch create sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.batch_create_sites.js) |
| batch deactivate sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.batch_deactivate_sites.js) |
| batch submit sites for approval | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.batch_submit_sites_for_approval.js) |
| batch update sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.batch_update_sites.js) |
| create site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.create_site.js) |
| get site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.get_site.js) |
| list sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.list_sites.js) |
| update site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/site_service.update_site.js) |
| ads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/snippet_metadata_google.ads.admanager.v1.json) |
| get taxonomy category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js) |
| list taxonomy categories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js) |
| batch activate teams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.batch_activate_teams.js) |
| batch create teams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.batch_create_teams.js) |
| batch deactivate teams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.batch_deactivate_teams.js) |
| batch update teams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.batch_update_teams.js) |
| create team | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.create_team.js) |
| get team | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.get_team.js) |
| list teams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.list_teams.js) |
| update team | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/team_service.update_team.js) |
| get user | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=admanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager
