# Changelog

## [2.2.0](https://github.com/googleapis/nodejs-dataproc-metastore/compare/v2.1.0...v2.2.0) (2022-03-23)


### Features

* promote to stable ([#123](https://github.com/googleapis/nodejs-dataproc-metastore/issues/123)) ([76cbc74](https://github.com/googleapis/nodejs-dataproc-metastore/commit/76cbc74672d80bb36118619fa27d6b290fe8d40d))

## [2.1.0](https://github.com/googleapis/nodejs-dataproc-metastore/compare/v2.0.0...v2.1.0) (2022-03-21)


### Features

* Added additional endTime field for MetadataImports ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added AuxiliaryVersionConfig for configuring the auxiliary hive versions during creation or update of the DPMS instance ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added AVRO DatabaseDumpSpec for importing and exporting Avro files ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added configuration for Dataplex integration ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added DatabaseType field for the type of backing store used ([#121](https://github.com/googleapis/nodejs-dataproc-metastore/issues/121)) ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added EncryptionConfig which contains information used to configure the Dataproc Metastore service to encrypt customer data at rest (CMEK) ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added NetworkConfig for exposing the DPMS endpoint in multiple subnetworks using PSC (this skips the need for VPC peering) ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added RESTORING status on Backups ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added support for IAM management for metadata resources ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))
* Added support to record the services that are restoring the backup ([097cf5f](https://github.com/googleapis/nodejs-dataproc-metastore/commit/097cf5fa1d2c32e2eab3fb53830ddabdef7ea2dc))

## [2.0.0](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.3.0...v2.0.0) (2021-08-30)


### ⚠ BREAKING CHANGES

* mark v1 as the default API version (#85)

### Features

* mark v1 as the default API version ([#85](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/85)) ([1869574](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/1869574b0deef84866f62c8f8550f7e3d5fed8c9))

## [1.3.0](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.2.0...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#82](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/82)) ([9f80543](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/9f8054386a3f39a570b0693f851a9aec12c6a739))

## [1.2.0](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.6...v1.2.0) (2021-08-17)


### Features

* Added the Backup resource and Backup resource GetIamPolicy/SetIamPolicy to V1 feat: Added the RestoreService method to V1 ([#80](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/80)) ([8d1df0e](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/8d1df0e23894a49e3c2b4ae4a9c1b7c76cd1de8f))

### [1.1.6](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.5...v1.1.6) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#77](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/77)) ([2a83f86](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/2a83f86b7bf920b9b1534085d6ffb00dbdcd1df9))
* **deps:** google-gax v2.24.1 ([#79](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/79)) ([c9a1751](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/c9a1751187e1acfdad07d2b9eacbbdf2d5033fcf))

### [1.1.5](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.4...v1.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#68](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/68)) ([0770cc1](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/0770cc165a51bf8d6bf2aebe48a8eeaac64d6329))

### [1.1.4](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.3...v1.1.4) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#65](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/65)) ([8840a84](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/8840a847a81a8c23c7d3273953a47a9add34f4c1))

### [1.1.3](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.2...v1.1.3) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#61](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/61)) ([ff13b45](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/ff13b45b9d75fee6630d2ba584279cf4f336f3f4))

### [1.1.2](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.1...v1.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#52](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/52)) ([664fa28](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/664fa28a1526bbed531d58c8e51eae714e51afce))

### [1.1.1](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#44](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/44)) ([fc2d8a3](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/fc2d8a313af1438e71c0b6f4890a0e774334afd7))
* use require() to load JSON protos ([#47](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/47)) ([d607efa](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/d607efaeef14c8483743d97711c3937e84e5b032))

## [1.1.0](https://www.github.com/googleapis/nodejs-dataproc-metastore/compare/v1.0.0...v1.1.0) (2021-03-18)


### Features

* add v1beta surface ([#13](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/13)) ([efb8cba](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/efb8cbad707044757f5d7a7afed9388b9afc9ab2))
* added support for release channels when creating service ([#11](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/11)) ([787f2cc](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/787f2cc38106ddb147db2676bfa0baba966e7d12))
* Publish Dataproc Metastore v1alpha API ([#9](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/9)) ([296571f](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/296571faeb647a495f25c8d12a9b4abd728b9e13))

## 1.0.0 (2021-02-23)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add initial samples and tests ([#5](https://www.github.com/googleapis/nodejs-dataproc-metastore/issues/5)) ([a2abf2b](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/a2abf2bb9e36f7ce8fa5d7c36eddc5182059e84c))
* initial stub of library ([2789dc7](https://www.github.com/googleapis/nodejs-dataproc-metastore/commit/2789dc733c46b35b73147925f65de1228a74a087))
