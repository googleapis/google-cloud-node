[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Analytics Admin: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Analytics_admin_service.acknowledge_user_data_collection](#analytics_admin_service.acknowledge_user_data_collection)
  * [Analytics_admin_service.approve_display_video360_advertiser_link_proposal](#analytics_admin_service.approve_display_video360_advertiser_link_proposal)
  * [Analytics_admin_service.archive_audience](#analytics_admin_service.archive_audience)
  * [Analytics_admin_service.archive_custom_dimension](#analytics_admin_service.archive_custom_dimension)
  * [Analytics_admin_service.archive_custom_metric](#analytics_admin_service.archive_custom_metric)
  * [Analytics_admin_service.audit_user_links](#analytics_admin_service.audit_user_links)
  * [Analytics_admin_service.batch_create_user_links](#analytics_admin_service.batch_create_user_links)
  * [Analytics_admin_service.batch_delete_user_links](#analytics_admin_service.batch_delete_user_links)
  * [Analytics_admin_service.batch_get_user_links](#analytics_admin_service.batch_get_user_links)
  * [Analytics_admin_service.batch_update_user_links](#analytics_admin_service.batch_update_user_links)
  * [Analytics_admin_service.cancel_display_video360_advertiser_link_proposal](#analytics_admin_service.cancel_display_video360_advertiser_link_proposal)
  * [Analytics_admin_service.create_audience](#analytics_admin_service.create_audience)
  * [Analytics_admin_service.create_conversion_event](#analytics_admin_service.create_conversion_event)
  * [Analytics_admin_service.create_custom_dimension](#analytics_admin_service.create_custom_dimension)
  * [Analytics_admin_service.create_custom_metric](#analytics_admin_service.create_custom_metric)
  * [Analytics_admin_service.create_data_stream](#analytics_admin_service.create_data_stream)
  * [Analytics_admin_service.create_display_video360_advertiser_link](#analytics_admin_service.create_display_video360_advertiser_link)
  * [Analytics_admin_service.create_display_video360_advertiser_link_proposal](#analytics_admin_service.create_display_video360_advertiser_link_proposal)
  * [Analytics_admin_service.create_firebase_link](#analytics_admin_service.create_firebase_link)
  * [Analytics_admin_service.create_google_ads_link](#analytics_admin_service.create_google_ads_link)
  * [Analytics_admin_service.create_measurement_protocol_secret](#analytics_admin_service.create_measurement_protocol_secret)
  * [Analytics_admin_service.create_property](#analytics_admin_service.create_property)
  * [Analytics_admin_service.create_user_link](#analytics_admin_service.create_user_link)
  * [Analytics_admin_service.create_web_data_stream](#analytics_admin_service.create_web_data_stream)
  * [Analytics_admin_service.delete_account](#analytics_admin_service.delete_account)
  * [Analytics_admin_service.delete_android_app_data_stream](#analytics_admin_service.delete_android_app_data_stream)
  * [Analytics_admin_service.delete_conversion_event](#analytics_admin_service.delete_conversion_event)
  * [Analytics_admin_service.delete_data_stream](#analytics_admin_service.delete_data_stream)
  * [Analytics_admin_service.delete_display_video360_advertiser_link](#analytics_admin_service.delete_display_video360_advertiser_link)
  * [Analytics_admin_service.delete_display_video360_advertiser_link_proposal](#analytics_admin_service.delete_display_video360_advertiser_link_proposal)
  * [Analytics_admin_service.delete_firebase_link](#analytics_admin_service.delete_firebase_link)
  * [Analytics_admin_service.delete_google_ads_link](#analytics_admin_service.delete_google_ads_link)
  * [Analytics_admin_service.delete_ios_app_data_stream](#analytics_admin_service.delete_ios_app_data_stream)
  * [Analytics_admin_service.delete_measurement_protocol_secret](#analytics_admin_service.delete_measurement_protocol_secret)
  * [Analytics_admin_service.delete_property](#analytics_admin_service.delete_property)
  * [Analytics_admin_service.delete_user_link](#analytics_admin_service.delete_user_link)
  * [Analytics_admin_service.delete_web_data_stream](#analytics_admin_service.delete_web_data_stream)
  * [Analytics_admin_service.get_account](#analytics_admin_service.get_account)
  * [Analytics_admin_service.get_android_app_data_stream](#analytics_admin_service.get_android_app_data_stream)
  * [Analytics_admin_service.get_attribution_settings](#analytics_admin_service.get_attribution_settings)
  * [Analytics_admin_service.get_audience](#analytics_admin_service.get_audience)
  * [Analytics_admin_service.get_conversion_event](#analytics_admin_service.get_conversion_event)
  * [Analytics_admin_service.get_custom_dimension](#analytics_admin_service.get_custom_dimension)
  * [Analytics_admin_service.get_custom_metric](#analytics_admin_service.get_custom_metric)
  * [Analytics_admin_service.get_data_retention_settings](#analytics_admin_service.get_data_retention_settings)
  * [Analytics_admin_service.get_data_sharing_settings](#analytics_admin_service.get_data_sharing_settings)
  * [Analytics_admin_service.get_data_stream](#analytics_admin_service.get_data_stream)
  * [Analytics_admin_service.get_display_video360_advertiser_link](#analytics_admin_service.get_display_video360_advertiser_link)
  * [Analytics_admin_service.get_display_video360_advertiser_link_proposal](#analytics_admin_service.get_display_video360_advertiser_link_proposal)
  * [Analytics_admin_service.get_enhanced_measurement_settings](#analytics_admin_service.get_enhanced_measurement_settings)
  * [Analytics_admin_service.get_global_site_tag](#analytics_admin_service.get_global_site_tag)
  * [Analytics_admin_service.get_google_signals_settings](#analytics_admin_service.get_google_signals_settings)
  * [Analytics_admin_service.get_ios_app_data_stream](#analytics_admin_service.get_ios_app_data_stream)
  * [Analytics_admin_service.get_measurement_protocol_secret](#analytics_admin_service.get_measurement_protocol_secret)
  * [Analytics_admin_service.get_property](#analytics_admin_service.get_property)
  * [Analytics_admin_service.get_user_link](#analytics_admin_service.get_user_link)
  * [Analytics_admin_service.get_web_data_stream](#analytics_admin_service.get_web_data_stream)
  * [Analytics_admin_service.list_account_summaries](#analytics_admin_service.list_account_summaries)
  * [Analytics_admin_service.list_accounts](#analytics_admin_service.list_accounts)
  * [Analytics_admin_service.list_android_app_data_streams](#analytics_admin_service.list_android_app_data_streams)
  * [Analytics_admin_service.list_audiences](#analytics_admin_service.list_audiences)
  * [Analytics_admin_service.list_conversion_events](#analytics_admin_service.list_conversion_events)
  * [Analytics_admin_service.list_custom_dimensions](#analytics_admin_service.list_custom_dimensions)
  * [Analytics_admin_service.list_custom_metrics](#analytics_admin_service.list_custom_metrics)
  * [Analytics_admin_service.list_data_streams](#analytics_admin_service.list_data_streams)
  * [Analytics_admin_service.list_display_video360_advertiser_link_proposals](#analytics_admin_service.list_display_video360_advertiser_link_proposals)
  * [Analytics_admin_service.list_display_video360_advertiser_links](#analytics_admin_service.list_display_video360_advertiser_links)
  * [Analytics_admin_service.list_firebase_links](#analytics_admin_service.list_firebase_links)
  * [Analytics_admin_service.list_google_ads_links](#analytics_admin_service.list_google_ads_links)
  * [Analytics_admin_service.list_ios_app_data_streams](#analytics_admin_service.list_ios_app_data_streams)
  * [Analytics_admin_service.list_measurement_protocol_secrets](#analytics_admin_service.list_measurement_protocol_secrets)
  * [Analytics_admin_service.list_properties](#analytics_admin_service.list_properties)
  * [Analytics_admin_service.list_user_links](#analytics_admin_service.list_user_links)
  * [Analytics_admin_service.list_web_data_streams](#analytics_admin_service.list_web_data_streams)
  * [Analytics_admin_service.provision_account_ticket](#analytics_admin_service.provision_account_ticket)
  * [Analytics_admin_service.run_access_report](#analytics_admin_service.run_access_report)
  * [Analytics_admin_service.search_change_history_events](#analytics_admin_service.search_change_history_events)
  * [Analytics_admin_service.update_account](#analytics_admin_service.update_account)
  * [Analytics_admin_service.update_android_app_data_stream](#analytics_admin_service.update_android_app_data_stream)
  * [Analytics_admin_service.update_attribution_settings](#analytics_admin_service.update_attribution_settings)
  * [Analytics_admin_service.update_audience](#analytics_admin_service.update_audience)
  * [Analytics_admin_service.update_custom_dimension](#analytics_admin_service.update_custom_dimension)
  * [Analytics_admin_service.update_custom_metric](#analytics_admin_service.update_custom_metric)
  * [Analytics_admin_service.update_data_retention_settings](#analytics_admin_service.update_data_retention_settings)
  * [Analytics_admin_service.update_data_stream](#analytics_admin_service.update_data_stream)
  * [Analytics_admin_service.update_display_video360_advertiser_link](#analytics_admin_service.update_display_video360_advertiser_link)
  * [Analytics_admin_service.update_enhanced_measurement_settings](#analytics_admin_service.update_enhanced_measurement_settings)
  * [Analytics_admin_service.update_google_ads_link](#analytics_admin_service.update_google_ads_link)
  * [Analytics_admin_service.update_google_signals_settings](#analytics_admin_service.update_google_signals_settings)
  * [Analytics_admin_service.update_ios_app_data_stream](#analytics_admin_service.update_ios_app_data_stream)
  * [Analytics_admin_service.update_measurement_protocol_secret](#analytics_admin_service.update_measurement_protocol_secret)
  * [Analytics_admin_service.update_property](#analytics_admin_service.update_property)
  * [Analytics_admin_service.update_user_link](#analytics_admin_service.update_user_link)
  * [Analytics_admin_service.update_web_data_stream](#analytics_admin_service.update_web_data_stream)
  * [Analytics_admin_service.acknowledge_user_data_collection](#analytics_admin_service.acknowledge_user_data_collection)
  * [Analytics_admin_service.archive_custom_dimension](#analytics_admin_service.archive_custom_dimension)
  * [Analytics_admin_service.archive_custom_metric](#analytics_admin_service.archive_custom_metric)
  * [Analytics_admin_service.create_conversion_event](#analytics_admin_service.create_conversion_event)
  * [Analytics_admin_service.create_custom_dimension](#analytics_admin_service.create_custom_dimension)
  * [Analytics_admin_service.create_custom_metric](#analytics_admin_service.create_custom_metric)
  * [Analytics_admin_service.create_data_stream](#analytics_admin_service.create_data_stream)
  * [Analytics_admin_service.create_firebase_link](#analytics_admin_service.create_firebase_link)
  * [Analytics_admin_service.create_google_ads_link](#analytics_admin_service.create_google_ads_link)
  * [Analytics_admin_service.create_measurement_protocol_secret](#analytics_admin_service.create_measurement_protocol_secret)
  * [Analytics_admin_service.create_property](#analytics_admin_service.create_property)
  * [Analytics_admin_service.delete_account](#analytics_admin_service.delete_account)
  * [Analytics_admin_service.delete_conversion_event](#analytics_admin_service.delete_conversion_event)
  * [Analytics_admin_service.delete_data_stream](#analytics_admin_service.delete_data_stream)
  * [Analytics_admin_service.delete_firebase_link](#analytics_admin_service.delete_firebase_link)
  * [Analytics_admin_service.delete_google_ads_link](#analytics_admin_service.delete_google_ads_link)
  * [Analytics_admin_service.delete_measurement_protocol_secret](#analytics_admin_service.delete_measurement_protocol_secret)
  * [Analytics_admin_service.delete_property](#analytics_admin_service.delete_property)
  * [Analytics_admin_service.get_account](#analytics_admin_service.get_account)
  * [Analytics_admin_service.get_conversion_event](#analytics_admin_service.get_conversion_event)
  * [Analytics_admin_service.get_custom_dimension](#analytics_admin_service.get_custom_dimension)
  * [Analytics_admin_service.get_custom_metric](#analytics_admin_service.get_custom_metric)
  * [Analytics_admin_service.get_data_retention_settings](#analytics_admin_service.get_data_retention_settings)
  * [Analytics_admin_service.get_data_sharing_settings](#analytics_admin_service.get_data_sharing_settings)
  * [Analytics_admin_service.get_data_stream](#analytics_admin_service.get_data_stream)
  * [Analytics_admin_service.get_measurement_protocol_secret](#analytics_admin_service.get_measurement_protocol_secret)
  * [Analytics_admin_service.get_property](#analytics_admin_service.get_property)
  * [Analytics_admin_service.list_account_summaries](#analytics_admin_service.list_account_summaries)
  * [Analytics_admin_service.list_accounts](#analytics_admin_service.list_accounts)
  * [Analytics_admin_service.list_conversion_events](#analytics_admin_service.list_conversion_events)
  * [Analytics_admin_service.list_custom_dimensions](#analytics_admin_service.list_custom_dimensions)
  * [Analytics_admin_service.list_custom_metrics](#analytics_admin_service.list_custom_metrics)
  * [Analytics_admin_service.list_data_streams](#analytics_admin_service.list_data_streams)
  * [Analytics_admin_service.list_firebase_links](#analytics_admin_service.list_firebase_links)
  * [Analytics_admin_service.list_google_ads_links](#analytics_admin_service.list_google_ads_links)
  * [Analytics_admin_service.list_measurement_protocol_secrets](#analytics_admin_service.list_measurement_protocol_secrets)
  * [Analytics_admin_service.list_properties](#analytics_admin_service.list_properties)
  * [Analytics_admin_service.provision_account_ticket](#analytics_admin_service.provision_account_ticket)
  * [Analytics_admin_service.search_change_history_events](#analytics_admin_service.search_change_history_events)
  * [Analytics_admin_service.update_account](#analytics_admin_service.update_account)
  * [Analytics_admin_service.update_custom_dimension](#analytics_admin_service.update_custom_dimension)
  * [Analytics_admin_service.update_custom_metric](#analytics_admin_service.update_custom_metric)
  * [Analytics_admin_service.update_data_retention_settings](#analytics_admin_service.update_data_retention_settings)
  * [Analytics_admin_service.update_data_stream](#analytics_admin_service.update_data_stream)
  * [Analytics_admin_service.update_google_ads_link](#analytics_admin_service.update_google_ads_link)
  * [Analytics_admin_service.update_measurement_protocol_secret](#analytics_admin_service.update_measurement_protocol_secret)
  * [Analytics_admin_service.update_property](#analytics_admin_service.update_property)
  * [Quickstart](#quickstart)
  * [Quickstart.test](#quickstart.test)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Analytics_admin_service.acknowledge_user_data_collection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.acknowledge_user_data_collection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.acknowledge_user_data_collection.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.acknowledge_user_data_collection.js`


-----




### Analytics_admin_service.approve_display_video360_advertiser_link_proposal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.approve_display_video360_advertiser_link_proposal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.approve_display_video360_advertiser_link_proposal.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.approve_display_video360_advertiser_link_proposal.js`


-----




### Analytics_admin_service.archive_audience

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_audience.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_audience.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_audience.js`


-----




### Analytics_admin_service.archive_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_dimension.js`


-----




### Analytics_admin_service.archive_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.archive_custom_metric.js`


-----




### Analytics_admin_service.audit_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.audit_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.audit_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.audit_user_links.js`


-----




### Analytics_admin_service.batch_create_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_create_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_create_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_create_user_links.js`


-----




### Analytics_admin_service.batch_delete_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_delete_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_delete_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_delete_user_links.js`


-----




### Analytics_admin_service.batch_get_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_get_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_get_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_get_user_links.js`


-----




### Analytics_admin_service.batch_update_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_update_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_update_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.batch_update_user_links.js`


-----




### Analytics_admin_service.cancel_display_video360_advertiser_link_proposal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.cancel_display_video360_advertiser_link_proposal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.cancel_display_video360_advertiser_link_proposal.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.cancel_display_video360_advertiser_link_proposal.js`


-----




### Analytics_admin_service.create_audience

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_audience.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_audience.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_audience.js`


-----




### Analytics_admin_service.create_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_conversion_event.js`


-----




### Analytics_admin_service.create_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_dimension.js`


-----




### Analytics_admin_service.create_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_custom_metric.js`


-----




### Analytics_admin_service.create_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_data_stream.js`


-----




### Analytics_admin_service.create_display_video360_advertiser_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link.js`


-----




### Analytics_admin_service.create_display_video360_advertiser_link_proposal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link_proposal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link_proposal.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_display_video360_advertiser_link_proposal.js`


-----




### Analytics_admin_service.create_firebase_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_firebase_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_firebase_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_firebase_link.js`


-----




### Analytics_admin_service.create_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_google_ads_link.js`


-----




### Analytics_admin_service.create_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_measurement_protocol_secret.js`


-----




### Analytics_admin_service.create_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_property.js`


-----




### Analytics_admin_service.create_user_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_user_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_user_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_user_link.js`


-----




### Analytics_admin_service.create_web_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_web_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_web_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.create_web_data_stream.js`


-----




### Analytics_admin_service.delete_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_account.js`


-----




### Analytics_admin_service.delete_android_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_android_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_android_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_android_app_data_stream.js`


-----




### Analytics_admin_service.delete_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_conversion_event.js`


-----




### Analytics_admin_service.delete_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_data_stream.js`


-----




### Analytics_admin_service.delete_display_video360_advertiser_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link.js`


-----




### Analytics_admin_service.delete_display_video360_advertiser_link_proposal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link_proposal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link_proposal.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_display_video360_advertiser_link_proposal.js`


-----




### Analytics_admin_service.delete_firebase_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_firebase_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_firebase_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_firebase_link.js`


-----




### Analytics_admin_service.delete_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_google_ads_link.js`


-----




### Analytics_admin_service.delete_ios_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_ios_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_ios_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_ios_app_data_stream.js`


-----




### Analytics_admin_service.delete_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_measurement_protocol_secret.js`


-----




### Analytics_admin_service.delete_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_property.js`


-----




### Analytics_admin_service.delete_user_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_user_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_user_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_user_link.js`


-----




### Analytics_admin_service.delete_web_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_web_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_web_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.delete_web_data_stream.js`


-----




### Analytics_admin_service.get_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_account.js`


-----




### Analytics_admin_service.get_android_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_android_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_android_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_android_app_data_stream.js`


-----




### Analytics_admin_service.get_attribution_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_attribution_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_attribution_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_attribution_settings.js`


-----




### Analytics_admin_service.get_audience

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_audience.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_audience.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_audience.js`


-----




### Analytics_admin_service.get_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_conversion_event.js`


-----




### Analytics_admin_service.get_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_dimension.js`


-----




### Analytics_admin_service.get_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_custom_metric.js`


-----




### Analytics_admin_service.get_data_retention_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_retention_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_retention_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_retention_settings.js`


-----




### Analytics_admin_service.get_data_sharing_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_sharing_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_sharing_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_sharing_settings.js`


-----




### Analytics_admin_service.get_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_data_stream.js`


-----




### Analytics_admin_service.get_display_video360_advertiser_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link.js`


-----




### Analytics_admin_service.get_display_video360_advertiser_link_proposal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link_proposal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link_proposal.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_display_video360_advertiser_link_proposal.js`


-----




### Analytics_admin_service.get_enhanced_measurement_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_enhanced_measurement_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_enhanced_measurement_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_enhanced_measurement_settings.js`


-----




### Analytics_admin_service.get_global_site_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_global_site_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_global_site_tag.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_global_site_tag.js`


-----




### Analytics_admin_service.get_google_signals_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_google_signals_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_google_signals_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_google_signals_settings.js`


-----




### Analytics_admin_service.get_ios_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_ios_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_ios_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_ios_app_data_stream.js`


-----




### Analytics_admin_service.get_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_measurement_protocol_secret.js`


-----




### Analytics_admin_service.get_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_property.js`


-----




### Analytics_admin_service.get_user_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_user_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_user_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_user_link.js`


-----




### Analytics_admin_service.get_web_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_web_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_web_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.get_web_data_stream.js`


-----




### Analytics_admin_service.list_account_summaries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_account_summaries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_account_summaries.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_account_summaries.js`


-----




### Analytics_admin_service.list_accounts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_accounts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_accounts.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_accounts.js`


-----




### Analytics_admin_service.list_android_app_data_streams

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_android_app_data_streams.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_android_app_data_streams.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_android_app_data_streams.js`


-----




### Analytics_admin_service.list_audiences

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_audiences.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_audiences.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_audiences.js`


-----




### Analytics_admin_service.list_conversion_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_conversion_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_conversion_events.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_conversion_events.js`


-----




### Analytics_admin_service.list_custom_dimensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_dimensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_dimensions.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_dimensions.js`


-----




### Analytics_admin_service.list_custom_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_metrics.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_custom_metrics.js`


-----




### Analytics_admin_service.list_data_streams

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_data_streams.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_data_streams.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_data_streams.js`


-----




### Analytics_admin_service.list_display_video360_advertiser_link_proposals

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_link_proposals.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_link_proposals.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_link_proposals.js`


-----




### Analytics_admin_service.list_display_video360_advertiser_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_display_video360_advertiser_links.js`


-----




### Analytics_admin_service.list_firebase_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_firebase_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_firebase_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_firebase_links.js`


-----




### Analytics_admin_service.list_google_ads_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_google_ads_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_google_ads_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_google_ads_links.js`


-----




### Analytics_admin_service.list_ios_app_data_streams

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_ios_app_data_streams.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_ios_app_data_streams.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_ios_app_data_streams.js`


-----




### Analytics_admin_service.list_measurement_protocol_secrets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_measurement_protocol_secrets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_measurement_protocol_secrets.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_measurement_protocol_secrets.js`


-----




### Analytics_admin_service.list_properties

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_properties.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_properties.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_properties.js`


-----




### Analytics_admin_service.list_user_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_user_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_user_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_user_links.js`


-----




### Analytics_admin_service.list_web_data_streams

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_web_data_streams.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_web_data_streams.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.list_web_data_streams.js`


-----




### Analytics_admin_service.provision_account_ticket

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.provision_account_ticket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.provision_account_ticket.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.provision_account_ticket.js`


-----




### Analytics_admin_service.run_access_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.run_access_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.run_access_report.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.run_access_report.js`


-----




### Analytics_admin_service.search_change_history_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.search_change_history_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.search_change_history_events.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.search_change_history_events.js`


-----




### Analytics_admin_service.update_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_account.js`


-----




### Analytics_admin_service.update_android_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_android_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_android_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_android_app_data_stream.js`


-----




### Analytics_admin_service.update_attribution_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_attribution_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_attribution_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_attribution_settings.js`


-----




### Analytics_admin_service.update_audience

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_audience.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_audience.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_audience.js`


-----




### Analytics_admin_service.update_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_dimension.js`


-----




### Analytics_admin_service.update_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_custom_metric.js`


-----




### Analytics_admin_service.update_data_retention_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_retention_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_retention_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_retention_settings.js`


-----




### Analytics_admin_service.update_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_data_stream.js`


-----




### Analytics_admin_service.update_display_video360_advertiser_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_display_video360_advertiser_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_display_video360_advertiser_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_display_video360_advertiser_link.js`


-----




### Analytics_admin_service.update_enhanced_measurement_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_enhanced_measurement_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_enhanced_measurement_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_enhanced_measurement_settings.js`


-----




### Analytics_admin_service.update_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_ads_link.js`


-----




### Analytics_admin_service.update_google_signals_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_signals_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_signals_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_google_signals_settings.js`


-----




### Analytics_admin_service.update_ios_app_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_ios_app_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_ios_app_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_ios_app_data_stream.js`


-----




### Analytics_admin_service.update_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_measurement_protocol_secret.js`


-----




### Analytics_admin_service.update_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_property.js`


-----




### Analytics_admin_service.update_user_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_user_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_user_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_user_link.js`


-----




### Analytics_admin_service.update_web_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_web_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_web_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1alpha/analytics_admin_service.update_web_data_stream.js`


-----




### Analytics_admin_service.acknowledge_user_data_collection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.acknowledge_user_data_collection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.acknowledge_user_data_collection.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.acknowledge_user_data_collection.js`


-----




### Analytics_admin_service.archive_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_dimension.js`


-----




### Analytics_admin_service.archive_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.archive_custom_metric.js`


-----




### Analytics_admin_service.create_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_conversion_event.js`


-----




### Analytics_admin_service.create_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_dimension.js`


-----




### Analytics_admin_service.create_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_custom_metric.js`


-----




### Analytics_admin_service.create_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_data_stream.js`


-----




### Analytics_admin_service.create_firebase_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_firebase_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_firebase_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_firebase_link.js`


-----




### Analytics_admin_service.create_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_google_ads_link.js`


-----




### Analytics_admin_service.create_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_measurement_protocol_secret.js`


-----




### Analytics_admin_service.create_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.create_property.js`


-----




### Analytics_admin_service.delete_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_account.js`


-----




### Analytics_admin_service.delete_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_conversion_event.js`


-----




### Analytics_admin_service.delete_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_data_stream.js`


-----




### Analytics_admin_service.delete_firebase_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_firebase_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_firebase_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_firebase_link.js`


-----




### Analytics_admin_service.delete_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_google_ads_link.js`


-----




### Analytics_admin_service.delete_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_measurement_protocol_secret.js`


-----




### Analytics_admin_service.delete_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.delete_property.js`


-----




### Analytics_admin_service.get_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_account.js`


-----




### Analytics_admin_service.get_conversion_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_conversion_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_conversion_event.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_conversion_event.js`


-----




### Analytics_admin_service.get_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_dimension.js`


-----




### Analytics_admin_service.get_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_custom_metric.js`


-----




### Analytics_admin_service.get_data_retention_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_retention_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_retention_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_retention_settings.js`


-----




### Analytics_admin_service.get_data_sharing_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_sharing_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_sharing_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_sharing_settings.js`


-----




### Analytics_admin_service.get_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_data_stream.js`


-----




### Analytics_admin_service.get_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_measurement_protocol_secret.js`


-----




### Analytics_admin_service.get_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.get_property.js`


-----




### Analytics_admin_service.list_account_summaries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_account_summaries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_account_summaries.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_account_summaries.js`


-----




### Analytics_admin_service.list_accounts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_accounts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_accounts.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_accounts.js`


-----




### Analytics_admin_service.list_conversion_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_conversion_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_conversion_events.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_conversion_events.js`


-----




### Analytics_admin_service.list_custom_dimensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_dimensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_dimensions.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_dimensions.js`


-----




### Analytics_admin_service.list_custom_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_metrics.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_custom_metrics.js`


-----




### Analytics_admin_service.list_data_streams

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_data_streams.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_data_streams.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_data_streams.js`


-----




### Analytics_admin_service.list_firebase_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_firebase_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_firebase_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_firebase_links.js`


-----




### Analytics_admin_service.list_google_ads_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_google_ads_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_google_ads_links.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_google_ads_links.js`


-----




### Analytics_admin_service.list_measurement_protocol_secrets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_measurement_protocol_secrets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_measurement_protocol_secrets.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_measurement_protocol_secrets.js`


-----




### Analytics_admin_service.list_properties

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_properties.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_properties.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.list_properties.js`


-----




### Analytics_admin_service.provision_account_ticket

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.provision_account_ticket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.provision_account_ticket.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.provision_account_ticket.js`


-----




### Analytics_admin_service.search_change_history_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.search_change_history_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.search_change_history_events.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.search_change_history_events.js`


-----




### Analytics_admin_service.update_account

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_account.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_account.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_account.js`


-----




### Analytics_admin_service.update_custom_dimension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_dimension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_dimension.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_dimension.js`


-----




### Analytics_admin_service.update_custom_metric

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_metric.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_metric.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_custom_metric.js`


-----




### Analytics_admin_service.update_data_retention_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_retention_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_retention_settings.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_retention_settings.js`


-----




### Analytics_admin_service.update_data_stream

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_stream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_stream.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_data_stream.js`


-----




### Analytics_admin_service.update_google_ads_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_google_ads_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_google_ads_link.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_google_ads_link.js`


-----




### Analytics_admin_service.update_measurement_protocol_secret

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_measurement_protocol_secret.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_measurement_protocol_secret.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_measurement_protocol_secret.js`


-----




### Analytics_admin_service.update_property

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_property.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_property.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/generated/v1beta/analytics_admin_service.update_property.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/quickstart.js`


-----




### Quickstart.test

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-analytics-admin/samples/test/quickstart.test.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-analytics-admin/samples/test/quickstart.test.js,samples/README.md)

__Usage:__


`node packages/google-analytics-admin/samples/test/quickstart.test.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://developers.google.com/analytics
