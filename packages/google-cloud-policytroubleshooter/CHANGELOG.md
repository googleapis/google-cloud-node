# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v4.0.1...policy-troubleshooter-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6302](https://github.com/googleapis/google-cloud-node/issues/6302)) ([abc35be](https://github.com/googleapis/google-cloud-node/commit/abc35be4817709467e6c6b2a12ac4e749ffed72d))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v4.0.0...policy-troubleshooter-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6187](https://github.com/googleapis/google-cloud-node/issues/6187)) ([b33692d](https://github.com/googleapis/google-cloud-node/commit/b33692d64bd42b99f37d0f919f2b0c06a673ab7f))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.4.0...policy-troubleshooter-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([b99c5f8](https://github.com/googleapis/google-cloud-node/commit/b99c5f8269a8401c72e9c913971c7e90467209e2))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.3.0...policy-troubleshooter-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.2.0...policy-troubleshooter-v3.3.0) (2024-04-05)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5190](https://github.com/googleapis/google-cloud-node/issues/5190)) ([b569fbe](https://github.com/googleapis/google-cloud-node/commit/b569fbe1472d0fd71c1bfb58d0b1661814ac5727))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.1.1...policy-troubleshooter-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.1.1](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.1.0...policy-troubleshooter-v3.1.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))
* **deps:** Update dependency @google-cloud/local-auth to v3 ([#4546](https://github.com/googleapis/google-cloud-node/issues/4546)) ([f2beef4](https://github.com/googleapis/google-cloud-node/commit/f2beef407ce694af7133d0013221c11e7f093a59))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v3.0.0...policy-troubleshooter-v3.1.0) (2023-08-09)


### Features

* Add initial files for google.cloud.policytroubleshooter.iam.v3beta ([#4499](https://github.com/googleapis/google-cloud-node/issues/4499)) ([cff0faf](https://github.com/googleapis/google-cloud-node/commit/cff0faf8dd014d164c160cb0f6a07b5817c1183a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.1.0...policy-troubleshooter-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.0.8...policy-troubleshooter-v2.1.0) (2023-07-24)


### Features

* [policytroubleshooter] include errors in troubleshoot response ([#4427](https://github.com/googleapis/google-cloud-node/issues/4427)) ([18a983e](https://github.com/googleapis/google-cloud-node/commit/18a983ed186ad8a5047d5d040b178214f3cfc228))

## [2.0.8](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.0.7...policy-troubleshooter-v2.0.8) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.0.7](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.0.6...policy-troubleshooter-v2.0.7) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3989](https://github.com/googleapis/google-cloud-node/issues/3989)) ([95399f7](https://github.com/googleapis/google-cloud-node/commit/95399f731547b06cde5ed0914d89c59fdc9fd968))

## [2.0.6](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.0.5...policy-troubleshooter-v2.0.6) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [2.0.5](https://github.com/googleapis/google-cloud-node/compare/policy-troubleshooter-v2.0.4...policy-troubleshooter-v2.0.5) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [2.0.4](https://github.com/googleapis/nodejs-policy-troubleshooter/compare/v2.0.3...v2.0.4) (2022-09-14)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#142](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/142)) ([98500d1](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/98500d13ecdfa585aa500d507760c58e52ccf1bc))

## [2.0.3](https://github.com/googleapis/nodejs-policy-troubleshooter/compare/v2.0.2...v2.0.3) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#140](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/140)) ([f8bd6b4](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/f8bd6b4000f7b11b0e5f5e1a3c199a5d5f8f57e8))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/1553)) ([#139](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/139)) ([a5d502f](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/a5d502f7ce2a43f62c1bfeaa55fe9f6bc1796982))

## [2.0.2](https://github.com/googleapis/nodejs-policy-troubleshooter/compare/v2.0.1...v2.0.2) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#135](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/135)) ([7acbd17](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/7acbd17c45d76cac504436fbcd7a2f6463c3d3ef))
* change import long to require ([#136](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/136)) ([05699c7](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/05699c7f0d17826d3635618803e41557ebc377d7))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/1546)) ([#138](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/138)) ([2b8a030](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/2b8a030f81a00161baf08a9aafd4add86528d082))

## [2.0.1](https://github.com/googleapis/nodejs-policy-troubleshooter/compare/v2.0.0...v2.0.1) (2022-06-30)


### Bug Fixes

* **docs:** describe fallback rest option ([#129](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/129)) ([e84320f](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/e84320ffdea95006a57a29db73b5e0e4286de5a7))

## [2.0.0](https://github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.1.1...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#122)

### Bug Fixes

* **deps:** update dependency @google-cloud/local-auth to v2 ([#123](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/123)) ([f5d7541](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/f5d7541fe61c1b17ca9ccd339d28759a937e1252))


### Build System

* update library to use Node 12 ([#122](https://github.com/googleapis/nodejs-policy-troubleshooter/issues/122)) ([f15ace8](https://github.com/googleapis/nodejs-policy-troubleshooter/commit/f15ace8726ead0dcdf6c643b0e403f7717f85e5c))

### [1.1.1](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.1.0...v1.1.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#76](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/76)) ([dd536c5](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/dd536c5796007a1c5c42c30bbd672b40b7bc5e60))

## [1.1.0](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.6...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#72](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/72)) ([cb9e610](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/cb9e61019ea6ec71201b30de68c84b1e93b1045e))

### [1.0.6](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.5...v1.0.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#70](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/70)) ([59d1051](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/59d10517aaa5964d319cae1bfbad2da7b652e3a4))

### [1.0.5](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.4...v1.0.5) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#62](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/62)) ([6ec256b](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/6ec256b64e1b95b369fc6a7dc22a1f0c37df1202))

### [1.0.4](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.3...v1.0.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#60](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/60)) ([de32784](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/de32784b45be401f2fec066e2778f7334f89201b))

### [1.0.3](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.2...v1.0.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#57](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/57)) ([59bbea3](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/59bbea300af0b1e36236cef7da3120507e9f321c))

### [1.0.2](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.1...v1.0.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#46](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/46)) ([59e135f](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/59e135ff3cf2e39f0b8805ecd74bd5a8de1bdb93))

### [1.0.1](https://www.github.com/googleapis/nodejs-policy-troubleshooter/compare/v1.0.0...v1.0.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#38](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/38)) ([962dfae](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/962dfae3d9440dec5f8477a66efb0516d4f5fff2))
* use require() to load JSON protos ([#41](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/41)) ([4bc12ce](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/4bc12ce5ea6e4ab3a1eb3978c2a646523b0d3b13))

## 1.0.0 (2021-02-23)


### ⚠ BREAKING CHANGES

* initial stub of library

### Features

* initial stub of library ([4749c7f](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/4749c7fa902cd909f9b878c8f5554751998747a6))


### Bug Fixes

* naming on repo for status checks and submit samples ([#11](https://www.github.com/googleapis/nodejs-policy-troubleshooter/issues/11)) ([0232dce](https://www.github.com/googleapis/nodejs-policy-troubleshooter/commit/0232dce5f27bcaad08fa58aa2113aa928cf0b517))
