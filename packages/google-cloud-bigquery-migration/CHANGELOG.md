# Changelog

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-migration-v1.3.0...bigquery-migration-v1.4.0) (2024-07-22)


### Features

* Update MS API stubs with Unified API ([#5548](https://github.com/googleapis/google-cloud-node/issues/5548)) ([9bd3923](https://github.com/googleapis/google-cloud-node/commit/9bd3923bbac93975828f73b24efce9d513d6e201))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-migration-v1.2.0...bigquery-migration-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-migration-v1.1.0...bigquery-migration-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/bigquery-migration-v1.0.1...bigquery-migration-v1.1.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [1.0.1](https://github.com/googleapis/nodejs-bigquery-migration/compare/v1.0.0...v1.0.1) (2023-09-26)


### Bug Fixes

* Simplify logic for HTTP/1.1 REST fallback option ([#55](https://github.com/googleapis/nodejs-bigquery-migration/issues/55)) ([12fa279](https://github.com/googleapis/nodejs-bigquery-migration/commit/12fa27927a53668cc3dff1ff717ecce54301491c))

## [1.0.0](https://github.com/googleapis/nodejs-bigquery-migration/compare/v0.2.1...v1.0.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* upgrade to Node 14 ([#52](https://github.com/googleapis/nodejs-bigquery-migration/issues/52))

### Features

* Add request_source field and update formatting ([#39](https://github.com/googleapis/nodejs-bigquery-migration/issues/39)) ([f402ca3](https://github.com/googleapis/nodejs-bigquery-migration/commit/f402ca3274b9d1e34c0828fab8a0cd4e283c6a0a))
* Add SQL translation service to Bazel generation ([#36](https://github.com/googleapis/nodejs-bigquery-migration/issues/36)) ([d6e6e76](https://github.com/googleapis/nodejs-bigquery-migration/commit/d6e6e76cd519daa4b6084c355aa4b30f4c5ec7f7))


### Miscellaneous Chores

* Upgrade to Node 14 ([#52](https://github.com/googleapis/nodejs-bigquery-migration/issues/52)) ([49d73aa](https://github.com/googleapis/nodejs-bigquery-migration/commit/49d73aad7bc1f1bf908489bb30b3845b33272886))

## [0.2.1](https://github.com/googleapis/nodejs-bigquery-migration/compare/v0.2.0...v0.2.1) (2023-02-09)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#24](https://github.com/googleapis/nodejs-bigquery-migration/issues/24)) ([4592890](https://github.com/googleapis/nodejs-bigquery-migration/commit/45928906abff16104316fa817dc2860381984c05))

## [0.2.0](https://github.com/googleapis/nodejs-bigquery-migration/compare/v0.1.0...v0.2.0) (2022-09-14)


### Features

* Add MySQL dialect to bigquerymigration v2 client library ([b86b901](https://github.com/googleapis/nodejs-bigquery-migration/commit/b86b901e10fd651f727347f4e12d1401783cc16f))


### Bug Fixes

* Allow passing gax instance to client constructor ([#12](https://github.com/googleapis/nodejs-bigquery-migration/issues/12)) ([b86b901](https://github.com/googleapis/nodejs-bigquery-migration/commit/b86b901e10fd651f727347f4e12d1401783cc16f))
* better support for fallback mode ([b86b901](https://github.com/googleapis/nodejs-bigquery-migration/commit/b86b901e10fd651f727347f4e12d1401783cc16f))
* Change import long to require ([#13](https://github.com/googleapis/nodejs-bigquery-migration/issues/13)) ([b9c6786](https://github.com/googleapis/nodejs-bigquery-migration/commit/b9c6786c0da4159ecdf632c79062714c38afe7cf))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bigquery-migration/issues/1553)) ([#16](https://github.com/googleapis/nodejs-bigquery-migration/issues/16)) ([c7ed184](https://github.com/googleapis/nodejs-bigquery-migration/commit/c7ed1846776d96336ba1512df2af6d1cebea02b9))
* Preserve default values in x-goog-request-params header ([#17](https://github.com/googleapis/nodejs-bigquery-migration/issues/17)) ([64baf4b](https://github.com/googleapis/nodejs-bigquery-migration/commit/64baf4baec5e6805283f02c90cb47cb0567199ad))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bigquery-migration/issues/1546)) ([#15](https://github.com/googleapis/nodejs-bigquery-migration/issues/15)) ([a7e4f6e](https://github.com/googleapis/nodejs-bigquery-migration/commit/a7e4f6ef1408f708448aa1bebafff3b474252d59))
* use google-gax v3.3.0 ([c7ed184](https://github.com/googleapis/nodejs-bigquery-migration/commit/c7ed1846776d96336ba1512df2af6d1cebea02b9))

## 0.1.0 (2022-07-21)


### Features

* add initial samples and tests ([2068ba5](https://github.com/googleapis/nodejs-bigquery-migration/commit/2068ba58fd845b6b465a7b93d2085adcbddbad5e))
* add templated files from docker image ([4fd777b](https://github.com/googleapis/nodejs-bigquery-migration/commit/4fd777bcc0d0210760cd4868c999e0ecaedd908d))
* initial stub of library ([8580545](https://github.com/googleapis/nodejs-bigquery-migration/commit/8580545681c0c4da4459447a9ffeb2f04aecb71c))
