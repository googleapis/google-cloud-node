# Changelog

## [2.8.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.7.0...deploy-v2.8.0) (2023-07-11)


### Features

* [deploy] added support routeUpdateWaitTime field for Deployment Strategies ([#4408](https://github.com/googleapis/google-cloud-node/issues/4408)) ([4c2442f](https://github.com/googleapis/google-cloud-node/commit/4c2442fb3b2183d49bdd721ddc751f5b4cbcabca))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.6.0...deploy-v2.7.0) (2023-06-28)


### Features

* [deploy] Add deploy parameters for cloud deploy ([#4367](https://github.com/googleapis/google-cloud-node/issues/4367)) ([dd8b0ec](https://github.com/googleapis/google-cloud-node/commit/dd8b0ec2df1c39330e1a104de55e809d9a31a1a9))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.5.0...deploy-v2.6.0) (2023-06-06)


### Features

* [deploy] Add support for disabling Pod overprovisioning in the progressive deployment strategy configuration for a Kubernetes Target ([#4317](https://github.com/googleapis/google-cloud-node/issues/4317)) ([10bb492](https://github.com/googleapis/google-cloud-node/commit/10bb49288c297bfd04bf48b26646e3990b454e27))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.4.1...deploy-v2.5.0) (2023-05-04)


### Features

* [deploy] added support for DeployArtifacts ([#4222](https://github.com/googleapis/google-cloud-node/issues/4222)) ([840390b](https://github.com/googleapis/google-cloud-node/commit/840390b4fdad779617572db6ce54922cb894e667))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.4.0...deploy-v2.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.3.1...deploy-v2.4.0) (2023-03-28)


### Features

* [deploy] added supported for Cloud Deploy Progressive Deployment Strategy ([#4118](https://github.com/googleapis/google-cloud-node/issues/4118)) ([2965fea](https://github.com/googleapis/google-cloud-node/commit/2965feabbec63b308d7e1c36f98ba3405f879cfb))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.3.0...deploy-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.2.2...deploy-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.2.1...deploy-v2.2.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/deploy-v2.2.0...deploy-v2.2.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.2.0](https://github.com/googleapis/nodejs-deploy/compare/v2.1.2...v2.2.0) (2022-09-29)


### Features

* Publish new JobRun resource and associated methods for Google Cloud Deploy ([8183015](https://github.com/googleapis/nodejs-deploy/commit/8183015c907f932346fde8c3b6dc981a3e561efe))

## [2.1.2](https://github.com/googleapis/nodejs-deploy/compare/v2.1.1...v2.1.2) (2022-09-21)


### Bug Fixes

* Allow passing gax instance to client constructor ([#64](https://github.com/googleapis/nodejs-deploy/issues/64)) ([286143f](https://github.com/googleapis/nodejs-deploy/commit/286143f2e7aff409f57b57f58239c21fa16dc230))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-deploy/issues/1553)) ([#63](https://github.com/googleapis/nodejs-deploy/issues/63)) ([024a0e4](https://github.com/googleapis/nodejs-deploy/commit/024a0e4e4902950fc9b40bfed77f2c2ceacf2fce))
* Preserve default values in x-goog-request-params header ([#66](https://github.com/googleapis/nodejs-deploy/issues/66)) ([be84a26](https://github.com/googleapis/nodejs-deploy/commit/be84a262c1292cd804d7c3b4e0690e21ff122460))
* use google-gax v3.3.0 ([024a0e4](https://github.com/googleapis/nodejs-deploy/commit/024a0e4e4902950fc9b40bfed77f2c2ceacf2fce))

## [2.1.1](https://github.com/googleapis/nodejs-deploy/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#59](https://github.com/googleapis/nodejs-deploy/issues/59)) ([21bd8f3](https://github.com/googleapis/nodejs-deploy/commit/21bd8f318612224884e01504e949d59f9f9c5615))
* change import long to require ([#60](https://github.com/googleapis/nodejs-deploy/issues/60)) ([682372a](https://github.com/googleapis/nodejs-deploy/commit/682372af2f6758cb797743ad08ad474837024219))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-deploy/issues/1546)) ([#62](https://github.com/googleapis/nodejs-deploy/issues/62)) ([d70fc8b](https://github.com/googleapis/nodejs-deploy/commit/d70fc8b1f161cd908385001eb433fb0a1bdae561))

## [2.1.0](https://github.com/googleapis/nodejs-deploy/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#55](https://github.com/googleapis/nodejs-deploy/issues/55)) ([5c7ba12](https://github.com/googleapis/nodejs-deploy/commit/5c7ba1270c9f7b386614a1efa4ef4e752b591fda))

## [2.0.0](https://github.com/googleapis/nodejs-deploy/compare/v1.0.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#50)

### Build System

* update library to use Node 12 ([#50](https://github.com/googleapis/nodejs-deploy/issues/50)) ([a688caf](https://github.com/googleapis/nodejs-deploy/commit/a688caf817f5f760d951ad6e9570ee0f4a4c0c5f))

## [1.0.0](https://github.com/googleapis/nodejs-deploy/compare/v0.2.0...v1.0.0) (2022-03-23)


### Features

* promote to stable ([#36](https://github.com/googleapis/nodejs-deploy/issues/36)) ([00960ff](https://github.com/googleapis/nodejs-deploy/commit/00960ff75a3d40e9f4a81efb868e56642937e49f))

## 0.2.0 (2021-10-07)


### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-deploy/issues/1)) ([c22e971](https://www.github.com/googleapis/nodejs-deploy/commit/c22e9711390855c0c992d3f89ac47360c7e47daf))
* initial stub of library ([7b1cddd](https://www.github.com/googleapis/nodejs-deploy/commit/7b1cdddd39f236838bba28d70ab9b24ba66a8aa5))


### Miscellaneous Chores

* force minor version bump ([ec4abc9](https://www.github.com/googleapis/nodejs-deploy/commit/ec4abc940641181946ae5c27079c9e72b26774cf))
