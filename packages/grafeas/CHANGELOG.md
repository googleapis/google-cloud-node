# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/grafeas?activeTab=versions

## [2.5.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.4.0...v2.5.0) (2020-01-25)


### Features

* move to typescript code generation ([#83](https://www.github.com/googleapis/nodejs-grafeas/issues/83)) ([7c921ab](https://www.github.com/googleapis/nodejs-grafeas/commit/7c921ab4e30bb5c27379e226e24d88d4a93c8413))

## [2.4.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.3...v2.4.0) (2020-01-09)


### Features

* proto update: UpgradeNotes added ([86f2d90](https://www.github.com/googleapis/nodejs-grafeas/commit/86f2d90ea924f6067e08299635e051c5dd03a1a2))

### [2.3.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.2...v2.3.3) (2020-01-02)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([e05d7ff](https://www.github.com/googleapis/nodejs-grafeas/commit/e05d7ff66b12d2b14a7e65fba355f64f5ce578f0))
* **docs:** bump release level to GA ([#64](https://www.github.com/googleapis/nodejs-grafeas/issues/64)) ([7dcae38](https://www.github.com/googleapis/nodejs-grafeas/commit/7dcae38bf3dd3f52656c98b7f342a068e0bc4577))

### [2.3.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.1...v2.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#60](https://www.github.com/googleapis/nodejs-grafeas/issues/60)) ([668c16f](https://www.github.com/googleapis/nodejs-grafeas/commit/668c16f5c2773ebd580930d3e97c8c3328852688))

### [2.3.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.3.0...v2.3.1) (2019-11-08)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#53](https://www.github.com/googleapis/nodejs-grafeas/issues/53)) ([6d45413](https://www.github.com/googleapis/nodejs-grafeas/commit/6d4541373dbc0ca6da27903666ad1ec8d1fbefed))

## [2.3.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.2.0...v2.3.0) (2019-10-09)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.6.0 ([#42](https://www.github.com/googleapis/nodejs-grafeas/issues/42)) ([5dd652e](https://www.github.com/googleapis/nodejs-grafeas/commit/5dd652e))
* use compatible version of google-gax ([e241c53](https://www.github.com/googleapis/nodejs-grafeas/commit/e241c53))


### Features

* .d.ts for protos ([#44](https://www.github.com/googleapis/nodejs-grafeas/issues/44)) ([acccd3c](https://www.github.com/googleapis/nodejs-grafeas/commit/acccd3c))

## [2.2.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.5...v2.2.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([c79eae1](https://www.github.com/googleapis/nodejs-grafeas/commit/c79eae1))

### [2.1.5](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.4...v2.1.5) (2019-08-28)


### Bug Fixes

* **docs:** stop linking reference documents to anchor ([4551cdf](https://www.github.com/googleapis/nodejs-grafeas/commit/4551cdf))

### [2.1.4](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.3...v2.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([631b896](https://www.github.com/googleapis/nodejs-grafeas/commit/631b896))

### [2.1.3](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.2...v2.1.3) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @grpc/grpc-js to ^0.5.0 ([#25](https://www.github.com/googleapis/nodejs-grafeas/issues/25)) ([d6681ea](https://www.github.com/googleapis/nodejs-grafeas/commit/d6681ea))

### [2.1.2](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.1...v2.1.2) (2019-06-26)


### Bug Fixes

* changes to default values in vulnerability.proto ([de6dcda](https://www.github.com/googleapis/nodejs-grafeas/commit/de6dcda))
* **docs:** link to reference docs section on googleapis.dev ([#23](https://www.github.com/googleapis/nodejs-grafeas/issues/23)) ([4e8f852](https://www.github.com/googleapis/nodejs-grafeas/commit/4e8f852))

### [2.1.1](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.1.0...v2.1.1) (2019-06-19)


### Bug Fixes

* **revert:** revert exposing NoteKind enum; automate jsdoc fix ([#19](https://www.github.com/googleapis/nodejs-grafeas/issues/19)) ([4366cac](https://www.github.com/googleapis/nodejs-grafeas/commit/4366cac))

## [2.1.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v2.0.0...v2.1.0) (2019-06-19)


### Features

* add NoteKind enum ([#17](https://www.github.com/googleapis/nodejs-grafeas/issues/17)) ([5738516](https://www.github.com/googleapis/nodejs-grafeas/commit/5738516))

## [2.0.0](https://www.github.com/googleapis/nodejs-grafeas/compare/v1.0.0...v2.0.0) (2019-06-18)


### ⚠ BREAKING CHANGES

* remove build signature support (#14)

### Bug Fixes

* **docs:** move to new client docs URL ([#12](https://www.github.com/googleapis/nodejs-grafeas/issues/12)) ([12ece17](https://www.github.com/googleapis/nodejs-grafeas/commit/12ece17))


### Code Refactoring

* remove build signature support ([#14](https://www.github.com/googleapis/nodejs-grafeas/issues/14)) ([d13ec5f](https://www.github.com/googleapis/nodejs-grafeas/commit/d13ec5f))

## 1.0.0 (2019-06-06)


### Bug Fixes

* delete protos added to wrong path ([29418de](https://www.github.com/googleapis/nodejs-grafeas/commit/29418de))
* get tests passing so that we can land and release module ([#10](https://www.github.com/googleapis/nodejs-grafeas/issues/10)) ([4a0c0e4](https://www.github.com/googleapis/nodejs-grafeas/commit/4a0c0e4))


### Features

* initial implementation of library ([66f09bb](https://www.github.com/googleapis/nodejs-grafeas/commit/66f09bb))
* initial implementation of library ([#1](https://www.github.com/googleapis/nodejs-grafeas/issues/1)) ([744da47](https://www.github.com/googleapis/nodejs-grafeas/commit/744da47))
* support apiEndpoint override in client constructor ([#9](https://www.github.com/googleapis/nodejs-grafeas/issues/9)) ([25ecc0c](https://www.github.com/googleapis/nodejs-grafeas/commit/25ecc0c))
