# Changelog

## [1.10.0](https://github.com/googleapis/nodejs-video-transcoder/compare/v1.9.0...v1.10.0) (2022-02-08)


### Features

* **samples:** delete old test jobs ([#148](https://github.com/googleapis/nodejs-video-transcoder/issues/148)) ([ad94ca0](https://github.com/googleapis/nodejs-video-transcoder/commit/ad94ca047d33e5e99b7c2c626b826e1b8d95ba34))


### Bug Fixes

* Remove deprecated v1beta1 API that is no longer available ([#154](https://github.com/googleapis/nodejs-video-transcoder/issues/154)) ([76d9aab](https://github.com/googleapis/nodejs-video-transcoder/commit/76d9aabc9d55f636dfcbb6a6dc6d5bf17302d18d))

## [1.9.0](https://github.com/googleapis/nodejs-video-transcoder/compare/v1.8.1...v1.9.0) (2022-02-04)


### Features

* **samples:** add samples and tests for adding captions to videos ([#143](https://github.com/googleapis/nodejs-video-transcoder/issues/143)) ([52ca4ff](https://github.com/googleapis/nodejs-video-transcoder/commit/52ca4ff401a21af3c825c1bbe6dc03947bd4c0e0))

### [1.8.1](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.8.0...v1.8.1) (2021-12-02)


### Bug Fixes

* add backoff for test retries and get job state queries ([#131](https://www.github.com/googleapis/nodejs-video-transcoder/issues/131)) ([63bba1e](https://www.github.com/googleapis/nodejs-video-transcoder/commit/63bba1ede86c96b3dc1ba2a7616c249525188d9f))

## [1.8.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.7.2...v1.8.0) (2021-11-11)


### Features

* **samples:** add example tags to generated samples ([#128](https://www.github.com/googleapis/nodejs-video-transcoder/issues/128)) ([0f2f1a8](https://www.github.com/googleapis/nodejs-video-transcoder/commit/0f2f1a857c154a944521ea230c4295b379450e7f))

### [1.7.2](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.7.1...v1.7.2) (2021-10-13)


### Bug Fixes

* remove Encryption settings that were published due to a sync issue BREAKING CHANGE: requests specifying Encryption settings are rejected by the server ([1509f5c](https://www.github.com/googleapis/nodejs-video-transcoder/commit/1509f5ce94912bb64fc48103bbc21fe79d81b277))
* update nodejs package name to video-transcoder ([#119](https://www.github.com/googleapis/nodejs-video-transcoder/issues/119)) ([1509f5c](https://www.github.com/googleapis/nodejs-video-transcoder/commit/1509f5ce94912bb64fc48103bbc21fe79d81b277))

### [1.7.1](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.7.0...v1.7.1) (2021-09-09)


### Bug Fixes

* **build:** migrate to using main branch ([#109](https://www.github.com/googleapis/nodejs-video-transcoder/issues/109)) ([5612895](https://www.github.com/googleapis/nodejs-video-transcoder/commit/5612895e1e4a0cfaaf5722b52da20fba249890c6))

## [1.7.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.6.1...v1.7.0) (2021-08-27)


### Features

* turns on self-signed JWT feature flag ([#103](https://www.github.com/googleapis/nodejs-video-transcoder/issues/103)) ([1fba447](https://www.github.com/googleapis/nodejs-video-transcoder/commit/1fba447cd05e0e921198dd0fa9248271f4c48ca3))

### [1.6.1](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.6.0...v1.6.1) (2021-08-19)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#100](https://www.github.com/googleapis/nodejs-video-transcoder/issues/100)) ([ae57011](https://www.github.com/googleapis/nodejs-video-transcoder/commit/ae570110ed04943908190c85d91e5204abf8e1b3))

## [1.6.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.5.0...v1.6.0) (2021-08-10)


### Features

* Add ttl_after_completion_days field to Job ([75ea7d8](https://www.github.com/googleapis/nodejs-video-transcoder/commit/75ea7d8358da15d795556b7d9bb6777bb7ae4b04))
* Add video cropping feature ([75ea7d8](https://www.github.com/googleapis/nodejs-video-transcoder/commit/75ea7d8358da15d795556b7d9bb6777bb7ae4b04))
* Add video padding feature ([75ea7d8](https://www.github.com/googleapis/nodejs-video-transcoder/commit/75ea7d8358da15d795556b7d9bb6777bb7ae4b04))

## [1.5.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.4.4...v1.5.0) (2021-07-16)


### Features

* Enables generation of client libraries for C#, php and ruby. ([#82](https://www.github.com/googleapis/nodejs-video-transcoder/issues/82)) ([721a9f9](https://www.github.com/googleapis/nodejs-video-transcoder/commit/721a9f92f1ca280077c728129550977638b6ef3f))
* Initial commit for the Transcoder V1 client libraries ([#86](https://www.github.com/googleapis/nodejs-video-transcoder/issues/86)) ([578abcb](https://www.github.com/googleapis/nodejs-video-transcoder/commit/578abcb2fd5957f4845e5078af9c881120220288))


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#87](https://www.github.com/googleapis/nodejs-video-transcoder/issues/87)) ([00b82af](https://www.github.com/googleapis/nodejs-video-transcoder/commit/00b82af26623a90c65dd3618e070693ec5df5db5))

### [1.4.4](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.4.3...v1.4.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#83](https://www.github.com/googleapis/nodejs-video-transcoder/issues/83)) ([d7b29c0](https://www.github.com/googleapis/nodejs-video-transcoder/commit/d7b29c06fcb2a408cf102fa9b1e639c193c70c57))

### [1.4.3](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.4.2...v1.4.3) (2021-07-01)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#78](https://www.github.com/googleapis/nodejs-video-transcoder/issues/78)) ([cd436f8](https://www.github.com/googleapis/nodejs-video-transcoder/commit/cd436f8198abab33cd9c4fe63d9b64582764ed03))
* make request optional in all cases ([#74](https://www.github.com/googleapis/nodejs-video-transcoder/issues/74)) ([630b974](https://www.github.com/googleapis/nodejs-video-transcoder/commit/630b974d0e79b805754d2d4f0afc4b7c5ae47f6d))

### [1.4.2](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.4.1...v1.4.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#67](https://www.github.com/googleapis/nodejs-video-transcoder/issues/67)) ([6475120](https://www.github.com/googleapis/nodejs-video-transcoder/commit/6475120814774a482655eb3b60e31a7fc00c2504))

### [1.4.1](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.4.0...v1.4.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#58](https://www.github.com/googleapis/nodejs-video-transcoder/issues/58)) ([50f8132](https://www.github.com/googleapis/nodejs-video-transcoder/commit/50f813209878f5c2472bd1b38640341ae5715d33))
* use require() to load JSON protos ([#61](https://www.github.com/googleapis/nodejs-video-transcoder/issues/61)) ([8f4fab7](https://www.github.com/googleapis/nodejs-video-transcoder/commit/8f4fab7b0b796dc730915ff0f06d0e965f0af915))

## [1.4.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.3.0...v1.4.0) (2021-03-31)


### Features

* add spritesheet samples and tests. Remove unneeded list jobs ca… ([#43](https://www.github.com/googleapis/nodejs-video-transcoder/issues/43)) ([7508d64](https://www.github.com/googleapis/nodejs-video-transcoder/commit/7508d646c099ef278a402b5a7ad76c3ce926e25f))

## [1.3.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.2.0...v1.3.0) (2021-03-15)


### Features

* **samples:** add code samples and tests for overlay creation ([#39](https://www.github.com/googleapis/nodejs-video-transcoder/issues/39)) ([47686fa](https://www.github.com/googleapis/nodejs-video-transcoder/commit/47686fa17c5e5164f6d5f5f37f09d37bd9844cc3))

## [1.2.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.1.0...v1.2.0) (2021-01-09)


### Features

* adds style enumeration ([#22](https://www.github.com/googleapis/nodejs-video-transcoder/issues/22)) ([9b9ca5d](https://www.github.com/googleapis/nodejs-video-transcoder/commit/9b9ca5db8168d70b8afb7dc994659ed92d6a645a))

## [1.1.0](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.0.1...v1.1.0) (2020-11-30)


### Features

* **samples:** add Transcoder samples ([#8](https://www.github.com/googleapis/nodejs-video-transcoder/issues/8)) ([7bf59c3](https://www.github.com/googleapis/nodejs-video-transcoder/commit/7bf59c3c9defa1675d07083578b3d3acc9f3fca8))

### [1.0.1](https://www.github.com/googleapis/nodejs-video-transcoder/compare/v1.0.0...v1.0.1) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#6](https://www.github.com/googleapis/nodejs-video-transcoder/issues/6)) ([256e65b](https://www.github.com/googleapis/nodejs-video-transcoder/commit/256e65b78b11257ffd499f8cac1d01701419162d))

## 1.0.0 (2020-10-29)


### ⚠ BREAKING CHANGES

* initial release of @google-cloud/video-transcoder (#1)

### Features

* initial release of @google-cloud/video-transcoder ([#1](https://www.github.com/googleapis/nodejs-video-transcoder/issues/1)) ([2d70e9d](https://www.github.com/googleapis/nodejs-video-transcoder/commit/2d70e9d68f2feb41c59f55f6e736d2a9d07eee9e))
