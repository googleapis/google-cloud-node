# Changelog

## v0.2.0

01-14-2019 14:30 PST

### New Features
- feat: add enhanced gateway features ([#80](https://github.com/googleapis/nodejs-iot/pull/80))

### Dependencies
- chore(deps): update dependency through2 to v3 ([#69](https://github.com/googleapis/nodejs-iot/pull/69))
- fix(deps): update dependency google-gax to ^0.23.0 ([#103](https://github.com/googleapis/nodejs-iot/pull/103))

### Documentation
- fix(docs): remove unused IAM message types
- samples: update quickstart sample and add sample tests ([#98](https://github.com/googleapis/nodejs-iot/pull/98))
- docs: update readme badges ([#83](https://github.com/googleapis/nodejs-iot/pull/83))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#97](https://github.com/googleapis/nodejs-iot/pull/97))
- chore: update nyc and eslint configs ([#96](https://github.com/googleapis/nodejs-iot/pull/96))
- chore: fix publish.sh permission +x ([#94](https://github.com/googleapis/nodejs-iot/pull/94))
- fix(build): fix Kokoro release script ([#93](https://github.com/googleapis/nodejs-iot/pull/93))
- build: add Kokoro configs for autorelease ([#92](https://github.com/googleapis/nodejs-iot/pull/92))
- chore: always nyc report before calling codecov ([#88](https://github.com/googleapis/nodejs-iot/pull/88))
- chore: nyc ignore build/test by default ([#87](https://github.com/googleapis/nodejs-iot/pull/87))
- chore: update license file ([#85](https://github.com/googleapis/nodejs-iot/pull/85))
- fix(build): fix system key decryption ([#81](https://github.com/googleapis/nodejs-iot/pull/81))
- chore: add a synth.metadata
- chore: update eslintignore config ([#74](https://github.com/googleapis/nodejs-iot/pull/74))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#73](https://github.com/googleapis/nodejs-iot/pull/73))
- chore: remove unused deps ([#71](https://github.com/googleapis/nodejs-iot/pull/71))
- chore: drop contributors from multiple places ([#72](https://github.com/googleapis/nodejs-iot/pull/72))
- chore: use latest npm on Windows ([#70](https://github.com/googleapis/nodejs-iot/pull/70))
- chore: update CircleCI config ([#68](https://github.com/googleapis/nodejs-iot/pull/68))
- chore: include build in eslintignore ([#65](https://github.com/googleapis/nodejs-iot/pull/65))
- chore(deps): update dependency eslint-plugin-node to v8 ([#61](https://github.com/googleapis/nodejs-iot/pull/61))
- chore: update issue templates ([#60](https://github.com/googleapis/nodejs-iot/pull/60))
- chore: remove old issue template ([#58](https://github.com/googleapis/nodejs-iot/pull/58))
- build: run tests on node11 ([#57](https://github.com/googleapis/nodejs-iot/pull/57))
- chores(build): do not collect sponge.xml from windows builds ([#56](https://github.com/googleapis/nodejs-iot/pull/56))
- chores(build): run codecov on continuous builds ([#55](https://github.com/googleapis/nodejs-iot/pull/55))
- chore: update new issue template ([#54](https://github.com/googleapis/nodejs-iot/pull/54))
- build: fix codecov uploading on Kokoro ([#51](https://github.com/googleapis/nodejs-iot/pull/51))
- Update kokoro config ([#49](https://github.com/googleapis/nodejs-iot/pull/49))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#48](https://github.com/googleapis/nodejs-iot/pull/48))
- build: prevent system/sample-test from leaking credentials
- Update the kokoro config ([#45](https://github.com/googleapis/nodejs-iot/pull/45))
- test: remove appveyor config ([#44](https://github.com/googleapis/nodejs-iot/pull/44))
- Update the CI config ([#43](https://github.com/googleapis/nodejs-iot/pull/43))
- Enable prefer-const in the eslint config ([#41](https://github.com/googleapis/nodejs-iot/pull/41))
- Enable no-var in eslint ([#40](https://github.com/googleapis/nodejs-iot/pull/40))
- Switch to let/const ([#39](https://github.com/googleapis/nodejs-iot/pull/39))
- Update CI config ([#37](https://github.com/googleapis/nodejs-iot/pull/37))
- Retry npm install in CI ([#35](https://github.com/googleapis/nodejs-iot/pull/35))
- Update CI config ([#32](https://github.com/googleapis/nodejs-iot/pull/32))
- Re-generate library using /synth.py ([#31](https://github.com/googleapis/nodejs-iot/pull/31))
- chore(deps): update dependency nyc to v13 ([#30](https://github.com/googleapis/nodejs-iot/pull/30))
- chore(deps): update dependency eslint-config-prettier to v3 ([#26](https://github.com/googleapis/nodejs-iot/pull/26))
- chore: do not use npm ci ([#25](https://github.com/googleapis/nodejs-iot/pull/25))
- chore: ignore package-lock.json ([#24](https://github.com/googleapis/nodejs-iot/pull/24))
- chore(deps): lock file maintenance ([#23](https://github.com/googleapis/nodejs-iot/pull/23))
- chore(deps): lock file maintenance ([#22](https://github.com/googleapis/nodejs-iot/pull/22))
- chore: update renovate config ([#21](https://github.com/googleapis/nodejs-iot/pull/21))
- test: throw on deprecation ([#20](https://github.com/googleapis/nodejs-iot/pull/20))
- chore(deps): lock file maintenance ([#18](https://github.com/googleapis/nodejs-iot/pull/18))
- chore: move mocha options to mocha.opts ([#16](https://github.com/googleapis/nodejs-iot/pull/16))
- chore: require node 8 for samples ([#17](https://github.com/googleapis/nodejs-iot/pull/17))

## v0.1.1

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v7 (#8)

### Documentation
- doc: fix product name, etc.. in README.md (#14)
- Add missing JSDoc namespaces. (#9)

### Internal / Testing Changes
- chore(build): use .circleci/config.yml from synth tool template (#11)
- test: use strictEqual in tests (#6)
- chore: Configure Renovate (#7)

## v0.1.0

- Initial release of @google-cloud/iot
