# Changelog

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v4.1.0...artifact-registry-v4.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v4.0.1...artifact-registry-v4.1.0) (2025-05-09)


### Features

* [artifactregistry] add the GoModule and KfpArtifact resources ([#6231](https://github.com/googleapis/google-cloud-node/issues/6231)) ([7b8b452](https://github.com/googleapis/google-cloud-node/commit/7b8b4529fbdcfd0286c13754df7121a73e5054c8))
* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v4.0.0...artifact-registry-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.5.1...artifact-registry-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.5.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.5.0...artifact-registry-v3.5.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.4.0...artifact-registry-v3.5.0) (2024-10-30)


### Features

* [artifactregistry] Add Artifact Registry attachment API ([#5769](https://github.com/googleapis/google-cloud-node/issues/5769)) ([c5eb3c3](https://github.com/googleapis/google-cloud-node/commit/c5eb3c3ec44e03edae96207f892d5b2d98aca51a))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.3.0...artifact-registry-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.2.0...artifact-registry-v3.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.1.1...artifact-registry-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [3.1.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.1.0...artifact-registry-v3.1.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.0.1...artifact-registry-v3.1.0) (2023-10-18)


### Features

* [artifactregistry] make repositories required in ListRepositoriesRequest ([#4709](https://github.com/googleapis/google-cloud-node/issues/4709)) ([81cca60](https://github.com/googleapis/google-cloud-node/commit/81cca6072dab3c753db27fab7dbf08d13196e087))


### Bug Fixes

* [artifactregistry] make repository and repository_id in CreateRepository required ([#4693](https://github.com/googleapis/google-cloud-node/issues/4693)) ([dcd9022](https://github.com/googleapis/google-cloud-node/commit/dcd9022f16c63c9e0f0eec10615f64b76184a9b6))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v3.0.0...artifact-registry-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.2.2...artifact-registry-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.2.1...artifact-registry-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.2.0...artifact-registry-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.1.0...artifact-registry-v2.2.0) (2023-02-09)


### Features

* Add format-specific resources MavenArtifact, NpmPackage, `KfpArtifact` and `PythonPackage` ([#3940](https://github.com/googleapis/google-cloud-node/issues/3940)) ([fadd502](https://github.com/googleapis/google-cloud-node/commit/fadd502bd91d470528abec33871776ab1875929d))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.0.2...artifact-registry-v2.1.0) (2023-01-28)


### Features

* Add location methods ([#3826](https://github.com/googleapis/google-cloud-node/issues/3826)) ([b525661](https://github.com/googleapis/google-cloud-node/commit/b525661ed04cf91720cf75cb4b0ad0e2ab540ff7))

## [2.0.2](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.0.1...artifact-registry-v2.0.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/artifact-registry-v2.0.0...artifact-registry-v2.0.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.0.0](https://github.com/googleapis/nodejs-artifact-registry/compare/v1.3.0...v2.0.0) (2022-05-20)

### ⚠ BREAKING CHANGES

* Update library to use Node 12
* update library to use Node 12 (#147)


### Features

* AuditConfig for IAM v1 ([#134](https://github.com/googleapis/nodejs-artifact-registry/issues/134)) ([5022f63](https://github.com/googleapis/nodejs-artifact-registry/commit/5022f6319c872cd90750c0d3d1e6b74c4a35df9e))

### Build System

* update library to use Node 12 ([#147](https://github.com/googleapis/nodejs-artifact-registry/issues/147)) ([b1b21ca](https://github.com/googleapis/nodejs-artifact-registry/commit/b1b21ca8d30b9b493a9491c0df2665284db95bc8))


### *build

* Update library to use Node 12 ([b1b21ca](https://github.com/googleapis/nodejs-artifact-registry/commit/b1b21ca8d30b9b493a9491c0df2665284db95bc8))

## [1.3.0](https://github.com/googleapis/nodejs-artifact-registry/compare/v1.2.3...v1.3.0) (2022-03-23)


### Features

* promote v1beta2 features to v1 ([#132](https://github.com/googleapis/nodejs-artifact-registry/issues/132)) ([a217d2e](https://github.com/googleapis/nodejs-artifact-registry/commit/a217d2e62db8b6f297f13158e8140f88092d0cef))
* upgrade to GA ([#96](https://github.com/googleapis/nodejs-artifact-registry/issues/96)) ([1e71407](https://github.com/googleapis/nodejs-artifact-registry/commit/1e71407f9251ececddc945e0511b63cee2965fee))

### [1.2.3](https://github.com/googleapis/nodejs-artifact-registry/compare/v1.2.2...v1.2.3) (2022-02-03)


### Bug Fixes

* **artifactregistry:** add missing HTTP rules to service config ([#109](https://github.com/googleapis/nodejs-artifact-registry/issues/109)) ([d718ff7](https://github.com/googleapis/nodejs-artifact-registry/commit/d718ff7cdd230c08dd79943ff118232ba87febb3))

### [1.2.2](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.2.1...v1.2.2) (2021-12-30)


### Bug Fixes

* **artifactregistry:** fix resource pattern ID segment name ([#100](https://www.github.com/googleapis/nodejs-artifact-registry/issues/100)) ([27d74c2](https://www.github.com/googleapis/nodejs-artifact-registry/commit/27d74c2d59bf0f9a8985f89b5440ef2fc8e45008))

### [1.2.1](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.2.0...v1.2.1) (2021-10-14)


### ⚠ BREAKING CHANGES

* * fix!: Fix the resource annotations for GetRepositoryRequest

### Bug Fixes

* Fix the resource annotations for GetRepositoryRequest ([#88](https://www.github.com/googleapis/nodejs-artifact-registry/issues/88)) ([80ba28f](https://www.github.com/googleapis/nodejs-artifact-registry/commit/80ba28f3d3df7ac211edd82b10bb966f61f787f6))


### meta

* release at 1.2.1 ([#90](https://www.github.com/googleapis/nodejs-artifact-registry/issues/90)) ([314bef4](https://www.github.com/googleapis/nodejs-artifact-registry/commit/314bef484ad3cc0aa7f673c9674115689f529d88))

## [1.2.0](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.1.0...v1.2.0) (2021-09-27)


### Features

* add v1 of the API, generate samples ([#82](https://www.github.com/googleapis/nodejs-artifact-registry/issues/82)) ([07b5be6](https://www.github.com/googleapis/nodejs-artifact-registry/commit/07b5be6b149324f451414bff52e2c1014f127d86))

## [1.1.0](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.7...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#74](https://www.github.com/googleapis/nodejs-artifact-registry/issues/74)) ([a4c3f55](https://www.github.com/googleapis/nodejs-artifact-registry/commit/a4c3f556afe45914ce303ac665e56487f6ed8c5d))

### [1.0.7](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.6...v1.0.7) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#72](https://www.github.com/googleapis/nodejs-artifact-registry/issues/72)) ([8210be5](https://www.github.com/googleapis/nodejs-artifact-registry/commit/8210be54c1ddec04a7f24d2ee356fdf143c92de2))

### [1.0.6](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.5...v1.0.6) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#71](https://www.github.com/googleapis/nodejs-artifact-registry/issues/71)) ([fd38594](https://www.github.com/googleapis/nodejs-artifact-registry/commit/fd385943ba34cda330260fd32cfe934fa068cecf))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#63](https://www.github.com/googleapis/nodejs-artifact-registry/issues/63)) ([277cb11](https://www.github.com/googleapis/nodejs-artifact-registry/commit/277cb116059aebc3f87a0ad749350a80e448ea8f))

### [1.0.5](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.4...v1.0.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#61](https://www.github.com/googleapis/nodejs-artifact-registry/issues/61)) ([f0d00e2](https://www.github.com/googleapis/nodejs-artifact-registry/commit/f0d00e2a818964158440f97d37a6c00a56ec582b))

### [1.0.4](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.3...v1.0.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#58](https://www.github.com/googleapis/nodejs-artifact-registry/issues/58)) ([09cd77b](https://www.github.com/googleapis/nodejs-artifact-registry/commit/09cd77bd7e4f7b543c5796003a35a1f05ee14429))

### [1.0.3](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.2...v1.0.3) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#54](https://www.github.com/googleapis/nodejs-artifact-registry/issues/54)) ([59479c5](https://www.github.com/googleapis/nodejs-artifact-registry/commit/59479c5c1389415b83f43c7f851ada2a02e28ca4))

### [1.0.2](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.1...v1.0.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#47](https://www.github.com/googleapis/nodejs-artifact-registry/issues/47)) ([64cd82e](https://www.github.com/googleapis/nodejs-artifact-registry/commit/64cd82e6ba344495d61338642b930b873ca4c66e))

### [1.0.1](https://www.github.com/googleapis/nodejs-artifact-registry/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#39](https://www.github.com/googleapis/nodejs-artifact-registry/issues/39)) ([19dab94](https://www.github.com/googleapis/nodejs-artifact-registry/commit/19dab9455d86f078785102f8094567faa3534657))
* use require() to load JSON protos ([#42](https://www.github.com/googleapis/nodejs-artifact-registry/issues/42)) ([c4e83db](https://www.github.com/googleapis/nodejs-artifact-registry/commit/c4e83db23c4eafed55f83755d2c16df75ac57b8c))

## 1.0.0 (2021-01-06)


### ⚠ BREAKING CHANGES

* write samples (#3)
* initial stub of library

### Features

* initial stub of library ([8db79fb](https://www.github.com/googleapis/nodejs-artifact-registry/commit/8db79fbc711b89107e670db54d69f9685dae457b))
* write samples ([#3](https://www.github.com/googleapis/nodejs-artifact-registry/issues/3)) ([da95300](https://www.github.com/googleapis/nodejs-artifact-registry/commit/da95300b3b7be3bac9c048d93a625bd020847280))
