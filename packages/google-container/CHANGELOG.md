# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/container?activeTab=versions

### [2.3.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.3.0...v2.3.1) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#454](https://www.github.com/googleapis/nodejs-cloud-container/issues/454)) ([65ac281](https://www.github.com/googleapis/nodejs-cloud-container/commit/65ac2813d05cf21d234e42a52b73dae2f723de0f))

## [2.3.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.2...v2.3.0) (2021-06-09)


### Features

* support for NodeAutoprovisioning ImageType ([#446](https://www.github.com/googleapis/nodejs-cloud-container/issues/446)) ([e826d24](https://www.github.com/googleapis/nodejs-cloud-container/commit/e826d242fdfbc6831c67eb6abf6c0fb0b12b707a))

### [2.2.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.1...v2.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#441](https://www.github.com/googleapis/nodejs-cloud-container/issues/441)) ([03134c0](https://www.github.com/googleapis/nodejs-cloud-container/commit/03134c09b67eaa9cf78b06b413169d5ef3f82f3c))

### [2.2.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.2.0...v2.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#431](https://www.github.com/googleapis/nodejs-cloud-container/issues/431)) ([cdcce07](https://www.github.com/googleapis/nodejs-cloud-container/commit/cdcce07da06d7ee53b2207b8d9dd2f8e0c59a6d7))
* use require() to load JSON protos ([#434](https://www.github.com/googleapis/nodejs-cloud-container/issues/434)) ([ce2dd09](https://www.github.com/googleapis/nodejs-cloud-container/commit/ce2dd092d84d165f905f2f912f1fdb382c8b69e5))

## [2.2.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.2...v2.2.0) (2020-11-25)


### Features

* update GKE v1 API ([#401](https://www.github.com/googleapis/nodejs-cloud-container/issues/401)) ([f72f121](https://www.github.com/googleapis/nodejs-cloud-container/commit/f72f1210f63e1fd9b3dd02e0791b1d024d1cbe07))


### Bug Fixes

* **browser:** check for fetch on window ([#403](https://www.github.com/googleapis/nodejs-cloud-container/issues/403)) ([40f207e](https://www.github.com/googleapis/nodejs-cloud-container/commit/40f207e3e1ae02f63b9b34c9e957c0caae89c7fb))

### [2.1.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.1...v2.1.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#398](https://www.github.com/googleapis/nodejs-cloud-container/issues/398)) ([e696b91](https://www.github.com/googleapis/nodejs-cloud-container/commit/e696b91a5cd57f213a0f2412f6f513ff44183d41))

### [2.1.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.1.0...v2.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#358](https://www.github.com/googleapis/nodejs-cloud-container/issues/358)) ([8d4b79a](https://www.github.com/googleapis/nodejs-cloud-container/commit/8d4b79aa731f06e7c31e86ec3f8d0190554f40be))

## [2.1.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v2.0.0...v2.1.0) (2020-06-15)


### Features

* move ts target to es2018 from es2016 ([#347](https://www.github.com/googleapis/nodejs-cloud-container/issues/347)) ([67b6724](https://www.github.com/googleapis/nodejs-cloud-container/commit/67b6724ebbb1e9587ccbb1e845e5ffce3144eab6))


### Bug Fixes

* proper fallback option handling ([c087af4](https://www.github.com/googleapis/nodejs-cloud-container/commit/c087af449cc24492b58f686f05bcef90a00deeca))

## [2.0.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.7.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#318](https://www.github.com/googleapis/nodejs-cloud-container/issues/318)) ([e6338eb](https://www.github.com/googleapis/nodejs-cloud-container/commit/e6338eb9e080a80e3b8361ae13b1c74039974f32))


### Bug Fixes

* **test:** don't assign unused variable ([#323](https://www.github.com/googleapis/nodejs-cloud-container/issues/323)) ([671a4b8](https://www.github.com/googleapis/nodejs-cloud-container/commit/671a4b8bc4e49ba6705af418f3bc427485f912ed))
* export explicit version from protos.js ([#324](https://www.github.com/googleapis/nodejs-cloud-container/issues/324)) ([896c658](https://www.github.com/googleapis/nodejs-cloud-container/commit/896c658e0c7c811c2e71909d138e2e38b431b9e8))
* regen protos and tests ([#340](https://www.github.com/googleapis/nodejs-cloud-container/issues/340)) ([edbc1c9](https://www.github.com/googleapis/nodejs-cloud-container/commit/edbc1c99e4f50665066ed61593d632201f60e2f5))
* remove eslint, update gax, fix generated protos, run the generator ([#329](https://www.github.com/googleapis/nodejs-cloud-container/issues/329)) ([c66f3ed](https://www.github.com/googleapis/nodejs-cloud-container/commit/c66f3ed896cd99108f980133205505aa0b49131e))
* remove unused files from package ([#333](https://www.github.com/googleapis/nodejs-cloud-container/issues/333)) ([ac4c07a](https://www.github.com/googleapis/nodejs-cloud-container/commit/ac4c07a6cb48423f2f3b35b485841e88aa189a22))
* support request params {key} with no =value ([#338](https://www.github.com/googleapis/nodejs-cloud-container/issues/338)) ([adf4a60](https://www.github.com/googleapis/nodejs-cloud-container/commit/adf4a601a870c0ce961f4011318606e4b29c266f))
* synth.py clean up for multiple version ([#341](https://www.github.com/googleapis/nodejs-cloud-container/issues/341)) ([29b309d](https://www.github.com/googleapis/nodejs-cloud-container/commit/29b309db935655a6ab5add27e111f72f7d053c07))

## [1.7.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.2...v1.7.0) (2020-03-06)


### Features

* deferred client initialization ([#304](https://www.github.com/googleapis/nodejs-cloud-container/issues/304)) ([b1b7080](https://www.github.com/googleapis/nodejs-cloud-container/commit/b1b70806289aea73a6e83d3d33983d05856f21f3))
* export protos in src/index.ts ([acaaeff](https://www.github.com/googleapis/nodejs-cloud-container/commit/acaaeff08ad5505accc15bb496bcd3a29086a5ac))

### [1.6.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.1...v1.6.2) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([ab62cfd](https://www.github.com/googleapis/nodejs-cloud-container/commit/ab62cfddac9ab594318d906b7ee6272131ddaae2))

### [1.6.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.6.0...v1.6.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([595810b](https://www.github.com/googleapis/nodejs-cloud-container/commit/595810b240be49dddf14a05d616b99b398a09efe))

## [1.6.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.5.0...v1.6.0) (2020-01-24)


### Features

* bump release level to GA ([#272](https://www.github.com/googleapis/nodejs-cloud-container/issues/272)) ([0d2d210](https://www.github.com/googleapis/nodejs-cloud-container/commit/0d2d21028e6323fd836e6a7ac166c65d39b7534a))

## [1.5.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.4.0...v1.5.0) (2020-01-06)


### Features

* move to typescript code micro-generator ([#260](https://www.github.com/googleapis/nodejs-cloud-container/issues/260)) ([e2b189a](https://www.github.com/googleapis/nodejs-cloud-container/commit/e2b189a57ce1df87f9ad2123f48f665469812ad9))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([bcc3eaa](https://www.github.com/googleapis/nodejs-cloud-container/commit/bcc3eaa20adc266db2a641834cc5f8561e03b825))
* better client close(), update .nycrc ([41c6125](https://www.github.com/googleapis/nodejs-cloud-container/commit/41c6125b56c61ebed870fdb0daa01c29dd71c832))

## [1.4.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.3.1...v1.4.0) (2019-11-14)


### Features

* support listUsableSubnetworks rpc and new node config ([#246](https://www.github.com/googleapis/nodejs-cloud-container/issues/246)) ([08f2e19](https://www.github.com/googleapis/nodejs-cloud-container/commit/08f2e19c9bc3eff01adf90b59405c73d0a4f190a))
* **docs:** bump release level to beta ([#249](https://www.github.com/googleapis/nodejs-cloud-container/issues/249)) ([3651e6a](https://www.github.com/googleapis/nodejs-cloud-container/commit/3651e6a2cd7bf28da94a6d3d5d57861a15d8e332))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#245](https://www.github.com/googleapis/nodejs-cloud-container/issues/245)) ([31fcb61](https://www.github.com/googleapis/nodejs-cloud-container/commit/31fcb616761b9f23f380be6fbe20f7a0d290a5a1))

### [1.3.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#240](https://www.github.com/googleapis/nodejs-cloud-container/issues/240)) ([fefaf21](https://www.github.com/googleapis/nodejs-cloud-container/commit/fefaf21f74c817f6b8b6b0ed7a19346c44878d96))

## [1.3.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([c39495e](https://www.github.com/googleapis/nodejs-cloud-container/commit/c39495e))


### Features

* .d.ts for protos ([#231](https://www.github.com/googleapis/nodejs-cloud-container/issues/231)) ([290fc8a](https://www.github.com/googleapis/nodejs-cloud-container/commit/290fc8a))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.4...v1.2.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([9d931ff](https://www.github.com/googleapis/nodejs-cloud-container/commit/9d931ff))

### [1.1.4](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.3...v1.1.4) (2019-08-28)


### Bug Fixes

* include node version with headers ([#221](https://www.github.com/googleapis/nodejs-cloud-container/issues/221)) ([28892af](https://www.github.com/googleapis/nodejs-cloud-container/commit/28892af))
* **docs:** stop linking reference documents to anchor ([2934b37](https://www.github.com/googleapis/nodejs-cloud-container/commit/2934b37))

### [1.1.3](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#210](https://www.github.com/googleapis/nodejs-cloud-container/issues/210)) ([cd81c9c](https://www.github.com/googleapis/nodejs-cloud-container/commit/cd81c9c))

### [1.1.2](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.1...v1.1.2) (2019-06-21)


### Bug Fixes

* **docs:** provide clarification re: gke vs. Kubernetes ([#207](https://www.github.com/googleapis/nodejs-cloud-container/issues/207)) ([bc8e2cc](https://www.github.com/googleapis/nodejs-cloud-container/commit/bc8e2cc))

### [1.1.1](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#205](https://www.github.com/googleapis/nodejs-cloud-container/issues/205)) ([f35ee9a](https://www.github.com/googleapis/nodejs-cloud-container/commit/f35ee9a))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#203](https://www.github.com/googleapis/nodejs-cloud-container/issues/203)) ([92be0f8](https://www.github.com/googleapis/nodejs-cloud-container/commit/92be0f8))

## [1.0.0](https://www.github.com/googleapis/nodejs-cloud-container/compare/v0.3.1...v1.0.0) (2019-05-13)


### Bug Fixes

* DEADLINE_EXCEEDED retry code is idempotent ([#192](https://www.github.com/googleapis/nodejs-cloud-container/issues/192)) ([66082aa](https://www.github.com/googleapis/nodejs-cloud-container/commit/66082aa))
* **deps:** update dependency google-gax to v1 ([#191](https://www.github.com/googleapis/nodejs-cloud-container/issues/191)) ([e4470fa](https://www.github.com/googleapis/nodejs-cloud-container/commit/e4470fa))
* DEADLINE_EXCEEDED is no longer retried ([16453ff](https://www.github.com/googleapis/nodejs-cloud-container/commit/16453ff))
* **deps:** update dependency google-gax to ^0.26.0 ([#181](https://www.github.com/googleapis/nodejs-cloud-container/issues/181)) ([0ee0e98](https://www.github.com/googleapis/nodejs-cloud-container/commit/0ee0e98))
* include 'x-goog-request-params' header in requests ([#175](https://www.github.com/googleapis/nodejs-cloud-container/issues/175)) ([0d3ba60](https://www.github.com/googleapis/nodejs-cloud-container/commit/0d3ba60))


### Build System

* upgrade engines field to >=8.10.0 ([#183](https://www.github.com/googleapis/nodejs-cloud-container/issues/183)) ([7a6a24b](https://www.github.com/googleapis/nodejs-cloud-container/commit/7a6a24b))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#183)

## v0.3.1

03-12-2019 13:44 PDT

This patch release has a few bug fixes, dependency updates, and doc fixes.  Enjoy!

### Bug fixes
- fix: throw on invalid credentials ([#159](https://github.com/googleapis/nodejs-cloud-container/pull/159))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#152](https://github.com/googleapis/nodejs-cloud-container/pull/152))

### Documentation
- docs: update links in contrib guide ([#161](https://github.com/googleapis/nodejs-cloud-container/pull/161))
- docs: update contributing path in README ([#156](https://github.com/googleapis/nodejs-cloud-container/pull/156))
- docs: move CONTRIBUTING.md to root ([#155](https://github.com/googleapis/nodejs-cloud-container/pull/155))
- docs: add lint/fix example to contributing guide ([#153](https://github.com/googleapis/nodejs-cloud-container/pull/153))

### Internal / Testing Changes
- refactor: update json import paths ([#167](https://github.com/googleapis/nodejs-cloud-container/pull/167))
- build: Add docuploader credentials to node publish jobs ([#165](https://github.com/googleapis/nodejs-cloud-container/pull/165))
- build: update release config ([#163](https://github.com/googleapis/nodejs-cloud-container/pull/163))
- build: use node10 to run samples-test, system-test etc ([#164](https://github.com/googleapis/nodejs-cloud-container/pull/164))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#160](https://github.com/googleapis/nodejs-cloud-container/pull/160))
- build: create docs test npm scripts ([#158](https://github.com/googleapis/nodejs-cloud-container/pull/158))
- build: test using @grpc/grpc-js in CI ([#157](https://github.com/googleapis/nodejs-cloud-container/pull/157))
- chore(deps): update dependency eslint-config-prettier to v4 ([#151](https://github.com/googleapis/nodejs-cloud-container/pull/151))
- chore: update the date in the copyright header ([#150](https://github.com/googleapis/nodejs-cloud-container/pull/150))
- build: check broken links in generated docs ([#144](https://github.com/googleapis/nodejs-cloud-container/pull/144))
- test: add sample tests ([#143](https://github.com/googleapis/nodejs-cloud-container/pull/143))
- chore(build): inject yoshi automation key ([#142](https://github.com/googleapis/nodejs-cloud-container/pull/142))

## v0.3.0

12-11-2018 10:08 PST

### Implementation Changes
**This library no longer support Node.js 4.x and 9.x, use of these out of LTS versions of Node.js with this library might not work in the future.**
- fix: drop support for node.js 4.x and 9.x ([#46](https://github.com/googleapis/nodejs-cloud-container/pull/46))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#117](https://github.com/googleapis/nodejs-cloud-container/pull/117))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#113](https://github.com/googleapis/nodejs-cloud-container/pull/113))
- chore(deps): update dependency eslint-plugin-node to v8 ([#102](https://github.com/googleapis/nodejs-cloud-container/pull/102))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#86](https://github.com/googleapis/nodejs-cloud-container/pull/86))
- fix(deps): update dependency google-gax to ^0.20.0 ([#75](https://github.com/googleapis/nodejs-cloud-container/pull/75))
- Remove unused dependencies ([#72](https://github.com/googleapis/nodejs-cloud-container/pull/72))
- chore(deps): update dependency nyc to v13 ([#67](https://github.com/googleapis/nodejs-cloud-container/pull/67))
- fix(deps): update dependency google-gax to ^0.19.0 ([#66](https://github.com/googleapis/nodejs-cloud-container/pull/66))
- chore(deps): update dependency eslint-config-prettier to v3 ([#65](https://github.com/googleapis/nodejs-cloud-container/pull/65))
- chore(deps): lock file maintenance ([#62](https://github.com/googleapis/nodejs-cloud-container/pull/62))
- chore(deps): lock file maintenance ([#61](https://github.com/googleapis/nodejs-cloud-container/pull/61))
- fix(deps): update dependency google-gax to ^0.18.0 ([#58](https://github.com/googleapis/nodejs-cloud-container/pull/58))
- chore(deps): lock file maintenance ([#57](https://github.com/googleapis/nodejs-cloud-container/pull/57))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-cloud-container/pull/54))
- chore(deps): update dependency eslint-plugin-node to v7 ([#52](https://github.com/googleapis/nodejs-cloud-container/pull/52))
- chore(deps): lock file maintenance ([#51](https://github.com/googleapis/nodejs-cloud-container/pull/51))
- chore(deps): lock file maintenance ([#49](https://github.com/googleapis/nodejs-cloud-container/pull/49))
- chore(deps): lock file maintenance ([#48](https://github.com/googleapis/nodejs-cloud-container/pull/48))
- chore(deps): lock file maintenance ([#47](https://github.com/googleapis/nodejs-cloud-container/pull/47))
- chore(deps): lock file maintenance ([#45](https://github.com/googleapis/nodejs-cloud-container/pull/45))
- chore(deps): lock file maintenance ([#44](https://github.com/googleapis/nodejs-cloud-container/pull/44))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#41](https://github.com/googleapis/nodejs-cloud-container/pull/41))

### Documentation
- docs: update readme badges ([#127](https://github.com/googleapis/nodejs-cloud-container/pull/127))
- docs(samples): updated samples code to use async await ([#122](https://github.com/googleapis/nodejs-cloud-container/pull/122))
- fix(docs): README.md using @google-cloud/cloud-container ([#114](https://github.com/googleapis/nodejs-cloud-container/pull/114))

### Internal / Testing Changes
- chore: fix publish.sh permission +x ([#138](https://github.com/googleapis/nodejs-cloud-container/pull/138))
- fix(build): fix Kokoro release script ([#137](https://github.com/googleapis/nodejs-cloud-container/pull/137))
- build: add Kokoro configs for autorelease ([#136](https://github.com/googleapis/nodejs-cloud-container/pull/136))
- chore: always nyc report before calling codecov ([#133](https://github.com/googleapis/nodejs-cloud-container/pull/133))
- chore: nyc ignore build/test by default ([#132](https://github.com/googleapis/nodejs-cloud-container/pull/132))
- chore: clean up usage of prettier and eslint ([#131](https://github.com/googleapis/nodejs-cloud-container/pull/131))
- chore: update license file ([#129](https://github.com/googleapis/nodejs-cloud-container/pull/129))
- fix(build): fix system key decryption ([#125](https://github.com/googleapis/nodejs-cloud-container/pull/125))
- chore: add synth.metadata
- chore: update eslintignore config ([#116](https://github.com/googleapis/nodejs-cloud-container/pull/116))
- Update synth.py yaml path ([#115](https://github.com/googleapis/nodejs-cloud-container/pull/115))
- chore: drop contributors from multiple places ([#112](https://github.com/googleapis/nodejs-cloud-container/pull/112))
- chore: use latest npm on Windows ([#111](https://github.com/googleapis/nodejs-cloud-container/pull/111))
- chore: update CircleCI config ([#109](https://github.com/googleapis/nodejs-cloud-container/pull/109))
- chore: include build in eslintignore ([#106](https://github.com/googleapis/nodejs-cloud-container/pull/106))
- chore: update issue templates ([#100](https://github.com/googleapis/nodejs-cloud-container/pull/100))
- chore: remove old issue template ([#98](https://github.com/googleapis/nodejs-cloud-container/pull/98))
- build: run tests on node11 ([#97](https://github.com/googleapis/nodejs-cloud-container/pull/97))
- chores(build): do not collect sponge.xml from windows builds ([#96](https://github.com/googleapis/nodejs-cloud-container/pull/96))
- chores(build): run codecov on continuous builds ([#95](https://github.com/googleapis/nodejs-cloud-container/pull/95))
- chore: update new issue template ([#94](https://github.com/googleapis/nodejs-cloud-container/pull/94))
- build: fix codecov uploading on Kokoro ([#89](https://github.com/googleapis/nodejs-cloud-container/pull/89))
- Update kokoro config ([#87](https://github.com/googleapis/nodejs-cloud-container/pull/87))
- Update kokoro config ([#83](https://github.com/googleapis/nodejs-cloud-container/pull/83))
- Update CI config ([#82](https://github.com/googleapis/nodejs-cloud-container/pull/82))
- test: remove appveyor config ([#81](https://github.com/googleapis/nodejs-cloud-container/pull/81))
- Update the CI config ([#80](https://github.com/googleapis/nodejs-cloud-container/pull/80))
- Enable prefer-const in the eslint config ([#78](https://github.com/googleapis/nodejs-cloud-container/pull/78))
- Enable no-var in eslint ([#77](https://github.com/googleapis/nodejs-cloud-container/pull/77))
- Switch to let/const ([#76](https://github.com/googleapis/nodejs-cloud-container/pull/76))
- Update CI config ([#74](https://github.com/googleapis/nodejs-cloud-container/pull/74))
- Update CI Config ([#73](https://github.com/googleapis/nodejs-cloud-container/pull/73))
- Retry npm install in CI ([#71](https://github.com/googleapis/nodejs-cloud-container/pull/71))
- add templates to synth.py ([#68](https://github.com/googleapis/nodejs-cloud-container/pull/68))
- chore: do not use npm ci ([#64](https://github.com/googleapis/nodejs-cloud-container/pull/64))
- chore: ignore package-lock.json ([#63](https://github.com/googleapis/nodejs-cloud-container/pull/63))
- chore: update renovate config ([#60](https://github.com/googleapis/nodejs-cloud-container/pull/60))
- remove that whitespace ([#59](https://github.com/googleapis/nodejs-cloud-container/pull/59))
- chore: move mocha options to mocha.opts ([#55](https://github.com/googleapis/nodejs-cloud-container/pull/55))
- chore: require node 8 for samples ([#56](https://github.com/googleapis/nodejs-cloud-container/pull/56))
- test: use strictEqual in tests ([#53](https://github.com/googleapis/nodejs-cloud-container/pull/53))
- Check in synth script and update gax dependency ([#43](https://github.com/googleapis/nodejs-cloud-container/pull/43))
- fix: update to the latest eslint ([#40](https://github.com/googleapis/nodejs-cloud-container/pull/40))
- Configure Renovate ([#33](https://github.com/googleapis/nodejs-cloud-container/pull/33))
- refactor: drop repo-tool as an exec wrapper ([#39](https://github.com/googleapis/nodejs-cloud-container/pull/39))
- fix: update linking for samples ([#36](https://github.com/googleapis/nodejs-cloud-container/pull/36))
- chore: update sample lockfiles ([#38](https://github.com/googleapis/nodejs-cloud-container/pull/38))
- Update nyc to the latest version 🚀 ([#30](https://github.com/googleapis/nodejs-cloud-container/pull/30))
- chore: lock files maintenance ([#29](https://github.com/googleapis/nodejs-cloud-container/pull/29))
- chore: the ultimate fix for repo-tools EPERM ([#28](https://github.com/googleapis/nodejs-cloud-container/pull/28))
- chore: timeout for system test ([#27](https://github.com/googleapis/nodejs-cloud-container/pull/27))
- chore: lock files maintenance ([#26](https://github.com/googleapis/nodejs-cloud-container/pull/26))
- chore: test on node10 ([#25](https://github.com/googleapis/nodejs-cloud-container/pull/25))
- chore: lock files maintenance ([#24](https://github.com/googleapis/nodejs-cloud-container/pull/24))
