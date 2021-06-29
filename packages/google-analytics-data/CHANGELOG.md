# Changelog

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
