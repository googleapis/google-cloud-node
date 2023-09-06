# Changelog

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v1.0.0...discoveryengine-v1.1.0) (2023-09-06)


### Features

* [discoveryengine] support conversational / multi-turn search ([#4599](https://github.com/googleapis/google-cloud-node/issues/4599)) ([e9d23a8](https://github.com/googleapis/google-cloud-node/commit/e9d23a8deded01c17dd16c532776656eb8ce8934))
* [discoveryengine] supported bring your own embedding feature ([#4595](https://github.com/googleapis/google-cloud-node/issues/4595)) ([8f1b74f](https://github.com/googleapis/google-cloud-node/commit/8f1b74f5e752501a669db5934f37dc7480a7eba5))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.8.0...discoveryengine-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))
* [discoveryengine] fix typings for IAM methods ([#4457](https://github.com/googleapis/google-cloud-node/issues/4457)) and update node 14

### Bug Fixes

* [discoveryengine] fix typings for IAM methods ([#4457](https://github.com/googleapis/google-cloud-node/issues/4457)) and update node 14 ([91b7527](https://github.com/googleapis/google-cloud-node/commit/91b75277f651cbe16c10987c56743868a48dd3f1))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.7.0...discoveryengine-v0.8.0) (2023-06-28)


### Features

* [discoveryengine] support extractive content in search ([#4355](https://github.com/googleapis/google-cloud-node/issues/4355)) ([5958cfa](https://github.com/googleapis/google-cloud-node/commit/5958cfa56bd5280301f446a8863d6461ea86493e))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.6.0...discoveryengine-v0.7.0) (2023-06-14)


### ⚠ BREAKING CHANGES

* use v1 as the default version ([#4333](https://github.com/googleapis/google-cloud-node/issues/4333))
* [discoveryengine] remove the summarization feature from v1 version ([#4273](https://github.com/googleapis/google-cloud-node/issues/4273))

### Features

* Use v1 as the default version ([#4333](https://github.com/googleapis/google-cloud-node/issues/4333)) ([1415f5f](https://github.com/googleapis/google-cloud-node/commit/1415f5f0cdbd284fb11427fe1053048e278e7546))


### Bug Fixes

* [discoveryengine] remove the summarization feature from v1 version ([#4273](https://github.com/googleapis/google-cloud-node/issues/4273)) ([0b9c928](https://github.com/googleapis/google-cloud-node/commit/0b9c928a45e5de78dd13894dc537b351f90a9d56))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.5.0...discoveryengine-v0.6.0) (2023-05-04)


### Features

* [discoveryengine] add document purge API ([#4219](https://github.com/googleapis/google-cloud-node/issues/4219)) ([454fa79](https://github.com/googleapis/google-cloud-node/commit/454fa7943ddf664bc54a67e654d7e8a39ea55fed))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.4.1...discoveryengine-v0.5.0) (2023-04-24)


### Features

* [discoveryengine] add search, autocomplete and schema services ([#4201](https://github.com/googleapis/google-cloud-node/issues/4201)) ([de00e1d](https://github.com/googleapis/google-cloud-node/commit/de00e1d88877dd674dfd20b78a3de4476d65eb29))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.4.0...discoveryengine-v0.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.3.1...discoveryengine-v0.4.0) (2023-03-28)


### Features

* [discoveryengine] add additional resource path with collections ([#4120](https://github.com/googleapis/google-cloud-node/issues/4120)) ([0fe6ff4](https://github.com/googleapis/google-cloud-node/commit/0fe6ff44b808fa9afc4c452402bc013805f74a97))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.3.0...discoveryengine-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.2.0...discoveryengine-v0.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.1.1...discoveryengine-v0.2.0) (2022-11-10)


### Features

* Allow recommendation users to set user labels in the request ([#3458](https://github.com/googleapis/google-cloud-node/issues/3458)) ([65d7b4c](https://github.com/googleapis/google-cloud-node/commit/65d7b4c3b50c46ff473f0e57ecb38b90aef25e5d))


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/discoveryengine-v0.1.0...discoveryengine-v0.1.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## 0.1.0 (2022-10-19)


### Features

* Add initial files for google.cloud.discoveryengine.v1beta ([#3445](https://github.com/googleapis/google-cloud-node/issues/3445)) ([c220d49](https://github.com/googleapis/google-cloud-node/commit/c220d495cde64b1855b86df9550168e43e1c2f98))
