# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/functions-v4.0.1...functions-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/functions-v4.0.0...functions-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6185](https://github.com/googleapis/google-cloud-node/issues/6185)) ([ab30412](https://github.com/googleapis/google-cloud-node/commit/ab304122e3e825c9a76af7d6b0ef4ddc9aa6e906))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.6.1...functions-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.6.1](https://github.com/googleapis/google-cloud-node/compare/functions-v3.6.0...functions-v3.6.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.5.0...functions-v3.6.0) (2024-08-19)


### Features

* [functions] optional field for specifying a service account to use for the build. This helps navigate the change of historical default on new projects. For more details, see https://cloud.google.com/build/docs/cloud-build-service-account-updates ([#5612](https://github.com/googleapis/google-cloud-node/issues/5612)) ([ddb9d88](https://github.com/googleapis/google-cloud-node/commit/ddb9d8850040732832e46b3e3b6d4abc33f42099))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.4.0...functions-v3.5.0) (2024-08-09)


### Features

* [functions] optional field for specifying a service account to use for the build. This helps navigate the change of historical default on new projects. For more details, see https://cloud.google.com/build/docs/cloud-build-service-account-updates ([#5607](https://github.com/googleapis/google-cloud-node/issues/5607)) ([1e600c2](https://github.com/googleapis/google-cloud-node/commit/1e600c2a0a73c5756e9b3df361f7aa1428f3259e))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.3.0...functions-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5353](https://github.com/googleapis/google-cloud-node/issues/5353)) ([1a2388d](https://github.com/googleapis/google-cloud-node/commit/1a2388d7096176b4155a0c4f01e15ffb8c4d5096))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.2.0...functions-v3.3.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.1.0...functions-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/functions-v3.0.1...functions-v3.1.0) (2024-02-07)


### Features

