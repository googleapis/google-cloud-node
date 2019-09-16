# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/talent?activeTab=versions

## [1.4.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.3.0...v1.4.0) (2019-09-16)


### Features

* candidate applications and assignments support ([#98](https://www.github.com/googleapis/nodejs-talent/issues/98)) ([0a9e8c1](https://www.github.com/googleapis/nodejs-talent/commit/0a9e8c1))
* filter support ([#97](https://www.github.com/googleapis/nodejs-talent/issues/97)) ([3496527](https://www.github.com/googleapis/nodejs-talent/commit/3496527))
* load protos from JSON, grpc-fallback support ([a0cee41](https://www.github.com/googleapis/nodejs-talent/commit/a0cee41))

## [1.3.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.2.0...v1.3.0) (2019-08-08)


### Features

* allow calls with no request; adds JSON proto; introduces PersonNameFilter ([51b0a58](https://www.github.com/googleapis/nodejs-talent/commit/51b0a58))

## [1.2.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.1.0...v1.2.0) (2019-07-16)


### Features

* add new filters, path templates, and update docs ([#76](https://www.github.com/googleapis/nodejs-talent/issues/76)) ([f28802c](https://www.github.com/googleapis/nodejs-talent/commit/f28802c))

## [1.1.0](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.2...v1.1.0) (2019-06-28)


### Features

* batch operation support ([#69](https://www.github.com/googleapis/nodejs-talent/issues/69)) ([9c76a71](https://www.github.com/googleapis/nodejs-talent/commit/9c76a71))

### [1.0.2](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.1...v1.0.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#71](https://www.github.com/googleapis/nodejs-talent/issues/71)) ([e2d0791](https://www.github.com/googleapis/nodejs-talent/commit/e2d0791))

### [1.0.1](https://www.github.com/googleapis/nodejs-talent/compare/v1.0.0...v1.0.1) (2019-06-13)


### Bug Fixes

* **docs:** move to new client docs URL ([#67](https://www.github.com/googleapis/nodejs-talent/issues/67)) ([6434066](https://www.github.com/googleapis/nodejs-talent/commit/6434066))

## [1.0.0](https://www.github.com/googleapis/nodejs-talent/compare/v0.3.0...v1.0.0) (2019-05-14)


### Bug Fixes

* use SummarizedProfile over HistogramQueryResult ([#54](https://www.github.com/googleapis/nodejs-talent/issues/54)) ([87036f0](https://www.github.com/googleapis/nodejs-talent/commit/87036f0))
* **deps:** update dependency google-gax to v1 ([#51](https://www.github.com/googleapis/nodejs-talent/issues/51)) ([4ad1db5](https://www.github.com/googleapis/nodejs-talent/commit/4ad1db5))
* DEADLINE_EXCEEDED is idempotent ([#52](https://www.github.com/googleapis/nodejs-talent/issues/52)) ([6f8dd1b](https://www.github.com/googleapis/nodejs-talent/commit/6f8dd1b))

## [0.3.0](https://www.github.com/googleapis/nodejs-talent/compare/v0.2.0...v0.3.0) (2019-05-09)


### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#40](https://www.github.com/googleapis/nodejs-talent/issues/40)) ([3ae00c8](https://www.github.com/googleapis/nodejs-talent/commit/3ae00c8))


### Build System

* upgrade engines field to >=8.10.0 ([#41](https://www.github.com/googleapis/nodejs-talent/issues/41)) ([4fdec5e](https://www.github.com/googleapis/nodejs-talent/commit/4fdec5e))


### Features

* add Resume and keywordSearchableProfileCustomAttributes ([#49](https://www.github.com/googleapis/nodejs-talent/issues/49)) ([d96a482](https://www.github.com/googleapis/nodejs-talent/commit/d96a482))
* add templates for company old path ([03c6bc5](https://www.github.com/googleapis/nodejs-talent/commit/03c6bc5))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#41)

## v0.2.0

03-29-2019 13:05 PDT

### Implementation Changes

**🚨 BREAKING CHANGE 🚨**

This release includes several breaking changes since v0.1.0:

- Removes `ResumeServiceClient`.
- Removes support for any string template paths relating to `projectPath` and `companyPath`, it now supports `tenantPath` and `companyOldPath` instead. 

### New Features
- feat: v4beta1 application support and proto sync ([#29](https://github.com/googleapis/nodejs-talent/pull/29))
    - Adds `ApplicationServiceClient`

### Documentation
- docs: fix broken urls in proto comments ([#22](https://github.com/googleapis/nodejs-talent/pull/22))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#25](https://github.com/googleapis/nodejs-talent/pull/25))
- build: use per-repo npm publish token ([#23](https://github.com/googleapis/nodejs-talent/pull/23))

## v0.1.0

03-12-2019 21:57 PDT

First release!
