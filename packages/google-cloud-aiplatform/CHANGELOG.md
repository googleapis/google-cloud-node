# Changelog

## [1.10.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.9.1...v1.10.0) (2021-07-23)


### Features

* Adds BigQuery output table field to batch prediction job output config ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds CustomJob.web_access_uris, CustomJob.enable_web_access fields ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds Endpoint.network, Endpoint.private_endpoints fields and PrivateEndpoints message ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds Execution.State constants: CACHED and CANCELLED ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds Feature Store features ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds fields to Study message ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds IndexEndpoint.private_ip_ranges field ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds IndexEndpointService.deployed_index_id field ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds MetadataService.DeleteArtifact and DeleteExecution methods ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds ModelMonitoringObjectConfig.explanation_config field and ModelMonitoringObjectConfig.ExplanationConfig message ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Adds ModelMonitoringObjectiveConfig.TrainingPredictionSkewDetectionConfig.attribution_score_skew_thresholds and ModelMonitoringObjectiveConfig.PredictionDriftDetectionConfig.attribution_score_drift_threshold fields ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))
* Removes breaking change from v1 version of AI Platform protos ([22f1f67](https://www.github.com/googleapis/nodejs-ai-platform/commit/22f1f673b9feeb3230e07a03253912261238b956))

### [1.9.1](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.9.0...v1.9.1) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#172](https://www.github.com/googleapis/nodejs-ai-platform/issues/172)) ([d22eceb](https://www.github.com/googleapis/nodejs-ai-platform/commit/d22ecebc4693b63516a69753c19fa7a7a400464f))

## [1.9.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.8.0...v1.9.0) (2021-07-15)


### Features

* Adds additional_experiments field to AutoMlTablesInputs ([#170](https://www.github.com/googleapis/nodejs-ai-platform/issues/170)) ([4a0a502](https://www.github.com/googleapis/nodejs-ai-platform/commit/4a0a502bb1a01efb701202098524f0020d1faad4))

## [1.8.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.7.4...v1.8.0) (2021-07-14)


### Features

* Removes AcceleratorType.TPU_V2 and TPU_V3 constants ([#167](https://www.github.com/googleapis/nodejs-ai-platform/issues/167)) ([72d153e](https://www.github.com/googleapis/nodejs-ai-platform/commit/72d153ea7732a0d4b73a4ab8d727679523adf6df))

### [1.7.4](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.7.3...v1.7.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#164](https://www.github.com/googleapis/nodejs-ai-platform/issues/164)) ([1ec11fc](https://www.github.com/googleapis/nodejs-ai-platform/commit/1ec11fc4fac373ee1a28ac10676fbfe9fc5535d1))

### [1.7.3](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.7.2...v1.7.3) (2021-06-29)


### Bug Fixes

* add C#, PHP and Ruby options for all AI Platform protos ([#158](https://www.github.com/googleapis/nodejs-ai-platform/issues/158)) ([da0babf](https://www.github.com/googleapis/nodejs-ai-platform/commit/da0babf54c6b074b8dc3d0354f8a57b9bc0cefc1))
* **deps:** google-gax v2.17.0 with mTLS ([#161](https://www.github.com/googleapis/nodejs-ai-platform/issues/161)) ([8e7d46f](https://www.github.com/googleapis/nodejs-ai-platform/commit/8e7d46f1252c4e89a663dd28b70b49bf269f091a))

### [1.7.2](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.7.1...v1.7.2) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#152](https://www.github.com/googleapis/nodejs-ai-platform/issues/152)) ([96b9fba](https://www.github.com/googleapis/nodejs-ai-platform/commit/96b9fba9b66807ac5ea2c5826d5fd3f4e895dc9e))

### [1.7.1](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.7.0...v1.7.1) (2021-06-02)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#141](https://www.github.com/googleapis/nodejs-ai-platform/issues/141)) ([743c71b](https://www.github.com/googleapis/nodejs-ai-platform/commit/743c71b3cbfd1a1ce62e7bb1395fc599e3690a41))

## [1.7.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.6.0...v1.7.0) (2021-05-11)


### ⚠ BREAKING CHANGES

* BREAKING_CHANGE: remove display_name from FeatureStore feat: add invalid_row_count to ImportFeatureValuesResponse and ImportFeatureValuesOperationMetadata (#124)
* BREAKING CHANGE: remove unsupported accelerator types feat: add aiplatform API Vizier service (#92)

### Features

* add featurestore, index, metadata, monitoring, pipeline, and tensorboard services to aiplatform v1beta1. ([#118](https://www.github.com/googleapis/nodejs-ai-platform/issues/118)) ([c3ce821](https://www.github.com/googleapis/nodejs-ai-platform/commit/c3ce8215218dff6d6d42536c9307a05c00bf458b))
* BREAKING CHANGE: remove unsupported accelerator types feat: add aiplatform API Vizier service ([#92](https://www.github.com/googleapis/nodejs-ai-platform/issues/92)) ([23f184d](https://www.github.com/googleapis/nodejs-ai-platform/commit/23f184dffb8482fc032234ae652e75999eb93203))


### Bug Fixes

* BREAKING_CHANGE: remove display_name from FeatureStore feat: add invalid_row_count to ImportFeatureValuesResponse and ImportFeatureValuesOperationMetadata ([#124](https://www.github.com/googleapis/nodejs-ai-platform/issues/124)) ([34b8548](https://www.github.com/googleapis/nodejs-ai-platform/commit/34b85485bc7ead9d86daebfd736a0d938d431566))
* **deps:** require google-gax v2.12.0 ([#120](https://www.github.com/googleapis/nodejs-ai-platform/issues/120)) ([2b58ecb](https://www.github.com/googleapis/nodejs-ai-platform/commit/2b58ecbaad65f8718bfaaf125664ce86cb1ae1d8))
* use require() to load JSON protos ([#122](https://www.github.com/googleapis/nodejs-ai-platform/issues/122)) ([3f26575](https://www.github.com/googleapis/nodejs-ai-platform/commit/3f265753f9c9e9a52966e549c9f74c0fe31002b1))

## [1.6.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.5.0...v1.6.0) (2021-03-11)


### Features

* removes forecasting (time_series_forecasting.proto) from public v1beta1 protos ([#86](https://www.github.com/googleapis/nodejs-ai-platform/issues/86)) ([ccc1953](https://www.github.com/googleapis/nodejs-ai-platform/commit/ccc19537477a57ab36b13072ff6d569eba29d0a7))


### Bug Fixes

* adds index.ts to excludes ([#81](https://www.github.com/googleapis/nodejs-ai-platform/issues/81)) ([d8c6bbb](https://www.github.com/googleapis/nodejs-ai-platform/commit/d8c6bbb67ca1ea81268674e9666536688f0cd720))

## [1.5.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.4.0...v1.5.0) (2021-02-17)


### Features

* ImageSegmentationPredictionResult.category_mask field changed to string data type ([#76](https://www.github.com/googleapis/nodejs-ai-platform/issues/76)) ([ec47129](https://www.github.com/googleapis/nodejs-ai-platform/commit/ec471298fe3135165745175720173203fe8ff016))

## [1.4.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.3.0...v1.4.0) (2021-02-12)


### Features

* add encryption_spec to aiplatform v1beta1 ([#63](https://www.github.com/googleapis/nodejs-ai-platform/issues/63)) ([c3256aa](https://www.github.com/googleapis/nodejs-ai-platform/commit/c3256aae40e39c113dfdf6be9f28f0cb09a7b600))
* adds v1 version of library ([#70](https://www.github.com/googleapis/nodejs-ai-platform/issues/70)) ([5a1b765](https://www.github.com/googleapis/nodejs-ai-platform/commit/5a1b765c03efdb5cbe82b1a34ccf70b86ebd8137))
* **samples:** add additional samples to library ([#25](https://www.github.com/googleapis/nodejs-ai-platform/issues/25)) ([5a7f5db](https://www.github.com/googleapis/nodejs-ai-platform/commit/5a7f5db965a232a98f1bcf18f4f769db5ba3644c))
* updates enhanced client library veneer and samples ([#73](https://www.github.com/googleapis/nodejs-ai-platform/issues/73)) ([59e293f](https://www.github.com/googleapis/nodejs-ai-platform/commit/59e293fa90ea2894b8c135d2ef18662564ceae2c))


### Bug Fixes

* reduces image object detection test file size ([#69](https://www.github.com/googleapis/nodejs-ai-platform/issues/69)) ([fb4308c](https://www.github.com/googleapis/nodejs-ai-platform/commit/fb4308ce09a9fc029996c5d9cd29ae02dc45adea))

## [1.3.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.2.0...v1.3.0) (2021-01-14)


### Features

* **samples:** adds samples for enhanced version of library ([#16](https://www.github.com/googleapis/nodejs-ai-platform/issues/16)) ([aef443c](https://www.github.com/googleapis/nodejs-ai-platform/commit/aef443c41b8a9a2199e0c5b100a5ab91444b0dfe))

## [1.2.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.1.0...v1.2.0) (2021-01-09)


### Features

* adds cleaner utility for orphaned resources ([#34](https://www.github.com/googleapis/nodejs-ai-platform/issues/34)) ([7c09258](https://www.github.com/googleapis/nodejs-ai-platform/commit/7c09258eb99d9c40ba7bf28b6d84434d6bb8a5b9))
* adds style enumeration ([#37](https://www.github.com/googleapis/nodejs-ai-platform/issues/37)) ([81c1515](https://www.github.com/googleapis/nodejs-ai-platform/commit/81c15150f55c4ef20359c1e48530f2c9bcd0f64b))

## [1.1.0](https://www.github.com/googleapis/nodejs-ai-platform/compare/v1.0.0...v1.1.0) (2021-01-07)


### Features

* adds enhancements to library ([#22](https://www.github.com/googleapis/nodejs-ai-platform/issues/22)) ([b697a38](https://www.github.com/googleapis/nodejs-ai-platform/commit/b697a38f696ab14b3a7ce9563f2ed5449eeeab4f))

## 1.0.0 (2020-11-10)


### ⚠ BREAKING CHANGES

* initial generation of library (#4)

### Features

* initial generation ([182128b](https://www.github.com/googleapis/nodejs-ai-platform/commit/182128bfa593c787e2f0970ba224a68595b45971))
* initial generation of library ([#4](https://www.github.com/googleapis/nodejs-ai-platform/issues/4)) ([1b8db30](https://www.github.com/googleapis/nodejs-ai-platform/commit/1b8db30e243aac5d9dab74b00431c81dbf412a66))
