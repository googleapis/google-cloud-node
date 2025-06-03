# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v4.0.1...video-transcoder-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v4.0.0...video-transcoder-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.3.0...video-transcoder-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([eed00f4](https://github.com/googleapis/google-cloud-node/commit/eed00f4e4de22392db3a440a20486c3eeb9d33a6))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.2.0...video-transcoder-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.1.0...video-transcoder-v3.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.0.3...video-transcoder-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [3.0.3](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.0.2...video-transcoder-v3.0.3) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [3.0.2](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.0.1...video-transcoder-v3.0.2) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v3.0.0...video-transcoder-v3.0.1) (2023-08-09)


### Bug Fixes

* **deps:** @google-cloud/video-transcoder must not depend on itself ([#4514](https://github.com/googleapis/google-cloud-node/issues/4514)) ([cbce190](https://github.com/googleapis/google-cloud-node/commit/cbce19078780b17f842c0d8e43a6a7f90941e938))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.7.0...video-transcoder-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.6.0...video-transcoder-v2.7.0) (2023-07-11)


### Features

* [video-transcoder] added support for segment template manifest generation with DASH ([#4407](https://github.com/googleapis/google-cloud-node/issues/4407)) ([198cb4b](https://github.com/googleapis/google-cloud-node/commit/198cb4b8f28ae21b9dc0bc2333d8df5c19ef1421))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.5.0...video-transcoder-v2.6.0) (2023-04-13)


### Features

* [video-transcoder] add support for batch processing mode ([#4166](https://github.com/googleapis/google-cloud-node/issues/4166)) ([8b9f60d](https://github.com/googleapis/google-cloud-node/commit/8b9f60d44d074230bd857a6a1dd6d883f8d36b39))


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.4.1...video-transcoder-v2.5.0) (2023-03-01)


### Features

* [video-transcoder] Specifying language code and display name for text and audio streams is now supported ([#4035](https://github.com/googleapis/google-cloud-node/issues/4035)) ([73d846e](https://github.com/googleapis/google-cloud-node/commit/73d846e1aedc4103d25ae7e7dbecf7c4f5a8775a))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.4.0...video-transcoder-v2.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.3.0...video-transcoder-v2.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/video-transcoder-v2.2.3...video-transcoder-v2.3.0) (2022-12-16)


### Features

* Add PreprocessingConfig.deinterlace ([#3664](https://github.com/googleapis/google-cloud-node/issues/3664)) ([a63a526](https://github.com/googleapis/google-cloud-node/commit/a63a526fbeb51a352068b90b0be68f8e1bad9e44))

## [2.2.3](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.2.2...v2.2.3) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#218](https://github.com/googleapis/nodejs-video-transcoder/issues/218)) ([57badeb](https://github.com/googleapis/nodejs-video-transcoder/commit/57badebacaabed136b8cf2a1a3c77552a5ef249c))
* Regenerated protos JS and TS definitions ([#222](https://github.com/googleapis/nodejs-video-transcoder/issues/222)) ([4ee236a](https://github.com/googleapis/nodejs-video-transcoder/commit/4ee236a3a7026daeead3eec97fc8c58f32aad86b))

## [2.2.2](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.2.1...v2.2.2) (2022-09-23)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#210](https://github.com/googleapis/nodejs-video-transcoder/issues/210)) ([cd73192](https://github.com/googleapis/nodejs-video-transcoder/commit/cd73192a866208be399035e21b1d51e2a1ae1cfc))

## [2.2.1](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.2.0...v2.2.1) (2022-09-01)


### Bug Fixes

* better support for fallback mode ([#192](https://github.com/googleapis/nodejs-video-transcoder/issues/192)) ([d46c012](https://github.com/googleapis/nodejs-video-transcoder/commit/d46c0120ebb51275b72e4c4538d1031003c10c3d))
* change import long to require ([#193](https://github.com/googleapis/nodejs-video-transcoder/issues/193)) ([a620922](https://github.com/googleapis/nodejs-video-transcoder/commit/a62092293b4085ec1affca0f0dd8f698622a981b))
* do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-video-transcoder/issues/1553)) ([#204](https://github.com/googleapis/nodejs-video-transcoder/issues/204)) ([a7bfbd2](https://github.com/googleapis/nodejs-video-transcoder/commit/a7bfbd2a2ee31f8456430adc9f90e365ddcdc98d))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-video-transcoder/issues/1546)) ([#195](https://github.com/googleapis/nodejs-video-transcoder/issues/195)) ([8f21081](https://github.com/googleapis/nodejs-video-transcoder/commit/8f21081c14741ec736b0c418f34a1bd6be329d67))
* use _gaxModule when accessing gax for bundling ([#205](https://github.com/googleapis/nodejs-video-transcoder/issues/205)) ([836e0f2](https://github.com/googleapis/nodejs-video-transcoder/commit/836e0f2f92ff74d4f5c3a3317ab23ffcdf1ad985))
* use google-gax v3.3.0 ([a7bfbd2](https://github.com/googleapis/nodejs-video-transcoder/commit/a7bfbd2a2ee31f8456430adc9f90e365ddcdc98d))

## [2.2.0](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.1.0...v2.2.0) (2022-06-29)


### Features

* support regapic LRO ([#187](https://github.com/googleapis/nodejs-video-transcoder/issues/187)) ([7924434](https://github.com/googleapis/nodejs-video-transcoder/commit/79244348cb6075c157edf3146c511e2214aa3d90))

## [2.1.0](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.0.1...v2.1.0) (2022-06-16)


### Features

* add support for user labels for job and job template ([#184](https://github.com/googleapis/nodejs-video-transcoder/issues/184)) ([675fbd6](https://github.com/googleapis/nodejs-video-transcoder/commit/675fbd6c6f8719f1487c2ef9e19057b71b2e0945))

## [2.0.1](https://github.com/googleapis/nodejs-video-transcoder/compare/v2.0.0...v2.0.1) (2022-06-07)


### Bug Fixes

* **deps:** update dependency @google-cloud/video-transcoder to v2 ([#177](https://github.com/googleapis/nodejs-video-transcoder/issues/177)) ([ffee92b](https://github.com/googleapis/nodejs-video-transcoder/commit/ffee92b8085a139e279d9f8633f8be51be748f62))

## [2.0.0](https://github.com/googleapis/nodejs-video-transcoder/compare/v1.10.0...v2.0.0) (2022-05-17)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#175)

### Build System

* update library to use Node 12 ([#175](https://github.com/googleapis/nodejs-video-transcoder/issues/175)) ([555aad4](https://github.com/googleapis/nodejs-video-transcoder/commit/555aad476236704167b667adf79f597baec0b6a1))

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
