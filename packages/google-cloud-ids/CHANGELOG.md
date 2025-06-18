# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/ids-v4.0.1...ids-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/ids-v4.0.0...ids-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/ids-v3.3.0...ids-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/ids-v3.2.0...ids-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5353](https://github.com/googleapis/google-cloud-node/issues/5353)) ([1a2388d](https://github.com/googleapis/google-cloud-node/commit/1a2388d7096176b4155a0c4f01e15ffb8c4d5096))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/ids-v3.1.0...ids-v3.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/ids-v3.0.1...ids-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/ids-v3.0.0...ids-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/ids-v2.2.2...ids-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/ids-v2.2.1...ids-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/ids-v2.2.0...ids-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/ids-v2.1.2...ids-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.1.2](https://github.com/googleapis/nodejs-ids/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#62](https://github.com/googleapis/nodejs-ids/issues/62)) ([a20c7ed](https://github.com/googleapis/nodejs-ids/commit/a20c7eda50cfcc1230760244a8cb433b1715fb60))
* Preserve default values in x-goog-request-params header ([#55](https://github.com/googleapis/nodejs-ids/issues/55)) ([5077d92](https://github.com/googleapis/nodejs-ids/commit/5077d92010d2f94a889ee141fcce3c0cf5785e0f))
* Regenerated protos JS and TS definitions ([#65](https://github.com/googleapis/nodejs-ids/issues/65)) ([8435d1d](https://github.com/googleapis/nodejs-ids/commit/8435d1d54111121b2dbbf5a9eaff92f67083680b))

## [2.1.1](https://github.com/googleapis/nodejs-ids/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#54](https://github.com/googleapis/nodejs-ids/issues/54)) ([f97b0d0](https://github.com/googleapis/nodejs-ids/commit/f97b0d035bac9f822353328346ee9b2a49b09431))
* Better support for fallback mode ([#49](https://github.com/googleapis/nodejs-ids/issues/49)) ([681eb87](https://github.com/googleapis/nodejs-ids/commit/681eb8785d22aa934cd8be3ec5fe20f56a1b7d57))
* Change import long to require ([#50](https://github.com/googleapis/nodejs-ids/issues/50)) ([0c1501e](https://github.com/googleapis/nodejs-ids/commit/0c1501e96d1b64bb1b9d4f26396b12cfb685a99b))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-ids/issues/1553)) ([#53](https://github.com/googleapis/nodejs-ids/issues/53)) ([9056d31](https://github.com/googleapis/nodejs-ids/commit/9056d31088344ad061bef7e44818b163b526cf9e))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-ids/issues/1546)) ([#52](https://github.com/googleapis/nodejs-ids/issues/52)) ([b25aa46](https://github.com/googleapis/nodejs-ids/commit/b25aa4678c64e77666a9a4b9af29e11e0c214719))

## [2.1.0](https://github.com/googleapis/nodejs-ids/compare/v2.0.0...v2.1.0) (2022-07-12)


### Features

* support regapic LRO ([#44](https://github.com/googleapis/nodejs-ids/issues/44)) ([c2f9093](https://github.com/googleapis/nodejs-ids/commit/c2f909353ef73faeb3c272d0384490739b1134af))

## [2.0.0](https://github.com/googleapis/nodejs-ids/compare/v1.1.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#38)

### Build System

* update library to use Node 12 ([#38](https://github.com/googleapis/nodejs-ids/issues/38)) ([64e894b](https://github.com/googleapis/nodejs-ids/commit/64e894b0f0f77b5df7ce1a536ae56285b01821c6))

## [1.1.0](https://github.com/googleapis/nodejs-ids/compare/v1.0.0...v1.1.0) (2022-03-23)


### Features

* promote to stable ([#22](https://github.com/googleapis/nodejs-ids/issues/22)) ([3ed2274](https://github.com/googleapis/nodejs-ids/commit/3ed22745929a394165bbf7f853c80305c9900ae3)), closes [#7](https://github.com/googleapis/nodejs-ids/issues/7)

## 1.0.0 (2022-01-10)


### Features

* add templated files from docker image ([d401118](https://www.github.com/googleapis/nodejs-ids/commit/d4011189369a95da6da492fdd4612a260ccf4909))
* add tests and samples to library ([#5](https://www.github.com/googleapis/nodejs-ids/issues/5)) ([99b8cbe](https://www.github.com/googleapis/nodejs-ids/commit/99b8cbe7440da0157031ef41eb220d12e98d256b))
* initial stub of library ([1301c7c](https://www.github.com/googleapis/nodejs-ids/commit/1301c7cd33c3e83498069b7b21caa211014a6737))
