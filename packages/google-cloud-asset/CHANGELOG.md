# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/asset?activeTab=versions

## v0.2.1

03-13-2019 21:45 PDT

### Bug Fixes
- fix: throw on invalid credentials

### Documentation
- docs: use backticks for JS values ([#116](https://github.com/googleapis/nodejs-asset/pull/116))
- docs: update jsdoc samples and json import paths ([#115](https://github.com/googleapis/nodejs-asset/pull/115))
- docs: update links in contrib guide ([#108](https://github.com/googleapis/nodejs-asset/pull/108))
- docs: update contributing path in README ([#100](https://github.com/googleapis/nodejs-asset/pull/100))
- docs: move CONTRIBUTING.md to root ([#99](https://github.com/googleapis/nodejs-asset/pull/99))
- docs: add lint/fix example to contributing guide ([#97](https://github.com/googleapis/nodejs-asset/pull/97))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#113](https://github.com/googleapis/nodejs-asset/pull/113))
- build: use node10 to run samples-test, system-test etc ([#112](https://github.com/googleapis/nodejs-asset/pull/112))
- build: update release configuration
- chore: update proto formatting
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#107](https://github.com/googleapis/nodejs-asset/pull/107))
- fix(deps): update dependency yargs to v13 ([#105](https://github.com/googleapis/nodejs-asset/pull/105))
- build: create docs test npm scripts ([#104](https://github.com/googleapis/nodejs-asset/pull/104))
- build: test using @grpc/grpc-js in CI ([#103](https://github.com/googleapis/nodejs-asset/pull/103))
- chore: ignore cache directories ([#102](https://github.com/googleapis/nodejs-asset/pull/102))
- refactor: improve generated code style. ([#96](https://github.com/googleapis/nodejs-asset/pull/96))

## v0.2.0

01-31-2019 10:32 PST

### Implementation Changes
- refactor: remove unused IAM protobuf objects ([#83](https://github.com/googleapis/nodejs-asset/pull/83))
- refactor: drop requirement of setting GCLOUD_PROJECT ([#81](https://github.com/googleapis/nodejs-asset/pull/81))

### New Features
- fix(proto): add support for folders ([#90](https://github.com/googleapis/nodejs-asset/pull/90))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#94](https://github.com/googleapis/nodejs-asset/pull/94))

### Documentation
- fix(docs): www discovery link ([#87](https://github.com/googleapis/nodejs-asset/pull/87))
- fix(docs): broken links in README.md ([#84](https://github.com/googleapis/nodejs-asset/pull/84))

## v0.1.1

12-04-2018 14:41 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#49](https://github.com/googleapis/nodejs-asset/pull/49))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#47](https://github.com/googleapis/nodejs-asset/pull/47))
- chore(deps): update dependency through2 to v3 ([#44](https://github.com/googleapis/nodejs-asset/pull/44))
- chore(deps): update dependency eslint-plugin-node to v8 ([#36](https://github.com/googleapis/nodejs-asset/pull/36))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#21](https://github.com/googleapis/nodejs-asset/pull/21))

### Documentation
- sample: Add quickstart sample code for BatchGetAsstesHistory. ([#59](https://github.com/googleapis/nodejs-asset/pull/59))
- refactor(samples): convert sample tests from ava to mocha ([#56](https://github.com/googleapis/nodejs-asset/pull/56))
- docs: update README.md with correct links ([#66](https://github.com/googleapis/nodejs-asset/pull/66))
- docs: update readme badges ([#63](https://github.com/googleapis/nodejs-asset/pull/63))
- docs: Fix 404 link to product reference docs. ([#62](https://github.com/googleapis/nodejs-asset/pull/62))
- docs(samples): add quickstart code for ExportAssets ([#50](https://github.com/googleapis/nodejs-asset/pull/50))

### Internal / Testing Changes
- chore: update license file ([#65](https://github.com/googleapis/nodejs-asset/pull/65))
- fix(build): fix system key decryption ([#60](https://github.com/googleapis/nodejs-asset/pull/60))
- fix: fix the lint rules ([#58](https://github.com/googleapis/nodejs-asset/pull/58))
- chore: do a little lint cleanup ([#53](https://github.com/googleapis/nodejs-asset/pull/53))
- chore: add synth.metadata
- chore: update eslintignore config ([#48](https://github.com/googleapis/nodejs-asset/pull/48))
- chore: drop contributors from multiple places ([#46](https://github.com/googleapis/nodejs-asset/pull/46))
- chore: use latest npm on Windows ([#45](https://github.com/googleapis/nodejs-asset/pull/45))
- chore: update CircleCI config ([#43](https://github.com/googleapis/nodejs-asset/pull/43))
- chore: include build in eslintignore ([#40](https://github.com/googleapis/nodejs-asset/pull/40))
- chore: update issue templates ([#35](https://github.com/googleapis/nodejs-asset/pull/35))
- chore: remove old issue template ([#33](https://github.com/googleapis/nodejs-asset/pull/33))
- build: run tests on node11 ([#32](https://github.com/googleapis/nodejs-asset/pull/32))
- chores(build): run codecov on continuous builds ([#29](https://github.com/googleapis/nodejs-asset/pull/29))
- chores(build): do not collect sponge.xml from windows builds ([#30](https://github.com/googleapis/nodejs-asset/pull/30))
- chore: update new issue template ([#28](https://github.com/googleapis/nodejs-asset/pull/28))
- build: fix codecov uploading on Kokoro ([#24](https://github.com/googleapis/nodejs-asset/pull/24))
- Update CI config ([#22](https://github.com/googleapis/nodejs-asset/pull/22))
- Update CI config and move to const ([#19](https://github.com/googleapis/nodejs-asset/pull/19))
- test: remove appveyor config ([#17](https://github.com/googleapis/nodejs-asset/pull/17))
- Fix the linter ([#16](https://github.com/googleapis/nodejs-asset/pull/16))
- Enable prefer-const in the eslint config ([#15](https://github.com/googleapis/nodejs-asset/pull/15))

## v0.1.0

Initial release of the Cloud Asset API.

