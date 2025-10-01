[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Analytics Admin API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/admin.svg)](https://www.npmjs.org/package/@google-cloud/admin)

Google Analytics Admin API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Google Analytics Admin API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/admin/latest)


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
1.  [Enable the Google Analytics Admin API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/admin
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| acknowledge user data collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.acknowledge_user_data_collection.js) |
| approve display video360 advertiser link proposal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.approve_display_video360_advertiser_link_proposal.js) |
| archive audience | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_audience.js) |
| archive custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_dimension.js) |
| archive custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_metric.js) |
| batch create access bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_create_access_bindings.js) |
| batch delete access bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_delete_access_bindings.js) |
| batch get access bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_get_access_bindings.js) |
| batch update access bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_update_access_bindings.js) |
| cancel display video360 advertiser link proposal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.cancel_display_video360_advertiser_link_proposal.js) |
| create access binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_access_binding.js) |
| create ad sense link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_ad_sense_link.js) |
| create audience | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_audience.js) |
| create big query link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_big_query_link.js) |
| create calculated metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_calculated_metric.js) |
| create channel group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_channel_group.js) |
| create conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_conversion_event.js) |
| create custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_dimension.js) |
| create custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_metric.js) |
| create data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_data_stream.js) |
| create display video360 advertiser link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link.js) |
| create display video360 advertiser link proposal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link_proposal.js) |
| create event create rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_event_create_rule.js) |
| create event edit rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_event_edit_rule.js) |
| create expanded data set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_expanded_data_set.js) |
| create firebase link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_firebase_link.js) |
| create google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_google_ads_link.js) |
| create key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_key_event.js) |
| create measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_measurement_protocol_secret.js) |
| create property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_property.js) |
| create reporting data annotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_reporting_data_annotation.js) |
| create rollup property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_rollup_property.js) |
| create rollup property source link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_rollup_property_source_link.js) |
| create s k ad network conversion value schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_s_k_ad_network_conversion_value_schema.js) |
| create search ads360 link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_search_ads360_link.js) |
| create subproperty event filter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_subproperty_event_filter.js) |
| delete access binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_access_binding.js) |
| delete account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_account.js) |
| delete ad sense link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_ad_sense_link.js) |
| delete big query link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_big_query_link.js) |
| delete calculated metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_calculated_metric.js) |
| delete channel group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_channel_group.js) |
| delete conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_conversion_event.js) |
| delete data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_data_stream.js) |
| delete display video360 advertiser link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link.js) |
| delete display video360 advertiser link proposal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link_proposal.js) |
| delete event create rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_event_create_rule.js) |
| delete event edit rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_event_edit_rule.js) |
| delete expanded data set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_expanded_data_set.js) |
| delete firebase link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_firebase_link.js) |
| delete google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_google_ads_link.js) |
| delete key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_key_event.js) |
| delete measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_measurement_protocol_secret.js) |
| delete property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_property.js) |
| delete reporting data annotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_reporting_data_annotation.js) |
| delete rollup property source link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_rollup_property_source_link.js) |
| delete s k ad network conversion value schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_s_k_ad_network_conversion_value_schema.js) |
| delete search ads360 link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_search_ads360_link.js) |
| delete subproperty event filter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_subproperty_event_filter.js) |
| get access binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_access_binding.js) |
| get account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_account.js) |
| get ad sense link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_ad_sense_link.js) |
| get attribution settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_attribution_settings.js) |
| get audience | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_audience.js) |
| get big query link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_big_query_link.js) |
| get calculated metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_calculated_metric.js) |
| get channel group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_channel_group.js) |
| get conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_conversion_event.js) |
| get custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_dimension.js) |
| get custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_metric.js) |
| get data redaction settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_redaction_settings.js) |
| get data retention settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_retention_settings.js) |
| get data sharing settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_sharing_settings.js) |
| get data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_stream.js) |
| get display video360 advertiser link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link.js) |
| get display video360 advertiser link proposal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link_proposal.js) |
| get enhanced measurement settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_enhanced_measurement_settings.js) |
| get event create rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_event_create_rule.js) |
| get event edit rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_event_edit_rule.js) |
| get expanded data set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_expanded_data_set.js) |
| get global site tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_global_site_tag.js) |
| get google signals settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_google_signals_settings.js) |
| get key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_key_event.js) |
| get measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_measurement_protocol_secret.js) |
| get property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_property.js) |
| get reporting data annotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_reporting_data_annotation.js) |
| get reporting identity settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_reporting_identity_settings.js) |
| get rollup property source link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_rollup_property_source_link.js) |
| get s k ad network conversion value schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_s_k_ad_network_conversion_value_schema.js) |
| get search ads360 link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_search_ads360_link.js) |
| get subproperty event filter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_subproperty_event_filter.js) |
| get subproperty sync config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_subproperty_sync_config.js) |
| list access bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_access_bindings.js) |
| list account summaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_account_summaries.js) |
| list accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_accounts.js) |
| list ad sense links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_ad_sense_links.js) |
| list audiences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_audiences.js) |
| list big query links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_big_query_links.js) |
| list calculated metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_calculated_metrics.js) |
| list channel groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_channel_groups.js) |
| list conversion events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_conversion_events.js) |
| list custom dimensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_dimensions.js) |
| list custom metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_metrics.js) |
| list data streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_data_streams.js) |
| list display video360 advertiser link proposals | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_link_proposals.js) |
| list display video360 advertiser links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_links.js) |
| list event create rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_event_create_rules.js) |
| list event edit rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_event_edit_rules.js) |
| list expanded data sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_expanded_data_sets.js) |
| list firebase links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_firebase_links.js) |
| list google ads links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_google_ads_links.js) |
| list key events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_key_events.js) |
| list measurement protocol secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_measurement_protocol_secrets.js) |
| list properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_properties.js) |
| list reporting data annotations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_reporting_data_annotations.js) |
| list rollup property source links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_rollup_property_source_links.js) |
| list s k ad network conversion value schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_s_k_ad_network_conversion_value_schemas.js) |
| list search ads360 links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_search_ads360_links.js) |
| list subproperty event filters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_subproperty_event_filters.js) |
| list subproperty sync configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_subproperty_sync_configs.js) |
| provision account ticket | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.provision_account_ticket.js) |
| provision subproperty | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.provision_subproperty.js) |
| reorder event edit rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.reorder_event_edit_rules.js) |
| run access report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.run_access_report.js) |
| search change history events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.search_change_history_events.js) |
| submit user deletion | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.submit_user_deletion.js) |
| update access binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_access_binding.js) |
| update account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_account.js) |
| update attribution settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_attribution_settings.js) |
| update audience | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_audience.js) |
| update big query link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_big_query_link.js) |
| update calculated metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_calculated_metric.js) |
| update channel group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_channel_group.js) |
| update conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_conversion_event.js) |
| update custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_dimension.js) |
| update custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_metric.js) |
| update data redaction settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_redaction_settings.js) |
| update data retention settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_retention_settings.js) |
| update data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_stream.js) |
| update display video360 advertiser link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_display_video360_advertiser_link.js) |
| update enhanced measurement settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_enhanced_measurement_settings.js) |
| update event create rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_event_create_rule.js) |
| update event edit rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_event_edit_rule.js) |
| update expanded data set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_expanded_data_set.js) |
| update google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_ads_link.js) |
| update google signals settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_signals_settings.js) |
| update key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_key_event.js) |
| update measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_measurement_protocol_secret.js) |
| update property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_property.js) |
| update reporting data annotation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_reporting_data_annotation.js) |
| update s k ad network conversion value schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_s_k_ad_network_conversion_value_schema.js) |
| update search ads360 link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_search_ads360_link.js) |
| update subproperty event filter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_subproperty_event_filter.js) |
| update subproperty sync config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_subproperty_sync_config.js) |
| analytics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/snippet_metadata_google.analytics.admin.v1alpha.json) |
| acknowledge user data collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.acknowledge_user_data_collection.js) |
| archive custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_dimension.js) |
| archive custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_metric.js) |
| create conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_conversion_event.js) |
| create custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_dimension.js) |
| create custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_metric.js) |
| create data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_data_stream.js) |
| create firebase link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_firebase_link.js) |
| create google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_google_ads_link.js) |
| create key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_key_event.js) |
| create measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_measurement_protocol_secret.js) |
| create property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_property.js) |
| delete account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_account.js) |
| delete conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_conversion_event.js) |
| delete data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_data_stream.js) |
| delete firebase link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_firebase_link.js) |
| delete google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_google_ads_link.js) |
| delete key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_key_event.js) |
| delete measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_measurement_protocol_secret.js) |
| delete property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_property.js) |
| get account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_account.js) |
| get conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_conversion_event.js) |
| get custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_dimension.js) |
| get custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_metric.js) |
| get data retention settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_retention_settings.js) |
| get data sharing settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_sharing_settings.js) |
| get data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_stream.js) |
| get key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_key_event.js) |
| get measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_measurement_protocol_secret.js) |
| get property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_property.js) |
| list account summaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_account_summaries.js) |
| list accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_accounts.js) |
| list conversion events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_conversion_events.js) |
| list custom dimensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_dimensions.js) |
| list custom metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_metrics.js) |
| list data streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_data_streams.js) |
| list firebase links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_firebase_links.js) |
| list google ads links | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_google_ads_links.js) |
| list key events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_key_events.js) |
| list measurement protocol secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_measurement_protocol_secrets.js) |
| list properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_properties.js) |
| provision account ticket | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.provision_account_ticket.js) |
| run access report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.run_access_report.js) |
| search change history events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.search_change_history_events.js) |
| update account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_account.js) |
| update conversion event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_conversion_event.js) |
| update custom dimension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_dimension.js) |
| update custom metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_metric.js) |
| update data retention settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_retention_settings.js) |
| update data stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_stream.js) |
| update google ads link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_google_ads_link.js) |
| update key event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_key_event.js) |
| update measurement protocol secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_measurement_protocol_secret.js) |
| update property | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_property.js) |
| analytics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/snippet_metadata_google.analytics.admin.v1beta.json) |


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
For example, `npm install @google-cloud/admin@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=analyticsadmin.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin
