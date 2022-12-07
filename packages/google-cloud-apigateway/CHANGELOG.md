# Changelog

## [2.1.2](https://github.com/googleapis/nodejs-api-gateway/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#128](https://github.com/googleapis/nodejs-api-gateway/issues/128)) ([d164e0d](https://github.com/googleapis/nodejs-api-gateway/commit/d164e0d73efc730aa20df74a6333e7b139076225))
* **deps:** Use google-gax v3.5.2 ([#136](https://github.com/googleapis/nodejs-api-gateway/issues/136)) ([225bccf](https://github.com/googleapis/nodejs-api-gateway/commit/225bccfd96bdde4329c8481f104379e2293139f0))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-api-gateway/issues/1553)) ([#127](https://github.com/googleapis/nodejs-api-gateway/issues/127)) ([ca45455](https://github.com/googleapis/nodejs-api-gateway/commit/ca45455b795e42a95b6e1f814a821467d612bc8d))
* Preserve default values in x-goog-request-params header ([#130](https://github.com/googleapis/nodejs-api-gateway/issues/130)) ([a3e409a](https://github.com/googleapis/nodejs-api-gateway/commit/a3e409abde922fb3adc6eb1888e8a954702cfed2))
* Regenerated protos JS and TS definitions ([#139](https://github.com/googleapis/nodejs-api-gateway/issues/139)) ([924cd81](https://github.com/googleapis/nodejs-api-gateway/commit/924cd8179365dc4364d5431e6e7abab31f6d2bee))
* use google-gax v3.3.0 ([ca45455](https://github.com/googleapis/nodejs-api-gateway/commit/ca45455b795e42a95b6e1f814a821467d612bc8d))

## [2.1.1](https://github.com/googleapis/nodejs-api-gateway/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#123](https://github.com/googleapis/nodejs-api-gateway/issues/123)) ([a5cf1d1](https://github.com/googleapis/nodejs-api-gateway/commit/a5cf1d1322bd1f7c70e995b15ce81f54ad5b10de))
* change import long to require ([#124](https://github.com/googleapis/nodejs-api-gateway/issues/124)) ([6edc9af](https://github.com/googleapis/nodejs-api-gateway/commit/6edc9af8b60cf5bf6494dbc9560ffe1962c268b3))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-api-gateway/issues/1546)) ([#126](https://github.com/googleapis/nodejs-api-gateway/issues/126)) ([bde7a85](https://github.com/googleapis/nodejs-api-gateway/commit/bde7a858a9fdb90614a0a5996c525214053e6cb7))

## [2.1.0](https://github.com/googleapis/nodejs-api-gateway/compare/v2.0.0...v2.1.0) (2022-06-29)


### Features

* support regapic LRO ([#116](https://github.com/googleapis/nodejs-api-gateway/issues/116)) ([b3761fc](https://github.com/googleapis/nodejs-api-gateway/commit/b3761fc10fc5f3160ac29dbebfd86fda99de00e6))

## [2.0.0](https://github.com/googleapis/nodejs-api-gateway/compare/v1.2.1...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#109)

### Build System

* update library to use Node 12 ([#109](https://github.com/googleapis/nodejs-api-gateway/issues/109)) ([b5a07ad](https://github.com/googleapis/nodejs-api-gateway/commit/b5a07ad01f8a9d74a8a713ff412ef165f5f494d8))

### [1.2.1](https://github.com/googleapis/nodejs-api-gateway/compare/v1.2.0...v1.2.1) (2022-01-12)


### Bug Fixes

* **apigateway:** add ancillary service bindings to service_yaml ([#84](https://github.com/googleapis/nodejs-api-gateway/issues/84)) ([801a824](https://github.com/googleapis/nodejs-api-gateway/commit/801a82482addc0acb8485c484b050cd34e39d270))

## [1.2.0](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.6...v1.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#60](https://www.github.com/googleapis/nodejs-api-gateway/issues/60)) ([2f86035](https://www.github.com/googleapis/nodejs-api-gateway/commit/2f86035d2a76604b0e4dad97272781e25e4fe899))

### [1.1.6](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.5...v1.1.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#58](https://www.github.com/googleapis/nodejs-api-gateway/issues/58)) ([e5f8604](https://www.github.com/googleapis/nodejs-api-gateway/commit/e5f8604007dfcc0c58c016a0253b9b65616a5ae4))

### [1.1.5](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.4...v1.1.5) (2021-08-09)


### Bug Fixes

* **build:** migrate to using main branch ([#56](https://www.github.com/googleapis/nodejs-api-gateway/issues/56)) ([e7b3909](https://www.github.com/googleapis/nodejs-api-gateway/commit/e7b3909be004b229ae1151514b8b108286a0d6a5))

### [1.1.4](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.3...v1.1.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#48](https://www.github.com/googleapis/nodejs-api-gateway/issues/48)) ([92a65a5](https://www.github.com/googleapis/nodejs-api-gateway/commit/92a65a5be258a685cbed2780f70db0ecf91b65fd))

### [1.1.3](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.2...v1.1.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#46](https://www.github.com/googleapis/nodejs-api-gateway/issues/46)) ([d0d953e](https://www.github.com/googleapis/nodejs-api-gateway/commit/d0d953e87e8fe2d04f64e82923396da9b38925ad))

### [1.1.2](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.1...v1.1.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#44](https://www.github.com/googleapis/nodejs-api-gateway/issues/44)) ([669d327](https://www.github.com/googleapis/nodejs-api-gateway/commit/669d32783d642d1bd6b2ee743200f2002878ab79))
* make request optional in all cases ([#40](https://www.github.com/googleapis/nodejs-api-gateway/issues/40)) ([9e00d1a](https://www.github.com/googleapis/nodejs-api-gateway/commit/9e00d1a4f8207880ceefa0717ddd68a1d61f45e6))

### [1.1.1](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.1.0...v1.1.1) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#33](https://www.github.com/googleapis/nodejs-api-gateway/issues/33)) ([d58a7f6](https://www.github.com/googleapis/nodejs-api-gateway/commit/d58a7f6ac39c050cacb82367588a536df5b94090))

## [1.1.0](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.0.1...v1.1.0) (2021-05-24)


### Features

* bump release level to GA ([#30](https://www.github.com/googleapis/nodejs-api-gateway/issues/30)) ([17d6485](https://www.github.com/googleapis/nodejs-api-gateway/commit/17d6485a5061f8c1f14e835d335b88e6bc427ff0))

### [1.0.1](https://www.github.com/googleapis/nodejs-api-gateway/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#23](https://www.github.com/googleapis/nodejs-api-gateway/issues/23)) ([9d7920e](https://www.github.com/googleapis/nodejs-api-gateway/commit/9d7920ea5e76253e1a042f29ff67dc5c36df0015))
* use require() to load JSON protos ([#26](https://www.github.com/googleapis/nodejs-api-gateway/issues/26)) ([e343ef1](https://www.github.com/googleapis/nodejs-api-gateway/commit/e343ef1bf9c8d34ec4f1a0281ed40ff4184c976f))

## 1.0.0 (2021-03-06)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-api-gateway/issues/1)) ([f2cd6e9](https://www.github.com/googleapis/nodejs-api-gateway/commit/f2cd6e9d92551ef6cdbc34a51ab9cf660e1de54d))
