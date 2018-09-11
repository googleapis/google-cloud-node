# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/nodejs-vision?activeTab=versions

## v0.22.0

### New Features
Object Localization is available on v1 of this library:
- Updated CI config and run synth ([#181](https://github.com/googleapis/nodejs-vision/pull/181))

### Dependencies
- chore(deps): update dependency @google-cloud/storage to v2 ([#183](https://github.com/googleapis/nodejs-vision/pull/183))
- chore(deps): update dependency nyc to v13 ([#177](https://github.com/googleapis/nodejs-vision/pull/177))
- fix(deps): update dependency google-gax to ^0.19.0 ([#173](https://github.com/googleapis/nodejs-vision/pull/173))
- chore(deps): update dependency eslint-config-prettier to v3 ([#170](https://github.com/googleapis/nodejs-vision/pull/170))

### Internal / Testing Changes
- Update CI config ([#188](https://github.com/googleapis/nodejs-vision/pull/188))
- Fix the sample tests ([#187](https://github.com/googleapis/nodejs-vision/pull/187))
- Retry npm install in CI ([#185](https://github.com/googleapis/nodejs-vision/pull/185))
- Update CI config ([#184](https://github.com/googleapis/nodejs-vision/pull/184))
- fix: (tests): Use real service to validate expectations. ([#182](https://github.com/googleapis/nodejs-vision/pull/182))
- chore: make the CircleCI config consistent
- Udpate Beta Vision samples to use beta tags ([#172](https://github.com/googleapis/nodejs-vision/pull/172))
- Vision region tag update ([#171](https://github.com/googleapis/nodejs-vision/pull/171))
- build: configure Windows build on Kokoro ([#165](https://github.com/googleapis/nodejs-vision/pull/165))
- chore: do not use npm ci ([#167](https://github.com/googleapis/nodejs-vision/pull/167))
- build(kokoro): samples-test.sh need GCLOUD_PROJECT env; node6 and node8 is using wrong .sh ([#162](https://github.com/googleapis/nodejs-vision/pull/162))
- build(kokoro): setup samples and system test ([#161](https://github.com/googleapis/nodejs-vision/pull/161))
- chore: ignore package-lock.json ([#160](https://github.com/googleapis/nodejs-vision/pull/160))
- build: rename build.sh => test.sh; presubmit jobs runs lint and docs properly ([#158](https://github.com/googleapis/nodejs-vision/pull/158))
- fix(samples): missing fs requires causing sample-test to fail ([#157](https://github.com/googleapis/nodejs-vision/pull/157))
- build: add set -x to .sh to show the command being executed ([#156](https://github.com/googleapis/nodejs-vision/pull/156))
- add samples linking to kokoro jobs ([#155](https://github.com/googleapis/nodejs-vision/pull/155))
- Kokoro multi ver ([#153](https://github.com/googleapis/nodejs-vision/pull/153))
- chore: update renovate config ([#152](https://github.com/googleapis/nodejs-vision/pull/152))
- have presubmit.cfg in separate node* folders ([#151](https://github.com/googleapis/nodejs-vision/pull/151))
- split presubmit to multiple node versions ([#149](https://github.com/googleapis/nodejs-vision/pull/149))

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

