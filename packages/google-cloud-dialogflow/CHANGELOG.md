# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/dialogflow?activeTab=versions

## v0.7.0

### Breaking Changes
- BREAKING: Drop support for node.js 4.x ([#164](https://github.com/googleapis/nodejs-dialogflow/pull/164))

### Bug fixes
- Fix typo in comment ([#168](https://github.com/googleapis/nodejs-dialogflow/pull/168))
- Update old samples to new agent using Room Reservations and match can… ([#162](https://github.com/googleapis/nodejs-dialogflow/pull/162))
- fix(samples/resource): fix intent creation ([#104](https://github.com/googleapis/nodejs-dialogflow/pull/104))
- fix(deps): update dependency google-gax to ^0.20.0 ([#142](https://github.com/googleapis/nodejs-dialogflow/pull/142))
- Remove dependency on @google-cloud/common ([#165](https://github.com/googleapis/nodejs-dialogflow/pull/165))
- Fix typo in word 'session' in detect sample comments ([#147](https://github.com/googleapis/nodejs-dialogflow/pull/147))
- fix(deps): update dependency uuid to v3.3.2 ([#122](https://github.com/googleapis/nodejs-dialogflow/pull/122))

### New Features
- Run the synth generator and update config ([#161](https://github.com/googleapis/nodejs-dialogflow/pull/161))

### Documentation
- feat(samples): Beta features PR  ([#144](https://github.com/googleapis/nodejs-dialogflow/pull/144))

### Internal / Testing Changes
- Update kokoro config ([#173](https://github.com/googleapis/nodejs-dialogflow/pull/173))
- test: remove appveyor config ([#172](https://github.com/googleapis/nodejs-dialogflow/pull/172))
- Configure kokoro CI ([#171](https://github.com/googleapis/nodejs-dialogflow/pull/171))
- Enable prefer-const in the eslint config ([#167](https://github.com/googleapis/nodejs-dialogflow/pull/167))
- chore(deps): update dependency eslint-config-prettier to v3 ([#148](https://github.com/googleapis/nodejs-dialogflow/pull/148))
- chore(deps): update dependency eslint-plugin-node to v7 ([#135](https://github.com/googleapis/nodejs-dialogflow/pull/135))
- Ignore package-lock.json ([#163](https://github.com/googleapis/nodejs-dialogflow/pull/163))
- chore(deps): update dependency nyc to v13 ([#154](https://github.com/googleapis/nodejs-dialogflow/pull/154))
- chore: assert.equal => assert.strictEqual ([#139](https://github.com/googleapis/nodejs-dialogflow/pull/139))
- chore(deps): update dependency eslint to v5 ([#112](https://github.com/googleapis/nodejs-dialogflow/pull/112))

## v0.6.0

### New Features
Version v0.6.0 of the Dialogflow NodeJS Client Library brings with it these changes:
- management of Knowledge base Documents support
- AudioConfig
- Intent: Telephony Gateway, supporting
  - TelephonyPlayAudio - plays audio from a file in Telephony Gateway
  - TelephonySynthesizeSpeech - synthesizes speech and plays back the audio to the caller
  - TelephonyTransferCall - transfers the call in Telephony Gateway
- end_interaction option for Intent and Webhook - indicates that the intent ends an interaction
- supports alternative query results from KnowledgeService
- deprecation: Intent: ml_enabled option
- protos documentation changes

..generated against googleapis/googleapis@9c3174a

### Dependencies
- fix(deps): update dependency yargs to v12 (edited) (#126)
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.1 (#129)
- fix(deps): update dependency uuid to v3.3.0 (#118)
- chore(deps): update dependency nyc to v12 (#99)
- fix(deps): update dependency @google-cloud/common to ^0.20.0 (#98)
- chore(deps): update node:10 docker digest to 055fe4 (#91)

### Documentation
- fix(samples): update the type of Training phases per (#131)

### Internal / Testing Changes
- chore: drop repo-tools as an exec wrapper (#136)
- gen: fix synth.py to copy all versions and regenerate (#134)
- chore(build): synth.py: npm ci; node templates
- chore(deps): update node:10 docker digest to 1201e1 (#96)
- Regenerate GAPIC for V1 and V2Beta1 using synth.py (#110)

