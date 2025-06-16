# Changelog

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v5.0.1...gke-connect-gateway-v5.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v5.0.0...gke-connect-gateway-v5.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6185](https://github.com/googleapis/google-cloud-node/issues/6185)) ([ab30412](https://github.com/googleapis/google-cloud-node/commit/ab304122e3e825c9a76af7d6b0ef4ddc9aa6e906))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v4.0.0...gke-connect-gateway-v5.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))
* gRPC support is being removed in favor of HTTP support, as gRPC is not currently supported by Connect Gateway.

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* [gkeconnect] update copyright year for auto-generated protos ([#5798](https://github.com/googleapis/google-cloud-node/issues/5798)) ([e069a9d](https://github.com/googleapis/google-cloud-node/commit/e069a9dca4c60cc3f17c08f424853ebabe9e221f))
* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v3.3.0...gke-connect-gateway-v4.0.0) (2024-08-29)


### ⚠ BREAKING CHANGES

* existing client libraries are being regenerated to remove unused functionality and introduce new features.

### Features

* [gkeconnect] removed the nonfunctional GatewayService and replaced it with the GatewayControl service ([#5632](https://github.com/googleapis/google-cloud-node/issues/5632)) ([c03e3a5](https://github.com/googleapis/google-cloud-node/commit/c03e3a5ce9740b70c9e9cf67ef98464d14052f84))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v3.2.0...gke-connect-gateway-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5353](https://github.com/googleapis/google-cloud-node/issues/5353)) ([1a2388d](https://github.com/googleapis/google-cloud-node/commit/1a2388d7096176b4155a0c4f01e15ffb8c4d5096))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v3.1.0...gke-connect-gateway-v3.2.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v3.0.1...gke-connect-gateway-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v3.0.0...gke-connect-gateway-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.1.2...gke-connect-gateway-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.1.2](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.1.1...gke-connect-gateway-v2.1.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.1.1](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.1.0...gke-connect-gateway-v2.1.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.0.5...gke-connect-gateway-v2.1.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [2.0.5](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.0.4...gke-connect-gateway-v2.0.5) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.0.4](https://github.com/googleapis/google-cloud-node/compare/gke-connect-gateway-v2.0.3...gke-connect-gateway-v2.0.4) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.0.3](https://github.com/googleapis/nodejs-gke-connect-gateway/compare/v2.0.2...v2.0.3) (2022-09-14)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#87](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/87)) ([99112c8](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/99112c89e562b257cae232cc38d7769d77f04731))

## [2.0.2](https://github.com/googleapis/nodejs-gke-connect-gateway/compare/v2.0.1...v2.0.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#86](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/86)) ([29669fe](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/29669fee06b214a8619b9815283f8778a82a5aac))
* Better support for fallback mode ([#81](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/81)) ([9d83c4a](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/9d83c4a3a1f0b8b431d7a7b89d22405a8a26be04))
* Change import long to require ([#82](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/82)) ([cf69a4e](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/cf69a4e8dff40dc0eeead51a746eeab1ed9efa12))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/1553)) ([#85](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/85)) ([a7cc874](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/a7cc87499841e940cc4298cbf620e45a4831238d))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/1546)) ([#84](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/84)) ([3d0a7dd](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/3d0a7dd8d308c9ff53b969f5ef91f5f836751343))

## [2.0.1](https://github.com/googleapis/nodejs-gke-connect-gateway/compare/v2.0.0...v2.0.1) (2022-06-30)


### Bug Fixes

* **docs:** describe fallback rest option ([#75](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/75)) ([aa8cdc8](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/aa8cdc8607b44eea8bcc6b7065c01818857a8d70))

## [2.0.0](https://github.com/googleapis/nodejs-gke-connect-gateway/compare/v1.1.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#70)

### Build System

* update library to use Node 12 ([#70](https://github.com/googleapis/nodejs-gke-connect-gateway/issues/70)) ([7417416](https://github.com/googleapis/nodejs-gke-connect-gateway/commit/741741665d6dbdfe70e51ed0f181e8791bac4716))

## [1.1.0](https://www.github.com/googleapis/nodejs-gke-connect-gateway/compare/v1.0.3...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#23](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/23)) ([4041bbd](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/4041bbd7361a8aecfb86a886d0c7661db52c2e31))

### [1.0.3](https://www.github.com/googleapis/nodejs-gke-connect-gateway/compare/v1.0.2...v1.0.3) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#20](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/20)) ([f8731f3](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/f8731f3b957562977f70e7de6b6737ffbffa81d1))
* **deps:** google-gax v2.24.1 ([#22](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/22)) ([2613add](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/2613add6ed97059ef8e76e333c885d69afa4365c))

### [1.0.2](https://www.github.com/googleapis/nodejs-gke-connect-gateway/compare/v1.0.1...v1.0.2) (2021-07-22)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator ([0592deb](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/0592deb506d1ec6493c25c110b1ba45d20f188b5))

### [1.0.1](https://www.github.com/googleapis/nodejs-gke-connect-gateway/compare/v1.0.0...v1.0.1) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#8](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/8)) ([eeedac9](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/eeedac9d30407e6fccee6e149246c63dfb9d4b3e))

## 1.0.0 (2021-06-30)


### Features

* add generated files ([172b8b6](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/172b8b6717fdc76f2d92c21ba9d12417795d03f3))
* initial samples and tests ([#6](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/6)) ([ada7497](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/ada7497a6a5881c2a5b686e16f3a744d5f34a969))
* initial stub of library ([82755d9](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/82755d93262e35bed9aae0693efcc47df4b3b5dc))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#5](https://www.github.com/googleapis/nodejs-gke-connect-gateway/issues/5)) ([d1257a8](https://www.github.com/googleapis/nodejs-gke-connect-gateway/commit/d1257a83a04171b6ec0e8fe1196cb3fb160b9161))
