# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/dataproc?activeTab=versions

## [5.12.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.11.0...dataproc-v5.12.0) (2024-10-30)


### Features

* [dataproc] Add `ProvisioningModelMix` to support mixing of spot and standard instances for secondary workers ([#5753](https://github.com/googleapis/google-cloud-node/issues/5753)) ([9639bc9](https://github.com/googleapis/google-cloud-node/commit/9639bc9a253ccf94a4318210d638b29a42a5ee72))

## [5.11.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.10.0...dataproc-v5.11.0) (2024-10-10)


### Features

* [dataproc] add support for Spark Connect sessions in Dataproc Serverless for Spark ([#5709](https://github.com/googleapis/google-cloud-node/issues/5709)) ([fe95238](https://github.com/googleapis/google-cloud-node/commit/fe95238882e9c30570e025d11dc3a8ef5d4614a8))

## [5.10.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.9.0...dataproc-v5.10.0) (2024-09-24)


### Features

* [dataproc] add resource reference for KMS keys and fix comments ([#5680](https://github.com/googleapis/google-cloud-node/issues/5680)) ([8c7b907](https://github.com/googleapis/google-cloud-node/commit/8c7b907e67852a7fbb91961bce625b3387411525))

## [5.9.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.8.0...dataproc-v5.9.0) (2024-09-13)


### Features

* [dataproc] add support for new Dataproc features ([#5666](https://github.com/googleapis/google-cloud-node/issues/5666)) ([a53df0d](https://github.com/googleapis/google-cloud-node/commit/a53df0d4600c1666cabf1818d550232f04b265c8))

## [5.8.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.7.0...dataproc-v5.8.0) (2024-09-10)


### Features

* [dataproc]add optional parameters (tarball-access) in DiagnoseClusterRequest ([#5652](https://github.com/googleapis/google-cloud-node/issues/5652)) ([2d1df0f](https://github.com/googleapis/google-cloud-node/commit/2d1df0fe8ba212573550b7046db7f6688d7ee036))

## [5.7.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.6.0...dataproc-v5.7.0) (2024-06-26)


### Features

* [dataproc] add the cohort and auto tuning configuration to the batch's RuntimeConfig ([#5494](https://github.com/googleapis/google-cloud-node/issues/5494)) ([910da3c](https://github.com/googleapis/google-cloud-node/commit/910da3caf3602e360423db51ed171a42bba4f68a))

## [5.6.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.5.0...dataproc-v5.6.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [5.5.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.4.0...dataproc-v5.5.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [5.4.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.3.0...dataproc-v5.4.0) (2024-02-07)


### Features

* [dataproc] add session and session_template controllers ([#4994](https://github.com/googleapis/google-cloud-node/issues/4994)) ([1163399](https://github.com/googleapis/google-cloud-node/commit/1163399752d783bc7831dfd749e73215e8ebab34))

## [5.3.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.2.0...dataproc-v5.3.0) (2023-11-03)


### Features

* [dataproc] support required_registration_fraction for secondary workers ([#4786](https://github.com/googleapis/google-cloud-node/issues/4786)) ([8d1ae22](https://github.com/googleapis/google-cloud-node/commit/8d1ae22ced4e3f56a9d9b728140d1ec5c3e1cdde))

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.1.0...dataproc-v5.2.0) (2023-09-19)


### Features

* [dataproc] add optional parameters (tarball_gcs_dir, diagnosis_interval, jobs, yarn_application_ids) in DiagnoseClusterRequest ([#4661](https://github.com/googleapis/google-cloud-node/issues/4661)) ([9c2bd8e](https://github.com/googleapis/google-cloud-node/commit/9c2bd8e3675ef4021fe166a514e022fe70821f02))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v5.0.0...dataproc-v5.1.0) (2023-09-06)


### Features

* [dataproc] support min_num_instances for primary worker and InstanceFlexibilityPolicy for secondary worker ([#4574](https://github.com/googleapis/google-cloud-node/issues/4574)) ([5b112a6](https://github.com/googleapis/google-cloud-node/commit/5b112a6f8b73a8e3604c2465bacc64e799a9bcb0))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.5.0...dataproc-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.5.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.4.1...dataproc-v4.5.0) (2023-04-24)


### Features

* [dataproc] update go_package to v2 in google.cloud.dataproc.v1 ([#4184](https://github.com/googleapis/google-cloud-node/issues/4184)) ([c50526d](https://github.com/googleapis/google-cloud-node/commit/c50526dc1b23a0318adc8fde9a4a88af0725b030))

## [4.4.1](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.4.0...dataproc-v4.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.4.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.3.1...dataproc-v4.4.0) (2023-02-23)


### Features

* [dataproc] add support for new Dataproc features ([#4000](https://github.com/googleapis/google-cloud-node/issues/4000)) ([c530beb](https://github.com/googleapis/google-cloud-node/commit/c530beb09626986e4eaaec3066cb6b627dce6070))

## [4.3.1](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.3.0...dataproc-v4.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.2.0...dataproc-v4.3.0) (2023-01-28)


### Features

* Add SPOT to Preemptibility enum ([#3867](https://github.com/googleapis/google-cloud-node/issues/3867)) ([9ef74ad](https://github.com/googleapis/google-cloud-node/commit/9ef74ada3aea637aacc7554218c4e5be416264b1))
* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/dataproc-v4.1.1...dataproc-v4.2.0) (2022-12-16)


### Features

* Added node groups API protos ([#3724](https://github.com/googleapis/google-cloud-node/issues/3724)) ([9db90e8](https://github.com/googleapis/google-cloud-node/commit/9db90e825e929187a0f9c2347f5380c038243dd4))

## [4.1.1](https://github.com/googleapis/nodejs-dataproc/compare/v4.1.0...v4.1.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#631](https://github.com/googleapis/nodejs-dataproc/issues/631)) ([98d9256](https://github.com/googleapis/nodejs-dataproc/commit/98d925692bcafbf8cf03c69964d7ee2022b900a3))
* update JS and TS protos ([858535d](https://github.com/googleapis/nodejs-dataproc/commit/858535d50cf503168d3017aa5af4f960a4687db0))
* Update JS and TS protos ([#635](https://github.com/googleapis/nodejs-dataproc/issues/635)) ([858535d](https://github.com/googleapis/nodejs-dataproc/commit/858535d50cf503168d3017aa5af4f960a4687db0))

## [4.1.0](https://github.com/googleapis/nodejs-dataproc/compare/v4.0.1...v4.1.0) (2022-09-22)


### Features

* Add support for Dataproc metric configuration ([#626](https://github.com/googleapis/nodejs-dataproc/issues/626)) ([79a4958](https://github.com/googleapis/nodejs-dataproc/commit/79a495881e472f2d48ae2fab7afacc83db580d16))
* Support regapic LRO ([350626e](https://github.com/googleapis/nodejs-dataproc/commit/350626e47ae672496236c3f760a1a544092284fe))


### Bug Fixes

* Allow passing gax instance to client constructor ([#612](https://github.com/googleapis/nodejs-dataproc/issues/612)) ([caba80a](https://github.com/googleapis/nodejs-dataproc/commit/caba80afbaf2347d6709162d5188aee89f184950))
* **deps:** Do not depend on protobufjs ([#607](https://github.com/googleapis/nodejs-dataproc/issues/607)) ([4b62ef6](https://github.com/googleapis/nodejs-dataproc/commit/4b62ef60af6e78923472327787118f9333927b77))
* **deps:** Roll back dependency @google-cloud/dataproc to ^4.0.0 ([#627](https://github.com/googleapis/nodejs-dataproc/issues/627)) ([e1c6d8b](https://github.com/googleapis/nodejs-dataproc/commit/e1c6d8bfdf766f857398520fdf9fd3b9d9ca0028))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-dataproc/issues/1553)) ([#617](https://github.com/googleapis/nodejs-dataproc/issues/617)) ([2e2bea1](https://github.com/googleapis/nodejs-dataproc/commit/2e2bea14de632a57445d6a363cea00d0e411aa59))
* Preserve default values in x-goog-request-params header ([#620](https://github.com/googleapis/nodejs-dataproc/issues/620)) ([484a023](https://github.com/googleapis/nodejs-dataproc/commit/484a023501c573a6bed4d6f6bd624c6569e6c9ed))

## [4.0.1](https://github.com/googleapis/nodejs-dataproc/compare/v4.0.0...v4.0.1) (2022-06-20)


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v6 ([#592](https://github.com/googleapis/nodejs-dataproc/issues/592)) ([54ffbec](https://github.com/googleapis/nodejs-dataproc/commit/54ffbec48e0ae5c07cf2cedc1231cbffcb673e93))
* fixes for dynamic routing and streaming descriptors ([#591](https://github.com/googleapis/nodejs-dataproc/issues/591)) ([3d1dc28](https://github.com/googleapis/nodejs-dataproc/commit/3d1dc2820924bfdc97d24c509b967b0e55aca962))

## [4.0.0](https://github.com/googleapis/nodejs-dataproc/compare/v3.2.0...v4.0.0) (2022-05-13)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#589)
* add support for Virtual Dataproc cluster running on GKE cluster (#570)

### Features

* add new Dataproc features: - Spark runtime versioning for Spark batches - custom image containers for Spark batches - auto-diagnostic of failed Spark batches - Local SSD NVME interface support for GCE clusters ([c433b6b](https://github.com/googleapis/nodejs-dataproc/commit/c433b6ba90fc28f68677f0f7426ff2af8b43bd01))
* add support for Virtual Dataproc cluster running on GKE cluster ([#570](https://github.com/googleapis/nodejs-dataproc/issues/570)) ([e9b061c](https://github.com/googleapis/nodejs-dataproc/commit/e9b061c68dc30db6f8613e7d3bafafb369243297))


### Bug Fixes

* Move yarn_config into a oneof ([c0f4df6](https://github.com/googleapis/nodejs-dataproc/commit/c0f4df6a5762c6918a6d6bf2bc9c14d8bf3bf7b2))


### Build System

* update library to use Node 12 ([#589](https://github.com/googleapis/nodejs-dataproc/issues/589)) ([3ef332c](https://github.com/googleapis/nodejs-dataproc/commit/3ef332c1c1713f6278b1190558a907a0ee55c737))

## [3.2.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v3.1.0...v3.2.0) (2021-10-19)


### Features

* Add support for dataproc BatchController service ([#546](https://www.github.com/googleapis/nodejs-dataproc/issues/546)) ([cfc0eeb](https://www.github.com/googleapis/nodejs-dataproc/commit/cfc0eeba2e614b271aae246acde8200f080a6ccb))

## [3.1.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v3.0.0...v3.1.0) (2021-10-13)


### Features

* add Dataproc Serverless for Spark Batches API ([#543](https://www.github.com/googleapis/nodejs-dataproc/issues/543)) ([012b56f](https://www.github.com/googleapis/nodejs-dataproc/commit/012b56fd656b22fe555c9edafbfb9a8f20c91358))

## [3.0.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.5.0...v3.0.0) (2021-09-30)


### ⚠ BREAKING CHANGES

* remove deprecated v1beta2 API (#532)

### Code Refactoring

* remove deprecated v1beta2 API ([#532](https://www.github.com/googleapis/nodejs-dataproc/issues/532)) ([2a7cd97](https://www.github.com/googleapis/nodejs-dataproc/commit/2a7cd976724874083ccc2966bcf4b28dca7cb705))

## [2.5.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.4.4...v2.5.0) (2021-09-07)


### Features

* remove v1beta2 API surface ([#530](https://www.github.com/googleapis/nodejs-dataproc/issues/530)) ([95592f2](https://www.github.com/googleapis/nodejs-dataproc/commit/95592f29584aa4b421e447f8bbdedaf9896371d1))
* turns on self-signed JWT feature flag ([#525](https://www.github.com/googleapis/nodejs-dataproc/issues/525)) ([e4251d8](https://www.github.com/googleapis/nodejs-dataproc/commit/e4251d8160d4dac847d0c65832685288cbf216ce))

### [2.4.4](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.4.3...v2.4.4) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#523](https://www.github.com/googleapis/nodejs-dataproc/issues/523)) ([42b4163](https://www.github.com/googleapis/nodejs-dataproc/commit/42b4163483409a29740878f95cabf2ce617bfa86))
* **deps:** google-gax v2.24.1 ([#524](https://www.github.com/googleapis/nodejs-dataproc/issues/524)) ([fa82a3a](https://www.github.com/googleapis/nodejs-dataproc/commit/fa82a3a8864de5f88ce4d28445cdc85837413ee3))
* **deps:** require google-gax v2.17.1 ([#510](https://www.github.com/googleapis/nodejs-dataproc/issues/510)) ([4706b61](https://www.github.com/googleapis/nodejs-dataproc/commit/4706b61bf928f0c6e7a2c811ff203d82da8fa2a1))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#511](https://www.github.com/googleapis/nodejs-dataproc/issues/511)) ([be8cecc](https://www.github.com/googleapis/nodejs-dataproc/commit/be8ceccc36ffa198f983b78ae7918af43d291f42))

### [2.4.3](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.4.2...v2.4.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#508](https://www.github.com/googleapis/nodejs-dataproc/issues/508)) ([e03b476](https://www.github.com/googleapis/nodejs-dataproc/commit/e03b47670de476c14a48b99cbb8c0dcd2c0c813c))
* make request optional in all cases ([#504](https://www.github.com/googleapis/nodejs-dataproc/issues/504)) ([c14a8a8](https://www.github.com/googleapis/nodejs-dataproc/commit/c14a8a8dc6d672cc05b23cf255486be4b865ac6e))

### [2.4.2](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.4.1...v2.4.2) (2021-05-29)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#495](https://www.github.com/googleapis/nodejs-dataproc/issues/495)) ([3dd2344](https://www.github.com/googleapis/nodejs-dataproc/commit/3dd2344349254250dcb3f0b4d5dbd452d76aecb2))

### [2.4.1](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.4.0...v2.4.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#486](https://www.github.com/googleapis/nodejs-dataproc/issues/486)) ([0e6a4a4](https://www.github.com/googleapis/nodejs-dataproc/commit/0e6a4a4f71e615c8e896cb63c6de13381a0194f0))
* use require() to load JSON protos ([#489](https://www.github.com/googleapis/nodejs-dataproc/issues/489)) ([25f5fa9](https://www.github.com/googleapis/nodejs-dataproc/commit/25f5fa91c78e78f438d7ecd988b6f662af5c74aa))

## [2.4.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.3.0...v2.4.0) (2021-04-26)


### Features

* a bundle of new features for Dataproc V1 ([#475](https://www.github.com/googleapis/nodejs-dataproc/issues/475)) ([4803be4](https://www.github.com/googleapis/nodejs-dataproc/commit/4803be4f4b63833072aa50e29e8b081c363f6dde))

## [2.3.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.2.1...v2.3.0) (2021-01-14)


### Features

* adds style enum ([5762be7](https://www.github.com/googleapis/nodejs-dataproc/commit/5762be73d0b01f5abd7e7612b1efa94fabd6bf9e))

### [2.2.1](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.2.0...v2.2.1) (2021-01-09)


### Bug Fixes

* **browser:** check for fetch on window ([64fd55c](https://www.github.com/googleapis/nodejs-dataproc/commit/64fd55c3d42281f01dbabab5d823039dc5a26416))
* do not modify options object, use defaultScopes ([#445](https://www.github.com/googleapis/nodejs-dataproc/issues/445)) ([c89bc66](https://www.github.com/googleapis/nodejs-dataproc/commit/c89bc662bd8387c82581a02026be5a6d6a40f5af))

## [2.2.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.1.1...v2.2.0) (2020-07-31)


### Features

* Additional fields for the `ClusterConfig` and `InstanceGroupConfig, update protos ([#417](https://www.github.com/googleapis/nodejs-dataproc/issues/417)) ([4217e18](https://www.github.com/googleapis/nodejs-dataproc/commit/4217e181d1dfd5df7d10e4a0c7735b66d328b072))

### [2.1.1](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.1.0...v2.1.1) (2020-07-24)


### Bug Fixes

* LRO annotations for method `DiagnoseCluster`. ([#409](https://www.github.com/googleapis/nodejs-dataproc/issues/409)) ([68336ef](https://www.github.com/googleapis/nodejs-dataproc/commit/68336ef6f1d2026ac393f7d63dcd882e2c1070d5))

## [2.1.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#388](https://www.github.com/googleapis/nodejs-dataproc/issues/388)) ([e66a465](https://www.github.com/googleapis/nodejs-dataproc/commit/e66a4653f52f29211177c8f5c68b1f3d1be74de5))


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v5 ([#380](https://www.github.com/googleapis/nodejs-dataproc/issues/380)) ([6f5a2a4](https://www.github.com/googleapis/nodejs-dataproc/commit/6f5a2a4de59410837f7bfeec525d7492dda01dd7))
* proper fallback option handling ([143ec68](https://www.github.com/googleapis/nodejs-dataproc/commit/143ec68253dbec99af755191688f93867832c3d3))

## [2.0.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.6.0...v2.0.0) (2020-05-09)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* convert dataproc to typescript (#310)

### Features

* add long running operation client ([#355](https://www.github.com/googleapis/nodejs-dataproc/issues/355)) ([74e0c24](https://www.github.com/googleapis/nodejs-dataproc/commit/74e0c24d1a90b661c589393a5f39eb2be749aa92))
* adding sample for instantiate inline workflow template ([#335](https://www.github.com/googleapis/nodejs-dataproc/issues/335)) ([ecbcc45](https://www.github.com/googleapis/nodejs-dataproc/commit/ecbcc4590a5a92e9ca2c67837dd86523b537617a))
* AutoscalingPolicy now marked as required field ([ac7ee82](https://www.github.com/googleapis/nodejs-dataproc/commit/ac7ee8243ad53964b9b9a2e99fe6068fb308e577))
* check status of long running operation by its name ([#372](https://www.github.com/googleapis/nodejs-dataproc/issues/372)) ([6f22a66](https://www.github.com/googleapis/nodejs-dataproc/commit/6f22a66a6f73a758b59d26ced9985530ecc392a9))
* convert dataproc to typescript ([#310](https://www.github.com/googleapis/nodejs-dataproc/issues/310)) ([2c1841e](https://www.github.com/googleapis/nodejs-dataproc/commit/2c1841ec1b93c83ffd033de0dea0910dceab4488))
* deferred client initialization ([#323](https://www.github.com/googleapis/nodejs-dataproc/issues/323)) ([3fb48d3](https://www.github.com/googleapis/nodejs-dataproc/commit/3fb48d37715cdcfc16c09ff54bd5326b56ab40ab))
* drop node8 support, support for async iterators ([#339](https://www.github.com/googleapis/nodejs-dataproc/issues/339)) ([e3650c5](https://www.github.com/googleapis/nodejs-dataproc/commit/e3650c55f4e57c65e01ff00649cf5592f72de88f))


### Bug Fixes

* dataproc v1 AutoscalingPolicy annotation ([943585d](https://www.github.com/googleapis/nodejs-dataproc/commit/943585d1d5fd9d1126dc2af7e9f7b769ef57fb38)), closes [#306](https://www.github.com/googleapis/nodejs-dataproc/issues/306) [#303](https://www.github.com/googleapis/nodejs-dataproc/issues/303) [#305](https://www.github.com/googleapis/nodejs-dataproc/issues/305)
* export explicit version from protos.js ([#345](https://www.github.com/googleapis/nodejs-dataproc/issues/345)) ([07aed37](https://www.github.com/googleapis/nodejs-dataproc/commit/07aed377977fdb32271ad0a6aa80a33cfe463fc5))
* reformat samples with sample-metadata ([#343](https://www.github.com/googleapis/nodejs-dataproc/issues/343)) ([97fdcf4](https://www.github.com/googleapis/nodejs-dataproc/commit/97fdcf44728771cb9b25b6d75b02c1025a91a98c))
* remove eslint, update gax, fix generated protos, run the generator ([#350](https://www.github.com/googleapis/nodejs-dataproc/issues/350)) ([8546b3c](https://www.github.com/googleapis/nodejs-dataproc/commit/8546b3c960a1724a07fc861e90c72543972ddbc2))
* support request params {key} with no =value  ([#366](https://www.github.com/googleapis/nodejs-dataproc/issues/366)) ([26c1795](https://www.github.com/googleapis/nodejs-dataproc/commit/26c179588ecc157521252307e1186ad94d36f81c))
* synth.py clean up for multiple version ([#373](https://www.github.com/googleapis/nodejs-dataproc/issues/373)) ([7515b85](https://www.github.com/googleapis/nodejs-dataproc/commit/7515b856833fdde69ca454ccdad02c1188fe0134))

## [1.6.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.5.0...v1.6.0) (2020-02-10)


### Features

* AutoscalingPolicyServiceClient added ([82d983a](https://www.github.com/googleapis/nodejs-dataproc/commit/82d983a564a3e1af87de32d9f07f46790152f76d))
* bump release level to GA ([#304](https://www.github.com/googleapis/nodejs-dataproc/issues/304)) ([4d9edd1](https://www.github.com/googleapis/nodejs-dataproc/commit/4d9edd19bfef9cf0cbed7ae8864252e2247bc853))

## [1.6.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.5.0...v1.6.0) (2020-02-10)


### Features

* AutoscalingPolicyServiceClient added ([82d983a](https://www.github.com/googleapis/nodejs-dataproc/commit/82d983a564a3e1af87de32d9f07f46790152f76d))
* bump release level to GA ([#304](https://www.github.com/googleapis/nodejs-dataproc/issues/304)) ([4d9edd1](https://www.github.com/googleapis/nodejs-dataproc/commit/4d9edd19bfef9cf0cbed7ae8864252e2247bc853))

## [1.5.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.7...v1.5.0) (2020-02-04)


### Features

* added cli functionality to dataproc quickstart sample ([#291](https://www.github.com/googleapis/nodejs-dataproc/issues/291)) ([44df468](https://www.github.com/googleapis/nodejs-dataproc/commit/44df4684b65df598f7fba6337e6275e419589170))

### [1.4.7](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.6...v1.4.7) (2020-01-28)


### Bug Fixes

* proto annotations, broken link in docs, enum types in protos.d.ts ([#290](https://www.github.com/googleapis/nodejs-dataproc/issues/290)) ([0565df1](https://www.github.com/googleapis/nodejs-dataproc/commit/0565df116157c7daf99fd1aedc950cbe16dbcf2d))

### [1.4.6](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.5...v1.4.6) (2020-01-15)


### Bug Fixes

* removed 'readme' from synthtool exclusions ([0e42471](https://www.github.com/googleapis/nodejs-dataproc/commit/0e4247174da5bf77aa35c829453d6e3953826de8))

### [1.4.5](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.4...v1.4.5) (2020-01-06)


### Bug Fixes

* overhauled quickstart ([#280](https://www.github.com/googleapis/nodejs-dataproc/issues/280)) ([6d2fb1e](https://www.github.com/googleapis/nodejs-dataproc/commit/6d2fb1ea4bf3bced3ca7a91300e65d343c18a678))

### [1.4.4](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.3...v1.4.4) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([41afb13](https://www.github.com/googleapis/nodejs-dataproc/commit/41afb131ebc57172b8220e1586e43d8f0ec8b60a))

### [1.4.3](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.2...v1.4.3) (2019-11-18)


### Bug Fixes

* change dataproc success message and test ([#269](https://www.github.com/googleapis/nodejs-dataproc/issues/269)) ([9373c41](https://www.github.com/googleapis/nodejs-dataproc/commit/9373c416d865a9a0f4267a2699f3bf395e2e93e1))
* **deps:** update dependency yargs to v15 ([#271](https://www.github.com/googleapis/nodejs-dataproc/issues/271)) ([929fba4](https://www.github.com/googleapis/nodejs-dataproc/commit/929fba46d62d81090cfbdeb646da0b2a914b245d))

### [1.4.2](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.1...v1.4.2) (2019-11-15)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#264](https://www.github.com/googleapis/nodejs-dataproc/issues/264)) ([ee60de3](https://www.github.com/googleapis/nodejs-dataproc/commit/ee60de393169ff9df7cf3813ad27a7443b6db56c))

### [1.4.1](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.4.0...v1.4.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#261](https://www.github.com/googleapis/nodejs-dataproc/issues/261)) ([a22811c](https://www.github.com/googleapis/nodejs-dataproc/commit/a22811c5b742010b015d820588bc0c3510b08317))

## [1.4.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.3.0...v1.4.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([1684fb3](https://www.github.com/googleapis/nodejs-dataproc/commit/1684fb3))


### Features

* .d.ts for protos ([#250](https://www.github.com/googleapis/nodejs-dataproc/issues/250)) ([88950c0](https://www.github.com/googleapis/nodejs-dataproc/commit/88950c0))

## [1.3.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.2.4...v1.3.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([7e284c8](https://www.github.com/googleapis/nodejs-dataproc/commit/7e284c8))

### [1.2.4](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.2.3...v1.2.4) (2019-08-26)


### Bug Fixes

* set proper version # for x-goog-api-client ([c62b355](https://www.github.com/googleapis/nodejs-dataproc/commit/c62b355))

### [1.2.3](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.2.2...v1.2.3) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([70bd50e](https://www.github.com/googleapis/nodejs-dataproc/commit/70bd50e))

### [1.2.2](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.2.1...v1.2.2) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#230](https://www.github.com/googleapis/nodejs-dataproc/issues/230)) ([679d7fd](https://www.github.com/googleapis/nodejs-dataproc/commit/679d7fd))

### [1.2.1](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.2.0...v1.2.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#226](https://www.github.com/googleapis/nodejs-dataproc/issues/226)) ([0f99b75](https://www.github.com/googleapis/nodejs-dataproc/commit/0f99b75))

## [1.2.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.1.0...v1.2.0) (2019-06-05)


### Features

* add support for cluster components ([#221](https://www.github.com/googleapis/nodejs-dataproc/issues/221)) ([164c97b](https://www.github.com/googleapis/nodejs-dataproc/commit/164c97b))
* support apiEndpoint override in client constructor ([#224](https://www.github.com/googleapis/nodejs-dataproc/issues/224)) ([b54d170](https://www.github.com/googleapis/nodejs-dataproc/commit/b54d170))

## [1.1.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v1.0.0...v1.1.0) (2019-05-24)


### Features

* add support for autoscaling policies ([#215](https://www.github.com/googleapis/nodejs-dataproc/issues/215)) ([729831a](https://www.github.com/googleapis/nodejs-dataproc/commit/729831a))

## [1.0.0](https://www.github.com/googleapis/nodejs-dataproc/compare/v0.5.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#195)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#193](https://www.github.com/googleapis/nodejs-dataproc/issues/193)) ([16f112a](https://www.github.com/googleapis/nodejs-dataproc/commit/16f112a))
* DEADLINE_EXCEEDED is no longer retried ([9d38130](https://www.github.com/googleapis/nodejs-dataproc/commit/9d38130))
* DEADLINE_EXCEEDED retry code is idempotent ([#204](https://www.github.com/googleapis/nodejs-dataproc/issues/204)) ([e048b26](https://www.github.com/googleapis/nodejs-dataproc/commit/e048b26))
* include 'x-goog-request-params' header in requests ([#186](https://www.github.com/googleapis/nodejs-dataproc/issues/186)) ([f13ebcd](https://www.github.com/googleapis/nodejs-dataproc/commit/f13ebcd))
* **deps:** update dependency google-gax to v1 ([#203](https://www.github.com/googleapis/nodejs-dataproc/issues/203)) ([b005f75](https://www.github.com/googleapis/nodejs-dataproc/commit/b005f75))
* **docs:** fix a broken link ([#177](https://www.github.com/googleapis/nodejs-dataproc/issues/177)) ([d7b2fce](https://www.github.com/googleapis/nodejs-dataproc/commit/d7b2fce))


### Build System

* upgrade engines field to >=8.10.0 ([#195](https://www.github.com/googleapis/nodejs-dataproc/issues/195)) ([00f0f63](https://www.github.com/googleapis/nodejs-dataproc/commit/00f0f63))

## v0.5.0

03-08-2019 22:48 PST

### Features
- feat: add the v1beta2 API ([#164](https://github.com/googleapis/nodejs-dataproc/pull/164))

### New Features

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#154](https://github.com/googleapis/nodejs-dataproc/pull/154))
- fix(deps): update dependency google-gax to ^0.24.0 ([#151](https://github.com/googleapis/nodejs-dataproc/pull/151))
- fix(deps): update dependency google-gax to ^0.23.0 ([#148](https://github.com/googleapis/nodejs-dataproc/pull/148))

### Documentation
- docs: sync proto documentation changes ([#169](https://github.com/googleapis/nodejs-dataproc/pull/169))
- docs: update links in contrib guide ([#166](https://github.com/googleapis/nodejs-dataproc/pull/166))
- docs: update contributing path in README ([#160](https://github.com/googleapis/nodejs-dataproc/pull/160))
- docs: move CONTRIBUTING.md to root ([#159](https://github.com/googleapis/nodejs-dataproc/pull/159))
- docs: add lint/fix example to contributing guide ([#156](https://github.com/googleapis/nodejs-dataproc/pull/156))

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#172](https://github.com/googleapis/nodejs-dataproc/pull/172))
- chore: sync latest proto docs & kokoro publish config ([#171](https://github.com/googleapis/nodejs-dataproc/pull/171))
- build: use node10 to run samples-test, system-test etc ([#170](https://github.com/googleapis/nodejs-dataproc/pull/170))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#165](https://github.com/googleapis/nodejs-dataproc/pull/165))
- build: create docs test npm scripts ([#162](https://github.com/googleapis/nodejs-dataproc/pull/162))
- build: test using @grpc/grpc-js in CI ([#161](https://github.com/googleapis/nodejs-dataproc/pull/161))
- refactor: improve generated code style ([#158](https://github.com/googleapis/nodejs-dataproc/pull/158))
- chore(deps): update dependency eslint-config-prettier to v4 ([#153](https://github.com/googleapis/nodejs-dataproc/pull/153))
- chore: update the date in the copyright header ([#152](https://github.com/googleapis/nodejs-dataproc/pull/152))
- build: check broken links in generated docs ([#144](https://github.com/googleapis/nodejs-dataproc/pull/144))

## v0.4.0

01-07-2019 16:37 PST

### New Features
- feat: support WorkflowTemplate and gracefulDecommissionTimeout options for createCluster ([#145](https://github.com/googleapis/nodejs-dataproc/pull/145))

### Dependencies
- fix(deps): update dependency google-gax to ^0.22.0 ([#115](https://github.com/googleapis/nodejs-dataproc/pull/115))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#113](https://github.com/googleapis/nodejs-dataproc/pull/113))
- chore(deps): update dependency eslint-plugin-node to v8 ([#103](https://github.com/googleapis/nodejs-dataproc/pull/103))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#90](https://github.com/googleapis/nodejs-dataproc/pull/90))

### Documentation
- docs: update readme badges ([#126](https://github.com/googleapis/nodejs-dataproc/pull/126))
- docs(samples): updated samples code to use async await ([#120](https://github.com/googleapis/nodejs-dataproc/pull/120))

### Internal / Testing Changes
- test: add a sample test ([#143](https://github.com/googleapis/nodejs-dataproc/pull/143))
- chore(build): inject yoshi automation key ([#141](https://github.com/googleapis/nodejs-dataproc/pull/141))
- chore: update nyc and eslint configs ([#140](https://github.com/googleapis/nodejs-dataproc/pull/140))
- chore: fix publish.sh permission +x ([#139](https://github.com/googleapis/nodejs-dataproc/pull/139))
- fix(build): fix Kokoro release script ([#138](https://github.com/googleapis/nodejs-dataproc/pull/138))
- build: add Kokoro configs for autorelease ([#137](https://github.com/googleapis/nodejs-dataproc/pull/137))
- chore: always nyc report before calling codecov ([#132](https://github.com/googleapis/nodejs-dataproc/pull/132))
- chore: nyc ignore build/test by default ([#131](https://github.com/googleapis/nodejs-dataproc/pull/131))
- chore: clean up usage of prettier and eslint ([#130](https://github.com/googleapis/nodejs-dataproc/pull/130))
- chore: update license file ([#127](https://github.com/googleapis/nodejs-dataproc/pull/127))
- fix(build): fix system key decryption ([#124](https://github.com/googleapis/nodejs-dataproc/pull/124))
- chore: add a synth.metadata
- chore: update eslintignore config ([#114](https://github.com/googleapis/nodejs-dataproc/pull/114))
- chore: drop contributors from multiple places ([#112](https://github.com/googleapis/nodejs-dataproc/pull/112))
- chore: use latest npm on Windows ([#111](https://github.com/googleapis/nodejs-dataproc/pull/111))
- chore: update CircleCI config ([#110](https://github.com/googleapis/nodejs-dataproc/pull/110))
- chore: include build in eslintignore ([#107](https://github.com/googleapis/nodejs-dataproc/pull/107))
- chore: update issue templates ([#102](https://github.com/googleapis/nodejs-dataproc/pull/102))
- chore: remove old issue template ([#100](https://github.com/googleapis/nodejs-dataproc/pull/100))
- build: run tests on node11 ([#99](https://github.com/googleapis/nodejs-dataproc/pull/99))
- chores(build): do not collect sponge.xml from windows builds ([#98](https://github.com/googleapis/nodejs-dataproc/pull/98))
- chores(build): run codecov on continuous builds ([#97](https://github.com/googleapis/nodejs-dataproc/pull/97))
- chore: update new issue template ([#96](https://github.com/googleapis/nodejs-dataproc/pull/96))
- build: fix codecov uploading on Kokoro ([#93](https://github.com/googleapis/nodejs-dataproc/pull/93))
- Update kokoro config ([#91](https://github.com/googleapis/nodejs-dataproc/pull/91))
- build: prevent system/sample-test from leaking credentials

## v0.3.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x ([#38](https://github.com/googleapis/nodejs-dataproc/pull/38))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#79](https://github.com/googleapis/nodejs-dataproc/pull/79))
- Remove unused dependencies ([#76](https://github.com/googleapis/nodejs-dataproc/pull/76))
- fix(deps): update dependency google-gax to ^0.19.0 ([#66](https://github.com/googleapis/nodejs-dataproc/pull/66))
- fix(deps): update dependency google-gax to ^0.18.0 ([#56](https://github.com/googleapis/nodejs-dataproc/pull/56))
- fix: update all dependencies

### Internal / Testing Changes
- Update the kokoro config ([#86](https://github.com/googleapis/nodejs-dataproc/pull/86))
- test: remove appveyor config ([#85](https://github.com/googleapis/nodejs-dataproc/pull/85))
- Update the CI config ([#84](https://github.com/googleapis/nodejs-dataproc/pull/84))
- Enable prefer-const in the eslint config ([#82](https://github.com/googleapis/nodejs-dataproc/pull/82))
- Enable no-var in eslint ([#81](https://github.com/googleapis/nodejs-dataproc/pull/81))
- Switch to let/const ([#80](https://github.com/googleapis/nodejs-dataproc/pull/80))
- test: throw on deprecation ([#57](https://github.com/googleapis/nodejs-dataproc/pull/57))
- Update CI config ([#78](https://github.com/googleapis/nodejs-dataproc/pull/78))
- Retry npm install in CI ([#75](https://github.com/googleapis/nodejs-dataproc/pull/75))
- Update CI configuration ([#72](https://github.com/googleapis/nodejs-dataproc/pull/72))
- Update CI config ([#70](https://github.com/googleapis/nodejs-dataproc/pull/70))
- chore(deps): update dependency nyc to v13 ([#68](https://github.com/googleapis/nodejs-dataproc/pull/68))
- chore(deps): update dependency eslint-config-prettier to v3 ([#65](https://github.com/googleapis/nodejs-dataproc/pull/65))
- chore: do not use npm ci ([#64](https://github.com/googleapis/nodejs-dataproc/pull/64))
- fix: fix the system tests ([#63](https://github.com/googleapis/nodejs-dataproc/pull/63))
- chore: ignore package-lock.json ([#61](https://github.com/googleapis/nodejs-dataproc/pull/61))
- chore(deps): lock file maintenance ([#60](https://github.com/googleapis/nodejs-dataproc/pull/60))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-dataproc/pull/59))
- chore: update renovate config ([#58](https://github.com/googleapis/nodejs-dataproc/pull/58))
- Update CI config ([#55](https://github.com/googleapis/nodejs-dataproc/pull/55))
- chore: add node templates to synth.py ([#51](https://github.com/googleapis/nodejs-dataproc/pull/51))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-dataproc/pull/54))
- chore: move mocha options to mocha.opts ([#52](https://github.com/googleapis/nodejs-dataproc/pull/52))
- chore: require node 8 for samples ([#53](https://github.com/googleapis/nodejs-dataproc/pull/53))
- chore(deps): lock file maintenance ([#50](https://github.com/googleapis/nodejs-dataproc/pull/50))
- chore(deps): update dependency eslint-plugin-node to v7 ([#47](https://github.com/googleapis/nodejs-dataproc/pull/47))
- test: use strictEqual in tests ([#48](https://github.com/googleapis/nodejs-dataproc/pull/48))
- chore(deps): lock file maintenance ([#46](https://github.com/googleapis/nodejs-dataproc/pull/46))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.1 ([#45](https://github.com/googleapis/nodejs-dataproc/pull/45))
- chore(build): use `npm ci` instead of `npm install` ([#42](https://github.com/googleapis/nodejs-dataproc/pull/42))
- chore(deps): lock file maintenance ([#41](https://github.com/googleapis/nodejs-dataproc/pull/41))
- chore(deps): lock file maintenance ([#40](https://github.com/googleapis/nodejs-dataproc/pull/40))
- chore(deps): lock file maintenance ([#39](https://github.com/googleapis/nodejs-dataproc/pull/39))
- chore(deps): lock file maintenance ([#37](https://github.com/googleapis/nodejs-dataproc/pull/37))
- chore(deps): lock file maintenance ([#36](https://github.com/googleapis/nodejs-dataproc/pull/36))
- Configure Renovate ([#29](https://github.com/googleapis/nodejs-dataproc/pull/29))
- chore(package): update eslint to version 5.0.0
- feat: add a synth file, regenerate ([#35](https://github.com/googleapis/nodejs-dataproc/pull/35))
- refactor: drop repo-tool as an exec wrapper ([#34](https://github.com/googleapis/nodejs-dataproc/pull/34))
- chore: update sample lockfiles ([#33](https://github.com/googleapis/nodejs-dataproc/pull/33))
- fix: update linking for samples ([#31](https://github.com/googleapis/nodejs-dataproc/pull/31))
- chore(package): update nyc to version 12.0.2
- back off nyc
- chore: lock files maintenance ([#24](https://github.com/googleapis/nodejs-dataproc/pull/24))
- chore: the ultimate fix for repo-tools EPERM ([#23](https://github.com/googleapis/nodejs-dataproc/pull/23))
- chore: timeout for system test ([#22](https://github.com/googleapis/nodejs-dataproc/pull/22))
- chore: lock files maintenance ([#21](https://github.com/googleapis/nodejs-dataproc/pull/21))
- chore: test on node10 ([#20](https://github.com/googleapis/nodejs-dataproc/pull/20))
- chore: lock files maintenance ([#19](https://github.com/googleapis/nodejs-dataproc/pull/19))
- chore: one more workaround for repo-tools EPERM ([#18](https://github.com/googleapis/nodejs-dataproc/pull/18))
- chore: workaround for repo-tools EPERM ([#17](https://github.com/googleapis/nodejs-dataproc/pull/17))
- regen package-lock
- chore: make samples depend on the current version
- chore: make samples depend on the current version
- chore: setup nighty build in CircleCI ([#15](https://github.com/googleapis/nodejs-dataproc/pull/15))
