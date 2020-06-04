# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/error-reporting?activeTab=versions

## [2.0.0](https://www.github.com/googleapis/nodejs-error-reporting/compare/v1.1.3...v2.0.0) (2020-05-27)


### ⚠ BREAKING CHANGES

* update to latest version of gts and typescript (#467)
* require node 10 in engines field (#465)

### Features

* require node 10 in engines field ([#465](https://www.github.com/googleapis/nodejs-error-reporting/issues/465)) ([f7d1164](https://www.github.com/googleapis/nodejs-error-reporting/commit/f7d11649329cd33aa992f156c0379f457758cd45))


### Bug Fixes

* apache license URL ([#468](https://www.github.com/googleapis/nodejs-error-reporting/issues/468)) ([#463](https://www.github.com/googleapis/nodejs-error-reporting/issues/463)) ([191326c](https://www.github.com/googleapis/nodejs-error-reporting/commit/191326c7e29197eb3f09d68d2a89d72e0229f3b4))
* **deps:** update dependency @google-cloud/common to v3 ([#459](https://www.github.com/googleapis/nodejs-error-reporting/issues/459)) ([0ce41a8](https://www.github.com/googleapis/nodejs-error-reporting/commit/0ce41a854ed4bc2971b535b86efda5593dc2d232))
* **typescript:** cast Object.assign value to ServiceOptions ([#483](https://www.github.com/googleapis/nodejs-error-reporting/issues/483)) ([cfee918](https://www.github.com/googleapis/nodejs-error-reporting/commit/cfee9187fdb553bca5e290c6b17e42a57ce5a291))


### Build System

* update to latest version of gts and typescript ([#467](https://www.github.com/googleapis/nodejs-error-reporting/issues/467)) ([454f76b](https://www.github.com/googleapis/nodejs-error-reporting/commit/454f76b33abc5775af64289e41b83e460f6bc519))

### [1.1.3](https://www.github.com/googleapis/nodejs-error-reporting/compare/v1.1.2...v1.1.3) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([e54ef75](https://www.github.com/googleapis/nodejs-error-reporting/commit/e54ef75df1aced12b862bf0688ddb02a28b87c81))
* **docs:** snippets are now replaced in jsdoc comments ([#411](https://www.github.com/googleapis/nodejs-error-reporting/issues/411)) ([edd884f](https://www.github.com/googleapis/nodejs-error-reporting/commit/edd884fdb81fb6d4434f8487f8040fd9f463869e))

### [1.1.2](https://www.github.com/googleapis/nodejs-error-reporting/compare/v1.1.1...v1.1.2) (2019-09-26)


### Bug Fixes

* **docs:** remove anchor from reference doc link ([#388](https://www.github.com/googleapis/nodejs-error-reporting/issues/388)) ([c7d5d22](https://www.github.com/googleapis/nodejs-error-reporting/commit/c7d5d22))

### [1.1.1](https://www.github.com/googleapis/nodejs-error-reporting/compare/v1.1.0...v1.1.1) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#381](https://www.github.com/googleapis/nodejs-error-reporting/issues/381)) ([d54aa8f](https://www.github.com/googleapis/nodejs-error-reporting/commit/d54aa8f))

## [1.1.0](https://www.github.com/googleapis/nodejs-error-reporting/compare/v1.0.0...v1.1.0) (2019-06-20)


### Bug Fixes

* bump min required versions and fix package scripts ([#376](https://www.github.com/googleapis/nodejs-error-reporting/issues/376)) ([eb3ae66](https://www.github.com/googleapis/nodejs-error-reporting/commit/eb3ae66))


### Features

* automatically use service and revision name in Knative environments ([#375](https://www.github.com/googleapis/nodejs-error-reporting/issues/375)) ([453bd6e](https://www.github.com/googleapis/nodejs-error-reporting/commit/453bd6e)), closes [#370](https://www.github.com/googleapis/nodejs-error-reporting/issues/370)

## [1.0.0](https://www.github.com/googleapis/nodejs-error-reporting/compare/v0.6.3...v1.0.0) (2019-05-17)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v1 ([#357](https://www.github.com/googleapis/nodejs-error-reporting/issues/357)) ([1e928e8](https://www.github.com/googleapis/nodejs-error-reporting/commit/1e928e8))


### Build System

* upgrade engines field to >=8.10.0 ([#349](https://www.github.com/googleapis/nodejs-error-reporting/issues/349)) ([1ab75f2](https://www.github.com/googleapis/nodejs-error-reporting/commit/1ab75f2))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#349)

## v0.6.3

04-11-2019 11:37 PDT

### Bug Fixes

- fix: update Koa2 plugin to await next ([#339](https://github.com/googleapis/nodejs-error-reporting/pull/339))

## v0.6.2

04-09-2019 11:14 PDT

### Bug Fixes

- fix: in Koa2 interface await `next` as a function ([#336](https://github.com/googleapis/nodejs-error-reporting/pull/336))

### CI/CD

- build: use per-repo publish token ([#327](https://github.com/googleapis/nodejs-error-reporting/pull/327))
- chore: publish to npm using wombat ([#328](https://github.com/googleapis/nodejs-error-reporting/pull/328))

### Dependencies

- fix(deps): update dependency @google-cloud/common to ^0.32.0 ([#334](https://github.com/googleapis/nodejs-error-reporting/pull/334))
- chore(deps): update dependency typescript to ~3.4.0

### Internal / Testing Changes

- chore: test Restify 18 in the install tests ([#324](https://github.com/googleapis/nodejs-error-reporting/pull/324))

## v0.6.1

03-13-2019 16:21 PDT

### Bug Fixes
- fix: properly handle hapi v16+ req.url ([#311](https://github.com/googleapis/nodejs-error-reporting/pull/311))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.31.0 ([#304](https://github.com/googleapis/nodejs-error-reporting/pull/304))

### Documentation
- docs: document how to get async stack traces ([#314](https://github.com/googleapis/nodejs-error-reporting/pull/314))
- docs: update links in contrib guide ([#316](https://github.com/googleapis/nodejs-error-reporting/pull/316))
- docs: add custom documentation to the README ([#313](https://github.com/googleapis/nodejs-error-reporting/pull/313))
- docs: update contributing path in README ([#307](https://github.com/googleapis/nodejs-error-reporting/pull/307))
- docs: move CONTRIBUTING.md to root ([#306](https://github.com/googleapis/nodejs-error-reporting/pull/306))
- docs: add lint/fix example to contributing guide ([#303](https://github.com/googleapis/nodejs-error-reporting/pull/303))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#322](https://github.com/googleapis/nodejs-error-reporting/pull/322))
- build: use node10 to run samples-test, system-test etc ([#321](https://github.com/googleapis/nodejs-error-reporting/pull/321))
- build: update release configuration
- chore(deps): update dependency restify to v8 ([#318](https://github.com/googleapis/nodejs-error-reporting/pull/318))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#315](https://github.com/googleapis/nodejs-error-reporting/pull/315))
- fix(deps): update dependency yargs to v13 ([#312](https://github.com/googleapis/nodejs-error-reporting/pull/312))
- refactor: cleanup types for reportManualError ([#310](https://github.com/googleapis/nodejs-error-reporting/pull/310))
- build: create docs test npm scripts ([#309](https://github.com/googleapis/nodejs-error-reporting/pull/309))
- build: test using @grpc/grpc-js in CI ([#308](https://github.com/googleapis/nodejs-error-reporting/pull/308))
- build: check for 404s when generating docs ([#301](https://github.com/googleapis/nodejs-error-reporting/pull/301))
- chore(deps): update dependency eslint-config-prettier to v4 ([#300](https://github.com/googleapis/nodejs-error-reporting/pull/300))
- chore(deps): update dependency @types/hapi to v18 ([#297](https://github.com/googleapis/nodejs-error-reporting/pull/297))

## v0.6.0

01-22-2019 09:59 PST

### New Features
- feat: add a new `reportMode` configuration option ([#295](https://github.com/googleapis/nodejs-error-reporting/pull/295))

## v0.5.2

12-20-2018 11:49 PST

### Implementation Changes

- fix: improve error item message for plain objects ([#286](https://github.com/googleapis/nodejs-error-reporting/pull/286))

### Dependencies

- chore(deps): update dependency typescript to ~3.2.0 ([#266](https://github.com/googleapis/nodejs-error-reporting/pull/266))
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#264](https://github.com/googleapis/nodejs-error-reporting/pull/264))
- chore(deps): update dependency gts to ^0.9.0 ([#255](https://github.com/googleapis/nodejs-error-reporting/pull/255))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#250](https://github.com/googleapis/nodejs-error-reporting/pull/250))
- chore(deps): update dependency @types/is to v0.0.21 ([#247](https://github.com/googleapis/nodejs-error-reporting/pull/247))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#230](https://github.com/googleapis/nodejs-error-reporting/pull/230))
- chore(deps): update dependency eslint-plugin-node to v8 ([#235](https://github.com/googleapis/nodejs-error-reporting/pull/235))
- chore(deps): update dependency typescript to ~3.1.0 ([#218](https://github.com/googleapis/nodejs-error-reporting/pull/218))
- chore(deps): update dependency sinon to v7 ([#223](https://github.com/googleapis/nodejs-error-reporting/pull/223))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#219](https://github.com/googleapis/nodejs-error-reporting/pull/219))
- chore(deps): update dependency @types/glob to v7 ([#212](https://github.com/googleapis/nodejs-error-reporting/pull/212))
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#210](https://github.com/googleapis/nodejs-error-reporting/pull/210))
- chore(deps): update dependency nock to v10 ([#208](https://github.com/googleapis/nodejs-error-reporting/pull/208))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#206](https://github.com/googleapis/nodejs-error-reporting/pull/206))
- fix(deps): update dependency @google-cloud/common to ^0.23.0 ([#198](https://github.com/googleapis/nodejs-error-reporting/pull/198))
- chore(deps): update dependency nyc to v13 ([#200](https://github.com/googleapis/nodejs-error-reporting/pull/200))
- chore(deps): update dependency eslint-config-prettier to v3 ([#195](https://github.com/googleapis/nodejs-error-reporting/pull/195))
- chore(deps): update dependency pify to v4 ([#194](https://github.com/googleapis/nodejs-error-reporting/pull/194))
- fix(deps): update dependency @google-cloud/common to ^0.21.0 ([#192](https://github.com/googleapis/nodejs-error-reporting/pull/192))
- chore(deps): lock file maintenance ([#191](https://github.com/googleapis/nodejs-error-reporting/pull/191))
- chore(deps): lock file maintenance ([#181](https://github.com/googleapis/nodejs-error-reporting/pull/181))
- chore(deps): update dependency typescript to v3 ([#180](https://github.com/googleapis/nodejs-error-reporting/pull/180))
- chore(deps): lock file maintenance ([#175](https://github.com/googleapis/nodejs-error-reporting/pull/175))
- chore(deps): lock file maintenance ([#174](https://github.com/googleapis/nodejs-error-reporting/pull/174))
- chore(deps): lock file maintenance ([#173](https://github.com/googleapis/nodejs-error-reporting/pull/173))
- chore(deps): lock file maintenance ([#172](https://github.com/googleapis/nodejs-error-reporting/pull/172))
- chore(deps): update dependency eslint-plugin-node to v7 ([#170](https://github.com/googleapis/nodejs-error-reporting/pull/170))
- chore(deps): lock file maintenance ([#169](https://github.com/googleapis/nodejs-error-reporting/pull/169))
- chore(deps): update dependency gts to ^0.8.0 ([#167](https://github.com/googleapis/nodejs-error-reporting/pull/167))
- chore(deps): lock file maintenance ([#165](https://github.com/googleapis/nodejs-error-reporting/pull/165))
- chore(deps): lock file maintenance ([#164](https://github.com/googleapis/nodejs-error-reporting/pull/164))
- chore(deps): lock file maintenance ([#163](https://github.com/googleapis/nodejs-error-reporting/pull/163))
- chore(deps): lock file maintenance ([#160](https://github.com/googleapis/nodejs-error-reporting/pull/160))


### Documentation

- docs: update readme badges ([#269](https://github.com/googleapis/nodejs-error-reporting/pull/269))

### Internal / Testing Changes

- chore: increase the system test delay ([#291](https://github.com/googleapis/nodejs-error-reporting/pull/291))
- chore: fix test config to include skipped tests ([#287](https://github.com/googleapis/nodejs-error-reporting/pull/287))
- chore: change sort order for retrieving err items ([#289](https://github.com/googleapis/nodejs-error-reporting/pull/289))
- chore(build): inject yoshi automation key ([#285](https://github.com/googleapis/nodejs-error-reporting/pull/285))
- chore: update nyc and eslint configs ([#284](https://github.com/googleapis/nodejs-error-reporting/pull/284))
- chore: fix publish.sh permission +x ([#282](https://github.com/googleapis/nodejs-error-reporting/pull/282))
- fix(build): fix Kokoro release script ([#281](https://github.com/googleapis/nodejs-error-reporting/pull/281))
- build: add Kokoro configs for autorelease ([#280](https://github.com/googleapis/nodejs-error-reporting/pull/280))
- chore: address system test flakiness ([#275](https://github.com/googleapis/nodejs-error-reporting/pull/275))
- chore: always nyc report before calling codecov ([#277](https://github.com/googleapis/nodejs-error-reporting/pull/277))
- chore: nyc ignore build/test by default ([#276](https://github.com/googleapis/nodejs-error-reporting/pull/276))
- chore: clean up usage of prettier and eslint ([#274](https://github.com/googleapis/nodejs-error-reporting/pull/274))
- chore: update system tests key ([#272](https://github.com/googleapis/nodejs-error-reporting/pull/272))
- chore: update license file ([#271](https://github.com/googleapis/nodejs-error-reporting/pull/271))
- fix(build): fix system key decryption ([#267](https://github.com/googleapis/nodejs-error-reporting/pull/267))
- chore: update key for system tests ([#265](https://github.com/googleapis/nodejs-error-reporting/pull/265))
- refactor(samples): convert sample tests from ava to mocha ([#257](https://github.com/googleapis/nodejs-error-reporting/pull/257))
- Update region tags in samples ([#259](https://github.com/googleapis/nodejs-error-reporting/pull/259))
- chore: add a synth.metadata
- fix: sys tests use async/await to allow a fix ([#253](https://github.com/googleapis/nodejs-error-reporting/pull/253))
- chore: update eslintignore config ([#254](https://github.com/googleapis/nodejs-error-reporting/pull/254))
- refactor: remove unused deps and simplify ([#248](https://github.com/googleapis/nodejs-error-reporting/pull/248))
- chore: drop contributors from multiple places ([#249](https://github.com/googleapis/nodejs-error-reporting/pull/249))
- chore: use latest npm on Windows ([#246](https://github.com/googleapis/nodejs-error-reporting/pull/246))
- chore: increase system test timeout ([#245](https://github.com/googleapis/nodejs-error-reporting/pull/245))
- chore: update CircleCI config ([#244](https://github.com/googleapis/nodejs-error-reporting/pull/244))
- chore: include build in eslintignore ([#241](https://github.com/googleapis/nodejs-error-reporting/pull/241))
- chore: update issue templates ([#234](https://github.com/googleapis/nodejs-error-reporting/pull/234))
- chore: remove old issue template ([#232](https://github.com/googleapis/nodejs-error-reporting/pull/232))
- build: run tests on node11 ([#231](https://github.com/googleapis/nodejs-error-reporting/pull/231))
- chores(build): do not collect sponge.xml from windows builds ([#229](https://github.com/googleapis/nodejs-error-reporting/pull/229))
- chore: update nock path in system tests ([#216](https://github.com/googleapis/nodejs-error-reporting/pull/216))
- chores(build): run codecov on continuous builds ([#228](https://github.com/googleapis/nodejs-error-reporting/pull/228))
- chore: update new issue template ([#227](https://github.com/googleapis/nodejs-error-reporting/pull/227))
- build: fix codecov uploading on Kokoro ([#224](https://github.com/googleapis/nodejs-error-reporting/pull/224))
- Update kokoro config ([#220](https://github.com/googleapis/nodejs-error-reporting/pull/220))
- Don't publish sourcemaps ([#217](https://github.com/googleapis/nodejs-error-reporting/pull/217))
- test: remove appveyor config ([#215](https://github.com/googleapis/nodejs-error-reporting/pull/215))
- Enable prefer-const in the eslint config ([#211](https://github.com/googleapis/nodejs-error-reporting/pull/211))
- Enable no-var in eslint ([#209](https://github.com/googleapis/nodejs-error-reporting/pull/209))
- Update CI config ([#207](https://github.com/googleapis/nodejs-error-reporting/pull/207))
- Add a synth file and update CI ([#204](https://github.com/googleapis/nodejs-error-reporting/pull/204))
- Retry npm install in CI ([#203](https://github.com/googleapis/nodejs-error-reporting/pull/203))
- feat: use small HTTP dependency ([#201](https://github.com/googleapis/nodejs-error-reporting/pull/201))
- chore: assert.deepEqual => assert.deepStrictEqual ([#179](https://github.com/googleapis/nodejs-error-reporting/pull/179))
- test: fix a node 10 test failure ([#199](https://github.com/googleapis/nodejs-error-reporting/pull/199))
- chore: ignore package-lock.json ([#193](https://github.com/googleapis/nodejs-error-reporting/pull/193))
- feat: add Koa2 support ([#117](https://github.com/googleapis/nodejs-error-reporting/pull/117))
- chore: fix sys test failure caused by a type error ([#188](https://github.com/googleapis/nodejs-error-reporting/pull/188))
- chore: update renovate config ([#189](https://github.com/googleapis/nodejs-error-reporting/pull/189))
- chore: do not target `es5` ([#187](https://github.com/googleapis/nodejs-error-reporting/pull/187))
- chore: fix `lodash.has` usage ([#185](https://github.com/googleapis/nodejs-error-reporting/pull/185))
- chore: delete an unused file ([#184](https://github.com/googleapis/nodejs-error-reporting/pull/184))
- fix: fix installation tests ([#183](https://github.com/googleapis/nodejs-error-reporting/pull/183))
- chore: move mocha options to mocha.opts ([#177](https://github.com/googleapis/nodejs-error-reporting/pull/177))
- chore: require node 8 for samples ([#178](https://github.com/googleapis/nodejs-error-reporting/pull/178))
- chore: switch to console-log-level for logging ([#176](https://github.com/googleapis/nodejs-error-reporting/pull/176))
- test: use strictEqual in tests ([#171](https://github.com/googleapis/nodejs-error-reporting/pull/171))
- chore: use post-install-check ([#166](https://github.com/googleapis/nodejs-error-reporting/pull/166))
- test: fix system tests ([#162](https://github.com/googleapis/nodejs-error-reporting/pull/162))
- fix: drop support for nodejs 9.x ([#161](https://github.com/googleapis/nodejs-error-reporting/pull/161))
