# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/grafeas?activeTab=versions

### [3.4.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.1...v3.4.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#262](https://www.github.com/googleapis/nodejs-grafeas/issues/262)) ([2713381](https://www.github.com/googleapis/nodejs-grafeas/commit/27133818c3b6ef89ef5bb53a001af7b6634f60b0))

### [3.4.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.4.0...v3.4.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#253](https://www.github.com/googleapis/nodejs-grafeas/issues/253)) ([2bd6c8d](https://www.github.com/googleapis/nodejs-grafeas/commit/2bd6c8d88cdc36bd18f71c407816af7fb62da4ed))
* use require() to load JSON protos ([#256](https://www.github.com/googleapis/nodejs-grafeas/issues/256)) ([c5a5925](https://www.github.com/googleapis/nodejs-grafeas/commit/c5a5925b396de53e147e192880ff8639eb315474))

## [3.4.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.3...v3.4.0) (2021-01-09)


### Features

* adds style enumeration ([#223](https://www.github.com/googleapis/nodejs-grafeas/issues/223)) ([c1318e4](https://www.github.com/googleapis/nodejs-grafeas/commit/c1318e483c8ed39ed45d9a5391c075131ef63a71))

### [3.3.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.2...v3.3.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#217](https://www.github.com/googleapis/nodejs-grafeas/issues/217)) ([9fe7715](https://www.github.com/googleapis/nodejs-grafeas/commit/9fe77152c54eb74f40cbfc9ba42f1a497a1642fb))

### [3.3.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.1...v3.3.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#213](https://www.github.com/googleapis/nodejs-grafeas/issues/213)) ([4e2cada](https://www.github.com/googleapis/nodejs-grafeas/commit/4e2cadaed5cc892ca6ae1318fa82146a4f1160dc))

### [3.3.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.3.0...v3.3.1) (2020-08-21)


### Bug Fixes

* update descriptor logic ([#188](https://www.github.com/googleapis/nodejs-grafeas/issues/188)) ([df14677](https://www.github.com/googleapis/nodejs-grafeas/commit/df146775dc37b2de99c7bb44516c8163669da795))
* use gax protobuf reference ([#187](https://www.github.com/googleapis/nodejs-grafeas/issues/187)) ([c5f2d35](https://www.github.com/googleapis/nodejs-grafeas/commit/c5f2d353e61be0607fc35924cd7348ea076c102c))

## [3.3.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.2.0...v3.3.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#165](https://www.github.com/googleapis/nodejs-grafeas/issues/165)) ([b65bb34](https://www.github.com/googleapis/nodejs-grafeas/commit/b65bb3426c839f6514826d87c7a65ae7dcb85b8d))


### Bug Fixes

* handle fallback option properly ([#169](https://www.github.com/googleapis/nodejs-grafeas/issues/169)) ([466c05c](https://www.github.com/googleapis/nodejs-grafeas/commit/466c05ce28351b276a6a890997a8c1da743be650))

## [3.2.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.1.0...v3.2.0) (2020-06-04)


### Features

* add proto3Optional field ([#161](https://www.github.com/googleapis/nodejs-grafeas/issues/161)) ([1ff0ef4](https://www.github.com/googleapis/nodejs-grafeas/commit/1ff0ef472b1907b2ca0e2b2efc1f5f2087e9d747))

## [3.1.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v3.0.0...v3.1.0) (2020-05-08)


### Features

* change export in protos.js to google_cloud_grafeas_3_0_0_protos ([#150](https://www.github.com/googleapis/nodejs-grafeas/issues/150)) ([364f9c9](https://www.github.com/googleapis/nodejs-grafeas/commit/364f9c9c012bbd5bf60d6cd3288b06ba7a46155b))


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.8.0 ([#143](https://www.github.com/googleapis/nodejs-grafeas/issues/143)) ([13be859](https://www.github.com/googleapis/nodejs-grafeas/commit/13be859361752c50a08b86614320fc8ef61ff125))
* regenerate unit tests ([#157](https://www.github.com/googleapis/nodejs-grafeas/issues/157)) ([4d05016](https://www.github.com/googleapis/nodejs-grafeas/commit/4d05016a71c6e1244fee1c189ff799d85a634636))
* synth.py clean up for multiple version ([#158](https://www.github.com/googleapis/nodejs-grafeas/issues/158)) ([526d686](https://www.github.com/googleapis/nodejs-grafeas/commit/526d6862a8d80453d55c2577555af15e9e0c7f55))

## [3.0.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.7.0...v3.0.0) (2020-04-12)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#130](https://www.github.com/googleapis/nodejs-grafeas/issues/130)) ([74d809b](https://www.github.com/googleapis/nodejs-grafeas/commit/74d809b9ede6edd844cef6db0315383df32671f5))


### Bug Fixes

* export explicit version from protos.js ([#135](https://www.github.com/googleapis/nodejs-grafeas/issues/135)) ([289f055](https://www.github.com/googleapis/nodejs-grafeas/commit/289f055a2375db09e9199c0e7534771facaef146))
* remove eslint, update gax, fix generated protos, run the generator ([#139](https://www.github.com/googleapis/nodejs-grafeas/issues/139)) ([86c96aa](https://www.github.com/googleapis/nodejs-grafeas/commit/86c96aaa3507e6d76b75042aac945838db335eec))

## [2.7.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.6.0...v2.7.0) (2020-03-06)


### Features

* deferred client initialization ([#115](https://www.github.com/googleapis/nodejs-grafeas/issues/115)) ([dae70de](https://www.github.com/googleapis/nodejs-grafeas/commit/dae70dee2844a14b12fa64ed2ca530613d6c7e16))

## [2.6.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.2...v2.6.0) (2020-03-03)


### Features

* export protos in src/index.ts ([09db103](https://www.github.com/googleapis/nodejs-grafeas/commit/09db103ae572a97031984cf07fc444c586ed2fd2))


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([c44a06b](https://www.github.com/googleapis/nodejs-grafeas/commit/c44a06baf2c7fc390b14af2596fb5fe03fde54a7))
* **deps:** update dependency @grpc/grpc-js to ^0.7.0 ([#114](https://www.github.com/googleapis/nodejs-grafeas/issues/114)) ([7976bef](https://www.github.com/googleapis/nodejs-grafeas/commit/7976bef684efe1eb8ea4a02851df984b1340f0e4))

### [2.5.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.1...v2.5.2) (2020-02-01)


### Bug Fixes

* update resource references in protos ([8252114](https://www.github.com/googleapis/nodejs-grafeas/commit/8252114799a771c2e5b91cda2912a7e87f1f579a))

### [2.5.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.5.0...v2.5.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([7917d43](https://www.github.com/googleapis/nodejs-grafeas/commit/7917d43c82c6c43d5ef4a3ec99f934fba6f89928))

## [2.5.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.4.0...v2.5.0) (2020-01-25)


### Features

* move to typescript code generation ([#83](https://www.github.com/googleapis/nodejs-grafeas/issues/83)) ([7c921ab](https://www.github.com/googleapis/nodejs-grafeas/commit/7c921ab4e30bb5c27379e226e24d88d4a93c8413))

## [2.4.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.3...v2.4.0) (2020-01-09)


### Features

* proto update: UpgradeNotes added ([86f2d90](https://www.github.com/googleapis/nodejs-grafeas/commit/86f2d90ea924f6067e08299635e051c5dd03a1a2))

### [2.3.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.2...v2.3.3) (2020-01-02)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([e05d7ff](https://www.github.com/googleapis/nodejs-grafeas/commit/e05d7ff66b12d2b14a7e65fba355f64f5ce578f0))
* **docs:** bump release level to GA ([#64](https://www.github.com/googleapis/nodejs-grafeas/issues/64)) ([7dcae38](https://www.github.com/googleapis/nodejs-grafeas/commit/7dcae38bf3dd3f52656c98b7f342a068e0bc4577))

### [2.3.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.1...v2.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#60](https://www.github.com/googleapis/nodejs-grafeas/issues/60)) ([668c16f](https://www.github.com/googleapis/nodejs-grafeas/commit/668c16f5c2773ebd580930d3e97c8c3328852688))

### [2.3.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.0...v2.3.1) (2019-11-08)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#53](https://www.github.com/googleapis/nodejs-grafeas/issues/53)) ([6d45413](https://www.github.com/googleapis/nodejs-grafeas/commit/6d4541373dbc0ca6da27903666ad1ec8d1fbefed))

## [2.3.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.2.0...v2.3.0) (2019-10-09)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.6.0 ([#42](https://www.github.com/googleapis/nodejs-grafeas/issues/42)) ([5dd652e](https://www.github.com/googleapis/nodejs-grafeas/commit/5dd652e))
* use compatible version of google-gax ([e241c53](https://www.github.com/googleapis/nodejs-grafeas/commit/e241c53))


### Features

* .d.ts for protos ([#44](https://www.github.com/googleapis/nodejs-grafeas/issues/44)) ([acccd3c](https://www.github.com/googleapis/nodejs-grafeas/commit/acccd3c))

## [2.2.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.5...v2.2.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([c79eae1](https://www.github.com/googleapis/nodejs-grafeas/commit/c79eae1))

### [2.1.5](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.4...v2.1.5) (2019-08-28)


### Bug Fixes

* **docs:** stop linking reference documents to anchor ([4551cdf](https://www.github.com/googleapis/nodejs-grafeas/commit/4551cdf))

### [2.1.4](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.3...v2.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([631b896](https://www.github.com/googleapis/nodejs-grafeas/commit/631b896))

### [2.1.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.2...v2.1.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.5.0 ([#25](https://www.github.com/googleapis/nodejs-grafeas/issues/25)) ([d6681ea](https://www.github.com/googleapis/nodejs-grafeas/commit/d6681ea))

### [2.1.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.1...v2.1.2) (2019-06-26)


### Bug Fixes

* changes to default values in vulnerability.proto ([de6dcda](https://www.github.com/googleapis/nodejs-grafeas/commit/de6dcda))
* **docs:** link to reference docs section on googleapis.dev ([#23](https://www.github.com/googleapis/nodejs-grafeas/issues/23)) ([4e8f852](https://www.github.com/googleapis/nodejs-grafeas/commit/4e8f852))

### [2.1.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.0...v2.1.1) (2019-06-19)


### Bug Fixes

* **revert:** revert exposing NoteKind enum; automate jsdoc fix ([#19](https://www.github.com/googleapis/nodejs-grafeas/issues/19)) ([4366cac](https://www.github.com/googleapis/nodejs-grafeas/commit/4366cac))

## [2.1.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.0.0...v2.1.0) (2019-06-19)


### Features

* add NoteKind enum ([#17](https://www.github.com/googleapis/nodejs-grafeas/issues/17)) ([5738516](https://www.github.com/googleapis/nodejs-grafeas/commit/5738516))

## [2.0.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v1.0.0...v2.0.0) (2019-06-18)


### ⚠ BREAKING CHANGES

* remove build signature support (#14)

### Bug Fixes

* **docs:** move to new client docs URL ([#12](https://www.github.com/googleapis/nodejs-grafeas/issues/12)) ([12ece17](https://www.github.com/googleapis/nodejs-grafeas/commit/12ece17))


### Code Refactoring

* remove build signature support ([#14](https://www.github.com/googleapis/nodejs-grafeas/issues/14)) ([d13ec5f](https://www.github.com/googleapis/nodejs-grafeas/commit/d13ec5f))

## 1.0.0 (2019-06-06)


### Bug Fixes

* delete protos added to wrong path ([29418de](https://www.github.com/googleapis/nodejs-grafeas/commit/29418de))
* get tests passing so that we can land and release module ([#10](https://www.github.com/googleapis/nodejs-grafeas/issues/10)) ([4a0c0e4](https://www.github.com/googleapis/nodejs-grafeas/commit/4a0c0e4))


### Features

* initial implementation of library ([66f09bb](https://www.github.com/googleapis/nodejs-grafeas/commit/66f09bb))
* initial implementation of library ([#1](https://www.github.com/googleapis/nodejs-grafeas/issues/1)) ([744da47](https://www.github.com/googleapis/nodejs-grafeas/commit/744da47))
* support apiEndpoint override in client constructor ([#9](https://www.github.com/googleapis/nodejs-grafeas/issues/9)) ([25ecc0c](https://www.github.com/googleapis/nodejs-grafeas/commit/25ecc0c))
