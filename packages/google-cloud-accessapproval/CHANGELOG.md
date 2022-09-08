# Changelog

## [2.1.1](https://github.com/googleapis/nodejs-access-approval/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#139](https://github.com/googleapis/nodejs-access-approval/issues/139)) ([896c016](https://github.com/googleapis/nodejs-access-approval/commit/896c0165305b11015a92c7a87c860e9bb7c2c2c6))
* Better support for fallback mode ([#135](https://github.com/googleapis/nodejs-access-approval/issues/135)) ([23d8d85](https://github.com/googleapis/nodejs-access-approval/commit/23d8d85d8d2ff53333fb5671a02230aaa0045223))
* Change import long to require ([#136](https://github.com/googleapis/nodejs-access-approval/issues/136)) ([87f5477](https://github.com/googleapis/nodejs-access-approval/commit/87f5477aa38f970d310a8d7e70b5f09d51e6d50c))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-access-approval/issues/1553)) ([#140](https://github.com/googleapis/nodejs-access-approval/issues/140)) ([2a9fb11](https://github.com/googleapis/nodejs-access-approval/commit/2a9fb11dfe110e5de78762fa86504d3eeb4046d0))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-access-approval/issues/1546)) ([#138](https://github.com/googleapis/nodejs-access-approval/issues/138)) ([8517413](https://github.com/googleapis/nodejs-access-approval/commit/851741340fca5036ea819c41cb1188b33a181c1c))

## [2.1.0](https://github.com/googleapis/nodejs-access-approval/compare/v2.0.0...v2.1.0) (2022-06-29)


### Features

* support regapic LRO ([#130](https://github.com/googleapis/nodejs-access-approval/issues/130)) ([bd6e505](https://github.com/googleapis/nodejs-access-approval/commit/bd6e5057024a00800cf343e1715023744c42dca1))

## [2.0.0](https://github.com/googleapis/nodejs-access-approval/compare/v1.1.0...v2.0.0) (2022-06-03)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#124)

### Features

* update protos to include InvalidateApprovalRequest and GetAccessApprovalServiceAccount APIs ([#126](https://github.com/googleapis/nodejs-access-approval/issues/126)) ([02dfd2c](https://github.com/googleapis/nodejs-access-approval/commit/02dfd2c72e8a87ac3ffebeb40dfa68808b159234))


### Build System

* update library to use Node 12 ([#124](https://github.com/googleapis/nodejs-access-approval/issues/124)) ([8c04620](https://github.com/googleapis/nodejs-access-approval/commit/8c04620a20559f41b173be0add720d5e1dcd05f0))

## [1.1.0](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.8...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#76](https://www.github.com/googleapis/nodejs-access-approval/issues/76)) ([42edf5a](https://www.github.com/googleapis/nodejs-access-approval/commit/42edf5aebbe0768f1f3cc44c1056b24fc3e2dd1e))

### [1.0.8](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.7...v1.0.8) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#74](https://www.github.com/googleapis/nodejs-access-approval/issues/74)) ([e83da9b](https://www.github.com/googleapis/nodejs-access-approval/commit/e83da9b6ffa6ea7f268fd31db64a33ea288e651f))

### [1.0.7](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.6...v1.0.7) (2021-08-09)


### Bug Fixes

* **build:** migrate to using main branch ([#72](https://www.github.com/googleapis/nodejs-access-approval/issues/72)) ([7a3102f](https://www.github.com/googleapis/nodejs-access-approval/commit/7a3102f5a7f3d5097c4fb2c7f88e709bc4b14404))

### [1.0.6](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.5...v1.0.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#64](https://www.github.com/googleapis/nodejs-access-approval/issues/64)) ([03f40c1](https://www.github.com/googleapis/nodejs-access-approval/commit/03f40c1f1bbbda37467dacf8748a89ac41993015))

### [1.0.5](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.4...v1.0.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#62](https://www.github.com/googleapis/nodejs-access-approval/issues/62)) ([919c005](https://www.github.com/googleapis/nodejs-access-approval/commit/919c005a4a494cbf7af6df19b86494529ce41fb7))

### [1.0.4](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.3...v1.0.4) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#59](https://www.github.com/googleapis/nodejs-access-approval/issues/59)) ([08855e3](https://www.github.com/googleapis/nodejs-access-approval/commit/08855e3be2505aac0716e6ee02eb094eddd49880))

### [1.0.3](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.2...v1.0.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#55](https://www.github.com/googleapis/nodejs-access-approval/issues/55)) ([a2a0987](https://www.github.com/googleapis/nodejs-access-approval/commit/a2a0987235e81e1c9ec0128b71865dfef2688658))

### [1.0.2](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.1...v1.0.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#48](https://www.github.com/googleapis/nodejs-access-approval/issues/48)) ([0726b46](https://www.github.com/googleapis/nodejs-access-approval/commit/0726b46325079a0f8d9d942a4429ca80f6f3a2ab))

### [1.0.1](https://www.github.com/googleapis/nodejs-access-approval/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#40](https://www.github.com/googleapis/nodejs-access-approval/issues/40)) ([836a1a7](https://www.github.com/googleapis/nodejs-access-approval/commit/836a1a74d5819060d6525142867ea36ec1958398))
* use require() to load JSON protos ([#43](https://www.github.com/googleapis/nodejs-access-approval/issues/43)) ([2050080](https://www.github.com/googleapis/nodejs-access-approval/commit/2050080f681311b75258a5718810d49c586a1bfc))

## 1.0.0 (2021-01-06)


### ⚠ BREAKING CHANGES

* add initial samples (#5)
* initial stub of library

### Features

* add initial samples ([#5](https://www.github.com/googleapis/nodejs-access-approval/issues/5)) ([b717c70](https://www.github.com/googleapis/nodejs-access-approval/commit/b717c70be561244e8a8be950291c45187b026b0e))
* initial stub of library ([0d06d7d](https://www.github.com/googleapis/nodejs-access-approval/commit/0d06d7d01146af6522f81b61ca926d20c39e9987))


### Bug Fixes

* header ([f47f743](https://www.github.com/googleapis/nodejs-access-approval/commit/f47f7432d2dca856f39171ac5051b3bfd5858d19))
