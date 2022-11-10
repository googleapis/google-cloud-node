# Changelog

## [2.0.4](https://github.com/googleapis/google-cloud-node/compare/bigquery-reservation-v2.0.3...bigquery-reservation-v2.0.4) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.0.3](https://github.com/googleapis/google-cloud-node/compare/bigquery-reservation-v2.0.2...bigquery-reservation-v2.0.3) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.0.2](https://github.com/googleapis/nodejs-bigquery-reservation/compare/v2.0.1...v2.0.2) (2022-09-22)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#170](https://github.com/googleapis/nodejs-bigquery-reservation/issues/170)) ([a2bdb93](https://github.com/googleapis/nodejs-bigquery-reservation/commit/a2bdb9342de046fec22897343b3a1c1e696928fc))

## [2.0.1](https://github.com/googleapis/nodejs-bigquery-reservation/compare/v2.0.0...v2.0.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#169](https://github.com/googleapis/nodejs-bigquery-reservation/issues/169)) ([3532064](https://github.com/googleapis/nodejs-bigquery-reservation/commit/3532064ee2c7d07efe437875aaf18065ca7c036e))
* Better support for fallback mode ([#165](https://github.com/googleapis/nodejs-bigquery-reservation/issues/165)) ([90fbf83](https://github.com/googleapis/nodejs-bigquery-reservation/commit/90fbf831bb4dbb4b5b03d782deeb5c8dc854e8dc))
* Change import long to require ([#166](https://github.com/googleapis/nodejs-bigquery-reservation/issues/166)) ([c41ce5a](https://github.com/googleapis/nodejs-bigquery-reservation/commit/c41ce5a29572372d8e6ec8b0d2ca2901e10dfb71))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bigquery-reservation/issues/1553)) ([#168](https://github.com/googleapis/nodejs-bigquery-reservation/issues/168)) ([56f9393](https://github.com/googleapis/nodejs-bigquery-reservation/commit/56f939367a5e3e8367c3d907638acefbcb945e8d))
* **docs:** Document fallback rest option ([#161](https://github.com/googleapis/nodejs-bigquery-reservation/issues/161)) ([9db1472](https://github.com/googleapis/nodejs-bigquery-reservation/commit/9db14722d4bd6c74e47a4145691b3920bb82ebe0))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigquery-reservation/issues/1546)) ([#167](https://github.com/googleapis/nodejs-bigquery-reservation/issues/167)) ([fd418d7](https://github.com/googleapis/nodejs-bigquery-reservation/commit/fd418d758721e21e86ecfab0f5e4c82fc8f40726))

## [2.0.0](https://github.com/googleapis/nodejs-bigquery-reservation/compare/v1.4.0...v2.0.0) (2022-06-07)


### ⚠ BREAKING CHANGES

* Update library to use Node 12
* update library to use Node 12 (#155)

### Build System

* update library to use Node 12 ([#155](https://github.com/googleapis/nodejs-bigquery-reservation/issues/155)) ([408fedd](https://github.com/googleapis/nodejs-bigquery-reservation/commit/408feddc7218687fcb8c4f0ee332b5231fb705eb))


### *build

* Update library to use Node 12 ([408fedd](https://github.com/googleapis/nodejs-bigquery-reservation/commit/408feddc7218687fcb8c4f0ee332b5231fb705eb))

## [1.4.0](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.3.0...v1.4.0) (2021-12-30)


### Features

* increase the logical timeout (retry deadline) to 5 minutes ([#120](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/120)) ([5510500](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/5510500551df96a89c9481d7fe30b0cc95de5918))

## [1.3.0](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.2.0...v1.3.0) (2021-09-01)


### Features

* Added commitment_start_time to capacity commitments ([be13d46](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/be13d466f443af4ab88aff045eca2965eb11a968))
* Deprecated SearchAssignments in favor of SearchAllAssignments ([be13d46](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/be13d466f443af4ab88aff045eca2965eb11a968))
* Deprecated SearchAssignments in favor of SearchAllAssignments ([be13d46](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/be13d466f443af4ab88aff045eca2965eb11a968))
* Force deleting capacity commitments is allowed ... ([#103](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/103)) ([be13d46](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/be13d466f443af4ab88aff045eca2965eb11a968))
* Reservation objects now contain a creation time and an update time ([be13d46](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/be13d466f443af4ab88aff045eca2965eb11a968))

## [1.2.0](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.6...v1.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#100](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/100)) ([0047223](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/004722310ece662732fe60c8941be1b30214ed6d))


### Bug Fixes

* **build:** migrate to using main branch ([#97](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/97)) ([2e5a332](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/2e5a332b21067dd73ec6d2b218b87b61b8ebf59e))
* **deps:** google-gax v2.24.1 ([#99](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/99)) ([3a4cdec](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/3a4cdec8d028f0d6fd6d8ebc3977c00231b290bb))

### [1.1.6](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.5...v1.1.6) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#89](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/89)) ([b7b0b92](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/b7b0b9263f2f8fd0fcb8fd977fc7f24727138b29))

### [1.1.5](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.4...v1.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#87](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/87)) ([9081a32](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/9081a3237099c98bb5d3694785afbe9ff4dcaaea))

### [1.1.4](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.3...v1.1.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#84](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/84)) ([42c4bcb](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/42c4bcb09e5f1c7b604e923a89b05fa895f663c8))

### [1.1.3](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.2...v1.1.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#80](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/80)) ([5cf25a7](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/5cf25a7b312ce3a009635a18125ab8f10a096089))

### [1.1.2](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.1...v1.1.2) (2021-06-07)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#72](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/72)) ([17a06f7](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/17a06f7921e7c0200f1ff73ed29cd03c4c85b560))

### [1.1.1](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#64](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/64)) ([57b7f5b](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/57b7f5b3356bf9f00d28d3a0d8b4c329ae8d61b9))
* use require() to load JSON protos ([#67](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/67)) ([ea052ed](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/ea052ed26f0474c849def47d73d41c0ebdc9f432))

## [1.1.0](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.0.2...v1.1.0) (2021-01-09)


### Features

* introduce style enumeration ([#43](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/43)) ([06bfdc6](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/06bfdc6a0c6c3b0416bbb34ff5b46e96256215ef))


### Bug Fixes

* **deps:** roll back dependency @google-cloud/bigquery-reservation to ^1.0.1 ([#38](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/38)) ([b4ee172](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/b4ee172520adbbdff077d2a1db7d72c88401f98a))

### [1.0.2](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.0.1...v1.0.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([5a32067](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/5a32067bdc000025c3166c72069db861800be5d8))

### [1.0.1](https://www.github.com/googleapis/nodejs-bigquery-reservation/compare/v1.0.0...v1.0.1) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#28](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/28)) ([fa58436](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/fa584362f0c9ef485bbb8e76db143565cb144317))

## 1.0.0 (2020-07-14)


### Features

* generate v1 of the API ([#2](https://www.github.com/googleapis/nodejs-bigquery-reservation/issues/2)) ([e368d52](https://www.github.com/googleapis/nodejs-bigquery-reservation/commit/e368d5289c8c18b974a6e470320e0c23f2772dcd))
