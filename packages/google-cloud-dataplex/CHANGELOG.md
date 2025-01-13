# Changelog

## [3.13.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.12.0...dataplex-v3.13.0) (2025-01-11)


### Features

* [dataplex] A new field `force` is added to message `.google.cloud.dataplex.v1.DeleteDataScanRequest` ([#5902](https://github.com/googleapis/google-cloud-node/issues/5902)) ([cb0f5d4](https://github.com/googleapis/google-cloud-node/commit/cb0f5d4d13496f147d057c23fc7926bf4a133b7b))

## [3.12.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.11.0...dataplex-v3.12.0) (2024-11-21)


### Features

* [dataplex] update Go Datastore import path ([#5818](https://github.com/googleapis/google-cloud-node/issues/5818)) ([020c59a](https://github.com/googleapis/google-cloud-node/commit/020c59a19460baff4ea7bbabef5d00d9becead94))

## [3.11.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.10.0...dataplex-v3.11.0) (2024-06-27)


### Features

* [dataplex] expose data scan execution create time to customers ([#5510](https://github.com/googleapis/google-cloud-node/issues/5510)) ([03bfa5d](https://github.com/googleapis/google-cloud-node/commit/03bfa5d4314e3c2e97e50d0c09b98cffe3669d9b))

## [3.10.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.9.0...dataplex-v3.10.0) (2024-06-21)


### Features

* [dataplex] exposing EntrySource.location field that contains location of a resource in the source system ([#5483](https://github.com/googleapis/google-cloud-node/issues/5483)) ([00ad685](https://github.com/googleapis/google-cloud-node/commit/00ad68517838b0e231cac523dc0cc4adbf20621e))

## [3.9.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.8.0...dataplex-v3.9.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.8.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.7.0...dataplex-v3.8.0) (2024-05-08)


### Features

* [dataplex] updated client libraries for Dataplex Catalog: removed deprecated fields, updated comments ([#5306](https://github.com/googleapis/google-cloud-node/issues/5306)) ([3db1ac8](https://github.com/googleapis/google-cloud-node/commit/3db1ac8ff587a919b35bd1131c495ce50f315d85))

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.6.0...dataplex-v3.7.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.5.1...dataplex-v3.6.0) (2024-03-26)


### Features

* [dataplex] added client side library for the followings: ([#5149](https://github.com/googleapis/google-cloud-node/issues/5149)) ([8c2c43c](https://github.com/googleapis/google-cloud-node/commit/8c2c43c19b148b0e95874a1d24261c9b962020f0))

## [3.5.1](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.5.0...dataplex-v3.5.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4964](https://github.com/googleapis/google-cloud-node/issues/4964)) ([34bd4e2](https://github.com/googleapis/google-cloud-node/commit/34bd4e2e40e51ffcd122e7d04307f9a5cce694a6))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.4.0...dataplex-v3.5.0) (2023-12-05)


### Features

* [dataplex] add data quality score to DataQualityResult ([#4856](https://github.com/googleapis/google-cloud-node/issues/4856)) ([fc9471b](https://github.com/googleapis/google-cloud-node/commit/fc9471b804d94a96d382237fbd369f85991f89d1))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.3.0...dataplex-v3.4.0) (2023-11-30)


### Features

* [dataplex] added DataQualityResult.score, dimension_score, column_score ([#4835](https://github.com/googleapis/google-cloud-node/issues/4835)) ([da536e9](https://github.com/googleapis/google-cloud-node/commit/da536e93659f38469fac2a7903c11c96c92c9074))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.2.0...dataplex-v3.3.0) (2023-11-03)


### Features

* [dataplex] DataQualityDimension is now part of the DataQualityDimensionResult message ([#4776](https://github.com/googleapis/google-cloud-node/issues/4776)) ([ca49756](https://github.com/googleapis/google-cloud-node/commit/ca497563124fbb8977f0e93b6af2cbf3a45f1088))
* Add relativeResourceName and linkedResourceName to search result ([ca49756](https://github.com/googleapis/google-cloud-node/commit/ca497563124fbb8977f0e93b6af2cbf3a45f1088))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.1.0...dataplex-v3.2.0) (2023-10-18)


### Features

* [dataplex] DataQualityDimension is now part of the DataQualityDimensionResult message ([#4734](https://github.com/googleapis/google-cloud-node/issues/4734)) ([86e26db](https://github.com/googleapis/google-cloud-node/commit/86e26db233c5aedc7e1b7b33b21aec341d45b77f))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.0.1...dataplex-v3.1.0) (2023-09-20)


### Features

* [dataplex] additional HTTP bindings for IAM methods ([#4683](https://github.com/googleapis/google-cloud-node/issues/4683)) ([fb6e827](https://github.com/googleapis/google-cloud-node/commit/fb6e827399bad7b39d3a058c2eb8ad2275e967d1))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/dataplex-v3.0.0...dataplex-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.4.0...dataplex-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [dataplex] fix typings for IAM methods ([#4447](https://github.com/googleapis/google-cloud-node/issues/4447)) ([ad21113](https://github.com/googleapis/google-cloud-node/commit/ad21113bd22a79458f7a83be461b8d0ead4d9691))
* [dataplex] remove unused annotation in results_table ([#4493](https://github.com/googleapis/google-cloud-node/issues/4493)) ([f9d96a4](https://github.com/googleapis/google-cloud-node/commit/f9d96a4223abfb18cac3e6c47e282b644ca13660))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.3.2...dataplex-v2.4.0) (2023-05-04)


### Features

* [dataplex] added new Dataplex APIs and new features for existing APIs (e.g. DataScans) ([#4230](https://github.com/googleapis/google-cloud-node/issues/4230)) ([5268d24](https://github.com/googleapis/google-cloud-node/commit/5268d24478595c01fe04215f50ece5558cfcdc46))

## [2.3.2](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.3.1...dataplex-v2.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.3.0...dataplex-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.2.2...dataplex-v2.3.0) (2022-12-21)


### Features

* DataScans service ([#3797](https://github.com/googleapis/google-cloud-node/issues/3797)) ([374205f](https://github.com/googleapis/google-cloud-node/commit/374205fe3211b4d13dd17d713c1bccc3c8651265))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.2.1...dataplex-v2.2.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/dataplex-v2.2.0...dataplex-v2.2.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.2.0](https://github.com/googleapis/nodejs-dataplex/compare/v2.1.1...v2.2.0) (2022-09-21)


### Features

* Custom container, encryption key, cross project for Task, and more ([#51](https://github.com/googleapis/nodejs-dataplex/issues/51)) ([c6ab09d](https://github.com/googleapis/nodejs-dataplex/commit/c6ab09d06acd14bc182de9afda2d2da683a7a041))

## [2.1.1](https://github.com/googleapis/nodejs-dataplex/compare/v2.1.0...v2.1.1) (2022-08-27)


### Bug Fixes

* change import long to require ([#45](https://github.com/googleapis/nodejs-dataplex/issues/45)) ([7f3455c](https://github.com/googleapis/nodejs-dataplex/commit/7f3455c33f91a950b28d71e4af317eb31549a035))
* do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-dataplex/issues/1553)) ([#48](https://github.com/googleapis/nodejs-dataplex/issues/48)) ([8ced1a1](https://github.com/googleapis/nodejs-dataplex/commit/8ced1a11ec7a280d8fe10b5180dd7b7252377441))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-dataplex/issues/1546)) ([#47](https://github.com/googleapis/nodejs-dataplex/issues/47)) ([76d8469](https://github.com/googleapis/nodejs-dataplex/commit/76d84695d49aec32df66626ea7cfa6f9d4eb2516))
* use google-gax v3.3.0 ([8ced1a1](https://github.com/googleapis/nodejs-dataplex/commit/8ced1a11ec7a280d8fe10b5180dd7b7252377441))

## [2.1.0](https://github.com/googleapis/nodejs-dataplex/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#40](https://github.com/googleapis/nodejs-dataplex/issues/40)) ([b41c45d](https://github.com/googleapis/nodejs-dataplex/commit/b41c45db754f2bbead96bd6a1ee327d7db7d05ae))

## [2.0.0](https://github.com/googleapis/nodejs-dataplex/compare/v1.2.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#35)

### Build System

* update library to use Node 12 ([#35](https://github.com/googleapis/nodejs-dataplex/issues/35)) ([5eacc44](https://github.com/googleapis/nodejs-dataplex/commit/5eacc440fb9d16a200d7a4c79edd1a52fbc17848))

## [1.2.0](https://github.com/googleapis/nodejs-dataplex/compare/v1.1.0...v1.2.0) (2022-03-24)


### Features

* promote to stable ([#18](https://github.com/googleapis/nodejs-dataplex/issues/18)) ([a66995c](https://github.com/googleapis/nodejs-dataplex/commit/a66995c55005f941e1d43ca2befca1b497c6d9d4)), closes [#6](https://github.com/googleapis/nodejs-dataplex/issues/6)

## [1.1.0](https://github.com/googleapis/nodejs-dataplex/compare/v1.0.0...v1.1.0) (2022-02-16)


### Features

* add Content APIs ([#11](https://github.com/googleapis/nodejs-dataplex/issues/11)) ([09ea109](https://github.com/googleapis/nodejs-dataplex/commit/09ea109f0e9a6edc5e6eefa345833689422785eb))
* add Create|Update|Delete Metadata APIs (e.g. Entity and/or Partition). ([09ea109](https://github.com/googleapis/nodejs-dataplex/commit/09ea109f0e9a6edc5e6eefa345833689422785eb))

## 1.0.0 (2022-02-07)


### Features

* initial generation ([0315f09](https://github.com/googleapis/nodejs-dataplex/commit/0315f09e8c2768b8acb46793694cf7ba64432f2f))
