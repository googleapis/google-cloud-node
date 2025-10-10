[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Network Services API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/networkservices.svg)](https://www.npmjs.org/package/@google-cloud/networkservices)

Network Services API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Network Services API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/networkservices/latest)
* [Network Services API Documentation](https://cloud.google.com/products/networking)

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
1.  [Enable the Network Services API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/networkservices
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create authz extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_authz_extension.js) |
| create lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_route_extension.js) |
| create lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.create_lb_traffic_extension.js) |
| delete authz extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_authz_extension.js) |
| delete lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_route_extension.js) |
| delete lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.delete_lb_traffic_extension.js) |
| get authz extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_authz_extension.js) |
| get lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_route_extension.js) |
| get lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.get_lb_traffic_extension.js) |
| list authz extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_authz_extensions.js) |
| list lb route extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_route_extensions.js) |
| list lb traffic extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.list_lb_traffic_extensions.js) |
| update authz extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_authz_extension.js) |
| update lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_route_extension.js) |
| update lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/dep_service.update_lb_traffic_extension.js) |
| create endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_endpoint_policy.js) |
| create gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_gateway.js) |
| create grpc route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_grpc_route.js) |
| create http route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_http_route.js) |
| create mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_mesh.js) |
| create service binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_binding.js) |
| create service lb policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_service_lb_policy.js) |
| create tcp route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tcp_route.js) |
| create tls route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_tls_route.js) |
| create wasm plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_wasm_plugin.js) |
| create wasm plugin version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.create_wasm_plugin_version.js) |
| delete endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_endpoint_policy.js) |
| delete gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_gateway.js) |
| delete grpc route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_grpc_route.js) |
| delete http route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_http_route.js) |
| delete mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_mesh.js) |
| delete service binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_binding.js) |
| delete service lb policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_service_lb_policy.js) |
| delete tcp route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tcp_route.js) |
| delete tls route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_tls_route.js) |
| delete wasm plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_wasm_plugin.js) |
| delete wasm plugin version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.delete_wasm_plugin_version.js) |
| get endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_endpoint_policy.js) |
| get gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway.js) |
| get gateway route view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_gateway_route_view.js) |
| get grpc route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_grpc_route.js) |
| get http route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_http_route.js) |
| get mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh.js) |
| get mesh route view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_mesh_route_view.js) |
| get service binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_binding.js) |
| get service lb policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_service_lb_policy.js) |
| get tcp route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tcp_route.js) |
| get tls route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_tls_route.js) |
| get wasm plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_wasm_plugin.js) |
| get wasm plugin version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.get_wasm_plugin_version.js) |
| list endpoint policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_endpoint_policies.js) |
| list gateway route views | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateway_route_views.js) |
| list gateways | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_gateways.js) |
| list grpc routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_grpc_routes.js) |
| list http routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_http_routes.js) |
| list mesh route views | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_mesh_route_views.js) |
| list meshes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_meshes.js) |
| list service bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_bindings.js) |
| list service lb policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_service_lb_policies.js) |
| list tcp routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tcp_routes.js) |
| list tls routes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_tls_routes.js) |
| list wasm plugin versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_wasm_plugin_versions.js) |
| list wasm plugins | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.list_wasm_plugins.js) |
| update endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_endpoint_policy.js) |
| update gateway | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_gateway.js) |
| update grpc route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_grpc_route.js) |
| update http route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_http_route.js) |
| update mesh | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_mesh.js) |
| update service binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_binding.js) |
| update service lb policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_service_lb_policy.js) |
| update tcp route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tcp_route.js) |
| update tls route | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_tls_route.js) |
| update wasm plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/network_services.update_wasm_plugin.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1/snippet_metadata_google.cloud.networkservices.v1.json) |
| create lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_route_extension.js) |
| create lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.create_lb_traffic_extension.js) |
| delete lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_route_extension.js) |
| delete lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.delete_lb_traffic_extension.js) |
| get lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_route_extension.js) |
| get lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.get_lb_traffic_extension.js) |
| list lb route extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_route_extensions.js) |
| list lb traffic extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.list_lb_traffic_extensions.js) |
| update lb route extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_route_extension.js) |
| update lb traffic extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/dep_service.update_lb_traffic_extension.js) |
| create endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.create_endpoint_policy.js) |
| delete endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.delete_endpoint_policy.js) |
| get endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.get_endpoint_policy.js) |
| list endpoint policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.list_endpoint_policies.js) |
| update endpoint policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/network_services.update_endpoint_policy.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples/generated/v1beta1/snippet_metadata_google.cloud.networkservices.v1beta1.json) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=networkservices.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-networkservices
