# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/PACKAGE NAME?activeTab=versions

## v0.12.0

04-26-2019 12:39 PDT

### New Features

- feat: add x-goog-request-params header
- feat: add deterministic encryption ([#263](https://github.com/googleapis/nodejs-dlp/pull/263))

## v0.11.0

03-12-2019 15:22 PDT

Greetings!  This release has a few new features, bug fixes, and doc updates.  Enjoy!

### New Features
- feat: add support for triggers and matching types ([#243](https://github.com/googleapis/nodejs-dlp/pull/243))

### Bug Fixes
- fix: throw on invalid credentials ([#238](https://github.com/googleapis/nodejs-dlp/pull/238))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#226](https://github.com/googleapis/nodejs-dlp/pull/226))

### Documentation
- docs: update links in contrib guide ([#240](https://github.com/googleapis/nodejs-dlp/pull/240))
- docs: move CONTRIBUTING.md to root ([#231](https://github.com/googleapis/nodejs-dlp/pull/231))
- docs: update samples in comments ([#230](https://github.com/googleapis/nodejs-dlp/pull/230))
- docs: update contributing path in README ([#232](https://github.com/googleapis/nodejs-dlp/pull/232))
- docs: add lint/fix example to contributing guide ([#228](https://github.com/googleapis/nodejs-dlp/pull/228))

### Internal / Testing Changes
- fix(deps): update dependency @google-cloud/pubsub to ^0.28.0 ([#253](https://github.com/googleapis/nodejs-dlp/pull/253))
- refactor: update json import paths ([#254](https://github.com/googleapis/nodejs-dlp/pull/254))
- build: Add docuploader credentials to node publish jobs ([#251](https://github.com/googleapis/nodejs-dlp/pull/251))
- build: use node10 to run samples-test, system-test etc ([#250](https://github.com/googleapis/nodejs-dlp/pull/250))
- chore: update release config and proto formatting
- chore: sync latest proto docs ([#245](https://github.com/googleapis/nodejs-dlp/pull/245))
- fix(test): increase minLikelihood option threshold to VERY_LIKELY ([#248](https://github.com/googleapis/nodejs-dlp/pull/248))
- chore(deps): update dependency mocha to v6
- fix(deps): update dependency yargs to v13 ([#235](https://github.com/googleapis/nodejs-dlp/pull/235))
- build: use linkinator for docs test ([#239](https://github.com/googleapis/nodejs-dlp/pull/239))
- refactor: modernize the sample tests ([#237](https://github.com/googleapis/nodejs-dlp/pull/237))
- build: create docs test npm scripts ([#234](https://github.com/googleapis/nodejs-dlp/pull/234))
- build: test using @grpc/grpc-js in CI ([#233](https://github.com/googleapis/nodejs-dlp/pull/233))
- chore(deps): update dependency eslint-config-prettier to v4 ([#223](https://github.com/googleapis/nodejs-dlp/pull/223))
- chore: update the copyright date in the header. ([#224](https://github.com/googleapis/nodejs-dlp/pull/224))
- build: ignore googleapis.com in doc link check ([#220](https://github.com/googleapis/nodejs-dlp/pull/220))
- build: check broken links in generated docs ([#213](https://github.com/googleapis/nodejs-dlp/pull/213))
- fix(samples-test): increase likelihood threshold ([#222](https://github.com/googleapis/nodejs-dlp/pull/222))

## v0.10.0

01-04-2019 15:04 PST

### New Features
- feat: add excluded field field for storage ([#169](https://github.com/googleapis/nodejs-dlp/pull/169))
- feat: add support for storedInfoTypes ([#157](https://github.com/googleapis/nodejs-dlp/pull/157))
- feat: add  CloudStorageRegexFileSet ([#153](https://github.com/googleapis/nodejs-dlp/pull/153))
- feat: add sorting and ordering of results ([#147](https://github.com/googleapis/nodejs-dlp/pull/147))

### Dependencies
- fix(deps): update dependency @google-cloud/pubsub to ^0.22.0 ([#192](https://github.com/googleapis/nodejs-dlp/pull/192))
- fix(deps): update dependency @google-cloud/pubsub to ^0.21.0 ([#183](https://github.com/googleapis/nodejs-dlp/pull/183))
- fix(deps): update dependency google-gax to ^0.22.0 ([#182](https://github.com/googleapis/nodejs-dlp/pull/182))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#180](https://github.com/googleapis/nodejs-dlp/pull/180))
- chore(deps): update dependency eslint-plugin-node to v8 ([#170](https://github.com/googleapis/nodejs-dlp/pull/170))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#151](https://github.com/googleapis/nodejs-dlp/pull/151))
- fix(deps): update dependency @google-cloud/pubsub to ^0.20.0 ([#137](https://github.com/googleapis/nodejs-dlp/pull/137))
- fix(deps): update dependency google-gax to ^0.20.0 ([#138](https://github.com/googleapis/nodejs-dlp/pull/138))

### Documentation
- samples: Added custom dictionary and regex code samples ([#204](https://github.com/googleapis/nodejs-dlp/pull/204))
- refactor(samples): convert sample tests from ava to mocha ([#186](https://github.com/googleapis/nodejs-dlp/pull/186))
- docs: update readme badges ([#194](https://github.com/googleapis/nodejs-dlp/pull/194))
- docs(samples): samples to use async/await ([#190](https://github.com/googleapis/nodejs-dlp/pull/190))

### Internal / Testing Changes
- nit: reordered gRPC message types ([#214](https://github.com/googleapis/nodejs-dlp/pull/214))
- tests: construct pubsub properly ([#143](https://github.com/googleapis/nodejs-dlp/pull/143))
- chore(build): inject yoshi automation key ([#209](https://github.com/googleapis/nodejs-dlp/pull/209))
- chore: update nyc and eslint configs ([#208](https://github.com/googleapis/nodejs-dlp/pull/208))
- chore: fix publish.sh permission +x ([#206](https://github.com/googleapis/nodejs-dlp/pull/206))
- fix(build): fix Kokoro release script ([#205](https://github.com/googleapis/nodejs-dlp/pull/205))
- build: add Kokoro configs for autorelease ([#203](https://github.com/googleapis/nodejs-dlp/pull/203))
- chore: add synth.metadata ([#201](https://github.com/googleapis/nodejs-dlp/pull/201))
- chore: always nyc report before calling codecov ([#199](https://github.com/googleapis/nodejs-dlp/pull/199))
- chore: nyc ignore build/test by default ([#198](https://github.com/googleapis/nodejs-dlp/pull/198))
- chore: update license file ([#196](https://github.com/googleapis/nodejs-dlp/pull/196))
- fix(build): fix system key decryption ([#191](https://github.com/googleapis/nodejs-dlp/pull/191))
- build: fix the lint rules ([#187](https://github.com/googleapis/nodejs-dlp/pull/187))
- chore: update eslintignore config ([#181](https://github.com/googleapis/nodejs-dlp/pull/181))
- chore: drop contributors from multiple places ([#179](https://github.com/googleapis/nodejs-dlp/pull/179))
- chore: use latest npm on Windows ([#178](https://github.com/googleapis/nodejs-dlp/pull/178))
- chore: update CircleCI config ([#177](https://github.com/googleapis/nodejs-dlp/pull/177))
- chore: include build in eslintignore ([#174](https://github.com/googleapis/nodejs-dlp/pull/174))
- chore: update issue templates ([#168](https://github.com/googleapis/nodejs-dlp/pull/168))
- chore: remove old issue template ([#166](https://github.com/googleapis/nodejs-dlp/pull/166))
- build: run tests on node11 ([#165](https://github.com/googleapis/nodejs-dlp/pull/165))
- chores(build): do not collect sponge.xml from windows builds ([#164](https://github.com/googleapis/nodejs-dlp/pull/164))
- chores(build): run codecov on continuous builds ([#163](https://github.com/googleapis/nodejs-dlp/pull/163))
- chore: update new issue template ([#162](https://github.com/googleapis/nodejs-dlp/pull/162))
- build: fix codecov uploading on Kokoro ([#156](https://github.com/googleapis/nodejs-dlp/pull/156))
- Update kokoro config ([#152](https://github.com/googleapis/nodejs-dlp/pull/152))
- build: prevent system/sample-test from leaking credentials
- test: remove appveyor config ([#146](https://github.com/googleapis/nodejs-dlp/pull/146))
- Update the kokoro config ([#145](https://github.com/googleapis/nodejs-dlp/pull/145))
- Fix the linter ([#142](https://github.com/googleapis/nodejs-dlp/pull/142))
- Enable prefer-const in the eslint config ([#141](https://github.com/googleapis/nodejs-dlp/pull/141))
- Enable no-var in eslint ([#140](https://github.com/googleapis/nodejs-dlp/pull/140))
- Switch to let/const ([#139](https://github.com/googleapis/nodejs-dlp/pull/139))

## v0.9.0

### New Features
- Bring in new feature:
    - StoredInfoTypes

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v3 (#110)
- chore(deps): lock file maintenance (#104)
- chore(deps): lock file maintenance (#103)
- fix(deps): update dependency google-gax to ^0.18.0 (#100)
- chore(deps): lock file maintenance (#99)
- chore(deps): lock file maintenance (#94)
- chore(deps): update dependency eslint-plugin-node to v7 (#91)
- chore(deps): lock file maintenance (#90)

### Documentation
- doc: add missing namespace (#108)
- DLP sample: Add autoPopulateTimespan option for creating job triggers. (#64)
- feat: Add code samples for DLP text redaction (#61)

### Internal / Testing Changes
- Update synth.py (#112)
- test: use strictEqual in tests (#92)
- chore: do not use npm ci (#107)
- chore: ignore package-lock.json (#105)
- chore: update renovate config (#102)
- remove that whitespace (#101)
- chore: move mocha options to mocha.opts (#97)
- chore: add node templates to synth.py (#95)
- fix: requiring samples/ node engine >7.6 because async/await was used (#93)

## v0.8.0

### BREAKING CHANGE
- fix: drop support for node.js 4.x and 9.x (#81)

### Documentation
- docs: export google.privacy.* namespace instead of google.cloud.* so rpc doc links work (#80)

### Internal / Testing Changes
- chore(build): use `npm ci` instead of `npm install` (#86)
- chore: really delete node4 and node9 (#83)

