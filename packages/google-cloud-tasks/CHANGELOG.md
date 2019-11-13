# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-tasks?activeTab=versions

## [1.6.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.5.1...v1.6.0) (2019-11-13)


### Features

* introduces HTTP targets to default v2 API ([#300](https://www.github.com/googleapis/nodejs-tasks/issues/300)) ([6dad421](https://www.github.com/googleapis/nodejs-tasks/commit/6dad4213f0b72e6ac1c708f98085037a48abe171))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#304](https://www.github.com/googleapis/nodejs-tasks/issues/304)) ([741e8ab](https://www.github.com/googleapis/nodejs-tasks/commit/741e8ab46cb68d63c7fca0de526354432092d415))
* import long into proto ts declaration file ([#305](https://www.github.com/googleapis/nodejs-tasks/issues/305)) ([dd1fcd1](https://www.github.com/googleapis/nodejs-tasks/commit/dd1fcd114c9ecd4d425c405b16036cf935be4e50))

### [1.5.1](https://www.github.com/googleapis/nodejs-tasks/compare/v1.5.0...v1.5.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#297](https://www.github.com/googleapis/nodejs-tasks/issues/297)) ([5f4fd9f](https://www.github.com/googleapis/nodejs-tasks/commit/5f4fd9f1de8c4e20836a099d8552b6c2139cc815))

## [1.5.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.4.0...v1.5.0) (2019-10-03)


### Bug Fixes

* update paths in resource reference options ([#284](https://www.github.com/googleapis/nodejs-tasks/issues/284)) ([13b5db0](https://www.github.com/googleapis/nodejs-tasks/commit/13b5db0))
* use compatible version of google-gax ([d6cae4e](https://www.github.com/googleapis/nodejs-tasks/commit/d6cae4e))
* **docs:** use long names when class names collide ([#290](https://www.github.com/googleapis/nodejs-tasks/issues/290)) ([0215af8](https://www.github.com/googleapis/nodejs-tasks/commit/0215af8))


### Features

* .d.ts for protos ([#282](https://www.github.com/googleapis/nodejs-tasks/issues/282)) ([b15ba7d](https://www.github.com/googleapis/nodejs-tasks/commit/b15ba7d))
* simplify Node sample ([#278](https://www.github.com/googleapis/nodejs-tasks/issues/278)) ([c6fa96d](https://www.github.com/googleapis/nodejs-tasks/commit/c6fa96d))

## [1.4.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.3.0...v1.4.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([1c735c3](https://www.github.com/googleapis/nodejs-tasks/commit/1c735c3))

## [1.3.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.2.1...v1.3.0) (2019-08-28)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([d959ff7](https://www.github.com/googleapis/nodejs-tasks/commit/d959ff7))
* **docs:** stop linking reference documents to anchor ([06f8c26](https://www.github.com/googleapis/nodejs-tasks/commit/06f8c26))


### Features

* switch to cloudtasks.googleapis.com default host ([#268](https://www.github.com/googleapis/nodejs-tasks/issues/268)) ([4f4c66b](https://www.github.com/googleapis/nodejs-tasks/commit/4f4c66b))

### [1.2.1](https://www.github.com/googleapis/nodejs-tasks/compare/v1.2.0...v1.2.1) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([01198ea](https://www.github.com/googleapis/nodejs-tasks/commit/01198ea))

## [1.2.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.1.2...v1.2.0) (2019-07-02)


### Features

* add support for IAM policy options ([#255](https://www.github.com/googleapis/nodejs-tasks/issues/255)) ([7c7b0be](https://www.github.com/googleapis/nodejs-tasks/commit/7c7b0be))

### [1.1.2](https://www.github.com/googleapis/nodejs-tasks/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#250](https://www.github.com/googleapis/nodejs-tasks/issues/250)) ([a35d76c](https://www.github.com/googleapis/nodejs-tasks/commit/a35d76c))

### [1.1.1](https://www.github.com/googleapis/nodejs-tasks/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#244](https://www.github.com/googleapis/nodejs-tasks/issues/244)) ([da8ddbc](https://www.github.com/googleapis/nodejs-tasks/commit/da8ddbc))

## [1.1.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#239](https://www.github.com/googleapis/nodejs-tasks/issues/239)) ([5bb4eff](https://www.github.com/googleapis/nodejs-tasks/commit/5bb4eff))

## [1.0.0](https://www.github.com/googleapis/nodejs-tasks/compare/v0.5.0...v1.0.0) (2019-05-13)


### Bug Fixes

* DEADLINE_EXCEEDED retry code is idempotent ([#219](https://www.github.com/googleapis/nodejs-tasks/issues/219)) ([59cfd36](https://www.github.com/googleapis/nodejs-tasks/commit/59cfd36))
* **deps:** update dependency google-gax to v1 ([#218](https://www.github.com/googleapis/nodejs-tasks/issues/218)) ([25d0317](https://www.github.com/googleapis/nodejs-tasks/commit/25d0317))
* DEADLINE_EXCEEDED no longer treated as idempotent and retried ([739a515](https://www.github.com/googleapis/nodejs-tasks/commit/739a515))
* **deps:** update dependency google-gax to ^0.26.0 ([#207](https://www.github.com/googleapis/nodejs-tasks/issues/207)) ([7492ae3](https://www.github.com/googleapis/nodejs-tasks/commit/7492ae3))


### Build System

* upgrade engines field to >=8.10.0 ([#209](https://www.github.com/googleapis/nodejs-tasks/issues/209)) ([c2f4869](https://www.github.com/googleapis/nodejs-tasks/commit/c2f4869))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#209)

## v0.5.0

03-21-2019 22:39 PDT

**This release has breaking changes**.  The default version of the API has changed from `v2beta3` to `v2`.  Potential breaking changes may apply.

### New Features
- feat: add v2 of the tasks API ([#192](https://github.com/googleapis/nodejs-tasks/pull/192))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#189](https://github.com/googleapis/nodejs-tasks/pull/189))
- build: use per-repo publish token ([#188](https://github.com/googleapis/nodejs-tasks/pull/188))
- refactor: update json import paths ([#186](https://github.com/googleapis/nodejs-tasks/pull/186))
- build: Add docuploader credentials to node publish jobs ([#184](https://github.com/googleapis/nodejs-tasks/pull/184))

## v0.4.0

03-06-2019 13:30 PST

### New Features
- feat: add alpha support for HTTP triggers ([#177](https://github.com/googleapis/nodejs-tasks/pull/177))

### Bug fixes
- fix: throw on invalid credentials

### Documentation
- docs: update contributing path in README ([#168](https://github.com/googleapis/nodejs-tasks/pull/168))
- docs: move CONTRIBUTING.md to root ([#167](https://github.com/googleapis/nodejs-tasks/pull/167))
- docs: add lint/fix example to contributing guide ([#165](https://github.com/googleapis/nodejs-tasks/pull/165))
- docs: fix example comments ([#164](https://github.com/googleapis/nodejs-tasks/pull/164))
- docs: update comments on protos ([#180](https://github.com/googleapis/nodejs-tasks/pull/180))
- docs: sync latest proto docs
- docs: update README to include samples ([#178](https://github.com/googleapis/nodejs-tasks/pull/178))
- docs: update links in contrib guide ([#174](https://github.com/googleapis/nodejs-tasks/pull/174))

### Internal / Testing Changes
- build: update release configuration
- chore(deps): update dependency mocha to v6 ([#176](https://github.com/googleapis/nodejs-tasks/pull/176))
- build: use linkinator for docs test ([#173](https://github.com/googleapis/nodejs-tasks/pull/173))
- fix(deps): update dependency yargs to v13 ([#171](https://github.com/googleapis/nodejs-tasks/pull/171))
- build: create docs test npm scripts ([#170](https://github.com/googleapis/nodejs-tasks/pull/170))
- build: test using @grpc/grpc-js in CI ([#169](https://github.com/googleapis/nodejs-tasks/pull/169))
- refactor: improve generated code style. ([#163](https://github.com/googleapis/nodejs-tasks/pull/163))

## v0.3.0

01-31-2019 23:06 PST

### Implementation Changes
- chore: adjust grpc timeout settings

### New Features
- feat: support the .dispatch_deadline property. ([#160](https://github.com/googleapis/nodejs-tasks/pull/160))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#161](https://github.com/googleapis/nodejs-tasks/pull/161))
- fix(deps): update dependency google-gax to ^0.24.0 ([#158](https://github.com/googleapis/nodejs-tasks/pull/158))
- fix(deps): update dependency google-gax to ^0.23.0 ([#154](https://github.com/googleapis/nodejs-tasks/pull/154))
- fix(deps): update dependency google-gax to ^0.22.0 ([#122](https://github.com/googleapis/nodejs-tasks/pull/122))

### Documentation
- fix(docs): remove unused long running operations types
- samples: add queue create and delete samples ([#142](https://github.com/googleapis/nodejs-tasks/pull/142))
- docs: update readme badges ([#133](https://github.com/googleapis/nodejs-tasks/pull/133))
- docs(samples): updated samples code to use async await ([#129](https://github.com/googleapis/nodejs-tasks/pull/129))
- update tasks samples to support new api version ([#83](https://github.com/googleapis/nodejs-tasks/pull/83))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#159](https://github.com/googleapis/nodejs-tasks/pull/159))
- build: check broken links in generated docs ([#151](https://github.com/googleapis/nodejs-tasks/pull/151))
- chore(build): inject yoshi automation key ([#149](https://github.com/googleapis/nodejs-tasks/pull/149))
- chore: update nyc and eslint configs ([#148](https://github.com/googleapis/nodejs-tasks/pull/148))
- chore: fix publish.sh permission +x ([#146](https://github.com/googleapis/nodejs-tasks/pull/146))
- fix(build): fix Kokoro release script ([#145](https://github.com/googleapis/nodejs-tasks/pull/145))
- build: add Kokoro configs for autorelease ([#144](https://github.com/googleapis/nodejs-tasks/pull/144))
- chore: always nyc report before calling codecov ([#139](https://github.com/googleapis/nodejs-tasks/pull/139))
- chore: nyc ignore build/test by default ([#138](https://github.com/googleapis/nodejs-tasks/pull/138))
- chore: clean up usage of prettier and eslint ([#137](https://github.com/googleapis/nodejs-tasks/pull/137))
- chore: update license file ([#135](https://github.com/googleapis/nodejs-tasks/pull/135))
- fix(build): fix system key decryption ([#131](https://github.com/googleapis/nodejs-tasks/pull/131))
- chore: add synth.metadata
- refactor(samples): convert sample tests from ava to mocha ([#126](https://github.com/googleapis/nodejs-tasks/pull/126))
- chore: update eslintignore config ([#121](https://github.com/googleapis/nodejs-tasks/pull/121))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#119](https://github.com/googleapis/nodejs-tasks/pull/119))
- chore: drop contributors from multiple places ([#118](https://github.com/googleapis/nodejs-tasks/pull/118))
- chore: use latest npm on Windows ([#117](https://github.com/googleapis/nodejs-tasks/pull/117))
- chore: update CircleCI config ([#115](https://github.com/googleapis/nodejs-tasks/pull/115))
- chore(deps): update dependency eslint-plugin-node to v8 ([#109](https://github.com/googleapis/nodejs-tasks/pull/109))
- chore: update issue templates ([#108](https://github.com/googleapis/nodejs-tasks/pull/108))
- chore: remove old issue template ([#104](https://github.com/googleapis/nodejs-tasks/pull/104))
- build: run tests on node11 ([#103](https://github.com/googleapis/nodejs-tasks/pull/103))
- chores(build): run codecov on continuous builds ([#99](https://github.com/googleapis/nodejs-tasks/pull/99))
- chores(build): do not collect sponge.xml from windows builds ([#100](https://github.com/googleapis/nodejs-tasks/pull/100))
- chore: update new issue template ([#98](https://github.com/googleapis/nodejs-tasks/pull/98))
- chore(deps): update dependency sinon to v7 ([#93](https://github.com/googleapis/nodejs-tasks/pull/93))
- build: fix codecov uploading on Kokoro ([#94](https://github.com/googleapis/nodejs-tasks/pull/94))
- Update kokoro config ([#90](https://github.com/googleapis/nodejs-tasks/pull/90))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#89](https://github.com/googleapis/nodejs-tasks/pull/89))
- Update kokoro config ([#87](https://github.com/googleapis/nodejs-tasks/pull/87))
- test: remove appveyor config ([#86](https://github.com/googleapis/nodejs-tasks/pull/86))
- Update the CI config ([#85](https://github.com/googleapis/nodejs-tasks/pull/85))
- Enable prefer-const in the eslint config ([#82](https://github.com/googleapis/nodejs-tasks/pull/82))
- Enable no-var in eslint ([#81](https://github.com/googleapis/nodejs-tasks/pull/81))
- chore(deps): update dependency sinon to v6.3.3 ([#79](https://github.com/googleapis/nodejs-tasks/pull/79))
- Switch to let/const ([#80](https://github.com/googleapis/nodejs-tasks/pull/80))

## v0.2.2

### Implementation Changes
This patch release reverts back to using v2beta3 as the default version. It also updates the samples.
- feat: using v2beta3 by default

### Documentation
- Update Cloud Tasks Sample ([#67](https://github.com/googleapis/nodejs-tasks/pull/67))

### Internal / Testing Changes
- fix: replace service account key with Tasks access ([#75](https://github.com/googleapis/nodejs-tasks/pull/75))

## v0.2.1

### Implementation Changes
Samples for v2beta3 is pending and they won't work for v2beta2. We're temporarily reverting back to defaulting to v2beta2 when you import the library like so:
```
const cloudTasks = require('@google-cloud/tasks');
const client = new cloudTasks.CloudTasksClient(); // v2beta2 by default
```
- feat: restoring v2beta2 by default ([#71](https://github.com/googleapis/nodejs-tasks/pull/71))

### Dependencies
v0.20.0 fixes an issue with semver.
- bump google-gax 0.20.0 ([#69](https://github.com/googleapis/nodejs-tasks/pull/69))

### Documentation
- add namespace to fix some 404s in doc ([#66](https://github.com/googleapis/nodejs-tasks/pull/66))

### Internal / Testing Changes
- Update CI config ([#65](https://github.com/googleapis/nodejs-tasks/pull/65))

## v0.2.0

### New Features
- v2beta3 support for Node.js (#62)

### Internal / Testing Changes
- Retry npm install in CI (#63)

## v0.1.1

### Minor updates
- fix(deps): update dependency google-gax to ^0.19.0 (#49)
- fix(deps): update dependency google-gax to ^0.18.0 (#41)
- Re-generate library using /synth.py (#55)

### Docs
- docs: update pull queue command (#30)
- docs: updated gcloud command (#29)
- Add Tasks Samples and Tests (#14)

### Build & Test updates
- Update the CI config (#52)
- chore(deps): update dependency nyc to v13 (#53)
- chore: update CircleCI config
- chore(deps): update dependency eslint-config-prettier to v3 (#48)
- chore: do not use npm ci (#47)
- chore: ignore package-lock.json (#45)
- chore: update renovate config (#43)
- remove that whitespace (#42)
- chore(deps): lock file maintenance (#40)
- chore: move mocha options to mocha.opts (#39)
- Re-generate library using /synth.py (#38)
- Re-generate library using /synth.py (#35)
- chore: add node templates to synth.py (#36)
- fix: samples to require node>=8 (#37)
- chore(deps): lock file maintenance (#34)
- chore(deps): update dependency eslint-plugin-node to v7 (#32)
- test: use strictEqual in tests (#33)
- chore(deps): lock file maintenance (#31)
- Upgrade repo-tools and regenerate scaffolding. (#27)
- chore(deps): lock file maintenance (#25)
- chore(deps): lock file maintenance (#24)
- chore(deps): lock file maintenance (#23)
- fix(deps): update dependency yargs to v12 (#22)
- fix: update dependencies, run synth (#20)
- Configure Renovate (#15)
