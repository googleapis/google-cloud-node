# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-logging?activeTab=versions


## [11.2.1](https://github.com/googleapis/nodejs-logging/compare/v11.2.0...v11.2.1) (2025-09-03)


### Bug Fixes

* **logging:** Specifying resourceNames should fetch logs only from those resources ([#1597](https://github.com/googleapis/nodejs-logging/issues/1597)) ([ff7899f](https://github.com/googleapis/nodejs-logging/commit/ff7899f5e91da6540d3f68476b2d9acd58ff0993))

## [11.2.0](https://github.com/googleapis/nodejs-logging/compare/v11.1.0...v11.2.0) (2024-07-15)


### Features

* Open telemetry integration and span Id fix for nodejs logging library ([#1497](https://github.com/googleapis/nodejs-logging/issues/1497)) ([91577e0](https://github.com/googleapis/nodejs-logging/commit/91577e0c46cefd1333bb3a69e62a50e0aab74615))

## [11.1.0](https://github.com/googleapis/nodejs-logging/compare/v11.0.0...v11.1.0) (2024-05-29)


### Features

* Add several fields to manage state of database encryption update ([#1495](https://github.com/googleapis/nodejs-logging/issues/1495)) ([4137f7b](https://github.com/googleapis/nodejs-logging/commit/4137f7b276aaf419125de2f913bf0d61afc7cde7))
* Update Nodejs generator to send API versions in headers for GAPICs ([#1502](https://github.com/googleapis/nodejs-logging/issues/1502)) ([346e646](https://github.com/googleapis/nodejs-logging/commit/346e646367e7e1d6d9456ed4f8ff4a7464eb16a9))


### Bug Fixes

* Correct long audio synthesis HTTP binding ([#1479](https://github.com/googleapis/nodejs-logging/issues/1479)) ([1f94504](https://github.com/googleapis/nodejs-logging/commit/1f945042478bfc9fba4fb348705f903d05b41821))
* Improve retry logic for streaming API calls ([#1484](https://github.com/googleapis/nodejs-logging/issues/1484)) ([7e11e11](https://github.com/googleapis/nodejs-logging/commit/7e11e11bcb2c3dd346b589cf01cb75626ff10f4c))

## [11.0.0](https://github.com/googleapis/nodejs-logging/compare/v10.5.0...v11.0.0) (2023-08-10)


### ⚠ BREAKING CHANGES

* migrate to Node 14

### Miscellaneous Chores

* Migrate to Node 14 ([c294f5d](https://github.com/googleapis/nodejs-logging/commit/c294f5d439eea69826d9ba6cb66f00adaf428878))

## [10.5.0](https://github.com/googleapis/nodejs-logging/compare/v10.4.1...v10.5.0) (2023-05-30)


### Features

* Log Analytics features of the Cloud Logging API ([#1416](https://github.com/googleapis/nodejs-logging/issues/1416)) ([3c3de6d](https://github.com/googleapis/nodejs-logging/commit/3c3de6d3e472fa7d0a9ebbe05cf90abfa173db64))

## [10.4.1](https://github.com/googleapis/nodejs-logging/compare/v10.4.0...v10.4.1) (2023-04-28)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#1412](https://github.com/googleapis/nodejs-logging/issues/1412)) ([8eb6f03](https://github.com/googleapis/nodejs-logging/commit/8eb6f034c379fff01c3bcb2dacbbf764dd40c1d7))

## [10.4.0](https://github.com/googleapis/nodejs-logging/compare/v10.3.3...v10.4.0) (2023-01-30)


### Features

* Added SuggestConversationSummary RPC ([#1399](https://github.com/googleapis/nodejs-logging/issues/1399)) ([f176209](https://github.com/googleapis/nodejs-logging/commit/f17620919e8f528f197218c97a6a839a7c480a80))

## [10.3.3](https://github.com/googleapis/nodejs-logging/compare/v10.3.2...v10.3.3) (2022-12-16)


### Bug Fixes

* Add CLOUDSDK_PYTHON env var to environment tests ([#1385](https://github.com/googleapis/nodejs-logging/issues/1385)) ([8ac3e6b](https://github.com/googleapis/nodejs-logging/commit/8ac3e6b69c7a862942a40427ddefa07b0cf50554))

## [10.3.2](https://github.com/googleapis/nodejs-logging/compare/v10.3.1...v10.3.2) (2022-12-02)


### Bug Fixes

* Add a partner team as approvers for PRs ([#1380](https://github.com/googleapis/nodejs-logging/issues/1380)) ([ca1f4fa](https://github.com/googleapis/nodejs-logging/commit/ca1f4fa30baa4f9786d6c112313c4fe06773524d))

## [10.3.1](https://github.com/googleapis/nodejs-logging/compare/v10.3.0...v10.3.1) (2022-11-07)


### Bug Fixes

* Switch instrumentation code to work with NODEJS_DEFAULT_LIBRARY_VERSION only ([#1373](https://github.com/googleapis/nodejs-logging/issues/1373)) ([32b22b4](https://github.com/googleapis/nodejs-logging/commit/32b22b4c17376a51f413481b3e412a88c0f83f06))

## [10.3.0](https://github.com/googleapis/nodejs-logging/compare/v10.2.3...v10.3.0) (2022-11-04)


### Features

* Add support for instrumentation version annotations ([#1370](https://github.com/googleapis/nodejs-logging/issues/1370)) ([c039022](https://github.com/googleapis/nodejs-logging/commit/c039022783d7507b9cb14152e1e370b03f6f864f))

## [10.2.3](https://github.com/googleapis/nodejs-logging/compare/v10.2.2...v10.2.3) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#1367](https://github.com/googleapis/nodejs-logging/issues/1367)) ([8cd3262](https://github.com/googleapis/nodejs-logging/commit/8cd326250d5f92e025925158922f67de9d65678e))

## [10.2.2](https://github.com/googleapis/nodejs-logging/compare/v10.2.1...v10.2.2) (2022-10-31)


### Bug Fixes

* Runtime package.json check causes breakage when bundled ([#1364](https://github.com/googleapis/nodejs-logging/issues/1364)) ([ec40231](https://github.com/googleapis/nodejs-logging/commit/ec4023165368eea7fd6fc05002a7da1a065b128e))

## [10.2.1](https://github.com/googleapis/nodejs-logging/compare/v10.2.0...v10.2.1) (2022-10-28)


### Bug Fixes

* Correct an order of instrumentation entries ([#1362](https://github.com/googleapis/nodejs-logging/issues/1362)) ([c6b11e3](https://github.com/googleapis/nodejs-logging/commit/c6b11e33a1979af522972f37fa5f14f734e64297))

## [10.2.0](https://github.com/googleapis/nodejs-logging/compare/v10.1.11...v10.2.0) (2022-10-27)


### Features

* Add support for partialSuccess global configuration ([#1359](https://github.com/googleapis/nodejs-logging/issues/1359)) ([178b19f](https://github.com/googleapis/nodejs-logging/commit/178b19f55e8d50415aee62cc770b2244c590ff67))

## [10.1.11](https://github.com/googleapis/nodejs-logging/compare/v10.1.10...v10.1.11) (2022-10-11)


### Bug Fixes

* Instrumentation performance ([#1354](https://github.com/googleapis/nodejs-logging/issues/1354)) ([9f14ea1](https://github.com/googleapis/nodejs-logging/commit/9f14ea11aed043b635518e7a43dd7ba128a7f8c4))

## [10.1.10](https://github.com/googleapis/nodejs-logging/compare/v10.1.9...v10.1.10) (2022-09-14)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#1337](https://github.com/googleapis/nodejs-logging/issues/1337)) ([87c8d1f](https://github.com/googleapis/nodejs-logging/commit/87c8d1f034d6318d4b0841099f844a9474aae165))

## [10.1.9](https://github.com/googleapis/nodejs-logging/compare/v10.1.8...v10.1.9) (2022-09-09)


### Bug Fixes

* Google-gax resolution ([#1333](https://github.com/googleapis/nodejs-logging/issues/1333)) ([4491646](https://github.com/googleapis/nodejs-logging/commit/449164633b407770ca791b1e5cdbdf57df7e32ee))

## [10.1.8](https://github.com/googleapis/nodejs-logging/compare/v10.1.7...v10.1.8) (2022-09-03)


### Bug Fixes

* Correction for timestamp and instrumentation record severity fields format ([#1328](https://github.com/googleapis/nodejs-logging/issues/1328)) ([057431b](https://github.com/googleapis/nodejs-logging/commit/057431bf7e0157eb6c448973248004b441c6cddb))

## [10.1.7](https://github.com/googleapis/nodejs-logging/compare/v10.1.6...v10.1.7) (2022-09-02)


### Bug Fixes

* MaxRetries parameter is ignored ([#1326](https://github.com/googleapis/nodejs-logging/issues/1326)) ([caed0af](https://github.com/googleapis/nodejs-logging/commit/caed0afc8dc365024ae4c37d92dd929c9626f36e))

## [10.1.6](https://github.com/googleapis/nodejs-logging/compare/v10.1.5...v10.1.6) (2022-08-31)


### Bug Fixes

* use _gaxModule when accessing gax for bundling ([#1322](https://github.com/googleapis/nodejs-logging/issues/1322)) ([9cd207d](https://github.com/googleapis/nodejs-logging/commit/9cd207dffe32f20472ab2e0037dbca07d62786d1))

## [10.1.5](https://github.com/googleapis/nodejs-logging/compare/v10.1.4...v10.1.5) (2022-08-27)


### Bug Fixes

* do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-logging/issues/1553)) ([#1321](https://github.com/googleapis/nodejs-logging/issues/1321)) ([f8fb563](https://github.com/googleapis/nodejs-logging/commit/f8fb563b8486d6b6adf966ae35147be5ba640f03))
* use google-gax v3.3.0 ([f8fb563](https://github.com/googleapis/nodejs-logging/commit/f8fb563b8486d6b6adf966ae35147be5ba640f03))

## [10.1.4](https://github.com/googleapis/nodejs-logging/compare/v10.1.3...v10.1.4) (2022-08-25)


### Bug Fixes

* npm audit failing ([#1319](https://github.com/googleapis/nodejs-logging/issues/1319)) ([2675622](https://github.com/googleapis/nodejs-logging/commit/267562276b5ff727cb74bbe1c31699f396cca111))

## [10.1.3](https://github.com/googleapis/nodejs-logging/compare/v10.1.2...v10.1.3) (2022-08-23)


### Bug Fixes

* change import long to require ([#1315](https://github.com/googleapis/nodejs-logging/issues/1315)) ([3cca57a](https://github.com/googleapis/nodejs-logging/commit/3cca57adefcd001e71dc3b28a871efaae879d186))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-logging/issues/1546)) ([#1317](https://github.com/googleapis/nodejs-logging/issues/1317)) ([d85c9a0](https://github.com/googleapis/nodejs-logging/commit/d85c9a0caad56670978413da5ddcf12226478505))

## [10.1.2](https://github.com/googleapis/nodejs-logging/compare/v10.1.1...v10.1.2) (2022-08-20)


### Bug Fixes

* better support for fallback mode ([#1312](https://github.com/googleapis/nodejs-logging/issues/1312)) ([91c1222](https://github.com/googleapis/nodejs-logging/commit/91c1222c0a4183776a20e2f5266f577bc4614a6d))
* Instrumentation version contains package.json content ([#1310](https://github.com/googleapis/nodejs-logging/issues/1310)) ([01e1286](https://github.com/googleapis/nodejs-logging/commit/01e12860556ba74749bebd73b5ee143c1f922e0d))
* maxResults in getEntries looks broken ([#1311](https://github.com/googleapis/nodejs-logging/issues/1311)) ([208d994](https://github.com/googleapis/nodejs-logging/commit/208d994ecba2a78e667a63c442bf832abc750cc1))

## [10.1.1](https://github.com/googleapis/nodejs-logging/compare/v10.1.0...v10.1.1) (2022-07-14)


### Bug Fixes

* Add LogSyncOptions parameter to Logging.logSync() API ([#1307](https://github.com/googleapis/nodejs-logging/issues/1307)) ([89408b0](https://github.com/googleapis/nodejs-logging/commit/89408b0c18a6947ee68da77424e23ac06708b54e))

## [10.1.0](https://github.com/googleapis/nodejs-logging/compare/v10.0.4...v10.1.0) (2022-07-11)


### Features

* support regapic LRO ([e702831](https://github.com/googleapis/nodejs-logging/commit/e7028312c5762e1e75abe9972d1c9bc07ed540fe))


### Bug Fixes

* Change image in readme to a static link ([#1306](https://github.com/googleapis/nodejs-logging/issues/1306)) ([7f778db](https://github.com/googleapis/nodejs-logging/commit/7f778db8d024831f395d2537aeb62807257e3f53)), closes [#1303](https://github.com/googleapis/nodejs-logging/issues/1303)
* Logging to stdout in Cloud Run creates a JSON object as "message" ([#1305](https://github.com/googleapis/nodejs-logging/issues/1305)) ([cb5f424](https://github.com/googleapis/nodejs-logging/commit/cb5f424d1d5a1876927a79f284646814f9c0ad9d))

## [10.0.4](https://github.com/googleapis/nodejs-logging/compare/v10.0.3...v10.0.4) (2022-06-12)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v4 ([#1295](https://github.com/googleapis/nodejs-logging/issues/1295)) ([15fb8b8](https://github.com/googleapis/nodejs-logging/commit/15fb8b8e424f89a702a5e3cf5d48e63ee40010db))
* **deps:** update dependency @google-cloud/projectify to v3 ([#1296](https://github.com/googleapis/nodejs-logging/issues/1296)) ([5e99ce1](https://github.com/googleapis/nodejs-logging/commit/5e99ce1ac6db05fd07dc7bd1447fe28a88073227))

## [10.0.3](https://github.com/googleapis/nodejs-logging/compare/v10.0.2...v10.0.3) (2022-06-01)


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#1282](https://github.com/googleapis/nodejs-logging/issues/1282)) ([fd0acfc](https://github.com/googleapis/nodejs-logging/commit/fd0acfc7bf41296237af3ec9deca1c0725ebc0dc))

### [10.0.2](https://github.com/googleapis/nodejs-logging/compare/v10.0.1...v10.0.2) (2022-05-25)


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v6 ([#1283](https://github.com/googleapis/nodejs-logging/issues/1283)) ([090a9fb](https://github.com/googleapis/nodejs-logging/commit/090a9fbeff6253634335225c434731d4fff1d073))

### [10.0.1](https://github.com/googleapis/nodejs-logging/compare/v10.0.0...v10.0.1) (2022-05-20)


### Bug Fixes

* Add support to set an instrumentation flag ([#1279](https://github.com/googleapis/nodejs-logging/issues/1279)) ([6d470fc](https://github.com/googleapis/nodejs-logging/commit/6d470fc26ffb0411ace184d062b0e603e7cf6259))
* **deps:** update dependency @google-cloud/paginator to v4 ([#1276](https://github.com/googleapis/nodejs-logging/issues/1276)) ([0bfe813](https://github.com/googleapis/nodejs-logging/commit/0bfe813c54a0d63a0b73a2dfe8cd702da5a6c91b))

## [10.0.0](https://github.com/googleapis/nodejs-logging/compare/v9.9.0...v10.0.0) (2022-05-18)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1272)

### Build System

* update library to use Node 12 ([#1272](https://github.com/googleapis/nodejs-logging/issues/1272)) ([13f909f](https://github.com/googleapis/nodejs-logging/commit/13f909ff1e26fe783599867c3b7992020a76e934))

## [9.9.0](https://github.com/googleapis/nodejs-logging/compare/v9.8.3...v9.9.0) (2022-05-09)


### Features

* Add support for library instrumentation ([#1261](https://github.com/googleapis/nodejs-logging/issues/1261)) ([bb864c8](https://github.com/googleapis/nodejs-logging/commit/bb864c8ff6a57fb70f350d4a15d97e85fdafab29))

### [9.8.3](https://github.com/googleapis/nodejs-logging/compare/v9.8.2...v9.8.3) (2022-04-14)


### Bug Fixes

* Reenable staleness bot ([#1249](https://github.com/googleapis/nodejs-logging/issues/1249)) ([3d29fc8](https://github.com/googleapis/nodejs-logging/commit/3d29fc8ba8106614ac372d86add10e068a67e426))

### [9.8.2](https://github.com/googleapis/nodejs-logging/compare/v9.8.1...v9.8.2) (2022-03-30)


### Bug Fixes

* traceparent traceSampled parsing issue ([#1241](https://github.com/googleapis/nodejs-logging/issues/1241)) ([0e0d86f](https://github.com/googleapis/nodejs-logging/commit/0e0d86f97b0cdab84aa0a5afaa7be148fa7f0403))

### [9.8.1](https://github.com/googleapis/nodejs-logging/compare/v9.8.0...v9.8.1) (2022-03-29)


### Bug Fixes

* Add installation step for @google-cloud/logging-min NPM package in README ([#1239](https://github.com/googleapis/nodejs-logging/issues/1239)) ([f31e3ed](https://github.com/googleapis/nodejs-logging/commit/f31e3ede4d5765fea21e776e27236a2a349b0235))

## [9.8.0](https://github.com/googleapis/nodejs-logging/compare/v9.7.0...v9.8.0) (2022-02-26)


### Features

* KMS configuration in settings ([#1231](https://github.com/googleapis/nodejs-logging/issues/1231)) ([cf3b56f](https://github.com/googleapis/nodejs-logging/commit/cf3b56f5753e1a94b9e89d4714c6da657b875e42))

## [9.7.0](https://github.com/googleapis/nodejs-logging/compare/v9.6.9...v9.7.0) (2022-02-18)


### Features

* Update Logging API with latest changes ([5eddc7d](https://github.com/googleapis/nodejs-logging/commit/5eddc7d6efeb19bdd01eeba13505b8290763a790))

### [9.6.9](https://github.com/googleapis/nodejs-logging/compare/v9.6.8...v9.6.9) (2022-02-09)


### Bug Fixes

* Regular error showing Total timeout of API google.logging.v2.LoggingServiceV2 exceeded 600000 milliseconds ([#1225](https://github.com/googleapis/nodejs-logging/issues/1225)) ([7f584bc](https://github.com/googleapis/nodejs-logging/commit/7f584bc307ed18e333002177436046b3c30f4aa0))

### [9.6.8](https://github.com/googleapis/nodejs-logging/compare/v9.6.7...v9.6.8) (2022-01-21)


### Bug Fixes

* log.write removed option.resource.labels ([#1219](https://github.com/googleapis/nodejs-logging/issues/1219)) ([6d7e9ed](https://github.com/googleapis/nodejs-logging/commit/6d7e9ed9cd8b607009b0000aad92041a88107e4c))

### [9.6.7](https://github.com/googleapis/nodejs-logging/compare/v9.6.6...v9.6.7) (2022-01-11)


### Bug Fixes

* Setting maxEntrySize does not truncate big json payloads correctly ([#1177](https://www.github.com/googleapis/nodejs-logging/issues/1177)) ([ec66e4d](https://www.github.com/googleapis/nodejs-logging/commit/ec66e4dc96a89259852688d395e647e9a019089d))


### [9.6.6](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.5...v9.6.6) (2021-12-22)


### Bug Fixes

* update links for TSDoc ([#1197](https://www.github.com/googleapis/nodejs-logging/issues/1197)) ([154dffc](https://www.github.com/googleapis/nodejs-logging/commit/154dffc6197d6be711b8186ed81efa3f7512714d))

### [9.6.5](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.4...v9.6.5) (2021-12-21)


### Bug Fixes

* update links for TSDoc ([#1194](https://www.github.com/googleapis/nodejs-logging/issues/1194)) ([b66e158](https://www.github.com/googleapis/nodejs-logging/commit/b66e1580f958e4213e3eecbbceaae2c5ded7e14d))

### [9.6.4](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.3...v9.6.4) (2021-12-13)


### Bug Fixes

* Correct a comment in sample regarding asynchronous log writing ([#1189](https://www.github.com/googleapis/nodejs-logging/issues/1189)) ([c4abb7e](https://www.github.com/googleapis/nodejs-logging/commit/c4abb7eb1012e5a95d3b68a647a3c2d63d85610f))

### [9.6.3](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.2...v9.6.3) (2021-11-08)


### Bug Fixes

* **cloud-rad:** move comments for TSDoc ([#1181](https://www.github.com/googleapis/nodejs-logging/issues/1181)) ([51d6efd](https://www.github.com/googleapis/nodejs-logging/commit/51d6efd3341e6a02ffd130e36eb1491f410e1dc1))

### [9.6.2](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.1...v9.6.2) (2021-11-01)


### Bug Fixes

* Cannot read property 'forEach' of undefined ([#1173](https://www.github.com/googleapis/nodejs-logging/issues/1173)) ([abf1ab0](https://www.github.com/googleapis/nodejs-logging/commit/abf1ab03483db8bf0c018524c348260a06193a4c))

### [9.6.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.6.0...v9.6.1) (2021-09-30)


### Bug Fixes

* log a warning instead of failing test ([#1161](https://www.github.com/googleapis/nodejs-logging/issues/1161)) ([689ffb8](https://www.github.com/googleapis/nodejs-logging/commit/689ffb8a7ab76104ddd4739cba484db0f3471222))

## [9.6.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.7...v9.6.0) (2021-09-08)


### Features

* turns on self-signed JWT feature flag ([#1140](https://www.github.com/googleapis/nodejs-logging/issues/1140)) ([dc15213](https://www.github.com/googleapis/nodejs-logging/commit/dc15213d0fa2c56c74bb1c22f38f105c7358dd38))


### Bug Fixes

* **build:** update branch to main ([#1152](https://www.github.com/googleapis/nodejs-logging/issues/1152)) ([9a2e91e](https://www.github.com/googleapis/nodejs-logging/commit/9a2e91ea5f78160c02949a8f2729219f8da7afcd))

### [9.5.7](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.6...v9.5.7) (2021-09-02)


### Bug Fixes

* Fix detecting Cloud Run logic ([#1145](https://www.github.com/googleapis/nodejs-logging/issues/1145)) ([99c276c](https://www.github.com/googleapis/nodejs-logging/commit/99c276cf0c394200836f3289ff21a4880523a7b5)), closes [#1127](https://www.github.com/googleapis/nodejs-logging/issues/1127)

### [9.5.6](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.5...v9.5.6) (2021-09-01)


### Bug Fixes

* **deps:** update dependency eventid to v2 ([#1144](https://www.github.com/googleapis/nodejs-logging/issues/1144)) ([2c4b4c1](https://www.github.com/googleapis/nodejs-logging/commit/2c4b4c1bca7859cd15fd611653d8b35983fe5915))

### [9.5.5](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.4...v9.5.5) (2021-08-16)


### Bug Fixes

* **deps:** require google-gax v2.24.1 ([#1139](https://www.github.com/googleapis/nodejs-logging/issues/1139)) ([4c9fc48](https://www.github.com/googleapis/nodejs-logging/commit/4c9fc486cab8aac21b50cebb0e25990f7cffeccf))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#1121](https://www.github.com/googleapis/nodejs-logging/issues/1121)) ([8ac1348](https://www.github.com/googleapis/nodejs-logging/commit/8ac1348b18fc07ad79e5d06ea945eb92d9f24bc9))

### [9.5.4](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.3...v9.5.4) (2021-07-14)


### Bug Fixes

* missing "uuid" dependency ([#1119](https://www.github.com/googleapis/nodejs-logging/issues/1119)) ([168389c](https://www.github.com/googleapis/nodejs-logging/commit/168389ce885e6e00c7f8d87fbda2564077ff5356))

### [9.5.3](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.2...v9.5.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#1117](https://www.github.com/googleapis/nodejs-logging/issues/1117)) ([cbf3af9](https://www.github.com/googleapis/nodejs-logging/commit/cbf3af964225dfdf1bb23406ffbfd71202c7b6ca))

### [9.5.2](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.1...v9.5.2) (2021-06-30)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#1111](https://www.github.com/googleapis/nodejs-logging/issues/1111)) ([d64d671](https://www.github.com/googleapis/nodejs-logging/commit/d64d67190dddf0318ca47eb8528e4b9052e3a9c0))

### [9.5.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.5.0...v9.5.1) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#1103](https://www.github.com/googleapis/nodejs-logging/issues/1103)) ([4f5e5e3](https://www.github.com/googleapis/nodejs-logging/commit/4f5e5e3a1e0d79f5bc172687a95cd0839c1a124e))

## [9.5.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.4.1...v9.5.0) (2021-06-23)


### Features

* users can write structured logEntries to STDOUT ([#1102](https://www.github.com/googleapis/nodejs-logging/issues/1102)) ([f4e892e](https://www.github.com/googleapis/nodejs-logging/commit/f4e892ed1342f3aacb8056212d75792959ab43b5))

### [9.4.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.4.0...v9.4.1) (2021-06-14)


### Bug Fixes

* allow unformatted originalURL input ([#1100](https://www.github.com/googleapis/nodejs-logging/issues/1100)) ([136f90b](https://www.github.com/googleapis/nodejs-logging/commit/136f90b0926c1a04521fddd7c82d0efbf7572521))

## [9.4.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.3.1...v9.4.0) (2021-06-11)


### Features

* detect Google and W3C trace context (including in middleware) ([#1088](https://www.github.com/googleapis/nodejs-logging/issues/1088)) ([864f188](https://www.github.com/googleapis/nodejs-logging/commit/864f18848c87a22c335b48e60a1d4505d3c9bd94))
* users can log raw http request objects with trace ([#1086](https://www.github.com/googleapis/nodejs-logging/issues/1086)) ([19b943e](https://www.github.com/googleapis/nodejs-logging/commit/19b943eb44b2c046ab4f2b4886a79f9c42536c2a))


### Bug Fixes

* Report warning on `.github/workflows/ci.yaml` ([#1110](https://www.github.com/googleapis/nodejs-logging/issues/1110)) ([#1089](https://www.github.com/googleapis/nodejs-logging/issues/1089)) ([0d8b8d0](https://www.github.com/googleapis/nodejs-logging/commit/0d8b8d0d3129db9f3cbd2eed7c1234b14705dd9e))

### [9.3.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.3.0...v9.3.1) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#1081](https://www.github.com/googleapis/nodejs-logging/issues/1081)) ([bf0113d](https://www.github.com/googleapis/nodejs-logging/commit/bf0113d24a5d4e2aacb704e47207d81f98ad0d86))

## [9.3.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.2.3...v9.3.0) (2021-05-24)


### Features

* fix resource autodetection for GKE, GAE, and GCE ([#1070](https://www.github.com/googleapis/nodejs-logging/issues/1070)) ([1820f5d](https://www.github.com/googleapis/nodejs-logging/commit/1820f5de0a7f7f9e87cc94219c3fd1cee82b2a64))


### Bug Fixes

* debrand Stackdriver & do not throw errors ([#1073](https://www.github.com/googleapis/nodejs-logging/issues/1073)) ([5cd8c17](https://www.github.com/googleapis/nodejs-logging/commit/5cd8c172a671a11a708c140f63ed0f589aa01fa5))
* Object implementing toString not logged as Object ([#1077](https://www.github.com/googleapis/nodejs-logging/issues/1077)) ([a060957](https://www.github.com/googleapis/nodejs-logging/commit/a0609574cf5012d89863f23c4c94a79fb605c7ae))
* use require() to load JSON protos ([#1065](https://www.github.com/googleapis/nodejs-logging/issues/1065)) ([9718d9a](https://www.github.com/googleapis/nodejs-logging/commit/9718d9a3f7f672947de674343fc0527f39d4a0aa))

### [9.2.3](https://www.github.com/googleapis/nodejs-logging/compare/v9.2.2...v9.2.3) (2021-05-07)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#1061](https://www.github.com/googleapis/nodejs-logging/issues/1061)) ([8866b55](https://www.github.com/googleapis/nodejs-logging/commit/8866b55ad0624d15c4aa2a616678ad3718325826))

### [9.2.2](https://www.github.com/googleapis/nodejs-logging/compare/v9.2.1...v9.2.2) (2021-05-04)


### Bug Fixes

* **deps:** update dependency yargs to v17 ([#1058](https://www.github.com/googleapis/nodejs-logging/issues/1058)) ([8d96368](https://www.github.com/googleapis/nodejs-logging/commit/8d963684c60c98fecf48fc4075bcd9c67537dc5c))

### [9.2.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.2.0...v9.2.1) (2021-04-15)


### Bug Fixes

* accept uniqueWriterIdentity in setMetadata ([#1034](https://www.github.com/googleapis/nodejs-logging/issues/1034)) ([02e8bb4](https://www.github.com/googleapis/nodejs-logging/commit/02e8bb4b5983c48bf7bd5e16ba4ab9c226d3f28e))
* cloud functions resource.labels.region undefined ([#1028](https://www.github.com/googleapis/nodejs-logging/issues/1028)) ([3808656](https://www.github.com/googleapis/nodejs-logging/commit/38086569ad2915785e161542d7056ae3944948c8))
* **deps:** remove dependency on through2 ([#1023](https://www.github.com/googleapis/nodejs-logging/issues/1023)) ([485347f](https://www.github.com/googleapis/nodejs-logging/commit/485347fd3712565ae90e307a314bcdfeeb581379))

## [9.2.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.1.1...v9.2.0) (2021-04-05)


### Features

* resource autodetection for cloud run ([#1024](https://www.github.com/googleapis/nodejs-logging/issues/1024)) ([08c4404](https://www.github.com/googleapis/nodejs-logging/commit/08c4404fa401f0d90a8ee24a5b0477777e6b5e70))


### Bug Fixes

* **deps:** drop dependency on is ([#1021](https://www.github.com/googleapis/nodejs-logging/issues/1021)) ([f32da13](https://www.github.com/googleapis/nodejs-logging/commit/f32da13ac6744de68a6d8e2d615df2bb80438643))
* **deps:** drop dependency on type-fest ([#1020](https://www.github.com/googleapis/nodejs-logging/issues/1020)) ([f1e35e4](https://www.github.com/googleapis/nodejs-logging/commit/f1e35e443e04d832677eca8663fb3ae2567919fa))

### [9.1.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.1.0...v9.1.1) (2021-03-31)


### Bug Fixes

* Insufficient return values for `GetEntriesResponse` and `GetLogsResponse` ([#1011](https://www.github.com/googleapis/nodejs-logging/issues/1011)) ([0157ae1](https://www.github.com/googleapis/nodejs-logging/commit/0157ae14899cc885d584a9fe9f7f3bbe24188eb2)), closes [#1010](https://www.github.com/googleapis/nodejs-logging/issues/1010)

## [9.1.0](https://www.github.com/googleapis/nodejs-logging/compare/v9.0.2...v9.1.0) (2021-03-03)


### Features

* tail entries wrapper ([#998](https://www.github.com/googleapis/nodejs-logging/issues/998)) ([bfe8b76](https://www.github.com/googleapis/nodejs-logging/commit/bfe8b765d1c690e81c96f0c71e4e431622f67104))


### Bug Fixes

* **deps:** update dependency type-fest to ^0.21.0 ([#997](https://www.github.com/googleapis/nodejs-logging/issues/997)) ([47a4c72](https://www.github.com/googleapis/nodejs-logging/commit/47a4c724f4f359f9c3d05360881724cbb14894d7))

### [9.0.2](https://www.github.com/googleapis/nodejs-logging/compare/v9.0.1...v9.0.2) (2021-02-09)


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#993](https://www.github.com/googleapis/nodejs-logging/issues/993)) ([9edeaf7](https://www.github.com/googleapis/nodejs-logging/commit/9edeaf74b7cbdc55215d5a40db7d3043937c598e))

### [9.0.1](https://www.github.com/googleapis/nodejs-logging/compare/v9.0.0...v9.0.1) (2021-01-07)


### Bug Fixes

* synth.py pipeline ([#979](https://www.github.com/googleapis/nodejs-logging/issues/979)) ([f987b2d](https://www.github.com/googleapis/nodejs-logging/commit/f987b2d11f569f332a0f1fcf7c7c9975c9a92d51))

## [9.0.0](https://www.github.com/googleapis/nodejs-logging/compare/v8.2.0...v9.0.0) (2020-12-04)


### ⚠ BREAKING CHANGES

* getEntries filters 24 hour timestamp by default (#955)
* users can log httprequest logs without providing a log message (#942)

### Bug Fixes

* only apply logName to filter when not already present ([#962](https://www.github.com/googleapis/nodejs-logging/issues/962)) ([f1fbbc4](https://www.github.com/googleapis/nodejs-logging/commit/f1fbbc4dde50c6285ab0ee44a7ebb5dd9298aaeb))
* **deps:** roll back dependency @google-cloud/logging to ^8.1.1 ([#961](https://www.github.com/googleapis/nodejs-logging/issues/961)) ([1fa8cd3](https://www.github.com/googleapis/nodejs-logging/commit/1fa8cd3bfc0eda6f1811ab44418d6355763ef16e))
* users can log httprequest logs without providing a log message ([#942](https://www.github.com/googleapis/nodejs-logging/issues/942)) ([d72a296](https://www.github.com/googleapis/nodejs-logging/commit/d72a29665ddd777cfc14234f1458f0a2ffc2e3b5))


### Performance Improvements

* getEntries filters 24 hour timestamp by default ([#955](https://www.github.com/googleapis/nodejs-logging/issues/955)) ([3d63d5f](https://www.github.com/googleapis/nodejs-logging/commit/3d63d5f8b79c082db37284d84c28311cb107343e))

## [8.2.0](https://www.github.com/googleapis/nodejs-logging/compare/v8.1.1...v8.2.0) (2020-11-30)


### Features

* add the Tailing API to get a live stream of the tail end of filtered logs ([#958](https://www.github.com/googleapis/nodejs-logging/issues/958)) ([c7b2801](https://www.github.com/googleapis/nodejs-logging/commit/c7b280105d79c69ea01a3e490a712c940a851a32))
* Makes remaining LogBucket and LogViews methods public ([c9a69da](https://www.github.com/googleapis/nodejs-logging/commit/c9a69da3cf4ec3e87f30afc22344191a3e43e26a))


### Bug Fixes

* **deps:** update dependency type-fest to ^0.20.0 ([#956](https://www.github.com/googleapis/nodejs-logging/issues/956)) ([ed9dcf8](https://www.github.com/googleapis/nodejs-logging/commit/ed9dcf8785a5abe72cbe407c38dbb900ffa80bc1))

### [8.1.1](https://www.github.com/googleapis/nodejs-logging/compare/v8.1.0...v8.1.1) (2020-11-16)


### Bug Fixes

* **deps:** update dependency type-fest to ^0.19.0 ([#945](https://www.github.com/googleapis/nodejs-logging/issues/945)) ([bd5f001](https://www.github.com/googleapis/nodejs-logging/commit/bd5f00173b92a56e2524c8222f74db1216924ec3))

## [8.1.0](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.10...v8.1.0) (2020-11-09)


### Features

* accept entry.timestamp string input in RFC3339 format ([#937](https://www.github.com/googleapis/nodejs-logging/issues/937)) ([869bbaf](https://www.github.com/googleapis/nodejs-logging/commit/869bbafe3790d6d6f21a1f538549a1f336d6f918))


### Bug Fixes

* **deps:** roll back dependency @google-cloud/logging to ^8.0.9 ([#940](https://www.github.com/googleapis/nodejs-logging/issues/940)) ([2a3ad40](https://www.github.com/googleapis/nodejs-logging/commit/2a3ad405683421f5d2099da1b658fe111dc336d2))

### [8.0.10](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.9...v8.0.10) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#935](https://www.github.com/googleapis/nodejs-logging/issues/935)) ([fd1e63a](https://www.github.com/googleapis/nodejs-logging/commit/fd1e63a56f19b5af48fbba40d136a4ce640ca2f3))

### [8.0.9](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.8...v8.0.9) (2020-11-03)


### Bug Fixes

* **deps:** update dependency dot-prop to v6 ([#908](https://www.github.com/googleapis/nodejs-logging/issues/908)) ([e696466](https://www.github.com/googleapis/nodejs-logging/commit/e6964662276239b86ccdfcd3e448df65d2013522))
* **deps:** update dependency type-fest to ^0.18.0 ([#912](https://www.github.com/googleapis/nodejs-logging/issues/912)) ([dafdf8e](https://www.github.com/googleapis/nodejs-logging/commit/dafdf8eedc213c25f23ba5cc5cfa8eea4b2e9727))

### [8.0.8](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.7...v8.0.8) (2020-10-06)


### Bug Fixes

* **deps:** upgrade @google-cloud/common ([#905](https://www.github.com/googleapis/nodejs-logging/issues/905)) ([228864b](https://www.github.com/googleapis/nodejs-logging/commit/228864b7c59c80f126c3dbd2d8c8cb4a20adcdf6))

### [8.0.7](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.6...v8.0.7) (2020-10-05)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v3 ([#892](https://www.github.com/googleapis/nodejs-logging/issues/892)) ([b7c0f96](https://www.github.com/googleapis/nodejs-logging/commit/b7c0f9676fd1bacfd336a42ffac53f8765d99e3e))
* **deps:** update dependency @google-cloud/projectify to v2 ([#895](https://www.github.com/googleapis/nodejs-logging/issues/895)) ([884e905](https://www.github.com/googleapis/nodejs-logging/commit/884e905f7f8cc1670174f507a80dfc011a962a3b))
* **deps:** update dependency gcp-metadata to v4 ([#893](https://www.github.com/googleapis/nodejs-logging/issues/893)) ([ce79a7c](https://www.github.com/googleapis/nodejs-logging/commit/ce79a7cdb345f0fa8bd87c82df400427c1a984ea))
* **deps:** update dependency google-auth-library to v6 ([#894](https://www.github.com/googleapis/nodejs-logging/issues/894)) ([d2bbe3c](https://www.github.com/googleapis/nodejs-logging/commit/d2bbe3c69595177f90eb19702534b77fc390e8aa))
* **deps:** update dependency type-fest to ^0.17.0 ([#901](https://www.github.com/googleapis/nodejs-logging/issues/901)) ([860b795](https://www.github.com/googleapis/nodejs-logging/commit/860b795331885da38d5f91d1af9b1b313d3a59a3))

### [8.0.6](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.5...v8.0.6) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#889](https://www.github.com/googleapis/nodejs-logging/issues/889)) ([08ee746](https://www.github.com/googleapis/nodejs-logging/commit/08ee746ddf08f38528d350cd394e903d41d1d621))

### [8.0.5](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.4...v8.0.5) (2020-08-18)


### Bug Fixes

* **deps:** require google-gax 2.7.0 ([#879](https://www.github.com/googleapis/nodejs-logging/issues/879)) ([50b4be0](https://www.github.com/googleapis/nodejs-logging/commit/50b4be07c971295d933c3f5833fa40b1c8fc8eaf))

### [8.0.4](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.3...v8.0.4) (2020-08-14)


### Bug Fixes

* make request batching work again ([#872](https://www.github.com/googleapis/nodejs-logging/issues/872)) ([a9a9567](https://www.github.com/googleapis/nodejs-logging/commit/a9a9567acc94dbef66830c96ecc363f23b076667))

### [8.0.3](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.2...v8.0.3) (2020-08-10)


### Bug Fixes

* **deps:** roll back dependency @google-cloud/logging to ^8.0.1 ([#867](https://www.github.com/googleapis/nodejs-logging/issues/867)) ([3bd950a](https://www.github.com/googleapis/nodejs-logging/commit/3bd950a3bbb3a1bb24165d1b2cb96fc35c06292d))

### [8.0.2](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.1...v8.0.2) (2020-08-06)


### Bug Fixes

* **docs:** jsdoc strings were malformed ([#864](https://www.github.com/googleapis/nodejs-logging/issues/864)) ([75cd541](https://www.github.com/googleapis/nodejs-logging/commit/75cd54196917a30edc922adcbac1e84bf019f720))

### [8.0.1](https://www.github.com/googleapis/nodejs-logging/compare/v8.0.0...v8.0.1) (2020-07-06)


### Bug Fixes

* **deps:** update dependency through2 to v4 ([#838](https://www.github.com/googleapis/nodejs-logging/issues/838)) ([9c9c302](https://www.github.com/googleapis/nodejs-logging/commit/9c9c3020a7fb3f11896b4024d1e7e6e62df68a46))
* **deps:** update dependency type-fest to ^0.16.0 ([#840](https://www.github.com/googleapis/nodejs-logging/issues/840)) ([1db672d](https://www.github.com/googleapis/nodejs-logging/commit/1db672d746b1e02e667213b32c45d0f0e1aab781))

## [8.0.0](https://www.github.com/googleapis/nodejs-logging/compare/v7.3.0...v8.0.0) (2020-06-12)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* move API to Typescript generation (#758)
* proto annotations

### Features

* add Blunderbuss config ([#806](https://www.github.com/googleapis/nodejs-logging/issues/806)) ([7f1eb67](https://www.github.com/googleapis/nodejs-logging/commit/7f1eb6731208f99b530d9553da751dad04ec92a9))
* drop node8 support, support for async iterators ([#778](https://www.github.com/googleapis/nodejs-logging/issues/778)) ([ce29b49](https://www.github.com/googleapis/nodejs-logging/commit/ce29b498ebb357403c093053d1b9989f1a56f5af))
* move API to Typescript generation ([#758](https://www.github.com/googleapis/nodejs-logging/issues/758)) ([049ae83](https://www.github.com/googleapis/nodejs-logging/commit/049ae8367dcd2b63c951d7c730548c5e88f72fa7))
* move ts target to es2018 from es2016 ([#825](https://www.github.com/googleapis/nodejs-logging/issues/825)) ([8b73243](https://www.github.com/googleapis/nodejs-logging/commit/8b73243bea64f6026718af9f567e3af1bd151061))


### Bug Fixes

* explicit export of protobuf.roots ([#781](https://www.github.com/googleapis/nodejs-logging/issues/781)) ([12808be](https://www.github.com/googleapis/nodejs-logging/commit/12808be22cfc9e5fc8a0c8b24203d2584e812204))
* handle fallback option properly ([#832](https://www.github.com/googleapis/nodejs-logging/issues/832)) ([6355b20](https://www.github.com/googleapis/nodejs-logging/commit/6355b20a19d7224acf0e2cec103aa095fc62efce))
* linting and formatting ([#809](https://www.github.com/googleapis/nodejs-logging/issues/809)) ([739cc3a](https://www.github.com/googleapis/nodejs-logging/commit/739cc3a05d1085142ec96ec51f61401d03943876))
* proto annotations ([e31cc01](https://www.github.com/googleapis/nodejs-logging/commit/e31cc01d5be8a150b370cf5000eedb7cbf175d0c))
* remove eslint, update gax, fix generated protos, run the generator ([#789](https://www.github.com/googleapis/nodejs-logging/issues/789)) ([d1df1bd](https://www.github.com/googleapis/nodejs-logging/commit/d1df1bdc1d536d3626dc1b85d357cf6ec18f80e8))
* **deps:** update dependency @google-cloud/paginator to v3 ([#766](https://www.github.com/googleapis/nodejs-logging/issues/766)) ([58fe7b0](https://www.github.com/googleapis/nodejs-logging/commit/58fe7b02defa33e89ef980fc3234e47e72a08436))
* **deps:** update dependency @google-cloud/promisify to v2 ([#763](https://www.github.com/googleapis/nodejs-logging/issues/763)) ([d3fd09d](https://www.github.com/googleapis/nodejs-logging/commit/d3fd09dae00df3787122b24f25f3347e3653eb52))
* **deps:** update dependency @google-cloud/storage to v5 ([#812](https://www.github.com/googleapis/nodejs-logging/issues/812)) ([b1be6c4](https://www.github.com/googleapis/nodejs-logging/commit/b1be6c45e88d05204bfbbb05e31f16a3ef909e52))
* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.21 ([#771](https://www.github.com/googleapis/nodejs-logging/issues/771)) ([958d186](https://www.github.com/googleapis/nodejs-logging/commit/958d1868da318fd08b543350daca7d2d33f331a8))
* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.22 ([#822](https://www.github.com/googleapis/nodejs-logging/issues/822)) ([6f1d18e](https://www.github.com/googleapis/nodejs-logging/commit/6f1d18ec05bbdc9666dfd350b4125761fa4a984e))
* **deps:** update dependency type-fest to ^0.13.0 ([#782](https://www.github.com/googleapis/nodejs-logging/issues/782)) ([13dcb78](https://www.github.com/googleapis/nodejs-logging/commit/13dcb786dec3400afc8c7ef1753fe7c0840542e2))
* **deps:** update dependency type-fest to ^0.15.0 ([#814](https://www.github.com/googleapis/nodejs-logging/issues/814)) ([2fc7eed](https://www.github.com/googleapis/nodejs-logging/commit/2fc7eed13c55320688b79513541ae9348bcd9ae0))
* **sample-test:** we shouldn't delete node_modules after link ([aa4850b](https://www.github.com/googleapis/nodejs-logging/commit/aa4850b39411afd82977e0ecba7a7a4b821332bd))

## [7.3.0](https://www.github.com/googleapis/nodejs-logging/compare/v7.2.3...v7.3.0) (2020-03-11)


### Features

* export protos in src/index.ts ([0dbbe35](https://www.github.com/googleapis/nodejs-logging/commit/0dbbe351f3143e8103929ac5862bd7c2c8ff6716))


### Bug Fixes

* **deps:** update dependency type-fest to ^0.12.0 ([#741](https://www.github.com/googleapis/nodejs-logging/issues/741)) ([c011c7d](https://www.github.com/googleapis/nodejs-logging/commit/c011c7d62c23814b9abe9b8a6e6f6f493f8a5027))
* **docs:** documentation for overloaded methods ([#725](https://www.github.com/googleapis/nodejs-logging/issues/725)) ([06a2cea](https://www.github.com/googleapis/nodejs-logging/commit/06a2cea1845ec2de441e156df6fdea04fb7b8955)), closes [#723](https://www.github.com/googleapis/nodejs-logging/issues/723)

### [7.2.3](https://www.github.com/googleapis/nodejs-logging/compare/v7.2.2...v7.2.3) (2020-02-26)


### Bug Fixes

* **docs:** writeLog should be in async function ([498a2c3](https://www.github.com/googleapis/nodejs-logging/commit/498a2c3825644b2f6a71ac3e314ba2e3de9fac62)), closes [#693](https://www.github.com/googleapis/nodejs-logging/issues/693)

### [7.2.2](https://www.github.com/googleapis/nodejs-logging/compare/v7.2.1...v7.2.2) (2020-02-20)


### Bug Fixes

* **deps:** update dependency type-fest to ^0.11.0 ([#718](https://www.github.com/googleapis/nodejs-logging/issues/718)) ([17decd4](https://www.github.com/googleapis/nodejs-logging/commit/17decd4af5caa96f8508ebdf876277b1efbd5e66))

### [7.2.1](https://www.github.com/googleapis/nodejs-logging/compare/v7.2.0...v7.2.1) (2020-02-20)


### Bug Fixes

* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.20 ([#714](https://www.github.com/googleapis/nodejs-logging/issues/714)) ([865b19f](https://www.github.com/googleapis/nodejs-logging/commit/865b19f95af7e541dbe215cdf72bf34df2c6567d))

## [7.2.0](https://www.github.com/googleapis/nodejs-logging/compare/v7.1.0...v7.2.0) (2020-02-19)


### Features

* add CMEK config and update grpc config logic ([#700](https://www.github.com/googleapis/nodejs-logging/issues/700)) ([a3fb0f3](https://www.github.com/googleapis/nodejs-logging/commit/a3fb0f3b55583220883fb83504f94f57cf907267))
* add getLogs() and getLogsStream() ([#692](https://www.github.com/googleapis/nodejs-logging/issues/692)) ([d582eeb](https://www.github.com/googleapis/nodejs-logging/commit/d582eebb79d183a5fa1403764fc72816f2939b87))


### Bug Fixes

* **deps:** update dependency type-fest to ^0.10.0 ([#697](https://www.github.com/googleapis/nodejs-logging/issues/697)) ([395a31d](https://www.github.com/googleapis/nodejs-logging/commit/395a31db786bd416c9387e5b893803c839b39ae7))
* use logging api resource for metric ([#704](https://www.github.com/googleapis/nodejs-logging/issues/704)) ([0239b81](https://www.github.com/googleapis/nodejs-logging/commit/0239b81ed816412e2a06bcfaaa347552cb00dc29))
* **docs:** orderby samples and documentation ([#713](https://www.github.com/googleapis/nodejs-logging/issues/713)) ([e703c23](https://www.github.com/googleapis/nodejs-logging/commit/e703c23c4f4c9a49878a50013e6208e2f9aae2cf))
* **types:** write options dryRun and partialSuccess ([#711](https://www.github.com/googleapis/nodejs-logging/issues/711)) ([#712](https://www.github.com/googleapis/nodejs-logging/issues/712)) ([56a8ed8](https://www.github.com/googleapis/nodejs-logging/commit/56a8ed84ab5d9bad137e8b5ac779a2f1e24aed6a))

## [7.1.0](https://www.github.com/googleapis/nodejs-logging/compare/v7.0.1...v7.1.0) (2020-01-29)


### Features

* support uniqueWriterIdentity in Sink.create ([#686](https://www.github.com/googleapis/nodejs-logging/issues/686)) ([41c0346](https://www.github.com/googleapis/nodejs-logging/commit/41c0346199c2afba8a00b434f0eda886ebbaa5fa))


### Bug Fixes

* enum, bytes, and Long types now accept strings ([6605067](https://www.github.com/googleapis/nodejs-logging/commit/6605067b6570983b9fcedc1e971663795e6bc11d))

### [7.0.1](https://www.github.com/googleapis/nodejs-logging/compare/v7.0.0...v7.0.1) (2020-01-24)


### Bug Fixes

* **deps:** update dependency type-fest to ^0.9.0 ([#682](https://www.github.com/googleapis/nodejs-logging/issues/682)) ([e39c401](https://www.github.com/googleapis/nodejs-logging/commit/e39c401513327292c0cb8fef0a2aa9bb4e90287d))

## [7.0.0](https://www.github.com/googleapis/nodejs-logging/compare/v6.0.0...v7.0.0) (2020-01-09)


### ⚠ BREAKING CHANGES

* if using GKE, "Kubernetes Container" type is now properly populated, and logs will be grouped accordingly.

### Features

* **samples:** increase logging client scope ([#670](https://www.github.com/googleapis/nodejs-logging/issues/670)) ([5f35601](https://www.github.com/googleapis/nodejs-logging/commit/5f356014d72a523fc7061caf7bd0143166af6c91))


### Bug Fixes

* populate k8s_container rather than container ([#674](https://www.github.com/googleapis/nodejs-logging/issues/674)) ([fa32048](https://www.github.com/googleapis/nodejs-logging/commit/fa3204877cf6f6b943950994d49c0f7d7def5096))
* **docs:** point folks towards the appropriate client instantiation ([091d7dd](https://www.github.com/googleapis/nodejs-logging/commit/091d7dd28d5f50cb0cf274bb370b36cdf612d42a))
* **types:** extend constructor options from gax ([#676](https://www.github.com/googleapis/nodejs-logging/issues/676)) ([5156538](https://www.github.com/googleapis/nodejs-logging/commit/51565388f25ef16d7ab9c20c1d96e2a4adb78149))

## [6.0.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.5...v6.0.0) (2019-12-06)


### ⚠ BREAKING CHANGES

* properly depend on Long in protos (#640)

### Features

* **samples:** add example of including httpRequest metadata in log ([#650](https://www.github.com/googleapis/nodejs-logging/issues/650)) ([e6d293e](https://www.github.com/googleapis/nodejs-logging/commit/e6d293eab1294d4e3434dceade1f45b53060767b))


### Bug Fixes

* properly depend on Long in protos ([#640](https://www.github.com/googleapis/nodejs-logging/issues/640)) ([e22b695](https://www.github.com/googleapis/nodejs-logging/commit/e22b6959f81155989f7507c9450b5a93506bc83a))
* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#654](https://www.github.com/googleapis/nodejs-logging/issues/654)) ([432fe5d](https://www.github.com/googleapis/nodejs-logging/commit/432fe5d8cf19f4bd6b3e9863fb995db8e35ae8d8))
* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.19 ([#644](https://www.github.com/googleapis/nodejs-logging/issues/644)) ([3eaca43](https://www.github.com/googleapis/nodejs-logging/commit/3eaca4367263d6302c3dbd53109c7ed5dd4367d3))
* **docs:** snippets are now replaced in jsdoc comments ([#634](https://www.github.com/googleapis/nodejs-logging/issues/634)) ([687fc81](https://www.github.com/googleapis/nodejs-logging/commit/687fc815c572adbab2611d3f08f7259bb91de8e6))

### [5.5.5](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.4...v5.5.5) (2019-11-08)


### Bug Fixes

* **deps:** update dependency eventid to v1 ([#628](https://www.github.com/googleapis/nodejs-logging/issues/628)) ([2128ef1](https://www.github.com/googleapis/nodejs-logging/commit/2128ef195538e8149d32a0c7cbb1ee5723b161d3))

### [5.5.4](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.3...v5.5.4) (2019-10-25)


### Bug Fixes

* **package:** add missing dependency google-auth-library ([#620](https://www.github.com/googleapis/nodejs-logging/issues/620)) ([5ef2377](https://www.github.com/googleapis/nodejs-logging/commit/5ef2377aacac94551a74d386cbb8084f3d5a7b53))

### [5.5.3](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.2...v5.5.3) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#616](https://www.github.com/googleapis/nodejs-logging/issues/616)) ([5d73a06](https://www.github.com/googleapis/nodejs-logging/commit/5d73a06083552db6aa03be4e6cb5f1de97620eec))
* **deps:** update dependency @google-cloud/storage to v4 ([#613](https://www.github.com/googleapis/nodejs-logging/issues/613)) ([4ec4f18](https://www.github.com/googleapis/nodejs-logging/commit/4ec4f18a3e07b798882e5f17e642fae5d9f68912))

### [5.5.2](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.1...v5.5.2) (2019-10-17)


### Bug Fixes

* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.18 ([#605](https://www.github.com/googleapis/nodejs-logging/issues/605)) ([0dac747](https://www.github.com/googleapis/nodejs-logging/commit/0dac747ac18484d54d2d33dbd7424b2c0294dbb9))

### [5.5.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.5.0...v5.5.1) (2019-10-17)


### Bug Fixes

* truncate additional fields set by winston/bunyan ([#609](https://www.github.com/googleapis/nodejs-logging/issues/609)) ([27ac693](https://www.github.com/googleapis/nodejs-logging/commit/27ac693ec4f9afeec412e2edddf831226f2bcc60))

## [5.5.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.4.1...v5.5.0) (2019-10-16)


### Features

* introduce maxEntrySize, for enabling error message truncation ([#607](https://www.github.com/googleapis/nodejs-logging/issues/607)) ([49efd49](https://www.github.com/googleapis/nodejs-logging/commit/49efd491263b518ae5cd54c9a77e5603477f96d8))

### [5.4.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.4.0...v5.4.1) (2019-10-10)


### Bug Fixes

* **deps:** pin to newer version of grpc ([#602](https://www.github.com/googleapis/nodejs-logging/issues/602)) ([23bda1d](https://www.github.com/googleapis/nodejs-logging/commit/23bda1d))

## [5.4.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.3.1...v5.4.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([7576ef2](https://www.github.com/googleapis/nodejs-logging/commit/7576ef2))
* **deps:** gcp-metadata now handles ENETUNREACH ([#600](https://www.github.com/googleapis/nodejs-logging/issues/600)) ([e3ed1d6](https://www.github.com/googleapis/nodejs-logging/commit/e3ed1d6))


### Features

* introduces startTime and endTime ([4406446](https://www.github.com/googleapis/nodejs-logging/commit/4406446))

### [5.3.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.3.0...v5.3.1) (2019-09-17)


### Bug Fixes

* **deps:** updates to metadata check to better work in all environments ([#581](https://www.github.com/googleapis/nodejs-logging/issues/581)) ([24b97e4](https://www.github.com/googleapis/nodejs-logging/commit/24b97e4))

## [5.3.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.2.2...v5.3.0) (2019-09-16)


### Bug Fixes

* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.17 ([#569](https://www.github.com/googleapis/nodejs-logging/issues/569)) ([7077e64](https://www.github.com/googleapis/nodejs-logging/commit/7077e64))
* add missing function overload ([#573](https://www.github.com/googleapis/nodejs-logging/issues/573)) ([8cd073b](https://www.github.com/googleapis/nodejs-logging/commit/8cd073b))
* use correct version for x-goog-api-client header ([#565](https://www.github.com/googleapis/nodejs-logging/issues/565)) ([7b60835](https://www.github.com/googleapis/nodejs-logging/commit/7b60835))
* use process versions object for client header ([#563](https://www.github.com/googleapis/nodejs-logging/issues/563)) ([2ec8662](https://www.github.com/googleapis/nodejs-logging/commit/2ec8662))
* **deps:** update dependency type-fest to ^0.8.0 ([#578](https://www.github.com/googleapis/nodejs-logging/issues/578)) ([422a0ed](https://www.github.com/googleapis/nodejs-logging/commit/422a0ed))


### Features

* load protos from JSON, grpc-fallback support ([#571](https://www.github.com/googleapis/nodejs-logging/issues/571)) ([41ef532](https://www.github.com/googleapis/nodejs-logging/commit/41ef532))

### [5.2.2](https://www.github.com/googleapis/nodejs-logging/compare/v5.2.1...v5.2.2) (2019-08-20)


### Bug Fixes

* add test for x-goog-api-client header ([#556](https://www.github.com/googleapis/nodejs-logging/issues/556)) ([f2cd5ea](https://www.github.com/googleapis/nodejs-logging/commit/f2cd5ea))
* **deps:** update dependency yargs to v14 ([bd8da51](https://www.github.com/googleapis/nodejs-logging/commit/bd8da51))

### [5.2.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.2.0...v5.2.1) (2019-08-05)


### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v2 ([#537](https://www.github.com/googleapis/nodejs-logging/issues/537)) ([ae14f59](https://www.github.com/googleapis/nodejs-logging/commit/ae14f59))
* **deps:** update dependency google-auth-library to v5 ([#539](https://www.github.com/googleapis/nodejs-logging/issues/539)) ([b8351a7](https://www.github.com/googleapis/nodejs-logging/commit/b8351a7))
* allow calls with no request, add JSON proto ([9313998](https://www.github.com/googleapis/nodejs-logging/commit/9313998))
* **deps:** update dependency type-fest to ^0.7.0 ([#554](https://www.github.com/googleapis/nodejs-logging/issues/554)) ([62362e6](https://www.github.com/googleapis/nodejs-logging/commit/62362e6))
* **docs:** add note about batching writes ([#528](https://www.github.com/googleapis/nodejs-logging/issues/528)) ([25ba962](https://www.github.com/googleapis/nodejs-logging/commit/25ba962))

## [5.2.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.1.3...v5.2.0) (2019-07-17)


### Features

* add path template parsing for billing, organizations, and folders ([#529](https://www.github.com/googleapis/nodejs-logging/issues/529)) ([1e8c67f](https://www.github.com/googleapis/nodejs-logging/commit/1e8c67f))

### [5.1.3](https://www.github.com/googleapis/nodejs-logging/compare/v5.1.2...v5.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#521](https://www.github.com/googleapis/nodejs-logging/issues/521)) ([971c1b6](https://www.github.com/googleapis/nodejs-logging/commit/971c1b6))

### [5.1.2](https://www.github.com/googleapis/nodejs-logging/compare/v5.1.1...v5.1.2) (2019-06-16)


### Bug Fixes

* there is a free tier for logging ([#513](https://www.github.com/googleapis/nodejs-logging/issues/513)) ([2079598](https://www.github.com/googleapis/nodejs-logging/commit/2079598))
* **deps:** update dependency pumpify to v2 ([#516](https://www.github.com/googleapis/nodejs-logging/issues/516)) ([11d8f34](https://www.github.com/googleapis/nodejs-logging/commit/11d8f34))

### [5.1.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.1.0...v5.1.1) (2019-06-14)


### Bug Fixes

* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.14 ([#509](https://www.github.com/googleapis/nodejs-logging/issues/509)) ([3cba4dc](https://www.github.com/googleapis/nodejs-logging/commit/3cba4dc))
* **deps:** update dependency snakecase-keys to v3 ([#510](https://www.github.com/googleapis/nodejs-logging/issues/510)) ([eb2193e](https://www.github.com/googleapis/nodejs-logging/commit/eb2193e))
* **docs:** move to new client docs URL ([#514](https://www.github.com/googleapis/nodejs-logging/issues/514)) ([9043cfa](https://www.github.com/googleapis/nodejs-logging/commit/9043cfa))

## [5.1.0](https://www.github.com/googleapis/nodejs-logging/compare/v5.0.1...v5.1.0) (2019-06-05)


### Features

* add .repo-metadata.json for docs generation ([#502](https://www.github.com/googleapis/nodejs-logging/issues/502)) ([4a3b80a](https://www.github.com/googleapis/nodejs-logging/commit/4a3b80a))
* support apiEndpoint override ([#501](https://www.github.com/googleapis/nodejs-logging/issues/501)) ([f701358](https://www.github.com/googleapis/nodejs-logging/commit/f701358))
* support apiEndpoint override in client constructor ([#505](https://www.github.com/googleapis/nodejs-logging/issues/505)) ([bda7124](https://www.github.com/googleapis/nodejs-logging/commit/bda7124))

### [5.0.1](https://www.github.com/googleapis/nodejs-logging/compare/v5.0.0...v5.0.1) (2019-05-21)


### Bug Fixes

* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.13 ([#489](https://www.github.com/googleapis/nodejs-logging/issues/489)) ([0f57adf](https://www.github.com/googleapis/nodejs-logging/commit/0f57adf))

## [5.0.0](https://www.github.com/googleapis/nodejs-logging/compare/v4.5.2...v5.0.0) (2019-05-17)


### Bug Fixes

* **deps:** update dependency @google-cloud/common-grpc to v1 ([#479](https://www.github.com/googleapis/nodejs-logging/issues/479)) ([58e6154](https://www.github.com/googleapis/nodejs-logging/commit/58e6154))
* **deps:** update dependency @google-cloud/paginator to v1 ([#467](https://www.github.com/googleapis/nodejs-logging/issues/467)) ([90d74bd](https://www.github.com/googleapis/nodejs-logging/commit/90d74bd))
* **deps:** update dependency @google-cloud/projectify to v1 ([#464](https://www.github.com/googleapis/nodejs-logging/issues/464)) ([f6ef399](https://www.github.com/googleapis/nodejs-logging/commit/f6ef399))
* **deps:** update dependency @google-cloud/promisify to v1 ([#465](https://www.github.com/googleapis/nodejs-logging/issues/465)) ([5871e4b](https://www.github.com/googleapis/nodejs-logging/commit/5871e4b))
* **deps:** update dependency @opencensus/propagation-stackdriver to v0.0.12 ([#483](https://www.github.com/googleapis/nodejs-logging/issues/483)) ([afe89de](https://www.github.com/googleapis/nodejs-logging/commit/afe89de))
* **deps:** update dependency gcp-metadata to v2 ([#474](https://www.github.com/googleapis/nodejs-logging/issues/474)) ([125b356](https://www.github.com/googleapis/nodejs-logging/commit/125b356))
* **deps:** update dependency google-auth-library to v4 ([#475](https://www.github.com/googleapis/nodejs-logging/issues/475)) ([558bfc5](https://www.github.com/googleapis/nodejs-logging/commit/558bfc5))
* **deps:** update dependency google-gax to ^0.26.0 ([#459](https://www.github.com/googleapis/nodejs-logging/issues/459)) ([7417dcb](https://www.github.com/googleapis/nodejs-logging/commit/7417dcb))
* **deps:** update dependency google-gax to v1 ([#477](https://www.github.com/googleapis/nodejs-logging/issues/477)) ([535aedb](https://www.github.com/googleapis/nodejs-logging/commit/535aedb))
* DEADLINE_EXCEEDED no longer listed as idempotent ([473d145](https://www.github.com/googleapis/nodejs-logging/commit/473d145))
* **deps:** update dependency type-fest to ^0.4.0 ([#455](https://www.github.com/googleapis/nodejs-logging/issues/455)) ([3c2324b](https://www.github.com/googleapis/nodejs-logging/commit/3c2324b))
* **deps:** update dependency type-fest to ^0.5.0 ([#482](https://www.github.com/googleapis/nodejs-logging/issues/482)) ([ee5d17f](https://www.github.com/googleapis/nodejs-logging/commit/ee5d17f))
* DEADLINE_EXCEEDED retry code is idempotent ([#478](https://www.github.com/googleapis/nodejs-logging/issues/478)) ([4fdb8c1](https://www.github.com/googleapis/nodejs-logging/commit/4fdb8c1))
* use originalUrl for Express middleware's request url ([#476](https://www.github.com/googleapis/nodejs-logging/issues/476)) ([0ee71bd](https://www.github.com/googleapis/nodejs-logging/commit/0ee71bd)), closes [#472](https://www.github.com/googleapis/nodejs-logging/issues/472)


### Build System

* upgrade engines field to >=8.10.0 ([#461](https://www.github.com/googleapis/nodejs-logging/issues/461)) ([641ce87](https://www.github.com/googleapis/nodejs-logging/commit/641ce87))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#461)

## v4.5.2

04-11-2019 14:26 PDT

This release has minor bug fixes:

- fix(types): improve types for LogEntry ([#448](https://github.com/googleapis/nodejs-logging/pull/448))
- fix: include 'x-goog-request-params' header in requests ([#439](https://github.com/googleapis/nodejs-logging/pull/439))

## v4.5.1

03-18-2019 19:32 PDT

### Bug Fixes
- fix(ts): do not require storage/pubsub types, add install test ([#430](https://github.com/googleapis/nodejs-logging/pull/430))

## v4.5.0

03-13-2019 22:25 PDT

### New Features
- feat: ability to detect service context ([#400](https://github.com/googleapis/nodejs-logging/pull/400))

### Bug Fixes
- fix: do not push duplicate scopes ([#414](https://github.com/googleapis/nodejs-logging/pull/414))
- fix: throw on invalid credentials ([#395](https://github.com/googleapis/nodejs-logging/pull/395))

### Dependencies
- fix(deps): update dependency @google-cloud/paginator to ^0.2.0 ([#419](https://github.com/googleapis/nodejs-logging/pull/419))
- fix(deps): update dependency gcp-metadata to v1 ([#402](https://github.com/googleapis/nodejs-logging/pull/402))
- fix(deps): update dependency @opencensus/propagation-stackdriver to v0.0.9 ([#394](https://github.com/googleapis/nodejs-logging/pull/394))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#398](https://github.com/googleapis/nodejs-logging/pull/398))

### Documentation
- docs: update links in contrib guide ([#399](https://github.com/googleapis/nodejs-logging/pull/399))

### Internal / Testing Changes
- chore(deps): update dependency @google-cloud/pubsub to ^0.28.0 ([#421](https://github.com/googleapis/nodejs-logging/pull/421))
- refactor: update json import paths ([#422](https://github.com/googleapis/nodejs-logging/pull/422))
- chore(deps): update dependency supertest to v4 ([#420](https://github.com/googleapis/nodejs-logging/pull/420))
- refactor: clean up types and imports ([#409](https://github.com/googleapis/nodejs-logging/pull/409))
- build: Add docuploader credentials to node publish jobs ([#415](https://github.com/googleapis/nodejs-logging/pull/415))
- build: use node10 to run samples-test, system-test etc ([#413](https://github.com/googleapis/nodejs-logging/pull/413))
- build: update release configuration
- chore(deps): update @google-cloud/pubsub to v0.27.0 ([#410](https://github.com/googleapis/nodejs-logging/pull/410))
- chore(deps): update dependency @google-cloud/pubsub to ^0.26.0 ([#407](https://github.com/googleapis/nodejs-logging/pull/407))
- refactor (typescript): noImplilcitAny ([#408](https://github.com/googleapis/nodejs-logging/pull/408))
- chore(deps): update dependency @google-cloud/pubsub to ^0.25.0 ([#405](https://github.com/googleapis/nodejs-logging/pull/405))
- chore: update proto docs and code style
- chore(deps): update dependency mocha to v6 ([#403](https://github.com/googleapis/nodejs-logging/pull/403))
- build: use linkinator for docs test ([#397](https://github.com/googleapis/nodejs-logging/pull/397))
- refactor: expose and improve types ([#393](https://github.com/googleapis/nodejs-logging/pull/393))
- fix(deps): update dependency yargs to v13 ([#392](https://github.com/googleapis/nodejs-logging/pull/392))
- chore: use proper enum for GCPEnv ([#389](https://github.com/googleapis/nodejs-logging/pull/389))

## v4.4.0

02-11-2019 17:40 PST

### New Features
- feat: include TypeScript types ([#387](https://github.com/googleapis/nodejs-logging/pull/387))

### Bug Fixes
- fix: stop exporting express types publicly ([#376](https://github.com/googleapis/nodejs-logging/pull/376))

### Documentation
- docs: update contributing path in README ([#383](https://github.com/googleapis/nodejs-logging/pull/383))
- chore: move CONTRIBUTING.md to root ([#382](https://github.com/googleapis/nodejs-logging/pull/382))
- docs: add lint/fix example to contributing guide ([#379](https://github.com/googleapis/nodejs-logging/pull/379))
- docs: fix example comments ([#378](https://github.com/googleapis/nodejs-logging/pull/378))

### Internal / Testing Changes
- build: create docs test npm scripts ([#385](https://github.com/googleapis/nodejs-logging/pull/385))
- build: test using @grpc/grpc-js in CI ([#384](https://github.com/googleapis/nodejs-logging/pull/384))
- refactor: improve generated code style. ([#377](https://github.com/googleapis/nodejs-logging/pull/377))

## v4.3.0

01-31-2019 12:49 PST


### Implementation Changes
- Modify retry settings for WriteLogEntries, update year in the license headers ([#366](https://github.com/googleapis/nodejs-logging/pull/366))

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#373](https://github.com/googleapis/nodejs-logging/pull/373))
- chore(deps): update dependency @google-cloud/pubsub to ^0.24.0 ([#371](https://github.com/googleapis/nodejs-logging/pull/371))
- fix(deps): update dependency @google-cloud/common-grpc to ^0.10.0 ([#372](https://github.com/googleapis/nodejs-logging/pull/372))
- chore(deps): update dependency eslint-config-prettier to v4 ([#370](https://github.com/googleapis/nodejs-logging/pull/370))
- fix(deps): update dependency google-gax to ^0.24.0 ([#369](https://github.com/googleapis/nodejs-logging/pull/369))
- chore(deps): update dependency @google-cloud/pubsub to ^0.23.0 ([#367](https://github.com/googleapis/nodejs-logging/pull/367))
- fix(deps): update dependency google-auth-library to v3 ([#365](https://github.com/googleapis/nodejs-logging/pull/365))
- fix(deps): update dependency google-gax to ^0.23.0 ([#364](https://github.com/googleapis/nodejs-logging/pull/364))

### Documentation
- build: ignore googleapis.com in doc link check ([#368](https://github.com/googleapis/nodejs-logging/pull/368))
- fix(docs): removed unused gRPC message types

### Internal / Testing Changes
- build: check broken links in generated docs ([#358](https://github.com/googleapis/nodejs-logging/pull/358))

## v4.2.0

01-02-2019 12:43 PST

### New Features
- feat: cache detected environment's default resource ([#359](https://github.com/googleapis/nodejs-logging/pull/359))

### Dependencies
- fix(deps): update dependency @opencensus/propagation-stackdriver to v0.0.8 ([#354](https://github.com/googleapis/nodejs-logging/pull/354))

### Internal / Testing Changes
- refactor: modernize the sample tests ([#356](https://github.com/googleapis/nodejs-logging/pull/356))
- refactor(ts): improve typescript types ([#309](https://github.com/googleapis/nodejs-logging/pull/309))
- chore(build): inject yoshi automation key ([#352](https://github.com/googleapis/nodejs-logging/pull/352))
- chore: update nyc and eslint configs ([#351](https://github.com/googleapis/nodejs-logging/pull/351))
- chore: fix publish.sh permission +x ([#348](https://github.com/googleapis/nodejs-logging/pull/348))
- fix(build): fix Kokoro release script ([#347](https://github.com/googleapis/nodejs-logging/pull/347))
- build: add Kokoro configs for autorelease ([#346](https://github.com/googleapis/nodejs-logging/pull/346))
- chore: always nyc report before calling codecov ([#342](https://github.com/googleapis/nodejs-logging/pull/342))
- chore: nyc ignore build/test by default ([#341](https://github.com/googleapis/nodejs-logging/pull/341))

## v4.1.1

12-05-2018 13:12 PST

### Implementation Changes
TypeScript related changes:
- refactor(ts): generate logging types from proto ([#314](https://github.com/googleapis/nodejs-logging/pull/314))
- refactor(ts): use es imports and exports ([#307](https://github.com/googleapis/nodejs-logging/pull/307))

### Dependencies
- chore(deps): update dependency typescript to ~3.2.0 ([#331](https://github.com/googleapis/nodejs-logging/pull/331))
- chore(deps): update dependency @google-cloud/pubsub to ^0.22.0 ([#333](https://github.com/googleapis/nodejs-logging/pull/333))
- fix(deps): update dependency google-gax to ^0.22.0 ([#323](https://github.com/googleapis/nodejs-logging/pull/323))
- fix(deps): update dependency @opencensus/propagation-stackdriver to v0.0.7 ([#322](https://github.com/googleapis/nodejs-logging/pull/322))
- chore(deps): update dependency @google-cloud/pubsub to ^0.21.0 ([#324](https://github.com/googleapis/nodejs-logging/pull/324))
- chore(deps): update dependency gts to ^0.9.0 ([#321](https://github.com/googleapis/nodejs-logging/pull/321))
- chore(deps): update dependency bignumber.js to v8 ([#301](https://github.com/googleapis/nodejs-logging/pull/301))
- chore(deps): update dependency @types/is to v0.0.21 ([#315](https://github.com/googleapis/nodejs-logging/pull/315))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#318](https://github.com/googleapis/nodejs-logging/pull/318))
- fix(deps): update dependency through2 to v3 ([#311](https://github.com/googleapis/nodejs-logging/pull/311))

### Documentation
- docs(samples): updated samples code to use async await ([#329](https://github.com/googleapis/nodejs-logging/pull/329))
- docs: update directory for docs generation ([#312](https://github.com/googleapis/nodejs-logging/pull/312))

### Internal / Testing Changes
- fix(docs): const logging = require.. contains binary ([#338](https://github.com/googleapis/nodejs-logging/pull/338))
- chore: update license file ([#337](https://github.com/googleapis/nodejs-logging/pull/337))
- docs: update readme badges ([#335](https://github.com/googleapis/nodejs-logging/pull/335))
- fix(build): fix system key decryption ([#332](https://github.com/googleapis/nodejs-logging/pull/332))
- chore: add synth.metadata
- chore: update eslintignore config ([#320](https://github.com/googleapis/nodejs-logging/pull/320))
- chore: drop contributors from multiple places ([#316](https://github.com/googleapis/nodejs-logging/pull/316))
- chore: use latest npm on Windows ([#313](https://github.com/googleapis/nodejs-logging/pull/313))
- chore(build): use the latest npm on windows for tests ([#304](https://github.com/googleapis/nodejs-logging/pull/304))
- refactor: go back to prettier, use generated gapic tests ([#308](https://github.com/googleapis/nodejs-logging/pull/308))

## v4.1.0

### New Features
- feat: export middleware helpers ([#289](https://github.com/googleapis/nodejs-logging/pull/289))
- feat: Introduce middleware directory ([#248](https://github.com/googleapis/nodejs-logging/pull/248))

### Bug fixes
- fix(metadata): include zone on GAE descriptor ([#298](https://github.com/googleapis/nodejs-logging/pull/298))
- fix(middleware): tweak the middleware api ([#291](https://github.com/googleapis/nodejs-logging/pull/291))
- fix: resolve compile errors ([#287](https://github.com/googleapis/nodejs-logging/pull/287))
- fix(deps): move nock to devDependencies ([#276](https://github.com/googleapis/nodejs-logging/pull/276))

### Dependencies
- fix(deps): update dependency @opencensus/propagation-stackdriver to v0.0.6 ([#283](https://github.com/googleapis/nodejs-logging/pull/283))
- chore(deps): update dependency eslint-plugin-node to v8 ([#284](https://github.com/googleapis/nodejs-logging/pull/284))
- fix(deps): update dependency gcp-metadata to ^0.9.0 ([#279](https://github.com/googleapis/nodejs-logging/pull/279))
- fix(deps): update dependency snakecase-keys to v2 ([#259](https://github.com/googleapis/nodejs-logging/pull/259))
- refactor: remove async, methmeth, propprop ([#253](https://github.com/googleapis/nodejs-logging/pull/253))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#242](https://github.com/googleapis/nodejs-logging/pull/242))
- chore(deps): update dependency sinon to v7 ([#243](https://github.com/googleapis/nodejs-logging/pull/243))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#238](https://github.com/googleapis/nodejs-logging/pull/238))
- chore(deps): update dependency @google-cloud/pubsub to v0.20.1 ([#236](https://github.com/googleapis/nodejs-logging/pull/236))
- fix(samples): update dependency @google-cloud/logging-winston to ^0.10.0 ([#235](https://github.com/googleapis/nodejs-logging/pull/235))

### Documentation
- docs: update reference documentation

### Internal / Testing Changes
- chore: update CircleCI config ([#302](https://github.com/googleapis/nodejs-logging/pull/302))
- chore: remove a few unused deps ([#299](https://github.com/googleapis/nodejs-logging/pull/299))
- fix: fix system tests by choosing semver range for BigQuery ([#297](https://github.com/googleapis/nodejs-logging/pull/297))
- fix: disable skipLibCheck in the tsconfig ([#296](https://github.com/googleapis/nodejs-logging/pull/296))
- refactor(metadata): use async/await ([#295](https://github.com/googleapis/nodejs-logging/pull/295))
- chore: include build in eslintignore ([#292](https://github.com/googleapis/nodejs-logging/pull/292))
- fix(tsconfig): disable allowJs, enable declaration ([#288](https://github.com/googleapis/nodejs-logging/pull/288))
- refactor(ts): convert tests to typescript ([#282](https://github.com/googleapis/nodejs-logging/pull/282))
- test: fix the system tests with cleanup ([#281](https://github.com/googleapis/nodejs-logging/pull/281))
- fix(fix): no fix for samples/node_modules ([#278](https://github.com/googleapis/nodejs-logging/pull/278))
- chore: update github issue templates ([#274](https://github.com/googleapis/nodejs-logging/pull/274))
- chore: remove old issue template ([#270](https://github.com/googleapis/nodejs-logging/pull/270))
- build: run tests on node11 ([#268](https://github.com/googleapis/nodejs-logging/pull/268))
- chore(typescript): convert src/ to typescript ([#258](https://github.com/googleapis/nodejs-logging/pull/258))
- fix(synth): s.replace import syntax of code samples in autogenerated code ([#266](https://github.com/googleapis/nodejs-logging/pull/266))
- chore: use gts for samples; jettison prettier ([#255](https://github.com/googleapis/nodejs-logging/pull/255))
- chores(build): do not collect sponge.xml from windows builds ([#257](https://github.com/googleapis/nodejs-logging/pull/257))
- chores(build): run codecov on continuous builds ([#256](https://github.com/googleapis/nodejs-logging/pull/256))
- chore: run gts fix ([#252](https://github.com/googleapis/nodejs-logging/pull/252))
- refactor: introduce typescript compiler ([#246](https://github.com/googleapis/nodejs-logging/pull/246))
- fix(test): block auth during public system tests ([#249](https://github.com/googleapis/nodejs-logging/pull/249))
- build: fix codecov uploading on Kokoro ([#244](https://github.com/googleapis/nodejs-logging/pull/244))
- test: remove appveyor config ([#234](https://github.com/googleapis/nodejs-logging/pull/234))

## v4.0.1

### Implementation Changes
- fix(deps): Upgrade to @google-cloud/common-grpc 0.9.0 ([#232](https://github.com/googleapis/nodejs-logging/pull/232))

## v4.0.0

**This release has breaking changes**. This library is now compatible with es module import syntax.

#### Old Code
```js
const logging = require('@google-cloud/logging')();
// or...
const Logging = require('@google-cloud/logging');
const logging = new Logging();
```

#### New Code
```js
const {Logging} = require('@google-cloud/logging');
const logging = new Logging();
```

### Breaking changes
- Use es classes ([#219](https://github.com/googleapis/nodejs-logging/pull/219))

### Bug Fixes
- fix(gce): instance id can be a big number ([#222](https://github.com/googleapis/nodejs-logging/pull/222))
- fix(deps): update dependency @google-cloud/storage to v2 ([#213](https://github.com/googleapis/nodejs-logging/pull/213))
- fix(GCE): add zone label in GCE descriptor ([#215](https://github.com/googleapis/nodejs-logging/pull/215))
- fix(deps): update dependency google-auth-library to v2 ([#210](https://github.com/googleapis/nodejs-logging/pull/210))

### Internal / Testing Changes
- build: write logs to separate file ([#230](https://github.com/googleapis/nodejs-logging/pull/230))
- Enable prefer-const in the eslint config ([#229](https://github.com/googleapis/nodejs-logging/pull/229))
- fix(deps): roll back dependency @google-cloud/logging to ^3.0.2 ([#224](https://github.com/googleapis/nodejs-logging/pull/224))
- Enable no-var in eslint ([#228](https://github.com/googleapis/nodejs-logging/pull/228))
- Use arrow functions ([#227](https://github.com/googleapis/nodejs-logging/pull/227))
- Switch to let/const ([#221](https://github.com/googleapis/nodejs-logging/pull/221))
- fix(deps): update dependency google-gax to ^0.20.0 ([#220](https://github.com/googleapis/nodejs-logging/pull/220))
- Use let and const ([#217](https://github.com/googleapis/nodejs-logging/pull/217))
- Update CI config ([#218](https://github.com/googleapis/nodejs-logging/pull/218))
- Retry npm install in CI ([#214](https://github.com/googleapis/nodejs-logging/pull/214))
- add templates to synth.py and run it ([#211](https://github.com/googleapis/nodejs-logging/pull/211))

## v3.0.2

This release contains a variety of minor internal changes.

### Internal / Testing Changes
- chore: upgrade to the latest common-grpc (#203)
- Re-generate library using /synth.py (#202)
- chore(deps): update dependency nyc to v13 (#200)
- chore(deps): update samples dependency @google-cloud/logging-bunyan to ^0.9.0 (#199)
- fix(deps): update dependency google-gax to ^0.19.0 (#198)
- chore: use mocha for sample tests (#197)

## v3.0.1

### Fixes
- fix(deps): update dependency @google-cloud/logging to v3 (#195)
- fix(gke): correctly detect kubernetes engine (#193)

## v3.0.0

**This should not have been a semver major release.  There are no breaking changes.**

### Bug fixes
- fix(gke): include namespace_id in resource (#191)
- fix: drop support for node.js 4.x and 9.x (#161)
- Re-generate library using /synth.py (#154)

### Keepin' the lights on
- chore(deps): update dependency eslint-config-prettier to v3 (#190)
- chore: do not use npm ci (#189)
- chore: ignore package-lock.json (#186)
- chore: update renovate config (#184)
- remove that whitespace (#183)
- fix(deps): update dependency google-gax to ^0.18.0 (#182)
- chore(deps): lock file maintenance (#181)
- setup: just npm ci in synth.py (#180)
- chore: move mocha options to mocha.opts (#177)
- chore: require node 8 for samples (#179)
- fix(deps): update dependency fluent-logger to v3 (#172)
- fix: get eslint passing (#174)
- chore(deps): update dependency eslint-plugin-node to v7 (#169)
- test: use strictEqual in tests (#170)
- fix(deps): update dependency gcp-metadata to ^0.7.0 (#166)
- fix(deps): update dependency @google-cloud/logging to v2 (#157)
