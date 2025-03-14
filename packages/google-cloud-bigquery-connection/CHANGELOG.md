# Changelog

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v3.2.0...bigquery-connection-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v3.1.0...bigquery-connection-v3.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v3.0.1...bigquery-connection-v3.1.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v3.0.0...bigquery-connection-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.3.0...bigquery-connection-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.2.1...bigquery-connection-v2.3.0) (2023-07-11)


### Features

* [bigquery-connection] add support for Salesforce connections, which are usable only by allowlisted partners ([#4403](https://github.com/googleapis/google-cloud-node/issues/4403)) ([fd7489a](https://github.com/googleapis/google-cloud-node/commit/fd7489a04a291555c8c31ad615236486709b645e))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.2.0...bigquery-connection-v2.2.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.1.1...bigquery-connection-v2.2.0) (2023-03-28)


### Features

* [bigquery-connection] add spark connection properties type ([#4096](https://github.com/googleapis/google-cloud-node/issues/4096)) ([b7e6cad](https://github.com/googleapis/google-cloud-node/commit/b7e6cad1cb83d9b35063e12ffd81316f06537428))

## [2.1.1](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.1.0...bigquery-connection-v2.1.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-connection-v2.0.2...bigquery-connection-v2.1.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [2.0.2](https://github.com/googleapis/nodejs-bigquery-connection/compare/v2.0.1...v2.0.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#192](https://github.com/googleapis/nodejs-bigquery-connection/issues/192)) ([8c0ff4f](https://github.com/googleapis/nodejs-bigquery-connection/commit/8c0ff4ff10e8f8f2d680de15f703981a769d8e38))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bigquery-connection/issues/1553)) ([#191](https://github.com/googleapis/nodejs-bigquery-connection/issues/191)) ([4442884](https://github.com/googleapis/nodejs-bigquery-connection/commit/4442884234d2e6e28659379534288839225c7091))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigquery-connection/issues/1546)) ([#189](https://github.com/googleapis/nodejs-bigquery-connection/issues/189)) ([f93111c](https://github.com/googleapis/nodejs-bigquery-connection/commit/f93111c57ebfb6527a14e7af017e2c7ce379dcb8))

## [2.0.1](https://github.com/googleapis/nodejs-bigquery-connection/compare/v2.0.0...v2.0.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#187](https://github.com/googleapis/nodejs-bigquery-connection/issues/187)) ([e4dec92](https://github.com/googleapis/nodejs-bigquery-connection/commit/e4dec92bf2dacdedca084095283bab2393f295ed))
* **docs:** document fallback rest option ([#183](https://github.com/googleapis/nodejs-bigquery-connection/issues/183)) ([777accf](https://github.com/googleapis/nodejs-bigquery-connection/commit/777accfa5875cbe8e6e20ec33f96140cf179532a))
* update google-gax and remove obsolete deps ([#1545](https://github.com/googleapis/nodejs-bigquery-connection/issues/1545)) ([#188](https://github.com/googleapis/nodejs-bigquery-connection/issues/188)) ([e829fc6](https://github.com/googleapis/nodejs-bigquery-connection/commit/e829fc63f6c492ae78b35cc16c3a224021cf2bb2))

## [2.0.0](https://github.com/googleapis/nodejs-bigquery-connection/compare/v1.5.1...v2.0.0) (2022-06-09)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#177)

### Features

* Add Cloud_Resource Connection Support ([#162](https://github.com/googleapis/nodejs-bigquery-connection/issues/162)) ([afc2727](https://github.com/googleapis/nodejs-bigquery-connection/commit/afc272726d3600f425faca2a8b5bf22a6a24314c))
* AuditConfig for IAM v1 ([#166](https://github.com/googleapis/nodejs-bigquery-connection/issues/166)) ([53bec44](https://github.com/googleapis/nodejs-bigquery-connection/commit/53bec4434eaec4ffba927554f8cee14b45a3c646))


### Build System

* update library to use Node 12 ([#177](https://github.com/googleapis/nodejs-bigquery-connection/issues/177)) ([b034adf](https://github.com/googleapis/nodejs-bigquery-connection/commit/b034adfbd415d1138d5921b51434d28819990cee))

### [1.5.1](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.5.0...v1.5.1) (2021-09-27)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#123](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/123)) ([2112f0a](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/2112f0a9fe594c5cac19f79dd554ea3b232aae45))

## [1.5.0](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.4.2...v1.5.0) (2021-09-13)


### Features

* turns on self-signed JWT feature flag ([#124](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/124)) ([fd91176](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/fd91176a1b7a2c93b68137e66198f93fea8fe939))

### [1.4.2](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.4.1...v1.4.2) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#121](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/121)) ([b01f5d9](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/b01f5d9be2bb8574218c25efe4afc4bea8535cf4))

### [1.4.1](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.4.0...v1.4.1) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#112](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/112)) ([9a2b5bb](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/9a2b5bb9796be07bd13ca886061f30151c5ba235))

## [1.4.0](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.5...v1.4.0) (2021-07-14)


### Features

* add cloud spanner connection support ([#110](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/110)) ([18924ba](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/18924bade9c347ca3775ace87dc140743aea4a86))

### [1.3.5](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.4...v1.3.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#108](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/108)) ([b94f6e6](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/b94f6e69c6984ef5180f64e25eb5576d35471573))

### [1.3.4](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.3...v1.3.4) (2021-07-01)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#104](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/104)) ([a03eb4b](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/a03eb4b9be4dac6e3cfc7d2ceb169dcff80617ef))

### [1.3.3](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.2...v1.3.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#98](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/98)) ([779e30b](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/779e30b0fbd9b2c1ed7b826c41d17e679d3d60db))

### [1.3.2](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.1...v1.3.2) (2021-06-10)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#89](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/89)) ([dca26bf](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/dca26bfe396c852e9c7e7481105b8d7387ed1977))

### [1.3.1](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.3.0...v1.3.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#81](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/81)) ([4613348](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/46133486a55dc2a4d8f75bae748898397df31714))
* use require() to load JSON protos ([#84](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/84)) ([00b0814](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/00b0814beadc47856a58c2fea3d9f651f343245b))

## [1.3.0](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.2.2...v1.3.0) (2021-01-09)


### Features

* introduce style enumeration ([#60](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/60)) ([44b7182](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/44b7182422254a6267eef8b59271a09796503720))

### [1.2.2](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.2.1...v1.2.2) (2020-12-04)


### Bug Fixes

* **deps:** roll back dependency @google-cloud/bigquery-connection to ^1.2.0 ([#52](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/52)) ([14f9872](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/14f9872f2175791f663ccfb6511d2d3e408f4151))

### [1.2.1](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.2.0...v1.2.1) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([5413d69](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/5413d694d4b70eb338a17a5eb4a682f1673abfee))
* do not modify options object, use defaultScopes ([#46](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/46)) ([07244e4](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/07244e4c6375bdbee47db6c7a2b018594c9b34e5))

## [1.2.0](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.1.0...v1.2.0) (2020-10-17)


### Features

* add aws connection support ([#33](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/33)) ([13fecb8](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/13fecb87d0191a4654f14604164072570f640dc6))

## [1.1.0](https://www.github.com/googleapis/nodejs-bigquery-connection/compare/v1.0.0...v1.1.0) (2020-08-10)


### Features

* add/correct PHP namespace for BigQuery connection/reservation ([#26](https://www.github.com/googleapis/nodejs-bigquery-connection/issues/26)) ([39313b9](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/39313b930e12a20203d137058899479ca83d51d5))

## 1.0.0 (2020-07-09)


### Features

* generate v1 ([6ef8fcb](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/6ef8fcbc9b50f7ccef429347841968fe41ad60cf))
* generate v1 ([9125a52](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/9125a52480f9259e959a6a4ce706fb574b74ae0a))
* generate v1 ([f054c74](https://www.github.com/googleapis/nodejs-bigquery-connection/commit/f054c743a5529831a5993fc0e9eb9efbeccae0cb))
