# Changelog

## [9.2.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v9.1.0...documentai-v9.2.0) (2025-06-03)


### Features

* [documentai] Added config options to enable table annotation and image extraction ([#6287](https://github.com/googleapis/google-cloud-node/issues/6287)) ([18185f8](https://github.com/googleapis/google-cloud-node/commit/18185f8a2318aeac3207c8daebe020dcbaa9bbb0))

## [9.1.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v9.0.0...documentai-v9.1.0) (2025-03-19)


### Features

* [documentai] Added config options to enable LLM layout parsing ([#6180](https://github.com/googleapis/google-cloud-node/issues/6180)) ([f0f3e3a](https://github.com/googleapis/google-cloud-node/commit/f0f3e3a7956143160cb36d8cba96e669c76e3c2e))

## [9.0.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.12.0...documentai-v9.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [8.12.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.11.0...documentai-v8.12.0) (2024-10-30)


### Features

* [documentai] Updated the exponential backoff settings for the Document AI ProcessDocument and BatchProcessDocuments methods ([#5762](https://github.com/googleapis/google-cloud-node/issues/5762)) ([267abc2](https://github.com/googleapis/google-cloud-node/commit/267abc23759c33654e12a9cc57d62abab8642480))

## [8.11.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.10.0...documentai-v8.11.0) (2024-10-10)


### Features

* [documentai] Removed deprecated api versions ([#5735](https://github.com/googleapis/google-cloud-node/issues/5735)) ([05a5acf](https://github.com/googleapis/google-cloud-node/commit/05a5acff50e5fe8cf9d1806dee652d522c88a206))

## [8.10.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.9.0...documentai-v8.10.0) (2024-09-13)


### Features

* [documentai] Add API fields for the descriptions of entity type and property in the document schema ([#5662](https://github.com/googleapis/google-cloud-node/issues/5662)) ([c0995a2](https://github.com/googleapis/google-cloud-node/commit/c0995a2e4866012d19ce21a3b98c514c8640a5e3))

## [8.9.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.8.0...documentai-v8.9.0) (2024-08-09)


### Features

* [documentai] A new field `imageless_mode` is added to message `.google.cloud.documentai.v1.ProcessRequest` ([#5593](https://github.com/googleapis/google-cloud-node/issues/5593)) ([2393568](https://github.com/googleapis/google-cloud-node/commit/239356840a3f296f59c4b71c7028b071f3e6653a))

## [8.8.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.7.0...documentai-v8.8.0) (2024-06-03)


### Features

* [documentai] Make Layout Parser generally available in V1 ([#5393](https://github.com/googleapis/google-cloud-node/issues/5393)) ([b6b04db](https://github.com/googleapis/google-cloud-node/commit/b6b04dbfa0a014b559d7093f5400187a2f7b192b))
* [documentai] Make Layout Parser generally available in V1 ([#5411](https://github.com/googleapis/google-cloud-node/issues/5411)) ([750a6ac](https://github.com/googleapis/google-cloud-node/commit/750a6ac920aa0fd3f468dc64bee5acd1b619d543))

## [8.7.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.6.0...documentai-v8.7.0) (2024-05-21)


### Features

* [documentai] update Nodejs generator to send API versions in headers for GAPICs ([#5334](https://github.com/googleapis/google-cloud-node/issues/5334)) ([62922e2](https://github.com/googleapis/google-cloud-node/commit/62922e2c19d2c78cc123900f3b1788fd9eba403c))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [8.6.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.5.0...documentai-v8.6.0) (2024-04-23)


### Features

* [documentai] Support Chunk header and footer in Doc AI external proto ([#5275](https://github.com/googleapis/google-cloud-node/issues/5275)) ([b7ce5da](https://github.com/googleapis/google-cloud-node/commit/b7ce5da5f70503bccc08a8d8051afff521749fd0))

## [8.5.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.4.0...documentai-v8.5.0) (2024-04-18)


### Features

* [documentai] A new message `FoundationModelTuningOptions` is added ([#5242](https://github.com/googleapis/google-cloud-node/issues/5242)) ([71b7139](https://github.com/googleapis/google-cloud-node/commit/71b713900dbb596d42fe6f3dd9a9f328612fa955))

## [8.4.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.3.0...documentai-v8.4.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [8.3.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.2.0...documentai-v8.3.0) (2024-04-05)


### Features

* [documentai] Support a new Layout Processor in Document AI ([#5213](https://github.com/googleapis/google-cloud-node/issues/5213)) ([ab38a59](https://github.com/googleapis/google-cloud-node/commit/ab38a590d9dba7d7b1f97de8c278fa408606003f))

## [8.2.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.1.2...documentai-v8.2.0) (2024-02-07)


### Features

* [documentai] expose model_type in v1 processor, so that user can see the model_type after get or list processor version ([#5004](https://github.com/googleapis/google-cloud-node/issues/5004)) ([83e2e5c](https://github.com/googleapis/google-cloud-node/commit/83e2e5cb7fa5c781580cb07d48e00b3908d730c4))

## [8.1.2](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.1.1...documentai-v8.1.2) (2024-01-05)


### Bug Fixes

* [documentai] correct long audio synthesis HTTP binding ([#4884](https://github.com/googleapis/google-cloud-node/issues/4884)) ([cca21ed](https://github.com/googleapis/google-cloud-node/commit/cca21ed5e5ac57397c77b23e5f310561f4b27102))

## [8.1.1](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.1.0...documentai-v8.1.1) (2023-12-11)


### Bug Fixes

* **deps:** Update dependency p-queue to v8 ([#4877](https://github.com/googleapis/google-cloud-node/issues/4877)) ([17cd102](https://github.com/googleapis/google-cloud-node/commit/17cd1021fdc31e8077456a7f0f822287877f4f61))

## [8.1.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.0.1...documentai-v8.1.0) (2023-10-18)


### Features

* [documentai] added field Processor.processor_version_aliases ([#4689](https://github.com/googleapis/google-cloud-node/issues/4689)) ([effcc26](https://github.com/googleapis/google-cloud-node/commit/effcc26ef80ba3d7fd982d1d3860c147a9046f15))
* [documentai] Added SummaryOptions to ProcessOptions for the Summarizer processor ([#4696](https://github.com/googleapis/google-cloud-node/issues/4696)) ([d02e044](https://github.com/googleapis/google-cloud-node/commit/d02e04450fbbe047238f2d0d8b20355ec9855832))

## [8.0.1](https://github.com/googleapis/google-cloud-node/compare/documentai-v8.0.0...documentai-v8.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [8.0.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.4.0...documentai-v8.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [documentai] fix typings for IAM methods ([#4423](https://github.com/googleapis/google-cloud-node/issues/4423)) ([963accc](https://github.com/googleapis/google-cloud-node/commit/963accc64a2273b6d287d15c631de1ab12fcd8b0))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [7.4.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.3.1...documentai-v7.4.0) (2023-06-28)


### Features

* [documentai] add StyleInfo to document.proto ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))
* [documentai] add StyleInfo to document.proto ([#4352](https://github.com/googleapis/google-cloud-node/issues/4352)) ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))
* Add IMPORTING enum to State in processor.proto ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))
* Add IMPORTING enum to State in processor.proto ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))
* Add PropertyMetadata and EntityTypeMetadata to document_schema.proto ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))
* Add REPLACE enum to OperationType in document.proto ([512ef37](https://github.com/googleapis/google-cloud-node/commit/512ef37b330c16029bd0a2721efe07ce9a31f90b))

## [7.3.1](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.3.0...documentai-v7.3.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [7.3.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.2.0...documentai-v7.3.0) (2023-03-28)


### Features

* [documentai] Add ImportProcessorVersion in v1beta3 ([#4109](https://github.com/googleapis/google-cloud-node/issues/4109)) ([764faca](https://github.com/googleapis/google-cloud-node/commit/764faca7cad111d0fea1cb26678b4139e861f5ae))

## [7.2.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.1.0...documentai-v7.2.0) (2023-03-13)


### Features

* [documentai] added hints.language_hints field in OcrConfig ([#4062](https://github.com/googleapis/google-cloud-node/issues/4062)) ([91b3811](https://github.com/googleapis/google-cloud-node/commit/91b38119e9cf9f700e87ad0d12ba54e72dc53960))

## [7.1.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.0.1...documentai-v7.1.0) (2023-02-22)


### Features

* [documentai] Added Training and Evaluation functions, request, responses and metadata to document_processor_service.proto ([#4008](https://github.com/googleapis/google-cloud-node/issues/4008)) ([f81218f](https://github.com/googleapis/google-cloud-node/commit/f81218fe90fb0ead2487c3e321e258edbde74039))

## [7.0.1](https://github.com/googleapis/google-cloud-node/compare/documentai-v7.0.0...documentai-v7.0.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [7.0.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v6.3.0...documentai-v7.0.0) (2023-02-09)


### ⚠ BREAKING CHANGES

* **gitignore:** The TrainProcessorVersion parent was incorrectly annotated.

### Miscellaneous Chores

* **gitignore:** [documentai] feat: Added EvaluationReference to evaluation.proto ([#3954](https://github.com/googleapis/google-cloud-node/issues/3954)) ([9825fa9](https://github.com/googleapis/google-cloud-node/commit/9825fa99b94aad5cf1c1d6b3a858bc4e3ccfcb15))

## [6.3.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v6.2.0...documentai-v6.3.0) (2023-01-28)


### Features

* [documentai] added advanced_ocr_options field in OcrConfig ([#3890](https://github.com/googleapis/google-cloud-node/issues/3890)) ([babcf2f](https://github.com/googleapis/google-cloud-node/commit/babcf2fbe347fc278c321c0a08b124af05a3358b))
* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))
* Exposed GetProcessorType to v1 ([#3856](https://github.com/googleapis/google-cloud-node/issues/3856)) ([1195e83](https://github.com/googleapis/google-cloud-node/commit/1195e833447ef2d448284b807ef1a8c3c8ff5f01))

## [6.2.0](https://github.com/googleapis/google-cloud-node/compare/documentai-v6.1.0...documentai-v6.2.0) (2022-12-16)


### Features

* Added process_options field in ProcessRequest in document_processor_service.proto ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added process_options field in ProcessRequest in document_processor_service.proto ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added sample_document_uris field in ProcessorType in processor_type.proto ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added sample_document_uris field in ProcessorType in processor_type.proto ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([19e9aed](https://github.com/googleapis/google-cloud-node/commit/19e9aedfddebc4319993fc1d3fba4030f436d38c))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([#3734](https://github.com/googleapis/google-cloud-node/issues/3734)) ([19e9aed](https://github.com/googleapis/google-cloud-node/commit/19e9aedfddebc4319993fc1d3fba4030f436d38c))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([#3750](https://github.com/googleapis/google-cloud-node/issues/3750)) ([f9fc947](https://github.com/googleapis/google-cloud-node/commit/f9fc947d95179d22d17e0ca722b9cfbcab4699dc))
* Added TrainProcessorVersion, EvaluateProcessorVersion, GetEvaluation, and ListEvaluations v1beta3 APIs ([#3632](https://github.com/googleapis/google-cloud-node/issues/3632)) ([999b3d0](https://github.com/googleapis/google-cloud-node/commit/999b3d085c4579a62e1b690ea7583545a6074742))


### Bug Fixes

* **deps:** Update dependency p-queue to v7 ([#3628](https://github.com/googleapis/google-cloud-node/issues/3628)) ([e043637](https://github.com/googleapis/google-cloud-node/commit/e043637de795b86038dc6d01d9d6402e1f187b04))

## [6.1.0](https://github.com/googleapis/nodejs-document-ai/compare/v6.0.0...v6.1.0) (2022-11-11)


### Features

* Added font_family to document.proto ([#377](https://github.com/googleapis/nodejs-document-ai/issues/377)) ([7ded563](https://github.com/googleapis/nodejs-document-ai/commit/7ded5630ed4e589d7a77a91722531fc4f62810b6))
* added ImageQualityScores message to document.proto ([7ded563](https://github.com/googleapis/nodejs-document-ai/commit/7ded5630ed4e589d7a77a91722531fc4f62810b6))
* added PropertyMetadata and EntityTypeMetadata to document_schema.proto ([7ded563](https://github.com/googleapis/nodejs-document-ai/commit/7ded5630ed4e589d7a77a91722531fc4f62810b6))


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#372](https://github.com/googleapis/nodejs-document-ai/issues/372)) ([a612f68](https://github.com/googleapis/nodejs-document-ai/commit/a612f68401bdd63eba38f4830db1d83ab7d5bef2))
* Regenerated protos JS and TS definitions ([#376](https://github.com/googleapis/nodejs-document-ai/issues/376)) ([64223b5](https://github.com/googleapis/nodejs-document-ai/commit/64223b5d6b5fe5ee4d3922162dbbc63a9401c41a))

## [6.0.0](https://github.com/googleapis/nodejs-document-ai/compare/v5.0.0...v6.0.0) (2022-09-22)


### ⚠ BREAKING CHANGES

* Changed the name field for ProcessRequest and BatchProcessorRequest to accept * so the name field can accept Processor and ProcessorVersion.

### Bug Fixes

* Allow passing gax instance to client constructor ([#354](https://github.com/googleapis/nodejs-document-ai/issues/354)) ([bfa1e06](https://github.com/googleapis/nodejs-document-ai/commit/bfa1e0694cd8529b04175970cc08035ddf1692c4))
* Better support for fallback mode ([#348](https://github.com/googleapis/nodejs-document-ai/issues/348)) ([ae5f1ae](https://github.com/googleapis/nodejs-document-ai/commit/ae5f1aef32f87c7a8ca6a1d4189bf12369d0259e))
* Change import long to require ([#350](https://github.com/googleapis/nodejs-document-ai/issues/350)) ([ba282ff](https://github.com/googleapis/nodejs-document-ai/commit/ba282ff23872947ef2df2dffb31ff978f2a5a6d9))
* **deps:** Update dependency uuid to v9 ([#356](https://github.com/googleapis/nodejs-document-ai/issues/356)) ([b465fd2](https://github.com/googleapis/nodejs-document-ai/commit/b465fd2088b9e9269e5b5f2b24aa64fd42bdfffb))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-document-ai/issues/1553)) ([#353](https://github.com/googleapis/nodejs-document-ai/issues/353)) ([3e0beda](https://github.com/googleapis/nodejs-document-ai/commit/3e0beda24c8393e1b1b4e81b71a4ca95fee0056b))
* Preserve default values in x-goog-request-params header ([#357](https://github.com/googleapis/nodejs-document-ai/issues/357)) ([17f61ed](https://github.com/googleapis/nodejs-document-ai/commit/17f61ed8fa6690845826987fb0f7471e289443b7))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-document-ai/issues/1546)) ([#352](https://github.com/googleapis/nodejs-document-ai/issues/352)) ([0624e90](https://github.com/googleapis/nodejs-document-ai/commit/0624e90f6e5944f2ee41294fa1e39d5c0b9916c5))
* use google-gax v3.3.0 ([3e0beda](https://github.com/googleapis/nodejs-document-ai/commit/3e0beda24c8393e1b1b4e81b71a4ca95fee0056b))


### Miscellaneous Chores

* Remove unused proto imports ([#345](https://github.com/googleapis/nodejs-document-ai/issues/345)) ([5da430e](https://github.com/googleapis/nodejs-document-ai/commit/5da430e28bbd1298db8cda588c896873b1614191))

## [5.0.0](https://github.com/googleapis/nodejs-document-ai/compare/v4.1.0...v5.0.0) (2022-08-12)


### ⚠ BREAKING CHANGES

* Changed the name field for ProcessRequest and BatchProcessorRequest to accept * so the name field can accept Processor and ProcessorVersion.

### Documentation

* fix minor docstring formatting ([#343](https://github.com/googleapis/nodejs-document-ai/issues/343)) ([fc3eb0c](https://github.com/googleapis/nodejs-document-ai/commit/fc3eb0c24bd6a9618cb404b77a4f22e57f603060))

## [4.1.0](https://github.com/googleapis/nodejs-document-ai/compare/v4.0.0...v4.1.0) (2022-07-01)


### Features

* support regapic LRO ([#339](https://github.com/googleapis/nodejs-document-ai/issues/339)) ([2be6744](https://github.com/googleapis/nodejs-document-ai/commit/2be67448def326a68a4f81557c536a8a4eed6aad))

## [4.0.0](https://github.com/googleapis/nodejs-document-ai/compare/v3.3.0...v4.0.0) (2022-06-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#333)
* mark Document.Entity.type as REQUIRED in all versions (#326)

### Features

* add `content` field in TextAnchor ([#315](https://github.com/googleapis/nodejs-document-ai/issues/315)) ([1fa9195](https://github.com/googleapis/nodejs-document-ai/commit/1fa9195d555bef2fc2c45668338200d95fec47cb))


### Bug Fixes

* **deps:** update dependency @google-cloud/storage to v6 ([#335](https://github.com/googleapis/nodejs-document-ai/issues/335)) ([0259e67](https://github.com/googleapis/nodejs-document-ai/commit/0259e67e411622dbe4acf2ece931b09adf7aaafd))
* mark Document.Entity.type as REQUIRED in all versions ([#326](https://github.com/googleapis/nodejs-document-ai/issues/326)) ([8ef4cca](https://github.com/googleapis/nodejs-document-ai/commit/8ef4cca05d7095ed51befbb791991209b0d1a3f8))


### Build System

* update library to use Node 12 ([#333](https://github.com/googleapis/nodejs-document-ai/issues/333)) ([f51470c](https://github.com/googleapis/nodejs-document-ai/commit/f51470cff119edca6d5ad38ba89652fec80cb429))

## [3.3.0](https://github.com/googleapis/nodejs-document-ai/compare/v3.2.1...v3.3.0) (2022-02-22)


### Features

* add `symbols` field, and auto-format comments ([ec5edb7](https://github.com/googleapis/nodejs-document-ai/commit/ec5edb79f3efc5bef40a55dc30e342ce8ffa0cb8))
* add `symbols` field, and auto-format comments ([ec5edb7](https://github.com/googleapis/nodejs-document-ai/commit/ec5edb79f3efc5bef40a55dc30e342ce8ffa0cb8))
* add question_id field in ReviewDocumentOperationMetadata ([#304](https://github.com/googleapis/nodejs-document-ai/issues/304)) ([e10cd03](https://github.com/googleapis/nodejs-document-ai/commit/e10cd0349295483ca2628af661a3ce18c75382ac))
* add question_id field in ReviewDocumentOperationMetadata ([#308](https://github.com/googleapis/nodejs-document-ai/issues/308)) ([675aff9](https://github.com/googleapis/nodejs-document-ai/commit/675aff978cf6d0b685816a76f75d0562af9bef0b))

### [3.2.1](https://github.com/googleapis/nodejs-document-ai/compare/v3.2.0...v3.2.1) (2022-01-13)


### Bug Fixes

* **documentai:** add ancillary service bindings to service_yaml ([#296](https://github.com/googleapis/nodejs-document-ai/issues/296)) ([14d1b31](https://github.com/googleapis/nodejs-document-ai/commit/14d1b3195a3288f436a1445372cc3d66438bc544))

## [3.2.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.1.0...v3.2.0) (2021-12-14)


### Features

* add eslintignore for sameple generated code ([#1302](https://www.github.com/googleapis/nodejs-document-ai/issues/1302)) ([#286](https://www.github.com/googleapis/nodejs-document-ai/issues/286)) ([2baf637](https://www.github.com/googleapis/nodejs-document-ai/commit/2baf63798501748096b8e17500789e067ec66edd))

## [3.1.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.2...v3.1.0) (2021-09-21)


### Features

* turns on self-signed JWT feature flag ([#258](https://www.github.com/googleapis/nodejs-document-ai/issues/258)) ([e39c909](https://www.github.com/googleapis/nodejs-document-ai/commit/e39c909422e03b6ba48ea1163d80bc8a2504d172))


### Bug Fixes

* flag module as GA ([#260](https://www.github.com/googleapis/nodejs-document-ai/issues/260)) ([ecc541c](https://www.github.com/googleapis/nodejs-document-ai/commit/ecc541ce928a0b69a4541d8df941d47b71374938))

### [3.0.2](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.1...v3.0.2) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#253](https://www.github.com/googleapis/nodejs-document-ai/issues/253)) ([ac879c4](https://www.github.com/googleapis/nodejs-document-ai/commit/ac879c425cb75862508527b2cf7cbd34e958684e))
* **deps:** google-gax v2.24.1 ([#257](https://www.github.com/googleapis/nodejs-document-ai/issues/257)) ([4ff6b2d](https://www.github.com/googleapis/nodejs-document-ai/commit/4ff6b2dfa2a5cee97f5dee0690c54f606902a38a))
* Update DocumentUnderstandingService default_host in v1beta2 from a regional endpoint, to non-regional ([#252](https://www.github.com/googleapis/nodejs-document-ai/issues/252)) ([79b8d82](https://www.github.com/googleapis/nodejs-document-ai/commit/79b8d825244748473efcee1d75653aa2b5077055))

### [3.0.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.0...v3.0.1) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#243](https://www.github.com/googleapis/nodejs-document-ai/issues/243)) ([a9e4efd](https://www.github.com/googleapis/nodejs-document-ai/commit/a9e4efd2478def845376a951c40b76e3384a8b29))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#245](https://www.github.com/googleapis/nodejs-document-ai/issues/245)) ([06bf319](https://www.github.com/googleapis/nodejs-document-ai/commit/06bf3190cad3c9ce98e13aff718bb11db85dd4e5))

## [3.0.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.10.0...v3.0.0) (2021-07-01)


### ⚠ BREAKING CHANGES

* The default version of the API has changed from `v1beta3` to `v1`.

### Features

* default to v1 of the API ([#220](https://www.github.com/googleapis/nodejs-document-ai/issues/220)) ([5b370d0](https://www.github.com/googleapis/nodejs-document-ai/commit/5b370d06dd0edeefc05d70d99e2ae25890c8546d))
* update document.proto, add the processor management methods. ([#236](https://www.github.com/googleapis/nodejs-document-ai/issues/236)) ([ddc147f](https://www.github.com/googleapis/nodejs-document-ai/commit/ddc147f4ca253e52eb1d419219b5124ba00c93cd))
* update ReviewDocumentRequest to allow set priority and enable validation ([#238](https://www.github.com/googleapis/nodejs-document-ai/issues/238)) ([a39d9d5](https://www.github.com/googleapis/nodejs-document-ai/commit/a39d9d53fc9c25f0ba0f7046704ef9807116120b))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#241](https://www.github.com/googleapis/nodejs-document-ai/issues/241)) ([2576761](https://www.github.com/googleapis/nodejs-document-ai/commit/25767610bc0161ff98c984e6f08a29ff401ff6e4))
* GoogleAdsError missing using generator version after 1.3.0 ([#224](https://www.github.com/googleapis/nodejs-document-ai/issues/224)) ([087b081](https://www.github.com/googleapis/nodejs-document-ai/commit/087b0814467e340e8a1c5e2f860ebe8c083be734))
* make request optional in all cases ([#237](https://www.github.com/googleapis/nodejs-document-ai/issues/237)) ([10e12bb](https://www.github.com/googleapis/nodejs-document-ai/commit/10e12bbcd85818040cf85d9b70fbbaa63bde14e3))
* update default host to documentai.googleapis.com ([#217](https://www.github.com/googleapis/nodejs-document-ai/issues/217)) ([2d30ad0](https://www.github.com/googleapis/nodejs-document-ai/commit/2d30ad0f29e06d3fc83abba7e46f8d53c24762e7))

## [2.10.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.9.0...v2.10.0) (2021-05-12)


### Features

* add confidence field to the PageAnchor.PageRef in document.proto ([#206](https://www.github.com/googleapis/nodejs-document-ai/issues/206)) ([f3154a9](https://www.github.com/googleapis/nodejs-document-ai/commit/f3154a9456c5727b317af34c5a76ca0c7cda9cbb))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#210](https://www.github.com/googleapis/nodejs-document-ai/issues/210)) ([86d31c7](https://www.github.com/googleapis/nodejs-document-ai/commit/86d31c767881ee5524f4285bf828bf674a7d282e))
* use require() to load JSON protos ([#214](https://www.github.com/googleapis/nodejs-document-ai/issues/214)) ([c73202d](https://www.github.com/googleapis/nodejs-document-ai/commit/c73202dba1d62a1b414abe8b1dc39b93c0eb2e7b))

## [2.9.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.8.0...v2.9.0) (2021-04-26)


### Features

* add confidence field to the PageAnchor.PageRef in document.proto ([#204](https://www.github.com/googleapis/nodejs-document-ai/issues/204)) ([580150b](https://www.github.com/googleapis/nodejs-document-ai/commit/580150bdb3b5f7bfac599ee7c122a3ffb9a624c7))

## [2.8.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.7.0...v2.8.0) (2021-04-13)


### Features

* add v1 API surface ([#196](https://www.github.com/googleapis/nodejs-document-ai/issues/196)) ([54b1dc4](https://www.github.com/googleapis/nodejs-document-ai/commit/54b1dc4354c3700d2d729d745edf0de0657d1014))

## [2.7.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.6.0...v2.7.0) (2021-04-12)


### Features

* add EVAL_SKIPPED value to the Provenance.OperationType enum ([#191](https://www.github.com/googleapis/nodejs-document-ai/issues/191)) ([161b3e0](https://www.github.com/googleapis/nodejs-document-ai/commit/161b3e05412e27454f183c77038f3a920a8af8f5))

## [2.6.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.5.0...v2.6.0) (2021-03-15)


### Features

* remove the translation fields in document.proto ([#181](https://www.github.com/googleapis/nodejs-document-ai/issues/181)) ([d76272a](https://www.github.com/googleapis/nodejs-document-ai/commit/d76272a98f527d00a5862299208f8f0ebb054405))

## [2.5.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.4.0...v2.5.0) (2021-02-24)


### Features

* Update documentai/v1beta3 protos: add support for boolean normalized value ([#154](https://www.github.com/googleapis/nodejs-document-ai/issues/154)) ([4ae8c57](https://www.github.com/googleapis/nodejs-document-ai/commit/4ae8c572089cf607810a5e730a4e5807a495bcbc))

## [2.4.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.3.0...v2.4.0) (2021-02-17)


### Features

* Update documentai/v1beta3 protos ([#152](https://www.github.com/googleapis/nodejs-document-ai/issues/152)) ([9e6b660](https://www.github.com/googleapis/nodejs-document-ai/commit/9e6b66000cc12a08c87924ab26ad9a482f03dbeb))

## [2.3.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.2...v2.3.0) (2021-01-09)


### Features

* adds style enumeration ([#143](https://www.github.com/googleapis/nodejs-document-ai/issues/143)) ([0ed64c4](https://www.github.com/googleapis/nodejs-document-ai/commit/0ed64c40cb5908838348cb9c968841941114473c))

### [2.2.2](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.1...v2.2.2) (2020-12-01)


### Bug Fixes

* **browser:** check for fetch on window ([#131](https://www.github.com/googleapis/nodejs-document-ai/issues/131)) ([b7b016e](https://www.github.com/googleapis/nodejs-document-ai/commit/b7b016ed8c45c4da57cbe3eb652cd6b27f3be0f0))

### [2.2.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.0...v2.2.1) (2020-11-10)


### Bug Fixes

* do not modify options object ([#125](https://www.github.com/googleapis/nodejs-document-ai/issues/125)) ([acd166f](https://www.github.com/googleapis/nodejs-document-ai/commit/acd166fab67c77101e6d0168d0a74a420fc3df6f))

## [2.2.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.1.1...v2.2.0) (2020-10-17)


### Features

* add v1beta3 version ([#105](https://www.github.com/googleapis/nodejs-document-ai/issues/105)) ([b419994](https://www.github.com/googleapis/nodejs-document-ai/commit/b4199943d8678b9bcaa324e94540652dff40d4e0))
* generation error and set v1beta3 as default ([#112](https://www.github.com/googleapis/nodejs-document-ai/issues/112)) ([83ca094](https://www.github.com/googleapis/nodejs-document-ai/commit/83ca09497a4803e566c58a9a88e5bdac04585743))

### [2.1.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.1.0...v2.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#74](https://www.github.com/googleapis/nodejs-document-ai/issues/74)) ([54782b4](https://www.github.com/googleapis/nodejs-document-ai/commit/54782b440b716967f722dec369556b183d1de878))

## [2.1.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#60](https://www.github.com/googleapis/nodejs-document-ai/issues/60)) ([73ab3b1](https://www.github.com/googleapis/nodejs-document-ai/commit/73ab3b1a98286293b0c639ed0690914de0582987))


### Bug Fixes

* proper fallback option handling ([b4aef10](https://www.github.com/googleapis/nodejs-document-ai/commit/b4aef1014338767666f05de59f04fb60b3600be6))

## [2.0.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v1.0.0...v2.0.0) (2020-05-15)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#54](https://www.github.com/googleapis/nodejs-document-ai/issues/54)) ([d88c23c](https://www.github.com/googleapis/nodejs-document-ai/commit/d88c23cb6722e8b4cac710f87bf1cfee1061a5e3))
* drop node8 support ([#30](https://www.github.com/googleapis/nodejs-document-ai/issues/30)) ([67ff888](https://www.github.com/googleapis/nodejs-document-ai/commit/67ff88835475d12680e2a2af03987160af9d30e5))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#37](https://www.github.com/googleapis/nodejs-document-ai/issues/37)) ([9e6cf01](https://www.github.com/googleapis/nodejs-document-ai/commit/9e6cf011c010bdae157d022fa95edd0ad819862c))
* remove unused dependencies ([#41](https://www.github.com/googleapis/nodejs-document-ai/issues/41)) ([27077e9](https://www.github.com/googleapis/nodejs-document-ai/commit/27077e9348ce2991f0b506384871e42494baa085))
* **deps:** update dependency @google-cloud/storage to v5 ([#56](https://www.github.com/googleapis/nodejs-document-ai/issues/56)) ([934f317](https://www.github.com/googleapis/nodejs-document-ai/commit/934f3170fd5650e766525e7d8b1f580a1eca7fab))
* **samples:** do not pass location ([#39](https://www.github.com/googleapis/nodejs-document-ai/issues/39)) ([2ef2db5](https://www.github.com/googleapis/nodejs-document-ai/commit/2ef2db5f004eb5dcaef27fa85c0d723634661a34))

## 1.0.0 (2020-03-20)


### ⚠ BREAKING CHANGES

* initial generation of beta client (#5)

### Features

* **samples:** adds Document AI parse table, forms samples ([#8](https://www.github.com/googleapis/nodejs-document-ai/issues/8)) ([2fdf913](https://www.github.com/googleapis/nodejs-document-ai/commit/2fdf913a29d5339b65212a3105a59435ebdd11b0))
* adds beta samples ([30a5392](https://www.github.com/googleapis/nodejs-document-ai/commit/30a5392f806399ce233186f3ca3a1bf2bb1be044))
* initial generation of beta client ([#5](https://www.github.com/googleapis/nodejs-document-ai/issues/5)) ([e5a34f1](https://www.github.com/googleapis/nodejs-document-ai/commit/e5a34f1de4ac9993bd51738e7a626a814c2d962a))
* updated library from protos ([#9](https://www.github.com/googleapis/nodejs-document-ai/issues/9)) ([5ef7220](https://www.github.com/googleapis/nodejs-document-ai/commit/5ef722045146cd5dc8f8b7c3383136a9bc253f47))
