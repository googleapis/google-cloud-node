# Changelog

## [0.18.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.17.0...chat-v0.18.0) (2025-08-04)


### Features

* [chat] Addition of app auth support for chat api ([#6545](https://github.com/googleapis/google-cloud-node/issues/6545)) ([f185fb1](https://github.com/googleapis/google-cloud-node/commit/f185fb1681c37ade2d8159af240b27a308ac05e3))

## [0.17.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.16.0...chat-v0.17.0) (2025-07-28)


### Features

* [chat] Exposing 1p integration message content (drive, calendar, huddle, meet chips) ([#6517](https://github.com/googleapis/google-cloud-node/issues/6517)) ([e29b9a3](https://github.com/googleapis/google-cloud-node/commit/e29b9a30ca4580fb6370c83cd99279f03f251479))

## [0.16.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.15.0...chat-v0.16.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6417](https://github.com/googleapis/google-cloud-node/issues/6417)) ([0d6d584](https://github.com/googleapis/google-cloud-node/commit/0d6d584a0c5c8f9f96daf3ede46f9440758e0f35))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [0.15.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.14.0...chat-v0.15.0) (2025-03-19)


### Features

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6182](https://github.com/googleapis/google-cloud-node/issues/6182)) ([c41ff07](https://github.com/googleapis/google-cloud-node/commit/c41ff0729b65a1207978b4029d6369cc0552e0bf))

## [0.14.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.13.0...chat-v0.14.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [chat] Addition of space notification setting Chat API ([#6120](https://github.com/googleapis/google-cloud-node/issues/6120)) ([062dff4](https://github.com/googleapis/google-cloud-node/commit/062dff45982bfe20c43a4f6298043576ab52b156))
* [Many APIs] add request/response debug logging to gapics, update templates to gax 5  ([54a73fe](https://github.com/googleapis/google-cloud-node/commit/54a73fe74eab0675c006f24d5f1e4574c44d829b))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.13.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.12.0...chat-v0.13.0) (2025-02-28)


### Features

* [chat] Add DeletionType.SPACE_MEMBER. This is returned when a message sent by an app is deleted by a human in a space ([#6030](https://github.com/googleapis/google-cloud-node/issues/6030)) ([550aafa](https://github.com/googleapis/google-cloud-node/commit/550aafa7c23eabaf2ecbe5c035294428290f7020))

## [0.12.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.11.0...chat-v0.12.0) (2025-01-29)


### Features

* [chat] A new field `custom_emoji_metadata` is added to message `.google.chat.v1.Annotation` ([#5988](https://github.com/googleapis/google-cloud-node/issues/5988)) ([8da9b83](https://github.com/googleapis/google-cloud-node/commit/8da9b835776d424f55b9d1c97eb8964224a50ac4))

## [0.11.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.10.0...chat-v0.11.0) (2024-12-18)


### Features

* [chat] Add missing field annotations in space.proto, message.proto, reaction.proto, space_event.proto, membership.proto, attachment.proto ([#5870](https://github.com/googleapis/google-cloud-node/issues/5870)) ([0730fb1](https://github.com/googleapis/google-cloud-node/commit/0730fb1e6bce2ddb6e0cd0c38424ca03cf740cb5))
* [chat] Chat Apps can now retrieve the import mode expire time information to know when to complete the import mode properly ([#5860](https://github.com/googleapis/google-cloud-node/issues/5860)) ([02b43ef](https://github.com/googleapis/google-cloud-node/commit/02b43ef30f6e45488dfea3bf7b4c15a5641b0755))

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.9.0...chat-v0.10.0) (2024-10-10)


### Features

* [chat] Add doc for permission settings & announcement space support ([#5731](https://github.com/googleapis/google-cloud-node/issues/5731)) ([d5a4a46](https://github.com/googleapis/google-cloud-node/commit/d5a4a469cfc03b75356e33e9659aa720ff6ee71d))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.8.0...chat-v0.9.0) (2024-09-13)


### Features

* [chat] If you're a domain administrator or a delegated administrator, you can now include the `useAdminAccess` parameter when you call the Chat API with your administrator privileges with the following methods to manage Chat spaces and membership... ([#5675](https://github.com/googleapis/google-cloud-node/issues/5675)) ([4f0945e](https://github.com/googleapis/google-cloud-node/commit/4f0945ef49b10c71039eafc00ac7e93dd6a3ddee))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.7.0...chat-v0.8.0) (2024-09-10)


### Features

* [chat] Add CHAT_SPACE link type support for GA launch ([#5659](https://github.com/googleapis/google-cloud-node/issues/5659)) ([b61a65d](https://github.com/googleapis/google-cloud-node/commit/b61a65d30dde04c2ff85d233ddbc1c79ff7a5736))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.6.0...chat-v0.7.0) (2024-07-22)


### Features

* [chat] add GetSpaceEvent and ListSpaceEvents APIs ([#5546](https://github.com/googleapis/google-cloud-node/issues/5546)) ([40e0811](https://github.com/googleapis/google-cloud-node/commit/40e0811598fbf2c92eee5875b2ab2c3e2be18064))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.5.0...chat-v0.6.0) (2024-07-10)


### Features

* [chat] Add doc for Discoverable Space support for GA launch ([#5525](https://github.com/googleapis/google-cloud-node/issues/5525)) ([9a80089](https://github.com/googleapis/google-cloud-node/commit/9a80089d974280420e269f24aba563f4adceb4c3))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.4.0...chat-v0.5.0) (2024-05-21)


### Features

* [chat] update Nodejs generator to send API versions in headers for GAPICs ([#5345](https://github.com/googleapis/google-cloud-node/issues/5345)) ([e99879b](https://github.com/googleapis/google-cloud-node/commit/e99879b86eef7eb62f828fe4c3061a2077d714cc))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.3.0...chat-v0.4.0) (2024-04-23)


### Features

* [chat] Add Chat read state APIs ([#5268](https://github.com/googleapis/google-cloud-node/issues/5268)) ([3b345ca](https://github.com/googleapis/google-cloud-node/commit/3b345ca4dc99ee0e41be86eea4d3c1e8d07ac924))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.2.0...chat-v0.3.0) (2024-04-18)


### Features

* [chat] add UpdateMembership API ([#5236](https://github.com/googleapis/google-cloud-node/issues/5236)) ([2a7934a](https://github.com/googleapis/google-cloud-node/commit/2a7934ab95ed017fd7ae84c96bc5dfcce501ab51))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/chat-v0.1.0...chat-v0.2.0) (2024-04-05)


### Features

* [chat] Launch AccessoryAction for GA ([#5197](https://github.com/googleapis/google-cloud-node/issues/5197)) ([a4e7673](https://github.com/googleapis/google-cloud-node/commit/a4e7673543b979083c46ddfe4938c4170594ec4a))

## 0.1.0 (2024-03-23)


### Features

* Add initial files for google.chat.v1 ([#5091](https://github.com/googleapis/google-cloud-node/issues/5091)) ([0aab044](https://github.com/googleapis/google-cloud-node/commit/0aab0441677cb4cc037c2adc08b10f3556e9f459))
