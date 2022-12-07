# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/asset?activeTab=versions

## [4.5.0](https://github.com/googleapis/nodejs-asset/compare/v4.4.0...v4.5.0) (2022-11-11)


### Features

* Add a new searchable field kmsKeys ([#665](https://github.com/googleapis/nodejs-asset/issues/665)) ([567ccbd](https://github.com/googleapis/nodejs-asset/commit/567ccbd70f35f5fce8125b2569d9b0492a9da5cb))


### Bug Fixes

* deprecate searchable field kmsKey ([567ccbd](https://github.com/googleapis/nodejs-asset/commit/567ccbd70f35f5fce8125b2569d9b0492a9da5cb))
* **deps:** Use google-gax v3.5.2 ([#669](https://github.com/googleapis/nodejs-asset/issues/669)) ([a6ede56](https://github.com/googleapis/nodejs-asset/commit/a6ede563b7cfd10e6646a3255b64a9aa74b07169))
* Regenerated protos JS and TS definitions ([#673](https://github.com/googleapis/nodejs-asset/issues/673)) ([35bb44c](https://github.com/googleapis/nodejs-asset/commit/35bb44c04408a5319a34e816e63e26d1877e4cd5))

## [4.4.0](https://github.com/googleapis/nodejs-asset/compare/v4.3.0...v4.4.0) (2022-09-22)


### Features

* Add client library support for AssetService v1 SavedQuery APIs ([#662](https://github.com/googleapis/nodejs-asset/issues/662)) ([68c8ece](https://github.com/googleapis/nodejs-asset/commit/68c8eceb6b0ff0c646992439886892eb0528ec8d))


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#658](https://github.com/googleapis/nodejs-asset/issues/658)) ([e351ed1](https://github.com/googleapis/nodejs-asset/commit/e351ed172211d240968beb82cd0f106222f2b632))

## [4.3.0](https://github.com/googleapis/nodejs-asset/compare/v4.2.0...v4.3.0) (2022-09-09)


### Features

* Add batchGetEffectiveIamPolicies sample code. ([#654](https://github.com/googleapis/nodejs-asset/issues/654)) ([11160b0](https://github.com/googleapis/nodejs-asset/commit/11160b098aec0854fe21fb79144120b9cb29caf6))


### Bug Fixes

* Allow passing gax instance to client constructor ([#656](https://github.com/googleapis/nodejs-asset/issues/656)) ([af56ac6](https://github.com/googleapis/nodejs-asset/commit/af56ac6e2213df8bc65e95fee860251569075130))
* Change import long to require ([#648](https://github.com/googleapis/nodejs-asset/issues/648)) ([0af8467](https://github.com/googleapis/nodejs-asset/commit/0af8467d716cc4f5bfb69482d4264350ceea2ec1))
* **deps:** Update dependency uuid to v9 ([#657](https://github.com/googleapis/nodejs-asset/issues/657)) ([fac4751](https://github.com/googleapis/nodejs-asset/commit/fac4751e36b3d6340c6323d476bd7fc7ec6a8a30))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-asset/issues/1553)) ([#655](https://github.com/googleapis/nodejs-asset/issues/655)) ([25a9d42](https://github.com/googleapis/nodejs-asset/commit/25a9d42aa57e8a331aa115d6dcb7aa8bf16c4909))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-asset/issues/1546)) ([#651](https://github.com/googleapis/nodejs-asset/issues/651)) ([4fc24d0](https://github.com/googleapis/nodejs-asset/commit/4fc24d0bd85fca6d7a3b3b0e84f1b520d12d368d))
* use google-gax v3.3.0 ([25a9d42](https://github.com/googleapis/nodejs-asset/commit/25a9d42aa57e8a331aa115d6dcb7aa8bf16c4909))

## [4.2.0](https://github.com/googleapis/nodejs-asset/compare/v4.1.0...v4.2.0) (2022-08-23)


### Features

* Add client library support for AssetService v1 BatchGetEffectiveIamPolicies API ([201d2b8](https://github.com/googleapis/nodejs-asset/commit/201d2b8431b1c04ed1b6fd90dc22ec943474aed8))
* Add client library support for AssetService v1 BatchGetEffectiveIamPolicies API ([201d2b8](https://github.com/googleapis/nodejs-asset/commit/201d2b8431b1c04ed1b6fd90dc22ec943474aed8))
* Release of query system ([201d2b8](https://github.com/googleapis/nodejs-asset/commit/201d2b8431b1c04ed1b6fd90dc22ec943474aed8))


### Bug Fixes

* better support for fallback mode ([#646](https://github.com/googleapis/nodejs-asset/issues/646)) ([716c50e](https://github.com/googleapis/nodejs-asset/commit/716c50e0f0552419855d3fffd85a1d0a4fbdfe31))
* remove pip install statements ([#649](https://github.com/googleapis/nodejs-asset/issues/649)) ([981571d](https://github.com/googleapis/nodejs-asset/commit/981571dd4c85437a437a60596d401568b8c4debe))

## [4.1.0](https://github.com/googleapis/nodejs-asset/compare/v4.0.0...v4.1.0) (2022-06-29)


### Features

* support regapic LRO ([#635](https://github.com/googleapis/nodejs-asset/issues/635)) ([140ce9d](https://github.com/googleapis/nodejs-asset/commit/140ce9d312545671ad3f3f4bbcd4657081f2298e))

## [4.0.0](https://github.com/googleapis/nodejs-asset/compare/v3.23.1...v4.0.0) (2022-06-16)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#625)

### Features

* Add SavedQuery CURD support ([#627](https://github.com/googleapis/nodejs-asset/issues/627)) ([d3727de](https://github.com/googleapis/nodejs-asset/commit/d3727de308b7f42bf974b494d4f06d7b4fc91993))


### Bug Fixes

* **deps:** update dependency @google-cloud/bigquery to v6 ([#630](https://github.com/googleapis/nodejs-asset/issues/630)) ([d779420](https://github.com/googleapis/nodejs-asset/commit/d77942087598d508cdbe1786b6b6a01d5db46174))
* **deps:** update dependency @google-cloud/storage to v6 ([#629](https://github.com/googleapis/nodejs-asset/issues/629)) ([1fb5d23](https://github.com/googleapis/nodejs-asset/commit/1fb5d23a0384eb4f67c5c27c367c9dadda201dca))


### Build System

* update library to use Node 12 ([#625](https://github.com/googleapis/nodejs-asset/issues/625)) ([20eec3e](https://github.com/googleapis/nodejs-asset/commit/20eec3e3a5e23a469d08b0a9c415a9ad2d4c5b0d))

### [3.23.1](https://github.com/googleapis/nodejs-asset/compare/v3.23.0...v3.23.1) (2022-02-11)


### Bug Fixes

* Fix description of an interpreter field, validate if the field is not unspecified ([#604](https://github.com/googleapis/nodejs-asset/issues/604)) ([7cebebe](https://github.com/googleapis/nodejs-asset/commit/7cebebeae1b328289c68c590fd3738c89a59b74f))

## [3.23.0](https://github.com/googleapis/nodejs-asset/compare/v3.22.0...v3.23.0) (2022-02-08)


### Features

* Update osconfig v1 protos ([#602](https://github.com/googleapis/nodejs-asset/issues/602)) ([7816c8e](https://github.com/googleapis/nodejs-asset/commit/7816c8ec666cceeb06ac743904b888fa7f4af91a))

## [3.22.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.21.0...v3.22.0) (2021-11-12)


### Features

* Update OSConfig API ([#578](https://www.github.com/googleapis/nodejs-asset/issues/578)) ([8af0ac8](https://www.github.com/googleapis/nodejs-asset/commit/8af0ac8a915b8b72d379b4e2a14c888ef98dfcf1))

## [3.21.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.20.0...v3.21.0) (2021-11-09)


### Features

* OSConfig: add OS policy assignment rpcs ([#574](https://www.github.com/googleapis/nodejs-asset/issues/574)) ([ff9491d](https://www.github.com/googleapis/nodejs-asset/commit/ff9491d55bd527c451914b487ce08fed3068dbd8))

## [3.20.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.19.0...v3.20.0) (2021-10-19)


### Features

* Update osconfig v1 and v1alpha RecurringSchedule.Frequency with DAILY frequency ([#569](https://www.github.com/googleapis/nodejs-asset/issues/569)) ([af03fd5](https://www.github.com/googleapis/nodejs-asset/commit/af03fd5c4fba4a258acf4c0332991bcb619fa10b))

## [3.19.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.18.0...v3.19.0) (2021-09-07)


### Features

* add OSConfigZonalService API Committer: [@jaiminsh](https://www.github.com/jaiminsh) ([#553](https://www.github.com/googleapis/nodejs-asset/issues/553)) ([1ab2458](https://www.github.com/googleapis/nodejs-asset/commit/1ab2458b63ebe46b8aa8edbd2b1837e793d531f1))
* Release of relationships in v1, Add content type Relationship to support relationship search Committer: yuwangyw@ ([#551](https://www.github.com/googleapis/nodejs-asset/issues/551)) ([56526b0](https://www.github.com/googleapis/nodejs-asset/commit/56526b02d14d15fd6fc469cd614bff9098f3789b))

## [3.18.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.17.0...v3.18.0) (2021-08-30)


### Features

* Update osconfig v1 and v1alpha with WindowsApplication ([#548](https://www.github.com/googleapis/nodejs-asset/issues/548)) ([c096de8](https://www.github.com/googleapis/nodejs-asset/commit/c096de83a906953a08508a799014a37b2806da61))

## [3.17.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.16.1...v3.17.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#542](https://www.github.com/googleapis/nodejs-asset/issues/542)) ([4c4137f](https://www.github.com/googleapis/nodejs-asset/commit/4c4137f78ebdd870c027118d2d966149b7beb9b7))

### [3.16.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.16.0...v3.16.1) (2021-08-17)


### Bug Fixes

* **deps:** require google-gax v2.24.1 ([#538](https://www.github.com/googleapis/nodejs-asset/issues/538)) ([c6397db](https://www.github.com/googleapis/nodejs-asset/commit/c6397db52e9a6c4b43071c79b9809e9b874097a1))

## [3.16.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.5...v3.16.0) (2021-08-16)


### Features

* Release of relationships in v1, Add content type Relationship to support relationship export ([#537](https://www.github.com/googleapis/nodejs-asset/issues/537)) ([873aae6](https://www.github.com/googleapis/nodejs-asset/commit/873aae6f9b846a16b5695b692e8ad668d684dc6c))

### [3.15.5](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.4...v3.15.5) (2021-08-13)


### Bug Fixes

* failing tests for LRO check methods ([#530](https://www.github.com/googleapis/nodejs-asset/issues/530)) ([c756cd1](https://www.github.com/googleapis/nodejs-asset/commit/c756cd12f9c5b2133c15ddec68936f737c0fa77c))

### [3.15.4](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.3...v3.15.4) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#534](https://www.github.com/googleapis/nodejs-asset/issues/534)) ([30fa2c4](https://www.github.com/googleapis/nodejs-asset/commit/30fa2c48abe3de2a9482ea5bde9a4f315a726b89))

### [3.15.3](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.2...v3.15.3) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#522](https://www.github.com/googleapis/nodejs-asset/issues/522)) ([015b801](https://www.github.com/googleapis/nodejs-asset/commit/015b80196ecd3b6a0cba17ea0971f4c585b8f972))

### [3.15.2](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.1...v3.15.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#520](https://www.github.com/googleapis/nodejs-asset/issues/520)) ([24afa66](https://www.github.com/googleapis/nodejs-asset/commit/24afa6682619539c472da03ac813d915d62576b9))

### [3.15.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.15.0...v3.15.1) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#514](https://www.github.com/googleapis/nodejs-asset/issues/514)) ([85e0ebd](https://www.github.com/googleapis/nodejs-asset/commit/85e0ebd92f326ce52f3a920a8cea9d392ff821b5))

## [3.15.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.14.1...v3.15.0) (2021-06-30)


### Features

* add new searchable fields (memberTypes, roles, project, folders and organization), new request fields (assetTypes and orderBy) and new response fields (assetType, folders and organization) in SearchAllIamPolicies ([#511](https://www.github.com/googleapis/nodejs-asset/issues/511)) ([1dfb0e9](https://www.github.com/googleapis/nodejs-asset/commit/1dfb0e95c58fdfbca2807744ea22c52d3c6e7651))

### [3.14.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.14.0...v3.14.1) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#507](https://www.github.com/googleapis/nodejs-asset/issues/507)) ([07b6827](https://www.github.com/googleapis/nodejs-asset/commit/07b68273ea5522ae4c3a94b714f05ee7d32391ef))

## [3.14.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.13.0...v3.14.0) (2021-06-21)


### Features

* generate new surface for v1 ([#504](https://www.github.com/googleapis/nodejs-asset/issues/504)) ([e1c6350](https://www.github.com/googleapis/nodejs-asset/commit/e1c6350f09adb6ab1e420de4ce5a3a4fd4c8c252))

## [3.13.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.12.2...v3.13.0) (2021-05-26)


### Features

* add Cloud Asset List API, add access time as condition context in request and evaluation value in response for Cloud Asset AnalyzeIamPolicy API, add more info (folders, organizations, kms_key, create_time, update_time, state, parent_full_resource_name, parent_asset_type) in response for Cloud Asset SearchAllResources API ([#491](https://www.github.com/googleapis/nodejs-asset/issues/491)) ([8eea45f](https://www.github.com/googleapis/nodejs-asset/commit/8eea45fe3e5b528faf85a8ebb96e2c0c35a7e66d))

### [3.12.2](https://www.github.com/googleapis/nodejs-asset/compare/v3.12.1...v3.12.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#492](https://www.github.com/googleapis/nodejs-asset/issues/492)) ([f8f8ed6](https://www.github.com/googleapis/nodejs-asset/commit/f8f8ed67b1f71d2491c9f54eb2beb09475c5663d))

### [3.12.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.12.0...v3.12.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#481](https://www.github.com/googleapis/nodejs-asset/issues/481)) ([f6f890f](https://www.github.com/googleapis/nodejs-asset/commit/f6f890fa49a68b0b67556af8dae0ef9d52c43e34))
* use require() to load JSON protos ([#484](https://www.github.com/googleapis/nodejs-asset/issues/484)) ([1aa6fa9](https://www.github.com/googleapis/nodejs-asset/commit/1aa6fa96540f94bd51784357186db87b080fdfe5))

## [3.12.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.11.0...v3.12.0) (2021-02-09)


### Features

* **samples:** add samples for analyzeIamPolicy and analyzeIamPolicyLongrunning ([#433](https://www.github.com/googleapis/nodejs-asset/issues/433)) ([dfbd75c](https://www.github.com/googleapis/nodejs-asset/commit/dfbd75c98f2977d3a9af06e7637c005b82eda973))

## [3.11.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.10.0...v3.11.0) (2021-01-09)


### Features

* adds style enumeration ([#445](https://www.github.com/googleapis/nodejs-asset/issues/445)) ([28c3612](https://www.github.com/googleapis/nodejs-asset/commit/28c361225ab0cdc2d4b141b5ef02cac5f257a85b))

## [3.10.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.9.1...v3.10.0) (2020-12-02)


### Features

* added support OSInventory in Assets ([#436](https://www.github.com/googleapis/nodejs-asset/issues/436)) ([68298fd](https://www.github.com/googleapis/nodejs-asset/commit/68298fd9ebee3ae119bdb7dc6b848276804e2cda))

### [3.9.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.9.0...v3.9.1) (2020-11-12)


### Bug Fixes

* do not modify options object, use defaultScopes ([#419](https://www.github.com/googleapis/nodejs-asset/issues/419)) ([790ffd3](https://www.github.com/googleapis/nodejs-asset/commit/790ffd374b3bad580c2ba5dc5a7fd608d590cf32))

## [3.9.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.8.0...v3.9.0) (2020-11-02)


### Features

* add AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning RPCs ([#412](https://www.github.com/googleapis/nodejs-asset/issues/412)) ([43dde85](https://www.github.com/googleapis/nodejs-asset/commit/43dde85f123d0716b5c3b5aad3b3d1d8018399a6))

## [3.8.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.7.1...v3.8.0) (2020-09-16)


### Features

* added support for per type and partition export for Cloud Asset API ([#398](https://www.github.com/googleapis/nodejs-asset/issues/398)) ([6462767](https://www.github.com/googleapis/nodejs-asset/commit/64627674e3e23e79ff055ea845d884e8714ad023))

### [3.7.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.7.0...v3.7.1) (2020-09-13)


### ⚠ BREAKING CHANGES

* remove unused AnalyzeIamPolicy and ExportIamPolicyAnalysis RPCs (#393)

### Bug Fixes

* remove unused AnalyzeIamPolicy and ExportIamPolicyAnalysis RPCs ([#393](https://www.github.com/googleapis/nodejs-asset/issues/393)) ([5994b6c](https://www.github.com/googleapis/nodejs-asset/commit/5994b6c74705e71d660f60fbbbfa55fa21b6251f))
* remove unused AnalyzeIamPolicy and ExportIamPolicyAnalysis RPCs ([#395](https://www.github.com/googleapis/nodejs-asset/issues/395)) ([1d45e05](https://www.github.com/googleapis/nodejs-asset/commit/1d45e05b9241ba18fd906d5c9ac87653e1cc795d))
* **deps:** update dependency yargs to v16 ([#391](https://www.github.com/googleapis/nodejs-asset/issues/391)) ([ee124ce](https://www.github.com/googleapis/nodejs-asset/commit/ee124ce650607387263f432adcd2afdb1d6065ee))

## [3.7.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.6.0...v3.7.0) (2020-08-24)


### Features

* add AnalyzeIamPolicy and ExportIamPolicyAnalysis RPCs ([#386](https://www.github.com/googleapis/nodejs-asset/issues/386)) ([fa0981d](https://www.github.com/googleapis/nodejs-asset/commit/fa0981d949705814b790b2943d725ff4c118edc4))

## [3.6.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.5.1...v3.6.0) (2020-08-14)


### Features

* added support OutputResult in ExportAssetsResponse. docs: updated existing docs. ([#381](https://www.github.com/googleapis/nodejs-asset/issues/381)) ([fa8aadd](https://www.github.com/googleapis/nodejs-asset/commit/fa8aaddeadc21f1a7c343d208df21561ecb3ac8c))

### [3.5.1](https://www.github.com/googleapis/nodejs-asset/compare/v3.5.0...v3.5.1) (2020-07-27)


### Bug Fixes

* move gitattributes files to node templates ([#371](https://www.github.com/googleapis/nodejs-asset/issues/371)) ([e05f810](https://www.github.com/googleapis/nodejs-asset/commit/e05f810f0f15975d52fd9f6d62c8b194c8e96b5a))

## [3.5.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.4.0...v3.5.0) (2020-07-08)


### Features

* **samples:** add sample code for ListAssets v1p5beta1 ([#355](https://www.github.com/googleapis/nodejs-asset/issues/355)) ([1f4cef8](https://www.github.com/googleapis/nodejs-asset/commit/1f4cef8af558cc000aec52c4e92afc1774141c53))

## [3.4.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.3.0...v3.4.0) (2020-06-26)


### Features

* add v1p5beta1 API surface ([#349](https://www.github.com/googleapis/nodejs-asset/issues/349)) ([12b8ade](https://www.github.com/googleapis/nodejs-asset/commit/12b8ade2dee42b8578b0364d8876a6932288970c))

## [3.3.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.2.0...v3.3.0) (2020-06-17)


### Features

* added support for condition in Feed ([#346](https://www.github.com/googleapis/nodejs-asset/issues/346)) ([3508ee5](https://www.github.com/googleapis/nodejs-asset/commit/3508ee5a7cf7eead10e6d3e2c3df91487898d40e))

## [3.2.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.1.0...v3.2.0) (2020-06-16)


### Features

* move ts target to es2018 from es2016 ([#337](https://www.github.com/googleapis/nodejs-asset/issues/337)) ([0590785](https://www.github.com/googleapis/nodejs-asset/commit/0590785ac09c2459bc7c6eb77653a1a0696c27fe))


### Bug Fixes

* handle fallback option properly ([77f9ca7](https://www.github.com/googleapis/nodejs-asset/commit/77f9ca77f9e2d0ea13964ba61d69e2fac7c5e969))

## [3.1.0](https://www.github.com/googleapis/nodejs-asset/compare/v3.0.0...v3.1.0) (2020-06-04)


### Features

* add `SearchAllResources` and `SearchAllIamPolicies` rpcs in asset service proto ([#332](https://www.github.com/googleapis/nodejs-asset/issues/332)) ([2f896c4](https://www.github.com/googleapis/nodejs-asset/commit/2f896c4fc347823549bd0b38df39fa30c25663bc))
* added support for project id, order_by in SearchAllResources, search on location, labels and networkTags field ([321bc3a](https://www.github.com/googleapis/nodejs-asset/commit/321bc3ae0c187f29231037705a52ca4b805659ba))
* check status of long running operation by its name ([#328](https://www.github.com/googleapis/nodejs-asset/issues/328)) ([488a18b](https://www.github.com/googleapis/nodejs-asset/commit/488a18ba934dbd3902595a5d4ea783033486b040))
* clean proto list, add decoded function for longrunning method ([#327](https://www.github.com/googleapis/nodejs-asset/issues/327)) ([9e710b7](https://www.github.com/googleapis/nodejs-asset/commit/9e710b7a58132d2004ea8de0d1afdf2497ff702a))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#311](https://www.github.com/googleapis/nodejs-asset/issues/311)) ([999b782](https://www.github.com/googleapis/nodejs-asset/commit/999b7824a2acb1538b1502029d7055aef930206c))
* synth.py clean up for multiple version ([#326](https://www.github.com/googleapis/nodejs-asset/issues/326)) ([00e33b0](https://www.github.com/googleapis/nodejs-asset/commit/00e33b008089c8c1f7b8fba2eadef9ab744a75a6))
* **deps:** update dependency @google-cloud/storage to v5 ([#330](https://www.github.com/googleapis/nodejs-asset/issues/330)) ([238c11a](https://www.github.com/googleapis/nodejs-asset/commit/238c11abedd65bc896762383a753e3c9bc4acddf))
* **deps:** update dependency uuid to v8 ([#325](https://www.github.com/googleapis/nodejs-asset/issues/325)) ([dba0675](https://www.github.com/googleapis/nodejs-asset/commit/dba06757cbbcdcc244ae88197f01447176fc2ee3))

## [3.0.0](https://www.github.com/googleapis/nodejs-asset/compare/v2.2.0...v3.0.0) (2020-04-10)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* removed SearchResources and SearchIamPolicies from v1p1beta1 client

### Features

* add org policy and access context manager protos ([#304](https://www.github.com/googleapis/nodejs-asset/issues/304)) ([4d18cc7](https://www.github.com/googleapis/nodejs-asset/commit/4d18cc7ac2fc4d4bae9999291575e8c3a020947f))
* adds v1p4beta1 API surface ([#285](https://www.github.com/googleapis/nodejs-asset/issues/285)) ([9dee03a](https://www.github.com/googleapis/nodejs-asset/commit/9dee03a546df19ae1fc92f25f07f994e010f4ac4))
* deferred client initialization ([#281](https://www.github.com/googleapis/nodejs-asset/issues/281)) ([8148ab0](https://www.github.com/googleapis/nodejs-asset/commit/8148ab0e075c36e2c49d2af96791f83398529b87))
* drop node8 support, support for async iterators ([#299](https://www.github.com/googleapis/nodejs-asset/issues/299)) ([ae14ae8](https://www.github.com/googleapis/nodejs-asset/commit/ae14ae8fc84defbd65b06fdaaef94e07a1294e1b))
* removed SearchResources and SearchIamPolicies from v1p1beta1 client ([184fd2f](https://www.github.com/googleapis/nodejs-asset/commit/184fd2fd3ee9cc32312f671398992f3b453fb78d))


### Bug Fixes

* in rare cases test can take longer than 180,000 timeout ([#307](https://www.github.com/googleapis/nodejs-asset/issues/307)) ([8a528fa](https://www.github.com/googleapis/nodejs-asset/commit/8a528fac934ce8dd1378c06a89b52c5d76286a9b))

## [2.2.0](https://www.github.com/googleapis/nodejs-asset/compare/v2.1.0...v2.2.0) (2020-02-27)


### Features

* export protos in src/index.ts ([8f5e942](https://www.github.com/googleapis/nodejs-asset/commit/8f5e942bbe170dd2835c40c1d4354e822e2cbbce))


### Bug Fixes

* **deps:** update dependency uuid to v7 ([d83c322](https://www.github.com/googleapis/nodejs-asset/commit/d83c322d75e0b607cf019a837a040137a8925356))

## [2.1.0](https://www.github.com/googleapis/nodejs-asset/compare/v2.0.1...v2.1.0) (2020-02-13)


### Features

* bump release level to ga ([#264](https://www.github.com/googleapis/nodejs-asset/issues/264)) ([b432a76](https://www.github.com/googleapis/nodejs-asset/commit/b432a76f80b0499125cd091135bc1f215dbaae64))

### [2.0.1](https://www.github.com/googleapis/nodejs-asset/compare/v2.0.0...v2.0.1) (2020-02-10)


### Bug Fixes

* useless path template methods removed ([af1c939](https://www.github.com/googleapis/nodejs-asset/commit/af1c9398a284e62346758a1ce29f88e5f6692e67))

## [2.0.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.6.1...v2.0.0) (2020-01-30)


### ⚠ BREAKING CHANGES

* removes projectPath helper, instead use "projects/${project}".

### Features

* converts library to TypeScript adding v1p1beta1 surface ([#250](https://www.github.com/googleapis/nodejs-asset/issues/250)) ([54c1c48](https://www.github.com/googleapis/nodejs-asset/commit/54c1c48ebe364b665763fe056bd89401d11e020b))

### [1.6.1](https://www.github.com/googleapis/nodejs-asset/compare/v1.6.0...v1.6.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([21d58e1](https://www.github.com/googleapis/nodejs-asset/commit/21d58e1398b9af89a632083fa37e29a2157f3992))

## [1.6.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.5.0...v1.6.0) (2020-01-06)


### Features

* **samples:** update real time feed api sample code to use v1 API surface ([f15d2e2](https://www.github.com/googleapis/nodejs-asset/commit/f15d2e2cb4ff56bcc0fe5d83a090f5c92e4b25df))

## [1.5.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.4.2...v1.5.0) (2019-12-06)


### Features

* add plural and singular resource descriptor ([93c314d](https://www.github.com/googleapis/nodejs-asset/commit/93c314deee5e4b1a165f5126ca42a6b1568be148))
* adds CreateFeed, GetFeed, ListFeeds, UpdateFeed, DeleteFeed methods ([13903ae](https://www.github.com/googleapis/nodejs-asset/commit/13903aebf37840973a7bf2b7c0d35f36880bf612))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([10472c9](https://www.github.com/googleapis/nodejs-asset/commit/10472c9e4be30a9ad61ace224943808cb32c8813))
* **deps:** update dependency yargs to v15 ([#222](https://www.github.com/googleapis/nodejs-asset/issues/222)) ([a7beda9](https://www.github.com/googleapis/nodejs-asset/commit/a7beda95d9fdf6b55c019128a74e62f1410eeae4))

### [1.4.2](https://www.github.com/googleapis/nodejs-asset/compare/v1.4.1...v1.4.2) (2019-11-13)


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v4 ([#207](https://www.github.com/googleapis/nodejs-asset/issues/207)) ([1b67b50](https://www.github.com/googleapis/nodejs-asset/commit/1b67b5022ee6cdf59e51614e911c5e45e00efdf2))
* import long into proto ts declaration file ([#218](https://www.github.com/googleapis/nodejs-asset/issues/218)) ([00bc96e](https://www.github.com/googleapis/nodejs-asset/commit/00bc96e2944444b8ef5f61251202f42f5d54db72))
* **docs:** snippets are now replaced in jsdoc comments ([#217](https://www.github.com/googleapis/nodejs-asset/issues/217)) ([bec38ad](https://www.github.com/googleapis/nodejs-asset/commit/bec38ad74dc50251cfdc5f4ab1c37e7d3ab9704f))

### [1.4.1](https://www.github.com/googleapis/nodejs-asset/compare/v1.4.0...v1.4.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#208](https://www.github.com/googleapis/nodejs-asset/issues/208)) ([3803966](https://www.github.com/googleapis/nodejs-asset/commit/380396657e63cd69778eb42868149f5315dad69d))

## [1.4.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.3.0...v1.4.0) (2019-10-12)


### Features

* .d.ts for protos ([#197](https://www.github.com/googleapis/nodejs-asset/issues/197)) ([8f639cc](https://www.github.com/googleapis/nodejs-asset/commit/8f639cc1243bda24a83dd1005370a52eecd48654))
* add BigQuery destination and proto types ([#206](https://www.github.com/googleapis/nodejs-asset/issues/206)) ([3834c36](https://www.github.com/googleapis/nodejs-asset/commit/3834c36ae39f4f0d98b03c2163ea92fccd51fc2f))


### Bug Fixes

* use compatible version of google-gax ([332323f](https://www.github.com/googleapis/nodejs-asset/commit/332323ff561c8d7fa23b3344e00226defb51d435))

## [1.3.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.2.1...v1.3.0) (2019-09-16)


### Bug Fixes

* **docs:** remove reference-docs anchor ([812bdc4](https://www.github.com/googleapis/nodejs-asset/commit/812bdc4))


### Features

* load protos from JSON, grpc-fallback support ([abe6f81](https://www.github.com/googleapis/nodejs-asset/commit/abe6f81))

### [1.2.1](https://www.github.com/googleapis/nodejs-asset/compare/v1.2.0...v1.2.1) (2019-08-26)


### Bug Fixes

* **docs:** update READMEs with new samples ([#185](https://www.github.com/googleapis/nodejs-asset/issues/185)) ([775a5a0](https://www.github.com/googleapis/nodejs-asset/commit/775a5a0))

## [1.2.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.1.4...v1.2.0) (2019-08-20)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([e3e5872](https://www.github.com/googleapis/nodejs-asset/commit/e3e5872))


### Features

* introduce v1p2beta1 client ([#181](https://www.github.com/googleapis/nodejs-asset/issues/181)) ([675ae04](https://www.github.com/googleapis/nodejs-asset/commit/675ae04))

### [1.1.4](https://www.github.com/googleapis/nodejs-asset/compare/v1.1.3...v1.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([0015fbe](https://www.github.com/googleapis/nodejs-asset/commit/0015fbe))

### [1.1.3](https://www.github.com/googleapis/nodejs-asset/compare/v1.1.2...v1.1.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v3 ([#168](https://www.github.com/googleapis/nodejs-asset/issues/168)) ([6ba18e7](https://www.github.com/googleapis/nodejs-asset/commit/6ba18e7))

### [1.1.2](https://www.github.com/googleapis/nodejs-asset/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#163](https://www.github.com/googleapis/nodejs-asset/issues/163)) ([290862a](https://www.github.com/googleapis/nodejs-asset/commit/290862a))

### [1.1.1](https://www.github.com/googleapis/nodejs-asset/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#160](https://www.github.com/googleapis/nodejs-asset/issues/160)) ([d28147c](https://www.github.com/googleapis/nodejs-asset/commit/d28147c))

## [1.1.0](https://www.github.com/googleapis/nodejs-asset/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#157](https://www.github.com/googleapis/nodejs-asset/issues/157)) ([0da529e](https://www.github.com/googleapis/nodejs-asset/commit/0da529e))

## [1.0.0](https://www.github.com/googleapis/nodejs-asset/compare/v0.3.0...v1.0.0) (2019-05-11)


### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#132](https://www.github.com/googleapis/nodejs-asset/issues/132)) ([29dec78](https://www.github.com/googleapis/nodejs-asset/commit/29dec78))
* **deps:** update dependency google-gax to v1 ([#142](https://www.github.com/googleapis/nodejs-asset/issues/142)) ([c5d4508](https://www.github.com/googleapis/nodejs-asset/commit/c5d4508))
* include 'x-goog-request-params' header in requests ([#126](https://www.github.com/googleapis/nodejs-asset/issues/126)) ([ff57600](https://www.github.com/googleapis/nodejs-asset/commit/ff57600))


### Build System

* upgrade engines field to >=8.10.0 ([#134](https://www.github.com/googleapis/nodejs-asset/issues/134)) ([ad7814c](https://www.github.com/googleapis/nodejs-asset/commit/ad7814c))


### Features

* introduces 'expression text', deprecates version field ([#143](https://www.github.com/googleapis/nodejs-asset/issues/143)) ([4c35683](https://www.github.com/googleapis/nodejs-asset/commit/4c35683))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#134)

## v0.3.0

03-19-2019 11:42 PDT

This release ships the v1 version of the backend API.

Create the v1 client:

```javascript
const asset = require('@google-cloud/asset');
const client = new asset.v1.AssetServiceClient();
```

### New Features
- feat: add the v1 version of the API ([#120](https://github.com/googleapis/nodejs-asset/pull/120))

### Internal / Testing Changes
- build: use per-repo publish token ([#119](https://github.com/googleapis/nodejs-asset/pull/119))

## v0.2.1

03-13-2019 21:45 PDT

### Bug Fixes
- fix: throw on invalid credentials

### Documentation
- docs: use backticks for JS values ([#116](https://github.com/googleapis/nodejs-asset/pull/116))
- docs: update jsdoc samples and json import paths ([#115](https://github.com/googleapis/nodejs-asset/pull/115))
- docs: update links in contrib guide ([#108](https://github.com/googleapis/nodejs-asset/pull/108))
- docs: update contributing path in README ([#100](https://github.com/googleapis/nodejs-asset/pull/100))
- docs: move CONTRIBUTING.md to root ([#99](https://github.com/googleapis/nodejs-asset/pull/99))
- docs: add lint/fix example to contributing guide ([#97](https://github.com/googleapis/nodejs-asset/pull/97))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#113](https://github.com/googleapis/nodejs-asset/pull/113))
- build: use node10 to run samples-test, system-test etc ([#112](https://github.com/googleapis/nodejs-asset/pull/112))
- build: update release configuration
- chore: update proto formatting
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#107](https://github.com/googleapis/nodejs-asset/pull/107))
- fix(deps): update dependency yargs to v13 ([#105](https://github.com/googleapis/nodejs-asset/pull/105))
- build: create docs test npm scripts ([#104](https://github.com/googleapis/nodejs-asset/pull/104))
- build: test using @grpc/grpc-js in CI ([#103](https://github.com/googleapis/nodejs-asset/pull/103))
- chore: ignore cache directories ([#102](https://github.com/googleapis/nodejs-asset/pull/102))
- refactor: improve generated code style. ([#96](https://github.com/googleapis/nodejs-asset/pull/96))

## v0.2.0

01-31-2019 10:32 PST

### Implementation Changes
- refactor: remove unused IAM protobuf objects ([#83](https://github.com/googleapis/nodejs-asset/pull/83))
- refactor: drop requirement of setting GCLOUD_PROJECT ([#81](https://github.com/googleapis/nodejs-asset/pull/81))

### New Features
- fix(proto): add support for folders ([#90](https://github.com/googleapis/nodejs-asset/pull/90))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#94](https://github.com/googleapis/nodejs-asset/pull/94))

### Documentation
- fix(docs): www discovery link ([#87](https://github.com/googleapis/nodejs-asset/pull/87))
- fix(docs): broken links in README.md ([#84](https://github.com/googleapis/nodejs-asset/pull/84))

## v0.1.1

12-04-2018 14:41 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#49](https://github.com/googleapis/nodejs-asset/pull/49))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#47](https://github.com/googleapis/nodejs-asset/pull/47))
- chore(deps): update dependency through2 to v3 ([#44](https://github.com/googleapis/nodejs-asset/pull/44))
- chore(deps): update dependency eslint-plugin-node to v8 ([#36](https://github.com/googleapis/nodejs-asset/pull/36))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#21](https://github.com/googleapis/nodejs-asset/pull/21))

### Documentation
- sample: Add quickstart sample code for BatchGetAsstesHistory. ([#59](https://github.com/googleapis/nodejs-asset/pull/59))
- refactor(samples): convert sample tests from ava to mocha ([#56](https://github.com/googleapis/nodejs-asset/pull/56))
- docs: update README.md with correct links ([#66](https://github.com/googleapis/nodejs-asset/pull/66))
- docs: update readme badges ([#63](https://github.com/googleapis/nodejs-asset/pull/63))
- docs: Fix 404 link to product reference docs. ([#62](https://github.com/googleapis/nodejs-asset/pull/62))
- docs(samples): add quickstart code for ExportAssets ([#50](https://github.com/googleapis/nodejs-asset/pull/50))

### Internal / Testing Changes
- chore: update license file ([#65](https://github.com/googleapis/nodejs-asset/pull/65))
- fix(build): fix system key decryption ([#60](https://github.com/googleapis/nodejs-asset/pull/60))
- fix: fix the lint rules ([#58](https://github.com/googleapis/nodejs-asset/pull/58))
- chore: do a little lint cleanup ([#53](https://github.com/googleapis/nodejs-asset/pull/53))
- chore: add synth.metadata
- chore: update eslintignore config ([#48](https://github.com/googleapis/nodejs-asset/pull/48))
- chore: drop contributors from multiple places ([#46](https://github.com/googleapis/nodejs-asset/pull/46))
- chore: use latest npm on Windows ([#45](https://github.com/googleapis/nodejs-asset/pull/45))
- chore: update CircleCI config ([#43](https://github.com/googleapis/nodejs-asset/pull/43))
- chore: include build in eslintignore ([#40](https://github.com/googleapis/nodejs-asset/pull/40))
- chore: update issue templates ([#35](https://github.com/googleapis/nodejs-asset/pull/35))
- chore: remove old issue template ([#33](https://github.com/googleapis/nodejs-asset/pull/33))
- build: run tests on node11 ([#32](https://github.com/googleapis/nodejs-asset/pull/32))
- chores(build): run codecov on continuous builds ([#29](https://github.com/googleapis/nodejs-asset/pull/29))
- chores(build): do not collect sponge.xml from windows builds ([#30](https://github.com/googleapis/nodejs-asset/pull/30))
- chore: update new issue template ([#28](https://github.com/googleapis/nodejs-asset/pull/28))
- build: fix codecov uploading on Kokoro ([#24](https://github.com/googleapis/nodejs-asset/pull/24))
- Update CI config ([#22](https://github.com/googleapis/nodejs-asset/pull/22))
- Update CI config and move to const ([#19](https://github.com/googleapis/nodejs-asset/pull/19))
- test: remove appveyor config ([#17](https://github.com/googleapis/nodejs-asset/pull/17))
- Fix the linter ([#16](https://github.com/googleapis/nodejs-asset/pull/16))
- Enable prefer-const in the eslint config ([#15](https://github.com/googleapis/nodejs-asset/pull/15))

## v0.1.0

Initial release of the Cloud Asset API.
