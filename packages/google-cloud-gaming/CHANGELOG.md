# Changelog

### [2.3.6](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.5...v2.3.6) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#196](https://www.github.com/googleapis/nodejs-game-servers/issues/196)) ([5a65e3f](https://www.github.com/googleapis/nodejs-game-servers/commit/5a65e3f4398667b2aba2295088c1cc0e2ecf0a8c))

### [2.3.5](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.4...v2.3.5) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#192](https://www.github.com/googleapis/nodejs-game-servers/issues/192)) ([4d37a74](https://www.github.com/googleapis/nodejs-game-servers/commit/4d37a7497ebe77cbfabc5e2bb0ea925e7ac138bb))

### [2.3.4](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.3...v2.3.4) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#186](https://www.github.com/googleapis/nodejs-game-servers/issues/186)) ([99424ec](https://www.github.com/googleapis/nodejs-game-servers/commit/99424ecd0f87341bd4814cdbe092d2820c9a78d7))

### [2.3.3](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.2...v2.3.3) (2021-06-10)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#175](https://www.github.com/googleapis/nodejs-game-servers/issues/175)) ([a0df035](https://www.github.com/googleapis/nodejs-game-servers/commit/a0df03530d0dc438c8c4318854fbcfa8d7752f8d))

### [2.3.2](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.1...v2.3.2) (2021-05-24)


### Bug Fixes

* use require() to load JSON protos ([#164](https://www.github.com/googleapis/nodejs-game-servers/issues/164)) ([b77e1e5](https://www.github.com/googleapis/nodejs-game-servers/commit/b77e1e5f7fc9396cdb30d4f1bfac370dd85800b8))

### [2.3.1](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.3.0...v2.3.1) (2021-05-20)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#162](https://www.github.com/googleapis/nodejs-game-servers/issues/162)) ([546c13d](https://www.github.com/googleapis/nodejs-game-servers/commit/546c13d64abedafd055fad9c118d58750f0f9f25))

## [2.3.0](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.2.0...v2.3.0) (2021-03-01)


### Features

* **docs:** update release level to ga ([#147](https://www.github.com/googleapis/nodejs-game-servers/issues/147)) ([0449362](https://www.github.com/googleapis/nodejs-game-servers/commit/0449362aeeead608517e76390813ed7a9c1962c5))

## [2.2.0](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.1.2...v2.2.0) (2021-01-09)


### Features

* adds style enumeration ([#142](https://www.github.com/googleapis/nodejs-game-servers/issues/142)) ([59f7332](https://www.github.com/googleapis/nodejs-game-servers/commit/59f7332fee754b11e8a395d19013cc78351e5659))

### [2.1.2](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.1.1...v2.1.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#136](https://www.github.com/googleapis/nodejs-game-servers/issues/136)) ([3c28ff7](https://www.github.com/googleapis/nodejs-game-servers/commit/3c28ff7c610caf58df0dfbd4b3acd2954ae7f019))

### [2.1.1](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.1.0...v2.1.1) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#132](https://www.github.com/googleapis/nodejs-game-servers/issues/132)) ([72124ab](https://www.github.com/googleapis/nodejs-game-servers/commit/72124ab09070efc4555b157bce6cf547dc623bdb))

## [2.1.0](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.0.2...v2.1.0) (2020-08-05)


### Features

* v1 API surface ([#109](https://www.github.com/googleapis/nodejs-game-servers/issues/109)) ([f22a3f8](https://www.github.com/googleapis/nodejs-game-servers/commit/f22a3f8e8d19761c9a001f8c521c99449ce88922))

### [2.0.2](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.0.1...v2.0.2) (2020-07-09)


### Bug Fixes

* correct return type of delete operations ([#79](https://www.github.com/googleapis/nodejs-game-servers/issues/79)) ([e946632](https://www.github.com/googleapis/nodejs-game-servers/commit/e9466329399c62c0f6f49a713f68ecf8ef96213b))

### [2.0.1](https://www.github.com/googleapis/nodejs-game-servers/compare/v2.0.0...v2.0.1) (2020-06-15)


### Bug Fixes

* proper fallback option handling ([#74](https://www.github.com/googleapis/nodejs-game-servers/issues/74)) ([75a2648](https://www.github.com/googleapis/nodejs-game-servers/commit/75a2648469520772a7e8e3c1477176574f537fb0))

## [2.0.0](https://www.github.com/googleapis/nodejs-game-servers/compare/v1.1.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* adds CRUD samples, tests for GS clusters ([#24](https://www.github.com/googleapis/nodejs-game-servers/issues/24)) ([943304f](https://www.github.com/googleapis/nodejs-game-servers/commit/943304f1ec235a6b81ee8bf1d33374cd92ef256e))
* check status of long running operation by its name ([#65](https://www.github.com/googleapis/nodejs-game-servers/issues/65)) ([3900875](https://www.github.com/googleapis/nodejs-game-servers/commit/39008750a6024b0893bee88f39f2a6ad9fc87889))
* drop node8 support ([#37](https://www.github.com/googleapis/nodejs-game-servers/issues/37)) ([7a9a6d6](https://www.github.com/googleapis/nodejs-game-servers/commit/7a9a6d664c39e11760b86e8adabdad8900292bba))
* new pagination methods ([#62](https://www.github.com/googleapis/nodejs-game-servers/issues/62)) ([0fcdde7](https://www.github.com/googleapis/nodejs-game-servers/commit/0fcdde74c362abc66118a6df79c4fb4071f3dc14))


### Bug Fixes

* export explicit version from protos.js ([#43](https://www.github.com/googleapis/nodejs-game-servers/issues/43)) ([d9c09c7](https://www.github.com/googleapis/nodejs-game-servers/commit/d9c09c724ddd9810abfd01143adb4f280546c40c))
* remove eslint, update gax, fix generated protos, run the generator ([#47](https://www.github.com/googleapis/nodejs-game-servers/issues/47)) ([c75bb2d](https://www.github.com/googleapis/nodejs-game-servers/commit/c75bb2de6ef48c26d5d90892a906b45dcf91755c))

## [1.1.0](https://www.github.com/googleapis/nodejs-game-servers/compare/v1.0.0...v1.1.0) (2020-03-03)


### Features

* adds CRUD samples for GS realms ([#21](https://www.github.com/googleapis/nodejs-game-servers/issues/21)) ([b1bf3e4](https://www.github.com/googleapis/nodejs-game-servers/commit/b1bf3e4a846839919e275664eceaba72db3d5eaf))

## 1.0.0 (2020-03-01)


### Features

* updates package.json files and quickstart ([d5eb2ff](https://www.github.com/googleapis/nodejs-game-servers/commit/d5eb2ff0ed12cebc268d07a7b0b249049cc9452c))
