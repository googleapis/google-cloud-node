# Changelog

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/accounts-v2.1.0...accounts-v2.2.0) (2025-06-03)


### Features

* [merchantapi] A new method_signature `parent,online_return_policy` is added to method `CreateOnlineReturnPolicy` in service `OnlineReturnPolicyService` ([#6367](https://github.com/googleapis/google-cloud-node/issues/6367)) ([6d7aab5](https://github.com/googleapis/google-cloud-node/commit/6d7aab56caabb08b8ff2ee68f599d6c63112622e))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/accounts-v2.0.0...accounts-v2.1.0) (2025-03-19)


### Features

* [merchantapi] Add AutomaticImprovements service ([#6153](https://github.com/googleapis/google-cloud-node/issues/6153)) ([cf56106](https://github.com/googleapis/google-cloud-node/commit/cf561061ead8557fe41b6458ddf2778ced92b36d))


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6190](https://github.com/googleapis/google-cloud-node/issues/6190)) ([f4866df](https://github.com/googleapis/google-cloud-node/commit/f4866dfa6ab481163150f54928a9857d2dfef948))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/accounts-v1.0.0...accounts-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))
* An existing optional field `type` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy
* An existing optional field `label` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy
* An existing optional field `countries` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy
* An existing optional field `return_policy_uri` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy

### Features

* [Many APIs] add request/response debug logging to gapics ([388b4e2](https://github.com/googleapis/google-cloud-node/commit/388b4e20329b7f6fc0dd061dddff573c45104213))
* [merchantapi] A new message `SeasonalOverride` is added ([#6114](https://github.com/googleapis/google-cloud-node/issues/6114)) ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))
* A new field `seasonal_overrides` is added to message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))


### Bug Fixes

* An existing optional field `countries` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))
* An existing optional field `label` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))
* An existing optional field `return_policy_uri` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))
* An existing optional field `type` is converted to required field in message .google.shopping.merchant.accounts.v1beta.OnlineReturnPolicy ([958b317](https://github.com/googleapis/google-cloud-node/commit/958b317b05196b76c9a62a03649eff5a77bb6a72))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/accounts-v0.1.0...accounts-v1.0.0) (2024-10-10)


### ⚠ BREAKING CHANGES

* [merchantapi] The type of an existing field `time_zone` is changed from `message` to `string` in message `.google.shopping.merchant.accounts.v1beta.ListAccountIssuesRequest` ([#5714](https://github.com/googleapis/google-cloud-node/issues/5714))

### Features

* [merchantapi] add 'force' parameter for accounts.delete method ([#5720](https://github.com/googleapis/google-cloud-node/issues/5720)) ([e3ff2cc](https://github.com/googleapis/google-cloud-node/commit/e3ff2cc87bbfd68621de91c43e7e90d1248c194d))


### Bug Fixes

* [merchantapi] The type of an existing field `time_zone` is changed from `message` to `string` in message `.google.shopping.merchant.accounts.v1beta.ListAccountIssuesRequest` ([#5714](https://github.com/googleapis/google-cloud-node/issues/5714)) ([8928489](https://github.com/googleapis/google-cloud-node/commit/8928489a31a942397429023dca61da026522856a))

## 0.1.0 (2024-07-22)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* Add initial files for google.shopping.merchant.accounts.v1beta ([#5514](https://github.com/googleapis/google-cloud-node/issues/5514)) ([6fe2f8b](https://github.com/googleapis/google-cloud-node/commit/6fe2f8b1efe577c289b25c70d7ecd8c91274f9ac))
