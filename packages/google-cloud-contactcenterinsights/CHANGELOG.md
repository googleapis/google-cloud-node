# Changelog

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
