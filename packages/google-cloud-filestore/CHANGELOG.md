# Changelog

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v4.0.1...filestore-v4.1.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/filestore-v4.0.0...filestore-v4.0.1) (2025-03-21)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6185](https://github.com/googleapis/google-cloud-node/issues/6185)) ([ab30412](https://github.com/googleapis/google-cloud-node/commit/ab304122e3e825c9a76af7d6b0ef4ddc9aa6e906))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.4.1...filestore-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [filestore] add PromoteReplica API ([#6116](https://github.com/googleapis/google-cloud-node/issues/6116)) ([9f33d6a](https://github.com/googleapis/google-cloud-node/commit/9f33d6a030b696d8f42d11054e5896955b3d0720))
* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.4.1](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.4.0...filestore-v3.4.1) (2025-02-12)


### Bug Fixes

* [Many APIs] finalize fixing typings for headers in generator ([#6013](https://github.com/googleapis/google-cloud-node/issues/6013)) ([cd3a2d4](https://github.com/googleapis/google-cloud-node/commit/cd3a2d44fc7a9b3798346162ba19df1c748fba58))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.3.0...filestore-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5353](https://github.com/googleapis/google-cloud-node/issues/5353)) ([1a2388d](https://github.com/googleapis/google-cloud-node/commit/1a2388d7096176b4155a0c4f01e15ffb8c4d5096))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.2.0...filestore-v3.3.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.1.0...filestore-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v3.0.0...filestore-v3.1.0) (2023-09-06)


### Features

* [filestore] add SecurityFlavor to NfsExportOptions ([#4566](https://github.com/googleapis/google-cloud-node/issues/4566)) ([04182c7](https://github.com/googleapis/google-cloud-node/commit/04182c7810a9c716f848776f4d783d5406152634))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v2.4.1...filestore-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/filestore-v2.4.0...filestore-v2.4.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v2.3.1...filestore-v2.4.0) (2023-03-28)


### Features

* [filestore] updating the client to match the latest v1 API ([#4104](https://github.com/googleapis/google-cloud-node/issues/4104)) ([10afbc0](https://github.com/googleapis/google-cloud-node/commit/10afbc0b499d95e18886ee2f6a53cdd203a07542))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/filestore-v2.3.0...filestore-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/filestore-v2.2.0...filestore-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.2.0](https://github.com/googleapis/nodejs-filestore/compare/v2.1.0...v2.2.0) (2022-11-11)


### Features

* New APIs added to reflect updates to the filestore service ([#93](https://github.com/googleapis/nodejs-filestore/issues/93)) ([619e7f1](https://github.com/googleapis/nodejs-filestore/commit/619e7f142a621303afc58b38261711d33584ea5f))


### Bug Fixes

* Allow passing gax instance to client constructor ([#82](https://github.com/googleapis/nodejs-filestore/issues/82)) ([37a928b](https://github.com/googleapis/nodejs-filestore/commit/37a928bf3c049d0cd66e4efa5d41717fa5ff9a28))
* Better support for fallback mode ([#77](https://github.com/googleapis/nodejs-filestore/issues/77)) ([c339f3f](https://github.com/googleapis/nodejs-filestore/commit/c339f3f49c0a10fd2d42a64de20a9d2f06ae061e))
* Change import long to require ([#78](https://github.com/googleapis/nodejs-filestore/issues/78)) ([c9ce9d1](https://github.com/googleapis/nodejs-filestore/commit/c9ce9d147dd1cc6f99b63e53af9cf75c1999dc90))
* **deps:** Use google-gax v3.5.2 ([#89](https://github.com/googleapis/nodejs-filestore/issues/89)) ([5fde972](https://github.com/googleapis/nodejs-filestore/commit/5fde972b08be1106b42bce644f1282f690b93677))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-filestore/issues/1553)) ([#81](https://github.com/googleapis/nodejs-filestore/issues/81)) ([e0b4ac4](https://github.com/googleapis/nodejs-filestore/commit/e0b4ac42145ad648f3ae5f6c77917a2dd94d5192))
* Preserve default values in x-goog-request-params header ([#83](https://github.com/googleapis/nodejs-filestore/issues/83)) ([2cd3cb0](https://github.com/googleapis/nodejs-filestore/commit/2cd3cb022d1cb11fa3d04dbda58fd32de995c462))
* Regenerated protos JS and TS definitions ([#92](https://github.com/googleapis/nodejs-filestore/issues/92)) ([cb324b9](https://github.com/googleapis/nodejs-filestore/commit/cb324b9f3f93eaea7228386e5bf406ed570bafcc))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-filestore/issues/1546)) ([#80](https://github.com/googleapis/nodejs-filestore/issues/80)) ([73de8d6](https://github.com/googleapis/nodejs-filestore/commit/73de8d63b8b221df09c193400d1028cf3924a6ae))
* use google-gax v3.3.0 ([e0b4ac4](https://github.com/googleapis/nodejs-filestore/commit/e0b4ac42145ad648f3ae5f6c77917a2dd94d5192))

## [2.1.0](https://github.com/googleapis/nodejs-filestore/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#71](https://github.com/googleapis/nodejs-filestore/issues/71)) ([69dedbe](https://github.com/googleapis/nodejs-filestore/commit/69dedbeb0ba429dbb768b4823a53bab01caa3e7d))

## [2.0.0](https://github.com/googleapis/nodejs-filestore/compare/v1.1.2...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#66)

### Build System

* update library to use Node 12 ([#66](https://github.com/googleapis/nodejs-filestore/issues/66)) ([fed26fc](https://github.com/googleapis/nodejs-filestore/commit/fed26fc96372b8c15237a1500ae27ce88d4ec936))

### [1.1.2](https://github.com/googleapis/nodejs-filestore/compare/v1.1.1...v1.1.2) (2022-02-03)


### Bug Fixes

* update the pattern for "file.googleapis.com/Snapshot" resource for the Filestore V1Beta1 ([#43](https://github.com/googleapis/nodejs-filestore/issues/43)) ([1b6e7b7](https://github.com/googleapis/nodejs-filestore/commit/1b6e7b71d739c3c428410b343c824907e3d58cc6))

### [1.1.1](https://www.github.com/googleapis/nodejs-filestore/compare/v1.1.0...v1.1.1) (2021-10-14)


### Bug Fixes

* **filestore:** add missing operation_metadata.proto import ([#24](https://www.github.com/googleapis/nodejs-filestore/issues/24)) ([58f6bd0](https://www.github.com/googleapis/nodejs-filestore/commit/58f6bd08080f79e8b60967f27990783660b0f1be))

## [1.1.0](https://www.github.com/googleapis/nodejs-filestore/compare/v1.0.1...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#14](https://www.github.com/googleapis/nodejs-filestore/issues/14)) ([00c32a4](https://www.github.com/googleapis/nodejs-filestore/commit/00c32a4eaeaf6e4f19559a38e51d2b5ec23197b4))

### [1.0.1](https://www.github.com/googleapis/nodejs-filestore/compare/v1.0.0...v1.0.1) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#11](https://www.github.com/googleapis/nodejs-filestore/issues/11)) ([ce9e2eb](https://www.github.com/googleapis/nodejs-filestore/commit/ce9e2eb86e80b122d67f0b283597ba13e4b366ad))
* **deps:** google-gax v2.24.1 ([#13](https://www.github.com/googleapis/nodejs-filestore/issues/13)) ([1a27c34](https://www.github.com/googleapis/nodejs-filestore/commit/1a27c34790099af5a5aa6e091b2c1207cc43d7da))

## 1.0.0 (2021-07-21)


### ⚠ BREAKING CHANGES

* initial generation of filestore API (#2)

### Features

* initial generation of filestore API ([#2](https://www.github.com/googleapis/nodejs-filestore/issues/2)) ([385821e](https://www.github.com/googleapis/nodejs-filestore/commit/385821e88e1036e780b4d7ca9c784e771afa024f))
* initial stub of library ([59904e4](https://www.github.com/googleapis/nodejs-filestore/commit/59904e4219e4c8d2b5bd4a474d604ccd91647322))
