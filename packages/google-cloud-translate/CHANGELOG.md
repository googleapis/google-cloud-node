# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-translate?activeTab=versions

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

