# Changelog

## [0.11.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.10.0...networkservices-v0.11.0) (2025-07-28)


### ⚠ BREAKING CHANGES

* Correct resource reference type for `parent` field in `data_chat_service.proto`
* Remove field `restricted` within encryption enforcement config.

### Features

* A new field `semantic_search` is added to `message.google.cloud.dataplex.v1.SearchEntriesRequest` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add backdate duration ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum `DeliverInfo.GoogleServiceType` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum `Status` to message `InstanceInfo` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum `VpcFlowLogsConfig.CrossProjectMetadata` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum `VpcFlowLogsConfig.TargetResourceState` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum value `AbortInfo.Cause.GOOGLE_MANAGED_SERVICE_AMBIGUOUS_ENDPOINT` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum value `RouteInfo.NextHopType.SECURE_WEB_PROXY_GATEWAY` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add enum values `NO_ROUTE_FROM_EXTERNAL_IPV6_SOURCE_TO_PRIVATE_IPV6_ADDRESS`, `TRAFFIC_FROM_HYBRID_ENDPOINT_TO_INTERNET_DISALLOWED`, `NO_MATCHING_NAT64_GATEWAY`, `LOAD_BALANCER_BACKEND_IP_VERSION_MISMATCH`, and `NO_KNOWN_ROUTE_FROM_NCC_NETWORK_TO_DESTINATION` to `DropInfo.Cause` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add field `google_service_type` to message `DeliverInfo` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add field `policy_priority` to message `NetworkInfo` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add field `running` to message `InstanceInfo` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add field `service_uri` to message `Endpoint.CloudRunRevisionEndpoint` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add fields `cross_project_metadata`, `target_resource_state`, `network`, and `subnet` to message `VpcFlowLogsConfig` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add http additional_bindings ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add isolation support to prevent cross-region overflow by adding a new field "isolation_config" to message "ServiceLbPolicy" ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add message `Endpoint.SingleEdgeResponse` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add new field `restriction_mode` for encryption enforcement config in message Bucket ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add RDN sequence ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add rpc `VpcFlowLogsService.QueryOrgVpcFlowLogsConfigs` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add safebrowsing proto defs ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add service `OrganizationVpcFlowLogsService` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Add User Defined Access URLs ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Adds tbs_certificate_digest to CertificateDescription ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Enable organization-level support for VPC Flow Logs ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Update Compute Engine v1 API to revision 20250626 ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Update Compute Engine v1beta API to revision 20250626 ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Update libraries and clients for Managed Kafka ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))


### Bug Fixes

* Correct resource reference type for `parent` field in `data_chat_service.proto` ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Pagination response for Compute Subnetworks.ListUsable (39952d9) ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))
* Remove field `restricted` within encryption enforcement config. ([7e3d10b](https://github.com/googleapis/google-cloud-node/commit/7e3d10b075bb9b7c8f9e88a47e77b6d55a80bf31))

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.9.0...networkservices-v0.10.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [networkservices] Add support for WasmPlugin resource in NetworkServices API ([#6445](https://github.com/googleapis/google-cloud-node/issues/6445)) ([01b415a](https://github.com/googleapis/google-cloud-node/commit/01b415aa8a3673d8655c1b062c72e7ef727b59ec))
* [networkservices] update NetworkServices protos ([#6407](https://github.com/googleapis/google-cloud-node/issues/6407)) ([7063c0f](https://github.com/googleapis/google-cloud-node/commit/7063c0fb7d79ed0a45f7ed413cba334d034a3df6))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.8.1...networkservices-v0.9.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6301](https://github.com/googleapis/google-cloud-node/issues/6301)) ([42754a7](https://github.com/googleapis/google-cloud-node/commit/42754a72b34a01d201341428b4a358ff781b0612))

## [0.8.1](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.8.0...networkservices-v0.8.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6187](https://github.com/googleapis/google-cloud-node/issues/6187)) ([b33692d](https://github.com/googleapis/google-cloud-node/commit/b33692d64bd42b99f37d0f919f2b0c06a673ab7f))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.7.1...networkservices-v0.8.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.7.1](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.7.0...networkservices-v0.7.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.6.0...networkservices-v0.7.0) (2024-06-03)


### Features

* [networkservices] A new field `metadata` is added to message `.google.cloud.networkservices.v1.LbTrafficExtension` ([#5414](https://github.com/googleapis/google-cloud-node/issues/5414)) ([035a727](https://github.com/googleapis/google-cloud-node/commit/035a7272b13ee4a44778c62d58e1aaf01924267b))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.5.0...networkservices-v0.6.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.4.0...networkservices-v0.5.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.3.1...networkservices-v0.4.0) (2024-03-26)


### Features

* [networkservices] publish DEP proto ([#5170](https://github.com/googleapis/google-cloud-node/issues/5170)) ([4c0690f](https://github.com/googleapis/google-cloud-node/commit/4c0690fc833c115159b83192d0ae72356a629dd8))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.3.0...networkservices-v0.3.1) (2024-02-27)


### Bug Fixes

* [networkservices] Add client library version to headers ([#5070](https://github.com/googleapis/google-cloud-node/issues/5070)) ([5e386b6](https://github.com/googleapis/google-cloud-node/commit/5e386b6ec6ce8301f7563106da94852661cf1af6))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.2.1...networkservices-v0.3.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.2.0...networkservices-v0.2.1) (2024-02-07)


### Bug Fixes

* [networkservices] remove service resource reference annotation ([48d3918](https://github.com/googleapis/google-cloud-node/commit/48d39189f57fd8a86051da696ae715bbf855d4ff))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/networkservices-v0.1.0...networkservices-v0.2.0) (2023-10-18)


### Features

* [networkservices] publish DEP proto ([#4721](https://github.com/googleapis/google-cloud-node/issues/4721)) ([8840211](https://github.com/googleapis/google-cloud-node/commit/884021190e490434fa232458350b9a9d2f3a6e96))

## 0.1.0 (2023-09-14)


### Features

* Add initial files for google.cloud.networkservices.v1 ([#4638](https://github.com/googleapis/google-cloud-node/issues/4638)) ([c01dd83](https://github.com/googleapis/google-cloud-node/commit/c01dd83a6b89c069eb16ffcb79d21b2b8e684278))
