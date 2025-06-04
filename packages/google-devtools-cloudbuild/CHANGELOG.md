# Changelog

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v5.0.1...cloudbuild-v5.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v5.0.0...cloudbuild-v5.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.8.1...cloudbuild-v5.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [4.8.1](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.8.0...cloudbuild-v4.8.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [4.8.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.7.0...cloudbuild-v4.8.0) (2025-01-11)


### Features

* [cloudbuild] Add option to enable structured logging ([#5934](https://github.com/googleapis/google-cloud-node/issues/5934)) ([36be8cd](https://github.com/googleapis/google-cloud-node/commit/36be8cdce58807b3ca02b31d9b4cf950ba386063))

## [4.7.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.6.0...cloudbuild-v4.7.0) (2024-10-30)


### Features

* [cloudbuild] Add PrivateServiceConnect option to WorkerPool ([#5770](https://github.com/googleapis/google-cloud-node/issues/5770)) ([3aade58](https://github.com/googleapis/google-cloud-node/commit/3aade58c11e739c4652f5b1ab8e7f3cf12992ce9))

## [4.6.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.5.0...cloudbuild-v4.6.0) (2024-10-10)


### Features

* [cloudbuild] Add LEGACY_BUCKET option to DefaultLogsBucketBehavior ([#5700](https://github.com/googleapis/google-cloud-node/issues/5700)) ([7cbf6b2](https://github.com/googleapis/google-cloud-node/commit/7cbf6b20d0e4944779ba71aaa3388abbf3840ed5))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.4.0...cloudbuild-v4.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [4.4.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.3.0...cloudbuild-v4.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.2.0...cloudbuild-v4.3.0) (2024-03-23)


### Features

* [cloudbuild] Add Bitbucket Data Center Config and Bitbucket Cloud config for Cloud Build Repositories ([#5132](https://github.com/googleapis/google-cloud-node/issues/5132)) ([334e7b9](https://github.com/googleapis/google-cloud-node/commit/334e7b93b4a996ca70fd4b95e98ca5e0c56eb623))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.1.1...cloudbuild-v4.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [4.1.1](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.1.0...cloudbuild-v4.1.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.0.1...cloudbuild-v4.1.0) (2023-11-03)


### Features

* [cloudbuild] Add optional field "SourceFetcher" to choose source fetcher tool ([#4784](https://github.com/googleapis/google-cloud-node/issues/4784)) ([ff42e4e](https://github.com/googleapis/google-cloud-node/commit/ff42e4ee2fde54c1f370a16a065705e1f69f8b64))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v4.0.0...cloudbuild-v4.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.10.0...cloudbuild-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* [cloudbuild] add update_mask to UpdateBuildTriggerRequest proto ([#4473](https://github.com/googleapis/google-cloud-node/issues/4473)) ([7fb6677](https://github.com/googleapis/google-cloud-node/commit/7fb6677bd4368c93b48b16aa4a4149b419b69c9f))


### Bug Fixes

* [cloudbuild] fix typings for IAM methods ([#4454](https://github.com/googleapis/google-cloud-node/issues/4454)) ([1f67b6c](https://github.com/googleapis/google-cloud-node/commit/1f67b6ce592ca6c6de3e2eef67e5aaa5271e8772))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.10.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.9.0...cloudbuild-v3.10.0) (2023-07-24)


### Features

* [cloudbuild] add git_file_source and git_repo_source to build_trigger ([#4434](https://github.com/googleapis/google-cloud-node/issues/4434)) ([5dcb3c2](https://github.com/googleapis/google-cloud-node/commit/5dcb3c28ad2cf68485fe535d83d281b0d95cba38))
* [cloudbuild] Add routing information in Cloud Build GRPC clients ([#4410](https://github.com/googleapis/google-cloud-node/issues/4410)) ([58a5209](https://github.com/googleapis/google-cloud-node/commit/58a520990dab3fdc00f5838a9b875a4fc72cf158))

## [3.9.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.8.0...cloudbuild-v3.9.0) (2023-07-11)


### Features

* [cloudbuild] added e2-medium machine type ([#4402](https://github.com/googleapis/google-cloud-node/issues/4402)) ([f3e866e](https://github.com/googleapis/google-cloud-node/commit/f3e866e2c16ba430d7fb3bf0abc723b04ea9e994))

## [3.8.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.7.0...cloudbuild-v3.8.0) (2023-07-04)


### Features

* [cloudbuild] Add GitLabConfig and fetchGitRefs for Cloud Build Repositories ([#4380](https://github.com/googleapis/google-cloud-node/issues/4380)) ([a425fe2](https://github.com/googleapis/google-cloud-node/commit/a425fe255c2e1c002cb58e3c2c074366d7724de9))

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.6.0...cloudbuild-v3.7.0) (2023-06-28)


### Features

* [cloudbuild] add repositoryevent to buildtrigger ([#4378](https://github.com/googleapis/google-cloud-node/issues/4378)) ([5ce2484](https://github.com/googleapis/google-cloud-node/commit/5ce24848470ada481a42e7739fdef41928266623))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.5.2...cloudbuild-v3.6.0) (2023-04-24)


### Features

* [cloudbuild] Add PeeredNetworkIpRange to NetworkConfigs message ([#4181](https://github.com/googleapis/google-cloud-node/issues/4181)) ([01fa5eb](https://github.com/googleapis/google-cloud-node/commit/01fa5eb8e96fd8c8c0dd689b5da1ab57c4b66c98))

## [3.5.2](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.5.1...cloudbuild-v3.5.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.5.1](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.5.0...cloudbuild-v3.5.1) (2023-03-28)


### Bug Fixes

* [cloudbuild] change java package of Cloud Build v2 ([#4087](https://github.com/googleapis/google-cloud-node/issues/4087)) ([55efb27](https://github.com/googleapis/google-cloud-node/commit/55efb27141ba420ea9c181673708e8282382b0ff))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.4.0...cloudbuild-v3.5.0) (2023-03-13)


### Features

* [cloudbuild] Add DefaultLogsBucketBehavior to BuildOptions ([#4067](https://github.com/googleapis/google-cloud-node/issues/4067)) ([def2bc3](https://github.com/googleapis/google-cloud-node/commit/def2bc300a3507af7d0250f9ce9b94eaa553d5c7))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.3.0...cloudbuild-v3.4.0) (2023-02-23)


### Features

* Expose v2 RepositoryManager for cloudbuild ([#4018](https://github.com/googleapis/google-cloud-node/issues/4018)) ([1cf6d18](https://github.com/googleapis/google-cloud-node/commit/1cf6d18d0d56afcc6d4f4425107aaf8d27c45709))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/cloudbuild-v3.2.0...cloudbuild-v3.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [3.2.0](https://github.com/googleapis/nodejs-cloudbuild/compare/v3.1.2...v3.2.0) (2022-11-11)


### Features

* Add allow_failure, exit_code, and allow_exit_code to BuildStep message ([84c7dd7](https://github.com/googleapis/nodejs-cloudbuild/commit/84c7dd75501fea0d9c351904d40f4abd99e51e1a))
* Integration of Cloud Build with Artifact Registry ([#352](https://github.com/googleapis/nodejs-cloudbuild/issues/352)) ([84c7dd7](https://github.com/googleapis/nodejs-cloudbuild/commit/84c7dd75501fea0d9c351904d40f4abd99e51e1a))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#354](https://github.com/googleapis/nodejs-cloudbuild/issues/354)) ([9570dc0](https://github.com/googleapis/nodejs-cloudbuild/commit/9570dc04db9e1722052c5515bd616ddf87d569a5))
* Regenerated protos JS and TS definitions ([#358](https://github.com/googleapis/nodejs-cloudbuild/issues/358)) ([1e7a054](https://github.com/googleapis/nodejs-cloudbuild/commit/1e7a0540a78383c7dfd2b957e282a21dea1fc02c))

## [3.1.2](https://github.com/googleapis/nodejs-cloudbuild/compare/v3.1.1...v3.1.2) (2022-09-22)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#344](https://github.com/googleapis/nodejs-cloudbuild/issues/344)) ([004810d](https://github.com/googleapis/nodejs-cloudbuild/commit/004810d748249c000e8df308b70c03097e65fc25))

## [3.1.1](https://github.com/googleapis/nodejs-cloudbuild/compare/v3.1.0...v3.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#343](https://github.com/googleapis/nodejs-cloudbuild/issues/343)) ([4828f1e](https://github.com/googleapis/nodejs-cloudbuild/commit/4828f1e49b530f19d4d25fcc797b9ffe90c7d4ff))
* Better support for fallback mode ([#337](https://github.com/googleapis/nodejs-cloudbuild/issues/337)) ([909b6c8](https://github.com/googleapis/nodejs-cloudbuild/commit/909b6c8c5f34eeda975f2f818725b9ece202e60d))
* Change import long to require ([#339](https://github.com/googleapis/nodejs-cloudbuild/issues/339)) ([c1cdde2](https://github.com/googleapis/nodejs-cloudbuild/commit/c1cdde2c692c107414a461620c7e0634b7fc957f))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-cloudbuild/issues/1553)) ([#342](https://github.com/googleapis/nodejs-cloudbuild/issues/342)) ([80cda93](https://github.com/googleapis/nodejs-cloudbuild/commit/80cda938f92ae85266d2468dbb51856fb1d33579))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-cloudbuild/issues/1546)) ([#341](https://github.com/googleapis/nodejs-cloudbuild/issues/341)) ([f5133f8](https://github.com/googleapis/nodejs-cloudbuild/commit/f5133f8a4e5411a452583b0541c60b09124152be))

## [3.1.0](https://github.com/googleapis/nodejs-cloudbuild/compare/v3.0.1...v3.1.0) (2022-07-04)


### Features

* support regapic LRO ([d769170](https://github.com/googleapis/nodejs-cloudbuild/commit/d7691703d9948ddfec8f253f9569e7b603f40ce8))
* support regapic LRO ([#333](https://github.com/googleapis/nodejs-cloudbuild/issues/333)) ([eb65473](https://github.com/googleapis/nodejs-cloudbuild/commit/eb65473efeedf235a28de62e352db78d5d038e25))

## [3.0.1](https://github.com/googleapis/nodejs-cloudbuild/compare/v3.0.0...v3.0.1) (2022-06-20)


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#327](https://github.com/googleapis/nodejs-cloudbuild/issues/327)) ([4cf9b63](https://github.com/googleapis/nodejs-cloudbuild/commit/4cf9b6342121cdff09767321ab3a24d56f7f13d9))

## [3.0.0](https://github.com/googleapis/nodejs-cloudbuild/compare/v2.6.0...v3.0.0) (2022-05-17)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#325)

### Build System

* update library to use Node 12 ([#325](https://github.com/googleapis/nodejs-cloudbuild/issues/325)) ([596e5c2](https://github.com/googleapis/nodejs-cloudbuild/commit/596e5c21bc21c1d74fecb4cb7eb887561e1598f8))

## [2.6.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.5.0...v2.6.0) (2021-08-25)


### Features

* add script field to BuildStep message ([#273](https://www.github.com/googleapis/nodejs-cloudbuild/issues/273)) ([b91fb68](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b91fb68748dbc0ddafde776eaaf81f211102a3b2))
* Update cloudbuild proto with the service_account for BYOSA Triggers. ([#274](https://www.github.com/googleapis/nodejs-cloudbuild/issues/274)) ([0ad4f9b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/0ad4f9b9646a66ab6a5a91ddbbf7c8644c17317c))

## [2.5.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.4.0...v2.5.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#271](https://www.github.com/googleapis/nodejs-cloudbuild/issues/271)) ([dcb970d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/dcb970d8a6a7d87da553667cd25f8eb1052ba047))

## [2.4.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.3.2...v2.4.0) (2021-08-16)


### Features

* Add ability to configure BuildTriggers to create Builds that require approval before executing and ApproveBuild API to approve or reject pending Builds ([#267](https://www.github.com/googleapis/nodejs-cloudbuild/issues/267)) ([18ec067](https://www.github.com/googleapis/nodejs-cloudbuild/commit/18ec067ac1e112836c5d56747dda89e04f87c481))

### [2.3.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.3.1...v2.3.2) (2021-08-16)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#268](https://www.github.com/googleapis/nodejs-cloudbuild/issues/268)) ([c26f7f7](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c26f7f726db4f43f3692aea4c516547abcddd0ea))

### [2.3.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.3.0...v2.3.1) (2021-08-12)


### Bug Fixes

* **build:** migrate to using main branch ([#265](https://www.github.com/googleapis/nodejs-cloudbuild/issues/265)) ([e89f829](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e89f829f10c5710ca5fb259a6c8dfae1527071a3))

## [2.3.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.7...v2.3.0) (2021-08-05)


### ⚠ BREAKING CHANGES

* * feat: add a WorkerPools API

### Features

* add a WorkerPools API ([#254](https://www.github.com/googleapis/nodejs-cloudbuild/issues/254)) ([2e5b3f5](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2e5b3f540d9cd2b3a616c4581b07ebcfc444e7c7))
* Implementation of Build Failure Info: - Added message FailureInfo field ([#255](https://www.github.com/googleapis/nodejs-cloudbuild/issues/255)) ([6f115e2](https://www.github.com/googleapis/nodejs-cloudbuild/commit/6f115e2a4ec78289014c05f398d8464e599b1ef6))


### Build System

* force a minor release ([#262](https://www.github.com/googleapis/nodejs-cloudbuild/issues/262)) ([bc43706](https://www.github.com/googleapis/nodejs-cloudbuild/commit/bc4370692e233c265ce45546b205b9b9925d3990))

### [2.2.7](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.6...v2.2.7) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#251](https://www.github.com/googleapis/nodejs-cloudbuild/issues/251)) ([7bc5f7f](https://www.github.com/googleapis/nodejs-cloudbuild/commit/7bc5f7ff6c1485baaf1444a608d8ebb88ad20cfe))

### [2.2.6](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.5...v2.2.6) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#249](https://www.github.com/googleapis/nodejs-cloudbuild/issues/249)) ([e53360f](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e53360f645d0b9e584261acffbd001efd2d2081a))

### [2.2.5](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.4...v2.2.5) (2021-07-01)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#245](https://www.github.com/googleapis/nodejs-cloudbuild/issues/245)) ([2fbba81](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2fbba81b99e000ff104b76e20f0c37f3f9ea585d))

### [2.2.4](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.3...v2.2.4) (2021-06-24)


### Bug Fixes

* make request optional in all cases ([#241](https://www.github.com/googleapis/nodejs-cloudbuild/issues/241)) ([c96003a](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c96003a4897d3f7c8181a56c273b842a4dcdfbf7))

### [2.2.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.2...v2.2.3) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#231](https://www.github.com/googleapis/nodejs-cloudbuild/issues/231)) ([d6bd0be](https://www.github.com/googleapis/nodejs-cloudbuild/commit/d6bd0bee152c1c9864b8d6f09ab473309a576b50))

### [2.2.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.1...v2.2.2) (2021-05-12)


### Bug Fixes

* use require() to load JSON protos ([#225](https://www.github.com/googleapis/nodejs-cloudbuild/issues/225)) ([1d9fc28](https://www.github.com/googleapis/nodejs-cloudbuild/commit/1d9fc28d5b2a18305a44a2b315a5f8ccd2cf4da7))

### [2.2.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.2.0...v2.2.1) (2021-05-07)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#219](https://www.github.com/googleapis/nodejs-cloudbuild/issues/219)) ([2d5e809](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2d5e8091d4c2f99739ebd2f849eb5c30e3956952))

## [2.2.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.1.0...v2.2.0) (2021-04-16)


### Features

* Add fields for Pub/Sub triggers ([#211](https://www.github.com/googleapis/nodejs-cloudbuild/issues/211)) ([0cbc740](https://www.github.com/googleapis/nodejs-cloudbuild/commit/0cbc740e7306388104a5a71c412732ac1c097528))

## [2.1.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.6...v2.1.0) (2021-04-01)


### Features

* Add `COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY` for corresponding comment control feat: Committer: [@lozord](https://www.github.com/lozord) ([48fe15d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/48fe15d49504bbb77078984154a147840c484825))
* Add `ReceiveTriggerWebhook` for webhooks activating specific triggers. ([48fe15d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/48fe15d49504bbb77078984154a147840c484825))
* Add `SecretManager`-related resources and messages for corresponding integration. ([48fe15d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/48fe15d49504bbb77078984154a147840c484825))


### Bug Fixes

* Specify `build` as the body of a `CreateBuild` call. The Cloud Build API has always assumed this, but now we are actually specifying it. ([#202](https://www.github.com/googleapis/nodejs-cloudbuild/issues/202)) ([48fe15d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/48fe15d49504bbb77078984154a147840c484825))

### [2.0.6](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.5...v2.0.6) (2020-11-25)


### Bug Fixes

* check for fetch on window ([#185](https://www.github.com/googleapis/nodejs-cloudbuild/issues/185)) ([115de71](https://www.github.com/googleapis/nodejs-cloudbuild/commit/115de7141262c119113759aee5ddc141d129b55d))

### [2.0.5](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.4...v2.0.5) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#181](https://www.github.com/googleapis/nodejs-cloudbuild/issues/181)) ([c1a8c19](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c1a8c1948441cbc4643692f039c5a4ddbd178162))

### [2.0.4](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.3...v2.0.4) (2020-11-03)


### ⚠ BREAKING CHANGES

* The WorkerPool API in the v1 surface has been long deprecated, so it has been deleted from the v1 surface. Alpha WorkerPool customers who want to call the WorkerPool API can use gcloud.

### Features

* updated third_party Cloud Build clients with new Build message, fix: revert removal of WorkerPool API ([#166](https://www.github.com/googleapis/nodejs-cloudbuild/issues/166)) ([b8d7a39](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b8d7a395bbcc2f6ff83b798ef678e2f27395802d))


### Bug Fixes

* revert removal of WorkerPool API ([#178](https://www.github.com/googleapis/nodejs-cloudbuild/issues/178)) ([07400cb](https://www.github.com/googleapis/nodejs-cloudbuild/commit/07400cbcb05808762ab3c56c5827607cdefd43c0))

### [2.0.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.2...v2.0.3) (2020-07-24)


### Bug Fixes

* add missing cloudbuild RPCs to retry config, add Node 8 tests  ([#141](https://www.github.com/googleapis/nodejs-cloudbuild/issues/141)) ([e4b83e8](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e4b83e8a63f6ddba2ea158ab0ed9b4a50fa536bf))
* inline markup spans must be separated from the surrounding text by non-word characters ([#146](https://www.github.com/googleapis/nodejs-cloudbuild/issues/146)) ([52b4770](https://www.github.com/googleapis/nodejs-cloudbuild/commit/52b4770f0c262ce91306e31d68f3b47b0598751d))

### [2.0.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.1...v2.0.2) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#132](https://www.github.com/googleapis/nodejs-cloudbuild/issues/132)) ([80b5bd9](https://www.github.com/googleapis/nodejs-cloudbuild/commit/80b5bd963aa43e5a47da9e6d0e2ffbf0cde7feef))

### [2.0.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v2.0.0...v2.0.1) (2020-07-06)


### Bug Fixes

* support fallback mode for electron ([#124](https://www.github.com/googleapis/nodejs-cloudbuild/issues/124)) ([d2c9f9b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/d2c9f9b69463f9739b1813c673ba53ee97c9a3d5))

## [2.0.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.5.0...v2.0.0) (2020-06-11)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* add time-to-live in a queue for builds ([04e3387](https://www.github.com/googleapis/nodejs-cloudbuild/commit/04e3387af33a7ab39eb0c4df47ce08026507b499))
* check status of long running operation by its name ([#114](https://www.github.com/googleapis/nodejs-cloudbuild/issues/114)) ([7b50a74](https://www.github.com/googleapis/nodejs-cloudbuild/commit/7b50a74c098e782393f92140a37e3bd26f45e77d))
* drop node8 support, support for async iterators ([#91](https://www.github.com/googleapis/nodejs-cloudbuild/issues/91)) ([74a195d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/74a195d5cdf63dab1ac3d0d52ef42e1254ab3a2e))
* improve support for x-goog-request-params ([#111](https://www.github.com/googleapis/nodejs-cloudbuild/issues/111)) ([e08d640](https://www.github.com/googleapis/nodejs-cloudbuild/commit/e08d64017e059c911ebe55055c26a0ab76481d86))
* move ts target to es2018 from es2016 ([#121](https://www.github.com/googleapis/nodejs-cloudbuild/issues/121)) ([59c5477](https://www.github.com/googleapis/nodejs-cloudbuild/commit/59c547744519ef9e8d073ea3ecdb81248176a71a))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#100](https://www.github.com/googleapis/nodejs-cloudbuild/issues/100)) ([aafb9cc](https://www.github.com/googleapis/nodejs-cloudbuild/commit/aafb9cc7745b4d5d6dce58f17763f76379af733f))
* synth.py clean up for multiple version ([#115](https://www.github.com/googleapis/nodejs-cloudbuild/issues/115)) ([aa7d99b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/aa7d99b9c02267808cac07f7691f5ce62f06ca14))

## [1.5.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.4.0...v1.5.0) (2020-03-09)


### Features

* cloudbuild/v1 add new fields and annotate OUTPUT_OUT fields. ([#79](https://www.github.com/googleapis/nodejs-cloudbuild/issues/79)) ([0889fff](https://www.github.com/googleapis/nodejs-cloudbuild/commit/0889fff058e83dd421d4ad798c0f5318d74f22ff))
* deferred client initialization ([#75](https://www.github.com/googleapis/nodejs-cloudbuild/issues/75)) ([47b177d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/47b177dfed997bf4fafcf2810ddae9c5c7815112))
* export protos in src/index.ts ([c8e28b3](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8e28b3f39fa25e09ebaf19292a46b9078738498))

## [1.4.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.3...v1.4.0) (2020-02-13)


### Features

* bump release level to GA ([#62](https://www.github.com/googleapis/nodejs-cloudbuild/issues/62)) ([114756d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/114756d12007d1978fc3e4bb71b72e543bcc6945))

### [1.3.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.2...v1.3.3) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([365842b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/365842beb7e0ceee9f5861d4172f5de076335902))

### [1.3.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.1...v1.3.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([64538fe](https://www.github.com/googleapis/nodejs-cloudbuild/commit/64538fe21aae6430f8f3e1ec6604b286bd890535))

### [1.3.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.0...v1.3.1) (2020-01-06)


### Bug Fixes

* increase timeout from 20s to 60s ([#35](https://www.github.com/googleapis/nodejs-cloudbuild/issues/35)) ([b9d7f10](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b9d7f1089bd3dc0f3d53f54015b12bd2bf036c62))
* wait for client before checking for terminate ([35c1905](https://www.github.com/googleapis/nodejs-cloudbuild/commit/35c19050bd7594301df14ffa182fc6e6e73c1d64))

## [1.3.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.2.0...v1.3.0) (2019-12-11)


### Features

* make operationsClient and service stub public ([2fa96df](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2fa96dfe9145f479a2561b5a1215a6ffd19ddf07))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.1.0...v1.2.0) (2019-12-05)


### Features

* add default exports ([#22](https://www.github.com/googleapis/nodejs-cloudbuild/issues/22)) ([870bfd6](https://www.github.com/googleapis/nodejs-cloudbuild/commit/870bfd649e99f0332b04b51eddfce27ab5078cf5))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([c8d7267](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8d72671a810750d13d327e78b0eafbd0aeac46f))
* **docs:** snippets are now replaced in jsdoc comments ([#21](https://www.github.com/googleapis/nodejs-cloudbuild/issues/21)) ([b6bf159](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b6bf159e7d3799121b58fe8b290181c16b6aa894))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.0.0...v1.1.0) (2019-11-11)


### Features

* adds listBuildTriggersStream method ([59dad8a](https://www.github.com/googleapis/nodejs-cloudbuild/commit/59dad8afb351527cd7fd3348921ce30e4cd1956b))

## 1.0.0 (2019-10-31)


### Features

* initial release of cloud build library ([#2](https://www.github.com/googleapis/nodejs-cloudbuild/issues/2)) ([b3dbed2](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b3dbed28a63e88f09bcaf7bfa2984582ef058fb6))
* **docs:** add listBuildTriggers sample to README ([#5](https://www.github.com/googleapis/nodejs-cloudbuild/issues/5)) ([adcdb63](https://www.github.com/googleapis/nodejs-cloudbuild/commit/adcdb632244ddf18c1b57a1b0bdef1dcef3ae14b))
* moves library to TypeScript code generation ([#10](https://www.github.com/googleapis/nodejs-cloudbuild/issues/10)) ([871fa08](https://www.github.com/googleapis/nodejs-cloudbuild/commit/871fa0814d9483fdfa0081fad409c535ce25cac1))
