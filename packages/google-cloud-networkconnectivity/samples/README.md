[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Network Connectivity Center: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cross_network_automation_service.create_service_connection_map](#cross_network_automation_service.create_service_connection_map)
  * [Cross_network_automation_service.create_service_connection_policy](#cross_network_automation_service.create_service_connection_policy)
  * [Cross_network_automation_service.create_service_connection_token](#cross_network_automation_service.create_service_connection_token)
  * [Cross_network_automation_service.delete_service_class](#cross_network_automation_service.delete_service_class)
  * [Cross_network_automation_service.delete_service_connection_map](#cross_network_automation_service.delete_service_connection_map)
  * [Cross_network_automation_service.delete_service_connection_policy](#cross_network_automation_service.delete_service_connection_policy)
  * [Cross_network_automation_service.delete_service_connection_token](#cross_network_automation_service.delete_service_connection_token)
  * [Cross_network_automation_service.get_service_class](#cross_network_automation_service.get_service_class)
  * [Cross_network_automation_service.get_service_connection_map](#cross_network_automation_service.get_service_connection_map)
  * [Cross_network_automation_service.get_service_connection_policy](#cross_network_automation_service.get_service_connection_policy)
  * [Cross_network_automation_service.get_service_connection_token](#cross_network_automation_service.get_service_connection_token)
  * [Cross_network_automation_service.list_service_classes](#cross_network_automation_service.list_service_classes)
  * [Cross_network_automation_service.list_service_connection_maps](#cross_network_automation_service.list_service_connection_maps)
  * [Cross_network_automation_service.list_service_connection_policies](#cross_network_automation_service.list_service_connection_policies)
  * [Cross_network_automation_service.list_service_connection_tokens](#cross_network_automation_service.list_service_connection_tokens)
  * [Cross_network_automation_service.update_service_class](#cross_network_automation_service.update_service_class)
  * [Cross_network_automation_service.update_service_connection_map](#cross_network_automation_service.update_service_connection_map)
  * [Cross_network_automation_service.update_service_connection_policy](#cross_network_automation_service.update_service_connection_policy)
  * [Hub_service.accept_hub_spoke](#hub_service.accept_hub_spoke)
  * [Hub_service.accept_spoke_update](#hub_service.accept_spoke_update)
  * [Hub_service.create_hub](#hub_service.create_hub)
  * [Hub_service.create_spoke](#hub_service.create_spoke)
  * [Hub_service.delete_hub](#hub_service.delete_hub)
  * [Hub_service.delete_spoke](#hub_service.delete_spoke)
  * [Hub_service.get_group](#hub_service.get_group)
  * [Hub_service.get_hub](#hub_service.get_hub)
  * [Hub_service.get_route](#hub_service.get_route)
  * [Hub_service.get_route_table](#hub_service.get_route_table)
  * [Hub_service.get_spoke](#hub_service.get_spoke)
  * [Hub_service.list_groups](#hub_service.list_groups)
  * [Hub_service.list_hub_spokes](#hub_service.list_hub_spokes)
  * [Hub_service.list_hubs](#hub_service.list_hubs)
  * [Hub_service.list_route_tables](#hub_service.list_route_tables)
  * [Hub_service.list_routes](#hub_service.list_routes)
  * [Hub_service.list_spokes](#hub_service.list_spokes)
  * [Hub_service.query_hub_status](#hub_service.query_hub_status)
  * [Hub_service.reject_hub_spoke](#hub_service.reject_hub_spoke)
  * [Hub_service.reject_spoke_update](#hub_service.reject_spoke_update)
  * [Hub_service.update_group](#hub_service.update_group)
  * [Hub_service.update_hub](#hub_service.update_hub)
  * [Hub_service.update_spoke](#hub_service.update_spoke)
  * [Internal_range_service.create_internal_range](#internal_range_service.create_internal_range)
  * [Internal_range_service.delete_internal_range](#internal_range_service.delete_internal_range)
  * [Internal_range_service.get_internal_range](#internal_range_service.get_internal_range)
  * [Internal_range_service.list_internal_ranges](#internal_range_service.list_internal_ranges)
  * [Internal_range_service.update_internal_range](#internal_range_service.update_internal_range)
  * [Policy_based_routing_service.create_policy_based_route](#policy_based_routing_service.create_policy_based_route)
  * [Policy_based_routing_service.delete_policy_based_route](#policy_based_routing_service.delete_policy_based_route)
  * [Policy_based_routing_service.get_policy_based_route](#policy_based_routing_service.get_policy_based_route)
  * [Policy_based_routing_service.list_policy_based_routes](#policy_based_routing_service.list_policy_based_routes)
  * [Hub_service.create_hub](#hub_service.create_hub)
  * [Hub_service.create_spoke](#hub_service.create_spoke)
  * [Hub_service.delete_hub](#hub_service.delete_hub)
  * [Hub_service.delete_spoke](#hub_service.delete_spoke)
  * [Hub_service.get_hub](#hub_service.get_hub)
  * [Hub_service.get_spoke](#hub_service.get_spoke)
  * [Hub_service.list_hubs](#hub_service.list_hubs)
  * [Hub_service.list_spokes](#hub_service.list_spokes)
  * [Hub_service.update_hub](#hub_service.update_hub)
  * [Hub_service.update_spoke](#hub_service.update_spoke)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cross_network_automation_service.create_service_connection_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_map.js`


-----




### Cross_network_automation_service.create_service_connection_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_policy.js`


-----




### Cross_network_automation_service.create_service_connection_token

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_token.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_token.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.create_service_connection_token.js`


-----




### Cross_network_automation_service.delete_service_class

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_class.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_class.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_class.js`


-----




### Cross_network_automation_service.delete_service_connection_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_map.js`


-----




### Cross_network_automation_service.delete_service_connection_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_policy.js`


-----




### Cross_network_automation_service.delete_service_connection_token

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_token.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_token.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.delete_service_connection_token.js`


-----




### Cross_network_automation_service.get_service_class

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_class.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_class.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_class.js`


-----




### Cross_network_automation_service.get_service_connection_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_map.js`


-----




### Cross_network_automation_service.get_service_connection_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_policy.js`


-----




### Cross_network_automation_service.get_service_connection_token

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_token.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_token.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.get_service_connection_token.js`


-----




### Cross_network_automation_service.list_service_classes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_classes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_classes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_classes.js`


-----




### Cross_network_automation_service.list_service_connection_maps

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_maps.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_maps.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_maps.js`


-----




### Cross_network_automation_service.list_service_connection_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_policies.js`


-----




### Cross_network_automation_service.list_service_connection_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.list_service_connection_tokens.js`


-----




### Cross_network_automation_service.update_service_class

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_class.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_class.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_class.js`


-----




### Cross_network_automation_service.update_service_connection_map

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_map.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_map.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_map.js`


-----




### Cross_network_automation_service.update_service_connection_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/cross_network_automation_service.update_service_connection_policy.js`


-----




### Hub_service.accept_hub_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_hub_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_hub_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_hub_spoke.js`


-----




### Hub_service.accept_spoke_update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_spoke_update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_spoke_update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.accept_spoke_update.js`


-----




### Hub_service.create_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_hub.js`


-----




### Hub_service.create_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.create_spoke.js`


-----




### Hub_service.delete_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_hub.js`


-----




### Hub_service.delete_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.delete_spoke.js`


-----




### Hub_service.get_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_group.js`


-----




### Hub_service.get_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_hub.js`


-----




### Hub_service.get_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route.js`


-----




### Hub_service.get_route_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route_table.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_route_table.js`


-----




### Hub_service.get_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.get_spoke.js`


-----




### Hub_service.list_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_groups.js`


-----




### Hub_service.list_hub_spokes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hub_spokes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hub_spokes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hub_spokes.js`


-----




### Hub_service.list_hubs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hubs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hubs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_hubs.js`


-----




### Hub_service.list_route_tables

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_route_tables.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_route_tables.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_route_tables.js`


-----




### Hub_service.list_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_routes.js`


-----




### Hub_service.list_spokes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_spokes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_spokes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.list_spokes.js`


-----




### Hub_service.query_hub_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.query_hub_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.query_hub_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.query_hub_status.js`


-----




### Hub_service.reject_hub_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_hub_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_hub_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_hub_spoke.js`


-----




### Hub_service.reject_spoke_update

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_spoke_update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_spoke_update.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.reject_spoke_update.js`


-----




### Hub_service.update_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_group.js`


-----




### Hub_service.update_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_hub.js`


-----




### Hub_service.update_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/hub_service.update_spoke.js`


-----




### Internal_range_service.create_internal_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.create_internal_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.create_internal_range.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.create_internal_range.js`


-----




### Internal_range_service.delete_internal_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.delete_internal_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.delete_internal_range.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.delete_internal_range.js`


-----




### Internal_range_service.get_internal_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.get_internal_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.get_internal_range.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.get_internal_range.js`


-----




### Internal_range_service.list_internal_ranges

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.list_internal_ranges.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.list_internal_ranges.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.list_internal_ranges.js`


-----




### Internal_range_service.update_internal_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.update_internal_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.update_internal_range.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/internal_range_service.update_internal_range.js`


-----




### Policy_based_routing_service.create_policy_based_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.create_policy_based_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.create_policy_based_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.create_policy_based_route.js`


-----




### Policy_based_routing_service.delete_policy_based_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.delete_policy_based_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.delete_policy_based_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.delete_policy_based_route.js`


-----




### Policy_based_routing_service.get_policy_based_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.get_policy_based_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.get_policy_based_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.get_policy_based_route.js`


-----




### Policy_based_routing_service.list_policy_based_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.list_policy_based_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.list_policy_based_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1/policy_based_routing_service.list_policy_based_routes.js`


-----




### Hub_service.create_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_hub.js`


-----




### Hub_service.create_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.create_spoke.js`


-----




### Hub_service.delete_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_hub.js`


-----




### Hub_service.delete_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.delete_spoke.js`


-----




### Hub_service.get_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_hub.js`


-----




### Hub_service.get_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.get_spoke.js`


-----




### Hub_service.list_hubs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_hubs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_hubs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_hubs.js`


-----




### Hub_service.list_spokes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_spokes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_spokes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.list_spokes.js`


-----




### Hub_service.update_hub

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_hub.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_hub.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_hub.js`


-----




### Hub_service.update_spoke

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_spoke.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_spoke.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/generated/v1alpha1/hub_service.update_spoke.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkconnectivity/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkconnectivity/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkconnectivity/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/network-connectivity/docs
