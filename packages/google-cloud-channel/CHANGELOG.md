# Changelog

### [1.1.2](https://www.github.com/googleapis/nodejs-channel/compare/v1.1.1...v1.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#51](https://www.github.com/googleapis/nodejs-channel/issues/51)) ([107499a](https://www.github.com/googleapis/nodejs-channel/commit/107499a1eec09021e72ad8b1b75f644f6644f8a9))

### [1.1.1](https://www.github.com/googleapis/nodejs-channel/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#43](https://www.github.com/googleapis/nodejs-channel/issues/43)) ([542e361](https://www.github.com/googleapis/nodejs-channel/commit/542e361d7f932359b0f793d4d3781be089360de1))
* use require() to load JSON protos ([#46](https://www.github.com/googleapis/nodejs-channel/issues/46)) ([e6bd7c9](https://www.github.com/googleapis/nodejs-channel/commit/e6bd7c9765f102577a9b3d84c3f8b88b36571df5))

## [1.1.0](https://www.github.com/googleapis/nodejs-channel/compare/v1.0.0...v1.1.0) (2021-03-02)


### Features

* add Pub/Sub endpoints for Cloud Channel API ([#11](https://www.github.com/googleapis/nodejs-channel/issues/11)) ([b960424](https://www.github.com/googleapis/nodejs-channel/commit/b9604240d4ec9d4a5dcf897f32bdde9601a9e34a))
* addition of billing_account field on Plan. docs: clarification that valid address lines are required for all customers. ([#17](https://www.github.com/googleapis/nodejs-channel/issues/17)) ([2aaf1c0](https://www.github.com/googleapis/nodejs-channel/commit/2aaf1c05df23b2c4b833d2d2306f6d91dd6385c8))


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#15](https://www.github.com/googleapis/nodejs-channel/issues/15)) ([bf83cd4](https://www.github.com/googleapis/nodejs-channel/commit/bf83cd46b0be42acca06ce413471a82826ad83b8))
* TransferableSkus field deprecation. Okay to make this change since no clients are using the libraries that were released just last week. The fields were supposed to be deprecated but missed. We have communicated to clients about ([1328ee7](https://www.github.com/googleapis/nodejs-channel/commit/1328ee72f6df6673db77c9aed58a9e5146363c3b))

## 1.0.0 (2021-01-13)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* initial samples and tests ([#3](https://www.github.com/googleapis/nodejs-channel/issues/3)) ([8b62dff](https://www.github.com/googleapis/nodejs-channel/commit/8b62dff1ef30649bcecadde8e862dce85446a2de))
* initial stub of library ([ed34624](https://www.github.com/googleapis/nodejs-channel/commit/ed34624b07494fcab099b621d5e60a8c5e107a1d))
