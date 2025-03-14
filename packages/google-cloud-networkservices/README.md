[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Network Services API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-networkservices)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/networkservices.svg)](https://www.npmjs.org/package/@google-cloud/networkservices)




Network Services API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-networkservices/CHANGELOG.md).

* [Network Services API Node.js Client API Reference][client-docs]
* [Network Services API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-networkservices](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-networkservices)

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
1.  [Enable the Network Services API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/networkservices
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
 *  Required. The project and location from which the EndpointPolicies should be
 *  listed, specified in the format `projects/* /locations/global`.
 */
// const parent = 'abc123'
/**
 *  Maximum number of EndpointPolicies to return per call.
 */
// const pageSize = 1234
/**
 *  The value returned by the last `ListEndpointPoliciesResponse`
 *  Indicates that this is a continuation of a prior
 *  `ListEndpointPolicies` call, and that the system should return the
 *  next page of data.
 */
// const pageToken = 'abc123'

// Imports the Networkservices library
const {NetworkServicesClient} =
  require('@google-cloud/networkservices').v1beta1;

// Instantiates a client
const networkservicesClient = new NetworkServicesClient();

async function callListEndpointPolicies() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await networkservicesClient.listEndpointPoliciesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListEndpointPolicies();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-networkservices/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Dep_service.create_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.create_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.delete_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.delete_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.get_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.get_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.list_lb_route_extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.list_lb_traffic_extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.update_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.update_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_grpc_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_http_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_service_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_tcp_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_tls_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_grpc_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_http_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_service_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_tcp_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_tls_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_grpc_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_http_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_service_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_tcp_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_tls_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_endpoint_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_gateways | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_grpc_routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_http_routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_meshes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_service_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_tcp_routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_tls_routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_grpc_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_http_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_tcp_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_tls_route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.create_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.create_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.delete_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.delete_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.get_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.get_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.list_lb_route_extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.list_lb_traffic_extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.update_lb_route_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Dep_service.update_lb_traffic_extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.create_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.delete_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.get_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.list_endpoint_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js,packages/google-cloud-networkservices/samples/README.md) |
| Network_services.update_endpoint_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js,packages/google-cloud-networkservices/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-networkservices/samples/quickstart.js,packages/google-cloud-networkservices/samples/README.md) |



The [Network Services API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/networkservices@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/networkservices/latest
[product-docs]: cloud.google.com/media-cdn/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=networkservices.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
