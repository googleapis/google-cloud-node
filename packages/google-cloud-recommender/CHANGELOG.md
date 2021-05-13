# Changelog

### [4.2.1](https://www.github.com/googleapis/nodejs-recommender/compare/v4.2.0...v4.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#167](https://www.github.com/googleapis/nodejs-recommender/issues/167)) ([01f400c](https://www.github.com/googleapis/nodejs-recommender/commit/01f400cbc89403727c5fd8b55c151d30dd8bd78c))

## [4.2.0](https://www.github.com/googleapis/nodejs-recommender/compare/v4.1.0...v4.2.0) (2021-01-27)


### Features

* add bindings for folder/org type resources for protos in recommendations, insights and recommender_service to enable v1 api for folder/org ([5ec8c2d](https://www.github.com/googleapis/nodejs-recommender/commit/5ec8c2daf1c5ad58e568761d372bb8de3e5c0063))
* Add support for "billingAccounts" as another parent resource name for recommendations and insights APIs. ([5ec8c2d](https://www.github.com/googleapis/nodejs-recommender/commit/5ec8c2daf1c5ad58e568761d372bb8de3e5c0063))

## [4.1.0](https://www.github.com/googleapis/nodejs-recommender/compare/v4.0.0...v4.1.0) (2021-01-12)


### Features

* introduce style enumeration ([#141](https://www.github.com/googleapis/nodejs-recommender/issues/141)) ([478a062](https://www.github.com/googleapis/nodejs-recommender/commit/478a06281fe0845035ec8bb48e531eae25066c66))

## [4.0.0](https://www.github.com/googleapis/nodejs-recommender/compare/v3.2.2...v4.0.0) (2021-01-07)


### ⚠ BREAKING CHANGES

* resource path helper recommenderPath has been removed

### Features

* Add support for "billingAccounts" as another parent resource name for recommendations and insights APIs. ([#138](https://www.github.com/googleapis/nodejs-recommender/issues/138)) ([42d07c5](https://www.github.com/googleapis/nodejs-recommender/commit/42d07c5a4e802882f94a1e3272ad8591cb370236))

### [3.2.2](https://www.github.com/googleapis/nodejs-recommender/compare/v3.2.1...v3.2.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([733f1d3](https://www.github.com/googleapis/nodejs-recommender/commit/733f1d3fb81fcf435be32aded223fcae0a9c414e))

### [3.2.1](https://www.github.com/googleapis/nodejs-recommender/compare/v3.2.0...v3.2.1) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#131](https://www.github.com/googleapis/nodejs-recommender/issues/131)) ([3c11c71](https://www.github.com/googleapis/nodejs-recommender/commit/3c11c71f11a42930227cda2cbc939728afdc11fe))
* updating the v1 retry params name for ListInsights, GetInsight, and MarkInsightAccepted. ([#128](https://www.github.com/googleapis/nodejs-recommender/issues/128)) ([7785604](https://www.github.com/googleapis/nodejs-recommender/commit/7785604f0bcc763224dc3bd13d552578c3cddb30))

## [3.2.0](https://www.github.com/googleapis/nodejs-recommender/compare/v3.1.1...v3.2.0) (2020-07-13)


### Features

* adds methods for interacting with insights ([#96](https://www.github.com/googleapis/nodejs-recommender/issues/96)) ([0004d75](https://www.github.com/googleapis/nodejs-recommender/commit/0004d75f5681e0231473ab2abd167c1c1eeb3b8c))

### [3.1.1](https://www.github.com/googleapis/nodejs-recommender/compare/v3.1.0...v3.1.1) (2020-07-12)


### Bug Fixes

* update node issue template ([#86](https://www.github.com/googleapis/nodejs-recommender/issues/86)) ([93654e9](https://www.github.com/googleapis/nodejs-recommender/commit/93654e9fe772bc7a9adbcd8d69ddd731be26810d))

## [3.1.0](https://www.github.com/googleapis/nodejs-recommender/compare/v3.0.0...v3.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#82](https://www.github.com/googleapis/nodejs-recommender/issues/82)) ([40a4cc3](https://www.github.com/googleapis/nodejs-recommender/commit/40a4cc30711eef85439b538f4da62091777bd79c))


### Bug Fixes

* handle fallback option properly ([#85](https://www.github.com/googleapis/nodejs-recommender/issues/85)) ([21a6a00](https://www.github.com/googleapis/nodejs-recommender/commit/21a6a00b7283a8761e412a5a1b005359d0470e37))

## [3.0.0](https://www.github.com/googleapis/nodejs-recommender/compare/v2.2.0...v3.0.0) (2020-05-14)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#53](https://www.github.com/googleapis/nodejs-recommender/issues/53)) ([71ad927](https://www.github.com/googleapis/nodejs-recommender/commit/71ad9276016222d46e4b30c43fbe1196e2731485))
* promote to GA ([#78](https://www.github.com/googleapis/nodejs-recommender/issues/78)) ([fa7e7b8](https://www.github.com/googleapis/nodejs-recommender/commit/fa7e7b86018346768e83caea64ee02048efb50ee)), closes [#10](https://www.github.com/googleapis/nodejs-recommender/issues/10)


### Bug Fixes

* export explicit version from protos.js ([#58](https://www.github.com/googleapis/nodejs-recommender/issues/58)) ([d1608ef](https://www.github.com/googleapis/nodejs-recommender/commit/d1608ef4d2642fd4f067f58eafb53c8998c7f1db))
* regen protos and tests, formatting ([#75](https://www.github.com/googleapis/nodejs-recommender/issues/75)) ([76f952f](https://www.github.com/googleapis/nodejs-recommender/commit/76f952f57c1c3467b959ca4700a07a320e1e2f31))
* remove eslint, update gax, fix generated protos, run the generator ([#63](https://www.github.com/googleapis/nodejs-recommender/issues/63)) ([0095142](https://www.github.com/googleapis/nodejs-recommender/commit/0095142c26068397aa2cf84f65e8fe2c2da0bd26))

## [2.2.0](https://www.github.com/googleapis/nodejs-recommender/compare/v2.1.0...v2.2.0) (2020-03-06)


### Features

* deferred client initialization ([#38](https://www.github.com/googleapis/nodejs-recommender/issues/38)) ([6a19840](https://www.github.com/googleapis/nodejs-recommender/commit/6a19840c1d51ff7b930ea7969dbbe32beda0fefd))

## [2.1.0](https://www.github.com/googleapis/nodejs-recommender/compare/v2.0.2...v2.1.0) (2020-02-29)


### Features

* export protos in src/index.ts ([941ad76](https://www.github.com/googleapis/nodejs-recommender/commit/941ad7602b582311abd5d50eb45bdba92a4b2497))

### [2.0.2](https://www.github.com/googleapis/nodejs-recommender/compare/v2.0.1...v2.0.2) (2020-02-12)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([acea090](https://www.github.com/googleapis/nodejs-recommender/commit/acea09085a4caddfaa69c35f37dd83f32ed81987))

### [2.0.1](https://www.github.com/googleapis/nodejs-recommender/compare/v2.0.0...v2.0.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([3934bd8](https://www.github.com/googleapis/nodejs-recommender/commit/3934bd8d2aaac6985adb40b0f74b83448015008e))

## [2.0.0](https://www.github.com/googleapis/nodejs-recommender/compare/v1.0.0...v2.0.0) (2020-01-22)


### ⚠ BREAKING CHANGES

* upgrade to v1 client (#8)

### Features

* upgrade to v1 client ([#8](https://www.github.com/googleapis/nodejs-recommender/issues/8)) ([d31c634](https://www.github.com/googleapis/nodejs-recommender/commit/d31c634bffe0db521348d81180780d9da223d58d))

## 1.0.0 (2020-01-14)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-recommender/issues/1)) ([a5187e5](https://www.github.com/googleapis/nodejs-recommender/commit/a5187e50120a0bd2bba5514acd945ad9ef5a4dcb))
* stub out initial version of library ([c27ee9f](https://www.github.com/googleapis/nodejs-recommender/commit/c27ee9fb6bf1ec3821c72df77a0aef269e86f2fd))
