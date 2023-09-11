# Changelog

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/workflows-v3.0.0...workflows-v3.1.0) (2023-09-06)


### Features

* [workflows] add UNAVAILABLE and QUEUED to state enum ([#4563](https://github.com/googleapis/google-cloud-node/issues/4563)) ([25d4a43](https://github.com/googleapis/google-cloud-node/commit/25d4a43dac6acc96b7fa81e5c8dfda80522e3c4c))
* [workflows] add UNAVAILABLE to state enum of workflow deployment ([#4553](https://github.com/googleapis/google-cloud-node/issues/4553)) ([428bd8f](https://github.com/googleapis/google-cloud-node/commit/428bd8fa31750c400810c911c29ab0687514642f))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/workflows-v2.3.2...workflows-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.3.2](https://github.com/googleapis/google-cloud-node/compare/workflows-v2.3.1...workflows-v2.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/workflows-v2.3.0...workflows-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/workflows-v2.2.0...workflows-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [2.2.0](https://github.com/googleapis/nodejs-workflows/compare/v2.1.1...v2.2.0) (2022-11-11)


### Features

* Accept google-gax instance as a parameter ([#161](https://github.com/googleapis/nodejs-workflows/issues/161)) ([d0ae307](https://github.com/googleapis/nodejs-workflows/commit/d0ae307edf537b071b2425f718354414dcc1b3c4))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#172](https://github.com/googleapis/nodejs-workflows/issues/172)) ([9dc2c62](https://github.com/googleapis/nodejs-workflows/commit/9dc2c6267c90cc5d1273801645b182a73e745ff7))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-workflows/issues/1553)) ([#160](https://github.com/googleapis/nodejs-workflows/issues/160)) ([ce8fb0f](https://github.com/googleapis/nodejs-workflows/commit/ce8fb0f19788a4d7e95a3cdcc41432a7307e2275))
* Preserve default values in x-goog-request-params header ([#165](https://github.com/googleapis/nodejs-workflows/issues/165)) ([741cf60](https://github.com/googleapis/nodejs-workflows/commit/741cf608e1b775a7d9529bbb0a42029bcac7e752))
* Regenerated protos JS and TS definitions ([#175](https://github.com/googleapis/nodejs-workflows/issues/175)) ([2109309](https://github.com/googleapis/nodejs-workflows/commit/21093097fe481347737294d100ae9434a5c52845))
* use google-gax v3.3.0 ([ce8fb0f](https://github.com/googleapis/nodejs-workflows/commit/ce8fb0f19788a4d7e95a3cdcc41432a7307e2275))

## [2.1.1](https://github.com/googleapis/nodejs-workflows/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#154](https://github.com/googleapis/nodejs-workflows/issues/154)) ([28911e9](https://github.com/googleapis/nodejs-workflows/commit/28911e9643f23783568b1a855792067b5ad8dde4))
* change import long to require ([#156](https://github.com/googleapis/nodejs-workflows/issues/156)) ([c236dda](https://github.com/googleapis/nodejs-workflows/commit/c236dda4b8c9d9098ded34119face5bfaa224552))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-workflows/issues/1546)) ([#159](https://github.com/googleapis/nodejs-workflows/issues/159)) ([971982a](https://github.com/googleapis/nodejs-workflows/commit/971982aa6d8394f2ff08c19ed879074caedfe591))

## [2.1.0](https://github.com/googleapis/nodejs-workflows/compare/v2.0.0...v2.1.0) (2022-06-29)


### Features

* support regapic LRO ([#146](https://github.com/googleapis/nodejs-workflows/issues/146)) ([a513afb](https://github.com/googleapis/nodejs-workflows/commit/a513afb8499dd3e377b0c43ee31aeaacbf39c0e9))

## [2.0.0](https://github.com/googleapis/nodejs-workflows/compare/v1.4.0...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#140)

### Bug Fixes

* **workflows:** add ancillary service bindings to service_yaml ([#116](https://github.com/googleapis/nodejs-workflows/issues/116)) ([e6b432f](https://github.com/googleapis/nodejs-workflows/commit/e6b432f51dfcff0249ac80f368705340218124f6))


### Build System

* update library to use Node 12 ([#140](https://github.com/googleapis/nodejs-workflows/issues/140)) ([e9f9ff9](https://github.com/googleapis/nodejs-workflows/commit/e9f9ff95d1c3374d98986cc3d13e011f760d406e))

## [1.4.0](https://www.github.com/googleapis/nodejs-workflows/compare/v1.3.1...v1.4.0) (2021-11-08)


### Features

* add a stack_trace field to the Error messages specifying where the error occured feat: add call_log_level field to Execution messages doc: clarify requirement to escape strings within JSON arguments ([#106](https://www.github.com/googleapis/nodejs-workflows/issues/106)) ([7ba49ae](https://www.github.com/googleapis/nodejs-workflows/commit/7ba49ae965a80e5a44e7add4d626524635c2f3e1))

### [1.3.1](https://www.github.com/googleapis/nodejs-workflows/compare/v1.3.0...v1.3.1) (2021-09-09)


### Bug Fixes

* **build:** migrate to using main branch ([#92](https://www.github.com/googleapis/nodejs-workflows/issues/92)) ([1f6e084](https://www.github.com/googleapis/nodejs-workflows/commit/1f6e084c99b648f9e02a5067ef6e7be4c04c1392))

## [1.3.0](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.6...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#89](https://www.github.com/googleapis/nodejs-workflows/issues/89)) ([c17023b](https://www.github.com/googleapis/nodejs-workflows/commit/c17023b8091a2372ff12ee8dd622bf1db82bcefa))

### [1.2.6](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.5...v1.2.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#87](https://www.github.com/googleapis/nodejs-workflows/issues/87)) ([ccc4a47](https://www.github.com/googleapis/nodejs-workflows/commit/ccc4a47846bbc6a8725a3abecf899cbacf6a10a6))

### [1.2.5](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.4...v1.2.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#80](https://www.github.com/googleapis/nodejs-workflows/issues/80)) ([0b782cf](https://www.github.com/googleapis/nodejs-workflows/commit/0b782cff0eddcd158fcbd272c76e54e35b6d336c))

### [1.2.4](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.3...v1.2.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#78](https://www.github.com/googleapis/nodejs-workflows/issues/78)) ([5e2c265](https://www.github.com/googleapis/nodejs-workflows/commit/5e2c2659d25c2927db2e93091ccd426909a079e5))

### [1.2.3](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.2...v1.2.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#75](https://www.github.com/googleapis/nodejs-workflows/issues/75)) ([878255f](https://www.github.com/googleapis/nodejs-workflows/commit/878255f1c9e8be666f469eb35d486efa6ebb3e20))

### [1.2.2](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.1...v1.2.2) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#69](https://www.github.com/googleapis/nodejs-workflows/issues/69)) ([8e001de](https://www.github.com/googleapis/nodejs-workflows/commit/8e001de596a68c4705086ece713f1c8712462739))

### [1.2.1](https://www.github.com/googleapis/nodejs-workflows/compare/v1.2.0...v1.2.1) (2021-05-26)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#61](https://www.github.com/googleapis/nodejs-workflows/issues/61)) ([7f776b8](https://www.github.com/googleapis/nodejs-workflows/commit/7f776b893eaac71b35512be32c13f7c1e5f00cde))

## [1.2.0](https://www.github.com/googleapis/nodejs-workflows/compare/v1.1.0...v1.2.0) (2021-05-10)


### Features

* adds v1 API surface  ([#52](https://www.github.com/googleapis/nodejs-workflows/issues/52)) ([c1ddc23](https://www.github.com/googleapis/nodejs-workflows/commit/c1ddc237ea9965881176d93b3fe678da260fc4fc))
* update release level to GA ([#54](https://www.github.com/googleapis/nodejs-workflows/issues/54)) ([5f05e45](https://www.github.com/googleapis/nodejs-workflows/commit/5f05e45f113756f5727fcd4a900652dd51bdb8ac))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#48](https://www.github.com/googleapis/nodejs-workflows/issues/48)) ([e642151](https://www.github.com/googleapis/nodejs-workflows/commit/e6421515b0a34ed1e9e5290c7fafe6fb7ad7390e))

## [1.1.0](https://www.github.com/googleapis/nodejs-workflows/compare/v1.0.2...v1.1.0) (2021-01-09)


### Features

* adds style enumeration ([#30](https://www.github.com/googleapis/nodejs-workflows/issues/30)) ([de3c259](https://www.github.com/googleapis/nodejs-workflows/commit/de3c259d08dae7edd775310c0db35fa089f58db3))

### [1.0.2](https://www.github.com/googleapis/nodejs-workflows/compare/v1.0.1...v1.0.2) (2020-11-25)


### Bug Fixes

* better fallback feature detection, jsdoc update ([#23](https://www.github.com/googleapis/nodejs-workflows/issues/23)) ([2d4e44d](https://www.github.com/googleapis/nodejs-workflows/commit/2d4e44d789185b02735acb295c2431d9f02441e5))

### [1.0.1](https://www.github.com/googleapis/nodejs-workflows/compare/v1.0.0...v1.0.1) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#20](https://www.github.com/googleapis/nodejs-workflows/issues/20)) ([42bbbc5](https://www.github.com/googleapis/nodejs-workflows/commit/42bbbc51d0445b49ac80ec435e8ac2b38455d8ee))

## 1.0.0 (2020-09-17)


### ⚠ BREAKING CHANGES

* initial library generation (#8)

### Features

* add .repo-metadata.json and generate README ([#4](https://www.github.com/googleapis/nodejs-workflows/issues/4)) ([bddc804](https://www.github.com/googleapis/nodejs-workflows/commit/bddc80498f96dca332f06cc9f3f352d1569b177f))
* convert to TypeScript ([#2](https://www.github.com/googleapis/nodejs-workflows/issues/2)) ([18776d2](https://www.github.com/googleapis/nodejs-workflows/commit/18776d2192c7a6bff80d908c43511eba45d9b76d))
* initial implementation of library ([da40c83](https://www.github.com/googleapis/nodejs-workflows/commit/da40c838dffb7307775bfdd3859bdf8e12998bc5))
* initial library generation ([#8](https://www.github.com/googleapis/nodejs-workflows/issues/8)) ([159871a](https://www.github.com/googleapis/nodejs-workflows/commit/159871a2b5fb24bae7d5b830b6e9f39e75405591))


### Bug Fixes

* import should be from [@google-cloud](https://www.github.com/google-cloud) ([#5](https://www.github.com/googleapis/nodejs-workflows/issues/5)) ([5dd6461](https://www.github.com/googleapis/nodejs-workflows/commit/5dd6461833e2d555dbae0572c7cccef00f5df40e))
* package name was not set correctly in synth.py ([#6](https://www.github.com/googleapis/nodejs-workflows/issues/6)) ([e307a2d](https://www.github.com/googleapis/nodejs-workflows/commit/e307a2d85bc3953afae5a9098db761fa908c1c7c))
