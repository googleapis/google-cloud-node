# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/talent?activeTab=versions

### [3.2.6](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.5...v3.2.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#347](https://www.github.com/googleapis/nodejs-talent/issues/347)) ([cd75d00](https://www.github.com/googleapis/nodejs-talent/commit/cd75d006a631ebad4c4c4390a326fe30af074802))

### [3.2.5](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.4...v3.2.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#345](https://www.github.com/googleapis/nodejs-talent/issues/345)) ([85c9f44](https://www.github.com/googleapis/nodejs-talent/commit/85c9f442fc9b2054af19e479ded0cb04f8846161))

### [3.2.4](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.3...v3.2.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#341](https://www.github.com/googleapis/nodejs-talent/issues/341)) ([2c240e8](https://www.github.com/googleapis/nodejs-talent/commit/2c240e8cf02566285836b506addbfdfcc76cfa98))

### [3.2.3](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.2...v3.2.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#335](https://www.github.com/googleapis/nodejs-talent/issues/335)) ([7ba1f51](https://www.github.com/googleapis/nodejs-talent/commit/7ba1f51db25cf37b33f9a611e031c7294112649a))

### [3.2.2](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.1...v3.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#324](https://www.github.com/googleapis/nodejs-talent/issues/324)) ([912fb40](https://www.github.com/googleapis/nodejs-talent/commit/912fb40b63085c1cde18b669b13be0a1c1422d4e))

