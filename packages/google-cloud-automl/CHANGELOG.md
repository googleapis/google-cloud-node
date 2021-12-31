# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/automl?activeTab=versions

### [2.5.2](https://www.github.com/googleapis/nodejs-automl/compare/v2.5.1...v2.5.2) (2021-12-30)


### Bug Fixes

* **deps:** update dependency csv to v6 ([#565](https://www.github.com/googleapis/nodejs-automl/issues/565)) ([7f1d947](https://www.github.com/googleapis/nodejs-automl/commit/7f1d9477cfa2d9697206dffabdfb92dfb80bc1d1))

### [2.5.1](https://www.github.com/googleapis/nodejs-automl/compare/v2.5.0...v2.5.1) (2021-11-08)


### Bug Fixes

* **deps:** update dependency mathjs to v10 ([#559](https://www.github.com/googleapis/nodejs-automl/issues/559)) ([120a457](https://www.github.com/googleapis/nodejs-automl/commit/120a457211590c48c0e8d81e35e364f6c098dbce))

## [2.5.0](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.5...v2.5.0) (2021-10-14)


### Features

* turns on self-signed JWT feature flag ([#540](https://www.github.com/googleapis/nodejs-automl/issues/540)) ([bb611a4](https://www.github.com/googleapis/nodejs-automl/commit/bb611a4f2f1c372bafc4088f1a7660f7fddb9e08))

### [2.4.5](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.4...v2.4.5) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#538](https://www.github.com/googleapis/nodejs-automl/issues/538)) ([aac7447](https://www.github.com/googleapis/nodejs-automl/commit/aac7447912331ea0edc807985f530bca2e8f663c))

### [2.4.4](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.3...v2.4.4) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#536](https://www.github.com/googleapis/nodejs-automl/issues/536)) ([1185736](https://www.github.com/googleapis/nodejs-automl/commit/1185736efefca56e2f86ac52ad340d231d92c25f))

### [2.4.3](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.2...v2.4.3) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#526](https://www.github.com/googleapis/nodejs-automl/issues/526)) ([8911d45](https://www.github.com/googleapis/nodejs-automl/commit/8911d457513f2c0c9cca6d2b7473b314ac3a4efd))
* **deps:** require google-gax v2.17.0 ([#524](https://www.github.com/googleapis/nodejs-automl/issues/524)) ([5863c54](https://www.github.com/googleapis/nodejs-automl/commit/5863c5440bf94fa2fd986b5c8f5265b86fd4497e))
* make request optional in all cases ([#521](https://www.github.com/googleapis/nodejs-automl/issues/521)) ([a45622a](https://www.github.com/googleapis/nodejs-automl/commit/a45622a9f53683a73fd2057ef5a2ccf22e7da946))
* REST fallback client header ([#513](https://www.github.com/googleapis/nodejs-automl/issues/513)) ([833d2d7](https://www.github.com/googleapis/nodejs-automl/commit/833d2d70ff1828a69e7f9482f58189f5d484751f))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#527](https://www.github.com/googleapis/nodejs-automl/issues/527)) ([dfb504e](https://www.github.com/googleapis/nodejs-automl/commit/dfb504e12075136707e5915b1db6f65ed72d5aa9))

### [2.4.2](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.1...v2.4.2) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#501](https://www.github.com/googleapis/nodejs-automl/issues/501)) ([f88cc91](https://www.github.com/googleapis/nodejs-automl/commit/f88cc915df6ac67f7dc46fa345d9fc481b12d7da))
* use require() to load JSON protos ([#504](https://www.github.com/googleapis/nodejs-automl/issues/504)) ([4cd9585](https://www.github.com/googleapis/nodejs-automl/commit/4cd9585da11b3a9189ed8f3f0e5ddc76c578a462))

### [2.4.1](https://www.github.com/googleapis/nodejs-automl/compare/v2.4.0...v2.4.1) (2021-03-07)


### Bug Fixes

* **deps:** update dependency mathjs to v9 ([#482](https://www.github.com/googleapis/nodejs-automl/issues/482)) ([8917ce3](https://www.github.com/googleapis/nodejs-automl/commit/8917ce3d6ed53e94113ed5aa5a42f918a4531a40))
* Wrote inputs as string to facilitate parsing ([#480](https://www.github.com/googleapis/nodejs-automl/issues/480)) ([3d9aa88](https://www.github.com/googleapis/nodejs-automl/commit/3d9aa8899dd39041cf45a5c298d7cc010ca8d020))

## [2.4.0](https://www.github.com/googleapis/nodejs-automl/compare/v2.3.1...v2.4.0) (2021-01-09)


### Features

* adds style enumeration ([#478](https://www.github.com/googleapis/nodejs-automl/issues/478)) ([1eddaf2](https://www.github.com/googleapis/nodejs-automl/commit/1eddaf2618a1e65d3f54faba4e1ef37abcdab916))

### [2.3.1](https://www.github.com/googleapis/nodejs-automl/compare/v2.3.0...v2.3.1) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([50a3083](https://www.github.com/googleapis/nodejs-automl/commit/50a308349f819b06867b13d0300175b3ee5f43b7))
* do not modify options object, use defaultScopes ([#466](https://www.github.com/googleapis/nodejs-automl/issues/466)) ([8aaf0c3](https://www.github.com/googleapis/nodejs-automl/commit/8aaf0c3aed7f4c2c705d14d4277223e11ba7349f))

## [2.3.0](https://www.github.com/googleapis/nodejs-automl/compare/v2.2.0...v2.3.0) (2020-10-27)


### Features

* Added text extraction health care option in create model. ([#458](https://www.github.com/googleapis/nodejs-automl/issues/458)) ([8c488cb](https://www.github.com/googleapis/nodejs-automl/commit/8c488cb7013f2fea98396c4a734ff49a1b691745))


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#438](https://www.github.com/googleapis/nodejs-automl/issues/438)) ([713d005](https://www.github.com/googleapis/nodejs-automl/commit/713d00568534884bc8cce9d8ca1bbf1c5b1e0bf5))

## [2.2.0](https://www.github.com/googleapis/nodejs-automl/compare/v2.1.0...v2.2.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#406](https://www.github.com/googleapis/nodejs-automl/issues/406)) ([c24dcc2](https://www.github.com/googleapis/nodejs-automl/commit/c24dcc2cf62ea62b1f187fb116652404d5f7cf05))


### Bug Fixes

* proper fallback option handling ([25d1f25](https://www.github.com/googleapis/nodejs-automl/commit/25d1f250ba9c5d80f66ced3be3dd2aa404248bd1))

## [2.1.0](https://www.github.com/googleapis/nodejs-automl/compare/v2.0.0...v2.1.0) (2020-06-04)


### Features

* check status of long running operation by its name ([#397](https://www.github.com/googleapis/nodejs-automl/issues/397)) ([3edf825](https://www.github.com/googleapis/nodejs-automl/commit/3edf82526f57ff4ba60df39ea56956886cd6a123))


### Bug Fixes

* clean up synth.py for multiple version ([#396](https://www.github.com/googleapis/nodejs-automl/issues/396)) ([a356064](https://www.github.com/googleapis/nodejs-automl/commit/a35606438799b2ad25d6bd0ed84691a28e0a00d6))
* remove eslint, update gax, fix generated protos, run the generator ([#377](https://www.github.com/googleapis/nodejs-automl/issues/377)) ([7889f29](https://www.github.com/googleapis/nodejs-automl/commit/7889f29cb2ebaf0ac96d68cd9ca1f74122449fcd))
* **deps:** update dependency mathjs to v7 ([#400](https://www.github.com/googleapis/nodejs-automl/issues/400)) ([8cdcd80](https://www.github.com/googleapis/nodejs-automl/commit/8cdcd80f2a4d6cd9cb64b39e7f1b153dc36e8a2f))

## [2.0.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.11.0...v2.0.0) (2020-04-07)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on npm.

### Features

* drop node8 support, support for async iterators ([#364](https://www.github.com/googleapis/nodejs-automl/issues/364)) ([156ff6f](https://www.github.com/googleapis/nodejs-automl/commit/156ff6f70880244a698d7a7ef7cac831281dd1f8))

## [1.11.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.10.1...v1.11.0) (2020-03-12)


### Features

* deferred client initialization ([83ea415](https://www.github.com/googleapis/nodejs-automl/commit/83ea4156e8d57b65989d0ca8abc7ec39a45f3a82))
* move to typescript code generation ([#332](https://www.github.com/googleapis/nodejs-automl/issues/332)) ([17f0d7a](https://www.github.com/googleapis/nodejs-automl/commit/17f0d7ab8393616a0aff557206cc233941782080))
* publish proto updates for v1beta1 surface ([8b4a2b5](https://www.github.com/googleapis/nodejs-automl/commit/8b4a2b578629a624a1e9a318d6f3c503171fcc49))

### [1.10.1](https://www.github.com/googleapis/nodejs-automl/compare/v1.10.0...v1.10.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([6737cad](https://www.github.com/googleapis/nodejs-automl/commit/6737cad17f359cb0c2b3edd28093638d47c0d59e))

## [1.10.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.9.2...v1.10.0) (2019-12-05)


### Features

* support resource definitions ([#282](https://www.github.com/googleapis/nodejs-automl/issues/282)) ([439b440](https://www.github.com/googleapis/nodejs-automl/commit/439b440a709d4fba35f3c8fcf297bb20af7dd9d5))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([927b5ee](https://www.github.com/googleapis/nodejs-automl/commit/927b5ee5b88cb62e6aa86e44443c6d072fe80669))
* correct AutoML Natural Language region tags to match with all other languages ([bab8fcb](https://www.github.com/googleapis/nodejs-automl/commit/bab8fcbc7ff3cdc34892fa165085d6bd7964413e))

### [1.9.2](https://www.github.com/googleapis/nodejs-automl/compare/v1.9.1...v1.9.2) (2019-11-18)


### Bug Fixes

* **docs:** bump release level to GA ([#280](https://www.github.com/googleapis/nodejs-automl/issues/280)) ([04c897e](https://www.github.com/googleapis/nodejs-automl/commit/04c897ee00642843eb30304186c1628ba0625d56))

### [1.9.1](https://www.github.com/googleapis/nodejs-automl/compare/v1.9.0...v1.9.1) (2019-11-18)


### Bug Fixes

* add extra proto list ([#274](https://www.github.com/googleapis/nodejs-automl/issues/274)) ([d4c456b](https://www.github.com/googleapis/nodejs-automl/commit/d4c456b02629fdbcc090297c67dfe2defb946bb2))
* **deps:** update dependency yargs to v15 ([#279](https://www.github.com/googleapis/nodejs-automl/issues/279)) ([1341a27](https://www.github.com/googleapis/nodejs-automl/commit/1341a275e7b3f935c8945f887339514a91e149da))
* update PHP protos, Import automl operation protos ([#273](https://www.github.com/googleapis/nodejs-automl/issues/273)) ([c7b285f](https://www.github.com/googleapis/nodejs-automl/commit/c7b285fc3dfad0410f58ac71c0d70c6f7c51eb68))

## [1.9.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.8.0...v1.9.0) (2019-11-12)


### Features

* adds GetAnnotationSpec, DeployModel, UndeployModel, ExportModel ([#258](https://www.github.com/googleapis/nodejs-automl/issues/258)) ([0ffcec2](https://www.github.com/googleapis/nodejs-automl/commit/0ffcec2227ab36adb8e50f276837305f347dc9d7))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#267](https://www.github.com/googleapis/nodejs-automl/issues/267)) ([5179b3c](https://www.github.com/googleapis/nodejs-automl/commit/5179b3c3991189d537794f43a0696838611be525))

## [1.8.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.7.3...v1.8.0) (2019-10-31)


### Features

* added samples for api-endpoints ([#259](https://www.github.com/googleapis/nodejs-automl/issues/259)) ([550ffb6](https://www.github.com/googleapis/nodejs-automl/commit/550ffb631a4d2516337dc85972ce4062b78e3ee2))


### Bug Fixes

* **samples:** remove extra print statement and "setEndpoint.js" from linkinator ([#261](https://www.github.com/googleapis/nodejs-automl/issues/261)) ([5fcb647](https://www.github.com/googleapis/nodejs-automl/commit/5fcb647ed8746ed34f93b01b95dbb67a518f29bb))

### [1.7.3](https://www.github.com/googleapis/nodejs-automl/compare/v1.7.2...v1.7.3) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#256](https://www.github.com/googleapis/nodejs-automl/issues/256)) ([950cefc](https://www.github.com/googleapis/nodejs-automl/commit/950cefc29281a74721fb8a5ca2cf2fff5e03dd65))

### [1.7.2](https://www.github.com/googleapis/nodejs-automl/compare/v1.7.1...v1.7.2) (2019-10-14)


### Bug Fixes

* **deps:** update dependency execa to v3 ([#251](https://www.github.com/googleapis/nodejs-automl/issues/251)) ([13de52a](https://www.github.com/googleapis/nodejs-automl/commit/13de52a60d0bbced5b8fb6955d05c5526486c5bb))

### [1.7.1](https://www.github.com/googleapis/nodejs-automl/compare/v1.7.0...v1.7.1) (2019-10-08)


### Bug Fixes

* createDataset now correctly returns operation ([770b572](https://www.github.com/googleapis/nodejs-automl/commit/770b572))

## [1.7.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.6.0...v1.7.0) (2019-10-04)


### Bug Fixes

* use compatible version of google-gax ([754467c](https://www.github.com/googleapis/nodejs-automl/commit/754467c))


### Features

* v1 API surface added ([#245](https://www.github.com/googleapis/nodejs-automl/issues/245)) ([dea9d08](https://www.github.com/googleapis/nodejs-automl/commit/dea9d08))

## [1.6.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.5.0...v1.6.0) (2019-10-01)


### Features

* adds ImageClassificationModelDeploymentMetadata ([42d766d](https://www.github.com/googleapis/nodejs-automl/commit/42d766d))

## [1.5.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.4.0...v1.5.0) (2019-09-05)


### Features

* load protos from JSON, grpc-fallback support ([ff43ecf](https://www.github.com/googleapis/nodejs-automl/commit/ff43ecf))

## [1.4.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.3.0...v1.4.0) (2019-08-28)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([01aa9d6](https://www.github.com/googleapis/nodejs-automl/commit/01aa9d6))
* **docs:** remove reference-docs anchor ([ee86e1d](https://www.github.com/googleapis/nodejs-automl/commit/ee86e1d))


### Features

* introduces configuration, e.g., dimensions, for doc prediction ([9c8ce64](https://www.github.com/googleapis/nodejs-automl/commit/9c8ce64))

## [1.3.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.2.4...v1.3.0) (2019-08-19)


### Features

* introduces validRowCount ([a776956](https://www.github.com/googleapis/nodejs-automl/commit/a776956))

### [1.2.4](https://www.github.com/googleapis/nodejs-automl/compare/v1.2.3...v1.2.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([c7bec4d](https://www.github.com/googleapis/nodejs-automl/commit/c7bec4d))

### [1.2.3](https://www.github.com/googleapis/nodejs-automl/compare/v1.2.2...v1.2.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency execa to v2 ([#211](https://www.github.com/googleapis/nodejs-automl/issues/211)) ([751265a](https://www.github.com/googleapis/nodejs-automl/commit/751265a))

### [1.2.2](https://www.github.com/googleapis/nodejs-automl/compare/v1.2.1...v1.2.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#205](https://www.github.com/googleapis/nodejs-automl/issues/205)) ([4e6d9a1](https://www.github.com/googleapis/nodejs-automl/commit/4e6d9a1))

### [1.2.1](https://www.github.com/googleapis/nodejs-automl/compare/v1.2.0...v1.2.1) (2019-06-14)


### Bug Fixes

* parse CSV correctly ([#198](https://www.github.com/googleapis/nodejs-automl/issues/198)) ([8c0eb1c](https://www.github.com/googleapis/nodejs-automl/commit/8c0eb1c))
* **docs:** move to new client docs URL ([#201](https://www.github.com/googleapis/nodejs-automl/issues/201)) ([3c01587](https://www.github.com/googleapis/nodejs-automl/commit/3c01587))

## [1.2.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.1.1...v1.2.0) (2019-06-11)


### Bug Fixes

* **deps:** update dependency mathjs to v6 ([#195](https://www.github.com/googleapis/nodejs-automl/issues/195)) ([47364ab](https://www.github.com/googleapis/nodejs-automl/commit/47364ab))


### Features

* add video object tracking support ([#194](https://www.github.com/googleapis/nodejs-automl/issues/194)) ([f9c737f](https://www.github.com/googleapis/nodejs-automl/commit/f9c737f))

### [1.1.1](https://www.github.com/googleapis/nodejs-automl/compare/v1.1.0...v1.1.1) (2019-06-06)


### Bug Fixes

* default opts to empty object ([#191](https://www.github.com/googleapis/nodejs-automl/issues/191)) ([7846b04](https://www.github.com/googleapis/nodejs-automl/commit/7846b04))

## [1.1.0](https://www.github.com/googleapis/nodejs-automl/compare/v1.0.0...v1.1.0) (2019-05-23)


### Features

* add .repo-metadata.json; allows us to generate new docs site ([#183](https://www.github.com/googleapis/nodejs-automl/issues/183)) ([8b42e76](https://www.github.com/googleapis/nodejs-automl/commit/8b42e76))

## [1.0.0](https://www.github.com/googleapis/nodejs-automl/compare/v0.2.0...v1.0.0) (2019-05-13)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#176](https://www.github.com/googleapis/nodejs-automl/issues/176)) ([423ae98](https://www.github.com/googleapis/nodejs-automl/commit/423ae98))
* DEADLINE_EXCEEDED is no longer retried ([20eb86c](https://www.github.com/googleapis/nodejs-automl/commit/20eb86c))
* DEADLINE_EXCEEDED retry code is idempotent ([#177](https://www.github.com/googleapis/nodejs-automl/issues/177)) ([e8313ab](https://www.github.com/googleapis/nodejs-automl/commit/e8313ab))
* **deps:** update dependency google-gax to ^0.26.0 ([#166](https://www.github.com/googleapis/nodejs-automl/issues/166)) ([b449fc7](https://www.github.com/googleapis/nodejs-automl/commit/b449fc7))


### Build System

* upgrade engines field to >=8.10.0 ([#168](https://www.github.com/googleapis/nodejs-automl/issues/168)) ([249c7a8](https://www.github.com/googleapis/nodejs-automl/commit/249c7a8))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#168)

## v0.2.0

04-03-2019 12:39 PDT

### New Features
- feat: support new AutoML problems; add batchPredict, exportModel methods

### Implementation Changes
- fix: include 'x-goog-request-params' header in requests ([#149](https://github.com/googleapis/nodejs-automl/pull/149))

### Documentation
- docs: use backticks for JS values ([#142](https://github.com/googleapis/nodejs-automl/pull/142))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#145](https://github.com/googleapis/nodejs-automl/pull/145))
- build: use per-repo publish token ([#144](https://github.com/googleapis/nodejs-automl/pull/144))

## v0.1.4

03-12-2019 13:50 PDT

This patch release has a few bug fixes and dependency updates. Enjoy!

### Bug fixes
- fix: throw on invalid credentials ([#130](https://github.com/googleapis/nodejs-automl/pull/130))
- fix: use credential file to get project id ([#111](https://github.com/googleapis/nodejs-automl/pull/111))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#120](https://github.com/googleapis/nodejs-automl/pull/120))

### Documentation
- docs(samples): move AutoML vision samples from nodejs-vision ([#134](https://github.com/googleapis/nodejs-automl/pull/134))
- docs: update proto docs and code style
- docs: update links in contrib guide ([#132](https://github.com/googleapis/nodejs-automl/pull/132))
- docs: update contributing path in README ([#127](https://github.com/googleapis/nodejs-automl/pull/127))
- docs: move CONTRIBUTING.md to root ([#126](https://github.com/googleapis/nodejs-automl/pull/126))
- docs: add lint/fix example to contributing guide ([#124](https://github.com/googleapis/nodejs-automl/pull/124))
- docs: update examples in comments ([#123](https://github.com/googleapis/nodejs-automl/pull/123))
- docs: proper require stmt ([#113](https://github.com/googleapis/nodejs-automl/pull/113))

### Internal / Testing Changes
- refactor: update json import paths ([#140](https://github.com/googleapis/nodejs-automl/pull/140))
- build: Add docuploader credentials to node publish jobs ([#138](https://github.com/googleapis/nodejs-automl/pull/138))
- build: use node10 to run samples-test, system-test etc ([#137](https://github.com/googleapis/nodejs-automl/pull/137))
- build: update release configuration
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#131](https://github.com/googleapis/nodejs-automl/pull/131))
- build: create docs test npm scripts ([#129](https://github.com/googleapis/nodejs-automl/pull/129))
- build: test using @grpc/grpc-js in CI ([#128](https://github.com/googleapis/nodejs-automl/pull/128))
- refactor: improve generated code style. ([#122](https://github.com/googleapis/nodejs-automl/pull/122))
- chore: re-arrange exports. ([#121](https://github.com/googleapis/nodejs-automl/pull/121))
- chore(deps): update dependency eslint-config-prettier to v4 ([#119](https://github.com/googleapis/nodejs-automl/pull/119))
- build: ignore googleapis.com in doc link check ([#117](https://github.com/googleapis/nodejs-automl/pull/117))
- chore: sync gapic files
- build: check broken links in generated docs ([#112](https://github.com/googleapis/nodejs-automl/pull/112))
- test: add a basic system test ([#106](https://github.com/googleapis/nodejs-automl/pull/106))

## v0.1.3

12-15-2018 12:46 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#82](https://github.com/googleapis/nodejs-automl/pull/82))
- fix(deps): update dependency google-gax to ^0.20.0 ([#47](https://github.com/googleapis/nodejs-automl/pull/47))

### Documentation
- docs: Add a comment to hint at format of payload for prediction. ([#93](https://github.com/googleapis/nodejs-automl/pull/93))
- docs: update readme badges ([#90](https://github.com/googleapis/nodejs-automl/pull/90))

### Internal / Testing Changes
- chore: basic proto updates ([#105](https://github.com/googleapis/nodejs-automl/pull/105))
- chore(build): inject yoshi automation key ([#104](https://github.com/googleapis/nodejs-automl/pull/104))
- chore: update nyc and eslint configs ([#103](https://github.com/googleapis/nodejs-automl/pull/103))
- chore: fix publish.sh permission +x ([#102](https://github.com/googleapis/nodejs-automl/pull/102))
- fix(build): fix Kokoro release script ([#101](https://github.com/googleapis/nodejs-automl/pull/101))
- build: add Kokoro configs for autorelease ([#100](https://github.com/googleapis/nodejs-automl/pull/100))
- chore: always nyc report before calling codecov ([#98](https://github.com/googleapis/nodejs-automl/pull/98))
- chore: nyc ignore build/test by default ([#97](https://github.com/googleapis/nodejs-automl/pull/97))
- chore: clean up usage of prettier and eslint ([#96](https://github.com/googleapis/nodejs-automl/pull/96))
- chore: update license file ([#92](https://github.com/googleapis/nodejs-automl/pull/92))
- fix(build): fix system key decryption ([#88](https://github.com/googleapis/nodejs-automl/pull/88))
- chore: add synth.metadata
- chore: update eslintignore config ([#81](https://github.com/googleapis/nodejs-automl/pull/81))
- chore: drop contributors from multiple places ([#80](https://github.com/googleapis/nodejs-automl/pull/80))
- chore: use latest npm on Windows ([#79](https://github.com/googleapis/nodejs-automl/pull/79))
- chore: update CircleCI config ([#78](https://github.com/googleapis/nodejs-automl/pull/78))
- chore: include build in eslintignore ([#75](https://github.com/googleapis/nodejs-automl/pull/75))
- chore(deps): update dependency eslint-plugin-node to v8 ([#71](https://github.com/googleapis/nodejs-automl/pull/71))
- chore: update issue templates ([#70](https://github.com/googleapis/nodejs-automl/pull/70))
- chore: remove old issue template ([#68](https://github.com/googleapis/nodejs-automl/pull/68))
- build: run tests on node11 ([#67](https://github.com/googleapis/nodejs-automl/pull/67))
- chores(build): do not collect sponge.xml from windows builds ([#66](https://github.com/googleapis/nodejs-automl/pull/66))
- chores(build): run codecov on continuous builds ([#65](https://github.com/googleapis/nodejs-automl/pull/65))
- chore: update new issue template ([#64](https://github.com/googleapis/nodejs-automl/pull/64))
- build: fix codecov uploading on Kokoro ([#61](https://github.com/googleapis/nodejs-automl/pull/61))
- Update kokoro config ([#59](https://github.com/googleapis/nodejs-automl/pull/59))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#58](https://github.com/googleapis/nodejs-automl/pull/58))
- build: prevent system/sample-test from leaking credentials
- Update kokoro config ([#55](https://github.com/googleapis/nodejs-automl/pull/55))
- test: remove appveyor config ([#54](https://github.com/googleapis/nodejs-automl/pull/54))
- Update the CI config ([#53](https://github.com/googleapis/nodejs-automl/pull/53))
- Enable prefer-const in the eslint config ([#51](https://github.com/googleapis/nodejs-automl/pull/51))
- Enable no-var in eslint ([#50](https://github.com/googleapis/nodejs-automl/pull/50))
- Switch to let/const ([#49](https://github.com/googleapis/nodejs-automl/pull/49))
- test: throw on deprecation ([#23](https://github.com/googleapis/nodejs-automl/pull/23))
- Update CI config ([#46](https://github.com/googleapis/nodejs-automl/pull/46))
- Remove unused dependencies ([#44](https://github.com/googleapis/nodejs-automl/pull/44))
- Retry npm install in CI ([#43](https://github.com/googleapis/nodejs-automl/pull/43))
- Update CI config ([#40](https://github.com/googleapis/nodejs-automl/pull/40))
- Re-generate library using /synth.py ([#39](https://github.com/googleapis/nodejs-automl/pull/39))
- chore(deps): update dependency nyc to v13 ([#37](https://github.com/googleapis/nodejs-automl/pull/37))
- Update the CI config ([#36](https://github.com/googleapis/nodejs-automl/pull/36))

## v0.1.2

### Dependency updates
- fix(deps): update dependency google-gax to ^0.19.0 (#31)
- fix(deps): update dependency google-gax to ^0.18.0 (#22)
- chore(deps): update dependency eslint-config-prettier to v3 (#30)

### Keepin' the lights on
- chore: make the CircleCI config consistent (#32)
- chore: do not use npm ci (#29)
- chore: ignore package-lock.json (#27)
- chore(deps): lock file maintenance (#26)
- chore(deps): lock file maintenance (#25)
- chore: update renovate config (#24)
- chore(deps): lock file maintenance (#21)
- chore: move mocha options to mocha.opts (#19)
- chore: require node 8 for samples (#20)
- Re-generate library using /synth.py (#18)
- chore(deps): lock file maintenance (#17)
- nit: Google LLC (#16)

## v0.1.1

This patch release addresses a namespacing issue that affected our docs.

### Documentation
- Add missing JSDoc namespaces. (#14)
