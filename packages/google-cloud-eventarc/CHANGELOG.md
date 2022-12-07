# Changelog

## [2.2.0](https://github.com/googleapis/nodejs-eventarc/compare/v2.1.1...v2.2.0) (2022-11-11)


### Features

* Add CMEK support to Eventarc client library ([#108](https://github.com/googleapis/nodejs-eventarc/issues/108)) ([dc3435d](https://github.com/googleapis/nodejs-eventarc/commit/dc3435d0aa624ad5e72acf84e82d38c056a1227f))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#104](https://github.com/googleapis/nodejs-eventarc/issues/104)) ([29fc837](https://github.com/googleapis/nodejs-eventarc/commit/29fc83738cf6e9a5e55baedd89b2ed03dc49f4b0))
* Preserve default values in x-goog-request-params header ([#97](https://github.com/googleapis/nodejs-eventarc/issues/97)) ([1a91d8e](https://github.com/googleapis/nodejs-eventarc/commit/1a91d8e7442d5336a862cb131b672d248a371aec))
* Regenerated protos JS and TS definitions ([#107](https://github.com/googleapis/nodejs-eventarc/issues/107)) ([00fb085](https://github.com/googleapis/nodejs-eventarc/commit/00fb0854e7ba4c477437d9221086dccb88756a5c))

## [2.1.1](https://github.com/googleapis/nodejs-eventarc/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#94](https://github.com/googleapis/nodejs-eventarc/issues/94)) ([4510e6a](https://github.com/googleapis/nodejs-eventarc/commit/4510e6ae4129e391391a7dcf8a1d1ffdb32e5562))
* Better support for fallback mode ([#87](https://github.com/googleapis/nodejs-eventarc/issues/87)) ([b3d5dc0](https://github.com/googleapis/nodejs-eventarc/commit/b3d5dc00e6b3543c962a6ec105fce70472d0ed3c))
* Change import long to require ([#89](https://github.com/googleapis/nodejs-eventarc/issues/89)) ([6804ddf](https://github.com/googleapis/nodejs-eventarc/commit/6804ddf83e3df1d74a83db2a56ef23e934ef0cc7))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-eventarc/issues/1553)) ([#93](https://github.com/googleapis/nodejs-eventarc/issues/93)) ([3b133cd](https://github.com/googleapis/nodejs-eventarc/commit/3b133cdab07b4c302a1b9b48c897e8c4f8c6b3d9))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-eventarc/issues/1546)) ([#92](https://github.com/googleapis/nodejs-eventarc/issues/92)) ([4fccc50](https://github.com/googleapis/nodejs-eventarc/commit/4fccc5011cd9c4b22f16de3942eeba2313b08e46))

## [2.1.0](https://github.com/googleapis/nodejs-eventarc/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#79](https://github.com/googleapis/nodejs-eventarc/issues/79)) ([dcdcd8a](https://github.com/googleapis/nodejs-eventarc/commit/dcdcd8ac2f282f4bbf373e803da88487c7a81f1d))

## [2.0.0](https://github.com/googleapis/nodejs-eventarc/compare/v1.2.0...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#73)

### Features

* Add Provider resources ([#75](https://github.com/googleapis/nodejs-eventarc/issues/75)) ([ccda3a7](https://github.com/googleapis/nodejs-eventarc/commit/ccda3a7d2981b79cc692f8103c4f096ecc9fcf08))


### Build System

* update library to use Node 12 ([#73](https://github.com/googleapis/nodejs-eventarc/issues/73)) ([bd5c2a1](https://github.com/googleapis/nodejs-eventarc/commit/bd5c2a15758e5b387df663fcfa7cb2df1c416ebc))

## [1.2.0](https://github.com/googleapis/nodejs-eventarc/compare/v1.1.2...v1.2.0) (2022-02-14)


### Features

* Add Channel and ChannelConnection resources ([#51](https://github.com/googleapis/nodejs-eventarc/issues/51)) ([bfae8c3](https://github.com/googleapis/nodejs-eventarc/commit/bfae8c32b6a3d3dec9bab906777d0cfae962dab6))

### [1.1.2](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.1.1...v1.1.2) (2021-09-27)


### Bug Fixes

* flag module as GA ([#25](https://www.github.com/googleapis/nodejs-eventarc/issues/25)) ([d918ba1](https://www.github.com/googleapis/nodejs-eventarc/commit/d918ba13ae87dbfca799b6136a0c31bc4c24cb71))

### [1.1.1](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.1.0...v1.1.1) (2021-09-07)


### Bug Fixes

* **build:** migrate to using main branch ([#17](https://www.github.com/googleapis/nodejs-eventarc/issues/17)) ([f84f6ee](https://www.github.com/googleapis/nodejs-eventarc/commit/f84f6ee1aa8a86f8b78f0281c09ea3db388acfc1))

## [1.1.0](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.0.3...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#20](https://www.github.com/googleapis/nodejs-eventarc/issues/20)) ([32e7d47](https://www.github.com/googleapis/nodejs-eventarc/commit/32e7d47e695f6ea181ad40dd241c94ac218af6e0))

### [1.0.3](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.0.2...v1.0.3) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#18](https://www.github.com/googleapis/nodejs-eventarc/issues/18)) ([b79618b](https://www.github.com/googleapis/nodejs-eventarc/commit/b79618b20957262678fa00c85203b045c6e34b63))

### [1.0.2](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.0.1...v1.0.2) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#9](https://www.github.com/googleapis/nodejs-eventarc/issues/9)) ([8b5a101](https://www.github.com/googleapis/nodejs-eventarc/commit/8b5a101bc9c00aecdc387a93051e0b27b4dee121))

### [1.0.1](https://www.github.com/googleapis/nodejs-eventarc/compare/v1.0.0...v1.0.1) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#7](https://www.github.com/googleapis/nodejs-eventarc/issues/7)) ([462a712](https://www.github.com/googleapis/nodejs-eventarc/commit/462a712952481c1763908f094d493f3485ffc093))

## 1.0.0 (2021-07-09)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-eventarc/issues/1)) ([087c84e](https://www.github.com/googleapis/nodejs-eventarc/commit/087c84ebec0ee6f5e0ad277b0c488bfabbc73ffd))
* initial stub of library ([bda50f0](https://www.github.com/googleapis/nodejs-eventarc/commit/bda50f0b9ebe8d347f1e99b321dd4185e92ee982))
