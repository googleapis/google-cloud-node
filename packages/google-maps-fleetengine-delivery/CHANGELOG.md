# Changelog

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.6.1...fleetengine-delivery-v0.7.0) (2026-05-01)


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

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.6.0...fleetengine-delivery-v0.6.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.5.0...fleetengine-delivery-v0.6.0) (2025-07-17)


### Features

* [fleetengine-delivery] add ability to specify trip attributes to Trip and deprecate Trip.remaining_waypoints_version ([#6482](https://github.com/googleapis/google-cloud-node/issues/6482)) ([51493a7](https://github.com/googleapis/google-cloud-node/commit/51493a701fab76e1598048fc879eb1c31a3313b9))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.4.1...fleetengine-delivery-v0.5.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6425](https://github.com/googleapis/google-cloud-node/issues/6425)) ([c920e8d](https://github.com/googleapis/google-cloud-node/commit/c920e8d0d43be81fc171bc5f7d59800b66b830b8))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.4.0...fleetengine-delivery-v0.4.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6190](https://github.com/googleapis/google-cloud-node/issues/6190)) ([f4866df](https://github.com/googleapis/google-cloud-node/commit/f4866dfa6ab481163150f54928a9857d2dfef948))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.3.0...fleetengine-delivery-v0.4.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.2.0...fleetengine-delivery-v0.3.0) (2025-02-28)


### Features

* [fleetengine-delivery] A new field `past_locations` is added to message `.maps.fleetengine.delivery.v1.DeliveryVehicle` ([#6064](https://github.com/googleapis/google-cloud-node/issues/6064)) ([48190a2](https://github.com/googleapis/google-cloud-node/commit/48190a2219978f1ddf29776a40f069fc235e0476))
* [fleetengine-delivery] Added Fleet Engine Delete APIs ([#6081](https://github.com/googleapis/google-cloud-node/issues/6081)) ([07a6a9a](https://github.com/googleapis/google-cloud-node/commit/07a6a9a97c625ab8aeeccd991e45d4c8ac6abf0f))
* A new field `past_locations` is added to message `.maps.fleetengine.v1.Vehicle` ([48190a2](https://github.com/googleapis/google-cloud-node/commit/48190a2219978f1ddf29776a40f069fc235e0476))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-delivery-v0.1.0...fleetengine-delivery-v0.2.0) (2025-01-16)


### Features

* [fleetengine-delivery] Promote network_configs field to v2 API ([#5944](https://github.com/googleapis/google-cloud-node/issues/5944)) ([8577586](https://github.com/googleapis/google-cloud-node/commit/8577586e4ba05fd9099d4b580a31a30985b0611f))

## 0.1.0 (2024-06-03)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.maps.fleetengine.delivery.v1 ([#5252](https://github.com/googleapis/google-cloud-node/issues/5252)) ([1cb9152](https://github.com/googleapis/google-cloud-node/commit/1cb9152693f1e44877312f39b6be31080bc6efaa))
