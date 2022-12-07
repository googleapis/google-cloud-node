# Changelog

## [3.2.2](https://github.com/googleapis/nodejs-gke-hub/compare/v3.2.1...v3.2.2) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#176](https://github.com/googleapis/nodejs-gke-hub/issues/176)) ([3865475](https://github.com/googleapis/nodejs-gke-hub/commit/386547518eb49ec1b323137718be5fa8cf2166d5))
* Preserve default values in x-goog-request-params header ([#169](https://github.com/googleapis/nodejs-gke-hub/issues/169)) ([8415dbb](https://github.com/googleapis/nodejs-gke-hub/commit/8415dbb88f9017248fb27121a811b4521c66b8e5))
* Regenerated protos JS and TS definitions ([#179](https://github.com/googleapis/nodejs-gke-hub/issues/179)) ([657dd66](https://github.com/googleapis/nodejs-gke-hub/commit/657dd66c9ad8b6daba40a58bf791b0a240925a02))

## [3.2.1](https://github.com/googleapis/nodejs-gke-hub/compare/v3.2.0...v3.2.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#168](https://github.com/googleapis/nodejs-gke-hub/issues/168)) ([2de7b16](https://github.com/googleapis/nodejs-gke-hub/commit/2de7b1638a74487c342c4064f15aa089deb50a8e))
* Better support for fallback mode ([#163](https://github.com/googleapis/nodejs-gke-hub/issues/163)) ([4f8a42c](https://github.com/googleapis/nodejs-gke-hub/commit/4f8a42cac167b7cd8616e9cde6472e1e679ec0a2))
* Change import long to require ([#164](https://github.com/googleapis/nodejs-gke-hub/issues/164)) ([d1f6564](https://github.com/googleapis/nodejs-gke-hub/commit/d1f65647389881648bd27d5ca020941ed7053792))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-gke-hub/issues/1553)) ([#167](https://github.com/googleapis/nodejs-gke-hub/issues/167)) ([4843067](https://github.com/googleapis/nodejs-gke-hub/commit/484306762d3eff733aa68c077ce6092190e8b22b))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-gke-hub/issues/1546)) ([#166](https://github.com/googleapis/nodejs-gke-hub/issues/166)) ([be085a0](https://github.com/googleapis/nodejs-gke-hub/commit/be085a01bf5a9648c43d57680364791d0b84547e))

## [3.2.0](https://github.com/googleapis/nodejs-gke-hub/compare/v3.1.0...v3.2.0) (2022-06-30)


### Features

* support regapic LRO ([#158](https://github.com/googleapis/nodejs-gke-hub/issues/158)) ([8565d02](https://github.com/googleapis/nodejs-gke-hub/commit/8565d02508ed1273b9656f662104db0b99d3bf71))

## [3.1.0](https://github.com/googleapis/nodejs-gke-hub/compare/v3.0.0...v3.1.0) (2022-06-15)


### Features

* add ClusterType field in MembershipEndpoint.OnPremCluster ([#156](https://github.com/googleapis/nodejs-gke-hub/issues/156)) ([ec72f19](https://github.com/googleapis/nodejs-gke-hub/commit/ec72f19c414dde851b05506ba3f7944772322d8c))

## [3.0.0](https://github.com/googleapis/nodejs-gke-hub/compare/v2.2.0...v3.0.0) (2022-06-03)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#147)

### Features

* add EdgeCluster as a new membershipEndpoint type ([#150](https://github.com/googleapis/nodejs-gke-hub/issues/150)) ([b5b72e9](https://github.com/googleapis/nodejs-gke-hub/commit/b5b72e96152cb46948491cf875e30c7461e8d963))


### Build System

* update library to use Node 12 ([#147](https://github.com/googleapis/nodejs-gke-hub/issues/147)) ([e8dc2ab](https://github.com/googleapis/nodejs-gke-hub/commit/e8dc2ab795a2e5830d31bb856d91d1496eea8408))

## [2.2.0](https://github.com/googleapis/nodejs-gke-hub/compare/v2.1.0...v2.2.0) (2022-03-02)


### Features

* added support for k8s_version field ([#128](https://github.com/googleapis/nodejs-gke-hub/issues/128)) ([d1d08cb](https://github.com/googleapis/nodejs-gke-hub/commit/d1d08cbbbc52db593078619aef8636dbc32d8dce))
* added support for k8s_version field ([#130](https://github.com/googleapis/nodejs-gke-hub/issues/130)) ([79f9560](https://github.com/googleapis/nodejs-gke-hub/commit/79f9560d2c078c2b45fc1a6f07d2796fd232df4e))

## [2.1.0](https://github.com/googleapis/nodejs-gke-hub/compare/v2.0.0...v2.1.0) (2022-02-03)


### Features

* add `kubernetes_resource` field docs: update API annotation ([#119](https://github.com/googleapis/nodejs-gke-hub/issues/119)) ([f8e5fba](https://github.com/googleapis/nodejs-gke-hub/commit/f8e5fba6ec3f51c1c23d793886a316385d6eeab9))

## [2.0.0](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.4.0...v2.0.0) (2021-11-25)


### ⚠ BREAKING CHANGES

* v1 of API renames GkeHubMembershipServiceClient to GkeHubClient
* make v1 the default version of the API (#88)

### Features

* make v1 the default version of the API ([#88](https://www.github.com/googleapis/nodejs-gke-hub/issues/88)) ([55702e6](https://www.github.com/googleapis/nodejs-gke-hub/commit/55702e66424430a442f1cc36ec4d766e8f677df3))


### Code Refactoring

* v1 of API renames GkeHubMembershipServiceClient to GkeHubClient ([55702e6](https://www.github.com/googleapis/nodejs-gke-hub/commit/55702e66424430a442f1cc36ec4d766e8f677df3))

## [1.4.0](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.3.0...v1.4.0) (2021-09-02)


### ⚠ BREAKING CHANGES

* Move `GkeCluster` under oneof
* Move `GkeCluster` under oneof

### Features

* Add `OnPremCluster` and `MultiCloudCluster` as `GkeCluster` equivalent field ([dd27a47](https://www.github.com/googleapis/nodejs-gke-hub/commit/dd27a47c90c7fac0dd405ca3a99a295837f44a0e))
* Add `OnPremCluster` and `MultiCloudCluster` as `GkeCluster` equivalent field ([#91](https://www.github.com/googleapis/nodejs-gke-hub/issues/91)) ([9f037c2](https://www.github.com/googleapis/nodejs-gke-hub/commit/9f037c26db002fbef5f8a41a5c9ba131ddfb6fdd))
* Add request_id under `DeleteMembershipRequest` and `UpdateMembershipRequest` ([#86](https://www.github.com/googleapis/nodejs-gke-hub/issues/86)) ([dd27a47](https://www.github.com/googleapis/nodejs-gke-hub/commit/dd27a47c90c7fac0dd405ca3a99a295837f44a0e))
* Move `GkeCluster` under oneof ([9f037c2](https://www.github.com/googleapis/nodejs-gke-hub/commit/9f037c26db002fbef5f8a41a5c9ba131ddfb6fdd))


### Bug Fixes

* Move `GkeCluster` under oneof ([dd27a47](https://www.github.com/googleapis/nodejs-gke-hub/commit/dd27a47c90c7fac0dd405ca3a99a295837f44a0e))


### Miscellaneous Chores

* release as v1.4.0 ([#92](https://www.github.com/googleapis/nodejs-gke-hub/issues/92)) ([20d21ba](https://www.github.com/googleapis/nodejs-gke-hub/commit/20d21ba58c33899debab4240fd9c607e22c84a25))

## [1.3.0](https://www.github.com/googleapis/nodejs-gke-hub/compare/v1.2.1...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#83](https://www.github.com/googleapis/nodejs-gke-hub/issues/83)) ([55e3fe0](https://www.github.com/googleapis/nodejs-gke-hub/commit/55e3fe0271ed7a6b216feeddf507e1bff1164e18))

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
