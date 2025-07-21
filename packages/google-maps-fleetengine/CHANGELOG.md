# Changelog

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.7.0...fleetengine-v0.8.0) (2025-07-17)


### Features

* [fleetengine] add ability to specify trip attributes to Trip and deprecate Trip.remaining_waypoints_version ([#6481](https://github.com/googleapis/google-cloud-node/issues/6481)) ([ebf2538](https://github.com/googleapis/google-cloud-node/commit/ebf2538352a7b9bf92f100ff1cabdb9ab58e1c4d))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.6.1...fleetengine-v0.7.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6425](https://github.com/googleapis/google-cloud-node/issues/6425)) ([c920e8d](https://github.com/googleapis/google-cloud-node/commit/c920e8d0d43be81fc171bc5f7d59800b66b830b8))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.6.0...fleetengine-v0.6.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6190](https://github.com/googleapis/google-cloud-node/issues/6190)) ([f4866df](https://github.com/googleapis/google-cloud-node/commit/f4866dfa6ab481163150f54928a9857d2dfef948))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.5.0...fleetengine-v0.6.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([388b4e2](https://github.com/googleapis/google-cloud-node/commit/388b4e20329b7f6fc0dd061dddff573c45104213))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.4.0...fleetengine-v0.5.0) (2025-02-28)


### Features

* [fleetengine] A new field `past_locations` is added to message `.maps.fleetengine.delivery.v1.DeliveryVehicle` ([#6063](https://github.com/googleapis/google-cloud-node/issues/6063)) ([71505cc](https://github.com/googleapis/google-cloud-node/commit/71505cc6cb7ed23aa78e0f091e53797e90ea5aa4))
* A new field `past_locations` is added to message `.maps.fleetengine.v1.Vehicle` ([71505cc](https://github.com/googleapis/google-cloud-node/commit/71505cc6cb7ed23aa78e0f091e53797e90ea5aa4))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.3.0...fleetengine-v0.4.0) (2025-01-16)


### Features

* [fleetengine] Promote network_configs field to v2 API ([#5943](https://github.com/googleapis/google-cloud-node/issues/5943)) ([b151be6](https://github.com/googleapis/google-cloud-node/commit/b151be67e310998e5665d6d353cbef574d42f485))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.2.0...fleetengine-v0.3.0) (2025-01-11)


### Features

* [fleetengine] add active_only field to ListMetricDescriptorsRequest ([#5938](https://github.com/googleapis/google-cloud-node/issues/5938)) ([f9b684e](https://github.com/googleapis/google-cloud-node/commit/f9b684e096530a5e92c69402bbda9128006776fa))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/fleetengine-v0.1.0...fleetengine-v0.2.0) (2024-10-10)


### Features

* Add partner_model_tuning_spec to TuningJob ([#5721](https://github.com/googleapis/google-cloud-node/issues/5721)) ([cec22ab](https://github.com/googleapis/google-cloud-node/commit/cec22abd4f27d8acf3c7c1d87b2bd6873e505841))

## 0.1.0 (2024-06-03)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.maps.fleetengine.v1 ([#5251](https://github.com/googleapis/google-cloud-node/issues/5251)) ([50cd4b8](https://github.com/googleapis/google-cloud-node/commit/50cd4b851c9a14788a292cd27d4abb8b317091ec))
