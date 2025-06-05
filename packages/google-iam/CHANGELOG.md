# Changelog

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/iam-v2.1.0...iam-v2.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6304](https://github.com/googleapis/google-cloud-node/issues/6304)) ([132240f](https://github.com/googleapis/google-cloud-node/commit/132240fbf6cb29b309b76c1d60f0611720590847))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/iam-v2.0.1...iam-v2.1.0) (2025-05-09)


### Features

* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/iam-v2.0.0...iam-v2.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6190](https://github.com/googleapis/google-cloud-node/issues/6190)) ([f4866df](https://github.com/googleapis/google-cloud-node/commit/f4866dfa6ab481163150f54928a9857d2dfef948))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/iam-v1.3.1...iam-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* Add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/google-cloud-node/issues/1671)) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Bug Fixes

* Add json files to tsconfig templates ([#1692](https://github.com/googleapis/google-cloud-node/issues/1692)) (ba6be1d) ([7a23322](https://github.com/googleapis/google-cloud-node/commit/7a23322530b610eec2fe4c18fe1854048f31c811))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.3.1](https://github.com/googleapis/google-cloud-node/compare/iam-v1.3.0...iam-v1.3.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6019](https://github.com/googleapis/google-cloud-node/issues/6019)) ([734397c](https://github.com/googleapis/google-cloud-node/commit/734397c6b98d0aafe8832544da3f483b1eade1b2))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/iam-v1.2.0...iam-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/iam-v1.1.0...iam-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5192](https://github.com/googleapis/google-cloud-node/issues/5192)) ([b926f13](https://github.com/googleapis/google-cloud-node/commit/b926f1326ea4df73c411dbeb7e529f8d9ccc3642))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/iam-v1.0.1...iam-v1.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5029](https://github.com/googleapis/google-cloud-node/issues/5029)) ([09e59ad](https://github.com/googleapis/google-cloud-node/commit/09e59ad6e34001a33d01894ccd5a0643f1a84883))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/iam-v1.0.0...iam-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4589](https://github.com/googleapis/google-cloud-node/issues/4589)) ([07967ad](https://github.com/googleapis/google-cloud-node/commit/07967add1b5fc28b548cf74721b595ea0ba90d5b))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/iam-v0.3.2...iam-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/iam-v0.3.1...iam-v0.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/iam-v0.3.0...iam-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/iam-v0.2.2...iam-v0.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [0.2.2](https://github.com/googleapis/google-cloud-node/compare/iam-v0.2.1...iam-v0.2.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/iam-v0.2.0...iam-v0.2.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/iam-v0.1.1...iam-v0.2.0) (2022-09-30)


### Features

* remove unused ListApplicablePolicies ([5d5b1bc](https://github.com/googleapis/google-cloud-node/commit/5d5b1bcaaccaf87a3bd58fa0499fa77de80bffe4))
* Remove unused ListApplicablePolicies ([#3370](https://github.com/googleapis/google-cloud-node/issues/3370)) ([5d5b1bc](https://github.com/googleapis/google-cloud-node/commit/5d5b1bcaaccaf87a3bd58fa0499fa77de80bffe4))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/iam-v0.1.0...iam-v0.1.1) (2022-09-28)


### Bug Fixes

* preserve default values in x-goog-request-params header ([#3353](https://github.com/googleapis/google-cloud-node/issues/3353)) ([da99ad5](https://github.com/googleapis/google-cloud-node/commit/da99ad57f592a504750d57fdb1c7423734fec069))

## 0.1.0 (2022-09-09)


### Features

* add initial files for google.iam.v2 ([f8347a9](https://github.com/googleapis/google-cloud-node/commit/f8347a92e644e9efa0a2d41bd22c38867582b4bc))
