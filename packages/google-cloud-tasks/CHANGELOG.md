# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-tasks?activeTab=versions

### [2.3.4](https://www.github.com/googleapis/nodejs-tasks/compare/v2.3.3...v2.3.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#543](https://www.github.com/googleapis/nodejs-tasks/issues/543)) ([d1a715d](https://www.github.com/googleapis/nodejs-tasks/commit/d1a715d92e0136b1840798c2e122e165201715cd))

### [2.3.3](https://www.github.com/googleapis/nodejs-tasks/compare/v2.3.2...v2.3.3) (2021-06-30)


### Bug Fixes

* make request optional in all cases ([#539](https://www.github.com/googleapis/nodejs-tasks/issues/539)) ([7c50042](https://www.github.com/googleapis/nodejs-tasks/commit/7c50042bca636dddc0e4407ef1d33ac01f1413da))

### [2.3.2](https://www.github.com/googleapis/nodejs-tasks/compare/v2.3.1...v2.3.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#529](https://www.github.com/googleapis/nodejs-tasks/issues/529)) ([760c204](https://www.github.com/googleapis/nodejs-tasks/commit/760c2043f9bccb0d2787e83dd08ace942e6b10fd))

### [2.3.1](https://www.github.com/googleapis/nodejs-tasks/compare/v2.3.0...v2.3.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#519](https://www.github.com/googleapis/nodejs-tasks/issues/519)) ([8cee43a](https://www.github.com/googleapis/nodejs-tasks/commit/8cee43a5ffa7df38d809fac087454b1c6d848d53))
* use require() to load JSON protos ([#522](https://www.github.com/googleapis/nodejs-tasks/issues/522)) ([3c367be](https://www.github.com/googleapis/nodejs-tasks/commit/3c367bed5218655dfa50adfed3eb655d2d632d31))

## [2.3.0](https://www.github.com/googleapis/nodejs-tasks/compare/v2.2.0...v2.3.0) (2021-01-22)


### Features

* introducing fields: ListQueuesRequest.read_mask, GetQueueRequest .read_mask, Queue.task_ttl, Queue.tombstone_ttl, Queue.stats and introducing messages: QueueStats ([#499](https://www.github.com/googleapis/nodejs-tasks/issues/499)) ([d04ef73](https://www.github.com/googleapis/nodejs-tasks/commit/d04ef7311ac26ea17f44cfbc1acb980cb78fb149))

## [2.2.0](https://www.github.com/googleapis/nodejs-tasks/compare/v2.1.3...v2.2.0) (2021-01-09)


### Features

* introduces style enumeration ([#496](https://www.github.com/googleapis/nodejs-tasks/issues/496)) ([680f1dc](https://www.github.com/googleapis/nodejs-tasks/commit/680f1dcd269d25247a54157108c524f8946dc624))


### Bug Fixes

* **samples:** remove unused variables ([#492](https://www.github.com/googleapis/nodejs-tasks/issues/492)) ([81c4b4e](https://www.github.com/googleapis/nodejs-tasks/commit/81c4b4ece21eb99cec582d3256192de6c402d771))

### [2.1.3](https://www.github.com/googleapis/nodejs-tasks/compare/v2.1.2...v2.1.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([6abe685](https://www.github.com/googleapis/nodejs-tasks/commit/6abe6853909b5c897b80854eaa5a7f8b1da26e0b))
* do not modify options object, use defaultScopes ([#484](https://www.github.com/googleapis/nodejs-tasks/issues/484)) ([039becb](https://www.github.com/googleapis/nodejs-tasks/commit/039becb02c12ee0911d536edcfb796664c4b6525))

### [2.1.2](https://www.github.com/googleapis/nodejs-tasks/compare/v2.1.1...v2.1.2) (2020-10-27)


### Bug Fixes

* **samples:** region tag collided with tasks-api ([#476](https://www.github.com/googleapis/nodejs-tasks/issues/476)) ([fd73aa4](https://www.github.com/googleapis/nodejs-tasks/commit/fd73aa473e60dc9624b7615242099a2bd056f61b))

### [2.1.1](https://www.github.com/googleapis/nodejs-tasks/compare/v2.1.0...v2.1.1) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#460](https://www.github.com/googleapis/nodejs-tasks/issues/460)) ([7d24cda](https://www.github.com/googleapis/nodejs-tasks/commit/7d24cda00f73717b693a907c8bb09cbec864e024))

## [2.1.0](https://www.github.com/googleapis/nodejs-tasks/compare/v2.0.1...v2.1.0) (2020-07-06)


### Features

* introducing field Queue.type docs: fixing typos and minor updates ([#426](https://www.github.com/googleapis/nodejs-tasks/issues/426)) ([d0c538c](https://www.github.com/googleapis/nodejs-tasks/commit/d0c538cca9e110d9af0b4a9116e230ac983869a6))


### Bug Fixes

* update node issue template ([#427](https://www.github.com/googleapis/nodejs-tasks/issues/427)) ([43a97a5](https://www.github.com/googleapis/nodejs-tasks/commit/43a97a56320b4c5486e5dc349d13b4dd709678e3))

### [2.0.1](https://www.github.com/googleapis/nodejs-tasks/compare/v2.0.0...v2.0.1) (2020-06-12)


### Bug Fixes

* handle fallback option properly ([#425](https://www.github.com/googleapis/nodejs-tasks/issues/425)) ([0d4e8c9](https://www.github.com/googleapis/nodejs-tasks/commit/0d4e8c90f265d1275b6844eb91251eefc8e991be))
* regen protos and tests, formatting ([#413](https://www.github.com/googleapis/nodejs-tasks/issues/413)) ([b05145e](https://www.github.com/googleapis/nodejs-tasks/commit/b05145eacbee28c7ca7f801f1c250269a3ab91b2))
* remove eslint, update gax, fix generated protos, run the generator ([#400](https://www.github.com/googleapis/nodejs-tasks/issues/400)) ([45a3425](https://www.github.com/googleapis/nodejs-tasks/commit/45a3425f008286bc81fc577a1eb7ba8e625c62c0))
* remove unused files from package ([#404](https://www.github.com/googleapis/nodejs-tasks/issues/404)) ([803bc49](https://www.github.com/googleapis/nodejs-tasks/commit/803bc499ca3b36955bbba009b072ee59660ef3de))
* synth.py clean up for multiple version ([#415](https://www.github.com/googleapis/nodejs-tasks/issues/415)) ([b860452](https://www.github.com/googleapis/nodejs-tasks/commit/b860452e4e8c164bc118273c4e615f3ad91845b5))

## [2.0.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.9.0...v2.0.0) (2020-04-07)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

New feature: methods with pagination now support async iteration.

### Features

* drop node8 support, support for async iterators ([#388](https://www.github.com/googleapis/nodejs-tasks/issues/388)) ([2b759e1](https://www.github.com/googleapis/nodejs-tasks/commit/2b759e17adf636464fa67fbd99fe87a65cac317f))


### Bug Fixes

* export explicit version in protos.js ([#393](https://www.github.com/googleapis/nodejs-tasks/issues/393)) ([5b8c80d](https://www.github.com/googleapis/nodejs-tasks/commit/5b8c80d32f7c081887da203b833a2ee38ae69c38))

## [1.9.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.8.0...v1.9.0) (2020-03-06)


### Features

* deferred client initialization ([#370](https://www.github.com/googleapis/nodejs-tasks/issues/370)) ([05fdd69](https://www.github.com/googleapis/nodejs-tasks/commit/05fdd6987c916da04c62193fe0f1081c23b85cbe))

## [1.8.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.7.3...v1.8.0) (2020-02-29)


### Features

* add StackdriverLoggingConfig field to Cloud Tasks v2 API ([db2397a](https://www.github.com/googleapis/nodejs-tasks/commit/db2397a5efc59002a96a80a787ee2d405b1f4ce5))
* export protos in src/index.ts ([a27e213](https://www.github.com/googleapis/nodejs-tasks/commit/a27e2135a359519ca7d17fae3f28718c42b5acf2))

### [1.7.3](https://www.github.com/googleapis/nodejs-tasks/compare/v1.7.2...v1.7.3) (2020-02-07)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([ba267cc](https://www.github.com/googleapis/nodejs-tasks/commit/ba267ccc5c71cea747ec1fbdb9396a880fa2d902))

### [1.7.2](https://www.github.com/googleapis/nodejs-tasks/compare/v1.7.1...v1.7.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([58aa504](https://www.github.com/googleapis/nodejs-tasks/commit/58aa504d6d2076a0dc8c08d4c6b2b397f09cb3de))

### [1.7.1](https://www.github.com/googleapis/nodejs-tasks/compare/v1.7.0...v1.7.1) (2020-01-09)


### Bug Fixes

* proper routing headers ([8a63747](https://www.github.com/googleapis/nodejs-tasks/commit/8a63747837341b10c3df4e5459387e4a8e7b02b5))

## [1.7.0](https://www.github.com/googleapis/nodejs-tasks/compare/v1.6.1...v1.7.0) (2020-01-05)


### Features

* move library to typescript code generation ([#317](https://www.github.com/googleapis/nodejs-tasks/issues/317)) ([7dda287](https://www.github.com/googleapis/nodejs-tasks/commit/7dda2873c93295ccf19c6dc66daf4625cbe115bb))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([124594b](https://www.github.com/googleapis/nodejs-tasks/commit/124594b3f00287c3a6f33c158aa4117dd03c52ca))

### [1.6.1](https://www.github.com/googleapis/nodejs-tasks/compare/v1.6.0...v1.6.1) (2019-11-18)


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#308](https://www.github.com/googleapis/nodejs-tasks/issues/308)) ([90d3a71](https://www.github.com/googleapis/nodejs-tasks/commit/90d3a71ab67648fed4aeec90178e2aceba45194d))

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
