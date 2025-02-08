# Changelog

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v1.3.0...bare-metal-solution-v1.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v1.2.0...bare-metal-solution-v1.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5186](https://github.com/googleapis/google-cloud-node/issues/5186)) ([97c7951](https://github.com/googleapis/google-cloud-node/commit/97c7951481ef70d8f49c3d218f7c22ce00df9174))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v1.1.1...bare-metal-solution-v1.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [1.1.1](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v1.1.0...bare-metal-solution-v1.1.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v1.0.0...bare-metal-solution-v1.1.0) (2023-08-09)


### Features

* **baremetalsolution:** [baremetalsolution] several new resources and RPCs ([#4517](https://github.com/googleapis/google-cloud-node/issues/4517)) ([0e3d600](https://github.com/googleapis/google-cloud-node/commit/0e3d600371265cd8fc0609b55086e39d0d4d5df0))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v0.3.2...bare-metal-solution-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4459](https://github.com/googleapis/google-cloud-node/issues/4459)) ([1d510be](https://github.com/googleapis/google-cloud-node/commit/1d510bef5bd7b0ac3552b4729ef3d9ebe1ac3dc4))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v0.3.1...bare-metal-solution-v0.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v0.3.0...bare-metal-solution-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/bare-metal-solution-v0.2.2...bare-metal-solution-v0.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3851](https://github.com/googleapis/google-cloud-node/issues/3851)) ([79fbaa8](https://github.com/googleapis/google-cloud-node/commit/79fbaa833d08738fa37aa37158ddb5b1c91710e1))

## [0.2.2](https://github.com/googleapis/nodejs-bare-metal-solution/compare/v0.2.1...v0.2.2) (2022-11-12)


### Bug Fixes

* Allow passing gax instance to client constructor ([#13](https://github.com/googleapis/nodejs-bare-metal-solution/issues/13)) ([8dfa096](https://github.com/googleapis/nodejs-bare-metal-solution/commit/8dfa096456b9b8c54e403f2d1a77ac6c1e0779be))
* **deps:** Use google-gax v3.5.2 ([#25](https://github.com/googleapis/nodejs-bare-metal-solution/issues/25)) ([2c44b88](https://github.com/googleapis/nodejs-bare-metal-solution/commit/2c44b884ee043e275279c26fc8712846b303f657))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-bare-metal-solution/issues/1553)) ([#17](https://github.com/googleapis/nodejs-bare-metal-solution/issues/17)) ([a67a504](https://github.com/googleapis/nodejs-bare-metal-solution/commit/a67a504aa6994103c329e00856aafabee68076bf))
* Preserve default values in x-goog-request-params header ([#19](https://github.com/googleapis/nodejs-bare-metal-solution/issues/19)) ([55bbf49](https://github.com/googleapis/nodejs-bare-metal-solution/commit/55bbf49df595242d106047ff3685d5328ee45bd9))
* Regenerated protos JS and TS definitions ([#28](https://github.com/googleapis/nodejs-bare-metal-solution/issues/28)) ([2ec02c8](https://github.com/googleapis/nodejs-bare-metal-solution/commit/2ec02c83b0d681d12f4db137f8f1cdc7a74449a9))
* use google-gax v3.3.0 ([a67a504](https://github.com/googleapis/nodejs-bare-metal-solution/commit/a67a504aa6994103c329e00856aafabee68076bf))

## [0.2.1](https://github.com/googleapis/nodejs-bare-metal-solution/compare/v0.2.0...v0.2.1) (2022-08-23)


### Bug Fixes

* change import long to require ([#14](https://github.com/googleapis/nodejs-bare-metal-solution/issues/14)) ([982fb75](https://github.com/googleapis/nodejs-bare-metal-solution/commit/982fb75a20674de77c3ec8a931172566fe952603))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-bare-metal-solution/issues/1546)) ([#16](https://github.com/googleapis/nodejs-bare-metal-solution/issues/16)) ([51a12df](https://github.com/googleapis/nodejs-bare-metal-solution/commit/51a12dfd7da8be12c3cb53fc1828121a2e046e8e))

## 0.2.0 (2022-07-07)


### Features

* add initial samples and tests ([#2](https://github.com/googleapis/nodejs-bare-metal-solution/issues/2)) ([cbe6ccf](https://github.com/googleapis/nodejs-bare-metal-solution/commit/cbe6ccf067b3652ec66595b3cefc320bafe2f07b))
* add templated files from docker image ([690bfcc](https://github.com/googleapis/nodejs-bare-metal-solution/commit/690bfcc607495e412ef552a8ff657786f86e80db))
* initial stub of library ([defc6ca](https://github.com/googleapis/nodejs-bare-metal-solution/commit/defc6ca53395887fc2650209c0fb9ea9b07bbce9))
