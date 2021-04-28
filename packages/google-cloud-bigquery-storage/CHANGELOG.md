# Changelog

## [2.4.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.3.0...v2.4.0) (2021-04-20)


### Features

* add a Arrow compression options (Only LZ4 for now). ([cd23105](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/cd23105fff40a870888ca4a8608d1b85ed6b3639))
* Return schema on first ReadRowsResponse ([cd23105](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/cd23105fff40a870888ca4a8608d1b85ed6b3639))

## [2.3.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.2.3...v2.3.0) (2021-01-09)


### Features

* introduce style enumeration ([#135](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/135)) ([4a8f699](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/4a8f699472d67aae4300c458308c2fa4fa372592))

### [2.2.3](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.2.2...v2.2.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([d837dfc](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/d837dfc841cf3e77fbc2482dbabb149e2fc4f76a))

### [2.2.2](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.2.1...v2.2.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#126](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/126)) ([6f8eb24](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/6f8eb244b1b06a928641550b2390e03964a14981))

### [2.2.1](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.2.0...v2.2.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#84](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/84)) ([ab36886](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/ab36886171cc6d94f66587f715d23e8cd4603f32))

## [2.2.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.1.0...v2.2.0) (2020-06-19)


### Features

* promote library to GA ([#75](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/75)) ([7d7a67e](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/7d7a67e9198e87cdcc4911d9505a121f1a1d9549))

## [2.1.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.0.0...v2.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#70](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/70)) ([6513e8c](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/6513e8cf6195740b570b39fb645d8a1adafc0580))


### Bug Fixes

* handle fallback option properly ([#73](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/73)) ([ec6b88c](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/ec6b88cf87bf45e0f16935b8b27f15447aa385b9))

## [2.0.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v1.1.0...v2.0.0) (2020-05-18)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* add V1 client ([#28](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/28)) ([da10a33](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/da10a33ee30a6fa0b447ef16c8b755e3ac05a87c))
* additional type annotation ([#64](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/64)) ([2d76c0e](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/2d76c0e16abedfaf106db063dc00f79e38166dad))
* drop node8 support ([#39](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/39)) ([2f66ded](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/2f66ded8db03f71d3f2b37a1d91e4f3f232d5eaf))


### Bug Fixes

* regen protos and tests ([#63](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/63)) ([6293832](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/6293832961eedcdd57c24edc311f2c154781e34e))
* remove eslint, update gax, fix generated protos, run the generator ([#49](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/49)) ([b5b9492](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/b5b9492a0c4b86b868a2b33c5c350301db29cc65))

## [1.1.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v1.0.0...v1.1.0) (2020-03-06)


### Features

* deferred client initialization ([#23](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/23)) ([4741719](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/474171928bbdd5d0fb2eab7be868317f88cd18eb))

## 1.0.0 (2020-02-29)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* export protos in src/index.ts ([68b922a](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/68b922a4c242a6ad2e360758ef0658ca8451b62f))
* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/1)) ([bd42fbd](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/bd42fbd45616adaf36cdf197d2b0f3c811025e39))
