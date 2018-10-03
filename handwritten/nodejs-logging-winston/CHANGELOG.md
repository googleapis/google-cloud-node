# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/logging-winston?activeTab=versions

## v0.10.2

### Fixes
- fix: Doesnt set service context winston3 ([#180](https://github.com/googleapis/nodejs-logging-winston/pull/180))
- fix: Don't publish sourcemaps ([#178](https://github.com/googleapis/nodejs-logging-winston/pull/178))

### Internal / Testing Changes
- test: increasing error_reporting poll timeout for system tests ([#187](https://github.com/googleapis/nodejs-logging-winston/pull/187))
- Update kokoro config ([#185](https://github.com/googleapis/nodejs-logging-winston/pull/185))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#183](https://github.com/googleapis/nodejs-logging-winston/pull/183))

## v0.10.1

### Documentation
- Add missing @class docstring ([#176](https://github.com/googleapis/nodejs-logging-winston/pull/176))

## v0.10.0

**This release has breaking changes**.  Support for node.js 4.x and 9.x has ended.

### Breaking Changes
- fix: drop support for node.js 9.x ([#122](https://github.com/googleapis/nodejs-logging-winston/pull/122))
- chore: drop node 4 support ([#97](https://github.com/googleapis/nodejs-logging-winston/pull/97))

### New Features
- feat: Winston2 and 3 support. ([#161](https://github.com/googleapis/nodejs-logging-winston/pull/161))
- feat: use small HTTP dependency ([#153](https://github.com/googleapis/nodejs-logging-winston/pull/153))

### Bug Fixes
- fix: logged errors are reported to error reporting ([#148](https://github.com/googleapis/nodejs-logging-winston/pull/148))
- doc: fix link to HttpRequest message ([#99](https://github.com/googleapis/nodejs-logging-winston/pull/99))
- fix: prevent permanent  merging of labels ([#89](https://github.com/googleapis/nodejs-logging-winston/pull/89))
- fix: remove unnecessary runtime dependencies ([#73](https://github.com/googleapis/nodejs-logging-winston/pull/73))
- fix: Fix typo in readme ([#69](https://github.com/googleapis/nodejs-logging-winston/pull/69))

### Dependencies
- fix: Upgrade to @google-cloud/logging 4.x ([#168](https://github.com/googleapis/nodejs-logging-winston/pull/168))
- chore(deps): update dependency @google-cloud/common to ^0.25.0 ([#163](https://github.com/googleapis/nodejs-logging-winston/pull/163))
- chore(deps): update dependency delay to v4 ([#154](https://github.com/googleapis/nodejs-logging-winston/pull/154))
- chore(deps): update dependency @google-cloud/common to ^0.24.0 ([#158](https://github.com/googleapis/nodejs-logging-winston/pull/158))
- fix(deps): update dependency @google-cloud/common to ^0.23.0 and logging. ([#152](https://github.com/googleapis/nodejs-logging-winston/pull/152))
- fix(deps): update dependency @google-cloud/logging to v3 ([#149](https://github.com/googleapis/nodejs-logging-winston/pull/149))
- chore(deps): update dependency pify to v4 ([#145](https://github.com/googleapis/nodejs-logging-winston/pull/145))
- fix(deps): update dependency @google-cloud/logging to v2 ([#121](https://github.com/googleapis/nodejs-logging-winston/pull/121))

### Internal / Testing Changes
- Update CI config ([#171](https://github.com/googleapis/nodejs-logging-winston/pull/171))
- Enable prefer-const in the eslint config ([#166](https://github.com/googleapis/nodejs-logging-winston/pull/166))
- chore(deps): update dependency @types/glob to v7 ([#167](https://github.com/googleapis/nodejs-logging-winston/pull/167))
- fix: fixing samples test and guarding for no entries in system test ([#165](https://github.com/googleapis/nodejs-logging-winston/pull/165))
- Enable no-var in eslint ([#162](https://github.com/googleapis/nodejs-logging-winston/pull/162))
- fix: presystem-test should func pretest ([#164](https://github.com/googleapis/nodejs-logging-winston/pull/164))
- Update CI config ([#160](https://github.com/googleapis/nodejs-logging-winston/pull/160))
- Add synth script and update CI ([#156](https://github.com/googleapis/nodejs-logging-winston/pull/156))
- Retry npm install in CI ([#155](https://github.com/googleapis/nodejs-logging-winston/pull/155))
- chore(deps): update dependency eslint-config-prettier to v3 ([#146](https://github.com/googleapis/nodejs-logging-winston/pull/146))
- chore: ignore package-lock.json ([#144](https://github.com/googleapis/nodejs-logging-winston/pull/144))
- chore(deps): lock file maintenance ([#143](https://github.com/googleapis/nodejs-logging-winston/pull/143))
- chore(deps): lock file maintenance ([#142](https://github.com/googleapis/nodejs-logging-winston/pull/142))
- chore(deps): lock file maintenance ([#141](https://github.com/googleapis/nodejs-logging-winston/pull/141))
- chore: update renovate config ([#140](https://github.com/googleapis/nodejs-logging-winston/pull/140))
- chore: remove greenkeeper badge ([#139](https://github.com/googleapis/nodejs-logging-winston/pull/139))
- test: throw on deprecation ([#138](https://github.com/googleapis/nodejs-logging-winston/pull/138))
- chore(deps): lock file maintenance ([#137](https://github.com/googleapis/nodejs-logging-winston/pull/137))
- chore(deps): update dependency typescript to v3 ([#136](https://github.com/googleapis/nodejs-logging-winston/pull/136))
- chore: assert.deelEqual => assert.deepStrictEqual ([#135](https://github.com/googleapis/nodejs-logging-winston/pull/135))
- chore: move mocha options to mocha.opts ([#133](https://github.com/googleapis/nodejs-logging-winston/pull/133))
- chore: require node 8 for samples ([#134](https://github.com/googleapis/nodejs-logging-winston/pull/134))
- chore(deps): lock file maintenance ([#132](https://github.com/googleapis/nodejs-logging-winston/pull/132))
- chore(deps): lock file maintenance ([#131](https://github.com/googleapis/nodejs-logging-winston/pull/131))
- chore(deps): update dependency eslint-plugin-node to v7 ([#130](https://github.com/googleapis/nodejs-logging-winston/pull/130))
- chore(deps): lock file maintenance ([#128](https://github.com/googleapis/nodejs-logging-winston/pull/128))
- chore(deps): update dependency gts to ^0.8.0 ([#127](https://github.com/googleapis/nodejs-logging-winston/pull/127))
- chore(deps): lock file maintenance ([#125](https://github.com/googleapis/nodejs-logging-winston/pull/125))
- chore(deps): lock file maintenance ([#124](https://github.com/googleapis/nodejs-logging-winston/pull/124))
- chore(deps): lock file maintenance ([#123](https://github.com/googleapis/nodejs-logging-winston/pull/123))
- fix(deps): update dependency @sindresorhus/is to ^0.10.0 ([#120](https://github.com/googleapis/nodejs-logging-winston/pull/120))
- chore(deps): lock file maintenance ([#119](https://github.com/googleapis/nodejs-logging-winston/pull/119))
- chore(deps): lock file maintenance ([#118](https://github.com/googleapis/nodejs-logging-winston/pull/118))
- fix(deps): update dependency yargs to v12 ([#117](https://github.com/googleapis/nodejs-logging-winston/pull/117))
- chore: update packages ([#114](https://github.com/googleapis/nodejs-logging-winston/pull/114))
- chore(deps): update dependency ava to v0.25.0 ([#110](https://github.com/googleapis/nodejs-logging-winston/pull/110))
- Configure Renovate ([#102](https://github.com/googleapis/nodejs-logging-winston/pull/102))
- chore(package): update eslint to version 5.0.0 ([#103](https://github.com/googleapis/nodejs-logging-winston/pull/103))
- refactor: drop repo-tool as an exec wrapper ([#107](https://github.com/googleapis/nodejs-logging-winston/pull/107))
- chore: update sample lockfiles ([#106](https://github.com/googleapis/nodejs-logging-winston/pull/106))
- fix: update linking for samples ([#104](https://github.com/googleapis/nodejs-logging-winston/pull/104))
- cleanup: get rid of unncessary type casts ([#101](https://github.com/googleapis/nodejs-logging-winston/pull/101))
- chore(package): update cpy-cli to version 2.0.0 ([#86](https://github.com/googleapis/nodejs-logging-winston/pull/86))
- chore(package): update to the latest gts and typescript ([#100](https://github.com/googleapis/nodejs-logging-winston/pull/100))
- test: fix race between sample and system tests ([#98](https://github.com/googleapis/nodejs-logging-winston/pull/98))
- fix: fix broken install tests ([#96](https://github.com/googleapis/nodejs-logging-winston/pull/96))
- chore: remove `--bail` from system tests config ([#95](https://github.com/googleapis/nodejs-logging-winston/pull/95))
- chore: lock files maintenance ([#83](https://github.com/googleapis/nodejs-logging-winston/pull/83))
- chore: the ultimate fix for repo-tools EPERM ([#82](https://github.com/googleapis/nodejs-logging-winston/pull/82))
- chore: timeout for system test ([#81](https://github.com/googleapis/nodejs-logging-winston/pull/81))
- chore(package): update @types/node to version 10.0.9 ([#80](https://github.com/googleapis/nodejs-logging-winston/pull/80))
- chore: lock files maintenance ([#79](https://github.com/googleapis/nodejs-logging-winston/pull/79))
- chore: test on node10 ([#77](https://github.com/googleapis/nodejs-logging-winston/pull/77))
- chore: lock files maintenance ([#75](https://github.com/googleapis/nodejs-logging-winston/pull/75))

