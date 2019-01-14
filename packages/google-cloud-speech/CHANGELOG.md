# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/speech?activeTab=versions

## v2.2.0

01-14-2019 12:45 PST

### New Features
- feat: Multi-channel recognition

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#275](https://github.com/googleapis/nodejs-speech/pull/275))

### Documentation
- docs: check broken links in generated docs ([#268](https://github.com/googleapis/nodejs-speech/pull/268))

## v2.1.2

01-08-2019 14:18 PST

### Docs
- docs: update readme badges ([#248](https://github.com/googleapis/nodejs-speech/pull/248))
- docs: fixed encoding typo ([#263](https://github.com/googleapis/nodejs-speech/pull/263))
- docs(samples): updated samples code to use async await ([#214](https://github.com/googleapis/nodejs-speech/pull/214))
- docs: remove unused long running operation message types
- docs: fix typo in sample ([#203](https://github.com/googleapis/nodejs-speech/pull/203))

### Dependencies
- fix(deps): update dependency @google-cloud/common to ^0.29.0 ([#264](https://github.com/googleapis/nodejs-speech/pull/264))
- fix(deps): update dependency @google-cloud/common to ^0.27.0 ([#245](https://github.com/googleapis/nodejs-speech/pull/245))
- fix(deps): update dependency @google-cloud/common to ^0.26.0 ([#210](https://github.com/googleapis/nodejs-speech/pull/210))
- fix(deps): update dependency google-gax to ^0.22.0 ([#236](https://github.com/googleapis/nodejs-speech/pull/236))
- fix(deps): update dependency through2 to v3 ([#230](https://github.com/googleapis/nodejs-speech/pull/230))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#200](https://github.com/googleapis/nodejs-speech/pull/200))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#265](https://github.com/googleapis/nodejs-speech/pull/265))
- chore(build): inject yoshi automation key ([#262](https://github.com/googleapis/nodejs-speech/pull/262))
- chore: update nyc and eslint configs ([#261](https://github.com/googleapis/nodejs-speech/pull/261))
- chore: fix publish.sh permission +x ([#259](https://github.com/googleapis/nodejs-speech/pull/259))
- fix(build): fix Kokoro release script ([#258](https://github.com/googleapis/nodejs-speech/pull/258))
- build: add Kokoro configs for autorelease ([#257](https://github.com/googleapis/nodejs-speech/pull/257))
- chore: always nyc report before calling codecov ([#253](https://github.com/googleapis/nodejs-speech/pull/253))
- chore: nyc ignore build/test by default ([#252](https://github.com/googleapis/nodejs-speech/pull/252))
- chore: update license file ([#250](https://github.com/googleapis/nodejs-speech/pull/250))
- fix(build): fix system key decryption ([#246](https://github.com/googleapis/nodejs-speech/pull/246))
- chore: add a synth.metadata
- refactor: convert samples test from ava to mocha ([#221](https://github.com/googleapis/nodejs-speech/pull/221))
- chore: update eslintignore config ([#235](https://github.com/googleapis/nodejs-speech/pull/235))
- chore: update proto comments and grpc timeouts ([#234](https://github.com/googleapis/nodejs-speech/pull/234))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#233](https://github.com/googleapis/nodejs-speech/pull/233))
- chore: drop contributors from multiple places ([#232](https://github.com/googleapis/nodejs-speech/pull/232))
- chore: use latest npm on Windows ([#231](https://github.com/googleapis/nodejs-speech/pull/231))
- chore: update eslint config ([#228](https://github.com/googleapis/nodejs-speech/pull/228))
- chore: update CircleCI config ([#227](https://github.com/googleapis/nodejs-speech/pull/227))
- chore(deps): update dependency eslint-plugin-node to v8 ([#219](https://github.com/googleapis/nodejs-speech/pull/219))
- fix: fix the sample tests again ([#218](https://github.com/googleapis/nodejs-speech/pull/218))
- fix: fix the sample tests ([#217](https://github.com/googleapis/nodejs-speech/pull/217))
- chore: remove unused dependencies ([#216](https://github.com/googleapis/nodejs-speech/pull/216))
- chore: update issue templates ([#215](https://github.com/googleapis/nodejs-speech/pull/215))
- chore: remove old issue template ([#212](https://github.com/googleapis/nodejs-speech/pull/212))
- build: run tests on node11 ([#211](https://github.com/googleapis/nodejs-speech/pull/211))
- chores(build): do not collect sponge.xml from windows builds ([#209](https://github.com/googleapis/nodejs-speech/pull/209))
- chores(build): run codecov on continuous builds ([#208](https://github.com/googleapis/nodejs-speech/pull/208))
- chore: update new issue template ([#207](https://github.com/googleapis/nodejs-speech/pull/207))
- chore(deps): update dependency sinon to v7 ([#202](https://github.com/googleapis/nodejs-speech/pull/202))
- build: fix codecov uploading on Kokoro ([#204](https://github.com/googleapis/nodejs-speech/pull/204))

## v2.1.1

### Bug fixes
- fix: send streamingConfig as a separate write before audioContent ([#176](https://github.com/googleapis/nodejs-speech/pull/176))
- fix: Parse response errors and emit as error event. ([#172](https://github.com/googleapis/nodejs-speech/pull/172))
- fix(deps): update dependency google-gax to ^0.20.0 ([#168](https://github.com/googleapis/nodejs-speech/pull/168))
- fix(samples): storage import ([#166](https://github.com/googleapis/nodejs-speech/pull/166))
- fix(deps): update dependency @google-cloud/common to ^0.25.0 ([#178](https://github.com/googleapis/nodejs-speech/pull/178))

### Documentation
- docs(sample): auto_punctuation & model selection ([#179](https://github.com/googleapis/nodejs-speech/pull/179))
- docs: regenerate library README.md that got overwritten by samples README ([#175](https://github.com/googleapis/nodejs-speech/pull/175))

### Internal / Testing Changes
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#193](https://github.com/googleapis/nodejs-speech/pull/193))
- Update kokoro config ([#190](https://github.com/googleapis/nodejs-speech/pull/190))
- Update kokoro config ([#189](https://github.com/googleapis/nodejs-speech/pull/189))
- test: remove appveyor config ([#187](https://github.com/googleapis/nodejs-speech/pull/187))
- Update the CI config ([#185](https://github.com/googleapis/nodejs-speech/pull/185))
- test: throw on deprecation ([#132](https://github.com/googleapis/nodejs-speech/pull/132))
- Fix unhandled promise rejection in tests ([#180](https://github.com/googleapis/nodejs-speech/pull/180))
- Enable prefer-const in the eslint config ([#181](https://github.com/googleapis/nodejs-speech/pull/181))
- Enable no-var in eslint ([#177](https://github.com/googleapis/nodejs-speech/pull/177))
- fix(tests): match regex ([#174](https://github.com/googleapis/nodejs-speech/pull/174))
- Switch to let/const ([#169](https://github.com/googleapis/nodejs-speech/pull/169))

## v2.1.0

### Implementation Changes
- fix: Register error event handler immediately. ([#156](https://github.com/googleapis/nodejs-speech/pull/156))

### New Features
- Re-generate library using /synth.py ([#160](https://github.com/googleapis/nodejs-speech/pull/160))
    - brings in Audio logging, Automatic punctuation, Video transcription, Model selection features

### Dependencies

- fix(deps): update dependency @google-cloud/storage to v2 ([#159](https://github.com/googleapis/nodejs-speech/pull/159))
- chore(deps): update dependency nyc to v13 ([#153](https://github.com/googleapis/nodejs-speech/pull/153))
- fix(deps): update dependency google-gax to ^0.19.0 ([#148](https://github.com/googleapis/nodejs-speech/pull/148))
- chore(deps): update dependency eslint-config-prettier to v3 ([#143](https://github.com/googleapis/nodejs-speech/pull/143))
- chore(deps): lock file maintenance ([#137](https://github.com/googleapis/nodejs-speech/pull/137))
- chore(deps): lock file maintenance ([#136](https://github.com/googleapis/nodejs-speech/pull/136))
- fix(deps): update dependency google-gax to ^0.18.0 ([#131](https://github.com/googleapis/nodejs-speech/pull/131))
- chore(deps): lock file maintenance ([#129](https://github.com/googleapis/nodejs-speech/pull/129))
- chore(deps): lock file maintenance ([#123](https://github.com/googleapis/nodejs-speech/pull/123))
- chore(deps): update dependency eslint-plugin-node to v7 ([#119](https://github.com/googleapis/nodejs-speech/pull/119))
- chore(deps): lock file maintenance ([#117](https://github.com/googleapis/nodejs-speech/pull/117))

### Documentation
- Add streaming microphone sample for Speech ([#87](https://github.com/googleapis/nodejs-speech/pull/87))
- Code Samples for new v1p1beta1 features ([#118](https://github.com/googleapis/nodejs-speech/pull/118))

### Internal / Testing Changes
- Update CI config ([#164](https://github.com/googleapis/nodejs-speech/pull/164))
- Retry npm install in CI ([#161](https://github.com/googleapis/nodejs-speech/pull/161))
- Update the CircleCI config ([#157](https://github.com/googleapis/nodejs-speech/pull/157))
- fix: use regex to test output ([#150](https://github.com/googleapis/nodejs-speech/pull/150))
- updates word time offsets region tag ([#146](https://github.com/googleapis/nodejs-speech/pull/146))
- Speech region tag update ([#145](https://github.com/googleapis/nodejs-speech/pull/145))
- Update the CI config ([#152](https://github.com/googleapis/nodejs-speech/pull/152))
- Add kokoro config ([#151](https://github.com/googleapis/nodejs-speech/pull/151))
- chore: make the CircleCI config consistent
- chore: do not use npm ci ([#141](https://github.com/googleapis/nodejs-speech/pull/141))
- chore: ignore package-lock.json ([#138](https://github.com/googleapis/nodejs-speech/pull/138))
- chore: update renovate config ([#133](https://github.com/googleapis/nodejs-speech/pull/133))
- chore: make the CircleCI config consistent
- chore: move mocha options to mocha.opts ([#127](https://github.com/googleapis/nodejs-speech/pull/127))
- chore: require node 8 for samples ([#128](https://github.com/googleapis/nodejs-speech/pull/128))
- test: use strictEqual in tests ([#120](https://github.com/googleapis/nodejs-speech/pull/120))
- modify helpers.js to be compatible with generated code ([#116](https://github.com/googleapis/nodejs-speech/pull/116))

