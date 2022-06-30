# Changelog

## [2.0.0](https://github.com/googleapis/nodejs-retail/compare/v1.8.1...v2.0.0) (2022-06-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#181)

### Features

* allow users to disable spell check in search requests ([#183](https://github.com/googleapis/nodejs-retail/issues/183)) ([05005ea](https://github.com/googleapis/nodejs-retail/commit/05005ea09accff4d04b152f2fa2bf452f6b9768b))


### Bug Fixes

* **deps:** update dependency @google-cloud/bigquery to v6 ([#186](https://github.com/googleapis/nodejs-retail/issues/186)) ([fc07923](https://github.com/googleapis/nodejs-retail/commit/fc0792311aac235e917fe045fc491858408bd770))


### Build System

* update library to use Node 12 ([#181](https://github.com/googleapis/nodejs-retail/issues/181)) ([809853f](https://github.com/googleapis/nodejs-retail/commit/809853f84e0bfe0f09ccb59ca750963732e23965))

### [1.8.1](https://github.com/googleapis/nodejs-retail/compare/v1.8.0...v1.8.1) (2022-05-06)


### Bug Fixes

* read projectId from retailClient.getProjectId ([#159](https://github.com/googleapis/nodejs-retail/issues/159)) ([f4fa61c](https://github.com/googleapis/nodejs-retail/commit/f4fa61c2a385b197dd0cfd923b1ac1d07d6539de))

## [1.8.0](https://github.com/googleapis/nodejs-retail/compare/v1.7.0...v1.8.0) (2022-04-08)


### Features

* allow search users to skip validation for invalid boost specs (v2alpha) ([3c6ffc1](https://github.com/googleapis/nodejs-retail/commit/3c6ffc1d6fee7095213824d45c3ca5bb0f974a1b))
* Retail Tutorials. If create BQ table is requested, check if it exists and remove  before creation ([#157](https://github.com/googleapis/nodejs-retail/issues/157)) ([349e171](https://github.com/googleapis/nodejs-retail/commit/349e171baacff751044665389e92e67f02ebc22c))
* search returns applied control ids in the response (v2alpha) ([3c6ffc1](https://github.com/googleapis/nodejs-retail/commit/3c6ffc1d6fee7095213824d45c3ca5bb0f974a1b))
* support batch products purge (v2alpha) ([#167](https://github.com/googleapis/nodejs-retail/issues/167)) ([3c6ffc1](https://github.com/googleapis/nodejs-retail/commit/3c6ffc1d6fee7095213824d45c3ca5bb0f974a1b))
* support search personalization (v2alpha) ([3c6ffc1](https://github.com/googleapis/nodejs-retail/commit/3c6ffc1d6fee7095213824d45c3ca5bb0f974a1b))
* users cannot switch to empty default branch unless force override (v2alpha) ([3c6ffc1](https://github.com/googleapis/nodejs-retail/commit/3c6ffc1d6fee7095213824d45c3ca5bb0f974a1b))

## [1.7.0](https://github.com/googleapis/nodejs-retail/compare/v1.6.1...v1.7.0) (2022-04-01)


### Features

* users can skip validation, search personalization, return ids, and more; docs: suggest search users to not send IP, deprecate request_id, and more ([#160](https://github.com/googleapis/nodejs-retail/issues/160)) ([c793285](https://github.com/googleapis/nodejs-retail/commit/c7932857fc2326971041564094bb4b75802fc741))

### [1.6.1](https://github.com/googleapis/nodejs-retail/compare/v1.6.0...v1.6.1) (2022-03-15)


### Bug Fixes

* remove gcloud_project env variable ([#156](https://github.com/googleapis/nodejs-retail/issues/156)) ([16cefb4](https://github.com/googleapis/nodejs-retail/commit/16cefb46e213f094daca8121bb09ec1e5c4da206))

## [1.6.0](https://github.com/googleapis/nodejs-retail/compare/v1.5.0...v1.6.0) (2022-02-15)


### Features

* add ControlService ([92d4d84](https://github.com/googleapis/nodejs-retail/commit/92d4d849b9c4093778cf81bd56e8ebc2d6afd98b))
* add ServingConfigService ([92d4d84](https://github.com/googleapis/nodejs-retail/commit/92d4d849b9c4093778cf81bd56e8ebc2d6afd98b))

## [1.5.0](https://www.github.com/googleapis/nodejs-retail/compare/v1.4.0...v1.5.0) (2021-11-23)


### Features

* update grpc service config settings to reflect correct API deadlines ([0f24f0e](https://www.github.com/googleapis/nodejs-retail/commit/0f24f0e42c0cb3430935487fe6569873cfdb6860))
* update grpc service config settings to reflect correct API deadlines ([#117](https://www.github.com/googleapis/nodejs-retail/issues/117)) ([0f24f0e](https://www.github.com/googleapis/nodejs-retail/commit/0f24f0e42c0cb3430935487fe6569873cfdb6860))

## [1.4.0](https://www.github.com/googleapis/nodejs-retail/compare/v1.3.0...v1.4.0) (2021-11-04)


### Features

* Add local inventory ingestion APIs to product service in alpha channel ([#112](https://www.github.com/googleapis/nodejs-retail/issues/112)) ([8387781](https://www.github.com/googleapis/nodejs-retail/commit/8387781135ddb02b43af222bbbd3d5852e0147d3))

## [1.3.0](https://www.github.com/googleapis/nodejs-retail/compare/v1.2.2...v1.3.0) (2021-10-19)


### Features

* add search mode to search request. If not specified, a single search request triggers both product search and faceted search. ([49b9b8e](https://www.github.com/googleapis/nodejs-retail/commit/49b9b8e22eba6318f54e44025df4e3c1900cb73e))
* update grpc service config settings to reflect correct API deadlines ([49b9b8e](https://www.github.com/googleapis/nodejs-retail/commit/49b9b8e22eba6318f54e44025df4e3c1900cb73e))

### [1.2.2](https://www.github.com/googleapis/nodejs-retail/compare/v1.2.1...v1.2.2) (2021-09-10)


### Bug Fixes

* **build:** set default branch to main ([#98](https://www.github.com/googleapis/nodejs-retail/issues/98)) ([637a23e](https://www.github.com/googleapis/nodejs-retail/commit/637a23e229641c42103c7b60f2ce2fb974e23d90))

### [1.2.1](https://www.github.com/googleapis/nodejs-retail/compare/v1.2.0...v1.2.1) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#91](https://www.github.com/googleapis/nodejs-retail/issues/91)) ([893845a](https://www.github.com/googleapis/nodejs-retail/commit/893845aae9f43a41ad21f97000bc73da3fb985c0))

## [1.2.0](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.6...v1.2.0) (2021-08-02)


### Features

* Add restricted Retail Search features for Retail API v2 ([b8279f4](https://www.github.com/googleapis/nodejs-retail/commit/b8279f4b3e90150d349ddd2071d8e25c51c07ec4))
* Add restricted Retail Search features for Retail API v2alpha ([b8279f4](https://www.github.com/googleapis/nodejs-retail/commit/b8279f4b3e90150d349ddd2071d8e25c51c07ec4))
* Add restricted Retail Search features for Retail API v2beta. ([#79](https://www.github.com/googleapis/nodejs-retail/issues/79)) ([b8279f4](https://www.github.com/googleapis/nodejs-retail/commit/b8279f4b3e90150d349ddd2071d8e25c51c07ec4))

### [1.1.6](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.5...v1.1.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#73](https://www.github.com/googleapis/nodejs-retail/issues/73)) ([9ba9a09](https://www.github.com/googleapis/nodejs-retail/commit/9ba9a09c270b0ed2ef3eae76a284bb19af789317))

### [1.1.5](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.4...v1.1.5) (2021-07-13)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#69](https://www.github.com/googleapis/nodejs-retail/issues/69)) ([b414012](https://www.github.com/googleapis/nodejs-retail/commit/b4140124e136a75e3a33baece43ef7ee5a717c7a))

### [1.1.5](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.4...v1.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#69](https://www.github.com/googleapis/nodejs-retail/issues/69)) ([b414012](https://www.github.com/googleapis/nodejs-retail/commit/b4140124e136a75e3a33baece43ef7ee5a717c7a))

### [1.1.4](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.3...v1.1.4) (2021-07-01)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#66](https://www.github.com/googleapis/nodejs-retail/issues/66)) ([94fd8a8](https://www.github.com/googleapis/nodejs-retail/commit/94fd8a842f4fc7cfb480e72d4b3375ec0293cc09))

### [1.1.3](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.2...v1.1.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#62](https://www.github.com/googleapis/nodejs-retail/issues/62)) ([ea912e8](https://www.github.com/googleapis/nodejs-retail/commit/ea912e887a5a0b0695bcc54d506ec8e7c4c605c3))

### [1.1.2](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.1...v1.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#55](https://www.github.com/googleapis/nodejs-retail/issues/55)) ([907ba0c](https://www.github.com/googleapis/nodejs-retail/commit/907ba0cc02b8c02b85a2549b4d1e76bf8dc59c93))

### [1.1.1](https://www.github.com/googleapis/nodejs-retail/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#47](https://www.github.com/googleapis/nodejs-retail/issues/47)) ([3ed1774](https://www.github.com/googleapis/nodejs-retail/commit/3ed1774f8c50a9f1e96610e1cef724d233b10cc3))
* use require() to load JSON protos ([#50](https://www.github.com/googleapis/nodejs-retail/issues/50)) ([45348f3](https://www.github.com/googleapis/nodejs-retail/commit/45348f3958cb3e1b70f4e335c3aba5b255887e06))

## [1.1.0](https://www.github.com/googleapis/nodejs-retail/compare/v1.0.0...v1.1.0) (2021-03-02)


### Features

* **docs:** promote to ga ([#18](https://www.github.com/googleapis/nodejs-retail/issues/18)) ([e54b324](https://www.github.com/googleapis/nodejs-retail/commit/e54b32404d2de0cb6b460e9ca0cada6bd0e5b856))

## 1.0.0 (2021-01-13)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples ([#2](https://www.github.com/googleapis/nodejs-retail/issues/2)) ([8a64439](https://www.github.com/googleapis/nodejs-retail/commit/8a644390cc834141304d8903a0ab9da344221412))
* initial stub of library ([82b5f8d](https://www.github.com/googleapis/nodejs-retail/commit/82b5f8d167189dd9eab0ff6209878a727014f0f7))
