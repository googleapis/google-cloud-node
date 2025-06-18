[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Network Services API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Dep_service.create_lb_route_extension](#dep_service.create_lb_route_extension)
  * [Dep_service.create_lb_traffic_extension](#dep_service.create_lb_traffic_extension)
  * [Dep_service.delete_lb_route_extension](#dep_service.delete_lb_route_extension)
  * [Dep_service.delete_lb_traffic_extension](#dep_service.delete_lb_traffic_extension)
  * [Dep_service.get_lb_route_extension](#dep_service.get_lb_route_extension)
  * [Dep_service.get_lb_traffic_extension](#dep_service.get_lb_traffic_extension)
  * [Dep_service.list_lb_route_extensions](#dep_service.list_lb_route_extensions)
  * [Dep_service.list_lb_traffic_extensions](#dep_service.list_lb_traffic_extensions)
  * [Dep_service.update_lb_route_extension](#dep_service.update_lb_route_extension)
  * [Dep_service.update_lb_traffic_extension](#dep_service.update_lb_traffic_extension)
  * [Network_services.create_endpoint_policy](#network_services.create_endpoint_policy)
  * [Network_services.create_gateway](#network_services.create_gateway)
  * [Network_services.create_grpc_route](#network_services.create_grpc_route)
  * [Network_services.create_http_route](#network_services.create_http_route)
  * [Network_services.create_mesh](#network_services.create_mesh)
  * [Network_services.create_service_binding](#network_services.create_service_binding)
  * [Network_services.create_service_lb_policy](#network_services.create_service_lb_policy)
  * [Network_services.create_tcp_route](#network_services.create_tcp_route)
  * [Network_services.create_tls_route](#network_services.create_tls_route)
  * [Network_services.delete_endpoint_policy](#network_services.delete_endpoint_policy)
  * [Network_services.delete_gateway](#network_services.delete_gateway)
  * [Network_services.delete_grpc_route](#network_services.delete_grpc_route)
  * [Network_services.delete_http_route](#network_services.delete_http_route)
  * [Network_services.delete_mesh](#network_services.delete_mesh)
  * [Network_services.delete_service_binding](#network_services.delete_service_binding)
  * [Network_services.delete_service_lb_policy](#network_services.delete_service_lb_policy)
  * [Network_services.delete_tcp_route](#network_services.delete_tcp_route)
  * [Network_services.delete_tls_route](#network_services.delete_tls_route)
  * [Network_services.get_endpoint_policy](#network_services.get_endpoint_policy)
  * [Network_services.get_gateway](#network_services.get_gateway)
  * [Network_services.get_gateway_route_view](#network_services.get_gateway_route_view)
  * [Network_services.get_grpc_route](#network_services.get_grpc_route)
  * [Network_services.get_http_route](#network_services.get_http_route)
  * [Network_services.get_mesh](#network_services.get_mesh)
  * [Network_services.get_mesh_route_view](#network_services.get_mesh_route_view)
  * [Network_services.get_service_binding](#network_services.get_service_binding)
  * [Network_services.get_service_lb_policy](#network_services.get_service_lb_policy)
  * [Network_services.get_tcp_route](#network_services.get_tcp_route)
  * [Network_services.get_tls_route](#network_services.get_tls_route)
  * [Network_services.list_endpoint_policies](#network_services.list_endpoint_policies)
  * [Network_services.list_gateway_route_views](#network_services.list_gateway_route_views)
  * [Network_services.list_gateways](#network_services.list_gateways)
  * [Network_services.list_grpc_routes](#network_services.list_grpc_routes)
  * [Network_services.list_http_routes](#network_services.list_http_routes)
  * [Network_services.list_mesh_route_views](#network_services.list_mesh_route_views)
  * [Network_services.list_meshes](#network_services.list_meshes)
  * [Network_services.list_service_bindings](#network_services.list_service_bindings)
  * [Network_services.list_service_lb_policies](#network_services.list_service_lb_policies)
  * [Network_services.list_tcp_routes](#network_services.list_tcp_routes)
  * [Network_services.list_tls_routes](#network_services.list_tls_routes)
  * [Network_services.update_endpoint_policy](#network_services.update_endpoint_policy)
  * [Network_services.update_gateway](#network_services.update_gateway)
  * [Network_services.update_grpc_route](#network_services.update_grpc_route)
  * [Network_services.update_http_route](#network_services.update_http_route)
  * [Network_services.update_mesh](#network_services.update_mesh)
  * [Network_services.update_service_binding](#network_services.update_service_binding)
  * [Network_services.update_service_lb_policy](#network_services.update_service_lb_policy)
  * [Network_services.update_tcp_route](#network_services.update_tcp_route)
  * [Network_services.update_tls_route](#network_services.update_tls_route)
  * [Dep_service.create_lb_route_extension](#dep_service.create_lb_route_extension)
  * [Dep_service.create_lb_traffic_extension](#dep_service.create_lb_traffic_extension)
  * [Dep_service.delete_lb_route_extension](#dep_service.delete_lb_route_extension)
  * [Dep_service.delete_lb_traffic_extension](#dep_service.delete_lb_traffic_extension)
  * [Dep_service.get_lb_route_extension](#dep_service.get_lb_route_extension)
  * [Dep_service.get_lb_traffic_extension](#dep_service.get_lb_traffic_extension)
  * [Dep_service.list_lb_route_extensions](#dep_service.list_lb_route_extensions)
  * [Dep_service.list_lb_traffic_extensions](#dep_service.list_lb_traffic_extensions)
  * [Dep_service.update_lb_route_extension](#dep_service.update_lb_route_extension)
  * [Dep_service.update_lb_traffic_extension](#dep_service.update_lb_traffic_extension)
  * [Network_services.create_endpoint_policy](#network_services.create_endpoint_policy)
  * [Network_services.delete_endpoint_policy](#network_services.delete_endpoint_policy)
  * [Network_services.get_endpoint_policy](#network_services.get_endpoint_policy)
  * [Network_services.list_endpoint_policies](#network_services.list_endpoint_policies)
  * [Network_services.update_endpoint_policy](#network_services.update_endpoint_policy)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Dep_service.create_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js`


-----




### Dep_service.create_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js`


-----




### Dep_service.delete_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js`


-----




### Dep_service.delete_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js`


-----




### Dep_service.get_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js`


-----




### Dep_service.get_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js`


-----




### Dep_service.list_lb_route_extensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js`


-----




### Dep_service.list_lb_traffic_extensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js`


-----




### Dep_service.update_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js`


-----




### Dep_service.update_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js`


-----




### Network_services.create_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js`


-----




### Network_services.create_gateway

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js`


-----




### Network_services.create_grpc_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js`


-----




### Network_services.create_http_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js`


-----




### Network_services.create_mesh

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js`


-----




### Network_services.create_service_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js`


-----




### Network_services.create_service_lb_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_lb_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_lb_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_lb_policy.js`


-----




### Network_services.create_tcp_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js`


-----




### Network_services.create_tls_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js`


-----




### Network_services.delete_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js`


-----




### Network_services.delete_gateway

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js`


-----




### Network_services.delete_grpc_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js`


-----




### Network_services.delete_http_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js`


-----




### Network_services.delete_mesh

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js`


-----




### Network_services.delete_service_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js`


-----




### Network_services.delete_service_lb_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_lb_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_lb_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_lb_policy.js`


-----




### Network_services.delete_tcp_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js`


-----




### Network_services.delete_tls_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js`


-----




### Network_services.get_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js`


-----




### Network_services.get_gateway

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js`


-----




### Network_services.get_gateway_route_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway_route_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway_route_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway_route_view.js`


-----




### Network_services.get_grpc_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js`


-----




### Network_services.get_http_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js`


-----




### Network_services.get_mesh

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js`


-----




### Network_services.get_mesh_route_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh_route_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh_route_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh_route_view.js`


-----




### Network_services.get_service_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js`


-----




### Network_services.get_service_lb_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_lb_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_lb_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_lb_policy.js`


-----




### Network_services.get_tcp_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js`


-----




### Network_services.get_tls_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js`


-----




### Network_services.list_endpoint_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js`


-----




### Network_services.list_gateway_route_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateway_route_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateway_route_views.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateway_route_views.js`


-----




### Network_services.list_gateways

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js`


-----




### Network_services.list_grpc_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js`


-----




### Network_services.list_http_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js`


-----




### Network_services.list_mesh_route_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_mesh_route_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_mesh_route_views.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_mesh_route_views.js`


-----




### Network_services.list_meshes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js`


-----




### Network_services.list_service_bindings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js`


-----




### Network_services.list_service_lb_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_lb_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_lb_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_lb_policies.js`


-----




### Network_services.list_tcp_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js`


-----




### Network_services.list_tls_routes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js`


-----




### Network_services.update_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js`


-----




### Network_services.update_gateway

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js`


-----




### Network_services.update_grpc_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js`


-----




### Network_services.update_http_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js`


-----




### Network_services.update_mesh

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js`


-----




### Network_services.update_service_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_binding.js`


-----




### Network_services.update_service_lb_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_lb_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_lb_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_lb_policy.js`


-----




### Network_services.update_tcp_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js`


-----




### Network_services.update_tls_route

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js`


-----




### Dep_service.create_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js`


-----




### Dep_service.create_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js`


-----




### Dep_service.delete_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js`


-----




### Dep_service.delete_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js`


-----




### Dep_service.get_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js`


-----




### Dep_service.get_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js`


-----




### Dep_service.list_lb_route_extensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js`


-----




### Dep_service.list_lb_traffic_extensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js`


-----




### Dep_service.update_lb_route_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js`


-----




### Dep_service.update_lb_traffic_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js`


-----




### Network_services.create_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js`


-----




### Network_services.delete_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js`


-----




### Network_services.get_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js`


-----




### Network_services.list_endpoint_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js`


-----




### Network_services.update_endpoint_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-networkservices/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: cloud.google.com/media-cdn/
