# Changelog

## [3.2.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.1.1...v3.2.0) (2022-11-11)


### Features

* Add location to WriteStream and add WriteStreamView support ([#295](https://github.com/googleapis/nodejs-bigquery-storage/issues/295)) ([ba3c5ef](https://github.com/googleapis/nodejs-bigquery-storage/commit/ba3c5ef05366b1e9a542b9b13fc0c7a25118b2a3))

## [3.1.1](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.1.0...v3.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#292](https://github.com/googleapis/nodejs-bigquery-storage/issues/292)) ([89f953d](https://github.com/googleapis/nodejs-bigquery-storage/commit/89f953de24d774de076ce9aeef649122ab3d65a6))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bigquery-storage/issues/1553)) ([#291](https://github.com/googleapis/nodejs-bigquery-storage/issues/291)) ([507e378](https://github.com/googleapis/nodejs-bigquery-storage/commit/507e3780553fa339ffccbba9a8f9ac930d1e9c6d))

## [3.1.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.0.0...v3.1.0) (2022-08-23)


### Features

* allow users to set Apache Avro output format options through avro_serialization_options param in TableReadOptions message ([#284](https://github.com/googleapis/nodejs-bigquery-storage/issues/284)) ([99b8afc](https://github.com/googleapis/nodejs-bigquery-storage/commit/99b8afc3fb2aa1d47151b90924eab2016432034f))


### Bug Fixes

* better support for fallback mode ([#287](https://github.com/googleapis/nodejs-bigquery-storage/issues/287)) ([08b0bb2](https://github.com/googleapis/nodejs-bigquery-storage/commit/08b0bb2c300ce49a65121805ea674e9c56726a87))
* change import long to require ([#289](https://github.com/googleapis/nodejs-bigquery-storage/issues/289)) ([63a3dc2](https://github.com/googleapis/nodejs-bigquery-storage/commit/63a3dc2bcbac775e8c41dd19248ef3cd4829c21f))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigquery-storage/issues/1546)) ([#290](https://github.com/googleapis/nodejs-bigquery-storage/issues/290)) ([1436388](https://github.com/googleapis/nodejs-bigquery-storage/commit/143638862040327e89c74c87a7018e2342576a95))

## [3.0.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v2.8.0...v3.0.0) (2022-06-29)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#272)

### Features

* Deprecate format specific `row_count` field in Read API ([#249](https://github.com/googleapis/nodejs-bigquery-storage/issues/249)) ([fb8acf1](https://github.com/googleapis/nodejs-bigquery-storage/commit/fb8acf1f4eab7823132159bcf5927c9eda6374e2))


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#274](https://github.com/googleapis/nodejs-bigquery-storage/issues/274)) ([4271ea0](https://github.com/googleapis/nodejs-bigquery-storage/commit/4271ea0aaa98286696eb6822d0bef82a655a5811))
* Modify client lib retry policy for CreateWriteStream with longer backoff, more error code and longer overall time ([#279](https://github.com/googleapis/nodejs-bigquery-storage/issues/279)) ([849cc23](https://github.com/googleapis/nodejs-bigquery-storage/commit/849cc237081e63a585264a62d49e9407d2f14450))


### Build System

* update library to use Node 12 ([#272](https://github.com/googleapis/nodejs-bigquery-storage/issues/272)) ([5e774e6](https://github.com/googleapis/nodejs-bigquery-storage/commit/5e774e614132f189362d56c502960d87200a11a0))

## [2.8.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.7.0...v2.8.0) (2021-12-30)


### Features

* add write_mode support for BigQuery Storage Write API v1 ([#228](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/228)) ([18f3123](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/18f3123275716d49460f77cbbc1a4547412087d2))

## [2.7.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.6.2...v2.7.0) (2021-09-27)


### Features

* add BigQuery Storage Write API v1 ([#209](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/209)) ([e0401d9](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/e0401d96480cd192a2fad8075884d2a8abd417ca))

### [2.6.2](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.6.1...v2.6.2) (2021-09-07)


### Bug Fixes

* **deps:** update dependency snappy to v7 ([#196](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/196)) ([37538ec](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/37538ec42815d0ce325416b4ee299ca3fb7b59fe))

### [2.6.1](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.6.0...v2.6.1) (2021-09-03)


### Bug Fixes

* **build:** migrate to main branch ([#204](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/204)) ([759c9f0](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/759c9f0442f9cec7eec94055da87b17ba7ef18ad))

## [2.6.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.5.4...v2.6.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#200](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/200)) ([ef2206c](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/ef2206cf1087c23d144fbc4b50363efb4c6deab2))

### [2.5.4](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.5.3...v2.5.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#198](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/198)) ([c6f70de](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/c6f70de43641ee7a00237884cf3f40bbf1bed502))

### [2.5.3](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.5.2...v2.5.3) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#188](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/188)) ([e49f7ee](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/e49f7ee0413948779842b3b9d4faf5addc4c4db6))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#190](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/190)) ([8649cc6](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/8649cc6ae0a4e6ae807ba9e5af438ca0ffc9592a))

### [2.5.2](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.5.1...v2.5.2) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#185](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/185)) ([1e9b856](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/1e9b8560cb3b60a60035c965ba1dabc24ad8f0c0))

### [2.5.1](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.5.0...v2.5.1) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#179](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/179)) ([b0beaaa](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/b0beaaa280e7599f75e0a439f4ecd4a9a6c059ad))

## [2.5.0](https://www.github.com/googleapis/nodejs-bigquery-storage/compare/v2.4.0...v2.5.0) (2021-06-07)


### Features

* Add ZSTD compression as an option for Arrow. ([#165](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/165)) ([dc5a1d0](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/dc5a1d00f92f09dafbf0d3b1a9bf5ea4b5c43103))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#158](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/158)) ([3347edd](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/3347edd3781d7a37ae6a50b0d6885365bc2e4b2f))
* GoogleAdsError missing using generator version after 1.3.0 ([#171](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/171)) ([8504761](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/850476101d06f4c3f903fb10ebb6709c1a6ffa95))
* use require() to load JSON protos ([#161](https://www.github.com/googleapis/nodejs-bigquery-storage/issues/161)) ([a16129f](https://www.github.com/googleapis/nodejs-bigquery-storage/commit/a16129f7a56882e3070fa79f29b8b6018e7cd651))

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
