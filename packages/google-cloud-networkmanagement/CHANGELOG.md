# Changelog

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v4.1.0...network-management-v4.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6301](https://github.com/googleapis/google-cloud-node/issues/6301)) ([42754a7](https://github.com/googleapis/google-cloud-node/commit/42754a72b34a01d201341428b4a358ff781b0612))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v4.0.1...network-management-v4.1.0) (2025-05-09)


### Features

* [networkmanagement] add messages and fields related to Direct VPC Egress ([#6245](https://github.com/googleapis/google-cloud-node/issues/6245)) ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add enum types related to Abort ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add enum types related to Drop ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add enum types related to Firewall ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add enum types related to Google Service ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add messages and fields related to Route ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))
* Add messages and fields related to Serverless External ([42630e4](https://github.com/googleapis/google-cloud-node/commit/42630e4ccd8cacb016451dfed78060c41ac879a5))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/network-management-v4.0.0...network-management-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.11.1...network-management-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.11.1](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.11.0...network-management-v3.11.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [3.11.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.10.0...network-management-v3.11.0) (2025-01-16)


### Features

* [networkmanagement] expose the new v1 vpcflowlogs api proto ([#5947](https://github.com/googleapis/google-cloud-node/issues/5947)) ([79de654](https://github.com/googleapis/google-cloud-node/commit/79de654a6f6ec0e304419cd0fd9411f0864fcbb3))

## [3.10.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.9.0...network-management-v3.10.0) (2024-11-21)


### Features

* [networkmanagement] add round-trip mode ([#5814](https://github.com/googleapis/google-cloud-node/issues/5814)) ([9946273](https://github.com/googleapis/google-cloud-node/commit/994627330c440344fc3b2bbbcb6ee466e1cbc45c))

## [3.9.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.8.0...network-management-v3.9.0) (2024-11-14)


### Features

* [networkmanagement] add DNS endpoint of Google Kubernetes Engine cluster control plane ([#5790](https://github.com/googleapis/google-cloud-node/issues/5790)) ([f0be12a](https://github.com/googleapis/google-cloud-node/commit/f0be12aad7540be57ed9f1a87ad62fa309e7a25b))
* Add more detailed drop causes to corresponding enum ([f0be12a](https://github.com/googleapis/google-cloud-node/commit/f0be12aad7540be57ed9f1a87ad62fa309e7a25b))
* Add more detailed drop causes to corresponding enum ([f0be12a](https://github.com/googleapis/google-cloud-node/commit/f0be12aad7540be57ed9f1a87ad62fa309e7a25b))

## [3.8.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.7.0...network-management-v3.8.0) (2024-10-30)


### Features

* [networkmanagement] add messages and fields related to Redis Instances ([#5755](https://github.com/googleapis/google-cloud-node/issues/5755)) ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add fields related to advertised routes to the RouteInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add firewall policy URI to the FirewallInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add load balancer name to the ForwardingRuleInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add messages and fields related to Redis Clusters ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add more detailed abort and drop causes to corresponding enums ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add PSC network attachment URI to the InstanceInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add PSC target fields to the ForwardingRuleInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add region name field to the RouteInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add region name to the ForwardingRuleInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))
* Add subnet URI and region name to the NetworkInfo proto ([312ba7f](https://github.com/googleapis/google-cloud-node/commit/312ba7fa3330b19e20f32ff6a7e6703185623a26))

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.6.0...network-management-v3.7.0) (2024-08-19)


### Features

* [networkmanagement] expose the new vpcflowlogs api proto ([#5606](https://github.com/googleapis/google-cloud-node/issues/5606)) ([c18942b](https://github.com/googleapis/google-cloud-node/commit/c18942bff326cc28125d5c9b50b8d318b6ffefc8))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.5.0...network-management-v3.6.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.4.0...network-management-v3.5.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.3.0...network-management-v3.4.0) (2024-03-26)


### Features

* [networkmanagement] add new fields and enum values related to round-trip ([#5171](https://github.com/googleapis/google-cloud-node/issues/5171)) ([009e21a](https://github.com/googleapis/google-cloud-node/commit/009e21ab1ca8cddc53dc68a197c0b23989ec55c0))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.2.0...network-management-v3.3.0) (2024-03-12)


### Features

* [networkmanagement] add new NAT fields to Network Management API definition ([#5118](https://github.com/googleapis/google-cloud-node/issues/5118)) ([8488d9a](https://github.com/googleapis/google-cloud-node/commit/8488d9a2de0950e50e5eab05cc286511d03de5e7))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.1.0...network-management-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v3.0.0...network-management-v3.1.0) (2023-09-06)


### Features

* [networkmanagement] add fields related to PBR and NCC routes to API ([#4526](https://github.com/googleapis/google-cloud-node/issues/4526)) ([b4aff98](https://github.com/googleapis/google-cloud-node/commit/b4aff9860827a424342f434118eb60fb55bc2919))
* [networkmanagement] add new enum values for network firewall policies to API ([#4536](https://github.com/googleapis/google-cloud-node/issues/4536)) ([170262c](https://github.com/googleapis/google-cloud-node/commit/170262c77ae252d1d2297eb9fa5980e7da8fb70e))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v2.5.0...network-management-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v2.4.2...network-management-v2.5.0) (2023-06-28)


### Features

* [networkmanagement] add forwarding_rule field to Connectivity Test Endpoint proto ([#4371](https://github.com/googleapis/google-cloud-node/issues/4371)) ([eca0623](https://github.com/googleapis/google-cloud-node/commit/eca06233d65148c564133150c1fa13522988a9af))

## [2.4.2](https://github.com/googleapis/google-cloud-node/compare/network-management-v2.4.1...network-management-v2.4.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/network-management-v2.4.0...network-management-v2.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/network-management-v2.3.1...network-management-v2.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))

## [2.3.1](https://github.com/googleapis/nodejs-network-management/compare/v2.3.0...v2.3.1) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#93](https://github.com/googleapis/nodejs-network-management/issues/93)) ([95915f2](https://github.com/googleapis/nodejs-network-management/commit/95915f2e95c1970096b1ab0b7907d0fe1a5a3ee2))
* Preserve default values in x-goog-request-params header ([#86](https://github.com/googleapis/nodejs-network-management/issues/86)) ([af58175](https://github.com/googleapis/nodejs-network-management/commit/af58175c71f3303f6808235db1efe216f2e27c2a))
* Regenerated protos JS and TS definitions ([#96](https://github.com/googleapis/nodejs-network-management/issues/96)) ([503d3dd](https://github.com/googleapis/nodejs-network-management/commit/503d3dd876892c8a5586091103bf464500cadc3e))

## [2.3.0](https://github.com/googleapis/nodejs-network-management/compare/v2.2.0...v2.3.0) (2022-09-01)


### Features

* Add new deliver targets and drop causes for Private Service Connect ([#78](https://github.com/googleapis/nodejs-network-management/issues/78)) ([9e6277d](https://github.com/googleapis/nodejs-network-management/commit/9e6277d62ee11696e8c28ff1f7cd46cc367acebe))


### Bug Fixes

* Allow passing gax instance to client constructor ([#85](https://github.com/googleapis/nodejs-network-management/issues/85)) ([b415b26](https://github.com/googleapis/nodejs-network-management/commit/b415b26aba8e7d9bf640a6a2f392f71aacf851f4))
* Better support for fallback mode ([#81](https://github.com/googleapis/nodejs-network-management/issues/81)) ([899669c](https://github.com/googleapis/nodejs-network-management/commit/899669c5145dd6dd17544fedd904e304f2fea0a7))
* Change import long to require ([#82](https://github.com/googleapis/nodejs-network-management/issues/82)) ([495dd3e](https://github.com/googleapis/nodejs-network-management/commit/495dd3e62aa3880ee0069dc66981a31e12b08bb8))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-network-management/issues/1553)) ([#84](https://github.com/googleapis/nodejs-network-management/issues/84)) ([1efdfd9](https://github.com/googleapis/nodejs-network-management/commit/1efdfd9a6c663a3ce032410d6ddb4c679320e1fb))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-network-management/issues/1546)) ([#83](https://github.com/googleapis/nodejs-network-management/issues/83)) ([b8cbf10](https://github.com/googleapis/nodejs-network-management/commit/b8cbf10ec9411cb8ecda8021344eb42c5f3761f4))

## [2.2.0](https://github.com/googleapis/nodejs-network-management/compare/v2.1.0...v2.2.0) (2022-07-13)


### Features

* add new abort cause and new route next hop type ([#76](https://github.com/googleapis/nodejs-network-management/issues/76)) ([0c64d0e](https://github.com/googleapis/nodejs-network-management/commit/0c64d0e25779caec40732ebcd2cc2229abcc8330))

## [2.1.0](https://github.com/googleapis/nodejs-network-management/compare/v2.0.0...v2.1.0) (2022-07-04)


### Features

* support regapic LRO ([f725753](https://github.com/googleapis/nodejs-network-management/commit/f7257531090d1ef5fe1f0c889d7fe0869ab7e0b1))

## [2.0.0](https://github.com/googleapis/nodejs-network-management/compare/v1.1.2...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#67)

### Build System

* update library to use Node 12 ([#67](https://github.com/googleapis/nodejs-network-management/issues/67)) ([3696c6c](https://github.com/googleapis/nodejs-network-management/commit/3696c6cc5ff042e8637d98a5a3c7fab284affb56))

### [1.1.2](https://www.github.com/googleapis/nodejs-network-management/compare/v1.1.1...v1.1.2) (2021-09-21)


### Bug Fixes

* upgrade module to GA ([#22](https://www.github.com/googleapis/nodejs-network-management/issues/22)) ([11d2692](https://www.github.com/googleapis/nodejs-network-management/commit/11d2692da2b02746dddc358fc1a8e68a1b4abf0a))

### [1.1.1](https://www.github.com/googleapis/nodejs-network-management/compare/v1.1.0...v1.1.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#19](https://www.github.com/googleapis/nodejs-network-management/issues/19)) ([2bc25cf](https://www.github.com/googleapis/nodejs-network-management/commit/2bc25cfffcd08659eafbe5ab3f2e35d7078deab8))

## [1.1.0](https://www.github.com/googleapis/nodejs-network-management/compare/v1.0.2...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#15](https://www.github.com/googleapis/nodejs-network-management/issues/15)) ([1480b11](https://www.github.com/googleapis/nodejs-network-management/commit/1480b11cfea48ad9b57c0a2735fe2c4dedc35dd5))

### [1.0.2](https://www.github.com/googleapis/nodejs-network-management/compare/v1.0.1...v1.0.2) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#13](https://www.github.com/googleapis/nodejs-network-management/issues/13)) ([93e0818](https://www.github.com/googleapis/nodejs-network-management/commit/93e0818f02f528a6f7ce188822d4f5e67ab4cf2f))

### [1.0.1](https://www.github.com/googleapis/nodejs-network-management/compare/v1.0.0...v1.0.1) (2021-08-06)


### Bug Fixes

* failing tests for LRO check methods ([#8](https://www.github.com/googleapis/nodejs-network-management/issues/8)) ([ed5f02f](https://www.github.com/googleapis/nodejs-network-management/commit/ed5f02f07410aefd97d0075e787f7899c28a2b5d))

## 1.0.0 (2021-07-21)


### Features

* add initial samples ([2d73dd3](https://www.github.com/googleapis/nodejs-network-management/commit/2d73dd3397e534efcab46e9547c1051ce21ef094))
* add initial samples and tests ([#1](https://www.github.com/googleapis/nodejs-network-management/issues/1)) ([7aa9eec](https://www.github.com/googleapis/nodejs-network-management/commit/7aa9eec3f3cbc9037ced7f4597f4a0fa654d91a1))
* initial stub of library ([8f53e3f](https://www.github.com/googleapis/nodejs-network-management/commit/8f53e3fe9298bf57f3c2f6cb64734172d06c77b1))
