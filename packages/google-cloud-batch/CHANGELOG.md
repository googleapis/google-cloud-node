# Changelog

## [1.15.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.14.0...batch-v1.15.0) (2024-09-13)


### Features

* [batch] A new value `CANCELLATION_IN_PROGRESS` is added to enum `State` ([#5670](https://github.com/googleapis/google-cloud-node/issues/5670)) ([ce99894](https://github.com/googleapis/google-cloud-node/commit/ce998945ad320a493c5aef5bc7fdc7474777b21e))

## [1.14.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.13.0...batch-v1.14.0) (2024-09-10)


### Features

* **v1:** [batch] promote block_project_ssh_keys support to batch v1 API ([#5653](https://github.com/googleapis/google-cloud-node/issues/5653)) ([de5b8c0](https://github.com/googleapis/google-cloud-node/commit/de5b8c0911b0a4f6e1cd7dfc96602a2c22dee40f))

## [1.13.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.12.0...batch-v1.13.0) (2024-08-09)


### Features

* [batch] add block_project_ssh_keys field to the v1alpha job API to block project level ssh keys access to Batch created VMs ([#5604](https://github.com/googleapis/google-cloud-node/issues/5604)) ([238579a](https://github.com/googleapis/google-cloud-node/commit/238579a0a879085d12a6dafdee42fc80a733a269))

## [1.12.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.11.0...batch-v1.12.0) (2024-06-26)


### Features

* [batch] add a install_ops_agent field to InstancePolicyOrTemplate for Ops Agent support ([#5500](https://github.com/googleapis/google-cloud-node/issues/5500)) ([f42b77d](https://github.com/googleapis/google-cloud-node/commit/f42b77d76efc700ade152faf7e42b3abf3fb8f44))

## [1.11.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.10.0...batch-v1.11.0) (2024-06-05)


### Features

* [batch] add a install_ops_agent field to InstancePolicyOrTemplate for Ops Agent support ([#5426](https://github.com/googleapis/google-cloud-node/issues/5426)) ([6481ff4](https://github.com/googleapis/google-cloud-node/commit/6481ff45908281cbb91d9212918222bcbd1b2981))

## [1.10.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.9.0...batch-v1.10.0) (2024-05-21)


### Features

* [batch] update Nodejs generator to send API versions in headers for GAPICs ([#5336](https://github.com/googleapis/google-cloud-node/issues/5336)) ([d89a145](https://github.com/googleapis/google-cloud-node/commit/d89a1456582c1123dc788d064487802917be2564))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.9.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.8.0...batch-v1.9.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5022](https://github.com/googleapis/google-cloud-node/issues/5022)) ([b6498d8](https://github.com/googleapis/google-cloud-node/commit/b6498d8580d056817981dedbaa0ea5d82e9dccc2))

## [1.8.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.7.0...batch-v1.8.0) (2024-02-07)


### Features

* [batch] Add `run_as_non_root` field to allow user's runnable be executed as non root ([#4982](https://github.com/googleapis/google-cloud-node/issues/4982)) ([4527adf](https://github.com/googleapis/google-cloud-node/commit/4527adfad0856acc0fe27aec36bc16cb845ccc95))

## [1.7.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.6.0...batch-v1.7.0) (2024-01-15)


### Features

* [batch] Add `tags` field in Job's AllocationPolicy field in v1alpha ([#4934](https://github.com/googleapis/google-cloud-node/issues/4934)) ([7c5e95c](https://github.com/googleapis/google-cloud-node/commit/7c5e95ca0d44890b35416de97d7b2096eeb16178))

## [1.6.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.5.0...batch-v1.6.0) (2023-11-30)


### Features

* [batch] add a CloudLoggingOption and use_generic_task_monitored_resource fields for users to opt out new batch monitored resource in cloud logging ([#4839](https://github.com/googleapis/google-cloud-node/issues/4839)) ([6cc50d9](https://github.com/googleapis/google-cloud-node/commit/6cc50d9b6c1d897f26228ff3e89fcbcc149570c8))

## [1.5.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.4.0...batch-v1.5.0) (2023-11-16)


### Features

* [batch] add a CloudLoggingOption and use_generic_task_monitored_resource fields for users to opt out new batch monitored resource in cloud logging ([#4812](https://github.com/googleapis/google-cloud-node/issues/4812)) ([8ab0e5b](https://github.com/googleapis/google-cloud-node/commit/8ab0e5b463557c041415077d61700910579e8c6d))

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.3.0...batch-v1.4.0) (2023-10-24)


### Features

* [batch] expose display_name to batch v1 API ([#4742](https://github.com/googleapis/google-cloud-node/issues/4742)) ([d02570b](https://github.com/googleapis/google-cloud-node/commit/d02570b8c4d5c8b99e94f88ef05692b39e21d1d1))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.2.0...batch-v1.3.0) (2023-10-18)


### Features

* [batch] add InstancePolicy.reservation field for restricting jobs to a specific reservation ([#4727](https://github.com/googleapis/google-cloud-node/issues/4727)) ([58e44c9](https://github.com/googleapis/google-cloud-node/commit/58e44c936c28732023cae4e9af539f37587c9a64))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.1.0...batch-v1.2.0) (2023-09-06)


### Features

* [batch] Add more compute resource API descriptions to match with VM's machine type field ([#4564](https://github.com/googleapis/google-cloud-node/issues/4564)) ([dcd8ccf](https://github.com/googleapis/google-cloud-node/commit/dcd8ccf3ca2d19c23e086b7970200f92559aa639))
* [batch] add stderr_snippet to indicate the real stderr output by runnables to the execution field of status event ([#4570](https://github.com/googleapis/google-cloud-node/issues/4570)) ([fbae423](https://github.com/googleapis/google-cloud-node/commit/fbae42370b68b722949c0aaee6120b9348fe550e))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4583](https://github.com/googleapis/google-cloud-node/issues/4583)) ([c3ddba8](https://github.com/googleapis/google-cloud-node/commit/c3ddba8df9fee6185e36a4e99f7c67b0319f1242))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/batch-v1.0.0...batch-v1.1.0) (2023-08-09)


### Features

* [batch] Clarify Batch API proto doc about pubsub notifications ([#4503](https://github.com/googleapis/google-cloud-node/issues/4503)) ([ca2296c](https://github.com/googleapis/google-cloud-node/commit/ca2296c5d180e00f41baca3a03fa0f3f4592fbb3))
* [batch] Clarify Batch API proto doc about pubsub notifications ([#4518](https://github.com/googleapis/google-cloud-node/issues/4518)) ([e3fb6ad](https://github.com/googleapis/google-cloud-node/commit/e3fb6ad7595f85b0e2f06fedeabb18df4364b224))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.10.0...batch-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* [batch] Add comment to the unsupported order_by field of ListTasksRequest ([#4477](https://github.com/googleapis/google-cloud-node/issues/4477)) ([368606d](https://github.com/googleapis/google-cloud-node/commit/368606dac9ca2d45603ee424a19af8a55b465ad7))


### Bug Fixes

* [batch] fix typings for IAM methods ([#4445](https://github.com/googleapis/google-cloud-node/issues/4445)) ([9f9015b](https://github.com/googleapis/google-cloud-node/commit/9f9015bb42598435bb37cfb6181fff8a0e826f83))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.9.0...batch-v0.10.0) (2023-07-04)


### Features

* [batch] Add gpu driver version field ([#4391](https://github.com/googleapis/google-cloud-node/issues/4391)) ([ec08d08](https://github.com/googleapis/google-cloud-node/commit/ec08d08cd2d8c03b61d9e7a8e7879ecfcb83475f))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.8.0...batch-v0.9.0) (2023-06-14)


### Features

* [batch] implement minCpuPlatform ([d4d75c6](https://github.com/googleapis/google-cloud-node/commit/d4d75c629a19649256072d29766e2e692c771ee9))
* Update TaskGroup doc ([d4d75c6](https://github.com/googleapis/google-cloud-node/commit/d4d75c629a19649256072d29766e2e692c771ee9))
* **v1:** [batch] Add support for scheduling_policy ([#4340](https://github.com/googleapis/google-cloud-node/issues/4340)) ([d4d75c6](https://github.com/googleapis/google-cloud-node/commit/d4d75c629a19649256072d29766e2e692c771ee9))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.7.1...batch-v0.8.0) (2023-05-20)


### Features

* [batch] add support for placement policies ([#4182](https://github.com/googleapis/google-cloud-node/issues/4182)) ([9ece2b7](https://github.com/googleapis/google-cloud-node/commit/9ece2b7d96f3b18b32acfd5e24ba38f52f39dab9))

## [0.7.1](https://github.com/googleapis/google-cloud-node/compare/batch-v0.7.0...batch-v0.7.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.6.1...batch-v0.7.0) (2023-03-06)


### Features

* [batch] added StatusEvent.task_state ([#4042](https://github.com/googleapis/google-cloud-node/issues/4042)) ([a4c2343](https://github.com/googleapis/google-cloud-node/commit/a4c234315a2337c07f2556a6125f22bf7ddada2f))

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/batch-v0.6.0...batch-v0.6.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3985](https://github.com/googleapis/google-cloud-node/issues/3985)) ([fb2a6fd](https://github.com/googleapis/google-cloud-node/commit/fb2a6fdbd9dcf2ae91b3767629d71f0970d0712c))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.5.0...batch-v0.6.0) (2023-02-09)


### Features

* [batch] support custom scopes for service account in v1  ([#3950](https://github.com/googleapis/google-cloud-node/issues/3950)) ([f72de27](https://github.com/googleapis/google-cloud-node/commit/f72de2714e5bb69ecd792397dac6d2acc66277e8))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.4.0...batch-v0.5.0) (2023-01-28)


### Features

* Support secret and encrypted environment variables in v1 ([#3828](https://github.com/googleapis/google-cloud-node/issues/3828)) ([b233565](https://github.com/googleapis/google-cloud-node/commit/b2335658eb4a0c6ef3d771004fde73c53c7f2673))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.3.2...batch-v0.4.0) (2022-12-16)


### Features

* Add InstancePolicy.boot_disk ([61d2740](https://github.com/googleapis/google-cloud-node/commit/61d2740dbd8489c496a55f9ea53b3040b2713e0b))
* Add InstancePolicy.boot_disk ([#3752](https://github.com/googleapis/google-cloud-node/issues/3752)) ([61d2740](https://github.com/googleapis/google-cloud-node/commit/61d2740dbd8489c496a55f9ea53b3040b2713e0b))
* Adds named reservation to InstancePolicy  ([#3672](https://github.com/googleapis/google-cloud-node/issues/3672)) ([00975ce](https://github.com/googleapis/google-cloud-node/commit/00975ce0d77d16c037dcad39bcead39c39d61075))


### Bug Fixes

* Remove unsupported HTTP bindings for IAMPolicy RPCs ([61d2740](https://github.com/googleapis/google-cloud-node/commit/61d2740dbd8489c496a55f9ea53b3040b2713e0b))
* Removed unused endpoints for IAM methods ([61d2740](https://github.com/googleapis/google-cloud-node/commit/61d2740dbd8489c496a55f9ea53b3040b2713e0b))
* ServiceAccount.scopes is no longer deprecated ([61d2740](https://github.com/googleapis/google-cloud-node/commit/61d2740dbd8489c496a55f9ea53b3040b2713e0b))

## [0.3.2](https://github.com/googleapis/google-cloud-node/compare/batch-v0.3.1...batch-v0.3.2) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [0.3.1](https://github.com/googleapis/google-cloud-node/compare/batch-v0.3.0...batch-v0.3.1) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.2.0...batch-v0.3.0) (2022-10-19)


### Features

* Add initial files for google.cloud.discoveryengine.v1beta ([#3445](https://github.com/googleapis/google-cloud-node/issues/3445)) ([c220d49](https://github.com/googleapis/google-cloud-node/commit/c220d495cde64b1855b86df9550168e43e1c2f98))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/batch-v0.1.2...batch-v0.2.0) (2022-10-18)


### Features

* Enable install_gpu_drivers flag in v1 proto ([37c3db1](https://github.com/googleapis/google-cloud-node/commit/37c3db12dea1c18ba1d3d40f346cf7460fe9b3cb))

## [0.1.2](https://github.com/googleapis/google-cloud-node/compare/batch-v0.1.1...batch-v0.1.2) (2022-09-28)


### Bug Fixes

* preserve default values in x-goog-request-params header ([#3353](https://github.com/googleapis/google-cloud-node/issues/3353)) ([da99ad5](https://github.com/googleapis/google-cloud-node/commit/da99ad57f592a504750d57fdb1c7423734fec069))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/batch-v0.1.0...batch-v0.1.1) (2022-09-09)


### Bug Fixes

* mark service_account_email as deprecated ([#3325](https://github.com/googleapis/google-cloud-node/issues/3325)) ([4afad9b](https://github.com/googleapis/google-cloud-node/commit/4afad9b52ac6762287c157c576e75165f4a5fb25))

## 0.1.0 (2022-08-29)


### Features

* accept google-gax instance as a parameter ([#3306](https://github.com/googleapis/google-cloud-node/issues/3306)) ([de0e5c1](https://github.com/googleapis/google-cloud-node/commit/de0e5c1172c84a650c6e8fd268b2614f60d1b0ad))
* add initial files for google.cloud.batch.v1 ([d662bff](https://github.com/googleapis/google-cloud-node/commit/d662bff9578eb25e6e7bc591c124376725159daa))
