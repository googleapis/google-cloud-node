# Changelog

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.6.0...tpu-v3.7.0) (2025-01-16)


### Features

* [tpu] Promote network_configs field to v2 API ([#5945](https://github.com/googleapis/google-cloud-node/issues/5945)) ([df0d206](https://github.com/googleapis/google-cloud-node/commit/df0d2064ff860da7c2029de9dd3f9a1aab41b5c8))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.5.0...tpu-v3.6.0) (2025-01-11)


### Features

* [tpu] Add UNKNOWN to TPU node state, This state will be used to prevent a node from being marked as READY during diagnose after it has failed repair ([#5941](https://github.com/googleapis/google-cloud-node/issues/5941)) ([e575e15](https://github.com/googleapis/google-cloud-node/commit/e575e15101e34887731c4bab60e81bac504d7683))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.4.0...tpu-v3.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.3.0...tpu-v3.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.2.1...tpu-v3.3.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.2.0...tpu-v3.2.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.1.0...tpu-v3.2.0) (2023-09-20)


### Features

* [tpu] added new WAITING_FOR_RESOURCES state for QueuedResourceState ([#4682](https://github.com/googleapis/google-cloud-node/issues/4682)) ([f8dcd67](https://github.com/googleapis/google-cloud-node/commit/f8dcd673bbc0c28e2b2d08acd1bca1183781951b))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v3.0.0...tpu-v3.1.0) (2023-09-06)


### Features

* [tpu] Add ResetQueueResource to the TPU service ([#4577](https://github.com/googleapis/google-cloud-node/issues/4577)) ([c395570](https://github.com/googleapis/google-cloud-node/commit/c3955701db6a18741ad837668282ab0907009e43))
* [tpu] publish boot_disk_config to support CHD with KMS ([#4606](https://github.com/googleapis/google-cloud-node/issues/4606)) ([0bf8b21](https://github.com/googleapis/google-cloud-node/commit/0bf8b2169a448f87a8301749f343fd07679a6c08))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.7.0...tpu-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [tpu] fix typings for IAM methods ([#4446](https://github.com/googleapis/google-cloud-node/issues/4446)) ([014e96c](https://github.com/googleapis/google-cloud-node/commit/014e96c19443833177be1f4acd5f2894e02eadd4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.6.1...tpu-v2.7.0) (2023-06-06)


### Features

* [tpu] Add MultisliceNode ([#4308](https://github.com/googleapis/google-cloud-node/issues/4308)) ([47ab1c3](https://github.com/googleapis/google-cloud-node/commit/47ab1c3ee106fce357950245318129d2be723dd2))
* Enable Force on DeleteQueuedResource ([47ab1c3](https://github.com/googleapis/google-cloud-node/commit/47ab1c3ee106fce357950245318129d2be723dd2))

## [2.6.1](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.6.0...tpu-v2.6.1) (2023-05-04)


### Bug Fixes

* [tpu] restrict the visibility of an API ([#4234](https://github.com/googleapis/google-cloud-node/issues/4234)) ([2421e93](https://github.com/googleapis/google-cloud-node/commit/2421e933f19af7edd6d250a5e30f75b832029cd2))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.5.1...tpu-v2.6.0) (2023-04-24)


### Features

* [tpu] make reservation_name parameter generally visible in QueuedResource message ([#4178](https://github.com/googleapis/google-cloud-node/issues/4178)) ([595ab28](https://github.com/googleapis/google-cloud-node/commit/595ab2845ac8a70fc2e94d7f69029396cb6414f0))

## [2.5.1](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.5.0...tpu-v2.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.4.1...tpu-v2.5.0) (2023-03-13)


### Features

* [tpu] add AcceleratorConfig to ListAcceleratorTypesResponse ([#4059](https://github.com/googleapis/google-cloud-node/issues/4059)) ([27f2e1e](https://github.com/googleapis/google-cloud-node/commit/27f2e1ea523a619451ec4df285cbf160ca518e45))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.4.0...tpu-v2.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.3.0...tpu-v2.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))


### Bug Fixes

* Proper http bindings for v2 API ([#3884](https://github.com/googleapis/google-cloud-node/issues/3884)) ([0d92384](https://github.com/googleapis/google-cloud-node/commit/0d923840ab7c3a35455f655a1f146973492951d1))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/tpu-v2.2.0...tpu-v2.3.0) (2022-12-16)


### Features

* Publishing TPU v2 API ([#3701](https://github.com/googleapis/google-cloud-node/issues/3701)) ([4fae12f](https://github.com/googleapis/google-cloud-node/commit/4fae12f3723200d0dce367781a93fdae53237aeb))

## [2.2.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v2.1.0...v2.2.0) (2022-11-10)


### Features

* Add Secure Boot support to TPU v2alpha1 API ([#98](https://github.com/googleapis/nodejs-cloud-tpu/issues/98)) ([e4fc278](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4fc27883278b8161bb7ad598dd83021e2467d99))


### Bug Fixes

* Allow passing gax instance to client constructor ([#96](https://github.com/googleapis/nodejs-cloud-tpu/issues/96)) ([d636ecf](https://github.com/googleapis/nodejs-cloud-tpu/commit/d636ecf4798258a71f289bd6a6add2cf45e6a2cb))
* Better support for fallback mode ([#91](https://github.com/googleapis/nodejs-cloud-tpu/issues/91)) ([a291abd](https://github.com/googleapis/nodejs-cloud-tpu/commit/a291abd4a0418eb375f9c4a27f19735afee4acca))
* Change import long to require ([#92](https://github.com/googleapis/nodejs-cloud-tpu/issues/92)) ([5de09bb](https://github.com/googleapis/nodejs-cloud-tpu/commit/5de09bb8786a790ff5a6d643f8493b6f6ea3c4ec))
* **deps:** Use google-gax v3.5.2 ([#104](https://github.com/googleapis/nodejs-cloud-tpu/issues/104)) ([86b8617](https://github.com/googleapis/nodejs-cloud-tpu/commit/86b86173fe7f8dd33e5cb6abb683f32d148670c6))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-cloud-tpu/issues/1553)) ([#95](https://github.com/googleapis/nodejs-cloud-tpu/issues/95)) ([e4289c1](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4289c164ea2123947328ceddfb09cf083e50a19))
* Preserve default values in x-goog-request-params header ([#97](https://github.com/googleapis/nodejs-cloud-tpu/issues/97)) ([42310b7](https://github.com/googleapis/nodejs-cloud-tpu/commit/42310b7a99b51320e9924f8ecd1d75513b28b598))
* Regenerated protos JS and TS definitions ([#107](https://github.com/googleapis/nodejs-cloud-tpu/issues/107)) ([7e3cba5](https://github.com/googleapis/nodejs-cloud-tpu/commit/7e3cba5fd489373a7c460369d37f04c32e3cd9c3))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-cloud-tpu/issues/1546)) ([#94](https://github.com/googleapis/nodejs-cloud-tpu/issues/94)) ([7a26fe6](https://github.com/googleapis/nodejs-cloud-tpu/commit/7a26fe63b51c661bdd22bfafecc3d4291247dddf))
* use google-gax v3.3.0 ([e4289c1](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4289c164ea2123947328ceddfb09cf083e50a19))

## [2.1.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v2.0.0...v2.1.0) (2022-07-12)


### Features

* support regapic LRO ([#87](https://github.com/googleapis/nodejs-cloud-tpu/issues/87)) ([31164e2](https://github.com/googleapis/nodejs-cloud-tpu/commit/31164e2e804f18f5178177ce99d5741cb7211712))

## [2.0.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v1.2.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#82)

### Build System

* update library to use Node 12 ([#82](https://github.com/googleapis/nodejs-cloud-tpu/issues/82)) ([634cad2](https://github.com/googleapis/nodejs-cloud-tpu/commit/634cad22ed0d3e91e02144a292da68c8cd31c0e2))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.1.1...v1.2.0) (2021-10-19)


### Features

* TPU v2alpha1 public protos ([#43](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/43)) ([0b3aba7](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/0b3aba7b67adeb3df55c735eb513ffdcefe65e3d))

### [1.1.1](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.1.0...v1.1.1) (2021-08-25)


### Bug Fixes

* flag module as GA ([#32](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/32)) ([80ee7de](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/80ee7deaa87856edab4e65f8a21caaf9b8d49ba7))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.5...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#29](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/29)) ([4db100d](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/4db100d7f17f367ebda9614e9b4709236f52fe9e))

### [1.0.5](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.4...v1.0.5) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#27](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/27)) ([68a71a9](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/68a71a9919b37cd7043cd1c3e607eedee15240c0))

### [1.0.4](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.3...v1.0.4) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#25](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/25)) ([67db41d](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/67db41d374fe489f8cef6b6875692446a2178de8))

### [1.0.3](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.2...v1.0.3) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#17](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/17)) ([3fdf1bf](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/3fdf1bfa1ca06ca496cc2d600dc855f51ac48344))

### [1.0.2](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.1...v1.0.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#15](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/15)) ([296ef02](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/296ef02c62858bd75a141a65e38814ebaa7b377f))

### [1.0.1](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.0...v1.0.1) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#13](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/13)) ([a162ec4](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/a162ec451cab0ccd68353d3863c60ce7073ead1a))
* make request optional in all cases ([#9](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/9)) ([b8bde22](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/b8bde2285a9c855f14c9bd5552ea3141aa820a97))

## 1.0.0 (2021-06-09)


### Features

* add initial files ([6eb8aaf](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/6eb8aaf3e3879b05b6dff76b8ea67c9409aa679a))
* initial launch ([57096bc](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/57096bced4d57b0e543f947e95cd489dfacb8706))
* initial samples and tests ([#2](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/2)) ([918c455](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/918c45528f002b5337a73b5cbc84f6895f2f5137))
