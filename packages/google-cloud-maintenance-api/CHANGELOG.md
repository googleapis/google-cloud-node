# Changelog

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/maintenance-api-v0.4.0...maintenance-api-v0.5.0) (2026-05-01)


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

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/maintenance-api-v0.3.0...maintenance-api-v0.4.0) (2026-01-22)


### Features

* [Many APIs] Added OUTPUT_ONLY annotations to create_time and update_time in InternalRange to reflect existing service behavior ([#7013](https://github.com/googleapis/google-cloud-node/issues/7013)) ([0dbd123](https://github.com/googleapis/google-cloud-node/commit/0dbd123f45ccc049dbc6697655cd861d1200bf07))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/maintenance-api-v0.2.0...maintenance-api-v0.3.0) (2025-12-15)


### Features

* Initial generation of library ([46ac6d1](https://github.com/googleapis/google-cloud-node/commit/46ac6d10178ff78a4771e2519b3540b322687115))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/maintenance-api-v0.1.1...maintenance-api-v0.2.0) (2025-12-09)


### Features

* [maintenance] add support for v1 version of Maintenance API ([#6925](https://github.com/googleapis/google-cloud-node/issues/6925)) ([a0c0db8](https://github.com/googleapis/google-cloud-node/commit/a0c0db8be96f32f2f3e115987664a23a1f38ae57))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/maintenance-api-v0.1.0...maintenance-api-v0.1.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## 0.1.0 (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add initial files for google.cloud.maintenance.api.v1beta ([#6441](https://github.com/googleapis/google-cloud-node/issues/6441)) ([e36659c](https://github.com/googleapis/google-cloud-node/commit/e36659cfb89be11915cb4b4c48cfc394d112b3fc))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))
