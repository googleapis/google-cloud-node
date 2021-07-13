# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/web-risk?activeTab=versions

### [2.1.5](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.4...v2.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#264](https://www.github.com/googleapis/nodejs-web-risk/issues/264)) ([f83ea7b](https://www.github.com/googleapis/nodejs-web-risk/commit/f83ea7ba315dc7dd6985b87a497c39709664d02d))

### [2.1.4](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.3...v2.1.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#261](https://www.github.com/googleapis/nodejs-web-risk/issues/261)) ([cfae067](https://www.github.com/googleapis/nodejs-web-risk/commit/cfae067652e238e95ab654290e1d36372e5591d6))

### [2.1.3](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.2...v2.1.3) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#257](https://www.github.com/googleapis/nodejs-web-risk/issues/257)) ([e25d02e](https://www.github.com/googleapis/nodejs-web-risk/commit/e25d02ee2158ff04717af53a4a4e36e2b959e472))

### [2.1.2](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.1...v2.1.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#248](https://www.github.com/googleapis/nodejs-web-risk/issues/248)) ([8e6a80d](https://www.github.com/googleapis/nodejs-web-risk/commit/8e6a80d5a227a83727e71b06d5add4f9aa876d7f))

### [2.1.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.0...v2.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#239](https://www.github.com/googleapis/nodejs-web-risk/issues/239)) ([de691fa](https://www.github.com/googleapis/nodejs-web-risk/commit/de691fa4caddb128964b8ba7e10b49d82cb804e6))
* use require() to load JSON protos ([#242](https://www.github.com/googleapis/nodejs-web-risk/issues/242)) ([15817b1](https://www.github.com/googleapis/nodejs-web-risk/commit/15817b1e7c5d310a8d189f0c94fcd3e6054f3d12))

## [2.1.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.0.3...v2.1.0) (2021-01-09)


### Features

* adds style enumeration ([#220](https://www.github.com/googleapis/nodejs-web-risk/issues/220)) ([772ff4f](https://www.github.com/googleapis/nodejs-web-risk/commit/772ff4f9be9fa6b745f96a3d6b93578741968dbe))

### [2.0.3](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.0.2...v2.0.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#214](https://www.github.com/googleapis/nodejs-web-risk/issues/214)) ([db8ef52](https://www.github.com/googleapis/nodejs-web-risk/commit/db8ef52b1cd557e2d334c718265d5abf47946f13))

### [2.0.2](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.0.1...v2.0.2) (2020-11-09)


### Bug Fixes

* use defaultScopes, improve docs, export additional types ([#210](https://www.github.com/googleapis/nodejs-web-risk/issues/210)) ([489736a](https://www.github.com/googleapis/nodejs-web-risk/commit/489736a350a56d8702f9a0afa646a3030ca1a298))

### [2.0.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.0.0...v2.0.1) (2020-06-29)


### Bug Fixes

* add CreateSubmission to webrisk/v1 config ([#172](https://www.github.com/googleapis/nodejs-web-risk/issues/172)) ([e7851f5](https://www.github.com/googleapis/nodejs-web-risk/commit/e7851f59de6fa8a83a1e026995304ac05cab4321))
* handle fallback option properly ([#170](https://www.github.com/googleapis/nodejs-web-risk/issues/170)) ([82d2684](https://www.github.com/googleapis/nodejs-web-risk/commit/82d2684cd9c04b3bdc9edc50a79854cebf9a4990))
* update node issue template ([#171](https://www.github.com/googleapis/nodejs-web-risk/issues/171)) ([5a93c38](https://www.github.com/googleapis/nodejs-web-risk/commit/5a93c3880a09bbc70160e45d68e1dea547f888c4))
* version rearrange ([#163](https://www.github.com/googleapis/nodejs-web-risk/issues/163)) ([934b63a](https://www.github.com/googleapis/nodejs-web-risk/commit/934b63aa0163c84aceb27d306e1f656bcb2d8afd))

## [2.0.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.7.0...v2.0.0) (2020-05-12)


### ⚠ BREAKING CHANGES

* synth.py clean up for multiple version (#160)
* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support ([#139](https://www.github.com/googleapis/nodejs-web-risk/issues/139)) ([f6fa067](https://www.github.com/googleapis/nodejs-web-risk/commit/f6fa067f6f45c12b58986511bb8dcba0aa1c56cb))


### Bug Fixes

* export explicit version from protos.js ([#144](https://www.github.com/googleapis/nodejs-web-risk/issues/144)) ([c6d1391](https://www.github.com/googleapis/nodejs-web-risk/commit/c6d13916395a28e0304ad3bb06cc1d597cb55a55))
* regen protos and tests, formatting ([#157](https://www.github.com/googleapis/nodejs-web-risk/issues/157)) ([d53c859](https://www.github.com/googleapis/nodejs-web-risk/commit/d53c85997cbe5aa1d354c487614480e6a516eefa))
* remove eslint, update gax, fix generated protos, run the generator ([#148](https://www.github.com/googleapis/nodejs-web-risk/issues/148)) ([f23b8fd](https://www.github.com/googleapis/nodejs-web-risk/commit/f23b8fd6f2952fe36c4398585eeefa78ee11360b))
* remove unused files ([#151](https://www.github.com/googleapis/nodejs-web-risk/issues/151)) ([72134c3](https://www.github.com/googleapis/nodejs-web-risk/commit/72134c312f78bb141c9244cf9f49f23eb828252d))
* synth.py clean up for multiple version ([#160](https://www.github.com/googleapis/nodejs-web-risk/issues/160)) ([c1d0bb7](https://www.github.com/googleapis/nodejs-web-risk/commit/c1d0bb781ff10e959217f3630eaa0872fa0d9694))

## [1.7.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.6.0...v1.7.0) (2020-03-24)


### Features

* adds the v1 API surface ([#134](https://www.github.com/googleapis/nodejs-web-risk/issues/134)) ([34ca53c](https://www.github.com/googleapis/nodejs-web-risk/commit/34ca53c2fcb767874a011f9f86e9f24839398995))

## [1.6.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.5.0...v1.6.0) (2020-03-06)


### Features

* deferred client initialization ([#123](https://www.github.com/googleapis/nodejs-web-risk/issues/123)) ([ebafd9f](https://www.github.com/googleapis/nodejs-web-risk/commit/ebafd9fade2cf3bd3d464e55216fcd2c57225c40))
* export protos in src/index.ts ([4003c2c](https://www.github.com/googleapis/nodejs-web-risk/commit/4003c2cbc5a235d49e56165331fd85f58e5d9373))

## [1.5.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.4.1...v1.5.0) (2020-01-30)


### Features

* bump release level to GA ([#101](https://www.github.com/googleapis/nodejs-web-risk/issues/101)) ([a3ee7c4](https://www.github.com/googleapis/nodejs-web-risk/commit/a3ee7c4eaae0864360c3c46eaa97ddb3ae3f692b))

### [1.4.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.4.0...v1.4.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([e832c00](https://www.github.com/googleapis/nodejs-web-risk/commit/e832c00e75ac0600d145509db5473f8787f32a3a))

## [1.4.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.3.3...v1.4.0) (2020-01-04)


### Features

* move library to typescript code generation ([#83](https://www.github.com/googleapis/nodejs-web-risk/issues/83)) ([01f2db5](https://www.github.com/googleapis/nodejs-web-risk/commit/01f2db54a4124b229f7b14d52ea29e2ae4b3796b))


### Bug Fixes

* better client close() ([790b033](https://www.github.com/googleapis/nodejs-web-risk/commit/790b0339c339e5fdba83a9a181f1b5550ee6b6f9))

### [1.3.3](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.3.2...v1.3.3) (2019-12-05)


### Bug Fixes

* import long type into proto ts declaration file ([#77](https://www.github.com/googleapis/nodejs-web-risk/issues/77)) ([2b15305](https://www.github.com/googleapis/nodejs-web-risk/commit/2b1530507108780089a1ce8abd3b303c09a70979))
* **deps:** pin TypeScript below 3.7.0 ([75f591e](https://www.github.com/googleapis/nodejs-web-risk/commit/75f591ea06f8145040b5f159e9dc7b7b2251fc4d))

### [1.3.2](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.3.1...v1.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#73](https://www.github.com/googleapis/nodejs-web-risk/issues/73)) ([30ae72f](https://www.github.com/googleapis/nodejs-web-risk/commit/30ae72f3f327c8df6024479d106f01edff6363a4))

### [1.3.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#68](https://www.github.com/googleapis/nodejs-web-risk/issues/68)) ([ecc7f6d](https://www.github.com/googleapis/nodejs-web-risk/commit/ecc7f6d7488f443b1edff545deac8a88ac730bbf))

## [1.3.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([4bf2998](https://www.github.com/googleapis/nodejs-web-risk/commit/4bf2998))


### Features

* .d.ts for protos ([#58](https://www.github.com/googleapis/nodejs-web-risk/issues/58)) ([891da5c](https://www.github.com/googleapis/nodejs-web-risk/commit/891da5c))
* add required field behaviors ([#67](https://www.github.com/googleapis/nodejs-web-risk/issues/67)) ([5242189](https://www.github.com/googleapis/nodejs-web-risk/commit/5242189))

## [1.2.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.1.4...v1.2.0) (2019-09-16)


### Bug Fixes

* include node version with headers ([#47](https://www.github.com/googleapis/nodejs-web-risk/issues/47)) ([60b21af](https://www.github.com/googleapis/nodejs-web-risk/commit/60b21af))
* **docs:** stop linking reference documents to anchor ([6b4d509](https://www.github.com/googleapis/nodejs-web-risk/commit/6b4d509))


### Features

* load protos from JSON, grpc-fallback support ([4a3c550](https://www.github.com/googleapis/nodejs-web-risk/commit/4a3c550))

### [1.1.4](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.1.3...v1.1.4) (2019-08-02)


### Bug Fixes

* allow calls with no request, add JSON proto ([0030bcd](https://www.github.com/googleapis/nodejs-web-risk/commit/0030bcd))

### [1.1.3](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.1.2...v1.1.3) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#35](https://www.github.com/googleapis/nodejs-web-risk/issues/35)) ([c5b01ba](https://www.github.com/googleapis/nodejs-web-risk/commit/c5b01ba))

### [1.1.2](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.1.1...v1.1.2) (2019-06-24)


### Bug Fixes

* **build:** switch to using GitHub magic proxy ([#29](https://www.github.com/googleapis/nodejs-web-risk/issues/29)) ([876eea9](https://www.github.com/googleapis/nodejs-web-risk/commit/876eea9))

### [1.1.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.1.0...v1.1.1) (2019-06-15)


### Bug Fixes

* **docs:** move to new client docs URL ([#27](https://www.github.com/googleapis/nodejs-web-risk/issues/27)) ([00e3b96](https://www.github.com/googleapis/nodejs-web-risk/commit/00e3b96))

## [1.1.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.0.1...v1.1.0) (2019-06-06)


### Features

* support apiEndpoint override in client constructor ([#24](https://www.github.com/googleapis/nodejs-web-risk/issues/24)) ([0dc8cde](https://www.github.com/googleapis/nodejs-web-risk/commit/0dc8cde))

### [1.0.1](https://www.github.com/googleapis/nodejs-web-risk/compare/v1.0.0...v1.0.1) (2019-05-14)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#11](https://www.github.com/googleapis/nodejs-web-risk/issues/11)) ([ce72bb1](https://www.github.com/googleapis/nodejs-web-risk/commit/ce72bb1))
* update package name ([#12](https://www.github.com/googleapis/nodejs-web-risk/issues/12)) ([e5fee02](https://www.github.com/googleapis/nodejs-web-risk/commit/e5fee02))
* **deps:** update dependency google-gax to ^0.26.0 ([#8](https://www.github.com/googleapis/nodejs-web-risk/issues/8)) ([2f066da](https://www.github.com/googleapis/nodejs-web-risk/commit/2f066da))

## 1.0.0 (2019-05-13)


### Bug Fixes

* DEADLINE_EXCEEDED is idempotent ([#5](https://www.github.com/googleapis/nodejs-web-risk/issues/5)) ([dfe31b9](https://www.github.com/googleapis/nodejs-web-risk/commit/dfe31b9))


### Features

* initial commit of library for review ([7a08281](https://www.github.com/googleapis/nodejs-web-risk/commit/7a08281))
* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-web-risk/issues/1)) ([adfb92f](https://www.github.com/googleapis/nodejs-web-risk/commit/adfb92f))
* write quickstart sample and generate READMEs ([#2](https://www.github.com/googleapis/nodejs-web-risk/issues/2)) ([c2ef972](https://www.github.com/googleapis/nodejs-web-risk/commit/c2ef972))
