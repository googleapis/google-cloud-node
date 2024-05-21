# Changelog

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/dms-v3.3.0...dms-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/dms-v3.2.0...dms-v3.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/dms-v3.1.0...dms-v3.2.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/dms-v3.0.0...dms-v3.1.0) (2023-09-06)


### Features

* [clouddms] Adding GenerateTcpProxyScript API ([#4610](https://github.com/googleapis/google-cloud-node/issues/4610)) ([1a79bf7](https://github.com/googleapis/google-cloud-node/commit/1a79bf704f9cae5b58df19778f52496aeaf9bc06))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/dms-v2.3.0...dms-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/dms-v2.2.2...dms-v2.3.0) (2023-05-20)


### Features

* [clouddms] add Oracle to PostgreSQL migration APIs ([#4285](https://github.com/googleapis/google-cloud-node/issues/4285)) ([65fadd5](https://github.com/googleapis/google-cloud-node/commit/65fadd5fedea461b89cf7aeeb0f825a83dd81e02))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/dms-v2.2.1...dms-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/dms-v2.2.0...dms-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/dms-v2.1.2...dms-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [2.1.2](https://github.com/googleapis/nodejs-dms/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#115](https://github.com/googleapis/nodejs-dms/issues/115)) ([d260ba2](https://github.com/googleapis/nodejs-dms/commit/d260ba2ae215ed5f8fefc67c2208e3597aa3c90c))
* Preserve default values in x-goog-request-params header ([#108](https://github.com/googleapis/nodejs-dms/issues/108)) ([78512f5](https://github.com/googleapis/nodejs-dms/commit/78512f56e32dd9758653220c5751dda5f03f9dab))
* Regenerated protos JS and TS definitions ([#118](https://github.com/googleapis/nodejs-dms/issues/118)) ([64fdb51](https://github.com/googleapis/nodejs-dms/commit/64fdb51490a9b16182b20509710b637848a00409))

## [2.1.1](https://github.com/googleapis/nodejs-dms/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#107](https://github.com/googleapis/nodejs-dms/issues/107)) ([b90e1bf](https://github.com/googleapis/nodejs-dms/commit/b90e1bf394cfd86007241c8d786ddeca2bbd7178))
* Better support for fallback mode ([#102](https://github.com/googleapis/nodejs-dms/issues/102)) ([8ac6651](https://github.com/googleapis/nodejs-dms/commit/8ac6651be4422f4cfa4d43aa0fa050e5c186627a))
* Change import long to require ([#103](https://github.com/googleapis/nodejs-dms/issues/103)) ([0d7d555](https://github.com/googleapis/nodejs-dms/commit/0d7d55597c70bb6edc5f2dcaf7840fae4e8644a3))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-dms/issues/1553)) ([#106](https://github.com/googleapis/nodejs-dms/issues/106)) ([9e7d8e4](https://github.com/googleapis/nodejs-dms/commit/9e7d8e46f989591ade8b06559516bd2c56f83658))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-dms/issues/1546)) ([#105](https://github.com/googleapis/nodejs-dms/issues/105)) ([85ff0f7](https://github.com/googleapis/nodejs-dms/commit/85ff0f7da4a925d96b477faa6161bcf2b8244b51))

## [2.1.0](https://github.com/googleapis/nodejs-dms/compare/v2.0.0...v2.1.0) (2022-07-12)


### Features

* support regapic LRO ([#97](https://github.com/googleapis/nodejs-dms/issues/97)) ([733c394](https://github.com/googleapis/nodejs-dms/commit/733c3940e86ca015fc61223a2ec0de41a25e4e89))

## [2.0.0](https://github.com/googleapis/nodejs-dms/compare/v1.1.0...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#90)

### Build System

* update library to use Node 12 ([#90](https://github.com/googleapis/nodejs-dms/issues/90)) ([168f46f](https://github.com/googleapis/nodejs-dms/commit/168f46f8314ff0b6ce59ca8e8236b26a98e923ab))

## [1.1.0](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.5...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#39](https://www.github.com/googleapis/nodejs-dms/issues/39)) ([ab31ef7](https://www.github.com/googleapis/nodejs-dms/commit/ab31ef7135716e3e304cf4988900ec59b0a77bef))

### [1.0.5](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.4...v1.0.5) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#37](https://www.github.com/googleapis/nodejs-dms/issues/37)) ([ee8483a](https://www.github.com/googleapis/nodejs-dms/commit/ee8483a069e32a189579d44423fd726e9731b2e9))

### [1.0.4](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.3...v1.0.4) (2021-08-13)


### Bug Fixes

* **build:** migrate to using main branch ([#35](https://www.github.com/googleapis/nodejs-dms/issues/35)) ([7a25f92](https://www.github.com/googleapis/nodejs-dms/commit/7a25f9251f1877877e79f4477c073952de29348e))

### [1.0.3](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.2...v1.0.3) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#27](https://www.github.com/googleapis/nodejs-dms/issues/27)) ([c3858dc](https://www.github.com/googleapis/nodejs-dms/commit/c3858dcfbf41d4a4eaf3eecd9056a72b6623a14b))

### [1.0.2](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.1...v1.0.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#25](https://www.github.com/googleapis/nodejs-dms/issues/25)) ([1ea55d9](https://www.github.com/googleapis/nodejs-dms/commit/1ea55d95e5648be81a6a85d9260ba0bf27f82571))

### [1.0.1](https://www.github.com/googleapis/nodejs-dms/compare/v1.0.0...v1.0.1) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#22](https://www.github.com/googleapis/nodejs-dms/issues/22)) ([cbee80d](https://www.github.com/googleapis/nodejs-dms/commit/cbee80d1db4e8a3982630a9a863f82e98ffeddf2))

## 1.0.0 (2021-05-25)


### Features

* add samples ([#2](https://www.github.com/googleapis/nodejs-dms/issues/2)) ([18b317a](https://www.github.com/googleapis/nodejs-dms/commit/18b317a010278321a39a0f9052c74f128806ea92))
* initial release ([1746468](https://www.github.com/googleapis/nodejs-dms/commit/17464680ee5773136f9a1136d2599307072735b8))


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#3](https://www.github.com/googleapis/nodejs-dms/issues/3)) ([dbc9a20](https://www.github.com/googleapis/nodejs-dms/commit/dbc9a204e0925d6c6494a3d9e378d1e9670e6ef9))
