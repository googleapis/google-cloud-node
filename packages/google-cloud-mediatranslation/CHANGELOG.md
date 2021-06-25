# Changelog

## [2.3.0](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.2.3...v2.3.0) (2021-06-25)


### ⚠ BREAKING CHANGES

* Remove unsupported fields: recognition_result and alternative_source_language_codes. docs: Add more comments for supported audio type (#131)

### Bug Fixes

* **build:** next version should be 2.3.0 ([#158](https://www.github.com/googleapis/nodejs-media-translation/issues/158)) ([1d4f7a0](https://www.github.com/googleapis/nodejs-media-translation/commit/1d4f7a00e3a88ab1581c5e690cad40074738cefb))
* **deps:** require google-gax v2.12.0 ([#139](https://www.github.com/googleapis/nodejs-media-translation/issues/139)) ([bda81f9](https://www.github.com/googleapis/nodejs-media-translation/commit/bda81f920df258677ae4b24b647ee4c17a0ccbef))
* GoogleAdsError missing using generator version after 1.3.0 ([#147](https://www.github.com/googleapis/nodejs-media-translation/issues/147)) ([735843a](https://www.github.com/googleapis/nodejs-media-translation/commit/735843a9bbeb84be9f61a718271bcd81860a5eaa))
* Remove unsupported fields: recognition_result and alternative_source_language_codes. docs: Add more comments for supported audio type ([#131](https://www.github.com/googleapis/nodejs-media-translation/issues/131)) ([cfaeb1c](https://www.github.com/googleapis/nodejs-media-translation/commit/cfaeb1ce0699eaa372d1ed726bd445177dafe546))
* use require() to load JSON protos ([#141](https://www.github.com/googleapis/nodejs-media-translation/issues/141)) ([1bc887c](https://www.github.com/googleapis/nodejs-media-translation/commit/1bc887cb22014d066e2c382a7f8cf7f518ec903d))

### [2.2.3](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.2.2...v2.2.3) (2021-02-04)


### Bug Fixes

* Added check to see if stream has been destroyed before writing result… ([#107](https://www.github.com/googleapis/nodejs-media-translation/issues/107)) ([5922538](https://www.github.com/googleapis/nodejs-media-translation/commit/592253836803d0ee6002a6e4c4d8a48d219f5d92))

### [2.2.2](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.2.1...v2.2.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([c0245c5](https://www.github.com/googleapis/nodejs-media-translation/commit/c0245c54d8c45f1f3171e9066bc7bab3c4162b69))

### [2.2.1](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.2.0...v2.2.1) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#94](https://www.github.com/googleapis/nodejs-media-translation/issues/94)) ([5c6d930](https://www.github.com/googleapis/nodejs-media-translation/commit/5c6d930f215a55b876fcda36a1c448aca2b92b8f))

## [2.2.0](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.1.0...v2.2.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#46](https://www.github.com/googleapis/nodejs-media-translation/issues/46)) ([2e5065b](https://www.github.com/googleapis/nodejs-media-translation/commit/2e5065b0ecb6c38148ec31bf8966617bf7d024d9))
* **samples:** demonstrate real-time conversation translation ([#48](https://www.github.com/googleapis/nodejs-media-translation/issues/48)) ([6331d9d](https://www.github.com/googleapis/nodejs-media-translation/commit/6331d9dd361a003c66ab532f904e1ae298ae296f))


### Bug Fixes

* proper fallback option handling ([e0a5f7d](https://www.github.com/googleapis/nodejs-media-translation/commit/e0a5f7de5bd279e302b597ab73406de651d9937b))

## [2.1.0](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.0.0...v2.1.0) (2020-06-04)


### Features

* adds 'single_utterance' to stream from file sample ([#20](https://www.github.com/googleapis/nodejs-media-translation/issues/20)) ([9455e20](https://www.github.com/googleapis/nodejs-media-translation/commit/9455e207de7ff9c9f72936dd3a908b694eee59fe))


### Bug Fixes

* regen protos and tests, formatting ([#39](https://www.github.com/googleapis/nodejs-media-translation/issues/39)) ([684f355](https://www.github.com/googleapis/nodejs-media-translation/commit/684f355cbecec36c18763b59ddec613c0ea097a9))
* remove eslint, update gax, fix generated protos, run the generator ([#24](https://www.github.com/googleapis/nodejs-media-translation/issues/24)) ([3aca62a](https://www.github.com/googleapis/nodejs-media-translation/commit/3aca62aed3a4e49e4892f9ad29c3d0166c57fa56))
* streaming mic sample ([488c235](https://www.github.com/googleapis/nodejs-media-translation/commit/488c23522b31e26b419c9a4cb5829969e9050928))

## [2.0.0](https://www.github.com/googleapis/nodejs-media-translation/compare/v1.0.0...v2.0.0) (2020-04-05)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* adds media translation file, mic samples ([db91593](https://www.github.com/googleapis/nodejs-media-translation/commit/db915930164484cc016dcb5fbe215d9eef00b412))
* drop node8 support ([#17](https://www.github.com/googleapis/nodejs-media-translation/issues/17)) ([b662dc6](https://www.github.com/googleapis/nodejs-media-translation/commit/b662dc61e43c34b1c56f156eb18d0bbf98170e59))

## 1.0.0 (2020-03-24)


### ⚠ BREAKING CHANGES

* initial library generation (#1)

### Features

* initial library generation ([#1](https://www.github.com/googleapis/nodejs-media-translation/issues/1)) ([33bc8b9](https://www.github.com/googleapis/nodejs-media-translation/commit/33bc8b9469fde7f0d55b7445d2f63e772ed76fee))
