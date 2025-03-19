# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/nodejs-vision?activeTab=versions

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/vision-v5.0.0...vision-v5.1.0) (2025-03-19)


### Features

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6182](https://github.com/googleapis/google-cloud-node/issues/6182)) ([c41ff07](https://github.com/googleapis/google-cloud-node/commit/c41ff0729b65a1207978b4029d6369cc0552e0bf))


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))
* **deps:** Update dependency @google-cloud/promisify to v5 ([#6150](https://github.com/googleapis/google-cloud-node/issues/6150)) ([1135b86](https://github.com/googleapis/google-cloud-node/commit/1135b8610b2471249dc3aec47eb0f985ded13f93))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/vision-v4.3.3...vision-v5.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [4.3.3](https://github.com/googleapis/google-cloud-node/compare/vision-v4.3.2...vision-v4.3.3) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [4.3.2](https://github.com/googleapis/google-cloud-node/compare/vision-v4.3.1...vision-v4.3.2) (2024-08-19)


### Bug Fixes

* **deps:** Update dependency natural to v8 ([#5613](https://github.com/googleapis/google-cloud-node/issues/5613)) ([aff05fb](https://github.com/googleapis/google-cloud-node/commit/aff05fb72e379005718402c7273275b0e4de8c99))

## [4.3.1](https://github.com/googleapis/google-cloud-node/compare/vision-v4.3.0...vision-v4.3.1) (2024-08-09)


### Bug Fixes

* **deps:** Update dependency redis to ~4.7.0 ([#5589](https://github.com/googleapis/google-cloud-node/issues/5589)) ([8ba7182](https://github.com/googleapis/google-cloud-node/commit/8ba7182f103a8e73bff9f27df351813d45400aa7))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/vision-v4.2.1...vision-v4.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [4.2.1](https://github.com/googleapis/google-cloud-node/compare/vision-v4.2.0...vision-v4.2.1) (2024-04-16)


### Bug Fixes

* **deps:** Update dependency natural to v7 ([#5221](https://github.com/googleapis/google-cloud-node/issues/5221)) ([dbc5e67](https://github.com/googleapis/google-cloud-node/commit/dbc5e6713c9e733a10acd551a34494ae21a17110))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/vision-v4.1.0...vision-v4.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/vision-v4.0.3...vision-v4.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter ([#5018](https://github.com/googleapis/google-cloud-node/issues/5018)) ([3180809](https://github.com/googleapis/google-cloud-node/commit/31808095791eeee24ebdedbddf72b075ee3fd6bf))

## [4.0.3](https://github.com/googleapis/google-cloud-node/compare/vision-v4.0.2...vision-v4.0.3) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [4.0.2](https://github.com/googleapis/google-cloud-node/compare/vision-v4.0.1...vision-v4.0.2) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))
* **deps:** Update dependency @google-cloud/promisify to v4 ([#4533](https://github.com/googleapis/google-cloud-node/issues/4533)) ([58950c9](https://github.com/googleapis/google-cloud-node/commit/58950c9e39d6f7f7e81d545b8e3a3166f51e457b))
* **deps:** Update dependency pureimage to ^0.4.0 ([#4550](https://github.com/googleapis/google-cloud-node/issues/4550)) ([338ba13](https://github.com/googleapis/google-cloud-node/commit/338ba13af6247fb343adc8ffc998faec7dcc06bd))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/vision-v4.0.0...vision-v4.0.1) (2023-08-09)


### Bug Fixes

* **deps:** Update dependency @google-cloud/promisify to v4 ([#4520](https://github.com/googleapis/google-cloud-node/issues/4520)) ([e0e9343](https://github.com/googleapis/google-cloud-node/commit/e0e93433ca78c88f232498fec56d773c2550658d))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/vision-v3.1.4...vision-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.1.4](https://github.com/googleapis/google-cloud-node/compare/vision-v3.1.3...vision-v3.1.4) (2023-06-28)


### Bug Fixes

* **deps:** Update dependency yargs to v17 ([#4351](https://github.com/googleapis/google-cloud-node/issues/4351)) ([4fb5285](https://github.com/googleapis/google-cloud-node/commit/4fb528559c204cee33329c4e55021aa1fd0e4974))

## [3.1.3](https://github.com/googleapis/google-cloud-node/compare/vision-v3.1.2...vision-v3.1.3) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.1.2](https://github.com/googleapis/google-cloud-node/compare/vision-v3.1.1...vision-v3.1.2) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [3.1.1](https://github.com/googleapis/google-cloud-node/compare/vision-v3.1.0...vision-v3.1.1) (2023-01-28)


### Bug Fixes

* **deps:** Update dependency redis to ~4.6.0 ([#3896](https://github.com/googleapis/google-cloud-node/issues/3896)) ([7c1bac8](https://github.com/googleapis/google-cloud-node/commit/7c1bac8a6509634b4011b783bf6895aead1b5f3b))

## [3.1.0](https://github.com/googleapis/nodejs-vision/compare/v3.0.1...v3.1.0) (2023-01-14)


### Features

* Added SuggestConversationSummary RPC ([#1081](https://github.com/googleapis/nodejs-vision/issues/1081)) ([e46aaec](https://github.com/googleapis/nodejs-vision/commit/e46aaec37c70c3fa05c7b390bb06fddde30fc4ee))


### Bug Fixes

* **deps:** Update dependency natural to v6 ([#1085](https://github.com/googleapis/nodejs-vision/issues/1085)) ([f9bdd84](https://github.com/googleapis/nodejs-vision/commit/f9bdd849ad0e9c0724deeb52eea8791a0186ed9d))
* **deps:** Update dependency redis to ~4.5.0 ([#1072](https://github.com/googleapis/nodejs-vision/issues/1072)) ([109fed0](https://github.com/googleapis/nodejs-vision/commit/109fed01d6ddefe81e352861f482b207e79fd10b))
* **deps:** Use google-gax v3.5.2 ([#1073](https://github.com/googleapis/nodejs-vision/issues/1073)) ([47281f6](https://github.com/googleapis/nodejs-vision/commit/47281f6bcf25d8223d065ec99b8db51624c34cbd))
* Regenerated protos JS and TS definitions ([#1077](https://github.com/googleapis/nodejs-vision/issues/1077)) ([4f7610f](https://github.com/googleapis/nodejs-vision/commit/4f7610f253ceb694abfb41aa2a6a2e02493e1c52))

## [3.0.1](https://github.com/googleapis/nodejs-vision/compare/v3.0.0...v3.0.1) (2022-09-21)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#1044](https://github.com/googleapis/nodejs-vision/issues/1044)) ([a5baeca](https://github.com/googleapis/nodejs-vision/commit/a5baeca8fc50b9d805b55515db493c86cff26299))

## [3.0.0](https://github.com/googleapis/nodejs-vision/compare/v2.4.2...v3.0.0) (2022-09-01)


### ⚠ BREAKING CHANGES

* Update library to use Node 12 (#1016)
* BatchAnnotateImagesRequest.requests is required (#1011)

### Features

* Add TextDetectionParams.advanced_ocr_options ([#1034](https://github.com/googleapis/nodejs-vision/issues/1034)) ([828f045](https://github.com/googleapis/nodejs-vision/commit/828f045563eff5668dc95f628745716978759788))
* Support regapic LRO ([a5f8f72](https://github.com/googleapis/nodejs-vision/commit/a5f8f72328655c7959475d0258df164b576af570))


### Bug Fixes

* Allow passing gax instance to client constructor ([#1042](https://github.com/googleapis/nodejs-vision/issues/1042)) ([4cc32dc](https://github.com/googleapis/nodejs-vision/commit/4cc32dc2068cd9490b28a8869a1d6de6c7a7b0c3))
* BatchAnnotateImagesRequest.requests is required ([#1011](https://github.com/googleapis/nodejs-vision/issues/1011)) ([574f43e](https://github.com/googleapis/nodejs-vision/commit/574f43ecfadab77aa992aae2a24e36a3bb9f7b22))
* Better support for fallback mode ([#1037](https://github.com/googleapis/nodejs-vision/issues/1037)) ([ea578e7](https://github.com/googleapis/nodejs-vision/commit/ea578e784271fd2f68c330850f64d1d9e406625d))
* Change import long to require ([#1038](https://github.com/googleapis/nodejs-vision/issues/1038)) ([b57b334](https://github.com/googleapis/nodejs-vision/commit/b57b334c35591e73f875ef61f375f452e78ce094))
* **deps:** Update dependency redis to ~4.3.0 ([#1039](https://github.com/googleapis/nodejs-vision/issues/1039)) ([ea26d33](https://github.com/googleapis/nodejs-vision/commit/ea26d3349b1e2db8eb021924b1ee2406f135b712))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-vision/issues/1553)) ([#1041](https://github.com/googleapis/nodejs-vision/issues/1041)) ([4de6e42](https://github.com/googleapis/nodejs-vision/commit/4de6e42aada9228574bc2f50d6b6e10f7f244b4d))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-vision/issues/1546)) ([#1040](https://github.com/googleapis/nodejs-vision/issues/1040)) ([85f115f](https://github.com/googleapis/nodejs-vision/commit/85f115f31f9b26c64e7b2704e6f908b88673db86))


### Build System

* Update library to use Node 12 ([#1016](https://github.com/googleapis/nodejs-vision/issues/1016)) ([12bd0f6](https://github.com/googleapis/nodejs-vision/commit/12bd0f66db6c497eb8e2d8a8236dca95432043b8))

### [2.4.2](https://www.github.com/googleapis/nodejs-vision/compare/v2.4.1...v2.4.2) (2022-01-06)


### Bug Fixes

* add types to package.json ([#977](https://www.github.com/googleapis/nodejs-vision/issues/977)) ([1cd056b](https://www.github.com/googleapis/nodejs-vision/commit/1cd056b97c851eac1726610c85193ddc85cbddb7))

### [2.4.1](https://www.github.com/googleapis/nodejs-vision/compare/v2.4.0...v2.4.1) (2021-12-14)


### Bug Fixes

* comment about gcsUri ([#967](https://www.github.com/googleapis/nodejs-vision/issues/967)) ([abc4044](https://www.github.com/googleapis/nodejs-vision/commit/abc4044dc972746292dad107009bc67223b88f86))
* **deps:** update dependency redis to v4 ([#966](https://www.github.com/googleapis/nodejs-vision/issues/966)) ([1584e4e](https://www.github.com/googleapis/nodejs-vision/commit/1584e4e65f56f66a968472f6b7dabf23393dc3f4))

## [2.4.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.8...v2.4.0) (2021-09-09)


### Features

* turns on self-signed JWT feature flag ([#942](https://www.github.com/googleapis/nodejs-vision/issues/942)) ([c0558c7](https://www.github.com/googleapis/nodejs-vision/commit/c0558c7ec2097c713cf591ae985eb5c8f7f7435a))


### Bug Fixes

* **build:** migrate to using main branch ([#947](https://www.github.com/googleapis/nodejs-vision/issues/947)) ([f1ce40f](https://www.github.com/googleapis/nodejs-vision/commit/f1ce40fcf255a052442d2fdd46516182a58b0aed))

### [2.3.8](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.7...v2.3.8) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#939](https://www.github.com/googleapis/nodejs-vision/issues/939)) ([21d59e3](https://www.github.com/googleapis/nodejs-vision/commit/21d59e39ba66eb14db467e101477cba692a67d44))

### [2.3.7](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.6...v2.3.7) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#928](https://www.github.com/googleapis/nodejs-vision/issues/928)) ([f5cddc5](https://www.github.com/googleapis/nodejs-vision/commit/f5cddc5086a96ddc4255017366422df40a6efaf5))

### [2.3.6](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.5...v2.3.6) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#926](https://www.github.com/googleapis/nodejs-vision/issues/926)) ([6853428](https://www.github.com/googleapis/nodejs-vision/commit/68534284ff975a3a1c950b6727358b77dac4fc83))

### [2.3.5](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.4...v2.3.5) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#923](https://www.github.com/googleapis/nodejs-vision/issues/923)) ([0292824](https://www.github.com/googleapis/nodejs-vision/commit/02928247cae0d8db0f4ced155e8f60c8d664cd17))

### [2.3.4](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.3...v2.3.4) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#917](https://www.github.com/googleapis/nodejs-vision/issues/917)) ([d301b79](https://www.github.com/googleapis/nodejs-vision/commit/d301b79dee83948bada4b16e33048933d454c051))

### [2.3.3](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.2...v2.3.3) (2021-05-26)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#908](https://www.github.com/googleapis/nodejs-vision/issues/908)) ([3bd4071](https://www.github.com/googleapis/nodejs-vision/commit/3bd4071597067b7f31d61cbaeaef1fc531179fc4))

### [2.3.2](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.1...v2.3.2) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#897](https://www.github.com/googleapis/nodejs-vision/issues/897)) ([bc987f4](https://www.github.com/googleapis/nodejs-vision/commit/bc987f4cc731de64792d5b56d4861038b310f211))
* **deps:** update dependency natural to v5 ([#880](https://www.github.com/googleapis/nodejs-vision/issues/880)) ([6a82d95](https://www.github.com/googleapis/nodejs-vision/commit/6a82d95f532f054cd120920339c198d57ce2cf28))
* use require() to load JSON protos ([#899](https://www.github.com/googleapis/nodejs-vision/issues/899)) ([01ff4e3](https://www.github.com/googleapis/nodejs-vision/commit/01ff4e3162541e4e255ca7b3e5478c2b754a78b9))

### [2.3.1](https://www.github.com/googleapis/nodejs-vision/compare/v2.3.0...v2.3.1) (2021-02-18)


### Bug Fixes

* **deps:** update dependency natural to v3 ([#865](https://www.github.com/googleapis/nodejs-vision/issues/865)) ([38d9a1a](https://www.github.com/googleapis/nodejs-vision/commit/38d9a1a3ae9fe02b67135ecc3f56f6d3a53ac547))
* **deps:** update dependency natural to v4 ([#870](https://www.github.com/googleapis/nodejs-vision/issues/870)) ([edfcb9e](https://www.github.com/googleapis/nodejs-vision/commit/edfcb9eed26145c1f72bfaaa3ee8e7a4d74630b3))
* sync vision v1 protos to get extra FaceAnnotation Landmark Types ([#868](https://www.github.com/googleapis/nodejs-vision/issues/868)) ([4d45375](https://www.github.com/googleapis/nodejs-vision/commit/4d45375016aa12d0e8ea24525168e23590af47b4))

## [2.3.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.2.0...v2.3.0) (2021-01-06)


### Features

* introduce style enumeration ([b5fe1ac](https://www.github.com/googleapis/nodejs-vision/commit/b5fe1aca1ee70176c5569d1ff9255958988a0077))

## [2.2.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.2...v2.2.0) (2021-01-06)


### Features

* Add TextDetectionParams.enable_text_detection_confidence_score ([#850](https://www.github.com/googleapis/nodejs-vision/issues/850)) ([c8f51a2](https://www.github.com/googleapis/nodejs-vision/commit/c8f51a2fd03e0dc80c7a36c9e7602f2c1a94a73d))


### Bug Fixes

* **browser:** check for fetch on window ([ef95fb1](https://www.github.com/googleapis/nodejs-vision/commit/ef95fb1ff7f2495b2929c18b4c814ad93c8b42cc))
* do not modify options object, use defaultScopes ([#845](https://www.github.com/googleapis/nodejs-vision/issues/845)) ([8377b42](https://www.github.com/googleapis/nodejs-vision/commit/8377b4268a4ed4ef07869c75c1ae48f4ec3b01ce))

### [2.1.2](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.1...v2.1.2) (2020-09-12)


### Bug Fixes

* **deps:** update dependency yargs to v16 ([#824](https://www.github.com/googleapis/nodejs-vision/issues/824)) ([9ce5215](https://www.github.com/googleapis/nodejs-vision/commit/9ce5215448b026adb10fa9c10156d4e8d8c865e4))

### [2.1.1](https://www.github.com/googleapis/nodejs-vision/compare/v2.1.0...v2.1.1) (2020-07-10)


### Bug Fixes

* update node issue template ([#795](https://www.github.com/googleapis/nodejs-vision/issues/795)) ([e975833](https://www.github.com/googleapis/nodejs-vision/commit/e975833eb5b11d3c3834bfea9697a9611cae6a8f))

## [2.1.0](https://www.github.com/googleapis/nodejs-vision/compare/v2.0.0...v2.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#790](https://www.github.com/googleapis/nodejs-vision/issues/790)) ([4d9e334](https://www.github.com/googleapis/nodejs-vision/commit/4d9e334bdf6bc479779541b31d26055199dcdbff))
* switch to es2018 target for TypeScript ([#788](https://www.github.com/googleapis/nodejs-vision/issues/788)) ([7df91d4](https://www.github.com/googleapis/nodejs-vision/commit/7df91d4fc15f64aa9e462af45136ae5a361cc162))


### Bug Fixes

* handle fallback option properly ([#793](https://www.github.com/googleapis/nodejs-vision/issues/793)) ([43b45bf](https://www.github.com/googleapis/nodejs-vision/commit/43b45bf1b41976f0628cae227d7f7fab29359632))

## [2.0.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.11.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#773](https://www.github.com/googleapis/nodejs-vision/issues/773)) ([2b3becf](https://www.github.com/googleapis/nodejs-vision/commit/2b3becf530294202d361d7a8f35601973332eafe))
* drop node8 support, support for async iterators ([#568](https://www.github.com/googleapis/nodejs-vision/issues/568)) ([e2dccd0](https://www.github.com/googleapis/nodejs-vision/commit/e2dccd02d20ed82ed679fff629b5a4aab47b39b6))


### Bug Fixes

* **deps:** update dependency @google-cloud/promisify to v2 ([#565](https://www.github.com/googleapis/nodejs-vision/issues/565)) ([c71a709](https://www.github.com/googleapis/nodejs-vision/commit/c71a70926568367fa89fbbf4226e40fcb44f679e))
* **deps:** update dependency mathjs to v7 ([#775](https://www.github.com/googleapis/nodejs-vision/issues/775)) ([d64d99f](https://www.github.com/googleapis/nodejs-vision/commit/d64d99fe615a7048a5537fbcb8fbf3364e1c53c0))
* **deps:** update dependency natural to v1 ([#768](https://www.github.com/googleapis/nodejs-vision/issues/768)) ([44a8dcc](https://www.github.com/googleapis/nodejs-vision/commit/44a8dcc389489829f927015a1070e516f2e786b0))
* **deps:** update dependency natural to v2 ([#772](https://www.github.com/googleapis/nodejs-vision/issues/772)) ([afdc8da](https://www.github.com/googleapis/nodejs-vision/commit/afdc8da5f4181b5d43c3dc0155294495d647645a))
* **samples:** use pureimage instead of canvas ([#774](https://www.github.com/googleapis/nodejs-vision/issues/774)) ([a352338](https://www.github.com/googleapis/nodejs-vision/commit/a3523388bace85f19041202c74be4beb705d620d))
* mocha tests ([#784](https://www.github.com/googleapis/nodejs-vision/issues/784)) ([319c98e](https://www.github.com/googleapis/nodejs-vision/commit/319c98e284a622876e055cfd7a249750d600ce76))
* remove eslint, update gax, fix generated protos, run the generator ([#756](https://www.github.com/googleapis/nodejs-vision/issues/756)) ([72f22b6](https://www.github.com/googleapis/nodejs-vision/commit/72f22b60e1491963ea1d22a4f96feabe07be0376))

## [1.11.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.10.0...v1.11.0) (2020-03-11)


### Features

* deferred client initialization ([#551](https://www.github.com/googleapis/nodejs-vision/issues/551)) ([8866d89](https://www.github.com/googleapis/nodejs-vision/commit/8866d8905750dfc0627f585c30c0b19bb205172d))
* export protos from src/index.ts ([#547](https://www.github.com/googleapis/nodejs-vision/issues/547)) ([41c736c](https://www.github.com/googleapis/nodejs-vision/commit/41c736c8f234f6fba20120fa5c17353519f2d45d))

## [1.10.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.9.0...v1.10.0) (2020-03-03)


### Features

* move API to typescript code generation ([#532](https://www.github.com/googleapis/nodejs-vision/issues/532)) ([401e694](https://www.github.com/googleapis/nodejs-vision/commit/401e6944796fd1249639da6b767e842576345c3e))

## [1.9.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.8.0...v1.9.0) (2020-02-10)


### Features

* bump release level to GA ([#530](https://www.github.com/googleapis/nodejs-vision/issues/530)) ([3b091ba](https://www.github.com/googleapis/nodejs-vision/commit/3b091ba7c67864e845d1f399b8052684a2d6030e))


### Bug Fixes

* **deps:** update dependency redis to v3 ([#533](https://www.github.com/googleapis/nodejs-vision/issues/533)) ([d9b50cb](https://www.github.com/googleapis/nodejs-vision/commit/d9b50cb2ac56a5eadab72efed59f12189418993c))

## [1.8.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.2...v1.8.0) (2020-01-02)


### Features

* add new resource descriptors ([#491](https://www.github.com/googleapis/nodejs-vision/issues/491)) ([95037bf](https://www.github.com/googleapis/nodejs-vision/commit/95037bf3c9236902ab31c23fd51a236e23100e91))
* **samples:** add sample of configuring alternate apiEndpoint ([#473](https://www.github.com/googleapis/nodejs-vision/issues/473)) ([fa01482](https://www.github.com/googleapis/nodejs-vision/commit/fa01482648c93d7a57b5f7159a995a6b13e4f941))


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#497](https://www.github.com/googleapis/nodejs-vision/issues/497)) ([30aa9ff](https://www.github.com/googleapis/nodejs-vision/commit/30aa9ffbdd3cdb8e28c300f7b9223f60fdb61d7e))

### [1.7.2](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.1...v1.7.2) (2019-11-18)


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#488](https://www.github.com/googleapis/nodejs-vision/issues/488)) ([21c889e](https://www.github.com/googleapis/nodejs-vision/commit/21c889ee3157e38cc8eefec5da8f1d103fd41f17))

### [1.7.1](https://www.github.com/googleapis/nodejs-vision/compare/v1.7.0...v1.7.1) (2019-11-13)


### Bug Fixes

* import long in proto ts declaration file ([#482](https://www.github.com/googleapis/nodejs-vision/issues/482)) ([1f5258b](https://www.github.com/googleapis/nodejs-vision/commit/1f5258b65665c4813463592af32720d07e5c8de4))
* **docs:** snippets are now replaced in jsdoc comments ([#481](https://www.github.com/googleapis/nodejs-vision/issues/481)) ([07281d6](https://www.github.com/googleapis/nodejs-vision/commit/07281d6d0acbd59a9c308308cb090b598cda53a2))

## [1.7.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.6.0...v1.7.0) (2019-11-08)


### Features

* add celebrity face detection ([#477](https://www.github.com/googleapis/nodejs-vision/issues/477)) ([cdfa59e](https://www.github.com/googleapis/nodejs-vision/commit/cdfa59e4156c5b557651c3bf50cfc46487149a7d))

## [1.6.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.5.0...v1.6.0) (2019-11-05)


### Features

* added endpoint samples for vision api ([#467](https://www.github.com/googleapis/nodejs-vision/issues/467)) ([4c569b4](https://www.github.com/googleapis/nodejs-vision/commit/4c569b4ace83be63a12f85676c174a663796fa47))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#464](https://www.github.com/googleapis/nodejs-vision/issues/464)) ([dcc4d62](https://www.github.com/googleapis/nodejs-vision/commit/dcc4d622f46922975d028af20aefc27446fdcad5))


### Reverts

* added endpoint samples for vision api ([ea5d421](https://www.github.com/googleapis/nodejs-vision/commit/ea5d4218816571556a2059fc977e2223678c979e))

## [1.5.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.4.0...v1.5.0) (2019-10-10)


### Bug Fixes

* update protobuf options for product sets ([#462](https://www.github.com/googleapis/nodejs-vision/issues/462)) ([32b3fa9](https://www.github.com/googleapis/nodejs-vision/commit/32b3fa9))
* use compatible version of google-gax ([a4f2863](https://www.github.com/googleapis/nodejs-vision/commit/a4f2863))


### Features

* .d.ts for protos ([#451](https://www.github.com/googleapis/nodejs-vision/issues/451)) ([15f4329](https://www.github.com/googleapis/nodejs-vision/commit/15f4329))
* additional safe search confidence fields ([#444](https://www.github.com/googleapis/nodejs-vision/issues/444)) ([31735a7](https://www.github.com/googleapis/nodejs-vision/commit/31735a7))

## [1.4.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.3.0...v1.4.0) (2019-09-14)


### Features

* make vision helpers work with JSON proto ([#441](https://www.github.com/googleapis/nodejs-vision/issues/441)) ([5b7a249](https://www.github.com/googleapis/nodejs-vision/commit/5b7a249))

## [1.3.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.2.0...v1.3.0) (2019-09-09)


### Bug Fixes

* use process versions object for client header ([#428](https://www.github.com/googleapis/nodejs-vision/issues/428)) ([c1dde85](https://www.github.com/googleapis/nodejs-vision/commit/c1dde85))
* **samples:** upgrade yargs and fix broken CLI config ([#436](https://www.github.com/googleapis/nodejs-vision/issues/436)) ([1a9c374](https://www.github.com/googleapis/nodejs-vision/commit/1a9c374))


### Features

* load protos from JSON, grpc-fallback support ([9914445](https://www.github.com/googleapis/nodejs-vision/commit/9914445))

## [1.2.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.4...v1.2.0) (2019-08-19)


### Features

* adds support for multiple regions ([244e21e](https://www.github.com/googleapis/nodejs-vision/commit/244e21e))

### [1.1.4](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.3...v1.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([55c0380](https://www.github.com/googleapis/nodejs-vision/commit/55c0380))

### [1.1.3](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#406](https://www.github.com/googleapis/nodejs-vision/issues/406)) ([fa2fb3f](https://www.github.com/googleapis/nodejs-vision/commit/fa2fb3f))

### [1.1.2](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.1...v1.1.2) (2019-06-15)


### Bug Fixes

* **docs:** move to new client docs URL ([#401](https://www.github.com/googleapis/nodejs-vision/issues/401)) ([9b40044](https://www.github.com/googleapis/nodejs-vision/commit/9b40044))

### [1.1.1](https://www.github.com/googleapis/nodejs-vision/compare/v1.1.0...v1.1.1) (2019-06-11)


### Bug Fixes

* **deps:** update dependency mathjs to v6 ([#399](https://www.github.com/googleapis/nodejs-vision/issues/399)) ([6c37196](https://www.github.com/googleapis/nodejs-vision/commit/6c37196))

## [1.1.0](https://www.github.com/googleapis/nodejs-vision/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#393](https://www.github.com/googleapis/nodejs-vision/issues/393)) ([7777275](https://www.github.com/googleapis/nodejs-vision/commit/7777275))

## [1.0.0](https://www.github.com/googleapis/nodejs-vision/compare/v0.25.0...v1.0.0) (2019-05-13)


### Bug Fixes

* **deps:** update dependency google-gax to v1 ([#376](https://www.github.com/googleapis/nodejs-vision/issues/376)) ([14a5ca9](https://www.github.com/googleapis/nodejs-vision/commit/14a5ca9))
* DEADLINE_EXCEEDED is idempotent ([#377](https://www.github.com/googleapis/nodejs-vision/issues/377)) ([d7ed2d3](https://www.github.com/googleapis/nodejs-vision/commit/d7ed2d3))
* **deps:** update dependency @google-cloud/promisify to v1 ([#367](https://www.github.com/googleapis/nodejs-vision/issues/367)) ([f1a5bcc](https://www.github.com/googleapis/nodejs-vision/commit/f1a5bcc))
* **deps:** update dependency google-gax to ^0.26.0 ([#362](https://www.github.com/googleapis/nodejs-vision/issues/362)) ([81a3379](https://www.github.com/googleapis/nodejs-vision/commit/81a3379))
* include 'x-goog-request-params' header in requests ([4e7a1c6](https://www.github.com/googleapis/nodejs-vision/commit/4e7a1c6)), closes [#353](https://www.github.com/googleapis/nodejs-vision/issues/353)
* **samples:** make test assertion less specific ([#354](https://www.github.com/googleapis/nodejs-vision/issues/354)) ([435ddf0](https://www.github.com/googleapis/nodejs-vision/commit/435ddf0))


### Build System

* upgrade engines field to >=8.10.0 ([#363](https://www.github.com/googleapis/nodejs-vision/issues/363)) ([e8a7141](https://www.github.com/googleapis/nodejs-vision/commit/e8a7141))


### Features

* image annotation batching ([#375](https://www.github.com/googleapis/nodejs-vision/issues/375)) ([bed2515](https://www.github.com/googleapis/nodejs-vision/commit/bed2515))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#363)

## v0.25.0

02-22-2019 17:39 PST

### New Features
This release contains a new version (v1p4beta1) of the Vision API. To use this version, construct the client liks this:

```javascript
const vision = require('@google-cloud/vision');
const client = new vision.v1p4beta1.ImageAnnotatorClient();
```

- feat: gen v1p4beta1: online PDF, async batch image annotate ([#331](https://github.com/googleapis/nodejs-vision/pull/331))

### Implementation Changes
- fix: throw on invalid credentials in v1p4beta1  ([#334](https://github.com/googleapis/nodejs-vision/pull/334))
- fix: throw on invalid credentials ([#326](https://github.com/googleapis/nodejs-vision/pull/326))

### Dependencies
- chore(deps): update dependency mocha to v6 ([#330](https://github.com/googleapis/nodejs-vision/pull/330))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#328](https://github.com/googleapis/nodejs-vision/pull/328))
- fix(deps): update dependency yargs to v13 ([#325](https://github.com/googleapis/nodejs-vision/pull/325))
- fix(deps): update dependency google-gax to ^0.25.0 ([#315](https://github.com/googleapis/nodejs-vision/pull/315))
- fix(deps): update dependency google-gax to ^0.24.0 ([#312](https://github.com/googleapis/nodejs-vision/pull/312))
- chore(deps): update dependency eslint-config-prettier to v4 ([#313](https://github.com/googleapis/nodejs-vision/pull/313))
- fix(deps): update dependency google-gax to ^0.23.0 ([#307](https://github.com/googleapis/nodejs-vision/pull/307))

### Documentation / Samples
- docs: update contributing path in README ([#321](https://github.com/googleapis/nodejs-vision/pull/321))
- docs: update links in contrib guide ([#329](https://github.com/googleapis/nodejs-vision/pull/329))
- docs: add lint/fix example to contributing guide ([#318](https://github.com/googleapis/nodejs-vision/pull/318))
- docs: fix example comments ([#317](https://github.com/googleapis/nodejs-vision/pull/317))
- fix(docs): remove unused long running operations types
- docs: improve detect.js samples ([#300](https://github.com/googleapis/nodejs-vision/pull/300))

### Internal / Testing Changes
- build: use linkinator for docs test ([#327](https://github.com/googleapis/nodejs-vision/pull/327))
- build: create docs test npm scripts ([#324](https://github.com/googleapis/nodejs-vision/pull/324))
- build: test using @grpc/grpc-js in CI ([#322](https://github.com/googleapis/nodejs-vision/pull/322))
- chore: move CONTRIBUTING.md to root ([#320](https://github.com/googleapis/nodejs-vision/pull/320))
- refactor: improve generated code style. ([#316](https://github.com/googleapis/nodejs-vision/pull/316))
- fix: ignore case in system test assertions ([#314](https://github.com/googleapis/nodejs-vision/pull/314))
- build: ignore googleapis.com in doc link check ([#310](https://github.com/googleapis/nodejs-vision/pull/310))
- chore: update year in the license headers. ([#309](https://github.com/googleapis/nodejs-vision/pull/309))
- build: check broken links in generated docs ([#301](https://github.com/googleapis/nodejs-vision/pull/301))

## v0.24.0

12-19-2018 13:36 PST

### Implementation Changes
**This release contains breaking change**
- BREAKING: rename method imagePath => referenceImagePath ([#296](https://github.com/googleapis/nodejs-vision/pull/296))
The method `ProductSearchClient.imagePath` was renamed `referenceImagePath`:
```
// old code
const formattedName = client.imagePath(...);

// new code
const formattedName = client.referenceImagePath(...);
```
- fix: Param "scoreThreshold" should be "score_threshold" ([#234](https://github.com/googleapis/nodejs-vision/pull/234))

### New Features
- ProductSearch GA ([#280](https://github.com/googleapis/nodejs-vision/pull/280))

### Dependencies
- refactor: remove unused deps ([#261](https://github.com/googleapis/nodejs-vision/pull/261))
- fix(deps): update dependency google-gax to ^0.22.0 ([#265](https://github.com/googleapis/nodejs-vision/pull/265))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#263](https://github.com/googleapis/nodejs-vision/pull/263))
- fix(deps): update dependency @google-cloud/vision to ^0.23.0 ([#260](https://github.com/googleapis/nodejs-vision/pull/260))

### Documentation
- docs: fix productSearch example ([#285](https://github.com/googleapis/nodejs-vision/pull/285))
- docs: update readme badges ([#283](https://github.com/googleapis/nodejs-vision/pull/283))
- docs(samples): updated samples code to use async/await and tests to use mocha ([#241](https://github.com/googleapis/nodejs-vision/pull/241))

### Internal / Testing Changes
- chore: modernize the samples and sample tests ([#297](https://github.com/googleapis/nodejs-vision/pull/297))
- chore(build): inject yoshi automation key ([#294](https://github.com/googleapis/nodejs-vision/pull/294))
- chore: update nyc and eslint configs ([#293](https://github.com/googleapis/nodejs-vision/pull/293))
- chore: fix publish.sh permission +x ([#292](https://github.com/googleapis/nodejs-vision/pull/292))
- fix(build): fix Kokoro release script ([#291](https://github.com/googleapis/nodejs-vision/pull/291))
- build: add Kokoro configs for autorelease ([#290](https://github.com/googleapis/nodejs-vision/pull/290))
- chore: always nyc report before calling codecov ([#288](https://github.com/googleapis/nodejs-vision/pull/288))
- chore: nyc ignore build/test by default ([#287](https://github.com/googleapis/nodejs-vision/pull/287))
- chore: update license file ([#284](https://github.com/googleapis/nodejs-vision/pull/284))
- fix(build): fix system key decryption ([#282](https://github.com/googleapis/nodejs-vision/pull/282))
- test: make product search tests run ([#269](https://github.com/googleapis/nodejs-vision/pull/269))
- chore: update eslintignore config ([#264](https://github.com/googleapis/nodejs-vision/pull/264))
- chore: drop contributors from multiple places ([#262](https://github.com/googleapis/nodejs-vision/pull/262))

## v0.23.0

### New Features
- feat: add support for product search

### Dependencies
- chore(deps): update dependency eslint-plugin-node to v8 ([#245](https://github.com/googleapis/nodejs-vision/pull/245))
- chore(deps): update dependency canvas to v2 ([#224](https://github.com/googleapis/nodejs-vision/pull/224))
- chore(deps): update dependency sinon to v7 ([#219](https://github.com/googleapis/nodejs-vision/pull/219))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#213](https://github.com/googleapis/nodejs-vision/pull/213))

### Documentation
- fix(samples): Adding vision_product_search_tutorial_import tags ([#221](https://github.com/googleapis/nodejs-vision/pull/221))
- fix(samples): Change the Project ID from number to string ([#220](https://github.com/googleapis/nodejs-vision/pull/220))
- docs: Vision AutoML samples ([#197](https://github.com/googleapis/nodejs-vision/pull/197))

### Internal / Testing Changes
- chore: use latest npm on Windows ([#258](https://github.com/googleapis/nodejs-vision/pull/258))
- chore: update lint configs ([#257](https://github.com/googleapis/nodejs-vision/pull/257))
- chore: update CircleCI config ([#253](https://github.com/googleapis/nodejs-vision/pull/253))
- chore: update issue templates ([#244](https://github.com/googleapis/nodejs-vision/pull/244))
- chore: remove old issue template ([#242](https://github.com/googleapis/nodejs-vision/pull/242))
- build: run tests on node11 ([#239](https://github.com/googleapis/nodejs-vision/pull/239))
- chores(build): do not collect sponge.xml from windows builds ([#238](https://github.com/googleapis/nodejs-vision/pull/238))
- chores(build): run codecov on continuous builds ([#237](https://github.com/googleapis/nodejs-vision/pull/237))
- chore: update new issue template ([#235](https://github.com/googleapis/nodejs-vision/pull/235))
- build: fix codecov uploading on Kokoro ([#222](https://github.com/googleapis/nodejs-vision/pull/222))
- chore: enable --throw-deprecation on mocha config ([#147](https://github.com/googleapis/nodejs-vision/pull/147))
- Update kokoro config ([#214](https://github.com/googleapis/nodejs-vision/pull/214))
- Update kokoro config ([#208](https://github.com/googleapis/nodejs-vision/pull/208))
- test: remove appveyor config ([#207](https://github.com/googleapis/nodejs-vision/pull/207))
- Update the CI config ([#206](https://github.com/googleapis/nodejs-vision/pull/206))

## v0.22.1

### Bug fixes
- Fix response output for Detect Labels ([#199](https://github.com/googleapis/nodejs-vision/pull/199))

### Documentation
- Vision GA – vision_localize_objects & vision_localize_object_gcs ([#200](https://github.com/googleapis/nodejs-vision/pull/200))
- Product search rebased ([#196](https://github.com/googleapis/nodejs-vision/pull/196))

### Internal / Testing Changes
- Enable prefer-const in the eslint config ([#201](https://github.com/googleapis/nodejs-vision/pull/201))
- Enable no-var in eslint ([#198](https://github.com/googleapis/nodejs-vision/pull/198))
- Switch to let/const ([#194](https://github.com/googleapis/nodejs-vision/pull/194))
- fix(deps): update dependency google-gax to ^0.20.0 ([#193](https://github.com/googleapis/nodejs-vision/pull/193))

## v0.22.0

### New Features
Object Localization is available on v1 of this library:
- Updated CI config and run synth ([#181](https://github.com/googleapis/nodejs-vision/pull/181))

### Dependencies
- chore(deps): update dependency @google-cloud/storage to v2 ([#183](https://github.com/googleapis/nodejs-vision/pull/183))
- chore(deps): update dependency nyc to v13 ([#177](https://github.com/googleapis/nodejs-vision/pull/177))
- fix(deps): update dependency google-gax to ^0.19.0 ([#173](https://github.com/googleapis/nodejs-vision/pull/173))
- chore(deps): update dependency eslint-config-prettier to v3 ([#170](https://github.com/googleapis/nodejs-vision/pull/170))

### Internal / Testing Changes
- Update CI config ([#188](https://github.com/googleapis/nodejs-vision/pull/188))
- Fix the sample tests ([#187](https://github.com/googleapis/nodejs-vision/pull/187))
- Retry npm install in CI ([#185](https://github.com/googleapis/nodejs-vision/pull/185))
- Update CI config ([#184](https://github.com/googleapis/nodejs-vision/pull/184))
- fix: (tests): Use real service to validate expectations. ([#182](https://github.com/googleapis/nodejs-vision/pull/182))
- chore: make the CircleCI config consistent
- Udpate Beta Vision samples to use beta tags ([#172](https://github.com/googleapis/nodejs-vision/pull/172))
- Vision region tag update ([#171](https://github.com/googleapis/nodejs-vision/pull/171))
- build: configure Windows build on Kokoro ([#165](https://github.com/googleapis/nodejs-vision/pull/165))
- chore: do not use npm ci ([#167](https://github.com/googleapis/nodejs-vision/pull/167))
- build(kokoro): samples-test.sh need GCLOUD_PROJECT env; node6 and node8 is using wrong .sh ([#162](https://github.com/googleapis/nodejs-vision/pull/162))
- build(kokoro): setup samples and system test ([#161](https://github.com/googleapis/nodejs-vision/pull/161))
- chore: ignore package-lock.json ([#160](https://github.com/googleapis/nodejs-vision/pull/160))
- build: rename build.sh => test.sh; presubmit jobs runs lint and docs properly ([#158](https://github.com/googleapis/nodejs-vision/pull/158))
- fix(samples): missing fs requires causing sample-test to fail ([#157](https://github.com/googleapis/nodejs-vision/pull/157))
- build: add set -x to .sh to show the command being executed ([#156](https://github.com/googleapis/nodejs-vision/pull/156))
- add samples linking to kokoro jobs ([#155](https://github.com/googleapis/nodejs-vision/pull/155))
- Kokoro multi ver ([#153](https://github.com/googleapis/nodejs-vision/pull/153))
- chore: update renovate config ([#152](https://github.com/googleapis/nodejs-vision/pull/152))
- have presubmit.cfg in separate node* folders ([#151](https://github.com/googleapis/nodejs-vision/pull/151))
- split presubmit to multiple node versions ([#149](https://github.com/googleapis/nodejs-vision/pull/149))

## v0.21.1

Patch release to bring in updates to google-gax@0.18.0 so it no longer emits deprecation warnings with grpc (#120), along with other dependency updates and documentation changes.

### Dependencies
- fix(deps): update dependency google-gax to ^0.18.0 (#146)
- chore: drop dependency on common (#134)
- chore(deps): update dependency eslint-plugin-node to v7 (#127)

### Documentation
- Code Samples demonstrating Object Localization & Handwriting OCR (#133)

### Internal / Testing Changes
- build: initial kokoro setup (#145)
- chore: assert.deelEqual => assert.deepStrictEqual (#143)
- chore: move mocha options to mocha.opts (#141)
- chore: require node 8 for samples (#142)
- chore: add node templates to synth.py (#139)
- fix(deps): update dependency @google-cloud/vision to ^0.21.0 (#131)

## v0.21.0

### Implementation Changes
#### 🚨 BREAKING CHANGE
In this version we dropped support for NodeJS 4.x and 9.x. Your code might break if you're using this library on non LTS versions.
- fix: drop support for node.js 4.x and 9.x (#117)

### New Features
This release brings in v1p3beta1 of the Cloud Vision API, which includes the following new features:
- Object localization
- Product search

- gen: v1p3beta1 of Cloud Vision API NodeJS Client Library (#124)
- feat: implement manual methods for objectLocalization and productSearch on v1p3beta1 (#128)

### Dependencies
- fix: update and cleanup dependencies (#102)
- fix(deps): update dependency yargs to v12 (#103)
- repo: setup greenkeeper.json to update dependencies in samples/package.json (#94)
- refactor: drop dependency on extend (#85)
- fix: move async to dev dependencies (#83)
- chore: update many dependencies (#81)
- fix: switch from node-uuid to uuid (#84)
- chore(package): update eslint to version 5.0.1 (#98)
- chore(package): update eslint to version 5.0.0 (#90)

### Documentation

### Internal / Testing Changes
- Add smoke tests via regeneration (#122)
- Re-generate library using /synth.py (#111)
- synth.py: follow synth scripts from other repos (#113)
- Beta2ga pdf ocr (#104)
- Configure Renovate (#87)
- refactor: drop repo-tool as an exec wrapper (#97)
- fix: update linking for samples (#92)
