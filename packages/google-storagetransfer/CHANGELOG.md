# Changelog

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v3.0.0...storage-transfer-v3.0.1) (2023-09-06)


### Bug Fixes

* [storagetransfer,grafeas] simplify logic for HTTP/1.1 REST fallback option ([#4590](https://github.com/googleapis/google-cloud-node/issues/4590)) ([14fffdf](https://github.com/googleapis/google-cloud-node/commit/14fffdf46568466e9ae02d5585da9721aa9ad83c))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v2.4.0...storage-transfer-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4466](https://github.com/googleapis/google-cloud-node/issues/4466)) ([fa1520c](https://github.com/googleapis/google-cloud-node/commit/fa1520c3eb526efd3523d9cea349ed31683d5889))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v2.3.2...storage-transfer-v2.4.0) (2023-06-28)


### Features

* [storagetransfer] add event driven transfer configuration ([#4376](https://github.com/googleapis/google-cloud-node/issues/4376)) ([f6f3726](https://github.com/googleapis/google-cloud-node/commit/f6f3726caf528c591f55772c23b8836a2657c2c8))

## [2.3.2](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v2.3.1...storage-transfer-v2.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v2.3.0...storage-transfer-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3991](https://github.com/googleapis/google-cloud-node/issues/3991)) ([c6326d9](https://github.com/googleapis/google-cloud-node/commit/c6326d90abb9b649b25052e4afe7b3eb0f65bcb4))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/storage-transfer-v2.2.1...storage-transfer-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [2.2.1](https://github.com/googleapis/nodejs-storage-transfer/compare/v2.2.0...v2.2.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#121](https://github.com/googleapis/nodejs-storage-transfer/issues/121)) ([ee66be0](https://github.com/googleapis/nodejs-storage-transfer/commit/ee66be0297f1665298912c641fa9f2e1b3c2a1a7))
* Regenerated protos JS and TS definitions ([#125](https://github.com/googleapis/nodejs-storage-transfer/issues/125)) ([21ad9a7](https://github.com/googleapis/nodejs-storage-transfer/commit/21ad9a7190881ecdb8cf68fabcdc4fb42ffc626b))

## [2.2.0](https://github.com/googleapis/nodejs-storage-transfer/compare/v2.1.2...v2.2.0) (2022-09-23)


### Features

* add AWS S3 compatible data source ([35ae4f8](https://github.com/googleapis/nodejs-storage-transfer/commit/35ae4f8ef13c1a71ced84b919542a79fe93fcd01))
* add default retry configuration ([35ae4f8](https://github.com/googleapis/nodejs-storage-transfer/commit/35ae4f8ef13c1a71ced84b919542a79fe93fcd01))
* add DeleteTransferJob operation ([35ae4f8](https://github.com/googleapis/nodejs-storage-transfer/commit/35ae4f8ef13c1a71ced84b919542a79fe93fcd01))


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#94](https://github.com/googleapis/nodejs-storage-transfer/issues/94)) ([35ae4f8](https://github.com/googleapis/nodejs-storage-transfer/commit/35ae4f8ef13c1a71ced84b919542a79fe93fcd01))

## [2.1.2](https://github.com/googleapis/nodejs-storage-transfer/compare/v2.1.1...v2.1.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#90](https://github.com/googleapis/nodejs-storage-transfer/issues/90)) ([4a3a152](https://github.com/googleapis/nodejs-storage-transfer/commit/4a3a15289dbb40d3aabc4f2e3b192f7e0f0bbc18))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-storage-transfer/issues/1553)) ([#89](https://github.com/googleapis/nodejs-storage-transfer/issues/89)) ([c6768fb](https://github.com/googleapis/nodejs-storage-transfer/commit/c6768fb0b61e87960b4bdf6a647017b4a4a93029))

## [2.1.1](https://github.com/googleapis/nodejs-storage-transfer/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#83](https://github.com/googleapis/nodejs-storage-transfer/issues/83)) ([e5e44b9](https://github.com/googleapis/nodejs-storage-transfer/commit/e5e44b993b427afedc50be45670dfb76fd1ad3a4))
* change import long to require ([#85](https://github.com/googleapis/nodejs-storage-transfer/issues/85)) ([7a95e0b](https://github.com/googleapis/nodejs-storage-transfer/commit/7a95e0b487ccbcc58f13019a90b7fb4f80b482fd))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-storage-transfer/issues/1546)) ([#88](https://github.com/googleapis/nodejs-storage-transfer/issues/88)) ([bf0cd79](https://github.com/googleapis/nodejs-storage-transfer/commit/bf0cd793f48d21e51fa70c043377e07f2604cbc1))

## [2.1.0](https://github.com/googleapis/nodejs-storage-transfer/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* **samples:** Add POSIX & Manifest samples ([#67](https://github.com/googleapis/nodejs-storage-transfer/issues/67)) ([1056c9f](https://github.com/googleapis/nodejs-storage-transfer/commit/1056c9fde90c0c7b79a235d4c9f5f861efce3169))
* support regapic LRO ([#75](https://github.com/googleapis/nodejs-storage-transfer/issues/75)) ([cc80906](https://github.com/googleapis/nodejs-storage-transfer/commit/cc80906bcf86b68485fd62970b1b6f8a30c1123b))

## [2.0.0](https://github.com/googleapis/nodejs-storage-transfer/compare/v1.2.0...v2.0.0) (2022-05-31)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#64)

### Build System

* update library to use Node 12 ([#64](https://github.com/googleapis/nodejs-storage-transfer/issues/64)) ([908f83e](https://github.com/googleapis/nodejs-storage-transfer/commit/908f83e07c89cd14a434fe2a09f5ca22ef3956be))

## [1.2.0](https://github.com/googleapis/nodejs-storage-transfer/compare/v1.1.1...v1.2.0) (2022-04-06)


### Features

* add support for Agent Pools ([#51](https://github.com/googleapis/nodejs-storage-transfer/issues/51)) ([0baf572](https://github.com/googleapis/nodejs-storage-transfer/commit/0baf5721ce0d8a49059ec75e3b57f63c0e381e36))
* Increase STS Sample Coverage ([#42](https://github.com/googleapis/nodejs-storage-transfer/issues/42)) ([e10a3e4](https://github.com/googleapis/nodejs-storage-transfer/commit/e10a3e4fa5c712f9f857748eec98b7e0317460d9))

### [1.1.1](https://www.github.com/googleapis/nodejs-storage-transfer/compare/v1.1.0...v1.1.1) (2021-09-10)


### Bug Fixes

* **build:** set default branch to main ([#14](https://www.github.com/googleapis/nodejs-storage-transfer/issues/14)) ([9068b92](https://www.github.com/googleapis/nodejs-storage-transfer/commit/9068b9213daa48d4592ff51c0e520af6eb631b45))

## [1.1.0](https://www.github.com/googleapis/nodejs-storage-transfer/compare/v1.0.1...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#9](https://www.github.com/googleapis/nodejs-storage-transfer/issues/9)) ([47dde37](https://www.github.com/googleapis/nodejs-storage-transfer/commit/47dde3725b8907d1f974dca83b778ccd7e312bef))

### [1.0.1](https://www.github.com/googleapis/nodejs-storage-transfer/compare/v1.0.0...v1.0.1) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#7](https://www.github.com/googleapis/nodejs-storage-transfer/issues/7)) ([e52a0be](https://www.github.com/googleapis/nodejs-storage-transfer/commit/e52a0befc6497c68ea5401e35f3c1c7de0402941))

## 1.0.0 (2021-08-03)


### ⚠ BREAKING CHANGES

* initial generation of nodejs-storage-transfer library (#2)

### Features

* initial generation of nodejs-storage-transfer library ([#2](https://www.github.com/googleapis/nodejs-storage-transfer/issues/2)) ([1179aad](https://www.github.com/googleapis/nodejs-storage-transfer/commit/1179aadc343772b7b31406f1d884153a362f1c16))
* initial stub of library ([f825ae3](https://www.github.com/googleapis/nodejs-storage-transfer/commit/f825ae32380ed31f4d64102a4554292f97aa1fc2))
