# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datastore?activeTab=versions

## [4.0.0](https://www.github.com/googleapis/nodejs-datastore/compare/v3.1.2...v4.0.0) (2019-05-15)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#402](https://www.github.com/googleapis/nodejs-datastore/issues/402)) ([547f1a1](https://www.github.com/googleapis/nodejs-datastore/commit/547f1a1))
* correct Long types import ([#358](https://www.github.com/googleapis/nodejs-datastore/issues/358)) ([dfe1def](https://www.github.com/googleapis/nodejs-datastore/commit/dfe1def))
* DEADLINE_EXCEEDED is no longer retried ([47eedf0](https://www.github.com/googleapis/nodejs-datastore/commit/47eedf0))
* DEADLINE_EXCEEDED retry code is idempotent ([#403](https://www.github.com/googleapis/nodejs-datastore/issues/403)) ([2a7c3ab](https://www.github.com/googleapis/nodejs-datastore/commit/2a7c3ab))
* **deps:** update dependency @google-cloud/projectify to v1 ([#391](https://www.github.com/googleapis/nodejs-datastore/issues/391)) ([761896b](https://www.github.com/googleapis/nodejs-datastore/commit/761896b))
* **deps:** update dependency @google-cloud/promisify to v1 ([#392](https://www.github.com/googleapis/nodejs-datastore/issues/392)) ([94a45bd](https://www.github.com/googleapis/nodejs-datastore/commit/94a45bd))
* **deps:** update dependency arrify to v2 ([2b47d10](https://www.github.com/googleapis/nodejs-datastore/commit/2b47d10))
* **deps:** update dependency google-auth-library to v4 ([#400](https://www.github.com/googleapis/nodejs-datastore/issues/400)) ([19bc787](https://www.github.com/googleapis/nodejs-datastore/commit/19bc787))
* **deps:** update dependency google-gax to ^0.26.0 ([#386](https://www.github.com/googleapis/nodejs-datastore/issues/386)) ([29b81e3](https://www.github.com/googleapis/nodejs-datastore/commit/29b81e3))
* include 'x-goog-request-params' header in requests ([#372](https://www.github.com/googleapis/nodejs-datastore/issues/372)) ([d91be05](https://www.github.com/googleapis/nodejs-datastore/commit/d91be05))
* lint ([#384](https://www.github.com/googleapis/nodejs-datastore/issues/384)) ([9a4d746](https://www.github.com/googleapis/nodejs-datastore/commit/9a4d746))
* **docs:** move ts overloads above doc string ([#356](https://www.github.com/googleapis/nodejs-datastore/issues/356)) ([a7f1123](https://www.github.com/googleapis/nodejs-datastore/commit/a7f1123))


### Build System

* upgrade engines field to >=8.10.0 ([#388](https://www.github.com/googleapis/nodejs-datastore/issues/388)) ([a8cf59f](https://www.github.com/googleapis/nodejs-datastore/commit/a8cf59f))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#388)

## v3.1.2

03-06-2019 12:24 PST

### Bug fixes
- fix: make an explicit dependency on long ([#352](https://github.com/googleapis/nodejs-datastore/pull/352))
- fix: include types in package ([#351](https://github.com/googleapis/nodejs-datastore/pull/351))
- fix: add missing package, and add install test ([#346](https://github.com/googleapis/nodejs-datastore/pull/346))

### Documentation
- docs(samples): Update datastore_transaction_retry sample to use function arguments rather than closed variables. ([#339](https://github.com/googleapis/nodejs-datastore/pull/339))

### Internal / Testing Changes
- refactor(ts): enable noImplicitAny on test/request.ts ([#343](https://github.com/googleapis/nodejs-datastore/pull/343))
- refactor(ts): enable noImplicitAny on test/query.ts ([#342](https://github.com/googleapis/nodejs-datastore/pull/342))
- build: update release configuration
- chore: update proto docs and code style
- chore(deps): update dependency mocha to v6 ([#338](https://github.com/googleapis/nodejs-datastore/pull/338))

## v3.1.1

02-18-2019 22:46 PST

### Bug fixes
- fix: include proto d.ts in the build ([#335](https://github.com/googleapis/nodejs-datastore/pull/335))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#333](https://github.com/googleapis/nodejs-datastore/pull/333))
- fix: throw on invalid credentials ([#331](https://github.com/googleapis/nodejs-datastore/pull/331))
- fix(deps): update dependency yargs to v13 ([#329](https://github.com/googleapis/nodejs-datastore/pull/329))

### Documentation
- build: use linkinator for docs test ([#332](https://github.com/googleapis/nodejs-datastore/pull/332))
- docs: update links in contrib guide ([#334](https://github.com/googleapis/nodejs-datastore/pull/334))

## v3.1.0

02-09-2019 17:57 PST

This one's coming hot with fresh new TypeScript types 🔥

### New Features
- feat: typings for gapic files ([#307](https://github.com/googleapis/nodejs-datastore/pull/307))

### Bug fixes
- fix(types): Make gaxOptions optional in Transaction.rollback() ([#310](https://github.com/googleapis/nodejs-datastore/pull/310))

### Dependencies
- fix(deps): update dependency google-auth-library to v3 ([#302](https://github.com/googleapis/nodejs-datastore/pull/302))
- fix(deps): update dependency google-gax to ^0.25.0 ([#316](https://github.com/googleapis/nodejs-datastore/pull/316))
- fix(deps): update dependency google-gax to ^0.24.0 ([#312](https://github.com/googleapis/nodejs-datastore/pull/312))

### Documentation
- docs: update contributing path in README ([#322](https://github.com/googleapis/nodejs-datastore/pull/322))
- chore: move CONTRIBUTING.md to root ([#321](https://github.com/googleapis/nodejs-datastore/pull/321))
- docs: add lint/fix example to contributing guide ([#319](https://github.com/googleapis/nodejs-datastore/pull/319))
- docs(samples): Update Datastore snippet for read only transaction
- docs(key): copy Datastore#key examples to Key ctor ([#306](https://github.com/googleapis/nodejs-datastore/pull/306))

### Internal / Testing Changes
- refactor: clean up types for tests ([#325](https://github.com/googleapis/nodejs-datastore/pull/325))
- refactor: asyncify the system test ([#324](https://github.com/googleapis/nodejs-datastore/pull/324))
- build: test using @grpc/grpc-js in CI ([#323](https://github.com/googleapis/nodejs-datastore/pull/323))
- refactor(types): enable noImplicitAny for transaction.ts & request.ts ([#305](https://github.com/googleapis/nodejs-datastore/pull/305))
- chore(deps): update dependency eslint-config-prettier to v4 ([#313](https://github.com/googleapis/nodejs-datastore/pull/313))
- build: ignore googleapis.com in doc link check ([#311](https://github.com/googleapis/nodejs-datastore/pull/311))
- chore: update year in the license headers. ([#304](https://github.com/googleapis/nodejs-datastore/pull/304))

## v3.0.1

01-15-2019 13:20 PST

### Bug fixes
- fix: ship the build directory ([#300](https://github.com/googleapis/nodejs-datastore/pull/300))

### Internal / Testing Changes
- build: check broken links in generated docs ([#292](https://github.com/googleapis/nodejs-datastore/pull/292))

## v3.0.0

01-14-2019 20:31 PST

**This release has breaking changes!** The import style of this library has changed to be consistent with [es modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/).

#### Old busted code
```js
const Datastore = require('@google-cloud/datastore')();
// or...
const Datastore = require('@google-cloud/datastore');
const ds = new Datastore();
```

#### New hot code
```js
const {Datastore} = require('@google-cloud/datastore');
const ds = new Datastore();
```

Please take care to update your imports accordingly!

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#296](https://github.com/googleapis/nodejs-datastore/pull/296))
- fix(deps): update dependency google-gax to ^0.22.0 ([#248](https://github.com/googleapis/nodejs-datastore/pull/248))
- fix(deps): update dependency concat-stream to v2 ([#290](https://github.com/googleapis/nodejs-datastore/pull/290))
- refactor: remove async module usage ([#272](https://github.com/googleapis/nodejs-datastore/pull/272))
- fix(deps): update dependency through2 to v3 ([#237](https://github.com/googleapis/nodejs-datastore/pull/237))
- chore: remove unused dependencies ([#226](https://github.com/googleapis/nodejs-datastore/pull/226))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#210](https://github.com/googleapis/nodejs-datastore/pull/210))

### Documentation
- fix(docs): fix namespace causing 404s ([#294](https://github.com/googleapis/nodejs-datastore/pull/294))
- fix(docs): remove unused long running operations types
- docs: Update doc comment showing structure of entity ([#276](https://github.com/googleapis/nodejs-datastore/pull/276))
- docs: update readme badges ([#269](https://github.com/googleapis/nodejs-datastore/pull/269))
- refactor(samples): Samples to use async/await
- docs: update auto-generated jsdoc comments ([#245](https://github.com/googleapis/nodejs-datastore/pull/245))

### Internal / Testing Changes
- refactor: sprinkle some types about ([#291](https://github.com/googleapis/nodejs-datastore/pull/291))
- chore(deps): update dependency @types/sinon to v7.0.2 ([#289](https://github.com/googleapis/nodejs-datastore/pull/289))
- chore(deps): update dependency @types/sinon to v7 ([#286](https://github.com/googleapis/nodejs-datastore/pull/286))
- refactor(ts): enable lint and fix ([#287](https://github.com/googleapis/nodejs-datastore/pull/287))
- chore(build): inject yoshi automation key ([#285](https://github.com/googleapis/nodejs-datastore/pull/285))
- chore: update nyc and eslint configs ([#284](https://github.com/googleapis/nodejs-datastore/pull/284))
- chore: fix publish.sh permission +x ([#282](https://github.com/googleapis/nodejs-datastore/pull/282))
- fix(build): fix Kokoro release script ([#281](https://github.com/googleapis/nodejs-datastore/pull/281))
- build: add Kokoro configs for autorelease ([#280](https://github.com/googleapis/nodejs-datastore/pull/280))
- chore: always nyc report before calling codecov ([#275](https://github.com/googleapis/nodejs-datastore/pull/275))
- chore: nyc ignore build/test by default ([#274](https://github.com/googleapis/nodejs-datastore/pull/274))
- chore: update license file ([#271](https://github.com/googleapis/nodejs-datastore/pull/271))
- refactor: run gts fix ([#265](https://github.com/googleapis/nodejs-datastore/pull/265))
- chore(deps): update dependency typescript to ~3.2.0 ([#264](https://github.com/googleapis/nodejs-datastore/pull/264))
- fix(build): fix system key decryption ([#266](https://github.com/googleapis/nodejs-datastore/pull/266))
- refactor(samples): convert sample tests from ava to mocha ([#259](https://github.com/googleapis/nodejs-datastore/pull/259))
- fix: Pin @types/sinon to last compatible version ([#256](https://github.com/googleapis/nodejs-datastore/pull/256))
- chore: add synth.metadata ([#254](https://github.com/googleapis/nodejs-datastore/pull/254))
- refactor(ts): enable noImplicitThis ([#250](https://github.com/googleapis/nodejs-datastore/pull/250))
- chore(deps): update dependency gts to ^0.9.0 ([#247](https://github.com/googleapis/nodejs-datastore/pull/247))
- chore: update eslintignore config ([#246](https://github.com/googleapis/nodejs-datastore/pull/246))
- refactor(ts): use es module imports ([#244](https://github.com/googleapis/nodejs-datastore/pull/244))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#243](https://github.com/googleapis/nodejs-datastore/pull/243))
- chore: drop contributors from multiple places ([#241](https://github.com/googleapis/nodejs-datastore/pull/241))
- chore(deps): update dependency @types/is to v0.0.21 ([#240](https://github.com/googleapis/nodejs-datastore/pull/240))
- chore: use latest npm on Windows ([#239](https://github.com/googleapis/nodejs-datastore/pull/239))
- refactor(ts): convert to typescript ([#236](https://github.com/googleapis/nodejs-datastore/pull/236))
- chore: update CircleCI config ([#235](https://github.com/googleapis/nodejs-datastore/pull/235))
- chore: include build in eslintignore ([#232](https://github.com/googleapis/nodejs-datastore/pull/232))
- chore(deps): update dependency eslint-plugin-node to v8 ([#227](https://github.com/googleapis/nodejs-datastore/pull/227))
- chore: update issue templates ([#225](https://github.com/googleapis/nodejs-datastore/pull/225))
- chore: remove old issue template ([#223](https://github.com/googleapis/nodejs-datastore/pull/223))
- build: run tests on node11 ([#222](https://github.com/googleapis/nodejs-datastore/pull/222))
- chores(build): do not collect sponge.xml from windows builds ([#221](https://github.com/googleapis/nodejs-datastore/pull/221))
- chores(build): run codecov on continuous builds ([#220](https://github.com/googleapis/nodejs-datastore/pull/220))
- chore: update new issue template ([#219](https://github.com/googleapis/nodejs-datastore/pull/219))
- build: fix codecov uploading on Kokoro ([#213](https://github.com/googleapis/nodejs-datastore/pull/213))
- fix(deps): update dependency sinon to v7 ([#212](https://github.com/googleapis/nodejs-datastore/pull/212))
- Update kokoro config ([#207](https://github.com/googleapis/nodejs-datastore/pull/207))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#206](https://github.com/googleapis/nodejs-datastore/pull/206))

## v2.0.0

### Breaking Changes
- chore: really delete node4 and node9 ([#131](https://github.com/googleapis/nodejs-datastore/pull/131))
- fix: drop support for node.js 4.x and 9.x ([#129](https://github.com/googleapis/nodejs-datastore/pull/129))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#194](https://github.com/googleapis/nodejs-datastore/pull/194))
- fix(deps): update dependency google-auth-library to v2 ([#184](https://github.com/googleapis/nodejs-datastore/pull/184))
- fix(deps): update dependency google-gax to ^0.19.0 ([#177](https://github.com/googleapis/nodejs-datastore/pull/177))
- chore: remove safe-buffer ([#144](https://github.com/googleapis/nodejs-datastore/pull/144))
- fix(deps): update dependency google-gax to ^0.18.0 ([#154](https://github.com/googleapis/nodejs-datastore/pull/154))
- chore: drop dependency on common ([#148](https://github.com/googleapis/nodejs-datastore/pull/148))
- chore: remove propprop ([#145](https://github.com/googleapis/nodejs-datastore/pull/145))
- refactor: update nodejs-common and google-auth-library ([#112](https://github.com/googleapis/nodejs-datastore/pull/112))

### Documentation
- doc: fix namespace causing 404 ([#170](https://github.com/googleapis/nodejs-datastore/pull/170))

### Internal / Testing Changes
- build: prevent system/sample-test from leaking credentials
- Update CI config ([#201](https://github.com/googleapis/nodejs-datastore/pull/201))
- test: remove appveyor config ([#200](https://github.com/googleapis/nodejs-datastore/pull/200))
- Update the kokoro config ([#199](https://github.com/googleapis/nodejs-datastore/pull/199))
- Enable prefer-const in the eslint config ([#197](https://github.com/googleapis/nodejs-datastore/pull/197))
- Enable no-var in eslint ([#196](https://github.com/googleapis/nodejs-datastore/pull/196))
- Switch to let/const ([#195](https://github.com/googleapis/nodejs-datastore/pull/195))
- Update CI config ([#193](https://github.com/googleapis/nodejs-datastore/pull/193))
- Retry npm install in CI ([#191](https://github.com/googleapis/nodejs-datastore/pull/191))
- Update CI config ([#185](https://github.com/googleapis/nodejs-datastore/pull/185))
- Update CI config ([#182](https://github.com/googleapis/nodejs-datastore/pull/182))
- chore(deps): update dependency nyc to v13 ([#181](https://github.com/googleapis/nodejs-datastore/pull/181))
- Update the CI config ([#180](https://github.com/googleapis/nodejs-datastore/pull/180))
- chore: use arrow functions ([#176](https://github.com/googleapis/nodejs-datastore/pull/176))
- chore: make CircleCI config consistent ([#178](https://github.com/googleapis/nodejs-datastore/pull/178))
- chore: start converting to es classes ([#173](https://github.com/googleapis/nodejs-datastore/pull/173))
- chore(deps): update dependency eslint-config-prettier to v3 ([#169](https://github.com/googleapis/nodejs-datastore/pull/169))
- test: use sinon for mocking ([#168](https://github.com/googleapis/nodejs-datastore/pull/168))
- chore: do not use npm ci ([#166](https://github.com/googleapis/nodejs-datastore/pull/166))
- fix: fix the samples tests ([#164](https://github.com/googleapis/nodejs-datastore/pull/164))
- chore: ignore package-lock.json ([#162](https://github.com/googleapis/nodejs-datastore/pull/162))
- chore(deps): lock file maintenance ([#160](https://github.com/googleapis/nodejs-datastore/pull/160))
- chore: switch back to auto-generated code
- chore(deps): lock file maintenance ([#159](https://github.com/googleapis/nodejs-datastore/pull/159))
- chore: use let and const ([#158](https://github.com/googleapis/nodejs-datastore/pull/158))
- chore: update renovate config ([#157](https://github.com/googleapis/nodejs-datastore/pull/157))
- Delete reference to non-existent sample. ([#149](https://github.com/googleapis/nodejs-datastore/pull/149))
- test: throw on deprecation ([#155](https://github.com/googleapis/nodejs-datastore/pull/155))
- chore: move mocha options to mocha.opts ([#150](https://github.com/googleapis/nodejs-datastore/pull/150))
- Update CI config ([#151](https://github.com/googleapis/nodejs-datastore/pull/151))
- chore: add node templates to synth.py ([#143](https://github.com/googleapis/nodejs-datastore/pull/143))
- chore: please eslint ([#146](https://github.com/googleapis/nodejs-datastore/pull/146))
- chore(deps): lock file maintenance ([#142](https://github.com/googleapis/nodejs-datastore/pull/142))
- chore(deps): update dependency eslint-plugin-node to v7 ([#139](https://github.com/googleapis/nodejs-datastore/pull/139))
- test: use strictEqual in tests ([#140](https://github.com/googleapis/nodejs-datastore/pull/140))
- chore(deps): lock file maintenance ([#138](https://github.com/googleapis/nodejs-datastore/pull/138))
- chore(build): use `npm ci` instead of `npm install` ([#134](https://github.com/googleapis/nodejs-datastore/pull/134))
- chore(deps): lock file maintenance ([#133](https://github.com/googleapis/nodejs-datastore/pull/133))
- chore(deps): lock file maintenance ([#132](https://github.com/googleapis/nodejs-datastore/pull/132))
- chore(deps): lock file maintenance ([#130](https://github.com/googleapis/nodejs-datastore/pull/130))
- chore(deps): lock file maintenance ([#128](https://github.com/googleapis/nodejs-datastore/pull/128))
- chore(deps): lock file maintenance ([#127](https://github.com/googleapis/nodejs-datastore/pull/127))
- chore(deps): lock file maintenance ([#126](https://github.com/googleapis/nodejs-datastore/pull/126))
- chore(deps): lock file maintenance ([#125](https://github.com/googleapis/nodejs-datastore/pull/125))
- chore(deps): lock file maintenance ([#124](https://github.com/googleapis/nodejs-datastore/pull/124))
- fix(deps): update dependency yargs to v12 ([#122](https://github.com/googleapis/nodejs-datastore/pull/122))
- fix(deps): update dependency sinon to v6 ([#120](https://github.com/googleapis/nodejs-datastore/pull/120))
- Configure Renovate ([#113](https://github.com/googleapis/nodejs-datastore/pull/113))
- Update google-gax dependency ([#119](https://github.com/googleapis/nodejs-datastore/pull/119))
- refactor: drop repo-tool as an exec wrapper ([#118](https://github.com/googleapis/nodejs-datastore/pull/118))
- chore: update sample lockfiles ([#117](https://github.com/googleapis/nodejs-datastore/pull/117))
- fix: update linking for samples ([#115](https://github.com/googleapis/nodejs-datastore/pull/115))
- chore(package): update eslint to version 5.0.0 ([#114](https://github.com/googleapis/nodejs-datastore/pull/114))
- chore(package): Update sinon to the latest version 🚀 ([#104](https://github.com/googleapis/nodejs-datastore/pull/104))
