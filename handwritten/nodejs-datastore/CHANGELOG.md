# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datastore?activeTab=versions

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

