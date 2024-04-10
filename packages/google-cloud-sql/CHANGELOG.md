# Changelog

## [0.10.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.9.0...sql-v0.10.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [0.9.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.8.0...sql-v0.9.0) (2024-03-26)


### Features

* [sql] support INSUFFICIENT_DISK_SIZE and INSUFFICIENT_MACHINE_TIER error types for external primary instance migration settings ([#5161](https://github.com/googleapis/google-cloud-node/issues/5161)) ([73bed7b](https://github.com/googleapis/google-cloud-node/commit/73bed7b530eadf710153938cdb76af007cb4fcbf))

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.7.0...sql-v0.8.0) (2024-03-07)


### Features

* [sql] A new value `PG_SUBSCRIPTION_COUNT` is added to enum `SqlExternalSyncSettingErrorType` ([#5115](https://github.com/googleapis/google-cloud-node/issues/5115)) ([33edf62](https://github.com/googleapis/google-cloud-node/commit/33edf6239bdcf34b28ed328ae12f3ba261301de6))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.6.0...sql-v0.7.0) (2024-02-22)


### Features

* [sql] A new field `threads` is added to message `.google.cloud.sql.v1beta4.ExportContext` ([#5048](https://github.com/googleapis/google-cloud-node/issues/5048)) ([ff8ef66](https://github.com/googleapis/google-cloud-node/commit/ff8ef66a10c3c78c941299eddb3ce79b09b91d14))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.5.0...sql-v0.6.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5027](https://github.com/googleapis/google-cloud-node/issues/5027)) ([88763bb](https://github.com/googleapis/google-cloud-node/commit/88763bb1b7ce9ff884b9e3f476230d38985b2ff2))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.4.0...sql-v0.5.0) (2024-01-15)


### Features

* [sql] added value `UNABLE_TO_VERIFY_DEFINERS` to enum `SqlExternalSyncSettingErrorType` ([#4933](https://github.com/googleapis/google-cloud-node/issues/4933)) ([bb3a357](https://github.com/googleapis/google-cloud-node/commit/bb3a35760b4aebc0218f81be6b79b9e0a22b1857))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.3.0...sql-v0.4.0) (2024-01-05)


### Features

* [sql] add `INCOMPATIBLE_DATABASE_MINOR_VERSION`, `SOURCE_MAX_SUBSCRIPTIONS` to `SqlExternalSyncSettingErrorType` enum ([#4867](https://github.com/googleapis/google-cloud-node/issues/4867)) ([1ddca2a](https://github.com/googleapis/google-cloud-node/commit/1ddca2aa9eda50767bfb82771bd4b067d175b19a))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.2.0...sql-v0.3.0) (2023-12-05)


### Features

* [sql] added Demote RPC ([#4844](https://github.com/googleapis/google-cloud-node/issues/4844)) ([bf17c1b](https://github.com/googleapis/google-cloud-node/commit/bf17c1b4cd2e8bf72d4933f5f55be40c463d7490))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/sql-v0.1.0...sql-v0.2.0) (2023-11-03)


### Features

* [sql] a new value `LOCAL_INFILE_OFF` is added to enum `SqlExternalSyncSettingErrorType` ([#4728](https://github.com/googleapis/google-cloud-node/issues/4728)) ([b71e06c](https://github.com/googleapis/google-cloud-node/commit/b71e06c8c53f7425a6fe5ac265d7d278e15b5499))

## 0.1.0 (2023-09-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Features

* Add initial files for google.cloud.sql.v1 ([#4465](https://github.com/googleapis/google-cloud-node/issues/4465)) ([afd40d5](https://github.com/googleapis/google-cloud-node/commit/afd40d572ffb0d19444c75133d623f4dd88865f7))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))
