# Changelog

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.5.1...admanager-v0.6.0) (2026-05-27)


### ⚠ BREAKING CHANGES

* An existing value `DEMAND_SUBCHANNEL_ALL` is removed from enum `Dimension`
* Changed field behavior for an existing field `display_name` in message `.google.ads.admanager.v1.Application`
* Removed UNIFIED_PRICING_RULE_ID dimension
* Removed UNIFIED_PRICING_RULE_NAME dimension
* Remove unused AdManagerError type
* New REQUIRED field `display_name` in message `.google.ads.admanager.v1.Label`
* New REQUIRED field `types` in message `.google.ads.admanager.v1.Label`

### Features

* [admanager] added new API dimension: CREATIVE_SSL_COMPLIANCE_OVERRIDE ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `app_store_display_name` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `app_store_id` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `app_stores` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `application_code` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `approval_status` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `archived` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `developer` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `download_url` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `free` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `platform` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new field `webview_claiming_status` is added to message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `ApplicationApprovalStatusEnum` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `ApplicationPlatformEnum` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `ApplicationStoreEnum` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchArchiveApplicationsRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchArchiveApplicationsResponse` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchCreateApplicationsRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchCreateApplicationsResponse` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchUnarchiveApplicationsRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchUnarchiveApplicationsResponse` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchUpdateApplicationsRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `BatchUpdateApplicationsResponse` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `CreateApplicationRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `UpdateApplicationRequest` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new message `WebviewClaimingStatusEnum` is added ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `BatchArchiveApplications` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `BatchCreateApplications` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `BatchUnarchiveApplications` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `BatchUpdateApplications` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `CreateApplication` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* A new method `UpdateApplication` is added to service `ApplicationService` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Add readonly OAuth scope ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new API dimension: CREATIVE_SSL_SCAN_RESULT ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new PUBLIC dimension: CREATIVE_SSL_COMPLIANCE_OVERRIDE_NAME ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new PUBLIC dimension: CREATIVE_SSL_SCAN_RESULT_NAME ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new PUBLIC dimension: LINE_ITEM_AVERAGE_NUMBER_OF_VIEWERS ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new PUBLIC dimension: TARGETS_CUSTOMER_MATCHING_LIST ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Added new PUBLIC metric: AD_SERVER_ACTIVE_VIEW_REVENUE ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* **child_publisher:** Added child publisher resource. ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* **deals:** Add ProposalLineItem service and messages to the API. ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* **DelegationTypeEnum:** This is referenced for delegation_type in mcm_earnings ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Expose both `get` and `list` methods for RichMediaAdsCompanies to external clients. ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* **mcm_earnings:** Added McmEarnings service ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* New REQUIRED field `display_name` in message `.google.ads.admanager.v1.Label` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* New REQUIRED field `types` in message `.google.ads.admanager.v1.Label` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))


### Bug Fixes

* An existing value `DEMAND_SUBCHANNEL_ALL` is removed from enum `Dimension` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Changed field behavior for an existing field `display_name` in message `.google.ads.admanager.v1.Application` ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Remove unused AdManagerError type ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Removed UNIFIED_PRICING_RULE_ID dimension ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))
* Removed UNIFIED_PRICING_RULE_NAME dimension ([dfd3f1e](https://github.com/googleapis/google-cloud-node/commit/dfd3f1eb39ed1839f4d25729dd6143a97707c87c))

## [0.5.1](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.5.0...admanager-v0.5.1) (2026-05-01)


### Bug Fixes

* Change the copyright year for files in the packages folder ([#8109](https://github.com/googleapis/google-cloud-node/issues/8109)) ([c1a03fe](https://github.com/googleapis/google-cloud-node/commit/c1a03fe604662091be283055c7d34052c64d6334))
* Do not publish the protos to npm ([#8079](https://github.com/googleapis/google-cloud-node/issues/8079)) ([816216b](https://github.com/googleapis/google-cloud-node/commit/816216bbf51afb25935cd930a0d97ed6efd6b91e))
* Revert "fix: Do not publish the protos to npm" ([#8096](https://github.com/googleapis/google-cloud-node/issues/8096)) ([ac0fbb6](https://github.com/googleapis/google-cloud-node/commit/ac0fbb682409bb117fd54d344df10970a240772f))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.4.1...admanager-v0.5.0) (2025-10-23)


### Features

* [admanager] Added Application resource ([#6834](https://github.com/googleapis/google-cloud-node/issues/6834)) ([79e9ddf](https://github.com/googleapis/google-cloud-node/commit/79e9ddf22a87f114cb7c692be5ee3b34424ad5d5))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.4.0...admanager-v0.4.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.3.0...admanager-v0.4.0) (2025-07-09)


### Features

* [admanager] Added support for AdBreak resource ([#6450](https://github.com/googleapis/google-cloud-node/issues/6450)) ([080b6ca](https://github.com/googleapis/google-cloud-node/commit/080b6cab7cf7274b71874243cef452a21b720131))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6417](https://github.com/googleapis/google-cloud-node/issues/6417)) ([0d6d584](https://github.com/googleapis/google-cloud-node/commit/0d6d584a0c5c8f9f96daf3ede46f9440758e0f35))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.2.0...admanager-v0.3.0) (2025-03-19)


### Features

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6182](https://github.com/googleapis/google-cloud-node/issues/6182)) ([c41ff07](https://github.com/googleapis/google-cloud-node/commit/c41ff0729b65a1207978b4029d6369cc0552e0bf))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.1.1...admanager-v0.2.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics, update templates to gax 5  ([54a73fe](https://github.com/googleapis/google-cloud-node/commit/54a73fe74eab0675c006f24d5f1e4574c44d829b))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/admanager-v0.1.0...admanager-v0.1.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6011](https://github.com/googleapis/google-cloud-node/issues/6011)) ([ee865ff](https://github.com/googleapis/google-cloud-node/commit/ee865ff34a696fbd657e4cfb6cc4be2f6651f77a))

## 0.1.0 (2024-12-18)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.ads.admanager.v1 ([#5885](https://github.com/googleapis/google-cloud-node/issues/5885)) ([0e5e132](https://github.com/googleapis/google-cloud-node/commit/0e5e132dca3d0b54301c66d264fd26bf04c7b3d2))
