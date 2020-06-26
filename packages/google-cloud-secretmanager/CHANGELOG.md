# Changelog

## [3.1.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v3.0.0...v3.1.0) (2020-06-18)


### Features

* add Blunderbuss config ([#111](https://www.github.com/googleapis/nodejs-secret-manager/issues/111)) ([312543e](https://www.github.com/googleapis/nodejs-secret-manager/commit/312543e03b19bb9b77ae3dcbccadadc63b5cf66f))
* upgrade library to GA ([#123](https://www.github.com/googleapis/nodejs-secret-manager/issues/123)) ([aa89efa](https://www.github.com/googleapis/nodejs-secret-manager/commit/aa89efaaf93b8d94f2bf9fa1d96725d49552dad2))
* **secrets:** begin migration to secret manager from keystore ([#125](https://www.github.com/googleapis/nodejs-secret-manager/issues/125)) ([a4f483e](https://www.github.com/googleapis/nodejs-secret-manager/commit/a4f483e9eb9122661bc42a1185076af169363d75))


### Bug Fixes

* **samples:** correct usage of toString() ([#117](https://www.github.com/googleapis/nodejs-secret-manager/issues/117)) ([e4f228e](https://www.github.com/googleapis/nodejs-secret-manager/commit/e4f228efc81bc6d9e7953ce0bfabdf2503967b27))
* handle fallback option properly ([#128](https://www.github.com/googleapis/nodejs-secret-manager/issues/128)) ([be15ac1](https://www.github.com/googleapis/nodejs-secret-manager/commit/be15ac1a15787a42f3681b171833e2bfdfeb4e51))
* regen protos and tests, formatting ([#115](https://www.github.com/googleapis/nodejs-secret-manager/issues/115)) ([85539e3](https://www.github.com/googleapis/nodejs-secret-manager/commit/85539e3b6b0d00dcf6e11f6e79b86f447b5bd185))
* remove eslint, update gax, fix generated protos, run the generator ([#94](https://www.github.com/googleapis/nodejs-secret-manager/issues/94)) ([aa90072](https://www.github.com/googleapis/nodejs-secret-manager/commit/aa900721808f45a29091aca61052c08d352a8bc2))
* synth.py clean up for multiple version ([#116](https://www.github.com/googleapis/nodejs-secret-manager/issues/116)) ([783524d](https://www.github.com/googleapis/nodejs-secret-manager/commit/783524d5925029f130a8787f02319d14a0a8dc59))
* update node issue template ([#130](https://www.github.com/googleapis/nodejs-secret-manager/issues/130)) ([1ef393b](https://www.github.com/googleapis/nodejs-secret-manager/commit/1ef393b48c29557d557b0481641dd1b72a7a2b2e))

## [3.0.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v2.1.0...v3.0.0) (2020-04-10)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

New feature: methods with pagination now support async iteration.

### Features

* drop node8 support, support for async iterators ([#85](https://www.github.com/googleapis/nodejs-secret-manager/issues/85)) ([24cd25b](https://www.github.com/googleapis/nodejs-secret-manager/commit/24cd25b04c94e2058489db6cf06ba74a14770b0f))

## [2.1.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v2.0.1...v2.1.0) (2020-03-06)


### Features

* deferred client initialization ([#69](https://www.github.com/googleapis/nodejs-secret-manager/issues/69)) ([237686d](https://www.github.com/googleapis/nodejs-secret-manager/commit/237686de31ce0ce653a87684b186f677733fef4a))

### [2.0.1](https://www.github.com/googleapis/nodejs-secret-manager/compare/v2.0.0...v2.0.1) (2020-02-29)


### Bug Fixes

* proper enum types; updated .jsdoc.js ([07fa7f5](https://www.github.com/googleapis/nodejs-secret-manager/commit/07fa7f53de6cee632df7ed53931b707694695b7e))

## [2.0.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.2.1...v2.0.0) (2020-02-28)


### ⚠ BREAKING CHANGES

* drop support for Node 8 (which is EOL) (#64)
* library now uses v1 API surface (#62)

### Features

* drop support for Node 8 (which is EOL) ([#64](https://www.github.com/googleapis/nodejs-secret-manager/issues/64)) ([e4118ef](https://www.github.com/googleapis/nodejs-secret-manager/commit/e4118ef699ff63e005f65b154fb2b3a379e3cfd1))
* export protos in src/index.ts ([46e2c3e](https://www.github.com/googleapis/nodejs-secret-manager/commit/46e2c3e5b598dbd3eefeec859f52fffa32bdf63c))
* library now uses v1 API surface ([#62](https://www.github.com/googleapis/nodejs-secret-manager/issues/62)) ([a8368d4](https://www.github.com/googleapis/nodejs-secret-manager/commit/a8368d465c8577f708d3185d60c26b7e652befbe))

### [1.2.1](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.2.0...v1.2.1) (2020-02-12)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([0960f4c](https://www.github.com/googleapis/nodejs-secret-manager/commit/0960f4cc1226a16d342d6accc5a42511c8694a03))

## [1.2.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.1.2...v1.2.0) (2020-01-30)


### Features

* add IAM samples ([#34](https://www.github.com/googleapis/nodejs-secret-manager/issues/34)) ([cd0268f](https://www.github.com/googleapis/nodejs-secret-manager/commit/cd0268f7fb83988798ee9eb19d7aafd6721ea036))


### Bug Fixes

* make resource helper work; enum, bytes, and Long types now accept strings ([#35](https://www.github.com/googleapis/nodejs-secret-manager/issues/35)) ([3f8d832](https://www.github.com/googleapis/nodejs-secret-manager/commit/3f8d8325b118273f6d07bbdf4353a04ff041a6c6))

### [1.1.2](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.1.1...v1.1.2) (2020-01-14)


### Bug Fixes

* address bug with termination logic ([d69739c](https://www.github.com/googleapis/nodejs-secret-manager/commit/d69739cdec025e49f944b9474b85d46ee4addf67))

### [1.1.1](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.1.0...v1.1.1) (2020-01-08)


### Bug Fixes

* **build:** switches to using autorelease for docs ([#22](https://www.github.com/googleapis/nodejs-secret-manager/issues/22)) ([db6b60f](https://www.github.com/googleapis/nodejs-secret-manager/commit/db6b60f9ea92be1e36413b4f31428231639e5431))

## [1.1.0](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.0.3...v1.1.0) (2019-12-23)

### Features

* add keywords for npm ([bdc5046](https://www.github.com/googleapis/nodejs-secret-manager/commit/bdc5046eb4aa0c9c46487be013706d01de4ad876))


### [1.0.3](https://www.github.com/googleapis/nodejs-secret-manager/compare/v1.0.0...v1.0.3) (2019-12-23)


### Bug Fixes

* build script did not run 'npm build' ([#13](https://www.github.com/googleapis/nodejs-secret-manager/issues/13)) ([cd09290](https://www.github.com/googleapis/nodejs-secret-manager/commit/cd0929078539225254cf481bd17c3b02a691d6e3))

## 1.0.0 (2019-12-20)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* add secretmanager samples ([#8](https://www.github.com/googleapis/nodejs-secret-manager/issues/8)) ([073cf59](https://www.github.com/googleapis/nodejs-secret-manager/commit/073cf5919d43a54cf3407700c405b5b7bf73c19d))
* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-secret-manager/issues/1)) ([db7bcb5](https://www.github.com/googleapis/nodejs-secret-manager/commit/db7bcb59171f5591cce8d9a6638b9217ed6996ab))


### Bug Fixes

* rename comment samples ([#10](https://www.github.com/googleapis/nodejs-secret-manager/issues/10)) ([0d80410](https://www.github.com/googleapis/nodejs-secret-manager/commit/0d804100c320350420f2de318bb0f49e4fd366ae))
