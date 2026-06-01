# Changelog

## [0.6.2](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.6.1...cloudcontrolspartner-v0.6.2) (2026-05-01)


### Bug Fixes

* Change the copyright year for files in the packages folder ([#8109](https://github.com/googleapis/google-cloud-node/issues/8109)) ([c1a03fe](https://github.com/googleapis/google-cloud-node/commit/c1a03fe604662091be283055c7d34052c64d6334))
* Do not publish the protos to npm ([#8079](https://github.com/googleapis/google-cloud-node/issues/8079)) ([816216b](https://github.com/googleapis/google-cloud-node/commit/816216bbf51afb25935cd930a0d97ed6efd6b91e))
* Revert "fix: Do not publish the protos to npm" ([#8096](https://github.com/googleapis/google-cloud-node/issues/8096)) ([ac0fbb6](https://github.com/googleapis/google-cloud-node/commit/ac0fbb682409bb117fd54d344df10970a240772f))

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.6.0...cloudcontrolspartner-v0.6.1) (2025-10-13)


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.5.1...cloudcontrolspartner-v0.6.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.5.1](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.5.0...cloudcontrolspartner-v0.5.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6184](https://github.com/googleapis/google-cloud-node/issues/6184)) ([2fcd202](https://github.com/googleapis/google-cloud-node/commit/2fcd2029c35e8fb2199d03ac6e61e2d821ddf72e))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.4.0...cloudcontrolspartner-v0.5.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([e7409c8](https://github.com/googleapis/google-cloud-node/commit/e7409c87febcf33359a2d36ae4551f502b8a2f93))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.3.1...cloudcontrolspartner-v0.4.0) (2025-01-28)


### Features

* [cloudcontrolspartner] A new method `CreateCustomer` is added to service `CloudControlsPartnerCore` ([#5980](https://github.com/googleapis/google-cloud-node/issues/5980)) ([e5e13cb](https://github.com/googleapis/google-cloud-node/commit/e5e13cb8af58de2a6dc9b8735e9cae045c0b551c))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.3.0...cloudcontrolspartner-v0.3.1) (2024-09-24)


### Bug Fixes

* [cloudcontrolspartner] Field behavior for field `display_name` in message `.google.cloud.cloudcontrolspartner.v1beta.Customer` is changed ([#5679](https://github.com/googleapis/google-cloud-node/issues/5679)) ([727e997](https://github.com/googleapis/google-cloud-node/commit/727e9971f7980f0b2c6ae14b209d10678e9b857d))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.2.0...cloudcontrolspartner-v0.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/cloudcontrolspartner-v0.1.0...cloudcontrolspartner-v0.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## 0.1.0 (2024-03-07)


### Features

* [cloudcontrolspartner] added CloudControlsPartner API ([#5106](https://github.com/googleapis/google-cloud-node/issues/5106)) ([fe6fc2c](https://github.com/googleapis/google-cloud-node/commit/fe6fc2c37a47139c6c67a6e500f57afc5abdd7ca))
* Add initial files for google.cloud.cloudcontrolspartner.v1beta ([#5067](https://github.com/googleapis/google-cloud-node/issues/5067)) ([45a51f5](https://github.com/googleapis/google-cloud-node/commit/45a51f588c8d296e06dbecc87dd6875e9076fc62))
