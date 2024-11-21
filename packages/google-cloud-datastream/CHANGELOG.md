# Changelog

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v3.2.0...datastream-v3.3.0) (2024-11-21)


### Features

* [datastream] A new method `RunStream` is added to service `Datastream` ([#5834](https://github.com/googleapis/google-cloud-node/issues/5834)) ([ca4db62](https://github.com/googleapis/google-cloud-node/commit/ca4db6283b23e8f99bdffb0ed4ea76005ee62f9e))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v3.1.0...datastream-v3.2.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v3.0.1...datastream-v3.1.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/datastream-v3.0.0...datastream-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.4.0...datastream-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.3.0...datastream-v2.4.0) (2023-07-24)


### Features

* [datastream] Add precision and scale to MysqlColumn ([#4441](https://github.com/googleapis/google-cloud-node/issues/4441)) ([8c33c07](https://github.com/googleapis/google-cloud-node/commit/8c33c07ea55a99cc4129e905247271acc08ca884))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.2.2...datastream-v2.3.0) (2023-05-20)


### Features

* [datastream] Max concurrent backfill tasks ([#4254](https://github.com/googleapis/google-cloud-node/issues/4254)) ([f2c4a78](https://github.com/googleapis/google-cloud-node/commit/f2c4a78cb8929ea10713f5fa043cbe30df378287))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.2.1...datastream-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.2.0...datastream-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/datastream-v2.1.2...datastream-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.1.2](https://github.com/googleapis/nodejs-datastream/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#71](https://github.com/googleapis/nodejs-datastream/issues/71)) ([bf11be5](https://github.com/googleapis/nodejs-datastream/commit/bf11be5263887efbe7b56d6fba9cf3aa1659e371))
* Preserve default values in x-goog-request-params header ([#64](https://github.com/googleapis/nodejs-datastream/issues/64)) ([eaf97d2](https://github.com/googleapis/nodejs-datastream/commit/eaf97d247a4185e9cdc7402daefc7089b85d0bb3))
* Regenerated protos JS and TS definitions ([#74](https://github.com/googleapis/nodejs-datastream/issues/74)) ([7b9da59](https://github.com/googleapis/nodejs-datastream/commit/7b9da59897e185dd007a31b806c06ed13dba18aa))

## [2.1.1](https://github.com/googleapis/nodejs-datastream/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#62](https://github.com/googleapis/nodejs-datastream/issues/62)) ([376a621](https://github.com/googleapis/nodejs-datastream/commit/376a621015a9fec4eab36f346a81d92a961eecce))
* Better support for fallback mode ([#58](https://github.com/googleapis/nodejs-datastream/issues/58)) ([cf25122](https://github.com/googleapis/nodejs-datastream/commit/cf251221dd72edf71039400444b59837fe84909a))
* Change import long to require ([#59](https://github.com/googleapis/nodejs-datastream/issues/59)) ([f32dd36](https://github.com/googleapis/nodejs-datastream/commit/f32dd36297cc9cf60c7e7bd3c937dd13748a163d))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-datastream/issues/1553)) ([#63](https://github.com/googleapis/nodejs-datastream/issues/63)) ([2b7712a](https://github.com/googleapis/nodejs-datastream/commit/2b7712a5480d69f0679654ed1fa12fee269d0cff))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-datastream/issues/1546)) ([#61](https://github.com/googleapis/nodejs-datastream/issues/61)) ([da04858](https://github.com/googleapis/nodejs-datastream/commit/da04858bec326541248d306c91cb70ff8c6c119c))

## [2.1.0](https://github.com/googleapis/nodejs-datastream/compare/v2.0.0...v2.1.0) (2022-07-12)


### Features

* support regapic LRO ([#53](https://github.com/googleapis/nodejs-datastream/issues/53)) ([f607aad](https://github.com/googleapis/nodejs-datastream/commit/f607aad43c652a05bdd4a27ae008ef65e170d366))

## [2.0.0](https://github.com/googleapis/nodejs-datastream/compare/v1.1.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#48)

### Build System

* update library to use Node 12 ([#48](https://github.com/googleapis/nodejs-datastream/issues/48)) ([0ba2aaf](https://github.com/googleapis/nodejs-datastream/commit/0ba2aafed08462fb04fe711282af8b35be0da21e))

## [1.1.0](https://github.com/googleapis/nodejs-datastream/compare/v1.0.0...v1.1.0) (2022-03-24)


### Features

* promote to stable ([#35](https://github.com/googleapis/nodejs-datastream/issues/35)) ([073f3af](https://github.com/googleapis/nodejs-datastream/commit/073f3af9301ff197dddd5450cea94d9346ea0e18))

## [1.0.0](https://github.com/googleapis/nodejs-datastream/compare/v0.2.0...v1.0.0) (2022-02-18)


### ⚠ BREAKING CHANGES

* Adding public Datastream client based on v1 API version: https://cloud.google.com/datastream/docs (#26)

### Features

* Adding public Datastream client based on v1 API version: https://cloud.google.com/datastream/docs ([#26](https://github.com/googleapis/nodejs-datastream/issues/26)) ([d795c6c](https://github.com/googleapis/nodejs-datastream/commit/d795c6cc12e265f435c7edb4e6dee9ccd15555fb))

## 0.2.0 (2021-10-07)


### Features

* initial library generation ([#1](https://www.github.com/googleapis/nodejs-datastream/issues/1)) ([b72e706](https://www.github.com/googleapis/nodejs-datastream/commit/b72e706878cf66d33e9384559a45c46cc6606631))
* initial stub of library ([fc5b43f](https://www.github.com/googleapis/nodejs-datastream/commit/fc5b43f42b6b37c580cd259099630d18bd48d36d))


### Miscellaneous Chores

* force minor version bump ([371ca12](https://www.github.com/googleapis/nodejs-datastream/commit/371ca1252b23623b6810505df30560be94adc7d8))
