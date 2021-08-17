# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/monitoring?activeTab=versions

### [2.3.4](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.3.3...v2.3.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#570](https://www.github.com/googleapis/nodejs-monitoring/issues/570)) ([368febb](https://www.github.com/googleapis/nodejs-monitoring/commit/368febba05606ccb71cdee0efc75255acac7d75d))

### [2.3.3](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.3.2...v2.3.3) (2021-07-16)


### Bug Fixes

* **deps:** require google-gax v2.17.1 ([#558](https://www.github.com/googleapis/nodejs-monitoring/issues/558)) ([e15ade6](https://www.github.com/googleapis/nodejs-monitoring/commit/e15ade6476338ada88e31fe07f480d73739073ad))

### [2.3.3](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.3.2...v2.3.3) (2021-07-16)


### Bug Fixes

* **deps:** require google-gax v2.17.1 ([#558](https://www.github.com/googleapis/nodejs-monitoring/issues/558)) ([e15ade6](https://www.github.com/googleapis/nodejs-monitoring/commit/e15ade6476338ada88e31fe07f480d73739073ad))

### [2.3.2](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.3.1...v2.3.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#552](https://www.github.com/googleapis/nodejs-monitoring/issues/552)) ([43c9ddd](https://www.github.com/googleapis/nodejs-monitoring/commit/43c9dddbd75668da5e7c0b2608346e8f04402e7e))

### [2.3.1](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.3.0...v2.3.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#534](https://www.github.com/googleapis/nodejs-monitoring/issues/534)) ([ce7e9e1](https://www.github.com/googleapis/nodejs-monitoring/commit/ce7e9e1b7527fc1a4b55960596237e4cd2c43e3b))

## [2.3.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.2.0...v2.3.0) (2021-03-24)


### Features

* Added support for Monitoring Query Language: https://cloud.google.com/monitoring/mql feat: Added support for units in the MetricService feat: Added total_size to the response of ListAlertPolicies. fix: Un-deprecated cluster_istio for service monitoring. feat: Added IstioCanonicalService for service monitoring. feat: Added creation and mutation records to notification channels. feat: Added support for querying metrics for folders and organizations. fix: Extended the default deadline for UpdateGroup to 180s. feat: Added support for secondary aggregation when querying metrics. ([#523](https://www.github.com/googleapis/nodejs-monitoring/issues/523)) ([cab3fdb](https://www.github.com/googleapis/nodejs-monitoring/commit/cab3fdb02c41149ae40e3a28987bb7ffeed050ac))

## [2.2.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.5...v2.2.0) (2021-01-09)


### Features

* adds style enumeration ([#513](https://www.github.com/googleapis/nodejs-monitoring/issues/513)) ([2ca2169](https://www.github.com/googleapis/nodejs-monitoring/commit/2ca2169553c90a588cc8c7374d4790da3bf122f2))

### [2.1.5](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.4...v2.1.5) (2021-01-07)


### Bug Fixes

* update alert policies one at a time because (concurrent updates are not supported) ([#507](https://www.github.com/googleapis/nodejs-monitoring/issues/507)) ([2bf75a2](https://www.github.com/googleapis/nodejs-monitoring/commit/2bf75a2294f82d3b75e0ee3d44c91b0b8e5ec358))

### [2.1.4](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.3...v2.1.4) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#501](https://www.github.com/googleapis/nodejs-monitoring/issues/501)) ([a923606](https://www.github.com/googleapis/nodejs-monitoring/commit/a9236060fdd4516e5f3fa31a5bf76895ad8bf6c1))

### [2.1.3](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.2...v2.1.3) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#497](https://www.github.com/googleapis/nodejs-monitoring/issues/497)) ([447cfce](https://www.github.com/googleapis/nodejs-monitoring/commit/447cfce75ed11d66e254d72d105252e8b0ed0a3c))

### [2.1.2](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.1...v2.1.2) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#480](https://www.github.com/googleapis/nodejs-monitoring/issues/480)) ([188c55a](https://www.github.com/googleapis/nodejs-monitoring/commit/188c55a4126fbf2180fa116985bf3cbdd3c46ce8))

### [2.1.1](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.1.0...v2.1.1) (2020-07-24)


### Bug Fixes

* move gitattributes files to node templates ([#464](https://www.github.com/googleapis/nodejs-monitoring/issues/464)) ([db2d19d](https://www.github.com/googleapis/nodejs-monitoring/commit/db2d19d9170eb10d8f2c779589e623222991d393))

## [2.1.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v2.0.0...v2.1.0) (2020-06-18)


### Features

* move ts target to es2018 from es2016 ([#440](https://www.github.com/googleapis/nodejs-monitoring/issues/440)) ([f57200d](https://www.github.com/googleapis/nodejs-monitoring/commit/f57200d611a52fe1ba4c3646978f3034ee6df412))


### Bug Fixes

* proper fallback option handling ([81f52b7](https://www.github.com/googleapis/nodejs-monitoring/commit/81f52b7a697ac4f953644a81ad13aaff4b19570f))
* update node issue template ([#447](https://www.github.com/googleapis/nodejs-monitoring/issues/447)) ([5f08bf8](https://www.github.com/googleapis/nodejs-monitoring/commit/5f08bf88f8caa969800582d6eb408759ba240278))

## [2.0.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.7.0...v2.0.0) (2020-05-08)


### ⚠ BREAKING CHANGES

* Drop support for TimeSeriesQueryLanguageCondition as an alert condition type 
* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* monitoring convert to typescript (#360)

### Features

* deferred client initialization ([#378](https://www.github.com/googleapis/nodejs-monitoring/issues/378)) ([61eca6a](https://www.github.com/googleapis/nodejs-monitoring/commit/61eca6a6f4447fe5a8d30ee6c40034fb1f7bbb60))
* drop node8 support, support for async iterators ([#396](https://www.github.com/googleapis/nodejs-monitoring/issues/396)) ([d65e8fb](https://www.github.com/googleapis/nodejs-monitoring/commit/d65e8fb8e8901d7023dba3c226a09ec3782fc0c5))
* export protos in src/index.ts ([#369](https://www.github.com/googleapis/nodejs-monitoring/issues/369)) ([b0af4b1](https://www.github.com/googleapis/nodejs-monitoring/commit/b0af4b1b48254f91ec9aa9cead1ff0a6714a6393))
* monitoring convert to typescript ([#360](https://www.github.com/googleapis/nodejs-monitoring/issues/360)) ([5bbd963](https://www.github.com/googleapis/nodejs-monitoring/commit/5bbd96307cc47066b00048e494bfa566ea58650d))
* refresh monitoring client libraries ([#401](https://www.github.com/googleapis/nodejs-monitoring/issues/401)) ([efd6e6f](https://www.github.com/googleapis/nodejs-monitoring/commit/efd6e6f4e1596ba4e5a3ba63f12c868735d4c571))
* Update public client library for Cloud Monitoring to introduce new Uptime check feature. Uptime HTTP(S) checks can now be GET or POST ([#425](https://www.github.com/googleapis/nodejs-monitoring/issues/425)) ([103afde](https://www.github.com/googleapis/nodejs-monitoring/commit/103afdedfc6a874f71f866c9e07ef8cbfa70fb8b))


### Bug Fixes

* regen protos and tests, formatting ([#429](https://www.github.com/googleapis/nodejs-monitoring/issues/429)) ([9e6afc8](https://www.github.com/googleapis/nodejs-monitoring/commit/9e6afc87cc0fcc323539f3bf8dc8e15d66c144b7))
* remove eslint, update gax, fix generated protos, run the generator ([#415](https://www.github.com/googleapis/nodejs-monitoring/issues/415)) ([ed8d95e](https://www.github.com/googleapis/nodejs-monitoring/commit/ed8d95efec1820a41d893273443172e3fbd2781c))
* synth.py clean up for multiple version ([#431](https://www.github.com/googleapis/nodejs-monitoring/issues/431)) ([4e0e5bb](https://www.github.com/googleapis/nodejs-monitoring/commit/4e0e5bb3c6bc2cb3f3a368c3199f605f24c21dda))
* updated proto files with new proto annotations ([cf8cc77](https://www.github.com/googleapis/nodejs-monitoring/commit/cf8cc770ec5fa17874fd67df1469ffa3b2724628))


### Code Refactoring

* Drop support for TimeSeriesQueryLanguageCondition as an alert condition type  ([866c028](https://www.github.com/googleapis/nodejs-monitoring/commit/866c0282ca2da53b0f9b42a2a1977446f7e368ae))

## [1.7.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.6.1...v1.7.0) (2019-12-31)


### Features

* adds ContentMatcherOption ([#336](https://www.github.com/googleapis/nodejs-monitoring/issues/336)) ([003b8f7](https://www.github.com/googleapis/nodejs-monitoring/commit/003b8f7bc30c79b11aa393f0272e2554761707d4))

### [1.6.1](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.6.0...v1.6.1) (2019-12-05)


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#339](https://www.github.com/googleapis/nodejs-monitoring/issues/339)) ([3616df7](https://www.github.com/googleapis/nodejs-monitoring/commit/3616df79a5b23a0eae1bb899e7a6a4c45d7cee7e))
* **deps:** update dependency yargs to v15 ([#333](https://www.github.com/googleapis/nodejs-monitoring/issues/333)) ([dd3ba97](https://www.github.com/googleapis/nodejs-monitoring/commit/dd3ba97f7506577c264f40353d403ac62ce9951b))
* **docs:** bump release level to GA ([#335](https://www.github.com/googleapis/nodejs-monitoring/issues/335)) ([839a25b](https://www.github.com/googleapis/nodejs-monitoring/commit/839a25b443ec0c65ed18822f5ca305ab0737fa71))

## [1.6.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.5.0...v1.6.0) (2019-11-15)


### Features

* add service api support ([#325](https://www.github.com/googleapis/nodejs-monitoring/issues/325)) ([dbc3680](https://www.github.com/googleapis/nodejs-monitoring/commit/dbc36809baeef4fe860da898face3d04103cca63))
* Introduced detailed status message for CreateTimeSeries: CreateTimeSeriesSummary replaces CreateTimeSeriesError, which is now deprecated and unused ([46e0661](https://www.github.com/googleapis/nodejs-monitoring/commit/46e0661286f8b59c4124338477c5104cd1f5a099))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#324](https://www.github.com/googleapis/nodejs-monitoring/issues/324)) ([6d81605](https://www.github.com/googleapis/nodejs-monitoring/commit/6d8160596340a0c3ee9f4540e505d3e329a532eb))

## [1.5.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.4.0...v1.5.0) (2019-10-22)


### Features

* add is_internal option ([#312](https://www.github.com/googleapis/nodejs-monitoring/issues/312)) ([a2dbb0b](https://www.github.com/googleapis/nodejs-monitoring/commit/a2dbb0b8df925317f01a193038ad520f0c8c43e7))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#313](https://www.github.com/googleapis/nodejs-monitoring/issues/313)) ([faf0efa](https://www.github.com/googleapis/nodejs-monitoring/commit/faf0efa5caa535d0cf16d10143a48a0c545e2074))

## [1.4.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.3.0...v1.4.0) (2019-10-12)


### Features

* .d.ts for protos ([#298](https://www.github.com/googleapis/nodejs-monitoring/issues/298)) ([dc6e8a1](https://www.github.com/googleapis/nodejs-monitoring/commit/dc6e8a1b82b41638ad873ec35007415f602c8b0b))


### Bug Fixes

* update sample for enabling or disabling a policy ([#305](https://www.github.com/googleapis/nodejs-monitoring/issues/305)) ([fd84c71](https://www.github.com/googleapis/nodejs-monitoring/commit/fd84c71ab4511c11963c8480cda70117f78f8651))
* use compatible version of google-gax ([c210d32](https://www.github.com/googleapis/nodejs-monitoring/commit/c210d320a392fb33e6a6779ae4d727a6970326da))

## [1.3.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.2.3...v1.3.0) (2019-09-16)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([68a0867](https://www.github.com/googleapis/nodejs-monitoring/commit/68a0867))
* include the correct version of node in a header ([#286](https://www.github.com/googleapis/nodejs-monitoring/issues/286)) ([0c758f9](https://www.github.com/googleapis/nodejs-monitoring/commit/0c758f9))


### Features

* load protos from JSON, grpc-fallback support ([435c5d0](https://www.github.com/googleapis/nodejs-monitoring/commit/435c5d0))
* **GroupServiceClient:** support recursive option when deleting group ([#294](https://www.github.com/googleapis/nodejs-monitoring/issues/294)) ([f7749af](https://www.github.com/googleapis/nodejs-monitoring/commit/f7749af))

### [1.2.3](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.2.2...v1.2.3) (2019-08-03)


### Bug Fixes

* allow calls with no request, add JSON proto ([3a8a89b](https://www.github.com/googleapis/nodejs-monitoring/commit/3a8a89b))

### [1.2.2](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.2.1...v1.2.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#273](https://www.github.com/googleapis/nodejs-monitoring/issues/273)) ([d4056d6](https://www.github.com/googleapis/nodejs-monitoring/commit/d4056d6))

### [1.2.1](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.2.0...v1.2.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#269](https://www.github.com/googleapis/nodejs-monitoring/issues/269)) ([cba6442](https://www.github.com/googleapis/nodejs-monitoring/commit/cba6442))

## [1.2.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.1.0...v1.2.0) (2019-06-06)


### Features

* add .repo-metadata for README generation ([#263](https://www.github.com/googleapis/nodejs-monitoring/issues/263)) ([d966bd6](https://www.github.com/googleapis/nodejs-monitoring/commit/d966bd6))

## [1.1.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#265](https://www.github.com/googleapis/nodejs-monitoring/issues/265)) ([8a413bc](https://www.github.com/googleapis/nodejs-monitoring/commit/8a413bc))

## [1.0.0](https://www.github.com/googleapis/nodejs-monitoring/compare/v0.7.1...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#241)

### Bug Fixes

* include 'x-goog-request-params' header in requests ([#233](https://www.github.com/googleapis/nodejs-monitoring/issues/233)) ([54733ef](https://www.github.com/googleapis/nodejs-monitoring/commit/54733ef))
* **deps:** update dependency google-gax to ^0.26.0 ([#240](https://www.github.com/googleapis/nodejs-monitoring/issues/240)) ([da50ee8](https://www.github.com/googleapis/nodejs-monitoring/commit/da50ee8))
* **deps:** update dependency google-gax to v1 ([#249](https://www.github.com/googleapis/nodejs-monitoring/issues/249)) ([896141a](https://www.github.com/googleapis/nodejs-monitoring/commit/896141a))


### Build System

* upgrade engines field to >=8.10.0 ([#241](https://www.github.com/googleapis/nodejs-monitoring/issues/241)) ([6e7587d](https://www.github.com/googleapis/nodejs-monitoring/commit/6e7587d))

## v0.7.1

03-13-2019 15:05 PDT

### Bug Fixes
- fix: throw on invalid credentials ([#216](https://github.com/googleapis/nodejs-monitoring/pull/216))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#204](https://github.com/googleapis/nodejs-monitoring/pull/204))

### Documentation
- docs: update links in contrib guide ([#215](https://github.com/googleapis/nodejs-monitoring/pull/215))
- docs: update contributing path in README ([#210](https://github.com/googleapis/nodejs-monitoring/pull/210))
- docs: move CONTRIBUTING.md to root ([#209](https://github.com/googleapis/nodejs-monitoring/pull/209))
- docs: add lint/fix example to contributing guide ([#206](https://github.com/googleapis/nodejs-monitoring/pull/206))

### Internal / Testing Changes
- refactor: update json import paths ([#224](https://github.com/googleapis/nodejs-monitoring/pull/224))
- chore(deps): update dependency p-retry to v4 ([#223](https://github.com/googleapis/nodejs-monitoring/pull/223))
- build: Add docuploader credentials to node publish jobs ([#221](https://github.com/googleapis/nodejs-monitoring/pull/221))
- build: use node10 to run samples-test, system-test etc ([#220](https://github.com/googleapis/nodejs-monitoring/pull/220))
- build: update release configuration
- chore: update proto docs and code style
- chore(deps): update dependency mocha to v6 ([#217](https://github.com/googleapis/nodejs-monitoring/pull/217))
- refactor: update the generated code style  ([#208](https://github.com/googleapis/nodejs-monitoring/pull/208))
- build: use linkinator for docs test ([#214](https://github.com/googleapis/nodejs-monitoring/pull/214))
- fix(deps): update dependency yargs to v13 ([#213](https://github.com/googleapis/nodejs-monitoring/pull/213))
- build: create docs test npm scripts ([#212](https://github.com/googleapis/nodejs-monitoring/pull/212))
- build: test using @grpc/grpc-js in CI ([#211](https://github.com/googleapis/nodejs-monitoring/pull/211))
- chore(deps): update dependency eslint-config-prettier to v4 ([#203](https://github.com/googleapis/nodejs-monitoring/pull/203))
- build: ignore googleapis.com in doc link check ([#201](https://github.com/googleapis/nodejs-monitoring/pull/201))
- chore: update year in the license headers. ([#200](https://github.com/googleapis/nodejs-monitoring/pull/200))

## v0.7.0

01-15-2019 09:35 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#196](https://github.com/googleapis/nodejs-monitoring/pull/196))
- refactor: remove unused deps

### Documentation
- doc: remove unused gRPC types
- docs: add samples for channel notification ([#185](https://github.com/googleapis/nodejs-monitoring/pull/185))
- docs: update readme badges ([#171](https://github.com/googleapis/nodejs-monitoring/pull/171))
- docs(samples): convert samples to async/await, and use mocha for tests ([#146](https://github.com/googleapis/nodejs-monitoring/pull/146))
- docs: update proto comments ([#159](https://github.com/googleapis/nodejs-monitoring/pull/159))
- docs: fix link in changelog ([#132](https://github.com/googleapis/nodejs-monitoring/pull/132))

### Internal / Testing Changes
- build: check broken links in generated docs ([#194](https://github.com/googleapis/nodejs-monitoring/pull/194))
- refactor: modernize and fix the sample tests ([#193](https://github.com/googleapis/nodejs-monitoring/pull/193))
- chore: fix name of region tag ([#188](https://github.com/googleapis/nodejs-monitoring/pull/188))
- chore: fix region tags ([#187](https://github.com/googleapis/nodejs-monitoring/pull/187))
- chore(build): inject yoshi automation key ([#186](https://github.com/googleapis/nodejs-monitoring/pull/186))
- chore: update nyc and eslint configs ([#184](https://github.com/googleapis/nodejs-monitoring/pull/184))
- chore: fix publish.sh permission +x ([#182](https://github.com/googleapis/nodejs-monitoring/pull/182))
- fix(build): fix Kokoro release script ([#181](https://github.com/googleapis/nodejs-monitoring/pull/181))
- build: add Kokoro configs for autorelease ([#180](https://github.com/googleapis/nodejs-monitoring/pull/180))
- chore: always nyc report before calling codecov ([#177](https://github.com/googleapis/nodejs-monitoring/pull/177))
- chore: nyc ignore build/test by default ([#175](https://github.com/googleapis/nodejs-monitoring/pull/175))
- chore: update license file ([#173](https://github.com/googleapis/nodejs-monitoring/pull/173))
- fix(build): fix system key decryption ([#169](https://github.com/googleapis/nodejs-monitoring/pull/169))
- chore: add a synth.metadata
- test: fix failing tests due to leaks ([#163](https://github.com/googleapis/nodejs-monitoring/pull/163))
- chore: update eslintignore config ([#160](https://github.com/googleapis/nodejs-monitoring/pull/160))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#158](https://github.com/googleapis/nodejs-monitoring/pull/158))
- chore: drop contributors from multiple places ([#156](https://github.com/googleapis/nodejs-monitoring/pull/156))
- chore: use latest npm on Windows ([#154](https://github.com/googleapis/nodejs-monitoring/pull/154))
- chore: update CircleCI config ([#151](https://github.com/googleapis/nodejs-monitoring/pull/151))
- chore: include build in eslintignore ([#148](https://github.com/googleapis/nodejs-monitoring/pull/148))
- chore(deps): update dependency eslint-plugin-node to v8 ([#143](https://github.com/googleapis/nodejs-monitoring/pull/143))
- feat: run the generator
- chore: update new issue templates
- chore(build): fix the synth file and generation
- chore: remove old issue template ([#140](https://github.com/googleapis/nodejs-monitoring/pull/140))
- build: run tests on node11 ([#139](https://github.com/googleapis/nodejs-monitoring/pull/139))
- chores(build): do not collect sponge.xml from windows builds ([#138](https://github.com/googleapis/nodejs-monitoring/pull/138))
- chores(build): run codecov on continuous builds ([#137](https://github.com/googleapis/nodejs-monitoring/pull/137))
- build: fix codecov uploading on Kokoro ([#134](https://github.com/googleapis/nodejs-monitoring/pull/134))
- chore(deps): update dependency sinon to v7 ([#133](https://github.com/googleapis/nodejs-monitoring/pull/133))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#131](https://github.com/googleapis/nodejs-monitoring/pull/131))
- test: remove appveyor config ([#127](https://github.com/googleapis/nodejs-monitoring/pull/127))
- Fix failing sample tests ([#126](https://github.com/googleapis/nodejs-monitoring/pull/126))
- Enable prefer-const in the eslint config ([#124](https://github.com/googleapis/nodejs-monitoring/pull/124))
- Fix the linter ([#123](https://github.com/googleapis/nodejs-monitoring/pull/123))
- Enable no-var in eslint ([#122](https://github.com/googleapis/nodejs-monitoring/pull/122))
- run synth.py to fix system-test ([#117](https://github.com/googleapis/nodejs-monitoring/pull/117))
- Retry npm install in CI ([#115](https://github.com/googleapis/nodejs-monitoring/pull/115))
- Update CircleCI and Kokoro config ([#113](https://github.com/googleapis/nodejs-monitoring/pull/113))
- chore(deps): update dependency nyc to v13 ([#111](https://github.com/googleapis/nodejs-monitoring/pull/111))
- Update the CI config ([#109](https://github.com/googleapis/nodejs-monitoring/pull/109))
- chore: make the CircleCI config consistent
- fix(deps): update dependency @google-cloud/monitoring to ^0.6.0 ([#104](https://github.com/googleapis/nodejs-monitoring/pull/104))
- chore(build): make the CircleCI config consistent
- build: node templates ([#101](https://github.com/googleapis/nodejs-monitoring/pull/101))

## v0.6.0

01-14-2019 14:34 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#196](https://github.com/googleapis/nodejs-monitoring/pull/196))
- refactor: remove unused deps

### Documentation
- docs: remove unused gRPC types
- docs(samples): add samples for channel notification ([#185](https://github.com/googleapis/nodejs-monitoring/pull/185))
- docs: update readme badges ([#171](https://github.com/googleapis/nodejs-monitoring/pull/171))
- docs(samples): convert samples to async/await, and use mocha for tests ([#146](https://github.com/googleapis/nodejs-monitoring/pull/146))
- docs: update proto comments ([#159](https://github.com/googleapis/nodejs-monitoring/pull/159))
- docs: fix link in changelog ([#132](https://github.com/googleapis/nodejs-monitoring/pull/132))

### Internal / Testing Changes
- refactor: modernize and fix the sample tests ([#193](https://github.com/googleapis/nodejs-monitoring/pull/193))
- chore: fix name of region tag ([#188](https://github.com/googleapis/nodejs-monitoring/pull/188))
- chore: fix region tags ([#187](https://github.com/googleapis/nodejs-monitoring/pull/187))
- chore(build): inject yoshi automation key ([#186](https://github.com/googleapis/nodejs-monitoring/pull/186))
- chore: update nyc and eslint configs ([#184](https://github.com/googleapis/nodejs-monitoring/pull/184))
- chore: fix publish.sh permission +x ([#182](https://github.com/googleapis/nodejs-monitoring/pull/182))
- fix(build): fix Kokoro release script ([#181](https://github.com/googleapis/nodejs-monitoring/pull/181))
- build: add Kokoro configs for autorelease ([#180](https://github.com/googleapis/nodejs-monitoring/pull/180))
- chore: always nyc report before calling codecov ([#177](https://github.com/googleapis/nodejs-monitoring/pull/177))
- chore: nyc ignore build/test by default ([#175](https://github.com/googleapis/nodejs-monitoring/pull/175))
- chore: update license file ([#173](https://github.com/googleapis/nodejs-monitoring/pull/173))
- fix(build): fix system key decryption ([#169](https://github.com/googleapis/nodejs-monitoring/pull/169))
- chore: add a synth.metadata
- test: fix failing tests due to leaks ([#163](https://github.com/googleapis/nodejs-monitoring/pull/163))
- chore: update eslintignore config ([#160](https://github.com/googleapis/nodejs-monitoring/pull/160))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#158](https://github.com/googleapis/nodejs-monitoring/pull/158))
- chore: drop contributors from multiple places ([#156](https://github.com/googleapis/nodejs-monitoring/pull/156))
- chore: use latest npm on Windows ([#154](https://github.com/googleapis/nodejs-monitoring/pull/154))
- chore: update CircleCI config ([#151](https://github.com/googleapis/nodejs-monitoring/pull/151))
- chore: include build in eslintignore ([#148](https://github.com/googleapis/nodejs-monitoring/pull/148))
- chore(deps): update dependency eslint-plugin-node to v8 ([#143](https://github.com/googleapis/nodejs-monitoring/pull/143))
- chore: update new issue templates
- chore(build): fix the synth file and generation
- chore: remove old issue template ([#140](https://github.com/googleapis/nodejs-monitoring/pull/140))
- build: run tests on node11 ([#139](https://github.com/googleapis/nodejs-monitoring/pull/139))
- chores(build): do not collect sponge.xml from windows builds ([#138](https://github.com/googleapis/nodejs-monitoring/pull/138))
- chores(build): run codecov on continuous builds ([#137](https://github.com/googleapis/nodejs-monitoring/pull/137))
- build: fix codecov uploading on Kokoro ([#134](https://github.com/googleapis/nodejs-monitoring/pull/134))
- chore(deps): update dependency sinon to v7 ([#133](https://github.com/googleapis/nodejs-monitoring/pull/133))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#131](https://github.com/googleapis/nodejs-monitoring/pull/131))
- test: remove appveyor config ([#127](https://github.com/googleapis/nodejs-monitoring/pull/127))
- Fix failing sample tests ([#126](https://github.com/googleapis/nodejs-monitoring/pull/126))
- Enable prefer-const in the eslint config ([#124](https://github.com/googleapis/nodejs-monitoring/pull/124))
- Fix the linter ([#123](https://github.com/googleapis/nodejs-monitoring/pull/123))
- Enable no-var in eslint ([#122](https://github.com/googleapis/nodejs-monitoring/pull/122))
- run synth.py to fix system-test ([#117](https://github.com/googleapis/nodejs-monitoring/pull/117))
- Retry npm install in CI ([#115](https://github.com/googleapis/nodejs-monitoring/pull/115))
- Update CircleCI and Kokoro config ([#113](https://github.com/googleapis/nodejs-monitoring/pull/113))
- chore(deps): update dependency nyc to v13 ([#111](https://github.com/googleapis/nodejs-monitoring/pull/111))
- Update the CI config ([#109](https://github.com/googleapis/nodejs-monitoring/pull/109))
- chore: make the CircleCI config consistent
- fix(deps): update dependency @google-cloud/monitoring to ^0.6.0 ([#104](https://github.com/googleapis/nodejs-monitoring/pull/104))
- chore(build): make the CircleCI config consistent
- build: node templates ([#101](https://github.com/googleapis/nodejs-monitoring/pull/101))

## v0.6.0

### Implementation Changes
BREAKING CHANGE
- fix: drop support for node.js 4.x and 9.x (#72)

### New Features
Bring in some documentation changes inside protos (see #96)

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v3 (#97)
- fix(deps): update dependency google-gax to ^0.18.0 (#88)
- chore(deps): update dependency eslint-plugin-node to v7 (#80)
- chore(deps): update dependency sinon to v6 (#64)
- fix(deps): update dependency yargs to v12 (#65)
- chore: check in synth script and update gax dependency (#62)
- chore(package): update eslint to version 5.0.0 (#57)
- chore(package): update nyc to version 12.0.2 (#53)

### Documentation
- doc: Fix namespace causing 404s (#99)

### Internal / Testing Changes
- chore: ignore package-lock.json (#93)
- test: add sample for updating an uptime check (#95)
- chore: update renovate config (#90)
- chore: move mocha options to mocha.opts (#85)
- chore: require node 8 for samples (#86)
- test: use strictEqual in tests (#81)
- chore: really delete node4 and node9 (#73)
- Configure Renovate (#56)
- refactor: drop repo-tool as an exec wrapper (#61)
- fix: update linking for samples (#58)
- chore: the ultimate fix for repo-tools EPERM (#50)
- test: fix uptime sample test (#48)
- chore: timeout for system test (#49)
- test: add resource type filter to alerts test (#46)
- Fixes #43. (#44)
- Fix region tags. (#42)
- Add Alerting samples. (#41)
- chore: test on node10 (#40)
