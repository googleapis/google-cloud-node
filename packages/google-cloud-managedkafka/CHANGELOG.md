# Changelog

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.7.0...managedkafka-v0.8.0) (2025-07-28)


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

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.6.0...managedkafka-v0.7.0) (2025-07-09)


### Features

* [managedkafka] Add Managed Kafka Schema Registry API ([#6453](https://github.com/googleapis/google-cloud-node/issues/6453)) ([824b286](https://github.com/googleapis/google-cloud-node/commit/824b286c3c1bd4e051e1e1bf796d2b3d3714b99c))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6421](https://github.com/googleapis/google-cloud-node/issues/6421)) ([0cba45c](https://github.com/googleapis/google-cloud-node/commit/0cba45c3abc98d4f1ffdf75da3610e6e52267737))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.5.0...managedkafka-v0.6.0) (2025-06-03)


### Features

* [managedkafka] add Managed Kafka ACL API ([#6372](https://github.com/googleapis/google-cloud-node/issues/6372)) ([0e789ba](https://github.com/googleapis/google-cloud-node/commit/0e789bac8803a06904ec0870f3a8c35826c1f161))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.4.0...managedkafka-v0.5.0) (2025-03-19)


### Features

* [managedkafka] add Managed Kafka Connect API ([#6176](https://github.com/googleapis/google-cloud-node/issues/6176)) ([63b6187](https://github.com/googleapis/google-cloud-node/commit/63b6187b833648213cff66adc29bebb6e3beb1e5))


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.3.1...managedkafka-v0.4.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [managedkafka] add request/response debug logging to gapics, update templates to gax 5 and node 18 ([8b6b9bc](https://github.com/googleapis/google-cloud-node/commit/8b6b9bcc04dbf1b5891a55e3bda0db28f6ecde93))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.3.0...managedkafka-v0.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.2.0...managedkafka-v0.3.0) (2025-01-11)


### Features

* [managedkafka] adds new resource_definition option ([#5928](https://github.com/googleapis/google-cloud-node/issues/5928)) ([45fd1c9](https://github.com/googleapis/google-cloud-node/commit/45fd1c9c4f638aed431d7da19e9ebc8d91528333))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/managedkafka-v0.1.0...managedkafka-v0.2.0) (2024-12-18)


### Features

* [managedkafka] A new field `satisfies_pzi` is added to message `.google.cloud.managedkafka.v1.Cluster` ([#5857](https://github.com/googleapis/google-cloud-node/issues/5857)) ([59c05a0](https://github.com/googleapis/google-cloud-node/commit/59c05a038b42b0b01ec15131c3f5dee585757b83))

## 0.1.0 (2024-06-12)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.cloud.managedkafka.v1 ([#5395](https://github.com/googleapis/google-cloud-node/issues/5395)) ([1c4766c](https://github.com/googleapis/google-cloud-node/commit/1c4766cff1e12857cca5632541ee18d854cd9f9a))
