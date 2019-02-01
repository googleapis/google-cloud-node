# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-tasks?activeTab=versions

## v0.3.0

01-31-2019 23:06 PST

### Implementation Changes
- chore: adjust grpc timeout settings

### New Features
- feat: support the .dispatch_deadline property. ([#160](https://github.com/googleapis/nodejs-tasks/pull/160))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#161](https://github.com/googleapis/nodejs-tasks/pull/161))
- fix(deps): update dependency google-gax to ^0.24.0 ([#158](https://github.com/googleapis/nodejs-tasks/pull/158))
- fix(deps): update dependency google-gax to ^0.23.0 ([#154](https://github.com/googleapis/nodejs-tasks/pull/154))
- fix(deps): update dependency google-gax to ^0.22.0 ([#122](https://github.com/googleapis/nodejs-tasks/pull/122))

### Documentation
- fix(docs): remove unused long running operations types
- samples: add queue create and delete samples ([#142](https://github.com/googleapis/nodejs-tasks/pull/142))
- docs: update readme badges ([#133](https://github.com/googleapis/nodejs-tasks/pull/133))
- docs(samples): updated samples code to use async await ([#129](https://github.com/googleapis/nodejs-tasks/pull/129))
- update tasks samples to support new api version ([#83](https://github.com/googleapis/nodejs-tasks/pull/83))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#159](https://github.com/googleapis/nodejs-tasks/pull/159))
- build: check broken links in generated docs ([#151](https://github.com/googleapis/nodejs-tasks/pull/151))
- chore(build): inject yoshi automation key ([#149](https://github.com/googleapis/nodejs-tasks/pull/149))
- chore: update nyc and eslint configs ([#148](https://github.com/googleapis/nodejs-tasks/pull/148))
- chore: fix publish.sh permission +x ([#146](https://github.com/googleapis/nodejs-tasks/pull/146))
- fix(build): fix Kokoro release script ([#145](https://github.com/googleapis/nodejs-tasks/pull/145))
- build: add Kokoro configs for autorelease ([#144](https://github.com/googleapis/nodejs-tasks/pull/144))
- chore: always nyc report before calling codecov ([#139](https://github.com/googleapis/nodejs-tasks/pull/139))
- chore: nyc ignore build/test by default ([#138](https://github.com/googleapis/nodejs-tasks/pull/138))
- chore: clean up usage of prettier and eslint ([#137](https://github.com/googleapis/nodejs-tasks/pull/137))
- chore: update license file ([#135](https://github.com/googleapis/nodejs-tasks/pull/135))
- fix(build): fix system key decryption ([#131](https://github.com/googleapis/nodejs-tasks/pull/131))
- chore: add synth.metadata
- refactor(samples): convert sample tests from ava to mocha ([#126](https://github.com/googleapis/nodejs-tasks/pull/126))
- chore: update eslintignore config ([#121](https://github.com/googleapis/nodejs-tasks/pull/121))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#119](https://github.com/googleapis/nodejs-tasks/pull/119))
- chore: drop contributors from multiple places ([#118](https://github.com/googleapis/nodejs-tasks/pull/118))
- chore: use latest npm on Windows ([#117](https://github.com/googleapis/nodejs-tasks/pull/117))
- chore: update CircleCI config ([#115](https://github.com/googleapis/nodejs-tasks/pull/115))
- chore(deps): update dependency eslint-plugin-node to v8 ([#109](https://github.com/googleapis/nodejs-tasks/pull/109))
- chore: update issue templates ([#108](https://github.com/googleapis/nodejs-tasks/pull/108))
- chore: remove old issue template ([#104](https://github.com/googleapis/nodejs-tasks/pull/104))
- build: run tests on node11 ([#103](https://github.com/googleapis/nodejs-tasks/pull/103))
- chores(build): run codecov on continuous builds ([#99](https://github.com/googleapis/nodejs-tasks/pull/99))
- chores(build): do not collect sponge.xml from windows builds ([#100](https://github.com/googleapis/nodejs-tasks/pull/100))
- chore: update new issue template ([#98](https://github.com/googleapis/nodejs-tasks/pull/98))
- chore(deps): update dependency sinon to v7 ([#93](https://github.com/googleapis/nodejs-tasks/pull/93))
- build: fix codecov uploading on Kokoro ([#94](https://github.com/googleapis/nodejs-tasks/pull/94))
- Update kokoro config ([#90](https://github.com/googleapis/nodejs-tasks/pull/90))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#89](https://github.com/googleapis/nodejs-tasks/pull/89))
- Update kokoro config ([#87](https://github.com/googleapis/nodejs-tasks/pull/87))
- test: remove appveyor config ([#86](https://github.com/googleapis/nodejs-tasks/pull/86))
- Update the CI config ([#85](https://github.com/googleapis/nodejs-tasks/pull/85))
- Enable prefer-const in the eslint config ([#82](https://github.com/googleapis/nodejs-tasks/pull/82))
- Enable no-var in eslint ([#81](https://github.com/googleapis/nodejs-tasks/pull/81))
- chore(deps): update dependency sinon to v6.3.3 ([#79](https://github.com/googleapis/nodejs-tasks/pull/79))
- Switch to let/const ([#80](https://github.com/googleapis/nodejs-tasks/pull/80))

## v0.2.2

### Implementation Changes
This patch release reverts back to using v2beta3 as the default version. It also updates the samples.
- feat: using v2beta3 by default

### Documentation
- Update Cloud Tasks Sample ([#67](https://github.com/googleapis/nodejs-tasks/pull/67))

### Internal / Testing Changes
- fix: replace service account key with Tasks access ([#75](https://github.com/googleapis/nodejs-tasks/pull/75))

## v0.2.1

### Implementation Changes
Samples for v2beta3 is pending and they won't work for v2beta2. We're temporarily reverting back to defaulting to v2beta2 when you import the library like so:
```
const cloudTasks = require('@google-cloud/tasks');
const client = new cloudTasks.CloudTasksClient(); // v2beta2 by default
```
- feat: restoring v2beta2 by default ([#71](https://github.com/googleapis/nodejs-tasks/pull/71))

### Dependencies
v0.20.0 fixes an issue with semver.
- bump google-gax 0.20.0 ([#69](https://github.com/googleapis/nodejs-tasks/pull/69))

### Documentation
- add namespace to fix some 404s in doc ([#66](https://github.com/googleapis/nodejs-tasks/pull/66))

### Internal / Testing Changes
- Update CI config ([#65](https://github.com/googleapis/nodejs-tasks/pull/65))

## v0.2.0

### New Features
- v2beta3 support for Node.js (#62)

### Internal / Testing Changes
- Retry npm install in CI (#63)

## v0.1.1

### Minor updates
- fix(deps): update dependency google-gax to ^0.19.0 (#49)
- fix(deps): update dependency google-gax to ^0.18.0 (#41)
- Re-generate library using /synth.py (#55)

### Docs
- docs: update pull queue command (#30)
- docs: updated gcloud command (#29)
- Add Tasks Samples and Tests (#14)

### Build & Test updates
- Update the CI config (#52)
- chore(deps): update dependency nyc to v13 (#53)
- chore: update CircleCI config
- chore(deps): update dependency eslint-config-prettier to v3 (#48)
- chore: do not use npm ci (#47)
- chore: ignore package-lock.json (#45)
- chore: update renovate config (#43)
- remove that whitespace (#42)
- chore(deps): lock file maintenance (#40)
- chore: move mocha options to mocha.opts (#39)
- Re-generate library using /synth.py (#38)
- Re-generate library using /synth.py (#35)
- chore: add node templates to synth.py (#36)
- fix: samples to require node>=8 (#37)
- chore(deps): lock file maintenance (#34)
- chore(deps): update dependency eslint-plugin-node to v7 (#32)
- test: use strictEqual in tests (#33)
- chore(deps): lock file maintenance (#31)
- Upgrade repo-tools and regenerate scaffolding. (#27)
- chore(deps): lock file maintenance (#25)
- chore(deps): lock file maintenance (#24)
- chore(deps): lock file maintenance (#23)
- fix(deps): update dependency yargs to v12 (#22)
- fix: update dependencies, run synth (#20)
- Configure Renovate (#15)

