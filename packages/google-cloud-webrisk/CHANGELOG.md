# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/web-risk?activeTab=versions

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v5.1.0...web-risk-v5.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v5.0.1...web-risk-v5.1.0) (2025-05-09)


### Features

* [webrisk] A new method_signature `parent,submission` is added to method `SubmitUri` in service `WebRiskService` ([#6236](https://github.com/googleapis/google-cloud-node/issues/6236)) ([03dbe6c](https://github.com/googleapis/google-cloud-node/commit/03dbe6ca245435b0ed60ae33bac202e09706df91))
* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/web-risk-v5.0.0...web-risk-v5.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.3.1...web-risk-v5.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [4.3.1](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.3.0...web-risk-v4.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.2.0...web-risk-v4.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.1.0...web-risk-v4.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.0.2...web-risk-v4.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [4.0.2](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.0.1...web-risk-v4.0.2) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/web-risk-v4.0.0...web-risk-v4.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v3.3.0...web-risk-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/web-risk-v3.2.2...web-risk-v3.3.0) (2023-05-20)


### Features

* [webrisk] add SubmitUri endpoint ([#4286](https://github.com/googleapis/google-cloud-node/issues/4286)) ([40edfc5](https://github.com/googleapis/google-cloud-node/commit/40edfc52a9894cf57b389c2744563bfa490102cb))

## [3.2.2](https://github.com/googleapis/google-cloud-node/compare/web-risk-v3.2.1...web-risk-v3.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/web-risk-v3.2.0...web-risk-v3.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [3.2.0](https://github.com/googleapis/nodejs-web-risk/compare/v3.1.1...v3.2.0) (2022-11-10)


### Features

* Accept google-gax instance as a parameter ([#342](https://github.com/googleapis/nodejs-web-risk/issues/342)) ([b61e98b](https://github.com/googleapis/nodejs-web-risk/commit/b61e98b2837644cd1991990742f9932eaba1712d))
* Add SOCIAL_ENGINEERING_EXTENDED_COVERAGE threat type ([#350](https://github.com/googleapis/nodejs-web-risk/issues/350)) ([ba8a366](https://github.com/googleapis/nodejs-web-risk/commit/ba8a36677ca9e82c49e66ddbfdbab421555da167))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#353](https://github.com/googleapis/nodejs-web-risk/issues/353)) ([caa5a26](https://github.com/googleapis/nodejs-web-risk/commit/caa5a269ed08cd049fd2458fde235d652e847afe))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-web-risk/issues/1553)) ([#341](https://github.com/googleapis/nodejs-web-risk/issues/341)) ([5b2e449](https://github.com/googleapis/nodejs-web-risk/commit/5b2e4491384cb2956ed9b88f7ec30e16fbbbc7cf))
* Regenerated protos JS and TS definitions ([#356](https://github.com/googleapis/nodejs-web-risk/issues/356)) ([75b917a](https://github.com/googleapis/nodejs-web-risk/commit/75b917afd49769039d3c4eb8bb1b8852dd857970))
* use google-gax v3.3.0 ([5b2e449](https://github.com/googleapis/nodejs-web-risk/commit/5b2e4491384cb2956ed9b88f7ec30e16fbbbc7cf))

## [3.1.1](https://github.com/googleapis/nodejs-web-risk/compare/v3.1.0...v3.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#337](https://github.com/googleapis/nodejs-web-risk/issues/337)) ([2da1386](https://github.com/googleapis/nodejs-web-risk/commit/2da138691740b8ef1264613346587839a52d083b))
* change import long to require ([#338](https://github.com/googleapis/nodejs-web-risk/issues/338)) ([50a0a67](https://github.com/googleapis/nodejs-web-risk/commit/50a0a672ffbb9b5e0cda7dc1a53e51c31b20684a))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-web-risk/issues/1546)) ([#340](https://github.com/googleapis/nodejs-web-risk/issues/340)) ([0a19105](https://github.com/googleapis/nodejs-web-risk/commit/0a1910579ee8bf97a5b0ea20d05a39fc933d7eac))

## [3.1.0](https://github.com/googleapis/nodejs-web-risk/compare/v3.0.0...v3.1.0) (2022-06-29)


### Features

* support regapic LRO ([#331](https://github.com/googleapis/nodejs-web-risk/issues/331)) ([265c092](https://github.com/googleapis/nodejs-web-risk/commit/265c092562ea66e985950c27ae8dd030b2c45925))

## [3.0.0](https://github.com/googleapis/nodejs-web-risk/compare/v2.2.0...v3.0.0) (2022-05-17)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#326)

### Build System

* update library to use Node 12 ([#326](https://github.com/googleapis/nodejs-web-risk/issues/326)) ([c787161](https://github.com/googleapis/nodejs-web-risk/commit/c787161b830bcc482b05171dac38418203fcac87))

## [2.2.0](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.8...v2.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#277](https://www.github.com/googleapis/nodejs-web-risk/issues/277)) ([ea16d36](https://www.github.com/googleapis/nodejs-web-risk/commit/ea16d364a1ac670f30579bd2483cbfdaafdd0f21))

### [2.1.8](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.7...v2.1.8) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#275](https://www.github.com/googleapis/nodejs-web-risk/issues/275)) ([daa0774](https://www.github.com/googleapis/nodejs-web-risk/commit/daa0774aaa6e6a0c274c894e2bfbd8cfc2726d88))

### [2.1.7](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.6...v2.1.7) (2021-08-02)


### Bug Fixes

* update branch to main ([#270](https://www.github.com/googleapis/nodejs-web-risk/issues/270)) ([c95d1c2](https://www.github.com/googleapis/nodejs-web-risk/commit/c95d1c290379c9d788d4074db8f43b4f4f3f4a1f))

### [2.1.6](https://www.github.com/googleapis/nodejs-web-risk/compare/v2.1.5...v2.1.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#266](https://www.github.com/googleapis/nodejs-web-risk/issues/266)) ([726ecdc](https://www.github.com/googleapis/nodejs-web-risk/commit/726ecdc38e570415556f32aa5eb437bd5e9261cf))

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
