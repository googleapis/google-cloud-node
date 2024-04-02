# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datastore?activeTab=versions

## [8.7.0](https://github.com/googleapis/nodejs-datastore/compare/v8.6.0...v8.7.0) (2024-04-02)


### Features

* Add several fields to manage state of database encryption update ([#1243](https://github.com/googleapis/nodejs-datastore/issues/1243)) ([5d28cda](https://github.com/googleapis/nodejs-datastore/commit/5d28cda744c3bb11da5e72ea8a0f7d8d8e85c4b0))

## [8.6.0](https://github.com/googleapis/nodejs-datastore/compare/v8.5.0...v8.6.0) (2024-03-25)


### Features

* Add new types ExplainOptions, ExplainMetrics, PlanSummary, ExecutionStats ([#1241](https://github.com/googleapis/nodejs-datastore/issues/1241)) ([6c409d5](https://github.com/googleapis/nodejs-datastore/commit/6c409d5c922288bd8286917b266cdb553cfd43cf))
* Nodejs transaction redesign feature branch ([#1235](https://github.com/googleapis/nodejs-datastore/issues/1235)) ([1585d4a](https://github.com/googleapis/nodejs-datastore/commit/1585d4a4e1b4b16d198307a3e97ffcf156d000b1))


### Bug Fixes

* **deps:** Update dependency async-mutex to ^0.5.0 ([#1240](https://github.com/googleapis/nodejs-datastore/issues/1240)) ([0ba1281](https://github.com/googleapis/nodejs-datastore/commit/0ba1281efe16ef0b725937627445c32c36b9f705))

## [8.5.0](https://github.com/googleapis/nodejs-datastore/compare/v8.4.0...v8.5.0) (2024-02-06)


### Features

* Trusted Private Cloud support, use the universeDomain parameter ([#1227](https://github.com/googleapis/nodejs-datastore/issues/1227)) ([10480ed](https://github.com/googleapis/nodejs-datastore/commit/10480edfdda99cde5fef470fbf163861528398a0))

## [8.4.0](https://github.com/googleapis/nodejs-datastore/compare/v8.3.0...v8.4.0) (2024-01-09)


### Features

* Add new types QueryMode, QueryPlan, ResultSetStats ([#1216](https://github.com/googleapis/nodejs-datastore/issues/1216)) ([49c1462](https://github.com/googleapis/nodejs-datastore/commit/49c14626271c45473d73b07cda39a288017f1432))

## [8.3.0](https://github.com/googleapis/nodejs-datastore/compare/v8.2.2...v8.3.0) (2023-12-11)


### Features

* Allow the user to set fallback to rest ([#1203](https://github.com/googleapis/nodejs-datastore/issues/1203)) ([8a1fa54](https://github.com/googleapis/nodejs-datastore/commit/8a1fa54e3873230256895c48b8b9c6889f75dd98))


### Bug Fixes

* Change tests to use new filter and use gax warn for warning just once ([#1185](https://github.com/googleapis/nodejs-datastore/issues/1185)) ([532711b](https://github.com/googleapis/nodejs-datastore/commit/532711bfd19b1a12844b02fd314f1703be4b0125))
* **deps:** Update dependency sinon to v17 ([#1183](https://github.com/googleapis/nodejs-datastore/issues/1183)) ([52adb5e](https://github.com/googleapis/nodejs-datastore/commit/52adb5e13ddc123c2bed33df76be76760d33c06e))

## [8.2.2](https://github.com/googleapis/nodejs-datastore/compare/v8.2.1...v8.2.2) (2023-10-17)


### Bug Fixes

* **deps:** Update google-gax ([#1173](https://github.com/googleapis/nodejs-datastore/issues/1173)) ([8237b15](https://github.com/googleapis/nodejs-datastore/commit/8237b152aa906cac55117cdeaf7a8bda85e94ac7))

## [8.2.1](https://github.com/googleapis/nodejs-datastore/compare/v8.2.0...v8.2.1) (2023-10-03)


### Bug Fixes

* Make aggregation query requests run properly inside a transaction ([#1166](https://github.com/googleapis/nodejs-datastore/issues/1166)) ([263804b](https://github.com/googleapis/nodejs-datastore/commit/263804b768322de39bf87b4c5265c303a2bda173))

## [8.2.0](https://github.com/googleapis/nodejs-datastore/compare/v8.1.0...v8.2.0) (2023-10-02)


### Features

* Support for using multiple databases in datastore ([#1090](https://github.com/googleapis/nodejs-datastore/issues/1090)) ([10ce563](https://github.com/googleapis/nodejs-datastore/commit/10ce563dae7e1164d3ee23a5887265c9de7b106f))


### Bug Fixes

* Allow users to set environment variable to connect to emulator running on docker ([#1164](https://github.com/googleapis/nodejs-datastore/issues/1164)) ([a41741b](https://github.com/googleapis/nodejs-datastore/commit/a41741b1412b1854aeecbe50441aa85015c3d399))
* Check property existence for exclude from indexes with wildcard ([#1114](https://github.com/googleapis/nodejs-datastore/issues/1114)) ([e6b8ef7](https://github.com/googleapis/nodejs-datastore/commit/e6b8ef74ff10107943d0ae194f9a8d540d8557c1))
* **deps:** Update dependency sinon to v16 ([#1150](https://github.com/googleapis/nodejs-datastore/issues/1150)) ([0d8b715](https://github.com/googleapis/nodejs-datastore/commit/0d8b7153fc156a4b55e965f39161bd5c19bffff6))

## [8.1.0](https://github.com/googleapis/nodejs-datastore/compare/v8.0.0...v8.1.0) (2023-09-07)


### Features

* Sum and average aggregation queries ([#1097](https://github.com/googleapis/nodejs-datastore/issues/1097)) ([44ba6f8](https://github.com/googleapis/nodejs-datastore/commit/44ba6f8f84ef3e33aa1c07b0808a42bcf871b8c6))


### Bug Fixes

* Simplify logic for HTTP/1.1 REST fallback option ([#1138](https://github.com/googleapis/nodejs-datastore/issues/1138)) ([4cefaea](https://github.com/googleapis/nodejs-datastore/commit/4cefaeab2ee8af800303f09495883aa1a5a28632))

## [8.0.0](https://github.com/googleapis/nodejs-datastore/compare/v7.5.1...v8.0.0) (2023-08-09)


### ⚠ BREAKING CHANGES

* upgrade to Node 14

### Miscellaneous Chores

* Upgrade to Node 14 ([b7904f1](https://github.com/googleapis/nodejs-datastore/commit/b7904f12b1d398a5b0e6fefc2a002c404f9e7d3d))

## [7.5.1](https://github.com/googleapis/nodejs-datastore/compare/v7.5.0...v7.5.1) (2023-04-11)


### Bug Fixes

* Allow user to set custom endpoints ([#1101](https://github.com/googleapis/nodejs-datastore/issues/1101)) ([e79fa49](https://github.com/googleapis/nodejs-datastore/commit/e79fa49f753984e34b63538005f29ab7efb7695e))

## [7.5.0](https://github.com/googleapis/nodejs-datastore/compare/v7.4.0...v7.5.0) (2023-03-29)


### Features

* Add SUM/AVG aggregation query support in the preview branch and improve query API documentation ([#1094](https://github.com/googleapis/nodejs-datastore/issues/1094)) ([d14f87e](https://github.com/googleapis/nodejs-datastore/commit/d14f87ed4aaef42090673fbe78b23992093925ad))


### Bug Fixes

* Allow IN queries on __key__ ([#1085](https://github.com/googleapis/nodejs-datastore/issues/1085)) ([dd2d5f4](https://github.com/googleapis/nodejs-datastore/commit/dd2d5f4d15f714b3f3586250802fb6822b7e01ff))

## [7.4.0](https://github.com/googleapis/nodejs-datastore/compare/v7.3.2...v7.4.0) (2023-03-09)


### Features

* Introduce EntityFilter class with support for and/or filters ([#1061](https://github.com/googleapis/nodejs-datastore/issues/1061)) ([8fc58c0](https://github.com/googleapis/nodejs-datastore/commit/8fc58c0f18e5333f996099e09ec673e9bf3460af))


### Bug Fixes

* Or filters with warnings ([#1075](https://github.com/googleapis/nodejs-datastore/issues/1075)) ([73bfcc4](https://github.com/googleapis/nodejs-datastore/commit/73bfcc40129309b512627f873d9f841f7ad370ee))

## [7.3.2](https://github.com/googleapis/nodejs-datastore/compare/v7.3.1...v7.3.2) (2023-02-17)


### Bug Fixes

* Allow filtering null values ([#1067](https://github.com/googleapis/nodejs-datastore/issues/1067)) ([b89fa21](https://github.com/googleapis/nodejs-datastore/commit/b89fa211b366ec3e24ea5b2c8deeb90c695aa0df))

## [7.3.1](https://github.com/googleapis/nodejs-datastore/compare/v7.3.0...v7.3.1) (2023-02-17)


### Bug Fixes

* **deps:** Roll back dependency @google-cloud/datastore to ^7.2.0 ([#1069](https://github.com/googleapis/nodejs-datastore/issues/1069)) ([1677c53](https://github.com/googleapis/nodejs-datastore/commit/1677c53b612799a90c455636ac19e081ff3730b3))

## [7.3.0](https://github.com/googleapis/nodejs-datastore/compare/v7.2.0...v7.3.0) (2023-02-16)


### Features

* Add `OR` query support ([#1064](https://github.com/googleapis/nodejs-datastore/issues/1064)) ([196bdaf](https://github.com/googleapis/nodejs-datastore/commit/196bdafb27b6987ccbf547e480b008aee65775d0))

## [7.2.0](https://github.com/googleapis/nodejs-datastore/compare/v7.1.0...v7.2.0) (2023-02-09)


### Features

* Add dynamic routing header annotation to DatastoreV1 ([b023ab4](https://github.com/googleapis/nodejs-datastore/commit/b023ab47146159c32ebc64dd09da681ad09c4081))
* Added Snooze API support ([b023ab4](https://github.com/googleapis/nodejs-datastore/commit/b023ab47146159c32ebc64dd09da681ad09c4081))
* Added SuggestConversationSummary RPC ([b023ab4](https://github.com/googleapis/nodejs-datastore/commit/b023ab47146159c32ebc64dd09da681ad09c4081))
* New transaction options for datastoreV1 ([b023ab4](https://github.com/googleapis/nodejs-datastore/commit/b023ab47146159c32ebc64dd09da681ad09c4081))


### Bug Fixes

* **deps:** Update dependency sinon to v15 ([#1020](https://github.com/googleapis/nodejs-datastore/issues/1020)) ([a61258c](https://github.com/googleapis/nodejs-datastore/commit/a61258c92354df5a62cf6e7d6977f8f83bfd907f))

## [7.1.0](https://github.com/googleapis/nodejs-datastore/compare/v7.0.0...v7.1.0) (2023-01-18)


### Features

* Add datastore aggregation query APIs ([#1008](https://github.com/googleapis/nodejs-datastore/issues/1008)) ([d5c2cb1](https://github.com/googleapis/nodejs-datastore/commit/d5c2cb1f0725f3cce1dde5b80ac7aff55b605f9a))
* Add the count aggregate function ([#972](https://github.com/googleapis/nodejs-datastore/issues/972)) ([76adfc6](https://github.com/googleapis/nodejs-datastore/commit/76adfc6db03a4196999a8d510c0ab1ca15218f24))
* Snapshot reads ([#963](https://github.com/googleapis/nodejs-datastore/issues/963)) ([0ecca86](https://github.com/googleapis/nodejs-datastore/commit/0ecca862fd93fc668a3dd3f5c93c54724e43f055))
* Support regapic LRO ([#957](https://github.com/googleapis/nodejs-datastore/issues/957)) ([99778fb](https://github.com/googleapis/nodejs-datastore/commit/99778fb5e031eadd067b1ae9be0f910985966956))


### Bug Fixes

* Allow passing gax instance to client constructor ([#974](https://github.com/googleapis/nodejs-datastore/issues/974)) ([386b9c7](https://github.com/googleapis/nodejs-datastore/commit/386b9c735d57ce23f004ba3e9b1eb9a9377622dc))
* Better support for fallback mode ([#967](https://github.com/googleapis/nodejs-datastore/issues/967)) ([0447d87](https://github.com/googleapis/nodejs-datastore/commit/0447d87ec162d64988d47e2fb21715dea78b6720))
* Bring back LRO mixin ([#1009](https://github.com/googleapis/nodejs-datastore/issues/1009)) ([1d8de5f](https://github.com/googleapis/nodejs-datastore/commit/1d8de5f6bc5015dadd4be635748e799f05bfd325))
* Change import long to require ([#968](https://github.com/googleapis/nodejs-datastore/issues/968)) ([5e710f2](https://github.com/googleapis/nodejs-datastore/commit/5e710f2c47001114ad087084507ad6d494143f1b))
* **deps:** Update dependency @google-cloud/promisify to v3 ([#942](https://github.com/googleapis/nodejs-datastore/issues/942)) ([7b35856](https://github.com/googleapis/nodejs-datastore/commit/7b35856b0568571d5bcad70b2464344e6c06a4cb))
* **deps:** Use google-gax v3.5.2 ([#1013](https://github.com/googleapis/nodejs-datastore/issues/1013)) ([1753eae](https://github.com/googleapis/nodejs-datastore/commit/1753eae467bff477e7991f74acbe3000656a955f))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-datastore/issues/1553)) ([#973](https://github.com/googleapis/nodejs-datastore/issues/973)) ([9550bbc](https://github.com/googleapis/nodejs-datastore/commit/9550bbcc10912ca28b64a89153f3ae8e7862d939))
* Preserve default values in x-goog-request-params header ([#979](https://github.com/googleapis/nodejs-datastore/issues/979)) ([2b80e1e](https://github.com/googleapis/nodejs-datastore/commit/2b80e1ef691a340ed15e3105983cd34983b57cb1))
* Regenerated protos JS and TS definitions ([#1016](https://github.com/googleapis/nodejs-datastore/issues/1016)) ([d0ae656](https://github.com/googleapis/nodejs-datastore/commit/d0ae656ca83fbad0be5659d8d4516d8bde879a28))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-datastore/issues/1546)) ([#970](https://github.com/googleapis/nodejs-datastore/issues/970)) ([2225fc7](https://github.com/googleapis/nodejs-datastore/commit/2225fc7753086243778c240a444c4940c29c5499))
* Use google-gax v3.3.0 ([9550bbc](https://github.com/googleapis/nodejs-datastore/commit/9550bbcc10912ca28b64a89153f3ae8e7862d939))

## [7.0.0](https://github.com/googleapis/nodejs-datastore/compare/v6.6.2...v7.0.0) (2022-06-13)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#945)

### Features

* add IN/NOT_IN/NOT_EQUALS support to cloud datastore proto ([6f22f0f](https://github.com/googleapis/nodejs-datastore/commit/6f22f0f473de8a5b07addc83523a6215e165563d))
* define Datastore -> Firestore in Datastore mode migration long running operation metadata ([#907](https://github.com/googleapis/nodejs-datastore/issues/907)) ([652f66d](https://github.com/googleapis/nodejs-datastore/commit/652f66d2f88d80c900499890e7dd474cdbbc9c0b))
* expose new read_time API fields, currently only available in private preview ([#932](https://github.com/googleapis/nodejs-datastore/issues/932)) ([aef00f8](https://github.com/googleapis/nodejs-datastore/commit/aef00f81864598fbd18b96dbf6986e3147d2a7a0))
* Query filters for datastore ([#936](https://github.com/googleapis/nodejs-datastore/issues/936)) ([51725fa](https://github.com/googleapis/nodejs-datastore/commit/51725fab85cb1fcc231c71f6e8f56d58e958f676))


### Bug Fixes

* **deps:** update dependency sinon to v13 ([#918](https://github.com/googleapis/nodejs-datastore/issues/918)) ([fa01bd4](https://github.com/googleapis/nodejs-datastore/commit/fa01bd43ba1733a17411c071850c45de2b3ecd90))
* **deps:** update dependency sinon to v14 ([#943](https://github.com/googleapis/nodejs-datastore/issues/943)) ([e117702](https://github.com/googleapis/nodejs-datastore/commit/e1177025eb3b6f2c6b1c20e3e83ad478c8eff366))
* fixes for dynamic routing and streaming descriptors ([#947](https://github.com/googleapis/nodejs-datastore/issues/947)) ([ba6c190](https://github.com/googleapis/nodejs-datastore/commit/ba6c1902ba5ce19df651ed49d1d9a911c598fe5d))


### Build System

* update library to use Node 12 ([#945](https://github.com/googleapis/nodejs-datastore/issues/945)) ([eecf7ac](https://github.com/googleapis/nodejs-datastore/commit/eecf7ac37597ec4a84a1f4ceb9421764fddd1d0b))

### [6.6.2](https://www.github.com/googleapis/nodejs-datastore/compare/v6.6.1...v6.6.2) (2021-11-08)


### Bug Fixes

* **cloud-rad:** move comments for TSDoc ([#896](https://www.github.com/googleapis/nodejs-datastore/issues/896)) ([2941f2f](https://www.github.com/googleapis/nodejs-datastore/commit/2941f2f0f132b41534e303d441d837051ce88fd7))

### [6.6.1](https://www.github.com/googleapis/nodejs-datastore/compare/v6.6.0...v6.6.1) (2021-11-04)


### Bug Fixes

* **deps:** update dependency sinon to v12 ([#894](https://www.github.com/googleapis/nodejs-datastore/issues/894)) ([6010464](https://www.github.com/googleapis/nodejs-datastore/commit/60104649455aefdfba100a9e5c57543faf9278fb))

## [6.6.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.5.0...v6.6.0) (2021-10-13)


### Features

* update retry and timeout logic for generated async/stream ([#883](https://www.github.com/googleapis/nodejs-datastore/issues/883)) ([cd3ae5c](https://www.github.com/googleapis/nodejs-datastore/commit/cd3ae5c12eddac3cc1149308c96cf9a8b0265e21))

## [6.5.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.8...v6.5.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#869](https://www.github.com/googleapis/nodejs-datastore/issues/869)) ([a42c88e](https://www.github.com/googleapis/nodejs-datastore/commit/a42c88e1b87ffcf38b1c45e94a846d1defb8fda2))

### [6.4.8](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.7...v6.4.8) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#866](https://www.github.com/googleapis/nodejs-datastore/issues/866)) ([85844a4](https://www.github.com/googleapis/nodejs-datastore/commit/85844a4ff618fcb96c00802941d72135fc65bb98))
* **deps:** google-gax v2.24.1 ([#868](https://www.github.com/googleapis/nodejs-datastore/issues/868)) ([1c0d40f](https://www.github.com/googleapis/nodejs-datastore/commit/1c0d40f27789d7f923b1a004d2b3589269969c93))

### [6.4.7](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.6...v6.4.7) (2021-07-26)


### Bug Fixes

* drop dependency on pumpify ([#860](https://www.github.com/googleapis/nodejs-datastore/issues/860)) ([f3d4fd9](https://www.github.com/googleapis/nodejs-datastore/commit/f3d4fd97de3c90550977a096667088d063b51623))

### [6.4.6](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.5...v6.4.6) (2021-07-19)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#855](https://www.github.com/googleapis/nodejs-datastore/issues/855)) ([1cdba8c](https://www.github.com/googleapis/nodejs-datastore/commit/1cdba8cc446b592170a8e404b24e09845524f50a))

### [6.4.5](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.4...v6.4.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#853](https://www.github.com/googleapis/nodejs-datastore/issues/853)) ([67b47ce](https://www.github.com/googleapis/nodejs-datastore/commit/67b47cee28f317ea5e4a3e24bd4def2189496dff))

### [6.4.4](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.3...v6.4.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#849](https://www.github.com/googleapis/nodejs-datastore/issues/849)) ([76fa921](https://www.github.com/googleapis/nodejs-datastore/commit/76fa9217732060e2e408a49d9b6aaa7606ce13e6))

### [6.4.3](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.2...v6.4.3) (2021-06-30)


### Bug Fixes

* Resolve getProjectId ([#848](https://www.github.com/googleapis/nodejs-datastore/issues/848)) ([9bfa885](https://www.github.com/googleapis/nodejs-datastore/commit/9bfa8857e832435112a38c8ab35f21d9054fbaa5))

### [6.4.2](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.1...v6.4.2) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#843](https://www.github.com/googleapis/nodejs-datastore/issues/843)) ([d025627](https://www.github.com/googleapis/nodejs-datastore/commit/d0256278d1003a789c8b9ca082f923c5999b3257))

### [6.4.1](https://www.github.com/googleapis/nodejs-datastore/compare/v6.4.0...v6.4.1) (2021-06-10)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#825](https://www.github.com/googleapis/nodejs-datastore/issues/825)) ([0dee08a](https://www.github.com/googleapis/nodejs-datastore/commit/0dee08a912620c114ddfcf38a1d0636893f6f15a))
* **deps:** update dependency sinon to v11 ([#832](https://www.github.com/googleapis/nodejs-datastore/issues/832)) ([d32610c](https://www.github.com/googleapis/nodejs-datastore/commit/d32610cdbe08151effc1a8d4b74540e68cbf4012))

## [6.4.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.3.1...v6.4.0) (2021-04-29)


### Features

* Add createIndex, deleteIndex protos ([#797](https://www.github.com/googleapis/nodejs-datastore/issues/797)) ([3ff1f51](https://www.github.com/googleapis/nodejs-datastore/commit/3ff1f51f19297db94a370ec3fc9130f36e25ea70))


### Bug Fixes

* **deps:** update dependency sinon to v10 ([#810](https://www.github.com/googleapis/nodejs-datastore/issues/810)) ([267992f](https://www.github.com/googleapis/nodejs-datastore/commit/267992f4f1523fc5038715b009ebc697c5ca8255))

### [6.3.1](https://www.github.com/googleapis/nodejs-datastore/compare/v6.3.0...v6.3.1) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#768](https://www.github.com/googleapis/nodejs-datastore/issues/768)) ([282dc99](https://www.github.com/googleapis/nodejs-datastore/commit/282dc99bd78ff086f57fca1a22ce530d44784dd7))
* storing an empty Buffer ([#767](https://www.github.com/googleapis/nodejs-datastore/issues/767)) ([cf88927](https://www.github.com/googleapis/nodejs-datastore/commit/cf88927998ada76614fbe500c6e59e0d81c1b78b))

## [6.3.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.2.0...v6.3.0) (2020-11-09)


### Features

* export Key and Entity ([#749](https://www.github.com/googleapis/nodejs-datastore/issues/749)) ([f4c8d0b](https://www.github.com/googleapis/nodejs-datastore/commit/f4c8d0b9cf172a39fbe9ce1906775418d16c1852)), closes [#568](https://www.github.com/googleapis/nodejs-datastore/issues/568)


### Bug Fixes

* do not modify options object, use defaultScopes ([#751](https://www.github.com/googleapis/nodejs-datastore/issues/751)) ([07a77fe](https://www.github.com/googleapis/nodejs-datastore/commit/07a77fe0f69aecb378c965f403226b29fde57360))

## [6.2.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.1.1...v6.2.0) (2020-10-08)


### Features

* introduce import/export + Index class ([#734](https://www.github.com/googleapis/nodejs-datastore/issues/734)) ([e329095](https://www.github.com/googleapis/nodejs-datastore/commit/e329095cb363989e11a1793a0b49ebcadd7a9093))

### [6.1.1](https://www.github.com/googleapis/nodejs-datastore/compare/v6.1.0...v6.1.1) (2020-09-12)


### Bug Fixes

* split insert, update, upsert ([#693](https://www.github.com/googleapis/nodejs-datastore/issues/693)) ([fa5faac](https://www.github.com/googleapis/nodejs-datastore/commit/fa5faacb16b8c021314348acc5534e1802e0826e))

## [6.1.0](https://www.github.com/googleapis/nodejs-datastore/compare/v6.0.0...v6.1.0) (2020-07-06)


### Features

* move ts target to es2018 from es2016 ([#677](https://www.github.com/googleapis/nodejs-datastore/issues/677)) ([e881610](https://www.github.com/googleapis/nodejs-datastore/commit/e8816109db9a9b8f3b7d079eb542954572847364))
* **synth:** add datastore v1 admin api ([#686](https://www.github.com/googleapis/nodejs-datastore/issues/686)) ([25d6582](https://www.github.com/googleapis/nodejs-datastore/commit/25d6582911ad2596629565af3761a6756a6fd138))


### Bug Fixes

* null value while inserting in array ([#682](https://www.github.com/googleapis/nodejs-datastore/issues/682)) ([c60fe43](https://www.github.com/googleapis/nodejs-datastore/commit/c60fe437c8e3ce1bdebb191b5623b099bf43dc58))
* proper fallback option handling ([#684](https://www.github.com/googleapis/nodejs-datastore/issues/684)) ([feba866](https://www.github.com/googleapis/nodejs-datastore/commit/feba866be528785e3b9048eb3cf0f67f121fd4ee))

## [6.0.0](https://www.github.com/googleapis/nodejs-datastore/compare/v5.1.0...v6.0.0) (2020-05-27)


### ⚠ BREAKING CHANGES

* The `Datastore.projectId` property has been removed, and replaced with an asynchronous `getProjectid()` method.  The projectId cannot be determined synchronously, so the previous approach was to use a `{{projectId}}` string placeholder if the projectId had not yet been acquired.  This made it difficult to know exactly when the property would be defined.  
* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* add async getProjectId method ([#657](https://www.github.com/googleapis/nodejs-datastore/issues/657)) ([2a7e034](https://www.github.com/googleapis/nodejs-datastore/commit/2a7e034e60f54100c5773d2d4dbe4dec6a721689))
* add options param to query#runStream ([#611](https://www.github.com/googleapis/nodejs-datastore/issues/611)) ([7429c9d](https://www.github.com/googleapis/nodejs-datastore/commit/7429c9dbbdf4ed6715f04fa87cffec9bda8a97be))
* drop node8 support ([#637](https://www.github.com/googleapis/nodejs-datastore/issues/637)) ([7ef38c1](https://www.github.com/googleapis/nodejs-datastore/commit/7ef38c1ade25f19f328290a3f69370676c80f021))


### Bug Fixes

* **deps:** update dependency @google-cloud/projectify to v2 ([#626](https://www.github.com/googleapis/nodejs-datastore/issues/626)) ([27fa23f](https://www.github.com/googleapis/nodejs-datastore/commit/27fa23fee0c0daa2e60ddd476aaad43877a05ea4))
* **deps:** update dependency @google-cloud/promisify to v2 ([#625](https://www.github.com/googleapis/nodejs-datastore/issues/625)) ([1d64bc1](https://www.github.com/googleapis/nodejs-datastore/commit/1d64bc1bed7561bc93371cb7ca785fa1cc176f1f))
* remove eslint, update gax, fix generated protos, run the generator ([#644](https://www.github.com/googleapis/nodejs-datastore/issues/644)) ([fcc5309](https://www.github.com/googleapis/nodejs-datastore/commit/fcc530933af25f1c40cfe0a7186a7e5f25a3f6bd))
* **deps:** update dependency @grpc/grpc-js to v0.7.1 ([#615](https://www.github.com/googleapis/nodejs-datastore/issues/615)) ([3e83981](https://www.github.com/googleapis/nodejs-datastore/commit/3e83981f3da83143eb9b76f32e563683704f8d99))
* identify propertyName ([#614](https://www.github.com/googleapis/nodejs-datastore/issues/614)) ([3635e13](https://www.github.com/googleapis/nodejs-datastore/commit/3635e138f3673eaff75ac30d25a2f21b3eecc5f9))
* missing await in rollback ([#671](https://www.github.com/googleapis/nodejs-datastore/issues/671)) ([7cb353e](https://www.github.com/googleapis/nodejs-datastore/commit/7cb353e14e534a221e337f4ca2c30dd7ab01b469))
* **deps:** update dependency @grpc/grpc-js to v0.7.4 ([#620](https://www.github.com/googleapis/nodejs-datastore/issues/620)) ([1d36be1](https://www.github.com/googleapis/nodejs-datastore/commit/1d36be1f11f4604f5c5170a06d7156e858a4748c))
* **deps:** update dependency @grpc/grpc-js to v0.7.8 ([#638](https://www.github.com/googleapis/nodejs-datastore/issues/638)) ([a98ee1a](https://www.github.com/googleapis/nodejs-datastore/commit/a98ee1a9144415aef4788f7eb2b052c864f5370c))
* regenerate files and fixed formatting, lint ([#664](https://www.github.com/googleapis/nodejs-datastore/issues/664)) ([34e9135](https://www.github.com/googleapis/nodejs-datastore/commit/34e91359aa7cd246799a651fa5f441ed8956b930))
* support request params {key} with no =value  ([#660](https://www.github.com/googleapis/nodejs-datastore/issues/660)) ([1faba1f](https://www.github.com/googleapis/nodejs-datastore/commit/1faba1f86fe31ff5898f897b640738987c55193d))
* trim the dependency tree ([#651](https://www.github.com/googleapis/nodejs-datastore/issues/651)) ([1fd412e](https://www.github.com/googleapis/nodejs-datastore/commit/1fd412ef972c45ffefa96292c33389196a945338))
* **deps:** update dependency @grpc/grpc-js to v0.7.9 ([#645](https://www.github.com/googleapis/nodejs-datastore/issues/645)) ([04b2ab2](https://www.github.com/googleapis/nodejs-datastore/commit/04b2ab29e9a0b4e4feef57641a5e5960a8bb88b8))
* **deps:** update dependency google-auth-library to v6 ([#628](https://www.github.com/googleapis/nodejs-datastore/issues/628)) ([eb5f87b](https://www.github.com/googleapis/nodejs-datastore/commit/eb5f87b0037cad27b45653a0246a197ca4a0b33b))

## [5.1.0](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.6...v5.1.0) (2020-03-11)


### Features

* add warning when int value is too large during upload ([#591](https://www.github.com/googleapis/nodejs-datastore/issues/591)) ([5a4821b](https://www.github.com/googleapis/nodejs-datastore/commit/5a4821b5fc8d283f168d3b52ac57021868e98679))
* export protos in src/index.ts ([3fe21ab](https://www.github.com/googleapis/nodejs-datastore/commit/3fe21ab8835b4a9aad73659d7c6242d6cabb7f9f))
* move library to Typescript code generation ([#608](https://www.github.com/googleapis/nodejs-datastore/issues/608)) ([d543aa6](https://www.github.com/googleapis/nodejs-datastore/commit/d543aa635764f9577bfced48c6a41c23f28771a0))


### Bug Fixes

* handle large int out of bounds error in streams ([#590](https://www.github.com/googleapis/nodejs-datastore/issues/590)) ([25b1fc2](https://www.github.com/googleapis/nodejs-datastore/commit/25b1fc2de4fddb5b68a9c6fbb5202e444746e69b))
* **deps:** update dependency @grpc/grpc-js to v0.7.0 ([#613](https://www.github.com/googleapis/nodejs-datastore/issues/613)) ([8b5d391](https://www.github.com/googleapis/nodejs-datastore/commit/8b5d391e4cb80808b274f0992e275fd24177a750))

### [5.0.6](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.5...v5.0.6) (2020-02-20)


### Bug Fixes

* **deps:** update dependency sinon to v9 ([#592](https://www.github.com/googleapis/nodejs-datastore/issues/592)) ([58c2b3f](https://www.github.com/googleapis/nodejs-datastore/commit/58c2b3fd97b1bab6bd6f03de0d7cdfba622bb6cb))

### [5.0.5](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.4...v5.0.5) (2020-02-12)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to v0.6.16 ([#585](https://www.github.com/googleapis/nodejs-datastore/issues/585)) ([f067258](https://www.github.com/googleapis/nodejs-datastore/commit/f067258a9b4e7b760235721561a999c656c2e076))

### [5.0.4](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.3...v5.0.4) (2020-01-29)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([86a48fa](https://www.github.com/googleapis/nodejs-datastore/commit/86a48fa60058216b2dec4e8c45fd74f9e77ff558))

### [5.0.3](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.2...v5.0.3) (2019-12-31)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to v0.6.15 ([#555](https://www.github.com/googleapis/nodejs-datastore/issues/555)) ([c015c1c](https://www.github.com/googleapis/nodejs-datastore/commit/c015c1c9142a7f3ad5cb26799fbd533aeae09b23))
* **deps:** update dependency sinon to v8 ([#560](https://www.github.com/googleapis/nodejs-datastore/issues/560)) ([2d78de4](https://www.github.com/googleapis/nodejs-datastore/commit/2d78de40ab0866f773ea756b8e4b101ea8901b39))

### [5.0.2](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.1...v5.0.2) (2019-12-12)


### Bug Fixes

* update datastore_transactional_single_entity_group_read_only to consistently use transaction ([#551](https://www.github.com/googleapis/nodejs-datastore/issues/551)) ([fbff2e7](https://www.github.com/googleapis/nodejs-datastore/commit/fbff2e7d2f054b157cc669c979a9e5acb09dd7a1))
* **deps:** update dependency @grpc/grpc-js to v0.6.14 ([#552](https://www.github.com/googleapis/nodejs-datastore/issues/552)) ([f4df89c](https://www.github.com/googleapis/nodejs-datastore/commit/f4df89c50059541c75a7576c7264e3b7818871ea))

### [5.0.1](https://www.github.com/googleapis/nodejs-datastore/compare/v5.0.0...v5.0.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([eeebcf6](https://www.github.com/googleapis/nodejs-datastore/commit/eeebcf6d53fd4040b536fe3537d8a4c9a3bdd5c3))
* **deps:** update dependency @grpc/grpc-js to v0.6.12 ([#541](https://www.github.com/googleapis/nodejs-datastore/issues/541)) ([972d3e7](https://www.github.com/googleapis/nodejs-datastore/commit/972d3e7e37b161ca8404975e4f9f80887609268f))
* **deps:** update dependency @grpc/grpc-js to v0.6.13 ([#548](https://www.github.com/googleapis/nodejs-datastore/issues/548)) ([f8948c6](https://www.github.com/googleapis/nodejs-datastore/commit/f8948c63924225866130eb81e7ed26becbc3e1a9))

## [5.0.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.5.2...v5.0.0) (2019-11-14)


### ⚠ BREAKING CHANGES

* keyToLegacyUrlsafe is now an async method (#496)
* throw error with out of bounds integer values, optionally wrap into DsInt or provide a custom 'integerValue' type cast options #516

### Features

* throw error with out of bounds integer values, optionally wrap into DsInt or provide a custom 'integerValue' type cast options [#516](https://www.github.com/googleapis/nodejs-datastore/issues/516) ([6c8cc74](https://www.github.com/googleapis/nodejs-datastore/commit/6c8cc74820ca7eaab0e08b9cefac11095c466256))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#535](https://www.github.com/googleapis/nodejs-datastore/issues/535)) ([53ddc21](https://www.github.com/googleapis/nodejs-datastore/commit/53ddc21f3b1545e660433b3805948dfc862ba792))
* keyToLegacyUrlsafe is now an async method ([#496](https://www.github.com/googleapis/nodejs-datastore/issues/496)) ([bbd1ebe](https://www.github.com/googleapis/nodejs-datastore/commit/bbd1ebe82e302155b80ac801f892a7f12ad17e13))

### [4.5.2](https://www.github.com/googleapis/nodejs-datastore/compare/v4.5.1...v4.5.2) (2019-11-08)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to v0.6.11 ([#532](https://www.github.com/googleapis/nodejs-datastore/issues/532)) ([95cded0](https://www.github.com/googleapis/nodejs-datastore/commit/95cded0d9ec365dc091bb0182ea8fe142d93cd64))

### [4.5.1](https://www.github.com/googleapis/nodejs-datastore/compare/v4.5.0...v4.5.1) (2019-11-07)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to v0.6.10 ([#527](https://www.github.com/googleapis/nodejs-datastore/issues/527)) ([beb3bcc](https://www.github.com/googleapis/nodejs-datastore/commit/beb3bcc92fd6f3a09d970cb4d66cbb04dae06353))

## [4.5.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.4.1...v4.5.0) (2019-11-04)


### Features

* support DSInt / DSDouble recognition from JSON ([#480](https://www.github.com/googleapis/nodejs-datastore/issues/480)) ([9f2fb3c](https://www.github.com/googleapis/nodejs-datastore/commit/9f2fb3cf6fa0672ef2bc252c0765dd84dbbc977a))


### Bug Fixes

* **types:** removed duplicate declaration ([#524](https://www.github.com/googleapis/nodejs-datastore/issues/524)) ([26cbb67](https://www.github.com/googleapis/nodejs-datastore/commit/26cbb67dd9d81900960363e20a9df545ba0c5675))
* upgrade and pin to @grpc/grpc-js@0.6.9 ([#526](https://www.github.com/googleapis/nodejs-datastore/issues/526)) ([3b85eab](https://www.github.com/googleapis/nodejs-datastore/commit/3b85eabec858c98f16edd5f04416495f248fc68a))

### [4.4.1](https://www.github.com/googleapis/nodejs-datastore/compare/v4.4.0...v4.4.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#518](https://www.github.com/googleapis/nodejs-datastore/issues/518)) ([3bb56c1](https://www.github.com/googleapis/nodejs-datastore/commit/3bb56c15462892d7afcc0ca3be7064cfd1cec745))

## [4.4.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.3.0...v4.4.0) (2019-10-09)


### Bug Fixes

* transaction#run overloads' param types correction ([#501](https://www.github.com/googleapis/nodejs-datastore/issues/501)) ([c88e66e](https://www.github.com/googleapis/nodejs-datastore/commit/c88e66e))
* **deps:** update dependency @grpc/grpc-js to ^0.6.0 ([#503](https://www.github.com/googleapis/nodejs-datastore/issues/503)) ([7c3c213](https://www.github.com/googleapis/nodejs-datastore/commit/7c3c213))
* use compatible version of google-gax ([567e9dd](https://www.github.com/googleapis/nodejs-datastore/commit/567e9dd))


### Features

* .d.ts for protos ([#506](https://www.github.com/googleapis/nodejs-datastore/issues/506)) ([869e673](https://www.github.com/googleapis/nodejs-datastore/commit/869e673))
* add merge method for merging an object into an existing entity ([#452](https://www.github.com/googleapis/nodejs-datastore/issues/452)) ([8e026af](https://www.github.com/googleapis/nodejs-datastore/commit/8e026af))

## [4.3.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.2.0...v4.3.0) (2019-09-12)


### Bug Fixes

* **types:** fix and clean up types for request.ts ([#472](https://www.github.com/googleapis/nodejs-datastore/issues/472)) ([928f237](https://www.github.com/googleapis/nodejs-datastore/commit/928f237))
* added overload method for transaction.createQuery to handle namespace issue ([#486](https://www.github.com/googleapis/nodejs-datastore/issues/486)) ([28568c1](https://www.github.com/googleapis/nodejs-datastore/commit/28568c1))
* emit encoding errors on user stream ([#492](https://www.github.com/googleapis/nodejs-datastore/issues/492)) ([8d3b552](https://www.github.com/googleapis/nodejs-datastore/commit/8d3b552))
* refactor and clean up types ([#476](https://www.github.com/googleapis/nodejs-datastore/issues/476)) ([5971c4a](https://www.github.com/googleapis/nodejs-datastore/commit/5971c4a))
* update node version in HTTP headers ([#475](https://www.github.com/googleapis/nodejs-datastore/issues/475)) ([b6e65bb](https://www.github.com/googleapis/nodejs-datastore/commit/b6e65bb))


### Features

* add support for auto-unindex  ([#453](https://www.github.com/googleapis/nodejs-datastore/issues/453)) ([33292d2](https://www.github.com/googleapis/nodejs-datastore/commit/33292d2))
* load protos from JSON, grpc-fallback support ([#485](https://www.github.com/googleapis/nodejs-datastore/issues/485)) ([1cf85ea](https://www.github.com/googleapis/nodejs-datastore/commit/1cf85ea))
* support key re-use from serialized path ([#474](https://www.github.com/googleapis/nodejs-datastore/issues/474)) ([b36c90f](https://www.github.com/googleapis/nodejs-datastore/commit/b36c90f))

## [4.2.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.1.4...v4.2.0) (2019-08-09)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.5.0 ([#461](https://www.github.com/googleapis/nodejs-datastore/issues/461)) ([1850f25](https://www.github.com/googleapis/nodejs-datastore/commit/1850f25))
* **deps:** update dependency google-auth-library to v5 ([#462](https://www.github.com/googleapis/nodejs-datastore/issues/462)) ([1f97053](https://www.github.com/googleapis/nodejs-datastore/commit/1f97053))
* **types:** correct type of Datastore.KEY ([#459](https://www.github.com/googleapis/nodejs-datastore/issues/459)) ([09def6d](https://www.github.com/googleapis/nodejs-datastore/commit/09def6d))
* allow calls with no request, add JSON proto ([771b634](https://www.github.com/googleapis/nodejs-datastore/commit/771b634))


### Features

* add support for appengine legacy url encoding ([#456](https://www.github.com/googleapis/nodejs-datastore/issues/456)) ([357a9cf](https://www.github.com/googleapis/nodejs-datastore/commit/357a9cf))
* excludeFromIndex allow for '*' wildcard to catch all properties on object ([#451](https://www.github.com/googleapis/nodejs-datastore/issues/451)) ([215cbee](https://www.github.com/googleapis/nodejs-datastore/commit/215cbee))

### [4.1.4](https://www.github.com/googleapis/nodejs-datastore/compare/v4.1.3...v4.1.4) (2019-07-23)


### Bug Fixes

* **deps:** drop dependency on through2 ([#457](https://www.github.com/googleapis/nodejs-datastore/issues/457)) ([e57ed63](https://www.github.com/googleapis/nodejs-datastore/commit/e57ed63))

### [4.1.3](https://www.github.com/googleapis/nodejs-datastore/compare/v4.1.2...v4.1.3) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#444](https://www.github.com/googleapis/nodejs-datastore/issues/444)) ([0fd5492](https://www.github.com/googleapis/nodejs-datastore/commit/0fd5492))
* **typescript:** grpc->[@grpc-js](https://www.github.com/grpc-js) ([#446](https://www.github.com/googleapis/nodejs-datastore/issues/446)) ([d8a8c81](https://www.github.com/googleapis/nodejs-datastore/commit/d8a8c81))
* **typescript:** query pojection -> projection ([#445](https://www.github.com/googleapis/nodejs-datastore/issues/445)) ([32b6311](https://www.github.com/googleapis/nodejs-datastore/commit/32b6311))

### [4.1.2](https://www.github.com/googleapis/nodejs-datastore/compare/v4.1.1...v4.1.2) (2019-06-20)


### Bug Fixes

* **docs:** fix <caption> tag rendering in Key doc ([#439](https://www.github.com/googleapis/nodejs-datastore/issues/439)) ([2edd95c](https://www.github.com/googleapis/nodejs-datastore/commit/2edd95c))
* **docs:** move to new client docs URL ([#437](https://www.github.com/googleapis/nodejs-datastore/issues/437)) ([278c1c5](https://www.github.com/googleapis/nodejs-datastore/commit/278c1c5))
* add `parseInt` to constructor of task keys ([#436](https://www.github.com/googleapis/nodejs-datastore/issues/436)) ([7ee76b3](https://www.github.com/googleapis/nodejs-datastore/commit/7ee76b3))
* assign more restrictive type to PathType ([#433](https://www.github.com/googleapis/nodejs-datastore/issues/433)) ([#435](https://www.github.com/googleapis/nodejs-datastore/issues/435)) ([a93ef91](https://www.github.com/googleapis/nodejs-datastore/commit/a93ef91))

### [4.1.1](https://www.github.com/googleapis/nodejs-datastore/compare/v4.1.0...v4.1.1) (2019-06-11)


### Bug Fixes

* added legacy samples back, until we can update external references ([#428](https://www.github.com/googleapis/nodejs-datastore/issues/428)) ([c282ff7](https://www.github.com/googleapis/nodejs-datastore/commit/c282ff7))
* **docs:** link to up-to-date googleapis.dev doc site ([#431](https://www.github.com/googleapis/nodejs-datastore/issues/431)) ([58d41a5](https://www.github.com/googleapis/nodejs-datastore/commit/58d41a5))

## [4.1.0](https://www.github.com/googleapis/nodejs-datastore/compare/v4.0.0...v4.1.0) (2019-06-05)


### Bug Fixes

* default options to empty object ([c04777d](https://www.github.com/googleapis/nodejs-datastore/commit/c04777d))


### Features

* support apiEndpoint override in client constructor ([#422](https://www.github.com/googleapis/nodejs-datastore/issues/422)) ([0f75d38](https://www.github.com/googleapis/nodejs-datastore/commit/0f75d38))

## [4.0.0](https://www.github.com/googleapis/nodejs-datastore/compare/v3.1.2...v4.0.0) (2019-05-15)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#402](https://www.github.com/googleapis/nodejs-datastore/issues/402)) ([547f1a1](https://www.github.com/googleapis/nodejs-datastore/commit/547f1a1))
* correct Long types import ([#358](https://www.github.com/googleapis/nodejs-datastore/issues/358)) ([dfe1def](https://www.github.com/googleapis/nodejs-datastore/commit/dfe1def))
* DEADLINE_EXCEEDED is no longer retried ([47eedf0](https://www.github.com/googleapis/nodejs-datastore/commit/47eedf0))
* DEADLINE_EXCEEDED retry code is idempotent ([#403](https://www.github.com/googleapis/nodejs-datastore/issues/403)) ([2a7c3ab](https://www.github.com/googleapis/nodejs-datastore/commit/2a7c3ab))
* **deps:** update dependency @google-cloud/projectify to v1 ([#391](https://www.github.com/googleapis/nodejs-datastore/issues/391)) ([761896b](https://www.github.com/googleapis/nodejs-datastore/commit/761896b))
* **deps:** update dependency @google-cloud/promisify to v1 ([#392](https://www.github.com/googleapis/nodejs-datastore/issues/392)) ([94a45bd](https://www.github.com/googleapis/nodejs-datastore/commit/94a45bd))
* **deps:** update dependency arrify to v2 ([2b47d10](https://www.github.com/googleapis/nodejs-datastore/commit/2b47d10))
* **deps:** update dependency google-auth-library to v4 ([#400](https://www.github.com/googleapis/nodejs-datastore/issues/400)) ([19bc787](https://www.github.com/googleapis/nodejs-datastore/commit/19bc787))
* **deps:** update dependency google-gax to ^0.26.0 ([#386](https://www.github.com/googleapis/nodejs-datastore/issues/386)) ([29b81e3](https://www.github.com/googleapis/nodejs-datastore/commit/29b81e3))
* include 'x-goog-request-params' header in requests ([#372](https://www.github.com/googleapis/nodejs-datastore/issues/372)) ([d91be05](https://www.github.com/googleapis/nodejs-datastore/commit/d91be05))
* lint ([#384](https://www.github.com/googleapis/nodejs-datastore/issues/384)) ([9a4d746](https://www.github.com/googleapis/nodejs-datastore/commit/9a4d746))
* **docs:** move ts overloads above doc string ([#356](https://www.github.com/googleapis/nodejs-datastore/issues/356)) ([a7f1123](https://www.github.com/googleapis/nodejs-datastore/commit/a7f1123))


### Build System

* upgrade engines field to >=8.10.0 ([#388](https://www.github.com/googleapis/nodejs-datastore/issues/388)) ([a8cf59f](https://www.github.com/googleapis/nodejs-datastore/commit/a8cf59f))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#388)

## v3.1.2

03-06-2019 12:24 PST

### Bug fixes
- fix: make an explicit dependency on long ([#352](https://github.com/googleapis/nodejs-datastore/pull/352))
- fix: include types in package ([#351](https://github.com/googleapis/nodejs-datastore/pull/351))
- fix: add missing package, and add install test ([#346](https://github.com/googleapis/nodejs-datastore/pull/346))

### Documentation
- docs(samples): Update datastore_transaction_retry sample to use function arguments rather than closed variables. ([#339](https://github.com/googleapis/nodejs-datastore/pull/339))

### Internal / Testing Changes
- refactor(ts): enable noImplicitAny on test/request.ts ([#343](https://github.com/googleapis/nodejs-datastore/pull/343))
- refactor(ts): enable noImplicitAny on test/query.ts ([#342](https://github.com/googleapis/nodejs-datastore/pull/342))
- build: update release configuration
- chore: update proto docs and code style
- chore(deps): update dependency mocha to v6 ([#338](https://github.com/googleapis/nodejs-datastore/pull/338))

## v3.1.1

02-18-2019 22:46 PST

### Bug fixes
- fix: include proto d.ts in the build ([#335](https://github.com/googleapis/nodejs-datastore/pull/335))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#333](https://github.com/googleapis/nodejs-datastore/pull/333))
- fix: throw on invalid credentials ([#331](https://github.com/googleapis/nodejs-datastore/pull/331))
- fix(deps): update dependency yargs to v13 ([#329](https://github.com/googleapis/nodejs-datastore/pull/329))

### Documentation
- build: use linkinator for docs test ([#332](https://github.com/googleapis/nodejs-datastore/pull/332))
- docs: update links in contrib guide ([#334](https://github.com/googleapis/nodejs-datastore/pull/334))

## v3.1.0

02-09-2019 17:57 PST

This one's coming hot with fresh new TypeScript types 🔥

### New Features
- feat: typings for gapic files ([#307](https://github.com/googleapis/nodejs-datastore/pull/307))

### Bug fixes
- fix(types): Make gaxOptions optional in Transaction.rollback() ([#310](https://github.com/googleapis/nodejs-datastore/pull/310))

### Dependencies
- fix(deps): update dependency google-auth-library to v3 ([#302](https://github.com/googleapis/nodejs-datastore/pull/302))
- fix(deps): update dependency google-gax to ^0.25.0 ([#316](https://github.com/googleapis/nodejs-datastore/pull/316))
- fix(deps): update dependency google-gax to ^0.24.0 ([#312](https://github.com/googleapis/nodejs-datastore/pull/312))

### Documentation
- docs: update contributing path in README ([#322](https://github.com/googleapis/nodejs-datastore/pull/322))
- chore: move CONTRIBUTING.md to root ([#321](https://github.com/googleapis/nodejs-datastore/pull/321))
- docs: add lint/fix example to contributing guide ([#319](https://github.com/googleapis/nodejs-datastore/pull/319))
- docs(samples): Update Datastore snippet for read only transaction
- docs(key): copy Datastore#key examples to Key ctor ([#306](https://github.com/googleapis/nodejs-datastore/pull/306))

### Internal / Testing Changes
- refactor: clean up types for tests ([#325](https://github.com/googleapis/nodejs-datastore/pull/325))
- refactor: asyncify the system test ([#324](https://github.com/googleapis/nodejs-datastore/pull/324))
- build: test using @grpc/grpc-js in CI ([#323](https://github.com/googleapis/nodejs-datastore/pull/323))
- refactor(types): enable noImplicitAny for transaction.ts & request.ts ([#305](https://github.com/googleapis/nodejs-datastore/pull/305))
- chore(deps): update dependency eslint-config-prettier to v4 ([#313](https://github.com/googleapis/nodejs-datastore/pull/313))
- build: ignore googleapis.com in doc link check ([#311](https://github.com/googleapis/nodejs-datastore/pull/311))
- chore: update year in the license headers. ([#304](https://github.com/googleapis/nodejs-datastore/pull/304))

## v3.0.1

01-15-2019 13:20 PST

### Bug fixes
- fix: ship the build directory ([#300](https://github.com/googleapis/nodejs-datastore/pull/300))

### Internal / Testing Changes
- build: check broken links in generated docs ([#292](https://github.com/googleapis/nodejs-datastore/pull/292))

## v3.0.0

01-14-2019 20:31 PST

**This release has breaking changes!** The import style of this library has changed to be consistent with [es modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/).

#### Old busted code
```js
const Datastore = require('@google-cloud/datastore')();
// or...
const Datastore = require('@google-cloud/datastore');
const ds = new Datastore();
```

#### New hot code
```js
const {Datastore} = require('@google-cloud/datastore');
const ds = new Datastore();
```

Please take care to update your imports accordingly!

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#296](https://github.com/googleapis/nodejs-datastore/pull/296))
- fix(deps): update dependency google-gax to ^0.22.0 ([#248](https://github.com/googleapis/nodejs-datastore/pull/248))
- fix(deps): update dependency concat-stream to v2 ([#290](https://github.com/googleapis/nodejs-datastore/pull/290))
- refactor: remove async module usage ([#272](https://github.com/googleapis/nodejs-datastore/pull/272))
- fix(deps): update dependency through2 to v3 ([#237](https://github.com/googleapis/nodejs-datastore/pull/237))
- chore: remove unused dependencies ([#226](https://github.com/googleapis/nodejs-datastore/pull/226))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#210](https://github.com/googleapis/nodejs-datastore/pull/210))

### Documentation
- fix(docs): fix namespace causing 404s ([#294](https://github.com/googleapis/nodejs-datastore/pull/294))
- fix(docs): remove unused long running operations types
- docs: Update doc comment showing structure of entity ([#276](https://github.com/googleapis/nodejs-datastore/pull/276))
- docs: update readme badges ([#269](https://github.com/googleapis/nodejs-datastore/pull/269))
- refactor(samples): Samples to use async/await
- docs: update auto-generated jsdoc comments ([#245](https://github.com/googleapis/nodejs-datastore/pull/245))

### Internal / Testing Changes
- refactor: sprinkle some types about ([#291](https://github.com/googleapis/nodejs-datastore/pull/291))
- chore(deps): update dependency @types/sinon to v7.0.2 ([#289](https://github.com/googleapis/nodejs-datastore/pull/289))
- chore(deps): update dependency @types/sinon to v7 ([#286](https://github.com/googleapis/nodejs-datastore/pull/286))
- refactor(ts): enable lint and fix ([#287](https://github.com/googleapis/nodejs-datastore/pull/287))
- chore(build): inject yoshi automation key ([#285](https://github.com/googleapis/nodejs-datastore/pull/285))
- chore: update nyc and eslint configs ([#284](https://github.com/googleapis/nodejs-datastore/pull/284))
- chore: fix publish.sh permission +x ([#282](https://github.com/googleapis/nodejs-datastore/pull/282))
- fix(build): fix Kokoro release script ([#281](https://github.com/googleapis/nodejs-datastore/pull/281))
- build: add Kokoro configs for autorelease ([#280](https://github.com/googleapis/nodejs-datastore/pull/280))
- chore: always nyc report before calling codecov ([#275](https://github.com/googleapis/nodejs-datastore/pull/275))
- chore: nyc ignore build/test by default ([#274](https://github.com/googleapis/nodejs-datastore/pull/274))
- chore: update license file ([#271](https://github.com/googleapis/nodejs-datastore/pull/271))
- refactor: run gts fix ([#265](https://github.com/googleapis/nodejs-datastore/pull/265))
- chore(deps): update dependency typescript to ~3.2.0 ([#264](https://github.com/googleapis/nodejs-datastore/pull/264))
- fix(build): fix system key decryption ([#266](https://github.com/googleapis/nodejs-datastore/pull/266))
- refactor(samples): convert sample tests from ava to mocha ([#259](https://github.com/googleapis/nodejs-datastore/pull/259))
- fix: Pin @types/sinon to last compatible version ([#256](https://github.com/googleapis/nodejs-datastore/pull/256))
- chore: add synth.metadata ([#254](https://github.com/googleapis/nodejs-datastore/pull/254))
- refactor(ts): enable noImplicitThis ([#250](https://github.com/googleapis/nodejs-datastore/pull/250))
- chore(deps): update dependency gts to ^0.9.0 ([#247](https://github.com/googleapis/nodejs-datastore/pull/247))
- chore: update eslintignore config ([#246](https://github.com/googleapis/nodejs-datastore/pull/246))
- refactor(ts): use es module imports ([#244](https://github.com/googleapis/nodejs-datastore/pull/244))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#243](https://github.com/googleapis/nodejs-datastore/pull/243))
- chore: drop contributors from multiple places ([#241](https://github.com/googleapis/nodejs-datastore/pull/241))
- chore(deps): update dependency @types/is to v0.0.21 ([#240](https://github.com/googleapis/nodejs-datastore/pull/240))
- chore: use latest npm on Windows ([#239](https://github.com/googleapis/nodejs-datastore/pull/239))
- refactor(ts): convert to typescript ([#236](https://github.com/googleapis/nodejs-datastore/pull/236))
- chore: update CircleCI config ([#235](https://github.com/googleapis/nodejs-datastore/pull/235))
- chore: include build in eslintignore ([#232](https://github.com/googleapis/nodejs-datastore/pull/232))
- chore(deps): update dependency eslint-plugin-node to v8 ([#227](https://github.com/googleapis/nodejs-datastore/pull/227))
- chore: update issue templates ([#225](https://github.com/googleapis/nodejs-datastore/pull/225))
- chore: remove old issue template ([#223](https://github.com/googleapis/nodejs-datastore/pull/223))
- build: run tests on node11 ([#222](https://github.com/googleapis/nodejs-datastore/pull/222))
- chores(build): do not collect sponge.xml from windows builds ([#221](https://github.com/googleapis/nodejs-datastore/pull/221))
- chores(build): run codecov on continuous builds ([#220](https://github.com/googleapis/nodejs-datastore/pull/220))
- chore: update new issue template ([#219](https://github.com/googleapis/nodejs-datastore/pull/219))
- build: fix codecov uploading on Kokoro ([#213](https://github.com/googleapis/nodejs-datastore/pull/213))
- fix(deps): update dependency sinon to v7 ([#212](https://github.com/googleapis/nodejs-datastore/pull/212))
- Update kokoro config ([#207](https://github.com/googleapis/nodejs-datastore/pull/207))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#206](https://github.com/googleapis/nodejs-datastore/pull/206))

## v2.0.0

### Breaking Changes
- chore: really delete node4 and node9 ([#131](https://github.com/googleapis/nodejs-datastore/pull/131))
- fix: drop support for node.js 4.x and 9.x ([#129](https://github.com/googleapis/nodejs-datastore/pull/129))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#194](https://github.com/googleapis/nodejs-datastore/pull/194))
- fix(deps): update dependency google-auth-library to v2 ([#184](https://github.com/googleapis/nodejs-datastore/pull/184))
- fix(deps): update dependency google-gax to ^0.19.0 ([#177](https://github.com/googleapis/nodejs-datastore/pull/177))
- chore: remove safe-buffer ([#144](https://github.com/googleapis/nodejs-datastore/pull/144))
- fix(deps): update dependency google-gax to ^0.18.0 ([#154](https://github.com/googleapis/nodejs-datastore/pull/154))
- chore: drop dependency on common ([#148](https://github.com/googleapis/nodejs-datastore/pull/148))
- chore: remove propprop ([#145](https://github.com/googleapis/nodejs-datastore/pull/145))
- refactor: update nodejs-common and google-auth-library ([#112](https://github.com/googleapis/nodejs-datastore/pull/112))

### Documentation
- doc: fix namespace causing 404 ([#170](https://github.com/googleapis/nodejs-datastore/pull/170))

### Internal / Testing Changes
- build: prevent system/sample-test from leaking credentials
- Update CI config ([#201](https://github.com/googleapis/nodejs-datastore/pull/201))
- test: remove appveyor config ([#200](https://github.com/googleapis/nodejs-datastore/pull/200))
- Update the kokoro config ([#199](https://github.com/googleapis/nodejs-datastore/pull/199))
- Enable prefer-const in the eslint config ([#197](https://github.com/googleapis/nodejs-datastore/pull/197))
- Enable no-var in eslint ([#196](https://github.com/googleapis/nodejs-datastore/pull/196))
- Switch to let/const ([#195](https://github.com/googleapis/nodejs-datastore/pull/195))
- Update CI config ([#193](https://github.com/googleapis/nodejs-datastore/pull/193))
- Retry npm install in CI ([#191](https://github.com/googleapis/nodejs-datastore/pull/191))
- Update CI config ([#185](https://github.com/googleapis/nodejs-datastore/pull/185))
- Update CI config ([#182](https://github.com/googleapis/nodejs-datastore/pull/182))
- chore(deps): update dependency nyc to v13 ([#181](https://github.com/googleapis/nodejs-datastore/pull/181))
- Update the CI config ([#180](https://github.com/googleapis/nodejs-datastore/pull/180))
- chore: use arrow functions ([#176](https://github.com/googleapis/nodejs-datastore/pull/176))
- chore: make CircleCI config consistent ([#178](https://github.com/googleapis/nodejs-datastore/pull/178))
- chore: start converting to es classes ([#173](https://github.com/googleapis/nodejs-datastore/pull/173))
- chore(deps): update dependency eslint-config-prettier to v3 ([#169](https://github.com/googleapis/nodejs-datastore/pull/169))
- test: use sinon for mocking ([#168](https://github.com/googleapis/nodejs-datastore/pull/168))
- chore: do not use npm ci ([#166](https://github.com/googleapis/nodejs-datastore/pull/166))
- fix: fix the samples tests ([#164](https://github.com/googleapis/nodejs-datastore/pull/164))
- chore: ignore package-lock.json ([#162](https://github.com/googleapis/nodejs-datastore/pull/162))
- chore(deps): lock file maintenance ([#160](https://github.com/googleapis/nodejs-datastore/pull/160))
- chore: switch back to auto-generated code
- chore(deps): lock file maintenance ([#159](https://github.com/googleapis/nodejs-datastore/pull/159))
- chore: use let and const ([#158](https://github.com/googleapis/nodejs-datastore/pull/158))
- chore: update renovate config ([#157](https://github.com/googleapis/nodejs-datastore/pull/157))
- Delete reference to non-existent sample. ([#149](https://github.com/googleapis/nodejs-datastore/pull/149))
- test: throw on deprecation ([#155](https://github.com/googleapis/nodejs-datastore/pull/155))
- chore: move mocha options to mocha.opts ([#150](https://github.com/googleapis/nodejs-datastore/pull/150))
- Update CI config ([#151](https://github.com/googleapis/nodejs-datastore/pull/151))
- chore: add node templates to synth.py ([#143](https://github.com/googleapis/nodejs-datastore/pull/143))
- chore: please eslint ([#146](https://github.com/googleapis/nodejs-datastore/pull/146))
- chore(deps): lock file maintenance ([#142](https://github.com/googleapis/nodejs-datastore/pull/142))
- chore(deps): update dependency eslint-plugin-node to v7 ([#139](https://github.com/googleapis/nodejs-datastore/pull/139))
- test: use strictEqual in tests ([#140](https://github.com/googleapis/nodejs-datastore/pull/140))
- chore(deps): lock file maintenance ([#138](https://github.com/googleapis/nodejs-datastore/pull/138))
- chore(build): use `npm ci` instead of `npm install` ([#134](https://github.com/googleapis/nodejs-datastore/pull/134))
- chore(deps): lock file maintenance ([#133](https://github.com/googleapis/nodejs-datastore/pull/133))
- chore(deps): lock file maintenance ([#132](https://github.com/googleapis/nodejs-datastore/pull/132))
- chore(deps): lock file maintenance ([#130](https://github.com/googleapis/nodejs-datastore/pull/130))
- chore(deps): lock file maintenance ([#128](https://github.com/googleapis/nodejs-datastore/pull/128))
- chore(deps): lock file maintenance ([#127](https://github.com/googleapis/nodejs-datastore/pull/127))
- chore(deps): lock file maintenance ([#126](https://github.com/googleapis/nodejs-datastore/pull/126))
- chore(deps): lock file maintenance ([#125](https://github.com/googleapis/nodejs-datastore/pull/125))
- chore(deps): lock file maintenance ([#124](https://github.com/googleapis/nodejs-datastore/pull/124))
- fix(deps): update dependency yargs to v12 ([#122](https://github.com/googleapis/nodejs-datastore/pull/122))
- fix(deps): update dependency sinon to v6 ([#120](https://github.com/googleapis/nodejs-datastore/pull/120))
- Configure Renovate ([#113](https://github.com/googleapis/nodejs-datastore/pull/113))
- Update google-gax dependency ([#119](https://github.com/googleapis/nodejs-datastore/pull/119))
- refactor: drop repo-tool as an exec wrapper ([#118](https://github.com/googleapis/nodejs-datastore/pull/118))
- chore: update sample lockfiles ([#117](https://github.com/googleapis/nodejs-datastore/pull/117))
- fix: update linking for samples ([#115](https://github.com/googleapis/nodejs-datastore/pull/115))
- chore(package): update eslint to version 5.0.0 ([#114](https://github.com/googleapis/nodejs-datastore/pull/114))
- chore(package): Update sinon to the latest version 🚀 ([#104](https://github.com/googleapis/nodejs-datastore/pull/104))
