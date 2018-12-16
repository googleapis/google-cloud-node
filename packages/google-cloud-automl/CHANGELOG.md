# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/automl?activeTab=versions

## v0.1.3

12-15-2018 12:46 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#82](https://github.com/googleapis/nodejs-automl/pull/82))
- fix(deps): update dependency google-gax to ^0.20.0 ([#47](https://github.com/googleapis/nodejs-automl/pull/47))

### Documentation
- docs: Add a comment to hint at format of payload for prediction. ([#93](https://github.com/googleapis/nodejs-automl/pull/93))
- docs: update readme badges ([#90](https://github.com/googleapis/nodejs-automl/pull/90))

### Internal / Testing Changes
- chore: basic proto updates ([#105](https://github.com/googleapis/nodejs-automl/pull/105))
- chore(build): inject yoshi automation key ([#104](https://github.com/googleapis/nodejs-automl/pull/104))
- chore: update nyc and eslint configs ([#103](https://github.com/googleapis/nodejs-automl/pull/103))
- chore: fix publish.sh permission +x ([#102](https://github.com/googleapis/nodejs-automl/pull/102))
- fix(build): fix Kokoro release script ([#101](https://github.com/googleapis/nodejs-automl/pull/101))
- build: add Kokoro configs for autorelease ([#100](https://github.com/googleapis/nodejs-automl/pull/100))
- chore: always nyc report before calling codecov ([#98](https://github.com/googleapis/nodejs-automl/pull/98))
- chore: nyc ignore build/test by default ([#97](https://github.com/googleapis/nodejs-automl/pull/97))
- chore: clean up usage of prettier and eslint ([#96](https://github.com/googleapis/nodejs-automl/pull/96))
- chore: update license file ([#92](https://github.com/googleapis/nodejs-automl/pull/92))
- fix(build): fix system key decryption ([#88](https://github.com/googleapis/nodejs-automl/pull/88))
- chore: add synth.metadata
- chore: update eslintignore config ([#81](https://github.com/googleapis/nodejs-automl/pull/81))
- chore: drop contributors from multiple places ([#80](https://github.com/googleapis/nodejs-automl/pull/80))
- chore: use latest npm on Windows ([#79](https://github.com/googleapis/nodejs-automl/pull/79))
- chore: update CircleCI config ([#78](https://github.com/googleapis/nodejs-automl/pull/78))
- chore: include build in eslintignore ([#75](https://github.com/googleapis/nodejs-automl/pull/75))
- chore(deps): update dependency eslint-plugin-node to v8 ([#71](https://github.com/googleapis/nodejs-automl/pull/71))
- chore: update issue templates ([#70](https://github.com/googleapis/nodejs-automl/pull/70))
- chore: remove old issue template ([#68](https://github.com/googleapis/nodejs-automl/pull/68))
- build: run tests on node11 ([#67](https://github.com/googleapis/nodejs-automl/pull/67))
- chores(build): do not collect sponge.xml from windows builds ([#66](https://github.com/googleapis/nodejs-automl/pull/66))
- chores(build): run codecov on continuous builds ([#65](https://github.com/googleapis/nodejs-automl/pull/65))
- chore: update new issue template ([#64](https://github.com/googleapis/nodejs-automl/pull/64))
- build: fix codecov uploading on Kokoro ([#61](https://github.com/googleapis/nodejs-automl/pull/61))
- Update kokoro config ([#59](https://github.com/googleapis/nodejs-automl/pull/59))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#58](https://github.com/googleapis/nodejs-automl/pull/58))
- build: prevent system/sample-test from leaking credentials
- Update kokoro config ([#55](https://github.com/googleapis/nodejs-automl/pull/55))
- test: remove appveyor config ([#54](https://github.com/googleapis/nodejs-automl/pull/54))
- Update the CI config ([#53](https://github.com/googleapis/nodejs-automl/pull/53))
- Enable prefer-const in the eslint config ([#51](https://github.com/googleapis/nodejs-automl/pull/51))
- Enable no-var in eslint ([#50](https://github.com/googleapis/nodejs-automl/pull/50))
- Switch to let/const ([#49](https://github.com/googleapis/nodejs-automl/pull/49))
- test: throw on deprecation ([#23](https://github.com/googleapis/nodejs-automl/pull/23))
- Update CI config ([#46](https://github.com/googleapis/nodejs-automl/pull/46))
- Remove unused dependencies ([#44](https://github.com/googleapis/nodejs-automl/pull/44))
- Retry npm install in CI ([#43](https://github.com/googleapis/nodejs-automl/pull/43))
- Update CI config ([#40](https://github.com/googleapis/nodejs-automl/pull/40))
- Re-generate library using /synth.py ([#39](https://github.com/googleapis/nodejs-automl/pull/39))
- chore(deps): update dependency nyc to v13 ([#37](https://github.com/googleapis/nodejs-automl/pull/37))
- Update the CI config ([#36](https://github.com/googleapis/nodejs-automl/pull/36))

## v0.1.2

### Dependency updates
- fix(deps): update dependency google-gax to ^0.19.0 (#31)
- fix(deps): update dependency google-gax to ^0.18.0 (#22)
- chore(deps): update dependency eslint-config-prettier to v3 (#30)

### Keepin' the lights on
- chore: make the CircleCI config consistent (#32)
- chore: do not use npm ci (#29)
- chore: ignore package-lock.json (#27)
- chore(deps): lock file maintenance (#26)
- chore(deps): lock file maintenance (#25)
- chore: update renovate config (#24)
- chore(deps): lock file maintenance (#21)
- chore: move mocha options to mocha.opts (#19)
- chore: require node 8 for samples (#20)
- Re-generate library using /synth.py (#18)
- chore(deps): lock file maintenance (#17)
- nit: Google LLC (#16)

## v0.1.1

This patch release addresses a namespacing issue that affected our docs.

### Documentation
- Add missing JSDoc namespaces. (#14)