* [functions] updated description for `docker_registry` to reflect transition to Artifact Registry ([#4981](https://github.com/googleapis/google-cloud-node/issues/4981)) ([a65c238](https://github.com/googleapis/google-cloud-node/commit/a65c23883e449f929cbc8c7422e0c325b7f598fe))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/functions-v3.0.0...functions-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/functions-v2.5.0...functions-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/functions-v2.4.1...functions-v2.5.0) (2023-06-06)


### Features

* [functions] ListFunctions now include metadata which indicates whether a function is a GEN_1 or GEN_2 function ([#4262](https://github.com/googleapis/google-cloud-node/issues/4262)) ([b6d8778](https://github.com/googleapis/google-cloud-node/commit/b6d8778f06458c3f701c8c0099de71dfb3b0b59d))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/functions-v2.4.0...functions-v2.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/functions-v2.3.1...functions-v2.4.0) (2023-03-28)


### Features

* [functions] add `available_cpu ` field ([#4092](https://github.com/googleapis/google-cloud-node/issues/4092)) ([6873012](https://github.com/googleapis/google-cloud-node/commit/687301241b381cb414e7a2161797f53b247a8386))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/functions-v2.3.0...functions-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/functions-v2.2.3...functions-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.2.3](https://github.com/googleapis/nodejs-functions/compare/v2.2.2...v2.2.3) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#201](https://github.com/googleapis/nodejs-functions/issues/201)) ([727c86a](https://github.com/googleapis/nodejs-functions/commit/727c86a475f3405a86259e9ff1f2946e09ae81d3))
* Regenerated protos JS and TS definitions ([#205](https://github.com/googleapis/nodejs-functions/issues/205)) ([c2a42c6](https://github.com/googleapis/nodejs-functions/commit/c2a42c6eb29eea880d6c15ee85dc7a8b84f65eb9))

## [2.2.2](https://github.com/googleapis/nodejs-functions/compare/v2.2.1...v2.2.2) (2022-09-21)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#187](https://github.com/googleapis/nodejs-functions/issues/187)) ([57b025c](https://github.com/googleapis/nodejs-functions/commit/57b025c07d850812a246db7e61521a968f0cd20a))

## [2.2.1](https://github.com/googleapis/nodejs-functions/compare/v2.2.0...v2.2.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#186](https://github.com/googleapis/nodejs-functions/issues/186)) ([2ab984e](https://github.com/googleapis/nodejs-functions/commit/2ab984e032f5062862f0ce0fbe65d18bbbc421f1))
* Better support for fallback mode ([#181](https://github.com/googleapis/nodejs-functions/issues/181)) ([aeaefd4](https://github.com/googleapis/nodejs-functions/commit/aeaefd4debab32e91a0078a342acc15c501281f8))
* Change import long to require ([#182](https://github.com/googleapis/nodejs-functions/issues/182)) ([1c02a68](https://github.com/googleapis/nodejs-functions/commit/1c02a6842e99c5a0db5eff94b46ca3551f0b13a0))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-functions/issues/1553)) ([#185](https://github.com/googleapis/nodejs-functions/issues/185)) ([b5748ed](https://github.com/googleapis/nodejs-functions/commit/b5748ed5154722907fd407c8bc6fd300a8fdaf21))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-functions/issues/1546)) ([#184](https://github.com/googleapis/nodejs-functions/issues/184)) ([a8ffbb1](https://github.com/googleapis/nodejs-functions/commit/a8ffbb17e77a95ea23a1f4043c50a17faaa66b7e))

## [2.2.0](https://github.com/googleapis/nodejs-functions/compare/v2.1.0...v2.2.0) (2022-07-14)


### Features

* generating GAPIC libraries for Google Cloud Functions v2beta ([#175](https://github.com/googleapis/nodejs-functions/issues/175)) ([63a2cfd](https://github.com/googleapis/nodejs-functions/commit/63a2cfd6552495746f7af84cc5d4cdeec887f5e8))
* support regapic LRO ([#172](https://github.com/googleapis/nodejs-functions/issues/172)) ([eb5486d](https://github.com/googleapis/nodejs-functions/commit/eb5486d20abaf81ce84730868ad4ed4f549d0f31))

## [2.1.0](https://github.com/googleapis/nodejs-functions/compare/v2.0.0...v2.1.0) (2022-06-20)


### Features

* added support for CMEK ([#166](https://github.com/googleapis/nodejs-functions/issues/166)) ([5f5e7e0](https://github.com/googleapis/nodejs-functions/commit/5f5e7e00282783095af067268972b72e68a17ebe))
* generating GAPIC libraries for Google Cloud Functions v2alpha ([25c6047](https://github.com/googleapis/nodejs-functions/commit/25c60474a412fc26d1f91a12e47d259fcf3b7445))
* generating GAPIC libraries for Google Cloud Functions v2beta ([#171](https://github.com/googleapis/nodejs-functions/issues/171)) ([25c6047](https://github.com/googleapis/nodejs-functions/commit/25c60474a412fc26d1f91a12e47d259fcf3b7445))

## [2.0.0](https://github.com/googleapis/nodejs-functions/compare/v1.3.0...v2.0.0) (2022-05-17)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#164)

### Build System

* update library to use Node 12 ([#164](https://github.com/googleapis/nodejs-functions/issues/164)) ([dd4d94a](https://github.com/googleapis/nodejs-functions/commit/dd4d94a43269225225aaf5da37fc1176eb6c6999))

## [1.3.0](https://github.com/googleapis/nodejs-functions/compare/v1.2.0...v1.3.0) (2022-04-21)


### Features

* AuditConfig for IAM v1 ([#148](https://github.com/googleapis/nodejs-functions/issues/148)) ([3c9131b](https://github.com/googleapis/nodejs-functions/commit/3c9131b24985f5e69501c51f068a68a7fea5e588))

## [1.2.0](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.9...v1.2.0) (2021-09-16)


### Features

* add SecurityLevel option on HttpsTrigger ([#110](https://www.github.com/googleapis/nodejs-functions/issues/110)) ([13d865e](https://www.github.com/googleapis/nodejs-functions/commit/13d865e773a66213c1915ebe2dfc18688e2db300))
* turns on self-signed JWT feature flag ([#106](https://www.github.com/googleapis/nodejs-functions/issues/106)) ([9fb2982](https://www.github.com/googleapis/nodejs-functions/commit/9fb29822945fed6f99a7aefa70bdaf88b7782489))

### [1.1.9](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.8...v1.1.9) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#103](https://www.github.com/googleapis/nodejs-functions/issues/103)) ([e1955e9](https://www.github.com/googleapis/nodejs-functions/commit/e1955e905b7b4128816bb778450cf60a11ae4b78))
* **deps:** google-gax v2.24.1 ([#104](https://www.github.com/googleapis/nodejs-functions/issues/104)) ([a419fa4](https://www.github.com/googleapis/nodejs-functions/commit/a419fa46a2056de455989ee8af577fed01ed8fc3))
* updating behavior of source_upload_url during Get/List function calls ([#100](https://www.github.com/googleapis/nodejs-functions/issues/100)) ([2cb3abe](https://www.github.com/googleapis/nodejs-functions/commit/2cb3abe1b686472610a799235a73f38415ea096f))

### [1.1.8](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.7...v1.1.8) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#93](https://www.github.com/googleapis/nodejs-functions/issues/93)) ([6125f4f](https://www.github.com/googleapis/nodejs-functions/commit/6125f4fe7846f67e4ad436b63d4914a2175f9672))

### [1.1.7](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.6...v1.1.7) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#89](https://www.github.com/googleapis/nodejs-functions/issues/89)) ([2beef03](https://www.github.com/googleapis/nodejs-functions/commit/2beef033c8c134d812e05f12186c7d1285f7e70b))
* **deps:** google-gax v2.17.1 ([#92](https://www.github.com/googleapis/nodejs-functions/issues/92)) ([4024ee5](https://www.github.com/googleapis/nodejs-functions/commit/4024ee5bebfdd8d2fb1c7a3431906773e2510d5b))

### [1.1.6](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.5...v1.1.6) (2021-06-24)


### Bug Fixes

* make request optional in all cases ([#85](https://www.github.com/googleapis/nodejs-functions/issues/85)) ([16b60eb](https://www.github.com/googleapis/nodejs-functions/commit/16b60eb08129f4da404970ba9b487770c1e8c9e8))

### [1.1.5](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.4...v1.1.5) (2021-06-07)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#78](https://www.github.com/googleapis/nodejs-functions/issues/78)) ([4c413d8](https://www.github.com/googleapis/nodejs-functions/commit/4c413d8e199cfe5e4e6d1f9144b44fea1a98d59d))

### [1.1.4](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.3...v1.1.4) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#70](https://www.github.com/googleapis/nodejs-functions/issues/70)) ([0369f0c](https://www.github.com/googleapis/nodejs-functions/commit/0369f0cdf8424a531861b3ad65b10215d293b74d))
* use require() to load JSON protos ([#73](https://www.github.com/googleapis/nodejs-functions/issues/73)) ([b3da62e](https://www.github.com/googleapis/nodejs-functions/commit/b3da62e5a46628f91615854fc8fa61f315ab1ff9))

### [1.1.3](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.2...v1.1.3) (2021-03-15)


### Bug Fixes

* fix service namespace in grpc_service_config. ([#56](https://www.github.com/googleapis/nodejs-functions/issues/56)) ([8f5af4a](https://www.github.com/googleapis/nodejs-functions/commit/8f5af4a519473ed3fe8fd0761f21b886d3d1c0c9))

### [1.1.2](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.1...v1.1.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([0aa94fa](https://www.github.com/googleapis/nodejs-functions/commit/0aa94fa222e4ef0bb5a09d4aa3fa957bd8cc80cf))

### [1.1.1](https://www.github.com/googleapis/nodejs-functions/compare/v1.1.0...v1.1.1) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#38](https://www.github.com/googleapis/nodejs-functions/issues/38)) ([24738f1](https://www.github.com/googleapis/nodejs-functions/commit/24738f112727b56fc180b2ad3280456ccabd1af8))

## [1.1.0](https://www.github.com/googleapis/nodejs-functions/compare/v1.0.1...v1.1.0) (2020-09-01)


### Features

* promote library to GA ([#22](https://www.github.com/googleapis/nodejs-functions/issues/22)) ([ad3b6d0](https://www.github.com/googleapis/nodejs-functions/commit/ad3b6d0e72cda6414466fb6a8127afa155e955a7))

### [1.0.1](https://www.github.com/googleapis/nodejs-functions/compare/v1.0.0...v1.0.1) (2020-08-03)


### Bug Fixes

* run synthtool hack to compile code ([#6](https://www.github.com/googleapis/nodejs-functions/issues/6)) ([2b080c5](https://www.github.com/googleapis/nodejs-functions/commit/2b080c5bfd3f134a5e0a365fc0d6663e1dd4755c))

## 1.0.0 (2020-07-24)


### ⚠ BREAKING CHANGES

* initial generation of full library

### Features

* first library generation ([1eb6d4e](https://www.github.com/googleapis/nodejs-functions/commit/1eb6d4effedd8077b1ad45c2bf3d006b50cc4e31))
* initial generation of full library ([56dd811](https://www.github.com/googleapis/nodejs-functions/commit/56dd8110379f1f89dab77fb24e857b671b09569b))
* run synthtool ([d990bc4](https://www.github.com/googleapis/nodejs-functions/commit/d990bc4fe9272fd7389b59a5fc0f248d3e0eb196))
* run synthtool ([5798802](https://www.github.com/googleapis/nodejs-functions/commit/5798802a7686e4569bfe28142e304efcffd15c4c))
* stub out samples directory ([32d1b49](https://www.github.com/googleapis/nodejs-functions/commit/32d1b4911e8de58885f77a8da0d124895a3d7a7d))


### Bug Fixes

* add prelint script ([d110ca0](https://www.github.com/googleapis/nodejs-functions/commit/d110ca0815f6276e24ef0babe40ab9abd7d51b4e))
* linting ([a6bac6b](https://www.github.com/googleapis/nodejs-functions/commit/a6bac6bbed0ab4c44f6425df4ac2638a9c0c81e0))
* linting error ([454bf37](https://www.github.com/googleapis/nodejs-functions/commit/454bf373253ce1d0ba081fbba3ee2fd9d76d88a0))
* linting errors ([8e62b5d](https://www.github.com/googleapis/nodejs-functions/commit/8e62b5d0ce6e8ef91f1b496750a1604b7bb1c4e2))
* missing require ([6956aa0](https://www.github.com/googleapis/nodejs-functions/commit/6956aa08cc7e00a4db4957f4f78fe485e74a492f))
* space ([18af745](https://www.github.com/googleapis/nodejs-functions/commit/18af745e130d3cfaf91c28ac64124ffa3afbdb09))
