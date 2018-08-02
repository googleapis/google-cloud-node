# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/nodejs-vision?activeTab=versions

## v0.21.1

Patch release to bring in updates to google-gax@0.18.0 so it no longer emits deprecation warnings with grpc (#120), along with other dependency updates and documentation changes.

### Dependencies
- fix(deps): update dependency google-gax to ^0.18.0 (#146)
- chore: drop dependency on common (#134)
- chore(deps): update dependency eslint-plugin-node to v7 (#127)

### Documentation
- Code Samples demonstrating Object Localization & Handwriting OCR (#133)

### Internal / Testing Changes
- build: initial kokoro setup (#145)
- chore: assert.deelEqual => assert.deepStrictEqual (#143)
- chore: move mocha options to mocha.opts (#141)
- chore: require node 8 for samples (#142)
- chore: add node templates to synth.py (#139)
- fix(deps): update dependency @google-cloud/vision to ^0.21.0 (#131)

## v0.21.0

### Implementation Changes
#### 🚨 BREAKING CHANGE
In this version we dropped support for NodeJS 4.x and 9.x. Your code might break if you're using this library on non LTS versions.
- fix: drop support for node.js 4.x and 9.x (#117)

### New Features
This release brings in v1p3beta1 of the Cloud Vision API, which includes the following new features:
- Object localization
- Product search

- gen: v1p3beta1 of Cloud Vision API NodeJS Client Library (#124)
- feat: implement manual methods for objectLocalization and productSearch on v1p3beta1 (#128)

### Dependencies
- fix: update and cleanup dependencies (#102)
- fix(deps): update dependency yargs to v12 (#103)
- repo: setup greenkeeper.json to update dependencies in samples/package.json (#94)
- refactor: drop dependency on extend (#85)
- fix: move async to dev dependencies (#83)
- chore: update many dependencies (#81)
- fix: switch from node-uuid to uuid (#84)
- chore(package): update eslint to version 5.0.1 (#98)
- chore(package): update eslint to version 5.0.0 (#90)

### Documentation

### Internal / Testing Changes
- Add smoke tests via regeneration (#122)
- Re-generate library using /synth.py (#111)
- synth.py: follow synth scripts from other repos (#113)
- Beta2ga pdf ocr (#104)
- Configure Renovate (#87)
- refactor: drop repo-tool as an exec wrapper (#97)
- fix: update linking for samples (#92)

