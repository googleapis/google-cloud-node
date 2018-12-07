# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/resource?activeTab=versions

## v0.9.0

12-06-2018 15:54 PST

**This release has breaking changes**.  Please update with care.

### Breaking changes

#### Dropped support for non-LTS versions of node.js
Node.js versions 4.x and 9.x are explicitly not supported.

#### Support for es modules
The import syntax for this library has changed to support es modules.

__old code__
```js
const Resource = require('@google-cloud/resource');
const resource = Resource({...});
```

__new code__
```js
const {Resource} = require('@google-cloud/resource');
const resource = Resource({...});
```

### Features
- feat: convert to typescript ([#64](https://github.com/googleapis/nodejs-resource/pull/64))

### Documentation
- docs: update readme badges ([#146](https://github.com/googleapis/nodejs-resource/pull/146))
- docs(samples): updated samples code to use async await ([#139](https://github.com/googleapis/nodejs-resource/pull/139))

### Fixes
- fix: improve types and fix sample tests ([#141](https://github.com/googleapis/nodejs-resource/pull/141))
- fix(typo): LifecylceState => LifecycleState interface ([#124](https://github.com/googleapis/nodejs-resource/pull/124))
- fix: improve types, enable noImplicitThis ([#90](https://github.com/googleapis/nodejs-resource/pull/90))
- fix: use small HTTP dependency ([#80](https://github.com/googleapis/nodejs-resource/pull/80))
- fix: drop support for node.js 4.x and 9.x ([#50](https://github.com/googleapis/nodejs-resource/pull/50))

### Internal / Testing Changes
- test: disable lifecycle project system test ([#142](https://github.com/googleapis/nodejs-resource/pull/142))
- chore: always nyc report before calling codecov ([#151](https://github.com/googleapis/nodejs-resource/pull/151))
- chore: nyc ignore build/test by default ([#150](https://github.com/googleapis/nodejs-resource/pull/150))
- chore: update license file ([#148](https://github.com/googleapis/nodejs-resource/pull/148))
- fix(build): fix system key decryption ([#144](https://github.com/googleapis/nodejs-resource/pull/144))
- chore(deps): update dependency typescript to ~3.2.0 ([#143](https://github.com/googleapis/nodejs-resource/pull/143))
- chore: add a synth.metadata
- refactor(samples): convert sample tests from ava to mocha ([#135](https://github.com/googleapis/nodejs-resource/pull/135))
- chore(deps): update dependency gts to ^0.9.0 ([#134](https://github.com/googleapis/nodejs-resource/pull/134))
- chore: update eslintignore config ([#133](https://github.com/googleapis/nodejs-resource/pull/133))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#130](https://github.com/googleapis/nodejs-resource/pull/130))
- refactor: drop dependency on extend ([#128](https://github.com/googleapis/nodejs-resource/pull/128))
- chore: drop contributors from multiple places ([#129](https://github.com/googleapis/nodejs-resource/pull/129))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#113](https://github.com/googleapis/nodejs-resource/pull/113))
- chore: use latest npm on Windows ([#127](https://github.com/googleapis/nodejs-resource/pull/127))
- chore: update CircleCI config ([#126](https://github.com/googleapis/nodejs-resource/pull/126))
- chore: include build in eslintignore ([#122](https://github.com/googleapis/nodejs-resource/pull/122))
- chore(deps): update dependency eslint-plugin-node to v8 ([#118](https://github.com/googleapis/nodejs-resource/pull/118))
- chore: update issue templates ([#117](https://github.com/googleapis/nodejs-resource/pull/117))
- chore: remove old issue template ([#115](https://github.com/googleapis/nodejs-resource/pull/115))
- build: run tests on node11 ([#114](https://github.com/googleapis/nodejs-resource/pull/114))
- chores(build): do not collect sponge.xml from windows builds ([#112](https://github.com/googleapis/nodejs-resource/pull/112))
- chores(build): run codecov on continuous builds ([#110](https://github.com/googleapis/nodejs-resource/pull/110))
- chore: update new issue template ([#109](https://github.com/googleapis/nodejs-resource/pull/109))
- chore(deps): update dependency sinon to v7 ([#105](https://github.com/googleapis/nodejs-resource/pull/105))
- build: fix codecov uploading on Kokoro ([#106](https://github.com/googleapis/nodejs-resource/pull/106))
- Update kokoro config ([#103](https://github.com/googleapis/nodejs-resource/pull/103))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#102](https://github.com/googleapis/nodejs-resource/pull/102))
- chore(deps): update dependency typescript to ~3.1.0 ([#100](https://github.com/googleapis/nodejs-resource/pull/100))
- Update CI config ([#99](https://github.com/googleapis/nodejs-resource/pull/99))
- Don't publish sourcemaps ([#97](https://github.com/googleapis/nodejs-resource/pull/97))
- Update the kokoro config ([#94](https://github.com/googleapis/nodejs-resource/pull/94))
- test: remove appveyor config ([#93](https://github.com/googleapis/nodejs-resource/pull/93))
- test: simplify and fix the system tests ([#92](https://github.com/googleapis/nodejs-resource/pull/92))
- Update the CI config ([#89](https://github.com/googleapis/nodejs-resource/pull/89))
- Enable prefer-const in the eslint config ([#88](https://github.com/googleapis/nodejs-resource/pull/88))
- Enable no-var in eslint ([#86](https://github.com/googleapis/nodejs-resource/pull/86))
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#87](https://github.com/googleapis/nodejs-resource/pull/87))
- Update CI config ([#83](https://github.com/googleapis/nodejs-resource/pull/83))
- Fix code coverage ([#81](https://github.com/googleapis/nodejs-resource/pull/81))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#71](https://github.com/googleapis/nodejs-resource/pull/71))
- Update CI config ([#78](https://github.com/googleapis/nodejs-resource/pull/78))
- Retry npm install in CI ([#79](https://github.com/googleapis/nodejs-resource/pull/79))
- Re-generate library using /synth.py ([#77](https://github.com/googleapis/nodejs-resource/pull/77))
- chore(deps): update dependency nyc to v13 ([#76](https://github.com/googleapis/nodejs-resource/pull/76))
- Update the CI config ([#75](https://github.com/googleapis/nodejs-resource/pull/75))
- chore: update CircleCI config
- chore: enable gts fix ([#73](https://github.com/googleapis/nodejs-resource/pull/73))
- chore: convert to es6 ([#72](https://github.com/googleapis/nodejs-resource/pull/72))
- chore(deps): update dependency eslint-config-prettier to v3 ([#70](https://github.com/googleapis/nodejs-resource/pull/70))
- fix(deps): update dependency @google-cloud/common to ^0.21.0 ([#66](https://github.com/googleapis/nodejs-resource/pull/66))
- chore: split the common module ([#69](https://github.com/googleapis/nodejs-resource/pull/69))
- chore: ignore package-lock.json ([#67](https://github.com/googleapis/nodejs-resource/pull/67))
- chore: update renovate config ([#63](https://github.com/googleapis/nodejs-resource/pull/63))
- chore: assert.deelEqual => assert.deepStrictEqual ([#60](https://github.com/googleapis/nodejs-resource/pull/60))
- chore(deps): lock file maintenance ([#61](https://github.com/googleapis/nodejs-resource/pull/61))
- chore: move mocha options to mocha.opts ([#58](https://github.com/googleapis/nodejs-resource/pull/58))
- chore: require node 8 for samples ([#59](https://github.com/googleapis/nodejs-resource/pull/59))
- chore(deps): lock file maintenance ([#57](https://github.com/googleapis/nodejs-resource/pull/57))
- chore(deps): update dependency eslint-plugin-node to v7 ([#55](https://github.com/googleapis/nodejs-resource/pull/55))
- test: use strictEqual in tests ([#56](https://github.com/googleapis/nodejs-resource/pull/56))
- fix(deps): update dependency yargs to v12 ([#46](https://github.com/googleapis/nodejs-resource/pull/46))
- fix(deps): update dependency @google-cloud/common to ^0.20.0 ([#41](https://github.com/googleapis/nodejs-resource/pull/41))
- chore(deps): update dependency sinon to v6 ([#44](https://github.com/googleapis/nodejs-resource/pull/44))
- fix(deps): update dependency yargs to v11 ([#45](https://github.com/googleapis/nodejs-resource/pull/45))
- chore(deps): update dependency proxyquire to v2 ([#43](https://github.com/googleapis/nodejs-resource/pull/43))
- chore(deps): update dependency ava to v0.25.0 ([#39](https://github.com/googleapis/nodejs-resource/pull/39))
- Configure Renovate ([#33](https://github.com/googleapis/nodejs-resource/pull/33))
- chore(package): update eslint to version 5.0.0 ([#34](https://github.com/googleapis/nodejs-resource/pull/34))
- refactor: drop repo-tool as an exec wrapper ([#37](https://github.com/googleapis/nodejs-resource/pull/37))
- fix: update linking for samples ([#35](https://github.com/googleapis/nodejs-resource/pull/35))
- chore: update sample lockfiles ([#36](https://github.com/googleapis/nodejs-resource/pull/36))
- chore(package): update nyc to version 12.0.2 ([#32](https://github.com/googleapis/nodejs-resource/pull/32))
- chore: lock files maintenance ([#30](https://github.com/googleapis/nodejs-resource/pull/30))
- chore: timeout for system test ([#28](https://github.com/googleapis/nodejs-resource/pull/28))
- chore: lock files maintenance ([#27](https://github.com/googleapis/nodejs-resource/pull/27))
- chore: test on node10 ([#26](https://github.com/googleapis/nodejs-resource/pull/26))
- chore: lock files maintenance ([#25](https://github.com/googleapis/nodejs-resource/pull/25))
- chore: one more workaround for repo-tools EPERM ([#23](https://github.com/googleapis/nodejs-resource/pull/23))
- chore: workaround for repo-tools EPERM ([#22](https://github.com/googleapis/nodejs-resource/pull/22))
- Update @google-cloud/common to the latest version 🚀 ([#21](https://github.com/googleapis/nodejs-resource/pull/21))
- Update google-auto-auth ([#20](https://github.com/googleapis/nodejs-resource/pull/20))
- chore: setup nighty build in CircleCI ([#19](https://github.com/googleapis/nodejs-resource/pull/19))
- Upgrade repo-tools and regenerate scaffolding. ([#16](https://github.com/googleapis/nodejs-resource/pull/16))
- Update proxyquire to the latest version 🚀 ([#15](https://github.com/googleapis/nodejs-resource/pull/15))
- chore: removing node7 job from CircleCI ([#14](https://github.com/googleapis/nodejs-resource/pull/14))

