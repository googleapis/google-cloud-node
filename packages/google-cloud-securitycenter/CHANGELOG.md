# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/security-center?activeTab=versions

## v0.2.0

03-12-2019 16:11 PDT

### New Features
- feat: add v1 variant of the API ([#61](https://github.com/googleapis/nodejs-security-center/pull/61))

### Bug Fixes
- fix: throw on invalid credentials

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#42](https://github.com/googleapis/nodejs-security-center/pull/42))

### Documentation
- docs: update examples
- docs: update comments on protos ([#56](https://github.com/googleapis/nodejs-security-center/pull/56))
- docs: sync latest proto docs
- docs: update links in contrib guide ([#53](https://github.com/googleapis/nodejs-security-center/pull/53))
- docs: update contributing path in README ([#48](https://github.com/googleapis/nodejs-security-center/pull/48))
- docs: move CONTRIBUTING.md to root ([#47](https://github.com/googleapis/nodejs-security-center/pull/47))
- docs: add lint/fix example to contributing guide ([#45](https://github.com/googleapis/nodejs-security-center/pull/45))
- docs: fix example comments ([#44](https://github.com/googleapis/nodejs-security-center/pull/44))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#59](https://github.com/googleapis/nodejs-security-center/pull/59))
- build: use node10 to run samples-test, system-test etc ([#58](https://github.com/googleapis/nodejs-security-center/pull/58))
- build: update release configuration
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#52](https://github.com/googleapis/nodejs-security-center/pull/52))
- build: create docs test npm scripts ([#50](https://github.com/googleapis/nodejs-security-center/pull/50))
- build: test using @grpc/grpc-js in CI ([#49](https://github.com/googleapis/nodejs-security-center/pull/49))
- refactor: improve generated code style. ([#43](https://github.com/googleapis/nodejs-security-center/pull/43))
- chore(deps): update dependency eslint-config-prettier to v4 ([#41](https://github.com/googleapis/nodejs-security-center/pull/41))
- build: ignore googleapis.com in doc link check ([#39](https://github.com/googleapis/nodejs-security-center/pull/39))
- chore: sync gapic files

## v0.1.2

01-16-2019 16:03 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#34](https://github.com/googleapis/nodejs-security-center/pull/34))

### Documentation
- docs: update jsdoc comments ([#36](https://github.com/googleapis/nodejs-security-center/pull/36))
- build: check broken links in generated docs ([#25](https://github.com/googleapis/nodejs-security-center/pull/25))
- docs: various doc changes in protos and generated source ([#31](https://github.com/googleapis/nodejs-security-center/pull/31))
- fix(docs): broken link to API ref docs ([#32](https://github.com/googleapis/nodejs-security-center/pull/32))
- docs: update the comments in the protos ([#30](https://github.com/googleapis/nodejs-security-center/pull/30))
- samples: add quickstart ([#33](https://github.com/googleapis/nodejs-security-center/pull/33))

## v0.1.1

01-02-2019 14:54 PST

### Documentation
- fix(docs): require stmt (#29)
- add missing namespaces ([#27](https://github.com/googleapis/nodejs-security-center/pull/27))
- fix(docs): fix require module in samples ([#26](https://github.com/googleapis/nodejs-security-center/pull/26))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#23](https://github.com/googleapis/nodejs-security-center/pull/23))
- chore: update nyc and eslint configs ([#22](https://github.com/googleapis/nodejs-security-center/pull/22))
- chore: fix publish.sh permission +x ([#20](https://github.com/googleapis/nodejs-security-center/pull/20))
- fix(build): fix Kokoro release script ([#19](https://github.com/googleapis/nodejs-security-center/pull/19))
- build: add Kokoro configs for autorelease ([#18](https://github.com/googleapis/nodejs-security-center/pull/18))
- chore: add synth.metadata ([#17](https://github.com/googleapis/nodejs-security-center/pull/17))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#12](https://github.com/googleapis/nodejs-security-center/pull/12))
- chore: always nyc report before calling codecov ([#15](https://github.com/googleapis/nodejs-security-center/pull/15))
- chore: nyc ignore build/test by default ([#14](https://github.com/googleapis/nodejs-security-center/pull/14))
- docs: update readme badges ([#11](https://github.com/googleapis/nodejs-security-center/pull/11))

## v0.1.0

This is the initial release of the Cloud Security Center API Node.js client library.

### Documentation
- docs: sync protos comment changes

### Internal / Testing Changes
- build: add encrypted key ([#8](https://github.com/googleapis/nodejs-security-center/pull/8))
- add dummy no test yet file to system test and samples test dirs
- chore(build): Configure Renovate ([#6](https://github.com/googleapis/nodejs-security-center/pull/6))
- fix(build): fix system key decryption ([#5](https://github.com/googleapis/nodejs-security-center/pull/5))
- refactor: fix lint rules and make consistent ([#1](https://github.com/googleapis/nodejs-security-center/pull/1))
- remove CONTRIBUTORS
- license header on npm-install-retry
- add more scaffolding

