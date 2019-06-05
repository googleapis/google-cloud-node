# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-logging-bunyan?activeTab=versions

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
