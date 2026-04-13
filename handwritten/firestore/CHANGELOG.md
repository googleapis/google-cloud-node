# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/firestore?activeTab=versions

## [8.3.0](https://github.com/googleapis/nodejs-firestore/compare/v8.2.0...v8.3.0) (2026-02-02)


### Features

* Add support for `regexFind` and `regexFindAll` ([#2474](https://github.com/googleapis/nodejs-firestore/issues/2474)) ([52800a2](https://github.com/googleapis/nodejs-firestore/commit/52800a2c6af9079277eba19f776880c85ae52380))

## [8.2.0](https://github.com/googleapis/nodejs-firestore/compare/v8.1.0...v8.2.0) (2026-01-09)


### Features

* Pipelines preview ([#2450](https://github.com/googleapis/nodejs-firestore/issues/2450)) ([c80e618](https://github.com/googleapis/nodejs-firestore/commit/c80e6181709b72c943a445eb0a5a2fa63d2776dd))

## [8.1.0](https://github.com/googleapis/nodejs-firestore/compare/v8.0.0...v8.1.0) (2025-12-22)


### Features

* [GAPIC] add Firestore CloneDatabase support ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] add methods from gax to cache proto root and process custom error details ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] add protobufjs 2023 edition support ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] add request/response debug logging to gapics, update templates to gax 5 and node 18 ([#1671](https://github.com/googleapis/nodejs-firestore/issues/1671)) ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] add the UserCreds API ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] await/catch promises, and update listOperationsAsync return type ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] Expose tags field in Database and RestoreDatabaseRequest public protos ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] new Firestore index modes and Database Editions ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] publish the pipelines API to the stable branch ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] selective gapic support for typescript generation ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* Adding gcp resource name span attribute ([#2454](https://github.com/googleapis/nodejs-firestore/issues/2454)) ([bc0c73d](https://github.com/googleapis/nodejs-firestore/commit/bc0c73db1fc840bf34115ffab20d7b48eb0a76e5))


### Bug Fixes

* [GAPIC] add json files to tsconfig templates ([#1692](https://github.com/googleapis/nodejs-firestore/issues/1692)) (ba6be1d) ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] catch dangling promises ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))
* [GAPIC] distinguish plural and singular path templates ([a0c74b7](https://github.com/googleapis/nodejs-firestore/commit/a0c74b78a0a5896004126ba827a02f4c8d374fd0))

## [8.0.0](https://github.com/googleapis/nodejs-firestore/compare/v7.11.6...v8.0.0) (2025-10-29)


### ⚠ BREAKING CHANGES

* Update WithFieldData and PartialWithFieldData to ignore methods on types ([#2294](https://github.com/googleapis/nodejs-firestore/issues/2294))
* migrate to Node 18 ([#2399](https://github.com/googleapis/nodejs-firestore/issues/2399))

### Features

* Support for index signatures in UpdateData&lt;T&gt; ([#1953](https://github.com/googleapis/nodejs-firestore/issues/1953)) ([afa206d](https://github.com/googleapis/nodejs-firestore/commit/afa206d17ce2d0905ce02e723c2c92bea368ba3a))


### Bug Fixes

* Update WithFieldData and PartialWithFieldData to ignore methods on types ([#2294](https://github.com/googleapis/nodejs-firestore/issues/2294)) ([481430f](https://github.com/googleapis/nodejs-firestore/commit/481430ffc12bdaf3e3a92aa89a2ce389756ce9da))


### Miscellaneous Chores

* Migrate to Node 18 ([#2399](https://github.com/googleapis/nodejs-firestore/issues/2399)) ([e5c3118](https://github.com/googleapis/nodejs-firestore/commit/e5c31184325b84ef8dcb456ec0a7a4807038c838))

## [7.11.6](https://github.com/googleapis/nodejs-firestore/compare/v7.11.5...v7.11.6) (2025-09-26)


### Bug Fixes

* Pool.ts: add even more logging ([c508d1b](https://github.com/googleapis/nodejs-firestore/commit/c508d1bd653f5d2b9bbe78236fac15e999c27e69))

## [7.11.5](https://github.com/googleapis/nodejs-firestore/compare/v7.11.4...v7.11.5) (2025-09-22)


### Bug Fixes

* Pool.ts: add more detailed logging for client garbage collection ([#2420](https://github.com/googleapis/nodejs-firestore/issues/2420)) ([1bbca46](https://github.com/googleapis/nodejs-firestore/commit/1bbca46ff2a6ea98b52a83ff7dae6092e69b044d))

## [7.11.4](https://github.com/googleapis/nodejs-firestore/compare/v7.11.3...v7.11.4) (2025-09-16)


### Bug Fixes

* Improve debug logging for the internal client pool. Added client IDs to debug log statements for client management. ([99918f1](https://github.com/googleapis/nodejs-firestore/commit/99918f1794adee706c4f2685cd3f8aea6dff895e))

## [7.11.3](https://github.com/googleapis/nodejs-firestore/compare/v7.11.2...v7.11.3) (2025-07-09)


### Bug Fixes

* Improve performance of the UTF-8 string comparison logic ([#2380](https://github.com/googleapis/nodejs-firestore/issues/2380)) ([bc6a03e](https://github.com/googleapis/nodejs-firestore/commit/bc6a03e2b44e740b32676d7d0bec07feaa509b5b))

## [7.11.2](https://github.com/googleapis/nodejs-firestore/compare/v7.11.1...v7.11.2) (2025-06-19)


### Bug Fixes

* Firestore Client caching stub in bad state issue ([#2365](https://github.com/googleapis/nodejs-firestore/issues/2365)) ([04ad0a4](https://github.com/googleapis/nodejs-firestore/commit/04ad0a4c0fb370db8aeae87dc6ab8bd06eafedd4))

## [7.11.1](https://github.com/googleapis/nodejs-firestore/compare/v7.11.0...v7.11.1) (2025-05-02)


### Bug Fixes

* Aggregate query readtime bug ([#2331](https://github.com/googleapis/nodejs-firestore/issues/2331)) ([9ac0394](https://github.com/googleapis/nodejs-firestore/commit/9ac0394df78619bf1d6b7907a364342796a4f0fb))
* Bump default deadline on CreateDatabase and RestoreDatabase to 2 minutes ([#2274](https://github.com/googleapis/nodejs-firestore/issues/2274)) ([d559080](https://github.com/googleapis/nodejs-firestore/commit/d559080a0f436927108ec69c2910af4e8246a8b0))
* Close default BulkWriter upon terminate. ([#2276](https://github.com/googleapis/nodejs-firestore/issues/2276)) ([1e714a8](https://github.com/googleapis/nodejs-firestore/commit/1e714a8b7952b65872e65533cfe74d303dfabe20))
* Correctly escape field paths with multiple backslashes or backticks ([#2259](https://github.com/googleapis/nodejs-firestore/issues/2259)) ([#2261](https://github.com/googleapis/nodejs-firestore/issues/2261)) ([7056ba7](https://github.com/googleapis/nodejs-firestore/commit/7056ba76040b9369d86c57838ef938c9d9ef73d8))
* Do not send page size with auto-paginate. Fixes warnings in listCollections and listDocuments. ([#2336](https://github.com/googleapis/nodejs-firestore/issues/2336)) ([844b4ca](https://github.com/googleapis/nodejs-firestore/commit/844b4ca9c209e649565d122940858409d808baa6))
* Finalize fixing typings for headers in generator ([#2287](https://github.com/googleapis/nodejs-firestore/issues/2287)) ([c6c85b6](https://github.com/googleapis/nodejs-firestore/commit/c6c85b66a25b56bd23c19285302a740b0ca85d25))
* Prevent crashes if an inactive stream receives an error. ([#2283](https://github.com/googleapis/nodejs-firestore/issues/2283)) ([f58fe79](https://github.com/googleapis/nodejs-firestore/commit/f58fe791c7afc59087e2555f7208cdb611470d80))
* Remove unused "long" dependency from firestore proto ([#2324](https://github.com/googleapis/nodejs-firestore/issues/2324)) ([5937b93](https://github.com/googleapis/nodejs-firestore/commit/5937b93aa1aacd2f63bf1678ec569c504cf0b186))
* Sort document reference by long type id  ([#2257](https://github.com/googleapis/nodejs-firestore/issues/2257)) ([3fd0de9](https://github.com/googleapis/nodejs-firestore/commit/3fd0de93076adfe17aaae9e0a9b732bcae52d594))
* Sort strings in UTF-8 encoded byte order ([#2275](https://github.com/googleapis/nodejs-firestore/issues/2275)) ([a2950e0](https://github.com/googleapis/nodejs-firestore/commit/a2950e0b6464012f0e6c5703d0d28c2175cd35a2))
* Use lazy encoding for utf-8 encoded string comparison ([#2299](https://github.com/googleapis/nodejs-firestore/issues/2299)) ([e8777e1](https://github.com/googleapis/nodejs-firestore/commit/e8777e12db41096c3945afd3be7905c1c029493c))

## [7.11.0](https://github.com/googleapis/nodejs-firestore/compare/v7.10.0...v7.11.0) (2024-12-05)


### Features

* [proto] add Database.CmekConfig and Database.cmek_config (information about CMEK enablement) ([2779896](https://github.com/googleapis/nodejs-firestore/commit/27798966c5d72616fc0cee109e1d28f693c9f5f1))
* [proto] add Database.delete_time (the time a database was deleted, if it ever was) ([2779896](https://github.com/googleapis/nodejs-firestore/commit/27798966c5d72616fc0cee109e1d28f693c9f5f1))
* [proto] add Database.previous_id (if a database was deleted, what ID it was using beforehand) ([2779896](https://github.com/googleapis/nodejs-firestore/commit/27798966c5d72616fc0cee109e1d28f693c9f5f1))
* [proto] add Database.SourceInfo and Database.source_info (information about database provenance, specifically for restored databases) ([2779896](https://github.com/googleapis/nodejs-firestore/commit/27798966c5d72616fc0cee109e1d28f693c9f5f1))
* [proto] allow specifying an encryption_config when restoring a database ([2779896](https://github.com/googleapis/nodejs-firestore/commit/27798966c5d72616fc0cee109e1d28f693c9f5f1))
* Enable tracing via OpenTelemetry. ([#2218](https://github.com/googleapis/nodejs-firestore/issues/2218)) ([1ddb62e](https://github.com/googleapis/nodejs-firestore/commit/1ddb62ed67e93ca2c265556bb5e504d207a639a8))
* Support `fire-admin` tag for Admin Node SDK ([#2238](https://github.com/googleapis/nodejs-firestore/issues/2238)) ([#2252](https://github.com/googleapis/nodejs-firestore/issues/2252)) ([1339dc2](https://github.com/googleapis/nodejs-firestore/commit/1339dc20e3ffc065f5f79a82baaa67deda76fb36))


### Bug Fixes

* Use correct limit when retrying a limit query stream with a cursor ([#2203](https://github.com/googleapis/nodejs-firestore/issues/2203)) ([ab94092](https://github.com/googleapis/nodejs-firestore/commit/ab94092c2375501dd2998a458fc8a449793c9e69))

## [7.10.0](https://github.com/googleapis/nodejs-firestore/compare/v7.9.0...v7.10.0) (2024-09-05)


### Features

* Expose proto changes for the bulk delete api ([23ce891](https://github.com/googleapis/nodejs-firestore/commit/23ce89175ce315648ce9af3994cba0decc48ba47))
* Expose the proto changes to support FindNearest.distance_result_field parameter and the FindNearest.distance_threshold parameter ([23ce891](https://github.com/googleapis/nodejs-firestore/commit/23ce89175ce315648ce9af3994cba0decc48ba47))
* Return computed distance and set distance thresholds on VectorQueries ([#2090](https://github.com/googleapis/nodejs-firestore/issues/2090)) ([b5ca84f](https://github.com/googleapis/nodejs-firestore/commit/b5ca84f076ca0668e90ca3fc7dd878f732ccd956))

## [7.9.0](https://github.com/googleapis/nodejs-firestore/compare/v7.8.0...v7.9.0) (2024-06-25)


### Features

* Update FirebaseFirestore.v1 and FirebaseFirestore.v1beta1 auto-gen types ([6732d4d](https://github.com/googleapis/nodejs-firestore/commit/6732d4da3c5ea851dccb0515757fbfb521f21410))

## [7.8.0](https://github.com/googleapis/nodejs-firestore/compare/v7.7.0...v7.8.0) (2024-05-28)


### Features

* Query profiling for VectorQuery ([d406f14](https://github.com/googleapis/nodejs-firestore/commit/d406f14612a4890e405913aadc75c7ee22993f2b))
* Update Nodejs generator to send API versions in headers for GAPICs ([#2041](https://github.com/googleapis/nodejs-firestore/issues/2041)) ([6dbe4b0](https://github.com/googleapis/nodejs-firestore/commit/6dbe4b0baac261f03f9032765b375938ce5e46d7))

## [7.7.0](https://github.com/googleapis/nodejs-firestore/compare/v7.6.0...v7.7.0) (2024-05-07)


### Features

* Add several fields to manage state of database encryption update ([5811492](https://github.com/googleapis/nodejs-firestore/commit/5811492357c7b66324839c02bcbf45a5b6d6d7e7))
* Lazy-started transactions ([#2017](https://github.com/googleapis/nodejs-firestore/issues/2017)) ([2c726a1](https://github.com/googleapis/nodejs-firestore/commit/2c726a176407c45f519846052469e1bbbbc24750))


### Bug Fixes

* Nonblocking rollback ([#2039](https://github.com/googleapis/nodejs-firestore/issues/2039)) ([52099c8](https://github.com/googleapis/nodejs-firestore/commit/52099c8eb8ce8aba0ab5aee9f3dd4c4a59c2afd4))
* Upgrade the `google-gax` dependency version. ([#2040](https://github.com/googleapis/nodejs-firestore/issues/2040)) ([0b9efa6](https://github.com/googleapis/nodejs-firestore/commit/0b9efa6d5a3d46ad2f084aef58c529e710c7f596))

## [7.6.0](https://github.com/googleapis/nodejs-firestore/compare/v7.5.0...v7.6.0) (2024-04-02)


### Features

* Vector Search ([#2006](https://github.com/googleapis/nodejs-firestore/issues/2006)) ([e906b42](https://github.com/googleapis/nodejs-firestore/commit/e906b4260da11fe5a1c34ae5f68d9f5717a99dab))

## [7.5.0](https://github.com/googleapis/nodejs-firestore/compare/v7.4.0...v7.5.0) (2024-03-25)


### Features

* Protos and autogen client for vector ([#2027](https://github.com/googleapis/nodejs-firestore/issues/2027)) ([c65cef0](https://github.com/googleapis/nodejs-firestore/commit/c65cef04332e20be82129d0c49396485be683585))
* Query Profile ([#2014](https://github.com/googleapis/nodejs-firestore/issues/2014)) ([9a45ec8](https://github.com/googleapis/nodejs-firestore/commit/9a45ec89fb3a8d9814bc186d7d494f5859946ffa))

## [7.4.0](https://github.com/googleapis/nodejs-firestore/compare/v7.3.1...v7.4.0) (2024-03-15)


### Features

* A new message `Backup` is added ([#2021](https://github.com/googleapis/nodejs-firestore/issues/2021)) ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `BackupSchedule` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `CreateBackupScheduleRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `DailyRecurrence` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `DeleteBackupRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `DeleteBackupScheduleRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `GetBackupRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `GetBackupScheduleRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `ListBackupSchedulesRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `ListBackupSchedulesResponse` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `ListBackupsRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `ListBackupsResponse` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `RestoreDatabaseMetadata` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `RestoreDatabaseRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `UpdateBackupScheduleRequest` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new message `WeeklyRecurrence` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `CreateBackupSchedule` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `DeleteBackup` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `DeleteBackupSchedule` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `GetBackup` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `GetBackupSchedule` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `ListBackups` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `ListBackupSchedules` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `RestoreDatabase` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new method `UpdateBackupSchedule` is added to service `FirestoreAdmin` ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new resource_definition `firestore.googleapis.com/Backup` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* A new resource_definition `firestore.googleapis.com/BackupSchedule` is added ([6bced86](https://github.com/googleapis/nodejs-firestore/commit/6bced86eabd143947e94e83872f20d7ed9d964dc))
* Add new types ExplainOptions, ExplainMetrics, PlanSummary, ExecutionStats ([#2013](https://github.com/googleapis/nodejs-firestore/issues/2013)) ([e598b9d](https://github.com/googleapis/nodejs-firestore/commit/e598b9daf628cbc54dc10dab80bb0f46e2a3e2a2))


### Bug Fixes

* ReadOnly transaction do not need to commit not rollback. ([#2007](https://github.com/googleapis/nodejs-firestore/issues/2007)) ([6a220a6](https://github.com/googleapis/nodejs-firestore/commit/6a220a6f6563903673066576f09ecf405c53f87b))
* Update service definitions ([#2016](https://github.com/googleapis/nodejs-firestore/issues/2016)) ([ea4b6d0](https://github.com/googleapis/nodejs-firestore/commit/ea4b6d05383751f9a089958a20c1dd56419bc66d))

## [7.3.1](https://github.com/googleapis/nodejs-firestore/compare/v7.3.0...v7.3.1) (2024-03-04)


### Bug Fixes

* Add client library version to headers ([#2003](https://github.com/googleapis/nodejs-firestore/issues/2003)) ([8799032](https://github.com/googleapis/nodejs-firestore/commit/8799032d8cc39adc774fe21b7eb70f96a3a18fda))
* Add missing type for exposed database id ([#1996](https://github.com/googleapis/nodejs-firestore/issues/1996)) ([e967279](https://github.com/googleapis/nodejs-firestore/commit/e967279cfe532ae3375ae9dcb94f4a65af5ffb42))
* Optimize Transaction PITR ([#2002](https://github.com/googleapis/nodejs-firestore/issues/2002)) ([2f08612](https://github.com/googleapis/nodejs-firestore/commit/2f0861296151f7b0094501e4a9ff6fc4154d52a4))
* Revert changes to streaming retries ([d964a13](https://github.com/googleapis/nodejs-firestore/commit/d964a13818e6bc4be6547e88ffbe16be1a6ceeeb))

## [7.3.0](https://github.com/googleapis/nodejs-firestore/compare/v7.2.0...v7.3.0) (2024-01-31)


### Features

* Expose the undeliverable_first_gen_event.proto ([b4f7d60](https://github.com/googleapis/nodejs-firestore/commit/b4f7d6015b50f1da6afeae0b4215be416596cc69))


### Bug Fixes

* Allow an explicit MustExist precondition for update ([#1985](https://github.com/googleapis/nodejs-firestore/issues/1985)) ([99d60a6](https://github.com/googleapis/nodejs-firestore/commit/99d60a6f87b70c942ac2bd9464cc6d64323f9dfb))
* Fix redaction of credentials in Firestore settings ([#1989](https://github.com/googleapis/nodejs-firestore/issues/1989)) ([98e668b](https://github.com/googleapis/nodejs-firestore/commit/98e668bb9ce7feb090f65fc61d92af433bc23094))
* Improve retry logic for streaming API calls ([b4f7d60](https://github.com/googleapis/nodejs-firestore/commit/b4f7d6015b50f1da6afeae0b4215be416596cc69))
* Removed unsupported QueryMode, QueryPlan, and ResultSetStats protos ([b4f7d60](https://github.com/googleapis/nodejs-firestore/commit/b4f7d6015b50f1da6afeae0b4215be416596cc69))

## [7.2.0](https://github.com/googleapis/nodejs-firestore/compare/v7.1.1...v7.2.0) (2024-01-16)


### Features

* Add new types QueryMode, QueryPlan, ResultSetStats ([#1911](https://github.com/googleapis/nodejs-firestore/issues/1911)) ([8f77b68](https://github.com/googleapis/nodejs-firestore/commit/8f77b68bf70b04a66e982067aa246de0596e4ea2))
* Expose databaseId and projectId getter on Firestore class ([#1937](https://github.com/googleapis/nodejs-firestore/issues/1937)) ([d9c867f](https://github.com/googleapis/nodejs-firestore/commit/d9c867fc5048748e5af378fd8465303224668781)), closes [#1936](https://github.com/googleapis/nodejs-firestore/issues/1936)


### Bug Fixes

* Make transaction rollback best effort. ([#1967](https://github.com/googleapis/nodejs-firestore/issues/1967)) ([1d76546](https://github.com/googleapis/nodejs-firestore/commit/1d76546a781527ef5b9085fc9f189c024355ae9f))

## [7.1.1](https://github.com/googleapis/nodejs-firestore/compare/v7.1.0...v7.1.1) (2023-11-20)


### Bug Fixes

* Remove temporary header encoding workaround ([#1935](https://github.com/googleapis/nodejs-firestore/issues/1935)) ([8a4ae5b](https://github.com/googleapis/nodejs-firestore/commit/8a4ae5b07712588bd0deae917d9e17f34f1ebb60))
* Update retry policy to not retry streams that have not made progress receiving documents ([170d05b](https://github.com/googleapis/nodejs-firestore/commit/170d05b1fa6c720d1109506ed3d3feb525c16efe))

## [7.1.0](https://github.com/googleapis/nodejs-firestore/compare/v7.0.0...v7.1.0) (2023-10-11)


### Features

* Sum and Average aggregations ([#1873](https://github.com/googleapis/nodejs-firestore/issues/1873)) ([b9ea514](https://github.com/googleapis/nodejs-firestore/commit/b9ea5143f997dd217200ffa83ed481ad74f558e4))

## [7.0.0](https://github.com/googleapis/nodejs-firestore/compare/v6.8.0...v7.0.0) (2023-10-03)


### ⚠ BREAKING CHANGES

* upgrade to Node 14 ([#1900](https://github.com/googleapis/nodejs-firestore/issues/1900))
* Fix the UpdateData incorrect parameter type issue ([#1887](https://github.com/googleapis/nodejs-firestore/issues/1887))

### Features

* Fix the UpdateData incorrect parameter type issue ([#1887](https://github.com/googleapis/nodejs-firestore/issues/1887)) ([0afadef](https://github.com/googleapis/nodejs-firestore/commit/0afadeff4706e7bff173d8eda7b9681498b570a8))


### Bug Fixes

* Remove DocumentReference from cursor ([#1882](https://github.com/googleapis/nodejs-firestore/issues/1882)) ([da4f8f8](https://github.com/googleapis/nodejs-firestore/commit/da4f8f8b6a35fa93aca0eddc96703d3321a998f6))


### Miscellaneous Chores

* Upgrade to Node 14 ([#1900](https://github.com/googleapis/nodejs-firestore/issues/1900)) ([1f5abb8](https://github.com/googleapis/nodejs-firestore/commit/1f5abb8fbef91e372313b2dbf4d51c7d03ce69b0))

## [6.8.0](https://github.com/googleapis/nodejs-firestore/compare/v6.7.0...v6.8.0) (2023-09-26)


### Features

* Publish proto definitions for SUM/AVG in Firestore ([#1856](https://github.com/googleapis/nodejs-firestore/issues/1856)) ([ac35b37](https://github.com/googleapis/nodejs-firestore/commit/ac35b372faf32f093d83af18d487f1b3f23ee673))


### Bug Fixes

* **deps:** Use protobufjs v7.2.5 ([#1889](https://github.com/googleapis/nodejs-firestore/pull/1889))
* Add tests for multiple inequality support ([#1878](https://github.com/googleapis/nodejs-firestore/issues/1878)) ([8e621d5](https://github.com/googleapis/nodejs-firestore/commit/8e621d580396b7e3bc7e42dad0c63f91e999411f))

## [6.7.0](https://github.com/googleapis/nodejs-firestore/compare/v6.6.1...v6.7.0) (2023-07-20)


### Features

* Expose MultiDb ([#1857](https://github.com/googleapis/nodejs-firestore/issues/1857)) ([1e913db](https://github.com/googleapis/nodejs-firestore/commit/1e913dbec97a6ec9339f641e7590ac4d65c7fd17))


### Bug Fixes

* Resolving issues with MultiDb support ([#1864](https://github.com/googleapis/nodejs-firestore/issues/1864)) ([1af49c1](https://github.com/googleapis/nodejs-firestore/commit/1af49c1a852c6a89a7e21a9e749d667b3b728acf))

## [6.6.1](https://github.com/googleapis/nodejs-firestore/compare/v6.6.0...v6.6.1) (2023-06-01)


### Bug Fixes

* Updated logging in the client pool and client factory to log information about the required transport and actual transport used. ([#1853](https://github.com/googleapis/nodejs-firestore/issues/1853)) ([fe03d02](https://github.com/googleapis/nodejs-firestore/commit/fe03d02efc0d8e4ca90daea97f9e3339074d415d))

## [6.6.0](https://github.com/googleapis/nodejs-firestore/compare/v6.5.0...v6.6.0) (2023-05-18)


### Features

* Add ApiScope and COLLECTION_RECURSIVE query_scope for Firestore index ([#1849](https://github.com/googleapis/nodejs-firestore/issues/1849)) ([b671452](https://github.com/googleapis/nodejs-firestore/commit/b6714528956f3907b1ca4aded372592ef00d34d6))
* Add bloom filter related proto fields ([#1843](https://github.com/googleapis/nodejs-firestore/issues/1843)) ([b64e0c1](https://github.com/googleapis/nodejs-firestore/commit/b64e0c15d0f824a688ff42a8ad940b520f87cf9b))
* Add support for environment variable FIRESTORE_PREFER_REST ([#1848](https://github.com/googleapis/nodejs-firestore/issues/1848)) ([96b1d2a](https://github.com/googleapis/nodejs-firestore/commit/96b1d2ab3248f6c4bb70d1cf735aea827a2a13da))

## [6.5.0](https://github.com/googleapis/nodejs-firestore/compare/v6.4.3...v6.5.0) (2023-03-06)


### Features

* OR Queries ([#1800](https://github.com/googleapis/nodejs-firestore/issues/1800)) ([983a477](https://github.com/googleapis/nodejs-firestore/commit/983a477a6c1a22e4efba0df07e750910028e0afb))


### Bug Fixes

* Enable REST numeric enums ([#1829](https://github.com/googleapis/nodejs-firestore/issues/1829)) ([3737696](https://github.com/googleapis/nodejs-firestore/commit/3737696791b3b77fe9b333323523d8a0abcf5f7b))
* Update generated proto types; fix the update script ([#1825](https://github.com/googleapis/nodejs-firestore/issues/1825)) ([a7e4212](https://github.com/googleapis/nodejs-firestore/commit/a7e42123da1325f526fa5c3a62f1d3dc7a2569c3))

## [6.4.3](https://github.com/googleapis/nodejs-firestore/compare/v6.4.2...v6.4.3) (2023-02-16)


### Bug Fixes

* **deps:** Use google-gax v3.5.3 ([#1818](https://github.com/googleapis/nodejs-firestore/issues/1818)) ([88981ad](https://github.com/googleapis/nodejs-firestore/commit/88981ad8749b0aa38dfe9bcdd4ca5e60d76c8776))
* Emulator support for system tests. Run system tests against the emulator using: `yarn system-test:grpc:emulator` or `yarn system-test:rest:emulator` ([8aedc63](https://github.com/googleapis/nodejs-firestore/commit/8aedc63138827ea03a8dacae4e7bccdf048a2be7))
* Update the depth validation used when writing documents, so that it matches the validation of the Firestore backend. ([789d9eb](https://github.com/googleapis/nodejs-firestore/commit/789d9eb7f54b5329b17ef759f29252d17da47e26))

## [6.4.2](https://github.com/googleapis/nodejs-firestore/compare/v6.4.1...v6.4.2) (2023-01-09)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#1794](https://github.com/googleapis/nodejs-firestore/issues/1794)) ([b1a0313](https://github.com/googleapis/nodejs-firestore/commit/b1a0313498b0c3569bd74ce96fce80b8f9bee1a9))
* Ensure that the client pool consistently uses gRPC clients after transitioning from REST ([3068361](https://github.com/googleapis/nodejs-firestore/commit/306836163ae01221aa9c0076c76093e727c74a08))
* Fix duplicates in Query.stream() with back pressure ([#1806](https://github.com/googleapis/nodejs-firestore/issues/1806)) ([a5b680d](https://github.com/googleapis/nodejs-firestore/commit/a5b680da034d600babb9e3495fb8a7bf019d1315))

## [6.4.1](https://github.com/googleapis/nodejs-firestore/compare/v6.4.0...v6.4.1) (2022-10-17)


### Bug Fixes

* Force use of http by the GAX module when using the GAX fallback and connecting to the emulator ([#1788](https://github.com/googleapis/nodejs-firestore/issues/1788)) ([50747ad](https://github.com/googleapis/nodejs-firestore/commit/50747ad52b19da9ed87282af98eadff660dffb75))

## [6.4.0](https://github.com/googleapis/nodejs-firestore/compare/v6.3.0...v6.4.0) (2022-10-07)


### Features

* Add internal multi-db support ([#1761](https://github.com/googleapis/nodejs-firestore/issues/1761)) ([5ba8df0](https://github.com/googleapis/nodejs-firestore/commit/5ba8df011264b435b53499642e68afd73859f332))
* COUNT Queries ([#1774](https://github.com/googleapis/nodejs-firestore/issues/1774)) ([bcaecb4](https://github.com/googleapis/nodejs-firestore/commit/bcaecb45b7911073bb968542df0267ba81d4462d))


### Bug Fixes

* Remove [@internal](https://github.com/internal) annotation from snapshot_ ([#1728](https://github.com/googleapis/nodejs-firestore/issues/1728)) ([983ab89](https://github.com/googleapis/nodejs-firestore/commit/983ab89387d8c5314680d1520c3bece011ee6a64))

## [6.3.0](https://github.com/googleapis/nodejs-firestore/compare/v6.2.0...v6.3.0) (2022-09-22)


### Features

* Add aggregation query APIs ([#1765](https://github.com/googleapis/nodejs-firestore/issues/1765)) ([18be4d0](https://github.com/googleapis/nodejs-firestore/commit/18be4d0ca3a8e927a883ba6e41a43d19fb2af665))


### Bug Fixes

* Tests will now verify asynchronous termination of underlying steam, and fix related bug. ([#1772](https://github.com/googleapis/nodejs-firestore/issues/1772)) ([a1717ff](https://github.com/googleapis/nodejs-firestore/commit/a1717ff279f1ea9647e28b8e93539bcad9739af0))

## [6.2.0](https://github.com/googleapis/nodejs-firestore/compare/v6.1.0...v6.2.0) (2022-09-13)


### Features

* Use REST ([#1698](https://github.com/googleapis/nodejs-firestore/issues/1698)) ([d85b0e9](https://github.com/googleapis/nodejs-firestore/commit/d85b0e93bcb4a5806490ee66a4443afd4a0a519a))


### Bug Fixes

* Minify proto JSON files ([#1771](https://github.com/googleapis/nodejs-firestore/issues/1771)) ([6393fe7](https://github.com/googleapis/nodejs-firestore/commit/6393fe704097a1214961fa30f01832a64dced775))
* Remove hack in update.sh, and replace with existing pattern for protobuf dependencies. ([#1769](https://github.com/googleapis/nodejs-firestore/issues/1769)) ([6ba6751](https://github.com/googleapis/nodejs-firestore/commit/6ba67517123578a93bb3e0eeb771b610ac3ee397))

## [6.1.0](https://github.com/googleapis/nodejs-firestore/compare/v6.0.0...v6.1.0) (2022-09-07)


### Features

* Accept google-gax instance as a parameter ([#1757](https://github.com/googleapis/nodejs-firestore/issues/1757)) ([ef59a22](https://github.com/googleapis/nodejs-firestore/commit/ef59a22a8abd894d4d3e8b05f075f510de26019f))


### Bug Fixes

* Better support for fallback mode ([#1756](https://github.com/googleapis/nodejs-firestore/issues/1756)) ([a029a6e](https://github.com/googleapis/nodejs-firestore/commit/a029a6e602ef5ed6553ecc7022623fcd81763c7e))
* Don't allow serialization of firestore settings ([#1742](https://github.com/googleapis/nodejs-firestore/issues/1742)) ([fa0ad66](https://github.com/googleapis/nodejs-firestore/commit/fa0ad66bc7e4a0c46f1ae5ca10b2a6f3a528ab6f))
* Pin Typescript to prevent new type checking. ([#1764](https://github.com/googleapis/nodejs-firestore/issues/1764)) ([dd01b27](https://github.com/googleapis/nodejs-firestore/commit/dd01b27022e35ddf6793d71451d0b86f549288fe))
* Update GAX ([#1758](https://github.com/googleapis/nodejs-firestore/issues/1758)) ([1931415](https://github.com/googleapis/nodejs-firestore/commit/19314159a9907dfea8301b41d8050b0d2e783dd8))
* Version 7 of protobufjs broke the update.sh script. Added path to built in protobuf. ([#1766](https://github.com/googleapis/nodejs-firestore/issues/1766)) ([40f1db3](https://github.com/googleapis/nodejs-firestore/commit/40f1db379ba01174471bbb91cdddc88f929c9b46))

## [6.0.0](https://github.com/googleapis/nodejs-firestore/compare/v5.0.2...v6.0.0) (2022-07-22)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1725)

### Features

* Enable RunQueryResponse.done ([#1712](https://github.com/googleapis/nodejs-firestore/issues/1712)) ([0cc549c](https://github.com/googleapis/nodejs-firestore/commit/0cc549c69ccc59e25f8347d6b236f8b9b04dc105))
* Support Logical Termination on RunQueryResponse ([#1741](https://github.com/googleapis/nodejs-firestore/issues/1741)) ([07de28a](https://github.com/googleapis/nodejs-firestore/commit/07de28a04cdea27c5f859091aaf30d16bd8a8c3c))
* support regapic LRO ([#1729](https://github.com/googleapis/nodejs-firestore/issues/1729)) ([b9d8fef](https://github.com/googleapis/nodejs-firestore/commit/b9d8fefc5f927d1f064a79ec0990d256803360cd))
* update client libraries to support Database operations ([#1676](https://github.com/googleapis/nodejs-firestore/issues/1676)) ([533aade](https://github.com/googleapis/nodejs-firestore/commit/533aade3272f07b39bbad2c32a5d9669fde6de53))


### Bug Fixes

* change REST binding for ListDocuments to support root collection ([#1695](https://github.com/googleapis/nodejs-firestore/issues/1695)) ([6185f13](https://github.com/googleapis/nodejs-firestore/commit/6185f13070ff9dda91d7128e3b8a1db7f09914a8))
* **deps:** update dependency protobufjs to v7 ([#1747](https://github.com/googleapis/nodejs-firestore/issues/1747)) ([4e8d33c](https://github.com/googleapis/nodejs-firestore/commit/4e8d33cce418dfb004725ce2271121fd1fdbd9b2))
* split v1 and v1beta1 protos to improve startup time ([#1664](https://github.com/googleapis/nodejs-firestore/issues/1664)) ([f3729cf](https://github.com/googleapis/nodejs-firestore/commit/f3729cf49818b9b929a556e7a8e8a5588b5f2726))


### Build System

* update library to use Node 12 ([#1725](https://github.com/googleapis/nodejs-firestore/issues/1725)) ([0abbd21](https://github.com/googleapis/nodejs-firestore/commit/0abbd215d4574f238b40630361d0836432ead3af))

### [5.0.2](https://www.github.com/googleapis/nodejs-firestore/compare/v5.0.1...v5.0.2) (2022-01-07)


### Bug Fixes

* remove serializer check from Query.isEqual() ([#1654](https://www.github.com/googleapis/nodejs-firestore/issues/1654)) ([f13da18](https://www.github.com/googleapis/nodejs-firestore/commit/f13da184bd2b4f9abfe920f6d9f7af8f2f6f37cb))

### [5.0.1](https://www.github.com/googleapis/nodejs-firestore/compare/v5.0.0...v5.0.1) (2021-12-02)


### Bug Fixes

* save negative zero as doubleValue ([#1639](https://www.github.com/googleapis/nodejs-firestore/issues/1639)) ([a6ba5cc](https://www.github.com/googleapis/nodejs-firestore/commit/a6ba5ccf8b21dbe117e5d8ad5fc1e26d16ed0d1d))

## [5.0.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.15.1...v5.0.0) (2021-11-23)


### ⚠ BREAKING CHANGES

* upgrade Typescript to v4.1.5 and add converter and typing upgrades (#1632)

### Features

* upgrade Typescript to v4.1.5 and add converter and typing upgrades ([#1632](https://www.github.com/googleapis/nodejs-firestore/issues/1632)) ([c293955](https://www.github.com/googleapis/nodejs-firestore/commit/c293955fecd19d12abcb9c441c39ef2664cb011b))

### [4.15.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.15.0...v4.15.1) (2021-09-03)


### Bug Fixes

* **build:** migrate to main branch ([#1601](https://www.github.com/googleapis/nodejs-firestore/issues/1601)) ([6f16b9a](https://www.github.com/googleapis/nodejs-firestore/commit/6f16b9ab9e1365b99498e9df4d56a88db313f9a6))

## [4.15.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.14.2...v4.15.0) (2021-08-26)


### Features

* turns on self-signed JWT feature flag ([#1593](https://www.github.com/googleapis/nodejs-firestore/issues/1593)) ([feee8cc](https://www.github.com/googleapis/nodejs-firestore/commit/feee8cc1b32ab04613f654806ca31477328059ff))


### Bug Fixes

* Handles identical document ids from different collections. ([#1599](https://www.github.com/googleapis/nodejs-firestore/issues/1599)) ([745b608](https://www.github.com/googleapis/nodejs-firestore/commit/745b608a7883a27ccb1c4d1f7800fdcc9a7917b1))

### [4.14.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.14.1...v4.14.2) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#1588](https://www.github.com/googleapis/nodejs-firestore/issues/1588)) ([56150b6](https://www.github.com/googleapis/nodejs-firestore/commit/56150b62f55d765c0c221aed70b999477f867ace))

### [4.14.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.14.0...v4.14.1) (2021-08-02)


### Bug Fixes

* avoid destructuring undefined timestamps ([#1575](https://www.github.com/googleapis/nodejs-firestore/issues/1575)) ([a61a24a](https://www.github.com/googleapis/nodejs-firestore/commit/a61a24a44e70a9693f552a3a39f4579d861fd77f))

## [4.14.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.13.2...v4.14.0) (2021-07-30)


### Features

* add "NON_EMPTY_DEFAULT" FieldBehavior ([#1554](https://www.github.com/googleapis/nodejs-firestore/issues/1554)) ([8d9c503](https://www.github.com/googleapis/nodejs-firestore/commit/8d9c50381eedf6ee8043eed681d03b44262b9820))
* allow UnhandledPromiseRejection errors in BulkWriter if no error handler is specified ([#1572](https://www.github.com/googleapis/nodejs-firestore/issues/1572)) ([e862ac8](https://www.github.com/googleapis/nodejs-firestore/commit/e862ac81cbb99287a226989b184fc2e683defa16))

### [4.13.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.13.1...v4.13.2) (2021-07-14)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#1557](https://www.github.com/googleapis/nodejs-firestore/issues/1557)) ([866bd25](https://www.github.com/googleapis/nodejs-firestore/commit/866bd255d930850956609a0941d4010847c0d196))
* lower batch size on BulkWriter retry to stay under throughput limits ([#1556](https://www.github.com/googleapis/nodejs-firestore/issues/1556)) ([f17a36e](https://www.github.com/googleapis/nodejs-firestore/commit/f17a36e3fa1ce532c1c68ed63ea1845408368469))

### [4.13.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.13.0...v4.13.1) (2021-07-01)


### Bug Fixes

* lower batch size on BulkWriter retry ([#1549](https://www.github.com/googleapis/nodejs-firestore/issues/1549)) ([26d480b](https://www.github.com/googleapis/nodejs-firestore/commit/26d480b4a7fbeb26e99bb23d7aa1fbd4802b738a))

## [4.13.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.12.3...v4.13.0) (2021-06-29)


### Features

* add read-only transactions ([#1541](https://www.github.com/googleapis/nodejs-firestore/issues/1541)) ([ca4241e](https://www.github.com/googleapis/nodejs-firestore/commit/ca4241eb3ee4abb8453b6da0911397187dc18dde))
* retry BatchGetDocuments RPCs that fail with errors ([#1544](https://www.github.com/googleapis/nodejs-firestore/issues/1544)) ([b39dd3c](https://www.github.com/googleapis/nodejs-firestore/commit/b39dd3c65549fb1a651c1722d8ea2c038e152417))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#1546](https://www.github.com/googleapis/nodejs-firestore/issues/1546)) ([a322345](https://www.github.com/googleapis/nodejs-firestore/commit/a32234510d487982b950c88575b9425c531c2d94))
* make request optional in all cases ([#1536](https://www.github.com/googleapis/nodejs-firestore/issues/1536)) ([f6edfc1](https://www.github.com/googleapis/nodejs-firestore/commit/f6edfc181ca39cd307eab6d141db08f377d5cfdf))

### [4.12.3](https://www.github.com/googleapis/nodejs-firestore/compare/v4.12.2...v4.12.3) (2021-06-16)


### Bug Fixes

* bulkWriter: ensure buffered batches are sent after flush ([#1535](https://www.github.com/googleapis/nodejs-firestore/issues/1535)) ([115a134](https://www.github.com/googleapis/nodejs-firestore/commit/115a13407b907887a930b4299ebed042532c3ec2))
* GoogleAdsError missing using generator version after 1.3.0 ([#1526](https://www.github.com/googleapis/nodejs-firestore/issues/1526)) ([adfe68e](https://www.github.com/googleapis/nodejs-firestore/commit/adfe68e194d518369d5b4f89e9be89f948efbdbb))

### [4.12.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.12.1...v4.12.2) (2021-05-27)


### Bug Fixes

* do not leak credentials in Firestore.toJSON() ([#1522](https://www.github.com/googleapis/nodejs-firestore/issues/1522)) ([791310f](https://www.github.com/googleapis/nodejs-firestore/commit/791310ff4b0a828ca6d1f5c0fa03a110972afb1f))

### [4.12.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.12.0...v4.12.1) (2021-05-27)


### Bug Fixes

* do not load google-gax at client startup ([#1517](https://www.github.com/googleapis/nodejs-firestore/issues/1517)) ([2141b08](https://www.github.com/googleapis/nodejs-firestore/commit/2141b0879cbccb1354f9821edcc917b6aa4ff0ab))
* recursive delete: backporting changes from Java ([#1514](https://www.github.com/googleapis/nodejs-firestore/issues/1514)) ([92ea651](https://www.github.com/googleapis/nodejs-firestore/commit/92ea651adc84ba854ae7cd203af231573f885307))
* return results from getPartitions() in order ([#1521](https://www.github.com/googleapis/nodejs-firestore/issues/1521)) ([c8168a8](https://www.github.com/googleapis/nodejs-firestore/commit/c8168a83a864dd77f88b1743adcd3568671702fe))

## [4.12.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.11.1...v4.12.0) (2021-05-19)


### Features

* add `gcf-owl-bot[bot]` to `ignoreAuthors` ([#1506](https://www.github.com/googleapis/nodejs-firestore/issues/1506)) ([6fa1d4d](https://www.github.com/googleapis/nodejs-firestore/commit/6fa1d4da627f17d76cf2d6109765862fd5083e03))
* add Precondition.exists to delete() ([#1505](https://www.github.com/googleapis/nodejs-firestore/issues/1505)) ([28d645b](https://www.github.com/googleapis/nodejs-firestore/commit/28d645bd3e368abde592bfa2611de3378ca175a6))

### [4.11.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.11.0...v4.11.1) (2021-05-13)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#1497](https://www.github.com/googleapis/nodejs-firestore/issues/1497)) ([a8d5f0b](https://www.github.com/googleapis/nodejs-firestore/commit/a8d5f0b1e4503ef9f0d289dbf8ed67a30eb9ed4b))

## [4.11.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.10.1...v4.11.0) (2021-05-05)


### Features

* add recursive delete to Firestore class ([#1494](https://www.github.com/googleapis/nodejs-firestore/issues/1494)) ([6f1e304](https://www.github.com/googleapis/nodejs-firestore/commit/6f1e3040800d0dcc5ed3f9f7cef16fe41804266a))

### [4.10.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.10.0...v4.10.1) (2021-04-28)


### Bug Fixes

* type of QuerySnapshot.docChanges() should be generic ([#1484](https://www.github.com/googleapis/nodejs-firestore/issues/1484)) ([3ed1929](https://www.github.com/googleapis/nodejs-firestore/commit/3ed1929a06b4c019bbb0b1db3e1abcd62ee668d2))

## [4.10.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.9...v4.10.0) (2021-04-15)


### Features

* add buffering layer to BulkWriter ([#1470](https://www.github.com/googleapis/nodejs-firestore/issues/1470)) ([9cc9548](https://www.github.com/googleapis/nodejs-firestore/commit/9cc954849c74199f01e52b24fc7ba045d5b56be4))


### Bug Fixes

* use BigInt when calculating nanos in Timestamp.fromMillis() ([#1468](https://www.github.com/googleapis/nodejs-firestore/issues/1468)) ([cf1949f](https://www.github.com/googleapis/nodejs-firestore/commit/cf1949f99f840d1e34edfa31a223418abdf48372))

### [4.9.9](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.8...v4.9.9) (2021-04-07)


### Bug Fixes

* BulkWriter: apply rate limiter before sending batch ([#1451](https://www.github.com/googleapis/nodejs-firestore/issues/1451)) ([3a50f8b](https://www.github.com/googleapis/nodejs-firestore/commit/3a50f8b524a73d60c6034d4828682b9dc1b49d6e))
* remove floating point rounding error in Timestamp.fromMillis() ([#1464](https://www.github.com/googleapis/nodejs-firestore/issues/1464)) ([97e7281](https://www.github.com/googleapis/nodejs-firestore/commit/97e728188a097760bd52099ec852a716a25b4745))

### [4.9.8](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.7...v4.9.8) (2021-03-15)


### Bug Fixes

* BulkWriter: add backoff on retries ([#1447](https://www.github.com/googleapis/nodejs-firestore/issues/1447)) ([f483083](https://www.github.com/googleapis/nodejs-firestore/commit/f48308344a90d2da48af99a878f0384b7b93f704))

### [4.9.7](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.6...v4.9.7) (2021-03-09)


### Bug Fixes

* export v1 and v1beta1 client class types correctly ([#1445](https://www.github.com/googleapis/nodejs-firestore/issues/1445)) ([6c9319e](https://www.github.com/googleapis/nodejs-firestore/commit/6c9319ed6e2ac0dfe0fcf45853f0b38dc0784686))
* retry BulkWriter deletes that fail with RST_STREAM error ([#1442](https://www.github.com/googleapis/nodejs-firestore/issues/1442)) ([cccf48d](https://www.github.com/googleapis/nodejs-firestore/commit/cccf48de4963403a2e77ba241641a2b77fb993da))

### [4.9.6](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.5...v4.9.6) (2021-03-03)


### Bug Fixes

* set default max ratelimiter throughput to 10k for BulkWriter ([#1439](https://www.github.com/googleapis/nodejs-firestore/issues/1439)) ([c06fb3c](https://www.github.com/googleapis/nodejs-firestore/commit/c06fb3cc32f94c9058ad8e484333e688967d5a8f))

### [4.9.5](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.4...v4.9.5) (2021-03-02)


### Bug Fixes

* add typings to v1 and v1beta in firestore.d.ts ([#1433](https://www.github.com/googleapis/nodejs-firestore/issues/1433)) ([47238a9](https://www.github.com/googleapis/nodejs-firestore/commit/47238a926471dee8bdeaa38bcb5f772c7f20349f))

### [4.9.4](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.3...v4.9.4) (2021-02-15)


### Bug Fixes

* update "protobufjs" to be a dependency ([#1425](https://www.github.com/googleapis/nodejs-firestore/issues/1425)) ([d960fbb](https://www.github.com/googleapis/nodejs-firestore/commit/d960fbb5ca20a7eb9594e8c0b2dfabdb0cb473e3))

### [4.9.3](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.2...v4.9.3) (2021-02-09)


### Bug Fixes

* use `Array.isArray` instead of an `instanceof` check ([#1417](https://www.github.com/googleapis/nodejs-firestore/issues/1417)) ([4a8c3cf](https://www.github.com/googleapis/nodejs-firestore/commit/4a8c3cfcaf57ed600da094ab0275a5f32fb1ea30))

### [4.9.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.1...v4.9.2) (2021-02-05)


### Bug Fixes

* support byte values in Bundles ([#1395](https://www.github.com/googleapis/nodejs-firestore/issues/1395)) ([8cf53a9](https://www.github.com/googleapis/nodejs-firestore/commit/8cf53a92dc13324562ca1a1e841312e43f5c383e))

### [4.9.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.9.0...v4.9.1) (2021-01-26)


### Bug Fixes

* handle ignoreUndefinedProperties in set(merge: true) ([#1396](https://www.github.com/googleapis/nodejs-firestore/issues/1396)) ([d870c9d](https://www.github.com/googleapis/nodejs-firestore/commit/d870c9de75a2c67ffc48d1205a5929df4c57f3cb))

## [4.9.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.8.1...v4.9.0) (2021-01-25)


### Features

* add support for applying default converter in withConverter() ([#1394](https://www.github.com/googleapis/nodejs-firestore/issues/1394)) ([ab057f7](https://www.github.com/googleapis/nodejs-firestore/commit/ab057f7b362a2929ebffa19e570d3e9cd23bc964))
* adds UNORDERED_LIST type ([#1382](https://www.github.com/googleapis/nodejs-firestore/issues/1382)) ([5b43e7b](https://www.github.com/googleapis/nodejs-firestore/commit/5b43e7bcb2ea9c014587c84164f9ba8a0ed05397))
* introduces style enumeration ([#1388](https://www.github.com/googleapis/nodejs-firestore/issues/1388)) ([eb1b4dc](https://www.github.com/googleapis/nodejs-firestore/commit/eb1b4dccf52b09ce395ba2ceabe02e84ee8e4dfd))

### [4.8.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.8.0...v4.8.1) (2020-12-16)


### Bug Fixes

* release clients that received a RST_STREAM error ([#1380](https://www.github.com/googleapis/nodejs-firestore/issues/1380)) ([0296dd6](https://www.github.com/googleapis/nodejs-firestore/commit/0296dd65d135f5b809547c69dec03dcc8f4bd071))

## [4.8.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.7.2...v4.8.0) (2020-12-03)


### Features

* Add support to build Firestore bundles ([#1365](https://www.github.com/googleapis/nodejs-firestore/issues/1365)) ([bae82dd](https://www.github.com/googleapis/nodejs-firestore/commit/bae82dd4438ac03107c221c62dbce8cf6d20a4b1))


### Bug Fixes

* stop using GRPC channels after RST_STREAM ([#1373](https://www.github.com/googleapis/nodejs-firestore/issues/1373)) ([504bb5f](https://www.github.com/googleapis/nodejs-firestore/commit/504bb5f34159238cd9bed3645591e6c6c810452b))

### [4.7.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.7.1...v4.7.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#1368](https://www.github.com/googleapis/nodejs-firestore/issues/1368)) ([3cd29d2](https://www.github.com/googleapis/nodejs-firestore/commit/3cd29d22073cff8d0ca072057c63dfe0a2144841))

### [4.7.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.7.0...v4.7.1) (2020-11-10)


### Bug Fixes

* do not modify options object, use defaultScopes ([#1360](https://www.github.com/googleapis/nodejs-firestore/issues/1360)) ([bd40d3a](https://www.github.com/googleapis/nodejs-firestore/commit/bd40d3ae73cfd0a8e2503fca8d0aa28cb3bbcb86))
* ignore 'undefined' in update() with UpdateMap ([#1363](https://www.github.com/googleapis/nodejs-firestore/issues/1363)) ([9bad804](https://www.github.com/googleapis/nodejs-firestore/commit/9bad804205ab886c1a80351a8e7a7726e3d242ec))
* remove unneeded async signature from BulkWriter.sendBatch() ([#1361](https://www.github.com/googleapis/nodejs-firestore/issues/1361)) ([b5cf449](https://www.github.com/googleapis/nodejs-firestore/commit/b5cf4499724ff41e626a69f2db66be22167a7223))

## [4.7.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.6.1...v4.7.0) (2020-11-05)


### Features

* add ability to specify custom headers for individual RPC types ([#1355](https://www.github.com/googleapis/nodejs-firestore/issues/1355)) ([0900379](https://www.github.com/googleapis/nodejs-firestore/commit/0900379e9853a8c2c7c36418dce8beb7ce966889))

### [4.6.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.6.0...v4.6.1) (2020-11-03)


### Bug Fixes

* create new batch for writes to the same doc ([#1352](https://www.github.com/googleapis/nodejs-firestore/issues/1352)) ([bd5adc3](https://www.github.com/googleapis/nodejs-firestore/commit/bd5adc35ea1f662ee762ac8b9048556e78a54f35))

## [4.6.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.5.0...v4.6.0) (2020-11-03)


### Features

* add onWriteError() and onWriteResult() handlers to BulkWriter ([#1315](https://www.github.com/googleapis/nodejs-firestore/issues/1315)) ([a173f4d](https://www.github.com/googleapis/nodejs-firestore/commit/a173f4defab7a6e750907fcb86431c56fcb3d4cf))


### Bug Fixes

* retry transactions that fail with expired transaction IDs ([#1347](https://www.github.com/googleapis/nodejs-firestore/issues/1347)) ([a18ab50](https://www.github.com/googleapis/nodejs-firestore/commit/a18ab50f3304f1154caaaab9768b736bdb3d8442))

## [4.5.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.4.0...v4.5.0) (2020-10-26)


### Features

* add implicit ordering for startAt(DocumentReference) calls ([#1328](https://www.github.com/googleapis/nodejs-firestore/issues/1328)) ([e9afa38](https://www.github.com/googleapis/nodejs-firestore/commit/e9afa38592b3cc324a8d4685244ee4b249eeedfc))
* add support for Partition API ([#1320](https://www.github.com/googleapis/nodejs-firestore/issues/1320)) ([51961c3](https://www.github.com/googleapis/nodejs-firestore/commit/51961c3b39ff9c532214eb783458f83da98eb485))


### Bug Fixes

* retry PartitionQuery for INTERNAL and DEADLINE_EXCEEDED ([#1336](https://www.github.com/googleapis/nodejs-firestore/issues/1336)) ([fdf5462](https://www.github.com/googleapis/nodejs-firestore/commit/fdf5462917e322cc04bf47ebc337d5a76a4a8b18))
* simplify BulkWriter logic ([#1321](https://www.github.com/googleapis/nodejs-firestore/issues/1321)) ([b493baf](https://www.github.com/googleapis/nodejs-firestore/commit/b493baf44e729fa584b29881ef83f7821967a97b))
* speed up listDocuments pagination ([#1344](https://www.github.com/googleapis/nodejs-firestore/issues/1344)) ([498301d](https://www.github.com/googleapis/nodejs-firestore/commit/498301dc06bdd5a1eccaadd7ffb1b470749488f7))
* Update getAll example in documentation ([#1326](https://www.github.com/googleapis/nodejs-firestore/issues/1326)) ([721fce0](https://www.github.com/googleapis/nodejs-firestore/commit/721fce02440fde39e8a5c2d379b2254079e15201))
* update required field to implement NodeJS.Timeout ([#1338](https://www.github.com/googleapis/nodejs-firestore/issues/1338)) ([6b7371b](https://www.github.com/googleapis/nodejs-firestore/commit/6b7371b4511a7cf039f85519a9d4b8be1bff8930))
* **firestore/v1:** give PartitionQuery retry/timeout config ([#1334](https://www.github.com/googleapis/nodejs-firestore/issues/1334)) ([39a30c2](https://www.github.com/googleapis/nodejs-firestore/commit/39a30c24a54078e53ad9c746ee8ae5a4a9471349))

## [4.4.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.3.0...v4.4.0) (2020-09-29)


### Features

* add starting/max rates to BulkWriterOptions ([#1305](https://www.github.com/googleapis/nodejs-firestore/issues/1305)) ([57dcf1c](https://www.github.com/googleapis/nodejs-firestore/commit/57dcf1c42b406a15ecb960059d67d99a97d42547))


## [4.3.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.2.0...v4.3.0) (2020-09-22)


### Features

* add support for != and not-in queries ([#1292](https://www.github.com/googleapis/nodejs-firestore/issues/1292)) ([786e52f](https://www.github.com/googleapis/nodejs-firestore/commit/786e52f8c8b7b9c6b84ffc988190470a063d5855))


### Bug Fixes

* add capacity logging to RateLimiter ([#1287](https://www.github.com/googleapis/nodejs-firestore/issues/1287)) ([befe625](https://www.github.com/googleapis/nodejs-firestore/commit/befe625f35b7c96e9a90399a1ca71a8a049224ad))
* allow `setLogFunction(null)` ([#1304](https://www.github.com/googleapis/nodejs-firestore/issues/1304)) ([20b1226](https://www.github.com/googleapis/nodejs-firestore/commit/20b122695843bffc106f73c92e112144f0b96070))
* bulkWriter: writing to the same document does not create a new batch ([#1298](https://www.github.com/googleapis/nodejs-firestore/issues/1298)) ([6243d62](https://www.github.com/googleapis/nodejs-firestore/commit/6243d625481e8f9a852b4a3bf8d77ca9cbca4dd3))
* change typings for select() to return `Query<DocumentData>` ([#1303](https://www.github.com/googleapis/nodejs-firestore/issues/1303)) ([b678857](https://www.github.com/googleapis/nodejs-firestore/commit/b678857afcdf14be5d645d7552e5f4aa4183b037))
* correct BulkWriter types in firestore.d.ts ([#1284](https://www.github.com/googleapis/nodejs-firestore/issues/1284)) ([382128b](https://www.github.com/googleapis/nodejs-firestore/commit/382128b83de01cc0f88110393a1271b8d768509e))

## [4.2.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.1.2...v4.2.0) (2020-07-31)


### Features

* allow `Settings.host` to be used when `Settings.servicePath` is set ([#1275](https://www.github.com/googleapis/nodejs-firestore/issues/1275)) ([34d6728](https://www.github.com/googleapis/nodejs-firestore/commit/34d672870f9a4673e990176e4453c4202a1386f9))

### [4.1.2](https://www.github.com/googleapis/nodejs-firestore/compare/v4.1.1...v4.1.2) (2020-07-24)


### Bug Fixes

* add Firestore.bulkWriter to firestore.d.ts ([#1272](https://www.github.com/googleapis/nodejs-firestore/issues/1272)) ([5e7e627](https://www.github.com/googleapis/nodejs-firestore/commit/5e7e62712ab049ce1adcb26213dd13964939bf65))

### [4.1.1](https://www.github.com/googleapis/nodejs-firestore/compare/v4.1.0...v4.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#1257](https://www.github.com/googleapis/nodejs-firestore/issues/1257)) ([2664878](https://www.github.com/googleapis/nodejs-firestore/commit/2664878c0f71d83b0d9e5475d31a9daec1a34eaa))

## [4.1.0](https://www.github.com/googleapis/nodejs-firestore/compare/v4.0.0...v4.1.0) (2020-07-08)


### Features

* Added `Firestore.bulkWriter()`, which performs large scale writes in parallel. By default, BulkWriter throttles writes according to the "500/50/5" rule and retries writes that fail due to contention. ([#1252](https://www.github.com/googleapis/nodejs-firestore/issues/1252)) ([d0c6c4b](https://www.github.com/googleapis/nodejs-firestore/commit/d0c6c4b116e096a1bb59c89de26cedb8cf5f1224))

## [4.0.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.6...v4.0.0) (2020-06-24)


### ⚠ BREAKING CHANGES

* drop Node 8 support (#1006)
* `FirestoreDataConverter.fromFirestore()` is now called with a `QueryDocumentSnapshot` instead of `DocumentData` (#965)

### Features

* add support for serialization to BigInt `(via settings({useBigInt: true})` (#1016)
* add support for set() with SetOptions when using `FirestoreDataConverter` (#1087)
* retry CommitRequests that fail with UNAVAILABLE (#1235)

### Bug Fix
- remove fallback code that periodically invoked CommitRequests inside Transactions on GCF (#1112)
- fixes an error that prevented Firestore from connecting to the Emulator if multiple versions of `@grpc/grpc-js` are installed (#1233)


### [3.8.6](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.5...v3.8.6) (2020-06-19)


### Bug Fixes

* reject all promises with errors ([#1224](https://www.github.com/googleapis/nodejs-firestore/issues/1224)) ([9118521](https://www.github.com/googleapis/nodejs-firestore/commit/9118521a0382fd2d484803a89e590c1bf6d2a3c6))
* restart onSnapshot() listeners that stop receiving updates ([#1220](https://www.github.com/googleapis/nodejs-firestore/issues/1220)) ([49ca641](https://www.github.com/googleapis/nodejs-firestore/commit/49ca641ca5d813923b3d4efd113bfc5aecd32437))

### [3.8.5](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.4...v3.8.5) (2020-06-10)


### Bug Fixes

* fix flaky BulkWriter test ([#1115](https://www.github.com/googleapis/nodejs-firestore/issues/1115)) ([9a24cc0](https://www.github.com/googleapis/nodejs-firestore/commit/9a24cc0c6ee68c1dee7ec64d89dfa7c88375f88d))
* retry ABORTED for non-transactional commits ([#1111](https://www.github.com/googleapis/nodejs-firestore/issues/1111)) ([f175236](https://www.github.com/googleapis/nodejs-firestore/commit/f175236bde2f64365f140b14641f848bd4eb34d9))
* retry Query streams ([#1116](https://www.github.com/googleapis/nodejs-firestore/issues/1116)) ([d7574ea](https://www.github.com/googleapis/nodejs-firestore/commit/d7574ea4ecd807d501243f8435903cfa385bb630))

### [3.8.4](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.3...v3.8.4) (2020-06-01)


### Bug Fixes

* send Authentication header with every emulator request ([#1105](https://www.github.com/googleapis/nodejs-firestore/issues/1105)) ([83f617c](https://www.github.com/googleapis/nodejs-firestore/commit/83f617c753dbcad58eb91be585fd9fcb10480099))

### [3.8.3](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.2...v3.8.3) (2020-05-31)


### Bug Fixes

* return null for 'parent' call on root collection ([#1099](https://www.github.com/googleapis/nodejs-firestore/issues/1099)) ([c5c0b15](https://www.github.com/googleapis/nodejs-firestore/commit/c5c0b157bf32466875ace690216a99371d31b461))

### [3.8.2](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.1...v3.8.2) (2020-05-30)


### Bug Fixes

* authenticate as admin user when ssl:false is set ([#1095](https://www.github.com/googleapis/nodejs-firestore/issues/1095)) ([a178556](https://www.github.com/googleapis/nodejs-firestore/commit/a17855634542bce798f1ffe50d72775647990616)), closes [/github.com/firebase/firebase-js-sdk/issues/3105#issuecomment-635541894](https://www.github.com/googleapis//github.com/firebase/firebase-js-sdk/issues/3105/issues/issuecomment-635541894)

### [3.8.1](https://www.github.com/googleapis/nodejs-firestore/compare/v3.8.0...v3.8.1) (2020-05-27)


### Bug Fixes

* Add tests to check fields used in whereIn should be equality filters ([#1081](https://www.github.com/googleapis/nodejs-firestore/issues/1081)) ([3153dd2](https://www.github.com/googleapis/nodejs-firestore/commit/3153dd296891a983b3a0e78354df3fe106ad44a2))
* capture error stacks across async calls ([#1088](https://www.github.com/googleapis/nodejs-firestore/issues/1088)) ([7acdd7e](https://www.github.com/googleapis/nodejs-firestore/commit/7acdd7e9e0877fd6dbb50539a0a3c1537d30904a))

## [3.8.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.5...v3.8.0) (2020-05-13)


### Features

* add ignoreUndefinedProperties option ([#1062](https://www.github.com/googleapis/nodejs-firestore/issues/1062)) ([de733c8](https://www.github.com/googleapis/nodejs-firestore/commit/de733c821152a32893e7fccf30cdf96a2f8050eb))


### Bug Fixes

* prepare sources for BulkWriter ([#1051](https://www.github.com/googleapis/nodejs-firestore/issues/1051)) ([8c52d47](https://www.github.com/googleapis/nodejs-firestore/commit/8c52d475ae486e2998220947a0b0441d4a95ab49))
* allow running source with ts-node ([#1074](https://www.github.com/googleapis/nodejs-firestore/issues/1074)) ([f66a089](https://www.github.com/googleapis/nodejs-firestore/commit/f66a08978f11915d8662f964867a966ff75f6e96))
* remove type dependency on Moment ([#1063](https://www.github.com/googleapis/nodejs-firestore/issues/1063)) ([30008b0](https://www.github.com/googleapis/nodejs-firestore/commit/30008b093a9872e34a83209e94de3dca09e89fe7))

### [3.7.5](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.4...v3.7.5) (2020-04-25)


### Bug Fixes

* return errors from Query.stream() ([#1046](https://www.github.com/googleapis/nodejs-firestore/issues/1046)) ([4b65fca](https://www.github.com/googleapis/nodejs-firestore/commit/4b65fca3d7aa9618ff944c02f059d08f39b4cac3))

### [3.7.4](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.3...v3.7.4) (2020-04-09)


### Bug Fixes

* validate nested arrays in FieldValue ([#1003](https://www.github.com/googleapis/nodejs-firestore/issues/1003)) ([3497691](https://www.github.com/googleapis/nodejs-firestore/commit/3497691754d8b3b0b17385c34362f74ab8a84feb))

### [3.7.3](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.2...v3.7.3) (2020-03-31)


### Bug Fixes

* support array of references for IN queries ([#993](https://www.github.com/googleapis/nodejs-firestore/issues/993)) ([a6d8fe0](https://www.github.com/googleapis/nodejs-firestore/commit/a6d8fe061fcfe0fde7a4fa023b2ec454e2adb432))

### [3.7.2](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.1...v3.7.2) (2020-03-25)


### Bug Fixes

* fix flaky contention test ([#979](https://www.github.com/googleapis/nodejs-firestore/issues/979)) ([f294998](https://www.github.com/googleapis/nodejs-firestore/commit/f294998daab77a0a51c81265945e28eec34db186))
* fix: use Random Number from `crypto` to generate AutoId ([05b3363](https://www.github.com/googleapis/nodejs-firestore/commit/ce6ea390f2fffcbe796ba1c5b040ee02452e287a))

### [3.7.1](https://www.github.com/googleapis/nodejs-firestore/compare/v3.7.0...v3.7.1) (2020-03-16)


### Bug Fixes

* support Query.stream() as first client operation ([#971](https://www.github.com/googleapis/nodejs-firestore/issues/971)) ([a48017c](https://www.github.com/googleapis/nodejs-firestore/commit/a48017c16dbf7819ea45ea2577365b52721c2475))

## [3.7.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.6.0...v3.7.0) (2020-03-11)


### Features

* **deps:** update to TypeScript 3.8 ([#962](https://www.github.com/googleapis/nodejs-firestore/issues/962)) ([12982cd](https://www.github.com/googleapis/nodejs-firestore/commit/12982cd9ef6b418b6bc9fa303bb804255b9c906a))
* add support for Query.limitToLast() ([#954](https://www.github.com/googleapis/nodejs-firestore/issues/954)) ([c89546f](https://www.github.com/googleapis/nodejs-firestore/commit/c89546f5ae83da3845076aeeffcda75f9b208f5c))

## [3.6.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.5.1...v3.6.0) (2020-03-09)


### Features

* base transaction retries on error codes ([#953](https://www.github.com/googleapis/nodejs-firestore/issues/953)) ([4a30820](https://www.github.com/googleapis/nodejs-firestore/commit/4a30820876db2ec925efd0ac04482fe9c6882813))
* deferred client initialization ([#956](https://www.github.com/googleapis/nodejs-firestore/issues/956)) ([301a7e2](https://www.github.com/googleapis/nodejs-firestore/commit/301a7e2870529fc8b14c91ac08c942dececcc3d6))
* implement Timestamp.valueOf() ([#947](https://www.github.com/googleapis/nodejs-firestore/issues/947)) ([24a96c6](https://www.github.com/googleapis/nodejs-firestore/commit/24a96c65ecbc4df0fc69b9a7f64e9e508fea89b9)), closes [#944](https://www.github.com/googleapis/nodejs-firestore/issues/944)

### [3.5.1](https://www.github.com/googleapis/nodejs-firestore/compare/v3.5.0...v3.5.1) (2020-02-19)


### Bug Fixes

* collectionReference.add() validation ([#925](https://www.github.com/googleapis/nodejs-firestore/issues/925)) ([19c2c75](https://www.github.com/googleapis/nodejs-firestore/commit/19c2c75d86c3aab967d21da16598016185ae360b))
* pass x-goog-request-params header for streaming calls ([#920](https://www.github.com/googleapis/nodejs-firestore/issues/920)) ([cfbe19e](https://www.github.com/googleapis/nodejs-firestore/commit/cfbe19ed4c3cc6bb9ffc7b352de901150b8b9dea))
* propagate converter in QueryOptions.with() ([#931](https://www.github.com/googleapis/nodejs-firestore/issues/931)) ([e35a098](https://www.github.com/googleapis/nodejs-firestore/commit/e35a098621b872b85a3ab70c6592eba75a929de8))
* wait for operations to complete before deleting clients ([#915](https://www.github.com/googleapis/nodejs-firestore/issues/915)) ([1e5d63f](https://www.github.com/googleapis/nodejs-firestore/commit/1e5d63fbc39d9c3e6883e79a55e8a26634cd30c5))

## [3.5.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.4.1...v3.5.0) (2020-02-07)


### Features

* add google-gax status to exports ([#912](https://www.github.com/googleapis/nodejs-firestore/issues/912)) ([7d97384](https://www.github.com/googleapis/nodejs-firestore/commit/7d9738456525b99507b8819d86a8634b0a1d04c3))


### Bug Fixes

* add missing generics on query ([#917](https://www.github.com/googleapis/nodejs-firestore/issues/917)) ([c5b9442](https://www.github.com/googleapis/nodejs-firestore/commit/c5b9442e6620e59e5563ffaf210ad493ec5ed9b2))
* better parameter naming in path template helpers ([aac02f4](https://www.github.com/googleapis/nodejs-firestore/commit/aac02f463ba13c385a6dc5a4d96e281e0801cc93))
* retry streaming methods if initial write errored ([#897](https://www.github.com/googleapis/nodejs-firestore/issues/897)) ([2ec0489](https://www.github.com/googleapis/nodejs-firestore/commit/2ec0489127faea88dca95e6dc169efe6e55d330d))

### [3.4.1](https://www.github.com/googleapis/nodejs-firestore/compare/v3.4.0...v3.4.1) (2020-01-22)


### Bug Fixes

* do not assume all custom objects have constructors ([#893](https://www.github.com/googleapis/nodejs-firestore/issues/893)) ([f668e8e](https://www.github.com/googleapis/nodejs-firestore/commit/f668e8e4880256223c41c2c3183434e81c7f7945))

## [3.4.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.3.4...v3.4.0) (2020-01-15)


### Features

* support serialization of custom objects ([#828](https://www.github.com/googleapis/nodejs-firestore/issues/828)) ([94ddc89](https://www.github.com/googleapis/nodejs-firestore/commit/94ddc897400cafe5a1ee16f3ad0d285411bdd0b2))
* support serialization of Moment.js types ([#879](https://www.github.com/googleapis/nodejs-firestore/issues/879)) ([9169fae](https://www.github.com/googleapis/nodejs-firestore/commit/9169fae692d219b5fb42004a4eb82e5a5919f087))
* allow logging to be disabled ([#880](https://www.github.com/googleapis/nodejs-firestore/issues/880)) ([36d75f6](https://www.github.com/googleapis/nodejs-firestore/commit/36d75f6b75d7ede4656636f1d8bf770eb1cb3a80))


### Bug Fixes

* don't format log message if logging is disabled ([#874](https://www.github.com/googleapis/nodejs-firestore/issues/874)) ([b7b5fc9](https://www.github.com/googleapis/nodejs-firestore/commit/b7b5fc993d4cece92833c95487efe63320537058))
* disable non-transactional retries for Code ABORTED ([#881](https://www.github.com/googleapis/nodejs-firestore/issues/881)) ([82273ec](https://www.github.com/googleapis/nodejs-firestore/commit/82273ec0035b2ddae94d8f12791f8a5c55b6560d))
* manually retry ABORTED reads in transactions ([#883](https://www.github.com/googleapis/nodejs-firestore/issues/883)) ([7562033](https://www.github.com/googleapis/nodejs-firestore/commit/7562033876dc006e77d00b576b2541a7dfd30c66))
* remove ticks from code comments ([#885](https://www.github.com/googleapis/nodejs-firestore/issues/885)) ([b2740ed](https://www.github.com/googleapis/nodejs-firestore/commit/b2740ed4fb0e7c34fd407e3de4f47f03067171cb))

### [3.3.4](https://www.github.com/googleapis/nodejs-firestore/compare/v3.3.3...v3.3.4) (2020-01-12)


### Bug Fixes

* do not release client before retry ([#870](https://www.github.com/googleapis/nodejs-firestore/issues/870)) ([47f7ab5](https://www.github.com/googleapis/nodejs-firestore/commit/47f7ab52f9133064785754ee924d9f8736853eba))
* proper routing headers ([43472f6](https://www.github.com/googleapis/nodejs-firestore/commit/43472f6bd51a22a5ee27d7fc0f88a9dd97c22336))
* remove redundant log line ([#868](https://www.github.com/googleapis/nodejs-firestore/issues/868)) ([af3196f](https://www.github.com/googleapis/nodejs-firestore/commit/af3196fe8da2018e0a9842f4f62588ce2c740597))

### [3.3.3](https://www.github.com/googleapis/nodejs-firestore/compare/v3.3.2...v3.3.3) (2020-01-08)


### Bug Fixes

* support Objects created with Object.create({}) ([#842](https://www.github.com/googleapis/nodejs-firestore/issues/842)) ([a85f0c3](https://www.github.com/googleapis/nodejs-firestore/commit/a85f0c32eca5d8cf677d621a8ff326623ad5266e))
* use rejected Promise for terminate() ([#845](https://www.github.com/googleapis/nodejs-firestore/issues/845)) ([f2c4d91](https://www.github.com/googleapis/nodejs-firestore/commit/f2c4d911077c8e5b7713263fc8b2c21bbd50ca11))

### [3.3.2](https://www.github.com/googleapis/nodejs-firestore/compare/v3.3.1...v3.3.2) (2020-01-06)


### Bug Fixes

* add quotes to field name to avoid ambiguity ([#860](https://www.github.com/googleapis/nodejs-firestore/issues/860)) ([8caee71](https://www.github.com/googleapis/nodejs-firestore/commit/8caee71f6105e82faf3f6334e69ed5890f977a3a))

### [3.3.1](https://www.github.com/googleapis/nodejs-firestore/compare/v3.3.0...v3.3.1) (2020-01-06)


### Bug Fixes

* don't recreate instances when client is idle ([0aa2a8b](https://www.github.com/googleapis/nodejs-firestore/commit/0aa2a8b8d0c76e0cfc6d29c37d143cc9c0b45fec))

## [3.3.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.2.0...v3.3.0) (2020-01-03)


### Features

* add Symbol.asyncInterator to Query.stream() ([#843](https://www.github.com/googleapis/nodejs-firestore/issues/843)) ([68795c4](https://www.github.com/googleapis/nodejs-firestore/commit/68795c43ae9ef6b286650228746c7c16f59347f7))
* use GAX retry config for streams ([#847](https://www.github.com/googleapis/nodejs-firestore/issues/847)) ([218a4c6](https://www.github.com/googleapis/nodejs-firestore/commit/218a4c65afcc55158aac45b98a4ccb28b88c00a1))


### Bug Fixes

* increase test timeout ([#846](https://www.github.com/googleapis/nodejs-firestore/issues/846)) ([b94c367](https://www.github.com/googleapis/nodejs-firestore/commit/b94c367e9655f8a6a3553610ebc655877be502ec))
* retry writes that fail with status code ABORTED ([#854](https://www.github.com/googleapis/nodejs-firestore/issues/854)) ([96f085f](https://www.github.com/googleapis/nodejs-firestore/commit/96f085f3df7c8e6e20dbffb14ebf6ebb533fc036))

## [3.2.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.1.0...v3.2.0) (2019-12-30)


### Features

* allow specifying how many idle GRPC channels to keep ([#837](https://www.github.com/googleapis/nodejs-firestore/issues/837)) ([37e93da](https://www.github.com/googleapis/nodejs-firestore/commit/37e93da689f985b6b0f30645435b12179513eb64))


### Bug Fixes

* reduce overhead for listDocuments()/listCollections() ([#838](https://www.github.com/googleapis/nodejs-firestore/issues/838)) ([5c870e6](https://www.github.com/googleapis/nodejs-firestore/commit/5c870e615e4774d3d50fc33c17b5da45dcacea4f))

## [3.1.0](https://www.github.com/googleapis/nodejs-firestore/compare/v3.0.0...v3.1.0) (2019-12-19)


### Features

* add ability to close channels ([#824](https://www.github.com/googleapis/nodejs-firestore/issues/824)) ([9ef582a](https://www.github.com/googleapis/nodejs-firestore/commit/9ef582aa0508a3d02fb036f741c8c51e5ff4307c))


### Bug Fixes

* **deps:** update dependency deep-equal to v2 ([#821](https://www.github.com/googleapis/nodejs-firestore/issues/821)) ([25472e1](https://www.github.com/googleapis/nodejs-firestore/commit/25472e11a0e1a4a5e1931b1652d125f9c8cabf11))

## [3.0.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.6.1...v3.0.0) (2019-12-15)


### ⚠ BREAKING CHANGES

* convert Gapic client to TypeScript (#805)
* remove deprecated timestampInSnapshots setting (#808)

### Features

* convert Gapic client to TypeScript ([#805](https://www.github.com/googleapis/nodejs-firestore/issues/805)) ([5000b2d](https://www.github.com/googleapis/nodejs-firestore/commit/5000b2d4b5c528b66c5a71db343c0e4163d5d8f7))
* remove deprecated timestampInSnapshots setting ([#808](https://www.github.com/googleapis/nodejs-firestore/issues/808)) ([f37fffc](https://www.github.com/googleapis/nodejs-firestore/commit/f37fffc44fb1ddc8177bd24dfb44d830221e2479))


### Bug Fixes

* close GRPC channel when we dispose of clients ([#779](https://www.github.com/googleapis/nodejs-firestore/issues/779)) ([22ef0d0](https://www.github.com/googleapis/nodejs-firestore/commit/22ef0d0229569f0d97ff908b5866264a8de2ca78))

### [2.6.1](https://www.github.com/googleapis/nodejs-firestore/compare/v2.6.0...v2.6.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([0d4e558](https://www.github.com/googleapis/nodejs-firestore/commit/0d4e558be4111b3524aa3b855b14e63cb486d2c8))
* **docs:** snippets are now replaced in jsdoc comments ([#795](https://www.github.com/googleapis/nodejs-firestore/issues/795)) ([396bebb](https://www.github.com/googleapis/nodejs-firestore/commit/396bebbe21b4df16b3017d144fd9e505eb99feda))

## [2.6.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.5.0...v2.6.0) (2019-11-01)


### Features

* add IN queries support  ([#715](https://www.github.com/googleapis/nodejs-firestore/issues/715)) ([00bdf8f](https://www.github.com/googleapis/nodejs-firestore/commit/00bdf8ff81f658c4534adea8d2010a1f68195f45))

## [2.5.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.4.0...v2.5.0) (2019-10-22)


### Features

* introduces ARRAY_CONTAINS_ANY and IN to operator enum ([2c8869d](https://www.github.com/googleapis/nodejs-firestore/commit/2c8869d23ad1aef024273b640579624cde97849f))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#786](https://www.github.com/googleapis/nodejs-firestore/issues/786)) ([e5763ba](https://www.github.com/googleapis/nodejs-firestore/commit/e5763baadf7cc424620913a09ca0ed6af4a0971a))

## [2.4.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.3.0...v2.4.0) (2019-10-03)


### Bug Fixes

* provide custom error for FieldValue subclasses ([#771](https://www.github.com/googleapis/nodejs-firestore/issues/771)) ([29c3e9b](https://www.github.com/googleapis/nodejs-firestore/commit/29c3e9b))
* use compatible version of google-gax ([b0c89c5](https://www.github.com/googleapis/nodejs-firestore/commit/b0c89c5))


### Features

* ability to specify the Collection Group query scope in the V1 Admin API ([#762](https://www.github.com/googleapis/nodejs-firestore/issues/762)) ([b16cd40](https://www.github.com/googleapis/nodejs-firestore/commit/b16cd40))

## [2.3.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.9...v2.3.0) (2019-09-09)


### Features

* load protos from JSON, grpc-fallback support ([#749](https://www.github.com/googleapis/nodejs-firestore/issues/749)) ([6cb9d68](https://www.github.com/googleapis/nodejs-firestore/commit/6cb9d68))

### [2.2.9](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.8...v2.2.9) (2019-08-30)


### Bug Fixes

* retrying 13 INTERNAL RPC errors ([#742](https://www.github.com/googleapis/nodejs-firestore/issues/742)) ([431edcb](https://www.github.com/googleapis/nodejs-firestore/commit/431edcb))

### [2.2.8](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.7...v2.2.8) (2019-08-22)


### Bug Fixes

* serialization does not work with null objects ([#736](https://www.github.com/googleapis/nodejs-firestore/issues/736)) ([870d6a7](https://www.github.com/googleapis/nodejs-firestore/commit/870d6a7))

### [2.2.7](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.6...v2.2.7) (2019-08-16)


### Bug Fixes

* **deps:** use the latest extend ([#728](https://www.github.com/googleapis/nodejs-firestore/issues/728)) ([425bf3d](https://www.github.com/googleapis/nodejs-firestore/commit/425bf3d))
* add logging to client pool ([#733](https://www.github.com/googleapis/nodejs-firestore/issues/733)) ([a4efa09](https://www.github.com/googleapis/nodejs-firestore/commit/a4efa09))

### [2.2.6](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.5...v2.2.6) (2019-08-02)


### Bug Fixes

*  allow calls with no request, add JSON proto ([#725](https://www.github.com/googleapis/nodejs-firestore/issues/725)) ([8b0624b](https://www.github.com/googleapis/nodejs-firestore/commit/8b0624b))

### [2.2.5](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.4...v2.2.5) (2019-08-02)


### Bug Fixes

* Better error for Collection Group Queries with documentId() cursors ([#720](https://www.github.com/googleapis/nodejs-firestore/issues/720)) ([169286d](https://www.github.com/googleapis/nodejs-firestore/commit/169286d))

### [2.2.4](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.3...v2.2.4) (2019-07-08)


### Bug Fixes

* Don't re-open streams on 'error' and 'end' ([#713](https://www.github.com/googleapis/nodejs-firestore/issues/713)) ([104a965](https://www.github.com/googleapis/nodejs-firestore/commit/104a965))

### [2.2.3](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.2...v2.2.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#701](https://www.github.com/googleapis/nodejs-firestore/issues/701)) ([d7c89a8](https://www.github.com/googleapis/nodejs-firestore/commit/d7c89a8))
* Relax validation of FIRESTORE_EMULATOR_HOST in settings() ([#703](https://www.github.com/googleapis/nodejs-firestore/issues/703)) ([daff9de](https://www.github.com/googleapis/nodejs-firestore/commit/daff9de))

### [2.2.2](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.1...v2.2.2) (2019-06-25)


### Bug Fixes

* Support non-ISO-8859-1 Collection Names in Queries ([fc6f839](https://www.github.com/googleapis/nodejs-firestore/commit/fc6f839))
* Unset servicePath when FIRESTORE_EMULATOR_HOST is set ([#696](https://www.github.com/googleapis/nodejs-firestore/issues/696)) ([5a19931](https://www.github.com/googleapis/nodejs-firestore/commit/5a19931))
* Use new stream rather than pipe ([#700](https://www.github.com/googleapis/nodejs-firestore/issues/700)) ([0370e03](https://www.github.com/googleapis/nodejs-firestore/commit/0370e03))

### [2.2.1](https://www.github.com/googleapis/nodejs-firestore/compare/v2.2.0...v2.2.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#689](https://www.github.com/googleapis/nodejs-firestore/issues/689)) ([58acc46](https://www.github.com/googleapis/nodejs-firestore/commit/58acc46))

## [2.2.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.1.1...v2.2.0) (2019-06-06)


### Bug Fixes

* Split settings.host into servicePath and port ([#684](https://www.github.com/googleapis/nodejs-firestore/issues/684)) ([b2cbca5](https://www.github.com/googleapis/nodejs-firestore/commit/b2cbca5))
* Store large numbers as doubles ([#683](https://www.github.com/googleapis/nodejs-firestore/issues/683)) ([607b3c0](https://www.github.com/googleapis/nodejs-firestore/commit/607b3c0))


### Features

* support apiEndpoint override in client constructor ([368bc5c](https://www.github.com/googleapis/nodejs-firestore/commit/368bc5c))
* Support host, ssl and FIRESTORE_EMULATOR_HOST for endpoint configuration ([#680](https://www.github.com/googleapis/nodejs-firestore/issues/680)) ([d15f29d](https://www.github.com/googleapis/nodejs-firestore/commit/d15f29d))

## [2.1.1](https://www.github.com/googleapis/nodejs-firestore/compare/v2.1.0...v2.1.1) (2019-05-30)


### Dependencies
- deps: Pin @gprc/grpc-js to 0.4.0 ([#668](https://github.com/googleapis/nodejs-firestore/pull/668))


 ### Internal / Testing Changes
- build: remove verbose logging from test scripts ([#665](https://github.com/googleapis/nodejs-firestore/pull/665))
- build: ignore proto files in test coverage ([#664](https://github.com/googleapis/nodejs-firestore/pull/664))

## [2.1.0](https://www.github.com/googleapis/nodejs-firestore/compare/v2.0.0...v2.1.0) (2019-05-28)


### Bug Fixes

* Add overloads for doc() and doc(id:string) ([#662](https://www.github.com/googleapis/nodejs-firestore/issues/662)) ([cb189e9](https://www.github.com/googleapis/nodejs-firestore/commit/cb189e9))
* retry on abort and limit retry count to 10 ([#655](https://www.github.com/googleapis/nodejs-firestore/issues/655)) ([9e97656](https://www.github.com/googleapis/nodejs-firestore/commit/9e97656))


### Features

* Support listDocuments()/listCollections() via the Firestore Emulator ([#654](https://www.github.com/googleapis/nodejs-firestore/issues/654)) ([eaf5a4e](https://www.github.com/googleapis/nodejs-firestore/commit/eaf5a4e))

## [2.0.0](https://www.github.com/googleapis/nodejs-firestore/compare/v1.3.0...v2.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* library now requires Node >= 8.13.0
* **deprecation:** remove legacy support for array arguments (#625)
* **deprecation:** remove deprecated getCollections() (#624)
* upgrade engines field to >=8.10.0 (#608)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#606](https://www.github.com/googleapis/nodejs-firestore/issues/606)) ([a637a68](https://www.github.com/googleapis/nodejs-firestore/commit/a637a68))
* Fix client pooling for long-lived listens ([#614](https://www.github.com/googleapis/nodejs-firestore/issues/614)) ([479bc9c](https://www.github.com/googleapis/nodejs-firestore/commit/479bc9c)), closes [firebase/firebase-admin-node#499](https://www.github.com/googleapis/nodejs-firestore/issues/499) [#256](https://www.github.com/googleapis/nodejs-firestore/issues/256)
* **deps:** update dependency google-gax to v1 ([#615](https://www.github.com/googleapis/nodejs-firestore/issues/615)) ([687a353](https://www.github.com/googleapis/nodejs-firestore/commit/687a353))
* run the generator ([#616](https://www.github.com/googleapis/nodejs-firestore/issues/616)) ([92b0add](https://www.github.com/googleapis/nodejs-firestore/commit/92b0add))
* **docs:** revert jsdoc and pin to 3.5.5 ([#627](https://www.github.com/googleapis/nodejs-firestore/issues/627)) ([e22f9c6](https://www.github.com/googleapis/nodejs-firestore/commit/e22f9c6))
* Support more than 100 long-lived streams ([#623](https://www.github.com/googleapis/nodejs-firestore/issues/623)) ([9474e3f](https://www.github.com/googleapis/nodejs-firestore/commit/9474e3f))


### Build System

* upgrade engines field to >=8.10.0 ([#608](https://www.github.com/googleapis/nodejs-firestore/issues/608)) ([32485f4](https://www.github.com/googleapis/nodejs-firestore/commit/32485f4))
* upgrade engines field to >=8.13.0 ([#636](https://www.github.com/googleapis/nodejs-firestore/issues/636)) ([a5db7d8](https://www.github.com/googleapis/nodejs-firestore/commit/a5db7d8))


### Code Refactoring

* **deprecation:** remove deprecated getCollections() ([#624](https://www.github.com/googleapis/nodejs-firestore/issues/624)) ([43ac9c6](https://www.github.com/googleapis/nodejs-firestore/commit/43ac9c6))
* **deprecation:** remove legacy support for array arguments ([#625](https://www.github.com/googleapis/nodejs-firestore/issues/625)) ([54dd405](https://www.github.com/googleapis/nodejs-firestore/commit/54dd405))

## v1.3.0

04-26-2019 16:54 PDT

### New Features
- feature: Adding CollectionGroup queries ([#578](https://github.com/googleapis/nodejs-firestore/pull/578))([#595](https://github.com/googleapis/nodejs-firestore/pull/595))

### Dependencies
- chore(deps): update dependency nyc to v14 ([#600](https://github.com/googleapis/nodejs-firestore/pull/600))
- chore(deps): update dependency typescript to ~3.4.0
- docs: add .readme-metadata.json and generate new README.md 

### Documentation
- docs: Add example for Precondition ([#601](https://github.com/googleapis/nodejs-firestore/pull/601))

## v1.2.0

03-21-2019 14:17 PDT

### New Features
- feature: Release the V1 Admin API ([#590](https://github.com/googleapis/nodejs-firestore/pull/590))
  The Firestore Node SDK now exposes the Firestore Admin API (via `v1.FirebaseAdminClient()`).

### Implementation Changes
- deps/refactor: Removing @google-cloud/projectify ([#564](https://github.com/googleapis/nodejs-firestore/pull/564))

### Dependencies
- chore(deps): update dependency hard-rejection to v2

### Documentation
- fix(docs): add namespaces so docs are generated ([#591](https://github.com/googleapis/nodejs-firestore/pull/591))
- docs: fix typo in doc strings ([#585](https://github.com/googleapis/nodejs-firestore/pull/585))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#586](https://github.com/googleapis/nodejs-firestore/pull/586))
- build: use per-repo publish token ([#582](https://github.com/googleapis/nodejs-firestore/pull/582))
- refactor: update json import paths ([#580](https://github.com/googleapis/nodejs-firestore/pull/580))

## v1.1.0

03-10-2019 20:09 PDT

### New Features
- feature: Added `FieldValue.increment()`, which can be used in `create()`, `update()` and `set(..., {merge:true})` to 
  increment or decrement numeric field values safely without transactions ([#444](https://github.com/googleapis/nodejs-firestore/pull/444))

### Implementation Changes
- fix: Allow async functions ([#576](https://github.com/googleapis/nodejs-firestore/pull/576))
- fix: Don't call stream.end() on Watch ended by server ([#565](https://github.com/googleapis/nodejs-firestore/pull/565))

### Internal / Testing Changes
- refactor: async/await to test/order.ts ([#566](https://github.com/googleapis/nodejs-firestore/pull/566))
- build: Add docuploader credentials to node publish jobs ([#572](https://github.com/googleapis/nodejs-firestore/pull/572))
- build: update release config ([#570](https://github.com/googleapis/nodejs-firestore/pull/570))
- build: use node10 to run samples-test, system-test etc ([#571](https://github.com/googleapis/nodejs-firestore/pull/571))

## v1.0.2

03-04-2019 13:32 PST

### Implementation Changes

- fix: throw on invalid credentials ([#548](https://github.com/googleapis/nodejs-firestore/pull/548))

### Dependencies

- fix(deps): update dependency google-gax to ^0.25.0 ([#535](https://github.com/googleapis/nodejs-firestore/pull/535))
- chore(deps): update dependency mocha to v6
- chore(deps): update dependency duplexify to v4 ([#539](https://github.com/googleapis/nodejs-firestore/pull/539))

### Documentation

- docs: update comments on protos ([#559](https://github.com/googleapis/nodejs-firestore/pull/559))
- docs: update API doc comments ([#557](https://github.com/googleapis/nodejs-firestore/pull/557))
- docs: update links in contrib guide ([#550](https://github.com/googleapis/nodejs-firestore/pull/550))
- docs: add lint/fix example to contributing guide ([#541](https://github.com/googleapis/nodejs-firestore/pull/541))
- docs: fix example comments ([#540](https://github.com/googleapis/nodejs-firestore/pull/540))
- doc: show GA message in README.md ([#536](https://github.com/googleapis/nodejs-firestore/pull/536))
- Add note about Datastore mode ([#552](https://github.com/googleapis/nodejs-firestore/pull/552))
- chore: move CONTRIBUTING.md to root ([#543](https://github.com/googleapis/nodejs-firestore/pull/543))
- docs: update contributing path in README ([#544](https://github.com/googleapis/nodejs-firestore/pull/544))

### Internal / Testing Changes

- refactor(typescript): enable noImplicitAny ([#553](https://github.com/googleapis/nodejs-firestore/pull/553))
- chore: update array types ([#555](https://github.com/googleapis/nodejs-firestore/pull/555))
- Finish TypeScript Migration ([#512](https://github.com/googleapis/nodejs-firestore/pull/512))
- refactor: improve generated code style. ([#538](https://github.com/googleapis/nodejs-firestore/pull/538))
- Remove unhandled Promise rejection warning ([#556](https://github.com/googleapis/nodejs-firestore/pull/556))
- build: use linkinator for docs test ([#549](https://github.com/googleapis/nodejs-firestore/pull/549))
- build: create docs test npm scripts ([#547](https://github.com/googleapis/nodejs-firestore/pull/547))
- build: test using @grpc/grpc-js in CI ([#546](https://github.com/googleapis/nodejs-firestore/pull/546))

## v1.0.1

01-29-2019 14:02 PST

# Documentation

- doc: update README.md to show this library as GA ([#532](https://github.com/googleapis/nodejs-firestore/pull/532))
- fix(samples): constructor doesn't need project or cred options ([#533](https://github.com/googleapis/nodejs-firestore/pull/533))

## v1.0.0

01-29-2019 12:12 PST

This is the Firestore Node.js Client Library GA release.

## v0.21.0

01-25-2019 12:21 PST

This release brings in google-gax update to 0.24.0 which had its dependency google-auth-library updated to 3.0.0^ that swaps out axios in favour of gaxios and addresses an issue using the library behind a proxy (https://github.com/googleapis/nodejs-firestore/issues/493).

### Dependencies
- chore(deps): update dependency ts-node to v8 ([#526](https://github.com/googleapis/nodejs-firestore/pull/526))
- fix(deps): update dependency google-gax to ^0.24.0 ([#529](https://github.com/googleapis/nodejs-firestore/pull/529))

### Documentation
- build: ignore googleapis.com in doc link check ([#527](https://github.com/googleapis/nodejs-firestore/pull/527))
- docs: fix import links in the jsdocs ([#524](https://github.com/googleapis/nodejs-firestore/pull/524))

### Internal / Testing Changes
- chore: update year in the license headers. ([#523](https://github.com/googleapis/nodejs-firestore/pull/523))

## v0.20.0

01-16-2019 13:14 PST

#### BREAKING: The `timestampsInSnapshots` default has changed to true.
The `timestampsInSnapshots` setting is now enabled by default so timestamp
fields read from a `DocumentSnapshot` will be returned as `Timestamp` objects
instead of `Date`. Any code expecting to receive a `Date` object must be
updated.

#### DEPRECATED: `Firestore.v1beta1` replaced by `Firestore.v1`
If you are currently using `Firestore.v1beta1.FirestoreClient`, you must switch
to `Firestore.v1.FirestoreClient`. No other changes should be required as the
API is 100% identical.

### Bug Fixes
- fix: getAll function signature to allow array destructuring ([#515](https://github.com/googleapis/nodejs-firestore/pull/515))
- fix: update grpc retry config ([#464](https://github.com/googleapis/nodejs-firestore/pull/464))

### New Features
- feat: update to v1 protos ([#516](https://github.com/googleapis/nodejs-firestore/pull/516))
- feat: add additional field transform types ([#521](https://github.com/googleapis/nodejs-firestore/pull/521))

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#518](https://github.com/googleapis/nodejs-firestore/pull/518))

### Documentation
- fix(docs): remove unused long running operations types
- docs: elaborate on QuerySnapshot.forEach ([#480](https://github.com/googleapis/nodejs-firestore/pull/480))
- docs: update doc writetime ([#475](https://github.com/googleapis/nodejs-firestore/pull/475))
- docs: Fix example for writeTime ([#474](https://github.com/googleapis/nodejs-firestore/pull/474))
- chore: update license file ([#473](https://github.com/googleapis/nodejs-firestore/pull/473))
- docs: update readme badges ([#470](https://github.com/googleapis/nodejs-firestore/pull/470))

### Internal / Testing Changes
- build: check broken links in generated docs ([#511](https://github.com/googleapis/nodejs-firestore/pull/511))
- chore(build): inject yoshi automation key ([#492](https://github.com/googleapis/nodejs-firestore/pull/492))
- chore: update nyc and eslint configs ([#491](https://github.com/googleapis/nodejs-firestore/pull/491))
- chore: fix publish.sh permission +x ([#489](https://github.com/googleapis/nodejs-firestore/pull/489))
- fix(build): fix Kokoro release script ([#488](https://github.com/googleapis/nodejs-firestore/pull/488))
- build: add Kokoro configs for autorelease ([#487](https://github.com/googleapis/nodejs-firestore/pull/487))
- chore: add synth.metadata ([#485](https://github.com/googleapis/nodejs-firestore/pull/485))
- chore: always nyc report before calling codecov ([#482](https://github.com/googleapis/nodejs-firestore/pull/482))
- chore: nyc ignore build/test by default ([#479](https://github.com/googleapis/nodejs-firestore/pull/479))
- chore(build): update the prettier config ([#476](https://github.com/googleapis/nodejs-firestore/pull/476))
- chore(deps): update dependency typescript to ~3.2.0 ([#467](https://github.com/googleapis/nodejs-firestore/pull/467))
- fix(build): fix system key decryption ([#468](https://github.com/googleapis/nodejs-firestore/pull/468))
- Adding array-contains to error message ([#465](https://github.com/googleapis/nodejs-firestore/pull/465))

## v0.17.0

### Implementation Changes
- Regenerate library with synth.py customizations ([#345](https://github.com/googleapis/nodejs-firestore/pull/345))
  - contains some documentation and internal timeout changes
- Converting backoff.js to TypeScript ([#328](https://github.com/googleapis/nodejs-firestore/pull/328))
- Making .dotChanges a method ([#324](https://github.com/googleapis/nodejs-firestore/pull/324))

### Dependencies
- chore(deps): update dependency nyc to v13 ([#329](https://github.com/googleapis/nodejs-firestore/pull/329))
- fix(deps): update dependency google-gax to ^0.19.0 ([#325](https://github.com/googleapis/nodejs-firestore/pull/325))

### Documentation
- Fix DocumentReference.get() docs ([#332](https://github.com/googleapis/nodejs-firestore/pull/332))

### Internal / Testing Changes
- Retry npm install in CI ([#341](https://github.com/googleapis/nodejs-firestore/pull/341))
- make synth.py generate library to ./dev ([#337](https://github.com/googleapis/nodejs-firestore/pull/337))
- Revert "Re-generate library using /synth.py ([#331](https://github.com/googleapis/nodejs-firestore/pull/331))" ([#334](https://github.com/googleapis/nodejs-firestore/pull/334))
- Re-generate library using /synth.py ([#331](https://github.com/googleapis/nodejs-firestore/pull/331))
