# Changelog

### [1.2.1](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.2.0...v1.2.1) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#80](https://www.github.com/googleapis/nodejs-gke-hub/issues/80)) ([d8ceb14](https://www.github.com/googleapis/nodejs-gke-hub/commit/d8ceb140c67f63e203bafa1ed23947e28921f1ed))
* **deps:** google-gax v2.24.1 ([#82](https://www.github.com/googleapis/nodejs-gke-hub/issues/82)) ([53d0fbd](https://www.github.com/googleapis/nodejs-gke-hub/commit/53d0fbd9b39910f6c6082884c7d4414665b9b0a0))

## [1.2.0](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.1.4...v1.2.0) (2021-07-21)


### Features

* added v1alpha messages and client for gkehub ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))
* added v1beta, v1 messages and client for gkehub ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))


### Bug Fixes

* add missing dependency configmanagement.proto ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))
* add missing dependency configmanagement.proto, cloudauditlogging.proto, metering.proto, multiclusteringress.proto, servicemesh.proto to v1alpha client ([#74](https://www.github.com/googleapis/nodejs-gke-hub/issues/74)) ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))
* add missing dependency configmanagement.proto, metering.proto, multiclusteringress.proto to v1beta client ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))
* add missing dependency multiclusteringress https://github.com/googleapis/nodejs-gke-hub/pull/67 ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))
* Updating WORKSPACE files to use the newest version of the Typescript generator ([f781301](https://www.github.com/googleapis/nodejs-gke-hub/commit/f781301f79b5e1fab40d693503dc8e2e452cbde1))

### [1.1.4](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.1.3...v1.1.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#69](https://www.github.com/googleapis/nodejs-gke-hub/issues/69)) ([71e558b](https://www.github.com/googleapis/nodejs-gke-hub/commit/71e558b40947fcfeda0c6f8e9a23b379a27a8ec9))

### [1.1.3](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.1.2...v1.1.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#65](https://www.github.com/googleapis/nodejs-gke-hub/issues/65)) ([66afee5](https://www.github.com/googleapis/nodejs-gke-hub/commit/66afee52d48894b8dbca3a744b852728f246af95))
* make request optional in all cases ([#59](https://www.github.com/googleapis/nodejs-gke-hub/issues/59)) ([96a0455](https://www.github.com/googleapis/nodejs-gke-hub/commit/96a04553050731b76fd54ae8093285efb23d324e))

### [1.1.2](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.1.1...v1.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#52](https://www.github.com/googleapis/nodejs-gke-hub/issues/52)) ([943e2f7](https://www.github.com/googleapis/nodejs-gke-hub/commit/943e2f7b36d51e281f6d8f847f32ff8a788ab295))

### [1.1.1](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#44](https://www.github.com/googleapis/nodejs-gke-hub/issues/44)) ([c14ef1e](https://www.github.com/googleapis/nodejs-gke-hub/commit/c14ef1ed09325896027ade1c36cbc6b670f115df))
* use require() to load JSON protos ([#47](https://www.github.com/googleapis/nodejs-gke-hub/issues/47)) ([5f7bef5](https://www.github.com/googleapis/nodejs-gke-hub/commit/5f7bef5c92f24230f3eae878431be1599a5688ed))

## [1.1.0](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.0.2...v1.1.0) (2021-02-14)


### Features

* Update Membership API v1beta1 proto ([#15](https://www.github.com/googleapis/nodejs-gke-hub/issues/15)) ([878ce5a](https://www.github.com/googleapis/nodejs-gke-hub/commit/878ce5a99d85b1a9fab55f8b935ad310bc451513))

### [1.0.2](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.0.1...v1.0.2) (2021-02-09)


### Bug Fixes

* **docs:** correct name in .repo-metadata.json ([#13](https://www.github.com/googleapis/nodejs-gke-hub/issues/13)) ([6d69b2d](https://www.github.com/googleapis/nodejs-gke-hub/commit/6d69b2d92284b6bacaba33f55dabf22d0f59c9e6))

### [1.0.1](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.0.0...v1.0.1) (2021-02-08)


### Bug Fixes

* **build:** correct package name for docs ([#9](https://www.github.com/googleapis/nodejs-gke-hub/issues/9)) ([ce04a06](https://www.github.com/googleapis/nodejs-gke-hub/commit/ce04a06e49ff4c59d993d2034ef828d51407aa76))

## 1.0.0 (2021-01-26)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add tests and samples to library ([#2](https://www.github.com/googleapis/nodejs-gke-hub/issues/2)) ([6f4ab1f](https://www.github.com/googleapis/nodejs-gke-hub/commit/6f4ab1ffe019d2ce0be5253b600fc10b40ca0362))
* initial stub of library ([1a34958](https://www.github.com/googleapis/nodejs-gke-hub/commit/1a349584f6d2012ef40b5f112a18009757c647ee))
