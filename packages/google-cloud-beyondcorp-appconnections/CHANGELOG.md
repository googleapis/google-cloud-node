# Changelog

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v1.2.0...appconnections-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v1.1.0...appconnections-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v1.0.1...appconnections-v1.1.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/appconnections-v1.0.0...appconnections-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.3.2...appconnections-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.3.1...appconnections-v0.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.3.0...appconnections-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.2.3...appconnections-v0.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [0.2.3](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.2.2...appconnections-v0.2.3) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.2.2](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.2.1...appconnections-v0.2.2) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.2.0...appconnections-v0.2.1) (2022-09-28)


### Bug Fixes

* preserve default values in x-goog-request-params header ([#3353](https://github.com/googleapis/google-cloud-node/issues/3353)) ([da99ad5](https://github.com/googleapis/google-cloud-node/commit/da99ad57f592a504750d57fdb1c7423734fec069))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/appconnections-v0.1.0...appconnections-v0.2.0) (2022-08-29)


### Features

* accept google-gax instance as a parameter ([#3306](https://github.com/googleapis/google-cloud-node/issues/3306)) ([de0e5c1](https://github.com/googleapis/google-cloud-node/commit/de0e5c1172c84a650c6e8fd268b2614f60d1b0ad))
* update typescript generator ([#3303](https://github.com/googleapis/google-cloud-node/issues/3303)) ([737909e](https://github.com/googleapis/google-cloud-node/commit/737909e27b30ff0c84c2b594d9f89fe511590d15))

## 0.1.0 (2022-08-12)


### Source-Link

* https://googleapis/googleapis-gen@071b2ec6c6df6084d31f63233140967031c3e2d2 ([0d381dd](https://github.com/googleapis/google-cloud-node/commit/0d381dd0cbb0490cad08ba404e78970d246d150e))
