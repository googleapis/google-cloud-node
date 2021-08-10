# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/speech?activeTab=versions

## [4.6.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.6...v4.6.0) (2021-08-10)


### Features

* add total_billed_time response field ([#787](https://www.github.com/googleapis/nodejs-speech/issues/787)) ([171cba0](https://www.github.com/googleapis/nodejs-speech/commit/171cba0bb8f7bd12ab96f296824e0acf7a0698d7))

### [4.5.6](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.5...v4.5.6) (2021-08-02)


### Bug Fixes

* failing tests for LRO check methods ([#784](https://www.github.com/googleapis/nodejs-speech/issues/784)) ([08e4276](https://www.github.com/googleapis/nodejs-speech/commit/08e4276a39a74a45300041278dc3c63602971c10))

### [4.5.5](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.4...v4.5.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#777](https://www.github.com/googleapis/nodejs-speech/issues/777)) ([8911be0](https://www.github.com/googleapis/nodejs-speech/commit/8911be0cc600b4d16af5a809800118be07f8483b))

### [4.5.4](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.3...v4.5.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#774](https://www.github.com/googleapis/nodejs-speech/issues/774)) ([a30fb11](https://www.github.com/googleapis/nodejs-speech/commit/a30fb114f5c0cec095b1b1bd1f1678e2e3dba6fd))

### [4.5.3](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.2...v4.5.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#772](https://www.github.com/googleapis/nodejs-speech/issues/772)) ([582e5b7](https://www.github.com/googleapis/nodejs-speech/commit/582e5b71c68be635f7ce775f06d5e7b02180fbef))
* make request optional in all cases ([#768](https://www.github.com/googleapis/nodejs-speech/issues/768)) ([83e1b7b](https://www.github.com/googleapis/nodejs-speech/commit/83e1b7bd4cc2d6ffd95769a4a6f519ab23b9bc71))

### [4.5.2](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.1...v4.5.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#755](https://www.github.com/googleapis/nodejs-speech/issues/755)) ([0f612f3](https://www.github.com/googleapis/nodejs-speech/commit/0f612f3b7fa2430e3ab17dd258ad8c17e578aad9))

### [4.5.1](https://www.github.com/googleapis/nodejs-speech/compare/v4.5.0...v4.5.1) (2021-05-20)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#740](https://www.github.com/googleapis/nodejs-speech/issues/740)) ([0c9c68f](https://www.github.com/googleapis/nodejs-speech/commit/0c9c68f79eee3a9132f0cf18c44a45928da2e809))
* use require() to load JSON protos ([#746](https://www.github.com/googleapis/nodejs-speech/issues/746)) ([689af48](https://www.github.com/googleapis/nodejs-speech/commit/689af48120572779143f16f7d1b0652bdddd931e))

## [4.5.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.4.0...v4.5.0) (2021-04-29)


### Features

* Support for spoken punctuation and spoken emojis ([#737](https://www.github.com/googleapis/nodejs-speech/issues/737)) ([1a30de0](https://www.github.com/googleapis/nodejs-speech/commit/1a30de054439fc8e49eaef2c8641a507e7836c37))


### Bug Fixes

* remove common protos ([#710](https://www.github.com/googleapis/nodejs-speech/issues/710)) ([cbed1b0](https://www.github.com/googleapis/nodejs-speech/commit/cbed1b0879cd15bd4093948f2f9bde431c0236d6))

## [4.4.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.3.0...v4.4.0) (2021-03-16)


### Features

* Support output transcript to GCS for LongRunningRecognize. ([#708](https://www.github.com/googleapis/nodejs-speech/issues/708)) ([357e34d](https://www.github.com/googleapis/nodejs-speech/commit/357e34d8fa008eb70ab05511d22954c04d08f061))

## [4.3.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.2.0...v4.3.0) (2021-03-12)


### Features

* Support output transcript to GCS for LongRunningRecognize ([#707](https://www.github.com/googleapis/nodejs-speech/issues/707)) ([11e2ec2](https://www.github.com/googleapis/nodejs-speech/commit/11e2ec26caff80a84e1abc917c079371abcf9d60))
* **v1p1beta1:** support Model Adaptation ([#703](https://www.github.com/googleapis/nodejs-speech/issues/703)) ([fbcc04b](https://www.github.com/googleapis/nodejs-speech/commit/fbcc04bb6fc8e8ecbd90b3559bf2e85210947a37))

## [4.2.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.5...v4.2.0) (2021-01-06)


### Features

* adds a multi region sample ([#685](https://www.github.com/googleapis/nodejs-speech/issues/685)) ([7369d10](https://www.github.com/googleapis/nodejs-speech/commit/7369d105e24727f9844e51f504694874258ceac1))

### [4.1.5](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.4...v4.1.5) (2020-12-02)


### Bug Fixes

* **browser:** check for fetch on window ([6378dc1](https://www.github.com/googleapis/nodejs-speech/commit/6378dc193da2f792645ed0ec221c9a3495264486))

### [4.1.4](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.3...v4.1.4) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#669](https://www.github.com/googleapis/nodejs-speech/issues/669)) ([eafbadd](https://www.github.com/googleapis/nodejs-speech/commit/eafbadd3b22943dd1002c0f523f4d06d15bb9928))

### [4.1.3](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.2...v4.1.3) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#646](https://www.github.com/googleapis/nodejs-speech/issues/646)) ([d208cf5](https://www.github.com/googleapis/nodejs-speech/commit/d208cf511385558d8a414dcf6f26e1be1288619e))

### [4.1.2](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.1...v4.1.2) (2020-09-01)


### Bug Fixes

* **samples:** end stream before destroying it ([#611](https://www.github.com/googleapis/nodejs-speech/issues/611)) ([2b3a220](https://www.github.com/googleapis/nodejs-speech/commit/2b3a220190ab5d779daa68a4fb0426b2f70e5172))

### [4.1.1](https://www.github.com/googleapis/nodejs-speech/compare/v4.1.0...v4.1.1) (2020-07-06)


### Bug Fixes

* update node issue template ([#612](https://www.github.com/googleapis/nodejs-speech/issues/612)) ([c4d9e73](https://www.github.com/googleapis/nodejs-speech/commit/c4d9e736ed93f016bb76eeeb2463e9b0d6f21109))

## [4.1.0](https://www.github.com/googleapis/nodejs-speech/compare/v4.0.0...v4.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#605](https://www.github.com/googleapis/nodejs-speech/issues/605)) ([e3ac050](https://www.github.com/googleapis/nodejs-speech/commit/e3ac050fc99adf0907b29fe8ef54c24037dc7229))


### Bug Fixes

* handle fallback option properly ([#608](https://www.github.com/googleapis/nodejs-speech/issues/608)) ([2e8558c](https://www.github.com/googleapis/nodejs-speech/commit/2e8558c1a01d6924c3f443306bfa29f5bd87ad3b))

## [4.0.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.6.0...v4.0.0) (2020-05-15)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#590](https://www.github.com/googleapis/nodejs-speech/issues/590)) ([8581497](https://www.github.com/googleapis/nodejs-speech/commit/8581497419041d85b74d388a10b75c05c5e71ee7))
* deferred client initialization ([#548](https://www.github.com/googleapis/nodejs-speech/issues/548)) ([ef931e7](https://www.github.com/googleapis/nodejs-speech/commit/ef931e790c83d17a5037e71e67d82af3ec65c701))
* drop node8 support ([#562](https://www.github.com/googleapis/nodejs-speech/issues/562)) ([29d0f3f](https://www.github.com/googleapis/nodejs-speech/commit/29d0f3ffb4d8243391df44547a0df5740e0b33ce))
* export protos in src/index.ts ([7c33510](https://www.github.com/googleapis/nodejs-speech/commit/7c335100bd86fc0beba7ca00334373819caf7cbe))


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v3 ([#561](https://www.github.com/googleapis/nodejs-speech/issues/561)) ([ac55d63](https://www.github.com/googleapis/nodejs-speech/commit/ac55d634fb43de788dfb6ac6a3df5476c7ebc04e))
* remove eslint, update gax, fix generated protos, run the generator ([#573](https://www.github.com/googleapis/nodejs-speech/issues/573)) ([4be282e](https://www.github.com/googleapis/nodejs-speech/commit/4be282e727ee353597822f7c4d16072c367f1693))
* **deps:** update dependency @google-cloud/storage to v5 ([#595](https://www.github.com/googleapis/nodejs-speech/issues/595)) ([076d0be](https://www.github.com/googleapis/nodejs-speech/commit/076d0be6f7a62b94b6422c1064db8fda2342d183))
* **deps:** update dependency chalk to v4 ([#567](https://www.github.com/googleapis/nodejs-speech/issues/567)) ([cda7977](https://www.github.com/googleapis/nodejs-speech/commit/cda7977140e719474694e93cb1801a4aa1c8ed58))
* **samples:** use writable stream ([#597](https://www.github.com/googleapis/nodejs-speech/issues/597)) ([8f73071](https://www.github.com/googleapis/nodejs-speech/commit/8f7307109a24cc709d8f987c8f32a25d14bed2e4))

## [3.6.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.5.4...v3.6.0) (2020-02-04)


### Features

* created sample for speechcontext classes ([#515](https://www.github.com/googleapis/nodejs-speech/issues/515)) ([69e9d28](https://www.github.com/googleapis/nodejs-speech/commit/69e9d289671199c60af5175b210fbae77485134e))


### Bug Fixes

* enum, bytes, and Long types now accept strings ([9742189](https://www.github.com/googleapis/nodejs-speech/commit/974218903e4203de243b5d21229f273bf15ae7fc))

### [3.5.4](https://www.github.com/googleapis/nodejs-speech/compare/v3.5.3...v3.5.4) (2020-01-05)


### Bug Fixes

* better client close(), update .nycrc, require mocha explicitly ([824e75c](https://www.github.com/googleapis/nodejs-speech/commit/824e75cf8688b7ea22e6abda3167cabd7923bc5b))
* increase timeout from 20s to 60s ([#490](https://www.github.com/googleapis/nodejs-speech/issues/490)) ([d822f90](https://www.github.com/googleapis/nodejs-speech/commit/d822f9098ed97c9ef45d93e09134d9a16d6ea11e))

### [3.5.3](https://www.github.com/googleapis/nodejs-speech/compare/v3.5.2...v3.5.3) (2019-12-12)


### Bug Fixes

* added clarity around needing SoX for 'streamingMicRecognize' sample ([edee8d2](https://www.github.com/googleapis/nodejs-speech/commit/edee8d2ceebb646fd0e248a5fea3cc4d4d43cb50))

### [3.5.2](https://www.github.com/googleapis/nodejs-speech/compare/v3.5.1...v3.5.2) (2019-12-11)


### Bug Fixes

* make operationsClient and service stub public ([0c22cd7](https://www.github.com/googleapis/nodejs-speech/commit/0c22cd75daebb88f4f9a59bc069ef87552ea1017))

### [3.5.1](https://www.github.com/googleapis/nodejs-speech/compare/v3.5.0...v3.5.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([#480](https://www.github.com/googleapis/nodejs-speech/issues/480)) ([a39635f](https://www.github.com/googleapis/nodejs-speech/commit/a39635f493c5d54bd0e1a9d32955b1467cec26e9))

## [3.5.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.4.0...v3.5.0) (2019-11-22)

In this release this library has been converted to TypeScript. This change is supposed to be compatible
with the previous versions, but if you find that your code is broken by this change, please file an
issue!

### Features

* convert to TypeScript ([#472](https://www.github.com/googleapis/nodejs-speech/issues/472)) ([c6d8145](https://www.github.com/googleapis/nodejs-speech/commit/c6d8145c469d42e74f54a65740c96fc8b9d3e5f2))


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#469](https://www.github.com/googleapis/nodejs-speech/issues/469)) ([9e7d2e4](https://www.github.com/googleapis/nodejs-speech/commit/9e7d2e479d3744617844f2587dc4e57408bfc0d1))

## [3.4.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.3.2...v3.4.0) (2019-11-14)


### Features

* **samples:** bump auto-punctuation sample to v1 and move diarization to v1 ([#463](https://www.github.com/googleapis/nodejs-speech/issues/463)) ([ebcd0d3](https://www.github.com/googleapis/nodejs-speech/commit/ebcd0d3f3ba856b7476a7ada6029575b62133887))
* add support for speaker tag field ([#466](https://www.github.com/googleapis/nodejs-speech/issues/466)) ([a027563](https://www.github.com/googleapis/nodejs-speech/commit/a027563f006487efc7a2e509074bf11ff7f13c9e))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#465](https://www.github.com/googleapis/nodejs-speech/issues/465)) ([e8c4269](https://www.github.com/googleapis/nodejs-speech/commit/e8c4269098e786e01cc7196d44a9c3bf459e8f91))

### [3.3.2](https://www.github.com/googleapis/nodejs-speech/compare/v3.3.1...v3.3.2) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#452](https://www.github.com/googleapis/nodejs-speech/issues/452)) ([3444982](https://www.github.com/googleapis/nodejs-speech/commit/3444982632cea8db967a189c2f88abba59cc6987))
* **deps:** update dependency @google-cloud/storage to v4 ([#449](https://www.github.com/googleapis/nodejs-speech/issues/449)) ([98f5d6b](https://www.github.com/googleapis/nodejs-speech/commit/98f5d6b6962877b5c821accf199346fd48c4056f))

### [3.3.1](https://www.github.com/googleapis/nodejs-speech/compare/v3.3.0...v3.3.1) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([14b96af](https://www.github.com/googleapis/nodejs-speech/commit/14b96af))

## [3.3.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.6...v3.3.0) (2019-09-16)


### Bug Fixes

* **docs:** stop linking reference documents to anchor ([d54da3d](https://www.github.com/googleapis/nodejs-speech/commit/d54da3d))


### Features

* introduces speaker diarization configuration ([8adb72a](https://www.github.com/googleapis/nodejs-speech/commit/8adb72a))
* load protos from JSON, grpc-fallback support ([3cc8989](https://www.github.com/googleapis/nodejs-speech/commit/3cc8989))

### [3.2.6](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.5...v3.2.6) (2019-08-27)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([254e9d9](https://www.github.com/googleapis/nodejs-speech/commit/254e9d9))
* use correct version for x-goog-api-client header ([6fa0c13](https://www.github.com/googleapis/nodejs-speech/commit/6fa0c13))

### [3.2.5](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.4...v3.2.5) (2019-08-02)


### Bug Fixes

* allow calls with no request, add JSON proto ([61349c0](https://www.github.com/googleapis/nodejs-speech/commit/61349c0))

### [3.2.4](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.3...v3.2.4) (2019-07-29)


### Bug Fixes

* **deps:** update dependency pumpify to v2 ([#409](https://www.github.com/googleapis/nodejs-speech/issues/409)) ([aea90b3](https://www.github.com/googleapis/nodejs-speech/commit/aea90b3))

### [3.2.3](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.2...v3.2.3) (2019-07-23)


### Bug Fixes

* **deps:** drop dependency on through2 ([#400](https://www.github.com/googleapis/nodejs-speech/issues/400)) ([0c25310](https://www.github.com/googleapis/nodejs-speech/commit/0c25310))

### [3.2.2](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.1...v3.2.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#393](https://www.github.com/googleapis/nodejs-speech/issues/393)) ([a6e3104](https://www.github.com/googleapis/nodejs-speech/commit/a6e3104))

### [3.2.1](https://www.github.com/googleapis/nodejs-speech/compare/v3.2.0...v3.2.1) (2019-06-13)


### Bug Fixes

* **docs:** move to new client docs URL ([#385](https://www.github.com/googleapis/nodejs-speech/issues/385)) ([da6b1f2](https://www.github.com/googleapis/nodejs-speech/commit/da6b1f2))

## [3.2.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.1.1...v3.2.0) (2019-06-06)


### Features

* support apiEndpoint override in client constructor ([#377](https://www.github.com/googleapis/nodejs-speech/issues/377)) ([c77ef77](https://www.github.com/googleapis/nodejs-speech/commit/c77ef77))

### [3.1.1](https://www.github.com/googleapis/nodejs-speech/compare/v3.1.0...v3.1.1) (2019-05-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v2 ([#366](https://www.github.com/googleapis/nodejs-speech/issues/366)) ([e9012f3](https://www.github.com/googleapis/nodejs-speech/commit/e9012f3))

## [3.1.0](https://www.github.com/googleapis/nodejs-speech/compare/v3.0.0...v3.1.0) (2019-05-24)


### Features

* add support for MP3 bitrates and hint boost ([#363](https://www.github.com/googleapis/nodejs-speech/issues/363)) ([b1369ae](https://www.github.com/googleapis/nodejs-speech/commit/b1369ae))

## [3.0.0](https://www.github.com/googleapis/nodejs-speech/compare/v2.3.1...v3.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#339)

### Bug Fixes

* **deps:** update dependency @google-cloud/common to ^0.32.0 ([13d76eb](https://www.github.com/googleapis/nodejs-speech/commit/13d76eb)), closes [#8203](https://www.github.com/googleapis/nodejs-speech/issues/8203)
* DEADLINE_EXCEEDED is idempotent ([#351](https://www.github.com/googleapis/nodejs-speech/issues/351)) ([aa5cca5](https://www.github.com/googleapis/nodejs-speech/commit/aa5cca5))
* DEADLINE_EXCEEDED no longer treated as idempotent and retried ([8b0655f](https://www.github.com/googleapis/nodejs-speech/commit/8b0655f))
* **deps:** update dependency @google-cloud/common to v1 ([#349](https://www.github.com/googleapis/nodejs-speech/issues/349)) ([d3f216d](https://www.github.com/googleapis/nodejs-speech/commit/d3f216d))
* **deps:** update dependency google-gax to ^0.26.0 ([#338](https://www.github.com/googleapis/nodejs-speech/issues/338)) ([b589b2c](https://www.github.com/googleapis/nodejs-speech/commit/b589b2c))
* **deps:** update dependency google-gax to v1 ([#350](https://www.github.com/googleapis/nodejs-speech/issues/350)) ([a43fb45](https://www.github.com/googleapis/nodejs-speech/commit/a43fb45))


### Build System

* upgrade engines field to >=8.10.0 ([#339](https://www.github.com/googleapis/nodejs-speech/issues/339)) ([3f12222](https://www.github.com/googleapis/nodejs-speech/commit/3f12222))


### Features

* add recognition metadata ([#352](https://www.github.com/googleapis/nodejs-speech/issues/352)) ([071b540](https://www.github.com/googleapis/nodejs-speech/commit/071b540))

## v2.3.1

03-20-2019 15:38 PDT

### Bug Fixes
- fix: throw on invalid credentials ([#302](https://github.com/googleapis/nodejs-speech/pull/302))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.31.0 ([#292](https://github.com/googleapis/nodejs-speech/pull/292))

### Documentation
- docs: add backticks to JavaScript samples in jsdoc ([#317](https://github.com/googleapis/nodejs-speech/pull/317))
- docs(samples): Multi-channel GA sample ([#295](https://github.com/googleapis/nodejs-speech/pull/295))
- docs: add lint/fix example to contributing guide ([#291](https://github.com/googleapis/nodejs-speech/pull/291))
- docs: update links in contrib guide ([#304](https://github.com/googleapis/nodejs-speech/pull/304))
- docs: update contributing path in README ([#297](https://github.com/googleapis/nodejs-speech/pull/297))
- docs: move CONTRIBUTING.md to root ([#296](https://github.com/googleapis/nodejs-speech/pull/296))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#322](https://github.com/googleapis/nodejs-speech/pull/322))
- build: use per-repo npm publish token ([#320](https://github.com/googleapis/nodejs-speech/pull/320))
- chore: update proto comments and fix tests ([#316](https://github.com/googleapis/nodejs-speech/pull/316))
- build: Add docuploader credentials to node publish jobs ([#314](https://github.com/googleapis/nodejs-speech/pull/314))
- build: update release config ([#310](https://github.com/googleapis/nodejs-speech/pull/310))
- build: use node10 to run samples-test, system-test etc ([#313](https://github.com/googleapis/nodejs-speech/pull/313))
- chore: update proto docs and code style ([#308](https://github.com/googleapis/nodejs-speech/pull/308))
- chore(deps): update dependency mocha to v6 ([#305](https://github.com/googleapis/nodejs-speech/pull/305))
- build: use linkinator for docs test ([#303](https://github.com/googleapis/nodejs-speech/pull/303))
- fix(deps): update dependency yargs to v13 ([#301](https://github.com/googleapis/nodejs-speech/pull/301))
- build: create docs test npm scripts ([#300](https://github.com/googleapis/nodejs-speech/pull/300))
- build: test using @grpc/grpc-js in CI ([#298](https://github.com/googleapis/nodejs-speech/pull/298))

## v2.3.0

02-04-2019 14:07 PST

### New Features
- feat: support audioChannelCount ([#289](https://github.com/googleapis/nodejs-speech/pull/289))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#287](https://github.com/googleapis/nodejs-speech/pull/287))
- chore(deps): update dependency eslint-config-prettier to v4 ([#286](https://github.com/googleapis/nodejs-speech/pull/286))
- fix(deps): update dependency google-gax to ^0.24.0 ([#283](https://github.com/googleapis/nodejs-speech/pull/283))
- fix(deps): update dependency @google-cloud/common to ^0.30.0 ([#282](https://github.com/googleapis/nodejs-speech/pull/282))

### Documentation
- build: ignore googleapis.com in doc link check ([#281](https://github.com/googleapis/nodejs-speech/pull/281))
- chore: update the generated doc comments ([#279](https://github.com/googleapis/nodejs-speech/pull/279))

### Internal / Testing Changes
- chore: update year in the license headers ([#280](https://github.com/googleapis/nodejs-speech/pull/280))

## v2.2.0

01-14-2019 12:45 PST

### New Features
- feat: Multi-channel recognition

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#275](https://github.com/googleapis/nodejs-speech/pull/275))

### Documentation
- docs: check broken links in generated docs ([#268](https://github.com/googleapis/nodejs-speech/pull/268))

## v2.1.2

01-08-2019 14:18 PST

### Docs
- docs: update readme badges ([#248](https://github.com/googleapis/nodejs-speech/pull/248))
- docs: fixed encoding typo ([#263](https://github.com/googleapis/nodejs-speech/pull/263))
- docs(samples): updated samples code to use async await ([#214](https://github.com/googleapis/nodejs-speech/pull/214))
- docs: remove unused long running operation message types
- docs: fix typo in sample ([#203](https://github.com/googleapis/nodejs-speech/pull/203))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.29.0 ([#264](https://github.com/googleapis/nodejs-speech/pull/264))
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#245](https://github.com/googleapis/nodejs-speech/pull/245))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#210](https://github.com/googleapis/nodejs-speech/pull/210))
- fix(deps): update dependency google-gax to ^0.22.0 ([#236](https://github.com/googleapis/nodejs-speech/pull/236))
- fix(deps): update dependency through2 to v3 ([#230](https://github.com/googleapis/nodejs-speech/pull/230))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#200](https://github.com/googleapis/nodejs-speech/pull/200))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#265](https://github.com/googleapis/nodejs-speech/pull/265))
- chore(build): inject yoshi automation key ([#262](https://github.com/googleapis/nodejs-speech/pull/262))
- chore: update nyc and eslint configs ([#261](https://github.com/googleapis/nodejs-speech/pull/261))
- chore: fix publish.sh permission +x ([#259](https://github.com/googleapis/nodejs-speech/pull/259))
- fix(build): fix Kokoro release script ([#258](https://github.com/googleapis/nodejs-speech/pull/258))
- build: add Kokoro configs for autorelease ([#257](https://github.com/googleapis/nodejs-speech/pull/257))
- chore: always nyc report before calling codecov ([#253](https://github.com/googleapis/nodejs-speech/pull/253))
- chore: nyc ignore build/test by default ([#252](https://github.com/googleapis/nodejs-speech/pull/252))
- chore: update license file ([#250](https://github.com/googleapis/nodejs-speech/pull/250))
- fix(build): fix system key decryption ([#246](https://github.com/googleapis/nodejs-speech/pull/246))
- chore: add a synth.metadata
- refactor: convert samples test from ava to mocha ([#221](https://github.com/googleapis/nodejs-speech/pull/221))
- chore: update eslintignore config ([#235](https://github.com/googleapis/nodejs-speech/pull/235))
- chore: update proto comments and grpc timeouts ([#234](https://github.com/googleapis/nodejs-speech/pull/234))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#233](https://github.com/googleapis/nodejs-speech/pull/233))
- chore: drop contributors from multiple places ([#232](https://github.com/googleapis/nodejs-speech/pull/232))
- chore: use latest npm on Windows ([#231](https://github.com/googleapis/nodejs-speech/pull/231))
- chore: update eslint config ([#228](https://github.com/googleapis/nodejs-speech/pull/228))
- chore: update CircleCI config ([#227](https://github.com/googleapis/nodejs-speech/pull/227))
- chore(deps): update dependency eslint-plugin-node to v8 ([#219](https://github.com/googleapis/nodejs-speech/pull/219))
- fix: fix the sample tests again ([#218](https://github.com/googleapis/nodejs-speech/pull/218))
- fix: fix the sample tests ([#217](https://github.com/googleapis/nodejs-speech/pull/217))
- chore: remove unused dependencies ([#216](https://github.com/googleapis/nodejs-speech/pull/216))
- chore: update issue templates ([#215](https://github.com/googleapis/nodejs-speech/pull/215))
- chore: remove old issue template ([#212](https://github.com/googleapis/nodejs-speech/pull/212))
- build: run tests on node11 ([#211](https://github.com/googleapis/nodejs-speech/pull/211))
- chores(build): do not collect sponge.xml from windows builds ([#209](https://github.com/googleapis/nodejs-speech/pull/209))
- chores(build): run codecov on continuous builds ([#208](https://github.com/googleapis/nodejs-speech/pull/208))
- chore: update new issue template ([#207](https://github.com/googleapis/nodejs-speech/pull/207))
- chore(deps): update dependency sinon to v7 ([#202](https://github.com/googleapis/nodejs-speech/pull/202))
- build: fix codecov uploading on Kokoro ([#204](https://github.com/googleapis/nodejs-speech/pull/204))

## v2.1.1

### Bug fixes
- fix: send streamingConfig as a separate write before audioContent ([#176](https://github.com/googleapis/nodejs-speech/pull/176))
- fix: Parse response errors and emit as error event. ([#172](https://github.com/googleapis/nodejs-speech/pull/172))
- fix(deps): update dependency google-gax to ^0.20.0 ([#168](https://github.com/googleapis/nodejs-speech/pull/168))
- fix(samples): storage import ([#166](https://github.com/googleapis/nodejs-speech/pull/166))
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#178](https://github.com/googleapis/nodejs-speech/pull/178))

### Documentation
- docs(sample): auto_punctuation & model selection ([#179](https://github.com/googleapis/nodejs-speech/pull/179))
- docs: regenerate library README.md that got overwritten by samples README ([#175](https://github.com/googleapis/nodejs-speech/pull/175))

### Internal / Testing Changes
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#193](https://github.com/googleapis/nodejs-speech/pull/193))
- Update kokoro config ([#190](https://github.com/googleapis/nodejs-speech/pull/190))
- Update kokoro config ([#189](https://github.com/googleapis/nodejs-speech/pull/189))
- test: remove appveyor config ([#187](https://github.com/googleapis/nodejs-speech/pull/187))
- Update the CI config ([#185](https://github.com/googleapis/nodejs-speech/pull/185))
- test: throw on deprecation ([#132](https://github.com/googleapis/nodejs-speech/pull/132))
- Fix unhandled promise rejection in tests ([#180](https://github.com/googleapis/nodejs-speech/pull/180))
- Enable prefer-const in the eslint config ([#181](https://github.com/googleapis/nodejs-speech/pull/181))
- Enable no-var in eslint ([#177](https://github.com/googleapis/nodejs-speech/pull/177))
- fix(tests): match regex ([#174](https://github.com/googleapis/nodejs-speech/pull/174))
- Switch to let/const ([#169](https://github.com/googleapis/nodejs-speech/pull/169))

## v2.1.0

### Implementation Changes
- fix: Register error event handler immediately. ([#156](https://github.com/googleapis/nodejs-speech/pull/156))

### New Features
- Re-generate library using /synth.py ([#160](https://github.com/googleapis/nodejs-speech/pull/160))
    - brings in Audio logging, Automatic punctuation, Video transcription, Model selection features

### Dependencies

- fix(deps): update dependency @google-cloud/storage to v2 ([#159](https://github.com/googleapis/nodejs-speech/pull/159))
- chore(deps): update dependency nyc to v13 ([#153](https://github.com/googleapis/nodejs-speech/pull/153))
- fix(deps): update dependency google-gax to ^0.19.0 ([#148](https://github.com/googleapis/nodejs-speech/pull/148))
- chore(deps): update dependency eslint-config-prettier to v3 ([#143](https://github.com/googleapis/nodejs-speech/pull/143))
- chore(deps): lock file maintenance ([#137](https://github.com/googleapis/nodejs-speech/pull/137))
- chore(deps): lock file maintenance ([#136](https://github.com/googleapis/nodejs-speech/pull/136))
- fix(deps): update dependency google-gax to ^0.18.0 ([#131](https://github.com/googleapis/nodejs-speech/pull/131))
- chore(deps): lock file maintenance ([#129](https://github.com/googleapis/nodejs-speech/pull/129))
- chore(deps): lock file maintenance ([#123](https://github.com/googleapis/nodejs-speech/pull/123))
- chore(deps): update dependency eslint-plugin-node to v7 ([#119](https://github.com/googleapis/nodejs-speech/pull/119))
- chore(deps): lock file maintenance ([#117](https://github.com/googleapis/nodejs-speech/pull/117))

### Documentation
- Add streaming microphone sample for Speech ([#87](https://github.com/googleapis/nodejs-speech/pull/87))
- Code Samples for new v1p1beta1 features ([#118](https://github.com/googleapis/nodejs-speech/pull/118))

### Internal / Testing Changes
- Update CI config ([#164](https://github.com/googleapis/nodejs-speech/pull/164))
- Retry npm install in CI ([#161](https://github.com/googleapis/nodejs-speech/pull/161))
- Update the CircleCI config ([#157](https://github.com/googleapis/nodejs-speech/pull/157))
- fix: use regex to test output ([#150](https://github.com/googleapis/nodejs-speech/pull/150))
- updates word time offsets region tag ([#146](https://github.com/googleapis/nodejs-speech/pull/146))
- Speech region tag update ([#145](https://github.com/googleapis/nodejs-speech/pull/145))
- Update the CI config ([#152](https://github.com/googleapis/nodejs-speech/pull/152))
- Add kokoro config ([#151](https://github.com/googleapis/nodejs-speech/pull/151))
- chore: make the CircleCI config consistent
- chore: do not use npm ci ([#141](https://github.com/googleapis/nodejs-speech/pull/141))
- chore: ignore package-lock.json ([#138](https://github.com/googleapis/nodejs-speech/pull/138))
- chore: update renovate config ([#133](https://github.com/googleapis/nodejs-speech/pull/133))
- chore: make the CircleCI config consistent
- chore: move mocha options to mocha.opts ([#127](https://github.com/googleapis/nodejs-speech/pull/127))
- chore: require node 8 for samples ([#128](https://github.com/googleapis/nodejs-speech/pull/128))
- test: use strictEqual in tests ([#120](https://github.com/googleapis/nodejs-speech/pull/120))
- modify helpers.js to be compatible with generated code ([#116](https://github.com/googleapis/nodejs-speech/pull/116))
