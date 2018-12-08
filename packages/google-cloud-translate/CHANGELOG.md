# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-translate?activeTab=versions

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

