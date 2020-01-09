# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datacatalog?activeTab=versions

### [1.6.3](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.6.2...v1.6.3) (2020-01-09)


### Bug Fixes

* proper routing headers ([1fc10d6](https://www.github.com/googleapis/nodejs-datacatalog/commit/1fc10d6e538fd2c6a43e160318e6b75c6e0d32e5))

### [1.6.2](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.6.1...v1.6.2) (2020-01-08)


### Bug Fixes

* **build:** switch back to using autorelease for tagging ([#91](https://www.github.com/googleapis/nodejs-datacatalog/issues/91)) ([2a0f1f7](https://www.github.com/googleapis/nodejs-datacatalog/commit/2a0f1f7ccb62e1f6ac53acbf6eb14706228532c0))

### [1.6.1](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.6.0...v1.6.1) (2020-01-04)


### Bug Fixes

* better close() in client ([#87](https://www.github.com/googleapis/nodejs-datacatalog/issues/87)) ([fb41332](https://www.github.com/googleapis/nodejs-datacatalog/commit/fb41332b1601f8825c0a6a91565566339471a199))

## [1.6.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.5.1...v1.6.0) (2020-01-02)


### Features

* add support for marking a tag template field as required when creating a new tag template; add support for updating a tag template field from required to optional ([0b589b4](https://www.github.com/googleapis/nodejs-datacatalog/commit/0b589b4a18ce1d6f6a80412c4f608690f02be711))

### [1.5.1](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.5.0...v1.5.1) (2019-12-20)


### Bug Fixes

* bring common resources back ([#75](https://www.github.com/googleapis/nodejs-datacatalog/issues/75)) ([8472def](https://www.github.com/googleapis/nodejs-datacatalog/commit/8472defdf9a2394f218f5a15d2d8e9400fc3af86))
* fix auto-pagination field name ([1b9d24b](https://www.github.com/googleapis/nodejs-datacatalog/commit/1b9d24b281e38097df2a7886cefaa515dc89c655))
* increase timeout from 20s to 60s ([#76](https://www.github.com/googleapis/nodejs-datacatalog/issues/76)) ([3fbcf3d](https://www.github.com/googleapis/nodejs-datacatalog/commit/3fbcf3d3fb07b9d59cbd42e78f581b74aa5bccd4))

## [1.5.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.4.1...v1.5.0) (2019-12-11)


### Features

* make operationsClient and service stub public ([e7ca581](https://www.github.com/googleapis/nodejs-datacatalog/commit/e7ca5815340c3d9ffd4d170a1193565a76f53b15))

### [1.4.1](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.4.0...v1.4.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([cc671d9](https://www.github.com/googleapis/nodejs-datacatalog/commit/cc671d9ae2bfd420195df25bdaa0e4c1757008ec))
* **docs:** adds jsdoc strings ([2834bfe](https://www.github.com/googleapis/nodejs-datacatalog/commit/2834bfe0057d9222f8c6f70e60de216560251d06))

## [1.4.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.3.0...v1.4.0) (2019-11-20)

In this release the library has been converted to TypeScript. There should be no breaking changes
for existing users, but please feel free to submit an issue if you find anything wrong!

### Features

* new clients, convert to TypeScript ([#61](https://www.github.com/googleapis/nodejs-datacatalog/issues/61)) ([489c492](https://www.github.com/googleapis/nodejs-datacatalog/commit/489c49231c5386d7c540239c8861fdcef080679f))


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#54](https://www.github.com/googleapis/nodejs-datacatalog/issues/54)) ([4a61922](https://www.github.com/googleapis/nodejs-datacatalog/commit/4a6192275313e64f4e28fb43f6a7144807a89512))

## [1.3.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.2.0...v1.3.0) (2019-10-22)


### Features

* updated proto annotations ([822d45d](https://www.github.com/googleapis/nodejs-datacatalog/commit/822d45d3a3eee323f0171ed2411b51ba9d9d0d7e))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#50](https://www.github.com/googleapis/nodejs-datacatalog/issues/50)) ([8bc69c5](https://www.github.com/googleapis/nodejs-datacatalog/commit/8bc69c59ef8255fdb5ef9269e98d8ebc2452b75a))

## [1.2.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.1.0...v1.2.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([c854efc](https://www.github.com/googleapis/nodejs-datacatalog/commit/c854efc))


### Features

* .d.ts for protos ([26e81a4](https://www.github.com/googleapis/nodejs-datacatalog/commit/26e81a4))
* .d.ts for protos ([#39](https://www.github.com/googleapis/nodejs-datacatalog/issues/39)) ([8090b3e](https://www.github.com/googleapis/nodejs-datacatalog/commit/8090b3e))
* introduces new proto annotations ([9e03bc7](https://www.github.com/googleapis/nodejs-datacatalog/commit/9e03bc7))

## [1.1.0](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.0.2...v1.1.0) (2019-09-15)


### Bug Fixes

* set proper version # for x-goog-api-client ([8d8b776](https://www.github.com/googleapis/nodejs-datacatalog/commit/8d8b776))


### Features

* load protos from JSON, grpc-fallback support ([13061f3](https://www.github.com/googleapis/nodejs-datacatalog/commit/13061f3))

### [1.0.2](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.0.1...v1.0.2) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([9a38026](https://www.github.com/googleapis/nodejs-datacatalog/commit/9a38026))

### [1.0.1](https://www.github.com/googleapis/nodejs-datacatalog/compare/v1.0.0...v1.0.1) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#10](https://www.github.com/googleapis/nodejs-datacatalog/issues/10)) ([2a93e95](https://www.github.com/googleapis/nodejs-datacatalog/commit/2a93e95))

## 1.0.0 (2019-06-20)


### ⚠ BREAKING CHANGES

* first release of client library (#8)
* remove create/delete methods for entries and entry groups (#3)

### Bug Fixes

* package name should be @google-cloud/datacatalog ([#2](https://www.github.com/googleapis/nodejs-datacatalog/issues/2)) ([5d3db51](https://www.github.com/googleapis/nodejs-datacatalog/commit/5d3db51))


### Code Refactoring

* remove create/delete methods for entries and entry groups ([#3](https://www.github.com/googleapis/nodejs-datacatalog/issues/3)) ([e574462](https://www.github.com/googleapis/nodejs-datacatalog/commit/e574462))


### Features

* first release of client library ([#8](https://www.github.com/googleapis/nodejs-datacatalog/issues/8)) ([8250c88](https://www.github.com/googleapis/nodejs-datacatalog/commit/8250c88))
