# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/dialogflow?activeTab=versions

## [4.1.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v4.0.0...v4.1.0) (2021-06-15)


### Features

* added Automated agent reply type and allow cancellation flag for partial response feature ([#825](https://www.github.com/googleapis/nodejs-dialogflow/issues/825)) ([5b128d9](https://www.github.com/googleapis/nodejs-dialogflow/commit/5b128d97eeb63e7d7666e800e5a62789f6f56a65))

## [4.0.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.5.0...v4.0.0) (2021-06-15)


### ⚠ BREAKING CHANGES

* helper agentPath becomes projectAgentPath
* helper intentPath becomes projectAgentIntentPath
* helper entityTypePath becomes projectAgentEntityTypePath
* remove unused proto InputText, InputAudio (#796)

### Features

* added Fulfillment service ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))
* added more Environment RPCs ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))
* added TextToSpeechSettings. ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))
* added Versions service ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#812](https://www.github.com/googleapis/nodejs-dialogflow/issues/812)) ([0ecd65c](https://www.github.com/googleapis/nodejs-dialogflow/commit/0ecd65cb683801827078fb83e60231ea45eec568))
* remove unused proto InputText, InputAudio ([#796](https://www.github.com/googleapis/nodejs-dialogflow/issues/796)) ([4f6f7d6](https://www.github.com/googleapis/nodejs-dialogflow/commit/4f6f7d6de67533a68866da1452e669e28ff1b2a8))


### Code Refactoring

* helper agentPath becomes projectAgentPath ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))
* helper entityTypePath becomes projectAgentEntityTypePath ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))
* helper intentPath becomes projectAgentIntentPath ([fa42037](https://www.github.com/googleapis/nodejs-dialogflow/commit/fa420372a4dc6ec99e68df277050ed36b8c3091d))

## [3.5.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.4.0...v3.5.0) (2021-04-06)


### Features

* expose MP3_64_KBPS and MULAW for output audio encodings. ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* expose MP3_64_KBPS and MULAW for output audio encodings. ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))


### Bug Fixes

