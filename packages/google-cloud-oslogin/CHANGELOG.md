# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/os-login?activeTab=versions

## [1.1.0](https://www.github.com/googleapis/nodejs-os-login/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#204](https://www.github.com/googleapis/nodejs-os-login/issues/204)) ([bcc4d3d](https://www.github.com/googleapis/nodejs-os-login/commit/bcc4d3d))
* support apiEndpoint override in client constructor ([#206](https://www.github.com/googleapis/nodejs-os-login/issues/206)) ([3aeacf6](https://www.github.com/googleapis/nodejs-os-login/commit/3aeacf6))

## [1.0.0](https://www.github.com/googleapis/nodejs-os-login/compare/v0.3.3...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#184)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#182](https://www.github.com/googleapis/nodejs-os-login/issues/182)) ([c97e514](https://www.github.com/googleapis/nodejs-os-login/commit/c97e514))
* **deps:** update dependency google-gax to v1 ([#191](https://www.github.com/googleapis/nodejs-os-login/issues/191)) ([5268691](https://www.github.com/googleapis/nodejs-os-login/commit/5268691))


### Build System

* upgrade engines field to >=8.10.0 ([#184](https://www.github.com/googleapis/nodejs-os-login/issues/184)) ([8b0866a](https://www.github.com/googleapis/nodejs-os-login/commit/8b0866a))

### [0.3.3](https://www.github.com/googleapis/nodejs-os-login/compare/v0.3.2...v0.3.3) (2019-04-30)


### Bug Fixes

* include 'x-goog-request-params' header in requests ([#167](https://www.github.com/googleapis/nodejs-os-login/issues/167)) ([074051d](https://www.github.com/googleapis/nodejs-os-login/commit/074051d))

## v0.3.2

03-18-2019 13:47 PDT

### Implementation Changes
- refactor: update json import paths ([#156](https://github.com/googleapis/nodejs-os-login/pull/156))
- fix: throw on invalid credentials

### Dependencies
- chore(deps): update dependency mocha to v6

### Documentation
- docs: update comments on protos ([#151](https://github.com/googleapis/nodejs-os-login/pull/151))
- build: use linkinator for docs test ([#148](https://github.com/googleapis/nodejs-os-login/pull/148))
- docs: update links in contrib guide ([#149](https://github.com/googleapis/nodejs-os-login/pull/149))
- build: create docs test npm scripts ([#146](https://github.com/googleapis/nodejs-os-login/pull/146))
- docs: update contributing path in README ([#144](https://github.com/googleapis/nodejs-os-login/pull/144))
- chore: move CONTRIBUTING.md to root ([#143](https://github.com/googleapis/nodejs-os-login/pull/143))
- docs: add lint/fix example to contributing guide ([#141](https://github.com/googleapis/nodejs-os-login/pull/141))

### Internal / Testing Changes
- chore: use per-repo npm publish ([#158](https://github.com/googleapis/nodejs-os-login/pull/158))
- build: use per-repo publish token ([#157](https://github.com/googleapis/nodejs-os-login/pull/157))
- build: Add docuploader credentials to node publish jobs ([#154](https://github.com/googleapis/nodejs-os-login/pull/154))
- build: use node10 to run samples-test, system-test etc ([#153](https://github.com/googleapis/nodejs-os-login/pull/153))
- build: update release configuration
- build: test using @grpc/grpc-js in CI ([#145](https://github.com/googleapis/nodejs-os-login/pull/145))

## v0.3.1

01-31-2019 23:16 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#139](https://github.com/googleapis/nodejs-os-login/pull/139))
- fix(deps): update dependency google-gax to ^0.24.0 ([#137](https://github.com/googleapis/nodejs-os-login/pull/137))
- fix(deps): update dependency google-gax to ^0.23.0 ([#133](https://github.com/googleapis/nodejs-os-login/pull/133))
- fix(deps): update dependency google-gax to ^0.22.0 ([#109](https://github.com/googleapis/nodejs-os-login/pull/109))

### Documentation
- docs: update readme badges ([#118](https://github.com/googleapis/nodejs-os-login/pull/118))
- refactor(samples): replace promise with await async ([#114](https://github.com/googleapis/nodejs-os-login/pull/114))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#138](https://github.com/googleapis/nodejs-os-login/pull/138))
- build: ignore googleapis.com in doc link check ([#136](https://github.com/googleapis/nodejs-os-login/pull/136))
- chore: sync gapic files
- build: check broken links in generated docs ([#132](https://github.com/googleapis/nodejs-os-login/pull/132))
- chore(build): inject yoshi automation key ([#131](https://github.com/googleapis/nodejs-os-login/pull/131))
- chore: update nyc and eslint configs ([#130](https://github.com/googleapis/nodejs-os-login/pull/130))
- chore: fix publish.sh permission +x ([#128](https://github.com/googleapis/nodejs-os-login/pull/128))
- fix(build): fix Kokoro release script ([#127](https://github.com/googleapis/nodejs-os-login/pull/127))
- build: add Kokoro configs for autorelease ([#126](https://github.com/googleapis/nodejs-os-login/pull/126))
- chore: always nyc report before calling codecov ([#123](https://github.com/googleapis/nodejs-os-login/pull/123))
- chore: nyc ignore build/test by default ([#122](https://github.com/googleapis/nodejs-os-login/pull/122))
- chore: update license file ([#120](https://github.com/googleapis/nodejs-os-login/pull/120))
- fix(build): fix system key decryption ([#116](https://github.com/googleapis/nodejs-os-login/pull/116))
- chore: add a synth.metadata
- chore: update eslintignore config ([#108](https://github.com/googleapis/nodejs-os-login/pull/108))
- chore(deps): dependency @google-cloud/nodejs-repo-tools to v3 ([#107](https://github.com/googleapis/nodejs-os-login/pull/107))
- refactor: drop a few deps ([#105](https://github.com/googleapis/nodejs-os-login/pull/105))
- chore: drop contributors from multiple places ([#106](https://github.com/googleapis/nodejs-os-login/pull/106))
- chore: use latest npm on Windows ([#104](https://github.com/googleapis/nodejs-os-login/pull/104))
- chore(deps): update dependency through2 to v3 ([#103](https://github.com/googleapis/nodejs-os-login/pull/103))
- chore: update CircleCI config ([#102](https://github.com/googleapis/nodejs-os-login/pull/102))
- chore: include build in eslintignore ([#99](https://github.com/googleapis/nodejs-os-login/pull/99))
- chore(deps): update dependency eslint-plugin-node to v8 ([#95](https://github.com/googleapis/nodejs-os-login/pull/95))
- chore: update issue templates ([#94](https://github.com/googleapis/nodejs-os-login/pull/94))
- chore: remove old issue template ([#92](https://github.com/googleapis/nodejs-os-login/pull/92))
- build: run tests on node11 ([#91](https://github.com/googleapis/nodejs-os-login/pull/91))
- chores(build): do not collect sponge.xml from windows builds ([#90](https://github.com/googleapis/nodejs-os-login/pull/90))
- chores(build): run codecov on continuous builds ([#89](https://github.com/googleapis/nodejs-os-login/pull/89))
- chore: update new issue template ([#88](https://github.com/googleapis/nodejs-os-login/pull/88))
- build: fix codecov uploading on Kokoro ([#85](https://github.com/googleapis/nodejs-os-login/pull/85))
- Update kokoro config ([#83](https://github.com/googleapis/nodejs-os-login/pull/83))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#82](https://github.com/googleapis/nodejs-os-login/pull/82))
- Update kokoro config ([#79](https://github.com/googleapis/nodejs-os-login/pull/79))

## v0.3.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x ([#43](https://github.com/googleapis/nodejs-os-login/pull/43))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#71](https://github.com/googleapis/nodejs-os-login/pull/71))
- fix(deps): update dependency google-gax to ^0.19.0 ([#65](https://github.com/googleapis/nodejs-os-login/pull/65))
- fix(deps): update dependency google-gax to ^0.18.0 ([#55](https://github.com/googleapis/nodejs-os-login/pull/55))

### Documentation
- Update comments in the code ([#68](https://github.com/googleapis/nodejs-os-login/pull/68))

### Internal / Testing Changes
- test: remove appveyor config ([#78](https://github.com/googleapis/nodejs-os-login/pull/78))
- build: bring in Kokoro cfgs via synth.py ([#77](https://github.com/googleapis/nodejs-os-login/pull/77))
- Fix the linter ([#75](https://github.com/googleapis/nodejs-os-login/pull/75))
- Enable prefer-const in the eslint config ([#74](https://github.com/googleapis/nodejs-os-login/pull/74))
- Enable no-var in eslint ([#73](https://github.com/googleapis/nodejs-os-login/pull/73))
- Switch to let/const ([#72](https://github.com/googleapis/nodejs-os-login/pull/72))
- Retry npm install in CI ([#70](https://github.com/googleapis/nodejs-os-login/pull/70))
- chore(deps): update dependency nyc to v13 ([#66](https://github.com/googleapis/nodejs-os-login/pull/66))
- chore(deps): update dependency eslint-config-prettier to v3 ([#64](https://github.com/googleapis/nodejs-os-login/pull/64))
- chore: do not use npm ci ([#63](https://github.com/googleapis/nodejs-os-login/pull/63))
- chore: ignore package-lock.json ([#60](https://github.com/googleapis/nodejs-os-login/pull/60))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-os-login/pull/59))
- chore(deps): lock file maintenance ([#58](https://github.com/googleapis/nodejs-os-login/pull/58))
- remove that whitespace ([#56](https://github.com/googleapis/nodejs-os-login/pull/56))
- chore: update renovate config ([#57](https://github.com/googleapis/nodejs-os-login/pull/57))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-os-login/pull/54))
- chore: move mocha options to mocha.opts ([#52](https://github.com/googleapis/nodejs-os-login/pull/52))
- chore: require node 8 for samples ([#53](https://github.com/googleapis/nodejs-os-login/pull/53))
- chore(deps): lock file maintenance ([#51](https://github.com/googleapis/nodejs-os-login/pull/51))
- chore(deps): update dependency eslint-plugin-node to v7 ([#48](https://github.com/googleapis/nodejs-os-login/pull/48))
- test: use strictEqual in tests ([#49](https://github.com/googleapis/nodejs-os-login/pull/49))
- chore(deps): lock file maintenance ([#47](https://github.com/googleapis/nodejs-os-login/pull/47))
- chore(deps): lock file maintenance ([#45](https://github.com/googleapis/nodejs-os-login/pull/45))
- chore(deps): lock file maintenance ([#44](https://github.com/googleapis/nodejs-os-login/pull/44))
- chore(deps): lock file maintenance ([#42](https://github.com/googleapis/nodejs-os-login/pull/42))
- chore(deps): lock file maintenance ([#41](https://github.com/googleapis/nodejs-os-login/pull/41))
- chore(deps): lock file maintenance ([#40](https://github.com/googleapis/nodejs-os-login/pull/40))
- Add license header to synth.py ([#39](https://github.com/googleapis/nodejs-os-login/pull/39))
- Add synth.py and update google-gax ([#36](https://github.com/googleapis/nodejs-os-login/pull/36))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#37](https://github.com/googleapis/nodejs-os-login/pull/37))
- Configure Renovate ([#30](https://github.com/googleapis/nodejs-os-login/pull/30))
- chore(package): update eslint to version 5.0.0 ([#31](https://github.com/googleapis/nodejs-os-login/pull/31))
- refactor: drop repo-tool as an exec wrapper ([#35](https://github.com/googleapis/nodejs-os-login/pull/35))
- fix: update linking for samples ([#32](https://github.com/googleapis/nodejs-os-login/pull/32))
- chore: update sample lockfiles ([#34](https://github.com/googleapis/nodejs-os-login/pull/34))
- chore(package): update nyc to version 12.0.2
- chore: lock files maintenance ([#26](https://github.com/googleapis/nodejs-os-login/pull/26))
- chore: the ultimate fix for repo-tools EPERM ([#25](https://github.com/googleapis/nodejs-os-login/pull/25))
- chore: timeout for system test ([#24](https://github.com/googleapis/nodejs-os-login/pull/24))
- chore: lock files maintenance ([#23](https://github.com/googleapis/nodejs-os-login/pull/23))
- chore: test on node10 ([#22](https://github.com/googleapis/nodejs-os-login/pull/22))
- chore: lock files maintenance ([#20](https://github.com/googleapis/nodejs-os-login/pull/20))
- chore: workaround for repo-tools EPERM ([#19](https://github.com/googleapis/nodejs-os-login/pull/19))
