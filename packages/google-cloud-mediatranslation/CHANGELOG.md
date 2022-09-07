# Changelog

## [3.0.3](https://github.com/googleapis/nodejs-media-translation/compare/v3.0.2...v3.0.3) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#249](https://github.com/googleapis/nodejs-media-translation/issues/249)) ([ff9aebb](https://github.com/googleapis/nodejs-media-translation/commit/ff9aebb808d91ce68f967afd73e933bfab1a6f31))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-media-translation/issues/1553)) ([#248](https://github.com/googleapis/nodejs-media-translation/issues/248)) ([719d39f](https://github.com/googleapis/nodejs-media-translation/commit/719d39f3a38b60ee708af7d620c37982bf9bf834))

## [3.0.2](https://github.com/googleapis/nodejs-media-translation/compare/v3.0.1...v3.0.2) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#243](https://github.com/googleapis/nodejs-media-translation/issues/243)) ([a0dc4be](https://github.com/googleapis/nodejs-media-translation/commit/a0dc4be632b474ef5fe3a3df3719743fc31b911b))
* change import long to require ([#244](https://github.com/googleapis/nodejs-media-translation/issues/244)) ([31a670e](https://github.com/googleapis/nodejs-media-translation/commit/31a670ed83c2de493a15504422b3c2a09612ef05))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-media-translation/issues/1546)) ([#247](https://github.com/googleapis/nodejs-media-translation/issues/247)) ([8a11196](https://github.com/googleapis/nodejs-media-translation/commit/8a11196b52832ff61ad709f9f12683185bc6e96a))

## [3.0.1](https://github.com/googleapis/nodejs-media-translation/compare/v3.0.0...v3.0.1) (2022-06-30)


### Bug Fixes

* **docs:** describe fallback rest option ([#233](https://github.com/googleapis/nodejs-media-translation/issues/233)) ([f83d3ed](https://github.com/googleapis/nodejs-media-translation/commit/f83d3ed1a04e4d382071df6202a1b2fb394ee2d0))

## [3.0.0](https://github.com/googleapis/nodejs-media-translation/compare/v2.4.0...v3.0.0) (2022-06-09)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#225)

### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#228](https://github.com/googleapis/nodejs-media-translation/issues/228)) ([c1bbe17](https://github.com/googleapis/nodejs-media-translation/commit/c1bbe17e481387dfeda9c842f3d30bbfee11eab6))


### Build System

* update library to use Node 12 ([#225](https://github.com/googleapis/nodejs-media-translation/issues/225)) ([25b13e3](https://github.com/googleapis/nodejs-media-translation/commit/25b13e39949ba1694254f7cb85c07f03314f1ad9))

## [2.4.0](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.3.4...v2.4.0) (2021-09-08)


### Features

* turns on self-signed JWT feature flag ([#176](https://www.github.com/googleapis/nodejs-media-translation/issues/176)) ([26a0d2e](https://www.github.com/googleapis/nodejs-media-translation/commit/26a0d2e7b39176ad27dcfe076c70fc5c90be5159))

### [2.3.4](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.3.3...v2.3.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#174](https://www.github.com/googleapis/nodejs-media-translation/issues/174)) ([b90cf10](https://www.github.com/googleapis/nodejs-media-translation/commit/b90cf1034235ab0416011de7a1b77afed5597dfc))

### [2.3.3](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.3.2...v2.3.3) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#166](https://www.github.com/googleapis/nodejs-media-translation/issues/166)) ([a1899d2](https://www.github.com/googleapis/nodejs-media-translation/commit/a1899d2f2f7bfa0894c0b1823ce75759638ff91b))

### [2.3.2](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.3.1...v2.3.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#164](https://www.github.com/googleapis/nodejs-media-translation/issues/164)) ([6c7caad](https://www.github.com/googleapis/nodejs-media-translation/commit/6c7caadc989cfe0e898ce2034d2fbac71208d888))

### [2.3.1](https://www.github.com/googleapis/nodejs-media-translation/compare/v2.3.0...v2.3.1) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#161](https://www.github.com/googleapis/nodejs-media-translation/issues/161)) ([bbd1415](https://www.github.com/googleapis/nodejs-media-translation/commit/bbd141565364bc0bbb15f1240d98683033da3001))

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
