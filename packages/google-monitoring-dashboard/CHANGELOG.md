# Changelog

### [2.3.4](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.3.3...v2.3.4) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#191](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/191)) ([88b6413](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/88b6413a83bb2594f1f7371073940e37118fdcbb))

### [2.3.3](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.3.2...v2.3.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#185](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/185)) ([898bf5c](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/898bf5c5259cab24d64326d7b0ddf37d6a7e7571))

### [2.3.2](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.3.1...v2.3.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#177](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/177)) ([5e89c98](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/5e89c9890ce5f2762398f46105be44301d4d6aa2))

### [2.3.1](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.3.0...v2.3.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#167](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/167)) ([3316b86](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/3316b8619dafe3dde4dbba355907cdf804974ef8))
* use require() to load JSON protos ([#170](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/170)) ([af92ed3](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/af92ed3942a3889a3567514b3614e04a2955dc17))

## [2.3.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.2.0...v2.3.0) (2021-03-19)


### Features

* added mosaic layout docs:clarified alignment_period max value and updated IAM docs link ([#152](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/152)) ([7ccce5a](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/7ccce5a57f0d927fa33a87cad94bf05d6fcb80da))

## [2.2.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.1.3...v2.2.0) (2021-01-09)


### Features

* adds style enumeration ([#143](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/143)) ([4a90ce9](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/4a90ce9fa7722fde537868ae8aa8f47e45c7789c))

### [2.1.3](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.1.2...v2.1.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([23f9595](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/23f9595ba7622f3f6eb4d705506996e1e34fc107))

### [2.1.2](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.1.1...v2.1.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#134](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/134)) ([a95ac89](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/a95ac893c9f5d06205244b6b48e5db39a8c4b1e3))

### [2.1.1](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.1.0...v2.1.1) (2020-07-24)


### Bug Fixes

* move gitattributes files to node templates ([#107](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/107)) ([7e7a729](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/7e7a729686b59354a255ca4da86b34c0e06523df))

## [2.1.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* Add support for secondary_aggregation and Monitoring Query Language ([#92](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/92)) ([af186dc](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/af186dc51be796e8c8ce83cfdc75e8b7f8017694))
* move ts target to es2018 from es2016 ([#87](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/87)) ([846ff12](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/846ff12d5a3858cd4c91cb4fcf835b40d5f9b03e))


### Bug Fixes

* proper fallback option handling ([33c441c](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/33c441c0484cdc0e09203ad033e220ac57324607))
* update node issue template ([#93](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/93)) ([e561059](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/e561059ddba9b46cec6ae14fe3d522a83ef231ca))

## [2.0.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.3.0...v2.0.0) (2020-05-08)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#58](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/58)) ([0891dab](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/0891dab8f977cdb8825e12b3faf8d45caeea4ba4))


### Bug Fixes

* export explicit version from protos.js ([#63](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/63)) ([a1ef68f](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/a1ef68f0f3f6366d41ac4de23e31cca67d232c50))
* regen protos and tests, formatting ([#81](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/81)) ([61314fe](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/61314fe1099dfeab00d1392ffe1757880d398497))
* remove eslint, update gax, fix generated protos, run the generator ([#68](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/68)) ([8c33d58](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/8c33d5811fbf60adc7c9dd15be4e64e59630e058))

## [1.3.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.2.0...v1.3.0) (2020-03-06)


### Features

* deferred client initialization ([#43](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/43)) ([63a9eaa](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/63a9eaa8cc7d3afc9cb203027a4d7076e1c1c970))

## [1.2.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.1.0...v1.2.0) (2020-02-27)


### Features

* export protos in src/index.ts ([7a601bd](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/7a601bd1165e8be3e6f4beaea53c6e285d20942e))

## [1.1.0](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.0.2...v1.1.0) (2020-02-13)


### Features

* bump the release level to ga ([#30](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/30)) ([c4080f7](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/c4080f7e2dbbcb5e42c928c4dfd5174d892975a2))

### [1.0.2](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.0.1...v1.0.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([beecd33](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/beecd3387117e9d52b845f938000a8284ed8212f))

### [1.0.1](https://www.github.com/googleapis/nodejs-monitoring-dashboards/compare/v1.0.0...v1.0.1) (2020-01-09)


### Bug Fixes

* **build:** autorelease should handle tagging ([#7](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/7)) ([000aed2](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/000aed25e186f6e174ca49aa90dd0d4d6f651644))

## 1.0.0 (2020-01-04)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-monitoring-dashboards/issues/1)) ([b513f47](https://www.github.com/googleapis/nodejs-monitoring-dashboards/commit/b513f47f8d6d34380ea8ebedb0e9b41f360630ab))
