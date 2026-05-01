# Changelog

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.6.1...apphub-v0.7.0) (2026-05-01)


### Features

* [firestore] Add support for DML ([09cd24f](https://github.com/googleapis/google-cloud-node/commit/09cd24fcb742fa2f084c4c358a0156aac7951c26))
* Added public preview support for full-text search and geo search in Pipelines. ([228fe85](https://github.com/googleapis/google-cloud-node/commit/228fe85ad548968823bc9c99e21afceacf2638b0))
* **firestore:** Add the parent expression ([f17a791](https://github.com/googleapis/google-cloud-node/commit/f17a79153046f578bda9bbd0d2cdb9ed9371d500))
* **firestore:** Add timestamp expressions ([deeb265](https://github.com/googleapis/google-cloud-node/commit/deeb265d21751393a71224a3793adb38582f39b8))


### Bug Fixes

* Change the copyright year for files in the packages folder ([#8109](https://github.com/googleapis/google-cloud-node/issues/8109)) ([c1a03fe](https://github.com/googleapis/google-cloud-node/commit/c1a03fe604662091be283055c7d34052c64d6334))
* Do not publish the protos to npm ([#8079](https://github.com/googleapis/google-cloud-node/issues/8079)) ([816216b](https://github.com/googleapis/google-cloud-node/commit/816216bbf51afb25935cd930a0d97ed6efd6b91e))
* **firestore:** Update pipeline tests for backend changes ([e8755b5](https://github.com/googleapis/google-cloud-node/commit/e8755b5f490e6eca885804792a18119a7a822a0a))
* Refactor the parameters for timestamp expressions and fix bug for timeGranularity lowercase ([7d044d1](https://github.com/googleapis/google-cloud-node/commit/7d044d1f9d30ab0edef38d1fc07311799a3e9f91))
* Revert "fix: Do not publish the protos to npm" ([#8096](https://github.com/googleapis/google-cloud-node/issues/8096)) ([ac0fbb6](https://github.com/googleapis/google-cloud-node/commit/ac0fbb682409bb117fd54d344df10970a240772f))
* **spanner:** Type conflict between @sinonjs/fake-timers and @types/sinonjs__fake-timers ([2280f7a](https://github.com/googleapis/google-cloud-node/commit/2280f7aeab96b9911efc3673dd084e3d9f831d9b))

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.6.0...apphub-v0.6.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.5.0...apphub-v0.6.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6418](https://github.com/googleapis/google-cloud-node/issues/6418)) ([fcfb2c0](https://github.com/googleapis/google-cloud-node/commit/fcfb2c018539983a8ce32205a2ea9e99ef28e88a))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.4.1...apphub-v0.5.0) (2025-05-09)


### Features

* [apphub] add enum `Type.GLOBAL` ([#6215](https://github.com/googleapis/google-cloud-node/issues/6215)) ([5b4b0d3](https://github.com/googleapis/google-cloud-node/commit/5b4b0d3fc31b656fcbbb0661cb810b9278207ba2))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.4.0...apphub-v0.4.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6183](https://github.com/googleapis/google-cloud-node/issues/6183)) ([f91c71f](https://github.com/googleapis/google-cloud-node/commit/f91c71f71c7a08ac17a15b7bb2233cbc041ee69b))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.3.1...apphub-v0.4.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics, update templates to gax 5  ([54a73fe](https://github.com/googleapis/google-cloud-node/commit/54a73fe74eab0675c006f24d5f1e4574c44d829b))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.3.0...apphub-v0.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6011](https://github.com/googleapis/google-cloud-node/issues/6011)) ([ee865ff](https://github.com/googleapis/google-cloud-node/commit/ee865ff34a696fbd657e4cfb6cc4be2f6651f77a))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.2.0...apphub-v0.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/apphub-v0.1.0...apphub-v0.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## 0.1.0 (2024-03-13)


### Features

* Add initial files for google.cloud.apphub.v1 ([#5123](https://github.com/googleapis/google-cloud-node/issues/5123)) ([6bf58f9](https://github.com/googleapis/google-cloud-node/commit/6bf58f91aff3ed22a9bf3b0abe895baeb9ac4f8d))
