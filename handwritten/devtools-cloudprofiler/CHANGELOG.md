# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/profiler?activeTab=versions

## v2.0.2

06-26-2019 08:59 PDT

### Dependencies
- chore(deps): update dependency typescript to ~3.5.0 ([#498](https://github.com/googleapis/cloud-profiler-nodejs/pull/498))
- chore(deps): update dependency js-green-licenses to v1 ([#503](https://github.com/googleapis/cloud-profiler-nodejs/pull/503))
- chore(deps): update sinon and @types/sinon ([#504](https://github.com/googleapis/cloud-profiler-nodejs/pull/504))
- fix(deps): update dependency pprof to v1 ([#487](https://github.com/googleapis/cloud-profiler-nodejs/pull/487))

### Documentation
- fix(docs): make anchors work in jsdoc ([#513](https://github.com/googleapis/cloud-profiler-nodejs/pull/513))
- docs: add repo-metadata for docs ([#511](https://github.com/googleapis/cloud-profiler-nodejs/pull/511))

### Internal / Testing Changes
- build: switch to GitHub magic proxy ([#510](https://github.com/googleapis/cloud-profiler-nodejs/pull/510))
- build: set correct src path for template ([#508](https://github.com/googleapis/cloud-profiler-nodejs/pull/508))
- build: use standard kokoro configuration ([#502](https://github.com/googleapis/cloud-profiler-nodejs/pull/502))
- chore: run gts fix ([#506](https://github.com/googleapis/cloud-profiler-nodejs/pull/506))
- build: share some code for E2E tests ([#505](https://github.com/googleapis/cloud-profiler-nodejs/pull/505))
- build: don't run test scripts in verbose mode ([#501](https://github.com/googleapis/cloud-profiler-nodejs/pull/501))
- build: ignore proto files in test coverage ([#497](https://github.com/googleapis/cloud-profiler-nodejs/pull/497))

## v2.0.1

05-23-2019 13:08 PDT

### Implementation Changes
- fix: agent should correctly set zone in GCP ([#489](https://github.com/googleapis/cloud-profiler-nodejs/pull/489))

### Dependencies
- fix(deps): remove unused dependencies ([#494](https://github.com/googleapis/cloud-profiler-nodejs/pull/494))
- refactor: drop dependency on pify ([#493](https://github.com/googleapis/cloud-profiler-nodejs/pull/493))

### Documentation
- doc: remove reference to Node 6 from documentation ([#485](https://github.com/googleapis/cloud-profiler-nodejs/pull/485))

### Internal / Testing Changes
- chore: retry npm install in system test when the command hangs  ([#491](https://github.com/googleapis/cloud-profiler-nodejs/pull/491))
- chore: remove unused third_party directory ([#486](https://github.com/googleapis/cloud-profiler-nodejs/pull/486))

## v2.0.0

05-14-2019 13:21 PDT

### Implementation Changes
- build: remove support for node 6 ([#472](https://github.com/googleapis/cloud-profiler-nodejs/pull/472))

### Dependencies
- fix(deps): update dependency gcp-metadata to v2 ([#481](https://github.com/googleapis/cloud-profiler-nodejs/pull/481))
- fix(deps): update dependency @google-cloud/common to v1 ([#482](https://github.com/googleapis/cloud-profiler-nodejs/pull/482))
- fix(deps): update dependency pretty-ms to v5 ([#464](https://github.com/googleapis/cloud-profiler-nodejs/pull/464))
- chore(deps): update dependency gts to v1 ([#474](https://github.com/googleapis/cloud-profiler-nodejs/pull/474))
- fix(deps): update dependency gaxios to v2 ([#469](https://github.com/googleapis/cloud-profiler-nodejs/pull/469))
- chore(deps): update dependency @types/nock to v10 ([#470](https://github.com/googleapis/cloud-profiler-nodejs/pull/470))
- chore(dep): update mocha to 6.1 ([#461](https://github.com/googleapis/cloud-profiler-nodejs/pull/461))

### Documentation
- Specify default logging level ([#483](https://github.com/googleapis/cloud-profiler-nodejs/pull/483))

### Internal / Testing Changes
- build: allow Node 10 to push to codecov ([#480](https://github.com/googleapis/cloud-profiler-nodejs/pull/480))
- build: patch Windows container, fixing Node 10 ([#479](https://github.com/googleapis/cloud-profiler-nodejs/pull/479))
- Revert "build!: upgrade engines field to >=8.10.0 ([#476](https://github.com/googleapis/cloud-profiler-nodejs/pull/476))" ([#477](https://github.com/googleapis/cloud-profiler-nodejs/pull/477))
- build!: upgrade engines field to >=8.10.0 ([#476](https://github.com/googleapis/cloud-profiler-nodejs/pull/476))
- chore: update to .nycrc with --all enabled ([#473](https://github.com/googleapis/cloud-profiler-nodejs/pull/473))
- fix: update dependencies for npm audit ([#468](https://github.com/googleapis/cloud-profiler-nodejs/pull/468))
- fix:  add es2015 as target for tsconfig.json ([#466](https://github.com/googleapis/cloud-profiler-nodejs/pull/466))
- chore: remove old kokoro configs ([#458](https://github.com/googleapis/cloud-profiler-nodejs/pull/458))

## v1.1.2

04-04-2019 13:05 PDT

No changes since last release.

Confirming that we can use [releasetool](https://github.com/googleapis/releasetool) to release the agent going forward.

