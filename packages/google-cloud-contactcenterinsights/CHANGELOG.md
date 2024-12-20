# Changelog

## [3.8.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.7.0...contact-center-insights-v3.8.0) (2024-12-18)


### Features

* [contactcenterinsights] A new resource pattern value `projects/{project}/locations/{location}/authorizedViewSets/{authorized_view_set}/authorizedViews/{authorized_view}/conversations/{conversation}` added to the resource definition `contactcenter... ([#5890](https://github.com/googleapis/google-cloud-node/issues/5890)) ([5564d05](https://github.com/googleapis/google-cloud-node/commit/5564d0548d8681e7647c46e4e33df4af4da4d6aa))

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.6.0...contact-center-insights-v3.7.0) (2024-11-21)


### Features

* [contactcenterinsights] Add FeedbackLabel resource and APIs ([#5817](https://github.com/googleapis/google-cloud-node/issues/5817)) ([d5acb00](https://github.com/googleapis/google-cloud-node/commit/d5acb00e881256ec5866d14556b9a013157288a6))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.5.0...contact-center-insights-v3.6.0) (2024-10-10)


### Features

* [contactcenterinsights] Add import / export IssueModel ([#5738](https://github.com/googleapis/google-cloud-node/issues/5738)) ([f3060f2](https://github.com/googleapis/google-cloud-node/commit/f3060f2fad34867307825e591ae49ad38c221371))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.4.0...contact-center-insights-v3.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.3.0...contact-center-insights-v3.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.2.0...contact-center-insights-v3.3.0) (2024-02-07)


### Features

* [contactcenterinsights] add Conversation QualityMetadata ([#4985](https://github.com/googleapis/google-cloud-node/issues/4985)) ([95a772b](https://github.com/googleapis/google-cloud-node/commit/95a772b601c50681144717a20042146e6d60a95c))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.1.0...contact-center-insights-v3.2.0) (2023-11-03)


### Features

* [contactcenterinsights] Launch BulkDelete API, and bulk audio import via the IngestConversations API ([#4789](https://github.com/googleapis/google-cloud-node/issues/4789)) ([e7129c6](https://github.com/googleapis/google-cloud-node/commit/e7129c613335a9495c11c5c3dd87986f21d84339))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.0.1...contact-center-insights-v3.1.0) (2023-10-18)


### Features

* [contactcenterinsights] add optional SpeechConfig to UploadConversationRequest ([#4695](https://github.com/googleapis/google-cloud-node/issues/4695)) ([44b3333](https://github.com/googleapis/google-cloud-node/commit/44b33333493ac4a458e84c1d3231f5571e63fd33))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v3.0.0...contact-center-insights-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4584](https://github.com/googleapis/google-cloud-node/issues/4584)) ([13537fc](https://github.com/googleapis/google-cloud-node/commit/13537fcd6e3c552199d5057daf3b00c24033c908))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.9.0...contact-center-insights-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))
* **deps:** Update dependency @google-cloud/bigquery to v7 ([#4478](https://github.com/googleapis/google-cloud-node/issues/4478)) ([49b51bd](https://github.com/googleapis/google-cloud-node/commit/49b51bdeef5c30a38ff37f68c3b3961353624a82))
* **deps:** Update dependency @google-cloud/pubsub to v4 ([#4490](https://github.com/googleapis/google-cloud-node/issues/4490)) ([9c47713](https://github.com/googleapis/google-cloud-node/commit/9c477133e3de3f5fdb7f4a57417a821770a5acb3))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.9.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.8.0...contact-center-insights-v2.9.0) (2023-07-11)


### Features

* [contactcenterinsights] Support topic model type V2 ([#4397](https://github.com/googleapis/google-cloud-node/issues/4397)) ([8af0377](https://github.com/googleapis/google-cloud-node/commit/8af03771ca5c239cf234ac4b9ee59f290eb5071c))

## [2.8.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.7.0...contact-center-insights-v2.8.0) (2023-06-06)


### Features

* [contactcenterinsights] Add the resource definition of a STT recognizer ([#4310](https://github.com/googleapis/google-cloud-node/issues/4310)) ([02f2346](https://github.com/googleapis/google-cloud-node/commit/02f2346643a61ebed9c25a60e6229a1996be727c))

## [2.7.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.6.0...contact-center-insights-v2.7.0) (2023-05-02)


### Features

* [contactcenterinsights] support for generating summaries during conversation analysis ([#4215](https://github.com/googleapis/google-cloud-node/issues/4215)) ([f12c277](https://github.com/googleapis/google-cloud-node/commit/f12c277d7f7566ead6128076c1c9ba81a856256a))

## [2.6.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.5.0...contact-center-insights-v2.6.0) (2023-04-13)


### Features

* [contactcenterinsights] Launch UploadConversation endpoint ([#4155](https://github.com/googleapis/google-cloud-node/issues/4155)) ([7e0c879](https://github.com/googleapis/google-cloud-node/commit/7e0c879b35e863135e381c78835244d3d5f9a9a7))


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.4.1...contact-center-insights-v2.5.0) (2023-03-06)


### Features

* [contactcenterinsights] add a way to specify the conversation automatic analysis percentage for the UploadConversation API when creating Analyses in Insights ([#4041](https://github.com/googleapis/google-cloud-node/issues/4041)) ([117ae72](https://github.com/googleapis/google-cloud-node/commit/117ae7293c8cf472e900d56c90225c49d6ca2dbc))

## [2.4.1](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.4.0...contact-center-insights-v2.4.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.3.0...contact-center-insights-v2.4.0) (2023-02-09)


### Features

* Add IngestConversationsStats ([#3941](https://github.com/googleapis/google-cloud-node/issues/3941)) ([7d98066](https://github.com/googleapis/google-cloud-node/commit/7d98066e5335f8e089a9f193a2ec907b99b3e042))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.2.0...contact-center-insights-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/contact-center-insights-v2.1.2...contact-center-insights-v2.2.0) (2022-12-16)


### Features

* Add Configurable Analysis, Bulk Upload, Bulk Analyze, Delete Issue Apis ([#3736](https://github.com/googleapis/google-cloud-node/issues/3736)) ([c7a240f](https://github.com/googleapis/google-cloud-node/commit/c7a240f1b0c8279d1ba255a0a84a568bb08f9a38))

## [2.1.2](https://github.com/googleapis/nodejs-contact-center-insights/compare/v2.1.1...v2.1.2) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#162](https://github.com/googleapis/nodejs-contact-center-insights/issues/162)) ([06d86b1](https://github.com/googleapis/nodejs-contact-center-insights/commit/06d86b138f000bcd5a3d0f909bff35c9d791420d))
* Preserve default values in x-goog-request-params header ([#143](https://github.com/googleapis/nodejs-contact-center-insights/issues/143)) ([2ad9483](https://github.com/googleapis/nodejs-contact-center-insights/commit/2ad948341bab9ad17955c2186d9f72a82d22bc98))
* Regenerated protos JS and TS definitions ([#165](https://github.com/googleapis/nodejs-contact-center-insights/issues/165)) ([7761efb](https://github.com/googleapis/nodejs-contact-center-insights/commit/7761efb115713545cb9f0a44983b207ca6ccedb0))

## [2.1.1](https://github.com/googleapis/nodejs-contact-center-insights/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#137](https://github.com/googleapis/nodejs-contact-center-insights/issues/137)) ([c8d6ba2](https://github.com/googleapis/nodejs-contact-center-insights/commit/c8d6ba2cc240282a36ef6290aa88d0386f6aca21))
* Change import long to require ([#138](https://github.com/googleapis/nodejs-contact-center-insights/issues/138)) ([79afe96](https://github.com/googleapis/nodejs-contact-center-insights/commit/79afe96953727b9443d677ec89458394c643eced))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-contact-center-insights/issues/1553)) ([#141](https://github.com/googleapis/nodejs-contact-center-insights/issues/141)) ([65dd78d](https://github.com/googleapis/nodejs-contact-center-insights/commit/65dd78d2c1b3e9cca5e241e20774f6764c487963))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-contact-center-insights/issues/1546)) ([#140](https://github.com/googleapis/nodejs-contact-center-insights/issues/140)) ([d0e4fd5](https://github.com/googleapis/nodejs-contact-center-insights/commit/d0e4fd5223896f029a1a5dd21fc71aab812a7122))

## [2.1.0](https://github.com/googleapis/nodejs-contact-center-insights/compare/v2.0.1...v2.1.0) (2022-07-05)


### Features

* add LRO to API list ([3676403](https://github.com/googleapis/nodejs-contact-center-insights/commit/36764038e82fdb7a383fa697c8764ee7ccb19853))

## [2.0.1](https://github.com/googleapis/nodejs-contact-center-insights/compare/v2.0.0...v2.0.1) (2022-06-07)


### Bug Fixes

* **deps:** update dependency @google-cloud/bigquery to v6 ([#127](https://github.com/googleapis/nodejs-contact-center-insights/issues/127)) ([9220f45](https://github.com/googleapis/nodejs-contact-center-insights/commit/9220f45cad762190ac63c2ae4470fc030d0e7f1b))
* **deps:** update dependency @google-cloud/pubsub to v3 ([#126](https://github.com/googleapis/nodejs-contact-center-insights/issues/126)) ([646b35d](https://github.com/googleapis/nodejs-contact-center-insights/commit/646b35d2bcbb730d5e9c57c43d805c48f86efd44))

## [2.0.0](https://github.com/googleapis/nodejs-contact-center-insights/compare/v1.11.0...v2.0.0) (2022-05-12)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#122)

### Build System

* update library to use Node 12 ([#122](https://github.com/googleapis/nodejs-contact-center-insights/issues/122)) ([e5e62df](https://github.com/googleapis/nodejs-contact-center-insights/commit/e5e62dfe5f3fe1cc7a5de02f8a997f84e496f4da))

## [1.11.0](https://github.com/googleapis/nodejs-contact-center-insights/compare/v1.10.0...v1.11.0) (2022-03-23)


### Features

* promote to stable ([#106](https://github.com/googleapis/nodejs-contact-center-insights/issues/106)) ([0c3b5f9](https://github.com/googleapis/nodejs-contact-center-insights/commit/0c3b5f9c1b0e94a2a6b06aef2b3b209293160773)), closes [#7](https://github.com/googleapis/nodejs-contact-center-insights/issues/7)

## [1.10.0](https://github.com/googleapis/nodejs-contact-center-insights/compare/v1.9.0...v1.10.0) (2022-01-20)


### Features

* new API for the View resource ([#89](https://github.com/googleapis/nodejs-contact-center-insights/issues/89)) ([8aa89e5](https://github.com/googleapis/nodejs-contact-center-insights/commit/8aa89e539651b0fc3ae573be3cdbe95f7c6bb8d3))

## [1.9.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.8.0...v1.9.0) (2021-12-03)


### Features

* Add WriteDisposition to BigQuery Export API ([#80](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/80)) ([3f19a63](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/3f19a63fc121ab3ba94661755f62a3f9ae855913))
* remove feature flag disable_issue_modeling ([#78](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/78)) ([594fc6d](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/594fc6d150cca28f8d4b2230a705b56cd65d156d))

## [1.8.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.7.0...v1.8.0) (2021-11-08)


### Features

* Add ability to update phrase matchers feat: Add issue model stats to time series feat: Add display name to issue model stats ([#74](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/74)) ([2b9db34](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/2b9db341f3d999762a5f7a79ff179854eb8fbd05))

## [1.7.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.6.0...v1.7.0) (2021-10-01)


### Features

* deprecate issue_matches docs: if conversation medium is unspecified, it will default to PHONE_CALL ([#68](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/68)) ([44c03e9](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/44c03e9540e6eaea24f0ad02a0479042e623ef53))

## [1.6.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.5.0...v1.6.0) (2021-09-28)


### Features

* add metadata from dialogflow related to transcript segment, sentiment data for transcript segment ([#64](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/64)) ([982dbab](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/982dbabf513655e59c52cc05c41f172f06495c1e))

## [1.5.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.4.0...v1.5.0) (2021-09-20)


### Features

* filter is used to filter conversations used for issue model training feat: update_time is used to indicate when the phrase matcher was updated ([#55](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/55)) ([08f13b4](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/08f13b4c54d18a6ea6f0f7192a75ef73583f26e8))

## [1.4.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.3.0...v1.4.0) (2021-08-27)


### Features

* display_name is the display name for the assigned issue ([#39](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/39)) ([69697c8](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/69697c87771b20feb648293ad2cef1a67dd96ce2))

## [1.3.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.2.1...v1.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#35](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/35)) ([3389497](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/3389497d25bf515b64b8df9e926ce9170c98f8a0))

### [1.2.1](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.2.0...v1.2.1) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#28](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/28)) ([137533f](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/137533f0f3ce60dc0cb9edc4c690063c853ade0b))
* **deps:** google-gax v2.24.1 ([#30](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/30)) ([e3ac1ff](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/e3ac1ff60bf3c4921ef9a9f103e236c7d513cdab))

## [1.2.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.1.0...v1.2.0) (2021-08-11)


### Features

* add new issue model API methods  ([b73f2e9](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/b73f2e93ddb572519685190643c1f02174813658))
* support Dialogflow and user-specified participant IDs ([b73f2e9](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/b73f2e93ddb572519685190643c1f02174813658))

## [1.1.0](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.0.2...v1.1.0) (2021-07-30)


### Features

* update CCAI Insights protos. change nesting of Conversation.Transcript.Participant to ConversationParticipant and remove AnnotationBoundary.time_offset ([#19](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/19)) ([7501a27](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/7501a276f8159fb7fdc21aad1a19d108fde61c8a))

### [1.0.2](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.0.1...v1.0.2) (2021-07-22)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator ([412f847](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/412f8476941e3e78c9e1bb3f1395ce7acfd3e2a8))

### [1.0.1](https://www.github.com/googleapis/nodejs-contact-center-insights/compare/v1.0.0...v1.0.1) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#11](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/11)) ([27ad1af](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/27ad1af2a8daed27b3f391003c64ad57239cbe52))

## 1.0.0 (2021-07-01)


### Features

* add initial samples ([#2](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/2)) ([5e1fb71](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/5e1fb71f5d062bae414791b9d314c8c73b09b290))
* initial generation of templated files ([17259ab](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/17259ab8f027237f58bfbbe989916898375e2001))
* initial stub of library ([d6b9355](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/d6b9355d0a070e06bda7d88e5887201380a5fb30))


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#6](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/6)) ([ad2fa0d](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/ad2fa0d1faab922e489c7c7cfc5efa1439609d60))

## 1.0.0 (2021-07-01)


### Features

* add initial samples ([#2](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/2)) ([5e1fb71](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/5e1fb71f5d062bae414791b9d314c8c73b09b290))
* initial generation of templated files ([17259ab](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/17259ab8f027237f58bfbbe989916898375e2001))
* initial stub of library ([d6b9355](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/d6b9355d0a070e06bda7d88e5887201380a5fb30))


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#6](https://www.github.com/googleapis/nodejs-contact-center-insights/issues/6)) ([ad2fa0d](https://www.github.com/googleapis/nodejs-contact-center-insights/commit/ad2fa0d1faab922e489c7c7cfc5efa1439609d60))
