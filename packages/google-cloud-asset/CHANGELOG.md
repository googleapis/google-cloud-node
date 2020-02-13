# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/asset?activeTab=versions

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
