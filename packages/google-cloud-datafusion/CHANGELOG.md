# Changelog

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v3.1.0...data-fusion-v3.2.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v3.0.1...data-fusion-v3.1.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v3.0.0...data-fusion-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v2.2.2...data-fusion-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v2.2.1...data-fusion-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v2.2.0...data-fusion-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/data-fusion-v2.1.2...data-fusion-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.1.2](https://github.com/googleapis/nodejs-data-fusion/compare/v2.1.1...v2.1.2) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#74](https://github.com/googleapis/nodejs-data-fusion/issues/74)) ([764335c](https://github.com/googleapis/nodejs-data-fusion/commit/764335ce183a3f2557cc6555c87ebe6a2b4f2251))
* Preserve default values in x-goog-request-params header ([#67](https://github.com/googleapis/nodejs-data-fusion/issues/67)) ([2a4981c](https://github.com/googleapis/nodejs-data-fusion/commit/2a4981c4677c451783b309669abd93138fcde971))
* Regenerated protos JS and TS definitions ([#77](https://github.com/googleapis/nodejs-data-fusion/issues/77)) ([8e36541](https://github.com/googleapis/nodejs-data-fusion/commit/8e365416725258222a210c3e2b5731b9f1fab48f))

## [2.1.1](https://github.com/googleapis/nodejs-data-fusion/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#66](https://github.com/googleapis/nodejs-data-fusion/issues/66)) ([42a24b7](https://github.com/googleapis/nodejs-data-fusion/commit/42a24b79cd87fed6cb480edf9e10ab72b6d63aba))
* Better support for fallback mode ([#61](https://github.com/googleapis/nodejs-data-fusion/issues/61)) ([0098350](https://github.com/googleapis/nodejs-data-fusion/commit/0098350779b5f2d26d4385c44981ebe2a2ba1d17))
* Change import long to require ([#62](https://github.com/googleapis/nodejs-data-fusion/issues/62)) ([b284743](https://github.com/googleapis/nodejs-data-fusion/commit/b284743fe36fa68aa5fe47f09dece179ad9915d4))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-data-fusion/issues/1553)) ([#65](https://github.com/googleapis/nodejs-data-fusion/issues/65)) ([5a66df0](https://github.com/googleapis/nodejs-data-fusion/commit/5a66df00bce6554e077cc554867cd5f4289681b4))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-data-fusion/issues/1546)) ([#64](https://github.com/googleapis/nodejs-data-fusion/issues/64)) ([428bfd4](https://github.com/googleapis/nodejs-data-fusion/commit/428bfd495a60857a1c5fc8b4f5e57c67d598b8cf))

## [2.1.0](https://github.com/googleapis/nodejs-data-fusion/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#55](https://github.com/googleapis/nodejs-data-fusion/issues/55)) ([4b66ef0](https://github.com/googleapis/nodejs-data-fusion/commit/4b66ef068c5d82e150b4bf6f2943d1708d5b0194))

## [2.0.0](https://github.com/googleapis/nodejs-data-fusion/compare/v1.0.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#50)

### Build System

* update library to use Node 12 ([#50](https://github.com/googleapis/nodejs-data-fusion/issues/50)) ([464bde8](https://github.com/googleapis/nodejs-data-fusion/commit/464bde8f22a351f3c1812a8ccae2a322437c5c2b))

## [1.0.0](https://github.com/googleapis/nodejs-data-fusion/compare/v0.2.0...v1.0.0) (2022-03-23)


### Features

* promote to stable ([#38](https://github.com/googleapis/nodejs-data-fusion/issues/38)) ([e563f41](https://github.com/googleapis/nodejs-data-fusion/commit/e563f415e2ca24b8f8c524c8044bcf75f26ef176))

## 0.2.0 (2021-10-07)


### Features

* add templated files from docker image ([2e5a5c2](https://www.github.com/googleapis/nodejs-data-fusion/commit/2e5a5c2646d7e31887ab788c96dc26c48c877e1e))
* add tests and samples to library ([#1](https://www.github.com/googleapis/nodejs-data-fusion/issues/1)) ([6efc5b9](https://www.github.com/googleapis/nodejs-data-fusion/commit/6efc5b94a5503edcd08f7bcf34f604ad644c2125))
* initial stub of library ([09de8f4](https://www.github.com/googleapis/nodejs-data-fusion/commit/09de8f4482387c1f54aec34b53c8cdf30d8e3f22))


### Build System

* initial release version ([#4](https://www.github.com/googleapis/nodejs-data-fusion/issues/4)) ([c7b6662](https://www.github.com/googleapis/nodejs-data-fusion/commit/c7b66626903c5ad588c244258b511f0a159ffde0))