### [3.2.1](https://www.github.com/googleapis/nodejs-talent/compare/v3.2.0...v3.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#315](https://www.github.com/googleapis/nodejs-talent/issues/315)) ([e2bb1fc](https://www.github.com/googleapis/nodejs-talent/commit/e2bb1fc5b03cd3ce7ca8c655012935aa83e37921))
* use require() to load JSON protos ([#318](https://www.github.com/googleapis/nodejs-talent/issues/318)) ([d4e91b9](https://www.github.com/googleapis/nodejs-talent/commit/d4e91b9a623acfce93411a20a37c499b1a5bc3a5))

## [3.2.0](https://www.github.com/googleapis/nodejs-talent/compare/v3.1.0...v3.2.0) (2021-03-02)


### Features

* **docs:** indicate library is ga ([#287](https://www.github.com/googleapis/nodejs-talent/issues/287)) ([5051732](https://www.github.com/googleapis/nodejs-talent/commit/5051732b4467ba33ecd44de1ef79cc5b655c7f36))

## [3.1.0](https://www.github.com/googleapis/nodejs-talent/compare/v3.0.2...v3.1.0) (2021-01-09)


### Features

* adds style enumeration ([#281](https://www.github.com/googleapis/nodejs-talent/issues/281)) ([88651c2](https://www.github.com/googleapis/nodejs-talent/commit/88651c2a95638e685235fd8bdf478d4ce71ce941))

### [3.0.2](https://www.github.com/googleapis/nodejs-talent/compare/v3.0.1...v3.0.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#274](https://www.github.com/googleapis/nodejs-talent/issues/274)) ([a25c71f](https://www.github.com/googleapis/nodejs-talent/commit/a25c71ff62a46138e088f01d5b9cd8b165588bbd))

### [3.0.1](https://www.github.com/googleapis/nodejs-talent/compare/v3.0.0...v3.0.1) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#264](https://www.github.com/googleapis/nodejs-talent/issues/264)) ([260b152](https://www.github.com/googleapis/nodejs-talent/commit/260b152fe76b2cbe63dba8378710716feb793c82))

## [3.0.0](https://www.github.com/googleapis/nodejs-talent/compare/v2.1.0...v3.0.0) (2020-10-13)


### ⚠ BREAKING CHANGES

* moves v4 API to default (#243)

### Features

* moves v4 API to default ([#243](https://www.github.com/googleapis/nodejs-talent/issues/243)) ([72cc13a](https://www.github.com/googleapis/nodejs-talent/commit/72cc13a27bd53b5b949d8a909649705131feab59))
* Remove commute methods from Job Search v4 API ([#249](https://www.github.com/googleapis/nodejs-talent/issues/249)) ([9e22b14](https://www.github.com/googleapis/nodejs-talent/commit/9e22b1492bbbbbd4b8eafb242de5e54ad842cd9c))

## [2.1.0](https://www.github.com/googleapis/nodejs-talent/compare/v2.0.0...v2.1.0) (2020-06-29)


### Features

* **secrets:** begin migration to secret manager from keystore ([#213](https://www.github.com/googleapis/nodejs-talent/issues/213)) ([8cba7c3](https://www.github.com/googleapis/nodejs-talent/commit/8cba7c33ca1d631e7d369ec06ebf2bdf39530ffd))


### Bug Fixes

* handle fallback option properly ([#216](https://www.github.com/googleapis/nodejs-talent/issues/216)) ([ae2ecc5](https://www.github.com/googleapis/nodejs-talent/commit/ae2ecc51bc12fa410e766bd06e7668e51f01d627))
* update node issue template ([#217](https://www.github.com/googleapis/nodejs-talent/issues/217)) ([82ece56](https://www.github.com/googleapis/nodejs-talent/commit/82ece56e1edce6e4074b6256aba9c858a00c6466))

## [2.0.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.7.1...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* remove the ProjectOrTenant resource and its references
* removed auto-pagination from searchJobs
* move API to Typescript code generation (#163)

### Features

* check status of long running operation by its name ([#205](https://www.github.com/googleapis/nodejs-talent/issues/205)) ([66d3b2e](https://www.github.com/googleapis/nodejs-talent/commit/66d3b2e6c5c6293733a6aa209eb30d940b73dd8d))
* deferred client initialization ([#171](https://www.github.com/googleapis/nodejs-talent/issues/171)) ([f5b2220](https://www.github.com/googleapis/nodejs-talent/commit/f5b222001c9510ccc0857322c6d9f9c67ec8c00c))
* drop node8 support, support for async iterators ([#185](https://www.github.com/googleapis/nodejs-talent/issues/185)) ([cf2af92](https://www.github.com/googleapis/nodejs-talent/commit/cf2af92fef92ebf2e93a934117aed1c87a85ab6e))
* move API to Typescript code generation ([#163](https://www.github.com/googleapis/nodejs-talent/issues/163)) ([81e9639](https://www.github.com/googleapis/nodejs-talent/commit/81e963990013ce0d0b6909243621befac1a15e75))
* removed auto-pagination from searchJobs ([28c9234](https://www.github.com/googleapis/nodejs-talent/commit/28c92340ffa1c5f3800d85247cda578608a7125e))


### Bug Fixes

* export explicit version from protos.js ([#189](https://www.github.com/googleapis/nodejs-talent/issues/189)) ([64d8de6](https://www.github.com/googleapis/nodejs-talent/commit/64d8de6ea8a5fd3fc9128e8ec21408f9fa65408e))
* remove eslint, update gax, fix generated protos, run the generator ([#194](https://www.github.com/googleapis/nodejs-talent/issues/194)) ([cbef571](https://www.github.com/googleapis/nodejs-talent/commit/cbef5715a1d85ac19bbad76b3a5ebfecbb9f2ee5))
* synth.py clean up for multiple version ([#207](https://www.github.com/googleapis/nodejs-talent/issues/207)) ([49c403a](https://www.github.com/googleapis/nodejs-talent/commit/49c403a44748d52bd4bf663c016b7584afab6b3a))


### Code Refactoring

* remove the ProjectOrTenant resource and its references ([3784e63](https://www.github.com/googleapis/nodejs-talent/commit/3784e63807b9c102b10b2f1d608ec9601bcc59e3))

### [1.7.1](https://www.github.com/googleapis/nodejs-talent/compare/v1.7.0...v1.7.1) (2020-01-29)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([15f03b7](https://www.github.com/googleapis/nodejs-talent/commit/15f03b7fce125422207467fbb40e21f9054fa75e))

## [1.7.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.6.2...v1.7.0) (2020-01-28)


### Features

* adds new type annotations ([341e495](https://www.github.com/googleapis/nodejs-talent/commit/341e4957b7586986c9a141b63913942881510a67))

### [1.6.2](https://www.github.com/googleapis/nodejs-talent/compare/v1.6.1...v1.6.2) (2019-12-31)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([1166c22](https://www.github.com/googleapis/nodejs-talent/commit/1166c22a68aab561c0dcf85ae051f6d1cdc66c88))
* adds missing proto import ([220bec0](https://www.github.com/googleapis/nodejs-talent/commit/220bec0d190419ab24724eb678002a734dc2488d))
* import long type into proto ts declaration file ([#127](https://www.github.com/googleapis/nodejs-talent/issues/127)) ([c4b9e4a](https://www.github.com/googleapis/nodejs-talent/commit/c4b9e4a12bbbe0ff55b3fd6c9fd73ea180013d26))

### [1.6.1](https://www.github.com/googleapis/nodejs-talent/compare/v1.6.0...v1.6.1) (2019-11-15)


### Bug Fixes

* **docs:** bump release level to beta ([#124](https://www.github.com/googleapis/nodejs-talent/issues/124)) ([f5f0ab9](https://www.github.com/googleapis/nodejs-talent/commit/f5f0ab92034eb6f52b13c180b05faaed4c02de91))
* **docs:** snippets are now replaced in jsdoc comments ([#122](https://www.github.com/googleapis/nodejs-talent/issues/122)) ([9f8af78](https://www.github.com/googleapis/nodejs-talent/commit/9f8af789a2275bae0268d5589aa1a7c4ef00e831))

## [1.6.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.5.1...v1.6.0) (2019-11-08)


### Features

* add query language code parameter ([#118](https://www.github.com/googleapis/nodejs-talent/issues/118)) ([71845bf](https://www.github.com/googleapis/nodejs-talent/commit/71845bf76d677268ec1a17d926da6fb1fadef930))

### [1.5.1](https://www.github.com/googleapis/nodejs-talent/compare/v1.5.0...v1.5.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#114](https://www.github.com/googleapis/nodejs-talent/issues/114)) ([2ea4371](https://www.github.com/googleapis/nodejs-talent/commit/2ea43715fff4d9a0704c8629b0ba04269834db0a))

## [1.5.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.4.0...v1.5.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([1100369](https://www.github.com/googleapis/nodejs-talent/commit/1100369))


### Features

* .d.ts for protos ([fa78385](https://www.github.com/googleapis/nodejs-talent/commit/fa78385))
* .d.ts for protos ([#104](https://www.github.com/googleapis/nodejs-talent/issues/104)) ([cda77b7](https://www.github.com/googleapis/nodejs-talent/commit/cda77b7))

## [1.4.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.3.0...v1.4.0) (2019-09-16)


### Features

* candidate applications and assignments support ([#98](https://www.github.com/googleapis/nodejs-talent/issues/98)) ([0a9e8c1](https://www.github.com/googleapis/nodejs-talent/commit/0a9e8c1))
* filter support ([#97](https://www.github.com/googleapis/nodejs-talent/issues/97)) ([3496527](https://www.github.com/googleapis/nodejs-talent/commit/3496527))
* load protos from JSON, grpc-fallback support ([a0cee41](https://www.github.com/googleapis/nodejs-talent/commit/a0cee41))

## [1.3.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.2.0...v1.3.0) (2019-08-08)


### Features

* allow calls with no request; adds JSON proto; introduces PersonNameFilter ([51b0a58](https://www.github.com/googleapis/nodejs-talent/commit/51b0a58))

## [1.2.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.1.0...v1.2.0) (2019-07-16)


### Features

* add new filters, path templates, and update docs ([#76](https://www.github.com/googleapis/nodejs-talent/issues/76)) ([f28802c](https://www.github.com/googleapis/nodejs-talent/commit/f28802c))

## [1.1.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.2...v1.1.0) (2019-06-28)


### Features

* batch operation support ([#69](https://www.github.com/googleapis/nodejs-talent/issues/69)) ([9c76a71](https://www.github.com/googleapis/nodejs-talent/commit/9c76a71))

### [1.0.2](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.1...v1.0.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#71](https://www.github.com/googleapis/nodejs-talent/issues/71)) ([e2d0791](https://www.github.com/googleapis/nodejs-talent/commit/e2d0791))

### [1.0.1](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.0...v1.0.1) (2019-06-13)


### Bug Fixes

* **docs:** move to new client docs URL ([#67](https://www.github.com/googleapis/nodejs-talent/issues/67)) ([6434066](https://www.github.com/googleapis/nodejs-talent/commit/6434066))

## [1.0.0](https://www.github.com/googleapis/nodejs-talent/compare/v0.3.0...v1.0.0) (2019-05-14)


### Bug Fixes

* use SummarizedProfile over HistogramQueryResult ([#54](https://www.github.com/googleapis/nodejs-talent/issues/54)) ([87036f0](https://www.github.com/googleapis/nodejs-talent/commit/87036f0))
* **deps:** update dependency google-gax to v1 ([#51](https://www.github.com/googleapis/nodejs-talent/issues/51)) ([4ad1db5](https://www.github.com/googleapis/nodejs-talent/commit/4ad1db5))
* DEADLINE_EXCEEDED is idempotent ([#52](https://www.github.com/googleapis/nodejs-talent/issues/52)) ([6f8dd1b](https://www.github.com/googleapis/nodejs-talent/commit/6f8dd1b))

## [0.3.0](https://www.github.com/googleapis/nodejs-talent/compare/v0.2.0...v0.3.0) (2019-05-09)


### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#40](https://www.github.com/googleapis/nodejs-talent/issues/40)) ([3ae00c8](https://www.github.com/googleapis/nodejs-talent/commit/3ae00c8))


### Build System

* upgrade engines field to >=8.10.0 ([#41](https://www.github.com/googleapis/nodejs-talent/issues/41)) ([4fdec5e](https://www.github.com/googleapis/nodejs-talent/commit/4fdec5e))


### Features

* add Resume and keywordSearchableProfileCustomAttributes ([#49](https://www.github.com/googleapis/nodejs-talent/issues/49)) ([d96a482](https://www.github.com/googleapis/nodejs-talent/commit/d96a482))
* add templates for company old path ([03c6bc5](https://www.github.com/googleapis/nodejs-talent/commit/03c6bc5))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#41)

## v0.2.0

03-29-2019 13:05 PDT

### Implementation Changes

**🚨 BREAKING CHANGE 🚨**

This release includes several breaking changes since v0.1.0:

- Removes `ResumeServiceClient`.
- Removes support for any string template paths relating to `projectPath` and `companyPath`, it now supports `tenantPath` and `companyOldPath` instead. 

### New Features
- feat: v4beta1 application support and proto sync ([#29](https://github.com/googleapis/nodejs-talent/pull/29))
    - Adds `ApplicationServiceClient`

### Documentation
- docs: fix broken urls in proto comments ([#22](https://github.com/googleapis/nodejs-talent/pull/22))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#25](https://github.com/googleapis/nodejs-talent/pull/25))
- build: use per-repo npm publish token ([#23](https://github.com/googleapis/nodejs-talent/pull/23))

## v0.1.0

03-12-2019 21:57 PDT

First release!
