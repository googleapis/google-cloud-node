# Changelog

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/dialogflow-cx-v3.3.0...dialogflow-cx-v3.4.0) (2023-03-01)


### Features

* [dialogflow-cx] Added persist_parameter_changes field from `query_params` to MatchIntentRequest ([#4031](https://github.com/googleapis/google-cloud-node/issues/4031)) ([ebaed20](https://github.com/googleapis/google-cloud-node/commit/ebaed2007ee154ce8f9a604d023d5a5cd1ef7b81))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/dialogflow-cx-v3.2.1...dialogflow-cx-v3.3.0) (2023-02-23)


### Features

* [dialogflow-cx] added gcs.proto. added support for GcsDestination and TextToSpeechSettings ([#3998](https://github.com/googleapis/google-cloud-node/issues/3998)) ([f98ece2](https://github.com/googleapis/google-cloud-node/commit/f98ece2ab73b44cdab04892f9b0e81ef18995390))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/dialogflow-cx-v3.2.0...dialogflow-cx-v3.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/dialogflow-cx-v3.1.2...dialogflow-cx-v3.2.0) (2023-01-28)


### Features

* Added JSON_PACKAGE field to ExportAgentRequest ([#3876](https://github.com/googleapis/google-cloud-node/issues/3876)) ([638ba10](https://github.com/googleapis/google-cloud-node/commit/638ba10f7e8b3401300977dc231da7849d4b2ac3))
* Added JSON_PACKAGE field to ExportAgentRequest ([#3882](https://github.com/googleapis/google-cloud-node/issues/3882)) ([cfe55a5](https://github.com/googleapis/google-cloud-node/commit/cfe55a5215815c3f9a4b58c6a06d5a261223d775))
* ResponseMessage proto contains channel information ([#3843](https://github.com/googleapis/google-cloud-node/issues/3843)) ([fef1c23](https://github.com/googleapis/google-cloud-node/commit/fef1c23fb0b2875090afec555f32efaa417b16e4))
* ResponseMessage proto contains channel information ([#3848](https://github.com/googleapis/google-cloud-node/issues/3848)) ([618fd54](https://github.com/googleapis/google-cloud-node/commit/618fd54fce8d95ba9a61200962f249f2ed65148e))

## [3.1.2](https://github.com/googleapis/nodejs-dialogflow-cx/compare/v3.1.1...v3.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#320](https://github.com/googleapis/nodejs-dialogflow-cx/issues/320)) ([516e59d](https://github.com/googleapis/nodejs-dialogflow-cx/commit/516e59d6f6a4a9e16ed635900bd89d6c3a73ee10))
* Regenerated protos JS and TS definitions ([#324](https://github.com/googleapis/nodejs-dialogflow-cx/issues/324)) ([c82e46a](https://github.com/googleapis/nodejs-dialogflow-cx/commit/c82e46a74aa30862e999ae37f16508f241792493))

## [3.1.1](https://github.com/googleapis/nodejs-dialogflow-cx/compare/v3.1.0...v3.1.1) (2022-09-14)


### Bug Fixes

* Allow passing gax instance to client constructor ([#310](https://github.com/googleapis/nodejs-dialogflow-cx/issues/310)) ([5eb33cd](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5eb33cd1e3ace81e70a844b870d9fc102ec73a3e))
* Better support for fallback mode ([#305](https://github.com/googleapis/nodejs-dialogflow-cx/issues/305)) ([f63bcf2](https://github.com/googleapis/nodejs-dialogflow-cx/commit/f63bcf25e3354b00d4a428cad0a082134642b661))
* Change import long to require ([#306](https://github.com/googleapis/nodejs-dialogflow-cx/issues/306)) ([343bc0e](https://github.com/googleapis/nodejs-dialogflow-cx/commit/343bc0efe2ee44888c706f3f377399df3fef13af))
* **deps:** Update dependency uuid to v9 ([#311](https://github.com/googleapis/nodejs-dialogflow-cx/issues/311)) ([f7ba638](https://github.com/googleapis/nodejs-dialogflow-cx/commit/f7ba63867b32a4435f089584c08c5721eec428a7))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-dialogflow-cx/issues/1553)) ([#309](https://github.com/googleapis/nodejs-dialogflow-cx/issues/309)) ([844c8f7](https://github.com/googleapis/nodejs-dialogflow-cx/commit/844c8f71bf36ed7829542c3f5ff552baee17811a))
* Preserve default values in x-goog-request-params header ([#312](https://github.com/googleapis/nodejs-dialogflow-cx/issues/312)) ([239d018](https://github.com/googleapis/nodejs-dialogflow-cx/commit/239d0185f5897109914543c96116cc35574fd2af))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-dialogflow-cx/issues/1546)) ([#308](https://github.com/googleapis/nodejs-dialogflow-cx/issues/308)) ([7363dfe](https://github.com/googleapis/nodejs-dialogflow-cx/commit/7363dfe3bf9ba7431871a7a9ecbff68024a37191))
* use google-gax v3.3.0 ([844c8f7](https://github.com/googleapis/nodejs-dialogflow-cx/commit/844c8f71bf36ed7829542c3f5ff552baee17811a))

## [3.1.0](https://github.com/googleapis/nodejs-dialogflow-cx/compare/v3.0.0...v3.1.0) (2022-07-08)


### Features

* added webhook_config ([03c33b8](https://github.com/googleapis/nodejs-dialogflow-cx/commit/03c33b89205ee8e9e9fbdd76cda7461ef87886d4))
* support regapic LRO ([03c33b8](https://github.com/googleapis/nodejs-dialogflow-cx/commit/03c33b89205ee8e9e9fbdd76cda7461ef87886d4))


### Bug Fixes

* fixes for dynamic routing and streaming descriptors ([03c33b8](https://github.com/googleapis/nodejs-dialogflow-cx/commit/03c33b89205ee8e9e9fbdd76cda7461ef87886d4))

## [3.0.0](https://github.com/googleapis/nodejs-dialogflow-cx/compare/v2.15.0...v3.0.0) (2022-06-23)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#288)

### Features

* add Webhook samples ([#259](https://github.com/googleapis/nodejs-dialogflow-cx/issues/259)) ([709dc6d](https://github.com/googleapis/nodejs-dialogflow-cx/commit/709dc6d88d768a9b553187787e9fb3808be8d991))
* added audio_export_settings ([#257](https://github.com/googleapis/nodejs-dialogflow-cx/issues/257)) ([39f1d1c](https://github.com/googleapis/nodejs-dialogflow-cx/commit/39f1d1ced3401e7cfa72f1448745d424837d42f2))
* added data format specification for export agent ([361e7d9](https://github.com/googleapis/nodejs-dialogflow-cx/commit/361e7d9d1f596a6280f07a1ce20456195a943d7a))
* added data format specification for export agent ([361e7d9](https://github.com/googleapis/nodejs-dialogflow-cx/commit/361e7d9d1f596a6280f07a1ce20456195a943d7a))
* added page in TestConfig ([7adaf67](https://github.com/googleapis/nodejs-dialogflow-cx/commit/7adaf6735cbef19d38e1288fd40ea27cf595b20f))
* added page in TestConfig ([#239](https://github.com/googleapis/nodejs-dialogflow-cx/issues/239)) ([283c389](https://github.com/googleapis/nodejs-dialogflow-cx/commit/283c389cc220b9f192f15822ef2d1e38f35d6103))
* added support for locking an agent for changes ([361e7d9](https://github.com/googleapis/nodejs-dialogflow-cx/commit/361e7d9d1f596a6280f07a1ce20456195a943d7a))
* added support for locking an agent for changes ([361e7d9](https://github.com/googleapis/nodejs-dialogflow-cx/commit/361e7d9d1f596a6280f07a1ce20456195a943d7a))


### Build System

* update library to use Node 12 ([#288](https://github.com/googleapis/nodejs-dialogflow-cx/issues/288)) ([9a72b32](https://github.com/googleapis/nodejs-dialogflow-cx/commit/9a72b3214b65c59ef6a34471dc93050bd61e846c))

## [2.15.0](https://github.com/googleapis/nodejs-dialogflow-cx/compare/v2.14.0...v2.15.0) (2022-01-19)


### Features

* added `TelephonyTransferCall` in response message ([#207](https://github.com/googleapis/nodejs-dialogflow-cx/issues/207)) ([8859e3f](https://github.com/googleapis/nodejs-dialogflow-cx/commit/8859e3ff90a7d46be6a7d09bb8de2ad5db421a8f))
* added API for changelogs docs: clarified semantic of the streaming APIs ([#197](https://github.com/googleapis/nodejs-dialogflow-cx/issues/197)) ([4f88255](https://github.com/googleapis/nodejs-dialogflow-cx/commit/4f882555cdd0243e775589e49f700defe1fa6902))
* added API for changelogs docs: clarified semantic of the streaming APIs ([#198](https://github.com/googleapis/nodejs-dialogflow-cx/issues/198)) ([9882149](https://github.com/googleapis/nodejs-dialogflow-cx/commit/988214975c0b7e16fd6ca99a57697ffb0a1ff490))
* added deployment API feat: exposed DTMF input info in the query result docs: added notes on long running operation ([#191](https://github.com/googleapis/nodejs-dialogflow-cx/issues/191)) ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))
* added support for `TelephonyTransferCall` ([#206](https://github.com/googleapis/nodejs-dialogflow-cx/issues/206)) ([17089de](https://github.com/googleapis/nodejs-dialogflow-cx/commit/17089defcd29ff87ecf4e6fcd9616233e4e26f7e))
* added support for comparing between versions docs: clarified security settings API reference ([#201](https://github.com/googleapis/nodejs-dialogflow-cx/issues/201)) ([f4ca7e2](https://github.com/googleapis/nodejs-dialogflow-cx/commit/f4ca7e2cb06a149ab50278f692ba7a4ed1e62cc4))
* added support for DeployFlow api under Environments ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))
* added support for Deployments with ListDeployments and GetDeployment apis ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))
* added support for TestCasesConfig under Environment ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))
* added the display name of the current page in webhook requests ([#211](https://github.com/googleapis/nodejs-dialogflow-cx/issues/211)) ([ae9b5ee](https://github.com/googleapis/nodejs-dialogflow-cx/commit/ae9b5ee6e6f79e81401d934702b0950b29f79ca3))
* added the display name of the current page in webhook requests ([#212](https://github.com/googleapis/nodejs-dialogflow-cx/issues/212)) ([349bc41](https://github.com/googleapis/nodejs-dialogflow-cx/commit/349bc4108b10263cd2f0354a3ad9e33697fa72a6))
* allow setting custom CA for generic webhooks ([#203](https://github.com/googleapis/nodejs-dialogflow-cx/issues/203)) ([f5d8155](https://github.com/googleapis/nodejs-dialogflow-cx/commit/f5d8155d7070f4d1b60ba32bc2f168c4169d9546))
* expose dtmf input info in the query result ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))


### Bug Fixes

* marked resource name of security setting as not-required ([5460ad4](https://github.com/googleapis/nodejs-dialogflow-cx/commit/5460ad46ffb774f590c8ff24816aa7f116dab112))

## [2.14.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.13.0...v2.14.0) (2021-09-21)


### Features

* turns on self-signed JWT feature flag ([#167](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/167)) ([a474169](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/a47416973c53bb62a701204fcacb7e5013d25658))

## [2.13.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.12.1...v2.13.0) (2021-08-17)


### Features

* add advanced settings for agent level feat: add rollout config, state and failure reason for experiment feat: add insights export settings for security setting feat: add language code for streaming recognition result and flow versions for query p... ([#156](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/156)) ([80d2f94](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/80d2f94bcfaa65ea442ee4f8133d850035be04ed))
* added support for DLP templates; expose `Locations` service to get/list avaliable locations of Dialogflow products ([#162](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/162)) ([b77bde9](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/b77bde9893cde0c9e766b8e844fa4cca61efb5aa))


### Bug Fixes

* **build:** migrate to using main branch ([#164](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/164)) ([092d69d](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/092d69d76716297aff6a671200088d5740b1fd47))
* **deps:** google-gax v2.24.1 ([#165](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/165)) ([6261c37](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/6261c37019b3ce94a9876bfa4634837132691888))

### [2.12.1](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.12.0...v2.12.1) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#148](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/148)) ([5e1ec0a](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/5e1ec0a77db21c219531800d2c54c5edd4f54fba))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#150](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/150)) ([8974183](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/8974183edd156e9adb9e9d11557931bda03c1d3c))

## [2.12.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.11.0...v2.12.0) (2021-06-30)


### Features

* mark agent.default_language_code as required feat: add return_partial response to Fulfillment docs: add notes to train agent before sending queries ([#140](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/140)) ([eae8f44](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/eae8f4409cf5832c5fd28e2e676847a4722997b9))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#145](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/145)) ([d5f2918](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/d5f291886d1418ad43684d3db7b0a2d12cd8c219))
* make request optional in all cases ([#139](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/139)) ([ad950f0](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/ad950f057f413b9c094b6d23a21ada0d64887206))

## [2.11.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.10.0...v2.11.0) (2021-06-21)


### Features

* **v3beta1:** Support partial response feature ([ee8a24a](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/ee8a24a1e47cb352198880490f047e2ff3d47152))
* **v3beta1:** support sentiment analysis in bot testing ([#127](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/127)) ([2c45b2c](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/2c45b2c4e9662aaef7352f3b3edf58c0bf29779e))


### Bug Fixes

* **v3beta1:** set agent default language code as required ([#134](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/134)) ([ee8a24a](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/ee8a24a1e47cb352198880490f047e2ff3d47152))

## [2.10.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.9.0...v2.10.0) (2021-06-17)


### Features

* **v3:** support sentiment analysis in bot testing ([#125](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/125)) ([d6d7684](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/d6d7684692ec3790ec5a4284cb206a4c26f4a1ab))

## [2.9.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.8.1...v2.9.0) (2021-06-14)


### Features

* added API for running continuous test ([#123](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/123)) ([248ae74](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/248ae742e786dd24f8a0e8161a1a30f684c3b7ff))

### [2.8.1](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.8.0...v2.8.1) (2021-06-10)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#122](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/122)) ([af8ca45](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/af8ca45c8d70264899bb458f68d6b5c0060229fa))

## [2.8.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.7.0...v2.8.0) (2021-05-25)


### Features

* added API for continuous test ([#119](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/119)) ([d36009b](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/d36009b8079314fbd7f9c30d2013ed53dc811342))

## [2.7.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.6.0...v2.7.0) (2021-05-10)


### Features

* add support for service directory webhooks ([#110](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/110)) ([d4b87a5](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/d4b87a5ba49dfa723079be71f9a7c6e69b4240b2))
* add support for service directory webhooks ([#113](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/113)) ([2ce89d5](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/2ce89d5a885f73bb66630f2ba1e5ad79b7c40730))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#106](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/106)) ([2c333d7](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/2c333d73df45ff13b0a2a85332bbcb23be2e7d41))
* use require() to load JSON protos ([#112](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/112)) ([d0cf055](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/d0cf055738496681fa351a9228f2a788b4132910))

## [2.6.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.5.0...v2.6.0) (2021-05-05)


### Features

* Expose supported languages of the agent; feat: add export / import flow API docs: Update docs on Pages, Session, Version, etc. ([#104](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/104)) ([c7ac26e](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/c7ac26ed6118cb8f2ea6ed9d7d6e0ca3421d84ea))

## [2.5.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.4.0...v2.5.0) (2021-04-28)


### Features

* Expose supported languages of the agent; feat: add export / import flow API docs: Update docs on Pages, Session, Version, etc. ([#103](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/103)) ([daa06ab](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/daa06abca3ef1e601672d9a18363603dcb359c6f))
* include original user query in WebhookRequest; add GetTextCaseresult API.  ([528192e](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/528192eb11453502332a35ff5838130e19c5e869))
* include original user query in WebhookRequest; add GetTextCaseresult API. doc: clarify resource format for session response. ([#82](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/82)) ([ff13a97](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/ff13a9708fccc0bf85f7972328dc289b50fdac20))
* support setting current_page to resume sessions; expose transition_route_groups in flows and language_code in webhook ([#90](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/90)) ([53f1e21](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/53f1e21deaf3adee3493b398529fc75baae70f99))
* support setting current_page to resume sessions; expose transition_route_groups in flows and language_code in webhook ([#91](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/91)) ([cd125d3](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/cd125d35c75ad740d3aa46d5af4a2142aaa051f1))

## [2.4.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.3.0...v2.4.0) (2021-03-15)


### Features

* added fallback option when restoring an agent docs: clarified experiment length ([f90bb9c](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/f90bb9cd369659160a16fcfc67bc08c248bd1552))
* added fallback option when restoring an agent docs: clarified experiment length ([f90bb9c](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/f90bb9cd369659160a16fcfc67bc08c248bd1552))
* allow to disable webhook invocation per request ([f90bb9c](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/f90bb9cd369659160a16fcfc67bc08c248bd1552))
* allow to disable webhook invocation per request ([3b1b674](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/3b1b674bbddbcb26fa607f9dc16db6c43752c371))
* supports SentimentAnalysisResult in webhook request, add http rules for long running operations docs: minor ([3b1b674](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/3b1b674bbddbcb26fa607f9dc16db6c43752c371))


### Bug Fixes

* RunTestCase http template. PHP REST client lib can be generated. feat: Support transition route group coverage for Test Cases. feat: Support SentimentAnalysisResult input in the WebhookRequest. ([3b1b674](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/3b1b674bbddbcb26fa607f9dc16db6c43752c371))

## [2.3.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.2.0...v2.3.0) (2021-03-01)


### Features

* Add new Experiment service docs: minor doc update on redact field in intent.proto and page.proto ([63933cd](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/63933cdbb447795d879de3826e651ebf85baf973))
* Add new Experiment service docs: minor doc update on redact field in intent.proto and page.proto ([63933cd](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/63933cdbb447795d879de3826e651ebf85baf973))
* added support for test cases and agent validation ([#53](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/53)) ([63933cd](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/63933cdbb447795d879de3826e651ebf85baf973))
* **docs:** promote to ga ([#63](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/63)) ([38acf82](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/38acf8247319392efebe865b1d1aafa2939e726e))
* supports SentimentAnalysisResult in webhook request docs: minor updates in wording ([#62](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/62)) ([1e167ab](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/1e167ab90b17b33ba5cd6e01787f764c01310f48))

## [2.2.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.1.0...v2.2.0) (2021-01-09)


### Features

* adds style enumeration ([#49](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/49)) ([6d65571](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/6d655718327044ea6e77bc8501c805b5cd3fc4e2))
* allowed custom to specify webhook headers through query parameters docs: suggested to always use version for production traffic when calling DetectIntent ([#44](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/44)) ([0ffd0b7](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/0ffd0b7a8a2f34c06062c9baf4f33b719b15ad9f))
* expose Security Settings API. ([#46](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/46)) ([f6460ce](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/f6460cea16473d1f208eae4bfa3def7cf5583579))

## [2.1.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v2.0.0...v2.1.0) (2020-11-25)


### Features

* add back v3beta1 API surface ([#39](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/39)) ([36ba8fa](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/36ba8fa857ae34a21ce0710986689667f909349f))

## [2.0.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v1.2.0...v2.0.0) (2020-11-19)


### ⚠ BREAKING CHANGES

* move to v3 API surface (#35)

### Features

* move to v3 API surface ([#35](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/35)) ([3653ac4](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/3653ac4feb0fa19f66a2c9b60ed49c953208ba93))

## [1.2.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v1.1.0...v1.2.0) (2020-11-17)


### Features

* adds event to MessageType ([999d156](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/999d15616da58c1c909f99ac093833a5eb8665bb))


### Bug Fixes

* do not modify options object, use defaultScopes ([#27](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/27)) ([a0124c7](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/a0124c774e59d0a2873445f6fa7697a192739ebf))

## [1.1.0](https://www.github.com/googleapis/nodejs-dialogflow-cx/compare/v1.0.0...v1.1.0) (2020-10-14)


### Features

* **samples:** examples of dialogflow-cx in action ([8b7b018](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/8b7b018b332d254351ce13e9b3b02a0b3e534b12))

## 1.0.0 (2020-08-25)


### ⚠ BREAKING CHANGES

* initial full generation of library (#1)

### Features

* initial full generation of library ([#1](https://www.github.com/googleapis/nodejs-dialogflow-cx/issues/1)) ([f7dbf85](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/f7dbf859aff8577ae14fb5ae001e5f7709da0ecf))
* initial library generation ([37c6b13](https://www.github.com/googleapis/nodejs-dialogflow-cx/commit/37c6b13460f8e94e45b3ef9fed2b9f88de0f8e47))