* Add all missing regional HTTP bindings in DF API. ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* remove `input_audio` field from AnalyzeContentRequest from v2/v2beta1 ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* remove proto message CreateCallMatcherRequest, CreateCallMatcherResponse, ListCallMatchersRequest, ListCallMatchersResponse, DeleteCallMatcherRequest, DeleteCallMatcherResponse, CallMatcher, StreamingAnalyzeContentRequest, StreamingAnalyzeContentResponse, AudioInput from v2/v2beta1, TelephonyDtmfEvents, TelephonyDtmf from v2 ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* remove resource_reference for invisible resources. ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* Remove resource_reference from UpdateAnswerRecord. ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* remove rpc or fields that are unintended to release ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))
* remove StreamingAnalyzeContent, CreateCallMatcher, ListCallMatchers, DeleteCallMatcher rpc from v2/v2beta1 ([b07f89d](https://www.github.com/googleapis/nodejs-dialogflow/commit/b07f89dd9fecb345391c24f936cbcdfe11745921))

## [3.4.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.3.0...v3.4.0) (2021-03-15)


### ⚠ BREAKING CHANGES

* removed ImportAgentResponse which was not ready for use yet

### Features

* add additional_bindings to Dialogflow v2 ListIntents API docs: update copyrights and session docs ([66cd3a5](https://www.github.com/googleapis/nodejs-dialogflow/commit/66cd3a5b5c605deb37efbc4f87edf17b8d4dd4c1))
* add additional_bindings to Dialogflow v2beta1 ListIntents API docs: update copyrights and session docs ([66cd3a5](https://www.github.com/googleapis/nodejs-dialogflow/commit/66cd3a5b5c605deb37efbc4f87edf17b8d4dd4c1))
* add CCAI API ([a93fa71](https://www.github.com/googleapis/nodejs-dialogflow/commit/a93fa71d45cace7822d5585a8a407e3e7e563686))
* added support for regionalization for document API ([#722](https://www.github.com/googleapis/nodejs-dialogflow/issues/722)) ([b6f5738](https://www.github.com/googleapis/nodejs-dialogflow/commit/b6f5738613fc5af49b966d4a8c4137921abed5ef))
* adds style enum ([72bb3ae](https://www.github.com/googleapis/nodejs-dialogflow/commit/72bb3aed5fbe9a605810cce69a12fd3c5e4d1fac))
* allowed custom to specify webhook headers through query parameters ([#724](https://www.github.com/googleapis/nodejs-dialogflow/issues/724)) ([a7f784a](https://www.github.com/googleapis/nodejs-dialogflow/commit/a7f784ac921a750e9df2e6edbfa3bee870187af1))


### Bug Fixes

* **browser:** check for fetch on window ([#718](https://www.github.com/googleapis/nodejs-dialogflow/issues/718)) ([fb28879](https://www.github.com/googleapis/nodejs-dialogflow/commit/fb28879443c27688d1923d6675ea97c3c5d4d0e7))
* do not modify options object, use defaultScopes ([#706](https://www.github.com/googleapis/nodejs-dialogflow/issues/706)) ([95a938d](https://www.github.com/googleapis/nodejs-dialogflow/commit/95a938dbc5f2cc49c217bb5d3cecbbffba3e6d18))
* remove MixedAudio ([a93fa71](https://www.github.com/googleapis/nodejs-dialogflow/commit/a93fa71d45cace7822d5585a8a407e3e7e563686))
* removed ImportAgentResponse which was not ready for use yet ([e0d9fa6](https://www.github.com/googleapis/nodejs-dialogflow/commit/e0d9fa69bba79540c09ec777b3eee6bf0bd5e4b6))

## [3.3.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.2.0...v3.3.0) (2020-09-15)


### Features

* added Telephony Gateway DTMF events doc: added locations in resource name formats doc: wording updates for tiers ([#683](https://www.github.com/googleapis/nodejs-dialogflow/issues/683)) ([a0cb46a](https://www.github.com/googleapis/nodejs-dialogflow/commit/a0cb46a81b3b50257152362fdb36862b1e90d567))


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#676](https://www.github.com/googleapis/nodejs-dialogflow/issues/676)) ([217bb9c](https://www.github.com/googleapis/nodejs-dialogflow/commit/217bb9c209000d20157fc6478cd9a26369e8b106))

## [3.2.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.1.1...v3.2.0) (2020-07-29)


### Features

* added support for custom content types docs: clarified wording around quota usage ([#660](https://www.github.com/googleapis/nodejs-dialogflow/issues/660)) ([8a7fbd3](https://www.github.com/googleapis/nodejs-dialogflow/commit/8a7fbd32ddcc907538fd4b0b5a129054c082dc81))

### [3.1.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.1.0...v3.1.1) (2020-07-23)


### Bug Fixes

* publish missing client config annotations ([#653](https://www.github.com/googleapis/nodejs-dialogflow/issues/653)) ([b368797](https://www.github.com/googleapis/nodejs-dialogflow/commit/b36879723fd3aeab0c158d3ab76a5aa6505498e1))

## [3.1.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v3.0.0...v3.1.0) (2020-07-10)


### Features

* adds projectAgentEnvironmentPathTemplate and projectAgentEnvironmentUserSessionContextPathTemplate ([c204d9c](https://www.github.com/googleapis/nodejs-dialogflow/commit/c204d9cd7d9f121404b15783b8da5a451a671748))


### Bug Fixes

* typeo in nodejs .gitattribute ([#639](https://www.github.com/googleapis/nodejs-dialogflow/issues/639)) ([558aad8](https://www.github.com/googleapis/nodejs-dialogflow/commit/558aad81af74888516db9667f4a4e7b56cd3d3ba))

## [3.0.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v2.0.0...v3.0.0) (2020-07-06)


### ⚠ BREAKING CHANGES

* only v1 clients must be exported by default (#619)
* proper long running operation returned from Agent v2beta1 calls (#621)

### Features

* check status of long running operation by its name ([#606](https://www.github.com/googleapis/nodejs-dialogflow/issues/606)) ([77b28f1](https://www.github.com/googleapis/nodejs-dialogflow/commit/77b28f1fad846bf629fcbdccfb0b51771e2e9c76))
* proper long running operation returned from Agent v2beta1 calls ([#621](https://www.github.com/googleapis/nodejs-dialogflow/issues/621)) ([ff509cd](https://www.github.com/googleapis/nodejs-dialogflow/commit/ff509cd59ac14958b08698dc22308bd660da82ca))


### Bug Fixes

* **deps:** update dependency uuid to v8 ([#602](https://www.github.com/googleapis/nodejs-dialogflow/issues/602)) ([9cec1be](https://www.github.com/googleapis/nodejs-dialogflow/commit/9cec1beeace132829368b99701ce7c9970e4b126))
* exception occurred in retry method ([#615](https://www.github.com/googleapis/nodejs-dialogflow/issues/615)) ([b8b2ccd](https://www.github.com/googleapis/nodejs-dialogflow/commit/b8b2ccdf2e0c236c515706ecc6b9759ed570cfc7))
* only v1 clients must be exported by default ([#619](https://www.github.com/googleapis/nodejs-dialogflow/issues/619)) ([d1fb5ab](https://www.github.com/googleapis/nodejs-dialogflow/commit/d1fb5abb66f1eb55545807e1f6cb45b0ec51c287))

## [2.0.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v1.2.0...v2.0.0) (2020-04-23)


### ⚠ BREAKING CHANGES

* regenerate library based on dialogflow/v2 proto changes (#569)
* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* updated protos and renamed path template helpers
* move API to typescript code generation (#523)

### Features

* added getValidationResult and field mask override control for output audio config ([4fd6c71](https://www.github.com/googleapis/nodejs-dialogflow/commit/4fd6c71d979256850eb655a9f4554bee051e489c))
* deferred client initialization ([#555](https://www.github.com/googleapis/nodejs-dialogflow/issues/555)) ([93ba86e](https://www.github.com/googleapis/nodejs-dialogflow/commit/93ba86e586ffd7d563da9118f96fa1b172c13d7d))
* drop node8 support, support for async iterators ([#574](https://www.github.com/googleapis/nodejs-dialogflow/issues/574)) ([fe8073f](https://www.github.com/googleapis/nodejs-dialogflow/commit/fe8073f79e98211eb6790e9fef05dd9ea8159573))
* export protos in src/index.ts ([92d805b](https://www.github.com/googleapis/nodejs-dialogflow/commit/92d805b452e7c61da6c87eb32ebe3e358e15a187))
* move API to typescript code generation ([#523](https://www.github.com/googleapis/nodejs-dialogflow/issues/523)) ([19793a5](https://www.github.com/googleapis/nodejs-dialogflow/commit/19793a57250f22c9ea7ebde1d4553cbc5c93253c))
* Publish ListEnvironments for Dialogflow v2/v2beta1 library. ([#598](https://www.github.com/googleapis/nodejs-dialogflow/issues/598)) ([de9e8f6](https://www.github.com/googleapis/nodejs-dialogflow/commit/de9e8f6bf4cf3c3a3d8b7ca27385e6c2f39afa3b))
* regenerate library based on dialogflow/v2 proto changes ([#569](https://www.github.com/googleapis/nodejs-dialogflow/issues/569)) ([1610850](https://www.github.com/googleapis/nodejs-dialogflow/commit/16108501e3855f6b422c6e7be74d84922f710387))
* updated protos and renamed path template helpers ([1c1b01c](https://www.github.com/googleapis/nodejs-dialogflow/commit/1c1b01ca4de61ca2ac77fedd4c5f33d9d5797c0d))


### Bug Fixes

* add missing resource annotations and additional_bindings ([#591](https://www.github.com/googleapis/nodejs-dialogflow/issues/591)) ([5a0e2ec](https://www.github.com/googleapis/nodejs-dialogflow/commit/5a0e2ec007dd717d8c18ab8d409c9a16c9589098))
* bump min version of dependencies ([#589](https://www.github.com/googleapis/nodejs-dialogflow/issues/589)) ([d87e221](https://www.github.com/googleapis/nodejs-dialogflow/commit/d87e221ba9bb7231b4cb7ed989a7a7293133fcdb))
* remove eslint, update gax, fix generated protos, run the generator ([#586](https://www.github.com/googleapis/nodejs-dialogflow/issues/586)) ([b9a88cf](https://www.github.com/googleapis/nodejs-dialogflow/commit/b9a88cfb66e9908d57660e3b5168e50b2cae1b9a))

## [1.2.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v1.1.2...v1.2.0) (2020-02-07)


### Features

* **docs:** add deprecation message to version 1.x.x README ([#526](https://www.github.com/googleapis/nodejs-dialogflow/issues/526)) ([5474ec1](https://www.github.com/googleapis/nodejs-dialogflow/commit/5474ec19e943d01e4fc31bf8a728ee0299af8621))

### [1.1.2](https://www.github.com/googleapis/nodejs-dialogflow/compare/v1.1.1...v1.1.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([79bc7bc](https://www.github.com/googleapis/nodejs-dialogflow/commit/79bc7bcd08bc7a786e0d75a55de38b30e0d1a569))

### [1.1.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v1.1.0...v1.1.1) (2020-01-09)


### Bug Fixes

* proto updates, no code changes ([1388648](https://www.github.com/googleapis/nodejs-dialogflow/commit/138864846d04397d8e590e817de6c3e94d800423))

## [1.1.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v1.0.0...v1.1.0) (2020-01-05)


### Features

* add support for operation info ([#488](https://www.github.com/googleapis/nodejs-dialogflow/issues/488)) ([12d58a6](https://www.github.com/googleapis/nodejs-dialogflow/commit/12d58a613d63045030e4f9910d8d5a3cffd34b06))


### Bug Fixes

* update proto annotations ([142ff2b](https://www.github.com/googleapis/nodejs-dialogflow/commit/142ff2b97445bbc1b333b3eea6cae4eedabf63a9))

## [1.0.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.14.1...v1.0.0) (2019-12-05)


### Features

* adds plural and singular resource descriptor ([#471](https://www.github.com/googleapis/nodejs-dialogflow/issues/471)) ([29e47a6](https://www.github.com/googleapis/nodejs-dialogflow/commit/29e47a68e66303b4485a3d0808fd022248887534))
* **process:** library should be at 1.x ([#481](https://www.github.com/googleapis/nodejs-dialogflow/issues/481)) ([7d0df44](https://www.github.com/googleapis/nodejs-dialogflow/commit/7d0df44c32e29fa4cb93182b6b97a15bae30836c))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([4dfa20f](https://www.github.com/googleapis/nodejs-dialogflow/commit/4dfa20fc10e7a5fcc294b60d2659b24e967fc17f))
* **deps:** update dependency yargs to v15 ([#469](https://www.github.com/googleapis/nodejs-dialogflow/issues/469)) ([74e847e](https://www.github.com/googleapis/nodejs-dialogflow/commit/74e847e7b047d83e3fdcbd601def1493d228fe08))
* **docs:** bump release level to GA ([#475](https://www.github.com/googleapis/nodejs-dialogflow/issues/475)) ([59b5d8c](https://www.github.com/googleapis/nodejs-dialogflow/commit/59b5d8c6c4e4b7091c1b5ea31404d0f941f85b13))

### [0.14.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.14.0...v0.14.1) (2019-11-15)


### Bug Fixes

* import long in proto ts declaration file ([#462](https://www.github.com/googleapis/nodejs-dialogflow/issues/462)) ([cacd9c8](https://www.github.com/googleapis/nodejs-dialogflow/commit/cacd9c83e8edea18c7742b55efee91bce1a06e53))
* **docs:** snippets are now replaced in jsdoc comments ([#461](https://www.github.com/googleapis/nodejs-dialogflow/issues/461)) ([029146e](https://www.github.com/googleapis/nodejs-dialogflow/commit/029146e70d1094f2a5de7cba61ed83006b533451))

## [0.14.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.13.0...v0.14.0) (2019-11-08)


### Features

* add webhooks, BrowseCarouselCard, TableCard and MediaContent ([#458](https://www.github.com/googleapis/nodejs-dialogflow/issues/458)) ([53051a8](https://www.github.com/googleapis/nodejs-dialogflow/commit/53051a88b401a5d48844490531c3d50437a246b7))

## [0.13.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.12.2...v0.13.0) (2019-11-05)


### Features

* add subtitle support ([#457](https://www.github.com/googleapis/nodejs-dialogflow/issues/457)) ([6cb00ea](https://www.github.com/googleapis/nodejs-dialogflow/commit/6cb00ea6194835045250eac5127250f1e2ea61fd))
* introduces languageCode option ([8f3943f](https://www.github.com/googleapis/nodejs-dialogflow/commit/8f3943f8f6abb575f8b255207617a24e213bae57))

### [0.12.2](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.12.1...v0.12.2) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#451](https://www.github.com/googleapis/nodejs-dialogflow/issues/451)) ([1fddbd9](https://www.github.com/googleapis/nodejs-dialogflow/commit/1fddbd9e831256c395cb3cd3f59b43024da11d2e))

### [0.12.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.12.0...v0.12.1) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([9a0c16a](https://www.github.com/googleapis/nodejs-dialogflow/commit/9a0c16a))

## [0.12.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.11.0...v0.12.0) (2019-09-16)


### Features

* fuzzy extraction and regexp entities ([#430](https://www.github.com/googleapis/nodejs-dialogflow/issues/430)) ([60aab0b](https://www.github.com/googleapis/nodejs-dialogflow/commit/60aab0b))

## [0.11.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.10.3...v0.11.0) (2019-09-09)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([a9458de](https://www.github.com/googleapis/nodejs-dialogflow/commit/a9458de))
* add newlines to JSON protos ([bc9bc73](https://www.github.com/googleapis/nodejs-dialogflow/commit/bc9bc73))


### Features

* load protos from JSON, grpc-fallback support ([8683933](https://www.github.com/googleapis/nodejs-dialogflow/commit/8683933))

### [0.10.3](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.10.2...v0.10.3) (2019-07-23)


### Bug Fixes

* **deps:** drop dependency on through2 ([#388](https://www.github.com/googleapis/nodejs-dialogflow/issues/388)) ([301c212](https://www.github.com/googleapis/nodejs-dialogflow/commit/301c212))

### [0.10.2](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.10.1...v0.10.2) (2019-07-01)


### Bug Fixes

* **docs:** make anchors work in jsdoc ([#375](https://www.github.com/googleapis/nodejs-dialogflow/issues/375)) ([71e9a9c](https://www.github.com/googleapis/nodejs-dialogflow/commit/71e9a9c))

### [0.10.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.10.0...v0.10.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#368](https://www.github.com/googleapis/nodejs-dialogflow/issues/368)) ([9e121db](https://www.github.com/googleapis/nodejs-dialogflow/commit/9e121db))

## [0.10.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.9.1...v0.10.0) (2019-06-05)


### Features

* add support for apiEndpoint option ([#363](https://www.github.com/googleapis/nodejs-dialogflow/issues/363)) ([10e84a3](https://www.github.com/googleapis/nodejs-dialogflow/commit/10e84a3))

### [0.9.1](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.9.0...v0.9.1) (2019-05-20)


### Bug Fixes

* DEADLINE_EXCEEDED retry code is idempotent ([#343](https://www.github.com/googleapis/nodejs-dialogflow/issues/343)) ([d1238f7](https://www.github.com/googleapis/nodejs-dialogflow/commit/d1238f7))
* remove DEADLINE_EXCEEDED from list of idempotent operations ([871070f](https://www.github.com/googleapis/nodejs-dialogflow/commit/871070f))
* **deps:** update dependency google-gax to v1 ([#342](https://www.github.com/googleapis/nodejs-dialogflow/issues/342)) ([dead90b](https://www.github.com/googleapis/nodejs-dialogflow/commit/dead90b))

## [0.9.0](https://www.github.com/googleapis/nodejs-dialogflow/compare/v0.8.2...v0.9.0) (2019-05-07)

### BREAKING CHANGE

This release drops support for node versions below v8.10.0.

### Bug Fixes

* include 'x-goog-request-params' header in requests ([#310](https://www.github.com/googleapis/nodejs-dialogflow/issues/310)) ([479defe](https://www.github.com/googleapis/nodejs-dialogflow/commit/479defe))
* **deps:** update dependency google-gax to ^0.26.0 ([#326](https://www.github.com/googleapis/nodejs-dialogflow/issues/326)) ([7541e5f](https://www.github.com/googleapis/nodejs-dialogflow/commit/7541e5f))


### Build System

* upgrade engines field to >=8.10.0 ([#328](https://www.github.com/googleapis/nodejs-dialogflow/issues/328)) ([62f144f](https://www.github.com/googleapis/nodejs-dialogflow/commit/62f144f))


### Features

* add the `updateDocument and `reloadDocument` methods ([#315](https://www.github.com/googleapis/nodejs-dialogflow/issues/315)) ([6e2defe](https://www.github.com/googleapis/nodejs-dialogflow/commit/6e2defe))
* support audio config ([4ecea0e](https://www.github.com/googleapis/nodejs-dialogflow/commit/4ecea0e))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#328)

## v0.8.2

03-13-2019 16:30 PDT

### Bug Fixes
- fix: throw on invalid credentials ([#281](https://github.com/googleapis/nodejs-dialogflow/pull/281))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#269](https://github.com/googleapis/nodejs-dialogflow/pull/269))

### Documentation
- docs: use backticks for JS values ([#299](https://github.com/googleapis/nodejs-dialogflow/pull/299))
- docs: update jsdoc strings and import paths ([#298](https://github.com/googleapis/nodejs-dialogflow/pull/298))
- docs: update links in contrib guide ([#283](https://github.com/googleapis/nodejs-dialogflow/pull/283))
- docs: update contributing path in README ([#275](https://github.com/googleapis/nodejs-dialogflow/pull/275))
- docs: move CONTRIBUTING.md to root ([#274](https://github.com/googleapis/nodejs-dialogflow/pull/274))
- docs: add lint/fix example to contributing guide ([#272](https://github.com/googleapis/nodejs-dialogflow/pull/272))
- docs: fix example comments ([#271](https://github.com/googleapis/nodejs-dialogflow/pull/271))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#296](https://github.com/googleapis/nodejs-dialogflow/pull/296))
- build: use node10 to run samples-test, system-test etc ([#295](https://github.com/googleapis/nodejs-dialogflow/pull/295))
- build: update release configuration
- chore: sync latest proto docs
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#282](https://github.com/googleapis/nodejs-dialogflow/pull/282))
- fix(deps): update dependency yargs to v13 ([#280](https://github.com/googleapis/nodejs-dialogflow/pull/280))
- build: create docs test npm scripts ([#279](https://github.com/googleapis/nodejs-dialogflow/pull/279))
- build: test using @grpc/grpc-js in CI ([#276](https://github.com/googleapis/nodejs-dialogflow/pull/276))
- refactor: improve generated code style. ([#270](https://github.com/googleapis/nodejs-dialogflow/pull/270))

## v0.8.1

01-28-2019 13:24 PST

### Documentation
- fix(docs): dialogflow isnt published under @google-cloud scope ([#266](https://github.com/googleapis/nodejs-dialogflow/pull/266))

## v0.8.0

01-28-2019 11:05 PST

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v4 ([#261](https://github.com/googleapis/nodejs-dialogflow/pull/261))
- fix(deps): update dependency google-gax to ^0.24.0 ([#260](https://github.com/googleapis/nodejs-dialogflow/pull/260))
- fix(deps): update dependency google-gax to ^0.23.0 ([#256](https://github.com/googleapis/nodejs-dialogflow/pull/256))
- fix(deps): update dependency google-gax to ^0.22.0 ([#217](https://github.com/googleapis/nodejs-dialogflow/pull/217))
- fix(deps): update dependency google-gax to ^0.21.0 ([#215](https://github.com/googleapis/nodejs-dialogflow/pull/215))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#214](https://github.com/googleapis/nodejs-dialogflow/pull/214))
- chore: remove unused deps ([#212](https://github.com/googleapis/nodejs-dialogflow/pull/212))
- fix(deps): update dependency through2 to v3 ([#209](https://github.com/googleapis/nodejs-dialogflow/pull/209))
- chore(deps): update dependency eslint-plugin-node to v8 ([#199](https://github.com/googleapis/nodejs-dialogflow/pull/199))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#191](https://github.com/googleapis/nodejs-dialogflow/pull/191))

### Documentation
- refactor(samples): convert sample tests from ava to mocha ([#222](https://github.com/googleapis/nodejs-dialogflow/pull/222))
- fix(docs): properly show how to require this module ([#263](https://github.com/googleapis/nodejs-dialogflow/pull/263))
- fix(samples): Fixed typo in example ([#179](https://github.com/googleapis/nodejs-dialogflow/pull/179))
- build: ignore googleapis.com in doc link check ([#259](https://github.com/googleapis/nodejs-dialogflow/pull/259))
- chore: update license year
- build: check broken links in generated docs ([#254](https://github.com/googleapis/nodejs-dialogflow/pull/254))
- fix(docs): remove unused long running operations types
- docs: improve the quickstart sample ([#234](https://github.com/googleapis/nodejs-dialogflow/pull/234))
- docs: update the readme ([#232](https://github.com/googleapis/nodejs-dialogflow/pull/232))
- docs(samples): updated samples to use async/await ([#228](https://github.com/googleapis/nodejs-dialogflow/pull/228))
- docs: Strip dynamic badges from README ([#184](https://github.com/googleapis/nodejs-dialogflow/pull/184))

### Internal / Testing Changes
- refactor: improve the sample tests ([#251](https://github.com/googleapis/nodejs-dialogflow/pull/251))
- chore(build): inject yoshi automation key ([#249](https://github.com/googleapis/nodejs-dialogflow/pull/249))
- chore: update nyc and eslint configs ([#248](https://github.com/googleapis/nodejs-dialogflow/pull/248))
- chore: fix publish.sh permission +x ([#245](https://github.com/googleapis/nodejs-dialogflow/pull/245))
- fix(build): fix Kokoro release script ([#244](https://github.com/googleapis/nodejs-dialogflow/pull/244))
- build: add Kokoro configs for autorelease ([#243](https://github.com/googleapis/nodejs-dialogflow/pull/243))
- chore: always nyc report before calling codecov ([#241](https://github.com/googleapis/nodejs-dialogflow/pull/241))
- chore: nyc ignore build/test by default ([#240](https://github.com/googleapis/nodejs-dialogflow/pull/240))
- chore: update the renovate config ([#237](https://github.com/googleapis/nodejs-dialogflow/pull/237))
- fix(build): fix system key decryption ([#230](https://github.com/googleapis/nodejs-dialogflow/pull/230))
- chore: add a synth.metadata
- chore: update eslintignore config ([#216](https://github.com/googleapis/nodejs-dialogflow/pull/216))
- chore: drop contributors from multiple places ([#213](https://github.com/googleapis/nodejs-dialogflow/pull/213))
- chore: use latest npm on Windows ([#210](https://github.com/googleapis/nodejs-dialogflow/pull/210))
- fix: update gRPC timeouts ([#208](https://github.com/googleapis/nodejs-dialogflow/pull/208))
- chore: update CircleCI config ([#207](https://github.com/googleapis/nodejs-dialogflow/pull/207))
- chore: include build in eslintignore ([#204](https://github.com/googleapis/nodejs-dialogflow/pull/204))
- fix: use unique name for sample test knowledge base ([#198](https://github.com/googleapis/nodejs-dialogflow/pull/198))
- chore: update issue templates ([#197](https://github.com/googleapis/nodejs-dialogflow/pull/197))
- chore: remove old issue template ([#195](https://github.com/googleapis/nodejs-dialogflow/pull/195))
- build: run tests on node11 ([#194](https://github.com/googleapis/nodejs-dialogflow/pull/194))
- chores(build): run codecov on continuous builds ([#190](https://github.com/googleapis/nodejs-dialogflow/pull/190))
- chores(build): do not collect sponge.xml from windows builds ([#192](https://github.com/googleapis/nodejs-dialogflow/pull/192))
- chore: update new issue template ([#189](https://github.com/googleapis/nodejs-dialogflow/pull/189))
- build: fix codecov uploading on Kokoro ([#183](https://github.com/googleapis/nodejs-dialogflow/pull/183))
- Update CI config ([#180](https://github.com/googleapis/nodejs-dialogflow/pull/180))

## v0.7.0

### Breaking Changes
- BREAKING: Drop support for node.js 4.x ([#164](https://github.com/googleapis/nodejs-dialogflow/pull/164))

### Bug fixes
- Fix typo in comment ([#168](https://github.com/googleapis/nodejs-dialogflow/pull/168))
- Update old samples to new agent using Room Reservations and match can… ([#162](https://github.com/googleapis/nodejs-dialogflow/pull/162))
- fix(samples/resource): fix intent creation ([#104](https://github.com/googleapis/nodejs-dialogflow/pull/104))
- fix(deps): update dependency google-gax to ^0.20.0 ([#142](https://github.com/googleapis/nodejs-dialogflow/pull/142))
- Remove dependency on @google-cloud/common ([#165](https://github.com/googleapis/nodejs-dialogflow/pull/165))
- Fix typo in word 'session' in detect sample comments ([#147](https://github.com/googleapis/nodejs-dialogflow/pull/147))
- fix(deps): update dependency uuid to v3.3.2 ([#122](https://github.com/googleapis/nodejs-dialogflow/pull/122))

### New Features
- Run the synth generator and update config ([#161](https://github.com/googleapis/nodejs-dialogflow/pull/161))

### Documentation
- feat(samples): Beta features PR  ([#144](https://github.com/googleapis/nodejs-dialogflow/pull/144))

### Internal / Testing Changes
- Update kokoro config ([#173](https://github.com/googleapis/nodejs-dialogflow/pull/173))
- test: remove appveyor config ([#172](https://github.com/googleapis/nodejs-dialogflow/pull/172))
- Configure kokoro CI ([#171](https://github.com/googleapis/nodejs-dialogflow/pull/171))
- Enable prefer-const in the eslint config ([#167](https://github.com/googleapis/nodejs-dialogflow/pull/167))
- chore(deps): update dependency eslint-config-prettier to v3 ([#148](https://github.com/googleapis/nodejs-dialogflow/pull/148))
- chore(deps): update dependency eslint-plugin-node to v7 ([#135](https://github.com/googleapis/nodejs-dialogflow/pull/135))
- Ignore package-lock.json ([#163](https://github.com/googleapis/nodejs-dialogflow/pull/163))
- chore(deps): update dependency nyc to v13 ([#154](https://github.com/googleapis/nodejs-dialogflow/pull/154))
- chore: assert.equal => assert.strictEqual ([#139](https://github.com/googleapis/nodejs-dialogflow/pull/139))
- chore(deps): update dependency eslint to v5 ([#112](https://github.com/googleapis/nodejs-dialogflow/pull/112))

## v0.6.0

### New Features
Version v0.6.0 of the Dialogflow NodeJS Client Library brings with it these changes:
- management of Knowledge base Documents support
- AudioConfig
- Intent: Telephony Gateway, supporting
  - TelephonyPlayAudio - plays audio from a file in Telephony Gateway
  - TelephonySynthesizeSpeech - synthesizes speech and plays back the audio to the caller
  - TelephonyTransferCall - transfers the call in Telephony Gateway
- end_interaction option for Intent and Webhook - indicates that the intent ends an interaction
- supports alternative query results from KnowledgeService
- deprecation: Intent: ml_enabled option
- protos documentation changes

..generated against googleapis/googleapis@9c3174a

### Dependencies
- fix(deps): update dependency yargs to v12 (edited) (#126)
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.1 (#129)
- fix(deps): update dependency uuid to v3.3.0 (#118)
- chore(deps): update dependency nyc to v12 (#99)
- fix(deps): update dependency @google-cloud/common to ^0.20.0 (#98)
- chore(deps): update node:10 docker digest to 055fe4 (#91)

### Documentation
- fix(samples): update the type of Training phases per (#131)

### Internal / Testing Changes
- chore: drop repo-tools as an exec wrapper (#136)
- gen: fix synth.py to copy all versions and regenerate (#134)
- chore(build): synth.py: npm ci; node templates
- chore(deps): update node:10 docker digest to 1201e1 (#96)
- Regenerate GAPIC for V1 and V2Beta1 using synth.py (#110)
