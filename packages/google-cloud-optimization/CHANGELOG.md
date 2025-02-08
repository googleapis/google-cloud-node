# Changelog

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.4.0...optimization-v3.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.3.0...optimization-v3.4.0) (2024-04-05)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5190](https://github.com/googleapis/google-cloud-node/issues/5190)) ([b569fbe](https://github.com/googleapis/google-cloud-node/commit/b569fbe1472d0fd71c1bfb58d0b1661814ac5727))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.2.0...optimization-v3.3.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.1.0...optimization-v3.2.0) (2023-10-18)


### Features

* [optimization] added the route modifiers ([#4737](https://github.com/googleapis/google-cloud-node/issues/4737)) ([58506db](https://github.com/googleapis/google-cloud-node/commit/58506dbc77a118a1d9fb78511822b7fa6bb4c57d))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.0.1...optimization-v3.1.0) (2023-09-08)


### Features

* [optimization] added support for walking mode and cost_per_kilometer_below_soft_max ([#4620](https://github.com/googleapis/google-cloud-node/issues/4620)) ([083c352](https://github.com/googleapis/google-cloud-node/commit/083c3528fb32cc692df4c33cfbba3d2cca371e59))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/optimization-v3.0.0...optimization-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v2.2.2...optimization-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/optimization-v2.2.1...optimization-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/optimization-v2.2.0...optimization-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/optimization-v2.1.1...optimization-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))

## [2.1.1](https://github.com/googleapis/nodejs-cloud-optimization/compare/v2.1.0...v2.1.1) (2022-11-11)


### Bug Fixes

* Better support for fallback mode ([#30](https://github.com/googleapis/nodejs-cloud-optimization/issues/30)) ([05b1532](https://github.com/googleapis/nodejs-cloud-optimization/commit/05b153292444a83b39975482bc836acd8a1932c2))
* **deps:** Use google-gax v3.5.2 ([#46](https://github.com/googleapis/nodejs-cloud-optimization/issues/46)) ([6c3dda7](https://github.com/googleapis/nodejs-cloud-optimization/commit/6c3dda7ac623dd6079c49520b69de92989323744))
* Preserve default values in x-goog-request-params header ([#35](https://github.com/googleapis/nodejs-cloud-optimization/issues/35)) ([7108aba](https://github.com/googleapis/nodejs-cloud-optimization/commit/7108abaa353591fcddef959dbe1d3e89a8f9619b))
* Use _gaxModule when accessing gax for bundling ([#32](https://github.com/googleapis/nodejs-cloud-optimization/issues/32)) ([ae16ecb](https://github.com/googleapis/nodejs-cloud-optimization/commit/ae16ecb6b7c6202c7a5c705ca11e1b1a77baa027))

## [2.1.0](https://github.com/googleapis/nodejs-cloud-optimization/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#21](https://github.com/googleapis/nodejs-cloud-optimization/issues/21)) ([29c8275](https://github.com/googleapis/nodejs-cloud-optimization/commit/29c8275335cb2a4bfbb1910eb0a15731d58b70cf))

## [2.0.0](https://github.com/googleapis/nodejs-cloud-optimization/compare/v1.0.0...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* upgrade to stable (#15)
* update library to use Node 12 (#14)

### Features

* upgrade to stable ([#15](https://github.com/googleapis/nodejs-cloud-optimization/issues/15)) ([e376320](https://github.com/googleapis/nodejs-cloud-optimization/commit/e376320d27e03c169143aa248bb77979a78cd21f))


### Build System

* update library to use Node 12 ([#14](https://github.com/googleapis/nodejs-cloud-optimization/issues/14)) ([1cf73c3](https://github.com/googleapis/nodejs-cloud-optimization/commit/1cf73c3bf6b5ad78cf2851686d4ee84315d8f107))

## 1.0.0 (2022-04-21)


### Features

* add templated files from docker image ([ff4111a](https://github.com/googleapis/nodejs-cloud-optimization/commit/ff4111a94f59bbafdbe09b29f143ca4d816e3e43))
* add tests and samples to library ([#1](https://github.com/googleapis/nodejs-cloud-optimization/issues/1)) ([e272a2e](https://github.com/googleapis/nodejs-cloud-optimization/commit/e272a2e3a8e2bf5eaa71659ddebbebb4e63a307d))
* initial stub of library ([1485722](https://github.com/googleapis/nodejs-cloud-optimization/commit/1485722e27ad53169373b710f3ecb4540f169dd2))
