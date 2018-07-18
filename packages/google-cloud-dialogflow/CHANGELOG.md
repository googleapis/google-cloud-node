# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/dialogflow?activeTab=versions

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

