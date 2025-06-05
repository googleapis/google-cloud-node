# Changelog

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v3.0.1...video-stitcher-v3.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v3.0.0...video-stitcher-v3.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.4.1...video-stitcher-v3.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.4.0...video-stitcher-v2.4.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6018](https://github.com/googleapis/google-cloud-node/issues/6018)) ([9dc5856](https://github.com/googleapis/google-cloud-node/commit/9dc585661489f51bb7a85b39519fd8b11dfffc5b))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.3.0...video-stitcher-v2.4.0) (2024-06-03)


### Features

* [video-stitcher] add apis for Create, Read, Update, Delete for VODConfigs ([#5378](https://github.com/googleapis/google-cloud-node/issues/5378)) ([10d9310](https://github.com/googleapis/google-cloud-node/commit/10d9310f765fe35d140b0465284c07b053caf8fb))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.2.0...video-stitcher-v2.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.1.0...video-stitcher-v2.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.0.1...video-stitcher-v2.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v2.0.0...video-stitcher-v2.0.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v1.0.0...video-stitcher-v2.0.0) (2023-09-06)


### ⚠ BREAKING CHANGES

* [video-stitcher] use correct child_type annotation ([#4571](https://github.com/googleapis/google-cloud-node/issues/4571))

### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))
* [video-stitcher] use correct child_type annotation ([#4571](https://github.com/googleapis/google-cloud-node/issues/4571)) ([fb59e44](https://github.com/googleapis/google-cloud-node/commit/fb59e44179eddc7e372320e097a6a271babac7eb))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v0.4.0...video-stitcher-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v0.3.2...video-stitcher-v0.4.0) (2023-06-06)


### Features

* [video-stitcher] introduce GAM settings for GAM related configs and support ListOperations ([#4130](https://github.com/googleapis/google-cloud-node/issues/4130)) ([b73a87f](https://github.com/googleapis/google-cloud-node/commit/b73a87f4f1c8d84da66ea81b88a3f2cc6704aa6b))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v0.3.1...video-stitcher-v0.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/video-stitcher-v0.3.0...video-stitcher-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [0.3.0](https://github.com/googleapis/nodejs-video-stitcher/compare/v0.2.2...v0.3.0) (2022-12-20)


### Features

* Add support for Media CDN ([83f1257](https://github.com/googleapis/nodejs-video-stitcher/commit/83f1257b790abc8ef7acedb8e009ef5e94a0c710))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#40](https://github.com/googleapis/nodejs-video-stitcher/issues/40)) ([effa481](https://github.com/googleapis/nodejs-video-stitcher/commit/effa4814da8b7d81b6c5be6b6e580a683f02c50e))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-video-stitcher/issues/1553)) ([#27](https://github.com/googleapis/nodejs-video-stitcher/issues/27)) ([b7fe723](https://github.com/googleapis/nodejs-video-stitcher/commit/b7fe723d1a2dfb229b69640ca749398805573e56))
* Preserve default values in x-goog-request-params header ([#32](https://github.com/googleapis/nodejs-video-stitcher/issues/32)) ([28c3214](https://github.com/googleapis/nodejs-video-stitcher/commit/28c32148f4707550c6c6a143c7556560d6b21230))
* Regenerated protos JS and TS definitions ([#43](https://github.com/googleapis/nodejs-video-stitcher/issues/43)) ([8f7481e](https://github.com/googleapis/nodejs-video-stitcher/commit/8f7481ed1f5fc054abe6430e43570851c39740d0))

## [0.2.2](https://github.com/googleapis/nodejs-video-stitcher/compare/v0.2.1...v0.2.2) (2022-09-01)


### Bug Fixes

* use _gaxModule when accessing gax for bundling ([#28](https://github.com/googleapis/nodejs-video-stitcher/issues/28)) ([80ddf81](https://github.com/googleapis/nodejs-video-stitcher/commit/80ddf81c0bedc918bb37c3c24ba29a363878fc74))

## [0.2.1](https://github.com/googleapis/nodejs-video-stitcher/compare/v0.2.0...v0.2.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#23](https://github.com/googleapis/nodejs-video-stitcher/issues/23)) ([0485b9e](https://github.com/googleapis/nodejs-video-stitcher/commit/0485b9e11d90f9181e38214b5b4289fc491fc7d8))
* change import long to require ([#24](https://github.com/googleapis/nodejs-video-stitcher/issues/24)) ([9c8676a](https://github.com/googleapis/nodejs-video-stitcher/commit/9c8676aebc019cbbf7ab0aded6add6d8f5a1c9a6))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-video-stitcher/issues/1546)) ([#26](https://github.com/googleapis/nodejs-video-stitcher/issues/26)) ([ab5b4bf](https://github.com/googleapis/nodejs-video-stitcher/commit/ab5b4bf3c04e38e3ae76decea1e650b3f614a599))

## [0.2.0](https://github.com/googleapis/nodejs-video-stitcher/compare/v0.1.1...v0.2.0) (2022-07-04)


### Features

* add asset_id and stream_id fields to VodSession and LiveSession responses ([194dcc2](https://github.com/googleapis/nodejs-video-stitcher/commit/194dcc247e4a6887ed204d8b188f61750a65ef43))
* support regapic LRO ([194dcc2](https://github.com/googleapis/nodejs-video-stitcher/commit/194dcc247e4a6887ed204d8b188f61750a65ef43))


### Bug Fixes

* remove COMPLETE_POD stitching option ([194dcc2](https://github.com/googleapis/nodejs-video-stitcher/commit/194dcc247e4a6887ed204d8b188f61750a65ef43))

## [0.1.1](https://github.com/googleapis/nodejs-video-stitcher/compare/v0.1.0...v0.1.1) (2022-06-23)


### Bug Fixes

* **deps:** update dependency google-gax to v3 ([#15](https://github.com/googleapis/nodejs-video-stitcher/issues/15)) ([345085f](https://github.com/googleapis/nodejs-video-stitcher/commit/345085f378b7ab6299a593cd8f8d200160b6106e))

## 0.1.0 (2022-06-09)


### Features

* add initial samples ([#2](https://github.com/googleapis/nodejs-video-stitcher/issues/2)) ([ded0e2f](https://github.com/googleapis/nodejs-video-stitcher/commit/ded0e2fe6a50d94da495c8f3bf068436acbf92ba))
* add templated files from docker image ([6027837](https://github.com/googleapis/nodejs-video-stitcher/commit/6027837bde299e4a2449bd90940d36e20bae8a58))
* initial stub of library ([19dda15](https://github.com/googleapis/nodejs-video-stitcher/commit/19dda1541867a3e0922d57ba96bda52ee9622a46))
