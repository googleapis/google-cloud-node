# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-logging-bunyan?activeTab=versions

## v0.9.4

### Documentation
- fix: doc string is malformed for jsdoc ([#164](https://github.com/googleapis/nodejs-logging-bunyan/pull/164))

## v0.9.2

### Bug Fixes
- fix: logged errors are reported to error reporting ([#122](https://github.com/googleapis/nodejs-logging-bunyan/pull/122))
- chore: fix `stream` example in README ([#134](https://github.com/googleapis/nodejs-logging-bunyan/pull/134))
- fix(deps): update @google-cloud/logging to 4.x ([#152](https://github.com/googleapis/nodejs-logging-bunyan/pull/152))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#150](https://github.com/googleapis/nodejs-logging-bunyan/pull/150))
- chore(deps): update dependency delay to v4 ([#142](https://github.com/googleapis/nodejs-logging-bunyan/pull/142))
- fix(deps): update dependency @google-cloud/common to ^0.24.0 ([#146](https://github.com/googleapis/nodejs-logging-bunyan/pull/146))
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.4 ([#141](https://github.com/googleapis/nodejs-logging-bunyan/pull/141))
- fix(deps): update dependency @google-cloud/common to ^0.23.0 ([#139](https://github.com/googleapis/nodejs-logging-bunyan/pull/139))
- fix(deps): update samples dependency @google-cloud/logging-bunyan to ^0.9.0 ([#137](https://github.com/googleapis/nodejs-logging-bunyan/pull/137))
- chore(deps): update dependency execa to v1 ([#138](https://github.com/googleapis/nodejs-logging-bunyan/pull/138))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#151](https://github.com/googleapis/nodejs-logging-bunyan/pull/151))
- Enable no-var in eslint ([#149](https://github.com/googleapis/nodejs-logging-bunyan/pull/149))
- Update CI config ([#147](https://github.com/googleapis/nodejs-logging-bunyan/pull/147))
- Add synth script and update CI ([#144](https://github.com/googleapis/nodejs-logging-bunyan/pull/144))
- Retry npm install in CI ([#143](https://github.com/googleapis/nodejs-logging-bunyan/pull/143))
- chore(deps): update dependency nyc to v13 ([#140](https://github.com/googleapis/nodejs-logging-bunyan/pull/140))

## v0.9.1

### Fixes
- chore: fix install tests (#133)

## v0.9.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x (#87)
- fix: drop support for node 4.x and 9.x (#69)

### Features
- feat: request-correlating middleware (#63)

### Docs & Samples
- chore: require node 8 for samples (#107)
- doc: add express middleware to README (#97)
- doc: fix typo in samples/README (#99)
- fix: fix linting errors in the samples (#100)
- feat(samples): add express middleware sample (#95)
- fix(samples): fix non-working explit setup sample (#93)
- doc: fix usage of logger.info in README.md (#83)
- doc: fix link to HttpRequest message (#68)

### Dependency updates
- chore(deps): upgrade to @g-c/logging@3.0.1 (#126)
- chore: pin to delay@3.0.x (#127)
- chore(deps): update dependency execa to ^0.11.0 (#125)
- chore(deps): update dependency eslint-config-prettier to v3 (#120)
- chore(deps): update dependency pify to v4 (#119)
- chore(deps): update dependency got to v9 (#114)
- fix(deps): update dependency @opencensus/propagation-stackdriver to ^0.0.3 (#112)
- chore(deps): update dependency typescript to v3 (#109)
- chore(deps): update dependency eslint-plugin-node to v7 (#96)
- chore(deps): update dependency gts to ^0.8.0 (#92)
- fix(deps): update dependency @google-cloud/logging to v2 (#86)
- fix(deps): update dependency yargs to v12 (#82)
- chore: update dependencies (#81)
- Configure Renovate (#74)
- chore(package): missing @types/node dev dependency (#75)
- chore: update all dependencies (#71)
- chore(package): upgrade gts and typescript (#70)

### Keepin' the lights on
- chore: ignore package-lock.json (#118)
- chore: update renovate config (#113)
- remove that whitespace (#111)
- chore: assert.deelEqual => assert.deepStrictEqual (#108)
- chore: move mocha options to mocha.opts (#106)
- chore: re-enable codecov && drop greenkeeper badge (#98)
- refactor: drop repo-tool as an exec wrapper (#79)
- chore: update sample lockfiles (#78)
- fix: update linking for samples (#77)
- cleanup: remove some casts (#76)
- fix: the system tests use a custom log (#73)
- test: use source-map-support (#72)
- chore: remove `--bail` from the system tests config (#67)
- chore: the ultimate fix for repo-tools EPERM (#64)

