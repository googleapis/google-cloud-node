# Changelog

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.5.0...channel-v3.6.0) (2024-10-10)


### Features

* [channel] Add support for primary_admin_email as customer_identity for ImportCustomer ([#5736](https://github.com/googleapis/google-cloud-node/issues/5736)) ([8c61279](https://github.com/googleapis/google-cloud-node/commit/8c6127917d14c6d06c56f1061a5ac293d333f397))
* Add support for importing team customer from a different reseller ([8c61279](https://github.com/googleapis/google-cloud-node/commit/8c6127917d14c6d06c56f1061a5ac293d333f397))
* Add support to look up team customer Cloud Identity information ([8c61279](https://github.com/googleapis/google-cloud-node/commit/8c6127917d14c6d06c56f1061a5ac293d333f397))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.4.0...channel-v3.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.3.0...channel-v3.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.2.1...channel-v3.3.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/channel-v3.2.0...channel-v3.2.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4963](https://github.com/googleapis/google-cloud-node/issues/4963)) ([4292a43](https://github.com/googleapis/google-cloud-node/commit/4292a438a9a458e43fbe032f2bab8c11bf51867a))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.1.0...channel-v3.2.0) (2024-01-05)


### Features

* [channel] `CloudChannelReportsService` is deprecated ([#4903](https://github.com/googleapis/google-cloud-node/issues/4903)) ([64a2e41](https://github.com/googleapis/google-cloud-node/commit/64a2e4179a393e34a235ff6b4ece0880fcf625dd))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/channel-v3.0.1...channel-v3.1.0) (2023-09-11)


### Features

* [channel] mark ChannelPartnerGranularity as deprecated and offer alternatives ([#4623](https://github.com/googleapis/google-cloud-node/issues/4623)) ([0805d0f](https://github.com/googleapis/google-cloud-node/commit/0805d0f4417a853f5c0f365f357f078f8c481c17))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/channel-v3.0.0...channel-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))
* **deps:** Update dependency @google-cloud/local-auth to v3 ([#4546](https://github.com/googleapis/google-cloud-node/issues/4546)) ([f2beef4](https://github.com/googleapis/google-cloud-node/commit/f2beef407ce694af7133d0013221c11e7f093a59))
* **deps:** Update dependency google-auth-library to v9 ([#4560](https://github.com/googleapis/google-cloud-node/issues/4560)) ([e5099b7](https://github.com/googleapis/google-cloud-node/commit/e5099b7a475e0cfaf0d25aa8d6755cd7bc43cbe0))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.8.0...channel-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.8.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.7.0...channel-v2.8.0) (2023-06-28)


### Features

* [channel] Add support for ListSkuGroups and ListSkuGroupBillableSkus APIs in Cloud Channel APIs ([#4348](https://github.com/googleapis/google-cloud-node/issues/4348)) ([926d727](https://github.com/googleapis/google-cloud-node/commit/926d727f25951f9199e3f02d419a41dbb8e1c824))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.6.0...channel-v2.7.0) (2023-05-20)


### Features

* [channel] added partition_keys field to filter results from FetchReportResults ([#4279](https://github.com/googleapis/google-cloud-node/issues/4279)) ([3defaa1](https://github.com/googleapis/google-cloud-node/commit/3defaa1caaa70a9384eddc0281645a9bf6c860cb))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.5.1...channel-v2.6.0) (2023-05-09)


### Features

* [channel] Add billing account to entitlement definitions for Cloud Channel API ([#4250](https://github.com/googleapis/google-cloud-node/issues/4250)) ([0d4c47e](https://github.com/googleapis/google-cloud-node/commit/0d4c47eb5d884e3cb760941e616e03769a1e8733))

## [2.5.1](https://github.com/googleapis/google-cloud-node/compare/channel-v2.5.0...channel-v2.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.4.1...channel-v2.5.0) (2023-03-28)


### Features

* [channel] add show_future_offers to ListOffers ([#4079](https://github.com/googleapis/google-cloud-node/issues/4079)) ([e7b8d25](https://github.com/googleapis/google-cloud-node/commit/e7b8d25437573247f2b790304e7f2f152d00a872))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/channel-v2.4.0...channel-v2.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.3.0...channel-v2.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/channel-v2.2.0...channel-v2.3.0) (2022-12-16)


### Features

* Add support for granular repricing configurations via SkuGroups in Cloud Channel Repricing APIs ([#3718](https://github.com/googleapis/google-cloud-node/issues/3718)) ([363067c](https://github.com/googleapis/google-cloud-node/commit/363067cf54df2d3fa2f6afe1bf11506eadac68e3))


### Bug Fixes

* **deps:** Update dependency google-gax to v3 ([#3626](https://github.com/googleapis/google-cloud-node/issues/3626)) ([bab338f](https://github.com/googleapis/google-cloud-node/commit/bab338f0dd566df02fb3c41ce4af17439126892e))

## [2.2.0](https://github.com/googleapis/nodejs-channel/compare/v2.1.0...v2.2.0) (2022-11-11)


### Features

* Add CloudChannelReportsService to CloudChannel API ([56ab14f](https://github.com/googleapis/nodejs-channel/commit/56ab14fcfb242de8a767cb4c52444728404dc5ad))
* Add deal_code field to message Offer ([#169](https://github.com/googleapis/nodejs-channel/issues/169)) ([56ab14f](https://github.com/googleapis/nodejs-channel/commit/56ab14fcfb242de8a767cb4c52444728404dc5ad))


### Bug Fixes

* Allow passing gax instance to client constructor ([#165](https://github.com/googleapis/nodejs-channel/issues/165)) ([f307d9f](https://github.com/googleapis/nodejs-channel/commit/f307d9f9560dc07a8e0c3e36972b1af2519f8aca))
* Better support for fallback mode ([#160](https://github.com/googleapis/nodejs-channel/issues/160)) ([24e2202](https://github.com/googleapis/nodejs-channel/commit/24e220281861c3a1b4e4ee8931c53c478635ec8f))
* Change import long to require ([#161](https://github.com/googleapis/nodejs-channel/issues/161)) ([6c79b81](https://github.com/googleapis/nodejs-channel/commit/6c79b81b8957826c264f44b68b972afd80bcbe6d))
* **deps:** Use google-gax v3.5.2 ([#172](https://github.com/googleapis/nodejs-channel/issues/172)) ([05aa559](https://github.com/googleapis/nodejs-channel/commit/05aa5596a60309fa175b9f20068e722580e2fe42))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-channel/issues/1553)) ([#164](https://github.com/googleapis/nodejs-channel/issues/164)) ([f3c4901](https://github.com/googleapis/nodejs-channel/commit/f3c490112a9ceb5ff8c200290489cdb0fd971054))
* Preserve default values in x-goog-request-params header ([#166](https://github.com/googleapis/nodejs-channel/issues/166)) ([c04c515](https://github.com/googleapis/nodejs-channel/commit/c04c515049598c1f4353e64e1e94731f8c72324e))
* Regenerated protos JS and TS definitions ([#175](https://github.com/googleapis/nodejs-channel/issues/175)) ([fbbb62c](https://github.com/googleapis/nodejs-channel/commit/fbbb62c7b3cbaa36129412a7ca9aaa5613817260))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-channel/issues/1546)) ([#163](https://github.com/googleapis/nodejs-channel/issues/163)) ([a784132](https://github.com/googleapis/nodejs-channel/commit/a78413205e4b7a14897f439c4d37fe2d62a343e2))
* use google-gax v3.3.0 ([f3c4901](https://github.com/googleapis/nodejs-channel/commit/f3c490112a9ceb5ff8c200290489cdb0fd971054))

## [2.1.0](https://github.com/googleapis/nodejs-channel/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#156](https://github.com/googleapis/nodejs-channel/issues/156)) ([2082b3f](https://github.com/googleapis/nodejs-channel/commit/2082b3fdb4b1214ae9a70fa9e575231167a02a06))

## [2.0.0](https://github.com/googleapis/nodejs-channel/compare/v1.7.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#149)

### Bug Fixes

* **deps:** update dependency @google-cloud/local-auth to v2 ([#150](https://github.com/googleapis/nodejs-channel/issues/150)) ([bab70db](https://github.com/googleapis/nodejs-channel/commit/bab70db6eb59f73d15f2a80cc99e51b83eb9f1bf))


### Build System

* update library to use Node 12 ([#149](https://github.com/googleapis/nodejs-channel/issues/149)) ([7e1f923](https://github.com/googleapis/nodejs-channel/commit/7e1f9233f502af839b00a7fcbb2ca10017c5e026))

## [1.7.0](https://github.com/googleapis/nodejs-channel/compare/v1.6.0...v1.7.0) (2022-05-06)


### Features

* Add API definitions for Cloud Channel Repricing APIs ([#142](https://github.com/googleapis/nodejs-channel/issues/142)) ([682993d](https://github.com/googleapis/nodejs-channel/commit/682993da96720de44fb2c705d9636234a75cbeba))

## [1.6.0](https://github.com/googleapis/nodejs-channel/compare/v1.5.0...v1.6.0) (2022-02-05)


### Features

* Change description for enum default value ([#120](https://github.com/googleapis/nodejs-channel/issues/120)) ([3b23a95](https://github.com/googleapis/nodejs-channel/commit/3b23a9556ce8fbf17ab5a8bfbd1697f69efcc689))
* Change description for GCP ProvisionedService.provisioning_id value ([0b364e8](https://github.com/googleapis/nodejs-channel/commit/0b364e808302e058c1c8da24a91ec61a3024af27))

## [1.5.0](https://www.github.com/googleapis/nodejs-channel/compare/v1.4.0...v1.5.0) (2021-10-27)


### Features

* add resource type to ChannelPartnerLink ([#103](https://www.github.com/googleapis/nodejs-channel/issues/103)) ([f8d5b31](https://www.github.com/googleapis/nodejs-channel/commit/f8d5b3197062591ce38c2d648412e7c80f0d5fc3))

## [1.4.0](https://www.github.com/googleapis/nodejs-channel/compare/v1.3.0...v1.4.0) (2021-09-07)


### Features

* add API ImportCustomer for Cloud Channel API docs: update comments for a few fields ([#89](https://www.github.com/googleapis/nodejs-channel/issues/89)) ([9d34eba](https://www.github.com/googleapis/nodejs-channel/commit/9d34eba73691c71fd219fc6e9faa4e6a6102e1f4))

## [1.3.0](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.6...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#85](https://www.github.com/googleapis/nodejs-channel/issues/85)) ([65dae67](https://www.github.com/googleapis/nodejs-channel/commit/65dae67657fc23358570ff6c0ef8fc7dd39c1cb9))

### [1.2.6](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.5...v1.2.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#83](https://www.github.com/googleapis/nodejs-channel/issues/83)) ([3bc61ee](https://www.github.com/googleapis/nodejs-channel/commit/3bc61ee644201ed01eb978a646cd95fa8ba9621e))

### [1.2.5](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.4...v1.2.5) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#81](https://www.github.com/googleapis/nodejs-channel/issues/81)) ([1818a9e](https://www.github.com/googleapis/nodejs-channel/commit/1818a9e5744ddce7799b75d2e094155bb84aa993))

### [1.2.4](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.3...v1.2.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#71](https://www.github.com/googleapis/nodejs-channel/issues/71)) ([096ac96](https://www.github.com/googleapis/nodejs-channel/commit/096ac96502d91645cf5c539bc94bcf46599d9533))

### [1.2.4](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.3...v1.2.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#71](https://www.github.com/googleapis/nodejs-channel/issues/71)) ([096ac96](https://www.github.com/googleapis/nodejs-channel/commit/096ac96502d91645cf5c539bc94bcf46599d9533))

### [1.2.3](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.2...v1.2.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#69](https://www.github.com/googleapis/nodejs-channel/issues/69)) ([28ec9c7](https://www.github.com/googleapis/nodejs-channel/commit/28ec9c77e2ff3d87a51a6acd82dc0ea09c4a399a))

### [1.2.2](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.1...v1.2.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#66](https://www.github.com/googleapis/nodejs-channel/issues/66)) ([2bb861e](https://www.github.com/googleapis/nodejs-channel/commit/2bb861ecafe3851d97429aca7fdb9dbc47f1c4d5))

### [1.2.1](https://www.github.com/googleapis/nodejs-channel/compare/v1.2.0...v1.2.1) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#60](https://www.github.com/googleapis/nodejs-channel/issues/60)) ([97f7100](https://www.github.com/googleapis/nodejs-channel/commit/97f7100ac2cc40a783ec2bcd5a535f4e5999889d))

## [1.2.0](https://www.github.com/googleapis/nodejs-channel/compare/v1.1.2...v1.2.0) (2021-06-08)


### Features

* Add/Update API definitions for Cloud Channel API, including ([#55](https://www.github.com/googleapis/nodejs-channel/issues/55)) ([3db17ba](https://www.github.com/googleapis/nodejs-channel/commit/3db17ba086e1da649e905ba4235c1dc64bd1a883))

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
