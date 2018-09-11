# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/speech?activeTab=versions

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

