# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/bigquery?activeTab=versions

## [8.1.1](https://github.com/googleapis/nodejs-bigquery/compare/v8.1.0...v8.1.1) (2025-07-23)


### Bug Fixes

* Remove `is` package as dependency ([#1500](https://github.com/googleapis/nodejs-bigquery/issues/1500)) ([926c9f8](https://github.com/googleapis/nodejs-bigquery/commit/926c9f879521f0c06ab4f96b0b86e426aff3543c))

## [8.1.0](https://github.com/googleapis/nodejs-bigquery/compare/v8.0.0...v8.1.0) (2025-05-29)


### Features

* Job creation mode GA ([#1480](https://github.com/googleapis/nodejs-bigquery/issues/1480)) ([b51359a](https://github.com/googleapis/nodejs-bigquery/commit/b51359a61d93a5d9cff729221f457a50a5c7a52f))
* Support per-job reservation assignment ([#1477](https://github.com/googleapis/nodejs-bigquery/issues/1477)) ([8151e72](https://github.com/googleapis/nodejs-bigquery/commit/8151e72bb1e149f6f36f7acdba25629d208b1074))

## [8.0.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.9.4...v8.0.0) (2025-04-23)


### ⚠ BREAKING CHANGES

* migrate to node 18 ([#1458](https://github.com/googleapis/nodejs-bigquery/issues/1458))

### Miscellaneous Chores

* Migrate to node 18 ([#1458](https://github.com/googleapis/nodejs-bigquery/issues/1458)) ([6cd706b](https://github.com/googleapis/nodejs-bigquery/commit/6cd706b6e96ac54a9289211e7e3d2cc1f4e934e2))

## [7.9.4](https://github.com/googleapis/nodejs-bigquery/compare/v7.9.3...v7.9.4) (2025-04-02)


### Bug Fixes

* MergeSchemaWithRows can be called with empty schema if result set is empty ([#1455](https://github.com/googleapis/nodejs-bigquery/issues/1455)) ([e608601](https://github.com/googleapis/nodejs-bigquery/commit/e608601157a95430a63ce0047194ba40190b2e42))

## [7.9.3](https://github.com/googleapis/nodejs-bigquery/compare/v7.9.2...v7.9.3) (2025-03-17)


### Bug Fixes

* Make sure to pass selectedFields to tabledata.list method ([#1449](https://github.com/googleapis/nodejs-bigquery/issues/1449)) ([206aff9](https://github.com/googleapis/nodejs-bigquery/commit/206aff93d3d3520199388fc31314fa7ec221cee8))

## [7.9.2](https://github.com/googleapis/nodejs-bigquery/compare/v7.9.1...v7.9.2) (2025-02-12)


### Bug Fixes

* Avoid schema field mutation when passing selectedFields opt ([#1437](https://github.com/googleapis/nodejs-bigquery/issues/1437)) ([27044d5](https://github.com/googleapis/nodejs-bigquery/commit/27044d52e6bb6b4b6dbc746a0cfb02951817d7f1))

## [7.9.1](https://github.com/googleapis/nodejs-bigquery/compare/v7.9.0...v7.9.1) (2024-09-23)


### Bug Fixes

* Throw timeout error when using jobs.query ([#1402](https://github.com/googleapis/nodejs-bigquery/issues/1402)) ([cf962a5](https://github.com/googleapis/nodejs-bigquery/commit/cf962a5a94ec3df465871d8e4a2f64521a8d6ce0))

## [7.9.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.8.0...v7.9.0) (2024-08-01)


### Features

* Add retryOptions passing to underlying Service class ([#1390](https://github.com/googleapis/nodejs-bigquery/issues/1390)) ([a7cd3af](https://github.com/googleapis/nodejs-bigquery/commit/a7cd3af419a1bf2f9ef3b67bf0d4460892fba03d))
* Clean cached rows and responses after conversion ([#1393](https://github.com/googleapis/nodejs-bigquery/issues/1393)) ([3fd28b8](https://github.com/googleapis/nodejs-bigquery/commit/3fd28b8a0db415c0e5f19a6763f7ad44350e27b1))


### Bug Fixes

* Add missing alias for valid types ([#1388](https://github.com/googleapis/nodejs-bigquery/issues/1388)) ([7195951](https://github.com/googleapis/nodejs-bigquery/commit/719595166b71908d994b8eee970bd66758a12516))

## [7.8.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.7.1...v7.8.0) (2024-06-19)


### Features

* Update types from Discovery ([#1374](https://github.com/googleapis/nodejs-bigquery/issues/1374)) ([e416b6e](https://github.com/googleapis/nodejs-bigquery/commit/e416b6e888a435cd487e90932d2597bf4e4ddb72))

## [7.7.1](https://github.com/googleapis/nodejs-bigquery/compare/v7.7.0...v7.7.1) (2024-05-31)


### Bug Fixes

* Return extra args when autoPaginate is on ([#1365](https://github.com/googleapis/nodejs-bigquery/issues/1365)) ([9d77cd8](https://github.com/googleapis/nodejs-bigquery/commit/9d77cd85cf43a4cef535c5a1424e3cfb59fa8431)), closes [#1362](https://github.com/googleapis/nodejs-bigquery/issues/1362)

## [7.7.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.6.1...v7.7.0) (2024-05-03)


### Features

* Add support for RANGE type ([#1352](https://github.com/googleapis/nodejs-bigquery/issues/1352)) ([#1360](https://github.com/googleapis/nodejs-bigquery/issues/1360)) ([961a802](https://github.com/googleapis/nodejs-bigquery/commit/961a802725808a556d4b861360d77dcd24ff7e16))

## [7.6.1](https://github.com/googleapis/nodejs-bigquery/compare/v7.6.0...v7.6.1) (2024-04-26)


### Bug Fixes

* Should not override queryParameters if params not informed ([#1359](https://github.com/googleapis/nodejs-bigquery/issues/1359)) ([2b66d1e](https://github.com/googleapis/nodejs-bigquery/commit/2b66d1e5d57d754d188e8b45d8f58de0beff39b3))

## [7.6.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.5.2...v7.6.0) (2024-04-09)


### Features

* Integrate jobs.query and stateless query for faster queries ([#1337](https://github.com/googleapis/nodejs-bigquery/issues/1337)) ([74aa150](https://github.com/googleapis/nodejs-bigquery/commit/74aa1501452c36af7969bb4a46b996485d9ca91b))


### Bug Fixes

* Parsing zero value timestamp ([#1355](https://github.com/googleapis/nodejs-bigquery/issues/1355)) ([d433711](https://github.com/googleapis/nodejs-bigquery/commit/d4337118bf5708e2cb3e0036028a6d0dc5abf22f))

## [7.5.2](https://github.com/googleapis/nodejs-bigquery/compare/v7.5.1...v7.5.2) (2024-03-27)


### Bug Fixes

* Set projectId in jobs emitted by load streams ([#1346](https://github.com/googleapis/nodejs-bigquery/issues/1346)) ([bd8254c](https://github.com/googleapis/nodejs-bigquery/commit/bd8254c05b33831b0610233fcc793bd5e3bb20ff))

## [7.5.1](https://github.com/googleapis/nodejs-bigquery/compare/v7.5.0...v7.5.1) (2024-03-14)


### Bug Fixes

* Add better documentation around usage of BigQueryTimestamp class and .timestamp method. ([2b2c3e0](https://github.com/googleapis/nodejs-bigquery/commit/2b2c3e0b8e9c13d23aa54e7a85a861c61410bd4b))
* BigQueryTimestamp should keep accepting floats [#1339](https://github.com/googleapis/nodejs-bigquery/issues/1339) ([2b2c3e0](https://github.com/googleapis/nodejs-bigquery/commit/2b2c3e0b8e9c13d23aa54e7a85a861c61410bd4b))
* Restores BigQueryTimestamp behavior to accept a numeric value in the constructor representing epoch-seconds. The affected 7.5.0 version would parse a numeric value as epoch-microseconds. ([2b2c3e0](https://github.com/googleapis/nodejs-bigquery/commit/2b2c3e0b8e9c13d23aa54e7a85a861c61410bd4b))

## [7.5.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.4.0...v7.5.0) (2024-02-21)


### Features

* Add support for TPC Universes ([#1333](https://github.com/googleapis/nodejs-bigquery/issues/1333)) ([f67a841](https://github.com/googleapis/nodejs-bigquery/commit/f67a841c29f1f546187e4b670f5e5a4df50b4926))
* Switch timestamp representation to int64 usec ([#1332](https://github.com/googleapis/nodejs-bigquery/issues/1332)) ([fb10f03](https://github.com/googleapis/nodejs-bigquery/commit/fb10f036234dd5e69052ae724281d0e186f961be))
* Update types and generation script ([#1336](https://github.com/googleapis/nodejs-bigquery/issues/1336)) ([496f52c](https://github.com/googleapis/nodejs-bigquery/commit/496f52c3816d6a11d17d82bceb47bb8a47522e2b))

## [7.4.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.3.0...v7.4.0) (2024-02-06)


### Features

* Implementing mocha retries ([#1295](https://github.com/googleapis/nodejs-bigquery/issues/1295)) ([6cda9e1](https://github.com/googleapis/nodejs-bigquery/commit/6cda9e192c0dd224194f44ebd632a64b845c59b6))
* Support JSON query param ([#1329](https://github.com/googleapis/nodejs-bigquery/issues/1329)) ([e9f133b](https://github.com/googleapis/nodejs-bigquery/commit/e9f133bec0c1420396ff25d30baf1fba74e1ab04))


### Bug Fixes

* Prefer usage of projectId from the Dataset ([#1326](https://github.com/googleapis/nodejs-bigquery/issues/1326)) ([9e85219](https://github.com/googleapis/nodejs-bigquery/commit/9e85219afa074c6804adac79cb4f28a944f5957a))

## [7.3.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.2.0...v7.3.0) (2023-09-28)


### Features

* Re-exporting types for google-common ([#1271](https://github.com/googleapis/nodejs-bigquery/issues/1271)) ([cdf960a](https://github.com/googleapis/nodejs-bigquery/commit/cdf960a5cd7aaa1d9aeeff8001308b1fb89a6c6b))


### Bug Fixes

* Avoid TypeError if resp is undefined ([#1273](https://github.com/googleapis/nodejs-bigquery/issues/1273)) ([ff51c1d](https://github.com/googleapis/nodejs-bigquery/commit/ff51c1d61ff461e238aa9c72bb6817a3bdbee16e))
* Updated types from API discovery doc ([#1284](https://github.com/googleapis/nodejs-bigquery/issues/1284)) ([1d8a2b7](https://github.com/googleapis/nodejs-bigquery/commit/1d8a2b7059fa53725bdedb525d5b19ff6121de3b))
* Updating type for test blocking dependency updates ([#1282](https://github.com/googleapis/nodejs-bigquery/issues/1282)) ([1dbe0fe](https://github.com/googleapis/nodejs-bigquery/commit/1dbe0feb9aac90b775ec30e832915f23d488ac3a))

## [7.2.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.1.1...v7.2.0) (2023-08-17)


### Features

* Partial metadata projection ([#1258](https://github.com/googleapis/nodejs-bigquery/issues/1258)) ([b70d3a4](https://github.com/googleapis/nodejs-bigquery/commit/b70d3a4300d8efdea45f89766155110ead392f12))


### Bug Fixes

* **deps:** Update dependency @google-cloud/common to v5 ([#1253](https://github.com/googleapis/nodejs-bigquery/issues/1253)) ([0cbfdcd](https://github.com/googleapis/nodejs-bigquery/commit/0cbfdcd45870c7e41b748883a6780422e091376b))
* **deps:** Update dependency @google-cloud/paginator to v5 ([#1254](https://github.com/googleapis/nodejs-bigquery/issues/1254)) ([658ff1a](https://github.com/googleapis/nodejs-bigquery/commit/658ff1aa8ac47393aed48422538a8cda1747a4e7))
* **deps:** Update dependency @google-cloud/precise-date to v4 ([#1261](https://github.com/googleapis/nodejs-bigquery/issues/1261)) ([7f12f7d](https://github.com/googleapis/nodejs-bigquery/commit/7f12f7dd027b6f511df664d5607af0d78be2bf2b))
* **deps:** Update dependency @google-cloud/promisify to v4 ([#1252](https://github.com/googleapis/nodejs-bigquery/issues/1252)) ([6f04f39](https://github.com/googleapis/nodejs-bigquery/commit/6f04f39747a085cd370fbef35ab0afd578b26c94))
* Manual update for renovate-bot google cloud storage v7 ([#1262](https://github.com/googleapis/nodejs-bigquery/issues/1262)) ([b58fc29](https://github.com/googleapis/nodejs-bigquery/commit/b58fc292349a25e3a88ebc1a37f45cbd0987fd7d))

## [7.1.1](https://github.com/googleapis/nodejs-bigquery/compare/v7.1.0...v7.1.1) (2023-08-03)


### Bug Fixes

* Node release schedule link ([#1241](https://github.com/googleapis/nodejs-bigquery/issues/1241)) ([3bcb08a](https://github.com/googleapis/nodejs-bigquery/commit/3bcb08a20d53eeb9ac4deeb86d495185438bf77b))
* Update @types/big.js ([8d16fae](https://github.com/googleapis/nodejs-bigquery/commit/8d16fae555591e9b406d63bd5cb2818be778ebdc))

## [7.1.0](https://github.com/googleapis/nodejs-bigquery/compare/v7.0.0...v7.1.0) (2023-08-01)


### Features

* Support and optionally parse JSON field ([#1229](https://github.com/googleapis/nodejs-bigquery/issues/1229)) ([cd11447](https://github.com/googleapis/nodejs-bigquery/commit/cd114470150cd58dffd4a7c511021eac19ab94d5))
* Support create/list datasets on a different project ([#1230](https://github.com/googleapis/nodejs-bigquery/issues/1230)) ([86c63fb](https://github.com/googleapis/nodejs-bigquery/commit/86c63fb7079b2fb5b70bae13ed20267cebb3c99d))

## [7.0.0](https://github.com/googleapis/nodejs-bigquery/compare/v6.2.1...v7.0.0) (2023-07-31)


### ⚠ BREAKING CHANGES

* migrate to node 14 ([#1236](https://github.com/googleapis/nodejs-bigquery/issues/1236))

### Bug Fixes

* **deps:** Update dependency google-auth-library to v9 ([#1228](https://github.com/googleapis/nodejs-bigquery/issues/1228)) ([22cf786](https://github.com/googleapis/nodejs-bigquery/commit/22cf786579331e3cb7a3aa63dc2f71e448553e18))


### Miscellaneous Chores

* Migrate to node 14 ([#1236](https://github.com/googleapis/nodejs-bigquery/issues/1236)) ([73bf31f](https://github.com/googleapis/nodejs-bigquery/commit/73bf31f55c4fa9e384aa76e1a7af0603ebb0d11b))

## [6.2.1](https://github.com/googleapis/nodejs-bigquery/compare/v6.2.0...v6.2.1) (2023-07-10)


### Bug Fixes

* Change view name to match sample comments ([#1207](https://github.com/googleapis/nodejs-bigquery/issues/1207)) ([1002dee](https://github.com/googleapis/nodejs-bigquery/commit/1002dee1ab31d912218e8d49296367b9785dfa5c))
* Encode values with null prototype ([#1219](https://github.com/googleapis/nodejs-bigquery/issues/1219)) ([1b7a52e](https://github.com/googleapis/nodejs-bigquery/commit/1b7a52ed5b686899df5ab2b11d482a50a1ab19a2))

## [6.2.0](https://github.com/googleapis/nodejs-bigquery/compare/v6.1.0...v6.2.0) (2023-03-22)


### Features

* Add collation feature tests ([#1188](https://github.com/googleapis/nodejs-bigquery/issues/1188)) ([80d86ba](https://github.com/googleapis/nodejs-bigquery/commit/80d86ba7d304e83c16c18e721aa50a2612233d14))
* Add support for microseconds precision ([#1192](https://github.com/googleapis/nodejs-bigquery/issues/1192)) ([b5801a6](https://github.com/googleapis/nodejs-bigquery/commit/b5801a641ae62b1589670233d2c699114e00aa26))


### Bug Fixes

* Add typings for named parameter structs ([#1198](https://github.com/googleapis/nodejs-bigquery/issues/1198)) ([c7c2ba1](https://github.com/googleapis/nodejs-bigquery/commit/c7c2ba1bd3657dc4ad2e91c5b89ac35cf6fd97a9))
* Client endpoint sample error msg ([#1193](https://github.com/googleapis/nodejs-bigquery/issues/1193)) ([e3ea8cd](https://github.com/googleapis/nodejs-bigquery/commit/e3ea8cded3c1d51f3da96a9974ac991828d9e9c8))
* Pass Query.wrapIntegers to job.getQueryResults ([#1191](https://github.com/googleapis/nodejs-bigquery/issues/1191)) ([fb13510](https://github.com/googleapis/nodejs-bigquery/commit/fb13510d4ad0b2d3f82a306a7da72969d594cf11))

## [6.1.0](https://github.com/googleapis/nodejs-bigquery/compare/v6.0.3...v6.1.0) (2023-01-25)


### Features

* Add set client endpoint sample ([#1170](https://github.com/googleapis/nodejs-bigquery/issues/1170)) ([df1dcd3](https://github.com/googleapis/nodejs-bigquery/commit/df1dcd3899dd10f20988b938b31ac571c997bffd))

## [6.0.3](https://github.com/googleapis/nodejs-bigquery/compare/v6.0.2...v6.0.3) (2022-08-23)


### Bug Fixes

* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigquery/issues/1546)) ([#1144](https://github.com/googleapis/nodejs-bigquery/issues/1144)) ([328f3c0](https://github.com/googleapis/nodejs-bigquery/commit/328f3c0215be3e6dbc1c4ff09af6475d7d34a8fe))

## [6.0.2](https://github.com/googleapis/nodejs-bigquery/compare/v6.0.1...v6.0.2) (2022-08-01)


### Bug Fixes

* adding missing links to bug_report template ([#1141](https://github.com/googleapis/nodejs-bigquery/issues/1141)) ([aa6388a](https://github.com/googleapis/nodejs-bigquery/commit/aa6388ac5cbfbcb4b3e622120de9cd53ec47a6ad))
* **deps:** update dependency @google-cloud/common to v4 ([#1127](https://github.com/googleapis/nodejs-bigquery/issues/1127)) ([bea8b42](https://github.com/googleapis/nodejs-bigquery/commit/bea8b429894b3b710ac682ee57b0878b82ca29c1))
* **deps:** update dependency readable-stream to v4 ([#1129](https://github.com/googleapis/nodejs-bigquery/issues/1129)) ([4a252d0](https://github.com/googleapis/nodejs-bigquery/commit/4a252d08ff6df7f61c793f5225e20709474694ae))

## [6.0.1](https://github.com/googleapis/nodejs-bigquery/compare/v6.0.0...v6.0.1) (2022-06-17)


### Bug Fixes

* call rowQueue insert callback only if present ([#1128](https://github.com/googleapis/nodejs-bigquery/issues/1128)) ([17a0c0d](https://github.com/googleapis/nodejs-bigquery/commit/17a0c0ddee6e7c9ea03c839edbc162a7ecfa5b0e))
* **deps:** update dependency @google-cloud/paginator to v4 ([#1116](https://github.com/googleapis/nodejs-bigquery/issues/1116)) ([073abc0](https://github.com/googleapis/nodejs-bigquery/commit/073abc0b22271627f79d6744995d820d3bd62631))
* **deps:** update dependency @google-cloud/storage to v6 ([#1119](https://github.com/googleapis/nodejs-bigquery/issues/1119)) ([d607e5a](https://github.com/googleapis/nodejs-bigquery/commit/d607e5a657daa500049a279e79ed69086665ceff))

## [6.0.0](https://github.com/googleapis/nodejs-bigquery/compare/v5.12.0...v6.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1114)

### Features

* add custom retry options ([#1088](https://github.com/googleapis/nodejs-bigquery/issues/1088)) ([b7f29ed](https://github.com/googleapis/nodejs-bigquery/commit/b7f29ed4f748c8bd0b062bb68cf9de4b2925cace))


### Bug Fixes

* **deps:** update dependency @google-cloud/promisify to v3 ([#1112](https://github.com/googleapis/nodejs-bigquery/issues/1112)) ([cb0d601](https://github.com/googleapis/nodejs-bigquery/commit/cb0d601fa4f8693ffbf4f3eb3f40d2fa014dd8f5))
* Fix Job#getQueryResultsStream when using startIndex ([#1100](https://github.com/googleapis/nodejs-bigquery/issues/1100)) ([2b7df52](https://github.com/googleapis/nodejs-bigquery/commit/2b7df52ff6bce5422d5d3724bd635606d584c2dc))


### Build System

* update library to use Node 12 ([#1114](https://github.com/googleapis/nodejs-bigquery/issues/1114)) ([b49fc4d](https://github.com/googleapis/nodejs-bigquery/commit/b49fc4d7a0f623da40f2d40e1d7e223ab23f1965))

## [5.12.0](https://github.com/googleapis/nodejs-bigquery/compare/v5.11.0...v5.12.0) (2022-03-02)


### Features

* add support for accessing jobs cross-project ([#1083](https://github.com/googleapis/nodejs-bigquery/issues/1083)) ([9e5bae2](https://github.com/googleapis/nodejs-bigquery/commit/9e5bae22cecb8c012504f21d8d09df436dc3d978))

## [5.11.0](https://github.com/googleapis/nodejs-bigquery/compare/v5.10.0...v5.11.0) (2022-02-10)


### Features

* add cross-project support ([#1079](https://github.com/googleapis/nodejs-bigquery/issues/1079)) ([f6a7456](https://github.com/googleapis/nodejs-bigquery/commit/f6a745682f2c25d6dfa676975d2af3d0984fe6c0))
* add table.createInsertStream for native streaming inserts ([#997](https://github.com/googleapis/nodejs-bigquery/issues/997)) ([0ffe544](https://github.com/googleapis/nodejs-bigquery/commit/0ffe544d8961f294e520519a077b59838135699f))


### Bug Fixes

* wait for job finish before deletion ([#1071](https://github.com/googleapis/nodejs-bigquery/issues/1071)) ([5b77718](https://github.com/googleapis/nodejs-bigquery/commit/5b777181a2c05ca32aea84a1fc8c6fbc3f1252be))

## [5.10.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.9.3...v5.10.0) (2022-01-10)


### Features

* Add jobs.delete and update to latest discovery types ([#1023](https://www.github.com/googleapis/nodejs-bigquery/issues/1023)) ([12f7771](https://www.github.com/googleapis/nodejs-bigquery/commit/12f77710accfca8c512d021a1c75a732c6c666f7))

### [5.9.3](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.9.2...v5.9.3) (2021-12-13)


### Bug Fixes

* refactor to extract options from query ([#1045](https://www.github.com/googleapis/nodejs-bigquery/issues/1045)) ([4afed77](https://www.github.com/googleapis/nodejs-bigquery/commit/4afed77c0e21568546bb6363936b10d15c9c93db))

### [5.9.2](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.9.1...v5.9.2) (2021-11-16)


### Bug Fixes

* **cloud-rad:** move comments for TSDoc ([#1040](https://www.github.com/googleapis/nodejs-bigquery/issues/1040)) ([93c5e14](https://www.github.com/googleapis/nodejs-bigquery/commit/93c5e14a91418a293775e417b68ab22732bc48e7))

### [5.9.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.9.0...v5.9.1) (2021-10-12)


### Bug Fixes

* update queryAsStream_ to set options with Query type ([#999](https://www.github.com/googleapis/nodejs-bigquery/issues/999)) ([e7eab0b](https://www.github.com/googleapis/nodejs-bigquery/commit/e7eab0b25c18c6bbb9fa0f92f180ba70632675aa))

## [5.9.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.8.0...v5.9.0) (2021-09-08)


### Features

* publish post-processor images to cloud-devrel-public-resources ([#1203](https://www.github.com/googleapis/nodejs-bigquery/issues/1203)) ([#1005](https://www.github.com/googleapis/nodejs-bigquery/issues/1005)) ([e852cb2](https://www.github.com/googleapis/nodejs-bigquery/commit/e852cb22d0dd539941a0b1a8e6f9a7dde214fe84))


### Bug Fixes

* return 409 error in createJob() for dry run ([#1003](https://www.github.com/googleapis/nodejs-bigquery/issues/1003)) ([281e3ff](https://www.github.com/googleapis/nodejs-bigquery/commit/281e3ff7aadd0f300cba3510bddfc08fe4dfa642))

## [5.8.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.7.1...v5.8.0) (2021-08-23)


### Features

* add support for loading Firestore export file ([#991](https://www.github.com/googleapis/nodejs-bigquery/issues/991)) ([c17a44e](https://www.github.com/googleapis/nodejs-bigquery/commit/c17a44ec97af6acff24a712a519355a0957999a3))

### [5.7.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.7.0...v5.7.1) (2021-08-10)


### Bug Fixes

* **build:** migrate to using main branch ([#986](https://www.github.com/googleapis/nodejs-bigquery/issues/986)) ([16e7a4e](https://www.github.com/googleapis/nodejs-bigquery/commit/16e7a4e36245af42a4f19048941a4dab1303f106))

## [5.7.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.6.0...v5.7.0) (2021-07-21)


### Features

* add `gcf-owl-bot[bot]` to `ignoreAuthors` ([#958](https://www.github.com/googleapis/nodejs-bigquery/issues/958)) ([9eab78d](https://www.github.com/googleapis/nodejs-bigquery/commit/9eab78de56d087f3dc756ab2c0974737a80ad43f))


### Bug Fixes

* **deps:** update dependency yargs to v17 ([#954](https://www.github.com/googleapis/nodejs-bigquery/issues/954)) ([28cf08d](https://www.github.com/googleapis/nodejs-bigquery/commit/28cf08d74184b388cd8d18a9622630939c5f99cf))
* extend definition of Query.types for simple named parameters ([#906](https://www.github.com/googleapis/nodejs-bigquery/issues/906)) ([#907](https://www.github.com/googleapis/nodejs-bigquery/issues/907)) ([44e1ac7](https://www.github.com/googleapis/nodejs-bigquery/commit/44e1ac7cf8604d79508316d70a3a98e2953d59f0))
* handle null query parameter value ([#920](https://www.github.com/googleapis/nodejs-bigquery/issues/920)) ([3bf900a](https://www.github.com/googleapis/nodejs-bigquery/commit/3bf900a54a92c0422fa8f3c48480dc430a7d134d))
* promise never returned on table.insert ([#953](https://www.github.com/googleapis/nodejs-bigquery/issues/953)) ([a138347](https://www.github.com/googleapis/nodejs-bigquery/commit/a138347855f74d4e5c889dc42b00992c4a3808a6))

## [5.6.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.5.0...v5.6.0) (2021-04-28)


### Features

* Adds support for BIGNUMERIC type ([#904](https://www.github.com/googleapis/nodejs-bigquery/issues/904)) ([ef5552a](https://www.github.com/googleapis/nodejs-bigquery/commit/ef5552a5230240650fadd5bca8405a69b561a712))


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#928](https://www.github.com/googleapis/nodejs-bigquery/issues/928)) ([2ce28c7](https://www.github.com/googleapis/nodejs-bigquery/commit/2ce28c7beec18d80a744e5dafaa0b8288041c35f))
* update returned Job with API-determined location in getMetadata ([#900](https://www.github.com/googleapis/nodejs-bigquery/issues/900)) ([8c31358](https://www.github.com/googleapis/nodejs-bigquery/commit/8c313582595ba7819f1cebf01625b24814c38174))

## [5.5.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.4.0...v5.5.0) (2020-11-10)


### Features

* Add support for Table IAM policies ([#892](https://www.github.com/googleapis/nodejs-bigquery/issues/892)) ([005422a](https://www.github.com/googleapis/nodejs-bigquery/commit/005422a07a46edd0eaf3fba3035753b42a86dadb))


### Bug Fixes

* update returned Job with API-determined location ([#890](https://www.github.com/googleapis/nodejs-bigquery/issues/890)) ([3894140](https://www.github.com/googleapis/nodejs-bigquery/commit/38941409c63221bf704ee8580ab3b032802ddc4e))

## [5.4.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.3.0...v5.4.0) (2020-11-02)


### Features

* optionally wrap INT64 in BigQueryInt or provide a custom INT64 value type cast options ([#873](https://www.github.com/googleapis/nodejs-bigquery/issues/873)) ([be7c6e6](https://www.github.com/googleapis/nodejs-bigquery/commit/be7c6e6411e351bfab4b557fb34162470bbfd7f4))


### Bug Fixes

* Detect Geography type during parameterized query ([#877](https://www.github.com/googleapis/nodejs-bigquery/issues/877)) ([bc0ca69](https://www.github.com/googleapis/nodejs-bigquery/commit/bc0ca695a5b2d9df15df9383f6a791be30e851ec))
* do not retry jobs.insert when it flakes ([#864](https://www.github.com/googleapis/nodejs-bigquery/issues/864)) ([255491b](https://www.github.com/googleapis/nodejs-bigquery/commit/255491b958171907695b10aca7e536d58a52354c))
* return error when custom getQueryResults() timeout has been exceeded  ([#872](https://www.github.com/googleapis/nodejs-bigquery/issues/872)) ([96f939c](https://www.github.com/googleapis/nodejs-bigquery/commit/96f939cefe2f31a5252002bbfecd5f503b32f841))
* **deps:** update dependency big.js to v6 ([#862](https://www.github.com/googleapis/nodejs-bigquery/issues/862)) ([a47afb5](https://www.github.com/googleapis/nodejs-bigquery/commit/a47afb5c97115d0159ad94615a7997db15d03d01))

## [5.3.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.2.0...v5.3.0) (2020-09-30)


### Features

* **constructor:** add option to set baseUrl using environment variable ([#849](https://www.github.com/googleapis/nodejs-bigquery/issues/849)) ([8c54f20](https://www.github.com/googleapis/nodejs-bigquery/commit/8c54f20777a902a343035fcf09e63978d71135ad))
* allow setting BigQuery Job labels in createQueryJob method ([#865](https://www.github.com/googleapis/nodejs-bigquery/issues/865)) ([be074e7](https://www.github.com/googleapis/nodejs-bigquery/commit/be074e72ae1907f0649fbc5e085e22a31c3a6393))


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#854](https://www.github.com/googleapis/nodejs-bigquery/issues/854)) ([58dcf34](https://www.github.com/googleapis/nodejs-bigquery/commit/58dcf34d8d22b4b5c9e488935b75eeaf8c8fd69e))
* **perf:** disable prettyPrint for slimmer API responses ([#860](https://www.github.com/googleapis/nodejs-bigquery/issues/860)) ([1e56383](https://www.github.com/googleapis/nodejs-bigquery/commit/1e56383da5e6d8ce1335a711b32fea1155bddada))

## [5.2.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.1.0...v5.2.0) (2020-08-13)


### Features

* model extract ([#832](https://www.github.com/googleapis/nodejs-bigquery/issues/832)) ([1541e98](https://www.github.com/googleapis/nodejs-bigquery/commit/1541e98076ee33da7d7e5f5a10d3ea45fc393736))

## [5.1.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.0.1...v5.1.0) (2020-07-27)


### Features

* detect param type if not in provided types ([#813](https://www.github.com/googleapis/nodejs-bigquery/issues/813)) ([1e5a4cc](https://www.github.com/googleapis/nodejs-bigquery/commit/1e5a4cc0e7927dfe9690842e564982bfbef9310f))


### Bug Fixes

* add string type for query types ([#827](https://www.github.com/googleapis/nodejs-bigquery/issues/827)) ([acdecbd](https://www.github.com/googleapis/nodejs-bigquery/commit/acdecbd06f6a6ac1e5d1d8d0cd68afcb9a4d3ba7))
* move gitattributes files to node templates ([#829](https://www.github.com/googleapis/nodejs-bigquery/issues/829)) ([f26e641](https://www.github.com/googleapis/nodejs-bigquery/commit/f26e64100e543cb520bcd7cd99913eca68e84af5))

### [5.0.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v5.0.0...v5.0.1) (2020-07-07)


### Bug Fixes

* add tests for Routine ([#807](https://www.github.com/googleapis/nodejs-bigquery/issues/807)) ([c969f3d](https://www.github.com/googleapis/nodejs-bigquery/commit/c969f3d15d4e545b9efd92c4f8a9649216cbd927))

## [5.0.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.7.0...v5.0.0) (2020-06-19)


### ⚠ BREAKING CHANGES

* don't return Stream from createLoadJob (#647)
* drop Node 8 from engines field (#662)

### Features

* drop Node 8 from engines field ([#662](https://www.github.com/googleapis/nodejs-bigquery/issues/662)) ([712b029](https://www.github.com/googleapis/nodejs-bigquery/commit/712b0294c6329545de70febb48762abd8b0567b9))
* improved types ([40087fa](https://www.github.com/googleapis/nodejs-bigquery/commit/40087fa40f1e9a4180da7aaa43e2bb8a018bd632))
* update types.d.ts ([#667](https://www.github.com/googleapis/nodejs-bigquery/issues/667)) ([a12b094](https://www.github.com/googleapis/nodejs-bigquery/commit/a12b094d2e6e48049203c9cd773fecb98713a3fa)), closes [#662](https://www.github.com/googleapis/nodejs-bigquery/issues/662) [#662](https://www.github.com/googleapis/nodejs-bigquery/issues/662) [#647](https://www.github.com/googleapis/nodejs-bigquery/issues/647) [#647](https://www.github.com/googleapis/nodejs-bigquery/issues/647) [#640](https://www.github.com/googleapis/nodejs-bigquery/issues/640) [#640](https://www.github.com/googleapis/nodejs-bigquery/issues/640) [#647](https://www.github.com/googleapis/nodejs-bigquery/issues/647) [#661](https://www.github.com/googleapis/nodejs-bigquery/issues/661) [#661](https://www.github.com/googleapis/nodejs-bigquery/issues/661) [#658](https://www.github.com/googleapis/nodejs-bigquery/issues/658) [#658](https://www.github.com/googleapis/nodejs-bigquery/issues/658) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#657](https://www.github.com/googleapis/nodejs-bigquery/issues/657) [#657](https://www.github.com/googleapis/nodejs-bigquery/issues/657) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#660](https://www.github.com/googleapis/nodejs-bigquery/issues/660) [#660](https://www.github.com/googleapis/nodejs-bigquery/issues/660) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203) [#665](https://www.github.com/googleapis/nodejs-bigquery/issues/665) [#665](https://www.github.com/googleapis/nodejs-bigquery/issues/665) [#454](https://www.github.com/googleapis/nodejs-bigquery/issues/454) [#454](https://www.github.com/googleapis/nodejs-bigquery/issues/454) [#456](https://www.github.com/googleapis/nodejs-bigquery/issues/456) [#456](https://www.github.com/googleapis/nodejs-bigquery/issues/456) [#463](https://www.github.com/googleapis/nodejs-bigquery/issues/463) [#463](https://www.github.com/googleapis/nodejs-bigquery/issues/463)
* **userAgent:** allow for optional user agent to be provided ([#671](https://www.github.com/googleapis/nodejs-bigquery/issues/671)) ([25aeca8](https://www.github.com/googleapis/nodejs-bigquery/commit/25aeca8f6c136d03d6029bda54e7cdab98af80ca))


### Bug Fixes

* add types for hasDrift and seasonalPeriods ([#680](https://www.github.com/googleapis/nodejs-bigquery/issues/680)) ([d6c9566](https://www.github.com/googleapis/nodejs-bigquery/commit/d6c95667577df2d32bff6f9d07117d011379ecd2))
* **deps:** update dependency @google-cloud/paginator to v3 ([#658](https://www.github.com/googleapis/nodejs-bigquery/issues/658)) ([a09c493](https://www.github.com/googleapis/nodejs-bigquery/commit/a09c493f1f94e4a0272c17cb62009c92945c20d0))
* apache license URL ([#468](https://www.github.com/googleapis/nodejs-bigquery/issues/468)) ([#669](https://www.github.com/googleapis/nodejs-bigquery/issues/669)) ([d3ed602](https://www.github.com/googleapis/nodejs-bigquery/commit/d3ed602e47ba005ca4c9d2f382867d19336f239d))
* drop dependency on string-format-obj ([#698](https://www.github.com/googleapis/nodejs-bigquery/issues/698)) ([cf8f58f](https://www.github.com/googleapis/nodejs-bigquery/commit/cf8f58f851a8e32a4857f35c05a081cd031be124))
* load job to a different project ID ([#748](https://www.github.com/googleapis/nodejs-bigquery/issues/748)) ([bfb74ad](https://www.github.com/googleapis/nodejs-bigquery/commit/bfb74add1850925837fa1737fded8642c80f0356))
* **docs:** fix link for job configuration load ([#678](https://www.github.com/googleapis/nodejs-bigquery/issues/678)) ([ea3d7af](https://www.github.com/googleapis/nodejs-bigquery/commit/ea3d7afe18f8f22c6541043c92c26625ae9e0e85))
* selectedFields on getRows not working correctly  ([#712](https://www.github.com/googleapis/nodejs-bigquery/issues/712)) ([13b7e39](https://www.github.com/googleapis/nodejs-bigquery/commit/13b7e391cb3cfd87caec094f058143842cb39306))
* **deps:** update dependency @google-cloud/promisify to v2 ([#657](https://www.github.com/googleapis/nodejs-bigquery/issues/657)) ([5d8112c](https://www.github.com/googleapis/nodejs-bigquery/commit/5d8112c2cd3994d1d32102d63a7a90fb9478223c))
* **deps:** update dependency @google-cloud/storage to v5 ([#700](https://www.github.com/googleapis/nodejs-bigquery/issues/700)) ([a2e34ef](https://www.github.com/googleapis/nodejs-bigquery/commit/a2e34ef32a79c0dccaa11954ca2fa3f90795c63a))
* **deps:** update dependency google-auth-library to v6 ([#660](https://www.github.com/googleapis/nodejs-bigquery/issues/660)) ([3ea642e](https://www.github.com/googleapis/nodejs-bigquery/commit/3ea642ec9f1c471bff0d5d095fcc3e1b3813e52a))
* **docs:** configuration.copy link ([#709](https://www.github.com/googleapis/nodejs-bigquery/issues/709)) ([4a81b1e](https://www.github.com/googleapis/nodejs-bigquery/commit/4a81b1e25c9b8f09eca28142bd54f6ca42b1f866))
* **docs:** correct createTablePartitioned sample argument ([#701](https://www.github.com/googleapis/nodejs-bigquery/issues/701)) ([9a7520e](https://www.github.com/googleapis/nodejs-bigquery/commit/9a7520e62ebe7f561190de0a3c1080bbc07567ba))
* **table:** add retries for insert partial failures ([#589](https://www.github.com/googleapis/nodejs-bigquery/issues/589)) ([b8639c2](https://www.github.com/googleapis/nodejs-bigquery/commit/b8639c27009aaa4eb03bbd9ebf0fa1463e2bcd2b)), closes [#655](https://www.github.com/googleapis/nodejs-bigquery/issues/655)
* **types:** drop changes for drift and seasonal ([#681](https://www.github.com/googleapis/nodejs-bigquery/issues/681)) ([679d990](https://www.github.com/googleapis/nodejs-bigquery/commit/679d990f391433fbef180a4bbba2e32442e358da))


### Code Refactoring

* don't return Stream from createLoadJob ([#647](https://www.github.com/googleapis/nodejs-bigquery/issues/647)) ([8e26fb5](https://www.github.com/googleapis/nodejs-bigquery/commit/8e26fb561a9595e0f05e0506cebb71aa1eaba432)), closes [#640](https://www.github.com/googleapis/nodejs-bigquery/issues/640) [#640](https://www.github.com/googleapis/nodejs-bigquery/issues/640)

## [4.7.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.6.1...v4.7.0) (2020-01-30)


### Features

* add support for scripting/routines ([#580](https://www.github.com/googleapis/nodejs-bigquery/issues/580)) ([63d7e24](https://www.github.com/googleapis/nodejs-bigquery/commit/63d7e24bd9347f7b5202127afc1e92be34819a77))
* **params:** adds optional param types ([#599](https://www.github.com/googleapis/nodejs-bigquery/issues/599)) ([008946a](https://www.github.com/googleapis/nodejs-bigquery/commit/008946a05b8d1d54add31a25cc52aba2a61448a8))

### [4.6.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.6.0...v4.6.1) (2020-01-13)


### Bug Fixes

* don't modify the constructor options ([#607](https://www.github.com/googleapis/nodejs-bigquery/issues/607)) ([7df0799](https://www.github.com/googleapis/nodejs-bigquery/commit/7df0799e09e2a3a44f9ac4a04d157b7c85816fbe))

## [4.6.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.5.0...v4.6.0) (2020-01-05)


### Features

* types to support slot ms and read masks ([#592](https://www.github.com/googleapis/nodejs-bigquery/issues/592)) ([84d1c82](https://www.github.com/googleapis/nodejs-bigquery/commit/84d1c82981a2f3444836dde5d8fd00a23ee1cf94))

## [4.5.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.4.0...v4.5.0) (2019-12-05)


### Features

* **table:** allow opting out of default insert id ([#582](https://www.github.com/googleapis/nodejs-bigquery/issues/582)) ([6bf2dbd](https://www.github.com/googleapis/nodejs-bigquery/commit/6bf2dbd1ec09689338ee21b1d8666a4e8b2a7367))
* adds policyTags parameter removes IGetParams Interface ([#576](https://www.github.com/googleapis/nodejs-bigquery/issues/576)) ([8cf8f1d](https://www.github.com/googleapis/nodejs-bigquery/commit/8cf8f1d15cd53406ac911fef512f69132d823873))


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#586](https://www.github.com/googleapis/nodejs-bigquery/issues/586)) ([04f8cba](https://www.github.com/googleapis/nodejs-bigquery/commit/04f8cba7c86675fd7e12bb5ac4235f56745c033f))
* **deps:** update dependency yargs to v15 ([#579](https://www.github.com/googleapis/nodejs-bigquery/issues/579)) ([92119e3](https://www.github.com/googleapis/nodejs-bigquery/commit/92119e3b23874263d9529283194a149b358b7c9f))
* **docs:** snippets are now replaced in jsdoc comments ([#573](https://www.github.com/googleapis/nodejs-bigquery/issues/573)) ([a0d3538](https://www.github.com/googleapis/nodejs-bigquery/commit/a0d3538ad83b356918cabbd2bbfaf405e0a8272d))

## [4.4.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.3.0...v4.4.0) (2019-11-08)


### Features

* **table:** typescript support for range partitioning ([#559](https://www.github.com/googleapis/nodejs-bigquery/issues/559)) ([a77c28a](https://www.github.com/googleapis/nodejs-bigquery/commit/a77c28a3e8b84760d67c4381008424103dcd1db7))
* typescript support for data split result ([#570](https://www.github.com/googleapis/nodejs-bigquery/issues/570)) ([2236545](https://www.github.com/googleapis/nodejs-bigquery/commit/223654555ed9113683781883c65ffa7ee2f1ea5b))


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v4 ([#561](https://www.github.com/googleapis/nodejs-bigquery/issues/561)) ([0ec07f9](https://www.github.com/googleapis/nodejs-bigquery/commit/0ec07f994e0e9567025d1c96ad65f9a057a65344))

## [4.3.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.2.1...v4.3.0) (2019-10-09)


### Features

* **TypeScript:** introduce IArimaResult interface ([4cd3a71](https://www.github.com/googleapis/nodejs-bigquery/commit/4cd3a71))

### [4.2.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.2.0...v4.2.1) (2019-09-16)


### Bug Fixes

* **deps:** update dependency discovery-tsd to ^0.2.0 ([#540](https://www.github.com/googleapis/nodejs-bigquery/issues/540)) ([651e870](https://www.github.com/googleapis/nodejs-bigquery/commit/651e870))

## [4.2.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.8...v4.2.0) (2019-09-07)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([#520](https://www.github.com/googleapis/nodejs-bigquery/issues/520)) ([9dd59a6](https://www.github.com/googleapis/nodejs-bigquery/commit/9dd59a6))
* **types:** update to the latest discovery types ([#518](https://www.github.com/googleapis/nodejs-bigquery/issues/518)) ([dccf2cf](https://www.github.com/googleapis/nodejs-bigquery/commit/dccf2cf))
* update root url to `bigquery.googleapis.com` ([#531](https://www.github.com/googleapis/nodejs-bigquery/issues/531)) ([277940f](https://www.github.com/googleapis/nodejs-bigquery/commit/277940f))


### Features

* **typescript:** generate latest request/response types ([#528](https://www.github.com/googleapis/nodejs-bigquery/issues/528)) ([f8d2f4d](https://www.github.com/googleapis/nodejs-bigquery/commit/f8d2f4d))

### [4.1.8](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.7...v4.1.8) (2019-08-02)


### Bug Fixes

* allow calls with no request, add JSON proto ([885a98a](https://www.github.com/googleapis/nodejs-bigquery/commit/885a98a))

### [4.1.7](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.6...v4.1.7) (2019-08-01)


### Bug Fixes

* **docs:** duplicate readme sample names ([#512](https://www.github.com/googleapis/nodejs-bigquery/issues/512)) ([56040f5](https://www.github.com/googleapis/nodejs-bigquery/commit/56040f5))
* **docs:** fix formatting of the docs ([#513](https://www.github.com/googleapis/nodejs-bigquery/issues/513)) ([d823014](https://www.github.com/googleapis/nodejs-bigquery/commit/d823014))

### [4.1.6](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.5...v4.1.6) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v3 ([#508](https://www.github.com/googleapis/nodejs-bigquery/issues/508)) ([bdca2ea](https://www.github.com/googleapis/nodejs-bigquery/commit/bdca2ea))

### [4.1.5](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.4...v4.1.5) (2019-07-17)


### Performance Improvements

* pull in paginator refactor ([#499](https://www.github.com/googleapis/nodejs-bigquery/issues/499)) ([8daafcc](https://www.github.com/googleapis/nodejs-bigquery/commit/8daafcc))

### [4.1.4](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.3...v4.1.4) (2019-07-02)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#486](https://www.github.com/googleapis/nodejs-bigquery/issues/486)) ([a76cc5b](https://www.github.com/googleapis/nodejs-bigquery/commit/a76cc5b))

### [4.1.3](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.2...v4.1.3) (2019-06-17)


### Bug Fixes

* **docs:** move to new client docs URL ([#479](https://www.github.com/googleapis/nodejs-bigquery/issues/479)) ([7db57d2](https://www.github.com/googleapis/nodejs-bigquery/commit/7db57d2))

### [4.1.2](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.1...v4.1.2) (2019-06-11)


### Bug Fixes

* link to new googleapis.dev docs ([#477](https://www.github.com/googleapis/nodejs-bigquery/issues/477)) ([9dfcda0](https://www.github.com/googleapis/nodejs-bigquery/commit/9dfcda0))

### [4.1.1](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.1.0...v4.1.1) (2019-05-30)


### Bug Fixes

* **job:** remove job instance from request params ([#465](https://www.github.com/googleapis/nodejs-bigquery/issues/465)) ([27f080d](https://www.github.com/googleapis/nodejs-bigquery/commit/27f080d))
* correct name in .repo-metadata.json ([#467](https://www.github.com/googleapis/nodejs-bigquery/issues/467)) ([6add722](https://www.github.com/googleapis/nodejs-bigquery/commit/6add722))

## [4.1.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v4.0.0...v4.1.0) (2019-05-29)


### Features

* **model:** dataset model support ([#449](https://www.github.com/googleapis/nodejs-bigquery/issues/449)) ([3ad884f](https://www.github.com/googleapis/nodejs-bigquery/commit/3ad884f))
* accept apiEndpoint override ([#455](https://www.github.com/googleapis/nodejs-bigquery/issues/455)) ([1eda8ff](https://www.github.com/googleapis/nodejs-bigquery/commit/1eda8ff))

## [4.0.0](https://www.github.com/googleapis/nodejs-bigquery/compare/v3.0.0...v4.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* **deps:** this will ship async/await with the generated code.
* upgrade engines field to >=8.10.0 (#424)
* This removes the `autoCreate` option which may result in a breaking change for TypeScript users.

### Bug Fixes

* **deps:** update dependency @google-cloud/common to ^0.32.0 ([8e28b62](https://www.github.com/googleapis/nodejs-bigquery/commit/8e28b62)), closes [#8203](https://www.github.com/googleapis/nodejs-bigquery/issues/8203)
* **deps:** update dependency @google-cloud/common to v1 ([#434](https://www.github.com/googleapis/nodejs-bigquery/issues/434)) ([0e4aeef](https://www.github.com/googleapis/nodejs-bigquery/commit/0e4aeef))
* **deps:** update dependency @google-cloud/paginator to v1 ([#428](https://www.github.com/googleapis/nodejs-bigquery/issues/428)) ([5d925af](https://www.github.com/googleapis/nodejs-bigquery/commit/5d925af))
* **deps:** update dependency @google-cloud/promisify to v1 ([#427](https://www.github.com/googleapis/nodejs-bigquery/issues/427)) ([fdeb862](https://www.github.com/googleapis/nodejs-bigquery/commit/fdeb862))
* **deps:** update dependency arrify to v2 ([de0f687](https://www.github.com/googleapis/nodejs-bigquery/commit/de0f687))
* **table:** allow for TableSchema to be used ([#438](https://www.github.com/googleapis/nodejs-bigquery/issues/438)) ([7995be0](https://www.github.com/googleapis/nodejs-bigquery/commit/7995be0))
* **types:** correct  interface ([#407](https://www.github.com/googleapis/nodejs-bigquery/issues/407)) ([da5ed01](https://www.github.com/googleapis/nodejs-bigquery/commit/da5ed01))
* correctly encode nested struct/array params ([#439](https://www.github.com/googleapis/nodejs-bigquery/issues/439)) ([d7006bd](https://www.github.com/googleapis/nodejs-bigquery/commit/d7006bd))
* remove teeny-request as a direct dependency ([#412](https://www.github.com/googleapis/nodejs-bigquery/issues/412)) ([c6de54a](https://www.github.com/googleapis/nodejs-bigquery/commit/c6de54a))


### Build System

* upgrade engines field to >=8.10.0 ([#424](https://www.github.com/googleapis/nodejs-bigquery/issues/424)) ([cea017e](https://www.github.com/googleapis/nodejs-bigquery/commit/cea017e))


### Code Refactoring

* drop autoCreate in table.insert in favor of schema ([#421](https://www.github.com/googleapis/nodejs-bigquery/issues/421)) ([b59cd7f](https://www.github.com/googleapis/nodejs-bigquery/commit/b59cd7f))


### Miscellaneous Chores

* **deps:** update dependency gts to v1 ([#419](https://www.github.com/googleapis/nodejs-bigquery/issues/419)) ([7b0e76a](https://www.github.com/googleapis/nodejs-bigquery/commit/7b0e76a))

## v3.0.0

04-02-2019 10:02 PDT


### Implementation Changes

- fix(job): check for `errorResult` when polling jobs ([#387](https://github.com/googleapis/nodejs-bigquery/pull/387))


**BREAKING CHANGE** Previously when polling a BigQuery Job the Node.js client would check for the presence of the `errors` field when trying to determine if the job suceeded. We have since changed this logic to instead check for the `errorResult` field. This is significant because the `errors` array may now be present for passing jobs, however these errors should serve more as warnings. If your application logic depended on this functionality you'll need to manually check for `errors` now.

```js
await job.promise();

if (job.metadata.status.errors) {
  // optionally handle warnings
}
```

- fix(ts): provide complete and correct types ([#385](https://github.com/googleapis/nodejs-bigquery/pull/385))

**BREAKING CHANGE** A number of the BigQuery TypeScript types were incomplete, this change provides more complete types for the entire client.

### New Features
- feat(geo): add support for geography ([#397](https://github.com/googleapis/nodejs-bigquery/pull/397))

### Bug Fixes
- fix: correctly encode nested custom date/time parameters ([#393](https://github.com/googleapis/nodejs-bigquery/pull/393))

### Dependencies
- chore(deps): update dependency tmp to v0.1.0 ([#398](https://github.com/googleapis/nodejs-bigquery/pull/398))
- chore(deps): update dependency @types/tmp to v0.1.0
- chore(deps): update dependency typescript to ~3.4.0

### Documentation
- docs(samples): adds queryParamsNamed and queryParamsPositional ([#381](https://github.com/googleapis/nodejs-bigquery/pull/381))
- refactor(samples): split query and table samples into separate files ([#384](https://github.com/googleapis/nodejs-bigquery/pull/384))
- refactor(samples): fix loadJSONFromGCSTruncate wrong function ([#386](https://github.com/googleapis/nodejs-bigquery/pull/386))
- refactor(samples): add main() function wrappers to samples

### Internal / Testing Changes
- build: use per-repo npm publish token ([#382](https://github.com/googleapis/nodejs-bigquery/pull/382))
- chore: publish to npm using wombat ([#390](https://github.com/googleapis/nodejs-bigquery/pull/390))
- fix(tests): update TIMESTAMP param tests ([#394](https://github.com/googleapis/nodejs-bigquery/pull/394))

## v2.1.0

03-12-2019 15:30 PDT

### New Features
- feat: throw errors for missing resource ids ([#342](https://github.com/googleapis/nodejs-bigquery/pull/342))

### Bug Fixes
- fix(types): move JobLoadMetadata writeDisposition ([#365](https://github.com/googleapis/nodejs-bigquery/pull/365))
- fix(types): Allow views to be configured using an object or a string ([#333](https://github.com/googleapis/nodejs-bigquery/pull/333))
- fix(types): add missing parameters (selectedFields, startIndex) in table.getRows() options ([#331](https://github.com/googleapis/nodejs-bigquery/pull/331))

### Dependencies
- fix(deps): update dependency @google-cloud/paginator to ^0.2.0 ([#373](https://github.com/googleapis/nodejs-bigquery/pull/373))
- fix(deps): update dependency @google-cloud/common to ^0.31.0 ([#371](https://github.com/googleapis/nodejs-bigquery/pull/371))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#356](https://github.com/googleapis/nodejs-bigquery/pull/356))
- fix(deps): update dependency duplexify to v4 ([#343](https://github.com/googleapis/nodejs-bigquery/pull/343))

### Documentation
- docs(table): link to upstream limit docs ([#376](https://github.com/googleapis/nodejs-bigquery/pull/376))
- docs: update samples and docs to match rubric ([#374](https://github.com/googleapis/nodejs-bigquery/pull/374))
- docs: update links in contrib guide ([#358](https://github.com/googleapis/nodejs-bigquery/pull/358))
- docs: update contributing path in README ([#350](https://github.com/googleapis/nodejs-bigquery/pull/350))
- docs: move CONTRIBUTING.md to root ([#349](https://github.com/googleapis/nodejs-bigquery/pull/349))
- docs: add lint/fix example to contributing guide ([#344](https://github.com/googleapis/nodejs-bigquery/pull/344))

### Internal / Testing Changes
- testing: remove nextQuery assertion ([#377](https://github.com/googleapis/nodejs-bigquery/pull/377))
- refactor(samples): split samples into their own files ([#368](https://github.com/googleapis/nodejs-bigquery/pull/368))
- build: Add docuploader credentials to node publish jobs ([#370](https://github.com/googleapis/nodejs-bigquery/pull/370))
- build: use node10 to run samples-test, system-test etc ([#369](https://github.com/googleapis/nodejs-bigquery/pull/369))
- build: system-tests only delete stale resources
- chore: make test prefix unique per run ([#363](https://github.com/googleapis/nodejs-bigquery/pull/363))
- chore(deps): update dependency mocha to v6 ([#360](https://github.com/googleapis/nodejs-bigquery/pull/360))
- test: skip installation test if GOOGLE_CLOUD_TESTS_IN_VPCSC is passed ([#345](https://github.com/googleapis/nodejs-bigquery/pull/345))
- build: use linkinator for docs test ([#354](https://github.com/googleapis/nodejs-bigquery/pull/354))
- fix(deps): update dependency yargs to v13 ([#353](https://github.com/googleapis/nodejs-bigquery/pull/353))
- chore(deps): update dependency @types/tmp to v0.0.34 ([#355](https://github.com/googleapis/nodejs-bigquery/pull/355))
- build: create docs test npm scripts ([#352](https://github.com/googleapis/nodejs-bigquery/pull/352))
- build: test using @grpc/grpc-js in CI ([#351](https://github.com/googleapis/nodejs-bigquery/pull/351))
- build: check for 404s in the docs ([#337](https://github.com/googleapis/nodejs-bigquery/pull/337))
- build: output benchmark data in csv format ([#339](https://github.com/googleapis/nodejs-bigquery/pull/339))
- chore(deps): update dependency eslint-config-prettier to v4 ([#338](https://github.com/googleapis/nodejs-bigquery/pull/338))

## v2.0.6

01-08-2019 13:52 PST

### Fixes
- fix: correctly iterate query results within stream ([#323](https://github.com/googleapis/nodejs-bigquery/pull/323))
- fix: remove Job.setMetadata method ([#319](https://github.com/googleapis/nodejs-bigquery/pull/319))
- fix(deps): update dependency @google-cloud/common to ^0.29.0 ([#314](https://github.com/googleapis/nodejs-bigquery/pull/314))

### Documentation
- fix(docs): package exports an object, not the BigQuery ctor ([#322](https://github.com/googleapis/nodejs-bigquery/pull/322))
- docs: regenerate README.md ([#321](https://github.com/googleapis/nodejs-bigquery/pull/321))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#318](https://github.com/googleapis/nodejs-bigquery/pull/318))

## v2.0.5

12-21-2018 13:19 PST

### Bug fixes
- fix: createQueryJob should accept pageToken ([#313](https://github.com/googleapis/nodejs-bigquery/pull/313))

### Internal / Testing Changes
- fix(test): skip flaky invalid etag test ([#317](https://github.com/googleapis/nodejs-bigquery/pull/317))
- fix(test): labels: should be an object, not arry ([#315](https://github.com/googleapis/nodejs-bigquery/pull/315))

## v2.0.4

12-19-2018 14:35 PST

### Implementation Changes
- fix(ts): explicit usage of Duplex ([#300](https://github.com/googleapis/nodejs-bigquery/pull/300))
- fix: fix typescript compilation ([#295](https://github.com/googleapis/nodejs-bigquery/pull/295))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.28.0 ([#308](https://github.com/googleapis/nodejs-bigquery/pull/308))
- chore(deps): update dependency @types/sinon to v7 ([#307](https://github.com/googleapis/nodejs-bigquery/pull/307))
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#274](https://github.com/googleapis/nodejs-bigquery/pull/274))

### Documentation
- fix(docs): move doc comments so stream methods show up in docs correctly ([#309](https://github.com/googleapis/nodejs-bigquery/pull/309))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#306](https://github.com/googleapis/nodejs-bigquery/pull/306))
- chore: update nyc and eslint configs ([#305](https://github.com/googleapis/nodejs-bigquery/pull/305))
- chore: fix publish.sh permission +x ([#302](https://github.com/googleapis/nodejs-bigquery/pull/302))
- fix(build): fix Kokoro release script ([#301](https://github.com/googleapis/nodejs-bigquery/pull/301))
- build: add Kokoro configs for autorelease ([#298](https://github.com/googleapis/nodejs-bigquery/pull/298))

## v2.0.3

12-06-2018 17:10 PST

### Documentation
- fix(docs): move comments above last overload ([#292](https://github.com/googleapis/nodejs-bigquery/pull/292))
- fix(docs): internal links ([#293](https://github.com/googleapis/nodejs-bigquery/pull/293))
- fix(docs): change source location to ./build for ts project ([#291](https://github.com/googleapis/nodejs-bigquery/pull/291))
- docs: fix region tag placement typo ([#286](https://github.com/googleapis/nodejs-bigquery/pull/286))

### Internal / Testing Changes
- chore: always nyc report before calling codecov ([#290](https://github.com/googleapis/nodejs-bigquery/pull/290))
- chore: nyc ignore build/test by default ([#289](https://github.com/googleapis/nodejs-bigquery/pull/289))

## v2.0.2

12-04-2018 14:04 PST

### Implementation Changes

*TypeScript related changes:*
- fix: Changing import of Big from big.js so it doesn't use default ([#270](https://github.com/googleapis/nodejs-bigquery/pull/270))
- refactor(ts): enable noImplicitAny ([#259](https://github.com/googleapis/nodejs-bigquery/pull/259))
- refactor(ts): add @types/proxyquire ([#256](https://github.com/googleapis/nodejs-bigquery/pull/256))
- refactor(ts): refactor system tests to drop unused deps ([#254](https://github.com/googleapis/nodejs-bigquery/pull/254))
- fix(ts): CopyTableMetadata type can’t receive optional values
- refactor(ts): complete type annotations for src ([#250](https://github.com/googleapis/nodejs-bigquery/pull/250))
- refactor(ts): add more types ([#246](https://github.com/googleapis/nodejs-bigquery/pull/246))

### Dependencies
- fix: Pin @types/sinon to last compatible version ([#267](https://github.com/googleapis/nodejs-bigquery/pull/267))
- chore(deps): update dependency typescript to ~3.2.0 ([#276](https://github.com/googleapis/nodejs-bigquery/pull/276))
- chore(deps): update dependency gts to ^0.9.0 ([#263](https://github.com/googleapis/nodejs-bigquery/pull/263))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#261](https://github.com/googleapis/nodejs-bigquery/pull/261))
- chore(deps): update dependency @types/is to v0.0.21 ([#258](https://github.com/googleapis/nodejs-bigquery/pull/258))

### Documentation
- chore: update license file ([#283](https://github.com/googleapis/nodejs-bigquery/pull/283))
- docs: Improve timestamp documentation. ([#280](https://github.com/googleapis/nodejs-bigquery/pull/280))
- docs: Improve documentationfor load method ([#281](https://github.com/googleapis/nodejs-bigquery/pull/281))
- docs: update readme badges ([#279](https://github.com/googleapis/nodejs-bigquery/pull/279))
- refactor(samples): replace promise with async await ([#268](https://github.com/googleapis/nodejs-bigquery/pull/268))

### Internal / Testing Changes
- fix(build): fix system key decryption ([#277](https://github.com/googleapis/nodejs-bigquery/pull/277))
- refactor(tests): convert samples tests from ava to mocha ([#248](https://github.com/googleapis/nodejs-bigquery/pull/248))
- chore: add synth.metadata
- chore: update eslintignore config ([#262](https://github.com/googleapis/nodejs-bigquery/pull/262))
- chore: drop contributors from multiple places ([#260](https://github.com/googleapis/nodejs-bigquery/pull/260))
- chore: use latest npm on Windows ([#257](https://github.com/googleapis/nodejs-bigquery/pull/257))
- chore: update CircleCI config ([#249](https://github.com/googleapis/nodejs-bigquery/pull/249))

## v2.0.1

### Bug fixes
- fix: use teeny-request for HTTP requests ([#244](https://github.com/googleapis/nodejs-bigquery/pull/244))

### Internal / Testing Changes
- chore: include build in eslintignore ([#240](https://github.com/googleapis/nodejs-bigquery/pull/240))
- refactor(ts): enable noImplicitThis in the tsconfig ([#237](https://github.com/googleapis/nodejs-bigquery/pull/237))
- refactor(ts): improve typing ([#241](https://github.com/googleapis/nodejs-bigquery/pull/241))

## v2.0.0

### Implementation Changes
*This release drops support for Node.js 4.x and 9.x. Future releases might not be compatible with your application if they are still on these non-LTS version.*
*BREAKING CHANGE* This library is now compatible with es module import syntax


#### Old Code
```js
const BigQuery = require('@google-cloud/bigquery')();
// or...
const BigQuery = require('@google-cloud/bigquery');
const bq = new BigQuery();
```

#### New Code
```js
const {BigQuery} = require('@google-cloud/bigquery');
const bq = new BigQuery();
```

- refactor(typescript): convert index to es module ([#227](https://github.com/googleapis/nodejs-bigquery/pull/227)
- fix: drop support for node.js 4.x and 9.x ([#142](https://github.com/googleapis/nodejs-bigquery/pull/142))
- wait for job result before emitting complete. ([#85](https://github.com/googleapis/nodejs-bigquery/pull/85))
- fix: Update table.js ([#78](https://github.com/googleapis/nodejs-bigquery/pull/78))
- feat: convert to TypeScript ([#157](https://github.com/googleapis/nodejs-bigquery/pull/157))
- Correctly pass `autoPaginate: false` to query methods. ([#121](https://github.com/googleapis/nodejs-bigquery/pull/121))
- chore: use more arrow functions ([#172](https://github.com/googleapis/nodejs-bigquery/pull/172))
- chore: convert a few files to es classes ([#170](https://github.com/googleapis/nodejs-bigquery/pull/170))

### New Features
BigQuery ORC:
- BigQuery Orc & Parquet Samples ([#195](https://github.com/googleapis/nodejs-bigquery/pull/195))
- Support ORC files. ([#190](https://github.com/googleapis/nodejs-bigquery/pull/190))

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v8 ([#234](https://github.com/googleapis/nodejs-bigquery/pull/234))
- chore(deps): lock file maintenance ([#143](https://github.com/googleapis/nodejs-bigquery/pull/143))
- chore(deps): update dependency sinon to v7 ([#212](https://github.com/googleapis/nodejs-bigquery/pull/212))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#207](https://github.com/googleapis/nodejs-bigquery/pull/207))
- chore(deps): update dependency typescript to ~3.1.0 ([#205](https://github.com/googleapis/nodejs-bigquery/pull/205))
- chore: upgrade to the latest common ([#159](https://github.com/googleapis/nodejs-bigquery/pull/159))
- chore(package): update to the latest @google-cloud/common ([#146](https://github.com/googleapis/nodejs-bigquery/pull/146))
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#197](https://github.com/googleapis/nodejs-bigquery/pull/197))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#187](https://github.com/googleapis/nodejs-bigquery/pull/187))
- fix(deps): update dependency @google-cloud/storage to v2: edited ([#181](https://github.com/googleapis/nodejs-bigquery/pull/181))
- chore(deps): update dependency nyc to v13 ([#178](https://github.com/googleapis/nodejs-bigquery/pull/178))
- chore(deps): update dependency eslint-config-prettier to v3 ([#169](https://github.com/googleapis/nodejs-bigquery/pull/169))
- chore(deps): lock file maintenance ([#160](https://github.com/googleapis/nodejs-bigquery/pull/160))
- chore(deps): lock file maintenance ([#153](https://github.com/googleapis/nodejs-bigquery/pull/153))
- chore(deps): lock file maintenance ([#150](https://github.com/googleapis/nodejs-bigquery/pull/150))
- chore(deps): update dependency eslint-plugin-node to v7 ([#148](https://github.com/googleapis/nodejs-bigquery/pull/148))
- chore(deps): lock file maintenance ([#147](https://github.com/googleapis/nodejs-bigquery/pull/147))
- chore(deps): lock file maintenance ([#145](https://github.com/googleapis/nodejs-bigquery/pull/145))
- chore(deps): lock file maintenance ([#144](https://github.com/googleapis/nodejs-bigquery/pull/144))
- chore(deps): lock file maintenance ([#141](https://github.com/googleapis/nodejs-bigquery/pull/141))
- chore(deps): lock file maintenance ([#140](https://github.com/googleapis/nodejs-bigquery/pull/140))
- chore(deps): lock file maintenance ([#139](https://github.com/googleapis/nodejs-bigquery/pull/139))
- chore(deps): update dependency proxyquire to v2 ([#135](https://github.com/googleapis/nodejs-bigquery/pull/135))
- fix(deps): update dependency yargs to v12 ([#138](https://github.com/googleapis/nodejs-bigquery/pull/138))
- fix(deps): update dependency yargs to v11 ([#137](https://github.com/googleapis/nodejs-bigquery/pull/137))
- chore(deps): update dependency sinon to v6 ([#136](https://github.com/googleapis/nodejs-bigquery/pull/136))
- chore(deps): update dependency nyc to v12 ([#134](https://github.com/googleapis/nodejs-bigquery/pull/134))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#128](https://github.com/googleapis/nodejs-bigquery/pull/128))
- chore(deps): update dependency uuid to v3.3.0 ([#132](https://github.com/googleapis/nodejs-bigquery/pull/132))
- chore(deps): update dependency ava to v0.25.0 ([#129](https://github.com/googleapis/nodejs-bigquery/pull/129))
- chore(deps): update dependency sinon to v4.5.0 ([#131](https://github.com/googleapis/nodejs-bigquery/pull/131))

### Documentation
- docs: Correct table.load().format options. ([#206](https://github.com/googleapis/nodejs-bigquery/pull/206))
- fix: (docs): Correct query syntax. ([#180](https://github.com/googleapis/nodejs-bigquery/pull/180))
- docs: Fix create job links ([#164](https://github.com/googleapis/nodejs-bigquery/pull/164))
- fix(samples): Refactor query samples to follow python canonical and add disable cache sample ([#215](https://github.com/googleapis/nodejs-bigquery/pull/215))
- chore(samples): Remove unused BigQuery samples and fix comment typos ([#201](https://github.com/googleapis/nodejs-bigquery/pull/201))
- Use async/await in samples ([#193](https://github.com/googleapis/nodejs-bigquery/pull/193))
- remove asserts in samples ([#182](https://github.com/googleapis/nodejs-bigquery/pull/182))
- fix: fix the samples tests ([#167](https://github.com/googleapis/nodejs-bigquery/pull/167))
- fix: update linking for samples ([#125](https://github.com/googleapis/nodejs-bigquery/pull/125))
- chore: make samples test work ([#113](https://github.com/googleapis/nodejs-bigquery/pull/113))

### Internal / Testing Changes
- refactor(ts): re-enable fix and lint ([#232](https://github.com/googleapis/nodejs-bigquery/pull/232))
- fix(tests): fix system-test ([#231](https://github.com/googleapis/nodejs-bigquery/pull/231))
- Pass an empty object. ([#191](https://github.com/googleapis/nodejs-bigquery/pull/191))
- fix: (tests) Use a filter to locate datasets used in tests. ([#177](https://github.com/googleapis/nodejs-bigquery/pull/177))
- chore: update issue templates ([#229](https://github.com/googleapis/nodejs-bigquery/pull/229))
- chore: remove old issue template ([#224](https://github.com/googleapis/nodejs-bigquery/pull/224))
- build: run tests on node11 ([#223](https://github.com/googleapis/nodejs-bigquery/pull/223))
- chores(build): do not collect sponge.xml from windows builds ([#221](https://github.com/googleapis/nodejs-bigquery/pull/221))
- chores(build): run codecov on continuous builds ([#220](https://github.com/googleapis/nodejs-bigquery/pull/220))
- chore: update new issue template ([#219](https://github.com/googleapis/nodejs-bigquery/pull/219))
- build: fix codecov uploading on Kokoro ([#213](https://github.com/googleapis/nodejs-bigquery/pull/213))
- Update kokoro config ([#208](https://github.com/googleapis/nodejs-bigquery/pull/208))
- Don't publish sourcemaps ([#202](https://github.com/googleapis/nodejs-bigquery/pull/202))
- test: remove appveyor config ([#200](https://github.com/googleapis/nodejs-bigquery/pull/200))
- Enable prefer-const in the eslint config ([#198](https://github.com/googleapis/nodejs-bigquery/pull/198))
- Enable no-var in eslint ([#196](https://github.com/googleapis/nodejs-bigquery/pull/196))
- Retry npm install in CI ([#184](https://github.com/googleapis/nodejs-bigquery/pull/184))
- chore: make ci happy ([#175](https://github.com/googleapis/nodejs-bigquery/pull/175))
- chore: use let and const ([#161](https://github.com/googleapis/nodejs-bigquery/pull/161))
- chore: ignore package-lock.json ([#162](https://github.com/googleapis/nodejs-bigquery/pull/162))
- chore: update renovate config ([#156](https://github.com/googleapis/nodejs-bigquery/pull/156))
- remove that whitespace ([#155](https://github.com/googleapis/nodejs-bigquery/pull/155))
- chore: move mocha options to mocha.opts ([#152](https://github.com/googleapis/nodejs-bigquery/pull/152))
- refactor: use @google-cloud/promisify ([#151](https://github.com/googleapis/nodejs-bigquery/pull/151))
- fix: get eslint passing ([#149](https://github.com/googleapis/nodejs-bigquery/pull/149))
- Configure Renovate ([#123](https://github.com/googleapis/nodejs-bigquery/pull/123))
- chore(package): update eslint to version 5.0.0 ([#124](https://github.com/googleapis/nodejs-bigquery/pull/124))
- refactor: drop repo-tool as an exec wrapper ([#127](https://github.com/googleapis/nodejs-bigquery/pull/127))
- chore: update sample lockfiles ([#126](https://github.com/googleapis/nodejs-bigquery/pull/126))
- fix: drop support for node 4.x and 9.x ([#122](https://github.com/googleapis/nodejs-bigquery/pull/122))
- Added support for the NUMERIC values. ([#119](https://github.com/googleapis/nodejs-bigquery/pull/119))
- chore(package): update nyc to version 12.0.2 ([#116](https://github.com/googleapis/nodejs-bigquery/pull/116))
- chore: the ultimate fix for repo-tools EPERM ([#108](https://github.com/googleapis/nodejs-bigquery/pull/108))
- chore: fix prettier incompatibility ([#112](https://github.com/googleapis/nodejs-bigquery/pull/112))
- chore: lock files maintenance ([#111](https://github.com/googleapis/nodejs-bigquery/pull/111))
- chore: lock files ([#109](https://github.com/googleapis/nodejs-bigquery/pull/109))
- chore: timeout for system test ([#107](https://github.com/googleapis/nodejs-bigquery/pull/107))
- chore: lock files maintenance ([#106](https://github.com/googleapis/nodejs-bigquery/pull/106))
