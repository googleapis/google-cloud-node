# Changelog

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.8.0...products-v0.9.0) (2026-05-01)


### Features

* [merchantapi] a new field `base64_encoded_name` is added to the `Product` message ([#7997](https://github.com/googleapis/google-cloud-node/issues/7997)) ([f56dc14](https://github.com/googleapis/google-cloud-node/commit/f56dc1431ac275a9ab834b10685da0f99122dc90))
* [merchantapi] a new optional field `video_links` is added to the `.google.shopping.merchant.products.v1.ProductAttributes` message ([#8080](https://github.com/googleapis/google-cloud-node/issues/8080)) ([9e986af](https://github.com/googleapis/google-cloud-node/commit/9e986afb669d71fdd29561fc06e0679315057b11))


### Bug Fixes

* Change the copyright year for files in the packages folder ([#8109](https://github.com/googleapis/google-cloud-node/issues/8109)) ([c1a03fe](https://github.com/googleapis/google-cloud-node/commit/c1a03fe604662091be283055c7d34052c64d6334))
* Do not publish the protos to npm ([#8079](https://github.com/googleapis/google-cloud-node/issues/8079)) ([816216b](https://github.com/googleapis/google-cloud-node/commit/816216bbf51afb25935cd930a0d97ed6efd6b91e))
* Revert "fix: Do not publish the protos to npm" ([#8096](https://github.com/googleapis/google-cloud-node/issues/8096)) ([ac0fbb6](https://github.com/googleapis/google-cloud-node/commit/ac0fbb682409bb117fd54d344df10970a240772f))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.7.0...products-v0.8.0) (2025-10-13)


### Features

* [merchantapi] Include CarrierShipping field inside the Products attribute ([#6787](https://github.com/googleapis/google-cloud-node/issues/6787)) ([7432c86](https://github.com/googleapis/google-cloud-node/commit/7432c86aba2fb48f27f78e6ed89d00a4174bbce1))


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.6.0...products-v0.7.0) (2025-08-21)


### ⚠ BREAKING CHANGES

* release stable version of libraries ([#6602](https://github.com/googleapis/google-cloud-node/issues/6602))

### Miscellaneous Chores

* Release stable version of libraries ([#6602](https://github.com/googleapis/google-cloud-node/issues/6602)) ([deb5255](https://github.com/googleapis/google-cloud-node/commit/deb5255541602defd05896fc0093adca05f30440))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.5.0...products-v0.6.0) (2025-08-07)


### Features

* [merchantapi] add products API client libraries for v1 ([#6569](https://github.com/googleapis/google-cloud-node/issues/6569)) ([57f22a0](https://github.com/googleapis/google-cloud-node/commit/57f22a05e39ad20866b3d5270e55f5660fd727ff))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.4.0...products-v0.5.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6426](https://github.com/googleapis/google-cloud-node/issues/6426)) ([6ea5464](https://github.com/googleapis/google-cloud-node/commit/6ea54642532d9797ea87d7cd01c9fac77f9eb035))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.3.0...products-v0.4.0) (2025-05-09)


### Features

* [merchantapi] A new field `automated_discounts` is added to message `google.shopping.merchant.products.v1beta.Product` ([#6248](https://github.com/googleapis/google-cloud-node/issues/6248)) ([1171975](https://github.com/googleapis/google-cloud-node/commit/11719759a25e96b3c2d424e44789c4872dfbcd44))
* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.2.0...products-v0.3.0) (2025-03-19)


### Features

* [merchantapi] add an update method ([#6163](https://github.com/googleapis/google-cloud-node/issues/6163)) ([99028ab](https://github.com/googleapis/google-cloud-node/commit/99028ab3ca6487acf9df82e4d013ffa40d0aebf6))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/products-v0.1.1...products-v0.2.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([388b4e2](https://github.com/googleapis/google-cloud-node/commit/388b4e20329b7f6fc0dd061dddff573c45104213))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/products-v0.1.0...products-v0.1.1) (2024-12-18)


### Bug Fixes

* [merchantapi] Changed repeated flag of an existing field `gtin` in message `.google.shopping.merchant.products.v1beta.Attributes` ([#5871](https://github.com/googleapis/google-cloud-node/issues/5871)) ([ba6cead](https://github.com/googleapis/google-cloud-node/commit/ba6cead793f9664433916c29bde624c4257ffeea))

## 0.1.0 (2024-07-22)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.shopping.merchant.products.v1beta ([#5516](https://github.com/googleapis/google-cloud-node/issues/5516)) ([371b36a](https://github.com/googleapis/google-cloud-node/commit/371b36a0bb297c5aa7b5b037d9a34408479a69d2))
