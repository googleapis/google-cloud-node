[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Ad Manager API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Ad_break_service.create_ad_break](#ad_break_service.create_ad_break)
  * [Ad_break_service.delete_ad_break](#ad_break_service.delete_ad_break)
  * [Ad_break_service.get_ad_break](#ad_break_service.get_ad_break)
  * [Ad_break_service.list_ad_breaks](#ad_break_service.list_ad_breaks)
  * [Ad_break_service.update_ad_break](#ad_break_service.update_ad_break)
  * [Ad_unit_service.get_ad_unit](#ad_unit_service.get_ad_unit)
  * [Ad_unit_service.list_ad_unit_sizes](#ad_unit_service.list_ad_unit_sizes)
  * [Ad_unit_service.list_ad_units](#ad_unit_service.list_ad_units)
  * [Bandwidth_group_service.get_bandwidth_group](#bandwidth_group_service.get_bandwidth_group)
  * [Bandwidth_group_service.list_bandwidth_groups](#bandwidth_group_service.list_bandwidth_groups)
  * [Company_service.get_company](#company_service.get_company)
  * [Company_service.list_companies](#company_service.list_companies)
  * [Custom_field_service.get_custom_field](#custom_field_service.get_custom_field)
  * [Custom_field_service.list_custom_fields](#custom_field_service.list_custom_fields)
  * [Custom_targeting_key_service.get_custom_targeting_key](#custom_targeting_key_service.get_custom_targeting_key)
  * [Custom_targeting_key_service.list_custom_targeting_keys](#custom_targeting_key_service.list_custom_targeting_keys)
  * [Custom_targeting_value_service.get_custom_targeting_value](#custom_targeting_value_service.get_custom_targeting_value)
  * [Custom_targeting_value_service.list_custom_targeting_values](#custom_targeting_value_service.list_custom_targeting_values)
  * [Device_category_service.get_device_category](#device_category_service.get_device_category)
  * [Device_category_service.list_device_categories](#device_category_service.list_device_categories)
  * [Entity_signals_mapping_service.batch_create_entity_signals_mappings](#entity_signals_mapping_service.batch_create_entity_signals_mappings)
  * [Entity_signals_mapping_service.batch_update_entity_signals_mappings](#entity_signals_mapping_service.batch_update_entity_signals_mappings)
  * [Entity_signals_mapping_service.create_entity_signals_mapping](#entity_signals_mapping_service.create_entity_signals_mapping)
  * [Entity_signals_mapping_service.get_entity_signals_mapping](#entity_signals_mapping_service.get_entity_signals_mapping)
  * [Entity_signals_mapping_service.list_entity_signals_mappings](#entity_signals_mapping_service.list_entity_signals_mappings)
  * [Entity_signals_mapping_service.update_entity_signals_mapping](#entity_signals_mapping_service.update_entity_signals_mapping)
  * [Geo_target_service.get_geo_target](#geo_target_service.get_geo_target)
  * [Geo_target_service.list_geo_targets](#geo_target_service.list_geo_targets)
  * [Network_service.get_network](#network_service.get_network)
  * [Network_service.list_networks](#network_service.list_networks)
  * [Operating_system_service.get_operating_system](#operating_system_service.get_operating_system)
  * [Operating_system_service.list_operating_systems](#operating_system_service.list_operating_systems)
  * [Operating_system_version_service.get_operating_system_version](#operating_system_version_service.get_operating_system_version)
  * [Operating_system_version_service.list_operating_system_versions](#operating_system_version_service.list_operating_system_versions)
  * [Order_service.get_order](#order_service.get_order)
  * [Order_service.list_orders](#order_service.list_orders)
  * [Placement_service.get_placement](#placement_service.get_placement)
  * [Placement_service.list_placements](#placement_service.list_placements)
  * [Private_auction_deal_service.create_private_auction_deal](#private_auction_deal_service.create_private_auction_deal)
  * [Private_auction_deal_service.get_private_auction_deal](#private_auction_deal_service.get_private_auction_deal)
  * [Private_auction_deal_service.list_private_auction_deals](#private_auction_deal_service.list_private_auction_deals)
  * [Private_auction_deal_service.update_private_auction_deal](#private_auction_deal_service.update_private_auction_deal)
  * [Private_auction_service.create_private_auction](#private_auction_service.create_private_auction)
  * [Private_auction_service.get_private_auction](#private_auction_service.get_private_auction)
  * [Private_auction_service.list_private_auctions](#private_auction_service.list_private_auctions)
  * [Private_auction_service.update_private_auction](#private_auction_service.update_private_auction)
  * [Programmatic_buyer_service.get_programmatic_buyer](#programmatic_buyer_service.get_programmatic_buyer)
  * [Programmatic_buyer_service.list_programmatic_buyers](#programmatic_buyer_service.list_programmatic_buyers)
  * [Report_service.create_report](#report_service.create_report)
  * [Report_service.fetch_report_result_rows](#report_service.fetch_report_result_rows)
  * [Report_service.get_report](#report_service.get_report)
  * [Report_service.list_reports](#report_service.list_reports)
  * [Report_service.run_report](#report_service.run_report)
  * [Report_service.update_report](#report_service.update_report)
  * [Role_service.get_role](#role_service.get_role)
  * [Role_service.list_roles](#role_service.list_roles)
  * [Taxonomy_category_service.get_taxonomy_category](#taxonomy_category_service.get_taxonomy_category)
  * [Taxonomy_category_service.list_taxonomy_categories](#taxonomy_category_service.list_taxonomy_categories)
  * [User_service.get_user](#user_service.get_user)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Ad_break_service.create_ad_break

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.create_ad_break.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_break_service.create_ad_break.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_break_service.create_ad_break.js`


-----




### Ad_break_service.delete_ad_break

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.delete_ad_break.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_break_service.delete_ad_break.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_break_service.delete_ad_break.js`


-----




### Ad_break_service.get_ad_break

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.get_ad_break.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_break_service.get_ad_break.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_break_service.get_ad_break.js`


-----




### Ad_break_service.list_ad_breaks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.list_ad_breaks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_break_service.list_ad_breaks.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_break_service.list_ad_breaks.js`


-----




### Ad_break_service.update_ad_break

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_break_service.update_ad_break.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_break_service.update_ad_break.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_break_service.update_ad_break.js`


-----




### Ad_unit_service.get_ad_unit

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_unit_service.get_ad_unit.js`


-----




### Ad_unit_service.list_ad_unit_sizes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_unit_sizes.js`


-----




### Ad_unit_service.list_ad_units

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/ad_unit_service.list_ad_units.js`


-----




### Bandwidth_group_service.get_bandwidth_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.get_bandwidth_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.get_bandwidth_group.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.get_bandwidth_group.js`


-----




### Bandwidth_group_service.list_bandwidth_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.list_bandwidth_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.list_bandwidth_groups.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/bandwidth_group_service.list_bandwidth_groups.js`


-----




### Company_service.get_company

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/company_service.get_company.js`


-----




### Company_service.list_companies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/company_service.list_companies.js`


-----




### Custom_field_service.get_custom_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_field_service.get_custom_field.js`


-----




### Custom_field_service.list_custom_fields

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_field_service.list_custom_fields.js`


-----




### Custom_targeting_key_service.get_custom_targeting_key

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.get_custom_targeting_key.js`


-----




### Custom_targeting_key_service.list_custom_targeting_keys

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_targeting_key_service.list_custom_targeting_keys.js`


-----




### Custom_targeting_value_service.get_custom_targeting_value

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.get_custom_targeting_value.js`


-----




### Custom_targeting_value_service.list_custom_targeting_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/custom_targeting_value_service.list_custom_targeting_values.js`


-----




### Device_category_service.get_device_category

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_category_service.get_device_category.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/device_category_service.get_device_category.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/device_category_service.get_device_category.js`


-----




### Device_category_service.list_device_categories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/device_category_service.list_device_categories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/device_category_service.list_device_categories.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/device_category_service.list_device_categories.js`


-----




### Entity_signals_mapping_service.batch_create_entity_signals_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_create_entity_signals_mappings.js`


-----




### Entity_signals_mapping_service.batch_update_entity_signals_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.batch_update_entity_signals_mappings.js`


-----




### Entity_signals_mapping_service.create_entity_signals_mapping

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.create_entity_signals_mapping.js`


-----




### Entity_signals_mapping_service.get_entity_signals_mapping

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.get_entity_signals_mapping.js`


-----




### Entity_signals_mapping_service.list_entity_signals_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.list_entity_signals_mappings.js`


-----




### Entity_signals_mapping_service.update_entity_signals_mapping

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/entity_signals_mapping_service.update_entity_signals_mapping.js`


-----




### Geo_target_service.get_geo_target

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/geo_target_service.get_geo_target.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/geo_target_service.get_geo_target.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/geo_target_service.get_geo_target.js`


-----




### Geo_target_service.list_geo_targets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/geo_target_service.list_geo_targets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/geo_target_service.list_geo_targets.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/geo_target_service.list_geo_targets.js`


-----




### Network_service.get_network

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/network_service.get_network.js`


-----




### Network_service.list_networks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/network_service.list_networks.js`


-----




### Operating_system_service.get_operating_system

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_service.get_operating_system.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/operating_system_service.get_operating_system.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/operating_system_service.get_operating_system.js`


-----




### Operating_system_service.list_operating_systems

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_service.list_operating_systems.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/operating_system_service.list_operating_systems.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/operating_system_service.list_operating_systems.js`


-----




### Operating_system_version_service.get_operating_system_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.get_operating_system_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.get_operating_system_version.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.get_operating_system_version.js`


-----




### Operating_system_version_service.list_operating_system_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.list_operating_system_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.list_operating_system_versions.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/operating_system_version_service.list_operating_system_versions.js`


-----




### Order_service.get_order

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/order_service.get_order.js`


-----




### Order_service.list_orders

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/order_service.list_orders.js`


-----




### Placement_service.get_placement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/placement_service.get_placement.js`


-----




### Placement_service.list_placements

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/placement_service.list_placements.js`


-----




### Private_auction_deal_service.create_private_auction_deal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.create_private_auction_deal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.create_private_auction_deal.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.create_private_auction_deal.js`


-----




### Private_auction_deal_service.get_private_auction_deal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.get_private_auction_deal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.get_private_auction_deal.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.get_private_auction_deal.js`


-----




### Private_auction_deal_service.list_private_auction_deals

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.list_private_auction_deals.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.list_private_auction_deals.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.list_private_auction_deals.js`


-----




### Private_auction_deal_service.update_private_auction_deal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.update_private_auction_deal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.update_private_auction_deal.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_deal_service.update_private_auction_deal.js`


-----




### Private_auction_service.create_private_auction

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.create_private_auction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_service.create_private_auction.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_service.create_private_auction.js`


-----




### Private_auction_service.get_private_auction

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.get_private_auction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_service.get_private_auction.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_service.get_private_auction.js`


-----




### Private_auction_service.list_private_auctions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.list_private_auctions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_service.list_private_auctions.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_service.list_private_auctions.js`


-----




### Private_auction_service.update_private_auction

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/private_auction_service.update_private_auction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/private_auction_service.update_private_auction.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/private_auction_service.update_private_auction.js`


-----




### Programmatic_buyer_service.get_programmatic_buyer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.get_programmatic_buyer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.get_programmatic_buyer.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.get_programmatic_buyer.js`


-----




### Programmatic_buyer_service.list_programmatic_buyers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.list_programmatic_buyers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.list_programmatic_buyers.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/programmatic_buyer_service.list_programmatic_buyers.js`


-----




### Report_service.create_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.create_report.js`


-----




### Report_service.fetch_report_result_rows

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.fetch_report_result_rows.js`


-----




### Report_service.get_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.get_report.js`


-----




### Report_service.list_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.list_reports.js`


-----




### Report_service.run_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.run_report.js`


-----




### Report_service.update_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/report_service.update_report.js`


-----




### Role_service.get_role

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/role_service.get_role.js`


-----




### Role_service.list_roles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/role_service.list_roles.js`


-----




### Taxonomy_category_service.get_taxonomy_category

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.get_taxonomy_category.js`


-----




### Taxonomy_category_service.list_taxonomy_categories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/taxonomy_category_service.list_taxonomy_categories.js`


-----




### User_service.get_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/generated/v1/user_service.get_user.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ads-admanager/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ads-admanager/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-ads-admanager/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://developers.google.com/ad-manager/api/beta
