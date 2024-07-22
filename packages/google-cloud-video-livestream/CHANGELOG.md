# Changelog

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.3.0...livestream-v1.4.0) (2024-07-22)


### Features

* [video] added RetentionConfig for enabling retention of output media segments ([#5544](https://github.com/googleapis/google-cloud-node/issues/5544)) ([f1b1eed](https://github.com/googleapis/google-cloud-node/commit/f1b1eedafc5295513fba09c4132389489640fe23))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.2.0...livestream-v1.3.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.1.0...livestream-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.0.2...livestream-v1.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5028](https://github.com/googleapis/google-cloud-node/issues/5028)) ([852f3eb](https://github.com/googleapis/google-cloud-node/commit/852f3ebf065ee24e910580b9a1fc365acb3a744a))

## [1.0.2](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.0.1...livestream-v1.0.2) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4968](https://github.com/googleapis/google-cloud-node/issues/4968)) ([7fbf16c](https://github.com/googleapis/google-cloud-node/commit/7fbf16c98d0521a0533ab36a00f6ec932c72a02e))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/livestream-v1.0.0...livestream-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.6.0...livestream-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4464](https://github.com/googleapis/google-cloud-node/issues/4464)) ([c909357](https://github.com/googleapis/google-cloud-node/commit/c90935765ceee0eea6b9ce21a151707df142cf7d))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.5.1...livestream-v0.6.0) (2023-07-24)


### Features

* [video] added support for slate events which allow users to create and insert a slate into a live stream to replace the main live stream content ([#4438](https://github.com/googleapis/google-cloud-node/issues/4438)) ([5f19ab6](https://github.com/googleapis/google-cloud-node/commit/5f19ab6bab05774ced7a3947f9bb129f748d01f5))

## [0.5.1](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.5.0...livestream-v0.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.4.1...livestream-v0.5.0) (2023-03-28)


### Features

* [video] added TimecodeConfig for specifying the source of timecode used in media workflow synchronization ([#4114](https://github.com/googleapis/google-cloud-node/issues/4114)) ([a0bb2b2](https://github.com/googleapis/google-cloud-node/commit/a0bb2b2d9618e9385c20a6e9afa34a547009bd05))

## [0.4.1](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.4.0...livestream-v0.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3990](https://github.com/googleapis/google-cloud-node/issues/3990)) ([878c55d](https://github.com/googleapis/google-cloud-node/commit/878c55d62af7e41e8d5050b081e4b79202b1b9cc))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/livestream-v0.3.4...livestream-v0.4.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3854](https://github.com/googleapis/google-cloud-node/issues/3854)) ([9e4b7f8](https://github.com/googleapis/google-cloud-node/commit/9e4b7f8d27dbb1ac011267f9b96ce90d2ff7a74b))

## [0.3.4](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.3.3...v0.3.4) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#82](https://github.com/googleapis/nodejs-video-live-stream/issues/82)) ([f032c54](https://github.com/googleapis/nodejs-video-live-stream/commit/f032c546a3e61f4064439ed2a452c5d3fbeae8e8))
* Regenerated protos JS and TS definitions ([#86](https://github.com/googleapis/nodejs-video-live-stream/issues/86)) ([9942fd4](https://github.com/googleapis/nodejs-video-live-stream/commit/9942fd4f62d287df3e3d02d75f3eccb698edc62e))

## [0.3.3](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.3.2...v0.3.3) (2022-09-14)


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#65](https://github.com/googleapis/nodejs-video-live-stream/issues/65)) ([a612a49](https://github.com/googleapis/nodejs-video-live-stream/commit/a612a492a4d4016b913b97431a741c95a0cdd09d))

## [0.3.2](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.3.1...v0.3.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#62](https://github.com/googleapis/nodejs-video-live-stream/issues/62)) ([293e4f7](https://github.com/googleapis/nodejs-video-live-stream/commit/293e4f737d59273d11b2fb53a5c953363a3a6f0c))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-video-live-stream/issues/1553)) ([#61](https://github.com/googleapis/nodejs-video-live-stream/issues/61)) ([02076df](https://github.com/googleapis/nodejs-video-live-stream/commit/02076dfd0649ebd504cbda86ac58a63fc9f2da5f))

## [0.3.1](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.3.0...v0.3.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#50](https://github.com/googleapis/nodejs-video-live-stream/issues/50)) ([b816f7f](https://github.com/googleapis/nodejs-video-live-stream/commit/b816f7f2b9898e78c504d30a5d83ae5701174346))
* change import long to require ([#51](https://github.com/googleapis/nodejs-video-live-stream/issues/51)) ([9bcb06a](https://github.com/googleapis/nodejs-video-live-stream/commit/9bcb06af177b5d49f3d731183e1ee077874fd0db))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-video-live-stream/issues/1546)) ([#53](https://github.com/googleapis/nodejs-video-live-stream/issues/53)) ([018602e](https://github.com/googleapis/nodejs-video-live-stream/commit/018602e7994dc37ba8b08df2547a3048ac0a493c))

## [0.3.0](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.2.0...v0.3.0) (2022-06-29)


### Features

* support regapic LRO ([#45](https://github.com/googleapis/nodejs-video-live-stream/issues/45)) ([fc3c1b4](https://github.com/googleapis/nodejs-video-live-stream/commit/fc3c1b426407d6ff8b825483c0ab892e25a28d09))

## [0.2.0](https://github.com/googleapis/nodejs-video-live-stream/compare/v0.1.0...v0.2.0) (2022-06-03)


### ⚠ BREAKING CHANGES

* upgrade library to stable (#35)
* update library to use Node 12 (#34)

### Features

* upgrade library to stable ([#35](https://github.com/googleapis/nodejs-video-live-stream/issues/35)) ([ab9935b](https://github.com/googleapis/nodejs-video-live-stream/commit/ab9935b560bda6a047dbfa64cc7357e5647c272e))


### Build System

* update library to use Node 12 ([#34](https://github.com/googleapis/nodejs-video-live-stream/issues/34)) ([ce13574](https://github.com/googleapis/nodejs-video-live-stream/commit/ce13574050cc1cf510275737cf351660a2495f6b))


### Miscellaneous Chores

* release as v0.2.0 ([#38](https://github.com/googleapis/nodejs-video-live-stream/issues/38)) ([f068c7b](https://github.com/googleapis/nodejs-video-live-stream/commit/f068c7bdee9b877b53230df7a64b1d4ea30da8a1))

## 0.1.0 (2022-02-11)


### Features

* initial generation of video livestream library ([#4](https://github.com/googleapis/nodejs-video-live-stream/issues/4)) ([1e1e570](https://github.com/googleapis/nodejs-video-live-stream/commit/1e1e570cf9e8a11458c35b9e2b6b5ecde6a140a3))
