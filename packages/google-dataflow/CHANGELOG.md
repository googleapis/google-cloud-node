# Changelog

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/dataflow-v2.0.1...dataflow-v2.1.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [2.0.1](https://github.com/googleapis/nodejs-dataflow/compare/v2.0.0...v2.0.1) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#80](https://github.com/googleapis/nodejs-dataflow/issues/80)) ([9054e83](https://github.com/googleapis/nodejs-dataflow/commit/9054e835bff17366ca8810852c9d128b2ce6660f))
* Better support for fallback mode ([#76](https://github.com/googleapis/nodejs-dataflow/issues/76)) ([7b4c304](https://github.com/googleapis/nodejs-dataflow/commit/7b4c30408db223dc273b4d82a7402f945b30aa21))
* Change import long to require ([#77](https://github.com/googleapis/nodejs-dataflow/issues/77)) ([531996b](https://github.com/googleapis/nodejs-dataflow/commit/531996bb8c228f653dee2adf4a0488f275e85710))
* **deps:** Use google-gax v3.5.2 ([#87](https://github.com/googleapis/nodejs-dataflow/issues/87)) ([9f856a5](https://github.com/googleapis/nodejs-dataflow/commit/9f856a5f95c68fe7310fdd5e4de747d551192136))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-dataflow/issues/1553)) ([#79](https://github.com/googleapis/nodejs-dataflow/issues/79)) ([a0924da](https://github.com/googleapis/nodejs-dataflow/commit/a0924dac7a384c659650a3c61e4072d7206df678))
* **docs:** Document fallback rest option ([#72](https://github.com/googleapis/nodejs-dataflow/issues/72)) ([bb637f7](https://github.com/googleapis/nodejs-dataflow/commit/bb637f7a64b1f3cbe78e45d1584a52874904a607))
* Preserve default values in x-goog-request-params header ([#81](https://github.com/googleapis/nodejs-dataflow/issues/81)) ([18e64cc](https://github.com/googleapis/nodejs-dataflow/commit/18e64cc81f6d02e3a137f0a3cbee5e38bbaac5d9))
* Regenerated protos JS and TS definitions ([#90](https://github.com/googleapis/nodejs-dataflow/issues/90)) ([920d3fe](https://github.com/googleapis/nodejs-dataflow/commit/920d3fea4f8900113fd24f72debc2d417e9c53c0))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-dataflow/issues/1546)) ([#78](https://github.com/googleapis/nodejs-dataflow/issues/78)) ([884ea27](https://github.com/googleapis/nodejs-dataflow/commit/884ea27767fb25ff73d01899250000ea53360be5))
* use google-gax v3.3.0 ([a0924da](https://github.com/googleapis/nodejs-dataflow/commit/a0924dac7a384c659650a3c61e4072d7206df678))

## [2.0.0](https://github.com/googleapis/nodejs-dataflow/compare/v1.2.0...v2.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#65)

### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#68](https://github.com/googleapis/nodejs-dataflow/issues/68)) ([f6432cb](https://github.com/googleapis/nodejs-dataflow/commit/f6432cb34bae0773494dc29f30782c854892e6a0))


### Build System

* update library to use Node 12 ([#65](https://github.com/googleapis/nodejs-dataflow/issues/65)) ([a515a4a](https://github.com/googleapis/nodejs-dataflow/commit/a515a4a9be3a6dd0e307858312906f2022d65d25))

## [1.2.0](https://github.com/googleapis/nodejs-dataflow/compare/v1.1.0...v1.2.0) (2022-04-04)


### Features

* Add the ability to plumb environment capabilities through v1beta3 protos. ([#53](https://github.com/googleapis/nodejs-dataflow/issues/53)) ([41c8fd6](https://github.com/googleapis/nodejs-dataflow/commit/41c8fd603155fd9158f88fdb95807c988f59875c))
* new parameters in FlexTemplateRuntimeEnvironment ([f8bd01b](https://github.com/googleapis/nodejs-dataflow/commit/f8bd01b0c55f33e00ba33671ebeb2a8cabd51bbb))


### Bug Fixes

* Use http binding with location field as primary http bindings ([6bfb6bd](https://github.com/googleapis/nodejs-dataflow/commit/6bfb6bdee7f50b8353aa7fde8e4f764704ddb81a))

## [1.1.0](https://www.github.com/googleapis/nodejs-dataflow/compare/v1.0.2...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#18](https://www.github.com/googleapis/nodejs-dataflow/issues/18)) ([ac48141](https://www.github.com/googleapis/nodejs-dataflow/commit/ac48141e34e60d95a6037e30d33b28db9467c2b7))

### [1.0.2](https://www.github.com/googleapis/nodejs-dataflow/compare/v1.0.1...v1.0.2) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#15](https://www.github.com/googleapis/nodejs-dataflow/issues/15)) ([af1172d](https://www.github.com/googleapis/nodejs-dataflow/commit/af1172da72a97804f9d50ff91b388f20ff90124f))
* **deps:** google-gax v2.24.1 ([#17](https://www.github.com/googleapis/nodejs-dataflow/issues/17)) ([d177477](https://www.github.com/googleapis/nodejs-dataflow/commit/d177477188036fa675a1b3f32f5d85aca27c4fcc))

### [1.0.1](https://www.github.com/googleapis/nodejs-dataflow/compare/v1.0.0...v1.0.1) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#6](https://www.github.com/googleapis/nodejs-dataflow/issues/6)) ([c689196](https://www.github.com/googleapis/nodejs-dataflow/commit/c689196fd00e35fe702e16a6642e7fb06c9907b2))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#8](https://www.github.com/googleapis/nodejs-dataflow/issues/8)) ([ce940c1](https://www.github.com/googleapis/nodejs-dataflow/commit/ce940c13c9730f7ede30ad5dfc10cceb56c6953b))

## 1.0.0 (2021-07-08)


### Features

* add initial samples and tests ([#2](https://www.github.com/googleapis/nodejs-dataflow/issues/2)) ([684094d](https://www.github.com/googleapis/nodejs-dataflow/commit/684094dfa2141f4b1974e6bd0cc906c16097a0ab))
* initial stub of library ([3891183](https://www.github.com/googleapis/nodejs-dataflow/commit/389118343ec1a351b58755522f5336d2dfc3a976))
* push templated files ([e05f9a8](https://www.github.com/googleapis/nodejs-dataflow/commit/e05f9a8d276dc9ddf6916620a951788ee42f41f5))
