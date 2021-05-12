# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/nodejs-vision?activeTab=versions

### [2.3.2](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.1...v2.3.2) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#897](https://www.github.com/googleapis/nodejs-vision/issues/897)) ([bc987f4](https://www.github.com/googleapis/nodejs-vision/commit/bc987f4cc731de64792d5b56d4861038b310f211))
* **deps:** update dependency natural to v5 ([#880](https://www.github.com/googleapis/nodejs-vision/issues/880)) ([6a82d95](https://www.github.com/googleapis/nodejs-vision/commit/6a82d95f532f054cd120920339c198d57ce2cf28))
* use require() to load JSON protos ([#899](https://www.github.com/googleapis/nodejs-vision/issues/899)) ([01ff4e3](https://www.github.com/googleapis/nodejs-vision/commit/01ff4e3162541e4e255ca7b3e5478c2b754a78b9))

### [2.3.1](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.0...v2.3.1) (2021-02-18)


### Bug Fixes

* **deps:** update dependency natural to v3 ([#865](https://www.github.com/googleapis/nodejs-vision/issues/865)) ([38d9a1a](https://www.github.com/googleapis/nodejs-vision/commit/38d9a1a3ae9fe02b67135ecc3f56f6d3a53ac547))
* **deps:** update dependency natural to v4 ([#870](https://www.github.com/googleapis/nodejs-vision/issues/870)) ([edfcb9e](https://www.github.com/googleapis/nodejs-vision/commit/edfcb9eed26145c1f72bfaaa3ee8e7a4d74630b3))
* sync vision v1 protos to get extra FaceAnnotation Landmark Types ([#868](https://www.github.com/googleapis/nodejs-vision/issues/868)) ([4d45375](https://www.github.com/googleapis/nodejs-vision/commit/4d45375016aa12d0e8ea24525168e23590af47b4))

## [2.3.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.2.0...v2.3.0) (2021-01-06)


### Features

* introduce style enumeration ([b5fe1ac](https://www.github.com/googleapis/nodejs-vision/commit/b5fe1aca1ee70176c5569d1ff9255958988a0077))

## [2.2.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.2...v2.2.0) (2021-01-06)


### Features

* Add TextDetectionParams.enable_text_detection_confidence_score ([#850](https://www.github.com/googleapis/nodejs-vision/issues/850)) ([c8f51a2](https://www.github.com/googleapis/nodejs-vision/commit/c8f51a2fd03e0dc80c7a36c9e7602f2c1a94a73d))


### Bug Fixes

* **browser:** check for fetch on window ([ef95fb1](https://www.github.com/googleapis/nodejs-vision/commit/ef95fb1ff7f2495b2929c18b4c814ad93c8b42cc))
* do not modify options object, use defaultScopes ([#845](https://www.github.com/googleapis/nodejs-vision/issues/845)) ([8377b42](https://www.github.com/googleapis/nodejs-vision/commit/8377b4268a4ed4ef07869c75c1ae48f4ec3b01ce))

### [2.1.2](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.1...v2.1.2) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#824](https://www.github.com/googleapis/nodejs-vision/issues/824)) ([9ce5215](https://www.github.com/googleapis/nodejs-vision/commit/9ce5215448b026adb10fa9c10156d4e8d8c865e4))

### [2.1.1](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.0...v2.1.1) (2020-07-10)


### Bug Fixes

* update node issue template ([#795](https://www.github.com/googleapis/nodejs-vision/issues/795)) ([e975833](https://www.github.com/googleapis/nodejs-vision/commit/e975833eb5b11d3c3834bfea9697a9611cae6a8f))

## [2.1.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.0.0...v2.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#790](https://www.github.com/googleapis/nodejs-vision/issues/790)) ([4d9e334](https://www.github.com/googleapis/nodejs-vision/commit/4d9e334bdf6bc479779541b31d26055199dcdbff))
* switch to es2018 target for TypeScript ([#788](https://www.github.com/googleapis/nodejs-vision/issues/788)) ([7df91d4](https://www.github.com/googleapis/nodejs-vision/commit/7df91d4fc15f64aa9e462af45136ae5a361cc162))


### Bug Fixes

* handle fallback option properly ([#793](https://www.github.com/googleapis/nodejs-vision/issues/793)) ([43b45bf](https://www.github.com/googleapis/nodejs-vision/commit/43b45bf1b41976f0628cae227d7f7fab29359632))

## [2.0.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.11.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#773](https://www.github.com/googleapis/nodejs-vision/issues/773)) ([2b3becf](https://www.github.com/googleapis/nodejs-vision/commit/2b3becf530294202d361d7a8f35601973332eafe))
* drop node8 support, support for async iterators ([#568](https://www.github.com/googleapis/nodejs-vision/issues/568)) ([e2dccd0](https://www.github.com/googleapis/nodejs-vision/commit/e2dccd02d20ed82ed679fff629b5a4aab47b39b6))


### Bug Fixes

* **deps:** update dependency @google-cloud/promisify to v2 ([#565](https://www.github.com/googleapis/nodejs-vision/issues/565)) ([c71a709](https://www.github.com/googleapis/nodejs-vision/commit/c71a70926568367fa89fbbf4226e40fcb44f679e))
* **deps:** update dependency mathjs to v7 ([#775](https://www.github.com/googleapis/nodejs-vision/issues/775)) ([d64d99f](https://www.github.com/googleapis/nodejs-vision/commit/d64d99fe615a7048a5537fbcb8fbf3364e1c53c0))
* **deps:** update dependency natural to v1 ([#768](https://www.github.com/googleapis/nodejs-vision/issues/768)) ([44a8dcc](https://www.github.com/googleapis/nodejs-vision/commit/44a8dcc389489829f927015a1070e516f2e786b0))
* **deps:** update dependency natural to v2 ([#772](https://www.github.com/googleapis/nodejs-vision/issues/772)) ([afdc8da](https://www.github.com/googleapis/nodejs-vision/commit/afdc8da5f4181b5d43c3dc0155294495d647645a))
* **samples:** use pureimage instead of canvas ([#774](https://www.github.com/googleapis/nodejs-vision/issues/774)) ([a352338](https://www.github.com/googleapis/nodejs-vision/commit/a3523388bace85f19041202c74be4beb705d620d))
* mocha tests ([#784](https://www.github.com/googleapis/nodejs-vision/issues/784)) ([319c98e](https://www.github.com/googleapis/nodejs-vision/commit/319c98e284a622876e055cfd7a249750d600ce76))
* remove eslint, update gax, fix generated protos, run the generator ([#756](https://www.github.com/googleapis/nodejs-vision/issues/756)) ([72f22b6](https://www.github.com/googleapis/nodejs-vision/commit/72f22b60e1491963ea1d22a4f96feabe07be0376))

## [1.11.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.10.0...v1.11.0) (2020-03-11)


### Features

* deferred client initialization ([#551](https://www.github.com/googleapis/nodejs-vision/issues/551)) ([8866d89](https://www.github.com/googleapis/nodejs-vision/commit/8866d8905750dfc0627f585c30c0b19bb205172d))
* export protos from src/index.ts ([#547](https://www.github.com/googleapis/nodejs-vision/issues/547)) ([41c736c](https://www.github.com/googleapis/nodejs-vision/commit/41c736c8f234f6fba20120fa5c17353519f2d45d))

## [1.10.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.9.0...v1.10.0) (2020-03-03)


### Features

* move API to typescript code generation ([#532](https://www.github.com/googleapis/nodejs-vision/issues/532)) ([401e694](https://www.github.com/googleapis/nodejs-vision/commit/401e6944796fd1249639da6b767e842576345c3e))

## [1.9.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.8.0...v1.9.0) (2020-02-10)


### Features

* bump release level to GA ([#530](https://www.github.com/googleapis/nodejs-vision/issues/530)) ([3b091ba](https://www.github.com/googleapis/nodejs-vision/commit/3b091ba7c67864e845d1f399b8052684a2d6030e))


### Bug Fixes

* **deps:** update dependency redis to v3 ([#533](https://www.github.com/googleapis/nodejs-vision/issues/533)) ([d9b50cb](https://www.github.com/googleapis/nodejs-vision/commit/d9b50cb2ac56a5eadab72efed59f12189418993c))

## [1.8.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.2...v1.8.0) (2020-01-02)


### Features

* add new resource descriptors ([#491](https://www.github.com/googleapis/nodejs-vision/issues/491)) ([95037bf](https://www.github.com/googleapis/nodejs-vision/commit/95037bf3c9236902ab31c23fd51a236e23100e91))
* **samples:** add sample of configuring alternate apiEndpoint ([#473](https://www.github.com/googleapis/nodejs-vision/issues/473)) ([fa01482](https://www.github.com/googleapis/nodejs-vision/commit/fa01482648c93d7a57b5f7159a995a6b13e4f941))


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#497](https://www.github.com/googleapis/nodejs-vision/issues/497)) ([30aa9ff](https://www.github.com/googleapis/nodejs-vision/commit/30aa9ffbdd3cdb8e28c300f7b9223f60fdb61d7e))

### [1.7.2](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.1...v1.7.2) (2019-11-18)


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#488](https://www.github.com/googleapis/nodejs-vision/issues/488)) ([21c889e](https://www.github.com/googleapis/nodejs-vision/commit/21c889ee3157e38cc8eefec5da8f1d103fd41f17))

### [1.7.1](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.0...v1.7.1) (2019-11-13)


### Bug Fixes

* import long in proto ts declaration file ([#482](https://www.github.com/googleapis/nodejs-vision/issues/482)) ([1f5258b](https://www.github.com/googleapis/nodejs-vision/commit/1f5258b65665c4813463592af32720d07e5c8de4))
* **docs:** snippets are now replaced in jsdoc comments ([#481](https://www.github.com/googleapis/nodejs-vision/issues/481)) ([07281d6](https://www.github.com/googleapis/nodejs-vision/commit/07281d6d0acbd59a9c308308cb090b598cda53a2))

## [1.7.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.6.0...v1.7.0) (2019-11-08)


### Features

* add celebrity face detection ([#477](https://www.github.com/googleapis/nodejs-vision/issues/477)) ([cdfa59e](https://www.github.com/googleapis/nodejs-vision/commit/cdfa59e4156c5b557651c3bf50cfc46487149a7d))

## [1.6.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.5.0...v1.6.0) (2019-11-05)


### Features

* added endpoint samples for vision api ([#467](https://www.github.com/googleapis/nodejs-vision/issues/467)) ([4c569b4](https://www.github.com/googleapis/nodejs-vision/commit/4c569b4ace83be63a12f85676c174a663796fa47))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#464](https://www.github.com/googleapis/nodejs-vision/issues/464)) ([dcc4d62](https://www.github.com/googleapis/nodejs-vision/commit/dcc4d622f46922975d028af20aefc27446fdcad5))


### Reverts

* added endpoint samples for vision api ([ea5d421](https://www.github.com/googleapis/nodejs-vision/commit/ea5d4218816571556a2059fc977e2223678c979e))

## [1.5.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.4.0...v1.5.0) (2019-10-10)


### Bug Fixes

* update protobuf options for product sets ([#462](https://www.github.com/googleapis/nodejs-vision/issues/462)) ([32b3fa9](https://www.github.com/googleapis/nodejs-vision/commit/32b3fa9))
* use compatible version of google-gax ([a4f2863](https://www.github.com/googleapis/nodejs-vision/commit/a4f2863))


### Features

* .d.ts for protos ([#451](https://www.github.com/googleapis/nodejs-vision/issues/451)) ([15f4329](https://www.github.com/googleapis/nodejs-vision/commit/15f4329))
* additional safe search confidence fields ([#444](https://www.github.com/googleapis/nodejs-vision/issues/444)) ([31735a7](https://www.github.com/googleapis/nodejs-vision/commit/31735a7))

## [1.4.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.3.0...v1.4.0) (2019-09-14)


### Features

* make vision helpers work with JSON proto ([#441](https://www.github.com/googleapis/nodejs-vision/issues/441)) ([5b7a249](https://www.github.com/googleapis/nodejs-vision/commit/5b7a249))

## [1.3.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.2.0...v1.3.0) (2019-09-09)


### Bug Fixes

* use process versions object for client header ([#428](https://www.github.com/googleapis/nodejs-vision/issues/428)) ([c1dde85](https://www.github.com/googleapis/nodejs-vision/commit/c1dde85))
* **samples:** upgrade yargs and fix broken CLI config ([#436](https://www.github.com/googleapis/nodejs-vision/issues/436)) ([1a9c374](https://www.github.com/googleapis/nodejs-vision/commit/1a9c374))


### Features

* load protos from JSON, grpc-fallback support ([9914445](https://www.github.com/googleapis/nodejs-vision/commit/9914445))

## [1.2.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.4...v1.2.0) (2019-08-19)


### Features

* adds support for multiple regions ([244e21e](https://www.github.com/googleapis/nodejs-vision/commit/244e21e))

### [1.1.4](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.3...v1.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([55c0380](https://www.github.com/googleapis/nodejs-vision/commit/55c0380))

### [1.1.3](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#406](https://www.github.com/googleapis/nodejs-vision/issues/406)) ([fa2fb3f](https://www.github.com/googleapis/nodejs-vision/commit/fa2fb3f))

### [1.1.2](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.1...v1.1.2) (2019-06-15)


### Bug Fixes

* **docs:** move to new client docs URL ([#401](https://www.github.com/googleapis/nodejs-vision/issues/401)) ([9b40044](https://www.github.com/googleapis/nodejs-vision/commit/9b40044))

### [1.1.1](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.0...v1.1.1) (2019-06-11)


### Bug Fixes

* **deps:** update dependency mathjs to v6 ([#399](https://www.github.com/googleapis/nodejs-vision/issues/399)) ([6c37196](https://www.github.com/googleapis/nodejs-vision/commit/6c37196))

## [1.1.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#393](https://www.github.com/googleapis/nodejs-vision/issues/393)) ([7777275](https://www.github.com/googleapis/nodejs-vision/commit/7777275))

## [1.0.0](https://www.github.com/googleapis/nodejs-vision/compare/v0.25.0...v1.0.0) (2019-05-13)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#376](https://www.github.com/googleapis/nodejs-vision/issues/376)) ([14a5ca9](https://www.github.com/googleapis/nodejs-vision/commit/14a5ca9))
* DEADLINE_EXCEEDED is idempotent ([#377](https://www.github.com/googleapis/nodejs-vision/issues/377)) ([d7ed2d3](https://www.github.com/googleapis/nodejs-vision/commit/d7ed2d3))
* **deps:** update dependency @google-cloud/promisify to v1 ([#367](https://www.github.com/googleapis/nodejs-vision/issues/367)) ([f1a5bcc](https://www.github.com/googleapis/nodejs-vision/commit/f1a5bcc))
* **deps:** update dependency google-gax to ^0.26.0 ([#362](https://www.github.com/googleapis/nodejs-vision/issues/362)) ([81a3379](https://www.github.com/googleapis/nodejs-vision/commit/81a3379))
* include 'x-goog-request-params' header in requests ([4e7a1c6](https://www.github.com/googleapis/nodejs-vision/commit/4e7a1c6)), closes [#353](https://www.github.com/googleapis/nodejs-vision/issues/353)
* **samples:** make test assertion less specific ([#354](https://www.github.com/googleapis/nodejs-vision/issues/354)) ([435ddf0](https://www.github.com/googleapis/nodejs-vision/commit/435ddf0))


### Build System

* upgrade engines field to >=8.10.0 ([#363](https://www.github.com/googleapis/nodejs-vision/issues/363)) ([e8a7141](https://www.github.com/googleapis/nodejs-vision/commit/e8a7141))


### Features

* image annotation batching ([#375](https://www.github.com/googleapis/nodejs-vision/issues/375)) ([bed2515](https://www.github.com/googleapis/nodejs-vision/commit/bed2515))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#363)

## v0.25.0

02-22-2019 17:39 PST

### New Features
This release contains a new version (v1p4beta1) of the Vision API. To use this version, construct the client liks this:

```javascript
const vision = require('@google-cloud/vision');
const client = new vision.v1p4beta1.ImageAnnotatorClient();
```

- feat: gen v1p4beta1: online PDF, async batch image annotate ([#331](https://github.com/googleapis/nodejs-vision/pull/331))

### Implementation Changes
- fix: throw on invalid credentials in v1p4beta1  ([#334](https://github.com/googleapis/nodejs-vision/pull/334))
- fix: throw on invalid credentials ([#326](https://github.com/googleapis/nodejs-vision/pull/326))

### Dependencies
- chore(deps): update dependency mocha to v6 ([#330](https://github.com/googleapis/nodejs-vision/pull/330))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#328](https://github.com/googleapis/nodejs-vision/pull/328))
- fix(deps): update dependency yargs to v13 ([#325](https://github.com/googleapis/nodejs-vision/pull/325))
- fix(deps): update dependency google-gax to ^0.25.0 ([#315](https://github.com/googleapis/nodejs-vision/pull/315))
- fix(deps): update dependency google-gax to ^0.24.0 ([#312](https://github.com/googleapis/nodejs-vision/pull/312))
- chore(deps): update dependency eslint-config-prettier to v4 ([#313](https://github.com/googleapis/nodejs-vision/pull/313))
- fix(deps): update dependency google-gax to ^0.23.0 ([#307](https://github.com/googleapis/nodejs-vision/pull/307))

### Documentation / Samples
- docs: update contributing path in README ([#321](https://github.com/googleapis/nodejs-vision/pull/321))
- docs: update links in contrib guide ([#329](https://github.com/googleapis/nodejs-vision/pull/329))
- docs: add lint/fix example to contributing guide ([#318](https://github.com/googleapis/nodejs-vision/pull/318))
- docs: fix example comments ([#317](https://github.com/googleapis/nodejs-vision/pull/317))
- fix(docs): remove unused long running operations types
- docs: improve detect.js samples ([#300](https://github.com/googleapis/nodejs-vision/pull/300))

### Internal / Testing Changes
- build: use linkinator for docs test ([#327](https://github.com/googleapis/nodejs-vision/pull/327))
- build: create docs test npm scripts ([#324](https://github.com/googleapis/nodejs-vision/pull/324))
- build: test using @grpc/grpc-js in CI ([#322](https://github.com/googleapis/nodejs-vision/pull/322))
- chore: move CONTRIBUTING.md to root ([#320](https://github.com/googleapis/nodejs-vision/pull/320))
- refactor: improve generated code style. ([#316](https://github.com/googleapis/nodejs-vision/pull/316))
- fix: ignore case in system test assertions ([#314](https://github.com/googleapis/nodejs-vision/pull/314))
- build: ignore googleapis.com in doc link check ([#310](https://github.com/googleapis/nodejs-vision/pull/310))
- chore: update year in the license headers. ([#309](https://github.com/googleapis/nodejs-vision/pull/309))
- build: check broken links in generated docs ([#301](https://github.com/googleapis/nodejs-vision/pull/301))

## v0.24.0

12-19-2018 13:36 PST

### Implementation Changes
**This release contains breaking change**
- BREAKING: rename method imagePath => referenceImagePath ([#296](https://github.com/googleapis/nodejs-vision/pull/296))
The method `ProductSearchClient.imagePath` was renamed `referenceImagePath`:
```
// old code
const formattedName = client.imagePath(...);

// new code
const formattedName = client.referenceImagePath(...);
```
- fix: Param "scoreThreshold" should be "score_threshold" ([#234](https://github.com/googleapis/nodejs-vision/pull/234))

### New Features
- ProductSearch GA ([#280](https://github.com/googleapis/nodejs-vision/pull/280))

### Dependencies
- refactor: remove unused deps ([#261](https://github.com/googleapis/nodejs-vision/pull/261))
- fix(deps): update dependency google-gax to ^0.22.0 ([#265](https://github.com/googleapis/nodejs-vision/pull/265))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#263](https://github.com/googleapis/nodejs-vision/pull/263))
- fix(deps): update dependency @google-cloud/vision to ^0.23.0 ([#260](https://github.com/googleapis/nodejs-vision/pull/260))

### Documentation
- docs: fix productSearch example ([#285](https://github.com/googleapis/nodejs-vision/pull/285))
- docs: update readme badges ([#283](https://github.com/googleapis/nodejs-vision/pull/283))
- docs(samples): updated samples code to use async/await and tests to use mocha ([#241](https://github.com/googleapis/nodejs-vision/pull/241))

### Internal / Testing Changes
- chore: modernize the samples and sample tests ([#297](https://github.com/googleapis/nodejs-vision/pull/297))
- chore(build): inject yoshi automation key ([#294](https://github.com/googleapis/nodejs-vision/pull/294))
- chore: update nyc and eslint configs ([#293](https://github.com/googleapis/nodejs-vision/pull/293))
- chore: fix publish.sh permission +x ([#292](https://github.com/googleapis/nodejs-vision/pull/292))
- fix(build): fix Kokoro release script ([#291](https://github.com/googleapis/nodejs-vision/pull/291))
- build: add Kokoro configs for autorelease ([#290](https://github.com/googleapis/nodejs-vision/pull/290))
- chore: always nyc report before calling codecov ([#288](https://github.com/googleapis/nodejs-vision/pull/288))
- chore: nyc ignore build/test by default ([#287](https://github.com/googleapis/nodejs-vision/pull/287))
- chore: update license file ([#284](https://github.com/googleapis/nodejs-vision/pull/284))
- fix(build): fix system key decryption ([#282](https://github.com/googleapis/nodejs-vision/pull/282))
- test: make product search tests run ([#269](https://github.com/googleapis/nodejs-vision/pull/269))
- chore: update eslintignore config ([#264](https://github.com/googleapis/nodejs-vision/pull/264))
- chore: drop contributors from multiple places ([#262](https://github.com/googleapis/nodejs-vision/pull/262))

## v0.23.0

### New Features
- feat: add support for product search

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v8 ([#245](https://github.com/googleapis/nodejs-vision/pull/245))
- chore(deps): update dependency canvas to v2 ([#224](https://github.com/googleapis/nodejs-vision/pull/224))
- chore(deps): update dependency sinon to v7 ([#219](https://github.com/googleapis/nodejs-vision/pull/219))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#213](https://github.com/googleapis/nodejs-vision/pull/213))

### Documentation
- fix(samples): Adding vision_product_search_tutorial_import tags ([#221](https://github.com/googleapis/nodejs-vision/pull/221))
- fix(samples): Change the Project ID from number to string ([#220](https://github.com/googleapis/nodejs-vision/pull/220))
- docs: Vision AutoML samples ([#197](https://github.com/googleapis/nodejs-vision/pull/197))

### Internal / Testing Changes
- chore: use latest npm on Windows ([#258](https://github.com/googleapis/nodejs-vision/pull/258))
- chore: update lint configs ([#257](https://github.com/googleapis/nodejs-vision/pull/257))
- chore: update CircleCI config ([#253](https://github.com/googleapis/nodejs-vision/pull/253))
- chore: update issue templates ([#244](https://github.com/googleapis/nodejs-vision/pull/244))
- chore: remove old issue template ([#242](https://github.com/googleapis/nodejs-vision/pull/242))
- build: run tests on node11 ([#239](https://github.com/googleapis/nodejs-vision/pull/239))
- chores(build): do not collect sponge.xml from windows builds ([#238](https://github.com/googleapis/nodejs-vision/pull/238))
- chores(build): run codecov on continuous builds ([#237](https://github.com/googleapis/nodejs-vision/pull/237))
- chore: update new issue template ([#235](https://github.com/googleapis/nodejs-vision/pull/235))
- build: fix codecov uploading on Kokoro ([#222](https://github.com/googleapis/nodejs-vision/pull/222))
- chore: enable --throw-deprecation on mocha config ([#147](https://github.com/googleapis/nodejs-vision/pull/147))
- Update kokoro config ([#214](https://github.com/googleapis/nodejs-vision/pull/214))
- Update kokoro config ([#208](https://github.com/googleapis/nodejs-vision/pull/208))
- test: remove appveyor config ([#207](https://github.com/googleapis/nodejs-vision/pull/207))
- Update the CI config ([#206](https://github.com/googleapis/nodejs-vision/pull/206))

## v0.22.1

### Bug fixes
- Fix response output for Detect Labels ([#199](https://github.com/googleapis/nodejs-vision/pull/199))

### Documentation
- Vision GA – vision_localize_objects & vision_localize_object_gcs ([#200](https://github.com/googleapis/nodejs-vision/pull/200))
- Product search rebased ([#196](https://github.com/googleapis/nodejs-vision/pull/196))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#201](https://github.com/googleapis/nodejs-vision/pull/201))
- Enable no-var in eslint ([#198](https://github.com/googleapis/nodejs-vision/pull/198))
- Switch to let/const ([#194](https://github.com/googleapis/nodejs-vision/pull/194))
- fix(deps): update dependency google-gax to ^0.20.0 ([#193](https://github.com/googleapis/nodejs-vision/pull/193))

## v0.22.0

### New Features
Object Localization is available on v1 of this library:
- Updated CI config and run synth ([#181](https://github.com/googleapis/nodejs-vision/pull/181))

### Dependencies
- chore(deps): update dependency @google-cloud/storage to v2 ([#183](https://github.com/googleapis/nodejs-vision/pull/183))
- chore(deps): update dependency nyc to v13 ([#177](https://github.com/googleapis/nodejs-vision/pull/177))
- fix(deps): update dependency google-gax to ^0.19.0 ([#173](https://github.com/googleapis/nodejs-vision/pull/173))
- chore(deps): update dependency eslint-config-prettier to v3 ([#170](https://github.com/googleapis/nodejs-vision/pull/170))

### Internal / Testing Changes
- Update CI config ([#188](https://github.com/googleapis/nodejs-vision/pull/188))
- Fix the sample tests ([#187](https://github.com/googleapis/nodejs-vision/pull/187))
- Retry npm install in CI ([#185](https://github.com/googleapis/nodejs-vision/pull/185))
- Update CI config ([#184](https://github.com/googleapis/nodejs-vision/pull/184))
- fix: (tests): Use real service to validate expectations. ([#182](https://github.com/googleapis/nodejs-vision/pull/182))
- chore: make the CircleCI config consistent
- Udpate Beta Vision samples to use beta tags ([#172](https://github.com/googleapis/nodejs-vision/pull/172))
- Vision region tag update ([#171](https://github.com/googleapis/nodejs-vision/pull/171))
- build: configure Windows build on Kokoro ([#165](https://github.com/googleapis/nodejs-vision/pull/165))
- chore: do not use npm ci ([#167](https://github.com/googleapis/nodejs-vision/pull/167))
- build(kokoro): samples-test.sh need GCLOUD_PROJECT env; node6 and node8 is using wrong .sh ([#162](https://github.com/googleapis/nodejs-vision/pull/162))
- build(kokoro): setup samples and system test ([#161](https://github.com/googleapis/nodejs-vision/pull/161))
- chore: ignore package-lock.json ([#160](https://github.com/googleapis/nodejs-vision/pull/160))
- build: rename build.sh => test.sh; presubmit jobs runs lint and docs properly ([#158](https://github.com/googleapis/nodejs-vision/pull/158))
- fix(samples): missing fs requires causing sample-test to fail ([#157](https://github.com/googleapis/nodejs-vision/pull/157))
- build: add set -x to .sh to show the command being executed ([#156](https://github.com/googleapis/nodejs-vision/pull/156))
- add samples linking to kokoro jobs ([#155](https://github.com/googleapis/nodejs-vision/pull/155))
- Kokoro multi ver ([#153](https://github.com/googleapis/nodejs-vision/pull/153))
- chore: update renovate config ([#152](https://github.com/googleapis/nodejs-vision/pull/152))
- have presubmit.cfg in separate node* folders ([#151](https://github.com/googleapis/nodejs-vision/pull/151))
- split presubmit to multiple node versions ([#149](https://github.com/googleapis/nodejs-vision/pull/149))

## v0.21.1

Patch release to bring in updates to google-gax@0.18.0 so it no longer emits deprecation warnings with grpc (#120), along with other dependency updates and documentation changes.

### Dependencies
- fix(deps): update dependency google-gax to ^0.18.0 (#146)
- chore: drop dependency on common (#134)
- chore(deps): update dependency eslint-plugin-node to v7 (#127)

### Documentation
- Code Samples demonstrating Object Localization & Handwriting OCR (#133)

### Internal / Testing Changes
- build: initial kokoro setup (#145)
- chore: assert.deelEqual => assert.deepStrictEqual (#143)
- chore: move mocha options to mocha.opts (#141)
- chore: require node 8 for samples (#142)
- chore: add node templates to synth.py (#139)
- fix(deps): update dependency @google-cloud/vision to ^0.21.0 (#131)

## v0.21.0

### Implementation Changes
#### 🚨 BREAKING CHANGE
In this version we dropped support for NodeJS 4.x and 9.x. Your code might break if you're using this library on non LTS versions.
- fix: drop support for node.js 4.x and 9.x (#117)

### New Features
This release brings in v1p3beta1 of the Cloud Vision API, which includes the following new features:
- Object localization
- Product search

- gen: v1p3beta1 of Cloud Vision API NodeJS Client Library (#124)
- feat: implement manual methods for objectLocalization and productSearch on v1p3beta1 (#128)

### Dependencies
- fix: update and cleanup dependencies (#102)
- fix(deps): update dependency yargs to v12 (#103)
- repo: setup greenkeeper.json to update dependencies in samples/package.json (#94)
- refactor: drop dependency on extend (#85)
- fix: move async to dev dependencies (#83)
- chore: update many dependencies (#81)
- fix: switch from node-uuid to uuid (#84)
- chore(package): update eslint to version 5.0.1 (#98)
- chore(package): update eslint to version 5.0.0 (#90)

### Documentation

### Internal / Testing Changes
- Add smoke tests via regeneration (#122)
- Re-generate library using /synth.py (#111)
- synth.py: follow synth scripts from other repos (#113)
- Beta2ga pdf ocr (#104)
- Configure Renovate (#87)
- refactor: drop repo-tool as an exec wrapper (#97)
- fix: update linking for samples (#92)
