# Changelog

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v4.1.0...org-policy-v4.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6302](https://github.com/googleapis/google-cloud-node/issues/6302)) ([abc35be](https://github.com/googleapis/google-cloud-node/commit/abc35be4817709467e6c6b2a12ac4e749ffed72d))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v4.0.1...org-policy-v4.1.0) (2025-05-09)


### Features

* [orgpolicy] Add managed constraints new fields (e.g. parameter) ([#6277](https://github.com/googleapis/google-cloud-node/issues/6277)) ([424082d](https://github.com/googleapis/google-cloud-node/commit/424082dcf128f8bae4c129f8fbae904f71e60825))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/org-policy-v4.0.0...org-policy-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6187](https://github.com/googleapis/google-cloud-node/issues/6187)) ([b33692d](https://github.com/googleapis/google-cloud-node/commit/b33692d64bd42b99f37d0f919f2b0c06a673ab7f))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.5.0...org-policy-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.4.0...org-policy-v3.5.0) (2024-09-24)


### Features

* [orgpolicy] Support adding constraints to new method types REMOVE_GRANTS and GOVERN_TAGS ([#5687](https://github.com/googleapis/google-cloud-node/issues/5687)) ([8661267](https://github.com/googleapis/google-cloud-node/commit/86612677aaaf491b1c55cc850febd693b3ece358))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.3.0...org-policy-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.2.0...org-policy-v3.3.0) (2024-04-05)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5190](https://github.com/googleapis/google-cloud-node/issues/5190)) ([b569fbe](https://github.com/googleapis/google-cloud-node/commit/b569fbe1472d0fd71c1bfb58d0b1661814ac5727))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.1.0...org-policy-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.0.1...org-policy-v3.1.0) (2024-01-05)


### Features

* [orgpolicy] Add custom constraints CRUD APIs, proper etag support in Org Policy Update/Delete API ([#4896](https://github.com/googleapis/google-cloud-node/issues/4896)) ([adb6c37](https://github.com/googleapis/google-cloud-node/commit/adb6c375e550a8c72595d600491ed5ab869fd52f))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/org-policy-v3.0.0...org-policy-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v2.1.2...org-policy-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.1.2](https://github.com/googleapis/google-cloud-node/compare/org-policy-v2.1.1...org-policy-v2.1.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.1.1](https://github.com/googleapis/google-cloud-node/compare/org-policy-v2.1.0...org-policy-v2.1.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/org-policy-v2.0.3...org-policy-v2.1.0) (2023-01-28)


### Features

* Support for OrgPolicy dry runs ([#3864](https://github.com/googleapis/google-cloud-node/issues/3864)) ([f3f7f4f](https://github.com/googleapis/google-cloud-node/commit/f3f7f4f7181ddb76529397675df5b13f1616158b))

## [2.0.3](https://github.com/googleapis/nodejs-org-policy/compare/v2.0.2...v2.0.3) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#126](https://github.com/googleapis/nodejs-org-policy/issues/126)) ([c7147d4](https://github.com/googleapis/nodejs-org-policy/commit/c7147d40a9ed114ec42997d49c2f5dfcff948aad))
* **deps:** Use google-gax v3.5.2 ([#134](https://github.com/googleapis/nodejs-org-policy/issues/134)) ([0f1bfb0](https://github.com/googleapis/nodejs-org-policy/commit/0f1bfb0007ade736c2ec91f32ff187c80b2d6761))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-org-policy/issues/1553)) ([#125](https://github.com/googleapis/nodejs-org-policy/issues/125)) ([068b0a5](https://github.com/googleapis/nodejs-org-policy/commit/068b0a55fe805cedab9e66f62071c8be56f465ed))
* Preserve default values in x-goog-request-params header ([#128](https://github.com/googleapis/nodejs-org-policy/issues/128)) ([3f80014](https://github.com/googleapis/nodejs-org-policy/commit/3f80014a3c75311555df6cfde8470ae1f72a686f))
* Regenerated protos JS and TS definitions ([#137](https://github.com/googleapis/nodejs-org-policy/issues/137)) ([1606459](https://github.com/googleapis/nodejs-org-policy/commit/1606459c847f2ed945dccc8e43d57d273fac7ea9))
* use google-gax v3.3.0 ([068b0a5](https://github.com/googleapis/nodejs-org-policy/commit/068b0a55fe805cedab9e66f62071c8be56f465ed))

## [2.0.2](https://github.com/googleapis/nodejs-org-policy/compare/v2.0.1...v2.0.2) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#121](https://github.com/googleapis/nodejs-org-policy/issues/121)) ([16843cd](https://github.com/googleapis/nodejs-org-policy/commit/16843cde09ec1a5c8d106995da2300216f593ea9))
* change import long to require ([#122](https://github.com/googleapis/nodejs-org-policy/issues/122)) ([6ecde2c](https://github.com/googleapis/nodejs-org-policy/commit/6ecde2c561576546b6b214dfcb3a4bd8e31814d8))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-org-policy/issues/1546)) ([#124](https://github.com/googleapis/nodejs-org-policy/issues/124)) ([e894016](https://github.com/googleapis/nodejs-org-policy/commit/e894016082069fe0b87403977ac830df588b1ac8))

## [2.0.1](https://github.com/googleapis/nodejs-org-policy/compare/v2.0.0...v2.0.1) (2022-06-30)


### Bug Fixes

* **docs:** describe fallback rest option ([#115](https://github.com/googleapis/nodejs-org-policy/issues/115)) ([c54a19b](https://github.com/googleapis/nodejs-org-policy/commit/c54a19be2c28a298906ee5b451cc2180951ce1f4))

## [2.0.0](https://github.com/googleapis/nodejs-org-policy/compare/v1.1.2...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* Update library to use Node 12
* update library to use Node 12 (#108)

### Build System

* update library to use Node 12 ([#108](https://github.com/googleapis/nodejs-org-policy/issues/108)) ([310e83f](https://github.com/googleapis/nodejs-org-policy/commit/310e83ffe6f8c09ead2d4b82c01ec29aa09a6b6b))


### *build

* Update library to use Node 12 ([310e83f](https://github.com/googleapis/nodejs-org-policy/commit/310e83ffe6f8c09ead2d4b82c01ec29aa09a6b6b))

### [1.1.2](https://github.com/googleapis/nodejs-org-policy/compare/v1.1.1...v1.1.2) (2022-02-16)


### Bug Fixes

* deprecate AlternativePolicySpec ([#90](https://github.com/googleapis/nodejs-org-policy/issues/90)) ([f25e613](https://github.com/googleapis/nodejs-org-policy/commit/f25e61305d09c3b5215e203bb36753568bb53d0a))

### [1.1.1](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.1.0...v1.1.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#60](https://www.github.com/googleapis/nodejs-org-policy/issues/60)) ([b15a6d6](https://www.github.com/googleapis/nodejs-org-policy/commit/b15a6d675382145f2a270d24ee456f8400dd2a99))

## [1.1.0](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.7...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#56](https://www.github.com/googleapis/nodejs-org-policy/issues/56)) ([79c838f](https://www.github.com/googleapis/nodejs-org-policy/commit/79c838f5666f033942c4c2d4b65fac32e074a871))

### [1.0.7](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.6...v1.0.7) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#54](https://www.github.com/googleapis/nodejs-org-policy/issues/54)) ([a833560](https://www.github.com/googleapis/nodejs-org-policy/commit/a83356087f9ac4e51a031eeb13f536d9f30e2946))

### [1.0.6](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.5...v1.0.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#46](https://www.github.com/googleapis/nodejs-org-policy/issues/46)) ([d63afc5](https://www.github.com/googleapis/nodejs-org-policy/commit/d63afc5cf696d28498e272e94f63f1706d2f7f00))

### [1.0.5](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.4...v1.0.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#44](https://www.github.com/googleapis/nodejs-org-policy/issues/44)) ([3e76c8d](https://www.github.com/googleapis/nodejs-org-policy/commit/3e76c8d8e3255b2fef3d17c7ab79b25da599d0c7))

### [1.0.4](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.3...v1.0.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#41](https://www.github.com/googleapis/nodejs-org-policy/issues/41)) ([e5b7d66](https://www.github.com/googleapis/nodejs-org-policy/commit/e5b7d66e9284bb2f7ac14bb1196fc05f7c7f1bc4))

### [1.0.3](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.2...v1.0.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#37](https://www.github.com/googleapis/nodejs-org-policy/issues/37)) ([4129413](https://www.github.com/googleapis/nodejs-org-policy/commit/4129413f5cb8a6efd6bc205a337d0a69549920d0))

### [1.0.2](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.1...v1.0.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#30](https://www.github.com/googleapis/nodejs-org-policy/issues/30)) ([8df94f7](https://www.github.com/googleapis/nodejs-org-policy/commit/8df94f7fb7ef3b47924048c878ea9827b3db1236))

### [1.0.1](https://www.github.com/googleapis/nodejs-org-policy/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#22](https://www.github.com/googleapis/nodejs-org-policy/issues/22)) ([6cedadc](https://www.github.com/googleapis/nodejs-org-policy/commit/6cedadc06a04f7ab6fe0f9c0610ad4caef9be2d6))
* use require() to load JSON protos ([#25](https://www.github.com/googleapis/nodejs-org-policy/issues/25)) ([56ff04c](https://www.github.com/googleapis/nodejs-org-policy/commit/56ff04c79de8be8a6d7554732b5e92d37a08440c))

## 1.0.0 (2021-02-24)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* add tests and samples to library ([9815c45](https://www.github.com/googleapis/nodejs-org-policy/commit/9815c4580cd4cac10a54d44823463955a96cd1dc))
* initial stub of library ([e4747f7](https://www.github.com/googleapis/nodejs-org-policy/commit/e4747f7250d3ef8ea50c9d7422e7c8f2788435b2))


### Bug Fixes

* name ([6e75f44](https://www.github.com/googleapis/nodejs-org-policy/commit/6e75f441b9edc089c98694f1a44c68aec97c1674))
* naming ([73587b3](https://www.github.com/googleapis/nodejs-org-policy/commit/73587b3be98fae59645ec4c71de25322a2002f40))
