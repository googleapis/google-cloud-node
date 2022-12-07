# Changelog

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
