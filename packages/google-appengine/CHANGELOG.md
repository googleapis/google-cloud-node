# Changelog

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v3.2.0...appengine-admin-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v3.1.0...appengine-admin-v3.2.0) (2024-04-16)


### Features

* [Many APIs] support GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable ([#5185](https://github.com/googleapis/google-cloud-node/issues/5185)) ([cc54e98](https://github.com/googleapis/google-cloud-node/commit/cc54e98f7f51598e88277ac50310b07b778acbc7))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v3.0.1...appengine-admin-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v3.0.0...appengine-admin-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v2.2.2...appengine-admin-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v2.2.1...appengine-admin-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v2.2.0...appengine-admin-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/appengine-admin-v2.1.2...appengine-admin-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [2.1.2](https://github.com/googleapis/nodejs-appengine-admin/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#156](https://github.com/googleapis/nodejs-appengine-admin/issues/156)) ([b203e7e](https://github.com/googleapis/nodejs-appengine-admin/commit/b203e7eb65d947e00be58f80fc6cf3f94ad8de8b))
* **deps:** Use google-gax v3.5.2 ([#164](https://github.com/googleapis/nodejs-appengine-admin/issues/164)) ([8525dac](https://github.com/googleapis/nodejs-appengine-admin/commit/8525dac6e50bd9c9cf8bd7b6ff6c431b6900d5ad))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-appengine-admin/issues/1553)) ([#155](https://github.com/googleapis/nodejs-appengine-admin/issues/155)) ([eaff462](https://github.com/googleapis/nodejs-appengine-admin/commit/eaff462965a3440556f7b959ea881f9e317817a8))
* Preserve default values in x-goog-request-params header ([#158](https://github.com/googleapis/nodejs-appengine-admin/issues/158)) ([3636c4a](https://github.com/googleapis/nodejs-appengine-admin/commit/3636c4a967718909c397de4bca372e351ce56a83))
* Regenerated protos JS and TS definitions ([#167](https://github.com/googleapis/nodejs-appengine-admin/issues/167)) ([f629b53](https://github.com/googleapis/nodejs-appengine-admin/commit/f629b536ee41a787594d1168eb0715903a0975b1))
* use google-gax v3.3.0 ([eaff462](https://github.com/googleapis/nodejs-appengine-admin/commit/eaff462965a3440556f7b959ea881f9e317817a8))

## [2.1.1](https://github.com/googleapis/nodejs-appengine-admin/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#150](https://github.com/googleapis/nodejs-appengine-admin/issues/150)) ([ec76f66](https://github.com/googleapis/nodejs-appengine-admin/commit/ec76f6685ad06a47e3b0d3facdf4c1a0020244e0))
* change import long to require ([#152](https://github.com/googleapis/nodejs-appengine-admin/issues/152)) ([62e67ec](https://github.com/googleapis/nodejs-appengine-admin/commit/62e67ec394573b41b24aebef89a12dbf3a3f42e2))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-appengine-admin/issues/1546)) ([#154](https://github.com/googleapis/nodejs-appengine-admin/issues/154)) ([f31d99b](https://github.com/googleapis/nodejs-appengine-admin/commit/f31d99bb423a295bea56e2a8aee0ada9823fbb7f))

## [2.1.0](https://github.com/googleapis/nodejs-appengine-admin/compare/v2.0.0...v2.1.0) (2022-06-29)


### Features

* support regapic LRO ([#140](https://github.com/googleapis/nodejs-appengine-admin/issues/140)) ([0185670](https://github.com/googleapis/nodejs-appengine-admin/commit/01856700f02bd5ec178aac4ab0378feebee0fda9))

## [2.0.0](https://github.com/googleapis/nodejs-appengine-admin/compare/v1.2.0...v2.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#134)

### Features

* add Application.service_account ([#130](https://github.com/googleapis/nodejs-appengine-admin/issues/130)) ([698f05e](https://github.com/googleapis/nodejs-appengine-admin/commit/698f05e03e81b24602a6f6a681186540722698e8))


### Build System

* update library to use Node 12 ([#134](https://github.com/googleapis/nodejs-appengine-admin/issues/134)) ([df3424a](https://github.com/googleapis/nodejs-appengine-admin/commit/df3424ac8a77e8549f42300e4182a721e8ef4755))

## [1.2.0](https://github.com/googleapis/nodejs-appengine-admin/compare/v1.1.0...v1.2.0) (2022-03-23)


### Features

* promote to stable ([#119](https://github.com/googleapis/nodejs-appengine-admin/issues/119)) ([4d84360](https://github.com/googleapis/nodejs-appengine-admin/commit/4d84360f97c4417ae0ba4690b2c8511794640d94))

## [1.1.0](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.6...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#78](https://www.github.com/googleapis/nodejs-appengine-admin/issues/78)) ([df643dd](https://www.github.com/googleapis/nodejs-appengine-admin/commit/df643dd9f37d966a09490c6f4edfb5fa9d0a0d9f))

### [1.0.6](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.5...v1.0.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#76](https://www.github.com/googleapis/nodejs-appengine-admin/issues/76)) ([471b3e9](https://www.github.com/googleapis/nodejs-appengine-admin/commit/471b3e9e4d493f32bc30d1927a47f02018ffb845))

### [1.0.5](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.4...v1.0.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#67](https://www.github.com/googleapis/nodejs-appengine-admin/issues/67)) ([e4c206c](https://www.github.com/googleapis/nodejs-appengine-admin/commit/e4c206c55eef567387bdf8f9c7a342986b85c146))

### [1.0.4](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.3...v1.0.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#65](https://www.github.com/googleapis/nodejs-appengine-admin/issues/65)) ([dd73dd5](https://www.github.com/googleapis/nodejs-appengine-admin/commit/dd73dd52d0fbc1ac08c9b03292f286a20a2f4db3))

### [1.0.3](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.2...v1.0.3) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#62](https://www.github.com/googleapis/nodejs-appengine-admin/issues/62)) ([ae1c209](https://www.github.com/googleapis/nodejs-appengine-admin/commit/ae1c209bea986cedb9a814f0695138d578fa33d6))

### [1.0.2](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.1...v1.0.2) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#56](https://www.github.com/googleapis/nodejs-appengine-admin/issues/56)) ([1262e7e](https://www.github.com/googleapis/nodejs-appengine-admin/commit/1262e7e449888f56d8fb28801059783c077f6a17))

### [1.0.1](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v1.0.0...v1.0.1) (2021-06-07)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#49](https://www.github.com/googleapis/nodejs-appengine-admin/issues/49)) ([13a7d7e](https://www.github.com/googleapis/nodejs-appengine-admin/commit/13a7d7e975e583191ede000ee650be9fff7a87fa))

## [1.0.0](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v0.2.1...v1.0.0) (2021-05-20)


### Features

* promote the library to 1.0 ([#46](https://www.github.com/googleapis/nodejs-appengine-admin/issues/46)) ([8c1e9b7](https://www.github.com/googleapis/nodejs-appengine-admin/commit/8c1e9b793364e51cc7d140ab6df531016ad197c2))

### [0.2.1](https://www.github.com/googleapis/nodejs-appengine-admin/compare/v0.2.0...v0.2.1) (2021-05-19)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#39](https://www.github.com/googleapis/nodejs-appengine-admin/issues/39)) ([f6c8735](https://www.github.com/googleapis/nodejs-appengine-admin/commit/f6c873571770a56d5d46449b63c0adfc1375ced5))
* use require() to load JSON protos ([#42](https://www.github.com/googleapis/nodejs-appengine-admin/issues/42)) ([d406ced](https://www.github.com/googleapis/nodejs-appengine-admin/commit/d406ced6996c5b0128a69fde745b86f0e67107cb))

## 0.2.0 (2021-03-30)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples and tests ([#2](https://www.github.com/googleapis/nodejs-appengine-admin/issues/2)) ([b3bbb90](https://www.github.com/googleapis/nodejs-appengine-admin/commit/b3bbb90f2495d5dcd4155c151901be77fe755af6))
* add samples ([3a94c12](https://www.github.com/googleapis/nodejs-appengine-admin/commit/3a94c12ab8b48e21adda12c44f14e4b66e91a1cd))
* initial stub of library ([713ee9c](https://www.github.com/googleapis/nodejs-appengine-admin/commit/713ee9c67c67c88e284e5ae99a3b0db0dff0fe88))


### Bug Fixes

* **build:** release first version of library as v0.2.0 ([#9](https://www.github.com/googleapis/nodejs-appengine-admin/issues/9)) ([ac79b04](https://www.github.com/googleapis/nodejs-appengine-admin/commit/ac79b04160eb048d8918aae0f85cf350779ef78f))
* start at Node 12 ([ed04ab3](https://www.github.com/googleapis/nodejs-appengine-admin/commit/ed04ab3721329aed75b5a9b092f20080c632f8e0))
