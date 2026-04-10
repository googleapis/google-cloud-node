# Changelog

## [5.1.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v5.0.0...v5.1.0) (2025-06-06)


### Features

* Add protobufjs 2023 edition support ([21122f5](https://github.com/googleapis/nodejs-bigquery-storage/commit/21122f5901fd5b6670c4a3271045a9b3828b7f6b))
* Increased the number of partitions can be written in a single request ([21122f5](https://github.com/googleapis/nodejs-bigquery-storage/commit/21122f5901fd5b6670c4a3271045a9b3828b7f6b))
* Selective gapic support for typescript generation ([21122f5](https://github.com/googleapis/nodejs-bigquery-storage/commit/21122f5901fd5b6670c4a3271045a9b3828b7f6b))
* Support precise dates and microsecond resolution ([#569](https://github.com/googleapis/nodejs-bigquery-storage/issues/569)) ([2ae69a8](https://github.com/googleapis/nodejs-bigquery-storage/commit/2ae69a89309a538e413bf15639c0b9b11ee4cf47))


### Bug Fixes

* Catch dangling promises ([21122f5](https://github.com/googleapis/nodejs-bigquery-storage/commit/21122f5901fd5b6670c4a3271045a9b3828b7f6b))
* Limit protobufjs version to one that breaks ([#567](https://github.com/googleapis/nodejs-bigquery-storage/issues/567)) ([61f92d4](https://github.com/googleapis/nodejs-bigquery-storage/commit/61f92d488400318f4669a42a88e1056b864143d1))
* **managedwriter:** Improve checks before closing connection ([#568](https://github.com/googleapis/nodejs-bigquery-storage/issues/568)) ([338f8bb](https://github.com/googleapis/nodejs-bigquery-storage/commit/338f8bbf6ba0aec47c82888a8ec3cafdc30950e9))
* Remove `location` from http annotations in all of the service requests ([21122f5](https://github.com/googleapis/nodejs-bigquery-storage/commit/21122f5901fd5b6670c4a3271045a9b3828b7f6b))

## [5.0.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.11.0...v5.0.0) (2025-05-08)


### ⚠ BREAKING CHANGES

* upgrade to node 18 ([#542](https://github.com/googleapis/nodejs-bigquery-storage/issues/542))

### Bug Fixes

* **deps:** Update dependency @google-cloud/bigquery to v8 ([#550](https://github.com/googleapis/nodejs-bigquery-storage/issues/550)) ([05df963](https://github.com/googleapis/nodejs-bigquery-storage/commit/05df963172b8f0fe5ec71e1bebfad6e065c9aa1b))


### Miscellaneous Chores

* Upgrade to node 18 ([#542](https://github.com/googleapis/nodejs-bigquery-storage/issues/542)) ([b3eb245](https://github.com/googleapis/nodejs-bigquery-storage/commit/b3eb245dbd1a32b8f49497bc8d3d487422b853ec))

## [4.11.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.10.1...v4.11.0) (2025-01-09)


### Features

* Emit connection event for a StreamConnection ([#533](https://github.com/googleapis/nodejs-bigquery-storage/issues/533)) ([6688ea3](https://github.com/googleapis/nodejs-bigquery-storage/commit/6688ea3e87e7bd992802d643daa1f760c0c4dd92))


### Bug Fixes

* Required table fields with value expression should be proto optional ([#532](https://github.com/googleapis/nodejs-bigquery-storage/issues/532)) ([f125792](https://github.com/googleapis/nodejs-bigquery-storage/commit/f1257924be9bb257ea9a11448322f8aa711ad47e))

## [4.10.1](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.10.0...v4.10.1) (2024-10-23)


### Bug Fixes

* Arrow parsing for nested and nullable fields ([#519](https://github.com/googleapis/nodejs-bigquery-storage/issues/519)) ([fc052fb](https://github.com/googleapis/nodejs-bigquery-storage/commit/fc052fb8746f0f87e028f009a6eccc78ff8a1bc4))

## [4.10.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.9.0...v4.10.0) (2024-09-23)


### Features

* Add BigQuery Metastore Partition Service API version v1alpha ([b0cf365](https://github.com/googleapis/nodejs-bigquery-storage/commit/b0cf365d9dcb47ea40e2222aa7fb966396bff4b9))
* Add wrapper for reading table data using Storage API ([#431](https://github.com/googleapis/nodejs-bigquery-storage/issues/431)) ([03f2b1f](https://github.com/googleapis/nodejs-bigquery-storage/commit/03f2b1f165f25f831f4a266419f3a6168ef2536c))

## [4.9.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.8.0...v4.9.0) (2024-09-12)


### Features

* Support BQ Storage Write CDC ([#473](https://github.com/googleapis/nodejs-bigquery-storage/issues/473)) ([8380ca8](https://github.com/googleapis/nodejs-bigquery-storage/commit/8380ca8896f6043aba7b756b2f974896bb42468e))
* Support flexible columns on adapt package ([#474](https://github.com/googleapis/nodejs-bigquery-storage/issues/474)) ([c521cc5](https://github.com/googleapis/nodejs-bigquery-storage/commit/c521cc5b3085ca73ae490ec7436cec14d3ad53e5))
* Update Nodejs generator to send API versions in headers for GAPICs ([#459](https://github.com/googleapis/nodejs-bigquery-storage/issues/459)) ([9dca0d3](https://github.com/googleapis/nodejs-bigquery-storage/commit/9dca0d3fa35d4eebec5f845151d1ea8a2b3ba837))


### Bug Fixes

* Typo - commited -&gt; committed ([#468](https://github.com/googleapis/nodejs-bigquery-storage/issues/468)) ([672ab7d](https://github.com/googleapis/nodejs-bigquery-storage/commit/672ab7d2846e9379bb6320e8e39e8d53b9d8199e))

## [4.8.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.7.0...v4.8.0) (2024-05-10)


### Features

* Add getWriteStream and createWriteStreamFullResponse methods ([#453](https://github.com/googleapis/nodejs-bigquery-storage/issues/453)) ([27dce6a](https://github.com/googleapis/nodejs-bigquery-storage/commit/27dce6a763c07a9fab70a18f15305e92fdbea5f1))

## [4.7.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.6.0...v4.7.0) (2024-05-03)


### Features

* Add trace id ([#447](https://github.com/googleapis/nodejs-bigquery-storage/issues/447)) ([19b38a0](https://github.com/googleapis/nodejs-bigquery-storage/commit/19b38a009947f93eb06fd3b127bc23ee3dee2594))

## [4.6.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.5.0...v4.6.0) (2024-05-03)


### Features

* Add support for RANGE type with Write API and adapt pkg ([#437](https://github.com/googleapis/nodejs-bigquery-storage/issues/437)) ([51924ab](https://github.com/googleapis/nodejs-bigquery-storage/commit/51924ab3639253ff79654d90fbada368f5fd5e18))
* Enable write retry and nack pending writes on reconnect ([#443](https://github.com/googleapis/nodejs-bigquery-storage/issues/443)) ([ce4f88c](https://github.com/googleapis/nodejs-bigquery-storage/commit/ce4f88c668afb8ebf1d5b7ad57f1c4e245a1a8f8))

## [4.5.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.4.0...v4.5.0) (2024-04-15)


### Features

* Add several fields to manage state of database encryption update ([#433](https://github.com/googleapis/nodejs-bigquery-storage/issues/433)) ([cf51780](https://github.com/googleapis/nodejs-bigquery-storage/commit/cf51780f991bc9befb87a812946f977cc8db9350))
* Auto convert numbers ([#436](https://github.com/googleapis/nodejs-bigquery-storage/issues/436)) ([f0505e7](https://github.com/googleapis/nodejs-bigquery-storage/commit/f0505e7e32baca2eb9133161aa7161bf58e38a28))


### Bug Fixes

* Auto convert nested fields ([#438](https://github.com/googleapis/nodejs-bigquery-storage/issues/438)) ([0ba5b7d](https://github.com/googleapis/nodejs-bigquery-storage/commit/0ba5b7d592299f47ae285ce15b11157ee9e0207e))
* Destroy internal grpc conn when closed ([#439](https://github.com/googleapis/nodejs-bigquery-storage/issues/439)) ([e7731bf](https://github.com/googleapis/nodejs-bigquery-storage/commit/e7731bf8f2b35c143a02bcd560fb4afb97936f0c))
* Trigger reconnection on INTERNAL status error ([#435](https://github.com/googleapis/nodejs-bigquery-storage/issues/435)) ([f555322](https://github.com/googleapis/nodejs-bigquery-storage/commit/f5553220b9b9fe5289f9a1c394d3f964c016f07d))

## [4.4.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.3.0...v4.4.0) (2024-03-21)


### Features

* Add support for missing value interpretation ([#428](https://github.com/googleapis/nodejs-bigquery-storage/issues/428)) ([1a3e4ba](https://github.com/googleapis/nodejs-bigquery-storage/commit/1a3e4bac76ef65e353e8bf6fb6780dbf8d0c887e))
* Automatically convert date/datetime/timestamps ([#422](https://github.com/googleapis/nodejs-bigquery-storage/issues/422)) ([cbc7e94](https://github.com/googleapis/nodejs-bigquery-storage/commit/cbc7e94dfd6f79c038ed4b74c814a84c90a42be0))


### Bug Fixes

* Handle more scenarios for stream reconnection ([#429](https://github.com/googleapis/nodejs-bigquery-storage/issues/429)) ([e6f9323](https://github.com/googleapis/nodejs-bigquery-storage/commit/e6f93234906bb9f3346c80943660d04b36206d23))

## [4.3.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.2.1...v4.3.0) (2024-02-20)


### Features

* Update libs to support TPC Universes ([#415](https://github.com/googleapis/nodejs-bigquery-storage/issues/415)) ([8ee9e75](https://github.com/googleapis/nodejs-bigquery-storage/commit/8ee9e75c2f3de4dee66f710e117c3577c0bef993))

## [4.2.1](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.2.0...v4.2.1) (2024-02-06)


### Bug Fixes

* Force import protobufjs/ext/descriptor package ([#407](https://github.com/googleapis/nodejs-bigquery-storage/issues/407)) ([a970824](https://github.com/googleapis/nodejs-bigquery-storage/commit/a970824d07f7a5faebe1a7972f6c19f80d2fe38c))
* Large inserts AppendRow requests ([432835c](https://github.com/googleapis/nodejs-bigquery-storage/commit/432835cf9edc006df100de9a29697221dcc05247))

## [4.2.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.1.0...v4.2.0) (2023-09-26)


### Features

* Add default_missing_value_interpretation field; indicate KMS_SERVICE_ERROR is retryable ([#347](https://github.com/googleapis/nodejs-bigquery-storage/issues/347)) ([07794c1](https://github.com/googleapis/nodejs-bigquery-storage/commit/07794c12459f850bfc68df55937ca54fec65ea97))


### Bug Fixes

* Struct field names should not be lowercase ([#364](https://github.com/googleapis/nodejs-bigquery-storage/issues/364)) ([1867062](https://github.com/googleapis/nodejs-bigquery-storage/commit/18670627cbebf57c139036a7a949ace599606eb0))

## [4.1.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v4.0.0...v4.1.0) (2023-08-11)


### Features

* Storage write api veneer ([#328](https://github.com/googleapis/nodejs-bigquery-storage/issues/328)) ([146141e](https://github.com/googleapis/nodejs-bigquery-storage/commit/146141e7973c9e6642174d34b284be605e90582b))

## [4.0.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.4.0...v4.0.0) (2023-08-01)


### ⚠ BREAKING CHANGES

* migrate to node 14 ([#354](https://github.com/googleapis/nodejs-bigquery-storage/issues/354))

### Miscellaneous Chores

* Migrate to node 14 ([#354](https://github.com/googleapis/nodejs-bigquery-storage/issues/354)) ([4423635](https://github.com/googleapis/nodejs-bigquery-storage/commit/4423635d2d815193be63e827c6360e9b9208dec1))

## [3.4.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.3.0...v3.4.0) (2023-06-05)


### Features

* Adapt package to convert TableSchema to ProtoDescriptor ([#326](https://github.com/googleapis/nodejs-bigquery-storage/issues/326)) ([2d189e9](https://github.com/googleapis/nodejs-bigquery-storage/commit/2d189e9bf3fc0e4721110b148eede9f3ddbed29e))
* Add default_value_expression to TableFieldSchema ([#323](https://github.com/googleapis/nodejs-bigquery-storage/issues/323)) ([b2aa964](https://github.com/googleapis/nodejs-bigquery-storage/commit/b2aa964153b048b550454f835f5aa6dd825a5362))
* Add table sampling to ReadAPI v1 ([#338](https://github.com/googleapis/nodejs-bigquery-storage/issues/338)) ([18bb7b0](https://github.com/googleapis/nodejs-bigquery-storage/commit/18bb7b07bd0eb255d49aecd60f45d88b005d8610))


### Bug Fixes

* Re-introduce routing headers for Write API ([#340](https://github.com/googleapis/nodejs-bigquery-storage/issues/340)) ([db6eca6](https://github.com/googleapis/nodejs-bigquery-storage/commit/db6eca647e704d0c0169f394e80986b1db127d66))

## [3.3.0](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.2.1...v3.3.0) (2023-01-25)


### Features

* Added SuggestConversationSummary RPC ([#318](https://github.com/googleapis/nodejs-bigquery-storage/issues/318)) ([60d2ed1](https://github.com/googleapis/nodejs-bigquery-storage/commit/60d2ed1bed62611e342e41a45f831307704a5834))

## [3.2.1](https://github.com/googleapis/nodejs-bigquery-storage/compare/v3.2.0...v3.2.1) (2023-01-11)


### Bug Fixes

* Manual update from nodejs postprocessor ([#316](https://github.com/googleapis/nodejs-bigquery-storage/issues/316)) ([3861cf6](https://github.com/googleapis/nodejs-bigquery-storage/commit/3861cf625aa01511eb6bdcf99e372dbd5bec6fa9))

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
