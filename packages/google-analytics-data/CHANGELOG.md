# Changelog

## [3.2.2](https://github.com/googleapis/google-cloud-node/compare/data-v3.2.1...data-v3.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/data-v3.2.0...data-v3.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/data-v3.1.2...data-v3.2.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [3.1.2](https://github.com/googleapis/google-cloud-node/compare/data-v3.1.1...data-v3.1.2) (2022-12-16)


### Bug Fixes

* **deps:** Update dependency google-gax to v3 ([#3626](https://github.com/googleapis/google-cloud-node/issues/3626)) ([bab338f](https://github.com/googleapis/google-cloud-node/commit/bab338f0dd566df02fb3c41ce4af17439126892e))
* **deps:** Update dependency lint to ^0.8.0 ([#3688](https://github.com/googleapis/google-cloud-node/issues/3688)) ([84114b1](https://github.com/googleapis/google-cloud-node/commit/84114b188593b5c4d32cd409bb2e8973042505d4))

## [3.1.1](https://github.com/googleapis/nodejs-analytics-data/compare/v3.1.0...v3.1.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#270](https://github.com/googleapis/nodejs-analytics-data/issues/270)) ([58e6661](https://github.com/googleapis/nodejs-analytics-data/commit/58e6661e58f109d2db30eefbd6e6902fc3b1022b))
* Regenerated protos JS and TS definitions ([#274](https://github.com/googleapis/nodejs-analytics-data/issues/274)) ([690d304](https://github.com/googleapis/nodejs-analytics-data/commit/690d3048bb0e5fc238a018fac95f55f989d7fa03))

## [3.1.0](https://github.com/googleapis/nodejs-analytics-data/compare/v3.0.3...v3.1.0) (2022-10-13)


### Features

* Add `subject_to_thresholding` field to `ResponseMetadata` type ([#265](https://github.com/googleapis/nodejs-analytics-data/issues/265)) ([410f0e0](https://github.com/googleapis/nodejs-analytics-data/commit/410f0e099fa5aa305e5120031b848dda99499e45))

## [3.0.3](https://github.com/googleapis/nodejs-analytics-data/compare/v3.0.2...v3.0.3) (2022-09-22)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#237](https://github.com/googleapis/nodejs-analytics-data/issues/237)) ([ae646a5](https://github.com/googleapis/nodejs-analytics-data/commit/ae646a54bc64abff0cf92625117ffb258e303e8b))

## [3.0.2](https://github.com/googleapis/nodejs-analytics-data/compare/v3.0.1...v3.0.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#232](https://github.com/googleapis/nodejs-analytics-data/issues/232)) ([df75612](https://github.com/googleapis/nodejs-analytics-data/commit/df75612adeadf7c3db4fe755b8ba9a2473a2fbae))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-analytics-data/issues/1553)) ([#231](https://github.com/googleapis/nodejs-analytics-data/issues/231)) ([635cddf](https://github.com/googleapis/nodejs-analytics-data/commit/635cddfb95f3252ea92765c45b8844aaf1eb6494))

## [3.0.1](https://github.com/googleapis/nodejs-analytics-data/compare/v3.0.0...v3.0.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#226](https://github.com/googleapis/nodejs-analytics-data/issues/226)) ([e9f6e72](https://github.com/googleapis/nodejs-analytics-data/commit/e9f6e722506bcbcf6ec2119511c16d033121c6f2))
* change import long to require ([#227](https://github.com/googleapis/nodejs-analytics-data/issues/227)) ([007dfad](https://github.com/googleapis/nodejs-analytics-data/commit/007dfadd590e9c957a978ce4e46b9e72eb78e090))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-analytics-data/issues/1546)) ([#229](https://github.com/googleapis/nodejs-analytics-data/issues/229)) ([d2e5aba](https://github.com/googleapis/nodejs-analytics-data/commit/d2e5aba8edb12337fd5c04916bd75fee1389c0d3))

## [3.0.0](https://github.com/googleapis/nodejs-analytics-data/compare/v2.8.0...v3.0.0) (2022-06-27)


### ⚠ BREAKING CHANGES

* rename the `funnel_filter` field of the `FunnelFilterExpression` type to `funnel_field_filter`
* rename the type `FunnelFilter` to `FunnelFieldFilter` (#218)
* update library to use Node 12 (#213)

### Features

* add `runFunnelReport` method to the Alpha version of the Data API ([#208](https://github.com/googleapis/nodejs-analytics-data/issues/208)) ([2390a92](https://github.com/googleapis/nodejs-analytics-data/commit/2390a922100c4ad0415f914a88b13dd39c487477))
* support regapic LRO ([#219](https://github.com/googleapis/nodejs-analytics-data/issues/219)) ([547ecd7](https://github.com/googleapis/nodejs-analytics-data/commit/547ecd76afd553051ba4f9d330b355422b7114c5))


### Bug Fixes

* rename the `funnel_filter` field of the `FunnelFilterExpression` type to `funnel_field_filter` ([9ff9521](https://github.com/googleapis/nodejs-analytics-data/commit/9ff9521b386c674809f528892cf1dd49db81edc3))
* rename the type `FunnelFilter` to `FunnelFieldFilter` ([#218](https://github.com/googleapis/nodejs-analytics-data/issues/218)) ([9ff9521](https://github.com/googleapis/nodejs-analytics-data/commit/9ff9521b386c674809f528892cf1dd49db81edc3))


### Build System

* update library to use Node 12 ([#213](https://github.com/googleapis/nodejs-analytics-data/issues/213)) ([c227cda](https://github.com/googleapis/nodejs-analytics-data/commit/c227cdac99df8c671812bb7d1244bd83d23d01e8))

## [2.8.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.7.0...v2.8.0) (2021-11-08)


### Features

* add the `schema_restriction_response` field to the `ResponseMetaData` type that contains the schema restrictions actively enforced in creating a report feat: add the `currency_code`, `time_zone` fields to the `ResponseMetaData` type feat: add the... ([#154](https://www.github.com/googleapis/nodejs-analytics-data/issues/154)) ([37f6077](https://www.github.com/googleapis/nodejs-analytics-data/commit/37f6077a2f86e0814495d3282866cacf6458a839))

## [2.7.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.6.0...v2.7.0) (2021-09-01)


### Features

* add `CheckCompatibility` method to the API ([#141](https://www.github.com/googleapis/nodejs-analytics-data/issues/141)) ([62c787f](https://www.github.com/googleapis/nodejs-analytics-data/commit/62c787fe3cda77a924a1de119de0ac1893a9390c))

## [2.6.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.5.3...v2.6.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#138](https://www.github.com/googleapis/nodejs-analytics-data/issues/138)) ([c7df6d6](https://www.github.com/googleapis/nodejs-analytics-data/commit/c7df6d6468b5ecd433486b5f2b20883ea22a7ab1))

### [2.5.3](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.5.2...v2.5.3) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#136](https://www.github.com/googleapis/nodejs-analytics-data/issues/136)) ([ed23bc2](https://www.github.com/googleapis/nodejs-analytics-data/commit/ed23bc2d71db3bbcd60a1771f70fd10a10a3da1b))

### [2.5.2](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.5.1...v2.5.2) (2021-08-09)


### Bug Fixes

* **build:** migrate to using main branch ([#134](https://www.github.com/googleapis/nodejs-analytics-data/issues/134)) ([1a24d21](https://www.github.com/googleapis/nodejs-analytics-data/commit/1a24d2101ea3c15236f7f6ee2cc6fd8327950c43))

### [2.5.1](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.5.0...v2.5.1) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#126](https://www.github.com/googleapis/nodejs-analytics-data/issues/126)) ([7272509](https://www.github.com/googleapis/nodejs-analytics-data/commit/72725092f75b90366884f484b305643e6716086f))

## [2.5.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.4.3...v2.5.0) (2021-07-12)


### Features

* add `minute_ranges` field to `RunRealtimeReportRequest` object which can be used to specify the time range (in minutes) for realtime report queries docs: document the increase from 8 to 9 of the number of allowed dimensions in a report query ([#123](https://www.github.com/googleapis/nodejs-analytics-data/issues/123)) ([975776b](https://www.github.com/googleapis/nodejs-analytics-data/commit/975776ba58c5bfe98f53e73fd0af3e00ebd8ab2b))


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#125](https://www.github.com/googleapis/nodejs-analytics-data/issues/125)) ([9db78d0](https://www.github.com/googleapis/nodejs-analytics-data/commit/9db78d0663438c2c887a219e807e24fa90431fe5))

### [2.4.3](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.4.2...v2.4.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#121](https://www.github.com/googleapis/nodejs-analytics-data/issues/121)) ([9cbad79](https://www.github.com/googleapis/nodejs-analytics-data/commit/9cbad79ce05892ec18841613557c75fab75aaa36))
* make request optional in all cases ([#117](https://www.github.com/googleapis/nodejs-analytics-data/issues/117)) ([2c5ce79](https://www.github.com/googleapis/nodejs-analytics-data/commit/2c5ce79fb49dbce9e1c4315b8850fa6cbaffe5ce))

### [2.4.2](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.4.1...v2.4.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#110](https://www.github.com/googleapis/nodejs-analytics-data/issues/110)) ([816580a](https://www.github.com/googleapis/nodejs-analytics-data/commit/816580a5446ea45373f514813cf6d81be93c0532))

### [2.4.1](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.4.0...v2.4.1) (2021-05-19)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#101](https://www.github.com/googleapis/nodejs-analytics-data/issues/101)) ([c7b4ff1](https://www.github.com/googleapis/nodejs-analytics-data/commit/c7b4ff1856cbc700098d14fcb86fa11dd31a234b))
* use require() to load JSON protos ([#104](https://www.github.com/googleapis/nodejs-analytics-data/issues/104)) ([bd0ecb9](https://www.github.com/googleapis/nodejs-analytics-data/commit/bd0ecb923ee6ec73c6f60844e5150b22acc91aa4))

## [2.4.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.3.0...v2.4.0) (2021-04-02)


### Features

* add `kind` field which is used to distinguish between response types feat: add `potentially_thresholded_requests_per_hour` field to `PropertyQuota` ([#85](https://www.github.com/googleapis/nodejs-analytics-data/issues/85)) ([00b1d04](https://www.github.com/googleapis/nodejs-analytics-data/commit/00b1d04b34e737d3b68ab9e14fe7949106680ac2))

## [2.3.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.2.1...v2.3.0) (2021-03-11)


### Features

* add v1beta surface (issues fixed) ([#69](https://www.github.com/googleapis/nodejs-analytics-data/issues/69)) ([44005ca](https://www.github.com/googleapis/nodejs-analytics-data/commit/44005cadb55e2e7695205af8977f3966dc53024c))

### [2.2.1](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.2.0...v2.2.1) (2021-03-04)


### Bug Fixes

* **deps:** update dependency open to v8 ([#62](https://www.github.com/googleapis/nodejs-analytics-data/issues/62)) ([3724c67](https://www.github.com/googleapis/nodejs-analytics-data/commit/3724c676dcfc11684b1ac36f83ec4f64aea8e6f4))
* remove v1beta1 to nodejs-analytics-data ([73aca08](https://www.github.com/googleapis/nodejs-analytics-data/commit/73aca080ac587d15feed541d7b66407dacd2b41c))

## [2.2.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.1.0...v2.2.0) (2021-03-02)


### Features

* add v1beta1 to nodejs-analytics-data ([#60](https://www.github.com/googleapis/nodejs-analytics-data/issues/60)) ([ffe0395](https://www.github.com/googleapis/nodejs-analytics-data/commit/ffe0395c4b1a648e38dbeaa2b47e4588c34eda82))


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#58](https://www.github.com/googleapis/nodejs-analytics-data/issues/58)) ([77002d8](https://www.github.com/googleapis/nodejs-analytics-data/commit/77002d877d4c353864d0a55f1247855e80e42fab))

## [2.1.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v2.0.0...v2.1.0) (2021-01-09)


### Features

* adds style enumeration ([#47](https://www.github.com/googleapis/nodejs-analytics-data/issues/47)) ([3028672](https://www.github.com/googleapis/nodejs-analytics-data/commit/3028672c3307fc68aea858c5d7f901f606a73a99))

## [2.0.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v1.1.0...v2.0.0) (2020-12-28)


### ⚠ BREAKING CHANGES

* GetUniversalMetadata method removed from the API, GetMetadata method should be used instead feat: reporting requests support longer date ranges (#43)

### Bug Fixes

* GetUniversalMetadata method removed from the API, GetMetadata method should be used instead feat: reporting requests support longer date ranges ([#43](https://www.github.com/googleapis/nodejs-analytics-data/issues/43)) ([661ee0e](https://www.github.com/googleapis/nodejs-analytics-data/commit/661ee0e27abea9978d09ee06b2d6c259712b351f))

## [1.1.0](https://www.github.com/googleapis/nodejs-analytics-data/compare/v1.0.2...v1.1.0) (2020-11-11)


### Features

* added RunRealtimeReport method that returns a customized report of realtime event data for a GA4 property docs: minor documentation updates ([#29](https://www.github.com/googleapis/nodejs-analytics-data/issues/29)) ([58da0fe](https://www.github.com/googleapis/nodejs-analytics-data/commit/58da0fe05418d91db1bbb698d787d3863266ff30))

### [1.0.2](https://www.github.com/googleapis/nodejs-analytics-data/compare/v1.0.1...v1.0.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#30](https://www.github.com/googleapis/nodejs-analytics-data/issues/30)) ([f5c9f64](https://www.github.com/googleapis/nodejs-analytics-data/commit/f5c9f64b3074a41ba590ce8be9aadd9961c0ab57))

### [1.0.1](https://www.github.com/googleapis/nodejs-analytics-data/compare/v1.0.0...v1.0.1) (2020-11-03)


### Bug Fixes

* **deps:** update dependency @google-cloud/billing to v2 ([#7](https://www.github.com/googleapis/nodejs-analytics-data/issues/7)) ([de83230](https://www.github.com/googleapis/nodejs-analytics-data/commit/de832308358059c3dbd59a4e9b118b5c2a208570))

## 1.0.0 (2020-09-02)


### ⚠ BREAKING CHANGES

* generate first stub of library (#1)

### Features

* generate first stub of library ([#1](https://www.github.com/googleapis/nodejs-analytics-data/issues/1)) ([5514d1c](https://www.github.com/googleapis/nodejs-analytics-data/commit/5514d1cc64de222e29ea6c3e6c3ca6f80bce9eea))
