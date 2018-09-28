# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datastore?activeTab=versions

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

