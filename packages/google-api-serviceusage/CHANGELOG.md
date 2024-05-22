# Changelog

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v3.3.0...service-usage-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5350](https://github.com/googleapis/google-cloud-node/issues/5350)) ([6c03873](https://github.com/googleapis/google-cloud-node/commit/6c038731de1f36456042e6b4ecf2a9686be662c7))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v3.2.0...service-usage-v3.3.0) (2024-04-16)


### Features

* [Many APIs] support GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable ([#5185](https://github.com/googleapis/google-cloud-node/issues/5185)) ([cc54e98](https://github.com/googleapis/google-cloud-node/commit/cc54e98f7f51598e88277ac50310b07b778acbc7))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v3.1.0...service-usage-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v3.0.1...service-usage-v3.1.0) (2023-09-19)


### Features

* [serviceusage] introduce resource class serviceusage.googleapis.com/Service ([#4669](https://github.com/googleapis/google-cloud-node/issues/4669)) ([4e7f9ef](https://github.com/googleapis/google-cloud-node/commit/4e7f9efde9d5dd76e785a736063948247eede501))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/service-usage-v3.0.0...service-usage-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v2.2.2...service-usage-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/service-usage-v2.2.1...service-usage-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/service-usage-v2.2.0...service-usage-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/service-usage-v2.1.2...service-usage-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [2.1.2](https://github.com/googleapis/nodejs-service-usage/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#110](https://github.com/googleapis/nodejs-service-usage/issues/110)) ([8120d5a](https://github.com/googleapis/nodejs-service-usage/commit/8120d5aa9d7bad7c712ee5abe2629a77820ccceb))
* **deps:** Use google-gax v3.5.2 ([#118](https://github.com/googleapis/nodejs-service-usage/issues/118)) ([605da4a](https://github.com/googleapis/nodejs-service-usage/commit/605da4a084da827dd69ce280a2e77866179c4938))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-service-usage/issues/1553)) ([#109](https://github.com/googleapis/nodejs-service-usage/issues/109)) ([700fd54](https://github.com/googleapis/nodejs-service-usage/commit/700fd54fde70143cb2dc10f8d9f810dafa3ac808))
* Preserve default values in x-goog-request-params header ([#112](https://github.com/googleapis/nodejs-service-usage/issues/112)) ([9d8d4c4](https://github.com/googleapis/nodejs-service-usage/commit/9d8d4c4fb2daace3210ec333e18a3f70f5f53c5a))
* Regenerated protos JS and TS definitions ([#121](https://github.com/googleapis/nodejs-service-usage/issues/121)) ([977373e](https://github.com/googleapis/nodejs-service-usage/commit/977373ecaadaaf8da2d22330ca2558fd052146b3))
* use google-gax v3.3.0 ([700fd54](https://github.com/googleapis/nodejs-service-usage/commit/700fd54fde70143cb2dc10f8d9f810dafa3ac808))

## [2.1.1](https://github.com/googleapis/nodejs-service-usage/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#105](https://github.com/googleapis/nodejs-service-usage/issues/105)) ([9cf34e1](https://github.com/googleapis/nodejs-service-usage/commit/9cf34e15b2b7c2d259b5cc42052b913328e0071e))
* change import long to require ([#106](https://github.com/googleapis/nodejs-service-usage/issues/106)) ([4f574a0](https://github.com/googleapis/nodejs-service-usage/commit/4f574a04a9017fe5797afa28fda5f6b47e512bc0))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-service-usage/issues/1546)) ([#108](https://github.com/googleapis/nodejs-service-usage/issues/108)) ([c49f10a](https://github.com/googleapis/nodejs-service-usage/commit/c49f10a089baef23b9cac55bed1dc8b8f94f9406))

## [2.1.0](https://github.com/googleapis/nodejs-service-usage/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#98](https://github.com/googleapis/nodejs-service-usage/issues/98)) ([b433238](https://github.com/googleapis/nodejs-service-usage/commit/b433238b176cd86469c4951a0b43c5bdb00d4540))

## [2.0.0](https://github.com/googleapis/nodejs-service-usage/compare/v1.2.1...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#92)

### Build System

* update library to use Node 12 ([#92](https://github.com/googleapis/nodejs-service-usage/issues/92)) ([9320ff9](https://github.com/googleapis/nodejs-service-usage/commit/9320ff9fa52529a0cb75992f446493fa36165484))

### [1.2.1](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.2.0...v1.2.1) (2021-09-10)


### Bug Fixes

* **build:** set default branch to main ([#43](https://www.github.com/googleapis/nodejs-service-usage/issues/43)) ([1fb6128](https://www.github.com/googleapis/nodejs-service-usage/commit/1fb61286aa4822531057675439c8e702f10f2559))

## [1.2.0](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.1.4...v1.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#40](https://www.github.com/googleapis/nodejs-service-usage/issues/40)) ([1474878](https://www.github.com/googleapis/nodejs-service-usage/commit/14748784647a02f42df8cc1fd53ed3ddf9dfe589))

### [1.1.4](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.1.3...v1.1.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#38](https://www.github.com/googleapis/nodejs-service-usage/issues/38)) ([021b0eb](https://www.github.com/googleapis/nodejs-service-usage/commit/021b0eb4c69c1ed485aac388c2a5583547dbb3ad))

### [1.1.3](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.1.2...v1.1.3) (2021-07-30)


### Bug Fixes

* failing tests for LRO check methods ([#35](https://www.github.com/googleapis/nodejs-service-usage/issues/35)) ([f961511](https://www.github.com/googleapis/nodejs-service-usage/commit/f961511fe88658592857cca70dce14b92568b725))

### [1.1.2](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.1.1...v1.1.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#29](https://www.github.com/googleapis/nodejs-service-usage/issues/29)) ([6c754c1](https://www.github.com/googleapis/nodejs-service-usage/commit/6c754c101a426386f2e9ce4462f3863f13c2b52e))

### [1.1.1](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.1.0...v1.1.1) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#27](https://www.github.com/googleapis/nodejs-service-usage/issues/27)) ([c1738e8](https://www.github.com/googleapis/nodejs-service-usage/commit/c1738e82d175c921178a3d52b75197fbd791df02))
* make request optional in all cases ([#19](https://www.github.com/googleapis/nodejs-service-usage/issues/19)) ([fcdb1a5](https://www.github.com/googleapis/nodejs-service-usage/commit/fcdb1a5900b7bac5ae1b8b0e211d024b2b7e9579))

## [1.1.0](https://www.github.com/googleapis/nodejs-service-usage/compare/v1.0.0...v1.1.0) (2021-05-29)


### Features

* update serviceusage v1beta1 API ([#10](https://www.github.com/googleapis/nodejs-service-usage/issues/10)) ([8a98520](https://www.github.com/googleapis/nodejs-service-usage/commit/8a9852049e79a71a0a25f14e6eff806a4893642d))


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#9](https://www.github.com/googleapis/nodejs-service-usage/issues/9)) ([2fa7011](https://www.github.com/googleapis/nodejs-service-usage/commit/2fa7011abb318a15cd248b7abeb921540c60d34f))

## 1.0.0 (2021-05-25)


### ⚠ BREAKING CHANGES

* bump to GA release level (#6)

### Features

* bump to GA release level ([#6](https://www.github.com/googleapis/nodejs-service-usage/issues/6)) ([ed9fe6d](https://www.github.com/googleapis/nodejs-service-usage/commit/ed9fe6dc1a486d5dd2591c01d49ca05fca908b12))
* initial generation of library ([4e78126](https://www.github.com/googleapis/nodejs-service-usage/commit/4e781266eb45ac52c2465f88fb7b7d68a3ee1f47))
* **samples:** add example of listing service usage ([#2](https://www.github.com/googleapis/nodejs-service-usage/issues/2)) ([048c44f](https://www.github.com/googleapis/nodejs-service-usage/commit/048c44f8f36483b0016b1573b9439d1a1a6643d4))
