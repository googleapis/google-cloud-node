# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/dataproc?activeTab=versions

## v0.4.0

01-07-2019 16:37 PST

### New Features
- feat: support WorkflowTemplate and gracefulDecommissionTimeout options for createCluster ([#145](https://github.com/googleapis/nodejs-dataproc/pull/145))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#115](https://github.com/googleapis/nodejs-dataproc/pull/115))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#113](https://github.com/googleapis/nodejs-dataproc/pull/113))
- chore(deps): update dependency eslint-plugin-node to v8 ([#103](https://github.com/googleapis/nodejs-dataproc/pull/103))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#90](https://github.com/googleapis/nodejs-dataproc/pull/90))

### Documentation
- docs: update readme badges ([#126](https://github.com/googleapis/nodejs-dataproc/pull/126))
- docs(samples): updated samples code to use async await ([#120](https://github.com/googleapis/nodejs-dataproc/pull/120))

### Internal / Testing Changes
- test: add a sample test ([#143](https://github.com/googleapis/nodejs-dataproc/pull/143))
- chore(build): inject yoshi automation key ([#141](https://github.com/googleapis/nodejs-dataproc/pull/141))
- chore: update nyc and eslint configs ([#140](https://github.com/googleapis/nodejs-dataproc/pull/140))
- chore: fix publish.sh permission +x ([#139](https://github.com/googleapis/nodejs-dataproc/pull/139))
- fix(build): fix Kokoro release script ([#138](https://github.com/googleapis/nodejs-dataproc/pull/138))
- build: add Kokoro configs for autorelease ([#137](https://github.com/googleapis/nodejs-dataproc/pull/137))
- chore: always nyc report before calling codecov ([#132](https://github.com/googleapis/nodejs-dataproc/pull/132))
- chore: nyc ignore build/test by default ([#131](https://github.com/googleapis/nodejs-dataproc/pull/131))
- chore: clean up usage of prettier and eslint ([#130](https://github.com/googleapis/nodejs-dataproc/pull/130))
- chore: update license file ([#127](https://github.com/googleapis/nodejs-dataproc/pull/127))
- fix(build): fix system key decryption ([#124](https://github.com/googleapis/nodejs-dataproc/pull/124))
- chore: add a synth.metadata
- chore: update eslintignore config ([#114](https://github.com/googleapis/nodejs-dataproc/pull/114))
- chore: drop contributors from multiple places ([#112](https://github.com/googleapis/nodejs-dataproc/pull/112))
- chore: use latest npm on Windows ([#111](https://github.com/googleapis/nodejs-dataproc/pull/111))
- chore: update CircleCI config ([#110](https://github.com/googleapis/nodejs-dataproc/pull/110))
- chore: include build in eslintignore ([#107](https://github.com/googleapis/nodejs-dataproc/pull/107))
- chore: update issue templates ([#102](https://github.com/googleapis/nodejs-dataproc/pull/102))
- chore: remove old issue template ([#100](https://github.com/googleapis/nodejs-dataproc/pull/100))
- build: run tests on node11 ([#99](https://github.com/googleapis/nodejs-dataproc/pull/99))
- chores(build): do not collect sponge.xml from windows builds ([#98](https://github.com/googleapis/nodejs-dataproc/pull/98))
- chores(build): run codecov on continuous builds ([#97](https://github.com/googleapis/nodejs-dataproc/pull/97))
- chore: update new issue template ([#96](https://github.com/googleapis/nodejs-dataproc/pull/96))
- build: fix codecov uploading on Kokoro ([#93](https://github.com/googleapis/nodejs-dataproc/pull/93))
- Update kokoro config ([#91](https://github.com/googleapis/nodejs-dataproc/pull/91))
- build: prevent system/sample-test from leaking credentials

## v0.3.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x ([#38](https://github.com/googleapis/nodejs-dataproc/pull/38))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#79](https://github.com/googleapis/nodejs-dataproc/pull/79))
- Remove unused dependencies ([#76](https://github.com/googleapis/nodejs-dataproc/pull/76))
- fix(deps): update dependency google-gax to ^0.19.0 ([#66](https://github.com/googleapis/nodejs-dataproc/pull/66))
- fix(deps): update dependency google-gax to ^0.18.0 ([#56](https://github.com/googleapis/nodejs-dataproc/pull/56))
- fix: update all dependencies

### Internal / Testing Changes
- Update the kokoro config ([#86](https://github.com/googleapis/nodejs-dataproc/pull/86))
- test: remove appveyor config ([#85](https://github.com/googleapis/nodejs-dataproc/pull/85))
- Update the CI config ([#84](https://github.com/googleapis/nodejs-dataproc/pull/84))
- Enable prefer-const in the eslint config ([#82](https://github.com/googleapis/nodejs-dataproc/pull/82))
- Enable no-var in eslint ([#81](https://github.com/googleapis/nodejs-dataproc/pull/81))
- Switch to let/const ([#80](https://github.com/googleapis/nodejs-dataproc/pull/80))
- test: throw on deprecation ([#57](https://github.com/googleapis/nodejs-dataproc/pull/57))
- Update CI config ([#78](https://github.com/googleapis/nodejs-dataproc/pull/78))
- Retry npm install in CI ([#75](https://github.com/googleapis/nodejs-dataproc/pull/75))
- Update CI configuration ([#72](https://github.com/googleapis/nodejs-dataproc/pull/72))
- Update CI config ([#70](https://github.com/googleapis/nodejs-dataproc/pull/70))
- chore(deps): update dependency nyc to v13 ([#68](https://github.com/googleapis/nodejs-dataproc/pull/68))
- chore(deps): update dependency eslint-config-prettier to v3 ([#65](https://github.com/googleapis/nodejs-dataproc/pull/65))
- chore: do not use npm ci ([#64](https://github.com/googleapis/nodejs-dataproc/pull/64))
- fix: fix the system tests ([#63](https://github.com/googleapis/nodejs-dataproc/pull/63))
- chore: ignore package-lock.json ([#61](https://github.com/googleapis/nodejs-dataproc/pull/61))
- chore(deps): lock file maintenance ([#60](https://github.com/googleapis/nodejs-dataproc/pull/60))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-dataproc/pull/59))
- chore: update renovate config ([#58](https://github.com/googleapis/nodejs-dataproc/pull/58))
- Update CI config ([#55](https://github.com/googleapis/nodejs-dataproc/pull/55))
- chore: add node templates to synth.py ([#51](https://github.com/googleapis/nodejs-dataproc/pull/51))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-dataproc/pull/54))
- chore: move mocha options to mocha.opts ([#52](https://github.com/googleapis/nodejs-dataproc/pull/52))
- chore: require node 8 for samples ([#53](https://github.com/googleapis/nodejs-dataproc/pull/53))
- chore(deps): lock file maintenance ([#50](https://github.com/googleapis/nodejs-dataproc/pull/50))
- chore(deps): update dependency eslint-plugin-node to v7 ([#47](https://github.com/googleapis/nodejs-dataproc/pull/47))
- test: use strictEqual in tests ([#48](https://github.com/googleapis/nodejs-dataproc/pull/48))
- chore(deps): lock file maintenance ([#46](https://github.com/googleapis/nodejs-dataproc/pull/46))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.1 ([#45](https://github.com/googleapis/nodejs-dataproc/pull/45))
- chore(build): use `npm ci` instead of `npm install` ([#42](https://github.com/googleapis/nodejs-dataproc/pull/42))
- chore(deps): lock file maintenance ([#41](https://github.com/googleapis/nodejs-dataproc/pull/41))
- chore(deps): lock file maintenance ([#40](https://github.com/googleapis/nodejs-dataproc/pull/40))
- chore(deps): lock file maintenance ([#39](https://github.com/googleapis/nodejs-dataproc/pull/39))
- chore(deps): lock file maintenance ([#37](https://github.com/googleapis/nodejs-dataproc/pull/37))
- chore(deps): lock file maintenance ([#36](https://github.com/googleapis/nodejs-dataproc/pull/36))
- Configure Renovate ([#29](https://github.com/googleapis/nodejs-dataproc/pull/29))
- chore(package): update eslint to version 5.0.0
- feat: add a synth file, regenerate ([#35](https://github.com/googleapis/nodejs-dataproc/pull/35))
- refactor: drop repo-tool as an exec wrapper ([#34](https://github.com/googleapis/nodejs-dataproc/pull/34))
- chore: update sample lockfiles ([#33](https://github.com/googleapis/nodejs-dataproc/pull/33))
- fix: update linking for samples ([#31](https://github.com/googleapis/nodejs-dataproc/pull/31))
- chore(package): update nyc to version 12.0.2
- back off nyc
- chore: lock files maintenance ([#24](https://github.com/googleapis/nodejs-dataproc/pull/24))
- chore: the ultimate fix for repo-tools EPERM ([#23](https://github.com/googleapis/nodejs-dataproc/pull/23))
- chore: timeout for system test ([#22](https://github.com/googleapis/nodejs-dataproc/pull/22))
- chore: lock files maintenance ([#21](https://github.com/googleapis/nodejs-dataproc/pull/21))
- chore: test on node10 ([#20](https://github.com/googleapis/nodejs-dataproc/pull/20))
- chore: lock files maintenance ([#19](https://github.com/googleapis/nodejs-dataproc/pull/19))
- chore: one more workaround for repo-tools EPERM ([#18](https://github.com/googleapis/nodejs-dataproc/pull/18))
- chore: workaround for repo-tools EPERM ([#17](https://github.com/googleapis/nodejs-dataproc/pull/17))
- regen package-lock
- chore: make samples depend on the current version
- chore: make samples depend on the current version
- chore: setup nighty build in CircleCI ([#15](https://github.com/googleapis/nodejs-dataproc/pull/15))

