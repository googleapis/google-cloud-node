# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-logging-bunyan?activeTab=versions

## [5.0.0](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.2.2...v5.0.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* upgrade to Node 14 ([#705](https://github.com/googleapis/nodejs-logging-bunyan/issues/705))

### Miscellaneous Chores

* Upgrade to Node 14 ([#705](https://github.com/googleapis/nodejs-logging-bunyan/issues/705)) ([e2299d6](https://github.com/googleapis/nodejs-logging-bunyan/commit/e2299d66ec80a8d5b5c9f15c36b071771e28f9b9))

## [4.2.2](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.2.1...v4.2.2) (2022-12-02)


### Bug Fixes

* Add a partner team as approvers for PRs ([#677](https://github.com/googleapis/nodejs-logging-bunyan/issues/677)) ([7b88e97](https://github.com/googleapis/nodejs-logging-bunyan/commit/7b88e97aab7b70e0ccdf3c388edde013ac64707f))

## [4.2.1](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.2.0...v4.2.1) (2022-11-07)


### Bug Fixes

* Switch instrumentation code to return version stored in NODEJS_BUNYAN_DEFAULT_LIBRARY_VERSION ([#672](https://github.com/googleapis/nodejs-logging-bunyan/issues/672)) ([2eb88d8](https://github.com/googleapis/nodejs-logging-bunyan/commit/2eb88d878583a2a8f823fa310353eeb6be931f7a))

## [4.2.0](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.5...v4.2.0) (2022-11-04)


### Features

* Add support for instrumentation version annotations ([#670](https://github.com/googleapis/nodejs-logging-bunyan/issues/670)) ([e332a76](https://github.com/googleapis/nodejs-logging-bunyan/commit/e332a7626dd637daab4e23b36ca7249684506501))

## [4.1.5](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.4...v4.1.5) (2022-11-01)


### Bug Fixes

* Prevent instrumentation crash and fix the system test ([#666](https://github.com/googleapis/nodejs-logging-bunyan/issues/666)) ([4e12496](https://github.com/googleapis/nodejs-logging-bunyan/commit/4e12496589123995ebf8e1c54a613c1d2ed565c5))

## [4.1.4](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.3...v4.1.4) (2022-10-12)


### Bug Fixes

* Instrumentation performance ([#661](https://github.com/googleapis/nodejs-logging-bunyan/issues/661)) ([c0338fb](https://github.com/googleapis/nodejs-logging-bunyan/commit/c0338fba10e1a60373fdc74739f9237d0266413b))

## [4.1.3](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.2...v4.1.3) (2022-10-10)


### Bug Fixes

* Skip parent request entry on cloud run ([#658](https://github.com/googleapis/nodejs-logging-bunyan/issues/658)) ([226972e](https://github.com/googleapis/nodejs-logging-bunyan/commit/226972e12aec94936f4d0b00277cbff05971726e))

## [4.1.2](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.1...v4.1.2) (2022-08-25)


### Bug Fixes

* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-logging-bunyan/issues/1546)) ([#649](https://github.com/googleapis/nodejs-logging-bunyan/issues/649)) ([0fdd9ec](https://github.com/googleapis/nodejs-logging-bunyan/commit/0fdd9ec12ad76518e630d0f51f69e34a78b6e693))
* Update latest logging-nodejs to repaire google-gax vulnerability ([#651](https://github.com/googleapis/nodejs-logging-bunyan/issues/651)) ([857de69](https://github.com/googleapis/nodejs-logging-bunyan/commit/857de693a20e142a16468a6cb352295acd1249a5))

## [4.1.1](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.1.0...v4.1.1) (2022-07-18)


### Bug Fixes

* Logging to stdout in Cloud Run creates a JSON object as "message" ([#644](https://github.com/googleapis/nodejs-logging-bunyan/issues/644)) ([41eaaa8](https://github.com/googleapis/nodejs-logging-bunyan/commit/41eaaa8e2dd282e625412a10907c2dd0f13cf1cb))

## [4.1.0](https://github.com/googleapis/nodejs-logging-bunyan/compare/v4.0.0...v4.1.0) (2022-06-02)


### Features

* Add support for library instrumentation ([#631](https://github.com/googleapis/nodejs-logging-bunyan/issues/631)) ([39e0193](https://github.com/googleapis/nodejs-logging-bunyan/commit/39e0193bba4adb5945ff21b53002d2402c9505c5))

## [4.0.0](https://github.com/googleapis/nodejs-logging-bunyan/compare/v3.3.1...v4.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#627)

### Build System

* update library to use Node 12 ([#627](https://github.com/googleapis/nodejs-logging-bunyan/issues/627)) ([e9d1143](https://github.com/googleapis/nodejs-logging-bunyan/commit/e9d1143ee335b825a3817fc09573da7cac4584c2))

### [3.3.1](https://github.com/googleapis/nodejs-logging-bunyan/compare/v3.3.0...v3.3.1) (2022-04-15)


### Bug Fixes

* Reenable staleness bot ([#613](https://github.com/googleapis/nodejs-logging-bunyan/issues/613)) ([1b3f273](https://github.com/googleapis/nodejs-logging-bunyan/commit/1b3f273ea84475ae2d6fabed435775bfea253ae9))

## [3.3.0](https://github.com/googleapis/nodejs-logging-bunyan/compare/v3.2.2...v3.3.0) (2022-03-21)


### Features

* Logging provider for Cloud Functions that outputs structured logs to process.stdout ([#605](https://github.com/googleapis/nodejs-logging-bunyan/issues/605)) ([f3ed3aa](https://github.com/googleapis/nodejs-logging-bunyan/commit/f3ed3aa973d0e2cd1f7311ef48a69cbd72df80f1))

### [3.2.2](https://github.com/googleapis/nodejs-logging-bunyan/compare/v3.2.1...v3.2.2) (2022-03-09)


### Bug Fixes

* Use defaultCallback in LoggingBunyan class ([#601](https://github.com/googleapis/nodejs-logging-bunyan/issues/601)) ([f4c01ab](https://github.com/googleapis/nodejs-logging-bunyan/commit/f4c01abe9ee46d89494caa03618500f3a11ee78a))

### [3.2.1](https://github.com/googleapis/nodejs-logging-bunyan/compare/v3.2.0...v3.2.1) (2022-03-02)


### Bug Fixes

* Update dependency @google-cloud/logging from 9.0.0 to 9.8.0 ([#597](https://github.com/googleapis/nodejs-logging-bunyan/issues/597)) ([a350362](https://github.com/googleapis/nodejs-logging-bunyan/commit/a350362ba78f275e4c294bfdf2ea5d868191e87e))

## [3.2.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v3.1.1...v3.2.0) (2021-12-09)


### Features

* add eslintignore for sameple generated code ([#1302](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/1302)) ([#574](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/574)) ([10c6371](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/10c63713d659f36f45eeb23adba554ed159623a5))

### [3.1.1](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v3.1.0...v3.1.1) (2021-09-08)


### Bug Fixes

* **build:** update branch to main ([#560](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/560)) ([4616ad9](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/4616ad9ccbd592f694b33b701eb945146b2fe203))

## [3.1.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v3.0.2...v3.1.0) (2021-06-15)


### Features

* add spanId and traceSampled logic ([#543](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/543)) ([548111b](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/548111b87e4817b410cc2d6a13cc468a78aa5f8a))

### [3.0.2](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v3.0.1...v3.0.2) (2021-02-09)


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#513](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/513)) ([07e5830](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/07e5830207f1bbfbe368625c19ee298775403bcb))

### [3.0.1](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v3.0.0...v3.0.1) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#484](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/484)) ([a307179](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/a30717969b0e0cb9726061ff48f4fa7f9b35961e))

## [3.0.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v2.0.3...v3.0.0) (2020-05-20)


### ⚠ BREAKING CHANGES

* drop support for node.js 8.x (#440)

### Bug Fixes

* apache license URL ([#468](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/468)) ([#436](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/436)) ([51f5182](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/51f518206f52fdc31773e9625a289f9d25f03abb))
* update HttpRequest to match @google-cloud/logging ([#412](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/412)) ([0c32a6c](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/0c32a6c5014ac1c4ec54103bd610eae75ef2426a))
* **deps:** update dependency google-auth-library to v6 ([#427](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/427)) ([03c6c8a](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/03c6c8a9ff9003e906aeea8bec806a87fadef2c3))


### Build System

* drop support for node.js 8.x ([#440](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/440)) ([b816566](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/b81656645e7a17adfdb1fb78de8e2153128fe2a5))

### [2.0.3](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v2.0.2...v2.0.3) (2020-01-24)


### Bug Fixes

* **docs:** bump release level to GA ([#378](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/378)) ([2d99634](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/2d99634ef4950bea81c64f1355b59ace3138b63e))

### [2.0.2](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v2.0.1...v2.0.2) (2019-12-05)


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#384](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/384)) ([b7c509c](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/b7c509ce00d8436405abe4e19922594825927a13))

### [2.0.1](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v2.0.0...v2.0.1) (2019-12-02)


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#377](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/377)) ([730bac9](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/730bac9fb1b16575318a0eb167d3bba550318704))
* **docs:** snippets are now replaced in jsdoc comments ([#371](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/371)) ([1cfbf8d](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/1cfbf8deff023c09075d319904a267f13febbaeb))

## [2.0.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.2.3...v2.0.0) (2019-10-18)


### ⚠ BREAKING CHANGES

* truncate log messages > 250,000 bytes (#365)

### Features

* truncate log messages > 250,000 bytes ([#365](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/365)) ([b712f12](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/b712f123e975b94cd3f096a0cdaf05951320ffac))

### [1.2.3](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.2.2...v1.2.3) (2019-09-03)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([#346](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/346)) ([93f7deb](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/93f7deb))
* **docs:** remove anchor from reference doc link ([#348](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/348)) ([6937d45](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/6937d45))

### [1.2.2](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.2.1...v1.2.2) (2019-08-13)


### Bug Fixes

* **deps:** update dependency google-auth-library to v5 ([#342](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/342)) ([f560753](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/f560753))

### [1.2.1](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.2.0...v1.2.1) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#338](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/338)) ([c576ae4](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/c576ae4))

## [1.2.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.1.1...v1.2.0) (2019-06-24)


### Features

* add support for apiEndpoint override ([#336](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/336)) ([5feb3c9](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/5feb3c9))

### [1.1.1](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#331](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/331)) ([644f80c](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/644f80c))
* should read logging Bunyan not Winston ([#330](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/330)) ([d08c03f](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/d08c03f))

## [1.1.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* add .repo-metadata.json, generate docs ([#328](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/328)) ([342a41e](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/342a41e))

## [1.0.0](https://www.github.com/googleapis/nodejs-logging-bunyan/compare/v0.10.1...v1.0.0) (2019-05-29)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#298)

### Bug Fixes

* proper signature for _write[v] ([#287](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/287)) ([8bb305a](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/8bb305a))
* **deps:** update dependency google-auth-library to v4 ([#308](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/308)) ([e309b7c](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/e309b7c))


### Build System

* upgrade engines field to >=8.10.0 ([#298](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/298)) ([143933c](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/143933c))


### Features

* auto-detect service context ([#290](https://www.github.com/googleapis/nodejs-logging-bunyan/issues/290)) ([595a4db](https://www.github.com/googleapis/nodejs-logging-bunyan/commit/595a4db))

## v0.10.1

03-14-2019 14:58 PDT

### Bug Fixes
- fix: add missing dep on google-auth-library ([#278](https://github.com/googleapis/nodejs-logging-bunyan/pull/278))

## v0.10.0

03-12-2019 16:24 PDT

### New Features
- feat(middleware): generate parent request logs ([#235](https://github.com/googleapis/nodejs-logging-bunyan/pull/235))

### Bug Fixes
- fix: do not promote record.labels if improper ([#266](https://github.com/googleapis/nodejs-logging-bunyan/pull/266))
- fix: remove deep dependency into auth-library ([#251](https://github.com/googleapis/nodejs-logging-bunyan/pull/251))

### Documentation
- docs: update links in contrib guide ([#263](https://github.com/googleapis/nodejs-logging-bunyan/pull/263))
- docs: update contributing path in README ([#256](https://github.com/googleapis/nodejs-logging-bunyan/pull/256))
- docs: move CONTRIBUTING.md to root ([#255](https://github.com/googleapis/nodejs-logging-bunyan/pull/255))
- docs: add lint/fix example to contributing guide ([#252](https://github.com/googleapis/nodejs-logging-bunyan/pull/252))
- docs: use https for links ([#246](https://github.com/googleapis/nodejs-logging-bunyan/pull/246))

### Internal / Testing Changes
- chore: allow custom port in samples tests ([#272](https://github.com/googleapis/nodejs-logging-bunyan/pull/272))
- build: Add docuploader credentials to node publish jobs ([#270](https://github.com/googleapis/nodejs-logging-bunyan/pull/270))
- build: update release config ([#268](https://github.com/googleapis/nodejs-logging-bunyan/pull/268))
- build: use node10 to run samples-test, system-test etc ([#269](https://github.com/googleapis/nodejs-logging-bunyan/pull/269))
- chore(deps): update dependency mocha to v6 ([#264](https://github.com/googleapis/nodejs-logging-bunyan/pull/264))
- build: use linkinator for docs test ([#262](https://github.com/googleapis/nodejs-logging-bunyan/pull/262))
- fix: de-flake system tests ([#261](https://github.com/googleapis/nodejs-logging-bunyan/pull/261))
- chore: resolve TODO in test ([#259](https://github.com/googleapis/nodejs-logging-bunyan/pull/259))
- build: create docs test npm scripts ([#258](https://github.com/googleapis/nodejs-logging-bunyan/pull/258))
- build: test using @grpc/grpc-js in CI ([#257](https://github.com/googleapis/nodejs-logging-bunyan/pull/257))
- chore(deps): update dependency @google-cloud/common to ^0.31.0 ([#253](https://github.com/googleapis/nodejs-logging-bunyan/pull/253))
- fix(deps): update dependency yargs to v13 ([#260](https://github.com/googleapis/nodejs-logging-bunyan/pull/260))
- fix: directly depend on @g-c/common ([#250](https://github.com/googleapis/nodejs-logging-bunyan/pull/250))
- chore(deps): update dependency eslint-config-prettier to v4 ([#245](https://github.com/googleapis/nodejs-logging-bunyan/pull/245))
- build: ignore googleapis.com in doc link check ([#242](https://github.com/googleapis/nodejs-logging-bunyan/pull/242))
- build: check broken links in generated docs ([#239](https://github.com/googleapis/nodejs-logging-bunyan/pull/239))
- refactor: modernize the sample tests ([#237](https://github.com/googleapis/nodejs-logging-bunyan/pull/237))

## v0.9.5

12-12-2018 19:50 PST

### Bug Fixes
- fix(middleware): use bunyan log.child ([#163](https://github.com/googleapis/nodejs-logging-bunyan/pull/163))
- fix: Don't publish sourcemaps ([#166](https://github.com/googleapis/nodejs-logging-bunyan/pull/166))

### Dependencies
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.6 ([#192](https://github.com/googleapis/nodejs-logging-bunyan/pull/192))
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.5 ([#177](https://github.com/googleapis/nodejs-logging-bunyan/pull/177))

### Docs & Samples
- docs: update readme badges ([#213](https://github.com/googleapis/nodejs-logging-bunyan/pull/213))
- refactor: convert samples test from ava to mocha ([#190](https://github.com/googleapis/nodejs-logging-bunyan/pull/190))

### Internal / Testing Changes
- chore: the sample tests complete correctly ([#232](https://github.com/googleapis/nodejs-logging-bunyan/pull/232))
- chore(build): inject yoshi automation key ([#231](https://github.com/googleapis/nodejs-logging-bunyan/pull/231))
- chore: update nyc and eslint configs ([#230](https://github.com/googleapis/nodejs-logging-bunyan/pull/230))
- chore: fix publish.sh permission +x ([#228](https://github.com/googleapis/nodejs-logging-bunyan/pull/228))
- fix(build): fix Kokoro release script ([#227](https://github.com/googleapis/nodejs-logging-bunyan/pull/227))
- build: add Kokoro configs for autorelease ([#226](https://github.com/googleapis/nodejs-logging-bunyan/pull/226))
- chore: always nyc report before calling codecov ([#222](https://github.com/googleapis/nodejs-logging-bunyan/pull/222))
- chore: nyc ignore build/test by default ([#220](https://github.com/googleapis/nodejs-logging-bunyan/pull/220))
- refactor: reduce the number of dependencies ([#206](https://github.com/googleapis/nodejs-logging-bunyan/pull/206))
- chore: clean up usage of prettier and eslint ([#219](https://github.com/googleapis/nodejs-logging-bunyan/pull/219))
- chore: update system tests key ([#216](https://github.com/googleapis/nodejs-logging-bunyan/pull/216))
- chore: add polling to system tests ([#217](https://github.com/googleapis/nodejs-logging-bunyan/pull/217))
- chore: update license file ([#215](https://github.com/googleapis/nodejs-logging-bunyan/pull/215))
- fix(build): fix system key decryption ([#211](https://github.com/googleapis/nodejs-logging-bunyan/pull/211))
- chore(deps): update dependency typescript to ~3.2.0 ([#209](https://github.com/googleapis/nodejs-logging-bunyan/pull/209))
- chore: update system tests key ([#210](https://github.com/googleapis/nodejs-logging-bunyan/pull/210))
- chore: add synth.metadata
- chore(deps): update dependency gts to ^0.9.0 ([#202](https://github.com/googleapis/nodejs-logging-bunyan/pull/202))
- chore: update eslintignore config ([#201](https://github.com/googleapis/nodejs-logging-bunyan/pull/201))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#200](https://github.com/googleapis/nodejs-logging-bunyan/pull/200))
- chore: drop contributors from multiple places ([#199](https://github.com/googleapis/nodejs-logging-bunyan/pull/199))
- refactor(middleware): use common code from logging ([#197](https://github.com/googleapis/nodejs-logging-bunyan/pull/197))
- cleanup: remove unnecessary deps and files ([#198](https://github.com/googleapis/nodejs-logging-bunyan/pull/198))
- chore: use latest npm on Windows ([#196](https://github.com/googleapis/nodejs-logging-bunyan/pull/196))
- chore: update CircleCI config ([#195](https://github.com/googleapis/nodejs-logging-bunyan/pull/195))
- chore: include build in eslintignore ([#191](https://github.com/googleapis/nodejs-logging-bunyan/pull/191))
- chore(deps): update dependency eslint-plugin-node to v8 ([#186](https://github.com/googleapis/nodejs-logging-bunyan/pull/186))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#181](https://github.com/googleapis/nodejs-logging-bunyan/pull/181))
- chore: update issue templates ([#185](https://github.com/googleapis/nodejs-logging-bunyan/pull/185))
- chore: remove old issue template ([#183](https://github.com/googleapis/nodejs-logging-bunyan/pull/183))
- build: run tests on node11 ([#182](https://github.com/googleapis/nodejs-logging-bunyan/pull/182))
- chores(build): do not collect sponge.xml from windows builds ([#180](https://github.com/googleapis/nodejs-logging-bunyan/pull/180))
- chores(build): run codecov on continuous builds ([#179](https://github.com/googleapis/nodejs-logging-bunyan/pull/179))
- chore: update new issue template ([#178](https://github.com/googleapis/nodejs-logging-bunyan/pull/178))
- build: fix codecov uploading on Kokoro ([#174](https://github.com/googleapis/nodejs-logging-bunyan/pull/174))
- Update kokoro config ([#171](https://github.com/googleapis/nodejs-logging-bunyan/pull/171))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#170](https://github.com/googleapis/nodejs-logging-bunyan/pull/170))
- chore(deps): update dependency typescript to ~3.1.0 ([#169](https://github.com/googleapis/nodejs-logging-bunyan/pull/169))

## v0.9.4

### Documentation
- fix: doc string is malformed for jsdoc ([#164](https://github.com/googleapis/nodejs-logging-bunyan/pull/164))

## v0.9.2

### Bug Fixes
- fix: logged errors are reported to error reporting ([#122](https://github.com/googleapis/nodejs-logging-bunyan/pull/122))
- chore: fix `stream` example in README ([#134](https://github.com/googleapis/nodejs-logging-bunyan/pull/134))
- fix(deps): update @google-cloud/logging to 4.x ([#152](https://github.com/googleapis/nodejs-logging-bunyan/pull/152))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#150](https://github.com/googleapis/nodejs-logging-bunyan/pull/150))
- chore(deps): update dependency delay to v4 ([#142](https://github.com/googleapis/nodejs-logging-bunyan/pull/142))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#146](https://github.com/googleapis/nodejs-logging-bunyan/pull/146))
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.4 ([#141](https://github.com/googleapis/nodejs-logging-bunyan/pull/141))
- fix(deps): update dependency @google-cloud/common to ^0.23.0 ([#139](https://github.com/googleapis/nodejs-logging-bunyan/pull/139))
- fix(deps): update samples dependency @google-cloud/logging-bunyan to ^0.9.0 ([#137](https://github.com/googleapis/nodejs-logging-bunyan/pull/137))
- chore(deps): update dependency execa to v1 ([#138](https://github.com/googleapis/nodejs-logging-bunyan/pull/138))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#151](https://github.com/googleapis/nodejs-logging-bunyan/pull/151))
- Enable no-var in eslint ([#149](https://github.com/googleapis/nodejs-logging-bunyan/pull/149))
- Update CI config ([#147](https://github.com/googleapis/nodejs-logging-bunyan/pull/147))
- Add synth script and update CI ([#144](https://github.com/googleapis/nodejs-logging-bunyan/pull/144))
- Retry npm install in CI ([#143](https://github.com/googleapis/nodejs-logging-bunyan/pull/143))
- chore(deps): update dependency nyc to v13 ([#140](https://github.com/googleapis/nodejs-logging-bunyan/pull/140))

## v0.9.1

### Fixes
- chore: fix install tests (#133)

## v0.9.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x (#87)
- fix: drop support for node 4.x and 9.x (#69)

### Features
- feat: request-correlating middleware (#63)

### Docs & Samples
- chore: require node 8 for samples (#107)
- doc: add express middleware to README (#97)
- doc: fix typo in samples/README (#99)
- fix: fix linting errors in the samples (#100)
- feat(samples): add express middleware sample (#95)
- fix(samples): fix non-working explit setup sample (#93)
- doc: fix usage of logger.info in README.md (#83)
- doc: fix link to HttpRequest message (#68)

### Dependency updates
- chore(deps): upgrade to @g-c/logging@3.0.1 (#126)
- chore: pin to delay@3.0.x (#127)
- chore(deps): update dependency execa to ^0.11.0 (#125)
- chore(deps): update dependency eslint-config-prettier to v3 (#120)
- chore(deps): update dependency pify to v4 (#119)
- chore(deps): update dependency got to v9 (#114)
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.3 (#112)
- chore(deps): update dependency typescript to v3 (#109)
- chore(deps): update dependency eslint-plugin-node to v7 (#96)
- chore(deps): update dependency gts to ^0.8.0 (#92)
- fix(deps): update dependency @google-cloud/logging to v2 (#86)
- fix(deps): update dependency yargs to v12 (#82)
- chore: update dependencies (#81)
- Configure Renovate (#74)
- chore(package): missing @types/node dev dependency (#75)
- chore: update all dependencies (#71)
- chore(package): upgrade gts and typescript (#70)

### Keepin' the lights on
- chore: ignore package-lock.json (#118)
- chore: update renovate config (#113)
- remove that whitespace (#111)
- chore: assert.deelEqual => assert.deepStrictEqual (#108)
- chore: move mocha options to mocha.opts (#106)
- chore: re-enable codecov && drop greenkeeper badge (#98)
- refactor: drop repo-tool as an exec wrapper (#79)
- chore: update sample lockfiles (#78)
- fix: update linking for samples (#77)
- cleanup: remove some casts (#76)
- fix: the system tests use a custom log (#73)
- test: use source-map-support (#72)
- chore: remove `--bail` from the system tests config (#67)
- chore: the ultimate fix for repo-tools EPERM (#64)
