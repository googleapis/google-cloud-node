# Changelog

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
