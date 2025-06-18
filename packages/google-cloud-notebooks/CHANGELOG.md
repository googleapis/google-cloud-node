# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v4.0.1...notebooks-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6301](https://github.com/googleapis/google-cloud-node/issues/6301)) ([42754a7](https://github.com/googleapis/google-cloud-node/commit/42754a72b34a01d201341428b4a358ff781b0612))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/notebooks-v4.0.0...notebooks-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6187](https://github.com/googleapis/google-cloud-node/issues/6187)) ([b33692d](https://github.com/googleapis/google-cloud-node/commit/b33692d64bd42b99f37d0f919f2b0c06a673ab7f))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.4.1...notebooks-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.4.1](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.4.0...notebooks-v3.4.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.3.0...notebooks-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.2.0...notebooks-v3.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.1.0...notebooks-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v3.0.0...notebooks-v3.1.0) (2023-09-06)


### Features

* [notebooks] clients for Notebooks API V2 ([#4549](https://github.com/googleapis/google-cloud-node/issues/4549)) ([7a5cfa5](https://github.com/googleapis/google-cloud-node/commit/7a5cfa5720b5adc98015a8173158f5c3245c8187))
* [notebooks] clients for Notebooks API V2 ([#4567](https://github.com/googleapis/google-cloud-node/issues/4567)) ([9cebaa2](https://github.com/googleapis/google-cloud-node/commit/9cebaa2aecc731f8fe9891453fc748f5b2be626b))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/notebooks-v2.1.4...notebooks-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.1.4](https://github.com/googleapis/google-cloud-node/compare/notebooks-v2.1.3...notebooks-v2.1.4) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.1.3](https://github.com/googleapis/google-cloud-node/compare/notebooks-v2.1.2...notebooks-v2.1.3) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.1.2](https://github.com/googleapis/nodejs-notebooks/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#174](https://github.com/googleapis/nodejs-notebooks/issues/174)) ([53ef94c](https://github.com/googleapis/nodejs-notebooks/commit/53ef94cba2356023c85ae8cf1812b64d8736ddfd))
* Preserve default values in x-goog-request-params header ([#167](https://github.com/googleapis/nodejs-notebooks/issues/167)) ([3bbba83](https://github.com/googleapis/nodejs-notebooks/commit/3bbba8390a8d40453ebae6f03aad6c1265ed6935))
* Regenerated protos JS and TS definitions ([#177](https://github.com/googleapis/nodejs-notebooks/issues/177)) ([085d2cc](https://github.com/googleapis/nodejs-notebooks/commit/085d2ccf4a2b8c20575e69ca8cb5680146ed0672))

## [2.1.1](https://github.com/googleapis/nodejs-notebooks/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#163](https://github.com/googleapis/nodejs-notebooks/issues/163)) ([66090cb](https://github.com/googleapis/nodejs-notebooks/commit/66090cb78f638fb0a7e2c95c5ce7fb4146a2bd42))
* Better support for fallback mode ([#156](https://github.com/googleapis/nodejs-notebooks/issues/156)) ([51ca0cd](https://github.com/googleapis/nodejs-notebooks/commit/51ca0cd37591dc8b1ab1c79ae84216845ebd2d64))
* Change import long to require ([#158](https://github.com/googleapis/nodejs-notebooks/issues/158)) ([c774bcb](https://github.com/googleapis/nodejs-notebooks/commit/c774bcbc1957df9c60b608c6d96b3d9a090f30f3))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-notebooks/issues/1553)) ([#162](https://github.com/googleapis/nodejs-notebooks/issues/162)) ([284f924](https://github.com/googleapis/nodejs-notebooks/commit/284f92495e8a7ec4875988a48d6b3f2627f25eb2))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-notebooks/issues/1546)) ([#161](https://github.com/googleapis/nodejs-notebooks/issues/161)) ([6723a6b](https://github.com/googleapis/nodejs-notebooks/commit/6723a6ba01aad07b0775d33f3ccf7507986457bc))

## [2.1.0](https://github.com/googleapis/nodejs-notebooks/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO, add import for system tests ([#146](https://github.com/googleapis/nodejs-notebooks/issues/146)) ([be0c483](https://github.com/googleapis/nodejs-notebooks/commit/be0c48337e659cc1e1ce94069e25722b05de215b))

## [2.0.0](https://github.com/googleapis/nodejs-notebooks/compare/v1.3.1...v2.0.0) (2022-06-09)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#140)
* make v1 default service (#126)

### Features

* make v1 default service ([#126](https://github.com/googleapis/nodejs-notebooks/issues/126)) ([57b21a7](https://github.com/googleapis/nodejs-notebooks/commit/57b21a7926f2170afdb8536fb4ad14311ef70e90))


### Build System

* update library to use Node 12 ([#140](https://github.com/googleapis/nodejs-notebooks/issues/140)) ([9a2359e](https://github.com/googleapis/nodejs-notebooks/commit/9a2359e000b052950ddab5cead1db77868499e65))

### [1.3.1](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.3.0...v1.3.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#89](https://www.github.com/googleapis/nodejs-notebooks/issues/89)) ([87276a1](https://www.github.com/googleapis/nodejs-notebooks/commit/87276a11f6410e5e6cb03c61c6e662c1bc92a063))

## [1.3.0](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.2.0...v1.3.0) (2021-08-30)


### Features

* added support for Notebooks v1 ([#87](https://www.github.com/googleapis/nodejs-notebooks/issues/87)) ([81c1c83](https://www.github.com/googleapis/nodejs-notebooks/commit/81c1c83a056839971fc7ed4fd273343812c207b5))

## [1.2.0](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.7...v1.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#84](https://www.github.com/googleapis/nodejs-notebooks/issues/84)) ([9aacdd1](https://www.github.com/googleapis/nodejs-notebooks/commit/9aacdd13e029aeedb51a56664998e899078cebc4))

### [1.1.7](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.6...v1.1.7) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#82](https://www.github.com/googleapis/nodejs-notebooks/issues/82)) ([e14dcb8](https://www.github.com/googleapis/nodejs-notebooks/commit/e14dcb83207e0e42534f6f81e862eacc0c209fc7))

### [1.1.6](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.5...v1.1.6) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#74](https://www.github.com/googleapis/nodejs-notebooks/issues/74)) ([497f853](https://www.github.com/googleapis/nodejs-notebooks/commit/497f853592ede51ab126837bf7fc2860f3cd2c5f))

### [1.1.5](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.4...v1.1.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#72](https://www.github.com/googleapis/nodejs-notebooks/issues/72)) ([95fb793](https://www.github.com/googleapis/nodejs-notebooks/commit/95fb7938435f2e77add1cd0bec4bf35bf524ba00))

### [1.1.4](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.3...v1.1.4) (2021-07-01)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#69](https://www.github.com/googleapis/nodejs-notebooks/issues/69)) ([d4d8d8d](https://www.github.com/googleapis/nodejs-notebooks/commit/d4d8d8dd5981fca6117417d2d259a28150e62a9a))

### [1.1.3](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.2...v1.1.3) (2021-06-23)


### Bug Fixes

* make request optional in all cases ([#65](https://www.github.com/googleapis/nodejs-notebooks/issues/65)) ([ee49e2c](https://www.github.com/googleapis/nodejs-notebooks/commit/ee49e2c7f97aeee8ee0b1872a3f3d9416febfcd2))

### [1.1.2](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.1...v1.1.2) (2021-06-07)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#58](https://www.github.com/googleapis/nodejs-notebooks/issues/58)) ([e85232e](https://www.github.com/googleapis/nodejs-notebooks/commit/e85232ee798d1de45dd13f4ba9d1d1e0982983c6))

### [1.1.1](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.1.0...v1.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#50](https://www.github.com/googleapis/nodejs-notebooks/issues/50)) ([06e8e1c](https://www.github.com/googleapis/nodejs-notebooks/commit/06e8e1cd2100e5a78c90be0e3b799b55a63dd5cd))
* use require() to load JSON protos ([#53](https://www.github.com/googleapis/nodejs-notebooks/issues/53)) ([5d38e0a](https://www.github.com/googleapis/nodejs-notebooks/commit/5d38e0a0c41450ea8ff5a8bf225d2c2db1ad79c3))

## [1.1.0](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.0.2...v1.1.0) (2021-01-09)


### Features

* adds style enumeration ([#28](https://www.github.com/googleapis/nodejs-notebooks/issues/28)) ([5caf3c3](https://www.github.com/googleapis/nodejs-notebooks/commit/5caf3c38eaa8c0d27350d65a4710bb78b74b8450))

### [1.0.2](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.0.1...v1.0.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#22](https://www.github.com/googleapis/nodejs-notebooks/issues/22)) ([9ef7f23](https://www.github.com/googleapis/nodejs-notebooks/commit/9ef7f235e134404a70ab95a96205d0bdf9610a85))

### [1.0.1](https://www.github.com/googleapis/nodejs-notebooks/compare/v1.0.0...v1.0.1) (2020-11-14)


### Bug Fixes

* export type for NotebookServiceClient ([#16](https://www.github.com/googleapis/nodejs-notebooks/issues/16)) ([a54fef9](https://www.github.com/googleapis/nodejs-notebooks/commit/a54fef99d2745b540f81421a2aff8c2f00bcf731))

## 1.0.0 (2020-09-03)


### ⚠ BREAKING CHANGES

* generation of @google-cloud/notebooks (#1)

### Features

* generation of @google-cloud/notebooks ([#1](https://www.github.com/googleapis/nodejs-notebooks/issues/1)) ([c02d503](https://www.github.com/googleapis/nodejs-notebooks/commit/c02d503970dc27bcc2fb20df86cb70760821cba0))
* initial files for launch ([5e7b097](https://www.github.com/googleapis/nodejs-notebooks/commit/5e7b0970a32a8803bed7450fcb854c05725a8d58))
