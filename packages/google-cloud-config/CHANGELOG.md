# Changelog

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.9.0...config-v0.10.0) (2025-07-17)


### Features

* [infra-manager] added resource change and drift details for the preview ([#6475](https://github.com/googleapis/google-cloud-node/issues/6475)) ([c949b3f](https://github.com/googleapis/google-cloud-node/commit/c949b3f677349035c669b1052ce49f0f8a6fbf06))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.8.1...config-v0.9.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.8.1](https://github.com/googleapis/google-cloud-node/compare/config-v0.8.0...config-v0.8.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6184](https://github.com/googleapis/google-cloud-node/issues/6184)) ([2fcd202](https://github.com/googleapis/google-cloud-node/commit/2fcd2029c35e8fb2199d03ac6e61e2d821ddf72e))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.7.0...config-v0.8.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([e7409c8](https://github.com/googleapis/google-cloud-node/commit/e7409c87febcf33359a2d36ae4551f502b8a2f93))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.6.0...config-v0.7.0) (2024-12-18)


### Features

* [infra-manager] added annotations ([#5877](https://github.com/googleapis/google-cloud-node/issues/5877)) ([d65537c](https://github.com/googleapis/google-cloud-node/commit/d65537c9060f559b99b9e28f8a7f0af0e6f654a2))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.5.0...config-v0.6.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.4.0...config-v0.5.0) (2024-04-23)


### Features

* [infra-manager] Infrastructure manager supports 1.2.3, 1.3.10, 1.4.7, 1.5.7 versions of Terraform when creating a preview of a deployment ([#5277](https://github.com/googleapis/google-cloud-node/issues/5277)) ([3a5f53c](https://github.com/googleapis/google-cloud-node/commit/3a5f53c1e98875ff12d3da774c53fb81abb1b75c))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.3.0...config-v0.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.2.0...config-v0.3.0) (2024-03-26)


### Features

* [infra-manager] Infrastructure Manager supports the deployment of infrastructure from Terraform configurations in a private Git repository ([#5147](https://github.com/googleapis/google-cloud-node/issues/5147)) ([49a57d3](https://github.com/googleapis/google-cloud-node/commit/49a57d3cacc1cc96755f3fb7943e309639024c7d))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/config-v0.1.1...config-v0.2.0) (2024-01-15)


### Features

* [infra-manager] added Terraform Plan ([#4946](https://github.com/googleapis/google-cloud-node/issues/4946)) ([9c5c163](https://github.com/googleapis/google-cloud-node/commit/9c5c163714a11c4fe2484dbcbdd149ee0507f0d2))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/config-v0.1.0...config-v0.1.1) (2023-09-20)


### Bug Fixes

* [infra-manager] change the config service's Ruby namespace to avoid a collision with a base class in the Ruby client platform ([#4684](https://github.com/googleapis/google-cloud-node/issues/4684)) ([d611d3f](https://github.com/googleapis/google-cloud-node/commit/d611d3ffada146439d3badebd2b4627b0ac45376))

## 0.1.0 (2023-09-08)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* Add initial files for google.cloud.config.v1 ([#4627](https://github.com/googleapis/google-cloud-node/issues/4627)) ([04aa151](https://github.com/googleapis/google-cloud-node/commit/04aa151ecebb2ec3b9c0100d9417e6ca8266463d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))
