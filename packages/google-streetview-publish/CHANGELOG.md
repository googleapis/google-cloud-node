# Changelog

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.4.1...streetview-publish-v0.5.0) (2026-05-01)


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

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.4.0...streetview-publish-v0.4.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.3.0...streetview-publish-v0.4.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6426](https://github.com/googleapis/google-cloud-node/issues/6426)) ([6ea5464](https://github.com/googleapis/google-cloud-node/commit/6ea54642532d9797ea87d7cd01c9fac77f9eb035))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.2.1...streetview-publish-v0.3.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6306](https://github.com/googleapis/google-cloud-node/issues/6306)) ([4f02ceb](https://github.com/googleapis/google-cloud-node/commit/4f02ceb7aac05b47b68e3c7c95aeeaa20ac33606))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.2.0...streetview-publish-v0.2.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6191](https://github.com/googleapis/google-cloud-node/issues/6191)) ([c9adc61](https://github.com/googleapis/google-cloud-node/commit/c9adc6150ad09630854554c2ed7e558fb3e04315))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/streetview-publish-v0.1.0...streetview-publish-v0.2.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [storagetransfer,publish,grafeas] add request/response debug logging to gapics ([a8819af](https://github.com/googleapis/google-cloud-node/commit/a8819af1314602e905ef8e582c20b505c466003b))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## 0.1.0 (2024-06-03)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.streetview.publish.v1 ([#5396](https://github.com/googleapis/google-cloud-node/issues/5396)) ([3a97743](https://github.com/googleapis/google-cloud-node/commit/3a9774328aeebdc48ac718cdac5adcead0ed8312))
