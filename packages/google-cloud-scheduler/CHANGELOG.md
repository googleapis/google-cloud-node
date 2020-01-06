# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/scheduler?activeTab=versions

## [1.4.0](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.3.3...v1.4.0) (2020-01-05)


### Features

* add plural and singular resource descriptor ([564d3fc](https://www.github.com/googleapis/nodejs-scheduler/commit/564d3fcc61192400f52a65dfdb661a5898e8441b))
* move to typescript code generation ([#167](https://www.github.com/googleapis/nodejs-scheduler/issues/167)) ([b30417d](https://www.github.com/googleapis/nodejs-scheduler/commit/b30417d8935212453642a2db59338976c799f751))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([9c70dba](https://www.github.com/googleapis/nodejs-scheduler/commit/9c70dbab336711268fc3d7e37a4000b8a69cfc47))
* better client close(), update .nycrc, require mocha explicitly ([edce92c](https://www.github.com/googleapis/nodejs-scheduler/commit/edce92c64c036563d3d590ce620740bb12a2493b))

### [1.3.3](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.3.2...v1.3.3) (2019-11-15)


### Bug Fixes

* import long into proto ts declaration file ([#156](https://www.github.com/googleapis/nodejs-scheduler/issues/156)) ([1e81d5a](https://www.github.com/googleapis/nodejs-scheduler/commit/1e81d5af09e6183c9b4b5f037025fff799b54fc4))
* **docs:** snippets are now replaced in jsdoc comments ([#155](https://www.github.com/googleapis/nodejs-scheduler/issues/155)) ([15ffd73](https://www.github.com/googleapis/nodejs-scheduler/commit/15ffd73fe577d1b6161f7cc878c04aad033a8502))

### [1.3.2](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.3.1...v1.3.2) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#147](https://www.github.com/googleapis/nodejs-scheduler/issues/147)) ([9a7f9e7](https://www.github.com/googleapis/nodejs-scheduler/commit/9a7f9e7677d7c1384c1f6cc49e7700986c5a3301))

### [1.3.1](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.3.0...v1.3.1) (2019-10-14)


### Bug Fixes

* update proto comments and scopes ([#145](https://www.github.com/googleapis/nodejs-scheduler/issues/145)) ([de8ab60](https://www.github.com/googleapis/nodejs-scheduler/commit/de8ab602e08ece0b115dfead19720d7108098ac9))

## [1.3.0](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([4c83efd](https://www.github.com/googleapis/nodejs-scheduler/commit/4c83efd))


### Features

* .d.ts for protos ([#134](https://www.github.com/googleapis/nodejs-scheduler/issues/134)) ([8179cdd](https://www.github.com/googleapis/nodejs-scheduler/commit/8179cdd))

## [1.2.0](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.1.4...v1.2.0) (2019-09-06)


### Features

* load protos from JSON, grpc-fallback support ([d3e8ac6](https://www.github.com/googleapis/nodejs-scheduler/commit/d3e8ac6))

### [1.1.4](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.1.3...v1.1.4) (2019-08-26)


### Bug Fixes

* include the correct version of node in a header ([#122](https://www.github.com/googleapis/nodejs-scheduler/issues/122)) ([e8d3015](https://www.github.com/googleapis/nodejs-scheduler/commit/e8d3015))

### [1.1.3](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.1.2...v1.1.3) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([d0c958a](https://www.github.com/googleapis/nodejs-scheduler/commit/d0c958a))

### [1.1.2](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.1.1...v1.1.2) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#111](https://www.github.com/googleapis/nodejs-scheduler/issues/111)) ([cf84f3c](https://www.github.com/googleapis/nodejs-scheduler/commit/cf84f3c))

### [1.1.1](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#108](https://www.github.com/googleapis/nodejs-scheduler/issues/108)) ([a09fa34](https://www.github.com/googleapis/nodejs-scheduler/commit/a09fa34))

## [1.1.0](https://www.github.com/googleapis/nodejs-scheduler/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#104](https://www.github.com/googleapis/nodejs-scheduler/issues/104)) ([3f6708f](https://www.github.com/googleapis/nodejs-scheduler/commit/3f6708f))

## [1.0.0](https://www.github.com/googleapis/nodejs-scheduler/compare/v0.3.0...v1.0.0) (2019-05-13)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#93](https://www.github.com/googleapis/nodejs-scheduler/issues/93)) ([47a97dd](https://www.github.com/googleapis/nodejs-scheduler/commit/47a97dd))
* DEADLINE_EXCEEDED retry code is idempotent ([#94](https://www.github.com/googleapis/nodejs-scheduler/issues/94)) ([42f6c42](https://www.github.com/googleapis/nodejs-scheduler/commit/42f6c42))
* **deps:** update dependency google-gax to ^0.26.0 ([#81](https://www.github.com/googleapis/nodejs-scheduler/issues/81)) ([f26654a](https://www.github.com/googleapis/nodejs-scheduler/commit/f26654a))


### Build System

* upgrade engines field to >=8.10.0 ([#82](https://www.github.com/googleapis/nodejs-scheduler/issues/82)) ([47d1824](https://www.github.com/googleapis/nodejs-scheduler/commit/47d1824))


### Features

* DEADLINE_EXCEEDED is no longer retried; attemptDeadline option has been introduced ([86d0e4f](https://www.github.com/googleapis/nodejs-scheduler/commit/86d0e4f))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#82)

## v0.3.0

04-04-2019 13:46 PDT

### New Features
- feat(v1beta1): added oauthToken, oidcToken and attemptDeadline

The generation of the library includes these changes to v1beta1 (v1 unchanged):

- `HttpTarget`: added `oauthToken` and `oidcToken` fields
- `Job`: added `attemptDeadline` field


### Implementation Changes
- fix: include 'x-goog-request-params' header in requests ([#68](https://github.com/googleapis/nodejs-scheduler/pull/68))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#66](https://github.com/googleapis/nodejs-scheduler/pull/66))
- build: use per-repo publish token ([#63](https://github.com/googleapis/nodejs-scheduler/pull/63))
- refactor: update json import paths ([#62](https://github.com/googleapis/nodejs-scheduler/pull/62))

## v0.2.0

03-11-2019 12:48 PDT

### New features
- feat: add v1 version of API ([#59](https://github.com/googleapis/nodejs-scheduler/pull/59))

### Bug fixes
- fix: throw on invalid credentials ([#48](https://github.com/googleapis/nodejs-scheduler/pull/48))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#39](https://github.com/googleapis/nodejs-scheduler/pull/39))
- fix(deps): update dependency google-gax to ^0.24.0 ([#37](https://github.com/googleapis/nodejs-scheduler/pull/37))
- fix(deps): update dependency google-gax to ^0.23.0 ([#32](https://github.com/googleapis/nodejs-scheduler/pull/32))

### Documentation
- docs: update comments on protos ([#53](https://github.com/googleapis/nodejs-scheduler/pull/53))
- docs: update API doc comments ([#52](https://github.com/googleapis/nodejs-scheduler/pull/52))
- docs: update links in contrib guide ([#50](https://github.com/googleapis/nodejs-scheduler/pull/50))
- docs: update contributing path in README ([#45](https://github.com/googleapis/nodejs-scheduler/pull/45))
- docs: move CONTRIBUTING.md to root ([#44](https://github.com/googleapis/nodejs-scheduler/pull/44))
- docs: add lint/fix example to contributing guide ([#42](https://github.com/googleapis/nodejs-scheduler/pull/42))
- docs: fix example comments ([#41](https://github.com/googleapis/nodejs-scheduler/pull/41))
- docs(samples): Add App Engine Target sample ([#33](https://github.com/googleapis/nodejs-scheduler/pull/33))

### Internal / Testing Changes
- chore(deps): update dependency supertest to v4
- build: Add docuploader credentials to node publish jobs ([#56](https://github.com/googleapis/nodejs-scheduler/pull/56))
- build: update release config ([#54](https://github.com/googleapis/nodejs-scheduler/pull/54))
- build: use node10 to run samples-test, system-test etc ([#55](https://github.com/googleapis/nodejs-scheduler/pull/55))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#49](https://github.com/googleapis/nodejs-scheduler/pull/49))
- build: create docs test npm scripts ([#47](https://github.com/googleapis/nodejs-scheduler/pull/47))
- build: test using @grpc/grpc-js in CI ([#46](https://github.com/googleapis/nodejs-scheduler/pull/46))
- refactor: improve generated code style. ([#40](https://github.com/googleapis/nodejs-scheduler/pull/40))
- chore(deps): update dependency eslint-config-prettier to v4 ([#38](https://github.com/googleapis/nodejs-scheduler/pull/38))
- build: ignore googleapis.com in doc link check ([#36](https://github.com/googleapis/nodejs-scheduler/pull/36))
- chore: update year in the license headers ([#35](https://github.com/googleapis/nodejs-scheduler/pull/35))
- build: check broken links in generated docs ([#26](https://github.com/googleapis/nodejs-scheduler/pull/26))
- chore: update proto settings  ([#31](https://github.com/googleapis/nodejs-scheduler/pull/31))

## v0.1.2

01-02-2019 14:57 PST

### Documentation
- fix(docs): fix missing namespace ([#28](https://github.com/googleapis/nodejs-scheduler/pull/28))
- fix(docs): run generator to fix code samples require module ([#27](https://github.com/googleapis/nodejs-scheduler/pull/27))

### Internal / Testing Changes
- chore: add a synth.metadata ([#25](https://github.com/googleapis/nodejs-scheduler/pull/25))
- chore(build): inject yoshi automation key ([#24](https://github.com/googleapis/nodejs-scheduler/pull/24))
- chore: update nyc and eslint configs ([#23](https://github.com/googleapis/nodejs-scheduler/pull/23))

## v0.1.1

12-07-2018 14:21 PST

### Internal / Testing Changes
- build: use fastconfig push ([#20](https://github.com/googleapis/nodejs-scheduler/pull/20))
- chore: always nyc report before calling codecov ([#17](https://github.com/googleapis/nodejs-scheduler/pull/17))
- chore: nyc ignore build/test by default ([#16](https://github.com/googleapis/nodejs-scheduler/pull/16))

## v0.1.0

This is the initial release of the Cloud Scheduler client library for Node.js.

### Internal / Testing Changes
- chore(build): update CI config ([#10](https://github.com/googleapis/nodejs-scheduler/pull/10))
- chore(build): Configure Renovate ([#8](https://github.com/googleapis/nodejs-scheduler/pull/8))
- experiment: kokoro autorelease ([#6](https://github.com/googleapis/nodejs-scheduler/pull/6))
- fix(build): fix system key decryption ([#7](https://github.com/googleapis/nodejs-scheduler/pull/7))
- chore: update CI config ([#4](https://github.com/googleapis/nodejs-scheduler/pull/4))
- chore: clean up lint rules ([#2](https://github.com/googleapis/nodejs-scheduler/pull/2))
- add license header
