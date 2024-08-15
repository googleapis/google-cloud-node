# Changelog

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.6.0...binary-authorization-v3.7.0) (2024-08-09)


### Features

* [binaryauthorization] A new field `version` is added to message `.grafeas.v1.ComplianceOccurrence` ([#5587](https://github.com/googleapis/google-cloud-node/issues/5587)) ([1526ce6](https://github.com/googleapis/google-cloud-node/commit/1526ce64fee4c45b7a047aa8c1f94719744b68e4))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.5.0...binary-authorization-v3.6.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.4.0...binary-authorization-v3.5.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.3.0...binary-authorization-v3.4.0) (2024-03-23)


### Features

* [binaryauthorization] A new field `in_toto_slsa_provenance_v1` is added to message `BuildOccurrence` ([#5135](https://github.com/googleapis/google-cloud-node/issues/5135)) ([fbc2b48](https://github.com/googleapis/google-cloud-node/commit/fbc2b487f1f2c3eb9f7e95187e6acb28522b6753))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.2.0...binary-authorization-v3.3.0) (2024-02-09)


### Features

* Support for Trusted Private Cloud ([895830a](https://github.com/googleapis/google-cloud-node/commit/895830a3ef91666c30a96a7f68bd4cd1f582d58d))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.1.0...binary-authorization-v3.2.0) (2023-11-30)


### Features

* [binaryauthorization] add container_name, container_type fields to Continuous Validation Logs ([#4848](https://github.com/googleapis/google-cloud-node/issues/4848)) ([a3d7006](https://github.com/googleapis/google-cloud-node/commit/a3d7006c6b9897021df87d23c3f6265bcc623145))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v3.0.0...binary-authorization-v3.1.0) (2023-09-06)


### Features

* [binaryauthorization] Adds support for check-based platform policy evaluation to Binary Authorization Continuous Validation logs ([#4555](https://github.com/googleapis/google-cloud-node/issues/4555)) ([844ffbc](https://github.com/googleapis/google-cloud-node/commit/844ffbc2f828a2f19081a3761b90b0fb4428e564))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.5.0...binary-authorization-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.4.0...binary-authorization-v2.5.0) (2023-04-13)


### Features

* [binaryauthorization] add enum for grafeas v1 cvss to support both cvss v2 and v3 ([#4168](https://github.com/googleapis/google-cloud-node/issues/4168)) ([69672a9](https://github.com/googleapis/google-cloud-node/commit/69672a9312d1496d5a6ae23679324d026eb68eee))


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.3.0...binary-authorization-v2.4.0) (2023-03-28)


### Features

* [binaryauthorization] Add VULNERABILITY_ASSESSMENT Note type to grafeas v1 API, adds Vex_Assessment derived from the Note to resources' occurrences, VEX notes now be written to add CVE assessments ([#4071](https://github.com/googleapis/google-cloud-node/issues/4071)) ([671757d](https://github.com/googleapis/google-cloud-node/commit/671757d28e2ed57c8586005bb4143cf4fb1545b0))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.2.1...binary-authorization-v2.3.0) (2023-03-06)


### Features

* [binaryauthorization] Import of Grafeas from Github ([#4051](https://github.com/googleapis/google-cloud-node/issues/4051)) ([443abe3](https://github.com/googleapis/google-cloud-node/commit/443abe3310b5063df855c3ab0d5fc8d338570cdf))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.2.0...binary-authorization-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/binary-authorization-v2.1.1...binary-authorization-v2.2.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))
* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [2.1.1](https://github.com/googleapis/nodejs-binary-authorization/compare/v2.1.0...v2.1.1) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#192](https://github.com/googleapis/nodejs-binary-authorization/issues/192)) ([09d6652](https://github.com/googleapis/nodejs-binary-authorization/commit/09d665200e6cc8fec5e026a2234990e48a3a94d4))
* Regenerated protos JS and TS definitions ([#196](https://github.com/googleapis/nodejs-binary-authorization/issues/196)) ([c03bdba](https://github.com/googleapis/nodejs-binary-authorization/commit/c03bdbadea89865d7975e797a6f8d2cb22765252))

## [2.1.0](https://github.com/googleapis/nodejs-binary-authorization/compare/v2.0.0...v2.1.0) (2022-10-06)


### Features

* Add new analysis status and cvss version fields ([#187](https://github.com/googleapis/nodejs-binary-authorization/issues/187)) ([d461de8](https://github.com/googleapis/nodejs-binary-authorization/commit/d461de86c3abc5db180ae32ea4e6063f3c00df25))


### Bug Fixes

* Allow passing gax instance to client constructor ([#177](https://github.com/googleapis/nodejs-binary-authorization/issues/177)) ([6ef4a52](https://github.com/googleapis/nodejs-binary-authorization/commit/6ef4a520c1bb49fca8159324dbf41af10931357e))
* Better support for fallback mode ([#170](https://github.com/googleapis/nodejs-binary-authorization/issues/170)) ([fa2e0b5](https://github.com/googleapis/nodejs-binary-authorization/commit/fa2e0b5991a80e912c65f896bdc0c2670b2a349d))
* Change import long to require ([#172](https://github.com/googleapis/nodejs-binary-authorization/issues/172)) ([6327374](https://github.com/googleapis/nodejs-binary-authorization/commit/6327374ea12b05cc4d752b059e4d9a098174f45b))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-binary-authorization/issues/1553)) ([#176](https://github.com/googleapis/nodejs-binary-authorization/issues/176)) ([1a53ab4](https://github.com/googleapis/nodejs-binary-authorization/commit/1a53ab4d1bb04f4759494973a3297c3dcf295833))
* Preserve default values in x-goog-request-params header ([#180](https://github.com/googleapis/nodejs-binary-authorization/issues/180)) ([80b0dcf](https://github.com/googleapis/nodejs-binary-authorization/commit/80b0dcf989b20f874e0912af641fdc12419887f2))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-binary-authorization/issues/1546)) ([#175](https://github.com/googleapis/nodejs-binary-authorization/issues/175)) ([f412b6e](https://github.com/googleapis/nodejs-binary-authorization/commit/f412b6e8349aab08d3d5d985cd38f91750c1f030))
* use google-gax v3.3.0 ([1a53ab4](https://github.com/googleapis/nodejs-binary-authorization/commit/1a53ab4d1bb04f4759494973a3297c3dcf295833))

## [2.0.0](https://github.com/googleapis/nodejs-binary-authorization/compare/v1.5.1...v2.0.0) (2022-06-30)


### ⚠ BREAKING CHANGES

* make v1 default service version (#139)
* update library to use Node 12 (#153)

### Features

* Adds a pod_namespace field to pod events created by Continuous Validation, to distinguish pods with the same name that run in different namespaces ([#159](https://github.com/googleapis/nodejs-binary-authorization/issues/159)) ([db983a2](https://github.com/googleapis/nodejs-binary-authorization/commit/db983a2911ae969da1ebf2096e48a33e78ea5ea1))
* Import of Grafeas from Github ([#156](https://github.com/googleapis/nodejs-binary-authorization/issues/156)) ([d0f06b7](https://github.com/googleapis/nodejs-binary-authorization/commit/d0f06b73b78137400461486d7b6020d370fd3efe))
* make v1 default service version ([#139](https://github.com/googleapis/nodejs-binary-authorization/issues/139)) ([308286e](https://github.com/googleapis/nodejs-binary-authorization/commit/308286e8d92d62ba8d1c0e6c7ec3d0a921e63294))


### Bug Fixes

* **docs:** describe fallback rest option ([#160](https://github.com/googleapis/nodejs-binary-authorization/issues/160)) ([dc48528](https://github.com/googleapis/nodejs-binary-authorization/commit/dc48528c213f6eb2557a647333879370494a00e7))


### Build System

* update library to use Node 12 ([#153](https://github.com/googleapis/nodejs-binary-authorization/issues/153)) ([cafc43b](https://github.com/googleapis/nodejs-binary-authorization/commit/cafc43b1d91f0aa23b8db9848a05fbd2cb65da10))

### [1.5.1](https://github.com/googleapis/nodejs-binary-authorization/compare/v1.5.0...v1.5.1) (2022-01-13)


### Bug Fixes

* Modify the bazel.BUILD file by hand to include the compliance protos which are not autogenerated ([#120](https://github.com/googleapis/nodejs-binary-authorization/issues/120)) ([4f30555](https://github.com/googleapis/nodejs-binary-authorization/commit/4f305551c6d9f97bd2e4ef8430fd7dc9cfc6f9c9))

## [1.5.0](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.4.0...v1.5.0) (2021-11-08)


### Features

* add new admission rule types to Policy feat: update SignatureAlgorithm enum to match algorithm names in KMS feat: add SystemPolicyV1Beta1 service ([#109](https://www.github.com/googleapis/nodejs-binary-authorization/issues/109)) ([c99878c](https://www.github.com/googleapis/nodejs-binary-authorization/commit/c99878c99a19b80301cdd9219390d00984e78c14))

## [1.4.0](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.3.0...v1.4.0) (2021-11-03)


### Features

* Updating the grafeas protos to include compliance and intoto attestation protos ([#106](https://www.github.com/googleapis/nodejs-binary-authorization/issues/106)) ([f1407cc](https://www.github.com/googleapis/nodejs-binary-authorization/commit/f1407ccc83b93a41aa2065fc2bd0ea91aa93e0e4))

## [1.3.0](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.2.0...v1.3.0) (2021-09-27)


### Features

* add v1 of the API, add generated samples ([#95](https://www.github.com/googleapis/nodejs-binary-authorization/issues/95)) ([baa9a6a](https://www.github.com/googleapis/nodejs-binary-authorization/commit/baa9a6aa096acc89a367a0ac4fcba5c899cb6f2a))

## [1.2.0](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.6...v1.2.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#87](https://www.github.com/googleapis/nodejs-binary-authorization/issues/87)) ([e61630b](https://www.github.com/googleapis/nodejs-binary-authorization/commit/e61630b2e9b978798a5b01ea7c637bccad6b37e9))


### Bug Fixes

* **build:** migrate to using main branch ([#82](https://www.github.com/googleapis/nodejs-binary-authorization/issues/82)) ([3f11200](https://www.github.com/googleapis/nodejs-binary-authorization/commit/3f112009748af38f5f3939ceca28e49f527b583b))

### [1.1.6](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.5...v1.1.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#84](https://www.github.com/googleapis/nodejs-binary-authorization/issues/84)) ([4f6cadf](https://www.github.com/googleapis/nodejs-binary-authorization/commit/4f6cadf938a15a6d2e6332b3fd2697696c78106b))

### [1.1.5](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.4...v1.1.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#74](https://www.github.com/googleapis/nodejs-binary-authorization/issues/74)) ([15b75a9](https://www.github.com/googleapis/nodejs-binary-authorization/commit/15b75a9136ecd8131b4fea24de8be69bfbfb989d))

### [1.1.4](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.3...v1.1.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#72](https://www.github.com/googleapis/nodejs-binary-authorization/issues/72)) ([ffb3861](https://www.github.com/googleapis/nodejs-binary-authorization/commit/ffb3861356b4a63ad32517e860efd265280ae831))

### [1.1.3](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.2...v1.1.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#69](https://www.github.com/googleapis/nodejs-binary-authorization/issues/69)) ([3204b13](https://www.github.com/googleapis/nodejs-binary-authorization/commit/3204b13efb5ff3f75d8dec0a393c7b86200c8d28))

### [1.1.2](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.1...v1.1.2) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#63](https://www.github.com/googleapis/nodejs-binary-authorization/issues/63)) ([2a0380f](https://www.github.com/googleapis/nodejs-binary-authorization/commit/2a0380f6463b5ad0ee58b5a35ebe41d363390874))

### [1.1.1](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.1.0...v1.1.1) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#56](https://www.github.com/googleapis/nodejs-binary-authorization/issues/56)) ([32e1533](https://www.github.com/googleapis/nodejs-binary-authorization/commit/32e1533ae0d5ff336f3ec671fd7df34e88c49d12))

## [1.1.0](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.0.1...v1.1.0) (2021-05-12)


### Features

* Publish Binary Authorization ContinuousValidationEvent proto. ([#50](https://www.github.com/googleapis/nodejs-binary-authorization/issues/50)) ([f7b623d](https://www.github.com/googleapis/nodejs-binary-authorization/commit/f7b623d4427a7382b9e8643a8aeaa06516bd7350))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#45](https://www.github.com/googleapis/nodejs-binary-authorization/issues/45)) ([c64f773](https://www.github.com/googleapis/nodejs-binary-authorization/commit/c64f77399f5f3586f18525559d1d13763a49555e))
* use require() to load JSON protos ([#48](https://www.github.com/googleapis/nodejs-binary-authorization/issues/48)) ([0783962](https://www.github.com/googleapis/nodejs-binary-authorization/commit/07839629bb8abc34bfceb5055d8b5c5304311109))

### [1.0.1](https://www.github.com/googleapis/nodejs-binary-authorization/compare/v1.0.0...v1.0.1) (2021-03-15)


### Bug Fixes

* **docs:** downgrade to beta to match release level ([#19](https://www.github.com/googleapis/nodejs-binary-authorization/issues/19)) ([90ade48](https://www.github.com/googleapis/nodejs-binary-authorization/commit/90ade48c8088e3b2b41b6059e57ee57fd12f17de))

## 1.0.0 (2020-12-12)


### ⚠ BREAKING CHANGES

* write initial samples (#5)
* initial stub of library

### Features

* initial stub of library ([43b695e](https://www.github.com/googleapis/nodejs-binary-authorization/commit/43b695e416eb52032a138502af170a3ce55969fa))
* write initial samples ([#5](https://www.github.com/googleapis/nodejs-binary-authorization/issues/5)) ([6828f7c](https://www.github.com/googleapis/nodejs-binary-authorization/commit/6828f7c01942aa90f6ccc390b38f711f3fdfba41))


### Bug Fixes

* header ([f263482](https://www.github.com/googleapis/nodejs-binary-authorization/commit/f263482d3d500a35fa522a4f19ee1be5897d0b8b))
