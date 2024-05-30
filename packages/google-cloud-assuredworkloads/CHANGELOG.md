# Changelog

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v4.2.0...assured-workloads-v4.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v4.1.0...assured-workloads-v4.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v4.0.1...assured-workloads-v4.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v4.0.0...assured-workloads-v4.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v3.6.2...assured-workloads-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.6.2](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v3.6.1...assured-workloads-v3.6.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.6.1](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v3.6.0...assured-workloads-v3.6.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/assured-workloads-v3.5.0...assured-workloads-v3.6.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [3.5.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.4.1...v3.5.0) (2022-11-10)


### Features

* Add apis for AssuredWorkload monitoring feature and to restrict allowed resources ([#192](https://github.com/googleapis/nodejs-assured-workloads/issues/192)) ([ab33d32](https://github.com/googleapis/nodejs-assured-workloads/commit/ab33d32d2585d0c0de372660001b5d1bfcea4cd7))
* Add compliant_but_disallowed_services field to the v1beta1 Workload proto ([3101b18](https://github.com/googleapis/nodejs-assured-workloads/commit/3101b1896af8f684c4cf26b634411980a74f1b66))
* Add new field for exception audit log link ([#193](https://github.com/googleapis/nodejs-assured-workloads/issues/193)) ([89f20ba](https://github.com/googleapis/nodejs-assured-workloads/commit/89f20baa4487638eb53ddaf018dce8f880d36973))
* Updated v1beta1 analyzeWorkloadMove documentation ([e02a438](https://github.com/googleapis/nodejs-assured-workloads/commit/e02a4381a79b94e8bd745ee6435f15770824f592))


### Bug Fixes

* Allow passing gax instance to client constructor ([#185](https://github.com/googleapis/nodejs-assured-workloads/issues/185)) ([e02a438](https://github.com/googleapis/nodejs-assured-workloads/commit/e02a4381a79b94e8bd745ee6435f15770824f592))
* **deps:** Use google-gax v3.5.2 ([#196](https://github.com/googleapis/nodejs-assured-workloads/issues/196)) ([cfa9ce8](https://github.com/googleapis/nodejs-assured-workloads/commit/cfa9ce8356937cbbf99ffba80d5a3631f1f8480b))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-assured-workloads/issues/1553)) ([#186](https://github.com/googleapis/nodejs-assured-workloads/issues/186)) ([bc1ee5f](https://github.com/googleapis/nodejs-assured-workloads/commit/bc1ee5ffab28bce1803829ab275c687d2e4e1360))
* Preserve default values in x-goog-request-params header ([#188](https://github.com/googleapis/nodejs-assured-workloads/issues/188)) ([3101b18](https://github.com/googleapis/nodejs-assured-workloads/commit/3101b1896af8f684c4cf26b634411980a74f1b66))
* Regenerated protos JS and TS definitions ([#199](https://github.com/googleapis/nodejs-assured-workloads/issues/199)) ([c23065a](https://github.com/googleapis/nodejs-assured-workloads/commit/c23065a364233fbc045798891973dc8b2a8001b5))
* use google-gax v3.3.0 ([bc1ee5f](https://github.com/googleapis/nodejs-assured-workloads/commit/bc1ee5ffab28bce1803829ab275c687d2e4e1360))

## [3.4.1](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.4.0...v3.4.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#181](https://github.com/googleapis/nodejs-assured-workloads/issues/181)) ([98e8596](https://github.com/googleapis/nodejs-assured-workloads/commit/98e8596c9bda01cf384c07f157e823ee41f28acd))
* change import long to require ([#182](https://github.com/googleapis/nodejs-assured-workloads/issues/182)) ([8a77a07](https://github.com/googleapis/nodejs-assured-workloads/commit/8a77a076dc8585ad1b98cb3058fde15b225ed22f))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-assured-workloads/issues/1546)) ([#184](https://github.com/googleapis/nodejs-assured-workloads/issues/184)) ([796b8c2](https://github.com/googleapis/nodejs-assured-workloads/commit/796b8c2fb5a8010a2db974eaef5b2d34f2e402bc))

## [3.4.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.3.0...v3.4.0) (2022-07-29)


### Features

* Updated the method signature of analyzeWorkloadMove for v1beta API to accept project as source. AnalyzeWorkloadMove now also returns information about org policy differences between the project and target folder ([#179](https://github.com/googleapis/nodejs-assured-workloads/issues/179)) ([b912379](https://github.com/googleapis/nodejs-assured-workloads/commit/b912379bd886bb48c66e92f445fe886e9beed22c))

## [3.3.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.2.0...v3.3.0) (2022-07-04)


### Features

* ITAR June Preview Launch ([f4304b4](https://github.com/googleapis/nodejs-assured-workloads/commit/f4304b4c6974445d22d03f890e784e3767e30dd4))

## [3.2.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.1.0...v3.2.0) (2022-06-29)


### Features

* support regapic LRO ([#172](https://github.com/googleapis/nodejs-assured-workloads/issues/172)) ([d0dcdef](https://github.com/googleapis/nodejs-assured-workloads/commit/d0dcdefe8846cf0629a0aeca19c013b8ce53fc90))

## [3.1.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v3.0.0...v3.1.0) (2022-06-16)


### Features

* proto file name is changed from assuredworkloads_v1beta1.proto to assuredworkloads.proto ([e1ff7cd](https://github.com/googleapis/nodejs-assured-workloads/commit/e1ff7cd5272c99a5824a0319ab0aec73135aa667))

## [3.0.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v2.2.0...v3.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#162)

### Build System

* update library to use Node 12 ([#162](https://github.com/googleapis/nodejs-assured-workloads/issues/162)) ([fab651b](https://github.com/googleapis/nodejs-assured-workloads/commit/fab651b66009a9d747e3a207544c2a5e41a1576c))

## [2.2.0](https://github.com/googleapis/nodejs-assured-workloads/compare/v2.1.0...v2.2.0) (2022-03-23)


### Features

* promote to stable ([#148](https://github.com/googleapis/nodejs-assured-workloads/issues/148)) ([464f0b8](https://github.com/googleapis/nodejs-assured-workloads/commit/464f0b8157c35c0bd68f39ca757844fb83d00032)), closes [#3](https://github.com/googleapis/nodejs-assured-workloads/issues/3)

## [2.1.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v2.0.0...v2.1.0) (2021-12-10)


### Features

* EU Regions and Support With Sovereign Controls ([#125](https://www.github.com/googleapis/nodejs-assured-workloads/issues/125)) ([29706fc](https://www.github.com/googleapis/nodejs-assured-workloads/commit/29706fc359d17fbb85af1d91fcdecf638be52a8a))

## [2.0.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.8.0...v2.0.0) (2021-10-14)


### ⚠ BREAKING CHANGES

* set v1 as the default version of the API (#110)

### Features

* set v1 as the default version of the API ([#110](https://www.github.com/googleapis/nodejs-assured-workloads/issues/110)) ([746db25](https://www.github.com/googleapis/nodejs-assured-workloads/commit/746db25e12932938467e4f14c573b838d06217e2))

## [1.8.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.7.0...v1.8.0) (2021-09-17)


### Features

* assuredworkloads v1 public protos ([#108](https://www.github.com/googleapis/nodejs-assured-workloads/issues/108)) ([4e6032f](https://www.github.com/googleapis/nodejs-assured-workloads/commit/4e6032f0778c7df042035a7e19dbf17fc1c4951d))

## [1.7.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.6.0...v1.7.0) (2021-08-27)


### Features

* Add Canada Regions And Support compliance regime ([#103](https://www.github.com/googleapis/nodejs-assured-workloads/issues/103)) ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))
* display_name is added to ResourceSettings ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))
* resource_settings is added to CreateWorkloadOperationMetadata ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))
* ResourceType CONSUMER_FOLDER and KEYRING are added ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))


### Bug Fixes

* billing_account is now optional in Workload ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))
* ResourceType CONSUMER_PROJECT is deprecated ([49365ee](https://www.github.com/googleapis/nodejs-assured-workloads/commit/49365eea8ac9701957ddb508a52686e96e876bf1))

## [1.6.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.5.2...v1.6.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#100](https://www.github.com/googleapis/nodejs-assured-workloads/issues/100)) ([5e0e688](https://www.github.com/googleapis/nodejs-assured-workloads/commit/5e0e6882a0f77a59da866fb25f9fd115836c6b76))

### [1.5.2](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.5.1...v1.5.2) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#98](https://www.github.com/googleapis/nodejs-assured-workloads/issues/98)) ([66c0ace](https://www.github.com/googleapis/nodejs-assured-workloads/commit/66c0ace695292bb9d9769ff3132e7cbf8eae865d))

### [1.5.1](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.5.0...v1.5.1) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#96](https://www.github.com/googleapis/nodejs-assured-workloads/issues/96)) ([371e12d](https://www.github.com/googleapis/nodejs-assured-workloads/commit/371e12dbc5c0e439eca22b4115c54352ac5b2037))

## [1.5.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.6...v1.5.0) (2021-07-30)


### Features

* Add EU Regions And Support compliance regime ([#90](https://www.github.com/googleapis/nodejs-assured-workloads/issues/90)) ([c3d9957](https://www.github.com/googleapis/nodejs-assured-workloads/commit/c3d9957097e9fe638885fb42fd205b82fb62e02d))

### [1.4.6](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.5...v1.4.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#86](https://www.github.com/googleapis/nodejs-assured-workloads/issues/86)) ([b68bfe0](https://www.github.com/googleapis/nodejs-assured-workloads/commit/b68bfe00fdaec8c68028a1aa0ff5074da324dbd7))

### [1.4.5](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.4...v1.4.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#84](https://www.github.com/googleapis/nodejs-assured-workloads/issues/84)) ([ea29dcf](https://www.github.com/googleapis/nodejs-assured-workloads/commit/ea29dcfd1c01935bc9023656f6c4c9803f18ee7b))

### [1.4.4](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.3...v1.4.4) (2021-07-01)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#81](https://www.github.com/googleapis/nodejs-assured-workloads/issues/81)) ([526dcb0](https://www.github.com/googleapis/nodejs-assured-workloads/commit/526dcb0b5cda536772f5821519bb25dea8d9e377))

### [1.4.3](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.2...v1.4.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#75](https://www.github.com/googleapis/nodejs-assured-workloads/issues/75)) ([eaf5667](https://www.github.com/googleapis/nodejs-assured-workloads/commit/eaf5667b16d355eff487409951fd26b21d4448c3))

### [1.4.2](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.1...v1.4.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#68](https://www.github.com/googleapis/nodejs-assured-workloads/issues/68)) ([551c5b3](https://www.github.com/googleapis/nodejs-assured-workloads/commit/551c5b3db4314f6bcc7fe385651cde1269722b85))

### [1.4.1](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.4.0...v1.4.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#60](https://www.github.com/googleapis/nodejs-assured-workloads/issues/60)) ([2d79414](https://www.github.com/googleapis/nodejs-assured-workloads/commit/2d79414b862ca6cd91b22be00aea06e166f89b42))
* use require() to load JSON protos ([#63](https://www.github.com/googleapis/nodejs-assured-workloads/issues/63)) ([faf72cf](https://www.github.com/googleapis/nodejs-assured-workloads/commit/faf72cfffbba6acc34e5b981c40151dc8df3281d))

## [1.4.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.3.0...v1.4.0) (2021-03-23)


### Features

* add HIPAA and HITRUST compliance regimes ([#41](https://www.github.com/googleapis/nodejs-assured-workloads/issues/41)) ([a1c0181](https://www.github.com/googleapis/nodejs-assured-workloads/commit/a1c01819c0578d088de5e7d35890a914ff6a7aee))

## [1.4.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.3.0...v1.4.0) (2021-03-19)


### Features

* add HIPAA and HITRUST compliance regimes ([#41](https://www.github.com/googleapis/nodejs-assured-workloads/issues/41)) ([a1c0181](https://www.github.com/googleapis/nodejs-assured-workloads/commit/a1c01819c0578d088de5e7d35890a914ff6a7aee))

## [1.3.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.2.0...v1.3.0) (2021-02-18)


### Features

* updated google.cloud.assuredworkloads.v1beta1.AssuredWorkloadsService service. Clients can now create workloads with US_REGIONAL_ACCESS compliance regime ([#32](https://www.github.com/googleapis/nodejs-assured-workloads/issues/32)) ([f395037](https://www.github.com/googleapis/nodejs-assured-workloads/commit/f395037279a3cda1a784bcab83dc65cd3b177b45))

## [1.2.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.1.1...v1.2.0) (2021-01-09)


### Features

* adds style enumeration ([#25](https://www.github.com/googleapis/nodejs-assured-workloads/issues/25)) ([700731f](https://www.github.com/googleapis/nodejs-assured-workloads/commit/700731fc48712c2af46bf7e74de42e7f24f7171c))

### [1.1.1](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.1.0...v1.1.1) (2020-11-25)


### Bug Fixes

* better fallback feature detection, linting, use optional chaining for window.fetch feature detection, mark window as global for linter ([#19](https://www.github.com/googleapis/nodejs-assured-workloads/issues/19)) ([3143b2f](https://www.github.com/googleapis/nodejs-assured-workloads/commit/3143b2ff3ced03469ee569e3bfd9528b1f27ca64))

## [1.1.0](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.0.1...v1.1.0) (2020-11-16)


### Features

* added provisionedResourcesParent and kmsSettings ([4b34991](https://www.github.com/googleapis/nodejs-assured-workloads/commit/4b34991f8c3a9878f6ca9583bfbccbad691fa69b))

### [1.0.1](https://www.github.com/googleapis/nodejs-assured-workloads/compare/v1.0.0...v1.0.1) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#12](https://www.github.com/googleapis/nodejs-assured-workloads/issues/12)) ([ed671aa](https://www.github.com/googleapis/nodejs-assured-workloads/commit/ed671aadda0be838465172ea0fbdc64ab04ce754))

## 1.0.0 (2020-09-16)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-assured-workloads/issues/1)) ([de8baae](https://www.github.com/googleapis/nodejs-assured-workloads/commit/de8baaeffc47ee0f80d54d9fc626e9003bf3341d))
* stubbed out library ([bf1a579](https://www.github.com/googleapis/nodejs-assured-workloads/commit/bf1a5796766e79efd5040973818e707344d1ba3d))
