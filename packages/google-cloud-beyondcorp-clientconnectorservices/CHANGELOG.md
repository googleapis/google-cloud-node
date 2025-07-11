# Changelog

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v3.0.1...clientconnectorservices-v3.1.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6418](https://github.com/googleapis/google-cloud-node/issues/6418)) ([fcfb2c0](https://github.com/googleapis/google-cloud-node/commit/fcfb2c018539983a8ce32205a2ea9e99ef28e88a))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v3.0.0...clientconnectorservices-v3.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6183](https://github.com/googleapis/google-cloud-node/issues/6183)) ([f91c71f](https://github.com/googleapis/google-cloud-node/commit/f91c71f71c7a08ac17a15b7bb2233cbc041ee69b))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.3.1...clientconnectorservices-v3.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics, update templates to gax 5  ([32fff6f](https://github.com/googleapis/google-cloud-node/commit/32fff6f5e36a33729591a9ba531cc5de07f046cc))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.3.0...clientconnectorservices-v2.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6011](https://github.com/googleapis/google-cloud-node/issues/6011)) ([ee865ff](https://github.com/googleapis/google-cloud-node/commit/ee865ff34a696fbd657e4cfb6cc4be2f6651f77a))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.2.0...clientconnectorservices-v2.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.1.0...clientconnectorservices-v2.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.0.1...clientconnectorservices-v2.1.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v2.0.0...clientconnectorservices-v2.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v1.0.0...clientconnectorservices-v2.0.0) (2023-08-09)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))
* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))
* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/clientgateways-v0.3.2...clientgateways-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.3.1...clientconnectorservices-v0.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.3.0...clientconnectorservices-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.2.3...clientconnectorservices-v0.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [0.2.3](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.2.2...clientconnectorservices-v0.2.3) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.2.2](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.2.1...clientconnectorservices-v0.2.2) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.2.0...clientconnectorservices-v0.2.1) (2022-09-28)


### Bug Fixes

* preserve default values in x-goog-request-params header ([#3353](https://github.com/googleapis/google-cloud-node/issues/3353)) ([da99ad5](https://github.com/googleapis/google-cloud-node/commit/da99ad57f592a504750d57fdb1c7423734fec069))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/clientconnectorservices-v0.1.0...clientconnectorservices-v0.2.0) (2022-08-29)


### Features

* update typescript generator for beyond corp app ([#3309](https://github.com/googleapis/google-cloud-node/issues/3309)) ([380e7b7](https://github.com/googleapis/google-cloud-node/commit/380e7b70316e072f97fef0e050011d52f41262b1))

## 0.1.0 (2022-08-12)


### Source-Link

* https://googleapis/googleapis-gen@071b2ec6c6df6084d31f63233140967031c3e2d2 ([3627120](https://github.com/googleapis/google-cloud-node/commit/3627120b2617d0ceba2dc676acc6333875835665))
