# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/dialogflow?activeTab=versions

## v0.8.2

03-13-2019 16:30 PDT

### Bug Fixes
- fix: throw on invalid credentials ([#281](https://github.com/googleapis/nodejs-dialogflow/pull/281))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#269](https://github.com/googleapis/nodejs-dialogflow/pull/269))

### Documentation
- docs: use backticks for JS values ([#299](https://github.com/googleapis/nodejs-dialogflow/pull/299))
- docs: update jsdoc strings and import paths ([#298](https://github.com/googleapis/nodejs-dialogflow/pull/298))
- docs: update links in contrib guide ([#283](https://github.com/googleapis/nodejs-dialogflow/pull/283))
- docs: update contributing path in README ([#275](https://github.com/googleapis/nodejs-dialogflow/pull/275))
- docs: move CONTRIBUTING.md to root ([#274](https://github.com/googleapis/nodejs-dialogflow/pull/274))
- docs: add lint/fix example to contributing guide ([#272](https://github.com/googleapis/nodejs-dialogflow/pull/272))
- docs: fix example comments ([#271](https://github.com/googleapis/nodejs-dialogflow/pull/271))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#296](https://github.com/googleapis/nodejs-dialogflow/pull/296))
- build: use node10 to run samples-test, system-test etc ([#295](https://github.com/googleapis/nodejs-dialogflow/pull/295))
- build: update release configuration
- chore: sync latest proto docs
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#282](https://github.com/googleapis/nodejs-dialogflow/pull/282))
- fix(deps): update dependency yargs to v13 ([#280](https://github.com/googleapis/nodejs-dialogflow/pull/280))
- build: create docs test npm scripts ([#279](https://github.com/googleapis/nodejs-dialogflow/pull/279))
- build: test using @grpc/grpc-js in CI ([#276](https://github.com/googleapis/nodejs-dialogflow/pull/276))
- refactor: improve generated code style. ([#270](https://github.com/googleapis/nodejs-dialogflow/pull/270))

## v0.8.1

01-28-2019 13:24 PST

### Documentation
- fix(docs): dialogflow isnt published under @google-cloud scope ([#266](https://github.com/googleapis/nodejs-dialogflow/pull/266))

## v0.8.0

01-28-2019 11:05 PST

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v4 ([#261](https://github.com/googleapis/nodejs-dialogflow/pull/261))
- fix(deps): update dependency google-gax to ^0.24.0 ([#260](https://github.com/googleapis/nodejs-dialogflow/pull/260))
- fix(deps): update dependency google-gax to ^0.23.0 ([#256](https://github.com/googleapis/nodejs-dialogflow/pull/256))
- fix(deps): update dependency google-gax to ^0.22.0 ([#217](https://github.com/googleapis/nodejs-dialogflow/pull/217))
- fix(deps): update dependency google-gax to ^0.21.0 ([#215](https://github.com/googleapis/nodejs-dialogflow/pull/215))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#214](https://github.com/googleapis/nodejs-dialogflow/pull/214))
- chore: remove unused deps ([#212](https://github.com/googleapis/nodejs-dialogflow/pull/212))
- fix(deps): update dependency through2 to v3 ([#209](https://github.com/googleapis/nodejs-dialogflow/pull/209))
- chore(deps): update dependency eslint-plugin-node to v8 ([#199](https://github.com/googleapis/nodejs-dialogflow/pull/199))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#191](https://github.com/googleapis/nodejs-dialogflow/pull/191))

### Documentation
- refactor(samples): convert sample tests from ava to mocha ([#222](https://github.com/googleapis/nodejs-dialogflow/pull/222))
- fix(docs): properly show how to require this module ([#263](https://github.com/googleapis/nodejs-dialogflow/pull/263))
- fix(samples): Fixed typo in example ([#179](https://github.com/googleapis/nodejs-dialogflow/pull/179))
- build: ignore googleapis.com in doc link check ([#259](https://github.com/googleapis/nodejs-dialogflow/pull/259))
- chore: update license year
- build: check broken links in generated docs ([#254](https://github.com/googleapis/nodejs-dialogflow/pull/254))
- fix(docs): remove unused long running operations types
- docs: improve the quickstart sample ([#234](https://github.com/googleapis/nodejs-dialogflow/pull/234))
- docs: update the readme ([#232](https://github.com/googleapis/nodejs-dialogflow/pull/232))
- docs(samples): updated samples to use async/await ([#228](https://github.com/googleapis/nodejs-dialogflow/pull/228))
- docs: Strip dynamic badges from README ([#184](https://github.com/googleapis/nodejs-dialogflow/pull/184))

### Internal / Testing Changes
- refactor: improve the sample tests ([#251](https://github.com/googleapis/nodejs-dialogflow/pull/251))
- chore(build): inject yoshi automation key ([#249](https://github.com/googleapis/nodejs-dialogflow/pull/249))
- chore: update nyc and eslint configs ([#248](https://github.com/googleapis/nodejs-dialogflow/pull/248))
- chore: fix publish.sh permission +x ([#245](https://github.com/googleapis/nodejs-dialogflow/pull/245))
- fix(build): fix Kokoro release script ([#244](https://github.com/googleapis/nodejs-dialogflow/pull/244))
- build: add Kokoro configs for autorelease ([#243](https://github.com/googleapis/nodejs-dialogflow/pull/243))
- chore: always nyc report before calling codecov ([#241](https://github.com/googleapis/nodejs-dialogflow/pull/241))
- chore: nyc ignore build/test by default ([#240](https://github.com/googleapis/nodejs-dialogflow/pull/240))
- chore: update the renovate config ([#237](https://github.com/googleapis/nodejs-dialogflow/pull/237))
- fix(build): fix system key decryption ([#230](https://github.com/googleapis/nodejs-dialogflow/pull/230))
- chore: add a synth.metadata
- chore: update eslintignore config ([#216](https://github.com/googleapis/nodejs-dialogflow/pull/216))
- chore: drop contributors from multiple places ([#213](https://github.com/googleapis/nodejs-dialogflow/pull/213))
- chore: use latest npm on Windows ([#210](https://github.com/googleapis/nodejs-dialogflow/pull/210))
- fix: update gRPC timeouts ([#208](https://github.com/googleapis/nodejs-dialogflow/pull/208))
- chore: update CircleCI config ([#207](https://github.com/googleapis/nodejs-dialogflow/pull/207))
- chore: include build in eslintignore ([#204](https://github.com/googleapis/nodejs-dialogflow/pull/204))
- fix: use unique name for sample test knowledge base ([#198](https://github.com/googleapis/nodejs-dialogflow/pull/198))
- chore: update issue templates ([#197](https://github.com/googleapis/nodejs-dialogflow/pull/197))
- chore: remove old issue template ([#195](https://github.com/googleapis/nodejs-dialogflow/pull/195))
- build: run tests on node11 ([#194](https://github.com/googleapis/nodejs-dialogflow/pull/194))
- chores(build): run codecov on continuous builds ([#190](https://github.com/googleapis/nodejs-dialogflow/pull/190))
- chores(build): do not collect sponge.xml from windows builds ([#192](https://github.com/googleapis/nodejs-dialogflow/pull/192))
- chore: update new issue template ([#189](https://github.com/googleapis/nodejs-dialogflow/pull/189))
- build: fix codecov uploading on Kokoro ([#183](https://github.com/googleapis/nodejs-dialogflow/pull/183))
- Update CI config ([#180](https://github.com/googleapis/nodejs-dialogflow/pull/180))

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

