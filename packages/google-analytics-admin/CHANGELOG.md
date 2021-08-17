# Changelog

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
