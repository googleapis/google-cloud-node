# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/domains-v4.0.1...domains-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/domains-v4.0.0...domains-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6185](https://github.com/googleapis/google-cloud-node/issues/6185)) ([ab30412](https://github.com/googleapis/google-cloud-node/commit/ab304122e3e825c9a76af7d6b0ef4ddc9aa6e906))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/domains-v3.2.0...domains-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/domains-v3.1.0...domains-v3.2.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/domains-v3.0.1...domains-v3.1.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/domains-v3.0.0...domains-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/domains-v2.2.2...domains-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/domains-v2.2.1...domains-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/domains-v2.2.0...domains-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/domains-v2.1.2...domains-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.1.2](https://github.com/googleapis/nodejs-domains/compare/v2.1.1...v2.1.2) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#152](https://github.com/googleapis/nodejs-domains/issues/152)) ([f02b8a1](https://github.com/googleapis/nodejs-domains/commit/f02b8a167db37ef21410d0bdd3c656b9a7d471f9))
* Preserve default values in x-goog-request-params header ([#145](https://github.com/googleapis/nodejs-domains/issues/145)) ([c4aa0aa](https://github.com/googleapis/nodejs-domains/commit/c4aa0aa2324f365e4c700da916f399174b016ade))
* Regenerated protos JS and TS definitions ([#155](https://github.com/googleapis/nodejs-domains/issues/155)) ([b22ed55](https://github.com/googleapis/nodejs-domains/commit/b22ed5506ac16662b555793d41844619ed7b9889))

## [2.1.1](https://github.com/googleapis/nodejs-domains/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#144](https://github.com/googleapis/nodejs-domains/issues/144)) ([8bf7f53](https://github.com/googleapis/nodejs-domains/commit/8bf7f53f0011f89c87ee182ddf75dcc3c5cef188))
* Better support for fallback mode ([#139](https://github.com/googleapis/nodejs-domains/issues/139)) ([6d83b72](https://github.com/googleapis/nodejs-domains/commit/6d83b72d9ad9998d5ded5a1ad8aed4f464917b6f))
* Change import long to require ([#140](https://github.com/googleapis/nodejs-domains/issues/140)) ([f0155a2](https://github.com/googleapis/nodejs-domains/commit/f0155a211d70255155664a9776857cd37e9d46bf))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-domains/issues/1553)) ([#143](https://github.com/googleapis/nodejs-domains/issues/143)) ([c7cce8d](https://github.com/googleapis/nodejs-domains/commit/c7cce8db16bd58052bc6ac5226638ac07bc398c4))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-domains/issues/1546)) ([#142](https://github.com/googleapis/nodejs-domains/issues/142)) ([ac57104](https://github.com/googleapis/nodejs-domains/commit/ac571044a6299ee5b427b4d8adc84c358cee2cdd))

## [2.1.0](https://github.com/googleapis/nodejs-domains/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#135](https://github.com/googleapis/nodejs-domains/issues/135)) ([b1694a2](https://github.com/googleapis/nodejs-domains/commit/b1694a2669359b73efb7860fb30bafa60af77ca2))

## [2.0.0](https://github.com/googleapis/nodejs-domains/compare/v1.2.0...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#129)
* make v1 default service version (#110)

### Features

* make v1 default service version ([#110](https://github.com/googleapis/nodejs-domains/issues/110)) ([7fd70b8](https://github.com/googleapis/nodejs-domains/commit/7fd70b868314778e49c9d21eff398e0aae7a41c4))


### Build System

* update library to use Node 12 ([#129](https://github.com/googleapis/nodejs-domains/issues/129)) ([816aeb9](https://github.com/googleapis/nodejs-domains/commit/816aeb9a7137e0a3956005d8ffbcd2a2e6b3e6bb))

## [1.2.0](https://www.github.com/googleapis/nodejs-domains/compare/v1.1.0...v1.2.0) (2021-10-19)


### Features

* added library for Cloud Domains v1 API. Also added methods for the transfer-in flow ([ce97a96](https://www.github.com/googleapis/nodejs-domains/commit/ce97a96ef13e9a73a69b05b59729d2d4172adafc))

## [1.1.0](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.8...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#70](https://www.github.com/googleapis/nodejs-domains/issues/70)) ([ee9565a](https://www.github.com/googleapis/nodejs-domains/commit/ee9565a2a5f0971ea530ccd478cfe55467bfc4d9))

### [1.0.8](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.7...v1.0.8) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#68](https://www.github.com/googleapis/nodejs-domains/issues/68)) ([a332f0b](https://www.github.com/googleapis/nodejs-domains/commit/a332f0b54c14da104bca7c1ba691a57797ec64a5))

### [1.0.7](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.6...v1.0.7) (2021-08-13)


### Bug Fixes

* **build:** migrate to using main branch ([#66](https://www.github.com/googleapis/nodejs-domains/issues/66)) ([ec3edb2](https://www.github.com/googleapis/nodejs-domains/commit/ec3edb2750b7e393d8452c42f36a20a1c4fc8778))

### [1.0.6](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.5...v1.0.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#58](https://www.github.com/googleapis/nodejs-domains/issues/58)) ([5c35455](https://www.github.com/googleapis/nodejs-domains/commit/5c35455f992ecdfb0fb71d74265dede9151bbd2b))

### [1.0.5](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.4...v1.0.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#56](https://www.github.com/googleapis/nodejs-domains/issues/56)) ([4a09020](https://www.github.com/googleapis/nodejs-domains/commit/4a090203e334403c7f4ef520834de61d53d400f6))

### [1.0.4](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.3...v1.0.4) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#53](https://www.github.com/googleapis/nodejs-domains/issues/53)) ([0522960](https://www.github.com/googleapis/nodejs-domains/commit/0522960d9504498991a05a2a5ffe3a2095c12ca4))

### [1.0.3](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.2...v1.0.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#49](https://www.github.com/googleapis/nodejs-domains/issues/49)) ([cb5fb16](https://www.github.com/googleapis/nodejs-domains/commit/cb5fb16ac3de2c444537ac8b6bdd8a166f544ed6))

### [1.0.2](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.1...v1.0.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#42](https://www.github.com/googleapis/nodejs-domains/issues/42)) ([3830c18](https://www.github.com/googleapis/nodejs-domains/commit/3830c1832e65c5ecbfd821931582fd87cada793b))

### [1.0.1](https://www.github.com/googleapis/nodejs-domains/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#34](https://www.github.com/googleapis/nodejs-domains/issues/34)) ([87a316a](https://www.github.com/googleapis/nodejs-domains/commit/87a316a5a1e3baeea370035676c514dde1268ca3))
* use require() to load JSON protos ([#37](https://www.github.com/googleapis/nodejs-domains/issues/37)) ([f526c4b](https://www.github.com/googleapis/nodejs-domains/commit/f526c4bae5388bc94e0bb28bea908b06e9f8c17a))

## 1.0.0 (2021-02-03)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* initial stub of library ([6d3c6a2](https://www.github.com/googleapis/nodejs-domains/commit/6d3c6a246543457ce0edc7a471bafed6e61700f4))
