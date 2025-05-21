# Changelog

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/run-v2.0.1...run-v2.1.0) (2025-05-20)


### Features

* [run] support GPU zonal redundancy setting in Cloud Run services ([#6349](https://github.com/googleapis/google-cloud-node/issues/6349)) ([350da9c](https://github.com/googleapis/google-cloud-node/commit/350da9c145847f9aa376653b94e6aa7e0fcdd2cd))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/run-v2.0.0...run-v2.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6188](https://github.com/googleapis/google-cloud-node/issues/6188)) ([a73cdbf](https://github.com/googleapis/google-cloud-node/commit/a73cdbfe33d5ba9952f0c87cb9d5d12ee8753dd2))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.5.1...run-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([b99c5f8](https://github.com/googleapis/google-cloud-node/commit/b99c5f8269a8401c72e9c913971c7e90467209e2))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.5.1](https://github.com/googleapis/google-cloud-node/compare/run-v1.5.0...run-v1.5.1) (2025-02-12)


### Bug Fixes

* [run] finalize fixing typings for headers in generator ([#6016](https://github.com/googleapis/google-cloud-node/issues/6016)) ([34bda26](https://github.com/googleapis/google-cloud-node/commit/34bda26d89163c60fdb602b6e81bd8c263148709))

## [1.5.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.4.0...run-v1.5.0) (2024-11-21)


### Features

* [run]support manual instance count in Cloud Run for manual scaling feature ([#5821](https://github.com/googleapis/google-cloud-node/issues/5821)) ([a1ab492](https://github.com/googleapis/google-cloud-node/commit/a1ab492a1116d08b008f9fc88751972703725b02))

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.3.0...run-v1.4.0) (2024-07-22)


### Features

* [run]support update_mask in Cloud Run UpdateService ([#5532](https://github.com/googleapis/google-cloud-node/issues/5532)) ([62bc6bf](https://github.com/googleapis/google-cloud-node/commit/62bc6bf8546f247e346ca364560c130bfa0da0f1))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.2.0...run-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.1.0...run-v1.2.0) (2024-04-05)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5190](https://github.com/googleapis/google-cloud-node/issues/5190)) ([b569fbe](https://github.com/googleapis/google-cloud-node/commit/b569fbe1472d0fd71c1bfb58d0b1661814ac5727))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/run-v1.0.2...run-v1.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5027](https://github.com/googleapis/google-cloud-node/issues/5027)) ([88763bb](https://github.com/googleapis/google-cloud-node/commit/88763bb1b7ce9ff884b9e3f476230d38985b2ff2))

## [1.0.2](https://github.com/googleapis/google-cloud-node/compare/run-v1.0.1...run-v1.0.2) (2023-10-18)


### Bug Fixes

* [run] Removes accidentally exposed field service.traffic_tags_cleanup_threshold in Cloud Run Service ([#4697](https://github.com/googleapis/google-cloud-node/issues/4697)) ([e63c060](https://github.com/googleapis/google-cloud-node/commit/e63c0606dab89366c35352f521b5e4e2cee6ffe8))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/run-v1.0.0...run-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/run-v0.6.0...run-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4463](https://github.com/googleapis/google-cloud-node/issues/4463)) ([64109b0](https://github.com/googleapis/google-cloud-node/commit/64109b007521c418cefe09c18a92cc6eaef0932c))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/run-v0.5.0...run-v0.6.0) (2023-07-11)


### Features

* [run] Adds support for custom audiences ([#4400](https://github.com/googleapis/google-cloud-node/issues/4400)) ([453410c](https://github.com/googleapis/google-cloud-node/commit/453410c2441d9f82d931ba78b9cedf428459dcf5))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/run-v0.4.2...run-v0.5.0) (2023-05-04)


### Features

* [run] Adds support for Startup CPU Boost (GA) ([#4220](https://github.com/googleapis/google-cloud-node/issues/4220)) ([b1b4e29](https://github.com/googleapis/google-cloud-node/commit/b1b4e29f09759a8161c4e26473333ec729fa5165))

## [0.4.2](https://github.com/googleapis/google-cloud-node/compare/run-v0.4.1...run-v0.4.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/run-v0.4.0...run-v0.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3989](https://github.com/googleapis/google-cloud-node/issues/3989)) ([95399f7](https://github.com/googleapis/google-cloud-node/commit/95399f731547b06cde5ed0914d89c59fdc9fd968))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/run-v0.3.0...run-v0.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))
* Adding support for encryption_key_revocation_action and encryption_key_shutdown_duration for RevisionTemplate and ExecutionTemplate ([#3874](https://github.com/googleapis/google-cloud-node/issues/3874)) ([4693692](https://github.com/googleapis/google-cloud-node/commit/4693692a0271966bb29e94c6c7659fd89cbe7b33))

## [0.3.0](https://github.com/googleapis/nodejs-run/compare/v0.2.3...v0.3.0) (2023-01-06)


### Features

* Adds Cloud Run Jobs v2 API client libraries ([d2f1501](https://github.com/googleapis/nodejs-run/commit/d2f1501ca9bc842924cf13b6f2bd4e7d8d36b0ea))
* Adds gRPC probe support to Cloud Run v2 API client libraries ([d2f1501](https://github.com/googleapis/nodejs-run/commit/d2f1501ca9bc842924cf13b6f2bd4e7d8d36b0ea))
* Adds Startup and Liveness probes to Cloud Run v2 API client libraries ([d2f1501](https://github.com/googleapis/nodejs-run/commit/d2f1501ca9bc842924cf13b6f2bd4e7d8d36b0ea))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#33](https://github.com/googleapis/nodejs-run/issues/33)) ([c6eef9a](https://github.com/googleapis/nodejs-run/commit/c6eef9ac1ef26eb966535a490fa5585fe0748f6e))
* Regenerated protos JS and TS definitions ([#37](https://github.com/googleapis/nodejs-run/issues/37)) ([2f1d253](https://github.com/googleapis/nodejs-run/commit/2f1d25341172c844a5d9203bdafaf5ef49603282))

## [0.2.3](https://github.com/googleapis/nodejs-run/compare/v0.2.2...v0.2.3) (2022-09-14)


### Bug Fixes

* Allow passing gax instance to client constructor ([#24](https://github.com/googleapis/nodejs-run/issues/24)) ([91e2ac5](https://github.com/googleapis/nodejs-run/commit/91e2ac501ccca33172181831a46b0f4e43b34a8d))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-run/issues/1553)) ([#23](https://github.com/googleapis/nodejs-run/issues/23)) ([acda49f](https://github.com/googleapis/nodejs-run/commit/acda49f96c44771c1576f19bdcfb9945d6bffb86))
* Preserve default values in x-goog-request-params header ([#26](https://github.com/googleapis/nodejs-run/issues/26)) ([debc1eb](https://github.com/googleapis/nodejs-run/commit/debc1eb94c06bf38af391dc7574691444fe2ed93))
* use google-gax v3.3.0 ([acda49f](https://github.com/googleapis/nodejs-run/commit/acda49f96c44771c1576f19bdcfb9945d6bffb86))

## [0.2.2](https://github.com/googleapis/nodejs-run/compare/v0.2.1...v0.2.2) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#19](https://github.com/googleapis/nodejs-run/issues/19)) ([83e8ce5](https://github.com/googleapis/nodejs-run/commit/83e8ce58950e0a7eaedede16e53575497833331b))
* change import long to require ([#20](https://github.com/googleapis/nodejs-run/issues/20)) ([5609e28](https://github.com/googleapis/nodejs-run/commit/5609e285e3ad19054466c2299e76896ef7cd70db))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-run/issues/1546)) ([#22](https://github.com/googleapis/nodejs-run/issues/22)) ([779e287](https://github.com/googleapis/nodejs-run/commit/779e287b36fa55e0d9bab843c34ef99719a6fa8e))

## [0.2.1](https://github.com/googleapis/nodejs-run/compare/v0.2.0...v0.2.1) (2022-07-20)


### Bug Fixes

* fixes for routing headers ([#17](https://github.com/googleapis/nodejs-run/issues/17)) ([992f2e0](https://github.com/googleapis/nodejs-run/commit/992f2e026cd7bb713d30e94ca8691f81f52af6ed))

## [0.2.0](https://github.com/googleapis/nodejs-run/compare/v0.1.1...v0.2.0) (2022-07-04)


### Features

* support regapic LRO ([2d5a647](https://github.com/googleapis/nodejs-run/commit/2d5a647625f1ecd020f36e6e5e09c92a4f47f304))

## [0.1.1](https://github.com/googleapis/nodejs-run/compare/v0.1.0...v0.1.1) (2022-06-02)


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([#4](https://github.com/googleapis/nodejs-run/issues/4)) ([ba3c84a](https://github.com/googleapis/nodejs-run/commit/ba3c84a3192397bfa2a3e78f5d0a0c6d8d7ec266))

## 0.1.0 (2022-05-20)


### Features

* initial generation of library ([#1](https://github.com/googleapis/nodejs-run/issues/1)) ([2dc373a](https://github.com/googleapis/nodejs-run/commit/2dc373a5a086516409e3bf8f380e28dd4445e94e))
* initial stub of library ([b283d51](https://github.com/googleapis/nodejs-run/commit/b283d517035073ec0211bee87555c837f5e48a19))
