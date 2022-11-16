# Changelog

## [1.1.3](https://github.com/googleapis/nodejs-service-management/compare/v1.1.2...v1.1.3) (2022-11-10)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#169](https://github.com/googleapis/nodejs-service-management/issues/169)) ([ef47431](https://github.com/googleapis/nodejs-service-management/commit/ef4743106afc35191647a626c8f3a8a08634ebd1))
* Regenerated protos JS and TS definitions ([#178](https://github.com/googleapis/nodejs-service-management/issues/178)) ([9c00293](https://github.com/googleapis/nodejs-service-management/commit/9c00293b6213b8ba0e2d56fd2208d90b60c38d0d))

## [1.1.2](https://github.com/googleapis/nodejs-service-management/compare/v1.1.1...v1.1.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#166](https://github.com/googleapis/nodejs-service-management/issues/166)) ([deda310](https://github.com/googleapis/nodejs-service-management/commit/deda3102c60ed95a03de5f4ae123c858d9af1cf4))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-service-management/issues/1553)) ([#165](https://github.com/googleapis/nodejs-service-management/issues/165)) ([aa21cf2](https://github.com/googleapis/nodejs-service-management/commit/aa21cf2c463c6410be8f9dc8906493dc78f131c1))

## [1.1.1](https://github.com/googleapis/nodejs-service-management/compare/v1.1.0...v1.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#161](https://github.com/googleapis/nodejs-service-management/issues/161)) ([a84e12c](https://github.com/googleapis/nodejs-service-management/commit/a84e12c4dd4edc5b8486f7b1d47ce109b1927099))
* change import long to require ([#162](https://github.com/googleapis/nodejs-service-management/issues/162)) ([309942f](https://github.com/googleapis/nodejs-service-management/commit/309942f977356bcaaf77a1ee439e5d4389f011ec))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-service-management/issues/1546)) ([#164](https://github.com/googleapis/nodejs-service-management/issues/164)) ([41397e6](https://github.com/googleapis/nodejs-service-management/commit/41397e628dcbc33e54d1f052343df51d8ae8a771))

## [1.1.0](https://github.com/googleapis/nodejs-service-management/compare/v1.0.0...v1.1.0) (2022-06-30)


### Features

* support regapic LRO ([#154](https://github.com/googleapis/nodejs-service-management/issues/154)) ([9871067](https://github.com/googleapis/nodejs-service-management/commit/9871067a828e4ec332906f2013956f9b2ade2b00))

## [1.0.0](https://github.com/googleapis/nodejs-service-management/compare/v0.4.0...v1.0.0) (2022-05-31)


### ⚠ BREAKING CHANGES

* promote to stable (#140)
* update library to use Node 12 (#138)

### Features

* promote to stable ([#140](https://github.com/googleapis/nodejs-service-management/issues/140)) ([f40509e](https://github.com/googleapis/nodejs-service-management/commit/f40509ee35dbafff16e4300d2173be5c41abacf4))


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#142](https://github.com/googleapis/nodejs-service-management/issues/142)) ([6d02ca8](https://github.com/googleapis/nodejs-service-management/commit/6d02ca800a29eb3b6383127efe43ad8e603992c3))


### Build System

* update library to use Node 12 ([#138](https://github.com/googleapis/nodejs-service-management/issues/138)) ([a9eed29](https://github.com/googleapis/nodejs-service-management/commit/a9eed29598c8b56d4c80161d0046be0db4430c66))

## [0.4.0](https://github.com/googleapis/nodejs-service-management/compare/v0.3.1...v0.4.0) (2022-03-08)


### ⚠ BREAKING CHANGES

* Remove EnableService and DisableService RPC methods and related protos from service management API

### Features

* Remove EnableService and DisableService RPC methods and related protos from service management API  ([d3919ab](https://github.com/googleapis/nodejs-service-management/commit/d3919abbf7ba458cc71e8038604f56d598571fe4))

### [0.3.1](https://www.github.com/googleapis/nodejs-service-management/compare/v0.3.0...v0.3.1) (2021-09-10)


### Bug Fixes

* **build:** set default branch to main ([#85](https://www.github.com/googleapis/nodejs-service-management/issues/85)) ([b343eac](https://www.github.com/googleapis/nodejs-service-management/commit/b343eaca04b4f651c737d8a84baa5a75a361c4b0))

## [0.3.0](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.6...v0.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#81](https://www.github.com/googleapis/nodejs-service-management/issues/81)) ([237698f](https://www.github.com/googleapis/nodejs-service-management/commit/237698f72dfdd14e95d956a2e45f6db423e45e23))

### [0.2.6](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.5...v0.2.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#79](https://www.github.com/googleapis/nodejs-service-management/issues/79)) ([b679b6c](https://www.github.com/googleapis/nodejs-service-management/commit/b679b6c3dff457764698044b8b325a52922fbb46))

### [0.2.5](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.4...v0.2.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#70](https://www.github.com/googleapis/nodejs-service-management/issues/70)) ([fc4f996](https://www.github.com/googleapis/nodejs-service-management/commit/fc4f99666252f8f06f399438aedebb6e5502f2e9))

### [0.2.4](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.3...v0.2.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#67](https://www.github.com/googleapis/nodejs-service-management/issues/67)) ([39328cd](https://www.github.com/googleapis/nodejs-service-management/commit/39328cdd1389ab2bddb1744bb8a77774e5a924c2))

### [0.2.3](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.2...v0.2.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#61](https://www.github.com/googleapis/nodejs-service-management/issues/61)) ([8ba608c](https://www.github.com/googleapis/nodejs-service-management/commit/8ba608caad06f54c0f4fb650b18948a1143440f4))

### [0.2.2](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.1...v0.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#54](https://www.github.com/googleapis/nodejs-service-management/issues/54)) ([9376a6c](https://www.github.com/googleapis/nodejs-service-management/commit/9376a6c9836b9460d512a8fbd32094cc4f5ccb85))

### [0.2.1](https://www.github.com/googleapis/nodejs-service-management/compare/v0.2.0...v0.2.1) (2021-05-24)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#48](https://www.github.com/googleapis/nodejs-service-management/issues/48)) ([e679ea9](https://www.github.com/googleapis/nodejs-service-management/commit/e679ea9d735b9edd25913b990e3a0d037025c984))
* use require() to load JSON protos ([#50](https://www.github.com/googleapis/nodejs-service-management/issues/50)) ([786af32](https://www.github.com/googleapis/nodejs-service-management/commit/786af32612aed97ef4ec55b2d0b02932e351be38))

## 0.2.0 (2021-03-30)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples ([#2](https://www.github.com/googleapis/nodejs-service-management/issues/2)) ([e12039f](https://www.github.com/googleapis/nodejs-service-management/commit/e12039fff76d1d76692c7f87852c2e878c0f847f))
* initial stub of library ([728ac20](https://www.github.com/googleapis/nodejs-service-management/commit/728ac209c44ba39714fb8c8acb38a7c0163acd6c))


### Bug Fixes

* **build:** release first version of library as v0.2.0 ([#14](https://www.github.com/googleapis/nodejs-service-management/issues/14)) ([3707e68](https://www.github.com/googleapis/nodejs-service-management/commit/3707e680f7cd038ea4b6c7589a5846b8ce5fcc96))

## 0.2.0 (2021-03-30)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples ([#2](https://www.github.com/googleapis/nodejs-service-management/issues/2)) ([e12039f](https://www.github.com/googleapis/nodejs-service-management/commit/e12039fff76d1d76692c7f87852c2e878c0f847f))
* initial stub of library ([728ac20](https://www.github.com/googleapis/nodejs-service-management/commit/728ac209c44ba39714fb8c8acb38a7c0163acd6c))


### Bug Fixes

* **build:** release first version of library as v0.2.0 ([#14](https://www.github.com/googleapis/nodejs-service-management/issues/14)) ([3707e68](https://www.github.com/googleapis/nodejs-service-management/commit/3707e680f7cd038ea4b6c7589a5846b8ce5fcc96))
