# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v4.0.1...os-config-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6302](https://github.com/googleapis/google-cloud-node/issues/6302)) ([abc35be](https://github.com/googleapis/google-cloud-node/commit/abc35be4817709467e6c6b2a12ac4e749ffed72d))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/os-config-v4.0.0...os-config-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6187](https://github.com/googleapis/google-cloud-node/issues/6187)) ([b33692d](https://github.com/googleapis/google-cloud-node/commit/b33692d64bd42b99f37d0f919f2b0c06a673ab7f))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v3.3.0...os-config-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v3.2.0...os-config-v3.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v3.1.0...os-config-v3.2.0) (2024-04-05)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5190](https://github.com/googleapis/google-cloud-node/issues/5190)) ([b569fbe](https://github.com/googleapis/google-cloud-node/commit/b569fbe1472d0fd71c1bfb58d0b1661814ac5727))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v3.0.1...os-config-v3.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/os-config-v3.0.0...os-config-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v2.2.2...os-config-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.2.2](https://github.com/googleapis/google-cloud-node/compare/os-config-v2.2.1...os-config-v2.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/os-config-v2.2.0...os-config-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/os-config-v2.1.2...os-config-v2.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))

## [2.1.2](https://github.com/googleapis/nodejs-os-config/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#220](https://github.com/googleapis/nodejs-os-config/issues/220)) ([13ef9fc](https://github.com/googleapis/nodejs-os-config/commit/13ef9fc7804fe21d200d3053196371f5a621c18a))
* **deps:** Use google-gax v3.5.2 ([#228](https://github.com/googleapis/nodejs-os-config/issues/228)) ([c02bb82](https://github.com/googleapis/nodejs-os-config/commit/c02bb8288378280736343c0022ec8c7693285738))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-os-config/issues/1553)) ([#219](https://github.com/googleapis/nodejs-os-config/issues/219)) ([7c06e21](https://github.com/googleapis/nodejs-os-config/commit/7c06e2122f41f730d746c68b5ddaa2e93e5972dd))
* Preserve default values in x-goog-request-params header ([#222](https://github.com/googleapis/nodejs-os-config/issues/222)) ([19a88d1](https://github.com/googleapis/nodejs-os-config/commit/19a88d1d760b3235df81afe04d0de9ead31b55d1))
* Regenerated protos JS and TS definitions ([#231](https://github.com/googleapis/nodejs-os-config/issues/231)) ([9c1c5ee](https://github.com/googleapis/nodejs-os-config/commit/9c1c5ee464ca93f974e88d52cd8045cfd54b6872))
* use google-gax v3.3.0 ([7c06e21](https://github.com/googleapis/nodejs-os-config/commit/7c06e2122f41f730d746c68b5ddaa2e93e5972dd))

## [2.1.1](https://github.com/googleapis/nodejs-os-config/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#215](https://github.com/googleapis/nodejs-os-config/issues/215)) ([6460d25](https://github.com/googleapis/nodejs-os-config/commit/6460d2540ee1c65230c5bfefac19d5f60e57dd35))
* change import long to require ([#216](https://github.com/googleapis/nodejs-os-config/issues/216)) ([4a53d92](https://github.com/googleapis/nodejs-os-config/commit/4a53d9258f285f29b7fe47659d76368f7f116b35))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-os-config/issues/1546)) ([#218](https://github.com/googleapis/nodejs-os-config/issues/218)) ([60e2d27](https://github.com/googleapis/nodejs-os-config/commit/60e2d273dcff7b2d88db8b4689524341e138edd3))

## [2.1.0](https://github.com/googleapis/nodejs-os-config/compare/v2.0.0...v2.1.0) (2022-07-02)


### Features

* REGAPIC LRO; fix: make some camelcased methods work ([#211](https://github.com/googleapis/nodejs-os-config/issues/211)) ([af5d7d2](https://github.com/googleapis/nodejs-os-config/commit/af5d7d2c688c081a028c33f14490271ce2e52725))

## [2.0.0](https://github.com/googleapis/nodejs-os-config/compare/v1.12.1...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#204)

### Build System

* update library to use Node 12 ([#204](https://github.com/googleapis/nodejs-os-config/issues/204)) ([39b393c](https://github.com/googleapis/nodejs-os-config/commit/39b393c6031079fba097b38458be6db8625515c5))

### [1.12.1](https://github.com/googleapis/nodejs-os-config/compare/v1.12.0...v1.12.1) (2022-02-11)


### Bug Fixes

* update third_party protos to the most actual version: ([#186](https://github.com/googleapis/nodejs-os-config/issues/186)) ([9aceeab](https://github.com/googleapis/nodejs-os-config/commit/9aceeab92c12856e88cb7e59db29ee41cfba5465))

## [1.12.0](https://github.com/googleapis/nodejs-os-config/compare/v1.11.0...v1.12.0) (2022-02-08)


### Features

* Update osconfig v1 protos ([#183](https://github.com/googleapis/nodejs-os-config/issues/183)) ([8ce2c5a](https://github.com/googleapis/nodejs-os-config/commit/8ce2c5ab9cfe2d4d0e12a574135b737279b86b22))

## [1.11.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.10.0...v1.11.0) (2021-11-12)


### Features

* Update OSConfig API ([#164](https://www.github.com/googleapis/nodejs-os-config/issues/164)) ([19e820a](https://www.github.com/googleapis/nodejs-os-config/commit/19e820a362341b10225562bf76dc0f34e3e3fcae))

## [1.10.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.9.1...v1.10.0) (2021-10-20)


### Features

* Update osconfig v1 and v1alpha RecurringSchedule.Frequency with DAILY frequency ([0a79eba](https://www.github.com/googleapis/nodejs-os-config/commit/0a79eba9f2a3e0939a74c9aa437b8890801ebd2a))

### [1.9.1](https://www.github.com/googleapis/nodejs-os-config/compare/v1.9.0...v1.9.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#146](https://www.github.com/googleapis/nodejs-os-config/issues/146)) ([3947132](https://www.github.com/googleapis/nodejs-os-config/commit/39471322fa54f12943ff74e4ff4548034a99c5e6))

## [1.9.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.8.0...v1.9.0) (2021-09-07)


### Features

* add OSConfigZonalService API Committer: [@jaiminsh](https://www.github.com/jaiminsh) ([#144](https://www.github.com/googleapis/nodejs-os-config/issues/144)) ([317a7a2](https://www.github.com/googleapis/nodejs-os-config/commit/317a7a2c3ea899b28fd0a5f2f4abe18524df1f7a))

## [1.8.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.7.0...v1.8.0) (2021-08-30)


### Features

* Update osconfig v1 and v1alpha with WindowsApplication ([#142](https://www.github.com/googleapis/nodejs-os-config/issues/142)) ([6ad0c6d](https://www.github.com/googleapis/nodejs-os-config/commit/6ad0c6d547891986e3080fbcfc73ee64f7a31681))

## [1.7.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.6...v1.7.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#138](https://www.github.com/googleapis/nodejs-os-config/issues/138)) ([321fc5d](https://www.github.com/googleapis/nodejs-os-config/commit/321fc5d9088ad878d5343735659fc2884a76136a))

### [1.6.6](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.5...v1.6.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#136](https://www.github.com/googleapis/nodejs-os-config/issues/136)) ([d2f27b5](https://www.github.com/googleapis/nodejs-os-config/commit/d2f27b551e224cfcf5bc43dd8604dd1f2aa59fe9))

### [1.6.5](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.4...v1.6.5) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#128](https://www.github.com/googleapis/nodejs-os-config/issues/128)) ([4d7deda](https://www.github.com/googleapis/nodejs-os-config/commit/4d7deda72a06ecdfa2e88a9c2373fb3ec6365b77))

### [1.6.4](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.3...v1.6.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#126](https://www.github.com/googleapis/nodejs-os-config/issues/126)) ([a2744c6](https://www.github.com/googleapis/nodejs-os-config/commit/a2744c63a4d39a76e33f8a99d92c4027f25fc3a7))

### [1.6.3](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.2...v1.6.3) (2021-07-01)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#123](https://www.github.com/googleapis/nodejs-os-config/issues/123)) ([29f562b](https://www.github.com/googleapis/nodejs-os-config/commit/29f562b5f3489e2bfd2d2ae797d3f0212375fe01))

### [1.6.2](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.1...v1.6.2) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#117](https://www.github.com/googleapis/nodejs-os-config/issues/117)) ([4d1bbb8](https://www.github.com/googleapis/nodejs-os-config/commit/4d1bbb8593c3ca0ea0f6e8af1737b7106239617b))

### [1.6.1](https://www.github.com/googleapis/nodejs-os-config/compare/v1.6.0...v1.6.1) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#108](https://www.github.com/googleapis/nodejs-os-config/issues/108)) ([3d61a36](https://www.github.com/googleapis/nodejs-os-config/commit/3d61a36652465fa948595a18a99e0ebb3ecd0eac))

## [1.6.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.5.0...v1.6.0) (2021-05-24)


### Features

* OSConfig: add ExecResourceOutput and per step error message. ([#105](https://www.github.com/googleapis/nodejs-os-config/issues/105)) ([3d9dbe9](https://www.github.com/googleapis/nodejs-os-config/commit/3d9dbe9f619798e691df9e04a65f8e42a2c2b0bc))

## [1.5.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.4.0...v1.5.0) (2021-05-12)


### Features

* add OSConfig v1alpha api ([#100](https://www.github.com/googleapis/nodejs-os-config/issues/100)) ([aa51617](https://www.github.com/googleapis/nodejs-os-config/commit/aa51617e8d473a1b2b08f878d3c9609b58274341))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#95](https://www.github.com/googleapis/nodejs-os-config/issues/95)) ([1aae782](https://www.github.com/googleapis/nodejs-os-config/commit/1aae7821fe5d4606da2e04c05e383b43b698067e))
* use require() to load JSON protos ([#98](https://www.github.com/googleapis/nodejs-os-config/issues/98)) ([d9e466b](https://www.github.com/googleapis/nodejs-os-config/commit/d9e466b9e54bd6ec667a0dfd324a47ec5593d7e1))

## [1.4.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.3.1...v1.4.0) (2021-01-09)


### Features

* adds style enumeration ([#75](https://www.github.com/googleapis/nodejs-os-config/issues/75)) ([797ad14](https://www.github.com/googleapis/nodejs-os-config/commit/797ad14b56e331d5926ca7d952583b4094217ccc))

### [1.3.1](https://www.github.com/googleapis/nodejs-os-config/compare/v1.3.0...v1.3.1) (2020-11-25)


### Bug Fixes

* check for fetch on window ([#69](https://www.github.com/googleapis/nodejs-os-config/issues/69)) ([02a5374](https://www.github.com/googleapis/nodejs-os-config/commit/02a53747e1b52d4a5d05714d8868ceee2c9eabb1))

## [1.3.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.2.3...v1.3.0) (2020-11-12)


### Features

* Added PatchRollout feature to PatchDeployments inventory proto definitions for VM Manager Inventory ([#62](https://www.github.com/googleapis/nodejs-os-config/issues/62)) ([7c4e2a1](https://www.github.com/googleapis/nodejs-os-config/commit/7c4e2a171346cb5f5ad5068c25b4c982450585c3))

### [1.2.3](https://www.github.com/googleapis/nodejs-os-config/compare/v1.2.2...v1.2.3) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#59](https://www.github.com/googleapis/nodejs-os-config/issues/59)) ([c6409f8](https://www.github.com/googleapis/nodejs-os-config/commit/c6409f8f5eae987853369a4206671b353d1da983))

### [1.2.2](https://www.github.com/googleapis/nodejs-os-config/compare/v1.2.1...v1.2.2) (2020-07-29)


### Bug Fixes

* move gitattributes files to node templates ([#34](https://www.github.com/googleapis/nodejs-os-config/issues/34)) ([6d2276d](https://www.github.com/googleapis/nodejs-os-config/commit/6d2276d2b7b55672b61385b998bb490baf59bbbc))

### [1.2.1](https://www.github.com/googleapis/nodejs-os-config/compare/v1.2.0...v1.2.1) (2020-06-18)


### Bug Fixes

* update node issue template ([#18](https://www.github.com/googleapis/nodejs-os-config/issues/18)) ([3d03605](https://www.github.com/googleapis/nodejs-os-config/commit/3d0360512d98ecdc11fd0267a0d4bfed5bc52900))

## [1.2.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.1.0...v1.2.0) (2020-06-16)


### Features

* promote library to GA ([#16](https://www.github.com/googleapis/nodejs-os-config/issues/16)) ([04b3c63](https://www.github.com/googleapis/nodejs-os-config/commit/04b3c63d188e2b8da10594bae80b4e47b7a89390))

## [1.1.0](https://www.github.com/googleapis/nodejs-os-config/compare/v1.0.0...v1.1.0) (2020-06-15)


### Features

* move ts target to es2018 from es2016 ([#11](https://www.github.com/googleapis/nodejs-os-config/issues/11)) ([eec48b0](https://www.github.com/googleapis/nodejs-os-config/commit/eec48b072d3eeb802b0736494ffba6f39d23ae19))


### Bug Fixes

* proper fallback option handling ([40f5d76](https://www.github.com/googleapis/nodejs-os-config/commit/40f5d76a8401f5a534e17fe7d5613fc839671383))

## 1.0.0 (2020-05-12)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-os-config/issues/1)) ([b526b74](https://www.github.com/googleapis/nodejs-os-config/commit/b526b74051bd6dc093f3afb4dc2692cbb6bd8c3a))
