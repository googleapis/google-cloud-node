# Changelog

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v3.0.0...orchestration-airflow-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.5.0...orchestration-airflow-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.5.0](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.4.0...orchestration-airflow-v2.5.0) (2023-06-14)


### Features

* [orchestration] added RPCs StopAirflowCommand, ExecuteAirflowCommand, PollAirflowCommand, DatabaseFailover, FetchDatabaseProperties ([33373fd](https://github.com/googleapis/google-cloud-node/commit/33373fd503fd476ed5d5a6ced1e48d86dc0459e1))
* [orchestration] added RPCs StopAirflowCommand, ExecuteAirflowCommand, PollAirflowCommand, DatabaseFailover, FetchDatabaseProperties ([#4341](https://github.com/googleapis/google-cloud-node/issues/4341)) ([33373fd](https://github.com/googleapis/google-cloud-node/commit/33373fd503fd476ed5d5a6ced1e48d86dc0459e1))

## [2.4.0](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.3.2...orchestration-airflow-v2.4.0) (2023-05-02)


### Features

* [orchestration] add airflow_byoid_uri field to Cloud Composer API ([#4210](https://github.com/googleapis/google-cloud-node/issues/4210)) ([dc2e138](https://github.com/googleapis/google-cloud-node/commit/dc2e138872f7fd7dab8c3e626452b15e20459bd4))

## [2.3.2](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.3.1...orchestration-airflow-v2.3.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.3.0...orchestration-airflow-v2.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.2.0...orchestration-airflow-v2.3.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/orchestration-airflow-v2.1.2...orchestration-airflow-v2.2.0) (2022-12-16)


### Features

* Added LoadSnapshot, SaveSnapshot RPCs ([#3692](https://github.com/googleapis/google-cloud-node/issues/3692)) ([c211c31](https://github.com/googleapis/google-cloud-node/commit/c211c3180be88d18d363d420a2d4354eebe5ef6a))

## [2.1.2](https://github.com/googleapis/nodejs-orchestration-airflow/compare/v2.1.1...v2.1.2) (2022-11-15)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#76](https://github.com/googleapis/nodejs-orchestration-airflow/issues/76)) ([5d9c78a](https://github.com/googleapis/nodejs-orchestration-airflow/commit/5d9c78a81d9ae07244f696ac7a9d211964fd62b2))
* Preserve default values in x-goog-request-params header ([#69](https://github.com/googleapis/nodejs-orchestration-airflow/issues/69)) ([cdef154](https://github.com/googleapis/nodejs-orchestration-airflow/commit/cdef154d8a51c446cdc16b61660f18e6123b8168))
* Regenerated protos JS and TS definitions ([#79](https://github.com/googleapis/nodejs-orchestration-airflow/issues/79)) ([b0ef563](https://github.com/googleapis/nodejs-orchestration-airflow/commit/b0ef56303b2e61a7a1a8fb505916682631e8beec))

## [2.1.1](https://github.com/googleapis/nodejs-orchestration-airflow/compare/v2.1.0...v2.1.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#68](https://github.com/googleapis/nodejs-orchestration-airflow/issues/68)) ([f757a98](https://github.com/googleapis/nodejs-orchestration-airflow/commit/f757a988851df8a5ebb47c77625a4a2ced3e5e02))
* Better support for fallback mode ([#63](https://github.com/googleapis/nodejs-orchestration-airflow/issues/63)) ([51899a8](https://github.com/googleapis/nodejs-orchestration-airflow/commit/51899a81a2556081ab6b6c7f3b2ab141e16a636a))
* Change import long to require ([#64](https://github.com/googleapis/nodejs-orchestration-airflow/issues/64)) ([b7a1b79](https://github.com/googleapis/nodejs-orchestration-airflow/commit/b7a1b794912552bd33fe7cd341eec6a48ce11676))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-orchestration-airflow/issues/1553)) ([#67](https://github.com/googleapis/nodejs-orchestration-airflow/issues/67)) ([b51775f](https://github.com/googleapis/nodejs-orchestration-airflow/commit/b51775fdbf36544855469c0b5773611826f4a197))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-orchestration-airflow/issues/1546)) ([#66](https://github.com/googleapis/nodejs-orchestration-airflow/issues/66)) ([a2c7e4c](https://github.com/googleapis/nodejs-orchestration-airflow/commit/a2c7e4c221aaed03b13d83e50ff4e94de56bd876))

## [2.1.0](https://github.com/googleapis/nodejs-orchestration-airflow/compare/v2.0.0...v2.1.0) (2022-06-30)


### Features

* support regapic LRO ([#51](https://github.com/googleapis/nodejs-orchestration-airflow/issues/51)) ([6061472](https://github.com/googleapis/nodejs-orchestration-airflow/commit/60614729ab1fbc7885d2b07baff89cb8e052d2fa))

## [2.0.0](https://github.com/googleapis/nodejs-orchestration-airflow/compare/v1.0.0...v2.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#46)

### Build System

* update library to use Node 12 ([#46](https://github.com/googleapis/nodejs-orchestration-airflow/issues/46)) ([8050138](https://github.com/googleapis/nodejs-orchestration-airflow/commit/8050138459f45ca557dee0a38ecc82962c4b8da2))

## 1.0.0 (2021-09-30)


### ⚠ BREAKING CHANGES

* initial release of orchestration-airflow (#2)

### Features

* initial files ([c858e85](https://www.github.com/googleapis/nodejs-orchestration-airflow/commit/c858e85019906ff6741aa1e3033c50050305798c))
* initial release of orchestration-airflow ([#2](https://www.github.com/googleapis/nodejs-orchestration-airflow/issues/2)) ([bd968d9](https://www.github.com/googleapis/nodejs-orchestration-airflow/commit/bd968d975db183f98c476bc208cae47d37593d54))
