# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-tasks?activeTab=versions

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

