# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/kms?activeTab=versions

### [1.3.2](https://www.github.com/googleapis/nodejs-kms/compare/v1.3.1...v1.3.2) (2019-08-28)


### Bug Fixes

* update retry code settings per API call ([#196](https://www.github.com/googleapis/nodejs-kms/issues/196)) ([3ce2076](https://www.github.com/googleapis/nodejs-kms/commit/3ce2076))
* use process versions object for client header ([#199](https://www.github.com/googleapis/nodejs-kms/issues/199)) ([900eb1b](https://www.github.com/googleapis/nodejs-kms/commit/900eb1b))
* **docs:** stop redirecting reference docs to anchor link ([9edd953](https://www.github.com/googleapis/nodejs-kms/commit/9edd953))

### [1.3.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.3.0...v1.3.1) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([e50e0ef](https://www.github.com/googleapis/nodejs-kms/commit/e50e0ef))

## [1.3.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.2.1...v1.3.0) (2019-07-02)


### Features

* add IAM Policy Options ([#186](https://www.github.com/googleapis/nodejs-kms/issues/186)) ([7474dff](https://www.github.com/googleapis/nodejs-kms/commit/7474dff))

### [1.2.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.2.0...v1.2.1) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#183](https://www.github.com/googleapis/nodejs-kms/issues/183)) ([7c40adf](https://www.github.com/googleapis/nodejs-kms/commit/7c40adf))

## [1.2.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.1.1...v1.2.0) (2019-06-24)


### Features

* introduces CreateImportJob, ListImportJob, GetImportJob  ([#180](https://www.github.com/googleapis/nodejs-kms/issues/180)) ([9fb4efb](https://www.github.com/googleapis/nodejs-kms/commit/9fb4efb))

### [1.1.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#177](https://www.github.com/googleapis/nodejs-kms/issues/177)) ([50d93e7](https://www.github.com/googleapis/nodejs-kms/commit/50d93e7))

## [1.1.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#173](https://www.github.com/googleapis/nodejs-kms/issues/173)) ([0e67019](https://www.github.com/googleapis/nodejs-kms/commit/0e67019))

## [1.0.0](https://www.github.com/googleapis/nodejs-kms/compare/v0.4.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#151)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#149](https://www.github.com/googleapis/nodejs-kms/issues/149)) ([b92c822](https://www.github.com/googleapis/nodejs-kms/commit/b92c822))
* DEADLINE_EXCEEDED is no longer retried ([5f4f9ff](https://www.github.com/googleapis/nodejs-kms/commit/5f4f9ff))
* DEADLINE_EXCEEDED retry code is idempotent ([#159](https://www.github.com/googleapis/nodejs-kms/issues/159)) ([a7e511a](https://www.github.com/googleapis/nodejs-kms/commit/a7e511a))
* indicate that Encrypt, Decrypt, AsymmetricDecrypt, AsymmetricSign are idempotent, such that they're retried ([122b3f8](https://www.github.com/googleapis/nodejs-kms/commit/122b3f8))
* **deps:** update dependency google-gax to v1 ([#158](https://www.github.com/googleapis/nodejs-kms/issues/158)) ([91fe078](https://www.github.com/googleapis/nodejs-kms/commit/91fe078))


### Build System

* upgrade engines field to >=8.10.0 ([#151](https://www.github.com/googleapis/nodejs-kms/issues/151)) ([45b2a9f](https://www.github.com/googleapis/nodejs-kms/commit/45b2a9f))

## v0.4.0

03-13-2019 16:16 PDT

### New Features
- feat: add support for the CAVIUM_V2_COMPRESSED type ([#126](https://github.com/googleapis/nodejs-kms/pull/126))

### Bug Fixes
- fix: throw on invalid credentials
- fix(deps): update dependency google-gax to ^0.25.0 ([#113](https://github.com/googleapis/nodejs-kms/pull/113))

### Documentation
- docs: update links in contrib guide ([#125](https://github.com/googleapis/nodejs-kms/pull/125))
- docs: update contributing path in README ([#119](https://github.com/googleapis/nodejs-kms/pull/119))
- docs: move CONTRIBUTING.md to root ([#118](https://github.com/googleapis/nodejs-kms/pull/118))
- docs: add lint/fix example to contributing guide ([#116](https://github.com/googleapis/nodejs-kms/pull/116))
- docs: fix example comments ([#115](https://github.com/googleapis/nodejs-kms/pull/115))

### Internal / Testing Changes
- refactor: update json import paths ([#134](https://github.com/googleapis/nodejs-kms/pull/134))
- build: Add docuploader credentials to node publish jobs ([#132](https://github.com/googleapis/nodejs-kms/pull/132))
- build: use node10 to run samples-test, system-test etc ([#131](https://github.com/googleapis/nodejs-kms/pull/131))
- build: update release configuration
- chore: sync latest proto docs
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#124](https://github.com/googleapis/nodejs-kms/pull/124))
- chore(deps): update dependency yargs to v13 ([#122](https://github.com/googleapis/nodejs-kms/pull/122))
- build: create docs test npm scripts ([#121](https://github.com/googleapis/nodejs-kms/pull/121))
- build: test using @grpc/grpc-js in CI ([#120](https://github.com/googleapis/nodejs-kms/pull/120))
- refactor: improve generated code style. ([#114](https://github.com/googleapis/nodejs-kms/pull/114))
- chore(deps): update dependency eslint-config-prettier to v4 ([#112](https://github.com/googleapis/nodejs-kms/pull/112))
- test: add a system test to list global keys ([#111](https://github.com/googleapis/nodejs-kms/pull/111))
- build: ignore googleapis.com in doc link check ([#108](https://github.com/googleapis/nodejs-kms/pull/108))
- chore: sync gapic files

## v0.3.0

01-15-2019 10:50 PST

### Implementation Changes
- Add iam_policy proto ([#101](https://github.com/googleapis/nodejs-kms/pull/101))

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#105](https://github.com/googleapis/nodejs-kms/pull/105))
- fix(deps): update dependency google-gax to ^0.22.0 ([#73](https://github.com/googleapis/nodejs-kms/pull/73))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#71](https://github.com/googleapis/nodejs-kms/pull/71))
- chore(deps): update dependency through2 to v3 ([#67](https://github.com/googleapis/nodejs-kms/pull/67))
- chore(deps): update dependency eslint-plugin-node to v8 ([#59](https://github.com/googleapis/nodejs-kms/pull/59))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#44](https://github.com/googleapis/nodejs-kms/pull/44))

### Documentation
- build: check broken links in generated docs ([#102](https://github.com/googleapis/nodejs-kms/pull/102))
- fix(docs): remove unused IAM message types ([#103](https://github.com/googleapis/nodejs-kms/pull/103))
- docs: Changes 'dencrypt' to 'decrypt' ([#97](https://github.com/googleapis/nodejs-kms/pull/97))
- docs: add samples ([#88](https://github.com/googleapis/nodejs-kms/pull/88))
- docs: update readme badges ([#81](https://github.com/googleapis/nodejs-kms/pull/81))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#96](https://github.com/googleapis/nodejs-kms/pull/96))
- chore: update nyc and eslint configs ([#95](https://github.com/googleapis/nodejs-kms/pull/95))
- chore: fix publish.sh permission +x ([#93](https://github.com/googleapis/nodejs-kms/pull/93))
- fix(build): fix Kokoro release script ([#92](https://github.com/googleapis/nodejs-kms/pull/92))
- build: add Kokoro configs for autorelease ([#91](https://github.com/googleapis/nodejs-kms/pull/91))
- chore: always nyc report before calling codecov ([#87](https://github.com/googleapis/nodejs-kms/pull/87))
- chore: nyc ignore build/test by default ([#86](https://github.com/googleapis/nodejs-kms/pull/86))
- chore: update the renovate config ([#84](https://github.com/googleapis/nodejs-kms/pull/84))
- chore: update license file ([#83](https://github.com/googleapis/nodejs-kms/pull/83))
- fix(build): fix system key decryption ([#79](https://github.com/googleapis/nodejs-kms/pull/79))
- chore: add a synth.metadata
- chore: update eslintignore config ([#72](https://github.com/googleapis/nodejs-kms/pull/72))
- chore: update lint rules ([#69](https://github.com/googleapis/nodejs-kms/pull/69))
- chore: drop contributors from multiple places ([#70](https://github.com/googleapis/nodejs-kms/pull/70))
- chore: use latest npm on Windows ([#68](https://github.com/googleapis/nodejs-kms/pull/68))
- chore: update CircleCI config ([#66](https://github.com/googleapis/nodejs-kms/pull/66))
- chore: include build in eslintignore ([#63](https://github.com/googleapis/nodejs-kms/pull/63))
- chore: update issue templates ([#58](https://github.com/googleapis/nodejs-kms/pull/58))
- chore: remove old issue template ([#56](https://github.com/googleapis/nodejs-kms/pull/56))
- build: run tests on node11 ([#55](https://github.com/googleapis/nodejs-kms/pull/55))
- chores(build): do not collect sponge.xml from windows builds ([#54](https://github.com/googleapis/nodejs-kms/pull/54))
- chores(build): run codecov on continuous builds ([#53](https://github.com/googleapis/nodejs-kms/pull/53))
- chore: update new issue template ([#52](https://github.com/googleapis/nodejs-kms/pull/52))
- build: fix codecov uploading on Kokoro ([#48](https://github.com/googleapis/nodejs-kms/pull/48))
- Update kokoro config ([#45](https://github.com/googleapis/nodejs-kms/pull/45))
- test: remove appveyor config ([#41](https://github.com/googleapis/nodejs-kms/pull/41))
- Enable prefer-const in the eslint config ([#38](https://github.com/googleapis/nodejs-kms/pull/38))

## v0.2.0

### New Features
- Add new features to the library ([#33](https://github.com/googleapis/nodejs-kms/pull/33))
  - CryptoKeyPurpose: ASSYMETRIC_SIGN, ASSYMETRIC_DECRYPT
  - CryptoKeyVersion
  - KeyOperationAttestation
  - various improved code documentation

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#34](https://github.com/googleapis/nodejs-kms/pull/34))
- chore(deps): update dependency nyc to v13 ([#25](https://github.com/googleapis/nodejs-kms/pull/25))
- fix(deps): update dependency google-gax to ^0.19.0 ([#22](https://github.com/googleapis/nodejs-kms/pull/22))

### Internal / Testing Changes
- Enable no-var in eslint ([#35](https://github.com/googleapis/nodejs-kms/pull/35))
- Update CI config ([#32](https://github.com/googleapis/nodejs-kms/pull/32))
- Retry npm install in CI ([#30](https://github.com/googleapis/nodejs-kms/pull/30))
- Update CI config ([#27](https://github.com/googleapis/nodejs-kms/pull/27))
