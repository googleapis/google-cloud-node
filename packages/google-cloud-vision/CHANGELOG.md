# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/nodejs-vision?activeTab=versions

## v0.25.0

02-22-2019 17:39 PST

### New Features
This release contains a new version (v1p4beta1) of the Vision API. To use this version, construct the client liks this:

```javascript
const vision = require('@google-cloud/vision');
const client = new vision.v1p4beta1.ImageAnnotatorClient();
```

- feat: gen v1p4beta1: online PDF, async batch image annotate ([#331](https://github.com/googleapis/nodejs-vision/pull/331))

### Implementation Changes
- fix: throw on invalid credentials in v1p4beta1  ([#334](https://github.com/googleapis/nodejs-vision/pull/334))
- fix: throw on invalid credentials ([#326](https://github.com/googleapis/nodejs-vision/pull/326))

### Dependencies
- chore(deps): update dependency mocha to v6 ([#330](https://github.com/googleapis/nodejs-vision/pull/330))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#328](https://github.com/googleapis/nodejs-vision/pull/328))
- fix(deps): update dependency yargs to v13 ([#325](https://github.com/googleapis/nodejs-vision/pull/325))
- fix(deps): update dependency google-gax to ^0.25.0 ([#315](https://github.com/googleapis/nodejs-vision/pull/315))
- fix(deps): update dependency google-gax to ^0.24.0 ([#312](https://github.com/googleapis/nodejs-vision/pull/312))
- chore(deps): update dependency eslint-config-prettier to v4 ([#313](https://github.com/googleapis/nodejs-vision/pull/313))
- fix(deps): update dependency google-gax to ^0.23.0 ([#307](https://github.com/googleapis/nodejs-vision/pull/307))

### Documentation / Samples
- docs: update contributing path in README ([#321](https://github.com/googleapis/nodejs-vision/pull/321))
- docs: update links in contrib guide ([#329](https://github.com/googleapis/nodejs-vision/pull/329))
- docs: add lint/fix example to contributing guide ([#318](https://github.com/googleapis/nodejs-vision/pull/318))
- docs: fix example comments ([#317](https://github.com/googleapis/nodejs-vision/pull/317))
- fix(docs): remove unused long running operations types
- docs: improve detect.js samples ([#300](https://github.com/googleapis/nodejs-vision/pull/300))

### Internal / Testing Changes
- build: use linkinator for docs test ([#327](https://github.com/googleapis/nodejs-vision/pull/327))
- build: create docs test npm scripts ([#324](https://github.com/googleapis/nodejs-vision/pull/324))
- build: test using @grpc/grpc-js in CI ([#322](https://github.com/googleapis/nodejs-vision/pull/322))
- chore: move CONTRIBUTING.md to root ([#320](https://github.com/googleapis/nodejs-vision/pull/320))
- refactor: improve generated code style. ([#316](https://github.com/googleapis/nodejs-vision/pull/316))
- fix: ignore case in system test assertions ([#314](https://github.com/googleapis/nodejs-vision/pull/314))
- build: ignore googleapis.com in doc link check ([#310](https://github.com/googleapis/nodejs-vision/pull/310))
- chore: update year in the license headers. ([#309](https://github.com/googleapis/nodejs-vision/pull/309))
- build: check broken links in generated docs ([#301](https://github.com/googleapis/nodejs-vision/pull/301))

## v0.24.0

12-19-2018 13:36 PST

### Implementation Changes
**This release contains breaking change**
- BREAKING: rename method imagePath => referenceImagePath ([#296](https://github.com/googleapis/nodejs-vision/pull/296))
The method `ProductSearchClient.imagePath` was renamed `referenceImagePath`:
```
// old code
const formattedName = client.imagePath(...);

// new code
const formattedName = client.referenceImagePath(...);
```
- fix: Param "scoreThreshold" should be "score_threshold" ([#234](https://github.com/googleapis/nodejs-vision/pull/234))

### New Features
- ProductSearch GA ([#280](https://github.com/googleapis/nodejs-vision/pull/280))

### Dependencies
- refactor: remove unused deps ([#261](https://github.com/googleapis/nodejs-vision/pull/261))
- fix(deps): update dependency google-gax to ^0.22.0 ([#265](https://github.com/googleapis/nodejs-vision/pull/265))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#263](https://github.com/googleapis/nodejs-vision/pull/263))
- fix(deps): update dependency @google-cloud/vision to ^0.23.0 ([#260](https://github.com/googleapis/nodejs-vision/pull/260))

### Documentation
- docs: fix productSearch example ([#285](https://github.com/googleapis/nodejs-vision/pull/285))
- docs: update readme badges ([#283](https://github.com/googleapis/nodejs-vision/pull/283))
- docs(samples): updated samples code to use async/await and tests to use mocha ([#241](https://github.com/googleapis/nodejs-vision/pull/241))

### Internal / Testing Changes
- chore: modernize the samples and sample tests ([#297](https://github.com/googleapis/nodejs-vision/pull/297))
- chore(build): inject yoshi automation key ([#294](https://github.com/googleapis/nodejs-vision/pull/294))
- chore: update nyc and eslint configs ([#293](https://github.com/googleapis/nodejs-vision/pull/293))
- chore: fix publish.sh permission +x ([#292](https://github.com/googleapis/nodejs-vision/pull/292))
- fix(build): fix Kokoro release script ([#291](https://github.com/googleapis/nodejs-vision/pull/291))
- build: add Kokoro configs for autorelease ([#290](https://github.com/googleapis/nodejs-vision/pull/290))
- chore: always nyc report before calling codecov ([#288](https://github.com/googleapis/nodejs-vision/pull/288))
- chore: nyc ignore build/test by default ([#287](https://github.com/googleapis/nodejs-vision/pull/287))
- chore: update license file ([#284](https://github.com/googleapis/nodejs-vision/pull/284))
- fix(build): fix system key decryption ([#282](https://github.com/googleapis/nodejs-vision/pull/282))
- test: make product search tests run ([#269](https://github.com/googleapis/nodejs-vision/pull/269))
- chore: update eslintignore config ([#264](https://github.com/googleapis/nodejs-vision/pull/264))
- chore: drop contributors from multiple places ([#262](https://github.com/googleapis/nodejs-vision/pull/262))

## v0.23.0

### New Features
- feat: add support for product search

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v8 ([#245](https://github.com/googleapis/nodejs-vision/pull/245))
- chore(deps): update dependency canvas to v2 ([#224](https://github.com/googleapis/nodejs-vision/pull/224))
- chore(deps): update dependency sinon to v7 ([#219](https://github.com/googleapis/nodejs-vision/pull/219))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#213](https://github.com/googleapis/nodejs-vision/pull/213))

### Documentation
- fix(samples): Adding vision_product_search_tutorial_import tags ([#221](https://github.com/googleapis/nodejs-vision/pull/221))
- fix(samples): Change the Project ID from number to string ([#220](https://github.com/googleapis/nodejs-vision/pull/220))
- docs: Vision AutoML samples ([#197](https://github.com/googleapis/nodejs-vision/pull/197))

### Internal / Testing Changes
- chore: use latest npm on Windows ([#258](https://github.com/googleapis/nodejs-vision/pull/258))
- chore: update lint configs ([#257](https://github.com/googleapis/nodejs-vision/pull/257))
- chore: update CircleCI config ([#253](https://github.com/googleapis/nodejs-vision/pull/253))
- chore: update issue templates ([#244](https://github.com/googleapis/nodejs-vision/pull/244))
- chore: remove old issue template ([#242](https://github.com/googleapis/nodejs-vision/pull/242))
- build: run tests on node11 ([#239](https://github.com/googleapis/nodejs-vision/pull/239))
- chores(build): do not collect sponge.xml from windows builds ([#238](https://github.com/googleapis/nodejs-vision/pull/238))
- chores(build): run codecov on continuous builds ([#237](https://github.com/googleapis/nodejs-vision/pull/237))
- chore: update new issue template ([#235](https://github.com/googleapis/nodejs-vision/pull/235))
- build: fix codecov uploading on Kokoro ([#222](https://github.com/googleapis/nodejs-vision/pull/222))
- chore: enable --throw-deprecation on mocha config ([#147](https://github.com/googleapis/nodejs-vision/pull/147))
- Update kokoro config ([#214](https://github.com/googleapis/nodejs-vision/pull/214))
- Update kokoro config ([#208](https://github.com/googleapis/nodejs-vision/pull/208))
- test: remove appveyor config ([#207](https://github.com/googleapis/nodejs-vision/pull/207))
- Update the CI config ([#206](https://github.com/googleapis/nodejs-vision/pull/206))

## v0.22.1

### Bug fixes
- Fix response output for Detect Labels ([#199](https://github.com/googleapis/nodejs-vision/pull/199))

### Documentation
- Vision GA – vision_localize_objects & vision_localize_object_gcs ([#200](https://github.com/googleapis/nodejs-vision/pull/200))
- Product search rebased ([#196](https://github.com/googleapis/nodejs-vision/pull/196))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#201](https://github.com/googleapis/nodejs-vision/pull/201))
- Enable no-var in eslint ([#198](https://github.com/googleapis/nodejs-vision/pull/198))
- Switch to let/const ([#194](https://github.com/googleapis/nodejs-vision/pull/194))
- fix(deps): update dependency google-gax to ^0.20.0 ([#193](https://github.com/googleapis/nodejs-vision/pull/193))

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

