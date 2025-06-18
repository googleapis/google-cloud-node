# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v4.0.1...vmmigration-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v4.0.0...vmmigration-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6189](https://github.com/googleapis/google-cloud-node/issues/6189)) ([0eab6d4](https://github.com/googleapis/google-cloud-node/commit/0eab6d40a12aa7f387a4621c6611aa4cbc86e178))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.3.1...vmmigration-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.3.1](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.3.0...vmmigration-v3.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.2.0...vmmigration-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.1.0...vmmigration-v3.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.0.2...vmmigration-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [3.0.2](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.0.1...vmmigration-v3.0.2) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v3.0.0...vmmigration-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v2.3.2...vmmigration-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.3.2](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v2.3.1...vmmigration-v2.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v2.3.0...vmmigration-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/vmmigration-v2.2.1...vmmigration-v2.3.0) (2023-01-28)


### Features

* AWS as a source ([#3835](https://github.com/googleapis/google-cloud-node/issues/3835)) ([b1c4b9c](https://github.com/googleapis/google-cloud-node/commit/b1c4b9c89d40c30e8dd9d5a4d460b0f74069195e))

## [2.2.1](https://github.com/googleapis/nodejs-vmmigration/compare/v2.2.0...v2.2.1) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#68](https://github.com/googleapis/nodejs-vmmigration/issues/68)) ([658939e](https://github.com/googleapis/nodejs-vmmigration/commit/658939eddfed48c3057a34053200e4773013cd36))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-vmmigration/issues/1553)) ([#58](https://github.com/googleapis/nodejs-vmmigration/issues/58)) ([2904a86](https://github.com/googleapis/nodejs-vmmigration/commit/2904a8663508a1bef3c8637ebad6702d05bd1935))
* Preserve default values in x-goog-request-params header ([#62](https://github.com/googleapis/nodejs-vmmigration/issues/62)) ([2a42aea](https://github.com/googleapis/nodejs-vmmigration/commit/2a42aea5c7b10e97b0f43f134d4351a0bd14abf0))
* Regenerated protos JS and TS definitions ([#71](https://github.com/googleapis/nodejs-vmmigration/issues/71)) ([603438c](https://github.com/googleapis/nodejs-vmmigration/commit/603438c4a72376d71f87d16ef65de11e1e94589a))
* Use _gaxModule when accessing gax for bundling ([#59](https://github.com/googleapis/nodejs-vmmigration/issues/59)) ([a74d392](https://github.com/googleapis/nodejs-vmmigration/commit/a74d39272844d45c1730eafc416a88c049499b18))

## [2.2.0](https://github.com/googleapis/nodejs-vmmigration/compare/v2.1.0...v2.2.0) (2022-08-23)


### Features

* add upgrade appliance method, update other methods ([#53](https://github.com/googleapis/nodejs-vmmigration/issues/53)) ([5271100](https://github.com/googleapis/nodejs-vmmigration/commit/5271100c96928df3fd032e64718c19522c66d99e))


### Bug Fixes

* better support for fallback mode ([#55](https://github.com/googleapis/nodejs-vmmigration/issues/55)) ([d3c2f2d](https://github.com/googleapis/nodejs-vmmigration/commit/d3c2f2d3e730bf8d3c8168cb6fbc567f2fe01159))
* change import long to require ([#56](https://github.com/googleapis/nodejs-vmmigration/issues/56)) ([7eb23fd](https://github.com/googleapis/nodejs-vmmigration/commit/7eb23fdc358abad1d0dc6432432732c2b75091a2))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-vmmigration/issues/1546)) ([#57](https://github.com/googleapis/nodejs-vmmigration/issues/57)) ([ad4ccd1](https://github.com/googleapis/nodejs-vmmigration/commit/ad4ccd1032c48002770bff672d2781bd63c1e692))

## [2.1.0](https://github.com/googleapis/nodejs-vmmigration/compare/v2.0.0...v2.1.0) (2022-07-13)


### Features

* support regapic LRO ([#49](https://github.com/googleapis/nodejs-vmmigration/issues/49)) ([8a8ba70](https://github.com/googleapis/nodejs-vmmigration/commit/8a8ba705e8d956e080cc8ee23cf01b1605166283))

## [2.0.0](https://github.com/googleapis/nodejs-vmmigration/compare/v1.0.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#44)

### Build System

* update library to use Node 12 ([#44](https://github.com/googleapis/nodejs-vmmigration/issues/44)) ([fb018e1](https://github.com/googleapis/nodejs-vmmigration/commit/fb018e1b1eab36f07dfe5fc5d8279f1630271fb4))

## [1.0.0](https://github.com/googleapis/nodejs-vmmigration/compare/v0.2.0...v1.0.0) (2022-03-23)


### Features

* promote to stable ([#31](https://github.com/googleapis/nodejs-vmmigration/issues/31)) ([edfa50a](https://github.com/googleapis/nodejs-vmmigration/commit/edfa50a047cf5968b75cd95b38d3c2953dd1cdca))

## 0.2.0 (2021-12-23)


### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-vmmigration/issues/1)) ([eccd6fb](https://www.github.com/googleapis/nodejs-vmmigration/commit/eccd6fb354e54b8077f8fa044bf857c6b2bf7378))
* initial stub of library ([761868c](https://www.github.com/googleapis/nodejs-vmmigration/commit/761868c602c4857f5ef9517c478f034a65e97765))


### Bug Fixes

* **release:** release as pre-major ([#6](https://www.github.com/googleapis/nodejs-vmmigration/issues/6)) ([bedb2b7](https://www.github.com/googleapis/nodejs-vmmigration/commit/bedb2b7c0e2816742235d7b7e6a3b9325fb65344))
