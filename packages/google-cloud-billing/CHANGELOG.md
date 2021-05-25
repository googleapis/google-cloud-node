# Changelog

### [2.2.2](https://www.github.com/googleapis/nodejs-billing/compare/v2.2.1...v2.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#152](https://www.github.com/googleapis/nodejs-billing/issues/152)) ([139287c](https://www.github.com/googleapis/nodejs-billing/commit/139287cfb544d8fe84cc0fc2abd2d4f4755e563b))

### [2.2.1](https://www.github.com/googleapis/nodejs-billing/compare/v2.2.0...v2.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#143](https://www.github.com/googleapis/nodejs-billing/issues/143)) ([3e56f40](https://www.github.com/googleapis/nodejs-billing/commit/3e56f40026b51001fbefa23a0544a19fdbba8c25))
* use require() to load JSON protos ([#146](https://www.github.com/googleapis/nodejs-billing/issues/146)) ([c06c0d0](https://www.github.com/googleapis/nodejs-billing/commit/c06c0d09af9882b3f305fbaf25864f84d5aebfa6))

## [2.2.0](https://www.github.com/googleapis/nodejs-billing/compare/v2.1.3...v2.2.0) (2021-01-09)


### Features

* adds style enumeration ([#120](https://www.github.com/googleapis/nodejs-billing/issues/120)) ([8f70df9](https://www.github.com/googleapis/nodejs-billing/commit/8f70df92f1a2a5217ae64c10819da55cb01b20fd))

### [2.1.3](https://www.github.com/googleapis/nodejs-billing/compare/v2.1.2...v2.1.3) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([abd3067](https://www.github.com/googleapis/nodejs-billing/commit/abd30678d328bdb62c54dc892c5300342c275e72))
* do not modify options object, use defaultScopes ([#111](https://www.github.com/googleapis/nodejs-billing/issues/111)) ([be029ad](https://www.github.com/googleapis/nodejs-billing/commit/be029ad5c807cc8d04b8bddde83eb2d53f580a1c))

### [2.1.2](https://www.github.com/googleapis/nodejs-billing/compare/v2.1.1...v2.1.2) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#73](https://www.github.com/googleapis/nodejs-billing/issues/73)) ([286ac25](https://www.github.com/googleapis/nodejs-billing/commit/286ac2555eddc0a36fc3c7eff1c7b5f8ebf4b475))

### [2.1.1](https://www.github.com/googleapis/nodejs-billing/compare/v2.1.0...v2.1.1) (2020-07-07)


### Bug Fixes

* update default timeouts for list calls ([#65](https://www.github.com/googleapis/nodejs-billing/issues/65)) ([749e14c](https://www.github.com/googleapis/nodejs-billing/commit/749e14cd9fac5b08b105d93bcaba1d45b6ead6cc))

### [2.1.1](https://www.github.com/googleapis/nodejs-billing/compare/v2.1.0...v2.1.1) (2020-07-06)


### Bug Fixes

* update default timeouts for list calls ([#65](https://www.github.com/googleapis/nodejs-billing/issues/65)) ([749e14c](https://www.github.com/googleapis/nodejs-billing/commit/749e14cd9fac5b08b105d93bcaba1d45b6ead6cc))

## [2.1.0](https://www.github.com/googleapis/nodejs-billing/compare/v2.0.0...v2.1.0) (2020-06-15)


### Features

* move ts target to es2018 from es2016 ([#59](https://www.github.com/googleapis/nodejs-billing/issues/59)) ([68749b4](https://www.github.com/googleapis/nodejs-billing/commit/68749b419b70eec762479b938f96727ccdc2b49d))


### Bug Fixes

* proper fallback option handling ([25a0c07](https://www.github.com/googleapis/nodejs-billing/commit/25a0c0723a87c13b55565bdfd3ad98703f6d5e44))

## [2.0.0](https://www.github.com/googleapis/nodejs-billing/compare/v1.2.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#27](https://www.github.com/googleapis/nodejs-billing/issues/27)) ([fb95727](https://www.github.com/googleapis/nodejs-billing/commit/fb9572795d02572feb8c465df01445c1d425c0e6))
* promote release level to GA ([#52](https://www.github.com/googleapis/nodejs-billing/issues/52)) ([079a4a0](https://www.github.com/googleapis/nodejs-billing/commit/079a4a03fcf161c2f8b84706b7b5d9481deba829)), closes [#3](https://www.github.com/googleapis/nodejs-billing/issues/3)


### Bug Fixes

* export explicit version from protos.js ([#33](https://www.github.com/googleapis/nodejs-billing/issues/33)) ([6c2863e](https://www.github.com/googleapis/nodejs-billing/commit/6c2863e520fdeb541ebe65a5edb3c70c18830936))
* regen protos and tests ([#50](https://www.github.com/googleapis/nodejs-billing/issues/50)) ([7cfa275](https://www.github.com/googleapis/nodejs-billing/commit/7cfa275d3f0bba5436dcfbfde806283b7168e024))
* remove eslint, update gax, fix generated protos, run the generator ([#37](https://www.github.com/googleapis/nodejs-billing/issues/37)) ([5107cef](https://www.github.com/googleapis/nodejs-billing/commit/5107cef41905344ab25f73a474b27098e15b9f98))
* update common protos and fix synth ([#56](https://www.github.com/googleapis/nodejs-billing/issues/56)) ([ac7d6b1](https://www.github.com/googleapis/nodejs-billing/commit/ac7d6b1f447d978b0c2c04841a512b8f7218bbae))

## [1.2.0](https://www.github.com/googleapis/nodejs-billing/compare/v1.1.0...v1.2.0) (2020-03-06)


### Features

* deferred client initialization ([#12](https://www.github.com/googleapis/nodejs-billing/issues/12)) ([63c6abf](https://www.github.com/googleapis/nodejs-billing/commit/63c6abfc0b1f6322177222a7d65456517fce1e1b))

## [1.1.0](https://www.github.com/googleapis/nodejs-billing/compare/v1.0.0...v1.1.0) (2020-02-29)


### Features

* export protos from src/index.ts; update jsdoc config ([ea41ed3](https://www.github.com/googleapis/nodejs-billing/commit/ea41ed3bdb792c8a3de3c168ebf18904127c9edc))

## 1.0.0 (2020-02-27)


### ⚠ BREAKING CHANGES

* initial library generation (#1)

### Features

* initial library generation ([#1](https://www.github.com/googleapis/nodejs-billing/issues/1)) ([5a04fa9](https://www.github.com/googleapis/nodejs-billing/commit/5a04fa957a8a83325744c5a275f742bf3abd4579))
