# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/security-center?activeTab=versions

### [5.3.3](https://www.github.com/googleapis/nodejs-security-center/compare/v5.3.2...v5.3.3) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#400](https://www.github.com/googleapis/nodejs-security-center/issues/400)) ([0f35393](https://www.github.com/googleapis/nodejs-security-center/commit/0f35393b8e64fdabc170eb264de5e5a54a0c6f2e))

### [5.3.2](https://www.github.com/googleapis/nodejs-security-center/compare/v5.3.1...v5.3.2) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#396](https://www.github.com/googleapis/nodejs-security-center/issues/396)) ([871b0d3](https://www.github.com/googleapis/nodejs-security-center/commit/871b0d3c26878f1a836ec186fb66be08073ed899))

### [5.3.1](https://www.github.com/googleapis/nodejs-security-center/compare/v5.3.0...v5.3.1) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#385](https://www.github.com/googleapis/nodejs-security-center/issues/385)) ([7faea1b](https://www.github.com/googleapis/nodejs-security-center/commit/7faea1b6670b96cf26d9bbc6d18a58b868627c60))

## [5.3.0](https://www.github.com/googleapis/nodejs-security-center/compare/v5.2.0...v5.3.0) (2021-05-12)


### Features

* **v1:** add canonical_name and folder fields ([#379](https://www.github.com/googleapis/nodejs-security-center/issues/379)) ([239901b](https://www.github.com/googleapis/nodejs-security-center/commit/239901ba42e5973024c86728013354cd4731a0ee))
* **v1p1beta1:** add canonical_name and folder fields ([#378](https://www.github.com/googleapis/nodejs-security-center/issues/378)) ([5354f52](https://www.github.com/googleapis/nodejs-security-center/commit/5354f52df024d465b224c9db20e0c9cd9586060b))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#373](https://www.github.com/googleapis/nodejs-security-center/issues/373)) ([c13a77a](https://www.github.com/googleapis/nodejs-security-center/commit/c13a77aa4340e63cc4c32b01463c2a761bef2f1f))
* use require() to load JSON protos ([#376](https://www.github.com/googleapis/nodejs-security-center/issues/376)) ([efac58d](https://www.github.com/googleapis/nodejs-security-center/commit/efac58d6a49a68598703e8b7a7c7c235894c525f))

## [5.2.0](https://www.github.com/googleapis/nodejs-security-center/compare/v5.1.3...v5.2.0) (2021-01-07)


### Features

* added field severity to findings in v1 API ([#349](https://www.github.com/googleapis/nodejs-security-center/issues/349)) ([79f1433](https://www.github.com/googleapis/nodejs-security-center/commit/79f1433d05037d1bb9f7d0a252cb483a0f817568))
* introduces style enumeration ([#353](https://www.github.com/googleapis/nodejs-security-center/issues/353)) ([37c179f](https://www.github.com/googleapis/nodejs-security-center/commit/37c179f8915d7b5f6e141b78e59ec612b6b115a7))

### [5.1.3](https://www.github.com/googleapis/nodejs-security-center/compare/v5.1.2...v5.1.3) (2020-11-25)


### Bug Fixes

* check for fetch on window ([#344](https://www.github.com/googleapis/nodejs-security-center/issues/344)) ([85c6d55](https://www.github.com/googleapis/nodejs-security-center/commit/85c6d55fa245fb2508423d2f0ba94f2e1c25c53f))

### [5.1.2](https://www.github.com/googleapis/nodejs-security-center/compare/v5.1.1...v5.1.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#337](https://www.github.com/googleapis/nodejs-security-center/issues/337)) ([2792fc8](https://www.github.com/googleapis/nodejs-security-center/commit/2792fc829c6db2fbbd951df4739b8d1524243012))

### [5.1.1](https://www.github.com/googleapis/nodejs-security-center/compare/v5.1.0...v5.1.1) (2020-08-17)


### Bug Fixes

* **deps:** roll back dependency @google-cloud/security-center to ^5.0.3 ([#319](https://www.github.com/googleapis/nodejs-security-center/issues/319)) ([f3462e1](https://www.github.com/googleapis/nodejs-security-center/commit/f3462e16aacb42f66f50ca4205a58981d2540686))

## [5.1.0](https://www.github.com/googleapis/nodejs-security-center/compare/v5.0.3...v5.1.0) (2020-08-14)


### Features

* added field severity to findings ([#317](https://www.github.com/googleapis/nodejs-security-center/issues/317)) ([155a14a](https://www.github.com/googleapis/nodejs-security-center/commit/155a14a714304be6916452c32aee833aa5fe4230))

### [5.0.3](https://www.github.com/googleapis/nodejs-security-center/compare/v5.0.2...v5.0.3) (2020-07-30)


### Bug Fixes

* **deps:** roll back dependency @google-cloud/security-center to ^5.0.1 ([#309](https://www.github.com/googleapis/nodejs-security-center/issues/309)) ([f68400c](https://www.github.com/googleapis/nodejs-security-center/commit/f68400c4490a6887bb8578184b4737a678da47d7))

### [5.0.2](https://www.github.com/googleapis/nodejs-security-center/compare/v5.0.1...v5.0.2) (2020-07-27)


### Bug Fixes

* add resource config to v1beta1 ([#307](https://www.github.com/googleapis/nodejs-security-center/issues/307)) ([5d99acf](https://www.github.com/googleapis/nodejs-security-center/commit/5d99acf9dea7a6e2d384ee709678365c769f3d6e))
* correct securitycenter grpc_service_configs, add Node 8 tests ([#302](https://www.github.com/googleapis/nodejs-security-center/issues/302)) ([4e4ec5b](https://www.github.com/googleapis/nodejs-security-center/commit/4e4ec5bbd9623dc952781e80da226320db3906af))

### [5.0.1](https://www.github.com/googleapis/nodejs-security-center/compare/v5.0.0...v5.0.1) (2020-07-06)


### Bug Fixes

* update node issue template ([#290](https://www.github.com/googleapis/nodejs-security-center/issues/290)) ([c0b8bad](https://www.github.com/googleapis/nodejs-security-center/commit/c0b8bad200f829aa62ee7430bf0d51b5463c92ca))

## [5.0.0](https://www.github.com/googleapis/nodejs-security-center/compare/v4.0.0...v5.0.0) (2020-06-15)


### ⚠ BREAKING CHANGES

* Removed 'having' as a field in the List and Group Finding and Asset requests.

### Features

* add Resource to the v1 NotificationMessage, update protos ([#286](https://www.github.com/googleapis/nodejs-security-center/issues/286)) ([f810e5e](https://www.github.com/googleapis/nodejs-security-center/commit/f810e5e9f0791050616273f06bebc3ea05617e7f))


### Bug Fixes

* handle fallback option properly ([#284](https://www.github.com/googleapis/nodejs-security-center/issues/284)) ([f714260](https://www.github.com/googleapis/nodejs-security-center/commit/f71426053da4eb2416ebd593862e89c0d5557827))

## [4.0.0](https://www.github.com/googleapis/nodejs-security-center/compare/v3.1.0...v4.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#273](https://www.github.com/googleapis/nodejs-security-center/issues/273)) ([dd0f4d1](https://www.github.com/googleapis/nodejs-security-center/commit/dd0f4d1866ec61e37392c79cf7f148e339d04d1b))
* drop node8 support, support for async iterators ([#248](https://www.github.com/googleapis/nodejs-security-center/issues/248)) ([686f741](https://www.github.com/googleapis/nodejs-security-center/commit/686f7418517e6d827bfcbe483d7b1bb014385e10))


### Bug Fixes

* export explicit version from protos.js ([#253](https://www.github.com/googleapis/nodejs-security-center/issues/253)) ([aa62575](https://www.github.com/googleapis/nodejs-security-center/commit/aa6257554e5b401ba7b7613f0bf78d6233ef300b))
* remove eslint, update gax, fix generated protos, run the generator ([#258](https://www.github.com/googleapis/nodejs-security-center/issues/258)) ([38e64d7](https://www.github.com/googleapis/nodejs-security-center/commit/38e64d77317870caa81122fa2a9c449dcbe714e0))
* synth.py clean up for multiple version ([#274](https://www.github.com/googleapis/nodejs-security-center/issues/274)) ([e50061a](https://www.github.com/googleapis/nodejs-security-center/commit/e50061a5f834a356b0221ff01d8de4ed02089260))
* **deps:** update dependency @google-cloud/pubsub to v2 ([#276](https://www.github.com/googleapis/nodejs-security-center/issues/276)) ([6ce252e](https://www.github.com/googleapis/nodejs-security-center/commit/6ce252eb770d1a4304301bfbaeacb9d165f8a3e9))

## [3.1.0](https://www.github.com/googleapis/nodejs-security-center/compare/v3.0.1...v3.1.0) (2020-03-06)


### Features

* deferred client initialization ([#230](https://www.github.com/googleapis/nodejs-security-center/issues/230)) ([e6ee806](https://www.github.com/googleapis/nodejs-security-center/commit/e6ee8064285adfb64666dd976da401a123c0d8a1))
* export protos in src/index.ts ([f3b2f47](https://www.github.com/googleapis/nodejs-security-center/commit/f3b2f477aa0af4d3f5a5c1d3b191643986f1c48b))


### Bug Fixes

* updated timeout in service config ([280cba4](https://www.github.com/googleapis/nodejs-security-center/commit/280cba439c681fcf7be0b936f052ebdaf215c850))

### [3.0.1](https://www.github.com/googleapis/nodejs-security-center/compare/v3.0.0...v3.0.1) (2020-02-07)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([c73e1b6](https://www.github.com/googleapis/nodejs-security-center/commit/c73e1b688367377a2c879d3ad9b000b91588dcd3))

## [3.0.0](https://www.github.com/googleapis/nodejs-security-center/compare/v2.3.2...v3.0.0) (2020-02-05)


### ⚠ BREAKING CHANGES

* convert library to TypeScript, adding v1p1beta1 import (#198)

### Features

* convert library to TypeScript, adding v1p1beta1 import ([#198](https://www.github.com/googleapis/nodejs-security-center/issues/198)) ([0adb7d0](https://www.github.com/googleapis/nodejs-security-center/commit/0adb7d0ea27a07ba0ad0ee235ddfde1f44cd3c24))

### [2.3.2](https://www.github.com/googleapis/nodejs-security-center/compare/v2.3.1...v2.3.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([be83dd6](https://www.github.com/googleapis/nodejs-security-center/commit/be83dd689fa51bd1dd0acce63a144e195a1b7688))

### [2.3.1](https://www.github.com/googleapis/nodejs-security-center/compare/v2.3.0...v2.3.1) (2020-01-05)


### Bug Fixes

* proto files updated with proto annotations ([#182](https://www.github.com/googleapis/nodejs-security-center/issues/182)) ([010f3de](https://www.github.com/googleapis/nodejs-security-center/commit/010f3de382300787a3e383d5c55ec1f0dcc2536a))

## [2.3.0](https://www.github.com/googleapis/nodejs-security-center/compare/v2.2.2...v2.3.0) (2019-12-10)


### Features

* support resource descriptors ([#174](https://www.github.com/googleapis/nodejs-security-center/issues/174)) ([a55b223](https://www.github.com/googleapis/nodejs-security-center/commit/a55b2232a821ddcbe1132eab2f1e5873bc5e96f2))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([121d969](https://www.github.com/googleapis/nodejs-security-center/commit/121d9696bcc9453d497a53e40c4679a63793673c))

### [2.2.2](https://www.github.com/googleapis/nodejs-security-center/compare/v2.2.1...v2.2.2) (2019-11-15)


### Bug Fixes

* import long into proto ts declaration file ([#167](https://www.github.com/googleapis/nodejs-security-center/issues/167)) ([8548ae2](https://www.github.com/googleapis/nodejs-security-center/commit/8548ae2d620a690dcaa2f270c35c91745c37329f))
* **docs:** bump release level to GA ([#171](https://www.github.com/googleapis/nodejs-security-center/issues/171)) ([8169088](https://www.github.com/googleapis/nodejs-security-center/commit/81690887c934e3a06ca82dd8850d47a74e4ad1c9))
* **docs:** snippets are now replaced in jsdoc comments ([#166](https://www.github.com/googleapis/nodejs-security-center/issues/166)) ([c2d6f93](https://www.github.com/googleapis/nodejs-security-center/commit/c2d6f93c360bcb44ac095dea23c3191f3d5a4e2b))

### [2.2.1](https://www.github.com/googleapis/nodejs-security-center/compare/v2.2.0...v2.2.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#158](https://www.github.com/googleapis/nodejs-security-center/issues/158)) ([16d27c8](https://www.github.com/googleapis/nodejs-security-center/commit/16d27c87ce951546163dd1e8a16e57daf2877093))

## [2.2.0](https://www.github.com/googleapis/nodejs-security-center/compare/v2.1.0...v2.2.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([e85bac4](https://www.github.com/googleapis/nodejs-security-center/commit/e85bac4))


### Features

* .d.ts for protos ([#148](https://www.github.com/googleapis/nodejs-security-center/issues/148)) ([f10a7ab](https://www.github.com/googleapis/nodejs-security-center/commit/f10a7ab))

## [2.1.0](https://www.github.com/googleapis/nodejs-security-center/compare/v2.0.1...v2.1.0) (2019-09-06)


### Bug Fixes

* include the correct version of node in a header ([#138](https://www.github.com/googleapis/nodejs-security-center/issues/138)) ([4b42390](https://www.github.com/googleapis/nodejs-security-center/commit/4b42390))


### Features

* load protos from JSON, grpc-fallback support ([#142](https://www.github.com/googleapis/nodejs-security-center/issues/142)) ([570cca4](https://www.github.com/googleapis/nodejs-security-center/commit/570cca4))

### [2.0.1](https://www.github.com/googleapis/nodejs-security-center/compare/v2.0.0...v2.0.1) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([63e4855](https://www.github.com/googleapis/nodejs-security-center/commit/63e4855))

## [2.0.0](https://www.github.com/googleapis/nodejs-security-center/compare/v1.0.0...v2.0.0) (2019-07-23)


### ⚠ BREAKING CHANGES

* adds findingSecurityMarksPathTemplate  (#122)

### Bug Fixes

* **deps:** remove unused dependency ([#126](https://www.github.com/googleapis/nodejs-security-center/issues/126)) ([2c606ea](https://www.github.com/googleapis/nodejs-security-center/commit/2c606ea))


### Features

* adds findingSecurityMarksPathTemplate  ([#122](https://www.github.com/googleapis/nodejs-security-center/issues/122)) ([3070f29](https://www.github.com/googleapis/nodejs-security-center/commit/3070f29))

## [1.0.0](https://www.github.com/googleapis/nodejs-security-center/compare/v0.3.0...v1.0.0) (2019-07-02)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#93)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#91](https://www.github.com/googleapis/nodejs-security-center/issues/91)) ([b4708af](https://www.github.com/googleapis/nodejs-security-center/commit/b4708af))
* **deps:** update dependency google-gax to v1 ([#100](https://www.github.com/googleapis/nodejs-security-center/issues/100)) ([10e455c](https://www.github.com/googleapis/nodejs-security-center/commit/10e455c))
* drop dependency on lodash.merge ([#105](https://www.github.com/googleapis/nodejs-security-center/issues/105)) ([093822e](https://www.github.com/googleapis/nodejs-security-center/commit/093822e))
* **docs:** link to reference docs section on googleapis.dev ([#117](https://www.github.com/googleapis/nodejs-security-center/issues/117)) ([df786bf](https://www.github.com/googleapis/nodejs-security-center/commit/df786bf))
* **docs:** move to new client docs URL ([#114](https://www.github.com/googleapis/nodejs-security-center/issues/114)) ([c8e406e](https://www.github.com/googleapis/nodejs-security-center/commit/c8e406e))
* import run_asset_discovery_response.proto ([#119](https://www.github.com/googleapis/nodejs-security-center/issues/119)) ([8fed12f](https://www.github.com/googleapis/nodejs-security-center/commit/8fed12f))
* include 'x-goog-request-params' header in requests ([#77](https://www.github.com/googleapis/nodejs-security-center/issues/77)) ([2556bb7](https://www.github.com/googleapis/nodejs-security-center/commit/2556bb7))


### Build System

* upgrade engines field to >=8.10.0 ([#93](https://www.github.com/googleapis/nodejs-security-center/issues/93)) ([3714719](https://www.github.com/googleapis/nodejs-security-center/commit/3714719))


### Features

* asset path template & matchers ([#84](https://www.github.com/googleapis/nodejs-security-center/issues/84)) ([3c4bc9a](https://www.github.com/googleapis/nodejs-security-center/commit/3c4bc9a))
* support apiEndpoint override in client constructor ([#112](https://www.github.com/googleapis/nodejs-security-center/issues/112)) ([58ddc40](https://www.github.com/googleapis/nodejs-security-center/commit/58ddc40))

## v0.3.0

03-14-2019 07:55 PDT

**This release has breaking changes!** The `having` enum value from `GroupFindingsRequest` has been removed.  This field was not supposed to be exposed.

### Bug Fixes
- fix: remove the `having` enum value from `GroupFindingsRequest` ([#67](https://github.com/googleapis/nodejs-security-center/pull/67))

### Documentation
- docs: use backticks for JS values

## v0.2.0

03-12-2019 16:11 PDT

### New Features
- feat: add v1 variant of the API ([#61](https://github.com/googleapis/nodejs-security-center/pull/61))

### Bug Fixes
- fix: throw on invalid credentials

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#42](https://github.com/googleapis/nodejs-security-center/pull/42))

### Documentation
- docs: update examples
- docs: update comments on protos ([#56](https://github.com/googleapis/nodejs-security-center/pull/56))
- docs: sync latest proto docs
- docs: update links in contrib guide ([#53](https://github.com/googleapis/nodejs-security-center/pull/53))
- docs: update contributing path in README ([#48](https://github.com/googleapis/nodejs-security-center/pull/48))
- docs: move CONTRIBUTING.md to root ([#47](https://github.com/googleapis/nodejs-security-center/pull/47))
- docs: add lint/fix example to contributing guide ([#45](https://github.com/googleapis/nodejs-security-center/pull/45))
- docs: fix example comments ([#44](https://github.com/googleapis/nodejs-security-center/pull/44))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#59](https://github.com/googleapis/nodejs-security-center/pull/59))
- build: use node10 to run samples-test, system-test etc ([#58](https://github.com/googleapis/nodejs-security-center/pull/58))
- build: update release configuration
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#52](https://github.com/googleapis/nodejs-security-center/pull/52))
- build: create docs test npm scripts ([#50](https://github.com/googleapis/nodejs-security-center/pull/50))
- build: test using @grpc/grpc-js in CI ([#49](https://github.com/googleapis/nodejs-security-center/pull/49))
- refactor: improve generated code style. ([#43](https://github.com/googleapis/nodejs-security-center/pull/43))
- chore(deps): update dependency eslint-config-prettier to v4 ([#41](https://github.com/googleapis/nodejs-security-center/pull/41))
- build: ignore googleapis.com in doc link check ([#39](https://github.com/googleapis/nodejs-security-center/pull/39))
- chore: sync gapic files

## v0.1.2

01-16-2019 16:03 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#34](https://github.com/googleapis/nodejs-security-center/pull/34))

### Documentation
- docs: update jsdoc comments ([#36](https://github.com/googleapis/nodejs-security-center/pull/36))
- build: check broken links in generated docs ([#25](https://github.com/googleapis/nodejs-security-center/pull/25))
- docs: various doc changes in protos and generated source ([#31](https://github.com/googleapis/nodejs-security-center/pull/31))
- fix(docs): broken link to API ref docs ([#32](https://github.com/googleapis/nodejs-security-center/pull/32))
- docs: update the comments in the protos ([#30](https://github.com/googleapis/nodejs-security-center/pull/30))
- samples: add quickstart ([#33](https://github.com/googleapis/nodejs-security-center/pull/33))

## v0.1.1

01-02-2019 14:54 PST

### Documentation
- fix(docs): require stmt (#29)
- add missing namespaces ([#27](https://github.com/googleapis/nodejs-security-center/pull/27))
- fix(docs): fix require module in samples ([#26](https://github.com/googleapis/nodejs-security-center/pull/26))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#23](https://github.com/googleapis/nodejs-security-center/pull/23))
- chore: update nyc and eslint configs ([#22](https://github.com/googleapis/nodejs-security-center/pull/22))
- chore: fix publish.sh permission +x ([#20](https://github.com/googleapis/nodejs-security-center/pull/20))
- fix(build): fix Kokoro release script ([#19](https://github.com/googleapis/nodejs-security-center/pull/19))
- build: add Kokoro configs for autorelease ([#18](https://github.com/googleapis/nodejs-security-center/pull/18))
- chore: add synth.metadata ([#17](https://github.com/googleapis/nodejs-security-center/pull/17))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#12](https://github.com/googleapis/nodejs-security-center/pull/12))
- chore: always nyc report before calling codecov ([#15](https://github.com/googleapis/nodejs-security-center/pull/15))
- chore: nyc ignore build/test by default ([#14](https://github.com/googleapis/nodejs-security-center/pull/14))
- docs: update readme badges ([#11](https://github.com/googleapis/nodejs-security-center/pull/11))

## v0.1.0

This is the initial release of the Cloud Security Center API Node.js client library.

### Documentation
- docs: sync protos comment changes

### Internal / Testing Changes
- build: add encrypted key ([#8](https://github.com/googleapis/nodejs-security-center/pull/8))
- add dummy no test yet file to system test and samples test dirs
- chore(build): Configure Renovate ([#6](https://github.com/googleapis/nodejs-security-center/pull/6))
- fix(build): fix system key decryption ([#5](https://github.com/googleapis/nodejs-security-center/pull/5))
- refactor: fix lint rules and make consistent ([#1](https://github.com/googleapis/nodejs-security-center/pull/1))
- remove CONTRIBUTORS
- license header on npm-install-retry
- add more scaffolding
