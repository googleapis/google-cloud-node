# Changelog

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
