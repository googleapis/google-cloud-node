# Changelog

## [1.6.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.5.0...contentwarehouse-v1.6.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [1.5.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.4.0...contentwarehouse-v1.5.0) (2024-02-22)


### Features

* [contentwarehouse] A new field `schema_override` is added to message `ProcessOptions` ([#5052](https://github.com/googleapis/google-cloud-node/issues/5052)) ([e1afd1f](https://github.com/googleapis/google-cloud-node/commit/e1afd1fc6779e73022f996ffa44378d0096f6269))

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.3.0...contentwarehouse-v1.4.0) (2024-02-07)


### Features

* [contentwarehouse] expose model_type in v1 processor, so that user can see the model_type after get or list processor version ([#5006](https://github.com/googleapis/google-cloud-node/issues/5006)) ([d82cadd](https://github.com/googleapis/google-cloud-node/commit/d82caddf977cc9cb99cae2d1847df252adc708cb))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.2.0...contentwarehouse-v1.3.0) (2023-10-18)


### Features

* [contentwarehouse] add matched_token_page_indices field in DocumentWarehouse API ([#4700](https://github.com/googleapis/google-cloud-node/issues/4700)) ([8ea16a1](https://github.com/googleapis/google-cloud-node/commit/8ea16a1535e4162dac7b9bd621c731330712f899))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.1.0...contentwarehouse-v1.2.0) (2023-09-19)


### Features

* [contentwarehouse] add `ROOT_FOLDER` field to Document Warehouse API v1 ([#4672](https://github.com/googleapis/google-cloud-node/issues/4672)) ([998711e](https://github.com/googleapis/google-cloud-node/commit/998711e948c717d5b0bd878d1e0e8cf861831d52))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v1.0.0...contentwarehouse-v1.1.0) (2023-09-06)


### Features

* [contentwarehouse] add `disposition_time`, `legal_hold`, `document_is_retention_folder`, `document_is_legal_hold_folder`, `question_answer`, `document_name_filter` field to Document Warehouse API v1 ([#4537](https://github.com/googleapis/google-cloud-node/issues/4537)) ([78fd166](https://github.com/googleapis/google-cloud-node/commit/78fd166534555720b93d2b37f28307c6003390ff))
* [contentwarehouse] add Pipeline Service to Document Warehouse API v1 ([#4558](https://github.com/googleapis/google-cloud-node/issues/4558)) ([18c7503](https://github.com/googleapis/google-cloud-node/commit/18c750378975440bb8ff8168e7f72b8de24fcfac))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.5.1...contentwarehouse-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.5.1](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.5.0...contentwarehouse-v0.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.4.0...contentwarehouse-v0.5.0) (2023-04-04)


### Features

* [contentwarehouse] add php, csharp, ruby client library API support ([#4151](https://github.com/googleapis/google-cloud-node/issues/4151)) ([a438ccf](https://github.com/googleapis/google-cloud-node/commit/a438ccf0cfba0750332bc6b33ad824176e246df4))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.3.1...contentwarehouse-v0.4.0) (2023-02-22)


### Features

* [contentwarehouse] Added Training and Evaluation functions, request, responses and metadata to document_processor_service.proto ([#4009](https://github.com/googleapis/google-cloud-node/issues/4009)) ([904ac0c](https://github.com/googleapis/google-cloud-node/commit/904ac0cadd5b59c75309ac7766dad5da3080d105))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.3.0...contentwarehouse-v0.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.2.0...contentwarehouse-v0.3.0) (2023-01-28)


### Features

* Exposed GetProcessorType to v1 ([#3857](https://github.com/googleapis/google-cloud-node/issues/3857)) ([26adeba](https://github.com/googleapis/google-cloud-node/commit/26adeba0625a05b17a7e87a2976520325621c307))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.1.2...contentwarehouse-v0.2.0) (2022-12-16)


### Features

* Added process_options field in ProcessRequest in document_processor_service.proto ([26b5dae](https://github.com/googleapis/google-cloud-node/commit/26b5daec8851edc199f0b85791da722c6d60510f))
* Added sample_document_uris field in ProcessorType in processor_type.proto ([26b5dae](https://github.com/googleapis/google-cloud-node/commit/26b5daec8851edc199f0b85791da722c6d60510f))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([#3735](https://github.com/googleapis/google-cloud-node/issues/3735)) ([1b3b2b2](https://github.com/googleapis/google-cloud-node/commit/1b3b2b2258b7967c0d5fcf4cb009fc0821d7b862))
* Added sharding_config field in DocumentOutputConfig.GcsOutputConfig in document_io.proto ([#3751](https://github.com/googleapis/google-cloud-node/issues/3751)) ([26b5dae](https://github.com/googleapis/google-cloud-node/commit/26b5daec8851edc199f0b85791da722c6d60510f))

## [0.1.2](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.1.1...contentwarehouse-v0.1.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/contentwarehouse-v0.1.0...contentwarehouse-v0.1.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## 0.1.0 (2022-10-27)


### Features

* Add initial files for google.cloud.contentwarehouse.v1 ([#3454](https://github.com/googleapis/google-cloud-node/issues/3454)) ([3235002](https://github.com/googleapis/google-cloud-node/commit/323500241d4470668ea5db5bd597808425c4d3e4))
