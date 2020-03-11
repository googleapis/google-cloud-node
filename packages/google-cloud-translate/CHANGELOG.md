# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-translate?activeTab=versions

## [5.3.0](https://www.github.com/googleapis/nodejs-translate/compare/v5.2.0...v5.3.0) (2020-03-06)


### Features

* deferred client initialization ([#460](https://www.github.com/googleapis/nodejs-translate/issues/460)) ([0ed76f4](https://www.github.com/googleapis/nodejs-translate/commit/0ed76f4e83528c2d087a26598535f5daf5a08444))

## [5.2.0](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.6...v5.2.0) (2020-02-27)


### Features

* export protos in src/index.ts ([#451](https://www.github.com/googleapis/nodejs-translate/issues/451)) ([a70079e](https://www.github.com/googleapis/nodejs-translate/commit/a70079ea24fe36d7efdd7d028a55fd6acbd6b3e1))

### [5.1.6](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.5...v5.1.6) (2020-02-07)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([40c90fa](https://www.github.com/googleapis/nodejs-translate/commit/40c90fa099ef0bd995b5923cd35ba4ac0f9344e1))

### [5.1.5](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.4...v5.1.5) (2020-02-04)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([19891e0](https://www.github.com/googleapis/nodejs-translate/commit/19891e07b2f1aaad5552999f1701dc81b5447754))

### [5.1.4](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.3...v5.1.4) (2020-01-04)


### Bug Fixes

* better client close(), update .nycrc ([f476326](https://www.github.com/googleapis/nodejs-translate/commit/f476326b19e41253ba054cdfa5b7fcdfcb8dc1b2))
* increase timeout from 20s to 60s ([#411](https://www.github.com/googleapis/nodejs-translate/issues/411)) ([40241fe](https://www.github.com/googleapis/nodejs-translate/commit/40241fea93a2315eae8344c58a9ffed87392eda4))
* suppress unhandled promise rejection errors ([#417](https://www.github.com/googleapis/nodejs-translate/issues/417)) ([8eb6558](https://www.github.com/googleapis/nodejs-translate/commit/8eb655862b2d9c92f28f5b96eb1158dce3af704c))

### [5.1.3](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.2...v5.1.3) (2019-12-16)


### Bug Fixes

* refactored request call to supress unhandled promise rejection ([#406](https://www.github.com/googleapis/nodejs-translate/issues/406)) ([19fc9c7](https://www.github.com/googleapis/nodejs-translate/commit/19fc9c7d24e5b8d16f32d80023b81294e02d34d6))
* removed display_name from sample ([f518b1a](https://www.github.com/googleapis/nodejs-translate/commit/f518b1a9b405626e058f9f143d3e8929af1401db))
* update translate_create_glossary.js ([#403](https://www.github.com/googleapis/nodejs-translate/issues/403)) ([aa10fc7](https://www.github.com/googleapis/nodejs-translate/commit/aa10fc7ac9299895b7e87ebec574e27871e0bd1d))

### [5.1.2](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.1...v5.1.2) (2019-12-11)


### Bug Fixes

* make operationsClient and service stub public ([7ac1252](https://www.github.com/googleapis/nodejs-translate/commit/7ac12522ef96d6a37c15ca7847e6e872316c8a9d))

### [5.1.1](https://www.github.com/googleapis/nodejs-translate/compare/v5.1.0...v5.1.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([53f3cff](https://www.github.com/googleapis/nodejs-translate/commit/53f3cff821869347a8d34f3b0561d3b8158d171d))

## [5.1.0](https://www.github.com/googleapis/nodejs-translate/compare/v5.0.2...v5.1.0) (2019-11-22)


### Features

* convert v3beta1 to TypeScript ([#389](https://www.github.com/googleapis/nodejs-translate/issues/389)) ([0a88c63](https://www.github.com/googleapis/nodejs-translate/commit/0a88c63a1cb0564958f8b2f9d9d11d504284a229))


### Bug Fixes

* get autosynth working again ([#387](https://www.github.com/googleapis/nodejs-translate/issues/387)) ([c226e58](https://www.github.com/googleapis/nodejs-translate/commit/c226e5811f898ad424a6bf85af197559bf668b25))
* **deps:** update dependency yargs to v15 ([#386](https://www.github.com/googleapis/nodejs-translate/issues/386)) ([e87a80f](https://www.github.com/googleapis/nodejs-translate/commit/e87a80f201588b779728dd29c5dae96fb7055dbf))
* **docs:** snippets are now replaced in jsdoc comments ([#381](https://www.github.com/googleapis/nodejs-translate/issues/381)) ([b14f7d4](https://www.github.com/googleapis/nodejs-translate/commit/b14f7d42b961400dfe9dec7bc3fff3a7688c0baa))

### [5.0.2](https://www.github.com/googleapis/nodejs-translate/compare/v5.0.1...v5.0.2) (2019-11-08)


### Bug Fixes

* region tag ([#367](https://www.github.com/googleapis/nodejs-translate/issues/367)) ([13e75d2](https://www.github.com/googleapis/nodejs-translate/commit/13e75d2680e3c4f09e07b19cce650a91b212603f))

### [5.0.1](https://www.github.com/googleapis/nodejs-translate/compare/v5.0.0...v5.0.1) (2019-10-28)


### Bug Fixes

* package.json in build/ caused bad publish ([#361](https://www.github.com/googleapis/nodejs-translate/issues/361)) ([e9c8955](https://www.github.com/googleapis/nodejs-translate/commit/e9c8955f68d18562cab50b8d0500dd62005887f8))

## [5.0.0](https://www.github.com/googleapis/nodejs-translate/compare/v4.2.1...v5.0.0) (2019-10-28)


### ⚠ BREAKING CHANGES

* this significantly changes TypeScript types and API surface from the v2 API. Reference samples/ for help making the migration from v2 to v3.

### Features

* v3 is now the default API surface ([#355](https://www.github.com/googleapis/nodejs-translate/issues/355)) ([91169b4](https://www.github.com/googleapis/nodejs-translate/commit/91169b4b141289a6890e1da1ba04765fbfdfd617))


### Bug Fixes

* remove extra brace in snippet ([#347](https://www.github.com/googleapis/nodejs-translate/issues/347)) ([6c1e95b](https://www.github.com/googleapis/nodejs-translate/commit/6c1e95bd99ec84c48e73b85203562b5f1cfa46d9))

### [4.2.1](https://www.github.com/googleapis/nodejs-translate/compare/v4.2.0...v4.2.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#345](https://www.github.com/googleapis/nodejs-translate/issues/345)) ([2c89fd0](https://www.github.com/googleapis/nodejs-translate/commit/2c89fd090d6557d0387c442eaef59069371e4095))

## [4.2.0](https://www.github.com/googleapis/nodejs-translate/compare/v4.1.3...v4.2.0) (2019-10-10)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([3d6b18d](https://www.github.com/googleapis/nodejs-translate/commit/3d6b18d))
* **deps:** use the latest extend ([#316](https://www.github.com/googleapis/nodejs-translate/issues/316)) ([f7ca873](https://www.github.com/googleapis/nodejs-translate/commit/f7ca873))
* **docs:** stop linking reference documents to anchor ([f935f91](https://www.github.com/googleapis/nodejs-translate/commit/f935f91))
* **samples:** use us-central1 region (not global) ([#322](https://www.github.com/googleapis/nodejs-translate/issues/322)) ([8500423](https://www.github.com/googleapis/nodejs-translate/commit/8500423))
* add filter to method signature ([f6fb81e](https://www.github.com/googleapis/nodejs-translate/commit/f6fb81e))
* hybrid glossaries  ([#338](https://www.github.com/googleapis/nodejs-translate/issues/338)) ([d37671a](https://www.github.com/googleapis/nodejs-translate/commit/d37671a))
* hybrid glossary tutorial region tag ([#334](https://www.github.com/googleapis/nodejs-translate/issues/334)) ([d61836d](https://www.github.com/googleapis/nodejs-translate/commit/d61836d))
* use compatible version of google-gax ([620304e](https://www.github.com/googleapis/nodejs-translate/commit/620304e))
* use correct version for x-goog-api-client header ([50950c9](https://www.github.com/googleapis/nodejs-translate/commit/50950c9))


### Features

* add label support ([#331](https://www.github.com/googleapis/nodejs-translate/issues/331)) ([c912f71](https://www.github.com/googleapis/nodejs-translate/commit/c912f71))
* load protos from JSON, grpc-fallback support ([423c336](https://www.github.com/googleapis/nodejs-translate/commit/423c336))
* samples for hybrid glossaries tutorial ([#327](https://www.github.com/googleapis/nodejs-translate/issues/327)) ([96ec12f](https://www.github.com/googleapis/nodejs-translate/commit/96ec12f))

### [4.1.3](https://www.github.com/googleapis/nodejs-translate/compare/v4.1.2...v4.1.3) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([#313](https://www.github.com/googleapis/nodejs-translate/issues/313)) ([01afc09](https://www.github.com/googleapis/nodejs-translate/commit/01afc09))

### [4.1.2](https://www.github.com/googleapis/nodejs-translate/compare/v4.1.1...v4.1.2) (2019-07-23)


### Bug Fixes

* **deps:** drop unused dependency lodash.merge, related to sec vulnerability (fixes [#301](https://www.github.com/googleapis/nodejs-translate/issues/301)) ([#302](https://www.github.com/googleapis/nodejs-translate/issues/302)) ([018efd4](https://www.github.com/googleapis/nodejs-translate/commit/018efd4))

### [4.1.1](https://www.github.com/googleapis/nodejs-translate/compare/v4.1.0...v4.1.1) (2019-06-29)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#298](https://www.github.com/googleapis/nodejs-translate/issues/298)) ([d49a68e](https://www.github.com/googleapis/nodejs-translate/commit/d49a68e))

## [4.1.0](https://www.github.com/googleapis/nodejs-translate/compare/v4.0.1...v4.1.0) (2019-06-14)


### Bug Fixes

* **deps:** update dependency is-html to v2 ([#280](https://www.github.com/googleapis/nodejs-translate/issues/280)) ([00187c9](https://www.github.com/googleapis/nodejs-translate/commit/00187c9))
* **deps:** update dependency teeny-request to v4 ([#292](https://www.github.com/googleapis/nodejs-translate/issues/292)) ([5d608f2](https://www.github.com/googleapis/nodejs-translate/commit/5d608f2))
* **docs:** move to new client docs URL ([#294](https://www.github.com/googleapis/nodejs-translate/issues/294)) ([ecb6cab](https://www.github.com/googleapis/nodejs-translate/commit/ecb6cab))
* **types:** use Metadata types for apiResponse ([#277](https://www.github.com/googleapis/nodejs-translate/issues/277)) ([cf7899f](https://www.github.com/googleapis/nodejs-translate/commit/cf7899f))


### Features

* support apiEndpoint override ([#285](https://www.github.com/googleapis/nodejs-translate/issues/285)) ([dc8fe12](https://www.github.com/googleapis/nodejs-translate/commit/dc8fe12))
* support apiEndpoint override in client constructor ([#289](https://www.github.com/googleapis/nodejs-translate/issues/289)) ([35f1229](https://www.github.com/googleapis/nodejs-translate/commit/35f1229))

### [4.0.1](https://www.github.com/googleapis/nodejs-translate/compare/v4.0.0...v4.0.1) (2019-05-20)


### Bug Fixes

* **deps:** update dependency @google-cloud/automl to v1 ([#267](https://www.github.com/googleapis/nodejs-translate/issues/267)) ([180d8f6](https://www.github.com/googleapis/nodejs-translate/commit/180d8f6))

## [4.0.0](https://www.github.com/googleapis/nodejs-translate/compare/v3.0.1...v4.0.0) (2019-05-13)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v1 ([#262](https://www.github.com/googleapis/nodejs-translate/issues/262)) ([269018b](https://www.github.com/googleapis/nodejs-translate/commit/269018b))
* **deps:** update dependency google-gax to v1 ([#263](https://www.github.com/googleapis/nodejs-translate/issues/263)) ([95efe30](https://www.github.com/googleapis/nodejs-translate/commit/95efe30))
* DEADLINE_EXCEEDED is idempotent ([#264](https://www.github.com/googleapis/nodejs-translate/issues/264)) ([1c222f8](https://www.github.com/googleapis/nodejs-translate/commit/1c222f8))
* DEADLINE_EXCEEDED is no longer retried ([#259](https://www.github.com/googleapis/nodejs-translate/issues/259)) ([4ea044e](https://www.github.com/googleapis/nodejs-translate/commit/4ea044e))
* **deps:** update dependency @google-cloud/promisify to v1 ([#253](https://www.github.com/googleapis/nodejs-translate/issues/253)) ([672f6da](https://www.github.com/googleapis/nodejs-translate/commit/672f6da))
* **deps:** update dependency google-gax to ^0.26.0 ([#248](https://www.github.com/googleapis/nodejs-translate/issues/248)) ([4412bbf](https://www.github.com/googleapis/nodejs-translate/commit/4412bbf))


### Build System

* upgrade engines field to >=8.10.0 ([#249](https://www.github.com/googleapis/nodejs-translate/issues/249)) ([88ec9e2](https://www.github.com/googleapis/nodejs-translate/commit/88ec9e2))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#249)

## v3.0.1

04-09-2019 12:19 PDT

### Fixes
- fix(build): include build/protos in npm package ([#241](https://github.com/googleapis/nodejs-translate/pull/241))

### Dependencies
- fix(deps): update dependency @google-cloud/automl to ^0.2.0 ([#236](https://github.com/googleapis/nodejs-translate/pull/236))
- fix(deps): update dependency arrify to v2
- fix(deps): update dependency @google-cloud/common to ^0.32.0

### Documentation / Samples
- Change region tag to translate_translate_text_with_glossary_beta ([#240](https://github.com/googleapis/nodejs-translate/pull/240))
- docs(samples): Add samples for translate v3 beta ([#234](https://github.com/googleapis/nodejs-translate/pull/234))

### Internal / Testing Changes
- refactor: use execSync for tests ([#237](https://github.com/googleapis/nodejs-translate/pull/237))

## v3.0.0

BREAKING CHANGE: 

This release introduces the `grpc` dependency.

In some environments, this will trigger a native compilation.

### Implementation Changes

### New Features

- feat: add version v3beta1 ([#232](https://github.com/googleapis/nodejs-translate/pull/232))

### Dependencies

- chore(deps): update dependency typescript to ~3.4.0 ([#231](https://github.com/googleapis/nodejs-translate/pull/231))

### Documentation

### Internal / Testing Changes

- chore: publish to npm using wombat ([#227](https://github.com/googleapis/nodejs-translate/pull/227))
- build: use per-repo npm publish token ([#225](https://github.com/googleapis/nodejs-translate/pull/225))

## v2.1.4

03-12-2019 12:30 PDT

This patch release has a few dependency bumps and doc updates.  Enjoy!

### Dependencies
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#217](https://github.com/googleapis/nodejs-translate/pull/217))
- fix(deps): update dependency yargs to v13 ([#215](https://github.com/googleapis/nodejs-translate/pull/215))
- fix(deps): update dependency @google-cloud/common to ^0.31.0 ([#209](https://github.com/googleapis/nodejs-translate/pull/209))

### Documentation
- docs: update links in contrib guide ([#218](https://github.com/googleapis/nodejs-translate/pull/218))
- docs: update contributing path in README ([#212](https://github.com/googleapis/nodejs-translate/pull/212))
- docs: move CONTRIBUTING.md to root ([#211](https://github.com/googleapis/nodejs-translate/pull/211))
- docs: add lint/fix example to contributing guide ([#208](https://github.com/googleapis/nodejs-translate/pull/208))
- docs: brand issue - Translate API => Cloud Translation API ([#196](https://github.com/googleapis/nodejs-translate/pull/196))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#222](https://github.com/googleapis/nodejs-translate/pull/222))
- build: use node10 to run samples-test, system-test etc ([#221](https://github.com/googleapis/nodejs-translate/pull/221))
- build: update release configuration
- chore(deps): update dependency mocha to v6 ([#219](https://github.com/googleapis/nodejs-translate/pull/219))
- build: use linkinator for docs test ([#216](https://github.com/googleapis/nodejs-translate/pull/216))
- build: create docs test npm scripts ([#214](https://github.com/googleapis/nodejs-translate/pull/214))
- build: test using @grpc/grpc-js in CI ([#213](https://github.com/googleapis/nodejs-translate/pull/213))
- chore(deps): update dependency eslint-config-prettier to v4 ([#206](https://github.com/googleapis/nodejs-translate/pull/206))
- build: ignore googleapis.com in doc link check ([#204](https://github.com/googleapis/nodejs-translate/pull/204))
- build: check broken links in generated docs ([#202](https://github.com/googleapis/nodejs-translate/pull/202))
- refactor: modernize sample tests ([#199](https://github.com/googleapis/nodejs-translate/pull/199))
- chore(build): inject yoshi automation key ([#195](https://github.com/googleapis/nodejs-translate/pull/195))
- chore: update nyc and eslint configs ([#194](https://github.com/googleapis/nodejs-translate/pull/194))
- chore: fix publish.sh permission +x ([#192](https://github.com/googleapis/nodejs-translate/pull/192))
- fix(build): fix Kokoro release script ([#191](https://github.com/googleapis/nodejs-translate/pull/191))
- build: add Kokoro configs for autorelease ([#190](https://github.com/googleapis/nodejs-translate/pull/190))

## v2.1.3

12-06-2018 17:12 PST

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#176](https://github.com/googleapis/nodejs-translate/pull/176))
- chore(deps): update dependency typescript to ~3.2.0 ([#177](https://github.com/googleapis/nodejs-translate/pull/177))
- chore(deps): update dependency gts to ^0.9.0 ([#170](https://github.com/googleapis/nodejs-translate/pull/170))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#168](https://github.com/googleapis/nodejs-translate/pull/168))
- chore(deps): update dependency @types/is to v0.0.21 ([#166](https://github.com/googleapis/nodejs-translate/pull/166))
- chore(deps): update dependency eslint-plugin-node to v8 ([#157](https://github.com/googleapis/nodejs-translate/pull/157))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#149](https://github.com/googleapis/nodejs-translate/pull/149))
- chore(deps): update dependency sinon to v7 ([#142](https://github.com/googleapis/nodejs-translate/pull/142))
- fix(deps): update dependency @google-cloud/translate to v2 ([#137](https://github.com/googleapis/nodejs-translate/pull/137))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#139](https://github.com/googleapis/nodejs-translate/pull/139))
- chore(deps): update dependency typescript to ~3.1.0 ([#136](https://github.com/googleapis/nodejs-translate/pull/136))

### Documentation
- fix(docs): place doc comment above the last overload ([#186](https://github.com/googleapis/nodejs-translate/pull/186))
- docs: update readme badges ([#180](https://github.com/googleapis/nodejs-translate/pull/180))
- docs(samples): updated samples code to use async await ([#154](https://github.com/googleapis/nodejs-translate/pull/154))

### Internal / Testing Changes
- chore: always nyc report before calling codecov ([#185](https://github.com/googleapis/nodejs-translate/pull/185))
- chore: nyc ignore build/test by default ([#184](https://github.com/googleapis/nodejs-translate/pull/184))
- chore: update license file ([#182](https://github.com/googleapis/nodejs-translate/pull/182))
- fix(build): fix system key decryption ([#178](https://github.com/googleapis/nodejs-translate/pull/178))
- chore: add a synth.metadata
- refactor(samples): convert sample tests from ava to mocha ([#171](https://github.com/googleapis/nodejs-translate/pull/171))
- chore: update eslintignore config ([#169](https://github.com/googleapis/nodejs-translate/pull/169))
- chore: drop contributors from multiple places ([#167](https://github.com/googleapis/nodejs-translate/pull/167))
- chore: use latest npm on Windows ([#165](https://github.com/googleapis/nodejs-translate/pull/165))
- chore(build): ignore build dir with eslint
- chore: update CircleCI config ([#163](https://github.com/googleapis/nodejs-translate/pull/163))
- fix: fix the sample tests ([#156](https://github.com/googleapis/nodejs-translate/pull/156))
- chore: update issue templates ([#155](https://github.com/googleapis/nodejs-translate/pull/155))
- chore: remove old issue template ([#151](https://github.com/googleapis/nodejs-translate/pull/151))
- build: run tests on node11 ([#150](https://github.com/googleapis/nodejs-translate/pull/150))
- chores(build): do not collect sponge.xml from windows builds ([#148](https://github.com/googleapis/nodejs-translate/pull/148))
- chores(build): run codecov on continuous builds ([#147](https://github.com/googleapis/nodejs-translate/pull/147))
- chore: update new issue template ([#146](https://github.com/googleapis/nodejs-translate/pull/146))
- build: fix codecov uploading on Kokoro ([#143](https://github.com/googleapis/nodejs-translate/pull/143))
- Update kokoro config ([#140](https://github.com/googleapis/nodejs-translate/pull/140))
- Update CI config ([#135](https://github.com/googleapis/nodejs-translate/pull/135))
- samples: fixed incorrect end tag ([#134](https://github.com/googleapis/nodejs-translate/pull/134))
- Update CI config ([#130](https://github.com/googleapis/nodejs-translate/pull/130))
- Translate Automl samples ([#131](https://github.com/googleapis/nodejs-translate/pull/131))
- Don't publish sourcemaps ([#132](https://github.com/googleapis/nodejs-translate/pull/132))
- test: remove appveyor config ([#129](https://github.com/googleapis/nodejs-translate/pull/129))
- build: update CI configs ([#127](https://github.com/googleapis/nodejs-translate/pull/127))

## v2.1.2

### Bug fixes
- fix: Improve typescript types ([#124](https://github.com/googleapis/nodejs-translate/pull/124))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#122](https://github.com/googleapis/nodejs-translate/pull/122))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#117](https://github.com/googleapis/nodejs-translate/pull/117))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#123](https://github.com/googleapis/nodejs-translate/pull/123))
- Enable no-var in eslint ([#121](https://github.com/googleapis/nodejs-translate/pull/121))
- Update CI config ([#118](https://github.com/googleapis/nodejs-translate/pull/118))
- Enable noImplicitThis in tsconfig ([#115](https://github.com/googleapis/nodejs-translate/pull/115))

## v2.1.1

### Internal / Testing Changes
- Retry npm install in CI (#113)
- fix: set request module (#112)
- Re-generate library using /synth.py (#111)
- fix: run the linter (#110)
- fix: always run all system-tests (#109)

## v2.1.0

### Implementation Changes
- feat: Use small request dependency (#98)

### Documentation
- doc: use new import syntax in samples (#100)

### Internal / Testing Changes
- Re-generate library using /synth.py (#104)
- chore(deps): update dependency nyc to v13 (#103)
- Update the CI config (#102)
- chore: update CircleCI config
- chore(deps): update dependency eslint-config-prettier to v3 (#95)
- chore: run repo tools (#96)

## v2.0.0

**This release has breaking changes**.

Previous versions of the API would allow for creating new Translate objects directly from the imported module. To provide consistency with es modules, there are no default exports.

#### Old code
```js
const translate = require('@google-cloud/translate')({
  keyFilename: '...'
});
```

#### New code
```js
const {Translate} = require('@google-cloud/translate');
const translate = new Translate({
  keyFilename: '...'
});
```

### More Breaking changes
- fix: drop support for node.js 4.x and 9.x (#64)

### New Features
- feat: convert to TypeScript (#63)

### Documentation
- docs: fix link (#72)
- docs: fix small typos (#71)

### Internal / Testing Changes
- fix: add a synth file (#93)
- chore: add better types (#92)
- chore: ignore package-lock.json (#91)
- chore: use promisify and upgrade common (#90)
- chore: update renovate config (#86)
- chore: remove propprop, clean up (#87)
- remove that whitespace (#85)
- chore(deps): update dependency typescript to v3 (#82)
- chore: move mocha options to mocha.opts (#78)
- chore: assert.deelEqual => assert.deepStrictEqual (#81)
- chore: enable linting and arrow functions (#80)
- chore: require node 8 for samples (#79)
- chore(deps): update dependency gts to ^0.8.0 (#73)
- chore(deps): update dependency eslint-plugin-node to v7 (#75)
- fix(deps): update dependency yargs to v12 (#59)
- chore(deps): update dependency sinon to v6.0.1 (#57)
- Configure Renovate (#52)
- refactor: drop repo-tool as an exec wrapper (#56)
- fix: update linking for samples (#54)
- chore(package): update eslint to version 5.0.0 (#53)
- chore: the ultimate fix for repo-tools EPERM (#45)
- chore: update all dependencies (#50)
- fix(package): update @google-cloud/common to version 0.20.0 (#49)
- fix: update all the dependencies (#48)
- Update nyc to the latest version 🚀 (#47)
- chore: timeout for system test (#44)
- chore: test on node10 (#41)
- chore: workaround for repo-tools EPERM (#36)
- chore: setup nighty build in CircleCI (#34)
- Upgrade repo-tools and regenerate scaffolding. (#33)
- Update proxyquire to the latest version 🚀 (#29)
- Update mocha to the latest version 🚀 (#22)
- Linting per prettier@1.9.0. (#21)
