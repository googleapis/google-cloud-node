# Changelog

## [0.12.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.11.0...netapp-v0.12.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([#6301](https://github.com/googleapis/google-cloud-node/issues/6301)) ([42754a7](https://github.com/googleapis/google-cloud-node/commit/42754a72b34a01d201341428b4a358ff781b0612))

## [0.11.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.10.1...netapp-v0.11.0) (2025-05-09)


### Features

* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [0.10.1](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.10.0...netapp-v0.10.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.9.0...netapp-v0.10.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.8.0...netapp-v0.9.0) (2025-02-12)


### Features

* Add ipAddress field to MountOption ([5629df2](https://github.com/googleapis/google-cloud-node/commit/5629df231ec948804c4a9c80f43ad4f146e6dcdf))


### Bug Fixes

* [netapp] finalize fixing typings for headers in generator ([#6004](https://github.com/googleapis/google-cloud-node/issues/6004)) ([5629df2](https://github.com/googleapis/google-cloud-node/commit/5629df231ec948804c4a9c80f43ad4f146e6dcdf))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.7.0...netapp-v0.8.0) (2025-01-11)


### Features

* [netapp] Add ValidateDirectoryService API for testing AD connection of a storage pool ([#5931](https://github.com/googleapis/google-cloud-node/issues/5931)) ([f058d7a](https://github.com/googleapis/google-cloud-node/commit/f058d7a475402e52f8e8d5d4f838d9423f33ffb4))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.6.0...netapp-v0.7.0) (2024-12-18)


### Features

* [netapp] Enable creation of Onprem Migration in CreateVolume ([#5837](https://github.com/googleapis/google-cloud-node/issues/5837)) ([068e928](https://github.com/googleapis/google-cloud-node/commit/068e9283c3d6066575a59a0a78c9eee96a67a5c0))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.5.0...netapp-v0.6.0) (2024-09-24)


### Features

* **api:** [netapp] A new rpc 'SwitchActiveReplicaZone' is added to service 'google.cloud.netapp.v1.NetApp' ([#5681](https://github.com/googleapis/google-cloud-node/issues/5681)) ([40d5e35](https://github.com/googleapis/google-cloud-node/commit/40d5e35165672a557513e66505fa2c6c521b45e9))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.4.0...netapp-v0.5.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))
* [netapp] Add a new Service Level FLEX ([#5361](https://github.com/googleapis/google-cloud-node/issues/5361)) ([c37fd0c](https://github.com/googleapis/google-cloud-node/commit/c37fd0c23cdb722456068b1110b844ca760479c5))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.3.0...netapp-v0.4.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.2.1...netapp-v0.3.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5026](https://github.com/googleapis/google-cloud-node/issues/5026)) ([43acd89](https://github.com/googleapis/google-cloud-node/commit/43acd893e6c428f219d62f0c4264e4db78b99f99))

## [0.2.1](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.2.0...netapp-v0.2.1) (2024-01-23)


### Bug Fixes

* [Many APIs] improve retry logic for streaming API calls ([#4966](https://github.com/googleapis/google-cloud-node/issues/4966)) ([f42fe57](https://github.com/googleapis/google-cloud-node/commit/f42fe5790785ad2d45e7e317f7326719bf3f51bb))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/netapp-v0.1.0...netapp-v0.2.0) (2024-01-05)


### Features

* [netapp] Enable Backup, Backup Vault, and Backup Policy ([#4902](https://github.com/googleapis/google-cloud-node/issues/4902)) ([9acd314](https://github.com/googleapis/google-cloud-node/commit/9acd314c35e778b3fb54675dbacadd76f699eaf7))

## 0.1.0 (2023-09-08)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* Add initial files for google.cloud.netapp.v1 ([#4626](https://github.com/googleapis/google-cloud-node/issues/4626)) ([6e6e5c1](https://github.com/googleapis/google-cloud-node/commit/6e6e5c1e519e801c41a4b6febe2eeea82174c6d3))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))
