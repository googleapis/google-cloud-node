# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/text-to-speech?activeTab=versions

## [1.0.0](https://www.github.com/googleapis/nodejs-text-to-speech/compare/v0.5.1...v1.0.0) (2019-05-14)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#223](https://www.github.com/googleapis/nodejs-text-to-speech/issues/223)) ([aa8bbed](https://www.github.com/googleapis/nodejs-text-to-speech/commit/aa8bbed))
* DEADLINE_EXCEEDED is idempotent ([#224](https://www.github.com/googleapis/nodejs-text-to-speech/issues/224)) ([affbbd1](https://www.github.com/googleapis/nodejs-text-to-speech/commit/affbbd1))
* DEADLINE_EXCEEDED no longer treated as idempotent and retried ([9e5baee](https://www.github.com/googleapis/nodejs-text-to-speech/commit/9e5baee))
* **deps:** update dependency google-gax to ^0.26.0 ([#212](https://www.github.com/googleapis/nodejs-text-to-speech/issues/212)) ([30ea99f](https://www.github.com/googleapis/nodejs-text-to-speech/commit/30ea99f))


### Build System

* upgrade engines field to >=8.10.0 ([#214](https://www.github.com/googleapis/nodejs-text-to-speech/issues/214)) ([d0c1639](https://www.github.com/googleapis/nodejs-text-to-speech/commit/d0c1639))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#214)

## v0.5.1

02-14-2019 17:36 PST

### Bug Fixes
- fix: throw on invalid credentials ([#189](https://github.com/googleapis/nodejs-text-to-speech/pull/189))

### Documentation
- docs: update sample to show method inside of async function ([#188](https://github.com/googleapis/nodejs-text-to-speech/pull/188))
- docs: update links in contrib guide ([#191](https://github.com/googleapis/nodejs-text-to-speech/pull/191))
- docs: update contributing path in README ([#184](https://github.com/googleapis/nodejs-text-to-speech/pull/184))

### Internal / Testing Changes
- build: use linkinator for docs test ([#190](https://github.com/googleapis/nodejs-text-to-speech/pull/190))
- fix(deps): update dependency yargs to v13 ([#187](https://github.com/googleapis/nodejs-text-to-speech/pull/187))
- build: create docs test npm scripts ([#186](https://github.com/googleapis/nodejs-text-to-speech/pull/186))
- build: test using @grpc/grpc-js in CI ([#185](https://github.com/googleapis/nodejs-text-to-speech/pull/185))
- chore: move CONTRIBUTING.md to root ([#183](https://github.com/googleapis/nodejs-text-to-speech/pull/183))

## v0.5.0

02-05-2019 13:22 PST

 ### New Features
- feat: add the effects_profile_id property. ([#173](https://github.com/googleapis/nodejs-text-to-speech/pull/173))

 ### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#178](https://github.com/googleapis/nodejs-text-to-speech/pull/178))
- chore(deps): update dependency eslint-config-prettier to v4 ([#176](https://github.com/googleapis/nodejs-text-to-speech/pull/176))
- fix(deps): update dependency google-gax to ^0.24.0 ([#175](https://github.com/googleapis/nodejs-text-to-speech/pull/175))
- fix(deps): update dependency google-gax to ^0.23.0 ([#170](https://github.com/googleapis/nodejs-text-to-speech/pull/170))

 ### Documentation
- build: ignore googleapis.com in doc link check ([#174](https://github.com/googleapis/nodejs-text-to-speech/pull/174))
- docs: fix dead link to audio profiles ([#177](https://github.com/googleapis/nodejs-text-to-speech/pull/177))
- fix(docs): fix require stmt ([#166](https://github.com/googleapis/nodejs-text-to-speech/pull/166))
- build: check broken links in generated docs ([#165](https://github.com/googleapis/nodejs-text-to-speech/pull/165))

 ### Internal / Testing Changes
- test: add a smoke test ([#172](https://github.com/googleapis/nodejs-text-to-speech/pull/172))
- refactor: modernize the sample tests ([#164](https://github.com/googleapis/nodejs-text-to-speech/pull/164))
- chore(build): inject yoshi automation key ([#161](https://github.com/googleapis/nodejs-text-to-speech/pull/161))
- chore: update nyc and eslint configs ([#160](https://github.com/googleapis/nodejs-text-to-speech/pull/160))
- chore: fix publish.sh permission +x ([#158](https://github.com/googleapis/nodejs-text-to-speech/pull/158))
- fix(build): fix Kokoro release script ([#157](https://github.com/googleapis/nodejs-text-to-speech/pull/157))
- build: add Kokoro configs for autorelease ([#156](https://github.com/googleapis/nodejs-text-to-speech/pull/156))
- chore: always nyc report before calling codecov ([#152](https://github.com/googleapis/nodejs-text-to-speech/pull/152))

## v0.4.0

12-05-2018 16:31 PST

### Implementation Changes
- chore: require node 8 for samples ([#61](https://github.com/googleapis/nodejs-text-to-speech/pull/61))

### Dependencies
- chore: remove unused deps and cleanup ([#125](https://github.com/googleapis/nodejs-text-to-speech/pull/125))
- chore: removed async from dependency list ([#140](https://github.com/googleapis/nodejs-text-to-speech/pull/140))
- fix(deps): update dependency google-gax to ^0.22.0 ([#132](https://github.com/googleapis/nodejs-text-to-speech/pull/132))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#129](https://github.com/googleapis/nodejs-text-to-speech/pull/129))
- chore(deps): update dependency through2 to v3 ([#123](https://github.com/googleapis/nodejs-text-to-speech/pull/123))
- chore(deps): update dependency eslint-plugin-node to v8 ([#114](https://github.com/googleapis/nodejs-text-to-speech/pull/114))
- chore(deps): update dependency canvas to v2 ([#102](https://github.com/googleapis/nodejs-text-to-speech/pull/102))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#98](https://github.com/googleapis/nodejs-text-to-speech/pull/98))
- fix(deps): update dependency google-gax to ^0.20.0 ([#85](https://github.com/googleapis/nodejs-text-to-speech/pull/85))
- chore(deps): update dependency nyc to v13 ([#78](https://github.com/googleapis/nodejs-text-to-speech/pull/78))
- fix(deps): update dependency google-gax to ^0.19.0 ([#76](https://github.com/googleapis/nodejs-text-to-speech/pull/76))
- Update region tags to standard ([#75](https://github.com/googleapis/nodejs-text-to-speech/pull/75))
- chore(deps): update dependency eslint-config-prettier to v3 ([#73](https://github.com/googleapis/nodejs-text-to-speech/pull/73))
- chore(deps): lock file maintenance ([#68](https://github.com/googleapis/nodejs-text-to-speech/pull/68))
- chore(deps): lock file maintenance ([#67](https://github.com/googleapis/nodejs-text-to-speech/pull/67))
- fix(deps): update dependency google-gax to ^0.18.0 ([#63](https://github.com/googleapis/nodejs-text-to-speech/pull/63))
- chore(deps): lock file maintenance ([#62](https://github.com/googleapis/nodejs-text-to-speech/pull/62))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-text-to-speech/pull/59))
- chore(deps): update dependency eslint-plugin-node to v7 ([#57](https://github.com/googleapis/nodejs-text-to-speech/pull/57))
- chore(deps): lock file maintenance ([#56](https://github.com/googleapis/nodejs-text-to-speech/pull/56))

### Documentation
- fix(docs): bad namespaces causing 404s ([#149](https://github.com/googleapis/nodejs-text-to-speech/pull/149))
- docs: update readme badges ([#143](https://github.com/googleapis/nodejs-text-to-speech/pull/143))
- docs(samples): updated samples code to use async await ([#118](https://github.com/googleapis/nodejs-text-to-speech/pull/118))

### Internal / Testing Changes
- chore: nyc ignore build/test by default ([#148](https://github.com/googleapis/nodejs-text-to-speech/pull/148))
- chore: clean up usage of prettier and eslint ([#147](https://github.com/googleapis/nodejs-text-to-speech/pull/147))
- chore: update license file ([#145](https://github.com/googleapis/nodejs-text-to-speech/pull/145))
- fix(build): fix system key decryption ([#141](https://github.com/googleapis/nodejs-text-to-speech/pull/141))
- refactor(samples): convert sample tests from ava to mocha ([#133](https://github.com/googleapis/nodejs-text-to-speech/pull/133))
- chore: add a synth.metadata
- chore: drop contributors from multiple places ([#126](https://github.com/googleapis/nodejs-text-to-speech/pull/126))
- chore: use latest npm on Windows ([#124](https://github.com/googleapis/nodejs-text-to-speech/pull/124))
- chore: update eslintignore
- chore: update CircleCI config ([#121](https://github.com/googleapis/nodejs-text-to-speech/pull/121))
- chore: update issue templates ([#113](https://github.com/googleapis/nodejs-text-to-speech/pull/113))
- chore: remove old issue template ([#111](https://github.com/googleapis/nodejs-text-to-speech/pull/111))
- build: run tests on node11 ([#110](https://github.com/googleapis/nodejs-text-to-speech/pull/110))
- chores(build): do not collect sponge.xml from windows builds ([#109](https://github.com/googleapis/nodejs-text-to-speech/pull/109))
- chores(build): run codecov on continuous builds ([#108](https://github.com/googleapis/nodejs-text-to-speech/pull/108))
- chore: update new issue template ([#107](https://github.com/googleapis/nodejs-text-to-speech/pull/107))
- build: fix codecov uploading on Kokoro ([#101](https://github.com/googleapis/nodejs-text-to-speech/pull/101))
- Update kokoro config ([#99](https://github.com/googleapis/nodejs-text-to-speech/pull/99))
- build: prevent system/sample-test from leaking credentials
- Update the kokoro config ([#94](https://github.com/googleapis/nodejs-text-to-speech/pull/94))
- test: remove appveyor config ([#93](https://github.com/googleapis/nodejs-text-to-speech/pull/93))
- Update the CI config ([#92](https://github.com/googleapis/nodejs-text-to-speech/pull/92))
- Fix the linter ([#90](https://github.com/googleapis/nodejs-text-to-speech/pull/90))
- Enable prefer-const in the eslint config ([#88](https://github.com/googleapis/nodejs-text-to-speech/pull/88))
- Enable no-var in eslint ([#87](https://github.com/googleapis/nodejs-text-to-speech/pull/87))
- Switch to let/const ([#86](https://github.com/googleapis/nodejs-text-to-speech/pull/86))
- Update CI config ([#84](https://github.com/googleapis/nodejs-text-to-speech/pull/84))
- Update CI config ([#83](https://github.com/googleapis/nodejs-text-to-speech/pull/83))
- Retry npm install in CI ([#81](https://github.com/googleapis/nodejs-text-to-speech/pull/81))
- Add templates to synth.py and run it ([#79](https://github.com/googleapis/nodejs-text-to-speech/pull/79))
- chore: do not use npm ci ([#72](https://github.com/googleapis/nodejs-text-to-speech/pull/72))
- chore: ignore package-lock.json ([#69](https://github.com/googleapis/nodejs-text-to-speech/pull/69))
- chore: update renovate config ([#65](https://github.com/googleapis/nodejs-text-to-speech/pull/65))
- chore: remove bonus whitespace
- Code Samples demonstrating Audio Profiles ([#31](https://github.com/googleapis/nodejs-text-to-speech/pull/31))
- remove that whitespace ([#64](https://github.com/googleapis/nodejs-text-to-speech/pull/64))
- chore: move mocha options to mocha.opts ([#60](https://github.com/googleapis/nodejs-text-to-speech/pull/60))
- test: use strictEqual in tests ([#58](https://github.com/googleapis/nodejs-text-to-speech/pull/58))

## v0.3.0

### Implementation Changes
- Fixed the wrong region tag (#46)

#### Breaking Change:
- fix: drop support for node.js 4.x and 9.x (#49)

### New Features
- v1 GA is released (#29) 🎉

### Dependencies
- Update synth.py and update google-gax to 0.17.0 (#45)
- chore(deps): update dependency eslint to v5 (#42)
- fix(deps): update dependency yargs to v12 (#44)
- chore(deps): update dependency ava to ^0.25.0 (#37)
- fix(deps): update dependency yargs to v11 (#43)
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 (#36)

### Documentation
- fix: update linking for samples (#33)

### Internal / Testing Changes
- Configure Renovate (#30)
- refactor: drop repo-tool as an exec wrapper (#35)
