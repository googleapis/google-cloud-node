# Changelog

## [1.5.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.4.0...v1.5.0) (2020-03-09)


### Features

* cloudbuild/v1 add new fields and annotate OUTPUT_OUT fields. ([#79](https://www.github.com/googleapis/nodejs-cloudbuild/issues/79)) ([0889fff](https://www.github.com/googleapis/nodejs-cloudbuild/commit/0889fff058e83dd421d4ad798c0f5318d74f22ff))
* deferred client initialization ([#75](https://www.github.com/googleapis/nodejs-cloudbuild/issues/75)) ([47b177d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/47b177dfed997bf4fafcf2810ddae9c5c7815112))
* export protos in src/index.ts ([c8e28b3](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8e28b3f39fa25e09ebaf19292a46b9078738498))

## [1.4.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.3...v1.4.0) (2020-02-13)


### Features

* bump release level to GA ([#62](https://www.github.com/googleapis/nodejs-cloudbuild/issues/62)) ([114756d](https://www.github.com/googleapis/nodejs-cloudbuild/commit/114756d12007d1978fc3e4bb71b72e543bcc6945))

### [1.3.3](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.2...v1.3.3) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([365842b](https://www.github.com/googleapis/nodejs-cloudbuild/commit/365842beb7e0ceee9f5861d4172f5de076335902))

### [1.3.2](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.1...v1.3.2) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([64538fe](https://www.github.com/googleapis/nodejs-cloudbuild/commit/64538fe21aae6430f8f3e1ec6604b286bd890535))

### [1.3.1](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.3.0...v1.3.1) (2020-01-06)


### Bug Fixes

* increase timeout from 20s to 60s ([#35](https://www.github.com/googleapis/nodejs-cloudbuild/issues/35)) ([b9d7f10](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b9d7f1089bd3dc0f3d53f54015b12bd2bf036c62))
* wait for client before checking for terminate ([35c1905](https://www.github.com/googleapis/nodejs-cloudbuild/commit/35c19050bd7594301df14ffa182fc6e6e73c1d64))

## [1.3.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.2.0...v1.3.0) (2019-12-11)


### Features

* make operationsClient and service stub public ([2fa96df](https://www.github.com/googleapis/nodejs-cloudbuild/commit/2fa96dfe9145f479a2561b5a1215a6ffd19ddf07))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.1.0...v1.2.0) (2019-12-05)


### Features

* add default exports ([#22](https://www.github.com/googleapis/nodejs-cloudbuild/issues/22)) ([870bfd6](https://www.github.com/googleapis/nodejs-cloudbuild/commit/870bfd649e99f0332b04b51eddfce27ab5078cf5))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([c8d7267](https://www.github.com/googleapis/nodejs-cloudbuild/commit/c8d72671a810750d13d327e78b0eafbd0aeac46f))
* **docs:** snippets are now replaced in jsdoc comments ([#21](https://www.github.com/googleapis/nodejs-cloudbuild/issues/21)) ([b6bf159](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b6bf159e7d3799121b58fe8b290181c16b6aa894))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloudbuild/compare/v1.0.0...v1.1.0) (2019-11-11)


### Features

* adds listBuildTriggersStream method ([59dad8a](https://www.github.com/googleapis/nodejs-cloudbuild/commit/59dad8afb351527cd7fd3348921ce30e4cd1956b))

## 1.0.0 (2019-10-31)


### Features

* initial release of cloud build library ([#2](https://www.github.com/googleapis/nodejs-cloudbuild/issues/2)) ([b3dbed2](https://www.github.com/googleapis/nodejs-cloudbuild/commit/b3dbed28a63e88f09bcaf7bfa2984582ef058fb6))
* **docs:** add listBuildTriggers sample to README ([#5](https://www.github.com/googleapis/nodejs-cloudbuild/issues/5)) ([adcdb63](https://www.github.com/googleapis/nodejs-cloudbuild/commit/adcdb632244ddf18c1b57a1b0bdef1dcef3ae14b))
* moves library to TypeScript code generation ([#10](https://www.github.com/googleapis/nodejs-cloudbuild/issues/10)) ([871fa08](https://www.github.com/googleapis/nodejs-cloudbuild/commit/871fa0814d9483fdfa0081fad409c535ce25cac1))
