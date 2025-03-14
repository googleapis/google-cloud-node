# Changelog

## [7.6.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.5.0...admin-v7.6.0) (2024-08-09)


### Features

* [analytics-admin] add `GetKeyEvent`, `CreateKeyEvent`, `ListKeyEvents`, `UpdateKeyEvent`, and `DeleteKeyEvent` methods ([#5597](https://github.com/googleapis/google-cloud-node/issues/5597)) ([178789b](https://github.com/googleapis/google-cloud-node/commit/178789bd72d0303fc369c823bdbd9a6f2fcd723b))

## [7.5.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.4.0...admin-v7.5.0) (2024-07-22)


### Features

* [analytics-admin] add `GetKeyEvent`, `CreateKeyEvent`, `ListKeyEvents`, `UpdateKeyEvent`, `DeleteKeyEvent` methods to the Admin API v1beta ([#5556](https://github.com/googleapis/google-cloud-node/issues/5556)) ([f0403d5](https://github.com/googleapis/google-cloud-node/commit/f0403d546bbc3775b9d4b7dd15df74b6809084e7))

## [7.4.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.3.0...admin-v7.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [7.3.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.2.0...admin-v7.3.0) (2024-04-16)


### Features

* [Many APIs] support GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable ([#5185](https://github.com/googleapis/google-cloud-node/issues/5185)) ([cc54e98](https://github.com/googleapis/google-cloud-node/commit/cc54e98f7f51598e88277ac50310b07b778acbc7))

## [7.2.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.1.0...admin-v7.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [7.1.0](https://github.com/googleapis/google-cloud-node/compare/admin-v7.0.1...admin-v7.1.0) (2024-02-07)


### Features

* [analytics-admin] add `GetCalculatedMetric`, `CreateCalculatedMetric`, `ListCalculatedMetrics`, `UpdateCalculatedMetric`, `DeleteCalculatedMetric` methods to the Admin API v1alpha ([#4984](https://github.com/googleapis/google-cloud-node/issues/4984)) ([0a90c23](https://github.com/googleapis/google-cloud-node/commit/0a90c23568b82d79654e6819039178eee97c4499))

## [7.0.1](https://github.com/googleapis/google-cloud-node/compare/admin-v7.0.0...admin-v7.0.1) (2024-01-05)


### Bug Fixes

* [analytics-admin] correct long audio synthesis HTTP binding ([#4888](https://github.com/googleapis/google-cloud-node/issues/4888)) ([60a26a1](https://github.com/googleapis/google-cloud-node/commit/60a26a1e60d46295a2688a6b123a092993698ee8))

## [7.0.0](https://github.com/googleapis/google-cloud-node/compare/admin-v6.0.0...admin-v7.0.0) (2023-10-24)


### ⚠ BREAKING CHANGES

* [analytics-admin] delete `BatchDeleteUserLinks`, `DeleteUserLink`, `BatchUpdateUserLinks`, `UpdateUserLink`, `BatchCreateUserLinks`, `CreateUserLink`, `AuditUserLinks`, `ListUserLinks`, `BatchGetUserLinks`, `GetUserLink` from the Admin API v1 alp... ([#4751](https://github.com/googleapis/google-cloud-node/issues/4751))

### Bug Fixes

* [analytics-admin] delete `BatchDeleteUserLinks`, `DeleteUserLink`, `BatchUpdateUserLinks`, `UpdateUserLink`, `BatchCreateUserLinks`, `CreateUserLink`, `AuditUserLinks`, `ListUserLinks`, `BatchGetUserLinks`, `GetUserLink` from the Admin API v1 alp... ([#4751](https://github.com/googleapis/google-cloud-node/issues/4751)) ([e61a513](https://github.com/googleapis/google-cloud-node/commit/e61a513a706e87d0ef03668875d3583d3aca29a4))

## [6.0.0](https://github.com/googleapis/google-cloud-node/compare/admin-v5.0.0...admin-v6.0.0) (2023-09-06)


### ⚠ BREAKING CHANGES

* [analytics-admin] rename the `enterprise_daily_export_enabled` field to `fresh_daily_export_enabled` in the `BigQueryLink` resource ([#4600](https://github.com/googleapis/google-cloud-node/issues/4600))

### Features

* [analytics-admin] add `UpdateConversionEvent` method to the Admin API v1 beta ([#4580](https://github.com/googleapis/google-cloud-node/issues/4580)) ([6d66eee](https://github.com/googleapis/google-cloud-node/commit/6d66eeea059099ac95ed2d880a70062f13f59c45))


### Bug Fixes

* [analytics-admin] rename the `enterprise_daily_export_enabled` field to `fresh_daily_export_enabled` in the `BigQueryLink` resource ([#4600](https://github.com/googleapis/google-cloud-node/issues/4600)) ([7fdbeb3](https://github.com/googleapis/google-cloud-node/commit/7fdbeb3454702e6b567827d11f2dd659a9a576e9))
* [analytics-admin] rename the `intraday_export_enabled` field to `enterprise_export_enabled`  in the `BigQueryLink` resource ([#4530](https://github.com/googleapis/google-cloud-node/issues/4530)) ([d08dad1](https://github.com/googleapis/google-cloud-node/commit/d08dad15797114ac462da437ffc3e9253af3527b))
* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))
* **deps:** Update dependency google-auth-library to v9 ([#4560](https://github.com/googleapis/google-cloud-node/issues/4560)) ([e5099b7](https://github.com/googleapis/google-cloud-node/commit/e5099b7a475e0cfaf0d25aa8d6755cd7bc43cbe0))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.9.0...admin-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [analytics-admin] fix typings for IAM methods ([#4455](https://github.com/googleapis/google-cloud-node/issues/4455)) ([5aa181c](https://github.com/googleapis/google-cloud-node/commit/5aa181c54065a6920a63cce8324deed7d7a5ce09))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.9.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.8.0...admin-v4.9.0) (2023-05-20)


### Features

* [analytics-admin] add `GetAdSenseLink`, `CreateAdSenseLink`, `DeleteAdSenseLink`, `ListAdSenseLinks` methods to the Admin API v1alpha ([#4276](https://github.com/googleapis/google-cloud-node/issues/4276)) ([2f0e6e1](https://github.com/googleapis/google-cloud-node/commit/2f0e6e1b85fa68c02a350fed5ffcc6db0bb64fdd))

## [4.8.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.7.1...admin-v4.8.0) (2023-05-02)


### Features

* [analytics-admin] add `FetchConnectedGa4Property` method to the Admin API v1alpha ([#4207](https://github.com/googleapis/google-cloud-node/issues/4207)) ([5af79e1](https://github.com/googleapis/google-cloud-node/commit/5af79e1a4ed1742009bc48e2ee61933b28e45d9e))

## [4.7.1](https://github.com/googleapis/google-cloud-node/compare/admin-v4.7.0...admin-v4.7.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.7.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.6.0...admin-v4.7.0) (2023-03-28)


### Features

* [analytics-admin] add `RunAccessReport` method (with bindings for account and property resources) to the Admin API v1beta ([#4128](https://github.com/googleapis/google-cloud-node/issues/4128)) ([d66f33c](https://github.com/googleapis/google-cloud-node/commit/d66f33c7518719ba6e2b8d460e51d0bfea8179e3))
* [analytics-admin] add account-level binding for the`RunAccessReport` method (example: /v1alpha/accounts/1234567:runAccessReport) ([#4112](https://github.com/googleapis/google-cloud-node/issues/4112)) ([623b203](https://github.com/googleapis/google-cloud-node/commit/623b2037f2e2ced5ba6ecde1c3606997983d9036))

## [4.6.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.5.1...admin-v4.6.0) (2023-02-28)


### Features

* [analytics-admin] add `CreateAccessBinding`, `GetAccessBinding`, `UpdateAccessBinding`, `DeleteAccessBinding`, `ListAccessBindings`, `BatchCreateAccessBindings`, `BatchGetAccessBindings`, `BatchUpdateAccessBindings`, `BatchDeleteAccessBindings` m... ([#4001](https://github.com/googleapis/google-cloud-node/issues/4001)) ([2dd56a7](https://github.com/googleapis/google-cloud-node/commit/2dd56a77bc7bfcbfbbb5ba4beed27d918068fc79))

## [4.5.1](https://github.com/googleapis/google-cloud-node/compare/admin-v4.5.0...admin-v4.5.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.4.0...admin-v4.5.0) (2023-02-09)


### Features

* [analytics-admin] add `GetSearchAds360Link`, `ListSearchAds360Links`, `CreateSearchAds360Link`, `DeleteSearchAds360Link`, `UpdateSearchAds360Link` methods to the Admin API v1alpha ([#3971](https://github.com/googleapis/google-cloud-node/issues/3971)) ([4834b82](https://github.com/googleapis/google-cloud-node/commit/4834b822552f4b1affdb23085ff78715975b72d1))

## [4.4.0](https://github.com/googleapis/google-cloud-node/compare/admin-v4.3.1...admin-v4.4.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [4.3.1](https://github.com/googleapis/google-cloud-node/compare/admin-v4.3.0...admin-v4.3.1) (2022-12-16)


### Bug Fixes

* **deps:** Update dependency google-gax to v3 ([#3626](https://github.com/googleapis/google-cloud-node/issues/3626)) ([bab338f](https://github.com/googleapis/google-cloud-node/commit/bab338f0dd566df02fb3c41ce4af17439126892e))

## [4.3.0](https://github.com/googleapis/nodejs-analytics-admin/compare/v4.2.0...v4.3.0) (2022-11-11)


### Features

* add `GetAttributionSettings`, `UpdateAttributionSettings` methods to the Admin API v1alpha ([6d911ce](https://github.com/googleapis/nodejs-analytics-admin/commit/6d911cea4e0a1a1201847dba549634e535b078b0))
* add `GetAudience`, 'ListAudience', 'CreateAudience', 'UpdateAudience', 'ArchiveAudience' methods to the Admin API v1alpha ([6d911ce](https://github.com/googleapis/nodejs-analytics-admin/commit/6d911cea4e0a1a1201847dba549634e535b078b0))
* add `RunAccessReport` method to the Admin API v1alpha ([6d911ce](https://github.com/googleapis/nodejs-analytics-admin/commit/6d911cea4e0a1a1201847dba549634e535b078b0))


### Bug Fixes

* Allow passing gax instance to client constructor ([#222](https://github.com/googleapis/nodejs-analytics-admin/issues/222)) ([c17ef19](https://github.com/googleapis/nodejs-analytics-admin/commit/c17ef19c7ca0c1e8514229f5341d339123a64c03))
* Better support for fallback mode ([#216](https://github.com/googleapis/nodejs-analytics-admin/issues/216)) ([6d911ce](https://github.com/googleapis/nodejs-analytics-admin/commit/6d911cea4e0a1a1201847dba549634e535b078b0))
* Change import long to require ([#217](https://github.com/googleapis/nodejs-analytics-admin/issues/217)) ([77aaecb](https://github.com/googleapis/nodejs-analytics-admin/commit/77aaecb625ca557207e3fdbad906d4d50e9b4704))
* **deps:** Use google-gax v3.5.2 ([#230](https://github.com/googleapis/nodejs-analytics-admin/issues/230)) ([7bbe484](https://github.com/googleapis/nodejs-analytics-admin/commit/7bbe4845a8b2e70bdd55f739c6af57eb080ea5e7))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-analytics-admin/issues/1553)) ([#221](https://github.com/googleapis/nodejs-analytics-admin/issues/221)) ([2341928](https://github.com/googleapis/nodejs-analytics-admin/commit/23419288e37ce931b72bbeb3e5f6d229f1b249fa))
* Preserve default values in x-goog-request-params header ([#224](https://github.com/googleapis/nodejs-analytics-admin/issues/224)) ([22f8b45](https://github.com/googleapis/nodejs-analytics-admin/commit/22f8b45606451281e237c4625b1248cb65ec02e6))
* Regenerated protos JS and TS definitions ([#233](https://github.com/googleapis/nodejs-analytics-admin/issues/233)) ([3a1d10c](https://github.com/googleapis/nodejs-analytics-admin/commit/3a1d10cc4cffb56dbb86a74ac4cc2d6d179268cf))
* use google-gax v3.3.0 ([2341928](https://github.com/googleapis/nodejs-analytics-admin/commit/23419288e37ce931b72bbeb3e5f6d229f1b249fa))

## [4.2.0](https://github.com/googleapis/nodejs-analytics-admin/compare/v4.1.0...v4.2.0) (2022-07-04)


### Features

* release the Google Analytics Admin API V1 Beta ([bb17208](https://github.com/googleapis/nodejs-analytics-admin/commit/bb17208fbd0a9dd945bb51e8e9281886da35a9cc))

## [4.1.0](https://github.com/googleapis/nodejs-analytics-admin/compare/v4.0.0...v4.1.0) (2022-06-29)


### Features

* support regapic LRO ([#210](https://github.com/googleapis/nodejs-analytics-admin/issues/210)) ([a783ccd](https://github.com/googleapis/nodejs-analytics-admin/commit/a783ccd7c69123b337813c0ee751e292bdb5be5c))

## [4.0.0](https://github.com/googleapis/nodejs-analytics-admin/compare/v3.2.0...v4.0.0) (2022-05-13)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#205)

### Bug Fixes

* CustomDimension and CustomMetric resource configuration in Analytics Admin API ([#204](https://github.com/googleapis/nodejs-analytics-admin/issues/204)) ([ff521a5](https://github.com/googleapis/nodejs-analytics-admin/commit/ff521a5d7658e8b7a8c8995a8049a074d911a127))


### Build System

* update library to use Node 12 ([#205](https://github.com/googleapis/nodejs-analytics-admin/issues/205)) ([002c8b7](https://github.com/googleapis/nodejs-analytics-admin/commit/002c8b7ec24b3539378eeeff1ced553780c6aebe))

## [3.2.0](https://github.com/googleapis/nodejs-analytics-admin/compare/v3.1.0...v3.2.0) (2022-04-11)


### ⚠ BREAKING CHANGES

* move the `GlobalSiteTag` resource from the property level to the data stream level
* remove WebDataStream, IosAppDataStream, AndroidAppDataStream resources
* remove `GetEnhancedMeasurementSettings`, `UpdateEnhancedMeasurementSettingsRequest`, `UpdateEnhancedMeasurementSettingsRequest` operations from the API

### Features

* add `CreateDataStream`, `DeleteDataStream`, `UpdateDataStream`, `ListDataStreams` operations to support the new `DataStream` resource ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))
* add `DISPLAY_VIDEO_360_ADVERTISER_LINK`,  `DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL` fields to `ChangeHistoryResourceType` enum ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))
* add `restricted_metric_type` field to the `CustomMetric` resource ([948d37d](https://github.com/googleapis/nodejs-analytics-admin/commit/948d37d068263595a198006764a5d7d7d6afd884))
* add the `account` field to the `Property` type docs: update the documentation with a new list of valid values for `UserLink.direct_roles` field ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))
* add the `AcknowledgeUserDataCollection` operation which acknowledges the terms of user data collection for the specified property ([#166](https://github.com/googleapis/nodejs-analytics-admin/issues/166)) ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))
* add the new resource type `DataStream`, which is planned to eventually replace `WebDataStream`, `IosAppDataStream`, `AndroidAppDataStream` resources ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))
* move the `GlobalSiteTag` resource from the property level to the data stream level ([948d37d](https://github.com/googleapis/nodejs-analytics-admin/commit/948d37d068263595a198006764a5d7d7d6afd884))
* remove WebDataStream, IosAppDataStream, AndroidAppDataStream resources ([948d37d](https://github.com/googleapis/nodejs-analytics-admin/commit/948d37d068263595a198006764a5d7d7d6afd884))


### Bug Fixes

* remove `GetEnhancedMeasurementSettings`, `UpdateEnhancedMeasurementSettingsRequest`, `UpdateEnhancedMeasurementSettingsRequest` operations from the API ([33ead79](https://github.com/googleapis/nodejs-analytics-admin/commit/33ead795301a343a80af8f8838c7677679b9f3fe))

## [3.1.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.6...v3.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#148](https://www.github.com/googleapis/nodejs-analytics-admin/issues/148)) ([d0382e4](https://www.github.com/googleapis/nodejs-analytics-admin/commit/d0382e4cc29fb304f2d90be0f4b354a2e65ace3c))

### [3.0.6](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.5...v3.0.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#146](https://www.github.com/googleapis/nodejs-analytics-admin/issues/146)) ([604e333](https://www.github.com/googleapis/nodejs-analytics-admin/commit/604e3335ed05b198e6e9f3eafd6eaf405126bd2f))

### [3.0.5](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.4...v3.0.5) (2021-08-09)


### Bug Fixes

* **build:** migrate to using main branch ([#144](https://www.github.com/googleapis/nodejs-analytics-admin/issues/144)) ([537d20a](https://www.github.com/googleapis/nodejs-analytics-admin/commit/537d20a623b026f68e08160af95cac31a7cd52db))

### [3.0.4](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.3...v3.0.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#136](https://www.github.com/googleapis/nodejs-analytics-admin/issues/136)) ([2518d10](https://www.github.com/googleapis/nodejs-analytics-admin/commit/2518d10d640a60e2577f3af0cd517e4f52ed185a))

### [3.0.3](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.2...v3.0.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#133](https://www.github.com/googleapis/nodejs-analytics-admin/issues/133)) ([ad5ad4d](https://www.github.com/googleapis/nodejs-analytics-admin/commit/ad5ad4da8348f36364cb1f67751bee70161d6c61))

### [3.0.2](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.1...v3.0.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#130](https://www.github.com/googleapis/nodejs-analytics-admin/issues/130)) ([81533f3](https://www.github.com/googleapis/nodejs-analytics-admin/commit/81533f3e69471170414406cfe1dca00a36d7a6b8))

### [3.0.1](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v3.0.0...v3.0.1) (2021-06-24)


### Bug Fixes

* make request optional in all cases ([#126](https://www.github.com/googleapis/nodejs-analytics-admin/issues/126)) ([a66c927](https://www.github.com/googleapis/nodejs-analytics-admin/commit/a66c927492a3186df97c52823e4a6db67c60e65b))

## [3.0.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v2.0.3...v3.0.0) (2021-05-27)


### ⚠ BREAKING CHANGES

* remove `CreateIosAppDataStream`, `CreateAndroidAppDataStream` methods from the API (#105)

### Features

* add several new functions and types ([#119](https://www.github.com/googleapis/nodejs-analytics-admin/issues/119)) ([d7c4e29](https://www.github.com/googleapis/nodejs-analytics-admin/commit/d7c4e290bf88b6db9f6c67379c811390cc3b4783))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#110](https://www.github.com/googleapis/nodejs-analytics-admin/issues/110)) ([cec8b6a](https://www.github.com/googleapis/nodejs-analytics-admin/commit/cec8b6ae04200a57d90586cd58f2fe6d3c94f684))
* GoogleAdsError missing using generator version after 1.3.0 ([#118](https://www.github.com/googleapis/nodejs-analytics-admin/issues/118)) ([f69d3e9](https://www.github.com/googleapis/nodejs-analytics-admin/commit/f69d3e9bea2a10ecfd6bf3d9edfdf17c6fda168a))
* remove `CreateIosAppDataStream`, `CreateAndroidAppDataStream` methods from the API ([#105](https://www.github.com/googleapis/nodejs-analytics-admin/issues/105)) ([c6c1883](https://www.github.com/googleapis/nodejs-analytics-admin/commit/c6c1883cdcdbeacce0112c7142758806078cd431))
* use require() to load JSON protos ([#112](https://www.github.com/googleapis/nodejs-analytics-admin/issues/112)) ([904aaf6](https://www.github.com/googleapis/nodejs-analytics-admin/commit/904aaf6bd48de4f404203aeaeadda1ba8cc62ac9))

### [2.0.3](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v2.0.2...v2.0.3) (2021-03-08)


### Bug Fixes

* **deps:** update dependency open to v8 ([#83](https://www.github.com/googleapis/nodejs-analytics-admin/issues/83)) ([e8643f6](https://www.github.com/googleapis/nodejs-analytics-admin/commit/e8643f61c5135f03ff75a4bc3361a4cfc8e2b97d))

### [2.0.2](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v2.0.1...v2.0.2) (2021-03-07)


### Bug Fixes

* add `https://www.googleapis.com/auth/analytics.edit` OAuth2 scope to the list of acceptable scopes for all read only methods of the Admin API docs: update the documentation of the `update_mask` field used by Update() methods ([#81](https://www.github.com/googleapis/nodejs-analytics-admin/issues/81)) ([655a893](https://www.github.com/googleapis/nodejs-analytics-admin/commit/655a893e8c89a9a18b32db256df2ba28adafc948))

### [2.0.1](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v2.0.0...v2.0.1) (2021-02-09)


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#79](https://www.github.com/googleapis/nodejs-analytics-admin/issues/79)) ([8e0e55b](https://www.github.com/googleapis/nodejs-analytics-admin/commit/8e0e55b1ac2c69cee0eaac6102efdc7a105e758e))

## [2.0.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.4.0...v2.0.0) (2021-01-19)


### ⚠ BREAKING CHANGES

* `update_mask` field is required for all Update operations
* rename `country_code` field to `region_code` in `Account`
* rename `url_query_parameter` field to `uri_query_parameter` in `EnhancedMeasurementSettings`
* remove `parent` field from `GoogleAdsLink` (#73)
* remove unused fields from `EnhancedMeasurementSettings`

### Features

* add pagination support for `ListFirebaseLinks` operation ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))


### Bug Fixes

* `update_mask` field is required for all Update operations ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))
* remove `parent` field from `GoogleAdsLink` ([#73](https://www.github.com/googleapis/nodejs-analytics-admin/issues/73)) ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))
* remove unused fields from `EnhancedMeasurementSettings`   ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))
* rename `country_code` field to `region_code` in `Account` ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))
* rename `url_query_parameter` field to `uri_query_parameter` in `EnhancedMeasurementSettings` ([57205d1](https://www.github.com/googleapis/nodejs-analytics-admin/commit/57205d16409af361342f77261767d77e84582965))

## [1.4.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.3.0...v1.4.0) (2021-01-09)


### Features

* adds style enumeration ([#70](https://www.github.com/googleapis/nodejs-analytics-admin/issues/70)) ([cffd8f5](https://www.github.com/googleapis/nodejs-analytics-admin/commit/cffd8f53db7a24c1741a2818c168adb674c27c85))
* adds style enumeration ([#71](https://www.github.com/googleapis/nodejs-analytics-admin/issues/71)) ([fd88f82](https://www.github.com/googleapis/nodejs-analytics-admin/commit/fd88f826f3d5cf37c5f1ed7a32a997e7ec6441ed))

## [1.3.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.2.3...v1.3.0) (2021-01-07)


### Features

* added name field to GlobalSiteTag ([#65](https://www.github.com/googleapis/nodejs-analytics-admin/issues/65)) ([a4baba5](https://www.github.com/googleapis/nodejs-analytics-admin/commit/a4baba570e07b637ec5d8be0a9d98ebec5969559))

### [1.2.3](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.2.2...v1.2.3) (2020-11-25)


### Bug Fixes

* do not modify options object, use defaultScopes docs: regenerated jsdoc comments with examples build: use gapic-generator-typescript v1.2.1 ([#55](https://www.github.com/googleapis/nodejs-analytics-admin/issues/55)) ([126618a](https://www.github.com/googleapis/nodejs-analytics-admin/commit/126618a4a1fb1c17be5a6a3e3a4b96cdc844b361))

### [1.2.2](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.2.1...v1.2.2) (2020-11-11)


### Bug Fixes

* 'requests' field of CreateUserLink, UpdateUserLink, DeleteUserLink methods is now required docs: minor documentation updates ([#49](https://www.github.com/googleapis/nodejs-analytics-admin/issues/49)) ([ae75c0c](https://www.github.com/googleapis/nodejs-analytics-admin/commit/ae75c0c053ed203c0f8b142ce87a8622e0b6ee93))

### [1.2.1](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.2.0...v1.2.1) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#50](https://www.github.com/googleapis/nodejs-analytics-admin/issues/50)) ([47d0a11](https://www.github.com/googleapis/nodejs-analytics-admin/commit/47d0a119803f52208f4dfa2b053937214d021ec6))

## [1.2.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.1.2...v1.2.0) (2020-10-20)

### Features

* added ListAccountSummaries method ([#40](https://www.github.com/googleapis/nodejs-analytics-admin/issues/40)) ([f55c2bf](https://www.github.com/googleapis/nodejs-analytics-admin/commit/f55c2bfaacb6203bcb31094c61e71a166b0ddeda))

### [1.1.2](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.1.1...v1.1.2) (2020-08-28)


### Bug Fixes

* move system and samples test from Node 10 to Node 12 ([#31](https://www.github.com/googleapis/nodejs-analytics-admin/issues/31)) ([bcb2061](https://www.github.com/googleapis/nodejs-analytics-admin/commit/bcb20619c7e13be336bf915c4821004016f67337))

### [1.1.1](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.1.0...v1.1.1) (2020-08-04)


### Bug Fixes

* samples and tests updated ([#13](https://www.github.com/googleapis/nodejs-analytics-admin/issues/13)) ([55f4366](https://www.github.com/googleapis/nodejs-analytics-admin/commit/55f4366d75a09b697ac1b7d1ef416cf27448832a))
* **docs:** update docs with current samples ([24a452c](https://www.github.com/googleapis/nodejs-analytics-admin/commit/24a452c9472f521e8164911ba4f8e2a3d77e2fca))

## [1.1.0](https://www.github.com/googleapis/nodejs-analytics-admin/compare/v1.0.0...v1.1.0) (2020-07-29)


### Features

* initial release of library from googleapis organization ([#12](https://www.github.com/googleapis/nodejs-analytics-admin/issues/12)) ([f741199](https://www.github.com/googleapis/nodejs-analytics-admin/commit/f741199acb8544367d61e579ddad40eed45baf45))

## 1.0.0 (2020-07-28)


### ⚠ BREAKING CHANGES

* initial generation of full library (#1)

### Features

* add samples ([#10](https://www.github.com/googleapis/nodejs-analytics-admin/issues/10)) ([1de6156](https://www.github.com/googleapis/nodejs-analytics-admin/commit/1de615633769fe75fdea819bc01f374b65447276))
* initial generation of full library ([#1](https://www.github.com/googleapis/nodejs-analytics-admin/issues/1)) ([563ad77](https://www.github.com/googleapis/nodejs-analytics-admin/commit/563ad77b0d57edfebee51b66183d63a7ef1cd1d7))
* initial stubbed out version of library ([0bb2cfd](https://www.github.com/googleapis/nodejs-analytics-admin/commit/0bb2cfd203d065765a07f8f34fa7d82d6dad9726))


### Bug Fixes

* broken docs test ([#11](https://www.github.com/googleapis/nodejs-analytics-admin/issues/11)) ([51f990f](https://www.github.com/googleapis/nodejs-analytics-admin/commit/51f990f6bbf1b7e1cf5cb5bb66c745d01244f4e5))
